---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: tensorflow-working-with-nlp
url: "https://www.linkedin.com/learning/tensorflow-working-with-nlp"
duration_minutes: 41
duration: 41m
level: Intermediate
updated: 6/18/2024
learners: 10057
skills:
  - TensorFlow
  - Artificial Intelligence (AI)
  - Natural Language Processing (NLP)
exercise_files: true
github: "https://github.com/LinkedInLearning/tensorflow-working-with-nlp-2439112"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHXRZ1Ysxw8fA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643654366588?e=2147483647&amp;v=beta&amp;t=dsjFuB2UwdcJ_0gnhsug9f6bRCYByP-u3-94h7pta5U"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Develop Your Skills with Large Language Models
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/tensorflow
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
status: not-started
created: 2026-04-20
---

![TensorFlow: Working with NLP](https://media.licdn.com/dms/image/v2/C560DAQHXRZ1Ysxw8fA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643654366588?e=2147483647&amp;v=beta&amp;t=dsjFuB2UwdcJ_0gnhsug9f6bRCYByP-u3-94h7pta5U)

# TensorFlow: Working with NLP

> Suggested Prerequisites

TensorFlow: Neural Networks and Working with Tabular Data 
TensorFlow: Working with Images
Understand the basics of Python
Some understanding of machine learning and TensorFlow 
Gmail account
  
TensorFlow 2.0 is quickly becoming one of the most popular deep learning frameworks and a must-have skill in your artificial intelligence toolkit. This course covers the key aspect

> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp) | 41m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jonathan Fernandes]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/tensorflow-working-with-nlp-2439112)

## Skills Covered

- TensorFlow
- Artificial Intelligence (AI)
- Natural Language Processing (NLP)

## Table of Contents

### Introduction

#### Why TensorFlow?
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=0)** - [Jonathan] TensorFlow is one of the most popular deep learning frameworks out there, and what makes it particularly appealing is its ecosystem.
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=7)** You can develop and train models using Python amongst several other languages, and then easily deploy them in the cloud or on-prem in the browser or on mobile devices no matter what language you use.
>
> **[0:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=18)** Transformers have taken the natural language processing world by storm.
>
> **[0:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=23)** Hi, I'm Jonathan Fernandes and I work with machine learning and AI models every day.
>
> **[0:28](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=28)** Join me as we learn about transformers in natural language processing.
>
> **[0:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=32)** In the process, we look at components of a transformer with a special focus on BERT, one of the encoder models developed by Google.
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=39)** We'll also cover topics like self-attention and see examples of bias in BERT and GPT-2.

> [!info]- Semantic Content
>
> **Env Vars:** bert (2), gpt (1)
> **CLI Commands:** python (1)
> **Code Keywords:** self (1)
> **Speakers:** - [jonathan] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=0)** - [Narrator] This course follows on from two other TensorFlow courses, TensorFlow: Neural Networks and Working with Tabular Data and TensorFlow: Working with Images, which are both available in the LinkedIn Library.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=11)** So if you haven't worked your way through these courses, you probably want to do that first.
>
> **[0:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=15)** If you know the basics of Python and you have some understanding of machine learning and have worked with TensorFlow before, you should be just fine.
>
> **[0:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=21)** I'll also be using Google Colab.
>
> **[0:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=23)** Now, if you haven't used this before, you'll need a Gmail account which you can sign up for in a couple of minutes.
>
> **[0:28](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=28)** Alternatively, you can just follow along.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Tools:** colab (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### What is TensorFlow?
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=0)** - [Instructor] Let's break down what's possible with TensorFlow.
>
> **[0:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=3)** Now, we all know that data is key to making your machine learning models work well, and TensorFlow has some brilliant tools to help you out with that.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=11)** You've got access to standard data sets to kickstart your training and validation, which is super handy.
>
> **[0:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=16)** And then TensorFlow also has these data pipelines that can handle massive amounts of data.
>
> **[0:20](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=20)** Now, if you need to pre-process your data, they've got layers for that too, so you can transform your inputs however you want.
>
> **[0:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=27)** Okay, so you're probably thinking, "Building and training machine learning models sounds like a lot of work," and you're right, but TensorFlow's core framework has got you covered with an entire ecosystem designed to streamline that process.
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=39)** So we're talking model construction, training and export, all made easier with this framework, but that's not even the best part.
>
> **[0:47](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=47)** TensorFlow supports distributed training, which means you can spread the workload across multiple machines and get your models trained faster.
>
> **[0:54](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=54)** And if you're a fan of Keras, you'll be happy to know it works really well with TensorFlow.
>
> **[0:59](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=59)** TensorFlow also comes with tools like Model Analysis and TensorBoard, which helps you to keep track of your model's development and improvements throughout its lifecycle.
>
> **[1:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=67)** So it's like having a personal assistant for your machine learning training.
>
> **[1:12](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=72)** The best part is, you don't even have to train your models from scratch.
>
> **[1:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=74)** TensorFlow Hub and the Model Garden offers pre-trained models from Google and the community.
>
> **[1:20](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=80)** So these high level components are like building blocks, and you can use them to fine tune models for your specific needs or customize them to tackle entirely new tasks.
>
> **[1:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=89)** It's like having a head start.
>
> **[1:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=91)** Okay, so you're probably wondering, where you can actually use these TensorFlow models you've been working on, right?
>
> **[1:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=96)** Well, let me tell you, the possibilities are endless.
>
> **[1:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=99)** Servers, edge devices, browsers, mobile apps, you name it, TensorFlow can handle it.
>
> **[1:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=103)** Now if you need to really scale up for production, there's TensorFlow serving, which can tap into some seriously powerful hardware like Google's own TPUs or Tensor Processing Units.
>
> **[1:53](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=113)** Now, if you need to analyze data locally, maybe to reduce latency or keep things secure, TensorFlow Lite lets you run models on mobile devices, edge computing rigs, and even tiny microcontrollers.
>
> **[2:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=124)** And get this.
>
> **[2:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=125)** You can even run machine learning models straight from your web browser with TensorFlow.js.
>
> **[2:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=131)** Now, imagine you're running a business that relies heavily on machine learning models.
>
> **[2:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=135)** As time goes by, your data and the requirements start to shift, and suddenly your once brilliant models aren't performing as well as they used to.
>
> **[2:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=143)** Now, this is common knowledge if you've been working in ML for a while, and this is what MLOps is all about.
>
> **[2:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=149)** TFX is a set of tools from TensorFlow that helps you automate the entire MLOps process.
>
> **[2:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=155)** You can track your model training, monitor performance, and even retrain your models when needed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), super (1), export, (1), this. (1), while, (1)
> **Analogies:** it's like (2), imagine (1)
> **File Paths:** tensorflow.js (1)
> **Env Vars:** tfx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. NLP and Transformers

#### What is NLP?
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=0)** - Natural Language Processing or NLP is an area of research and computer science focusing on processing natural languages, such as English and German and so on.
>
> **[0:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=9)** Now, what do we mean by processing?
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=11)** Well, we're taking these languages and converting them into numbers that a computer understands.
>
> **[0:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=16)** Computers then perform several tasks, such as text classification or text generation, or answering questions to demonstrate this understanding.
>
> **[0:26](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=26)** I like this comment from Andras Kornai's book, "Mathematical Linguistics".
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=30)** "NLP is hard from the standpoint of the child who must spend many years acquiring a language.
>
> **[0:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=35)** It's hard for the adult language learner.
>
> **[0:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=38)** It's hard for the scientist who attempts to model the relevant phenomena and it's hard for the engineer who attempts to build systems that deal with natural language input or output.
>
> **[0:48](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=48)** These tasks are so hard that Turing could rightly make fluent conversation in natural language, the centerpiece of his test for intelligence."
>
> **[0:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=56)** And finally, let's see what computer science researcher Yoav Goldberg has to say.
>
> **[1:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=61)** "Human language is highly ambiguous.
>
> **[1:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=63)** It's also ever-changing and evolving.
>
> **[1:06](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=66)** People are great at producing language and understanding language and are capable of expressing, perceiving and interpreting very elaborate and nuanced meanings.
>
> **[1:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=76)** At the same time, while we humans are great users of language, we're also very poor at formally understanding and describing the rules that govern language."
>
> **[1:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=85)** So we can safely conclude that NLP is a challenging and important area of research.
>
> **[1:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=91)** Now let's look at some of the tasks involved in natural language processing.
>
> **[1:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=94)** In sentence classification, we're interested in classifying whole sentences.
>
> **[1:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=98)** An example might be sentiment analysis, where we provide a review and want to determine if the review is positive or negative.
>
> **[1:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=105)** We might provide two sentences and want to know if they're logically related.
>
> **[1:48](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=108)** In named entity recognition, we might want to classify each word in a sentence as either a person, location or organization.
>
> **[1:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=116)** Financial institutions are often interested in this application for new customers.
>
> **[2:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=120)** If a company wants to set up a new account, there are several checks that must be made.
>
> **[2:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=125)** If a company trades in only low risk countries and its main business activity is considered low risk.
>
> **[2:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=130)** Their onboarding process can be fast-tracked by determining what parts are names, locations, and organizations, financial institutions can then go ahead and perform further searches and downstream tasks on them.
>
> **[2:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=143)** Other interesting NLP tasks are auto generating text, which as the name suggests, is generating text, for example, in English, that is grammatically correct.
>
> **[2:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=152)** You can also translate texts between two languages or summarize text.
>
> **[2:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=157)** And finally, given a question and some texts, we can answer the question based on the information provided in the text.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2)
> **Env Vars:** nlp (4)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - natural (1)

#### Transformers, their use, and history
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=0)** - [Instructor] Let's take a look at where transformers are used in production.
>
> **[0:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=4)** The Google search engine now uses transformers, in particular, BERT.
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=7)** In the past, if you did a search on Google for, can you get medicine for someone pharmacy, it wouldn't have picked up on the fact that for someone was a really important part of the query because you're looking for another person to pick up the medicine.
>
> **[0:20](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=20)** Google would've returned results about generally getting a prescription filled, which isn't relevant.
>
> **[0:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=25)** Now with BERT, it captures the nuance of the importance that another person picks up the medicine and returns results about having a friend or family member pick up a prescription.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=36)** Let me give you another example of Google search using BERT.
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=39)** When I enter the search, what are the rules for the hundred?
>
> **[0:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=43)** The answer back from Google doesn't just give me the most relevant page, but the answer to my question in bold.
>
> **[0:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=50)** This is an application of question answering that we saw earlier, using BERT.
>
> **[0:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=55)** In June, 2018, GPT or generative pre-training model, which was developed by open AI was the first pre-train transformer model and was used for fine tuning on various NRP tasks and obtained state of the art results.
>
> **[1:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=69)** Later that year in October, 2018, researchers at Google came up with BERT or bi-directional encoder representations from transformers.
>
> **[1:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=78)** In February, 2019, open AI released a bigger and better version of GPT called the GPT-2.
>
> **[1:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=85)** This was in the news a lot because the open AI team didn't want to release the details of the model because of ethical concerns.
>
> **[1:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=91)** Later that year in October, 2019, Facebook's AI research team released BART, or bi-directional and auto regressive transformer and Google released T5.
>
> **[1:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=101)** Both of these models are larger pre-trained models using the same architecture as the original transformer.
>
> **[1:47](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=107)** In the same month, the team at Hugging Face bucked the trend.
>
> **[1:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=110)** Everyone was moving to bigger models.
>
> **[1:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=112)** The Hugging Face team released DistilBERT, which is a smaller, faster and lighter version of BERT and has 95% of BERT performance on the GLUE language understanding benchmark.
>
> **[2:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=124)** And you can see that over the years, the trend is to have bigger model sizes.

> [!info]- Semantic Content
>
> **Env Vars:** bert (7), gpt (3), nrp (1), bart (1), glue (1)
> **Code Keywords:** let (2), for, (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### Transformers for NLP
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=0)** - [Narrator] Transformers form the underlying architecture for many of the popular NLP models you might've heard about such as BERT and GPT.
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=7)** They were proposed by a team of researchers from Google in 2017 in the paper, "Attention Is All You Need."
>
> **[0:13](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=13)** Now, before getting into the details of the transformer architecture, let's take a look at how well they perform on some of the NLP tasks we mentioned earlier.
>
> **[0:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=21)** So I'm going to head over to the notebook.
>
> **[0:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=23)** Now you can go ahead and select run time and run all the cells.
>
> **[0:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=27)** I'm not going to do that as it takes about two minutes to download some of the models.
>
> **[0:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=31)** So for this notebook, I've gone with a theme of Singapore Airlines as this is my favorite airline.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=36)** So when classifying whole sentences, I have used an actual review.
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=39)** The model needs to determine if the sentiment of the review is positive or negative.
>
> **[0:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=45)** So the text is, "The flights were on time both in Sydney, "and the connecting flight in Singapore, "the organization to cope with the COVID-19 restrictions "while in transit was well-planned "and directions easy to follow, "the plane was comfortable with a reasonable "selection of in-flight entertainment, "crew was pleasant and helpful."
>
> **[1:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=60)** And this sentence is correctly classified with a positive sentiment.
>
> **[1:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=65)** Now let's take a look at classifying each word in a sentence.
>
> **[1:08](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=68)** The sentence is Singapore Airlines was the first airline to fly the A380, Chew Choon Seng was Singapore Airlines' CEO at the time, Singapore Airlines flies to New York daily.
>
> **[1:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=79)** Now when classifying each word in a sentence, you can see that the model has been able to pick up that Chew Choon Seng, is one entity, and so is Singapore Airlines and New York.
>
> **[1:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=87)** It's not surprising that the A380 has been classified as miscellaneous, as it's an either a person, place, or organization, but an airbus aircraft model.
>
> **[1:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=98)** Now let's head over to answering a question.
>
> **[1:42](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=102)** So given the text Singapore Airlines was founded in 1947 and was originally known as Malayan Airways, it is the national airline of Singapore and is based at Singapore Changi Airport, from this hub, the airline flies to more than 60 destinations with flights to Seoul, Tokyo, and Melbourne and so on.
>
> **[1:58](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=118)** The question is, how many aircrafts does Singapore Airlines have?
>
> **[2:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=123)** Now you'll see that the answer is in this line here, there are more than 100 planes in the Singapore Airlines fleet.
>
> **[2:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=130)** Now notice that the question that I've asked is not how many planes, but how many aircraft's.
>
> **[2:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=136)** And so what we're going to be testing is whether the model is able to understand nuances in the English language.
>
> **[2:22](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=142)** And you can see that the model correctly answers, more than 100.
>
> **[2:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=147)** With text summarization, we're able to summarize this lengthy text into three sentences.
>
> **[2:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=154)** So if I provide the sentence, it is the national blank of Singapore, the model responds with the answers, anthem, capital, pride and so on.
>
> **[2:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=165)** And if I change the context to, Singapore Airlines is the national blank of Singapore, the model changes this correctly to predicting airline as the top response.
>
> **[2:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=176)** The other sentences that are provided are less likely in order of decreasing probability.
>
> **[3:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=181)** And you can see finally that the model has no problems with translating from English to German.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (2), a380 (2), bert (1), gpt (1), covid (1)
> **Code Keywords:** let (3)
> **Cross-References:** we mentioned (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Challenge: NLP model size
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=0)** (cheerful music)
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=7)** - [Instructor] The purpose of this challenge is to give you an idea of the scale involved in the NLP models and the infrastructure required.
>
> **[0:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=15)** So the first question is, how many parameters does the BERT base uncased model have?
>
> **[0:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=19)** You can use the get_model_size function below to help you.
>
> **[0:22](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=22)** And secondly, if you know the number of parameters for a model, how might you be able to determine how much memory is required when running a model inference?
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=30)** So this would be the amount of space that's required on RAM.
>
> **[0:33](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=33)** And then thirdly, if you wanted to run a GPT-3 175 billion inference, how much RAM would your infrastructure require?
>
> **[0:42](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=42)** This challenge should take you between five and 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** ram (2), nlp (1), bert (1), gpt (1)
> **Code Keywords:** function (1), require (1)
> **Code Identifiers:** get_model_size (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)

#### Solution: NLP model size
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=0)** - [Instructor] Now you can go ahead and select Runtime and run all the cells.
>
> **[0:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=9)** I've just done this.
>
> **[0:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=10)** So I'm not going to do that again.
>
> **[0:12](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=12)** So the question is how many parameters does the BERT base uncased model have?
>
> **[0:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=16)** And we can use the get model size function below to help us.
>
> **[0:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=19)** So if I head over to the get model size function, you can see that if I provide bert-base-uncased as my parameter, that the BERT base uncased model has over 109 million parameters.
>
> **[0:33](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=33)** Now, if you know what the number of parameters for a model, how might you be able to determine how much memory is required when running a model inference?
>
> **[0:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=40)** Now, because each of these parameters are represented as single precision floating point numbers, this means they require four bytes.
>
> **[0:47](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=47)** So four times the number of parameters will give us an approximate value for the size of the model.
>
> **[0:53](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=53)** So if I was to take the BERT base uncased model, I have 109 million parameters times four.
>
> **[1:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=60)** This means I would require 436 megabytes of RAM, which is about half a gig of RAM.
>
> **[1:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=67)** Now, if we apply that same logic, if we wanted to run a GPT-3 175 billion inference, how much RAM would our infrastructure require?
>
> **[1:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=77)** And you can see that we would need 175 million times four, and you can see that we would require a whopping 700 gigabytes of RAM if you wanted to run an inference of the GPT-3 175 billion parameter model.

> [!info]- Semantic Content
>
> **Env Vars:** ram (4), bert (3), gpt (2)
> **Code Keywords:** require (4), function (2), this. (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. BERT and Transfer Learning

#### Bias in BERT and GPT
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=0)** - [Instructor] Now, before you think BERT and GPT-2 should be put into production immediately, let's look at some problems with the models.
>
> **[0:06](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=6)** As always, you can go ahead and select Runtime and run all the cells.
>
> **[0:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=10)** I've run this notebook before, so I'm not going to run and download the models again.
>
> **[0:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=15)** Now, let's start off with the BERT model and see how it performs with a fill-in-the-blank type task.
>
> **[0:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=19)** The examples that are shown are the top five options.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=24)** So for example, we have this man works as a blank, and the options provided seem reasonable.
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=30)** This man works as a carpenter, a lawyer, a farmer, a businessman, and a doctor.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=36)** If we go ahead and say this white man works as a blank, we get some strange results.
>
> **[0:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=41)** This white man works as a carpenter.
>
> **[0:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=43)** This white man works as a slave.
>
> **[0:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=45)** And then if we say this black man works as a, again, we get some reasonable options.
>
> **[0:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=51)** So this black man works as a carpenter.
>
> **[0:53](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=53)** This black man works as a lawyer, barber, doctor, and teacher.
>
> **[0:58](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=58)** Now, if we provide a typical white male name, like Thomas, we get reasonable results.
>
> **[1:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=63)** And if we provide a typical black male name, such as Jamal, again, we get some reasonable entries.
>
> **[1:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=71)** Now, if we do the same for Amy, a typical white woman's name, and Aaliya, a typical black woman's name, again, we seem to get some reasonable results with Amy works as a waitress, Amy works as a nurse, Amy works as a teacher, model, and lawyer.
>
> **[1:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=85)** And we have similar sort of results for Aaliya.
>
> **[1:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=89)** Now, what is very strange is that if we input this woman works as a, the results we get back are nurse, so this woman works as a nurse, this woman works as a maid, a teacher, waitress, and prostitute.
>
> **[1:42](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=102)** I've also found occasional examples of bias against gay people with the BERT model.
>
> **[1:48](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=108)** Now, if you do some more study, you might also find bias, like the jobs for men might be for a doctor, but the job for a woman might be a nurse and not a doctor.
>
> **[1:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=116)** I haven't done an in-depth study on the bias in models, but this is an active area of NLP research.
>
> **[2:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=121)** Now, with GPT-2, in this case, each time you run the model, you'll get a different auto-generated text.
>
> **[2:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=127)** So I start off with the text the black man was known for, and then the text is auto-generated, saying for being a tough guy.
>
> **[2:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=134)** He would grab a fight or beat a guy up, and so on.
>
> **[2:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=136)** And then similarly, the woman was known for, and you can see the woman was known for saying that a woman who doesn't understand how men become the first to go to the altar, and so on.
>
> **[2:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=145)** Now, if I do the same thing with the man was known for, I say this man was known for his well-heeled work ethic and long and steady nights.
>
> **[2:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=152)** He would stay home on Sundays, and so on.
>
> **[2:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=154)** Now, I didn't find any significant bias against men, women, white, or black.
>
> **[2:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=159)** However, again, I found examples of bias against gay people in GPT-2.
>
> **[2:44](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=164)** And additionally, I found many examples of racism and bias against people from the Middle East.
>
> **[2:49](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=169)** So auto-generated text had references to antisemitism, Islam, and terrorism.
>
> **[2:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=175)** To sum up, bias is an active area of research, and there's a lot of work to be done.
>
> **[2:59](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=179)** I've seen examples of bias against women, gay people, and different races.
>
> **[3:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=184)** You don't want to be putting GPT-2 and BERT into production with text generation and masked modeling without some strict boundaries and having a human in the loop to check the output that is created.
>
> **[3:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=195)** So where does this bias come from?
>
> **[3:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=197)** And that's what we'll look at next.

> [!info]- Semantic Content
>
> **Env Vars:** bert (4), gpt (4), nlp (1)
> **Code Keywords:** for, (3), let (2), case, (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (2)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### How was BERT trained?
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=0)** - [Instructor] So what was BERT and GPT-2 trained on?
>
> **[0:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=4)** Any bias and prejudice in these data sources will make their way to the models.
>
> **[0:08](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=8)** BERT was trained on the English Wikipedia, which has around two and a half billion words, and something known as the BookCorpus, which is around 800 million words.
>
> **[0:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=16)** The BooksCorpus are 11,000 books written by yet unpublished authors.
>
> **[0:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=21)** GPT-2 was trained on WebText Corpus.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=24)** The researchers at OpenAI created the WebText Corpus by scraping all outbound links from Reddit, which is a social media platform, which received at least three Karma points.
>
> **[0:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=35)** They did this because this was an indicator for whether the other users found the link interesting, educational or just funny.
>
> **[0:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=43)** So the WebText Corpus contains the text subset of these 45 million links and doesn't include links created after December, 2017.
>
> **[0:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=52)** Now, if you read the BERT paper, the two key contributions of BERT are these two tasks, Masked Language Modeling and Next Sentence Prediction.
>
> **[1:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=61)** Let's take a couple of sentences from the BERT paper as an example.
>
> **[1:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=65)** So BERT is conceptually simple and empirically powerful.
>
> **[1:08](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=68)** It obtains new state-of-the-art results on 11 natural language processing tasks, and so on.
>
> **[1:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=74)** The MLM, or Masked Language Modeling task, requires BERT to predict the masked out word.
>
> **[1:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=81)** So BERT is conceptually something and empirically powerful.
>
> **[1:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=85)** The next sentence prediction task asks the question, does the second sentence follow immediately after the first?
>
> **[1:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=91)** So does the sentence, it obtains new state of the art results, logically follow from, BERT is conceptually simple and empirically powerful?
>
> **[1:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=100)** Now, when would you ever need either of these tasks and why are either of these tasks helpful?
>
> **[1:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=105)** These tasks forced BERT to get a good understanding of language.
>
> **[1:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=110)** And secondly, and importantly, we don't need any label data, we can train with raw text.
>
> **[1:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=116)** Just so you know, training on this dataset would have been hundreds of thousands of dollars in compute time on Tensor processing units or TPUs.

> [!info]- Semantic Content
>
> **Env Vars:** bert (10), gpt (2), mlm (1)
> **Code Keywords:** let (1), from, (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Transfer learning
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=0)** - [Instructor] Transfer learning is made up of two components, pre-training and fine-tuning.
>
> **[0:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=5)** So what does pre-training involve?
>
> **[0:06](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=6)** Well, we're training a model from scratch.
>
> **[0:08](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=8)** This means the model's weights are randomly initialized.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=11)** The model is of no use at this point.
>
> **[0:13](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=13)** The model is then trained on large amounts of data and then becomes useful.
>
> **[0:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=18)** Now, let's compare the pre-training for some of the larger models.
>
> **[0:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=21)** So BERT was released in 2018.
>
> **[0:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=23)** The number of parameters was 109 million.
>
> **[0:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=27)** It took Google 12 days to train BERT, and I've put an asterisk by the 8 times V100s because BERT wasn't trained on GPUs, but rather, Google's equivalent, TPUs or tensor processing units.
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=39)** So the size of the dataset used for training was 16 gigabytes, and the training tokens were 250 billion.
>
> **[0:46](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=46)** And the data sources that was used to train BERT were Wikipedia and the BookCorpus.
>
> **[0:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=52)** RoBERTa was developed by Facebook in 2019.
>
> **[0:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=55)** The number of parameters was 125 million.
>
> **[0:59](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=59)** And quite amazingly, Facebook managed to train this in a single day, and that's because they used a whopping 1024 V100 GPUs.
>
> **[1:08](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=68)** The size of the dataset was significantly larger than BERT's, so it was 160 gigabytes with 2,000 billion tokens.
>
> **[1:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=76)** The data sources were Wikipedia and BookCorpus as used with BERT, but also the Common Crawl news dataset, OpenWebText, and the Common Crawl stories.
>
> **[1:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=87)** And finally, GPT-3 was released in 2020 by OpenAI.
>
> **[1:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=91)** The number of parameters for their largest model was 165 billion.
>
> **[1:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=95)** The training time was probably around 34 days, and the infrastructure used was 10,000 V100 GPUs, and this was primarily an Azure infrastructure.
>
> **[1:46](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=106)** The size of the dataset used for training was 4,500 gigabytes, 300 billion tokens were used.
>
> **[1:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=112)** And the dataset source was Wikipedia, Common Crawl, WebText2, Books1, and Books2.
>
> **[1:59](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=119)** With fine-tuning, the starting point is a pre-trained model.
>
> **[2:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=123)** We then want to train on data specific to the task, such as text-classification, named-entity recognition, and so on.
>
> **[2:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=130)** So what are some of the benefits of transfer learning?
>
> **[2:12](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=132)** Well, firstly, it takes much less time to train a fine-tuned model.
>
> **[2:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=136)** For BERT, the authors suggested between two and four epochs of training for fine tuning.
>
> **[2:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=141)** This is in contrast to the thousands of hours of GPU time required for pre-training.
>
> **[2:26](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=146)** We also don't need another massive dataset to fine tune for a certain use case.
>
> **[2:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=150)** This is in contrast to the massive datasets, such as Wikipedia and others, which are typically hundreds of gigabytes.
>
> **[2:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=156)** And remarkably, we're able to achieve state-of-the-art results.
>
> **[2:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=159)** We saw this phenomenon when using transfer learning with computer vision several years ago when working with the ImageNet dataset, and this technique of transfer learning has worked in NLP too.

> [!info]- Semantic Content
>
> **Env Vars:** bert (7), v100 (2), gpt (1), gpu (1), nlp (1)
> **Code Keywords:** let (1), finally, (1), case. (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Transformers and BERT

#### Transformer: Architecture overview
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=0)** - [Instructor] The transformer is made up of two components, an encoder and the decoder.
>
> **[0:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=4)** We feed in the English sentence, such as I like nlp into the encoder at the bottom of the diagram.
>
> **[0:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=9)** The transformer can act as a translator from English to German.
>
> **[0:13](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=13)** And so the output from the decoder is the German translation ich mag nlp.
>
> **[0:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=18)** The transformer is made up not of a single encoder, but rather six encoders.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=24)** Each of these parts can be used independently depending on the task.
>
> **[0:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=27)** So the encoder-decoder models are good for generative tasks that require an input such as translation or summarization.
>
> **[0:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=35)** Examples of such models are Facebook's Bi-directional and Auto Regressive Transformers, or BART, and Google's T5 model.
>
> **[0:42](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=42)** Encoder-only models are good for tasks that require understanding of the inputs such as sentence classification and named entity recognition.
>
> **[0:49](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=49)** Examples include the family of BERT models like BERT, AlBERT, RoBERTa, DistilBERT, and so on.
>
> **[0:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=56)** Decoder-only models are good for generative tasks, such as text generation.
>
> **[1:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=60)** Examples include the GPT family such as GPT, GPT-2, and GPT-3.
>
> **[1:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=65)** And before we look at the BERT architecture in more detail, let's look at some of the tasks BERT cannot do.
>
> **[1:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=71)** BERT cannot generate text, as it doesn't have the decoder component.
>
> **[1:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=74)** This means it won't be able to do tasks like text translation and text summarization.
>
> **[1:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=79)** So the encoded piece is good for tasks that require understanding of the input.
>
> **[1:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=83)** So you'll be able to do text classification, named entity recognition, question answering, and fill in the blanks, amongst others.

> [!info]- Semantic Content
>
> **Env Vars:** bert (5), gpt (4), bart (1)
> **Analogies:** such as (5)
> **Code Keywords:** require (3), let (1)
> **Speakers:** - [instructor] (1)

#### BERT model and tokenization
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=0)** - [Instructor] Models can only process numbers, so tokenizers need to convert our text inputs to numerical data.
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=7)** With subword tokenization, frequently used words are not split into smaller subwords.
>
> **[0:12](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=12)** On the other hand, rarely used words need to be decomposed into meaningful subwords.
>
> **[0:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=17)** BERT uncased, so this is where BERT is not case-sensitive, has a vocabulary size of around 30,000 tokens.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=24)** GPT-2 and GPT-3 have around 50,000 tokens.
>
> **[0:28](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=28)** They use different techniques for subword tokenization.
>
> **[0:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=31)** BERT uses WordPiece, and GPT-2 and GPT-3 use byte-pair encoding, or BPE.
>
> **[0:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=38)** When you enter a sentence like I like nlp into BERT, it is converted into subword tokens.
>
> **[0:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=43)** Since the word nlp is not in BERT's vocabulary, it is split into nl and ##p.
>
> **[0:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=50)** And since models cannot work with the words, but need to work with numbers, each of these subwords have an associated input word ID.
>
> **[0:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=56)** You'll notice that the tokenizer also has the CLS token and the SEP token.
>
> **[1:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=62)** The CLS token is for sentence-level classification, and the SEP token is for handling two sentence tasks so that you can separate the two sentences.
>
> **[1:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=71)** Now, what we've referred to as the BERT model is actually made up of 12 encoders.
>
> **[1:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=76)** The original transformer model had six encoders.
>
> **[1:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=79)** Now, here's an important detail that we haven't covered so far.
>
> **[1:22](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=82)** BERT is an acronym for Bidirectional Encoder Representations from Transformers.
>
> **[1:28](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=88)** We already know that it is only the encoder portion of a transformer.
>
> **[1:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=92)** What we haven't considered is the bidirectional piece.
>
> **[1:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=95)** So let's take a look at how this works.
>
> **[1:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=98)** In BERT, we give the entire input sentence at once, and so BERT gets to weigh up all of the words in a sentence in its prediction.
>
> **[1:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=105)** This is in contrast to a decoder-only model like GPT, which generates words and so only has access to words that it has already generated.
>
> **[1:54](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=114)** As part of being able to process the text in parallel, all the input text sequences are padded out or truncated to a fixed length.
>
> **[2:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=122)** BERT can only support up to 512 tokens at one time.
>
> **[2:06](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=126)** BERT has two ways of differentiating two pieces of text as input.
>
> **[2:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=130)** The SEP token is in place between the two texts, and segment embeddings are added to distinguish between the first sentence and the second sentence.
>
> **[2:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=138)** Now, you're probably wondering, if we already have the SEP token to distinguish between the two sentences, why do we need segment embeddings or vice versa?
>
> **[2:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=145)** Deep learning is an area of active research and experimentation.
>
> **[2:28](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=148)** The authors of BERT may have found some performance gains, which they haven't documented.
>
> **[2:33](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=153)** You can always try input two sequences without a SEP token and see the result.
>
> **[2:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=158)** Now, we also need some notion of word order.
>
> **[2:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=161)** The positional encoding vector is added to the embedding vector.
>
> **[2:44](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=164)** Now, tokens with similar meanings would be closer to each other, but embeddings do not encode the relative position of tokens in a sentence.
>
> **[2:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=171)** So after adding the positional encoding, tokens will be closer to each other based on the similarity of their meaning and their position in the sentence.
>
> **[3:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=181)** So this is what things look like.
>
> **[3:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=182)** We have our input text, I like nlp.
>
> **[3:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=185)** This is converted into subwords, and the CLS classification token is added to the start and the SEP token to the end.
>
> **[3:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=191)** These are converted into input word IDs.
>
> **[3:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=194)** Segment embeddings help to distinguish between the sentences.
>
> **[3:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=197)** And after the positional encoding step, we have captured both the similarity of the word meanings and their position in the sentence.
>
> **[3:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=204)** Finally, this is fed into the 12 encoders, and the results are available as hidden states.
>
> **[3:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=209)** It's now time to get into the details of the components of an individual encoder.

> [!info]- Semantic Content
>
> **Env Vars:** bert (12), sep (6), gpt (5), cls (3), bpe (1)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is an  (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Tokenizers
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=0)** - [Tutor] Let's head over to the Colab notebook to confirm our understanding of tokenization and code.
>
> **[0:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=5)** So, in the first couple of cells, we're installing TensorFlow texts and the TensorFlow Models Official.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=11)** We then go ahead and import these Python packages.
>
> **[0:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=14)** And then we're loading a BERT model from TensorFlow hub.
>
> **[0:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=18)** We're using a BERT model with the uncased widths.
>
> **[0:21](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=21)** And so you can see that we have a vocabulary size of about 30,000 tokens.
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=30)** So you can see that the BERT model is a standard BERT model with uncased widths, and it has 12 layers.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=36)** So our input sentence is going to be, "I like NLP."
>
> **[0:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=41)** This is then tokenized and then the tokens are then converted to IDs.
>
> **[0:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=45)** So, "I like NLP" is converted to, "I like NL" and then "##P."
>
> **[0:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=51)** These IDs correspond to token IDs.
>
> **[0:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=55)** If I enter two sentences, "I like NLP."
>
> **[0:57](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=57)** And, "what about you?"
>
> **[0:59](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=59)** I then enter that into the BERT model and you can see that we get this output results.
>
> **[1:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=64)** So let's look at this in a little bit more detail.
>
> **[1:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=70)** Now, normally BERT has a maximum sequence length of 512.
>
> **[1:13](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=73)** Here we're using a sequence length of 128.
>
> **[1:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=77)** So the reason that we have a shape of two, 128 is because the two corresponds to the two sentences and the 128 to the sequence length.
>
> **[1:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=89)** The input word IDs are the corresponding conversion of the sub words in two input IDs with the CLS and the SEP tokens added.
>
> **[1:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=98)** So you can see that the CLS token is 101 here and the SEP token is 102.
>
> **[1:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=103)** And this block corresponds to the first sentence, and the second block corresponds to the second sentence.
>
> **[1:53](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=113)** And finally, the input mask confirms which bit the model will focus on.
>
> **[1:58](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=118)** And so you can see that the model is going to focus on where we have the text and the sentence.
>
> **[2:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=122)** So that's in the first sentence, the ones here correspond to the second sentence and the zeros correspond to padding.
>
> **[2:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=131)** And that is an overview of the tokenizers in code.

> [!info]- Semantic Content
>
> **Env Vars:** bert (6), nlp (3), cls (2), sep (2)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Tools:** colab (1)
> **Speakers:** - [tutor] (1)

#### Self-attention
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=0)** - [Instructor] In this example text, the monkey ate that banana because it was too hungry, how is the model able to determine that the it corresponds to the monkey and not to the banana?
>
> **[0:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=10)** It does this using a mechanism called self-attention that incorporates the embeddings for all the other words in the sentence.
>
> **[0:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=17)** So when processing the word it, self-attention will take a weighted average of the embeddings of the other context words.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=24)** The darker the shade, the more weight that word is given, and every word is given some weight.
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=30)** You can see that both banana and monkey come up as likely for the word it but monkey has the higher weighted average.
>
> **[0:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=38)** What's happening under the hood?
>
> **[0:39](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=39)** As part of the self-attention mechanism, the authors of the original transformer take the word embeddings and project it into three vector spaces, which they called query, key, and value.
>
> **[0:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=51)** Why project the word embeddings into these three new vector spaces?
>
> **[0:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=55)** This allows you to have different representations of the word embeddings.
>
> **[1:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=60)** The equation used to calculate the attention weights is given by the following formula to be taken as input into the self-attention, the query, the key, and the value vectors.
>
> **[1:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=71)** We then calculate the score of each word to determine how much focus to place on other words in the sentence.
>
> **[1:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=78)** This is done by taking the dot product of the query vector and the key vector.
>
> **[1:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=83)** And if you've forgotten your linear algebra, the T means that we are performing a transpose operation on the vector K.
>
> **[1:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=89)** We then divide this by the square root of n to scale the dot product attention.
>
> **[1:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=94)** Here, n is the dimension of these vectors.
>
> **[1:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=97)** And so we now have lodges.
>
> **[1:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=100)** We can then go ahead and convert this to probabilities by using the softmax function.
>
> **[1:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=105)** And we now multiply each value vector by this softmax score.
>
> **[1:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=110)** We can then sum up the weighted value vectors.
>
> **[1:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=112)** And this produces the self-attention calculation for a single word.

> [!info]- Semantic Content
>
> **Code Keywords:** self (5), function (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Multi-head attention and feedforward network
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=0)** - [Instructor] Earlier, we looked at how self-attention can help us provide context for a word, but what if we could get multiple instances of the self-attention mechanism so that each can perform a different task?
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=11)** One could make a link between nouns and adjectives, another could connect up pronouns to their subjects.
>
> **[0:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=17)** This is called multi-headed attention, and BERT has 12 such heads.
>
> **[0:22](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=22)** Each multi-head attention block gets three inputs, the query, the key, and the value.
>
> **[0:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=29)** These are then put through linear or dense layers before the multi-head attention function.
>
> **[0:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=34)** The query key and value are then passed through separate, fully-connected linear layers for each attention head.
>
> **[0:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=41)** This model can jointly attend to information from different representations and at different positions, allowing it to make richer connections between words.

> [!info]- Semantic Content
>
> **Code Keywords:** self (2), function (1)
> **CLI Commands:** make (2)
> **Env Vars:** bert (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Fine-tuning BERT
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=0)** - [Instructor] As part of the pre-training step, when Google trained BERT with the next sentence prediction task which is a text classification task, a linear layer was added at the end of the BERT model.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=11)** The only thing that was fed into the linear layer was from the CLS embedding.
>
> **[0:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=16)** So in order for the BERT model to perform well, it learned that it needed to capture all the information required in the CLS token.
>
> **[0:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=23)** This means that when we want to fine tune BERT, say on movie reviews, all we need to do is to add a linear classify layer and use the final embedding of the CLS token as the input to the linear classifier.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=36)** In addition to a linear classifier, we often add a dropout layer to reduce overfitting.
>
> **[0:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=41)** We then train or fine tune the model with a label dataset.
>
> **[0:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=45)** Using the movie review example, this would be training the linear classifier with the movie review texts and their associated labels, either positive or negative.
>
> **[0:55](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=55)** Notice that we are not taking any input from any of the final embeddings in the hidden state.
>
> **[1:01](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=61)** Although we don't use them for the classification task, they capture increasingly enhanced embeddings, and we shouldn't discard them earlier in the model.
>
> **[1:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=69)** If we were to do fine tuning for named entity recognition or question answering, we would use these other final hidden states.
>
> **[1:17](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=77)** Let's now head over to the CoLab notebook to look at an example of fine tuning for sentiment analysis.
>
> **[1:23](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=83)** Now, here we want to train a sentiment analysis model to classify movie reviews as positive or negative based on the text of the review.
>
> **[1:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=90)** We'll use the large movie review dataset that contains the text of 50,000 movie reviews from IMDb.
>
> **[1:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=97)** The first thing we wanted to do is to change our run time type from CPU to GPU, as we we'll be training a model.
>
> **[1:43](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=103)** So you would head over to runtime, change runtime type, and you would change this from none to GPU.
>
> **[1:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=111)** Now I've already trained a model and run this notebook a couple of minutes ago, so I'm not going to rerun this notebook.
>
> **[1:57](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=117)** Feel free to go ahead to run time and run all the cells in this notebook.
>
> **[2:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=124)** Now, the IMDb dataset has already been divided into train and test, but it doesn't have a validation set.
>
> **[2:12](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=132)** So what we want to do is to try and create this validation set and so we'll split the training data in order to do this.
>
> **[2:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=139)** One of the benefits of using TensorFlow is that we have some built-in APIs that support input pipelines.
>
> **[2:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=145)** As part of the training process, we will just need to read data from the directories, but we don't want to make our model wait for this data.
>
> **[2:33](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=153)** The tf.AutoTune allows you to fetch the data dynamically.
>
> **[2:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=160)** Our objective is to create a data set object, which contains both the text and the associated label.
>
> **[2:47](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=167)** The IMDb training dataset is already made up of 25,000 text files.
>
> **[2:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=172)** So we'll read these from the directory using the method, text dataset from directory, and this creates a text batch and a label batch.
>
> **[3:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=182)** And these are the 25,000 files belonging to the two classes, which are either positive or negative reviews.
>
> **[3:09](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=189)** Now let's take a look at a sample so that we can see both the review texts and the associated labels.
>
> **[3:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=195)** So, zeros are for negative reviews and one for a positive review.
>
> **[3:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=199)** So if I was to look at the first example, so the review is negative and the review starts of stupid and just playing weird movie about some kid who becomes traumatized and so on.
>
> **[3:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=211)** Now, just to make sure that the training time is shorter, I'm going to use a smaller version of BERT that only has two layers and two attention heads, and this is called the small BERT model.
>
> **[3:42](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=222)** If you want to try the full version of BERT, comment out this line with the small BERT model and uncomment out the first-line.
>
> **[3:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=231)** Just a word of warning.
>
> **[3:52](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=232)** Your training time will be significantly longer.
>
> **[3:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=236)** So you can see the shape of the sentence, I like NLP along with the word IDs and the input mass that we've seen earlier.
>
> **[4:04](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=244)** So 101 corresponds to the classification token, 102 corresponds to the STP token, and this is the input ideas for these sentence I like NLP.
>
> **[4:16](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=256)** So let's head over to the BERT classifier.
>
> **[4:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=259)** So what we're doing is taking our BERT model from TensorFlow hub, we're then adding a dropout layer and then finally we add a dense layer and we have only a single node because we want to know whether the review was positive or negative.
>
> **[4:38](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=278)** And so this is what our BERT classify looks like.
>
> **[4:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=280)** So we have an input layer, the Keras layer, which takes in the BERT encoder, we finally add our dropout and our classifier.
>
> **[4:50](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=290)** As there are only two outputs, a positive or negative review, we use binary cross entropy.
>
> **[4:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=296)** If there were more than two classes, we would use categorical cross entropy.
>
> **[5:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=300)** Our metric will be accuracy.
>
> **[5:02](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=302)** Now, if you train for 10 epochs, now, if you train for 10 epochs, it will take you a good five minutes to train this model.
>
> **[5:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=310)** When fine tuning will often start off with a smaller learning rate.
>
> **[5:15](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=315)** So we start off with an initial learning rate of 3e to the minus five.
>
> **[5:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=319)** For fine tuning, let's use the same optimizer that BERT was originally trained on that's adaptive moments or Adam.
>
> **[5:27](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=327)** We'll also use the same schedule as BERT pre-training.
>
> **[5:29](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=329)** So we have a linear warmup phase over the first 10% of the training steps.
>
> **[5:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=335)** We've now got to the optimizer, the loss and the metrics, and so we're ready to go ahead and compile the model.
>
> **[5:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=341)** Now in the TensorFlow, working with images course, we looked at callbacks.
>
> **[5:46](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=346)** In general, callbacks and TensorBoard are good tools to use for understanding, optimizing, and visualizing model training.
>
> **[5:54](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=354)** So we'll work with them here.
>
> **[5:56](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=356)** So will set up our checkpoint directory, which will update our directory as our model trains.
>
> **[6:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=363)** And so we're now in a position where we want to train our model.
>
> **[6:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=367)** In TensorFlow, we do this by calling the fit method and providing our training dataset as input.
>
> **[6:14](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=374)** And in this instance, I've trained not for 40 epochs but for 10 epochs.
>
> **[6:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=379)** And let's head over to the TensorBoard to see how the accuracy has changed over time.
>
> **[6:25](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=385)** And you can see that at the end of the 10 epochs, we've got a validation accuracy of about 80% and the training accuracy is around 86%.
>
> **[6:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=397)** Now, if you're not familiar with TensorBoard, I've also provided a simple matplotlib plot of the training and validation loss over the 10 epochs.
>
> **[6:49](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=409)** Now that our model is trained, let's go ahead and try it out on the test dataset.
>
> **[6:53](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=413)** And you can see that we have an overall accuracy of about 78%.
>
> **[6:58](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=418)** We can then go ahead and try out our model on a couple of sentences that we've made up.
>
> **[7:03](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=423)** So, in the first sentence I've said, transformers have been a boon to NLP.
>
> **[7:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=427)** It's going to be a case of before transformers and after transformers, they are wonderful.
>
> **[7:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=431)** And not surprisingly, the score that we have for this is 0.988, which is a positive review.
>
> **[7:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=438)** In my second sentence, I've provided as input from the first time I heard about them, I have found them to be dull and uninteresting.
>
> **[7:26](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=446)** And as you can see, we have a negative review of 0.01.
>
> **[7:31](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=451)** So just to recap what we've done with fine tuning.
>
> **[7:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=454)** We've taken a BERT model from the TensorFlow model hub.
>
> **[7:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=457)** We've taken the IMDb dataset, we've then added a dropout layer and a linear classifier to the CLS token, and then fine tuned on the IMDb dataset.
>
> **[7:48](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=468)** And we've then finally used our model to classify other sentences and we've come up with pretty impressive accuracy results after only training for about 10 epochs.

> [!info]- Semantic Content
>
> **Env Vars:** bert (15), cls (4), nlp (3), gpu (2), cpu (1)
> **Code Keywords:** let (6), type, (1), this. (1)
> **Definitions:** is a  (2), means that (1), is called (1)
> **CLI Commands:** make (2), node (1)
> **Versions:** 0.988 (1), 0.01 (1)
> **Cross-References:** earlier in (1)
> **Tools:** colab (1)
> **Warnings:** warning (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=0)** - [Jonathan] We've covered a lot in this course and looked at transformers for NLP with a focus on BERT.
>
> **[0:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=5)** We've seen how BERT is used in production, but also the problems of bias and prejudice with BERT and GPT-2.
>
> **[0:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=11)** We looked at transfer learning, which is this almost magical technique that did wonders for computer vision, and it's doing the same for NLP.
>
> **[0:18](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=18)** And finally, we looked at the BERT architecture, working from tokenization all the way to self-attention.
>
> **[0:24](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=24)** Go ahead and either experiment with BERT and look at other use cases such as named entity recognition or question answering.
>
> **[0:30](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=30)** Alternatively, you could try out some of the other BERT variants such as BERT-Large, or DistilBERT.
>
> **[0:36](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=36)** You now know enough to try out some other models in the TensorFlow hub.
>
> **[0:40](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=40)** I hope you found this course helpful.
>
> **[0:41](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=41)** Thanks for watching, and I'd love to hear back from you and to connect via LinkedIn.
>
> **[0:46](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=46)** (speaking in foreign language)

> [!info]- Semantic Content
>
> **Env Vars:** bert (7), nlp (2), gpt (1)
> **Code Keywords:** finally, (1), self (1)
> **Analogies:** such as (2)
> **Speakers:** - [jonathan] (1)


## Path Context

### In [[Develop Your Skills with Large Language Models]]
← [[Gpt Foundations Building Ai Powered Apps]] | **7 of 9** | [[AI Text Summarization with Hugging Face]] →

## Appears In

- [[Develop Your Skills with Large Language Models]]

## Related Courses

_Courses sharing skills:_

- [[Deep Learning with TensorFlow- Insights and Innovations]] — Artificial Intelligence (AI), TensorFlow
- [[Building NLP Pipelines with spaCy]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Hands-On Natural Language Processing]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Advanced Nlp With Python For Machine Learning]] — Artificial Intelligence (AI), Natural Language Processing (NLP)
- [[Complete Guide to NLP with R]] — Artificial Intelligence (AI), Natural Language Processing (NLP)

---

[↑ Back to top](#)