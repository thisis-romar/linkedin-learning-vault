---
type: course
slug: introduction-to-large-language-models
url: "https://www.linkedin.com/learning/introduction-to-large-language-models"
duration_minutes: 77
duration: 1h 17m
level: Intermediate
updated: 3/13/2025
learners: 104232
skills:
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-large-language-models-4410730/codespaces"
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-04-17
---

# Introduction to Large Language Models

> Large language models (LLMs) have taken the AI world by storm. LLMs are behind some of the biggest AI technologies over the last few years, like ChatGPT and GPT-4. In this course, Jonathan Fernandes provides an overview of LLMs suitable for technical learners and non-technical learners alike. Jonathan shows you what LLMs are and what you can do with them, and takes a look under the hood so you can

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models) | 1h 17m | Intermediate | 104K learners

## Instructor

- [[Jonathan Fernandes]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-large-language-models-4410730/codespaces)

## Skills Covered

- Artificial Intelligence (AI)
- Large Language Models (LLM)

## Table of Contents

### Introduction

#### The impact and functionality of large language models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980&t=0)** - [Jonathan] If you're looking to be able to think critically about large language models, comparing them and understanding why they work the way they do and how this affects you and your work, then this course is for you.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980&t=12)** Hi, I'm Jonathan Fernandes, and I work with large language models every day.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980&t=18)** Join me to take a look at how we ended up where we are today with large language models, including looking at models such as BERT, GPT-3 and GPT-4, and Llama 2.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980&t=28)** Let's get to it.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (2), bert (1)
> **Code Keywords:** let (1)
> **Analogies:** such as (1)
> **Speakers:** - [jonathan] (1)


### 1. Transformers in NLP

#### What are large language models?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=0)** - [Instructor] Recently, GPT-4 and ChatGPT have become popular buzzwords.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=5)** They're both large language models and are basically a type of AI that can understand and produce human-like text.
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=12)** They can be used to do things like answer questions or generate content, summarize text, explain things, and generate dialogue.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=20)** And we see large language models used in everyday tools like chatbots and virtual assistants and language translators.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=27)** But things kicked off in natural language processing long before we had GPT and ChatGPT.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=32)** In 2017, a type of AI model architecture called Transformers was proposed by a team of researchers at Google in a paper called "Attention is All You Need."
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=42)** All large language models use components of transformers as part of their architecture.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=47)** So how do large language models work?
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=50)** Well, we can interact with them with plain English text, often called a prompt, and the large language model will respond with text known as the completion or the output.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=61)** Now, sometimes you won't get the output you expect so you can change the prompt and you might get another and hopefully better answer.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=67)** Now, let me illustrate, working with a large language model, with a simple example.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=72)** You're trying to figure out which book to read your six year old son.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=75)** So this is the children's book, "The Adventures of Pinocchio."
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=78)** Now, you don't know whether he'd like it so you take the first three chapters, because you don't want to spoil the whole story, and ask a language model to summarize it.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=85)** And then based on this summary, he can decide if this book sounds interesting.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=88)** So let me go ahead and grab the first three chapters.
>
> **[1:31](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=91)** I'm going to copy that, and let's head over to a large language model and let's ask the large language model to summarize the first three chapters.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=99)** So I'm now in Open AI's Playground.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=102)** Open AI are a large language model provider and I'm going to use one of their best known language models called GPT-4 to summarize these first three chapters.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=111)** So, I've provided as input, "Summarize the following text in five sentences" and I'm going to paste the first three chapters.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=118)** I'm going to head over to Submit, and let's see the response back from the large language model.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=123)** The large language model, GPT-4, does a terrific job of summarizing the first three chapters.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=128)** It starts off with "Carpenter Mastro Cherry finds a piece of wood that reacts when he prepares to carve it into a table leg, emitting a voice that seems to besiege him not to hit so hard.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=138)** He eventually dismisses this, attributing it to his imagination playing tricks on him.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=142)** Later, Geppetto, a friend of Mastro Cherry arrives..."
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=144)** and so on.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=145)** And you can see that that's starting to look like a really good summary of the first three chapters.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=149)** All right, so we've looked at what large language models are and that you can interact with them by providing a prompt as input, and that they're trained on large amounts of data which is why they return intelligent sounding text.
>
> **[2:39](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=159)** Now go ahead and try out GBT-4 in the Open AI Playground and ask it some questions.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=164)** So ask it to explain something and see how good it is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1)
> **Env Vars:** gpt (4), gbt (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### How are large language models trained? Pre-training
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=0)** - [Instructor] We've seen an example of a large language model at work and the results are pretty impressive.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=5)** But how do you go about training a large language model?
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=7)** And that's what we're going to look at in this video.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=10)** Initially, the language model has random weights, and at this point, the model has no knowledge of language.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=16)** Now, if you were to prompt it, it would just return gibberish.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=19)** But if you train the model and pass it a large corpus of data, it adjusts these weights as part of the training process.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=25)** And this pre-training stage is very resource heavy.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=28)** So you need lots of data, and this includes a variety of different types of data like books and articles and websites.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=35)** Let me give you an example.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=37)** LLaMA was a group of language models that were released in 2023 by Meta.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=41)** And this is a data mixture of Meta used for pre-training.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=45)** So Common Crawl and C4 are web scripts of the internet that have been cleaned and filtered.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=50)** GitHub data is programming code like Python or JavaScript.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=53)** This is code that has been released under certain licenses like the Apache license giving you the permission to reuse the code for nearly any purpose.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=60)** And Wikipedia is the well-known online encyclopedia.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=63)** Books is a collection of open books.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=65)** So this includes freely accessible to everyone like the Project Gutenberg books library.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=70)** Archive are scientific articles and papers, and Stack Exchange is a network of websites with questions and answers across different topics.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=78)** Now, a proportion of each of these data sets is sampled given by the different percentages when training on the data.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=83)** So the epochs give you an idea of how many times the language model saw this data while training.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=88)** For example, with the Common Crawl, the language model saw all of the sample data 1.1 times, it saw the C4 sample data 1.06 times and so on.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=97)** Now, you'll also need a lot of compute.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=98)** This is processing capability in these massive server rooms where you have several hundreds to thousands of hardware accelerators and servers that you'll use for a couple of weeks or months that works through the training data.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=111)** So these hardware accelerators are usually Nvidia's GPUs or graphical processing units.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=116)** These are like CPUs that you'll find in a computer.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=119)** Their function is to run a lot of the language model training tasks in parallel.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=123)** Now, a training run usually costs a couple of million US dollars, and what you'll end up with is something like open AI's original GPT3 model called Da Vinci.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=132)** Let's take a look.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=133)** So here I am in the OpenAI playground, and let's try and use this GPT3 model as an assistant.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=139)** Now, I'm going to write the prompt, write a shopping list.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=143)** I have no idea what the output will be because it's probably seen thousands of sentences that start, write a shopping list, and it could generate anything that's related.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=155)** Now, what's really impressive is that you can see that after all the training the language model has gone through, it can generate English sentences that make sense.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=163)** Unfortunately, it's not particularly helpful, right?
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=166)** What I was hoping for is that it would provide me a list of items, one on each line.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=171)** Instead, what I've got is, "Make sure you always use an app on the phone, so you don't have to write down all of the information," and so on.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=176)** So let's see if I can try and trick the model into generating what I want by rephrasing my prompt.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=182)** So here is a shopping list.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=187)** And let me go ahead and use a colon at the end of that.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=192)** And let's see what output we get.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=194)** Now, this isn't much good either, so what I've got generated from the model is, "Current contracts with the following teams, Carnegie Hall and New York Philharmonic.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=201)** The Pops appear at Carnegie Hall every season," and so on.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=204)** Now, since this hasn't worked, let me go ahead and try and give the model an example of what I'm looking for.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=209)** So this is a shopping list of only fruit, and I'm going to list apples, oranges, and grapes.
>
> **[3:33](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=213)** This is a shopping list of only vegetables, and I'm going to leave the large language model to complete the rest, and I'm hoping that it's going to give me a list of vegetables.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=221)** So let's see what output we get.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=222)** And you can see that the large language model has been reasonably successful.
>
> **[3:45](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=225)** It's only listed me one vegetable.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=227)** It's a carrot.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=228)** But it's then gone ahead and said, "This is a shopping list of only meat," and it's listed me with chicken.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=234)** So the language model starts off well, but then it seems to lose the plot and it generates some other text.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=240)** All right, so we've seen that the pre-training step is a very compute heavy and expensive process including a lot of hardware and data.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=248)** And what we get at the end of this is a model that's good at generating and completing sentences, but it isn't great at following our instructions.
>
> **[4:15](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=255)** So if we want to be able to use language models as virtual assistants, we will need something that follows our instructions.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=261)** And so we look at how to do this next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (1), function (1), for. (1)
> **Definitions:** is a  (9)
> **CLI Commands:** make (2), python (1), apache (1), find (1)
> **Env Vars:** gpt3 (2)
> **Versions:** 1.1 (1), 1.06 (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Making large language models follow instructions
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=0)** - [Instructor] We've seen the problems with just a base large language model.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=4)** It just doesn't follow our instructions to create a shopping list out of the box.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=8)** So how do we go about creating a large language model that will follow instructions we give it?
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=15)** In 2022, the Open AI team released a paper called "Training Language Models to Follow Instructions with Human Feedback," which is still the industry standard.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=24)** There are two components to this training, supervised fine-tuning, and RLHF, or reinforcement learning from human feedback.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=32)** Let's head over to the paper and take a look at the supervised training in the diagram on the left.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=38)** The Open AI research team would create a prompt, for example, "Explain the moon landing to a six-year-old," and then a labeler, so that's a person who's skilled with working with text data, would then write out what the model should produce as output.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=53)** So for example, they may include details like it took place in 1969, the spaceship used was Apollo 11, and two American astronauts, Neil Armstrong and Buzz Aldrin, became the first human beings to walk on the moon.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=65)** They would typically have tens of thousands of such questions, and after this, researchers will typically fine-tune a model.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=72)** Now, what they mean by fine-tuning is that they would pass both the prompt and the expected output from the label of each prompt to the large language model, and train it.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=81)** This means after some training for a given prompt, the large language model gets better at producing output that resembles what a labeler would have written.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=90)** So that's what's known as the supervised training part.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=93)** So let's move on to RLHF.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=96)** Let's say there's another task, for example, "Summarize the following news article."
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=100)** Now, let's say the news article is about research on parrots and the sounds they make.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=104)** They would get this fine-tuned model to generate five different summary outputs of the news article.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=110)** The labelers would then rate each of the five summaries, rating them between one and seven, using an interface like this.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=117)** Often researchers also want to make sure that the models follow instructions and do not generate toxic content or fabricate information, so the labelers had to give yes no answers to questions that address this, over on the right.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=130)** The labelers also answered questions like, did this model fail to follow the task, and did the output contain inappropriate content, and so on.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=138)** And they ended up with a ranking of the five different summary articles that looked something like this.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=143)** This is the labeling interface where the bottom three boxes are the summary of news articles on parrots that they've already ranked, and the top two are the ones that the labeler will work on next.
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=153)** We're now in the middle at step two.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=155)** So this ranking of the articles is used to train another model called the reward model.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=160)** Now the reward model takes this input, the rankings from the five or so text generations from the model, and returns a number.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=167)** Now, this number represents the labeler's preference.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=170)** This reward model could be fine-tuned to take an input ranked text, and output a number that indicates how well the labelers perceived it.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=177)** The final step over on the the right was to use reinforcement learning to optimize the original language model using the reward model.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=185)** So if the model generates a text that follows the task intent and is not untruthful or toxic, it's rewarded.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=192)** And that's the crux of reinforcement learning.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=194)** This way, a model is encouraged to generate text that would receive positive human feedback.
>
> **[3:19](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=199)** PPO, or proximal policy optimization, is the algorithm used to calculate the loss, which is used to update the original language model.
>
> **[3:29](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=209)** So let's take our earlier example of a shopping list and see the difference with a model that has been trained with supervised fine-tuning and RLHF.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=219)** And so I could use text-davinci-003 as an example, and let me go ahead and remove all of the prompts and say, "Write a shopping list," and let's see the output that we get.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=233)** And this is excellent.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=234)** This is exactly what we would want.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=235)** We've got bread, milk, eggs, cheese, ground beef, cereal, and so on.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=240)** Alright, so we've looked at what supervised fine tuning and RLHF does.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=244)** This combination of fine-tuning and reinforcement learning from human feedback has produced large language models that are much better at following instructions.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=253)** Go ahead and head over to the OpenAI Playground and try and give a model a couple of tasks and see how it does.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), interface (2), this. (2), pass (1)
> **Env Vars:** rlhf (4), ppo (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Large Language Model Components

#### Transformer architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=0)** - [Narrator] Large language models are made up of a couple of components.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=3)** We'll take a brief look at each of these in turn, starting off with the transformer architecture.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=9)** The individual components of the transformer architecture are beyond the scope of this introductory course.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=14)** Let's simplify this architecture by breaking it up into two components.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=18)** So the left half of the diagram is known as the encoder and the right hand side is known as the decoder.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=24)** We look at what tasks each perform in this video.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=28)** So we can feed in the English sentence, such as, "I like dogs," into the encoder, at the bottom left of the diagram.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=35)** The transformer can act as a translator from English to German.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=38)** And so the output from the decoder at the top of the diagram is the German translation, (speaks in German).
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=45)** The transformer is not made up of a single encoder but rather six encoders and six decoders.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=51)** Each of these contain the attention mechanism, which allows the model to focus on different parts of the input text.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=58)** So this means you feed in the input text at the bottom and the output from the first encoder is fed into the second encoder and so on, all the way up to the top most encoder.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=68)** Now by passing the data through these successive encoder layers, the model's able to capture deep and more complex understanding of language semantics.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=76)** And this is then fed into the decoder layers, which are on the right hand side of the diagram.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=81)** The encoder and decoder can be used independently or together, depending on the task.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=87)** Encoder-decoder models are good for generative tasks, such as translation or summarization.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=93)** Encoder only models are good for tasks that require good language understanding, such as sentence classification.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=99)** Now, sentence classification is where you take some text, for example, a movie review and then you label it as being either positive or negative.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=107)** BERT is an acronym for Bidirectional Encoder Representations from Transformers, which sounds like quite a mouthful but now that we know a little bit more about the transformer architecture and encoders, this acronym should make a bit more sense.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=122)** Decoder-only models are good for generative tasks, such as text generation, like I've shown you in the OpenAI playground.
>
> **[2:08](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=128)** So examples include ChatGPT and GPT-3 and GPT-4.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=133)** Most of the research has been around decoder models as these can generate text, so this makes them more useful as chatbots or virtual assistants.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=141)** All right, so transformers are made up of layers of encoders and decoders and depending on what kind of task we need to perform, we'll determine if we need either or both components.

> [!info]- Semantic Content
>
> **Analogies:** such as (4), for example (1)
> **Env Vars:** gpt (2), bert (1)
> **Definitions:** known as (2), is an  (1)
> **Code Keywords:** let (1), require (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### What are parameters
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=0)** - [Instructor] When talking about large language models, we almost always reference the size of the model or the parameter count.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=6)** GPT-3 is 175 billion parameter model.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=10)** Meta's largest Llama 2 model has 70 billion parameters.
>
> **[0:13](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=13)** But what do we mean by parameters?
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=16)** Now the parameters in a neural network are the variables that the model learns during the training process.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=21)** They get adjusted during training because for a given input during the training process, you want to try and minimize the difference between the predicted outputs from the actual output.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=30)** Let me give you an example.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=31)** This is a visual representation of a neural network and you can see that the architecture has layers.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=36)** So a node is represented by circles in this graphic.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=40)** It receives input from other nodes, it processes it, and then passes the outputs to other nodes.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=46)** So nodes represent neurons, and a collection of nodes or neurons is known as a neural network.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=52)** The input layer has three nodes, the hidden layers have four nodes each, and the output layer has one node.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=58)** This is a fully connected network.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=60)** So going from the input layer on the left this means that there is a line from every node in one column or layer to all the nodes in the next layer.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=68)** This type of neural network usually makes a small part of most large language model architectures.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=74)** Each of the lines connecting one node to all the other nodes are edges and they represent weights.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=79)** The network learns by adjusting these weights and we can easily calculate the number of weights by multiplying the number of nodes in the left layer and the right layer.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=88)** So just having the weights associated with the connections won't give us an accurate result when trying to fit or train our model with data.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=95)** So we'll need an offset to adjust any output and this is known as the bias term.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=101)** We'll also have one bias term for each node on the right.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=104)** So in this example, there will be four in total.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=107)** This means that the number of parameters in this example is three times four, plus four, which is a total of 16 parameters.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=114)** We apply exactly the same logic to the next part of the network, which is the middle section.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=118)** And we have four nodes on the left and four nodes on the right.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=121)** So that's four times four, plus four for the bias term.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=124)** And so that's a total of 20.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=126)** And finally, we have four times one, plus one for the final part of the neural network.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=131)** So this means if we sum up all of the parameters across this neural network, we get 41 parameters.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=136)** So we say that this is a 41 parameter model.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=139)** Now to give you a sense of perspective, most large language models have several billion parameters.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=145)** A large language model would also have different types of layers with different components.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=150)** I've just shown you how you'd calculate the parameter count for a fully connected network.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=155)** All right, so we've learned that parameters in a neural network are the variables that the model learns during the training process and to get adjusted during this process.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=164)** We've also looked at how to calculate the parameter count for a fully connected network.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=169)** Go ahead and Google neural network and you should see a whole lot of images that look similar to this one.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=174)** Now try and calculate the parameter count for some of these neural networks.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), known as (2), means that (2)
> **CLI Commands:** node (5)
> **Code Keywords:** let (1), finally, (1)
> **Env Vars:** gpt (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### What are tokens?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=0)** - [Instructor] Large language models generate text word by word, right?
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=3)** Not quite. They generate tokens.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=6)** So what are tokens?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=8)** Basically each word is split into sub words and one token corresponds to around four characters of text.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=14)** Let's head over to the OpenAI website to get a good visual example of what tokens are.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=20)** So this is the Tokenizer on the OpenAI website.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=23)** So let me just go ahead and scroll down a bit.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=25)** Now I'm going to go ahead and enter some text into the Tokenizer.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=28)** So, tokenization is the process of splitting words into smaller chunks or tokens.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=33)** Each of the different colors corresponds to a token.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=36)** So in general, you can see that most words correspond to tokens, which includes the space in front of the word.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=42)** There are a couple of exceptions.
>
> **[0:43](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=43)** For example, the word tokenization is made up of two tokens, token and ization.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=49)** The sentence I've typed has 12 words.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=52)** Now, this corresponds to 14 tokens or 77 characters and you can see that the full stop right at the end has its own individual token.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=61)** All right, so now that we know that tokens are made up of sub words, let's take a look at context windows.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### What are context lengths?
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=0)** - [Instructor] When having a conversation with a large language model, how can you figure out how much of the conversation it remembers?
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=7)** That's what context windows are all about.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=11)** Now, if you remember, a prompt is the text you input into the model and it's made up of a couple of tokens.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=16)** The completion is the text outputted from the model, which also makes up a couple of tokens.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=21)** The sum of the tokens of the prompt and the completions is known as the "context window" or "context length".
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=28)** Now, the longer the context length, the more informational background the model has for generating a response.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=34)** For a language model to produce a more meaningful and relevant response, it needs to be able to take an entire conversation into consideration.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=41)** Now, different large language models will have different context lengths.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=44)** Chat GPT currently has a context length of around 4,000 tokens.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=48)** GPT-4 has 8,000 tokens.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=51)** GPT-4-32k has 32,000 tokens.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=55)** Now, with a context length of 32,000 tokens, you could provide almost 50 pages of text as input to a model and get it to summarize it.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=63)** Alternatively, you can get it to generate more text if you wanted to create a short story.
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=69)** Claude 2, a large language model from Anthropic, has a context window of 100,000 tokens.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=77)** Now, what can you do with a context length of 100,000 tokens?
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=81)** Let's take a children's novel like the 50,000 word "Black Beauty" by Anna Sewell.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=86)** Now, with 50,000 words, this will fit into Anthropic's 100,000 token context window.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=92)** So, let me go ahead and copy the entire novel.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=95)** Now, the question is, can we get a large language model to answer a specific question about this novel?
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=103)** So, let's head over to Anthropic's Playground to see how this works.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=106)** So, I'm now in Anthropic's Playground and I have access to the Claude 2 model.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=110)** Now, before I do anything, I want to query Anthropic's model about my question.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=114)** I want to make sure that if Claude 2 answers the question, it isn't in relation to "Black Beauty".
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=119)** So the question is, "Who is Duchess?"
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=124)** Rephrase.
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=125)** So, you can see, the response back is, "Duchess was a character in the 1970 animated film 'The Aristocats', produced by Walt Disney Productions.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=132)** She was a mother cat with three kittens," and so on.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=134)** And then, right over at the end, it says, "So, in summary, Duchess was the main mother cat character in the classic Disney animated film, 'The Aristocats', set in the early 20th century Paris."
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=144)** Now, Claude 2 has almost certainly seen "Black Beauty" as part of its training data, but its initial response to my question is not related to "Black Beauty", which is what I wanted to confirm.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=155)** And let me go ahead and start a new chat and ask the question, "Who is Duchess?"
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=161)** And I'm going to go ahead and paste the entire novel in the context window.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=168)** And let's give this a couple of seconds.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=170)** Now, that's pretty impressive.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=172)** The response back from Claude 2 is, "Based on the contents of the book excerpt, Duchess seems to be the Black Beauty's mother," and some key details.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=181)** And if I head over to the end, it says, "So, in summary, Duchess has identified as Black Beauty's mother, gives him advice when he is young, and distressed when they're separated after "Black Beauty" is sold," and so on.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=191)** Now, it would've taken me over three hours to read this book and here I can get my answer in just under a minute.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=197)** All right, so we've looked at context links of large language models and how they vary from around 4,000 tokens for some models to 100,000 tokens.
>
> **[3:26](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=206)** Go ahead and try and upload a large book or a knowledge base, anything that has less than 75,000 words, into Anthropic's Claude 2 model and query it and post your findings on LinkedIn and tag me.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5)
> **CLI Commands:** cat (2), make (1)
> **Env Vars:** gpt (3)
> **Speakers:** - [instructor] (1)


### 3. Large Language Models

#### BERT
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=0)** - [Narrator] If you're like me, the only time you watch dressage is every four years during the Summer Olympics.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=6)** Now, whenever I've used Google search in the past, I've often only entered keywords such as dressage goal.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=11)** It turns out that Google search uses BERT.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=14)** BERT, which stands for bi-directional encoder representations from transformers is a large language model that was developed by Google.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=21)** BERT is based on the transformer architecture and composed of transformer in coder layers which we looked at in a previous video.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=28)** Since Google uses BERT, we get better language understanding.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=32)** This means I don't just have to use keywords, but I can enter a question like, "What's the main objective of dressage?"
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=39)** And the answer back from Google doesn't just give me the most relevant page, but the answer to my question is highlighted.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=45)** So the main objective of dressage is improving and facilitating the horse's performance of normal tasks.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=53)** Here's another example of BERT in production.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=55)** In the past, if you did a Google search using the phrase, "Can you get medicine for someone pharmacy", it wouldn't have picked up on the fact that for someone was a really important part of the query because you're looking for another person to pick up the medicine.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=67)** Google search would've returned results about generally getting a prescription filled, which isn't relevant in this context.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=74)** Now with BERT, Google search captures the important nuance that another person needs to pick up the medicine, and it returns results about having a friend or a family member pick up a prescription.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=85)** BERT is around 110 million parameters, and was trained on the English Wikipedia and BookCorpus, which are 11,000 books written by yet unpublished authors.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=94)** And unlike text generation models like ChatGPT and GPT-4, where they're trained to generate the next token, BERT is trained on two other tasks, masked language modeling, or MLM, and next sentence prediction, or NSP.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=107)** The masked language modeling task requires BERT to predict a masked-out word.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=113)** Let's take a look at an example.
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=115)** The MLM task requires BERT to predict the masked-out word.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=120)** So the Tokyo Olympic Games were something from 2020 to 2021.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=126)** The answer here is that the Tokyo Olympic Games were postponed from 2020 to 2021.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=132)** If BERT doesn't guess postponed during training, the weights in the network get adjusted so that it's more likely to guess this word the next time round.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=140)** The next sentence prediction task asks the question, does the second sentence follow immediately after the first?
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=147)** So does the sentence, this is the first instance, and so on, logically follow from the Tokyo Olympic Games were postponed from 2020 to 2021.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=157)** Now, when would you ever need either of these tasks and why are either of them useful?
>
> **[2:41](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=161)** These tasks force BERT to get a really good understanding of language.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=165)** And we've seen it so good that Google incorporated it as part of its search.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=171)** All right, so we've seen that BERT doesn't generate text, but it's great at language understanding.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=175)** Recall that transformer models have encoders and decoders.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=179)** BERT is the only encoder model we look at.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=182)** The rest of the models will be decoder only models.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=185)** Right after BERT, research from OpenAI suggested that bigger models are better.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=190)** And so the rest of the models we look at are truly large with billions of parameters.

> [!info]- Semantic Content
>
> **Env Vars:** bert (15), mlm (2), gpt (1), nsp (1)
> **Definitions:** stands for (1), is a  (1)
> **Code Keywords:** let (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Scaling laws
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=0)** - [Instructor] Imagine what things must have been like in the tech space in 2020.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=4)** The transformer architecture in 2017 was proving to be better than anything before it.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=9)** This is a time of significant experimentation.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=11)** Some companies were focusing on the decoder portion, others on the encoder.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=16)** Others were trying to figure out how they could make the models even better.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=19)** And it was at this time that the research team at OpenAI suggested that the performance of large models was a function of the number of model parameters, the size of the dataset the models were trained on and the total amount of compute available for training.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=35)** They performed several experiments on language models to back up their claim.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=39)** Let's take a look at some of the results.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=40)** So on the Y axes is the test loss and a lower test loss indicates that the model is performing better.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=47)** Along the X axes is the number of parameters in the model.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=51)** So you can see that the x axis isn't linear.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=53)** We have markings for a hundred thousand, 10 million and 1 billion parameters.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=57)** Now because the graph is sloping down, there seems to be a trend where the bigger the model so the more parameters it has, the lower the test loss.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=65)** So how do you make models larger?
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=68)** One way you can do this is to have more layers, so that's more encoder or decoder layers from a transformer architecture.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=74)** The graph in the middle plots the test loss versus the dataset size.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=79)** The dataset size is referring to the number of training tokens.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=83)** This is the data the model was trained on.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=85)** From this graph, you can see that there's again, this striking trend, the larger the dataset size, so the more data the model's trained on, the lower the test loss.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=94)** And finally, let's look at compute.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=96)** So over on the graph at the right, the X axis shows the number of petaflop compute days, which is the amount of compute used for training models.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=106)** Each of the blue lines correspond to the learning curves of different models of different sizes.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=113)** The reason that this moves to the right is that bigger models require more compute capability to train on, but we can see that the test loss reduces.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=122)** A lower test loss means that the bigger models perform better.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=126)** The dotted orange line is the maximum amount of performance you can get for a given amount of compute.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=132)** So what this graph is saying is use a large language model based on the size of the compute budget.
>
> **[2:18](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=138)** Now, if we take all three graphs together, they're telling us that language modeling performance improves as we increase the model size, the amount of data for training and the amount of compute used for training.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=150)** So for best performance, all three factors must be scaled up together.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=155)** The OpenAI team then went on to propose that as more compute becomes available, you can decide where you want to allocate it by training a larger model, using larger batches or training for more steps.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=167)** Now, training for more steps means training the model for a longer time.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=171)** They concluded that most of the increase should go towards increasing the model size.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=177)** Now there is some benefit using more data and using larger batch sizes, but minimal contribution if you train the language model for more steps.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=185)** So when the results from these scaling laws were published in 2020, it wasn't surprising that many big tech firms went down the route of increasing the model size, and so creating larger language models.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=197)** OpenAI released GPT-3 which was 175 billion parameters.
>
> **[3:23](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=203)** This was significantly better than any other language model at the time and we look at this model next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (1), finally, (1), require (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** gpt (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### GPT-3
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is probably one of the most well-known large language models.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=5)** Let's take a look at what the letters GPT represent in turn.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=9)** So G is for generative, as we are predicting a future token, given past tokens.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=15)** P is for pre-trained, as it's trained on a large corpus of data, including English Wikipedia, amongst several others.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=21)** This involves significant compute time and costs.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=25)** And finally, the T corresponds to a transformer, and we're using the decoded portion of the transformer architecture.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=31)** GPT-3's objective was simple.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=33)** Given the preceding tokens in the example, it needs to predict the next token.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=38)** So this is like predictive text on your phone.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=39)** So if I gave it the phrase, "Once upon a," the most likely next token is time, "Once upon a time."
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=45)** Remember that a token is a sub-word.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=48)** So these are known as causal or autoregressive language models.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=52)** For a couple of years, the focus of researchers was getting a large corpus of data and then training a language model.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=59)** Now, if you wanted to use the language model for a specific task, say sentiment analysis, then you'd need to give it hundreds of examples of sentences that were labeled as either having a positive or negative sentiment and train the model on these sentences and labels, and the model would produce excellent results.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=75)** Now, sentiment analysis is where you provide a text as input to the language model, and the language model needs to then predict if the text has a positive or negative sentiment.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=85)** So here's an example from the movie reviews.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=88)** "Brilliant execution and acting.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=89)** Excellent work by the director, cast, and crew," and this is labeled with a positive review.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=95)** So now let's take a look at a negative example.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=97)** "This piece ain't really worth a comment.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=99)** It's simply the worst horror movie I've ever seen.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=101)** The actors are bad as bad can be and the whole plot is so silly it nearly made me cry."
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=107)** Now, models like BERT are excellent at these types of tasks, and after being trained on a couple of hundreds of examples, if you give it a new movie review that it hasn't seen before, it will get it right more than 95% of the time.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=120)** Now let's say if you have a totally different task, like question answering.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=124)** Now this is where you provide a text to the model and you ask a question, and you wanted to extract the answer from the text.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=130)** So let me give you an example.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=131)** Now, let's say the text is, "The Summer 2020 Olympics included new disciplines such as baseball and softball, surfing and skateboarding.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=139)** It was hosted in Tokyo, Japan."
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=141)** And if the question was, "Where was the 2020 Olympics held?"
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=145)** the answer would be Tokyo, Japan.
>
> **[2:29](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=149)** Now if you try to use the same language model that you used for sentiment analysis to perform this question answering task, it would fail miserably.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=157)** You'd have to start again with your initial language model, make a few changes to the model architecture, give it a couple of hundred examples of sentences where for each text, you have questions and the correct answers, and train the model, and it would eventually get good at this task.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=171)** But the OpenAI researchers argued that what makes this different to how you and I operate is that if we have to learn a new task, we can do a reasonable job if you're given a clear set of instructions and a couple of examples.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=183)** So what the researchers found was if they created a really large language model, so the 175 billion parameters in the case of GPT-3, and if they gave it a new task and a couple of examples with the expected output, it was able to perform these tasks.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=197)** So let me show you an example using sentiment analysis in the OpenAI Playground.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=202)** I'm now in the OpenAI Playground, and I'm now going to ask the model to classify the following text.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=208)** So this is my text, and I'm going to say, "Classify the following text as being either positive or negative," and let's see what response we get back.
>
> **[3:43](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=223)** So you can see that the language model generates a whole load of text, so, "Probably one of his worst films and a disrespect to the original novel, but still very funny in certain places," and so on, right?
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=233)** So this is an example of zero-shot learning where we haven't given the model any examples.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=238)** So let's go ahead and try and give the model a couple of examples, and see how it performs.
>
> **[4:04](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=244)** So I'm just going to reformat the text.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=247)** So I'm going to call the text Review, and then I'm going to say that this has a positive sentiment.
>
> **[4:13](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=253)** Now I'm going to give it another example, and this is what's known as few-shot learning.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=257)** So if I just give it a single example, that's known as one-shot learning.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=260)** If I give it a couple of examples, this is known as few-shot learning.
>
> **[4:23](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=263)** So let me go ahead and provide an example of a negative sentiment.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=268)** So that's the review.
>
> **[4:30](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=270)** And again, let me use the same format, so review, and I say that this has a negative sentiment.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=277)** And finally, let's give the model a review that it hasn't seen before, and this time around, the model needs to figure out whether this is positive or negative.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=286)** So this is known as few-shot learning, because we've given it two examples.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=290)** And you can see that the model correctly classifies this as negative and then goes on to generate more text.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=295)** So let's go ahead and just make a couple of changes to our settings.
>
> **[5:00](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=300)** So because we only wanted to generate either positive or negative, I'm going to go ahead and specify that the maximum length needs to only be one.
>
> **[5:06](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=306)** So it's going to generate either negative or positive, that meaning a single token, and let's go ahead and remove all of the text that we had before, and now let's go ahead and submit this.
>
> **[5:20](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=320)** Okay, I've got a warning that my text ends in a trailing space.
>
> **[5:22](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=322)** So let me just go ahead and try and just delete that, and let's try again.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=326)** So I'm going to go ahead and select submit, and you can see that the model correctly classifies this as a negative sentiment.
>
> **[5:33](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=333)** So what's special about what we've just done is that we've now used a large language model that wasn't trained on sentiment analysis to do this task just by providing a couple of examples.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=344)** Now its accuracy isn't going to be as good as a BERT model that has been trained for this task, but what we could do is give it another task with a couple of examples.
>
> **[5:52](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=352)** So given this text and these questions and answers, go ahead and answer this question, and the model will get reasonable results.
>
> **[5:59](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=359)** Let's go ahead and take a look at the model sizes.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=362)** You might still question why the OpenAI researchers went for such a large model, given that most models were a couple of billion parameters at most at this time.
>
> **[6:11](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=371)** This graph summarizes their findings.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=373)** GPT-3 is a family of models with sizes 1.3 billion parameters, 13 billion parameters, and 175 billion parameters.
>
> **[6:21](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=381)** Across on the X-axis is the number of examples you're giving the model.
>
> **[6:25](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=385)** On the Y-axis is the accuracy of the model for a task.
>
> **[6:28](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=388)** The higher it is, the better performing a model.
>
> **[6:31](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=391)** Over on the top of the graph, you have labeled zero-shot, one-shot, and few-shot, which is how many examples you're giving the model for the task you wanted to perform.
>
> **[6:40](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=400)** Let's take a look at the smallest model, the 1.3 billion parameter model.
>
> **[6:43](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=403)** Regardless of how many examples you give it, the accuracy of the model is pretty low.
>
> **[6:47](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=407)** It's less than 10%.
>
> **[6:48](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=408)** The 13 billion parameter model is slightly better.
>
> **[6:51](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=411)** The more examples you give it, the better the accuracy, but it's still around 25% at most.
>
> **[6:56](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=416)** With a 175 billion parameter model, giving it just one example boosts the accuracy up to almost 50%.
>
> **[7:04](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=424)** So if you give it a couple of examples for a new task, the accuracy is more than 60%.
>
> **[7:09](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=429)** Now this is really impressive for a model that hasn't been trained on one specific task.
>
> **[7:14](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=434)** This larger 175 billion parameter GPT-3 model is able to make use of the examples that you give it in a way that the smaller GPT-3 models were not able to.
>
> **[7:25](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=445)** So let's summarize our understanding of GPT-3 in a table so that we can compare it to BERT.
>
> **[7:30](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=450)** One of GPT-3's primary objective was few-shot learning.
>
> **[7:35](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=455)** This performed best on the largest of the GPT-3 models, the 175 parameter model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), finally, (2), this. (1), delete (1)
> **Env Vars:** gpt (10), bert (3)
> **Definitions:** known as (4), is a  (2), is an  (1)
> **CLI Commands:** make (3)
> **Versions:** 1.3 (2)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Chinchilla
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=0)** - [Instructor] Over the years, the trend has been to increase the model size.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=4)** Although we won't look at any of these models in detail.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=7)** I'll mention them briefly now because we'll be comparing them later.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=11)** So Megatron-Turing was released by a collaboration between Microsoft and Nvidia in Jan of 2022 that had 530 billion parameters.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=22)** The Google DeepMind team released details about Gopher, which had 280 billion parameters, and it was one of the best models out there at the time.
>
> **[0:31](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=31)** You can see that the model sizes were getting very large, and this was because of the scaling laws.
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=36)** But what if the scaling laws didn't capture the entire picture?
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=41)** The DeepMind team's hypothesis was that large language models were significantly undertrained.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=47)** You could get much better performance with the same computational budget by training a smaller model for longer.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=54)** Now, the way you would try and test out a hypothesis is to do a whole lot of experiments, and that's exactly what the Google Mind team did.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=62)** They trained several hundred language models.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=64)** They varied the sizes of these models from 70 million to over 16 billion parameters, and then they trained them with different amounts of data from five to 500 billion tokens.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=76)** Based on their hypothesis, they then created and trained Chinchilla, a 70 billion parameter model on 1.4 trillion training tokens.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=85)** Now, one of the key benefits of Chinchilla was that it was a smaller model.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=89)** This meant less compute was required for fine tuning and inference.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=93)** Now, remarkably, the 70 billion parameter Chinchilla outperforms Gopher, which has 280 billion parameters, GPT-3 with its 175 billion parameters, and Megatron-Turing with its 530 billion parameters, on a large range of language tasks.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=111)** Now, let's think back to what we learned about scaling laws.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=114)** One of the key insights in this paper is that if you were training a large language model and you get a tenfold increase in the computational budget, the majority of that should go towards increasing the size of the model and a smaller proportion towards the number of training tokens and training the model for longer.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=132)** The DeepMind team behind the Chinchilla paper confirmed that it was important to scale the model size and the training data as suggested by the scaling laws.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=140)** But unlike the scaling laws, the size of the model did not need to grow faster than the amount of training data.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=147)** So for a tenfold increase in computational budget, the model size and the number of training tokens should be scaled in equal proportion.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=155)** Let's take a look at how they demonstrated this.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=157)** Firstly, you'll notice that both the X-axis and the Y-axis are not linear.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=163)** The X-axis goes up by hundreds and the Y-axis goes up by tens.
>
> **[2:48](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=168)** Now, the reason they've done this is because the quantities that are being measured increase by large amounts, and you'd not be able to show this relationship easily on a graph otherwise.
>
> **[2:56](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=176)** Now, on the X-axis, we have flops, or floating point operations, and these are a measure of computation.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=182)** So the further you go across on the X-axis, the more expensive it is, because you require more computational resources.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=189)** On the Y-axis, we have the number of parameters for the models, so that's the size of the model.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=194)** And as we go up, the models are getting significantly larger.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=198)** So on the graph you can see that we have the GPT-3 model that's represented by the red star, the Gopher model that's represented by the yellow star, the Megatron-Turing model given by the purple star, and finally, the Chinchilla model represented by the green star.
>
> **[3:32](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=212)** Chinchilla outperforms Gopher, GPT-3, and Megatron-Turing.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=218)** This means that it's better at a wide variety of tasks, like reading comprehension and question answering, answering questions on a variety of different topics at high school level from history to chemistry to astronomy.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=230)** Now, what's interesting is that it was trained on the same amount of compute as Gopher.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=234)** Now, I can confirm that because if I draw a vertical line from the green Chinchilla star down all the way down, Gopher would also be on this line.
>
> **[4:02](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=242)** And this means they were trained having around the same amount of compute.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=246)** So the takeaway from this is that Chinchilla is significantly smaller than the other models, and you can see this on the Y-axis, but it was trained having around the same compute, and yet it outperforms them all.
>
> **[4:18](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=258)** Let's take a quick look at the data that the models were trained on.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=261)** While most of the large language models have been trained on around 300 billion tokens, Chinchilla has been trained on 1.4 trillion tokens, which is almost five times as many tokens as the other large language models.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=275)** This then begs the question, are the massive language models that are being trained oversized?
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=280)** So let's say we use the Gopher model as our baseline.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=283)** Remember that the Google DeepMind team released Gopher, which had 280 billion parameters.
>
> **[4:48](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=288)** For their compute budget, the optimal model parameter size should be 67 billion parameters, and the number of training tokens, 1.5 trillion tokens.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=299)** Now, we know that the number of training tokens for Gopher was 280 billion parameters.
>
> **[5:03](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=303)** This means that their training budget should have actually been 17.2 times more, and they would've required 5.9 trillion training tokens.
>
> **[5:13](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=313)** It doesn't mean that you can't train these large models, it's just that these language models have not been trained with enough data.
>
> **[5:21](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=321)** The DeepMind team designed an interesting experiment to compare their findings with the scaling laws.
>
> **[5:26](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=326)** Given a compute budget of a certain number of flops, determine the number of parameters required and how much data is required to train it using the scaling laws prescribed by OpenAI and the ones determined by DeepMind.
>
> **[5:40](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=340)** Whichever language model results in the most performant model is better.
>
> **[5:44](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=344)** Now, the way you can compare and determine which model is better is if you give it a whole load of tests from generating text to question answering to high school questions on a variety of subjects, and you can see which one gets the most correct answers.
>
> **[5:55](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=355)** With the scaling laws from the OpenAI team, the Flops budget recommended a 4.68 billion parameter model.
>
> **[6:02](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=362)** DeepMind's approach recommended a 2.8 billion parameter model.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=367)** So the results from using the Chinchilla paper are in blue, and the results from using the original scaling laws are in orange.
>
> **[6:14](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=374)** The Y-axis is the training loss, so the lower the better.
>
> **[6:17](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=377)** The X-axis represents the number of training tokens.
>
> **[6:22](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=382)** You can see that if we stopped at the number of training tokens recommended by the scaling laws, the orange curve is lower than the blue one, and it would appear that it has a lower training loss, and so it's a better performing model.
>
> **[6:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=393)** However, because the Chinchilla paper recommends that the model needs to be trained on more data, we can see that the blue Chinchilla curve ends up with an overall lower training loss compared to using the scaling laws given in orange.
>
> **[6:47](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=407)** Similarly, if we were to just plot the training loss versus the number of training flops, or floating point operations, in the diagram on the right, you can see that we get a lower loss using the Chinchilla method in blue versus the scaling laws in orange.
>
> **[7:01](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=421)** So it turns out that you can end up with a more performant model using a smaller model with more training data.
>
> **[7:07](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=427)** So let's wrap up the section by adding Chinchilla to our list of models.
>
> **[7:10](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=430)** I'm also going to add Megatron-Turing and Gopher, even though we've looked at them briefly.
>
> **[7:15](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=435)** Our biggest takeaway is that up to this point, large language models are significantly undertrained.
>
> **[7:20](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=440)** And from the table, Chinchilla is trained on more than four times as much data as any other large language model.
>
> **[7:26](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=446)** It's the smallest, but also has the best-performing results.
>
> **[7:30](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=450)** Lessons from Chinchilla have helped me at work.
>
> **[7:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=453)** At a project for a customer, we were looking to train a model from scratch on a European language.
>
> **[7:39](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=459)** We looked at the size of the model and the size of the training data set we had, and quickly realized that we would not get a performance model because we didn't have enough training data.
>
> **[7:48](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=468)** So instead of kicking off a training run, we focused our efforts on getting more training data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (1), require (1), finally, (1)
> **Versions:** 1.4 (2), 1.5 (1), 17.2 (1), 5.9 (1), 4.68 (1)
> **Env Vars:** gpt (3)
> **Best Practices:** recommended (3)
> **Definitions:** means that (2)
> **Analogies:** picture (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### PaLM and PaLM 2
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=0)** - [Instructor] We're finally at one of the largest language models to date.
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=3)** Google released PaLM, or to give it its full name, the Pathways Language Model, in April 2022.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=11)** There are a couple of key takeaways from the PaLM model.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=14)** PaLM is the largest model with 540 billion parameters.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=19)** Google uses the Pathway systems, which meant more hardware accelerators could be used for model training, and they could be trained more efficiently.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=28)** PaLM was trained on an enormous 780 billion tokens multilingual corpus with text from over 100 languages.
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=37)** Now, just over 3/4 of this training data was in English.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=42)** Another really interesting phenomena that the Google team picked up on was on scaling.
>
> **[0:47](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=47)** It looked like the models could only perform certain tasks once a certain scale was reached.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=53)** Here, 8 billion parameter models could perform certain tasks such as question answering, language understanding, and arithmetic.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=60)** It was only when the model was scaled up to 62 billion parameters that more tasks such as translation, summarization, and common sense reasoning were possible.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=70)** But it then required a much bigger jump to 540 billion parameters for the model to be able to perform tasks such as general knowledge, reading comprehension, and joke explanation amongst others.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=83)** PaLM is the best performing model of the lot, outdoing Gopher and Chinchilla on these standard benchmarks that measure natural language understanding and natural language generation tasks.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=95)** Let's add PaLM to our list of models.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=97)** You can see that it's the largest model to date, and although it wasn't trained on as many training tokens as Chinchilla, it performs the best.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=104)** If we take the lessons from the Chinchilla paper, it means that although the PaLM model was trained on 780 billion training tokens, which is more data than the 380 billion that was used for other models, it's likely that it has still been undertrained and could perform better if trained on more data.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=124)** In May of 2023, Google released PaLM 2, which surpassed the capabilities of PaLM.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=129)** Now, because of the increasing competitive nature of the large language model space, Google has not released information on the size of the model nor the amount of data it was trained on.
>
> **[2:19](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=139)** PaLM 2 was trained on more than 100 languages, meaning it's able to understand and generate text that is more nuanced.
>
> **[2:26](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=146)** It has also passed advanced language proficiency exams at the mastery level.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=151)** Scientific papers and pages with mathematical expressions were part of the vast training dataset that was used to train PaLM 2, and as a result, it's even better at logic and common sense reasoning and mathematical tasks compared to the original PaLM model.
>
> **[2:47](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=167)** PaLM 2 was also trained on a large quantity of publicly available programming code.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=171)** This means it's not only excellent at generating code or correcting code in popular modern languages like Python and JavaScript, but it can also generate code in languages like Prologue and Fortran and Verilog.
>
> **[3:03](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=183)** And what's remarkable is that PaLM 2's smallest model will be able to run on mobile devices.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=190)** PaLM 2 will be used to power features in the other Google products like Gmail and Google Docs, and also expand Bard, which is another large language model released by Google.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=200)** One of the other benefits of PaLM 2 is that it's been used to train Med-PaLM 2 that has been trained by Google's Health Research teams.
>
> **[3:28](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=208)** This is the first large language model to perform at expert level on US medical licensing exam-style questions.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=216)** The Google team are adding multimodal capabilities.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=219)** This means you could feed it an X-ray image, and then ask the model to analyze the X-ray image and report on its findings, and then potentially query the model further on the image.
>
> **[3:50](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=230)** Let's add PaLM 2 to our list of models.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=233)** It looks like PaLM 2 is Google's best performing model, and it'll be powering many of its products.

> [!info]- Semantic Content
>
> **Analogies:** such as (3)
> **Code Keywords:** let (2)
> **CLI Commands:** python (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### ChatGPT and GPT-4
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=0)** - [Narrator] ChatGPT launched on the 30th of November 2022 and had 100 million monthly active users two months later.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=10)** But what's the difference between GPT-3, ChatGPT, and GPT-4?
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=16)** GPT-3 could generate text, and we saw earlier that it does a great job of it.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=21)** The only problem is it doesn't follow instructions.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=24)** GPT-3.5 was an upgrade on GPT 3 by allowing language models to better follow instructions using supervised fine-tuning and RLHF or reinforcement learning with human feedback.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=38)** You might remember these terms from the first couple of videos of this course.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=41)** This is when language models try to respond to prompts like human labelers.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=46)** ChatGPT is fine-tuned from GPT 3.5 and was further optimized for dialogue so you could use it like a chatbot.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=55)** ChatGPT can also do other things like helping programmers write programming code.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=59)** GPT-4 was released in March of 2023 and takes things further.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=65)** It's a bigger model than Chat-GPT and can do more complex reasoning and is the best model for complex tasks like cause and effect or logical reasoning at the time of this recording.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=75)** It also achieved human-level performance on many high school advanced placement exams ranging from statistics, and biology to art history, and psychology.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=85)** Earlier we said a language model is something that takes in text input or a prompt and outputs text data.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=93)** Now, it turns out that GPT-4 is multimodal.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=96)** This means it can take in either text or a combination of text and image data and will output text.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=103)** And at the time of this recording, you can only submit text data as input to GPT-4.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=109)** Those of us who use large language models are always curious about the data and the model architecture used to train the model.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=116)** But this time round, OpenAI has decided that they won't share the results.
>
> **[2:01](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=121)** In their GPT-4 paper, they say, given both the competitive landscape and the safety implications of large-scale models like GPT-4, this report contains no further details about the architecture, including model size, hardware, training compute, data set construction, training method, or similar.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=140)** Now, although GPT-4 performs very well, it has some limitations.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=145)** There are at least three areas that need some work.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=148)** Firstly, you can't fine-tune the GPT-4 models, and GPT-4 doesn't update its knowledge in real-time.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=156)** It was trained with data up to September of 2021, so it has no knowledge of anything that has happened since.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=163)** And finally, sometimes it makes up facts.
>
> **[2:46](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=166)** Now if a model like GPT-4 performs so well, why would you want to fine-tune these models?
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=172)** Well, let's say you were working in a very niche area like the latest research on seaweed biology, and writing academic papers.
>
> **[2:59](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=179)** It's likely that the GPT-4 model hasn't been trained on academic papers in this space as it's so unique.
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=186)** So, there'll be terms that are unique to these academic papers that the GPT-4 model will have no context for.
>
> **[3:13](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=193)** Fine-tuning a model with these kind of academic papers is likely to lead to a better-performing model if you have some other NLP tasks like text classification.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=202)** The only problem is that although the GPT-4 models are very capable, they can't be fine-tuned as of the time of this recording.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=210)** So, if you want to fine-tune a model on this specific dataset, then you'll need to use the original GPT-3 model.
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=217)** Let me show you two other limitations, while I still have the OpenAI Playground open.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=222)** Now, I don't know what output this GPT-4 model is going to generate, but I'd like it to write a catchy introduction to the topics I'm covering in this course.
>
> **[3:52](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=232)** So, let me go ahead and just use some of the topics I'll be covering as input.
>
> **[3:57](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=237)** So, this is my prompt.
>
> **[3:58](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=238)** These are the topics I'm covering in an introduction to the large language models course.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=243)** Write a catchy introduction.
>
> **[4:05](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=245)** So, what are large language models?
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=248)** GPT-4, limitations of GPT-4, and HELM.
>
> **[4:12](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=252)** Now, although the output that's been generated is very impressive, there are a couple of problems here.
>
> **[4:17](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=257)** If I scroll down to the bottom, and let's look at this section here.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=260)** So GPT-4 generates, besides GPT-4, we'll also delve into some exciting new entrants in the field like HELM.
>
> **[4:29](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=269)** This makes it sound like HELM is another large language model.
>
> **[4:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=273)** In fact, HELM stands for the Holistic Evaluation of Language Models, and it's a benchmark to allow you to compare language models.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=281)** Now, since the HELM benchmark was released at the end of 2022, this means that GPT-4 doesn't have any knowledge of it.
>
> **[4:50](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=290)** There is a workaround where OpenAI have released plugins which allow you to reach third-party information sources, including the internet.
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=299)** All right, so we've seen that we cannot fine-tune the GPT-4 models, it doesn't update its knowledge in real-time, so it was trained on data up till September 2021, and it has no knowledge of anything that has happened since, and it sometimes makes up facts.
>
> **[5:14](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=314)** Go ahead to the OpenAI Playground and try out GPT-4, and ask questions about a topic that you're reasonably skilled in, and then have a dialogue and see how good the GPT-4 model is.
>
> **[5:25](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=325)** I think you'll find the results are very impressive.
>
> **[5:27](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=327)** Now, let's go ahead and add Chat-GPT and GPT-4 to our table comparing the large language models.
>
> **[5:34](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=334)** Chat-GPT was incredibly popular as soon as it was released.
>
> **[5:38](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=338)** GPT-4 has human-level performance on various exams, and is the best performing model at the time of this recording.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (33), helm (5), rlhf (1), nlp (1)
> **Code Keywords:** let (5), finally, (1), for. (1)
> **Versions:** 3.5 (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Open LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=0)** - [Narrator] We've looked at models that have all come from big tech firms like Google and OpenAI.
>
> **[0:06](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=6)** But what about open community models?
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=8)** Now, although OpenAI made GPT-3 available via an API or the Playground, which is what we've seen so far, no access was given to the actual weight of the model.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=18)** So if you had access to the weight of the model, you can tweak and experiment with the model to create new variations that might be better suited for a specific task.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=26)** For example, you can try and create smaller versions of the model.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=30)** Meta released OPT or Open Pre-trained Transformers.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=34)** This is a couple of decode-only pre-trained transformers ranging from 125 million to 66 billion parameters which they shared with anyone.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=44)** And interested researchers could also apply for access to the 175 billion parameter models.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=52)** This effectively gave researchers access to a large language model that was very similar to GPT-3.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=59)** The Meta team also detailed the infrastructure challenges they faced, along with providing code for experimenting with the models.
>
> **[1:06](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=66)** This model was primarily trained on English text.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=70)** A couple of months later, Hugging Face, which is a company that provides a machine learning platform to store models, think of it like GitHub for models, well, their research team received a grant for computing resources from the French Government allowing them to train the BLOOM model.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=86)** Working together with a volunteer team of over 1,000 researchers from different countries and institutions, they created a 176 billion parameter model called BLOOM.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=98)** This team has made everything openly available from the dataset used for training to anyone being able to download and run this model.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=107)** This allows other organizations outside of big tech to experiment with these models.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=112)** Now, even if you want to run these models, you still need access to expensive hardware accelerators.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=118)** Now, despite all this collaboration, the performance of these models was still lagging behind the likes of the OpenAI models.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=124)** This is probably because given this is a new field, not many engineers have this skills and experience working with hundreds of hardware accelerators in parallel and the associated problems.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=136)** The majority of the engineers working for big tech companies like Google and OpenAI and Meta have had a couple of years headstart on others.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=144)** In February of 2023, Meta released the LLaMA models which are 7, 13, 30, and 65 billion with a license only allowing them to be used for research and non-commercial purposes.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=157)** Given the excellent performance of these models on various open benchmarks, they quickly became the most popular open language models thus far.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=165)** The weights for these models were available to the research community, but they were quickly leaked.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=170)** Some researchers extended the LLaMA model capability by instruction tuning.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=174)** Others tried training it on non-English data.
>
> **[2:57](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=177)** This visual gives you an idea of how impactful LLaMA has been to the open community.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=182)** Up to this point, we knew from the OpenAI research that training models with instructions significantly improves their performance, but OpenAI didn't release the dataset allowing others to try this out.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=194)** Because of the excellent model performance of LLaMA, it's been used to provide the language component for many multimodal models.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=201)** These are models that can take in different inputs, for example, text or images and output either text or images.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=207)** Over on the left, the LLaMA models were trained with Chinese data, providing a variety of different Chinese models trained on data for different industries like finance and law and education and medicine.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=219)** I think one of the reasons that LLaMA was more widely adopted than say Meta's Open Pre-trained model is because it's much smaller and so more readily accessible to anyone 'cause you can easily run the smaller models on a single hardware accelerator like a GPU.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=235)** This is the open large language model leaderboard available from the Hugging Face website.
>
> **[4:00](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=240)** Let me just scroll down so that you can get a better look at some of the models.
>
> **[4:03](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=243)** So this compares open large language models.
>
> **[4:06](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=246)** In July of 2023, Meta released LLaMA 2.
>
> **[4:10](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=250)** So this had a context length of 4,000 tokens and was trained on a whopping two trillion tokens.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=256)** Now what was remarkable was that less than a week after Meta released this model, teams in the open community produced better performing models.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=265)** So for example, you can see at the top of the leaderboard the Stable Beluga 2, which is a model from Stability AI.
>
> **[4:32](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=272)** At the time of this recording, derivatives of LLaMA 2 are the best open models out there.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=277)** It's also worth noting that LLaMA 2 isn't fully open.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=281)** Meta didn't release the training data.
>
> **[4:43](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=283)** Meta also requires companies with over 700 million monthly users to ask Meta's permission before using this model.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=291)** This affects a handful of fellow tech giants like Google.
>
> **[4:55](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=295)** Now, why would Meta be willing to make all their models openly available?
>
> **[4:59](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=299)** It would cost millions of US dollars in compute and data requirements to train such models.
>
> **[5:04](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=304)** And one of the challenges with AI models is safety and how they're used.
>
> **[5:07](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=307)** By making the models openly available, Meta can learn how the models are being used and this allows them to make their own products which would use some of these models more safe.
>
> **[5:17](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=317)** Open models have got smaller and better over the years closing the gap with closed models such as ChatGPT.
>
> **[5:24](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=324)** So let's go ahead and add LLaMA 2 to our table comparing large language models.
>
> **[5:28](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=328)** What's unique is that all of the LLaMA 2 models were trained on two trillion tokens and it's the first set of open models that is comparable in performance to ChatGPT.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (2), bloom (2), api (1), opt (1), gpu (1)
> **Analogies:** for example (3), similar to (1), think of it like (1), such as (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Code Keywords:** let (2)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Comparing LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=0)** - [Instructor] How do we even compare large language models?
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=3)** That's a great question.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=4)** I don't think we have a perfect answer yet, but we have made great progress over the last few months.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=11)** Usually, we only focus on how good a model is at a task, but we don't know if that same model generates false information.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=18)** So instead of just looking at one metric, a Stanford University research team proposed HELM, or the Holistic Evaluation of Language Models.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=28)** With HELM, the Stanford research team worked together with the main large language model providers, and they were able to benchmark the models across a variety of data sets and get a more holistic view of model performance.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=41)** The HELM benchmark is a living benchmark and should change as new models are released.
>
> **[0:46](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=46)** I'll just cover the first couple of benchmarks and you can explore the rest further if you're interested.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=50)** So let me just go ahead and scroll down a little bit.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=53)** So here, each row corresponds to a different language model that has been tested, and each of the columns correspond to different benchmarks for different tasks.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=64)** You can hover over each of the benchmarks.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=68)** So for example, you can see that this is MMLU, or the Massive Multitask Language Understanding benchmark.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=75)** And over at the right, you've got the CNN and Daily benchmark, which is used for text summarization.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=81)** Now, if you look at accuracy, the text DaVinci 2 and 3 models, which are OpenAI GPT-3.5 models have some of the best overall results across all of the data sets.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=93)** GPT-4, which is released in March of 2023, doesn't feature in the helm dataset yet.
>
> **[1:40](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=100)** The robustness of models here is the worst case performance of the model.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=104)** So how does it perform when you send a text with typos or misspellings?
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=110)** And you can see there's some correlation here.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=112)** Typically, models that have a high accuracy will be more robust.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=116)** And again, we can see that the OpenAI models have high scores for this.
>
> **[2:00](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=120)** Head over to the HELM website and dig into some of the other benchmarks like fairness and efficiency, bias, and so on.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=127)** Because this benchmark is updated periodically, there might be some changes to what I've shown you here.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=133)** It's important to note that HELM does have some limitations.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=136)** For example, users don't know if they can easily fine tune a model for their use case.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=141)** Other important considerations like the price of models and the latency when using these models is not measured, and also the availability of the model to users.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=150)** Meaning is the platform available most of the time?
>
> **[2:33](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=153)** Let's now compare open language models.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=156)** Hugging face offers an open large language model leaderboard that we've seen earlier that allows you to compare open source large language models.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=164)** Like HELM, the models are evaluated on a couple of different benchmarks.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=169)** ARC are reasoning challenges for a set of grade school science questions.
>
> **[2:54](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=174)** HellaSwag, which is a test of common sense inference, which is easy for humans, but challenging for state-of-the-art models.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=181)** MMLU, which measures a text model's multitask accuracy.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=185)** So this covers 57 tasks across elementary mathematics, US history, computer science, law, and loads more.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=192)** And finally, TruthfulQA, which is a test to measure how likely a model is to reproduce falsehoods commonly found online.
>
> **[3:21](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=201)** And as you can see, llama-2 and its derivatives are currently at the top of the leaderboard.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=207)** Alright, so we've seen that comparing large language models is tricky, but one way to compare them is to use a benchmark like HELM.

> [!info]- Semantic Content
>
> **Env Vars:** helm (7), mmlu (2), gpt (2), cnn (1), arc (1)
> **Code Keywords:** let (2), this. (1), case. (1), finally, (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **Versions:** 3.5 (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### GitHub Models: Comparing LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=1)** - [Instructor] Imagine asking two teachers to explain the same mathematics problem to a class.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=5)** Now, each of them might have a different approach to solving the problem, and it's like that with large language models.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=10)** You can provide the same text or prompt and get a different response from the large language model.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=15)** GitHub Models lets us easily compare two large language models.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=19)** You need a GitHub account, and you can sign up for one by going to [github.com](https://github.com).
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=24)** And once you have an account, head over to [github.com/marketplace](https://github.com/marketplace).
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=29)** And here you can just select Models over on the left, and then you can select models based on the different providers, their capability, and then their functionality, so things like whether you need a model that has low latency, whether you want a model that can handle multiple languages, and so on.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=51)** Now the OpenAI models in general are pretty good, so I'm going to use the GPT-4o mini as my benchmark, and I want to compare this to one of these smaller models.
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=61)** And so let's pick one from the Low latency list.
>
> **[1:05](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=65)** So I'm going to go ahead and pick the Phi-3.5-mini instruct.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=71)** I'm going to select Playground, and then I want to go ahead and compare this to the GPT-4o mini model.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=79)** So let me go ahead and select that.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=85)** Now, this is the task.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=87)** I want to get the models to explain a joke.
>
> **[1:29](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=89)** Now this isn't as trivial as it sounds because it's checking the model's capability to work with nuances of the English language.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=97)** So here's the joke.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=101)** I was going to fly to visit my family on May the 3rd, and my mom said, "Oh, great, your dad's poetry reading is that night."
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=107)** So now I'm flying in on May the 4th.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=110)** Now I've intentionally included the reference to May the 4th to see if I can trick some of the language models to see if there's a "Star Wars" reference.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=117)** The explanation of this joke or this word play is that this person doesn't want to attend their dad's poetry reading.
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=124)** So let's go ahead and see how the different models explain this.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=133)** Go ahead and pause the video here and compare the different outputs from the two models.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=137)** After reading them, I think you'll agree with me that the GPT-4o mini produces the best results.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=145)** Now remember this illustration is only comparing the models for a single task.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=148)** You'll want to be comparing models on hundreds and thousands of tasks to see which one performs the best for your business needs.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=155)** Ultimately, you are the best judge for which model works best for your business and your situation.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=162)** All right, so we've seen that GitHub Models is a great way to prototype with large language models, letting you easily work with and compare large language models from different providers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), class. (1), this. (1)
> **Tools:** github (5)
> **Analogies:** compare this to (2), imagine (1), it's like (1)
> **Env Vars:** gpt (3)
> **URLs:** [github.com](https://github.com) (2)
> **Versions:** 3.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Accessing large language models using an API
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=0)** - [Instructor] Now, in the previous video, we looked at comparing large language models using GitHub models.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=5)** Now in this one we looked to see how we can access the large language models via an API using a programming language like Python.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=14)** Now I prefer GitHub Codespaces for prototyping any apps.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=18)** It's a cloud-based coding environment and you can access it from any device.
>
> **[0:22](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=22)** And what I like about it is I don't waste any time with setting things up.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=26)** I'm going to demonstrate the step-by-step process for setting up a GitHub repo and using Codespaces to work with GitHub models.
>
> **[0:35](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=35)** You can also go directly to the course GitHub repo to see the configuration already in place.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=41)** I've also included the coding files in the repo for you.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=45)** So let's kick things off with creating a GitHub repo.
>
> **[0:49](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=49)** So I'm going to head over to [github.com](https://github.com), and this is my GitHub repo.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=55)** And I'm going to head over to the top and select, create a new repository.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=63)** And I'm going to call this repository joke.
>
> **[1:10](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=70)** I'm going to leave it as public.
>
> **[1:12](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=72)** And because this is going to be in Python, I'm going to add a Python .gitignore template.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=83)** This is kind of standard to whatever I do for creating any new repository.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=87)** And then I'm going to go ahead and select Create repository.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=92)** So now that we've got the repository set up, let's head over to GitHub Codespaces.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=99)** So I'm now at [github.com/codespaces](https://github.com/codespaces), and I'm going to go ahead and select a new codespace.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=107)** And this is where I'm going to select the repository that I just created, and I can see it over here.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=114)** So it's jonfernandes/joke.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=117)** I'm going to leave everything else as is, and I'm going to go ahead and select Create codespace.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=127)** And I'm just going to go ahead and ignore this walkthrough.
>
> **[2:10](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=130)** And so I'm just going to go ahead and close this window.
>
> **[2:15](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=135)** Now, in the previous video, we found that the GPT‑4o mini model was the better of the two at explaining jokes.
>
> **[2:23](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=143)** So let's head back to GitHub Marketplace.
>
> **[2:27](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=147)** So I'm going to head over to [github.com/marketplace](https://github.com/marketplace).
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=151)** I'm going to go ahead and select Models, and I'm going to go ahead and select the GPT‑4o mini model.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=160)** So let me go ahead and enter the joke that needs to be explained.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=165)** And let's send this off to the GPT‑4o mini model.
>
> **[2:52](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=172)** And you can see that I've got the response back from the model.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=175)** So now I'm going to head over to the Code tab.
>
> **[3:01](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=181)** And what I'm going to want to do is I'm selecting Python as my language, and I want to go ahead and copy all of this code.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=189)** And you'll notice that the first thing that you do here is to install OpenAI.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=194)** So you need to install the OpenAI Python package.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=197)** So I'm going to go ahead and copy this and head back to Codespaces.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=207)** So let me go ahead and create a new file.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=210)** And so I'm going to create this file and I'm going to call it joke.py, and let me paste the details that I picked up from the marketplace.
>
> **[3:46](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=226)** And the first thing I'll need to do, as you can see over at the top, is to do a pip install openai.
>
> **[3:51](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=231)** So pip install openai.
>
> **[3:54](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=234)** Now I'm going to go ahead and install the OpenAI Python package.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=239)** And this will allow me to access the OpenAI large language model via Python.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=251)** Now let me just make a little bit of space for myself, and let me just bump the font up a little bit, and I'm going to go ahead and clear my screen.
>
> **[4:22](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=262)** And now I'm going to go ahead and run this file.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=267)** So python joke.py.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=277)** And you can see that the output I get is the capital of France is Paris, because that's the response back from the user.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=286)** So what I'll actually want as the output here or the input from the user is going to be explain the joke.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=293)** So if I head back to the GitHub Marketplace and head back to the Chat, and I'm going to select explain this joke, I can then replace this content, which is the default that you'll get, with the explain this joke.
>
> **[5:18](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=318)** And because I've got a couple of single and double quotes, I'm going to use triple quotes so that there's no confusion.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=335)** And let me just go ahead and format this a little bit.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=350)** And now if I go ahead and rerun this,
>
> **[6:01](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=361)** I get the explanation of this joke from the large language model.
>
> **[6:07](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=367)** So as you can see, I've now been able to access the GPT‑4o mini model using Python.
>
> **[6:13](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=373)** All right, so in this video we've looked at how we can access large language models via an API using a programming language like Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), pip (2), make (1)
> **Tools:** github (13)
> **Code Keywords:** let (10), public (1), this, (1)
> **Env Vars:** gpt (4), api (2)
> **Prerequisites:** install (5), set up (1)
> **Exercise Files:** github repo (4), template (1)
> **URLs:** [github.com](https://github.com) (3)
> **File Paths:** joke.py (2)

#### LLM trends
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=0)** - [Instructor] Over this course, we've looked at scaling laws and lessons from the Chinchilla models.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=4)** Let's bring this all together as we look at the current trends for large language models.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=10)** When training of large language models first kicked off, most of the focus was on improving the models, and then the scaling laws were the guiding principle.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=18)** And the scaling laws suggested that you would get the biggest improvement by increasing the size of the models.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=23)** So you do this by increasing the model's architecture, so that's the number of layers in a model, the number of attention heads, and so on.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=30)** But that was only one dimension, because as model providers created large models, the associated training cost became an important consideration.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=40)** So the second important dimension became training cost, because being able to train a model effectively, given a budget, was important.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=48)** And the learnings from the Chinchilla paper earlier in the course suggested that large language models were being undertrained.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=54)** They also answered the question, given a training budget, how can we create an optimal model size?
>
> **[1:01](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=61)** So far, the focus has been on training the model, but one thing we haven't talked about is what's involved in running a model.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=68)** Now this is known as inference, and there are two important and very different trends around inference.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=74)** One is, how can we reduce the cost of running these models?
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=78)** Now, one way to do this is to create smaller models that are very performant.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=82)** So these are small models that are trained from scratch on large data sets.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=87)** Now, because these are smaller models, this means they require less memory to run, and so we can potentially run them using fewer hardware accelerators.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=95)** Smaller models can also run on local devices.
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=98)** Now the big advantage here is privacy, as all the interactions with the language model takes place on your device.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=105)** The other important consideration is how can we improve the quality of these models?
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=110)** You see, at this point, models have been trained primarily on the majority of publicly available data.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=116)** The return from training bigger models with more data and compute is plateauing, and model providers are looking for the next big breakthrough in AI training.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=126)** Major AI model providers are exploring alternatives.
>
> **[2:09](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=129)** So there's a focus on test time compute, which allow models more time to reason during the inference stage.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=137)** An example of this test time compute is the o1 model from OpenAI.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=142)** The model uses these reasoning tokens to break down their understanding of the prompt and consider multiple approaches to generating a response.
>
> **[2:30](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=150)** Now what you see here is an example of this multi-step conversation between a user and the model.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=155)** And you can see that the input tokens from the user and the output tokens from the model are carried over while the reasoning tokens are discarded.
>
> **[2:43](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=163)** Now, we currently don't get to see the reasoning tokens, and that's because that's some of the secret source that's happening under the hood for these models.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=171)** So far, results from these test time compute models that work during inference time have extraordinary results.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=178)** The OpenAI team put the o1 model to the test on a GPQA diamond, which is a really tough benchmark that really digs into subjects like chemistry and physics and biology.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=191)** Now to see how it stacks up against humans, they brought in some PhD experts to tackle the same questions.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=197)** And guess what?
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=198)** o1 did better than those experts, making it the first model to pull this off on this benchmark.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=204)** Now, just to clarify though, this doesn't mean o1 is smarter than a PhD overall, it just shows it's better at solving certain problems that we'd usually expect a PhD to handle.
>
> **[3:36](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=216)** All right, so we started off with the scaling laws as the one dimension to improve model performance.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=222)** The Chinchilla paper showed this second dimension, the benefit of scaling both the model size and the data it was trained on.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=229)** We now have this third dimension where there's a focus on inference.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=233)** One is to reduce the cost of inference time by running smaller and more capable models, and the other is the improved performance by completing additional processing during inference time when running these models.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Code Keywords:** let (1), require (1)
> **Env Vars:** gpqa (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Going further with large language models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=0)** - [Instructor] If you haven't had enough about large language models and you want to understand what's happening under the hood, then check out my other course, which is available on LinkedIn Learning, titled Transformers: Text Classification for NLP using BERT.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=14)** If you want to get the latest information on generative AI, you're welcome to connect with me on LinkedIn.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=19)** The race for widespread AI adoption is on.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=23)** Stay tuned.
>
> **[0:24](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=24)** This space is only going to get more interesting.

> [!info]- Semantic Content
>
> **Env Vars:** nlp (1), bert (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Building Generative AI Skills for Developers]]
← [[Generative AI vs. Traditional AI]] | **2 of 7** | [[Generative AI- Working with Large Language Models]] →

### In [[Develop Your Skills with Large Language Models]]
**1 of 9** | [[Generative AI- Introduction to Large Language Models]] →

### In [[Building AI Literacy]]
← [[Prompt Engineering- How to Talk to the AIs]] | **5 of 7** | [[Your Top Ai Questions Answered Ai Literacy For Everyone]] →

## Appears In

- [[Building Generative AI Skills for Developers]]
- [[Develop Your Skills with Large Language Models]]
- [[Building AI Literacy]]

## Related Courses

_Courses sharing skills:_

- [[LLM Foundations- Building Effective Applications for Enterprises]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[LLMOps in Practice- A Deep Dive]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), Large Language Models (LLM)
- [[Advanced Gemini for Developers]] — Artificial Intelligence (AI), Large Language Models (LLM)
