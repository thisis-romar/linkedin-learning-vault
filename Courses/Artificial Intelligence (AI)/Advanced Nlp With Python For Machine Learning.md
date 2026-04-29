---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-nlp-with-python-for-machine-learning-24079681
url: "https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681"
level: Advanced
updated: 5/29/2024
learners: 104232
skills:
  - Python (Programming Language)
  - Machine Learning
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
exercise_files: true
github: "https://github.com/LinkedInLearning/advanced-nlp-with-python-for-machine-learning-3807097"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGTubKeur8sMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008930353?e=2147483647&amp;v=beta&amp;t=PZUtYX6-bOg6xbI_5l58ZD_rgUmE9NdkRfkR2tgE86s"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Natural Language Processing]]'
next_courses:
  - '[[Hands-On Natural Language Processing]]'
path_nav: '[{"path":"Advance Your Skills in Natural Language Processing","position":1,"total":6,"prev":null,"next":"Hands-On Natural Language Processing"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/python-programming-language
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20Nlp%20With%20Python%20For%20Machine%20Learning.md)

![Advanced Nlp With Python For Machine Learning](https://media.licdn.com/dms/image/v2/D560DAQGTubKeur8sMA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008930353?e=2147483647&amp;v=beta&amp;t=PZUtYX6-bOg6xbI_5l58ZD_rgUmE9NdkRfkR2tgE86s)

# Advanced Nlp With Python For Machine Learning

> This course is for anyone who wants to learn more advanced NLP methods. Instructor Gwendolyn Stripling, PhD, begins with a look at the fundamental concepts and principles of NLP, including the evolution and significance of natural language processing. She then reviews some NLP and Python basics—and introduces the NLP library spaCy—before jumping into more modern techniques and advancements in natu

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681) | Advanced | 104K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - Elevate Your NLP expertise using Python and machine learning
  - What you should know
  - How to use the challenge exercise files
- [**1. Introduction to NLP Libraries**](#1-introduction-to-nlp-libraries) (3 videos)
  - Overview of natural language processing
  - Evolution of natural language processing
  - Natural language processing libraries
- [**2. Review NLP and Python Basics**](#2-review-nlp-and-python-basics) (3 videos)
  - Introduction to spaCy
  - Challenge: Build a spaCy processing pipeline
  - Solution: Build a processing pipeline
- [**3. Using spaCy for Customer Feedback Analysis**](#3-using-spacy-for-customer-feedback-analysis) (4 videos)
  - Analyze customer feedback using spaCy
  - The spaCy processing pipeline
  - Challenge: Analyze customer feedback
  - Solution: Analyze customer feedback
- [**4. Modern NLP: Transformers and Large Language Models**](#4-modern-nlp-transformers-and-large-language-models) (5 videos)
  - Modern natural language processing
  - Transformers neural networks
  - Large language models: BERT, GPT
  - Challenge: Sentiment analysis using DistilBERT
  - Solution: Sentiment analysis using DistilBERT
- [**5. Methods That Improve LLM Performance**](#5-methods-that-improve-llm-performance) (7 videos)
  - Methods that improve LLM performance
  - Supervised fine-tuning
  - Fine-tuning methods
  - Retrieval-augmented generation (RAG)
  - Parameter-efficient fine-tuning (PEFT)
  - Challenge: Parameter-efficient fine-tuning with LoRa
  - Solution: Parameter-efficient fine-tuning with LoRa
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Elevate Your NLP expertise using Python and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980&t=0)** - [Gwendolyn] Everyone's talking about generative AI, but have you heard about natural language processing, which started this entire evolution to generating not only text but images, audio, video, and even computer code?
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980&t=15)** By the end of this course, you will be able to confidently apply natural language processing in your applications and day-to-day work.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980&t=24)** This is your moment in time to make the career pivot you have been thinking of.
>
> **[0:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980&t=31)** If you are a student or someone who is in the field of data science and machine learning but want to understand the evolution of natural language processing, this course is for you.
>
> **[0:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/elevate-your-nlp-expertise-using-python-and-machine-learning?u=76281980&t=43)** I am Gwendolyn Stripling, and I have helped thousands of students understand artificial intelligence and machine learning concepts.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [gwendolyn] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/what-you-should-know?u=76281980&t=0)** - [Instructor] So what do you need to know to get the most out of this course?
>
> **[0:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/what-you-should-know?u=76281980&t=4)** Well, a working knowledge of Python, and a working knowledge of some basic natural language processing and machine learning concepts, and an excitement and enthusiasm for learning.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### How to use the challenge exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=0)** - [Educator] Throughout the course, there will be four hands-on challenges for you to try on your own.
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=5)** The files needed for these challenges are located in the course's GitHub repository.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=11)** To use the files, please download the files locally, or you can clone the repo into your own GitHub repository account.
>
> **[0:21](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=21)** In each folder, you'll see both a challenge and a solution file.
>
> **[0:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=30)** There may also be a data file to use in the challenge.
>
> **[0:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=35)** Use the challenge files to try the challenge on your own.
>
> **[0:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=39)** Feel free to reference the solution files for the solution.
>
> **[0:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=44)** We'll be working in Google's Colaboratory Notebooks.
>
> **[0:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=48)** You can open the notebook from your GitHub, or if you downloaded the files as a ZIP, you can upload them from your computer.
>
> **[0:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=59)** For three of the challenges, you'll need to upload a data file into Colab.
>
> **[1:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=66)** Let's look at the challenge lab for Chapter 2.
>
> **[1:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=70)** To the left is a table of contents.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=74)** Feel free to use this to navigate sections of code in the notebook.
>
> **[1:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=79)** Type in your code where noted and when it's time to run it, click on the arrow button shown here, and that should be all you need to know to access the challenge exercise files for this course.
>
> **[1:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/how-to-use-the-challenge-exercise-files?u=76281980&t=93)** Let's get started.

> [!info]- Semantic Content
>
> **Tools:** github (3), colab (1)
> **Exercise Files:** download the (1), clone the repo (1), exercise files (1)
> **Code Keywords:** let (2)
> **UI Navigation:** open the (1), click on (1)
> **Env Vars:** zip (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [educator] (1)


### 1. Introduction to NLP Libraries

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview of natural language processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=0)** - Natural language processing or NLP is the ability of a computer to understand, analyze, manipulate, and process human language.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=11)** As a computer programming language, Python plays a central role in NLP due to its rich collection of specialized libraries for various NLP tasks.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=24)** But computers do not understand words, and Python does not natively know what any given word means.
>
> **[0:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=31)** It just sees a string of characters.
>
> **[0:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=34)** Computers can't directly understand words and sentences, but they can understand numbers.
>
> **[0:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=41)** For instance, Python as a computer programming language has no idea what the word natural means.
>
> **[0:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=49)** It only knows it's seven characters long, and to build any model in machine learning or deep learning, the data has to be in numerical form because models don't understand text or image data directly like humans do.
>
> **[1:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=66)** You convert the text data into numerical data, which is called vectorization, or in the NLP world, word embeddings.
>
> **[1:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=75)** Vectorization or word embeddings is nothing but the process of converting text data to numerical vectors.
>
> **[1:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=83)** Here is a simple conceptual example showing the word natural represented as a vector.
>
> **[1:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=90)** Imagine we want to represent the word natural as a vector or list of numbers.
>
> **[1:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=96)** In real world applications, this vector would have many dimensions, like 50 to 300, but for simplicity, let's use just three dimensions.
>
> **[1:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=108)** 0.2, negative one and 0.5.
>
> **[1:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=113)** 0.2 could mean that natural is not related to anything artificial.
>
> **[1:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=118)** Negative one could mean that the word appears in discussions about the environment.
>
> **[2:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=123)** Point five could indicate that natural is often associated with positive things like simplicity.
>
> **[2:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=131)** So each dimension captures some information about the words meaning, context, or usage.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=140)** You probably see natural language processing on a daily basis, though you may not know it.
>
> **[2:26](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=146)** For example, when a spam filter determines whether an incoming email is actually useful to you or when you want to translate a webpage from English to French or when you want to do text summarization.
>
> **[2:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=162)** NLP includes many applications, including chatbots, where you can create conversational agents that can interact with users, answer questions, and provide assistance.
>
> **[2:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=174)** Text to speech and speech to text, which is converting written text to spoken words, or vice versa.
>
> **[3:01](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=181)** Named entity recognition or NER, which is identifying and classifying entities such as names of people, organizations, locations, et cetera.
>
> **[3:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=194)** Question answering systems, which are systems that can understand and respond to user queries in a human-like manner.
>
> **[3:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=202)** Often seen in chatbots, virtual assistants, and online web-based large language models such as ChatGPT or Gemini, which understand and generate human-like text in response to a wide range of prompts and questions and sentiment analysis where you can determine the sentiment expressed in a piece of text, such as positive, negative, or neutral for applications like customer feedback analysis.
>
> **[3:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/overview-of-natural-language-processing?u=76281980&t=236)** Regardless of its use, the core component of NLP is extracting all information from a block of text that is relevant to a computer understanding the language.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (6), ner (1)
> **Analogies:** such as (3), for instance (1), imagine (1), for example (1)
> **CLI Commands:** python (3)
> **Versions:** 0.2 (2), 0.5 (1)
> **Definitions:** is called (1), is a  (1)
> **Code Keywords:** let (1)
> **Speakers:** - natural (1)

#### Evolution of natural language processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=0)** - [Instructor] The field of natural language processing has evolved over the years and three major approaches are often discussed.
>
> **[0:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=8)** First, the traditional approach relied on linguistic rules, handcrafted features, and statistical models to process and understand natural language.
>
> **[0:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=20)** This evolved to neural networks.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=24)** For example, recurrent neural networks and long short-term memory neural networks are used to capture sequential dependencies in text.
>
> **[0:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=34)** In capturing sequential dependencies in text, we are referring to the relationships and order between words in a sentence that convey meaning.
>
> **[0:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=45)** Unlike neural networks that rely on sequential processing, transformers use an attention mechanism to analyze the relationships between all words in a sentence simultaneously.
>
> **[0:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=59)** Transformers process input data in parallel rather than sequentially.
>
> **[1:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=64)** Parallel processing leads to more efficient and effective handling of sequential information in language tasks.
>
> **[1:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=73)** Let's look at the evolution through some examples.
>
> **[1:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=76)** The bag of words model is considered a traditional approach in NLP.
>
> **[1:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=80)** It represents a document as an unordered set of words and discards any information about the order or structure of the words in the document.
>
> **[1:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=90)** In this example, the CountVectorizer is used to convert a collection of text documents into a matrix of token counts.
>
> **[1:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=100)** The values in the matrix represent the count of each word in the corresponding document.
>
> **[1:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=106)** The output is shown in the image on the right.
>
> **[1:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=109)** Each row in the matrix represents a document and each column represents a word from the vocabulary.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=119)** Another traditional approach is text classification tasks using long short-term memory or LSTM networks.
>
> **[2:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=127)** This code defines an LSTM-based binary classification model for sentiment analysis.
>
> **[2:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=134)** It tokenizes the input documents, converts them to sequences, and paths the sequences to ensure equal length.
>
> **[2:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=143)** The LSTM layer captures sequential information and the final dense layer produces binary classification predictions.
>
> **[2:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=154)** BERT is an example of a modern NLP approach.
>
> **[2:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=158)** To implement text classification using the transformer architecture, you can use the transformer library which provides pre-trained transformer models.
>
> **[2:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=169)** Here's an example using the pipeline module from transformers.
>
> **[2:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=174)** This code loads a pre-trained transformer model for sentiment analysis and evaluates the sentiment of each document.
>
> **[3:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=183)** The results include the predicted sentiment label, positive or negative, and the corresponding confidence score.
>
> **[3:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=193)** In this example, we're using the pre-trained sentiment analysis pipeline provided by the transformers library.
>
> **[3:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=200)** The pipeline function allows you to easily load and use pre-trained models for various NLP tasks.
>
> **[3:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=209)** Transformers are the dominant architecture for various NLP tasks including language modeling, translation, text generation, vision task, code generation, and more.
>
> **[3:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=223)** Now transform architectures have been adapted to handle multimodal information.
>
> **[3:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=229)** Generative AI, especially in the context of NLP, has evolved to incorporate multimodal aspects, expanding beyond text-only input and output to handle not only text, but audio and video and images as well.
>
> **[4:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=247)** Recall that in traditional NLP, the primary modality is text.
>
> **[4:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=252)** But in multimodal NLP, systems process and understand information from various modalities such as text, images, audio, and video.
>
> **[4:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=262)** Examples of applications of multimodal NLP includes medical diagnosis which is combining textual patient records with medical images or other diagnostic modalities for more comprehensive healthcare analysis and video and text analysis which is extracting information from videos and associating it with textural descriptions.
>
> **[4:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=287)** This could involve tasks such as video summarization or generating captions for video content.
>
> **[4:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=295)** Several NLP libraries and frameworks are suitable for working with multimodal NLP tasks where the goal is to process and understand data that involves multiple modalities.
>
> **[5:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=308)** Hugging Face is widely recognized for its transformers library, an open source library that provides pre-trained models, model architectures, and tools for working with transformer based models, and this includes models like BERT, GPT, RoBERTa, and more.
>
> **[5:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=328)** The Hugging Face Model Hub is a platform for sharing and discovering pre-trained models.
>
> **[5:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=334)** Users can access a wide range of models for various NLP tasks and domains.
>
> **[5:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/evolution-of-natural-language-processing?u=76281980&t=339)** The hub allows researchers and practitioners to easily share their trained models with the community.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (11), lstm (3), bert (2), gpt (1)
> **Code Keywords:** let (1), module (1), function (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Natural language processing libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=0)** - [Narrator] There are several powerful NLP libraries available in Python that provide tools and functionalities for working with text data.
>
> **[0:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=9)** Some of the most popular Python NLP libraries include NLTK or Natural Language Toolkit, which is the foundational library for text processing, including tokenization, stemming, limitization, and stop word removal.
>
> **[0:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=28)** Spacy, like NLTK, has similar functionality for text processing, but unlike NLTK, Spacy is faster, especially for large data sets because it is optimized for performance.
>
> **[0:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=43)** Spacy is also easier to use, while NLTK has a steeper learning curve.
>
> **[0:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=50)** Gensim primarily focuses on topic modeling, document similarity, and other high level NLP tasks.
>
> **[0:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=58)** While it has some text pre-processing utilities, they are not as extensive as Spacy or NLTK.
>
> **[1:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=66)** Text Blob leans more towards core NLP functionalities like those found in Spacy or NLTK.
>
> **[1:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=75)** Compared to Spacy and NLTK, Text Blob offers a good balance of core functionalities without being as comprehensive.
>
> **[1:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=85)** It is simple to use and perfect for beginners.
>
> **[1:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=89)** This chart shows the comparison between Spacy, NLTK, Gensim, and Text Blob.
>
> **[1:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=99)** If your project involves tasks that benefit from deep learning's power, here are some popular deep learning libraries used for NLP, and they include TensorFlow, which is a comprehensive framework that supports transformers and PyTorch, which is easier to use than TensorFlow.
>
> **[1:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/natural-language-processing-libraries?u=76281980&t=118)** And MXNet and JAX, which have a moderate learning curve, and then Keras, which is the easiest to use.

> [!info]- Semantic Content
>
> **Env Vars:** nltk (8), nlp (5), jax (1)
> **CLI Commands:** python (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Review NLP and Python Basics

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction to spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=0)** - [Narrator] spaCy is designed for efficiency and high performance.
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=5)** spaCy organizes its NLP tasks into a processing pipeline.
>
> **[0:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=9)** The pipeline typically involves tokenization, part of speech tagging, named entity recognition and other linguistic analyses.
>
> **[0:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=19)** When you load a spaCy model using spaCy.load, you get an NLP object that contains the language model and processing pipeline.
>
> **[0:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=29)** When you call NLP on a text, spaCy first tokenizes the text to produce a dock object.
>
> **[0:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=36)** The dock is then processed and several different steps.
>
> **[0:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=40)** This is also referred to as the processing pipeline.
>
> **[0:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=44)** Let's take a look at an example.
>
> **[0:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=46)** As I previously stated, when you load a spaCy model using spaCy.load, you get an NLP object that can contains the language model and processing pipeline.
>
> **[1:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=60)** You can use the NLP object to process text by calling it as a function.
>
> **[1:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=64)** This example uses the dock object to process the sentence.
>
> **[1:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=68)** This is an example sentence.
>
> **[1:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=71)** The NLP object processes the given text and returns a dock object containing the analyzed information.
>
> **[1:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=80)** In the previous example, each token in the sentence, this is an example sentence, is printed along with its associated dependency label.
>
> **[1:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=90)** The output shows the grammatical relationships between the tokens in the sentence.
>
> **[1:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=96)** Here is another example.
>
> **[1:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=98)** We'll start with one sentence about a company's product.
>
> **[1:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=101)** In this example, you import the spaCy library and load the English NLP model.
>
> **[1:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=107)** You then process the text, your products are excellent and assign it to the variable text.
>
> **[1:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=113)** The doc equals NLP text line, uses spaCy's language processing pipeline to analyze the text.
>
> **[2:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=120)** It will process the input text and create a doc object.
>
> **[2:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=126)** Ti access the tokens in the processed document, iterate over the tokens in the process documents using this for loop.
>
> **[2:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=135)** Each token represents a word or a punctuation mark in the text.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=140)** Next, you print a text of each token in the document.
>
> **[2:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=144)** The output will display each word and punctuation marks as separate tokens.
>
> **[2:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=151)** In named entity recognition, you extract out the name of the person, store, or location.
>
> **[2:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=158)** And after loading the NLP pipeline, you start with defining some sample text.
>
> **[2:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=165)** For example, Online Store Incorporated is planning to open a new store in San Francisco, Cora Greene.
>
> **[2:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=173)** The CEO will be attending the launch event.
>
> **[2:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=178)** You then process the text by creating a doc that passes the text into the NLP object.
>
> **[3:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=185)** Then extract the name entities.
>
> **[3:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=188)** You want the text and you want the entities labeled.
>
> **[3:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=193)** Here, you print the named entities for every entity it recognizes and labels.
>
> **[3:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=202)** In spaCy, GPE stands for geopolitical entity.
>
> **[3:26](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=206)** Geopolitical entities refer to locations that have a geopolitical context, such as countries, cities, and states.
>
> **[3:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=214)** Dependency parsing involves analyzing the grammatical structure of a sentence and determining how words relate to each other.
>
> **[3:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=222)** It helps identify key entities, relationships and actions in a text, facilitating the extraction of structured information from unstructured data.
>
> **[3:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=235)** Part of speech tagging plays a foundational role in NLP, contributing to various downstream tasks that involve understanding the structure and meaning of natural language text.
>
> **[4:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/introduction-to-spacy?u=76281980&t=247)** For example, identifying parts of speech helps identify potential named entities and their roles in a sentence.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (11), ceo (1), gpe (1)
> **Code Identifiers:** spacy (10)
> **Definitions:** is an  (2), stands for (1)
> **Analogies:** for example (2), such as (1)
> **Code Keywords:** let (1), function (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Build a spaCy processing pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=0)** - [Instructor] In this first hands-on challenge, you'll build two spaCy processing pipelines, one that uses a simple sentence as text, and the other that uses a sentiments file.
>
> **[0:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=17)** You'll use a Colab Jupyter notebook, and many cells are pre-coded for you.
>
> **[0:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=23)** First, you'll import the following resources: pandas and spaCy.
>
> **[0:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=28)** You'll then install spaCy and download and load the English model for spaCy.
>
> **[0:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=35)** You will then build a simple processing pipeline, where you will be given one example text.
>
> **[0:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=42)** You'll then build a processing pipeline by writing code to tokenize the sentence, remove stop words, perform POS tagging, dependency parsing, lemmatization, and named entity recognition.
>
> **[0:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=58)** In exercise #3, you do something similar to exercise #2.
>
> **[1:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=62)** But this time, rather than using one sentence as text, you use a sentiments file.
>
> **[1:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-build-a-spacy-processing-pipeline?u=76281980&t=68)** You'll then build a processing pipeline by writing code to tokenize the sentence, remove stop words, perform POS tagging, dependency parsing, lemmatization, and named entity recognition.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (4)
> **Env Vars:** pos (2)
> **Tools:** colab (1), jupyter (1)
> **Analogies:** similar to (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Build a processing pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=0)** - [Instructor] Hope you enjoyed the first challenge.
>
> **[0:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=7)** Let's have a look at the solution.
>
> **[0:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=10)** So for exercise one, the first thing you needed to do was load in the file.
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=15)** So I'm going to come here and load in the file.
>
> **[0:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=17)** Sentiment examples, which is really just about 10 examples of sentiments.
>
> **[0:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=22)** I'll open that and you'll get a warning, which basically says you should save your files elsewhere.
>
> **[0:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=29)** Okay, let's walk through the solution.
>
> **[0:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=32)** First thing you needed to do was load the resources.
>
> **[0:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=35)** And so I'm going to go ahead and run this cell now and you can see how it's going through.
>
> **[0:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=38)** And it's going to be importing pandas, it's going to import spacy, it's going to do a pip install of spacy.
>
> **[0:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=46)** It's then going to download the English language model for spacy, and then it's actually going to load that English model as well.
>
> **[0:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=55)** And so once everything is loaded in, this is just a table just to remind you about the order of tasks in the processing pipeline.
>
> **[1:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=64)** In exercise number two, we're going to build a simple processing pipeline.
>
> **[1:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=68)** And it's simple because you're just going to be passing in a sentence to the text variable.
>
> **[1:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=73)** And that text variable will be used as part of the doc object.
>
> **[1:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=77)** And then that's what you'll use to tokenize your text to filter out stop words, to do parts of speech tagging, and to do name entity recognition.
>
> **[1:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=88)** Now, I did add a few extras here, a print tokenization in front of each of these, and also a new line separation here.
>
> **[1:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=97)** And this is just for readability sake.
>
> **[1:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=100)** So let's go ahead and run this and see the output.
>
> **[1:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=105)** So the sentence, "A customer in New York City wants "to give a review," that's been tokenized.
>
> **[1:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=112)** Filtered tokens, these are all the words that are not the, a, an, and that is what we see here.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=119)** Part of speech tagging has been applied.
>
> **[2:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=122)** You can see your nouns and proper nouns and verbs.
>
> **[2:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=126)** And then down here, name entities have been recognized, New York City, and also limitization where you're getting the root of the word.
>
> **[2:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=135)** And so here you have New York City and that's been applied as well.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=140)** Now the difference between exercise two and three is that one is with a simple sentence and one is with a file.
>
> **[2:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=147)** And so here we're simply going to bring in the sentiment analysis file that I brought in here.
>
> **[2:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=154)** And as I scroll down, this bit of code is just going to initialize some empty list to store the results here.
>
> **[2:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=164)** And then we're going to process each sentiment example using spacy and we're just going to store those results.
>
> **[2:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=171)** The challenge, basically, just wanted you to take what you did in exercise two and do the same thing here in exercise three.
>
> **[2:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=178)** The only difference is that you are using an append method where you have to append the tokens list to token list.
>
> **[3:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=187)** And you did that for tokenization, you did that for stop word removal.
>
> **[3:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=192)** You would do that for a part of speech tagging and name entity recognition.
>
> **[3:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=199)** And then the last thing that I have here is really just to create a data frame to organize the results so that you can actually take a look at the process data.
>
> **[3:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=212)** So let me just go ahead and run this one and run this one.
>
> **[3:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=223)** And here we have the results.
>
> **[3:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=225)** So here is the sentiment example.
>
> **[3:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=228)** Here are our tokens.
>
> **[3:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=231)** Here are our filtered tokens And here is the named entities.
>
> **[4:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=240)** And here are our POS tags.
>
> **[4:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-build-a-processing-pipeline?u=76281980&t=243)** And so then we could simply export the data to a CSV file and take a look at the process data and we'll look at the first five rows and that's here in this table.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4)
> **Env Vars:** pos (1), csv (1)
> **CLI Commands:** pip (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** download the (1)
> **Warnings:** warning (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 3. Using spaCy for Customer Feedback Analysis

> [↑ Back to Table of Contents](#table-of-contents)

#### Analyze customer feedback using spaCy
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=0)** - [Instructor] In this video, we'll learn about spaCy by analyzing customer feedback data.
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=5)** spaCy itself doesn't have built-in sentiment analysis capabilities.
>
> **[0:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=10)** However, spaCy can be used in conjunction with other tools and libraries to perform sentiment analysis.
>
> **[0:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=20)** The analysis of customer feedback, sentiments and preferences can be valuable for improving various aspects of any organization.
>
> **[0:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=30)** Here are some ways you can leverage this use case in your organization.
>
> **[0:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=36)** You can improve customer experience.
>
> **[0:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=39)** Analyzing sentiment allows you to understand how customers perceive your products and services.
>
> **[0:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=47)** Positive sentiments can highlight strengths, while negative sentiments can indicate areas for improvement.
>
> **[0:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=54)** Addressing concerns raised in customer narratives can lead to an enhanced customer experience.
>
> **[1:01](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=61)** Getting geographic-specific feedback can help you identify geographic locations mentioned in customer feedback.
>
> **[1:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=69)** This information can be valuable for understanding location-specific uses, preferences or trends.
>
> **[1:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=76)** It can be particularly useful for businesses with a diverse customer base.
>
> **[1:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=82)** Knowing the preferred contact method, chat or email based on customer preferences helps you tailor your communication strategies, and can inform decisions on how to reach out to customers effectively and provide support.
>
> **[1:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=100)** To conduct sentiment analysis with spaCy, you would typically follow these steps.
>
> **[1:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=105)** Use spaCy for text preprocessing, such as tokenization, part-of-speech tagging, and other linguistic preprocessing tasks.
>
> **[1:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=114)** Then train or use a pre-trained machine learning model for sentiment analysis.
>
> **[2:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=120)** Popular machine learning frameworks, like scikit-learn or deep learning libraries like TensorFlow and PyTorch can be used for this purpose.
>
> **[2:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=129)** You can integrate the spaCy processing pipeline with the sentiment analysis model.
>
> **[2:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=135)** This may involve transforming spaCy's linguistic features into the format expected by the sentiment analysis model.
>
> **[2:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=144)** You can also use a simple NLP library that can perform sentiment analysis, and it can be easily integrated with spaCy.
>
> **[2:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=152)** Keep in mind that the effectiveness of sentiment analysis depends on the quality of your training data, the chosen model, and the specific requirements of your application.
>
> **[2:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=165)** There are also pre-trained models and services available for sentiment analysis that you can leverage without training your own model.
>
> **[2:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=174)** These models include VADER or Valence Aware Dictionary and sEntiment Reasoner, which is a rule-based sentiment analysis tool designed for analyzing social media text.
>
> **[3:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=189)** And then there's Google Cloud Natural Language API, which offers sentiment analysis as part of its suite of natural language processing tools.
>
> **[3:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=199)** Microsoft's Azure's Text Analytics can analyze text in multiple languages and provides a confidence score for the sentiment analysis.
>
> **[3:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=211)** Amazon Comprehend offers sentiment analysis as one of its features, allowing you to analyze text for positive, negative, neutral, or mixed sentiment.
>
> **[3:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=224)** IBM Watson Natural Language Understanding provides a sentiment score along with the sentiment label, positive, negative, or neutral.
>
> **[3:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=234)** And TextBlob.
>
> **[3:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=236)** As we spoke of earlier, TextBlob is a Python library that provides a simple API for sentiment analysis.
>
> **[4:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=244)** It is built on top of NLTK and Pattern, and it offers a basic sentiment analysis functionality out of the box.
>
> **[4:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=253)** These pre-trained models and services vary in terms of accuracy and ease of use and pricing.
>
> **[4:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=259)** You can choose the one that best fits your special requirements and constraints.
>
> **[4:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=265)** For our use case and challenge lab, we'll be using spaCy and TextBlob to introduce sentiment analysis.
>
> **[4:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/analyze-customer-feedback-using-spacy?u=76281980&t=272)** We'll look at more advanced sentiment analysis in a later chapter on transformers.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (9), sentiment (1)
> **Env Vars:** api (2), nlp (1), vader (1), ibm (1), nltk (1)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### The spaCy processing pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=0)** - [Presenter] As previously mentioned, spaCy organizes its NLP tasks into a processing pipeline.
>
> **[0:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=8)** The NLP object has a pipeline of components that are applied sequentially to process a text.
>
> **[0:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=14)** The pipeline includes tokenization, part of speech tagging, dependency parsing, named entity recognition, and other linguistic analyses.
>
> **[0:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=27)** When you call NLP on a text, spaCy first tokenizes to text to produce a dock object, the dock is then processed in several different steps, this is also referred to as the processing pipeline.
>
> **[0:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=41)** In this sentence, "Your products are excellent.
>
> **[0:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=45)** I really love the quality.
>
> **[0:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=47)** However, delivery to my location in Los Angeles was a bit slow."
>
> **[0:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=51)** And this is from abbey@[email.com](https://email.com).
>
> **[0:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=54)** And so this is an example of a bit of text that can be processed in the pipeline into a doc.
>
> **[1:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=62)** The output is a sentiment score, sentiment polarity, and subjectivity.
>
> **[1:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=68)** In the context of sentiment analysis using spaCy and text blob, sentiment polarity and sentiment subjectivity are special metrics that provide information about the sentiment expressed in a piece of text.
>
> **[1:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=84)** Sentiment polarity is a measure of the perceived sentiment in a text, indicating whether the expressed sentiment is positive, negative, or neutral.
>
> **[1:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=95)** The polarity score typically ranges from negative one to one.
>
> **[1:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=101)** A score of one indicates highly positive sentiment, a score of negative one indicates highly negative sentiment.
>
> **[1:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=108)** A score of zero indicates neutral sentiment.
>
> **[1:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=111)** In our example, a sentiment polarity of 0.44 suggests a moderately positive sentiment.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=119)** Sentiment subjectivity measures the degree of subjectivity or objectivity in the text and it ranges from zero to one.
>
> **[2:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=129)** A score of zero indicates a highly objective or non-subjective sentiment.
>
> **[2:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=136)** A score of one indicates a highly subjective statement and in our example, a sentiment subjectivity of 0.66 suggests that the express sentiment is moderately subjective.
>
> **[2:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=148)** This means that the text contains some subjective elements or opinions, but it is not entirely subjective.
>
> **[2:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=157)** Let's have a look at some sample feedback captured from an online survey from a company.
>
> **[2:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=161)** Each feedback comment also includes the contact method, email or chat.
>
> **[2:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=166)** For example, "Your products are excellent.
>
> **[2:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=169)** I really love the quality.
>
> **[2:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=170)** However, delivery to my location in Los Angeles was a bit slow."
>
> **[2:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=173)** We saw that from abbey@[email.com](https://email.com).
>
> **[2:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=176)** The second, "The product didn't meet my expectations and I'm disappointed.
>
> **[3:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=182)** I hope you can address the issues in Chicago.
>
> **[3:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=184)** My email address is emailme@[email.com](https://email.com)."
>
> **[3:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=188)** The third one, "The store was closed, but the hours said it should have been open.
>
> **[3:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=193)** I wasted gas and time."
>
> **[3:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=197)** And this is from helpme@[email.com](https://email.com).
>
> **[3:21](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/the-spacy-processing-pipeline?u=76281980&t=201)** So let's take a look at how to analyze this customer feedback using sentiment analysis with spaCy and text blob.

> [!info]- Semantic Content
>
> **Code Identifiers:** spacy (4)
> **URLs:** [email.com](https://email.com) (4)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Env Vars:** nlp (3)
> **Code Keywords:** let (2)
> **Versions:** 0.44 (1), 0.66 (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Challenge: Analyze customer feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980&t=0)** (cheerful music)
>
> **[0:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980&t=6)** - [Narrator] In this hands-on challenge, you will analyze customer feedback by performing sentiment analysis.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980&t=11)** You'll code the areas that appear with no code.
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980&t=15)** First, you'll install libraries and modules, then read in the customer feedback file and create an output file to store the results.
>
> **[0:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-analyze-customer-feedback?u=76281980&t=25)** The last exercise is loading the output results into a Pandas Dataframe, displaying the first five rows of the data frame, and then plotting the count of preferred contact methods, whether it's email or chat.

> [!info]- Semantic Content
>
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (cheerful music) (1)

#### Solution: Analyze customer feedback
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=0)** - [Instructor] I hope you enjoyed the second challenge.
>
> **[0:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=9)** Let's take a look at the solution.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=11)** So the first thing that I'm going to do is go ahead and load in the file, and this is his feedback data, similar to sentiment data that we had in Exercise 1.
>
> **[0:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=23)** And again, you'll get a warning.
>
> **[0:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=25)** Basically make sure that your files are stored elsewhere.
>
> **[0:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=29)** Okay, so here in Exercise 1, you're simply going to install the libraries and modules.
>
> **[0:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=36)** And in Exercise 2, you're going to read in the feedback file and create an output file for results.
>
> **[0:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=45)** Scroll on down here, and the solution is here where you're going to process and analyze each bit of feedback, you're going to process the narrative using spaCy, you're going to perform sentiment analysis using TextBlob, you're going to extract the named entities, and you're going to determine the preferred method of contact.
>
> **[1:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=73)** And the last thing here, you're going to write the results to a CSV file.
>
> **[1:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=79)** So I'll go ahead and run that.
>
> **[1:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=83)** And I'll scroll down and you can see the results here.
>
> **[1:26](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=86)** Processing Reedback 1, 2, 3, 4, and 5.
>
> **[1:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=93)** And in Exercise 3, a little bit of exploratory data analysis on the feedback.
>
> **[1:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=98)** And here you're just going to load data into a Pandas DataFrame.
>
> **[1:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=104)** Look at the first five rows. And here is the table.
>
> **[1:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=110)** And, of course, with DataFrames, you want to go ahead and look at some information about it.
>
> **[1:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=116)** And here you can see the columns and the non-null count and data type as well.
>
> **[2:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=123)** And then down here, in terms of plotting the preferred contact method, just go ahead and run this.
>
> **[2:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=130)** This plots, and so after executing the cell, you can see the preferred contact method.
>
> **[2:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=138)** And that is either via email or chat.
>
> **[2:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=142)** And then lastly, we can plot the sentiment polarity and sentiment subjectivity.
>
> **[2:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-analyze-customer-feedback?u=76281980&t=147)** I execute the cell, and here is a pair plot, pairwise relationship diagram.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), this. (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** spacy (1)
> **Env Vars:** csv (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** warning (1)


### 4. Modern NLP: Transformers and Large Language Models

> [↑ Back to Table of Contents](#table-of-contents)

#### Modern natural language processing
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=0)** - [Instructor] In this video, we provide an overview of modern natural language processing, which has paved the way for numerous advancements, including pre-trained language models and state-of-the-art performance on various NLP tasks, such as question answering or QA, which is a task in NLP that involves automatically generating answers to questions posed in natural language.
>
> **[0:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=30)** And we have text classification, which is an NLP task that involves creating text documents or sentences into predefined classes or categories based on their content.
>
> **[0:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=43)** The goal of text classification is to automatically assign one or more labels to a piece of text, allowing the system to organize, analyze, and understand large volumes of textual data more efficiently.
>
> **[0:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=58)** And text summarization, which is an NLP task, that involves generating a concise and coherent summary of a longer document or piece of text while retaining its key information and main ideas.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=74)** The goal of text summarization is to distill the most important information from the original text and present it in a short form, making it easier for users to grasp the main points without having to read the entire document.
>
> **[1:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=90)** We also have text generation, which is an NLP task that involves automatically generating human-like text based on a given input or context.
>
> **[1:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=101)** The goal of text generation is to produce coherent and contextually relevant text that mimics human writing style and language patterns.
>
> **[1:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=110)** Text generation can be performed in various ways, ranging from simple rule-based approaches to more advanced deep learning models, and there is code generation, which is the task of automatically generating source code or code snippets from natural language descriptions or requirements.
>
> **[2:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=132)** This involves converting human readable text, such as natural language specifications, comments or documentation into executable code that performs the desired functionality.
>
> **[2:26](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=146)** We also have image generation, which refers to the task of generating images from textual descriptions or captions.
>
> **[2:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=154)** This involves translating natural language descriptions into pixel level representations to create visually coherent and semantically relevant images.
>
> **[2:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=165)** And chat bots, which are conversational agents or dialogue systems that interact with users through natural language, typically in text form to provide assistance, answer questions, or complete tasks.
>
> **[3:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=180)** Chatbots simulate human-like conversations and can be deployed across various platforms, including websites, messaging applications, mobile apps, and voice assistance.
>
> **[3:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=193)** All of these applications and tasks are possible by leveraging large scale language models such as BERT, GPT, LLM, Mistral, Gemini, or other transformer based NLP architectures.
>
> **[3:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=208)** Transformer models can understand user inputs, generate contextually relevant responses, and engage in more natural and human-like conversations.
>
> **[3:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/modern-natural-language-processing?u=76281980&t=219)** Let's take a brief look at three transformer based models.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (6), bert (1), gpt (1), llm (1)
> **Definitions:** is an  (3), is a  (1), refers to (1)
> **Analogies:** such as (3)
> **Code Keywords:** let (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### Transformers neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=0)** - [Instructor] In this video, we provide an overview of BERT or bidirectional encoder representations from transformers and GPT or generative pre-trained transformer.
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=15)** As a reminder, tokens can be words, punctuation marks, or sub word units.
>
> **[0:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=22)** A vector represents the numerical value or representations of a token.
>
> **[0:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=27)** In NLP, tokens are typically represented as vectors, so tokens are the smallest unit of text and vectors represent their numerical values or representation in NLP.
>
> **[0:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=40)** By converting text into vectors, we can then use mathematical operations and machine learning algorithms to analyze and manipulate them.
>
> **[0:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=50)** This is a diagram of a transformer, a neural network architecture used in natural language processing.
>
> **[0:57](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=57)** The transformer is made up of two parts, an encoder and a decoder.
>
> **[1:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=64)** The encoder takes a sequence of input data, such as a sentence in a language, and converts it into a sequence of vectors.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=74)** To preserve the positional information of words in the input sequence, transformers incorporate positional encoding vectors.
>
> **[1:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=84)** These vectors provide information about the position of each word in the sequence and are added to the word embeddings before feeding them into the transformer layers.
>
> **[1:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=95)** This ensures that the transformer can distinguish between words based on their position in the sequence.
>
> **[1:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=102)** The core of the encoder neural network consists of multiple identical layers of transformer blocks.
>
> **[1:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=109)** Each transformer block typically includes two main sub components, the self-attention mechanism, and the feed forward neural network.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=119)** The self-attention mechanism allows each token in the sequence to attend to all other tokens, capturing dependencies and relationships between words at different positions in the sequence.
>
> **[2:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=134)** Let's look at an example.
>
> **[2:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=136)** First, we get a token representation of "I love NLP."
>
> **[2:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=142)** Then the I in "I love NLP" attending to itself and the "love" and the "NLP" is calculated.
>
> **[2:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=151)** The attention score for "I" is then 1, 0, 0.
>
> **[2:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=157)** The same calculations are done for "love" and "NLP", where each token attends to itself.
>
> **[2:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=163)** So here the attention score for "love" is 0, 1, 0, and for "NLP", 0, 0, 1.
>
> **[2:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=172)** This representation of attention scores and input embeddings is more aligned with how they would be used within a transformer neural network, as they are typically used as weights to compute a weighted sum of the input embeddings producing context-aware representations for each token in the sequence.
>
> **[3:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=194)** In this example, we first define the tension scores and input embeddings as PyTorch sensors.
>
> **[3:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=203)** We then use PyTorch's torch.matmul function to compute the weighted sum of input embeddings based on the attention scores.
>
> **[3:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=213)** The resulting context-aware representation's tensor contains the context-aware representations for each token in the sequence, which can then be fed into the subsequent layers of a transformer model.
>
> **[3:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=230)** These scores indicate that each word has full attention on itself and no attention on the other words in the sequence.
>
> **[3:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=239)** But what about a case where there are unequal weights in the sequence?
>
> **[4:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=244)** The self-attention mechanism in the transformer neural network enables the model to determine unequal weights among words in the sequence by dynamically adjusting the attention weights based on the context and relationships between words and the input sequence.
>
> **[4:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=265)** This allows the model to capture fine grained dependencies and extract meaningful representations from the input data.
>
> **[4:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=275)** From the attentions scores in the second example, we can see that that "books" has the highest attention score, 1.0, when attending to "I", "enjoy" and "reading".
>
> **[4:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=287)** Therefore, "books" receives the most attention in this example, indicating that it has the highest weight or importance in the sequence.
>
> **[4:57](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=297)** The high attention on "books" implies that it may have a strong influence on the predictions made by the model.
>
> **[5:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=304)** In tasks like machine translation, for instance, the attention on "books" could affect the translation of the entire sentence, especially if the word carries essential semantic or contextual information.
>
> **[5:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=317)** After applying self-attention, the contextualized representations are passed through a feed forward neural network, typically, a multi-layer perceptron.
>
> **[5:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=327)** The feed forward neural network applies nonlinear transformations to the contextualized representations, the "I enjoy reading books," and enables the model to capture complex patterns and relationships in the data.
>
> **[5:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=344)** Both the self-attention mechanism and the feed forward neural networks are followed by layer normalization and residual connections.
>
> **[5:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=354)** Layer normalization and residual connections work together to stabilize the training process and ensure efficient information flow through the network.
>
> **[6:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/transformers-neural-networks?u=76281980&t=365)** The decoder then takes the sequence of vectors and converts it back into a sequence of output data, such as a translation of a sentence into another language.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (7), bert (1), gpt (1)
> **Code Keywords:** self (5), let (1), function (1)
> **Analogies:** such as (2), for instance (1)
> **Versions:** 1.0 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Large language models: BERT, GPT
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=0)** - [Narrator] As previously mentioned, BERT utilizes an encoder only transformer architecture, processing texts in a bidirectional manner.
>
> **[0:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=10)** BERT predicts tokens based on a bidirectional context, meaning it captures bidirectional contextual information, by considering both left and right context of each token in the input sequence.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=24)** GPT utilizes a decoder only transformer architecture, processing text in a unidirectional manner.
>
> **[0:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=34)** GPT predicts the next token in a sequence based on the preceding context.
>
> **[0:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=41)** In terms of text processing, GPT processes text sequentially from left to right, generating text one token at a time.
>
> **[0:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=52)** In summary, while BERT focuses on bidirectional text processing, and GPT specializes in unidirectional text generation, each model has its unique strengths and capabilities, catering to different aspects of text processing and understanding.
>
> **[1:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=72)** For example, BERT is good for text classification, named entity recognition, and question answering.
>
> **[1:21](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=81)** GPT is better for text generation, text summarization, and dialogue generation or creating chatbots.
>
> **[1:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=91)** BERT and GPT are known as large language models or LLMs.
>
> **[1:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=97)** LLMs are also trained on large data sets, and these include books, articles, websites, code repositories, social media platforms, and much more.
>
> **[1:49](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=109)** And they're considered large because they have millions or even billions of parameters, allowing them to learn complex relationships within language.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=119)** Parameters are essentially numerical values within the model that can be adjusted during the training process to learn and represent the patterns in the data.
>
> **[2:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=130)** Think of them like knobs on a complex radio where each knob represents a parameter and adjusting them influences the model's behavior and output.
>
> **[2:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=144)** There's a three step process when interacting with large language models.
>
> **[2:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=148)** In step one, the user provides text input to the LLM, and this can be anything from a single sentence to a long document or to an image.
>
> **[2:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=161)** Step two is processing and tokenization.
>
> **[2:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=165)** The LLM breaks the input text into a sequence of tokens.
>
> **[2:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=170)** Each token represents an individual word, punctuation mark, or other character.
>
> **[2:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=176)** And in embeddings, the LLM converts each token into a dense vector representation.
>
> **[3:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=183)** These embeddings capture the semantic meaning of each token.
>
> **[3:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=187)** Step three is output.
>
> **[3:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/large-language-models-bert-gpt?u=76281980&t=189)** The LLM can generate text, code, summarize text, and answer questions, and that is the power of the transformer architecture and large language models.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (6), bert (5), llm (4)
> **Definitions:** known as (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Challenge: Sentiment analysis using DistilBERT
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=0)** - [Instructor] In this hands-on challenge, you'll load a pre-trained DistilBERT model and tokenizer, load a DistilBERT sentiment analysis pipeline.
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=15)** And there is an optional exploratory data analysis exercise.
>
> **[0:21](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=21)** Some steps are pre-coded for you.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=24)** So first, you load the pre-trained DistilBERT model and tokenizer.
>
> **[0:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=29)** Then you need to complete the code to perform sentiment analysis.
>
> **[0:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-sentiment-analysis-using-distilbert?u=76281980&t=34)** And lastly, I have an optional data analysis exercise where you can run the cells to create a word cloud, a pie chart, and a bar chart.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Sentiment analysis using DistilBERT
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=0)** (smooth uptempo music)
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=5)** - [Instructor] Hope you enjoyed the third challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=8)** Let's have a look at the solution.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=11)** So I'm going to go over here to the panel and load in the file.
>
> **[0:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=16)** And of course, I get the usual warning to ensure that my files are saved elsewhere.
>
> **[0:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=22)** Okay, I am just going to now scroll down and import some libraries and run this cell.
>
> **[0:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=30)** And of course, my requirements are already satisfied because I've executed this cell before.
>
> **[0:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=37)** And now here I'm just going to load the CSV file into a data frame, and that's here.
>
> **[0:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=44)** And of course, as a best practice, I want to make sure that I can see the first five rows of the data frame, and there they are.
>
> **[0:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=51)** So exercise number one was to load pre-trained DistilBERT model and tokenizer.
>
> **[0:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=58)** And this is what the code should look like, and I'm going to execute the cell.
>
> **[1:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=65)** And then exercise two was to load DistilBERT sentiment, the analysis pipeline.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=74)** So I'm just going to walk you through what that looks like.
>
> **[1:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=78)** So first you load the pipeline here, alright?
>
> **[1:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=83)** And then you need to iterate over the rows and perform sentiment analysis with DistilBERT.
>
> **[1:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=89)** And so here you're creating a list and you're going through every single sentence in the file.
>
> **[1:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=96)** You're going to be assigning a label and a score.
>
> **[1:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=100)** And once that's done, you're going to iterate over the sentiment results and print each entry.
>
> **[1:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=108)** And again, this is what that for loop does here.
>
> **[1:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=111)** And then of course, there's a blank line for readability.
>
> **[1:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=114)** And then the results will be saved to a new CSV file.
>
> **[2:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=120)** So keep an eye out in this area once I run the cell.
>
> **[2:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=127)** Okay, there's my output, but I don't see a file here, so I'm going to go and refresh this window.
>
> **[2:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=135)** And there it is.
>
> **[2:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=137)** Okay, so here's my output.
>
> **[2:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=139)** My first one, "Your products are excellent.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=140)** I really love the quality."
>
> **[2:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=142)** So there's five stars, and here there's four stars for, "The customer service team in New York was helpful."
>
> **[2:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=148)** So here's the output that you can see and look at.
>
> **[2:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=153)** And so here, you know, as a best practice, I really want to get a sense of the results of the sentiments.
>
> **[2:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=160)** So I'm just going to do a little bit of exploratory analysis.
>
> **[2:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=164)** First, I want to pull those five rows in.
>
> **[2:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=166)** And you'll notice here suddenly, as compared to the other table, now I have a score.
>
> **[2:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=170)** I have a sentiment score and a sentiment label.
>
> **[2:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=176)** And I'd like to see a WordCloud, and here's my WordCloud from sentiment analysis text.
>
> **[3:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=184)** And I'd like to see a pie chart, and here's my distribution of sentiment labels.
>
> **[3:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-sentiment-analysis-using-distilbert?u=76281980&t=192)** And I want to see a bar chart, and here it is, my stars by sentiment label.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for, (1)
> **Env Vars:** csv (2)
> **Best Practices:** best practice (2)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (smooth uptempo music) (1)


### 5. Methods That Improve LLM Performance

> [↑ Back to Table of Contents](#table-of-contents)

#### Methods that improve LLM performance
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=0)** - [Instructor] Because LLMs are trained on a large corpus of data, you may need to customize an LLM for a special use case in order to improve its accuracy, effectiveness, and adaptability.
>
> **[0:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=14)** Methods that improve LLM performance include prompt engineering and supervised fine-tuning, which are considered traditional approaches.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=24)** Retrieval-augmented generation, or RAG, and parameter-efficient tuning, or PEFT, are considered more advanced approaches.
>
> **[0:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=35)** Let's begin with an overview of prompt engineering and supervised fine-tuning.
>
> **[0:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=41)** Prompt engineering focuses on crafting effective prompts or instructions that guide the behavior of the LLM to perform a special task without the need for task-specific labeled data.
>
> **[0:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=55)** Instead of fine-tuning the model's parameters on task-specific data, prompt engineering relies on designing prompt templates or patterns that bias the model towards producing desired outputs.
>
> **[1:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=68)** Prompt engineering requires no training, and sometimes no coding.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=74)** Here is an example of a few short prompts.
>
> **[1:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=77)** This prompt provides key elements for developing a comprehensive marketing strategy tailored to the target audience and product attributes, guiding the business towards effective promotion and sales growth.
>
> **[1:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=91)** The few short examples include product features, channels, and messaging.
>
> **[1:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=97)** This is a basic example prompt engineering code using Hugging Face's Transformers library in Python.
>
> **[1:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=103)** In this example, the code generates text based on a given prompt using a pre-trained language model.
>
> **[1:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=111)** Here's what each parameter does.
>
> **[1:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=114)** Input_text. The prompt or input text to generate text from.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=119)** The model.generate method generates text based on the provided prompt.
>
> **[2:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=124)** It takes several parameters.
>
> **[2:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=127)** Tokenizer.encode(input_text, return_tensors="pt") encodes the input text using the tokenizer and returns it as PyTorch tensors.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=140)** The tokenizer converts the input_text into token IDs that the model can understand.
>
> **[2:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=147)** Max_length, the maximum length of the generated text.
>
> **[2:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=152)** The generation process stops when the text reaches this length.
>
> **[2:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=156)** Temperature.
>
> **[2:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=157)** Sampling temperature controls the randomness of the generation process.
>
> **[2:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=162)** Higher temperatures result in more diverse but potentially less coherent texts, while lower temperatures lead to more predictable but potentially repetitive text.
>
> **[2:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=173)** Top_k.
>
> **[2:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=175)** Top_k sampling limits the vocabulary to the Top-k, most likely tokens, at each step of the generation process.
>
> **[3:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=183)** It helps control the diversity of the generated text.
>
> **[3:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=188)** Top_p.
>
> **[3:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=190)** Top_p sampling, also known as nucleus sampling, limits the vocabulary to the smallest set of tokens whose cumulative probability exceeds the given threshold P.
>
> **[3:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=203)** It dynamically adjusts the vocabulary size based on the probabilities of tokens.
>
> **[3:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=210)** Num_return_sequences.
>
> **[3:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=212)** The number of sequences to generate.
>
> **[3:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=215)** And this parameter allows generating multiple sequences based on the same prompt.
>
> **[3:41](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=221)** Pad_token_id. The token ID used to pad sequences.
>
> **[3:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=227)** In this case, it's set to the end of sequence token_id, obtained from the tokenizer, tokenizer.eos_token_id.
>
> **[3:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=239)** So finally, we decode and print the generated text.
>
> **[4:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=242)** This code takes the generated token IDs, converts them back into text, and prints the generated text, making it easier to read and interpret the model's output.
>
> **[4:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=255)** Generated_text accesses the first generated sequence from the list of generated sequences.
>
> **[4:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=262)** Each generated sequence is represented as a list of token IDs.
>
> **[4:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=268)** Tokenizer.decode decodes the list of token IDs into human-readable text using the tokenizer.
>
> **[4:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=275)** It reconstructs the text from the token IDs while skipping any special tokens, for example, padding tokens or end of sequence tokens.
>
> **[4:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=286)** And skip_special_tokens=True indicates that special tokens should be skipped during decoding.
>
> **[4:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=294)** This ensures that the generated text doesn't include any padding tokens or other special tokens added during tokenization.
>
> **[5:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=304)** Prompt engineering involves experimenting with different prompts, instructions, or templates to guide the model's behavior towards desired tasks.
>
> **[5:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/methods-that-improve-llm-performance?u=76281980&t=313)** You can customize the prompt according to the task you want the model to perform, and adjust the generation parameters based on your requirements.

> [!info]- Semantic Content
>
> **Code Identifiers:** input_text (2), return_tensors (1), token_id (1), eos_token_id (1), skip_special_tokens (1)
> **Env Vars:** llm (3), rag (1), peft (1)
> **Code Keywords:** let (1), from. (1), case, (1), finally, (1)
> **Definitions:** is an  (1), is a  (1), known as (1)
> **CLI Commands:** python (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Supervised fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=0)** - [Instructor] Supervised fine-tuning involves training an LLM on a special downstream task by providing task-specific labeled data.
>
> **[0:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=9)** The model learns to map input text to the desired task-specific output, based on the labeled examples provided during fine-tuning.
>
> **[0:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=18)** Supervised fine-tuning is typically used for tasks, such as text classification, name entity recognition, question answering, and language generation, where labeled data for the target task is available.
>
> **[0:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=35)** Fine-tuning involves taking a pre-trained model and adapting it to perform a specific task or domain.
>
> **[0:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=43)** By adapting, we mean using a small dataset based on a specific task, such as sentiment analysis, and fine-tuning the model to learn the new representations and features of the task or domain-specific dataset.
>
> **[1:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=60)** Fine-tuning is a form of transfer learning, where knowledge acquired from the pre-trained LLM is transferred to the domain or target task.
>
> **[1:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=71)** Fine-tuning involves several steps.
>
> **[1:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=73)** In step one, you choose a pre-trained model that is suitable for the target task and domain.
>
> **[1:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=79)** In step two, you collect or prepare a dataset for the target task, ensuring it is well annotated and representative of the problem.
>
> **[1:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=89)** In step three, you decide whether to freeze some or all of the layers in the pre-trained model, or modify them to adapt to the target task.
>
> **[1:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=100)** Fine-tuning can range from fine grained adjustments, to complete retraining of the model's neural network layers.
>
> **[1:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=108)** In step four, you train the model on the target task dataset, using appropriate loss functions and optimization techniques.
>
> **[1:57](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=117)** You should monitor performance using validation data and adjust hyperparameters as needed.
>
> **[2:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=125)** And in step five, you evaluate the fine-tuned model on a separate test dataset to assess its performance.
>
> **[2:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/supervised-fine-tuning?u=76281980&t=133)** Fine-tuning aims to improve performance on the target task, compared to training from scratch.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Fine-tuning methods
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=0)** - [Instructor] There are four primary supervised fine-tuning methods: instructions, task-specific, domain adaptation, and hyperparameter tuning.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=11)** Instruction fine-tuning typically involves training an LLM using prompts or instructions provided alongside the input data.
>
> **[0:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=19)** In this first example, two input statements are shown.
>
> **[0:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=22)** And these input statements are suitable for tasks, such as generating clinical documentation or summarizing medical records for a special patient, which are common in medical applications.
>
> **[0:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=34)** In this code snippet, trained text contains the two instruction prompts: Tokenizer tokenizes the prompts using the tokenizer, and pads and/or truncates them to ensure uniform length, preparing the input data for further processing or model training.
>
> **[0:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=52)** In the line, train_encodings = tokenizer, the tokenizer object is being used to process the list of text inputs, train_texts.
>
> **[1:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=63)** The tokenizer function processes the train_texts list according to the specified truncation and padding settings, returning a dictionary of tokenized inputs called train_encodings.
>
> **[1:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=78)** Each key in the dictionary corresponds to a different attribute of the tokenized inputs.
>
> **[1:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=83)** For example, input IDs or attention masks, and the values are lists containing the corresponding tokenized representations for each input in train_texts.
>
> **[1:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=96)** These tokenized representations are numerical and can be directly fed into a machine learning model for training or inference.
>
> **[1:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=106)** Let's take this opportunity to dive a bit deeper.
>
> **[1:50](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=110)** When the input text is tokenized, it is broken down into individual tokens where each token corresponds to a word or sub word in the text.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=119)** The tokenizer then assigns a numerical token ID to each token.
>
> **[2:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=125)** For example, the Summarize token ID, here, is 5060.
>
> **[2:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=131)** Attention masks allow us to send a batch of tokens into the transformer, even when the examples in the batch have different lengths.
>
> **[2:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=139)** In BERT, we do this by padding all sequence to the same length, then using the attention mask tensor to indicate which tokens in each sequence are actual input tokens and which are padding tokens.
>
> **[2:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=153)** This allows the model to ignore the padding tokens during processing by assigning them a value of zero in the attention mechanism, ensuring that only the relevant input tokens receive attention.
>
> **[2:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=166)** This code snippet iterates over each input text's attention mask and prints it.
>
> **[2:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=172)** Wherever the attention mask has a value of one, it indicates that the corresponding token in the input sequence is an actual input token.
>
> **[3:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=183)** A value of zero indicates that the corresponding token is a padding token.
>
> **[3:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=190)** Recall that pre-trained LLMs are trained on a large corpus of text data.
>
> **[3:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=196)** This pre-trained model has learned general language patterns and semantic representation from this data.
>
> **[3:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=203)** If you have a use case or domain use case, you need to customize the model using task-specific fine-tuning.
>
> **[3:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=213)** This fine-tuning involves taking the pre-trained LLMs and further training it on a smaller dataset that is targeted to the task at hand.
>
> **[3:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=222)** For example, sentiment analysis, text classification, or question answering.
>
> **[3:48](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=228)** This code defines a task targeted dataset for sentiment analysis.
>
> **[3:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=234)** texts is a variable that stores a list of text samples or examples for sentiment analysis.
>
> **[4:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=242)** labels is a variable that stores a list of sentiment labels.
>
> **[4:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=247)** In this example, sentiment labels are encoded with integers, zero for negative sentiment, one for neutral sentiment, and two for positive sentiment.
>
> **[4:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=258)** During fine-tuning, the pre-trained model learns to predict the sentiment labels based on the input text samples.
>
> **[4:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=267)** Domain fine-tuning involves fine-tuning a pre-trained model on a domain-targeted dataset to adapt it to the characteristics of that domain.
>
> **[4:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=277)** This process typically involves providing labeled examples from the targeted domain to the model during fine-tuning, In this example, the variable medical_texts contains concrete medical examples such as patient symptoms, diagnostic results, and medical conditions.
>
> **[4:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=296)** When fine-tuning a model on this dataset, the model will learn to generate text that is consistent with the medical domain based on the provided examples.
>
> **[5:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=308)** Let's use this opportunity to compare the difference between how BERT and GPT handle attention mask during our domain example.
>
> **[5:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=318)** As we saw earlier in the video, BERT requires explicit padding to ensure that all input sequences within a batch have the same length.
>
> **[5:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=327)** GPT does not require explicit padding because all tokens are considered as input tokens and there are no padding tokens.
>
> **[5:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=337)** Basic hyperparameter tuning in an LLM involves optimizing the hyperparameters that control the training process of the model.
>
> **[5:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=346)** There are many hyperparameter techniques, and in this example, batch size, learning rate, and the number of epochs is shown.
>
> **[5:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/fine-tuning-methods?u=76281980&t=355)** Hyperparameters related to the architecture of the model, such as the number of layers, hidden units, attention heads, et cetera, can significantly affect the model's capacity and performance.

> [!info]- Semantic Content
>
> **Env Vars:** bert (3), llm (2), gpt (2)
> **Code Identifiers:** train_texts (3), train_encodings (2), medical_texts (1)
> **Analogies:** such as (3), for example (3)
> **Code Keywords:** let (2), function (1), case, (1), require (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** as we saw (1), earlier in (1)
> **Speakers:** - [instructor] (1)

#### Retrieval-augmented generation (RAG)
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=0)** - [Narrator] LLMs are commonly trained offline and at one space in time, making the model uncertain of any data that's created after the model was trained.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=11)** This is a major limitation of LLMs.
>
> **[0:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=14)** RAG retrieves data from outside the LLM by integrating it with an external knowledge base, which then augments the user's prompts by adding relevant retrieve data in its response.
>
> **[0:26](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=26)** RAG allows the model to access and leverage information it hasn't previously seen, improving its ability to provide more accurate and relevant responses.
>
> **[0:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=37)** The process involves creating a vector database and using similarity search to find similar information to the query.
>
> **[0:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=45)** This code snippet performs question answering using a combination of a retriever and a generator model.
>
> **[0:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=53)** First, we define the question you want to ask.
>
> **[0:57](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=57)** What is the latest clinical update on diabetes?
>
> **[1:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=60)** This question seeks information about the most recent developments or findings related to the clinical aspects of diabetes.
>
> **[1:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=69)** This type of question is common in medical and healthcare contexts where staying updated with the latest research and clinical guidelines is important for healthcare professionals to provide optimal care to patients.
>
> **[1:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=84)** So after you define the question, you want to tokenize it.
>
> **[1:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=88)** This line tokenizes the question using a tokenizer.
>
> **[1:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=92)** The tokenizer converts the question into token IDs suitable for input to the model.
>
> **[1:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=99)** The return tensors equal PT argument indicates that the token should return a PI torch tensor.
>
> **[1:47](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=107)** This line retrieves relevant passages from a knowledge base using a retriever model.
>
> **[1:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=114)** The retriever takes the tokenized question as input and returns relevant passages that might contain the answer to the question.
>
> **[2:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=123)** The retriever arcs variable contains any additional arguments needed for the retriever.
>
> **[2:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=128)** This line generates an answer to the question using a generator model.
>
> **[2:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=134)** The generator takes the relevant passages retrieved by the retriever as input and generates an answer.
>
> **[2:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=142)** The generate arcs variable contains any additional arguments needed for the generator.
>
> **[2:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=148)** This line decodes the generated answer from token IDs back into text using the tokenizer and prints it out.
>
> **[2:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=156)** The output variable contains the generated answer, and zero is used to access the first generated answer, assuming only one answer is generated.
>
> **[2:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=166)** For instance, if you have generated answers stored in a variable called output, accessing the first answer can be done by using output zero.
>
> **[2:55](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/retrieval-augented-generation-rag?u=76281980&t=175)** This notation allows you to retrieve the specific answer generated for further analysis or presentation.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2), llm (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Parameter-efficient fine-tuning (PEFT)
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=0)** - [Instructor] We provided an overview of the supervised fine-tuning process in an earlier video and revealed a time consuming process.
>
> **[0:09](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=9)** In addition to time constraints, supervised fine-tuning LLMs can also lead to forgetting or degrading of previously learned knowledge.
>
> **[0:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=20)** This is known as catastrophic forgetting.
>
> **[0:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=24)** For example, if the sentiment analysis data set contains a disproportionate number of positive or negative examples for a particular topic, the model may learn to associate sentiments more strongly with words related to that topic.
>
> **[0:40](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=40)** Recall that parameters are internal settings learned by the model during training.
>
> **[0:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=46)** These parameters represent the coefficients or values associated with the connections between neurons in neural networks, or the relationships between features and labels in other types of models.
>
> **[1:01](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=61)** Essentially, these weight and bias matrices are learnable parameters that the model adjusts during training to minimize the loss function.
>
> **[1:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=73)** Parameter-efficient tuning uses different approaches to fine tuning, like freezing some parts of the LLM, or updating only a subset of the model's parameters, and only training other parts.
>
> **[1:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=88)** In GPT models, word embedding parameters are typically kept frozen to preserve the model's basic understanding of language structure.
>
> **[1:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=98)** Layer normalization parameters normalize the activations within each layer of the model and are also frozen.
>
> **[1:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=106)** Freezing them helps maintain the stability of the model's internal representations during fine tuning.
>
> **[1:53](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=113)** Initial transformer block parameters in the initial layers of the GPT model capture general language patterns, and are often frozen during fine tuning to preserve the pre-trained knowledge.
>
> **[2:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=127)** Parameters that are commonly frozen during fine tuning of BERT include embedding layer parameters, which include token embeddings, segment embeddings, and positional embeddings.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=140)** They capture basic token level, segment level, and positional information in the input sequences.
>
> **[2:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=149)** Freezing them helps preserve the model's basic understanding of language structure.
>
> **[2:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=155)** Encoder-layer parameters in the encoder layers of BERT capture hierarchical representation of the input text.
>
> **[2:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=163)** Freezing these parameters preserves the pre-trained knowledge learned during pre-training.
>
> **[2:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=171)** Freezing layers during fine tuning involves preventing the weights of certain layers from being updated during the training process.
>
> **[3:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=180)** This can be useful when you want to leverage pre-trained weights from a model and only fine tune special parts of the model on a new task or dataset.
>
> **[3:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=190)** In most deep learning frameworks, freezing layers is typically achieved by setting the requires_grad attribute of the parameters in those layers to false.
>
> **[3:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=200)** This prevents the optimizer from computing gradients and updating the weights of those parameters.
>
> **[3:29](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=209)** The most commonly used parameter-efficient fine tuning technique is LoRA, or low rank adaptation.
>
> **[3:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=216)** The key idea behind LoRA is to add a low rank adapter layer on top of the pre-trained language model.
>
> **[3:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=225)** The low rank adapter layer is a smaller and simpler neural network layer added on top of a larger, pre-trained language model.
>
> **[3:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=234)** This adapter layer focuses on learning task-specific information while keeping the original model's knowledge intact.
>
> **[4:02](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=242)** During fine tuning only the parameters in the adapter layer are updated while the parameters in the pre-trained model remain fixed.
>
> **[4:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=252)** LoRA, has many variants like QLoRA, and Long LoRA.
>
> **[4:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=258)** QLoRA, or quantized low-rank adaptation combines two methods.
>
> **[4:24](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=264)** Like LoRA, QLoRA adds a smaller and simpler adapter layer on top of the pre-trained model.
>
> **[4:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=270)** But QLoRA also makes the numbers used in the adapter layer simpler by rounding them off to make them easier to work with.
>
> **[4:39](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=279)** This simplification helps save memory and makes calculations faster.
>
> **[4:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=284)** This is what quantization means, representing numerical values with fewer bits, which reduces memory usage and computational costs.
>
> **[4:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/parameter-efficient-tunning-peft?u=76281980&t=296)** All three methods presented in this chapter can help improve LLM performance, but they go from the simple to the complex, and will depend on your use case and goal.

> [!info]- Semantic Content
>
> **Env Vars:** llm (2), gpt (2), bert (2)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** function (1)
> **Code Identifiers:** requires_grad (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Parameter-efficient fine-tuning with LoRa
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980&t=6)** - In this challenge, you'll add a code for data pre-processing and fine-tuning a model using LoRa.
>
> **[0:13](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980&t=13)** Some steps are pre-coded for you.
>
> **[0:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980&t=16)** First, you'll define model names, load a dataset, initialize the tokenizer using the base RoBERTa model, define a pre-processing function, and then apply pre-processing to the entire dataset in batches, removing the text column.
>
> **[0:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980&t=37)** In exercise two, you'll create a model for sequence classification based on a pre-trained model.
>
> **[0:44](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/challenge-parameter-efficient-fine-tuning-with-lora?u=76281980&t=44)** You'll configure LoRa parameters, apply LoRa parameters to the model, print information about the model's trainable parameters, obtain a trainer object for LoRa fine-tuning, and then initiate the training process for the model using LoRa fine-tuning.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Prerequisites:** configure (1)
> **Speakers:** - in (1)

#### Solution: Parameter-efficient fine-tuning with LoRa
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=5)** - [Instructor] I hope you enjoyed that fourth challenge.
>
> **[0:08](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=8)** Let's take a look at the solution.
>
> **[0:11](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=11)** So here, we didn't have to load a dataset.
>
> **[0:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=15)** We have a pre-coded notebook with code that lets us fine tune two models with LoRA.
>
> **[0:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=23)** So the first thing you should note is that much of this code, again, is already coded for you, right?
>
> **[0:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=33)** There are simply two exercises that you'd had to do.
>
> **[0:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=36)** One is the data preprocessing code cell, and the second one is the PEFT training code cell.
>
> **[0:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=46)** So I will walk through the notebook, and when we get to the exercise section, I will talk about what the solution looks like.
>
> **[0:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=58)** So here, the first thing we do, as usual, is we have to install dependencies.
>
> **[1:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=63)** Now you'll notice here that there's a comment out with a pip install transformers datasets evaluate accelerate peft.
>
> **[1:12](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=72)** Well that is a shortcut to use rather than having to code each one of these.
>
> **[1:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=79)** But what I've done is I've put them here so that you can actually understand what each one of these is doing, 'kay?
>
> **[1:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=85)** But feel free to uncomment this out and of course remove these if you need it.
>
> **[1:32](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=92)** So exercise number one, Dataset Preprocessing.
>
> **[1:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=95)** You had to define the model name, and you define the model name, roberta_model_name, and this is the pretrained errors-fix transformer, using the RoBERTa base model.
>
> **[1:52](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=112)** You also had to initialize a variable called modified_base, and this is a modified version of the RoBERTa base model.
>
> **[1:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=119)** And then you also had to initialize a model, a variable called base_model.
>
> **[2:04](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=124)** And then you had to load the dataset, and then you had to initialize a tokenizer using the base RoBERTa model, so here, and then you had to define a preprocessing function.
>
> **[2:20](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=140)** And this tokenizes the text data, truncating and padding sequences.
>
> **[2:27](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=147)** And then you had to apply preprocessing to the entire dataset in batches, removing the text column.
>
> **[2:35](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=155)** And this is standard machine learning best practices.
>
> **[2:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=158)** We're splitting the tokenized dataset into train, evaluation, and test datasets.
>
> **[2:45](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=165)** And here, we're extracting the number of classes and their names.
>
> **[2:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=171)** And here, we're just printing those out.
>
> **[2:54](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=174)** And then here, we're creating an id2label mapping, and we will this for our classifier so we can classify whether a news article from our dataset is either sports, entertainment, or business, for example.
>
> **[3:10](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=190)** And then we have a data_collator that we have to tokenize and that returns a PyTorch tensor.
>
> **[3:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=198)** And that's ran, and so I'm just scrolling down here and then there's training.
>
> **[3:23](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=203)** And so here, the notebook trains two models, one using LoRA, and the other with full fine tuning.
>
> **[3:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=213)** And these are the concepts that we talked about in the chapter.
>
> **[3:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=217)** So with the LoRA training times, the number of training parameters can be, you know, with any model training time, it's going to be long, depending on many different factors, whether you are using CPUs or GPUs or TPUs, and the amount of data you're bringing in, the type of data.
>
> **[3:58](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=238)** But here, you're simply going to just define the training arguments for the model training.
>
> **[4:03](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=243)** And this is standard boilerplate code, if you will.
>
> **[4:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=246)** And then down here, you're going to define a function to create a trainer object for model training, and you're going to create the object with the specified arguments, model=model, and again, this is standard boilerplate trainer function code for creating a trainer object.
>
> **[4:22](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=262)** So then you create a trainer object for full fine tuning of the model, and that's here.
>
> **[4:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=268)** And then we start training the model, and that's here.
>
> **[4:31](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=271)** So the model is being trained, and then you can see, there's different steps, the training loss and the validation loss.
>
> **[4:37](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=277)** Again, typical machine learning loss type of data that you would see.
>
> **[4:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=283)** And then here, we are going to actually do the programmer efficient fine tuning training with LoRA.
>
> **[4:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=291)** So here is where you had to create a model for sequence classification based on a pretrained model, and that's what is here, and here, you're configuring the LoRA parameters for PEFT.
>
> **[5:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=306)** You noticed here that you have a few hyper-parameters that you can modify, the dropout rate and also the learning rate.
>
> **[5:16](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=316)** And here, you're applying LoRA parameters to the model to create the PEFT model.
>
> **[5:21](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=321)** And then here, you're going to just simply print the information about the PEFT model's trainable parameters.
>
> **[5:28](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=328)** And here you are obtaining a trainer object for LoRA fine tuning.
>
> **[5:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=334)** And then here, you're initiating the training process for the PEFT model using LoRA fine tuning.
>
> **[5:43](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=343)** And so now we're going to be training this one.
>
> **[5:46](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=346)** And again, standard machine learning training iterations table if you will, the steps, the loss, the validation loss.
>
> **[5:56](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=356)** And then we're going to save the models.
>
> **[6:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=360)** Performing inference was not one of our exercises, but I think it's really worthwhile to take a look at the code.
>
> **[6:07](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=367)** And you've noticed, as I'm going through here, that there are comments everywhere, and this is to help you really see what each line item is doing.
>
> **[6:17](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=377)** So here we have a function that is going to tokenize the input text, truncate it if needed, pad sequences, and convert it to PyTorch tensors.
>
> **[6:30](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=390)** And then we're passing the tokenized input through the inference model to get predictions.
>
> **[6:34](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=394)** So here, they're going to then print the class of prediction and the label of prediction, and the text as well.
>
> **[6:42](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=402)** So we're asking the model now to classify these two different sentences here, and here.
>
> **[6:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=411)** One has the word hospital, so something maybe health-related, and then here, this says Wall Street, so something perhaps maybe business-related.
>
> **[6:59](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=419)** And the class one label is sports, in terms of this person probably being left in the hospital and participating in some kind of sports, and then this label here in terms of Wall Street was business.
>
> **[7:15](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=435)** And this is how these two different statements were classified.
>
> **[7:19](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=439)** And this next section is just to measure the improvement of the training process, where you take a look at how the trained models perform against the untrained one, and this is the code that does that.
>
> **[7:33](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=453)** And when everything is done, this is your final three sales.
>
> **[7:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=458)** You'll have the evaluation of the non-fine tuned model, you'll have the evaluation of the PEFT fine tuned model, and the fully fine tuned model.
>
> **[7:51](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/solution-parameter-efficient-fine-tuning-with-lora?u=76281980&t=471)** And you can see, they're pretty close here, 0.927 in terms of accuracy for the PEFT fine tuned model and then 0.946, and then of course here, the accuracy here on the non-fine tuned model is 0.248 in terms of accuracy.

> [!info]- Semantic Content
>
> **Env Vars:** peft (7)
> **Code Keywords:** function (4), let (1)
> **Code Identifiers:** roberta_model_name (1), modified_base (1), base_model (1), data_collator (1)
> **Versions:** 0.927 (1), 0.946 (1), 0.248 (1)
> **Exercise Files:** boilerplate (2)
> **Definitions:** is a  (2)
> **Prerequisites:** install (2)
> **CLI Commands:** pip (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=0)** - [Narrator] You've done it.
>
> **[0:01](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=1)** This is an amazing accomplishment.
>
> **[0:05](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=5)** After completing this course, the next steps would depend on your specific goals and interests within the field of natural language processing.
>
> **[0:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=14)** Here are some general next steps you might consider.
>
> **[0:18](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=18)** Apply your knowledge, start working on real world NLP projects to apply the techniques and skills you've learned.
>
> **[0:25](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=25)** This could involve tasks like data pre-processing, sentiment analysis, named entity recognition, and text classification.
>
> **[0:36](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=36)** Learn specialized areas.
>
> **[0:38](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=38)** Depending on your interest, you might want to explore specialized areas of NLP, such as speech processing, language translation, summarization, dialogue systems, or multimodal NLP, combining text with images or audio.
>
> **[0:57](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=57)** Keep learning, practicing, and exploring new areas within NLP based on your interests and career goals.
>
> **[1:06](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=66)** Please feel free to reach out to me on LinkedIn and also join the machine learning community group on LinkedIn as well.
>
> **[1:14](https://www.linkedin.com/learning/advanced-nlp-with-python-for-machine-learning-24079681/next-steps?u=76281980&t=74)** Thank you for taking the course, and remember, this is your moment.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (4)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/advanced-nlp-with-python-for-machine-learning-3807097)

## Skills Covered

- Python (Programming Language)
- Machine Learning
- Artificial Intelligence (AI)
- Natural Language Processing (NLP)

## Path Context

### In [[Advance Your Skills in Natural Language Processing]]
**1 of 6** | [[Hands-On Natural Language Processing]] →

## Appears In

- [[Advance Your Skills in Natural Language Processing]]

## Related Courses

_Courses sharing skills:_

- [[Advanced Python in Excel- Machine Learning]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Association Rules]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- k-Means Clustering]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Logistic Regression]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning
- [[Machine Learning with Python- Decision Trees]] — Python (Programming Language), Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)