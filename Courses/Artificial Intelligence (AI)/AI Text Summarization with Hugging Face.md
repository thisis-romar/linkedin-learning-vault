---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: ai-text-summarization-with-hugging-face
url: "https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face"
duration_minutes: 125
duration: 2h 5m
level: Advanced
updated: 10/30/2023
learners: 13970
skills:
  - Automatic Text Summarization
  - Artificial Intelligence (AI)
  - Hugging Face Products
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFsoegl9JPPtQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244998089?e=2147483647&amp;v=beta&amp;t=vXBLNsUDreVFjATI6mrZEIAy6JXjfbbmMP_lbB30260"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with Large Language Models]]'
prev_courses:
  - '[[TensorFlow- Working with NLP]]'
next_courses:
  - '[[Applied AI- Building NLP Apps with Hugging Face Transformers]]'
path_nav: '[{"path":"Develop Your Skills with Large Language Models","position":8,"total":9,"prev":"TensorFlow- Working with NLP","next":"Applied AI- Building NLP Apps with Hugging Face Transformers"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/automatic-text-summarization
  - skill/artificial-intelligence-ai
  - skill/hugging-face-products
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Text%20Summarization%20with%20Hugging%20Face.md)

![AI Text Summarization with Hugging Face](https://media.licdn.com/dms/image/v2/D4D0DAQFsoegl9JPPtQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1707244998089?e=2147483647&amp;v=beta&amp;t=vXBLNsUDreVFjATI6mrZEIAy6JXjfbbmMP_lbB30260)

# AI Text Summarization with Hugging Face

> The Hugging Face AI community aspires to advance and democratize artificial intelligence through open source and open science. In this course, Janani Ravi guides you through using this powerful AI tool to summarize text. Learn how extractive text summarization works, as well as its intermediate representations. Explore evaluation metrics, and find out how to navigate and access information on the 

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face) | 2h 5m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [AI Text Summarization with Hugging Face](#ai-text-summarization-with-hugging-face)
- [**1. Understanding Extractive Text Summarization**](#1-understanding-extractive-text-summarization) (4 videos)
  - [Prerequisites](#prerequisites)
  - [Extractive text summarization](#extractive-text-summarization)
  - [Intermediate representations for extractive summarization](#intermediate-representations-for-extractive-summarization)
  - [Evaluation metrics for summaries](#evaluation-metrics-for-summaries)
- [**2. Performing Extractive Text Summarization Using Hugging Face**](#2-performing-extractive-text-summarization-using-hugging-face) (4 videos)
  - [Exploring Hugging Face](#exploring-hugging-face)
  - [Signing up for Hugging Face](#signing-up-for-hugging-face)
  - [The sumy library for extractive summarization](#the-sumy-library-for-extractive-summarization)
  - [Extractive text summarization on Hugging Face](#extractive-text-summarization-on-hugging-face)
- [**3. Understanding Abstractive Text Summarization**](#3-understanding-abstractive-text-summarization) (2 videos)
  - [Abstractive text summarization](#abstractive-text-summarization)
  - [Abstractive summarization using the Hosted Inference API on Hugging Face](#abstractive-summarization-using-the-hosted-inference-api-on-hugging-face)
- [**4. Understanding Transformers**](#4-understanding-transformers) (4 videos)
  - [Sequence-to-sequence models](#sequence-to-sequence-models)
  - [Attention in sequence-to-sequence models](#attention-in-sequence-to-sequence-models)
  - [A brief introduction to Transformers](#a-brief-introduction-to-transformers)
  - [Transformers in Hugging Face](#transformers-in-hugging-face)
- [**5. Performing Summarization Using a Hugging Face Pipeline**](#5-performing-summarization-using-a-hugging-face-pipeline) (6 videos)
  - [Using Colab to work with Hugging Face Transformers](#using-colab-to-work-with-hugging-face-transformers)
  - [Loading the CNN Daily Mail dataset](#loading-the-cnn-daily-mail-dataset)
  - [Cleaning text data](#cleaning-text-data)
  - [Generating summaries with Hugging Face Transformers](#generating-summaries-with-hugging-face-transformers)
  - [Evaluating summaries using ROUGE scores](#evaluating-summaries-using-rouge-scores)
  - [Summarizing text and computing aggregate ROUGE scores](#summarizing-text-and-computing-aggregate-rouge-scores)
- [**6. Fine-Tuning a Transformer Model for Summarization**](#6-fine-tuning-a-transformer-model-for-summarization) (4 videos)
  - [Understanding tokenizers](#understanding-tokenizers)
  - [Fine-tuning the T5 small model](#fine-tuning-the-t5-small-model)
  - [Pushing the model to the Hugging Face Hub](#pushing-the-model-to-the-hugging-face-hub)
  - [Summarizing text using the fine-tuned model](#summarizing-text-using-the-fine-tuned-model)
- [**7. Exploring Different Hugging Face Transformers for Summarization**](#7-exploring-different-hugging-face-transformers-for-summarization) (6 videos)
  - [Accessing the BBC dataset on Google Drive](#accessing-the-bbc-dataset-on-google-drive)
  - [Instantiating and cleaning the BBC News summaries dataset](#instantiating-and-cleaning-the-bbc-news-summaries-dataset)
  - [Generating summaries using Pegasus](#generating-summaries-using-pegasus)
  - [Generating multiple summaries and computing aggregate ROUGE scores](#generating-multiple-summaries-and-computing-aggregate-rouge-scores)
  - [Generating summaries using BART](#generating-summaries-using-bart)
  - [Computing ROUGE metrics for a set of summaries](#computing-rouge-metrics-for-a-set-of-summaries)
- [**Conclusion**](#conclusion) (1 videos)
  - [Summary and next steps](#summary-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [AI Text Summarization with Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=0)** Hi, and welcome to this course on AI Tech Summarization with [[Hugging Face]].
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=5)** Now, before we go into actually using [[Deep Learning]] models to generate text summaries, let's get a quick overview of what text summarization is all about.
>
> **[0:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=14)** All of us consume a large amount of information in the text format every day.
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=19)** The amount of information generated on the Internet is only growing, and a vast majority of that is information in the form of text.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=28)** Parsing these reams of information is very, very difficult.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=33)** So a way that will allow us to quickly summarize and digest the information available in text form, well, you can see that that's obviously useful.
>
> **[0:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=42)** And this is where [[Automatic Text Summarization]] comes in.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=45)** Automatic text summarization refers to producing a concise and fluent summary of text while preserving key information, content, and overall meaning of the original text.
>
> **[0:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=58)** We know that text summaries can be produced manually by human beings, but with the amount of information out there today, manual summaries are not going to keep up with that.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=68)** The information available online is overwhelming and it's important for us to get this information in a concise format.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=76)** And this is where summaries help.
>
> **[1:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=77)** They help absorb important points quickly and reduce our reading time.
>
> **[1:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=82)** Let's say you're doing some kind of research or document discovery, summaries also help make documents selection easier.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=90)** Summaries can also help improve search functionality by improving the process of indexing the original documents.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=98)** Much of what we do online involves asking questions.
>
> **[1:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=101)** Personalized summaries are very useful in question answering systems.
>
> **[1:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=106)** Building automated systems for text summarization is a hard task.
>
> **[1:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=111)** It's difficult and non-trivial.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=114)** As human beings, we know how to read text, understand it, and then produce a meaningful summary.
>
> **[2:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=120)** But, well, if you think about getting a computer to do this in an automated fashion, that machine needs language capability and context in order to be able to generate effective summaries.
>
> **[2:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=132)** As you might imagine, summarization involves [[Natural Language Processing (NLP)|natural language processing]] and natural language understanding.
>
> **[2:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=139)** This is clearly a very hard task, but with all of the recent developments, there is reason for us to be optimistic.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=146)** Recent breakthroughs in [[Large Language Models (LLM)|large language models]] such as [[ChatGPT]] have made huge strides, allowing deep learning models to produce effective summaries.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=156)** Summarization can be categorized in a variety of different ways, and this visual captures the most important points.
>
> **[2:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=164)** You can see that text summarization can be categorized based on input type, based on the purpose, and based on output type. Summaries based on input type can be single-document summaries where the length of the input text is short.
>
> **[2:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=179)** Many of the early summarization systems dealt with single document summarization. With multi-document summaries, the input text can be arbitrarily long.
>
> **[3:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=189)** As you might imagine, this is much more difficult to work with.
>
> **[3:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=193)** Summarization techniques can also be categorized based on the purpose of the summarization.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=198)** Generic summaries are where the model makes no assumptions about the domain or the content of the text to be summarized, and it treats all inputs the same.
>
> **[3:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=208)** Domain-specific summarization is when your model or algorithm uses domain-specific knowledge to form better summaries.
>
> **[3:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=216)** For example, if you're summarizing research papers in a specific domain, biomedical documents, you may want to use domain-specific summarization.
>
> **[3:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=224)** Query-based summarization is when the summary produced only contains information that answers natural language questions about the input text that you have provided. Summarizers can also be categorized based on the output that they generate.
>
> **[4:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=240)** Extractive summaries are where important sentences are selected from the input text to form a summary.
>
> **[4:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=247)** The summarizer does not generate novel content, but only chooses important sentences from the input.
>
> **[4:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=253)** Abstractive summaries are where the model [[Forms]] its own phrases and sentences to offer a more coherent summary, more humanlike.
>
> **[4:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=262)** As you might imagine, abstractive summarization is more difficult than extractive summarization.
>
> **[4:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=268)** And these are the two techniques that we'll cover in this course.
>
> **[4:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=271)** We'll discuss and understand extractive summarization and see how we can use an app available on Hugging Face to generate extractive summaries.
>
> **[4:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=280)** We'll also understand and work with abstractive summarizers.
>
> **[4:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=283)** These are [[Transformer Models]] available on Hugging Face.
>
> **[4:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=287)** So what exactly is Hugging Face?
>
> **[4:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=289)** Hugging Face offers a platform where the machine learning community can collaborate on models, datasets, and applications that use ML.
>
> **[4:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=298)** This platform allows researchers and developers to contribute to the improvement of existing models, share new models, and collaborate on NLP research and projects.
>
> **[5:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=308)** Hugging Face refers to a company and an open-source community that has made significant contributions to the field of NLP or natural language processing.
>
> **[5:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=318)** You should know that the term Hugging Face usually refers to the community, but it's also a company.
>
> **[5:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=324)** Hugging Face is best known for developing and maintaining the Hugging Face Transformers library, which is an open-source NLP library built on top of [[PyTorch]] and [[TensorFlow]].
>
> **[5:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=335)** The Transformers library provides a wide range of pre-trained models, including state-of-the-art models like Bard, GPT-2, GPT-3, and many others.
>
> **[5:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=345)** The Hugging Face platform also offers a user-friendly website and API, which allows developers and researchers to easily access and use pre-trained models for various NLP tasks.
>
> **[5:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/ai-text-summarization-with-hugging-face?u=76281980&t=357)** And this platform and API is what we are going to be using in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (10), [[Deep Learning]] (2), [[Automatic Text Summarization]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[ChatGPT]] (1)
> **Env Vars:** nlp (4), gpt (2), api (2)
> **Analogies:** imagine (3), such as (1), for example (1)
> **Definitions:** refers to (2), is a  (1), is an  (1)
> **CLI Commands:** make (1)


### 1. Understanding Extractive Text Summarization

[↑ Back to Table of Contents](#table-of-contents)

#### [Prerequisites](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=0)** This course is definitely not a beginner course in [[Artificial Intelligence (AI)|artificial intelligence]] and machine learning, so there are some prerequisites you need to have to make the most of your learning.
>
> **[0:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=9)** First is, I expect that you have some knowledge of the fundamentals of machine learning and artificial intelligence.
>
> **[0:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=15)** I assume that you understand how machine learning works, you understand the concept of transfer learning, where you use pre-trained models and fine-tune them on your dataset.
>
> **[0:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=25)** Another assumption that this course makes is that you have some exposure to [[Natural Language Processing (NLP)|natural language processing]] or NLP techniques.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=33)** You understand the fundamental idea that words are tokenized and converted to numeric form before they are fed into ML models.
>
> **[0:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=41)** And finally, we'll be writing a bunch of [[Python (Programming Language)|Python]] code in this course.
>
> **[0:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=46)** So I expect that you are comfortable programming in Python and using Python libraries.
>
> **[0:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=51)** We'll be programmatically working with the Transformers library in [[Hugging Face]] using Python and we'll be fine-tuning our models using the [[PyTorch]] framework.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/prerequisites?u=76281980&t=61)** You don't need to have an understanding of how PyTorch works, just Python is sufficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (5), [[PyTorch]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Hugging Face]] (1)
> **CLI Commands:** python (5), make (1)
> **Env Vars:** nlp (1)

#### [Extractive text summarization](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=0)** In this movie, we'll discuss the basics of extractive text summarization.
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=5)** If you remember, we discussed that summarization models can be categorized based on the kind of output that they generate.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=12)** They can be extractive models or abstractive models.
>
> **[0:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=15)** Extractive models do not produce any new text when they generate the summary. They simply identify important sections of the original text and generate those sections verbatim.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=28)** Extractive models work exactly as their name suggests.
>
> **[0:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=31)** They depend only on the extraction of sentences from the original content.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=37)** All extractive summarizers perform three basic tasks: They construct an intermediate representation of the input text which tries to capture the main aspects of the text.
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=48)** They then score the sentences based on the intermediate representation.
>
> **[0:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=53)** And finally, once scores have been generated, they select a summary comprising of a number of sentences which have the highest scores.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=61)** As you might imagine, there are several different techniques that can be used to generate the intermediate representation of the input text.
>
> **[1:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=69)** Now, this representation is used to find important portions of the text and summaries are generated based on this representation.
>
> **[1:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=77)** In the next movie, we'll discuss the different ways in which intermediate representations can be generated from input text.
>
> **[1:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=84)** The intermediate representation can be divided into two broad categories; topic representation and indicator representation.
>
> **[1:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=91)** The topic representation tries to identify the important topics in the original text and then to generate a summary which includes those topics.
>
> **[1:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=100)** The indicator representation represents every sentence as a list of features of importance and then uses that to generate a summary.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=109)** Once we have the intermediate representation of the content, a sentence score is assigned to every sentence based on its importance.
>
> **[1:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=118)** There are, of course, different techniques that you can use to assign this importance score to each sentence.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=123)** Once every sentence has an importance score, the algorithm will go in and select the top-k most important sentences to generate the summary.
>
> **[2:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=132)** And there are different techniques that can be used for this as well.
>
> **[2:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization?u=76281980&t=135)** You can use the greedy approach where you pick important sentences, where the importance score is above a certain threshold, or the summarizer can use some kind of optimization techniques so that the sentences that have been selected maximize the overall importance and coherency and minimize the redundancy.

> [!info]- Semantic Content
>
> **Cross-References:** we discussed (1), in the next (1)
> **CLI Commands:** find (1)
> **UI Navigation:** select the (1)
> **Analogies:** imagine (1)

#### [Intermediate representations for extractive summarization](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=0)** In this movie, we'll do a quick overview of some of the techniques that can be used to generate the intermediate representation that will then be used for extractive summarization. Representing the original content using an intermediate representation is the first step in the summarization process.
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=19)** Now, the kind of intermediate representation that can be used to represent content is divided into two broad categories; topic words representation and indicator representation.
>
> **[0:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=29)** The objective of topic words representation is to identify words that describe the topic of the input argument.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=37)** And this is a very old tried and tested technique.
>
> **[0:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=40)** It's one of the original techniques from back in the 1950s.
>
> **[0:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=44)** There are several techniques that fall into this broad category.
>
> **[0:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=47)** We have topic words, frequency-based techniques, latent semantic analysis, and Bayesian topic models.
>
> **[0:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=54)** I'll explore each of these briefly so you get a big picture understanding of how these works, starting with topic words.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=61)** In this representation, you use mathematical techniques or statistical techniques to identify important words that are present in the input text.
>
> **[1:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=69)** You may use frequency thresholds or the log-likelihood ratio test to identify topic signatures.
>
> **[1:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=77)** Once you've identified these topics, you'll then assign an importance score to each sentence, which can be computed in a variety of ways.
>
> **[1:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=86)** You may say that the more the number of topics a sentence contains, the more important it is.
>
> **[1:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=91)** This technique will of course favor longer sentences which have more topic coverage.
>
> **[1:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=96)** Or you can say sentence importance is a function of the proportion of topic signatures a sentence contains.
>
> **[1:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=103)** This favors more dense sentences as opposed to longer sentences.
>
> **[1:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=108)** Another way to identify important topics in the input content is to use frequency-based techniques.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=114)** Now there are, of course, different variations of this, but the basic idea is that you assign weights to words in text based on topic representations, and you can use [[Microsoft Word|word]] [[Probability]] scores as a measure of word importance.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=128)** Essentially, you'll compute how many times a particular word occurs in the input text?
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=133)** That's the frequency of the word f(w) and divide that by the total number of words in the text.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=138)** This will give you a word probability score.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=140)** The more often a word occurs, the more important that word is supposed to be.
>
> **[2:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=145)** This, of course, means that you will have to pre-process the input text to get rid of stop words.
>
> **[2:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=150)** Stop words are words that add no meaning the, then, than, and so on.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=156)** As you might imagine, these stop words occur very frequently in text.
>
> **[2:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=160)** Finally, once every sentence has an importance score associated with this, the sentences that you select for your summary may be the ones that contain the highest probability words.
>
> **[2:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=172)** A variation of the frequency-based intermediate representation is to use TF-IDF scores rather than word probabilities to compute the importance of a sentence.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=184)** TF-IDF stands for Term Frequency and Inverse Document Frequency.
>
> **[3:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=189)** It's a technique that is used to represent words in numeric form.
>
> **[3:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=193)** The term frequency will up weigh words which occur very frequently in documents.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=198)** Let's say the word amazing occurs several times in a document, that word will be up weighed.
>
> **[3:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=204)** The inverse document frequency will down weigh words which occur very frequently across the entire corpus, because these words are more likely to be stop words.
>
> **[3:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=216)** Another technique that's used in topic words representation that empirically gives good results is latent semantic analysis.
>
> **[3:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=223)** This is an unsupervised method for extracting a representation of input text.
>
> **[3:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=229)** This technique uses singular value decomposition, a matrix decomposition technique to determine to what extent a particular sentence represents a topic.
>
> **[4:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=240)** Latent semantic analysis thus identifies the latent topics that are present in your input text.
>
> **[4:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=247)** You can then choose sentences in the summary representing every topic that was identified.
>
> **[4:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=253)** And the last technique that we'll discuss here in the broad topic of topic words representation is Bayesian topic models.
>
> **[4:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=261)** As the name suggests, Bayesian topic models are probabilistic models that help uncover and represent topics embedded in documents. Summarizers that are built using Bayesian topic models determine the similarities and difference between documents and they score sentences using a measure known as the KL measure, where KL stands for Kullback-Liebler.
>
> **[4:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=286)** The KL measure measures the difference or divergence between two probability distributions, say P and Q.
>
> **[4:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=293)** This is an interesting method for scoring sentences in the summarization because it shows that good summaries are intuitively similar to the input documents.
>
> **[5:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=303)** So far, we've discussed techniques that fall under the broad category of topic words representation.
>
> **[5:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=308)** There is also the indicator representation that you can use to represent original content.
>
> **[5:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=314)** Here, the input text is modeled in terms of features, and these features are used to rank the sentences in the input text.
>
> **[5:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=322)** These features can be anything that conveys the importance of text, sentence length, position in the document when sentences have certain phrases.
>
> **[5:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=331)** All of these are features.
>
> **[5:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=333)** Again, there are many different techniques you can use to get an indicator representation for your input text, but we'll discuss two briefly; graph methods and machine learning techniques.
>
> **[5:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=344)** Let's discuss graph methods first.
>
> **[5:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=347)** These techniques represent documents as a connected graph, and these are heavily influenced by the PageRank algorithm, which [[Google]] search uses.
>
> **[5:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=356)** Unlike in PageRank, which uses links to determine the importance of a particular article, two sentences in your input text are set to be connected if the similarity between them is greater than a certain threshold.
>
> **[6:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=370)** These models analyze the entire input text and try to find subgraphs that exist within these texts.
>
> **[6:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=377)** And these subgraphs represent topics. Sentences that are thus connected to many other sentences in the input text are considered to be important and should be included in the summary.
>
> **[6:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=389)** And finally, we have indicator representations that are generated using machine learning techniques.
>
> **[6:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=395)** Here, the actual summarization task is treated as a classification problem where you classify input documents into categories.
>
> **[6:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=404)** Essentially, you train a model on the original text and you have it classify sentences in that text as summary sentences or non-summary sentences.
>
> **[6:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/intermediate-representations-for-extractive-summarization?u=76281980&t=416)** The training data that you'd use here would be a number of documents and the extractive summaries for each of those documents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (10), [[Probability]] (4), [[Google]] (1)
> **Definitions:** is a  (2), stands for (2), is an  (2), means that (1), known as (1)
> **Analogies:** picture (1), imagine (1), similar to (1)
> **Env Vars:** idf (2)
> **CLI Commands:** find (1)

#### [Evaluation metrics for summaries](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=0)** You have a summarizer and you use it to generate a summary of input text.
>
> **[0:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=4)** How do you know whether the summary is a good one?
>
> **[0:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=7)** Well, you use an evaluation metric to evaluate the candidate summary produced by your model, and the evaluation metric used for summarized text is the ROUGE score.
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=19)** ROUGE here stands for Recall Oriented Understudy for Gisting Evaluation.
>
> **[0:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=24)** The ROUGE score is not a single metric, instead, it is a family of metrics.
>
> **[0:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=30)** We'll discuss here a few different variants of the ROUGE score.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=33)** ROUGE scores are scalar values in the range 0 to 1.
>
> **[0:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=38)** A ROUGE score close to 0 indicates poor similarity between candidate and reference summaries, a ROUGE score close to 1 indicates a strong similarity between the candidate and reference summary.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=50)** A ROUGE metric that you can use to evaluate your summaries is the ROUGE-n score, where n stands for a number, 1, 2, 3, and so on.
>
> **[0:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=58)** This is a recall-based measure based on the comparison of n-grams between the candidate summary and the reference summary.
>
> **[1:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=67)** N-grams here can be unigram, bigrams, trigrams, and so on, which is what gives us ROUGE-1, ROUGE-2, ROUGE-3, et cetera.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=76)** Here is how this metric is evaluated.
>
> **[1:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=78)** Let p be the number of common n-grams between the candidate summary generated by the model and the reference summary that's part of the original dataset.
>
> **[1:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=87)** Let q be the number of n-grams extracted from the reference summary.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=92)** A ROUGE-n score is computed by dividing p by q.
>
> **[1:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=97)** You can also use ROUGE-L scores as an evaluation metric for your summaries.
>
> **[1:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=102)** This measure uses the concept of LCS or the Longest Common Subsequence between text sequences.
>
> **[1:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=110)** When you compare the candidate summary and the reference summary, the idea here is that the longer the LCS between two summary sentences, the more similar they are.
>
> **[2:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=121)** This metric is much more flexible than the ROUGE-n score that we discussed previously.
>
> **[2:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=127)** This metric takes into account sentence-level structural similarity in a very natural way.
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=133)** The drawback is, of course, that the n-grams in the longest common subsequence need to all be consecutive words.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=140)** Another ROUGE metric that you can use to evaluate your summaries is the ROUGE-SU metric.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=146)** This metric is called the skip bi-gram and uni-gram ROUGE, and it evaluates similarity between sentences using bi-grams as well as uni-gram.
>
> **[2:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=157)** However, because it takes into account skip bi-grams, this means that this metric allows the insertion of words between the first and the last words of the bi-gram, making this metric much more flexible.
>
> **[2:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluation-metrics-for-summaries?u=76281980&t=170)** So the similarity between sentences need not be in the form of consecutive sequences of words.

> [!info]- Semantic Content
>
> **Env Vars:** rouge (18), lcs (2)
> **Definitions:** is a  (3), stands for (2), is called (1), means that (1)
> **Cross-References:** we discussed (1)


### 2. Performing Extractive Text Summarization Using Hugging Face

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploring Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=0)** In this course, we'll be performing text summarization using [[Hugging Face]].
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=5)** So before we do anything, we need to be introduced to the Hugging Face community and platform and see what it has to offer us.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=12)** Head over to [[[Hugging Face|huggingface]].co](https://huggingface.co), and here you can see what the Hugging Face community has to offer.
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=19)** Hugging Face refers to a company and an open-source community that focuses on [[Natural Language Processing (NLP)|natural language processing]] and [[Artificial Intelligence (AI)|artificial intelligence]].
>
> **[0:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=27)** This platform offers a range of tools and services related to NLP and machine learning.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=33)** Now, you might have a particular kind of task that you wish to solve using artificial intelligence.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=37)** You can head over to the tasks option here on Hugging Face, and here you'll find the collection of predefined tasks that users can use to fine-tune and evaluate pre-trained models.
>
> **[0:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=49)** And you can see that there are models for all kinds of tasks.
>
> **[0:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=52)** There are models for [[Computer Vision]] tasks.
>
> **[0:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=54)** These include image classification, image segmentation, object detection, and many others.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=61)** If you scroll down, you'll find the models that are available on Hugging Face for natural language processing tasks, for question answering, sentence similarity, text classification, text generation, as well as summarization. Summarization is the task that we are interested in at this point in time.
>
> **[1:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=79)** The Hugging Face community also offers models for audio-related tasks, tabular classification, tabular regression tasks, multimodal tasks, and even [[Reinforcement Learning]].
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=90)** Anything that you're looking for in the field of artificial intelligence as pre-trained models should be available on Hugging Face.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=98)** Today we are focused on text summarization, so let's scroll back up and click through to "Summarization" under natural language processing.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=105)** This will give you an overview of what exactly this task is about and also all of the resources that Hugging Face has to offer for text summarization.
>
> **[1:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=117)** These resources could be models, datasets or apps that the Hugging Face community has built and made available here.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=124)** Now, if you head over to models, you'll be able to find all of the pre-trained models available here on Hugging Face, and every model is categorized based on the kind of task that it performs.
>
> **[2:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=136)** If you click through to the summarization category, you'll be able to drill down into all of the models available here on Hugging Face for summarization.
>
> **[2:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=145)** Most of these are [[Transformer Models]], but there are other simpler models performing extractive summarization as well.
>
> **[2:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=152)** Let's click through to the very first one.
>
> **[2:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=154)** This is the bart-large-cnn from [[Facebook]].
>
> **[2:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=157)** This is a pre-trained sequence to sequence transformer model based on the paper that's linked off the middle of the screen, BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension.
>
> **[2:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=171)** This is just one model available for text summarization.
>
> **[2:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=174)** As you can see, Hugging Face provides many more.
>
> **[2:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=177)** Now, let's say you're interested in datasets for a particular kind of task, head over to the datasets tab.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=184)** Now, since we're focused on summarization, we can click on the summarization task off to the left of your screen, and this will give you access to all of the summarization datasets that you can access from the Hugging Face community.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=198)** A common dataset used for fine-tuning summarization models is the cnn_dailymail dataset, and if you click through, you'll be able to get an overview of what this dataset is all about.
>
> **[3:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=209)** Observe a sample here.
>
> **[3:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=211)** The dataset comprises of the original article and the corresponding summary, and this can be used to train or fine-tune summarization models.
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=220)** Well, Hugging Face also offers something known as spaces, and spaces is essentially where members of the Hugging Face community make available applications that they've built around ML models.
>
> **[3:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=234)** There are a whole host of applications here for different kinds of machine learning tasks and in fact we'll be using one of these apps for extractive text summarization.
>
> **[4:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=244)** We'll get to that in a bit.
>
> **[4:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=246)** Hugging Face offers a variety of different machine learning models and other applications.
>
> **[4:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=252)** If you head over to Docs, you'll get an overview of what Hugging Face has to offer and get documentation for how you can use different aspects of Hugging Face.
>
> **[4:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=262)** And the great thing about the Hugging Face community is that most of this is available to you absolutely free.
>
> **[4:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=268)** If you look at pricing, you can see that there are paid plans for Hugging Face, but the HF Hub, which is what we'll be using, is an absolutely free plan. For [[Prototyping]] and playing around with ML models, HF Hub is more than sufficient.
>
> **[4:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/exploring-hugging-face?u=76281980&t=283)** That's what we'll be using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (19), [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Hugging Face|Huggingface]] (1), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Computer Vision]] (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** refers to (1), is a  (1), known as (1), is an  (1)
> **Env Vars:** nlp (1), bart (1)
> **UI Navigation:** scroll down (1), click on (1)
> **Code Identifiers:** cnn_dailymail (1)
> **URLs:** [huggingface.co](https://huggingface.co) (1)

#### [Signing up for Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=1)** Before we can use [[Hugging Face]] for text summarization, we'll need to create an account.
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=5)** So let's go ahead and sign up for a Hugging Face account using the Sign Up button.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=10)** Just enter a valid email address and click on "Next".
>
> **[0:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=14)** Specify the username that you want to use on Hugging Face, I've simply said Cloud-user.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=18)** Specify your full name.
>
> **[0:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=20)** You can add in additional details if you want to, but make sure you agree to the terms of service and click on the "Create Account" button.
>
> **[0:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=29)** You may have to prove that you're not a robot, you're a human being and that's it.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=33)** You're logged in and you'll have received a confirmation email in your inbox.
>
> **[0:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=39)** You'll need to verify your email address by clicking on the link in your confirmation email.
>
> **[0:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=44)** But once you're done, you're signed up for Hugging Face.
>
> **[0:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=47)** So here is the email that I received, I click on this link, this takes me back to Hugging Face.
>
> **[0:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/signing-up-for-hugging-face?u=76281980&t=53)** My email address has been verified, I now have an account, and I'm signed in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (5)
> **UI Navigation:** click on (3)
> **CLI Commands:** make (1)
> **Prerequisites:** you'll need (1)

#### [The sumy library for extractive summarization](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=0)** In this demo, we'll see how you can perform extractive text summarization using [[Hugging Face]].
>
> **[0:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=6)** Now, extractive text summarization is a technique where we generate a summary of a longer text by selecting and extracting the most important sentences or phrases directly from the original text.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=18)** So we do not generate new sentences, however, we identify and condense existing content that represents the key points using sentences from the original text.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=28)** We've discussed that extractive text summarization can be performed using a variety of different techniques.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=35)** Now, it turns out you can try to implement those techniques yourself, but they've already been implemented by someone out there who's interested in text summarization and has made those summarizers available to us here on [[GitHub]].
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=48)** This is the GitHub repo for the Sumy module which allows automatic summarization of text content and [[HTML]] pages.
>
> **[0:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=57)** Sumy is primarily available as a [[Python (Programming Language)|Python]] module.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=61)** You should note that the author created Sumy as a part of his diploma thesis because he wanted to reduce the length of articles he was reading in the Czechoslovak language.
>
> **[1:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=71)** However, Sumy grew from there, and it's now used by a variety of different projects.
>
> **[1:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=77)** The Sumy library implements a number of different summarizers using extractive techniques.
>
> **[1:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=85)** Sumy has documentation documenting all the summarizers that it implements, and it also works with a number of different languages.
>
> **[1:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=93)** We'll, of course, work with text summarization in English.
>
> **[1:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=97)** Now if you scroll a little further down under usage, you can see that Sumy is available on Hugging Face.
>
> **[1:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=103)** You see the URL there, [https://[[Hugging Face|huggingface]].co/spaces/issam9/sumy_space](https://huggingface.co/spaces/issam9/sumy_space).
>
> **[1:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=110)** This makes the Sumy library available on Hugging Face as a very simple app that we can just use.
>
> **[1:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=116)** And that's how we'll be working with Sumy in this demo. Before we actually use the Sumy summarizer on Hugging Face, let's head over to the documentation and see what summarizers have been implemented here.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=129)** As you scroll down and look at all of the summarization techniques, you can see that all of these are extractive summarizers.
>
> **[2:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=137)** There is latent semantic analysis for summarization, LexRank, TextRank, KL-Sum, all of these are extractive techniques and we'll see how these techniques work once we head over to Hugging Face.
>
> **[2:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=151)** Now if you head over to Spaces on Hugging Face, we've discussed earlier that this is where developers put up applications that use machine learning. Here in Spaces, simply search for Sumy.
>
> **[2:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=163)** And the first hit here, Sumy_space is a very simple app that has a UI and behind the scenes, simply uses the Sumy library for extractive summarization.
>
> **[2:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=175)** This app that you see hosted on Hugging Face performs extractive summarization using the Sumy library.
>
> **[3:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=183)** The app itself is very straightforward.
>
> **[3:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=186)** It's just a web frontend that allows you to pick the summarization method that you want to use, the language in which you're specifying your input text, the number of sentences you want in your summary, and essentially generates a summary based on the input that you provide.
>
> **[3:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/the-sumy-library-for-extractive-summarization?u=76281980&t=203)** The input can be in the form of text or it can be a pointer to an HTML web page. Under the hood, this app uses the Sumy library to generate extractive summaries of your text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (7), [[GitHub]] (2), [[HTML]] (2), [[Python (Programming Language)|Python]] (1), [[Hugging Face|Huggingface]] (1)
> **Env Vars:** html (2), url (1)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **CLI Commands:** python (1)
> **Code Identifiers:** sumy_space (1)
> **URLs:** [https://huggingface.co/spaces/issam9/sumy_space](https://huggingface.co/spaces/issam9/sumy_space) (1)
> **Documentation:** the documentation (1)

#### [Extractive text summarization on Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=1)** We are now ready to experiment with Sumy on [[Hugging Face]].
>
> **[0:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=4)** Now, this is the text that I planned to summarize.
>
> **[0:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=7)** It's a small little article on the Empire State Building.
>
> **[0:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=11)** I'm curious to see how the different summarization techniques do when creating a five-line summary for this article.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=18)** I've pasted this text into the input text box.
>
> **[0:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=23)** With that done, let's try summarizing this article using different summarization techniques available.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=28)** The method dropdown allows you to pick the summarizer that you want to use.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=33)** Now, the first summarizer that I've picked here is the random summarizer.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=37)** Now this is not truly an extractive summarization technique, this essentially picks sentences at random from the original text to create a summary.
>
> **[0:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=46)** Now, the language that we'll pick here is going to be the English language, but you can see a whole variety of other languages are also available for summarization.
>
> **[0:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=55)** The sentence count, I'll leave as five.
>
> **[0:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=58)** Make sure you specify the input type to be text Sumy can also summarize text extracted from URLs, but we specify the text right here.
>
> **[1:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=67)** Let's hit "Submit" and see what kind of summary the random summarizer produces.
>
> **[1:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=73)** The random summarizer that picked sentences at random from the original text doesn't seem to be so bad.
>
> **[1:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=79)** Let's try a different summarization technique, the Luhn summarization technique. Luhn is a heuristic method and it's one of the original summarizers first conceptualized back in the 1950s.
>
> **[1:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=91)** This is based on the assumption that important sentences are those with significant words, and significant words occur often, but they are not stop words.
>
> **[1:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=100)** So let's go ahead and use the Luhn summarizer to summarize this article on the Empire State Building.
>
> **[1:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=107)** And this one, I feel, does a little bit better.
>
> **[1:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=110)** It has an introductory sentence and then it talks about the wealthy investors who invested in the Empire State Building when it was completed and then its competition, the Chrysler Building.
>
> **[2:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=121)** Next, let's try the Edmundson summarizer.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=124)** The Edmundson method is an improvement over the previously used Luhn technique because there are additional heuristics that this technique uses for summarization.
>
> **[2:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=134)** Edmundson looked for pragmatic words, words that are in headings and the position of the extracted terms in each sentence.
>
> **[2:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=144)** You often found that they were bonus words in text that were positively relevant and stigma words that were negatively relevant.
>
> **[2:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=152)** So the Edmundson technique should improve upon the previous Luhn technique.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=156)** Let's see if it does so for this particular article. You can see that the summary here is different and maybe it is better.
>
> **[2:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=163)** It talks about the 200-foot mooring mast that was designed as a so-called landing dock for dirigibles and Zeppelins from Germany.
>
> **[2:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=172)** The next technique that we'll use for summarization is going to be the KL-Sum technique.
>
> **[2:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=177)** This is a method that greedily adds sentences to a summary so long as it decreases the KL divergence of the summary from the original. Since it uses KL divergences, this is a Bayesian topic model.
>
> **[3:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=191)** Let's see how this extractive summarizer works.
>
> **[3:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=194)** Hit "Submit" and this is the summary that it generates. Observe that this summarizer also picked up the sentence on the 200-foot mooring mast.
>
> **[3:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=204)** Let's try another technique here, the Lex-Rank.
>
> **[3:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=207)** This is an unsupervised approach inspired by the PageRank algorithm.
>
> **[3:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=212)** This tries to find connections between the sentences and identify the sentences that are connected with the most significant words or topics.
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=220)** Here is the summary generated by Lex-Rank.
>
> **[3:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=223)** It talks about the much more prosaic aspects of the Empire State Building.
>
> **[3:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=228)** Let's try Text-Rank, which is very similar to Lex-Rank, and the summary generated here is a little bit different.
>
> **[3:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=235)** I feel maybe Text-Rank is a little better than Lex-Rank.
>
> **[3:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=239)** The last algorithm that we'll try here will be LSA or Latent Semantic Analysis.
>
> **[4:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=245)** This is an algebraic method which is able to identify synonyms in the text and topics that are latent topics in the text or document that you provide.
>
> **[4:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=256)** And when I look at the summary that this generates, and this is my subjective opinion, I do feel that the summary is better than the previous summaries that we looked at.
>
> **[4:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=265)** Here, I just look at the summaries and then use subjective methods to see whether the summary is good or not.
>
> **[4:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=271)** If you want an objective evaluation, you'll need to use something like the ROUGE score, which we haven't really applied here.
>
> **[4:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=278)** Before we move on from the Sumy summarizer, let's try summarizing a URL.
>
> **[4:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=282)** I'm going to clear the input text and I'm going to specify the URL of the Wikipedia article on the Empire State Building and see whether we can generate a good summary from this one.
>
> **[4:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=294)** Now, if you look at this Wikipedia article, you'll see that it's rather long and it contains a whole.
>
> **[5:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=300)** bunch of information.
>
> **[5:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=301)** It's much longer than that little article that we looked at.
>
> **[5:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=305)** Let's go back to the Sumy summarizer and generate a five-sentence summary from this URL.
>
> **[5:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=312)** Now, once you hit "Submit", it might take about a minute or so before the summary is generated.
>
> **[5:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=317)** What I found here was that the extractive summary was interesting, but really it did not capture the essence of the article as a whole.
>
> **[5:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/extractive-text-summarization-on-hugging-face?u=76281980&t=326)** For just a few sentences, the extractive techniques that we used were not sufficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Definitions:** is a  (5), is an  (3)
> **Env Vars:** url (3), lsa (1), rouge (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** dropdown (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)


### 3. Understanding Abstractive Text Summarization

[↑ Back to Table of Contents](#table-of-contents)

#### [Abstractive text summarization](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=0)** Now that we understand how extractive text summarizers work, let's turn our attention to the second category and talk about abstractive text summarization.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=10)** Abstractive summarizers interpret and examine the input text using advanced natural language techniques, and they generate shorter text which contains the important concepts and points from the original, but they need not use the same sentences.
>
> **[0:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=26)** They'll generate summaries in a more humanlike manner using novel sentences.
>
> **[0:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=32)** Abstractive summarizers use NLP techniques.
>
> **[0:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=36)** NLP or [[Natural Language Processing (NLP)|Natural Language Processing]] is the field of linguistics and machine learning focused on understanding the human language, not just understanding the words in a particular piece of input, but the context and semantics.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=50)** Human language is made up of a sequence of words, so language is an example of sequential data where the order of the words matter. If you say the same sentence, but kind of mix up the order of words, you are likely to get a very different meaning.
>
> **[1:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=66)** Consider an example sentence here.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=68)** "This is not a good meal..."
>
> **[1:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=70)** This is clearly a negative sentence.
>
> **[1:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=73)** But what if I added a few more words?
>
> **[1:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=75)** "This is not a good meal... It is a great meal." And it immediately becomes a positive sentence.
>
> **[1:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=81)** [[Deep Learning]] models that work with languages need to understand the sequential nature of language data, they need to capture the time relationships that exist in language.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=92)** And this requires neural network models such as recurrent [[Neural Networks]] or RNNs.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=98)** Recurrent Neural Networks are what you use to work with sequences because they understand and capture time relationships in data.
>
> **[1:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=106)** This can be for language data, but it can also be sequences such as stock prices, if you're trying to figure out trend and momentum.
>
> **[1:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=113)** Time relationships and language matter because this is what helps these neural network models capture the context and the meaning of words in text.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=124)** In recent times, revolutionary breakthroughs in natural language processing have been accomplished due to the use of [[Transformer Models]].
>
> **[2:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=132)** A transformer is a neural network that learns context and thus meaning by tracking relationships that exist in sequential data.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-text-summarization?u=76281980&t=141)** Many of the recent breakthroughs in natural language processing, such as [[ChatGPT]] or [[Google]]'s Bard, all of these are fundamentally transformer models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (3), [[Transformer Models]] (2), [[Deep Learning]] (1), [[Neural Networks]] (1), [[ChatGPT]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (3)
> **Env Vars:** nlp (2)

#### [Abstractive summarization using the Hosted Inference API on Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=1)** We've seen that when we use abstractive text summarization models to generate a summary of longer text by creating new sentences that capture the essence of the original content.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=12)** Abstractive summarization involves generating novel sentences that convey the key points in the original text in a more humanlike and concise manner.
>
> **[0:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=23)** We've also discussed that Abstractive summaries are usually produced by large language sequence to sequence models, typically [[Transformer Models]].
>
> **[0:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=32)** [[Hugging Face]] has a collection of transformer models that perform text summarization.
>
> **[0:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=38)** And here, let's see how we can use the hosted inference API for these models to generate summaries.
>
> **[0:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=44)** Click on the models link here on Hugging Face and you'll be taken to a page where you'll have access to all of the available models in this community.
>
> **[0:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=52)** We are interested in summarization, select the summarization task under [[Natural Language Processing (NLP)|natural language processing]].
>
> **[0:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=59)** Now here are all of the models available on Hugging Face for text summarization.
>
> **[1:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=64)** Let's pick the first one, the Bart model from [[Facebook]].
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=68)** Every model available on Hugging Face has a model card, and you can see that we have the model card tab selected.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=76)** This is a document that provides important information and details about the pre-trained model that you're looking at.
>
> **[1:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=83)** Bart is a sequence-to-sequence transformer model, so it uses attention.
>
> **[1:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=88)** It has a bidirectional encoder. A bidirectional encoder looks at all of the words in the input simultaneously, and not in sequence.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=98)** The model card gives us information about the key characteristics of the model, its intended use cases, its performance, limitations, and ethical considerations.
>
> **[1:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=108)** Observe here on the bottom right that we have the ROUGE scores for this summarization model on different data sets.
>
> **[1:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=116)** This is a fairly good model for summarizing news articles.
>
> **[2:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=121)** Now here, off to the top right, notice that this model offers a hosted inference API.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=128)** The hosted inference API on Hugging Face allows developers to easily use and integrate pre-trained models from the Hugging Face library without the need to set up and manage the models themselves.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=140)** What we'll do here is simply use this hosted inference API to summarize the text that we are interested in.
>
> **[2:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=147)** The text that I've chosen is a little longer than the Empire State article.
>
> **[2:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=151)** This is an article on the Panama Canal from the [history.com](https://history.com) site.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=156)** This is the article for which we'll generate a summary.
>
> **[2:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=159)** So copy this over and let's switch back to Hugging Face and paste this in into this text box which will hit the hosted inference API for this Bart model.
>
> **[2:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=171)** We have the article that we want to summarize.
>
> **[2:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=173)** I simply click on the "Compute" button here just below the input text box, and this is what will generate the summary using this Bart transformer model.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=184)** And here's what the summary looks like.
>
> **[3:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=186)** You can see the summary produced here in green.
>
> **[3:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=188)** It's just a few sentences, but it's an abstractive summary.
>
> **[3:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=192)** None of these sentences are likely to be in the original text.
>
> **[3:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=196)** Now, most of the NLP models available here on Hugging Face offer a hosted inference API.
>
> **[3:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=203)** Let's try another summarization model.
>
> **[3:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=206)** I click on summarization here so that I get the models that specialize in summarization.
>
> **[3:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=212)** And let's scroll down and pick one of these.
>
> **[3:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=214)** How about a model from [[Google]]?
>
> **[3:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=216)** We had one from Facebook.
>
> **[3:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=217)** I'm now going to pick a model from Google.
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=220)** This is the bigbird-pegasus-large model.
>
> **[3:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=224)** It's once again a transformer model and it uses a kind of attention described as sparse attention.
>
> **[3:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=231)** Other details about this model are available here on this model card.
>
> **[3:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=235)** And here at the bottom, you can find the ROUGE scores for this model on different datasets.
>
> **[4:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=242)** Look at the first three ROUGE scores on scientific_papers.
>
> **[4:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=246)** Those ROUGE scores are rather high. But look at the ROUGE scores on the cnn_dailymail datasets, those ROUGE scores are much lower.
>
> **[4:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=255)** This model is likely to perform better on scientific papers than, say, news articles, just by looking at this model card.
>
> **[4:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=263)** Let's use its hosted inference API.
>
> **[4:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=265)** Here is the same article on the Panama Canal.
>
> **[4:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=268)** I'm going to click on "Compute", and let's take a look at the summary that this model produces.
>
> **[4:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=274)** And this summary is definitely not a great one.
>
> **[4:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=278)** It talks much more about the locks and the canal then an overall description of the canal.
>
> **[4:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=284)** Well, here are two models for which we use the hosted inference API and we saw how they've performed.
>
> **[4:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=289)** There's one more model that we can try.
>
> **[4:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=291)** Let's go back to summarization and let's pick the Google's pegasus-cnn_dailymail model.
>
> **[4:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=297)** This model seems to be fine-tuned on the cnn_dailymail dataset, which is a news article dataset.
>
> **[5:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=303)** This model will likely perform better with our Panama Canal article.
>
> **[5:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=308)** Let's go ahead and click on |"Compute" and see what the summary looks like.
>
> **[5:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=314)** And you have to admit that this summary is a lot better than the BigBird Archive model.
>
> **[5:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=319)** That model was likely trained on scientific papers.
>
> **[5:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=323)** It's probably good for scientific summaries, but did not do well on regular articles.
>
> **[5:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/abstractive-summarization-using-the-hosted-inference-api-on-hugging-face?u=76281980&t=328)** So when you're picking a summarization model for your use case, make sure the model has been trained or fine-tuned on a dataset similar to the one that you plan to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (8), [[Google]] (3), [[Transformer Models]] (2), [[Facebook]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Env Vars:** api (8), rouge (6), nlp (1)
> **UI Navigation:** click on (5), select the (1), scroll down (1)
> **Definitions:** is a  (6), is an  (1)
> **Code Identifiers:** cnn_dailymail (3), scientific_papers (1)
> **CLI Commands:** find (1), make (1)
> **URLs:** [history.com](https://history.com) (1)
> **Cross-References:** go back to (1)


### 4. Understanding Transformers

[↑ Back to Table of Contents](#table-of-contents)

#### [Sequence-to-sequence models](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=0)** [[Deep Learning]] models that perform [[Natural Language Processing (NLP)|natural language processing]] can be of many different types, but the kind of language model that we'll use for text summarization are typically sequence-to-sequence models.
>
> **[0:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=13)** Let's consider the essence of a summarization task.
>
> **[0:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=17)** A model takes in the original text as input and produces another text at the output, which is much shorter and contains the important concepts from the original text.
>
> **[0:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=27)** And this is where the term sequence-to-sequence comes from.
>
> **[0:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=31)** We start with a sequence that is the input text, and we produce another sequence that is the output text.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=37)** Let's say you were using a language model for sentiment analysis, that's an example of a sequence-to-vector model.
>
> **[0:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=43)** It takes in an input text that's a sequence and produces a class or a category for the sentiment, that is, sequence-to-vector.
>
> **[0:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=51)** We'll keep our focus here on text summarization, which is an NLP task that involves generating a new, shorter sequence from an original longer sequence.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=61)** And this involves the use of sequence-to-sequence models.
>
> **[1:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=65)** In order to get a big picture understanding of how sequence-to-sequence models work, let's take a slightly different example of a sequence-to-sequence model, a model for language translation. It's pretty clear why this is considered to be a sequence-to-sequence model, you feed in an input sequence in one language as an input and you get the translation in another language as the output.
>
> **[1:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=87)** Sequence-to-sequence models are generally made up of two separate components referred to as an encoder and decoder.
>
> **[1:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=95)** The encoder works on a sequential input and the decoder produces a sequential output.
>
> **[1:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=102)** The encoder and the decoder have their own roles to play in different deep learning models.
>
> **[1:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=107)** And in fact, there are models that use encoding alone, decoding alone, but sequence-to-sequence models use them both together.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=114)** An encoder is responsible for learning a representation of the input sentence that you feed in no matter what the sentence, it will try to represent it in some way.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=124)** And it's this representation that the decoder uses to produce a translation.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=129)** The encoder is usually a recurrent neural network where you feed in the input words in a sequence, one [[Microsoft Word|word]] at each time instance.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=138)** So here, the word "I" will be fed in at the first time instance, "ate" at the second time instance, "an" at the third time instance and so on.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=146)** Just a heads up that in a sequence to sequence model, it's not necessarily the case that the input is fed in as a unit directional sequence, as you see here on screen.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=156)** Different models work in different ways, but this is a good representation of the overall picture.
>
> **[2:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=163)** At the end of the input sequence, you usually feed in a special token, the eos token indicating that the sequence has terminated.
>
> **[2:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=171)** The representation of the entire input sentence is captured in the hidden activation of the last layer of the neural network.
>
> **[2:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=179)** You can say that this has all of the information contained in the input sequence.
>
> **[3:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=185)** It is this representation that is then fed into a second recurrent network, the decoder, which is then responsible for generating the translated sentence.
>
> **[3:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=194)** The decoder will make use of this hidden representation to generate the translation.
>
> **[3:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=200)** So here is the hidden representation.
>
> **[3:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=202)** The decoder will use that as an input and produce a word at each time instance.
>
> **[3:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=207)** The word produced at each time instance becomes the input at the next time instance and so on, till the entire sentence has been translated.
>
> **[3:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=217)** The translation continues till an eos token is produced by the decoder indicating that the output has terminated.
>
> **[3:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=225)** Notice that the decoder starts off with the hidden state obtained from the encoder and then generates words in sequence and uses the previous word in the sequence to produce the next word in the sequence.
>
> **[3:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=238)** This is a very high-level overview of how encoder-decoder sequence-to-sequence models work.
>
> **[4:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/sequence-to-sequence-models?u=76281980&t=244)** There are, of course, lots of nitty-gritty details and lots of improvements that have been made to produce the amazing models that you see today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (6), [[Deep Learning]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** picture (2)
> **CLI Commands:** make (1)
> **Env Vars:** nlp (1)
> **Warnings:** heads up (1)

#### [Attention in sequence-to-sequence models](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=0)** In this movie, I'll discuss attention, an improvement made to sequence-to-sequence models, which was the first step towards the kind of models that we see today, [[ChatGPT]], Bard, and so on.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=12)** In order to understand the role of attention, let's go back to our previous model, our encoder-decoder model for language translation.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=21)** Now what's the problem with this framework?
>
> **[0:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=23)** You feed a sequence in, you get a sequence out.
>
> **[0:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=26)** The problem here is that all of the information in the input sequence of words is contained in a single representation, the hidden state of the final layer.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=37)** If you think about how language works, sentences may be short or arbitrarily long, especially if you have very long sequences capturing all of the information contained in that sequence in a single vector representation is going to be very hard. To produce a sequence at the output, whether it's a translation or a summary, the hidden state at the end of the encoder needs to remember everything about the input sentence.
>
> **[1:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=64)** Let's say you have a long sentence and you have the term "to reach" somewhere at the beginning of the sentence in English, but that term should be generated at the end of the sentence when you're translating to German.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=76)** If you have just a single hidden state, well, the hidden state remember the beginning of the original sentence in order to provide the right translation at the end of the translated sentence, then, it seems unlikely. The structure of your sentences in the original language and the translation need not be the same.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=94)** Different hidden values produced at the input are likely related to different parts of the output, and this information is not captured in the original setup.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=105)** Let's say we are providing a translation for the [[Microsoft Word|word]] apple.
>
> **[1:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=108)** It's at the end of the input sentence in English, but in the middle of the German sentence.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=114)** The influence of the hidden state associated with apple is greater on the translated word for apple.
>
> **[2:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=122)** Let's say you're translating the word ate.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=124)** This is related to two words at the output.
>
> **[2:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=127)** The hidden state associated with this word should be connected to those two words at the output to get a good translation.
>
> **[2:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=135)** And this is where attention is important.
>
> **[2:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=137)** Attention models help pay attention to relevant portions of the input at the output. While generating sequences at the output, not only is the hidden state at the very end of the encoder important, but the attention model also causes the decoder to pay attention to different parts of the input fed into the encoder.
>
> **[2:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=159)** And attention is a key component of [[Transformer Models]].
>
> **[2:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/attention-in-sequence-to-sequence-models?u=76281980&t=163)** Transformers apply a set of mathematical techniques called attention or self-attention to detect the subtle ways in which even distant data elements, that is, words that are very far apart in a series influence and depend on each other.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (4), [[ChatGPT]] (1), [[Transformer Models]] (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)

#### [A brief introduction to Transformers](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=0)** Now, transformers are an advanced and complex neural network architecture used in great effect in [[Natural Language Processing (NLP)|natural language processing]] tasks.
>
> **[0:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=9)** Here in this movie, we'll briefly understand how transformers work.
>
> **[0:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=13)** In the previous movie, we understood the role of attention in sequence-to-sequence models, and transformers use attention or self-attention to detect how different parts of the input sequence are related to one another, even when the relationship is very subtle.
>
> **[0:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=29)** The basic transformer architecture is made up of two components; the encoder and the decoder.
>
> **[0:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=36)** Now, this seems to imply that transformers are sequence-to-sequence models, but that's not necessarily the case. Sequence-to-sequence models use both parts of a transformer architecture, the encoder as well as the decoder.
>
> **[0:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=49)** As we've discussed earlier, text summarization is performed using sequence-to-sequence models.
>
> **[0:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=55)** The encoder in the transformer architecture receives an input and builds a representation of the input, and the entire encoder is optimized to understand what the input is about.
>
> **[1:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=67)** There are encoder models that use only the encoder part of the transformer architecture.
>
> **[1:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=73)** Encoder models are best suited for tasks requiring an understanding of the full input sentence, such as sentence classification tasks, named entity recognition, and extractive question answering.
>
> **[1:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=85)** The decoder portion of the transformer architecture uses the encoder's representation to generate a target sequence, and the decoder component is optimized for generating outputs.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=98)** Decoder models use only the decoder component of a transformer.
>
> **[1:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=104)** These models are best suited for tasks that involve text generation.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=109)** The original transformer architecture was first introduced by [[Google]] researchers in a paper called "Attention Is All You Need", and this is what the transformer architecture looked like.
>
> **[2:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=121)** Any powerful NLP model you talk about today is likely using a transformer architecture. In the demos that follow, we'll be using a few different models for abstractive text summarization.
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=133)** All of those models are transformers.
>
> **[2:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=135)** The transformer architecture comprises of an encoder and decoder, and both use attention.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=141)** There are attention blocks in both the encoder as well as the decoder so that the model can focus on the relevant portions of the text.
>
> **[2:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=149)** Another thing to know is that transformers are very large models with millions of parameters, which means it's very expensive to train them, expensive in terms of time and expensive in terms of resources.
>
> **[2:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=163)** Training transformer architectures have a huge environmental impact.
>
> **[2:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=168)** Given not everyone has access to all of these resources, it's going to be very unlikely that you train a transformer model from scratch.
>
> **[2:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=177)** So here is what training a transformer from scratch looks like.
>
> **[3:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=181)** Training from scratch is referred to as pre-training.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=184)** You start with a basic model architecture, feed in a large corpus of data, spend a lot in compute, spend many days to train that model and you get the pre-trained language model.
>
> **[3:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=195)** You may not have the time, data, or resources to train a transformer model from scratch, but you can definitely use a pre-trained model and fine-tune it on your data.
>
> **[3:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=205)** You start with the weights and architecture of a model that has already been pre-trained and then you perform additional training, that is, fine-tuning with a dataset that is specific to your task.
>
> **[3:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=217)** Fine-tuning a model is an example of transfer learning.
>
> **[3:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/a-brief-introduction-to-transformers?u=76281980&t=221)** Fine-tuning leverages the learning from the original pre-trained model, and that learning is transferred to your new model that has been fine-tuned on a dataset that is more relevant to you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** nlp (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### [Transformers in Hugging Face](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=0)** When we discussed [[Hugging Face]] earlier, we mentioned that Hugging Face is best known for developing and maintaining the Hugging Face Transformers library, an open-source NLP library built on top of [[PyTorch]] and [[TensorFlow]].
>
> **[0:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=14)** In the demos that follow, we'll be using models from this library for abstractive summarization.
>
> **[0:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=20)** The Hugging Face Transformers library makes it very easy to download and use a state-of-the-art NLP model for inference.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=28)** Hugging Face allows you to access these models using a very simple [[Python (Programming Language)|Python]] API that you can simply pip install on your machine.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=37)** All models on Hugging Face are generally PyTorch or TensorFlow models, so you're working with frameworks that you're likely familiar with. And you will see in just a bit how simple and straightforward it is for you to use models hosted on Hugging Face.
>
> **[0:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=53)** When you work with NLP models on Hugging Face, you'll be instantiating and using a Hugging Face pipeline.
>
> **[1:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=60)** A pipeline is a high-level interface provided by the Hugging Face Transformers library that allows users to easily perform various NLP tasks using pre-trained models.
>
> **[1:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=71)** Pipelines provide a simple and convenient way to use these models without the need for extensive coding or without extensive knowledge of model architectures.
>
> **[1:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=81)** A pipeline encapsulates all of the steps needed to work with a model.
>
> **[1:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=85)** A tokenizer will preprocess and prepare your input data so that it's in a form that can be fed into the model.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=92)** Feeding the data into the model will give you predictions.
>
> **[1:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=95)** These predictions are then passed to a post-processing stage which will give you the output in a format that you can consume and understand.
>
> **[1:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=104)** Each stage in this pipeline is individually accessible, which means you can access, use, and tweak these individual stages in the pipeline based on your use case.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=114)** Let's say you decide to access and use a classification model from the Hugging Face library, here is what the output of different stages might look like.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=123)** You start with raw text that is tokenized and converted to input IDs which are then fed into the model.
>
> **[2:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=130)** The model will output logits. Logits kind of represent the [[Probability]] scores for the class or category predicted by the model.
>
> **[2:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=139)** This is then post-processed and then you get a prediction.
>
> **[2:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=143)** The first model that we'll use for text summarization is the T5 Small Model.
>
> **[2:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=149)** This is the text-to-text transfer transformer.
>
> **[2:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=153)** It's called a text-to-text transformer model because the input and the output to these models are both strings, no matter what NLP task you performed.
>
> **[2:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=164)** And the cool thing with the T5 Model is that it can be used for a variety of different [[Natural Language Processing (NLP)|natural language processing]] tasks.
>
> **[2:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=170)** All NLP tasks have been reframed to a unified text-to-text format.
>
> **[2:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=176)** You can use the same model, same loss function, and same hyperparameters on any NLP task, including machine translation, document summarization, question answering, and even classification.
>
> **[3:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=189)** The dataset used to pre-train this model is the C4 dataset.
>
> **[3:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=193)** Now there are some standard text datasets used for pre-training models, but they all have their own strengths and weaknesses.
>
> **[3:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=201)** For example, text from Wikipedia is high quality but uniform in style, and it's a relatively small dataset, whereas the Common Crawl datasets which scrapes the web, that's an enormous dataset, it's very diverse, but the quality is not that great.
>
> **[3:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=217)** C4 stands for Colossal Clean Crawled Corpus.
>
> **[3:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=221)** It's a cleaned version of Common Crawl that's two orders of magnitude larger than Wikipedia, and that is what has been used to train the T5 Model.
>
> **[3:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=230)** The second model that we'll use from the Hugging Face Transformers library is a Pegasus model that has been fine-tuned on the CNN Daily Mail dataset.
>
> **[4:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=240)** The Pegasus model is a sequence-to-sequence model using the encoder-decoder architecture that we've discussed here.
>
> **[4:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=247)** Now, the pre-training task that was used to train this model is very similar to summarization.
>
> **[4:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=253)** Pegasus is primarily a summarization model.
>
> **[4:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=257)** The Pegasus model that we'll use has been pre-trained using two different techniques.
>
> **[4:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=262)** The first is MLM that stands for Masked Language Modeling.
>
> **[4:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=266)** This is where the encoder input [[Tokens]] are randomly replaced by a mask token, and this mask token has to be predicted by the encoder.
>
> **[4:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=275)** It's also been pre-trained using GSG, Gap Sentence Generation, where the whole encoder input sentences are replaced by a second mask token and fed into the decoder, and the decoder has to use this to generate the output sequence.
>
> **[4:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=290)** And finally, the last transformer model that we'll use for summarization is going to be the BART Large CNN, a Bart model fine-tuned on the CNN Daily Mail dataset.
>
> **[5:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=303)** Once again, this is a sequence-to-sequence model which uses the encoder-decoder architecture.
>
> **[5:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=309)** It has been pre-trained on the English language and fine-tuned on the CNN Daily Mail dataset.
>
> **[5:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=315)** So when we use this with news articles, you'll see that it performs very well.
>
> **[5:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/transformers-in-hugging-face?u=76281980&t=319)** This model works very well for summarization and translation tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (11), [[PyTorch]] (2), [[TensorFlow]] (2), [[Python (Programming Language)|Python]] (1), [[Probability]] (1)
> **Env Vars:** nlp (7), cnn (4), api (1), mlm (1), gsg (1)
> **Definitions:** is a  (4), stands for (2)
> **CLI Commands:** python (1), pip (1)
> **Cross-References:** we discussed (1), we mentioned (1)
> **Analogies:** for example (1), similar to (1)
> **Prerequisites:** install (1)


### 5. Performing Summarization Using a Hugging Face Pipeline

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Colab to work with Hugging Face Transformers](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=0)** In this demo, we'll see how we can write [[Python (Programming Language)|Python]] code in a Colab notebook to access and use a pre-trained transformer model from the [[Hugging Face]] Transformers library.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=12)** We'll pick a pre-trained model that works well for text summarization, we'll fine-tune that model on a dataset that we load, that is, the CNN Daily Mail dataset and we'll generate summaries and compute the ROUGE score for that model on our data.
>
> **[0:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=27)** The pre-trained NLP model that we'll use from the Hugging Face library is the T5 Small Model.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=33)** Let's look at the model card for this and see what the model is about.
>
> **[0:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=38)** You can see here that this model is a text-to-text transformer model, which essentially performs a number of different NLP tasks.
>
> **[0:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=47)** This model has been trained to work on a variety of tasks.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=50)** Out of the box, you can prepend a different prefix to the input based on what task you're planning to use it for.
>
> **[0:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=57)** For example, translate, summarize, and so on.
>
> **[1:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=61)** We'll write Python code to access and work with this pre-trained model using Colab notebooks.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=68)** Colab is a free Jupyter Notebook environment that runs entirely on the cloud.
>
> **[1:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=73)** You don't have to do any setup, you just run the notebook within your browser.
>
> **[1:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=79)** Colab was developed by [[Google]] to provide free access to GPUs and TPUs to anyone who needs them to build machine learning models.
>
> **[1:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=87)** And we'll actually use Colab GPUs to generate summaries and to fine-tune our summarization model.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=94)** Let's sign into Colab.
>
> **[1:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=96)** All this needs is a Gmail account. So as long as you have a Gmail account, you can simply use that to sign in.
>
> **[1:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=102)** I have the notebook where I perform abstractive text summarization using the T5 Model on my local machine.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=109)** So I'm simply going to upload that notebook to Colab and I'll execute the notebook and we'll discuss the code that it contains.
>
> **[1:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=117)** Select the notebook abstractive text summarization using T5, and this notebook has been uploaded to Colab and we can run it from here.
>
> **[2:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=126)** First, let's take a look at the runtime environment.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=129)** Go to runtime, change runtime type, and notice that this uses the T4 GPU.
>
> **[2:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=135)** So I'll be using a GPU to perform summarization and to fine-tune this model.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=140)** Next, we pip install the libraries that we need to work with, Hugging Face Transformers.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=146)** The Transformers library will give us access to the pre-trained model, the datasets library will give us access to Hugging Face datasets, the evaluate library will allow us to compute evaluation metrics on our model, the rouge_score will allow us to compute ROUGE scores for our summaries, and the accelerate library will allow us to perform distributed training on GPUs.
>
> **[2:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=169)** We have just the one GPU, but we do need the accelerate library as well.
>
> **[2:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/using-colab-to-work-with-hugging-face-transformers?u=76281980&t=174)** Go ahead and pip install all of these packages and once that's done, make sure you restart your runtime so that all of the newly installed Python packages are available for you to use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (4), [[Python (Programming Language)|Python]] (3), [[Google]] (1)
> **Tools:** colab (8), jupyter (1)
> **Env Vars:** gpu (3), rouge (2), nlp (2), cnn (1)
> **CLI Commands:** python (3), pip (2), make (1)
> **Definitions:** is a  (3)
> **Prerequisites:** install (2), setup (1)
> **UI Navigation:** select the (1), go to (1)
> **Code Identifiers:** rouge_score (1)

#### [Loading the CNN Daily Mail dataset](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=0)** We'll be using NLP models from the Transformers Library.
>
> **[0:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=4)** So import transformers and let's take a look at the transformer version that we are working with, 4.31.0 Just a heads up that we'll be using the [[PyTorch]] framework to work with the transformer pipeline on [[Hugging Face]].
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=19)** You can use [[TensorFlow]] as well.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=21)** The code that will be different will be the part where we fine-tune the model.
>
> **[0:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=26)** The [[Representational State Transfer (REST)|rest]] of the code should more or less be the same.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=28)** It's just regular [[Python (Programming Language)|Python]].
>
> **[0:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=30)** The Hugging Face community encourages you to develop your models and share them with the entire Hugging Face community. And a way to easily integrate your notebook with your Hugging Face account is to use notebook login.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=45)** Notebook login makes it easy for you to integrate your models and anything else you develop with this notebook with your Hugging Face account and then share it with the rest of the community.
>
> **[0:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=57)** Before we run this code, you'll need an access token from Hugging Face so that you can log in with your credentials.
>
> **[1:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=63)** Head over to Hugging Face and click on that little profile icon on the top right and go to settings.
>
> **[1:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=69)** This will take you to the profile settings for your account.
>
> **[1:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=72)** And here on the left navigation pane, if you scroll down a bit, you'll find an option for access [[Tokens]].
>
> **[1:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=79)** Click on this link and here you'll be able to generate a new token that will allow you to connect to your Hugging Face account from your notebook.
>
> **[1:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=89)** Give your access token a name, specify what kind of access you want, whether it's read access or write access.
>
> **[1:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=96)** I'm going to generate two tokens.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=98)** Text_summarization_read will have read access.
>
> **[1:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=102)** Then I'm going to click on "New Token" and generate yet another token, which I call text_summarization_write This token, I'll set up with write access.
>
> **[1:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=112)** Having generated these two tokens, I can use whichever token I wish to.
>
> **[1:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=117)** If I want just read access, I'll use text_summarization_read, otherwise for write access I'll use text_summarization_write.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=124)** Let's head back to our notebook and execute this code where we log in with our Hugging Face credentials.
>
> **[2:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=131)** You can see that it pops up a little widget here where you enter in your access token.
>
> **[2:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=136)** I'll now switch over to where I've logged in to my Hugging Face account.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=140)** I'm going to copy over the text_summarization_write token, which will give me write access to my Hugging Face account and the associated repositories, and I'm going to use that to log in.
>
> **[2:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=152)** We've seen that Hugging Face offers a whole number of datasets that you can use for different use cases.
>
> **[2:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=159)** You can access those datasets in Python by using the list datasets function. I access datasets on line 3 of the active code cell, I iterate over the datasets on line 6, and I print out the first 10 datasets. And you can see that there are datasets for different use cases.
>
> **[2:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=178)** Every dataset is tagged, so you can pick the one for your use case.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=184)** Now the dataset that I'm really interested in to generate summaries of is the CNN Daily Mail dataset and I access that using the load_dataset function. I specify the name of the dataset, cnn_dailymail and the version of the dataset, which happens to be 3.0.0 Executing this will download the dataset and make it available to your notebook here on Colab.
>
> **[3:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=211)** Here at the bottom, you can see what this dataset looks like.
>
> **[3:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=214)** It comprises of training, validation, and test data.
>
> **[3:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=218)** There are about 287,000 records in the training data, 13,000 in the validation dataset, and 11,000 in the test dataset.
>
> **[3:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=228)** The T5 transformer model is a very large model and you'll find that it takes a long time to fine-tune on this dataset.
>
> **[3:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=236)** If you were to work with such a large dataset, fine-tuning the model might take hours and Colab doesn't really let you use the GPU for several hours in one go.
>
> **[4:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=246)** Rather than working with this entire dataset, we'll work with a subset.
>
> **[4:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=250)** We'll work with just 3% of the original data.
>
> **[4:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=254)** Observe that I invoked load dataset once again on the CNN Daily Mail dataset, and I specify split = training data and 3% of the training data.
>
> **[4:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=265)** Now, when the dataset is loaded, observe that we have just 8,613 rows from the training data.
>
> **[4:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=273)** The dataset object has familiar member variables allowing you to explore and understand this data.
>
> **[4:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=279)** For example, the shape member variable gives you the shape of your data, 8,613 records, and three columns.
>
> **[4:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=287)** If you want to know more about this dataset, you can read the contents of the description member variable.
>
> **[4:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=294)** You can see that this is a non-anonymized summarization dataset.
>
> **[4:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=298)** This dataset comprises of two features; article, which contains the original content, and highlights that contain a summary of the original content.
>
> **[5:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=308)** And you can see the features by accessing the features member variable.
>
> **[5:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=312)** You'll see the two features here; article and highlights.
>
> **[5:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=315)** And of course every record has a unique ID.
>
> **[5:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=318)** The homepage variable associated with the dataset will give you a URL where you can get more information about the data that you're working with.
>
> **[5:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=327)** This is the homepage on [[[GitHub]].com](https://GitHub.com) for this dataset.
>
> **[5:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=331)** Let's look at one of the samples.
>
> **[5:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=334)** I'm going to look up the sample at index 0, and you can see that this is a news article about the Harry Potter star, Daniel Radcliffe.
>
> **[5:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=343)** We'll be using a very small fraction of the original dataset to fine-tune our model.
>
> **[5:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=348)** Let's split this data into training and test data.
>
> **[5:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=352)** 20% of the data for testing, the rest for training.
>
> **[5:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/loading-the-cnn-daily-mail-dataset?u=76281980&t=356)** And this will split our dataset into two; 6,890 records for training, 1,723 records for evaluation or testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (10), [[Representational State Transfer (REST)|Rest]] (3), [[Tokens]] (3), [[Python (Programming Language)|Python]] (2), [[PyTorch]] (1)
> **Code Identifiers:** text_summarization_write (3), text_summarization_read (1), load_dataset (1), cnn_dailymail (1)
> **CLI Commands:** python (2), find (2), make (1)
> **Env Vars:** cnn (2), nlp (1), gpu (1), url (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **Tools:** colab (2), github (1)
> **Definitions:** is a  (3)
> **Versions:** 4.31.0 (1), 3.0.0 (1)

#### [Cleaning text data](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=0)** We've now loaded the dataset that we are going to be using for text summarization.
>
> **[0:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=4)** Let's perform a little bit of pre-processing on that data.
>
> **[0:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=7)** And I do this using the clean_txt function that I define here in the active code cell.
>
> **[0:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=13)** The input argument passed into clean_txt will be one record from our dataset.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=18)** We iterate over the article and highlights column for that single record and we essentially perform a bunch of regular expression, replace operations to clean up the text.
>
> **[0:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=29)** On line 3, you can see that we convert the text to lowercase and then we perform a bunch of replace operations, replacing backslashes, backticks, quotes, and other characters with the empty string.
>
> **[0:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=42)** The dataset object in [[Hugging Face]] exposes a map operation that you can use to perform operations on every record on that dataset. I call map and I parse in clean text, and the result will be a cleaned up dataset.
>
> **[0:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=56)** Note that both the train as well as the test dataset have now been cleaned.
>
> **[1:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=62)** Nothing has changed in the number of rows or records that we have.
>
> **[1:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=65)** Let's verify that we indeed have a cleaned dataset.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=68)** Let's take a look at one article at Index 7 from the original dataset, cnn_news_summary_ds.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=76)** This is an article about Rafael Nadal.
>
> **[1:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=78)** Notice that there are quotes, single and double quotes, and other special characters present in the original data.
>
> **[1:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=86)** Now let's look at the same article in the cleaned dataset.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=90)** Again, this is the training data, I'm looking at the article at Index 7, and here is what the clean dataset looks like.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=98)** Observe that the text is entirely in lowercase and all of the double quotes, backslashes, et cetera, that were present in the original article have been removed.
>
> **[1:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=108)** You can pick any other article at random and make sure that you have the clean dataset.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=114)** Here is what the original article looks like.
>
> **[1:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=116)** Again, it has quotes, backslashes, new lines, and here is what the cleaned article looks like.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=123)** The quotes, backslashes, and new lines have all been removed.
>
> **[2:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/cleaning-text-data?u=76281980&t=126)** This clean dataset is what we'll use for summarization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1)
> **Code Identifiers:** clean_txt (2), cnn_news_summary_ds (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)

#### [Generating summaries with Hugging Face Transformers](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=0)** In this movie, we'll see how we can use the T5 transformer model from the [[Hugging Face]] library for text summarization using Zero-Shot Learning.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=10)** Zero-shot learning allows us to leverage state-of-the-art NLP models with absolutely no training.
>
> **[0:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=17)** These are pre-trained models that we can use right out of the box.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=21)** With zero-shot learning, a model can learn to recognize things that it hasn't explicitly seen before in training.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=28)** Now, usually zero-shot learning applies to problems such as classification, but here with summarization, I use it in the context that will ask the model to summarize text of a kind that the model has never seen before.
>
> **[0:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=41)** Now the article that we'll ask the model to summarize is the article at this example text index, Index 33 from the training data, and it's an article about a cloned Labrador retriever.
>
> **[0:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=54)** If you directly use a pre-trained model with zero-shot learning, really with Hugging Face, it's just 2 or 3 lines of code to actually use that model.
>
> **[1:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=64)** Now the model that we've chosen is the T5 Small model.
>
> **[1:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=67)** The T5 model is a text-to-text model that works on a range of NLP tasks, including summarization. In order to work with this T5 Small pre-trained model, we'll be using the pipeline object from the Hugging Face library.
>
> **[1:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=84)** A Hugging Face pipeline abstracts away all of the complex code associated with NLP models.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=90)** It offers a simple API dedicated to several NLP tasks, including summarization.
>
> **[1:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=97)** You can see the input for the pipeline object on line 1, and on line 3 I've specified the prefix to pass to our model while performing summarization.
>
> **[1:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=106)** The prefix is summarize followed by a colon.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=109)** The reason this prefix is needed is because the T5 model can perform several NLP tasks, including summarization. By parsing in summarizers as prefix, you're indicating to the T5 model that the input text should be summarized and don't perform any other kind of NLP tasks such as translation on it.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=128)** Instantiating a pipeline is straightforward.
>
> **[2:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=131)** Simply invoke the pipeline method, specify the kind of task that you want to perform as the first input argument, and then specify the model that you want to use.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=141)** In fact, the model input argument is optional.
>
> **[2:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=145)** If you don't specify a model name, it will pick a default model to perform summarization. And that's it.
>
> **[2:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=151)** You have a summarizer object, which is essentially a reference to your pipeline and you can generate a summary by invoking the summarizer object on your example text.
>
> **[2:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=161)** Make sure you pass in the prefix so that the model performs the right task.
>
> **[2:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=166)** When you invoke the pipeline on your input text that's on line 7 when I invoked summarizer, there are three different things that happen behind the scenes.
>
> **[2:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=176)** Your input text is preprocessed into a format the model can understand, the preprocessed inputs are passed to the model, the predictions of the model are obtained and they are post-processed so that they come back to you in a format that you can understand.
>
> **[3:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=191)** Now with this out of the way, let's take a look at the summary text produced by the T5 model.
>
> **[3:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=197)** You can see from the output here that the model is downloaded onto the device that Colab is running on and then the summarization is performed.
>
> **[3:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=207)** But even though a summary is generated, there's a little warning: Token indices sequence length is longer than the specified maximum length for this model (887 > 512).
>
> **[3:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=218)** The warning is concerning, but the summary text gets right to the point.
>
> **[3:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=223)** You can see that the main point of the article about a lab being cloned is captured in the summary text.
>
> **[3:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=229)** Now, the reason you see this warning is because every model in the Hugging Face Transformers library has a maximum length for the sequences that it can handle.
>
> **[3:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=239)** If you see this warning, it means that we are trying to encode a sequence longer than 512, which is the maximum for the T5 Small model.
>
> **[4:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=248)** Now it's possible that the model will not work correctly if you have it handle sequences longer than what it was designed for, which is why you need to tweak how you actually instantiate the model pipeline.
>
> **[4:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=261)** Now there are several techniques you can use to tweak the input sentences so that they fit the maximum sequence length supported by the model.
>
> **[4:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=269)** Here I've specified truncation = True when I instantiate the pipeline.
>
> **[4:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=273)** This will ensure that the pipeline will truncate the input sequences that it feeds into the model so that it fits the maximum length that the model can handle.
>
> **[4:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=284)** Now, after instantiating the pipeline with this new truncation set to True, I invoke the summarizer on the input text, and now let's take a look at the summary text.
>
> **[4:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=294)** It's quite gratifying to see that the warning has disappeared.
>
> **[4:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=298)** We are using the pipeline in the right way and the summary is also quite good.
>
> **[5:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=302)** Now there were some extra information in the previous summary that's not present here in the output, but the summary still captures the essence of the original article.
>
> **[5:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=310)** Let's compare this summary to the actual highlights that were present as a part of our dataset and see whether the summary is better.
>
> **[5:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-with-hugging-face-transformers?u=76281980&t=319)** The actual summary has a lot more information than the generated summary, but still I feel the generated summary was quite good.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (5)
> **Env Vars:** nlp (6), api (1)
> **Warnings:** warning (5)
> **Definitions:** is a  (1), means that (1)
> **CLI Commands:** make (1)
> **Tools:** colab (1)
> **Analogies:** such as (1)

#### [Evaluating summaries using ROUGE scores](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=0)** By looking at the summary, we are able to evaluate whether it seems good or not.
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=5)** But that's a very subjective evaluation. For a more objective evaluation of whether a particular summarizer is generating good summaries, we need to evaluate its result using the rouge score.
>
> **[0:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=17)** The evaluate library from [[Hugging Face]] is a library, as its name suggests, for easily evaluating machine learning models and datasets. With a single line of code, this allows us access to dozens of evaluation metrics for different domains, whether it's NLP, [[Computer Vision]], or any other.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=35)** Here we are interested in the rouge metrics for evaluating text summaries.
>
> **[0:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=41)** I call evaluate.load and I parse in rouge as the evaluation metric that I'm interested in, and I store the result in a variable called rouge.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=50)** If you look at the outputs generated when the rouge metrics are loaded, you can see what this evaluation metric returns.
>
> **[0:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=58)** It returns rouge1, rouge2, rougeL, and rougeLsum scores for whatever data you parse in. RougeLsum is a variant of the rougeL metric that we've discussed earlier. Here, the longest common subsequence is computed between each pair of reference and candidate sentences, and a metric called Union LCS is computed.
>
> **[1:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=82)** And this Union LCS is the rougeLsum.
>
> **[1:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=85)** You can see the code that we'll use to compute rouge scores in the examples section.
>
> **[1:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=91)** The rouge score is in the range 0 to 1.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=94)** A rouge score close to 0 indicates poor similarity between candidate and reference, and a rouge score close to 1 indicates strong similarity between candidate and reference.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=105)** With this in mind, let's see an example of how the rouge metric is computed.
>
> **[1:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=110)** Here is the reference sentence on line 1, "the elephant was found near the river and everyone was glad."
>
> **[1:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=115)** Then we have the first example, which has a lot of extra words such as turbulent and ecstatic.
>
> **[2:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=121)** Example 2 is another candidate sentence with fewer extra words.
>
> **[2:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=126)** We'll now compute the rouge scores between the two examples and the reference sentence and you can see what the results look like.
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=133)** Let's first compute the rouge score between the first example with a lot of extra words and the reference sentence.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=141)** Here, the reference sentence and the candidate are very similar, even though the example, that is, the candidate sentence contains many extra words.
>
> **[2:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=149)** So you can see the rouge scores are rather high: 0.83 for rouge1, 0.63 for rouge2, 0.83 for both rougeL and rougeLsum.
>
> **[2:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=158)** Let's compute the rouge score for the second candidate and reference sentence.
>
> **[2:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=164)** Example 2 contains fewer extra words.
>
> **[2:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=167)** Here, you can see that the rouge1 score is higher, almost 0.87.
>
> **[2:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=172)** It's 0.869.
>
> **[2:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=173)** Rouge2 is a little lower at 0.57. RougeL and RougeLsum are also higher at almost 0.87.
>
> **[3:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=182)** So now that you know how rouge scores work, let's take a look at the summary that was generated for the article about cloning the Labrador retriever.
>
> **[3:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=191)** So this is the summary.
>
> **[3:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=193)** Let's compute the rouge score of this summary against the original reference text, that is, the summary that is present in the dataset.
>
> **[3:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=201)** Use_stemmer = True means that a Porter stemmer will be applied to the candidate and reference sentences before route scores are computed.
>
> **[3:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=211)** The Porter stemmer will strip out suffixes of words so that words such as talk and talking will be considered to be the same [[Microsoft Word|word]].
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/evaluating-summaries-using-rouge-scores?u=76281980&t=220)** The rouge score for our summary compared to the reference summary is only about 0.13, so it isn't a great score.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1), [[Computer Vision]] (1), [[Microsoft Word|Word]] (1)
> **Versions:** 0.83 (2), 0.87 (2), 0.63 (1), 0.869 (1), 0.57 (1)
> **Code Identifiers:** rougel (3), rougelsum (3)
> **Definitions:** is a  (3), means that (1)
> **Env Vars:** lcs (2), nlp (1)
> **Analogies:** such as (2)

#### [Summarizing text and computing aggregate ROUGE scores](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=0)** Instead of generating summaries one article at a time, I'm going to take a small set of articles from the test data that we've carved out from our original data set and generate summaries for 50 or so articles.
>
> **[0:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=14)** We'll then compute the rouge scores for all 50 summaries and see what they look like.
>
> **[0:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=20)** What I've done here is accessed the text and the summaries of articles from our test dataset that's in the active code cell.
>
> **[0:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=29)** Next, I run a little for loop to generate summaries for 50 samples from our test data.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=35)** I've only chosen 50 samples here because it takes a long time for the summarizer to generate summaries. Running on a single GPU, each summary will take about 30 or so seconds.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=45)** 50 summaries will take about 20 to 25 minutes.
>
> **[0:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=49)** But first, we import the tqdm [[Python (Programming Language)|Python]] library. tqdm is short for taqadum, which essentially will show us a progress bar as we iterate over this for loop. On line 7, I run a for loop over the first 50 articles in our test dataset.
>
> **[1:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=66)** For each article, we generate a candidate summary by parsing in the prefix plus the text.
>
> **[1:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=71)** Remember, we have to parse in the summarized prefix for this model. We'll append every candidate summary that was generated to the candidate summaries list.
>
> **[1:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=81)** Let's go ahead and run this code and this will take about 20 or so minutes to run through.
>
> **[1:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=86)** If you're running the code along with me, well, you'll have to be a little patient and wait for all of the summarization to be completed.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=94)** There's a little warning here that you can safely ignore. By default, the max length of our summary will be 200 [[Tokens]].
>
> **[1:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=103)** However, there is one input article that's just 171 tokens, and that's what this warning is about.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=109)** Now that we have the candidate summaries and we have the original article summaries, let's use rouge.compute to compute the rouge scores.
>
> **[1:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=117)** This will give us the aggregate rouge scores across all 50 summaries generated.
>
> **[2:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=122)** And you can see rouge1 is a little better here, 0.32.
>
> **[2:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=126)** Rouge2 is 0.139, not great.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=129)** RougeL and RougeLsum are also around 0.24.
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=133)** Again, improved from what we had previously with just one candidate summary.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=138)** Now you can also get an aggregated rouge score so that you get a rouge score for each individual candidate summary versus its reference.
>
> **[2:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=147)** The main change here is that in the rouge.compute, I've parsed in use_aggregator = False.
>
> **[2:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=153)** Let's take a look at the unaggregated results and you can see that I get rouge scores for each individual candidate summary.
>
> **[2:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=162)** Let's say the metric that you want to use to evaluate your candidate summaries is rouge2, which considers bigrams when checking to see whether candidate summaries are similar to reference summaries.
>
> **[2:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=175)** I've used np.argmax and argmin to find the candidate summary with the best rouge2 score and the worst rouge2 score.
>
> **[3:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=185)** Let's take a look at what these indices are.
>
> **[3:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=188)** You can see 38 has the best rouge2 score and 12 has the worst.
>
> **[3:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=192)** These are both indices.
>
> **[3:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=194)** What I'll do next is set up a DataFrame with two columns; predicted summaries from our T5 model and reference summaries from our test data.
>
> **[3:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=204)** So act_vs_pred_summaries_df.head() is the name of the DataFrame.
>
> **[3:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=209)** Now that we have this in a DataFrame, let's look at the candidate summary with the best rouge2 score.
>
> **[3:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=215)** Remember this is at Index 38 and we'll compare it with the reference summary.
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=220)** You can look at the actual summary generated by our model and the reference summary and you can see that there are many similarities.
>
> **[3:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=227)** This is clearly a good summary that our summarizer has produced.
>
> **[3:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=232)** Let's now look at Index 12.
>
> **[3:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-and-computing-aggregate-rouge-scores?u=76281980&t=234)** This had the worst rouge2 score. And even just glancing at these two summaries, you can see that the actual summary looks very different from the reference summary, which is why it had a low rouge2 score.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Python (Programming Language)|Python]] (1)
> **Versions:** 0.32 (1), 0.139 (1), 0.24 (1)
> **CLI Commands:** python (1), find (1)
> **Code Identifiers:** use_aggregator (1), act_vs_pred_summaries_df (1)
> **Definitions:** short for (1), is a  (1)
> **Warnings:** warning (2)
> **Env Vars:** gpu (1)
> **Analogies:** similar to (1)


### 6. Fine-Tuning a Transformer Model for Summarization

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding tokenizers](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=0)** Previously we generated summaries using the T5 model with zero-shot learning, that is, we didn't fine-tune the model before using it to generate summaries.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=10)** We just used the pre-trained model directly.
>
> **[0:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=13)** We'll now continue working with the T5 model, except that, we'll fine-tune the model on this CNN dataset that we have.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=21)** Fine-tuning is an approach to transfer learning where we start with the weights of the pre-trained model and then train it on the dataset that we have.
>
> **[0:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=30)** We'll see if the fine-tuned model produces better summaries than just using the pre-trained model. In order to be able to fine-tune this model, we need to understand in a little more detail the steps involved when we run a [[Hugging Face]] pipeline.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=45)** The steps include first preparing and processing the inputs that you parse in, then running the model on those inputs to get predictions and then processing these outputs, these predictions so that they return to you in a form that you can understand.
>
> **[0:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=59)** When we fine-tune our model, we'll have to perform each of these steps individually, starting with the first step, tokenization.
>
> **[1:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=67)** This is where we pre-process and prepare the input text so that it's converted to a form that can be fed into our model for predictions.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=76)** We access the tokenizer for our T5 Small model using the AutoTokenizer class. AutoTokenizer.from_pretrained and by parsing in the model name will give you the tokenizer for your model.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=90)** Every NLP model in the Hugging Face library will have a different tokenizer.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=94)** This will give us the tokenizer for our model. In order to see what kind of data we feed into our model, let's apply this tokenizer to this text, four-time defending champion.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=105)** Observe that the result is in the form of input IDs.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=109)** The tokenizer will break the input sentence into sub-words.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=114)** For example, four-time will become two sub-words, defending might become two sub-words as well.
>
> **[2:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=120)** And every sub-[[Microsoft Word|word]] has a unique ID.
>
> **[2:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=122)** Those are the input IDs that you see.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=124)** The attention mask tells the model what [[Tokens]] to pay attention to.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=129)** For example, if you had some text and then you add a bunch of padding after that text, well, the attention mask would tell the model to ignore the padding by having all 0s for the padded tokens.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=141)** When you invoke the tokenizer in this form, it actually performs two separate operations.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=146)** The first is tokenizer.tokenize, and this is what generates the sub-words or tokens from the input text.
>
> **[2:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=154)** You can see four is a separate token, the hyphen is a separate token, then time, and that's why we get the six tokens.
>
> **[2:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=161)** The second operation is to convert these tokens to IDs. So you can call tokenizer.convert_tokens_to_ids, parse in the input tokens, and we get the exact same result that we got earlier.
>
> **[2:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/understanding-tokenizers?u=76281980&t=173)** These are the same tokens we got for the input text when we just invoked the tokenizer directly on the text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (7), [[Hugging Face]] (2), [[Microsoft Word|Word]] (1)
> **Definitions:** is a  (2), is an  (1)
> **Code Identifiers:** from_pretrained (1), convert_tokens_to_ids (1)
> **Env Vars:** cnn (1), nlp (1)
> **Analogies:** for example (2)

#### [Fine-tuning the T5 small model](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=0)** Just like we separately access the tokenizer to preprocess our data, let's separately load the model which we plan to fine-tune.
>
> **[0:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=9)** And I do this using AutoModelForSeq2SeqLM.
>
> **[0:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=13)** This is the class used to load language models with the encoder-decoder architecture, which is the case for our T5 model.
>
> **[0:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=22)** We use the from_pretrained method, specify our model name, and this will give us the pre-trained model that we'll fine-tune.
>
> **[0:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=30)** We'll now fine-tune this model on our CNN Daily Mail training data.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=35)** Remember, we are working with a small sample of the original dataset.
>
> **[0:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=39)** We'll use the tokenizer to preprocess the samples that we feed in to fine-tune the model.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=45)** And we do this within the preprocess function.
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=48)** The input to the preprocess function are the examples that need to be preprocessed.
>
> **[0:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=53)** Remember that every input text article needs to be prefixed with summarize:, which is why on line 6, for each document in the example articles we add the prefix in and those are our inputs.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=68)** We then tokenize these inputs by invoking the tokenizer.
>
> **[1:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=72)** We set the max length for number of [[Tokens]] to be 1024. Any text which generates tokens greater than 1024 will be truncated.
>
> **[1:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=82)** That's what truncation = True does.
>
> **[1:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=84)** Tokenizing the input articles gives us the model inputs for fine-tuning.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=90)** We then run the tokenizer on the highlights.
>
> **[1:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=93)** This is on line 9.
>
> **[1:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=95)** The highlights are the reference summaries that we'll use to train the model.
>
> **[1:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=99)** The max length I set to 128 tokens, once again, truncation = True.
>
> **[1:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=104)** We now have the original articles and the summaries from our training data.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=109)** We set the labels key on the model inputs to be equal to the input IDs generated for the highlights, that is, labels["input_ids"] and we return the model inputs.
>
> **[2:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=120)** We run this preprocessed function on our entire dataset, both the training data as well as the test data using the map function.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=128)** Batched = True allows us to speed up the map function so that it processes multiple elements of the dataset at one go.
>
> **[2:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=137)** Let's take a look at the features in our preprocessed data.
>
> **[2:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=141)** We have the original article, the highlights, the ID, those come from the original dataset.
>
> **[2:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=146)** We also have input IDs, attention mask, and labels.
>
> **[2:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=150)** The input IDs, if you remember, are the numeric tokens fed into our model.
>
> **[2:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=154)** The attention mask will indicate to the model what tokens to pay attention to.
>
> **[2:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=159)** If there are padding tokens, the attention mask will ask the model to ignore those. And the labels are, of course, the input IDs or the highlights, that is, the reference summaries. In order to feed in our training data in batches to the model, we'll use a data collator.
>
> **[2:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=176)** Data collators are objects that will form a batch by using a list of dataset elements as input.
>
> **[3:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=183)** In order to create batches, data collators may apply some kind of processing like padding or apply some random data augmentation.
>
> **[3:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=192)** We instantiate a data collator for our task by specifying the tokenizer and the model name.
>
> **[3:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=199)** We are almost there.
>
> **[3:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=200)** We are almost ready to fine-tune our model on the CNN Daily Mail training set that we have.
>
> **[3:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=206)** But before that, I'm going to set up another [[Python (Programming Language)|Python]] function, and this one will compute rouge scores for the summaries generated by the model.
>
> **[3:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=215)** Compute metrics will take in eval_pred, which is essentially a tuple of the predictions and the actual labels, that is, the actual highlights from the dataset.
>
> **[3:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=226)** On line 3, we use tokenizer.batch_decode to get decoded values of predictions.
>
> **[3:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=234)** The output generated by the model will be in the form of token IDs, but in order for us to understand the output, we need it in the form of strings.
>
> **[4:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=243)** So this is what tokenizer.batch_decode does.
>
> **[4:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=247)** On line 5, we look at the tokenized labels.
>
> **[4:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=250)** Remember, the labels are the actual highlights from the dataset.
>
> **[4:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=254)** Wherever the token IDs for the labels are equal to -100, we'll replace that with a padding token ID.
>
> **[4:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=262)** The documentation doesn't say exactly why this is needed, but if you do not have this little line of code, you'll find computing metrics on your predictions will result in errors.
>
> **[4:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=274)** After we perform this replacement, we use tokenizer.batch_decode to decode the labels as well and convert them to strings.
>
> **[4:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=283)** Once we have the decoded predictions and decoded labels, we can compute rouge scores.
>
> **[4:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=289)** Remember, rouge.compute takes in predictions and the reference values in the form of strings.
>
> **[4:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=295)** Result is a dictionary that will hold the aggregated rouge scores for our predictions.
>
> **[5:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=301)** We also compute the average length of our predictions.
>
> **[5:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=304)** And this is the code on lines 10 and 11.
>
> **[5:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=307)** We add the average length of predictions to the result as well, and finally, we return values in the result rounded off to four decimal places.
>
> **[5:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=318)** We are ready to start training our pre-trained model.
>
> **[5:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=322)** This is fine-tuning.
>
> **[5:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=323)** Now, before we do that, we need to specify the arguments for running the training process.
>
> **[5:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=329)** And this we do using sequence-to-sequence training arguments.
>
> **[5:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=333)** Here we specify the output directory where the serialized model will be stored, the evaluation strategy in terms of epochs, the learning rate of the model, the batch sizes, the number of epochs of training you can see on line 9, I've set that to 3.
>
> **[5:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=348)** Predict_with_generate, I've specified as True.
>
> **[5:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=351)** This indicates whether the model should use generate to calculate generative metrics such as rouge.
>
> **[5:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=357)** We of course want that to be true.
>
> **[5:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=359)** Setting push_to_hub = True will push the model as well as the tokenizer to a repository on the [[Hugging Face]] hub.
>
> **[6:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=368)** These training arguments that we've set up are used to customize the trainer that will actually perform training on the model.
>
> **[6:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=376)** The trainer takes in a number of arguments, the model that needs to be fine-tuned, the training arguments, the train dataset, the evaluation dataset, the tokenizer for the input data, the data collator that will basically collect your input data in batches, and finally, the compute metrics, metrics that will be generated on the results.
>
> **[6:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=399)** I then invoke the train method on the trainer.
>
> **[6:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=402)** This is on line 25.
>
> **[6:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=403)** Colab for some reason displays a red underline, but there's nothing really wrong with that code.
>
> **[6:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=408)** You'll see that it runs through just fine.
>
> **[6:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=411)** Go ahead and hit "Shift + Enter" and we'll fine-tune our model on the CNN Daily Mail dataset for three epochs.
>
> **[6:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/fine-tuning-the-t5-small-model?u=76281980&t=419)** Now, this took a fairly long time to run. Training run for about 50 minutes to an hour on the single GPU that I have here on Colab.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (6), [[Python (Programming Language)|Python]] (1), [[Hugging Face]] (1)
> **Code Identifiers:** batch_decode (3), from_pretrained (1), input_ids (1), eval_pred (1), push_to_hub (1)
> **Env Vars:** cnn (3), gpu (1)
> **CLI Commands:** python (1), find (1)
> **Tools:** colab (2)
> **Analogies:** just like (1), such as (1)
> **Prerequisites:** set up (2)
> **Documentation:** the documentation (1)

#### [Pushing the model to the Hugging Face Hub](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=0)** At this point, we've successfully fine-tuned our model on the CNN Daily Mail dataset that we had.
>
> **[0:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=7)** We fine-tuned our model on only a small subset of the original dataset because with a single GPU on Colab, training on a larger dataset would have been very onerous, we would not have had sufficient resources to do so. Now because we specified push_to_hub = True, as a training argument, you can see that a repository with our model and tokenizer parameters has been created here on the [[Hugging Face]] hub.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=35)** You can see the name of the output directory that we have specified, cnn_new s_summary_model_ trained_on_reduced_data.
>
> **[0:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=42)** The model card is empty.
>
> **[0:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=45)** I'll show you how you can populate that in just a bit.
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=48)** And you can see in files and versions, a bunch of configuration files, as well as the serialized tokenizer and the serialized model.
>
> **[0:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=57)** You can see the [[PyTorch]] model that we trained, that is, the .bin file in the pickled format. training_args.bin holds the training arguments again in the pickled format.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=68)** These arguments, config file, and model have been pushed during the training process.
>
> **[1:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=74)** Now, heading back to our Colab notebook, I'm going to call trainer.push_to_hub().
>
> **[1:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=80)** This will actually push our trained model to the hub.
>
> **[1:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=83)** The hub will now contain the model parameters that we used, the evaluation metrics computed on the results, and even the model card.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=92)** Back in the hub, let's just refresh this page and you can see the updated results that have been pushed here.
>
> **[1:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=100)** Observe that a model card with a standard template has been automatically generated for you.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=105)** The model card has automatically included the rouge scores computed on your validation data.
>
> **[1:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=113)** Then there are a bunch of sections here for model descriptions and other details.
>
> **[1:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=118)** Information for that is not automatically generated, but here at the bottom, we have the training results.
>
> **[2:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=124)** You can see the performance of the model over three epochs of training.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=129)** For example, look at the rouge1 score.
>
> **[2:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=131)** After the first epoch, it was 0.2175, then it moved up to 0.2183, and then to 0.219.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=138)** Three epochs of training is not very much, so we definitely can't have expected this model to improve a whole lot.
>
> **[2:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=145)** You can see that the framework versions on which the model was trained is also logged here.
>
> **[2:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/pushing-the-model-to-the-hugging-face-hub?u=76281980&t=150)** If you go to the files and versions tab, you will find the final version of our serialized model after training is now complete. You can see that the model file, pytorch_model.bin was updated just about a minute ago when we pushed it to hub.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (1), [[PyTorch]] (1)
> **Code Identifiers:** push_to_hub (2), cnn_new (1), trained_on_reduced_data (1), training_args (1), pytorch_model (1)
> **Versions:** 0.2175 (1), 0.2183 (1), 0.219 (1)
> **Env Vars:** cnn (1), gpu (1)
> **Tools:** colab (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### [Summarizing text using the fine-tuned model](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=0)** If you remember earlier on in this demo, we used an example article to generate a summary from the T5 model using zero-shot learning.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=10)** This was the example text, an article about a Labrador retriever that was cloned.
>
> **[0:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=16)** Now let's generate a summary for this article using our fine-tuned model.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=21)** We'll use the [[Hugging Face]] pipeline object to instantiate this model, but we'll instantiate our fine-tuned model, not the original T5 Small model.
>
> **[0:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=31)** Let's see how we do that.
>
> **[0:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=32)** On lines 5 through 9, I instantiate the pipeline, I specify the task I want to perform summarization, I specify the model, but this time the model points to the model that we've just fine-tuned, cloud-user/cnn_news_summary_model_trained_ on_reduced_data.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=50)** Now your model path is likely to be a little different because your username will be different, your username on Hugging Face.
>
> **[0:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=59)** Again, truncation = True so that long sentences are truncated.
>
> **[1:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=62)** Let's generate the summary text by invoking the summarizer.
>
> **[1:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=66)** On the example text, make sure you add the prefix and let's see what the summary looks like.
>
> **[1:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=72)** Here is the summary for the original article.
>
> **[1:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=75)** The summary does capture the essence of the article, but whether it's better than the previous summary we got using zero-shot learning, well, it's hard to tell.
>
> **[1:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=84)** We saw how we could use our fine-tuned pipeline directly, but we can also access the tokenizer and model separately from our repository.
>
> **[1:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=94)** Here, I use AutoTokenizer.from_pretrained and I point to the model and tokenizer that we saved out on our repository.
>
> **[1:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=102)** Then on line 5, I pass the example text along with the prefix to the tokenizer, return tensors = "pt" will return tensors in the [[PyTorch]] format and then I access the input IDs.
>
> **[1:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=115)** The input IDs stored in the inputs variable are the form in which the model accepts data.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=123)** This is what will pass into our model.
>
> **[2:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=125)** Next, we use AutoModelForSeq2SeqLM.from_pretrained to load our model in. Again, specify the path to the repository where the model was saved, cloud-user/cnn_news_summary_model_trained_ on_reduced_data.
>
> **[2:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=143)** We then get predictions from the model by calling model.generate and parse in the input [[Tokens]], that is, in the inputs variable. Model.generate will generate new text using the input text that we have specified.
>
> **[2:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=157)** max_new_tokens are set to 100, which means the maximum number of tokens generated by this model will be 100.
>
> **[2:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=165)** do_sample = False means the model should not use sampling while generating text.
>
> **[2:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=172)** It will use an algorithm called greedy decoding. While generating [[Microsoft Word|word]] sequences, greedy decoding will select the word that has the highest [[Probability]], it will act greedily.
>
> **[3:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=183)** The outputs variable that contains the predictions from our model is in the form of tokens, not in the human-readable format.
>
> **[3:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=191)** So we need to call tokenizer.decode to actually decode those tokens and get the resulting summary as a string.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=198)** And here we get the same summary that we got earlier when we used our fine-tuned model in a pipeline directly.
>
> **[3:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=206)** We can now compute rouge metrics on summaries generated by our fine-tuned model.
>
> **[3:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=211)** Let's look at the reference text for our example article first.
>
> **[3:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=215)** So this is the reference summary for the article on the cloned Labrador.
>
> **[3:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=220)** Now let's compute the rouge score for the summary generated by our fine-tuned model by comparing its summary with this reference text.
>
> **[3:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=229)** Based on the rouge scores here, this summary is much better than the summary we got using zero-shot learning. When we use the pre-trained model directly to generate a summary, you can see the older scores here at the bottom of your screen and the current scores.
>
> **[4:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=245)** Notice the rouge1 score is now 0.25, it was just 0.13 earlier.
>
> **[4:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=250)** Also, notice the rougeL score is 0.153 now in the fine-tuned model and previously the rougeL score was 0.07.
>
> **[4:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=260)** So clearly this model generates summaries that are far better than when we use just zero-shot learning.
>
> **[4:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=268)** Rather than evaluate a fine-tuned model on just one article, let's generate summaries for the first 50 articles in our test dataset.
>
> **[4:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=277)** We do this using a for loop in exactly the same way as before, and we'll compare this with our original pre-trained model.
>
> **[4:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=285)** Let's compute the aggregated rouge scores on the 50 summaries that were generated by our fine-tuned model, and we'll compare these results with the model where we did not perform any fine-tuning.
>
> **[4:58](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=298)** So here are the rouge scores.
>
> **[5:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=300)** Let's compare them with the previous rouge scores that we received, and you can see these rouge scores are improved.
>
> **[5:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=306)** Previously, the average rouge score for the first 50 summaries was 0.324, now it's 0.342.
>
> **[5:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=314)** Rouge2 score went from 0.139 to 0.157.
>
> **[5:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=319)** And you can see that both the rougeL and rougeLsum scores have also improved. Our fine-tuned model, even with just three epochs of training on a small training set is clearly better.
>
> **[5:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=332)** Let's follow some steps that we've seen before.
>
> **[5:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=334)** I'll get the unaggregated rouge scores for each of the 50 articles that were summarized by this model.
>
> **[5:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=342)** Now that I have the unaggregated rouge scores, I'm going to extract the rougeLsum and compute the summary with the best rougeLsum score and the worst rougeLsum score.
>
> **[5:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=354)** So the summary at Index 35 was the best and Index 3 was the worst.
>
> **[6:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=360)** Let's now get a DataFrame of the predicted summaries from our fine-tuned model and the reference summaries from the actual dataset.
>
> **[6:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=368)** Now that we have the predicted and actual summaries in this DataFrame format, we can compare the summary at Index 35 with the reference summary.
>
> **[6:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=377)** Remember, this is the summary with the best rougeLsum score. And a quick glance at the actual summary as compared to the reference summary seems to indicate that the actual summary is pretty good.
>
> **[6:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=390)** Now let's look at the worst index, Index 3.
>
> **[6:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=393)** Let's look at the actual summary versus the reference summary, this had the worst rougeLsum score and you can see that the summaries are indeed very different.
>
> **[6:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summarizing-text-using-the-fine-tuned-model?u=76281980&t=402)** The model did not do a very good job with this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (4), [[Hugging Face]] (2), [[Microsoft Word|Word]] (2), [[PyTorch]] (1), [[Probability]] (1)
> **Code Identifiers:** rougelsum (6), rougel (3), on_reduced_data (2), from_pretrained (2), max_new_tokens (1)
> **Versions:** 0.25 (1), 0.13 (1), 0.153 (1), 0.07 (1), 0.324 (1)
> **CLI Commands:** make (1)
> **UI Navigation:** select the (1)


### 7. Exploring Different Hugging Face Transformers for Summarization

[↑ Back to Table of Contents](#table-of-contents)

#### [Accessing the BBC dataset on Google Drive](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=0)** In this demo, we'll continue working with [[Hugging Face]] [[Transformer Models]] and we'll try two other models for text summarization.
>
> **[0:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=8)** The first model that we'll use is the [[Google]] Pegasus model that has been trained on the C4 dataset, as well as a news dataset which includes the CNN Daily Mail articles.
>
> **[0:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=19)** We'll have these models generate summaries using data from a different dataset, the BBC News Summary dataset.
>
> **[0:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=27)** Let's get started.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=28)** Now we need to pip install all of the libraries that we need because we're starting with a new Colab notebook.
>
> **[0:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=34)** Once again, I'm using the GPU runtime in this notebook.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=37)** Now we need to pip install a second library here as well, the sentencepiece library. The Pegasus tokenizer needs sentencepiece.
>
> **[0:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=46)** Sentencepiece is not actually a tokenizer, it's a method for selecting [[Tokens]] from a pre-compiled list, optimizing the tokenization process based on a supplied vocabulary corpus.
>
> **[0:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=59)** Once you have the required libraries installed, you may need to restart your kernel.
>
> **[1:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=63)** That's pretty straightforward.
>
> **[1:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=64)** Here in Colab, go to runtime, restart runtime and your kernel restart should ensure that you have all of the libraries that you need and can use them. As before, let's connect to our account on Hugging Face hub by using notebook login.
>
> **[1:19](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=79)** Notebook login needs the token that we had generated earlier.
>
> **[1:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=84)** As you remember, these access tokens are present in your profile.
>
> **[1:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=88)** We likely need both read as well as write permissions, so I'm going to copy over token summarization write, paste it into this input box and use that to log in and connect to Hugging Face Hub.
>
> **[1:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=99)** I've uploaded the data set that I plan to use for summarization to [[Google Drive]], the Google Drive associated with the same account I used to log in to Colab. drive.mount("/content/drive") will mount my Google Drive root folder to Colab.
>
> **[1:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=119)** Connecting to Google Drive will allow us to access the dataset that's present in Google Drive.
>
> **[2:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=125)** You'll be asked to log in with your account and authenticate yourself.
>
> **[2:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=129)** You'll be asked for permissions to allow Colab to access Google Drive.
>
> **[2:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=133)** Click on "Allow", and with that, your Drive folder should be mounted.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=138)** Next, let's confirm that this dataset is indeed present on Google Drive.
>
> **[2:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=142)** You can see under My Drive, BBC, I have the BBCNewsSummary.zip file.
>
> **[2:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=148)** We'll need to unzip and extract the contents of this file before we can use it.
>
> **[2:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=152)** Here is the path to the zip file on my drive. I'm going to import the zip file library and use the zip_ref.extractall method to extract the contents of the zip.
>
> **[2:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=165)** The extracted contents will be placed in the My Drive BBC folder.
>
> **[2:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=169)** Once the extraction operation is complete, you should find a new subfolder in here called BBC News Summary.
>
> **[2:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=175)** And if you click through, you should find subfolders for news articles and the corresponding summaries.
>
> **[3:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=181)** Let's take a look at the news articles.
>
> **[3:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=183)** You can see that these news articles are split into different topics or categories.
>
> **[3:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=188)** Let's look at one of these.
>
> **[3:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=189)** Each article is present as a different text file.
>
> **[3:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=193)** You can see that the text files are numbered 001, 002, and so on.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=198)** The corresponding numbered text files in the summaries folder will contain the summaries for these articles.
>
> **[3:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/accessing-the-bbc-dataset-on-google-drive?u=76281980&t=204)** We'll use those summaries as reference summaries to compute ROUGE scores for the summaries that we get from the models that we've chosen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Drive]] (7), [[Hugging Face]] (3), [[Tokens]] (2), [[Transformer Models]] (1), [[Google]] (1)
> **Env Vars:** bbc (4), cnn (1), gpu (1), rouge (1)
> **CLI Commands:** pip (2), find (2), unzip (1)
> **Tools:** colab (5)
> **Exercise Files:** zip file (3)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** install (2)
> **Code Identifiers:** zip_ref (1)

#### [Instantiating and cleaning the BBC News summaries dataset](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=0)** The data that we plan to use for summarization is now available on [[Google Drive]].
>
> **[0:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=5)** However, we need to create a dataset object so that we can use that to feed into our summarization model.
>
> **[0:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=12)** And that's what we'll do here in this movie.
>
> **[0:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=15)** I've defined a function called extract, which takes in as an input argument the path to a single file, whether it's the original article or the summary.
>
> **[0:24](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=24)** Using this path, I've defined a regular expression pattern on line 4 to be able to extract the category that the file belongs to and the ID of the text file.
>
> **[0:35](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=35)** The ID of the text file is simply its name, 001.txt and so on.
>
> **[0:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=39)** We do a regular expression search on line 6 to extract the category and file ID, and then we open up the file at the file path, read its contents into the text variable and return the category file ID and text.
>
> **[0:53](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=53)** Next, we perform a set of operations to get the articles and the summaries in a single DataFrame.
>
> **[1:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=60)** The dataset path points to the root path where the articles and the summaries are present, that is, BBC News Summary is the name of the folder. On lines 6 and 7, we extract the articles_data and summaries_data in a list format, and on lines 9 and 10, we convert those lists to DataFrames.
>
> **[1:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=81)** The articles DataFrame has three columns; category, ID, and article.
>
> **[1:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=85)** The summaries DataFrame has category, ID, and summary.
>
> **[1:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=88)** On line 12, I perform a join operation using the [[Pandas (Software)|Pandas]] merge function to combine these two DataFrames into a single DataFrame on the category and ID columns.
>
> **[1:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=99)** And this is what the joined data frame looks like, news_summary_df.
>
> **[1:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=103)** At this point we have the original article and its summary in the same DataFrame.
>
> **[1:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=110)** They are just different columns of the same DataFrame.
>
> **[1:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=112)** Let's take a look at a sample article from this DataFrame.
>
> **[1:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=116)** I've picked the article at ID 10. So here is the original article.
>
> **[2:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=120)** It's something about actress, Julia Roberts.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=123)** You can see there are quotes, backslashes, and a whole bunch of other characters that we do not want.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=128)** This text requires some cleaning.
>
> **[2:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=130)** Let's take a look at the summary for this same article, the article at Index 10.
>
> **[2:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=135)** You can see the summary here.
>
> **[2:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=137)** Once again, the summary also has some additional characters which we need to clean. Before we perform any [[Data Cleaning]], let's convert the data that we have in a DataFrame to be represented using a [[Hugging Face]] dataset object.
>
> **[2:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=151)** And you can do this very easily by invoking the dataset from Pandas function.
>
> **[2:36](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=156)** You can see this on line 3.
>
> **[2:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=158)** Running this code cell will give us a dataset.
>
> **[2:41](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=161)** Notice the features; category, ID, article, and summary.
>
> **[2:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=164)** And there are a total of 2,225 rows in this dataset.
>
> **[2:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=169)** Next, I've defined a clean text function.
>
> **[2:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=171)** This function is exactly the same as the function that we've seen in the previous demo.
>
> **[2:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=176)** I convert the text to lowercase, replace backslashes, forward slashes, new line characters, quotes, all with the empty string.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=184)** For each record, we do the data cleaning for both the article as well as the summary.
>
> **[3:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=189)** Now, applying this clean text operation simply involves invoking the map function and parsing in the clean text function on our dataset.
>
> **[3:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=198)** Let's confirm that our data is indeed cleaned.
>
> **[3:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=201)** Here is a sample from the original dataset at index 0.
>
> **[3:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=205)** You can see it contains a lot of new lines, it contains quotes, backslashes, and so on.
>
> **[3:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=210)** Let's take a look at the cleaned version of the same article.
>
> **[3:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=214)** This dataset is in the cleaned_news_summary variable at index 0.
>
> **[3:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=218)** Here is the cleaned version of the same article.
>
> **[3:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/instantiating-and-cleaning-the-bbc-news-summaries-dataset?u=76281980&t=222)** Everything in lowercase, no new lines, no extra code characters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Pandas (Software)|Pandas]] (2), [[Data Cleaning]] (2), [[Google Drive]] (1), [[Hugging Face]] (1)
> **Code Identifiers:** articles_data (1), summaries_data (1), news_summary_df (1), cleaned_news_summary (1)
> **File Paths:** 001.txt (1)
> **Env Vars:** bbc (1)
> **Definitions:** is a  (1)

#### [Generating summaries using Pegasus](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=1)** We are now ready to access and use the [[Google]] Pegasus model for text summarization.
>
> **[0:06](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=6)** And for that, we need two classes from the [[Hugging Face]] Transformers library.
>
> **[0:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=11)** PegasusForConditionalGeneration, this will allow us to access the pre-trained model and the PegasusTokenizer will allow us to access the tokenizer for the model.
>
> **[0:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=21)** Now the path to the Pegasus model is available here on Hugging Face, google/pegasus-cnn_dailymail.
>
> **[0:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=28)** Pegasus models are sequence-to-sequence models with an encoder-decoder model architecture.
>
> **[0:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=34)** The pre-training task used for Pegasus is similar to summarization.
>
> **[0:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=38)** Important sentences are removed or masked from an input document and are generated together as one output sequence from remaining sentences.
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=48)** So this task is similar to performing an extractive summary.
>
> **[0:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=52)** On line 3, we access the tokenizer for the Pegasus model by calling PegasusTokenizer.from_pretrained and parsing in the model path. And in a similar way, on line 4, we access the model itself using PegasusFor ConditionalGeneration.from_pretrained.
>
> **[1:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=69)** This will download the model and the tokenizer and make it available here in your Colab notebook.
>
> **[1:15](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=75)** Based on the information on the model card for this particular Pegasus model, this was pre-trained on the C4 dataset as well as a dataset called Huge News.
>
> **[1:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=86)** And the Huge News dataset includes the CNN Daily Mail dataset, which we used in the previous demo, which is why we are working with a different dataset in this demo, the BBC Summaries dataset.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=98)** If you just print out the contents of this tokenizer object, you'll get an overview of what the tokenizer looks like, the special [[Tokens]] that it uses, the maximum length of the model, which is 1024.
>
> **[1:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=109)** The vocabulary for this tokenizer is 96,103.
>
> **[1:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=114)** Now let's take a look at the model itself.
>
> **[1:57](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=117)** We simply print out the contents of this model.
>
> **[2:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=120)** This is a [[PyTorch]] model and, again, a heads up that we'll be using PyTorch to get predictions from this model.
>
> **[2:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=127)** You get an overview of the layers in the model.
>
> **[2:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=130)** You can see there is a shared embedding layer and then there is an encoder.
>
> **[2:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=134)** And if you scroll down below, you'll be able to see the Pegasus decoder.
>
> **[2:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=138)** We are now ready to put our Pegasus model through its paces.
>
> **[2:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=142)** Let's get it to summarize a single article.
>
> **[2:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=145)** This is the article at Index 5.
>
> **[2:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=148)** I access this article from the cleaned news summary dataset and I store it in the example text variable.
>
> **[2:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=154)** This seems to be an article about movies from the year 2004.
>
> **[2:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=159)** All right, we have our article.
>
> **[2:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=160)** Let's instantiate our Pegasus pipeline. On line 3, we instantiate the pipeline object, specify summarization as the task that we want to perform, the model is the Pegasus model, truncation = True.
>
> **[2:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=174)** So if our input sentences have tokens that are longer than the token length supported by the model, those sentences will be truncated. On line 4, I invoke the summarizer on the example text to get the summary.
>
> **[3:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=187)** Notice that I do not need to specify a prefix before the example text because this particular model is meant for summarization and does not perform other tasks.
>
> **[3:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=197)** Let's take a look at the summary that this produces.
>
> **[3:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=200)** You may see a warning here that says some weights were not initialized from the model checkpoint.
>
> **[3:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=207)** This means that if you're using this model on a production task, you should probably fine-tune this model on your dataset before you can use it.
>
> **[3:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=214)** I tried fine-tuning this model using the resources available on Colab, the GPU that is made available to us, and basically, I found it very hard.
>
> **[3:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=223)** Even a single epoch took several hours.
>
> **[3:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=226)** Now, you're familiar with how to fine-tune a model from the previous demo.
>
> **[3:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=230)** If you have more resources available to you, I suggest you try fine-tuning this model on a dataset of your choice, maybe the CNN Daily Mail.
>
> **[3:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=239)** Here is the summary generated by this model.
>
> **[4:02](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=242)** It seems to be a decent summary, but we'll only know once we compute the rouge score.
>
> **[4:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=247)** Let's access the reference text, that is, the summary available along with the dataset itself.
>
> **[4:13](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=253)** This is the reference text and we have the candidate text that is the summary generated by the model.
>
> **[4:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=258)** Let's use rouge to evaluate the summary.
>
> **[4:21](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=261)** You'll need to load rouge metrics into this Colab notebook.
>
> **[4:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=266)** I call rouge.compute as we've done before, parse in the predictions from the model, the reference text.
>
> **[4:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=273)** Let's take a look at the summary result, and you can see that the rouge score is pretty decent.
>
> **[4:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=278)** It's 0.46 for rouge1, 0.38 for rouge2, and 0.25 for rougeL and rougeLsum.
>
> **[4:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-pegasus?u=76281980&t=286)** So in spite of the model weights not being perfectly initialized, the summary that this model generated was a fairly decent one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Hugging Face]] (2), [[Tokens]] (2), [[PyTorch]] (2)
> **Code Identifiers:** from_pretrained (2), cnn_dailymail (1), rougel (1), rougelsum (1)
> **Env Vars:** cnn (2), bbc (1), gpu (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **Versions:** 0.46 (1), 0.38 (1), 0.25 (1)
> **Tools:** colab (3)
> **Warnings:** heads up (1), warning (1)
> **CLI Commands:** make (1)

#### [Generating multiple summaries and computing aggregate ROUGE scores](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=0)** Now that we've generated a candidate summary for a single example text and computed the rouge score for that summary, let's do it for a set of articles.
>
> **[0:10](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=10)** We'll generate summaries for 50 articles and compute the aggregate rouge scores across all of these 50 summaries.
>
> **[0:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=17)** In the active code cell, I extract the article_text and article_summaries in two different variables.
>
> **[0:25](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=25)** Once again, we'll use the tqdm or taqadum library to show a progress bar.
>
> **[0:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=31)** I use a for loop to iterate over the first 50 articles. On line 6, I invoke the summarizer on the article.
>
> **[0:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=38)** Once again, no prefix text is required because this model is primarily a summarizer.
>
> **[0:43](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=43)** It doesn't perform other tasks. And I append every summary to the candidate_summaries list.
>
> **[0:49](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=49)** I'm going to speed up this generation of summaries, but it took about 30 minutes when I ran it on Colab on a GPU.
>
> **[0:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=56)** Now that we have the summaries, let's compute the aggregate rouge scores across these 50 summaries.
>
> **[1:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=63)** Parse in the candidate summaries from the model, the reference summaries from our dataset.
>
> **[1:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=68)** I use a stemmer to cut off [[Microsoft Word|word]] suffixes.
>
> **[1:11](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=71)** So words such as expand and expanding will basically be treated as the same token.
>
> **[1:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=77)** And here are the aggregate rouge scores.
>
> **[1:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=80)** Rouge1 is 0.33, rouge2, 0.23 and rougeL and rougeLsum, 0.24.
>
> **[1:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=87)** Let's find the best and worst aggregate summary across these 50 articles.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=92)** Call rouge.compute and specify use_aggregator = False so that we get the unaggregated rouge scores. I'll now get the best candidate summary and the worst candidate summary generated by our model.
>
> **[1:46](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=106)** And we'll evaluate these candidate summaries using the rougeLsum metrics.
>
> **[1:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=111)** We'll get the index positions of the best and worst summaries.
>
> **[1:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=115)** The best summary is at Index 35, the worst at Index 22.
>
> **[1:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=119)** Let's set up the candidate summaries from the model and the reference summaries into a single DataFrame.
>
> **[2:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=125)** We have predicted_summaries and reference_summaries.
>
> **[2:08](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=128)** We can now use this DataFrame to access the candidate summaries and the reference summaries at the two indices, one for the best summary and one for the worst. At Index 35, we have the summary with the best rougeLsum score.
>
> **[2:23](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=143)** Let's look at the actual summary and the reference summary and you can see that there are lots of overlapping words.
>
> **[2:29](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=149)** The summary is clearly a good one.
>
> **[2:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=151)** The worst summary is at Index 22.
>
> **[2:34](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=154)** Let's take a look and we can compare them for ourselves.
>
> **[2:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=158)** It's about Mary Poppins and you can see that there are very few overlapping words and the summary is also really, really short.
>
> **[2:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-multiple-summaries-and-computing-aggregate-rouge-scores?u=76281980&t=165)** Clearly, this summary did not get a great rouge score.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Code Identifiers:** rougelsum (3), article_text (1), article_summaries (1), candidate_summaries (1), rougel (1)
> **Versions:** 0.33 (1), 0.23 (1), 0.24 (1)
> **CLI Commands:** find (1)
> **Env Vars:** gpu (1)
> **Tools:** colab (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Generating summaries using BART](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=0)** We are now ready to use the last of the [[Transformer Models]] that we'll work with in this course, the Bart model for text summarization.
>
> **[0:09](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=9)** The BartTokenizer will allow us to load the tokenizer used by Bart and BartForConditionalGeneration will allow us to load the pretrained model.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=18)** Now, the path to the Bart model is here as you see on screen, [[Facebook]]/bart-large-cnn.
>
> **[0:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=26)** The Bart model is a sequence-to-sequence encoder-decoder model with a bidirectional encoder.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=33)** Bidirectional encoders were a huge improvement over directional encoders. Directional encoders read the input text sequentially from left to right or right to left.
>
> **[0:44](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=44)** Bidirectional encoders, on the other hand, read the entire sequence of words at once.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=50)** Even though we call it bidirectional, it's more non-directional.
>
> **[0:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=54)** Bart also has an autoregressive decoder, which means the decoder generates text by looking at what text was generated in the previous timesteps of the decoder.
>
> **[1:05](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=65)** This particular checkpoint of the Bart model has been fine-tuned on the CNN Daily Mail dataset, the dataset that we worked with in one of our previous demos, which means it should work very well for summarizing news articles.
>
> **[1:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=78)** I've loaded in both the tokenizer as well as the model.
>
> **[1:22](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=82)** Let's print out the contents of the tokenizer just to get an overview of what it's all about.
>
> **[1:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=88)** You can see that its vocab size is smaller, 50265.
>
> **[1:32](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=92)** The model max length is 1024, that's how many [[Tokens]] it will generate for the summary.
>
> **[1:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=98)** Let's take a look at the model itself.
>
> **[1:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=100)** Let's print out the string representation of the model to see what the layers look like.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=105)** You can see it has an embedding layer that's the shared layer.
>
> **[1:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=108)** It has an encoder, that's the Bart encoder.
>
> **[1:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=111)** And if you scroll down below, it has a decoder layer as well.
>
> **[1:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=115)** Let's first generate a summary of the example text that we had set up earlier.
>
> **[1:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=119)** If you remember, this is an article about movies from 2004.
>
> **[2:03](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=123)** At this point, you should be completely comfortable instantiating the pipelines for your transformer models and then using it to get predictions.
>
> **[2:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=132)** I have a pipeline for summarization here.
>
> **[2:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=134)** The model is the Bart model, truncation = True.
>
> **[2:17](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=137)** I invoked the summarizer on the example text.
>
> **[2:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=140)** Note that I do not need to specify a prefix for this model, this model has been explicitly created for the purpose of summarization.
>
> **[2:28](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=148)** Now, when I look at the summary generated by this model, I can tell at a glance that it's much better than the summary we got from the Pegasus model for the same text.
>
> **[2:38](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=158)** Let's see if the summary is better using objective measures.
>
> **[2:42](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=162)** Let's take a look at the reference summary that we get from the dataset and let's compute the rouge score by comparing the candidate summary from the model with the reference summary from the dataset.
>
> **[2:54](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=174)** And here you can see rouge1 is 0.57. With the Pegasus model, our rouge1 score was around 0.3334, whereas here is 0.57.
>
> **[3:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=184)** Rouge2 is also quite high, 0.55.
>
> **[3:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/generating-summaries-using-bart?u=76281980&t=187)** All of the rouge metrics seem to indicate that this particular summarizer is far better, at least, for this article that we've chosen than the Pegasus model that we used previously.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Transformer Models]] (2), [[Facebook]] (1), [[Tokens]] (1)
> **Versions:** 0.57 (2), 0.3334 (1), 0.55 (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** cnn (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** note that (1)
> **Prerequisites:** set up (1)

#### [Computing ROUGE metrics for a set of summaries](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=0)** Let's do the same thing we did with the previous Pegasus model.
>
> **[0:04](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=4)** I'm going to take the first 50 articles from our BBC Summaries dataset and I'm going to generate summaries for all 50 articles using this Bart model.
>
> **[0:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=14)** We'll append each candidate summary generated into this candidate summaries list.
>
> **[0:20](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=20)** Once we have those, we'll compute the aggregate rouge scores for all 50 candidate summaries.
>
> **[0:26](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=26)** This will give us a better picture of how this model performs versus the Pegasus model.
>
> **[0:31](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=31)** Here are the aggregated results.
>
> **[0:33](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=33)** And just for reference, I'm going to show you the results from the Pegasus model.
>
> **[0:37](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=37)** Observe that the rouge1 score has improved to 0.39.
>
> **[0:40](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=40)** It was previously 0.33. Rouge2 is 0.27 for the new model, it was 0.23 for the Pegasus model.
>
> **[0:48](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=48)** The rougeL and rougeLsum scores have also improved.
>
> **[0:52](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=52)** Overall, the Bart model works much better on our dataset compared with the Pegasus model.
>
> **[0:59](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=59)** Let's get the unaggregated rouge scores for the individual text summaries that were generated and then let's get the indices of the summary with the best rougeLsum score and the worst rougeLsum score.
>
> **[1:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=72)** The best candidate summary seems to be at Index 8 and the worst at Index 46.
>
> **[1:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=78)** Now, in order to view the summaries versus the reference summaries, let's get both of them in a DataFrame, predicted summaries and reference summaries.
>
> **[1:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=87)** Let's take a look at the summary with the best rougeLsum score.
>
> **[1:30](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=90)** This was at Index 8. So I'm going to quickly update the indices here so that we look at the actual summary and the reference summary at Index 8, and a quick look tells you that yes, the summary seems very close to the original.
>
> **[1:45](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=105)** You can see that there is a lot of overlap between words in the original and words in the summary.
>
> **[1:51](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=111)** Let's look at the summary with the worst rougeLsum score.
>
> **[1:55](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/computing-rouge-metrics-for-a-set-of-summaries?u=76281980&t=115)** This was the one at Index 46. And here, just a glance tells you there is not a lot of overlap between words in the candidate summary and the words in the reference text.

> [!info]- Semantic Content
>
> **Code Identifiers:** rougelsum (5), rougel (1)
> **Versions:** 0.39 (1), 0.33 (1), 0.27 (1), 0.23 (1)
> **Env Vars:** bbc (1)
> **Definitions:** is a  (1)
> **Analogies:** picture (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Summary and next steps](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=0)** And this demo brings us to the very end of this course on AI Text Summarization with [[Hugging Face]].
>
> **[0:07](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=7)** Now, we started this course off by understanding how text summarization works, and we explored two techniques for text summarization; extractive and abstractive summarization.
>
> **[0:18](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=18)** We saw how we could use the Sumy application, hosted on spaces in Hugging Face for extractive text summarization.
>
> **[0:27](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=27)** We then got an overview of [[Transformer Models]] that are used for abstractive text summarization, and we saw how we could perform abstractive text summarization using the Hugging Face transformers library.
>
> **[0:39](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=39)** We learned how to use pre-trained models and we also saw how we could fine-tune these models on our own dataset.
>
> **[0:47](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=47)** And with this, we are at the end of this course.
>
> **[0:50](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=50)** Now, if you're interested in studying further, here are some other courses on [[LinkedIn]] Learning that you might want to watch.
>
> **[0:56](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=56)** Self-supervised Machine Learning will show you how we can use data with no labels to train ML models. An [[Introduction to Attention-Based [[Neural Networks]]]] will dive deeper into the concept of attention in sequence-to-sequence models.
>
> **[1:12](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=72)** Well, it's time for me to say goodbye.
>
> **[1:14](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=74)** I hope you enjoyed this course.
>
> **[1:16](https://www.linkedin.com/learning/ai-text-summarization-with-hugging-face/summary-and-next-steps?u=76281980&t=76)** Thank you for listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (3), [[Transformer Models]] (1), [[LinkedIn]] (1), [[Neural Networks]] (1)


## Instructor

- [[Janani Ravi]]

## Resources

- Exercise files available

## Skills Covered

- Automatic Text Summarization
- Artificial Intelligence (AI)
- Hugging Face Products

## Path Context

### In [[Develop Your Skills with Large Language Models]]
← [[TensorFlow- Working with NLP]] | **8 of 9** | [[Applied AI- Building NLP Apps with Hugging Face Transformers]] →

## Appears In

- [[Develop Your Skills with Large Language Models]]

## Related Courses

_Courses sharing skills:_

- [[Applied AI- Building NLP Apps with Hugging Face Transformers]] — Artificial Intelligence (AI), Hugging Face Products
- [[MLOps Tools- MLflow and Hugging Face]] — Artificial Intelligence (AI), Hugging Face Products
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)