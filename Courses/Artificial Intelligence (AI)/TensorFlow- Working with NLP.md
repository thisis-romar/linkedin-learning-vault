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
  - '[[Develop Your Skills with Large Language Models]]'
prev_courses:
  - '[[Gpt Foundations Building Ai Powered Apps]]'
next_courses:
  - '[[AI Text Summarization with Hugging Face]]'
path_nav: '[{"path":"Develop Your Skills with Large Language Models","position":7,"total":9,"prev":"Gpt Foundations Building Ai Powered Apps","next":"AI Text Summarization with Hugging Face"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/tensorflow
  - skill/artificial-intelligence-ai
  - skill/natural-language-processing-nlp
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/TensorFlow-%20Working%20with%20NLP.md)

![TensorFlow: Working with NLP](https://media.licdn.com/dms/image/v2/C560DAQHXRZ1Ysxw8fA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1643654366588?e=2147483647&amp;v=beta&amp;t=dsjFuB2UwdcJ_0gnhsug9f6bRCYByP-u3-94h7pta5U)

# TensorFlow: Working with NLP

> Suggested Prerequisites TensorFlow: Neural Networks and Working with Tabular Data TensorFlow: Working with Images Understand the basics of Python Some understanding of machine learning and TensorFlow Gmail account TensorFlow 2.0 is quickly becoming one of the most popular deep learning frameworks and a must-have skill in your artificial intelligence toolkit. This course covers the key aspects of w

> [LinkedIn Learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp) | 41m | Intermediate | 10K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Why TensorFlow?](#why-tensorflow)
  - [What you should know](#what-you-should-know)
  - [What is TensorFlow?](#what-is-tensorflow)
- [**1. NLP and Transformers**](#1-nlp-and-transformers) (5 videos)
  - [What is NLP?](#what-is-nlp)
  - [Transformers, their use, and history](#transformers-their-use-and-history)
  - [Transformers for NLP](#transformers-for-nlp)
  - [Challenge: NLP model size](#challenge-nlp-model-size)
  - [Solution: NLP model size](#solution-nlp-model-size)
- [**2. BERT and Transfer Learning**](#2-bert-and-transfer-learning) (3 videos)
  - [Bias in BERT and GPT](#bias-in-bert-and-gpt)
  - [How was BERT trained?](#how-was-bert-trained)
  - [Transfer learning](#transfer-learning)
- [**3. Transformers and BERT**](#3-transformers-and-bert) (6 videos)
  - [Transformer: Architecture overview](#transformer-architecture-overview)
  - [BERT model and tokenization](#bert-model-and-tokenization)
  - [Tokenizers](#tokenizers)
  - [Self-attention](#self-attention)
  - [Multi-head attention and feedforward network](#multi-head-attention-and-feedforward-network)
  - [Fine-tuning BERT](#fine-tuning-bert)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why TensorFlow?](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/why-tensorflow?u=76281980&t=0)** - [Jonathan] [[TensorFlow]] is one of the most popular [[Deep Learning]] frameworks out there, and what makes it particularly appealing is its ecosystem. You can develop and train models using [[Python (Programming Language)|Python]] amongst several other languages, and then easily deploy them in the cloud or on-prem in the browser or on mobile devices no matter what language you use. Transformers have taken the [[Natural Language Processing (NLP)|natural language processing]] world by storm. Hi, I'm Jonathan Fernandes and I work with machine learning and AI models every day. Join me as we learn about transformers in natural language processing. In the process, we look at components of a transformer with a special focus on BERT, one of the encoder models developed by [[Google]]. We'll also cover topics like self-attention and see examples of bias in BERT and GPT-2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[TensorFlow]] (1), [[Deep Learning]] (1), [[Python (Programming Language)|Python]] (1), [[Google]] (1)
> **Env Vars:** bert (2), gpt (1)
> **CLI Commands:** python (1)
> **Speakers:** - [jonathan] (1)

#### [What you should know](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-you-should-know?u=76281980&t=0)** - [Narrator] This course follows on from two other [[TensorFlow]] courses, TensorFlow: [[Neural Networks]] and Working with Tabular Data and TensorFlow: Working with Images, which are both available in the [[LinkedIn]] Library. So if you haven't worked your way through these courses, you probably want to do that first. If you know the basics of [[Python (Programming Language)|Python]] and you have some understanding of machine learning and have worked with TensorFlow before, you should be just fine. I'll also be using [[Google]] Colab. Now, if you haven't used this before, you'll need a Gmail account which you can sign up for in a couple of minutes. Alternatively, you can just follow along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (4), [[Neural Networks]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1), [[Google]] (1)
> **CLI Commands:** python (1)
> **Tools:** colab (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [What is TensorFlow?](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=0)** - [Instructor] Let's break down what's possible with [[TensorFlow]]. Now, we all know that data is key to making your machine learning models work well, and TensorFlow has some brilliant tools to help you out with that. You've got access to standard data sets to kickstart your training and validation, which is super handy. And then TensorFlow also has these [[Data Pipelines]] that can handle massive amounts of data. Now, if you need to pre-process your data, they've got layers for that too, so you can transform your inputs however you want. Okay, so you're probably thinking, "Building and training machine learning models sounds like a lot of work," and you're right, but TensorFlow's core framework has got you covered with an entire ecosystem designed to streamline that process. So we're talking model construction, training and export, all made easier with this framework, but that's not even the best part. TensorFlow supports distributed training, which means you can spread the workload across multiple machines and get your models trained faster. And if you're a fan of Keras, you'll be happy to know it works really well with TensorFlow. TensorFlow also comes with tools like Model Analysis and TensorBoard, which helps you to keep track of your model's development and improvements throughout its lifecycle. So it's like having a personal assistant for your machine learning training. The best part is, you don't even have to train your models from scratch. TensorFlow Hub and the Model Garden offers pre-trained models from [[Google]] and the community. So these high level components are like building blocks, and you can use them to fine tune models for your specific needs or customize them to tackle entirely new tasks. It's like having a head start. Okay, so you're probably wondering,
>
> **[1:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-tensorflow-24067815?u=76281980&t=92)** where you can actually use these TensorFlow models you've been working on, right? Well, let me tell you, the possibilities are endless. Servers, edge devices, browsers, mobile apps, you name it, TensorFlow can handle it. Now if you need to really scale up for production, there's TensorFlow serving, which can tap into some seriously powerful [[Hardware]] like Google's own TPUs or Tensor Processing Units. Now, if you need to analyze data locally, maybe to reduce latency or keep things secure, TensorFlow Lite lets you run models on mobile devices, edge computing rigs, and even tiny microcontrollers. And get this. You can even run machine learning models straight from your web browser with TensorFlow.js. Now, imagine you're running a business that relies heavily on machine learning models. As time goes by, your data and the requirements start to shift, and suddenly your once brilliant models aren't performing as well as they used to. Now, this is common knowledge if you've been working in ML for a while, and this is what [[MLOps]] is all about. TFX is a set of tools from TensorFlow that helps you automate the entire MLOps process. You can track your model training, monitor performance, and even retrain your models when needed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (14), [[Google]] (2), [[MLOps]] (2), [[Data Pipelines]] (1), [[Hardware]] (1)
> **Analogies:** it's like (2), imagine (1)
> **File Paths:** tensorflow.js (1)
> **Env Vars:** tfx (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. NLP and Transformers

[↑ Back to Table of Contents](#table-of-contents)

#### [What is NLP?](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=0)** - [[Natural Language Processing (NLP)|Natural Language Processing]] or NLP is an area of research and computer science focusing on processing natural languages, such as English and German and so on. Now, what do we mean by processing? Well, we're taking these languages and converting them into numbers that a computer understands. Computers then perform several tasks, such as text classification or text generation, or answering questions to demonstrate this understanding. I like this comment from Andras Kornai's book, "Mathematical Linguistics". "NLP is hard from the standpoint of the child who must spend many years acquiring a language. It's hard for the adult language learner. It's hard for the scientist who attempts to model the relevant phenomena and it's hard for the engineer who attempts to build systems that deal with natural language input or output. These tasks are so hard that Turing could rightly make fluent conversation in natural language, the centerpiece of his test for intelligence." And finally, let's see what computer science researcher Yoav Goldberg has to say. "Human language is highly ambiguous. It's also ever-changing and evolving. People are great at producing language and understanding language and are capable of expressing, perceiving and interpreting very elaborate and nuanced meanings. At the same time, while we humans are great users of language, we're also very poor at formally understanding and describing the rules that govern language." So we can safely conclude that NLP is a challenging and important area of research. Now let's look at some of the tasks involved
>
> **[1:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/what-is-nlp?u=76281980&t=92)** in natural language processing. In sentence classification, we're interested in classifying whole sentences. An example might be sentiment analysis, where we provide a review and want to determine if the review is positive or negative. We might provide two sentences and want to know if they're logically related. In named entity recognition, we might want to classify each [[Microsoft Word|word]] in a sentence as either a person, location or organization. Financial institutions are often interested in this application for new customers. If a company wants to set up a new account, there are several checks that must be made. If a company trades in only low risk countries and its main business activity is considered low risk. Their onboarding process can be fast-tracked by determining what parts are names, locations, and organizations, financial institutions can then go ahead and perform further searches and downstream tasks on them. Other interesting NLP tasks are auto generating text, which as the name suggests, is generating text, for example, in English, that is grammatically correct. You can also translate texts between two languages or summarize text. And finally, given a question and some texts, we can answer the question based on the information provided in the text.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** nlp (4)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)
> **Speakers:** - natural (1)

#### [Transformers, their use, and history](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=0)** - [Instructor] Let's take a look at where transformers are used in production. The [[Google]] search engine now uses transformers, in particular, BERT. In the past, if you did a search on Google for, can you get medicine for someone pharmacy, it wouldn't have picked up on the fact that for someone was a really important part of the query because you're looking for another person to pick up the medicine. Google would've returned results about generally getting a prescription filled, which isn't relevant. Now with BERT, it captures the nuance of the importance that another person picks up the medicine and returns results about having a friend or family member pick up a prescription. Let me give you another example of Google search using BERT. When I enter the search, what are the rules for the hundred? The answer back from Google doesn't just give me the most relevant page, but the answer to my question in bold. This is an application of question answering that we saw earlier, using BERT. In June, 2018, GPT or generative pre-training model, which was developed by open AI was the first pre-train transformer model and was used for [[Fine Tuning]] on various NRP tasks and obtained state of the art results. Later that year in October, 2018, researchers at Google came up with BERT or bi-directional encoder representations from transformers. In February, 2019, open AI released a bigger and better version of GPT called the GPT-2. This was in the news a lot because the open AI team didn't want to release the details of the model because of ethical concerns. Later that year in October, 2019,
>
> **[1:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-their-use-and-history-15390067?u=76281980&t=94)** [[Facebook]]'s AI research team released BART, or bi-directional and auto regressive transformer and Google released T5. Both of these models are larger pre-trained models using the same architecture as the original transformer. In the same month, the team at [[Hugging Face]] bucked the trend. Everyone was moving to bigger models. The Hugging Face team released DistilBERT, which is a smaller, faster and lighter version of BERT and has 95% of BERT performance on the GLUE language understanding benchmark. And you can see that over the years, the trend is to have bigger model sizes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), [[Hugging Face]] (2), [[Fine Tuning]] (1), [[Facebook]] (1)
> **Env Vars:** bert (7), gpt (3), nrp (1), bart (1), glue (1)
> **Definitions:** is an  (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Transformers for NLP](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=0)** - [Narrator] Transformers form the underlying architecture for many of the popular NLP models you might've heard about such as BERT and GPT. They were proposed by a team of researchers from [[Google]] in 2017 in the paper, "Attention Is All You Need." Now, before getting into the details of the transformer architecture, let's take a look at how well they perform on some of the NLP tasks we mentioned earlier. So I'm going to head over to the notebook. Now you can go ahead and select run time and run all the cells. I'm not going to do that as it takes about two minutes to download some of the models. So for this notebook, I've gone with a theme of Singapore Airlines as this is my favorite airline. So when classifying whole sentences, I have used an actual review. The model needs to determine if the sentiment of the review is positive or negative. So the text is, "The flights were on time both in Sydney, "and the connecting flight in Singapore, "the organization to cope with the COVID-19 restrictions "while in transit was well-planned "and directions easy to follow, "the plane was comfortable with a reasonable "selection of in-flight entertainment, "crew was pleasant and helpful." And this sentence is correctly classified with a positive sentiment. Now let's take a look at classifying each [[Microsoft Word|word]] in a sentence. The sentence is Singapore Airlines was the first airline to fly the A380, Chew Choon Seng was Singapore Airlines' CEO at the time, Singapore Airlines flies to New York daily. Now when classifying each word in a sentence, you can see that the model has been able to pick up that Chew Choon Seng, is one entity, and so is Singapore Airlines and New York. It's not surprising that the A380 has been classified as miscellaneous, as it's an either a person, place, or organization,
>
> **[1:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformers-for-nlp-15386258?u=76281980&t=95)** but an airbus aircraft model. Now let's head over to answering a question. So given the text Singapore Airlines was founded in 1947 and was originally known as Malayan Airways, it is the national airline of Singapore and is based at Singapore Changi Airport, from this hub, the airline flies to more than 60 destinations with flights to Seoul, Tokyo, and Melbourne and so on. The question is, how many aircrafts does Singapore Airlines have? Now you'll see that the answer is in this line here, there are more than 100 planes in the Singapore Airlines fleet. Now notice that the question that I've asked is not how many planes, but how many aircraft's. And so what we're going to be testing is whether the model is able to understand nuances in the English language. And you can see that the model correctly answers, more than 100. With text summarization, we're able to summarize this lengthy text into three sentences. So if I provide the sentence, it is the national blank of Singapore, the model responds with the answers, anthem, capital, pride and so on. And if I change the context to, Singapore Airlines is the national blank of Singapore, the model changes this correctly to predicting airline as the top response. The other sentences that are provided are less likely in order of decreasing [[Probability]]. And you can see finally that the model has no problems with translating from English to German.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (2), [[Google]] (1), [[Probability]] (1)
> **Env Vars:** nlp (2), a380 (2), bert (1), gpt (1), covid (1)
> **Cross-References:** we mentioned (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: NLP model size](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=0)** (cheerful music)
>
> **[0:07](https://www.linkedin.com/learning/tensorflow-working-with-nlp/challenge-nlp-model-size?u=76281980&t=7)** - [Instructor] The purpose of this challenge is to give you an idea of the scale involved in the NLP models and the infrastructure required. So the first question is, how many parameters does the BERT base uncased model have? You can use the get_model_size function below to help you. And secondly, if you know the number of parameters for a model, how might you be able to determine how much memory is required when running a model inference? So this would be the amount of space that's required on RAM. And then thirdly, if you wanted to run a GPT-3 175 billion inference, how much RAM would your infrastructure require? This challenge should take you between five and 10 minutes.

> [!info]- Semantic Content
>
> **Env Vars:** ram (2), nlp (1), bert (1), gpt (1)
> **Code Identifiers:** get_model_size (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (cheerful music) (1)

#### [Solution: NLP model size](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/solution-nlp-model-size?u=76281980&t=0)** - [Instructor] Now you can go ahead and select Runtime and run all the cells. I've just done this. So I'm not going to do that again. So the question is how many parameters does the BERT base uncased model have? And we can use the get model size function below to help us. So if I head over to the get model size function, you can see that if I provide bert-base-uncased as my parameter, that the BERT base uncased model has over 109 million parameters. Now, if you know what the number of parameters for a model, how might you be able to determine how much memory is required when running a model inference? Now, because each of these parameters are represented as single precision floating point numbers, this means they require four bytes. So four times the number of parameters will give us an approximate value for the size of the model. So if I was to take the BERT base uncased model, I have 109 million parameters times four. This means I would require 436 megabytes of RAM, which is about half a gig of RAM. Now, if we apply that same logic, if we wanted to run a GPT-3 175 billion inference, how much RAM would our infrastructure require? And you can see that we would need 175 million times four, and you can see that we would require a whopping 700 gigabytes of RAM if you wanted to run an inference of the GPT-3 175 billion parameter model.

> [!info]- Semantic Content
>
> **Env Vars:** ram (4), bert (3), gpt (2)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 2. BERT and Transfer Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Bias in BERT and GPT](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=0)** - [Instructor] Now, before you think BERT and GPT-2 should be put into production immediately, let's look at some problems with the models. As always, you can go ahead and select Runtime and run all the cells. I've run this notebook before, so I'm not going to run and download the models again. Now, let's start off with the BERT model and see how it performs with a fill-in-the-blank type task. The examples that are shown are the top five options. So for example, we have this man works as a blank, and the options provided seem reasonable. This man works as a carpenter, a lawyer, a farmer, a businessman, and a doctor. If we go ahead and say this white man works as a blank, we get some strange results. This white man works as a carpenter. This white man works as a slave. And then if we say this black man works as a, again, we get some reasonable options. So this black man works as a carpenter. This black man works as a lawyer, barber, doctor, and teacher. Now, if we provide a typical white male name, like Thomas, we get reasonable results. And if we provide a typical black male name, such as Jamal, again, we get some reasonable entries. Now, if we do the same for Amy, a typical white woman's name, and Aaliya, a typical black woman's name, again, we seem to get some reasonable results with Amy works as a waitress, Amy works as a nurse, Amy works as a teacher, model, and lawyer. And we have similar sort of results for Aaliya. Now, what is very strange is that if we input this woman works as a, the results we get back are nurse,
>
> **[1:35](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=95)** so this woman works as a nurse, this woman works as a maid, a teacher, waitress, and prostitute. I've also found occasional examples of bias against gay people with the BERT model. Now, if you do some more study, you might also find bias, like the jobs for men might be for a doctor, but the job for a woman might be a nurse and not a doctor. I haven't done an in-depth study on the bias in models, but this is an active area of NLP research. Now, with GPT-2, in this case, each time you run the model, you'll get a different auto-generated text. So I start off with the text the black man was known for, and then the text is auto-generated, saying for being a tough guy. He would grab a fight or beat a guy up, and so on. And then similarly, the woman was known for, and you can see the woman was known for saying that a woman who doesn't understand how men become the first to go to the altar, and so on. Now, if I do the same thing with the man was known for, I say this man was known for his well-heeled work ethic and long and steady nights. He would stay home on Sundays, and so on. Now, I didn't find any significant bias against men, women, white, or black. However, again, I found examples of bias against gay people in GPT-2. And additionally, I found many examples of racism and bias against people from the Middle East. So auto-generated text had references to antisemitism, Islam, and terrorism. To sum up, bias is an active area of research, and there's a lot of work to be done. I've seen examples of bias against women, gay people, and different races. You don't want to be putting GPT-2 and BERT into production with text generation and masked modeling
>
> **[3:10](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bias-in-bert-and-gpt?u=76281980&t=190)** without some strict boundaries and having a human in the loop to check the output that is created. So where does this bias come from? And that's what we'll look at next.

> [!info]- Semantic Content
>
> **Env Vars:** bert (4), gpt (4), nlp (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (2)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [How was BERT trained?](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=0)** - [Instructor] So what was BERT and GPT-2 trained on? Any bias and prejudice in these data sources will make their way to the models. BERT was trained on the English Wikipedia, which has around two and a half billion words, and something known as the BookCorpus, which is around 800 million words. The BooksCorpus are 11,000 books written by yet unpublished authors. GPT-2 was trained on WebText Corpus. The researchers at OpenAI created the WebText Corpus by scraping all outbound links from Reddit, which is a social media platform, which received at least three Karma points. They did this because this was an indicator for whether the other users found the link interesting, educational or just funny. So the WebText Corpus contains the text subset of these 45 million links and doesn't include links created after December, 2017. Now, if you read the BERT paper, the two key contributions of BERT are these two tasks, Masked Language Modeling and Next Sentence Prediction. Let's take a couple of sentences from the BERT paper as an example. So BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on 11 [[Natural Language Processing (NLP)|natural language processing]] tasks, and so on. The MLM, or Masked Language Modeling task, requires BERT to predict the masked out [[Microsoft Word|word]]. So BERT is conceptually something and empirically powerful. The next sentence prediction task asks the question, does the second sentence follow immediately after the first? So does the sentence,
>
> **[1:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/how-was-bert-trained?u=76281980&t=92)** it obtains new state of the art results, logically follow from, BERT is conceptually simple and empirically powerful? Now, when would you ever need either of these tasks and why are either of these tasks helpful? These tasks forced BERT to get a good understanding of language. And secondly, and importantly, we don't need any label data, we can train with raw text. Just so you know, training on this dataset would have been hundreds of thousands of dollars in compute time on Tensor processing units or TPUs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** bert (10), gpt (2), mlm (1)
> **Definitions:** known as (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Transfer learning](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=0)** - [Instructor] Transfer learning is made up of two components, pre-training and fine-tuning. So what does pre-training involve? Well, we're training a model from scratch. This means the model's weights are randomly initialized. The model is of no use at this point. The model is then trained on large amounts of data and then becomes useful. Now, let's compare the pre-training for some of the larger models. So BERT was released in 2018. The number of parameters was 109 million. It took [[Google]] 12 days to train BERT, and I've put an asterisk by the 8 times V100s because BERT wasn't trained on GPUs, but rather, Google's equivalent, TPUs or tensor processing units. So the size of the dataset used for training was 16 gigabytes, and the training [[Tokens]] were 250 billion. And the data sources that was used to train BERT were Wikipedia and the BookCorpus. RoBERTa was developed by [[Facebook]] in 2019. The number of parameters was 125 million. And quite amazingly, Facebook managed to train this in a single day, and that's because they used a whopping 1024 V100 GPUs. The size of the dataset was significantly larger than BERT's, so it was 160 gigabytes with 2,000 billion tokens. The data sources were Wikipedia and BookCorpus as used with BERT, but also the Common Crawl news dataset, OpenWebText, and the Common Crawl stories. And finally, GPT-3 was released in 2020 by OpenAI. The number of parameters for their largest model
>
> **[1:33](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transfer-learning?u=76281980&t=93)** was 165 billion. The training time was probably around 34 days, and the infrastructure used was 10,000 V100 GPUs, and this was primarily an [[Microsoft Azure|Azure]] infrastructure. The size of the dataset used for training was 4,500 gigabytes, 300 billion tokens were used. And the dataset source was Wikipedia, Common Crawl, WebText2, Books1, and Books2. With fine-tuning, the starting point is a pre-trained model. We then want to train on data specific to the task, such as text-classification, named-entity recognition, and so on. So what are some of the benefits of transfer learning? Well, firstly, it takes much less time to train a fine-tuned model. For BERT, the authors suggested between two and four epochs of training for [[Fine Tuning]]. This is in contrast to the thousands of hours of GPU time required for pre-training. We also don't need another massive dataset to fine tune for a certain use case. This is in contrast to the massive datasets, such as Wikipedia and others, which are typically hundreds of gigabytes. And remarkably, we're able to achieve state-of-the-art results. We saw this phenomenon when using transfer learning with [[Computer Vision]] several years ago when working with the ImageNet dataset, and this technique of transfer learning has worked in NLP too.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Google]] (2), [[Facebook]] (2), [[Microsoft Azure|Azure]] (1), [[Fine Tuning]] (1)
> **Env Vars:** bert (7), v100 (2), gpt (1), gpu (1), nlp (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Transformers and BERT

[↑ Back to Table of Contents](#table-of-contents)

#### [Transformer: Architecture overview](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/transformer-architecture-overview?u=76281980&t=0)** - [Instructor] The transformer is made up of two components, an encoder and the decoder. We feed in the English sentence, such as I like nlp into the encoder at the bottom of the diagram. The transformer can act as a translator from English to German. And so the output from the decoder is the German translation ich mag nlp. The transformer is made up not of a single encoder, but rather six encoders. Each of these parts can be used independently depending on the task. So the encoder-decoder models are good for generative tasks that require an input such as translation or summarization. Examples of such models are [[Facebook]]'s Bi-directional and Auto Regressive Transformers, or BART, and [[Google]]'s T5 model. Encoder-only models are good for tasks that require understanding of the inputs such as sentence classification and named entity recognition. Examples include the family of BERT models like BERT, AlBERT, RoBERTa, DistilBERT, and so on. Decoder-only models are good for generative tasks, such as text generation. Examples include the GPT family such as GPT, GPT-2, and GPT-3. And before we look at the BERT architecture in more detail, let's look at some of the tasks BERT cannot do. BERT cannot generate text, as it doesn't have the decoder component. This means it won't be able to do tasks like text translation and text summarization. So the encoded piece is good for tasks that require understanding of the input. So you'll be able to do text classification, named entity recognition, question answering, and fill in the blanks, amongst others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Facebook]] (1), [[Google]] (1)
> **Env Vars:** bert (5), gpt (4), bart (1)
> **Analogies:** such as (5)
> **Speakers:** - [instructor] (1)

#### [BERT model and tokenization](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=0)** - [Instructor] Models can only process numbers, so tokenizers need to convert our text inputs to numerical data. With subword tokenization, frequently used words are not split into smaller subwords. On the other hand, rarely used words need to be decomposed into meaningful subwords. BERT uncased, so this is where BERT is not case-sensitive, has a vocabulary size of around 30,000 [[Tokens]]. GPT-2 and GPT-3 have around 50,000 tokens. They use different techniques for subword tokenization. BERT uses WordPiece, and GPT-2 and GPT-3 use byte-pair encoding, or BPE. When you enter a sentence like I like nlp into BERT, it is converted into subword tokens. Since the [[Microsoft Word|word]] nlp is not in BERT's vocabulary, it is split into nl and ##p. And since models cannot work with the words, but need to work with numbers, each of these subwords have an associated input word ID. You'll notice that the tokenizer also has the CLS token and the SEP token. The CLS token is for sentence-level classification, and the SEP token is for handling two sentence tasks so that you can separate the two sentences. Now, what we've referred to as the BERT model is actually made up of 12 encoders. The original transformer model had six encoders. Now, here's an important detail that we haven't covered so far. BERT is an acronym for Bidirectional Encoder Representations from Transformers. We already know that it is only the encoder portion of a transformer.
>
> **[1:32](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=92)** What we haven't considered is the bidirectional piece. So let's take a look at how this works. In BERT, we give the entire input sentence at once, and so BERT gets to weigh up all of the words in a sentence in its prediction. This is in contrast to a decoder-only model like GPT, which generates words and so only has access to words that it has already generated. As part of being able to process the text in parallel, all the input text sequences are padded out or truncated to a fixed length. BERT can only support up to 512 tokens at one time. BERT has two ways of differentiating two pieces of text as input. The SEP token is in place between the two texts, and segment embeddings are added to distinguish between the first sentence and the second sentence. Now, you're probably wondering, if we already have the SEP token to distinguish between the two sentences, why do we need segment embeddings or vice versa? [[Deep Learning]] is an area of active research and experimentation. The authors of BERT may have found some performance gains, which they haven't documented. You can always try input two sequences without a SEP token and see the result. Now, we also need some notion of word order. The positional encoding vector is added to the embedding vector. Now, tokens with similar meanings would be closer to each other, but embeddings do not encode the relative position of tokens in a sentence. So after adding the positional encoding, tokens will be closer to each other based on the similarity of their meaning and their position in the sentence. So this is what things look like. We have our input text, I like nlp.
>
> **[3:05](https://www.linkedin.com/learning/tensorflow-working-with-nlp/bert-model-and-tokenization?u=76281980&t=185)** This is converted into subwords, and the CLS classification token is added to the start and the SEP token to the end. These are converted into input word IDs. Segment embeddings help to distinguish between the sentences. And after the positional encoding step, we have captured both the similarity of the word meanings and their position in the sentence. Finally, this is fed into the 12 encoders, and the results are available as hidden states. It's now time to get into the details of the components of an individual encoder.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (7), [[Microsoft Word|Word]] (5), [[Deep Learning]] (1)
> **Env Vars:** bert (12), sep (6), gpt (5), cls (3), bpe (1)
> **Definitions:** is an  (2)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### [Tokenizers](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=0)** - [Tutor] Let's head over to the Colab notebook to confirm our understanding of tokenization and code. So, in the first couple of cells, we're installing [[TensorFlow]] texts and the TensorFlow Models Official. We then go ahead and import these [[Python (Programming Language)|Python]] packages. And then we're loading a BERT model from TensorFlow hub. We're using a BERT model with the uncased widths. And so you can see that we have a vocabulary size of about 30,000 [[Tokens]]. So you can see that the BERT model is a standard BERT model with uncased widths, and it has 12 layers. So our input sentence is going to be, "I like NLP." This is then tokenized and then the tokens are then converted to IDs. So, "I like NLP" is converted to, "I like NL" and then "##P." These IDs correspond to token IDs. If I enter two sentences, "I like NLP." And, "what about you?" I then enter that into the BERT model and you can see that we get this output results. So let's look at this in a little bit more detail. Now, normally BERT has a maximum sequence length of 512. Here we're using a sequence length of 128. So the reason that we have a shape of two, 128 is because the two corresponds to the two sentences and the 128 to the sequence length. The input [[Microsoft Word|word]] IDs are the corresponding conversion of the sub words in two input IDs
>
> **[1:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/tokenizers?u=76281980&t=94)** with the CLS and the SEP tokens added. So you can see that the CLS token is 101 here and the SEP token is 102. And this block corresponds to the first sentence, and the second block corresponds to the second sentence. And finally, the input mask confirms which bit the model will focus on. And so you can see that the model is going to focus on where we have the text and the sentence. So that's in the first sentence, the ones here correspond to the second sentence and the zeros correspond to padding. And that is an overview of the tokenizers in code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[TensorFlow]] (3), [[Tokens]] (3), [[Python (Programming Language)|Python]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** bert (6), nlp (3), cls (2), sep (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** python (1)
> **Tools:** colab (1)
> **Speakers:** - [tutor] (1)

#### [Self-attention](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=0)** - [Instructor] In this example text, the monkey ate that banana because it was too hungry, how is the model able to determine that the it corresponds to the monkey and not to the banana? It does this using a mechanism called self-attention that incorporates the embeddings for all the other words in the sentence. So when processing the [[Microsoft Word|word]] it, self-attention will take a weighted average of the embeddings of the other context words. The darker the shade, the more weight that word is given, and every word is given some weight. You can see that both banana and monkey come up as likely for the word it but monkey has the higher weighted average. What's happening under the hood? As part of the self-attention mechanism, the authors of the original transformer take the word embeddings and project it into three vector spaces, which they called query, key, and value. Why project the word embeddings into these three new vector spaces? This allows you to have different representations of the word embeddings. The equation used to calculate the attention weights is given by the following formula to be taken as input into the self-attention, the query, the key, and the value vectors. We then calculate the score of each word to determine how much focus to place on other words in the sentence. This is done by taking the dot product of the query vector and the key vector. And if you've forgotten your [[Linear Algebra]], the T means that we are performing a transpose operation on the vector K. We then divide this by the square root of n to scale the dot product attention.
>
> **[1:34](https://www.linkedin.com/learning/tensorflow-working-with-nlp/self-attention?u=76281980&t=94)** Here, n is the dimension of these vectors. And so we now have lodges. We can then go ahead and convert this to probabilities by using the softmax function. And we now multiply each value vector by this softmax score. We can then sum up the weighted value vectors. And this produces the self-attention calculation for a single word.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (9), [[Linear Algebra]] (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Multi-head attention and feedforward network](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/multi-head-attention-and-feedforward-network?u=76281980&t=0)** - [Instructor] Earlier, we looked at how self-attention can help us provide context for a [[Microsoft Word|word]], but what if we could get multiple instances of the self-attention mechanism so that each can perform a different task? One could make a link between nouns and adjectives, another could connect up pronouns to their subjects. This is called multi-headed attention, and BERT has 12 such heads. Each multi-head attention block gets three inputs, the query, the key, and the value. These are then put through linear or dense layers before the multi-head attention function. The query key and value are then passed through separate, fully-connected linear layers for each attention head. This model can jointly attend to information from different representations and at different positions, allowing it to make richer connections between words.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** bert (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Fine-tuning BERT](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=0)** - [Instructor] As part of the pre-training step, when [[Google]] trained BERT with the next sentence prediction task which is a text classification task, a linear layer was added at the end of the BERT model. The only thing that was fed into the linear layer was from the CLS embedding. So in order for the BERT model to perform well, it learned that it needed to capture all the information required in the CLS token. This means that when we want to fine tune BERT, say on movie reviews, all we need to do is to add a linear classify layer and use the final embedding of the CLS token as the input to the linear classifier. In addition to a linear classifier, we often add a dropout layer to reduce overfitting. We then train or fine tune the model with a label dataset. Using the movie review example, this would be training the linear classifier with the movie review texts and their associated labels, either positive or negative. Notice that we are not taking any input from any of the final embeddings in the hidden state. Although we don't use them for the classification task, they capture increasingly enhanced embeddings, and we shouldn't discard them earlier in the model. If we were to do [[Fine Tuning]] for named entity recognition or question answering, we would use these other final hidden states. Let's now head over to the CoLab notebook to look at an example of fine tuning for sentiment analysis. Now, here we want to train a sentiment analysis model to classify movie reviews as positive or negative based on the text of the review. We'll use the large movie review dataset that contains the text of 50,000 movie reviews from IMDb.
>
> **[1:37](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=97)** The first thing we wanted to do is to change our run time type from CPU to GPU, as we we'll be training a model. So you would head over to runtime, change runtime type, and you would change this from none to GPU. Now I've already trained a model and run this notebook a couple of minutes ago, so I'm not going to rerun this notebook. Feel free to go ahead to run time and run all the cells in this notebook. Now, the IMDb dataset has already been divided into train and test, but it doesn't have a validation set. So what we want to do is to try and create this validation set and so we'll split the training data in order to do this. One of the benefits of using [[TensorFlow]] is that we have some built-in APIs that support input pipelines. As part of the training process, we will just need to read data from the directories, but we don't want to make our model wait for this data. The tf.AutoTune allows you to [[Fetch]] the data dynamically. Our objective is to create a data set object, which contains both the text and the associated label. The IMDb training dataset is already made up of 25,000 text files. So we'll read these from the directory using the method, text dataset from directory, and this creates a text batch and a label batch. And these are the 25,000 files belonging to the two classes, which are either positive or negative reviews. Now let's take a look at a sample
>
> **[3:11](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=191)** so that we can see both the review texts and the associated labels. So, zeros are for negative reviews and one for a positive review. So if I was to look at the first example, so the review is negative and the review starts of stupid and just playing weird movie about some kid who becomes traumatized and so on. Now, just to make sure that the training time is shorter, I'm going to use a smaller version of BERT that only has two layers and two attention heads, and this is called the small BERT model. If you want to try the full version of BERT, comment out this line with the small BERT model and uncomment out the first-line. Just a [[Microsoft Word|word]] of warning. Your training time will be significantly longer. So you can see the shape of the sentence, I like NLP along with the word IDs and the input mass that we've seen earlier. So 101 corresponds to the classification token, 102 corresponds to the STP token, and this is the input ideas for these sentence I like NLP. So let's head over to the BERT classifier. So what we're doing is taking our BERT model from TensorFlow hub, we're then adding a dropout layer and then finally we add a dense layer and we have only a single node because we want to know whether the review was positive or negative. And so this is what our BERT classify looks like. So we have an input layer, the Keras layer, which takes in the BERT encoder,
>
> **[4:45](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=285)** we finally add our dropout and our classifier. As there are only two outputs, a positive or negative review, we use binary cross entropy. If there were more than two classes, we would use categorical cross entropy. Our metric will be accuracy. Now, if you train for 10 epochs, now, if you train for 10 epochs, it will take you a good five minutes to train this model. When fine tuning will often start off with a smaller learning rate. So we start off with an initial learning rate of 3e to the minus five. For fine tuning, let's use the same optimizer that BERT was originally trained on that's adaptive moments or Adam. We'll also use the same schedule as BERT pre-training. So we have a linear warmup phase over the first 10% of the training steps. We've now got to the optimizer, the loss and the metrics, and so we're ready to go ahead and compile the model. Now in the TensorFlow, working with images course, we looked at callbacks. In general, callbacks and TensorBoard are good tools to use for understanding, optimizing, and visualizing model training. So we'll work with them here. So will set up our checkpoint directory, which will update our directory as our model trains. And so we're now in a position where we want to train our model. In TensorFlow, we do this by calling the fit method and providing our training dataset as input. And in this instance, I've trained not for 40 epochs but for 10 epochs.
>
> **[6:19](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=379)** And let's head over to the TensorBoard to see how the accuracy has changed over time. And you can see that at the end of the 10 epochs, we've got a validation accuracy of about 80% and the training accuracy is around 86%. Now, if you're not familiar with TensorBoard, I've also provided a simple matplotlib plot of the training and validation loss over the 10 epochs. Now that our model is trained, let's go ahead and try it out on the test dataset. And you can see that we have an overall accuracy of about 78%. We can then go ahead and try out our model on a couple of sentences that we've made up. So, in the first sentence I've said, transformers have been a boon to NLP. It's going to be a case of before transformers and after transformers, they are wonderful. And not surprisingly, the score that we have for this is 0.988, which is a positive review. In my second sentence, I've provided as input from the first time I heard about them, I have found them to be dull and uninteresting. And as you can see, we have a negative review of 0.01. So just to recap what we've done with fine tuning. We've taken a BERT model from the TensorFlow model hub. We've taken the IMDb dataset, we've then added a dropout layer and a linear classifier to the CLS token, and then fine tuned on the IMDb dataset. And we've then finally used our model to classify other sentences
>
> **[7:51](https://www.linkedin.com/learning/tensorflow-working-with-nlp/fine-tuning-bert?u=76281980&t=471)** and we've come up with pretty impressive accuracy results after only training for about 10 epochs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (5), [[TensorFlow]] (5), [[Microsoft Word|Word]] (2), [[Google]] (1), [[Fetch]] (1)
> **Env Vars:** bert (15), cls (4), nlp (3), gpu (2), cpu (1)
> **Definitions:** is a  (2), means that (1), is called (1)
> **CLI Commands:** make (2), node (1)
> **Versions:** 0.988 (1), 0.01 (1)
> **Cross-References:** earlier in (1)
> **Tools:** colab (1)
> **Warnings:** warning (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/tensorflow-working-with-nlp/next-steps?u=76281980&t=0)** - [Jonathan] We've covered a lot in this course and looked at transformers for NLP with a focus on BERT. We've seen how BERT is used in production, but also the problems of bias and prejudice with BERT and GPT-2. We looked at transfer learning, which is this almost magical technique that did wonders for [[Computer Vision]], and it's doing the same for NLP. And finally, we looked at the BERT architecture, working from tokenization all the way to self-attention. Go ahead and either experiment with BERT and look at other use cases such as named entity recognition or question answering. Alternatively, you could try out some of the other BERT variants such as BERT-Large, or DistilBERT. You now know enough to try out some other models in the [[TensorFlow]] hub. I hope you found this course helpful. Thanks for watching, and I'd love to hear back from you and to connect via [[LinkedIn]]. (speaking in foreign language)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Computer Vision]] (1), [[TensorFlow]] (1), [[LinkedIn]] (1)
> **Env Vars:** bert (7), nlp (2), gpt (1)
> **Analogies:** such as (2)
> **Speakers:** - [jonathan] (1)


## Instructor

- [[Jonathan Fernandes]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/tensorflow-working-with-nlp-2439112)

## Skills Covered

- TensorFlow
- Artificial Intelligence (AI)
- Natural Language Processing (NLP)

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