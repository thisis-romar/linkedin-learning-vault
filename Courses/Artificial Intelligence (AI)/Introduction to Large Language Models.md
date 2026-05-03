---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
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
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGize-99tNZlw/learning-public-crop_675_1200/B4DZWV8iVKGkAY-/0/1741977430144?e=2147483647&amp;v=beta&amp;t=ACLwhEwhziBZOyMSYJ448R9MQ7oBeJgYn7BtMLc0j4c"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Developers]]'
  - '[[Develop Your Skills with Large Language Models]]'
  - '[[Building AI Literacy]]'
prev_courses:
  - '[[Generative AI vs. Traditional AI]]'
  - null
  - '[[Prompt Engineering- How to Talk to the AIs]]'
next_courses:
  - '[[Generative AI- Working with Large Language Models]]'
  - '[[Generative AI- Introduction to Large Language Models]]'
  - '[[Your Top Ai Questions Answered Ai Literacy For Everyone]]'
path_nav: '[{"path":"Building Generative AI Skills for Developers","position":2,"total":7,"prev":"Generative AI vs. Traditional AI","next":"Generative AI- Working with Large Language Models"},{"path":"Develop Your Skills with Large Language Models","position":1,"total":9,"prev":null,"next":"Generative AI- Introduction to Large Language Models"},{"path":"Building AI Literacy","position":5,"total":7,"prev":"Prompt Engineering- How to Talk to the AIs","next":"Your Top Ai Questions Answered Ai Literacy For Everyone"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Large%20Language%20Models.md)

![Introduction to Large Language Models](https://media.licdn.com/dms/image/v2/D4D0DAQGize-99tNZlw/learning-public-crop_675_1200/B4DZWV8iVKGkAY-/0/1741977430144?e=2147483647&amp;v=beta&amp;t=ACLwhEwhziBZOyMSYJ448R9MQ7oBeJgYn7BtMLc0j4c)

# Introduction to Large Language Models

> Large language models (LLMs) have taken the AI world by storm. LLMs are behind some of the biggest AI technologies over the last few years, like ChatGPT and GPT-4. In this course, Jonathan Fernandes provides an overview of LLMs suitable for technical learners and non-technical learners alike. Jonathan shows you what LLMs are and what you can do with them, and takes a look under the hood so you can

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-large-language-models) | 1h 17m | Intermediate | 104K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The impact and functionality of large language models](#the-impact-and-functionality-of-large-language-models)
- [**1. Transformers in NLP**](#1-transformers-in-nlp) (3 videos)
  - [What are large language models?](#what-are-large-language-models)
  - [How are large language models trained? Pre-training](#how-are-large-language-models-trained-pre-training)
  - [Making large language models follow instructions](#making-large-language-models-follow-instructions)
- [**2. Large Language Model Components**](#2-large-language-model-components) (4 videos)
  - [Transformer architecture](#transformer-architecture)
  - [What are parameters](#what-are-parameters)
  - [What are tokens?](#what-are-tokens)
  - [What are context lengths?](#what-are-context-lengths)
- [**3. Large Language Models**](#3-large-language-models) (11 videos)
  - [BERT](#bert)
  - [Scaling laws](#scaling-laws)
  - [GPT-3](#gpt-3)
  - [Chinchilla](#chinchilla)
  - [PaLM and PaLM 2](#palm-and-palm-2)
  - [ChatGPT and GPT-4](#chatgpt-and-gpt-4)
  - [Open LLMs](#open-llms)
  - [Comparing LLMs](#comparing-llms)
  - [GitHub Models: Comparing LLMs](#github-models-comparing-llms)
  - [Accessing large language models using an API](#accessing-large-language-models-using-an-api)
  - [LLM trends](#llm-trends)
- [**Conclusion**](#conclusion) (1 videos)
  - [Going further with large language models](#going-further-with-large-language-models)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The impact and functionality of large language models](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/the-impact-and-functionality-of-large-language-models?u=76281980&t=0)** - [Jonathan] If you're looking to be able to think critically about [[Large Language Models (LLM)|large language models]], comparing them and understanding why they work the way they do and how this affects you and your work, then this course is for you. Hi, I'm Jonathan Fernandes, and I work with large language models every day. Join me to take a look at how we ended up where we are today with large language models, including looking at models such as BERT, GPT-3 and [[GPT-4]], and [[LLaMA]] 2. Let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (3), [[GPT-4]] (1), [[LLaMA]] (1)
> **Env Vars:** gpt (2), bert (1)
> **Analogies:** such as (1)
> **Speakers:** - [jonathan] (1)


### 1. Transformers in NLP

[↑ Back to Table of Contents](#table-of-contents)

#### [What are large language models?](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=0)** - [Instructor] Recently, [[GPT-4]] and [[ChatGPT]] have become popular buzzwords. They're both [[Large Language Models (LLM)|large language models]] and are basically a type of AI that can understand and produce human-like text. They can be used to do things like answer questions or generate content, summarize text, explain things, and generate dialogue. And we see large language models used in everyday tools like chatbots and virtual assistants and language translators. But things kicked off in [[Natural Language Processing (NLP)|natural language processing]] long before we had GPT and ChatGPT. In 2017, a type of AI model architecture called Transformers was proposed by a team of researchers at [[Google]] in a paper called "Attention is All You Need." All large language models use components of transformers as part of their architecture. So how do large language models work? Well, we can interact with them with plain English text, often called a prompt, and the large language model will respond with text known as the completion or the output. Now, sometimes you won't get the output you expect so you can change the prompt and you might get another and hopefully better answer. Now, let me illustrate, working with a large language model, with a simple example. You're trying to figure out which book to read your six year old son. So this is the children's book, "The Adventures of Pinocchio." Now, you don't know whether he'd like it so you take the first three chapters, because you don't want to spoil the whole story, and ask a language model to summarize it. And then based on this summary, he can decide if this book sounds interesting. So let me go ahead and grab the first three chapters. I'm going to copy that,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-large-language-models?u=76281980&t=93)** and let's head over to a large language model and let's ask the large language model to summarize the first three chapters. So I'm now in Open AI's Playground. Open AI are a large language model provider and I'm going to use one of their best known language models called GPT-4 to summarize these first three chapters. So, I've provided as input, "Summarize the following text in five sentences" and I'm going to paste the first three chapters. I'm going to head over to Submit, and let's see the response back from the large language model. The large language model, GPT-4, does a terrific job of summarizing the first three chapters. It starts off with "Carpenter Mastro Cherry finds a piece of wood that reacts when he prepares to carve it into a table leg, emitting a voice that seems to besiege him not to hit so hard. He eventually dismisses this, attributing it to his imagination playing tricks on him. Later, Geppetto, a friend of Mastro Cherry arrives..." and so on. And you can see that that's starting to look like a really good summary of the first three chapters. All right, so we've looked at what large language models are and that you can interact with them by providing a prompt as input, and that they're trained on large amounts of data which is why they return intelligent sounding text. Now go ahead and try out GBT-4 in the Open AI Playground and ask it some questions. So ask it to explain something and see how good it is.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (5), [[GPT-4]] (3), [[ChatGPT]] (2), [[Natural Language Processing (NLP)|Natural language processing]] (1), [[Google]] (1)
> **Env Vars:** gpt (4), gbt (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [How are large language models trained? Pre-training](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=0)** - [Instructor] We've seen an example of a large language model at work and the results are pretty impressive. But how do you go about training a large language model? And that's what we're going to look at in this video. Initially, the language model has random weights, and at this point, the model has no knowledge of language. Now, if you were to prompt it, it would just return gibberish. But if you train the model and pass it a large corpus of data, it adjusts these weights as part of the training process. And this pre-training stage is very resource heavy. So you need lots of data, and this includes a variety of different types of data like books and articles and websites. Let me give you an example. [[LLaMA]] was a group of language models that were released in 2023 by Meta. And this is a data mixture of Meta used for pre-training. So Common Crawl and C4 are web scripts of the internet that have been cleaned and filtered. [[GitHub]] data is programming code like [[Python (Programming Language)|Python]] or [[JavaScript]]. This is code that has been released under certain licenses like the Apache license giving you the permission to reuse the code for nearly any purpose. And Wikipedia is the well-known online encyclopedia. Books is a collection of open books. So this includes freely accessible to everyone like the Project Gutenberg books library. Archive are scientific articles and papers, and Stack Exchange is a network of websites with questions and answers across different topics. Now, a proportion of each of these data sets is sampled given by the different percentages when training on the data. So the epochs give you an idea of how many times the language model saw this data while training. For example, with the Common Crawl, the language model saw all of the sample data 1.1 times, it saw the C4 sample data 1.06 times and so on.
>
> **[1:37](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=97)** Now, you'll also need a lot of compute. This is processing capability in these massive server rooms where you have several hundreds to thousands of [[Hardware]] accelerators and servers that you'll use for a couple of weeks or months that works through the training data. So these hardware accelerators are usually Nvidia's GPUs or graphical processing units. These are like CPUs that you'll find in a computer. Their function is to run a lot of the language model training tasks in parallel. Now, a training run usually costs a couple of million US dollars, and what you'll end up with is something like open AI's original GPT3 model called Da Vinci. Let's take a look. So here I am in the OpenAI playground, and let's try and use this GPT3 model as an assistant. Now, I'm going to write the prompt, write a shopping list. I have no idea what the output will be because it's probably seen thousands of sentences that start, write a shopping list, and it could generate anything that's related. Now, what's really impressive is that you can see that after all the training the language model has gone through, it can generate English sentences that make sense. Unfortunately, it's not particularly helpful, right? What I was hoping for is that it would provide me a list of items, one on each line. Instead, what I've got is, "Make sure you always use an app on the phone, so you don't have to write down all of the information," and so on. So let's see if I can try and trick the model into generating what I want by rephrasing my prompt. So here is a shopping list. And let me go ahead and use a colon at the end of that. And let's see what output we get.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-large-language-models/how-are-large-language-models-trained-pre-training?u=76281980&t=194)** Now, this isn't much good either, so what I've got generated from the model is, "Current contracts with the following teams, Carnegie Hall and New York Philharmonic. The Pops appear at Carnegie Hall every season," and so on. Now, since this hasn't worked, let me go ahead and try and give the model an example of what I'm looking for. So this is a shopping list of only fruit, and I'm going to list apples, oranges, and grapes. This is a shopping list of only vegetables, and I'm going to leave the large language model to complete the [[Representational State Transfer (REST)|rest]], and I'm hoping that it's going to give me a list of vegetables. So let's see what output we get. And you can see that the large language model has been reasonably successful. It's only listed me one vegetable. It's a carrot. But it's then gone ahead and said, "This is a shopping list of only meat," and it's listed me with chicken. So the language model starts off well, but then it seems to lose the plot and it generates some other text. All right, so we've seen that the pre-training step is a very compute heavy and expensive process including a lot of hardware and data. And what we get at the end of this is a model that's good at generating and completing sentences, but it isn't great at following our instructions. So if we want to be able to use language models as virtual assistants, we will need something that follows our instructions. And so we look at how to do this next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[LLaMA]] (1), [[GitHub]] (1), [[Python (Programming Language)|Python]] (1), [[JavaScript]] (1)
> **Definitions:** is a  (9)
> **CLI Commands:** make (2), python (1), apache (1), find (1)
> **Env Vars:** gpt3 (2)
> **Versions:** 1.1 (1), 1.06 (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Making large language models follow instructions](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=0)** - [Instructor] We've seen the problems with just a base large language model. It just doesn't follow our instructions to create a shopping list out of the box. So how do we go about creating a large language model that will follow instructions we give it? In 2022, the Open AI team released a paper called "Training Language Models to Follow Instructions with Human Feedback," which is still the industry standard. There are two components to this training, supervised fine-tuning, and RLHF, or [[Reinforcement Learning]] from human feedback. Let's head over to the paper and take a look at the supervised training in the diagram on the left. The Open AI research team would create a prompt, for example, "Explain the moon landing to a six-year-old," and then a labeler, so that's a person who's skilled with working with text data, would then write out what the model should produce as output. So for example, they may include details like it took place in 1969, the spaceship used was Apollo 11, and two American astronauts, Neil Armstrong and Buzz Aldrin, became the first human beings to walk on the moon. They would typically have tens of thousands of such questions, and after this, researchers will typically fine-tune a model. Now, what they mean by fine-tuning is that they would pass both the prompt and the expected output from the label of each prompt to the large language model, and train it. This means after some training for a given prompt, the large language model gets better at producing output that resembles what a labeler would have written. So that's what's known as the supervised training part.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=93)** So let's move on to RLHF. Let's say there's another task, for example, "Summarize the following news article." Now, let's say the news article is about research on parrots and the sounds they make. They would get this fine-tuned model to generate five different summary outputs of the news article. The labelers would then rate each of the five summaries, rating them between one and seven, using an interface like this. Often researchers also want to make sure that the models follow instructions and do not generate toxic content or fabricate information, so the labelers had to give yes no answers to questions that address this, over on the right. The labelers also answered questions like, did this model fail to follow the task, and did the output contain inappropriate content, and so on. And they ended up with a ranking of the five different summary articles that looked something like this. This is the labeling interface where the bottom three boxes are the summary of news articles on parrots that they've already ranked, and the top two are the ones that the labeler will work on next. We're now in the middle at step two. So this ranking of the articles is used to train another model called the reward model. Now the reward model takes this input, the rankings from the five or so text generations from the model, and returns a number. Now, this number represents the labeler's preference. This reward model could be fine-tuned to take an input ranked text, and output a number that indicates how well the labelers perceived it. The final step over on the the right was to use reinforcement learning to optimize the original language model using the reward model.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-large-language-models/making-large-language-models-follow-instructions?u=76281980&t=185)** So if the model generates a text that follows the task intent and is not untruthful or toxic, it's rewarded. And that's the crux of reinforcement learning. This way, a model is encouraged to generate text that would receive positive human feedback. PPO, or proximal policy optimization, is the algorithm used to calculate the loss, which is used to update the original language model. So let's take our earlier example of a shopping list and see the difference with a model that has been trained with supervised fine-tuning and RLHF. And so I could use text-davinci-003 as an example, and let me go ahead and remove all of the prompts and say, "Write a shopping list," and let's see the output that we get. And this is excellent. This is exactly what we would want. We've got bread, milk, eggs, cheese, ground beef, cereal, and so on. Alright, so we've looked at what supervised [[Fine Tuning]] and RLHF does. This combination of fine-tuning and reinforcement learning from human feedback has produced [[Large Language Models (LLM)|large language models]] that are much better at following instructions. Go ahead and head over to the OpenAI Playground and try and give a model a couple of tasks and see how it does.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Reinforcement Learning]] (4), [[Fine Tuning]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** rlhf (4), ppo (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)


### 2. Large Language Model Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Transformer architecture](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=0)** - [Narrator] [[Large Language Models (LLM)|Large language models]] are made up of a couple of components. We'll take a brief look at each of these in turn, starting off with the transformer architecture. The individual components of the transformer architecture are beyond the scope of this introductory course. Let's simplify this architecture by breaking it up into two components. So the left half of the diagram is known as the encoder and the right hand side is known as the decoder. We look at what tasks each perform in this video. So we can feed in the English sentence, such as, "I like dogs," into the encoder, at the bottom left of the diagram. The transformer can act as a translator from English to German. And so the output from the decoder at the top of the diagram is the German translation, (speaks in German). The transformer is not made up of a single encoder but rather six encoders and six decoders. Each of these contain the attention mechanism, which allows the model to focus on different parts of the input text. So this means you feed in the input text at the bottom and the output from the first encoder is fed into the second encoder and so on, all the way up to the top most encoder. Now by passing the data through these successive encoder layers, the model's able to capture deep and more complex understanding of language semantics. And this is then fed into the decoder layers, which are on the right hand side of the diagram. The encoder and decoder can be used independently or together, depending on the task. Encoder-decoder models are good for generative tasks, such as translation or summarization. Encoder only models are good
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/transformer-architecture?u=76281980&t=95)** for tasks that require good language understanding, such as sentence classification. Now, sentence classification is where you take some text, for example, a movie review and then you label it as being either positive or negative. BERT is an acronym for Bidirectional Encoder Representations from Transformers, which sounds like quite a mouthful but now that we know a little bit more about the transformer architecture and encoders, this acronym should make a bit more sense. Decoder-only models are good for generative tasks, such as text generation, like I've shown you in the OpenAI playground. So examples include [[ChatGPT]] and GPT-3 and [[GPT-4]]. Most of the research has been around decoder models as these can generate text, so this makes them more useful as chatbots or virtual assistants. All right, so transformers are made up of layers of encoders and decoders and depending on what kind of task we need to perform, we'll determine if we need either or both components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[ChatGPT]] (1), [[GPT-4]] (1)
> **Analogies:** such as (4), for example (1)
> **Env Vars:** gpt (2), bert (1)
> **Definitions:** known as (2), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [What are parameters](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=0)** - [Instructor] When talking about [[Large Language Models (LLM)|large language models]], we almost always reference the size of the model or the parameter count. GPT-3 is 175 billion parameter model. Meta's largest [[LLaMA]] 2 model has 70 billion parameters. But what do we mean by parameters? Now the parameters in a neural network are the variables that the model learns during the training process. They get adjusted during training because for a given input during the training process, you want to try and minimize the difference between the predicted outputs from the actual output. Let me give you an example. This is a visual representation of a neural network and you can see that the architecture has layers. So a node is represented by circles in this graphic. It receives input from other nodes, it processes it, and then passes the outputs to other nodes. So nodes represent neurons, and a collection of nodes or neurons is known as a neural network. The input layer has three nodes, the hidden layers have four nodes each, and the output layer has one node. This is a fully connected network. So going from the input layer on the left this means that there is a line from every node in one column or layer to all the nodes in the next layer. This type of neural network usually makes a small part of most large language model architectures. Each of the lines connecting one node to all the other nodes are edges and they represent weights. The network learns by adjusting these weights and we can easily calculate the number of weights by multiplying the number of nodes in the left layer and the right layer. So just having the weights associated with the connections won't give us an accurate result when trying to fit or train our model with data.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-parameters?u=76281980&t=95)** So we'll need an offset to adjust any output and this is known as the bias term. We'll also have one bias term for each node on the right. So in this example, there will be four in total. This means that the number of parameters in this example is three times four, plus four, which is a total of 16 parameters. We apply exactly the same logic to the next part of the network, which is the middle section. And we have four nodes on the left and four nodes on the right. So that's four times four, plus four for the bias term. And so that's a total of 20. And finally, we have four times one, plus one for the final part of the neural network. So this means if we sum up all of the parameters across this neural network, we get 41 parameters. So we say that this is a 41 parameter model. Now to give you a sense of perspective, most large language models have several billion parameters. A large language model would also have different types of layers with different components. I've just shown you how you'd calculate the parameter count for a fully connected network. All right, so we've learned that parameters in a neural network are the variables that the model learns during the training process and to get adjusted during this process. We've also looked at how to calculate the parameter count for a fully connected network. Go ahead and [[Google]] neural network and you should see a whole lot of images that look similar to this one. Now try and calculate the parameter count for some of these [[Neural Networks]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (2), [[LLaMA]] (1), [[Google]] (1), [[Neural Networks]] (1)
> **Definitions:** is a  (5), known as (2), means that (2)
> **CLI Commands:** node (5)
> **Env Vars:** gpt (1)
> **Cross-References:** in the next (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [What are tokens?](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-tokens?u=76281980&t=0)** - [Instructor] [[Large Language Models (LLM)|Large language models]] generate text [[Microsoft Word|word]] by word, right? Not quite. They generate [[Tokens]]. So what are tokens? Basically each word is split into sub words and one token corresponds to around four characters of text. Let's head over to the OpenAI website to get a good visual example of what tokens are. So this is the Tokenizer on the OpenAI website. So let me just go ahead and scroll down a bit. Now I'm going to go ahead and enter some text into the Tokenizer. So, tokenization is the process of splitting words into smaller chunks or tokens. Each of the different colors corresponds to a token. So in general, you can see that most words correspond to tokens, which includes the space in front of the word. There are a couple of exceptions. For example, the word tokenization is made up of two tokens, token and ization. The sentence I've typed has 12 words. Now, this corresponds to 14 tokens or 77 characters and you can see that the full stop right at the end has its own individual token. All right, so now that we know that tokens are made up of sub words, let's take a look at context [[Windows]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (8), [[Microsoft Word|Word]] (5), [[Large Language Models (LLM)|Large language models]] (1), [[Windows]] (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [What are context lengths?](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=0)** - [Instructor] When having a conversation with a large language model, how can you figure out how much of the conversation it remembers? That's what context [[Windows]] are all about. Now, if you remember, a prompt is the text you input into the model and it's made up of a couple of [[Tokens]]. The completion is the text outputted from the model, which also makes up a couple of tokens. The sum of the tokens of the prompt and the completions is known as the "context window" or "context length". Now, the longer the context length, the more informational background the model has for generating a response. For a language model to produce a more meaningful and relevant response, it needs to be able to take an entire conversation into consideration. Now, different [[Large Language Models (LLM)|large language models]] will have different context lengths. Chat GPT currently has a context length of around 4,000 tokens. [[GPT-4]] has 8,000 tokens. GPT-4-32k has 32,000 tokens. Now, with a context length of 32,000 tokens, you could provide almost 50 pages of text as input to a model and get it to summarize it. Alternatively, you can get it to generate more text if you wanted to create a short story. Claude 2, a large language model from Anthropic, has a context window of 100,000 tokens. Now, what can you do with a context length of 100,000 tokens? Let's take a children's novel like the 50,000 [[Microsoft Word|word]] "Black Beauty" by Anna Sewell. Now, with 50,000 words, this will fit into Anthropic's 100,000 token context window. So, let me go ahead and copy the entire novel.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=95)** Now, the question is, can we get a large language model to answer a specific question about this novel? So, let's head over to Anthropic's Playground to see how this works. So, I'm now in Anthropic's Playground and I have access to the Claude 2 model. Now, before I do anything, I want to query Anthropic's model about my question. I want to make sure that if Claude 2 answers the question, it isn't in relation to "Black Beauty". So the question is, "Who is Duchess?" Rephrase. So, you can see, the response back is, "Duchess was a character in the 1970 animated film 'The Aristocats', produced by Walt Disney Productions. She was a mother cat with three kittens," and so on. And then, right over at the end, it says, "So, in summary, Duchess was the main mother cat character in the classic Disney animated film, 'The Aristocats', set in the early 20th century Paris." Now, Claude 2 has almost certainly seen "Black Beauty" as part of its training data, but its initial response to my question is not related to "Black Beauty", which is what I wanted to confirm. And let me go ahead and start a new chat and ask the question, "Who is Duchess?" And I'm going to go ahead and paste the entire novel in the context window. And let's give this a couple of seconds. Now, that's pretty impressive. The response back from Claude 2 is, "Based on the contents of the book excerpt, Duchess seems to be the Black Beauty's mother," and some key details. And if I head over to the end, it says, "So, in summary, Duchess has identified as Black Beauty's mother, gives him advice when he is young,
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-large-language-models/what-are-context-lengths?u=76281980&t=188)** and distressed when they're separated after "Black Beauty" is sold," and so on. Now, it would've taken me over three hours to read this book and here I can get my answer in just under a minute. All right, so we've looked at context links of large language models and how they vary from around 4,000 tokens for some models to 100,000 tokens. Go ahead and try and upload a large book or a knowledge base, anything that has less than 75,000 words, into Anthropic's Claude 2 model and query it and post your findings on [[LinkedIn]] and tag me.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (11), [[Large Language Models (LLM)|Large language models]] (2), [[GPT-4]] (2), [[Windows]] (1), [[Microsoft Word|Word]] (1)
> **CLI Commands:** cat (2), make (1)
> **Env Vars:** gpt (3)
> **Speakers:** - [instructor] (1)


### 3. Large Language Models

[↑ Back to Table of Contents](#table-of-contents)

#### [BERT](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=0)** - [Narrator] If you're like me, the only time you watch dressage is every four years during the Summer Olympics. Now, whenever I've used [[Google]] search in the past, I've often only entered keywords such as dressage goal. It turns out that Google search uses BERT. BERT, which stands for bi-directional encoder representations from transformers is a large language model that was developed by Google. BERT is based on the transformer architecture and composed of transformer in coder layers which we looked at in a previous video. Since Google uses BERT, we get better language understanding. This means I don't just have to use keywords, but I can enter a question like, "What's the main objective of dressage?" And the answer back from Google doesn't just give me the most relevant page, but the answer to my question is highlighted. So the main objective of dressage is improving and facilitating the horse's performance of normal tasks. Here's another example of BERT in production. In the past, if you did a Google search using the phrase, "Can you get medicine for someone pharmacy", it wouldn't have picked up on the fact that for someone was a really important part of the query because you're looking for another person to pick up the medicine. Google search would've returned results about generally getting a prescription filled, which isn't relevant in this context. Now with BERT, Google search captures the important nuance that another person needs to pick up the medicine, and it returns results about having a friend or a family member pick up a prescription. BERT is around 110 million parameters, and was trained on the English Wikipedia and BookCorpus, which are 11,000 books written by yet unpublished authors. And unlike text generation models like [[ChatGPT]] and [[GPT-4]],
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=98)** where they're trained to generate the next token, BERT is trained on two other tasks, masked language modeling, or MLM, and next sentence prediction, or NSP. The masked language modeling task requires BERT to predict a masked-out [[Microsoft Word|word]]. Let's take a look at an example. The MLM task requires BERT to predict the masked-out word. So the Tokyo Olympic Games were something from 2020 to 2021. The answer here is that the Tokyo Olympic Games were postponed from 2020 to 2021. If BERT doesn't guess postponed during training, the weights in the network get adjusted so that it's more likely to guess this word the next time round. The next sentence prediction task asks the question, does the second sentence follow immediately after the first? So does the sentence, this is the first instance, and so on, logically follow from the Tokyo Olympic Games were postponed from 2020 to 2021. Now, when would you ever need either of these tasks and why are either of them useful? These tasks force BERT to get a really good understanding of language. And we've seen it so good that Google incorporated it as part of its search. All right, so we've seen that BERT doesn't generate text, but it's great at language understanding. Recall that [[Transformer Models]] have encoders and decoders. BERT is the only encoder model we look at. The [[Representational State Transfer (REST)|rest]] of the models will be decoder only models. Right after BERT, research from OpenAI suggested that bigger models are better.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-large-language-models/bert?u=76281980&t=190)** And so the rest of the models we look at are truly large with billions of parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (9), [[Microsoft Word|Word]] (3), [[Representational State Transfer (REST)|Rest]] (2), [[ChatGPT]] (1), [[GPT-4]] (1)
> **Env Vars:** bert (15), mlm (2), gpt (1), nsp (1)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Scaling laws](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=0)** - [Instructor] Imagine what things must have been like in the tech space in 2020. The transformer architecture in 2017 was proving to be better than anything before it. This is a time of significant experimentation. Some companies were focusing on the decoder portion, others on the encoder. Others were trying to figure out how they could make the models even better. And it was at this time that the research team at OpenAI suggested that the performance of large models was a function of the number of model parameters, the size of the dataset the models were trained on and the total amount of compute available for training. They performed several experiments on language models to back up their claim. Let's take a look at some of the results. So on the Y axes is the test loss and a lower test loss indicates that the model is performing better. Along the X axes is the number of parameters in the model. So you can see that the x axis isn't linear. We have markings for a hundred thousand, 10 million and 1 billion parameters. Now because the graph is sloping down, there seems to be a trend where the bigger the model so the more parameters it has, the lower the test loss. So how do you make models larger? One way you can do this is to have more layers, so that's more encoder or decoder layers from a transformer architecture. The graph in the middle plots the test loss versus the dataset size. The dataset size is referring to the number of training [[Tokens]]. This is the data the model was trained on. From this graph, you can see that there's again, this striking trend, the larger the dataset size, so the more data the model's trained on, the lower the test loss.
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=94)** And finally, let's look at compute. So over on the graph at the right, the X axis shows the number of petaflop compute days, which is the amount of compute used for training models. Each of the blue lines correspond to the learning curves of different models of different sizes. The reason that this moves to the right is that bigger models require more compute capability to train on, but we can see that the test loss reduces. A lower test loss means that the bigger models perform better. The dotted orange line is the maximum amount of performance you can get for a given amount of compute. So what this graph is saying is use a large language model based on the size of the compute budget. Now, if we take all three graphs together, they're telling us that language modeling performance improves as we increase the model size, the amount of data for training and the amount of compute used for training. So for best performance, all three factors must be scaled up together. The OpenAI team then went on to propose that as more compute becomes available, you can decide where you want to allocate it by training a larger model, using larger batches or training for more steps. Now, training for more steps means training the model for a longer time. They concluded that most of the increase should go towards increasing the model size. Now there is some benefit using more data and using larger batch sizes, but minimal contribution if you train the language model for more steps. So when the results from these scaling laws were published
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-large-language-models/scaling-laws?u=76281980&t=187)** in 2020, it wasn't surprising that many big tech firms went down the route of increasing the model size, and so creating larger language models. OpenAI released GPT-3 which was 175 billion parameters. This was significantly better than any other language model at the time and we look at this model next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Env Vars:** gpt (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [GPT-3](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is probably one of the most well-known [[Large Language Models (LLM)|large language models]]. Let's take a look at what the letters GPT represent in turn. So G is for generative, as we are predicting a future token, given past [[Tokens]]. P is for pre-trained, as it's trained on a large corpus of data, including English Wikipedia, amongst several others. This involves significant compute time and costs. And finally, the T corresponds to a transformer, and we're using the decoded portion of the transformer architecture. GPT-3's objective was simple. Given the preceding tokens in the example, it needs to predict the next token. So this is like predictive text on your phone. So if I gave it the phrase, "Once upon a," the most likely next token is time, "Once upon a time." Remember that a token is a sub-[[Microsoft Word|word]]. So these are known as causal or autoregressive language models. For a couple of years, the focus of researchers was getting a large corpus of data and then training a language model. Now, if you wanted to use the language model for a specific task, say sentiment analysis, then you'd need to give it hundreds of examples of sentences that were labeled as either having a positive or negative sentiment and train the model on these sentences and labels, and the model would produce excellent results. Now, sentiment analysis is where you provide a text as input to the language model, and the language model needs to then predict if the text has a positive or negative sentiment. So here's an example from the movie reviews. "Brilliant execution and acting. Excellent work by the director, cast, and crew," and this is labeled with a positive review.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=95)** So now let's take a look at a negative example. "This piece ain't really worth a comment. It's simply the worst horror movie I've ever seen. The actors are bad as bad can be and the whole plot is so silly it nearly made me cry." Now, models like BERT are excellent at these types of tasks, and after being trained on a couple of hundreds of examples, if you give it a new movie review that it hasn't seen before, it will get it right more than 95% of the time. Now let's say if you have a totally different task, like question answering. Now this is where you provide a text to the model and you ask a question, and you wanted to extract the answer from the text. So let me give you an example. Now, let's say the text is, "The Summer 2020 Olympics included new disciplines such as baseball and softball, surfing and skateboarding. It was hosted in Tokyo, Japan." And if the question was, "Where was the 2020 Olympics held?" the answer would be Tokyo, Japan. Now if you try to use the same language model that you used for sentiment analysis to perform this question answering task, it would fail miserably. You'd have to start again with your initial language model, make a few changes to the model architecture, give it a couple of hundred examples of sentences where for each text, you have questions and the correct answers, and train the model, and it would eventually get good at this task. But the OpenAI researchers argued that what makes this different to how you and I operate is that if we have to learn a new task, we can do a reasonable job if you're given a clear set of instructions and a couple of examples. So what the researchers found was if they created a really large language model, so the 175 billion parameters in the case of GPT-3,
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=191)** and if they gave it a new task and a couple of examples with the expected output, it was able to perform these tasks. So let me show you an example using sentiment analysis in the OpenAI Playground. I'm now in the OpenAI Playground, and I'm now going to ask the model to classify the following text. So this is my text, and I'm going to say, "Classify the following text as being either positive or negative," and let's see what response we get back. So you can see that the language model generates a whole load of text, so, "Probably one of his worst films and a disrespect to the original novel, but still very funny in certain places," and so on, right? So this is an example of zero-shot learning where we haven't given the model any examples. So let's go ahead and try and give the model a couple of examples, and see how it performs. So I'm just going to reformat the text. So I'm going to call the text Review, and then I'm going to say that this has a positive sentiment. Now I'm going to give it another example, and this is what's known as few-shot learning. So if I just give it a single example, that's known as one-shot learning. If I give it a couple of examples, this is known as few-shot learning. So let me go ahead and provide an example of a negative sentiment. So that's the review. And again, let me use the same format, so review, and I say that this has a negative sentiment. And finally, let's give the model a review that it hasn't seen before, and this time around, the model needs to figure out whether this is positive or negative.
>
> **[4:46](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=286)** So this is known as few-shot learning, because we've given it two examples. And you can see that the model correctly classifies this as negative and then goes on to generate more text. So let's go ahead and just make a couple of changes to our settings. So because we only wanted to generate either positive or negative, I'm going to go ahead and specify that the maximum length needs to only be one. So it's going to generate either negative or positive, that meaning a single token, and let's go ahead and remove all of the text that we had before, and now let's go ahead and submit this. Okay, I've got a warning that my text ends in a trailing space. So let me just go ahead and try and just delete that, and let's try again. So I'm going to go ahead and select submit, and you can see that the model correctly classifies this as a negative sentiment. So what's special about what we've just done is that we've now used a large language model that wasn't trained on sentiment analysis to do this task just by providing a couple of examples. Now its accuracy isn't going to be as good as a BERT model that has been trained for this task, but what we could do is give it another task with a couple of examples. So given this text and these questions and answers, go ahead and answer this question, and the model will get reasonable results. Let's go ahead and take a look at the model sizes. You might still question why the OpenAI researchers went for such a large model, given that most models were a couple of billion parameters at most at this time. This graph summarizes their findings. GPT-3 is a family of models with sizes 1.3 billion parameters, 13 billion parameters, and 175 billion parameters.
>
> **[6:21](https://www.linkedin.com/learning/introduction-to-large-language-models/gpt-3?u=76281980&t=381)** Across on the X-axis is the number of examples you're giving the model. On the Y-axis is the accuracy of the model for a task. The higher it is, the better performing a model. Over on the top of the graph, you have labeled zero-shot, one-shot, and few-shot, which is how many examples you're giving the model for the task you wanted to perform. Let's take a look at the smallest model, the 1.3 billion parameter model. Regardless of how many examples you give it, the accuracy of the model is pretty low. It's less than 10%. The 13 billion parameter model is slightly better. The more examples you give it, the better the accuracy, but it's still around 25% at most. With a 175 billion parameter model, giving it just one example boosts the accuracy up to almost 50%. So if you give it a couple of examples for a new task, the accuracy is more than 60%. Now this is really impressive for a model that hasn't been trained on one specific task. This larger 175 billion parameter GPT-3 model is able to make use of the examples that you give it in a way that the smaller GPT-3 models were not able to. So let's summarize our understanding of GPT-3 in a table so that we can compare it to BERT. One of GPT-3's primary objective was few-shot learning. This performed best on the largest of the GPT-3 models, the 175 parameter model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** gpt (10), bert (3)
> **Definitions:** known as (4), is a  (2), is an  (1)
> **CLI Commands:** make (3)
> **Versions:** 1.3 (2)
> **Analogies:** such as (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Chinchilla](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=0)** - [Instructor] Over the years, the trend has been to increase the model size. Although we won't look at any of these models in detail. I'll mention them briefly now because we'll be comparing them later. So Megatron-Turing was released by a collaboration between [[Microsoft]] and Nvidia in Jan of 2022 that had 530 billion parameters. The [[Google]] DeepMind team released details about Gopher, which had 280 billion parameters, and it was one of the best models out there at the time. You can see that the model sizes were getting very large, and this was because of the scaling laws. But what if the scaling laws didn't capture the entire picture? The DeepMind team's hypothesis was that [[Large Language Models (LLM)|large language models]] were significantly undertrained. You could get much better performance with the same computational budget by training a smaller model for longer. Now, the way you would try and test out a hypothesis is to do a whole lot of experiments, and that's exactly what the Google Mind team did. They trained several hundred language models. They varied the sizes of these models from 70 million to over 16 billion parameters, and then they trained them with different amounts of data from five to 500 billion [[Tokens]]. Based on their hypothesis, they then created and trained Chinchilla, a 70 billion parameter model on 1.4 trillion training tokens. Now, one of the key benefits of Chinchilla was that it was a smaller model. This meant less compute was required for [[Fine Tuning]] and inference.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=93)** Now, remarkably, the 70 billion parameter Chinchilla outperforms Gopher, which has 280 billion parameters, GPT-3 with its 175 billion parameters, and Megatron-Turing with its 530 billion parameters, on a large range of language tasks. Now, let's think back to what we learned about scaling laws. One of the key insights in this paper is that if you were training a large language model and you get a tenfold increase in the computational budget, the majority of that should go towards increasing the size of the model and a smaller proportion towards the number of training tokens and training the model for longer. The DeepMind team behind the Chinchilla paper confirmed that it was important to scale the model size and the training data as suggested by the scaling laws. But unlike the scaling laws, the size of the model did not need to grow faster than the amount of training data. So for a tenfold increase in computational budget, the model size and the number of training tokens should be scaled in equal proportion. Let's take a look at how they demonstrated this. Firstly, you'll notice that both the X-axis and the Y-axis are not linear. The X-axis goes up by hundreds and the Y-axis goes up by tens. Now, the reason they've done this is because the quantities that are being measured increase by large amounts, and you'd not be able to show this relationship easily on a graph otherwise. Now, on the X-axis, we have flops, or floating point operations, and these are a measure of computation. So the further you go across on the X-axis, the more expensive it is,
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=186)** because you require more computational resources. On the Y-axis, we have the number of parameters for the models, so that's the size of the model. And as we go up, the models are getting significantly larger. So on the graph you can see that we have the GPT-3 model that's represented by the red star, the Gopher model that's represented by the yellow star, the Megatron-Turing model given by the purple star, and finally, the Chinchilla model represented by the green star. Chinchilla outperforms Gopher, GPT-3, and Megatron-Turing. This means that it's better at a wide variety of tasks, like reading comprehension and question answering, answering questions on a variety of different topics at high school level from history to chemistry to astronomy. Now, what's interesting is that it was trained on the same amount of compute as Gopher. Now, I can confirm that because if I draw a vertical line from the green Chinchilla star down all the way down, Gopher would also be on this line. And this means they were trained having around the same amount of compute. So the takeaway from this is that Chinchilla is significantly smaller than the other models, and you can see this on the Y-axis, but it was trained having around the same compute, and yet it outperforms them all. Let's take a quick look at the data that the models were trained on. While most of the large language models have been trained on around 300 billion tokens, Chinchilla has been trained on 1.4 trillion tokens, which is almost five times as many tokens as the other large language models. This then begs the question, are the massive language models that are being trained oversized?
>
> **[4:40](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=280)** So let's say we use the Gopher model as our baseline. Remember that the Google DeepMind team released Gopher, which had 280 billion parameters. For their compute budget, the optimal model parameter size should be 67 billion parameters, and the number of training tokens, 1.5 trillion tokens. Now, we know that the number of training tokens for Gopher was 280 billion parameters. This means that their training budget should have actually been 17.2 times more, and they would've required 5.9 trillion training tokens. It doesn't mean that you can't train these large models, it's just that these language models have not been trained with enough data. The DeepMind team designed an interesting experiment to compare their findings with the scaling laws. Given a compute budget of a certain number of flops, determine the number of parameters required and how much data is required to train it using the scaling laws prescribed by OpenAI and the ones determined by DeepMind. Whichever language model results in the most performant model is better. Now, the way you can compare and determine which model is better is if you give it a whole load of tests from generating text to question answering to high school questions on a variety of subjects, and you can see which one gets the most correct answers. With the scaling laws from the OpenAI team, the Flops budget recommended a 4.68 billion parameter model. DeepMind's approach recommended a 2.8 billion parameter model. So the results from using the Chinchilla paper are in blue, and the results from using the original scaling laws
>
> **[6:12](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=372)** are in orange. The Y-axis is the training loss, so the lower the better. The X-axis represents the number of training tokens. You can see that if we stopped at the number of training tokens recommended by the scaling laws, the orange curve is lower than the blue one, and it would appear that it has a lower training loss, and so it's a better performing model. However, because the Chinchilla paper recommends that the model needs to be trained on more data, we can see that the blue Chinchilla curve ends up with an overall lower training loss compared to using the scaling laws given in orange. Similarly, if we were to just plot the training loss versus the number of training flops, or floating point operations, in the diagram on the right, you can see that we get a lower loss using the Chinchilla method in blue versus the scaling laws in orange. So it turns out that you can end up with a more performant model using a smaller model with more training data. So let's wrap up the section by adding Chinchilla to our list of models. I'm also going to add Megatron-Turing and Gopher, even though we've looked at them briefly. Our biggest takeaway is that up to this point, large language models are significantly undertrained. And from the table, Chinchilla is trained on more than four times as much data as any other large language model. It's the smallest, but also has the best-performing results. Lessons from Chinchilla have helped me at work. At a project for a customer, we were looking to train a model from scratch on a European language. We looked at the size of the model and the size of the training data set we had, and quickly realized that we would not get a performance model
>
> **[7:46](https://www.linkedin.com/learning/introduction-to-large-language-models/chinchilla?u=76281980&t=466)** because we didn't have enough training data. So instead of kicking off a training run, we focused our efforts on getting more training data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (13), [[Large Language Models (LLM)|Large language models]] (4), [[Google]] (3), [[Microsoft]] (1), [[Fine Tuning]] (1)
> **Versions:** 1.4 (2), 1.5 (1), 17.2 (1), 5.9 (1), 4.68 (1)
> **Env Vars:** gpt (3)
> **Best Practices:** recommended (3)
> **Definitions:** means that (2)
> **Analogies:** picture (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [PaLM and PaLM 2](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=0)** - [Instructor] We're finally at one of the largest language models to date. [[Google]] released PaLM, or to give it its full name, the Pathways Language Model, in April 2022. There are a couple of key takeaways from the PaLM model. PaLM is the largest model with 540 billion parameters. Google uses the Pathway systems, which meant more [[Hardware]] accelerators could be used for model training, and they could be trained more efficiently. PaLM was trained on an enormous 780 billion [[Tokens]] multilingual corpus with text from over 100 languages. Now, just over 3/4 of this training data was in English. Another really interesting phenomena that the Google team picked up on was on scaling. It looked like the models could only perform certain tasks once a certain scale was reached. Here, 8 billion parameter models could perform certain tasks such as question answering, language understanding, and arithmetic. It was only when the model was scaled up to 62 billion parameters that more tasks such as translation, summarization, and common sense reasoning were possible. But it then required a much bigger jump to 540 billion parameters for the model to be able to perform tasks such as general knowledge, reading comprehension, and joke explanation amongst others. PaLM is the best performing model of the lot, outdoing Gopher and Chinchilla on these standard benchmarks that measure natural language understanding and natural language generation tasks.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=95)** Let's add PaLM to our list of models. You can see that it's the largest model to date, and although it wasn't trained on as many training tokens as Chinchilla, it performs the best. If we take the lessons from the Chinchilla paper, it means that although the PaLM model was trained on 780 billion training tokens, which is more data than the 380 billion that was used for other models, it's likely that it has still been undertrained and could perform better if trained on more data. In May of 2023, Google released PaLM 2, which surpassed the capabilities of PaLM. Now, because of the increasing competitive nature of the large language model space, Google has not released information on the size of the model nor the amount of data it was trained on. PaLM 2 was trained on more than 100 languages, meaning it's able to understand and generate text that is more nuanced. It has also passed advanced language proficiency exams at the mastery level. Scientific papers and pages with mathematical expressions were part of the vast training dataset that was used to train PaLM 2, and as a result, it's even better at logic and common sense reasoning and mathematical tasks compared to the original PaLM model. PaLM 2 was also trained on a large quantity of publicly available programming code. This means it's not only excellent at generating code or correcting code in popular modern languages like [[Python (Programming Language)|Python]] and [[JavaScript]], but it can also generate code in languages like Prologue and Fortran and Verilog. And what's remarkable is that PaLM 2's smallest model will be able to run on mobile devices.
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-large-language-models/palm-and-palm-2?u=76281980&t=190)** PaLM 2 will be used to power features in the other Google [[Microsoft Products|products]] like Gmail and Google Docs, and also expand Bard, which is another large language model released by Google. One of the other benefits of PaLM 2 is that it's been used to train Med-PaLM 2 that has been trained by Google's Health Research teams. This is the first large language model to perform at expert level on US medical licensing exam-style questions. The Google team are adding multimodal capabilities. This means you could feed it an X-ray image, and then ask the model to analyze the X-ray image and report on its findings, and then potentially query the model further on the image. Let's add PaLM 2 to our list of models. It looks like PaLM 2 is Google's best performing model, and it'll be powering many of its products.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (11), [[Tokens]] (3), [[Microsoft Products|Products]] (2), [[Hardware]] (1), [[Python (Programming Language)|Python]] (1)
> **Analogies:** such as (3)
> **CLI Commands:** python (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [ChatGPT and GPT-4](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=0)** - [Narrator] [[ChatGPT]] launched on the 30th of November 2022 and had 100 million monthly active users two months later. But what's the difference between GPT-3, ChatGPT, and [[GPT-4]]? GPT-3 could generate text, and we saw earlier that it does a great job of it. The only problem is it doesn't follow instructions. GPT-3.5 was an upgrade on GPT 3 by allowing language models to better follow instructions using supervised fine-tuning and RLHF or [[Reinforcement Learning]] with human feedback. You might remember these terms from the first couple of videos of this course. This is when language models try to respond to prompts like human labelers. ChatGPT is fine-tuned from GPT 3.5 and was further optimized for dialogue so you could use it like a chatbot. ChatGPT can also do other things like helping programmers write programming code. GPT-4 was released in March of 2023 and takes things further. It's a bigger model than Chat-GPT and can do more complex reasoning and is the best model for complex tasks like cause and effect or logical reasoning at the time of this recording. It also achieved human-level performance on many high school advanced placement exams ranging from [[Statistics]], and biology to art history, and psychology. Earlier we said a language model is something that takes in text input or a prompt and outputs text data. Now, it turns out that GPT-4 is multimodal.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=96)** This means it can take in either text or a combination of text and image data and will output text. And at the time of this recording, you can only submit text data as input to GPT-4. Those of us who use [[Large Language Models (LLM)|large language models]] are always curious about the data and the model architecture used to train the model. But this time round, OpenAI has decided that they won't share the results. In their GPT-4 paper, they say, given both the competitive landscape and the safety implications of large-scale models like GPT-4, this report contains no further details about the architecture, including model size, [[Hardware]], training compute, data set construction, training method, or similar. Now, although GPT-4 performs very well, it has some limitations. There are at least three areas that need some work. Firstly, you can't fine-tune the GPT-4 models, and GPT-4 doesn't update its knowledge in [[Real-Time]]. It was trained with data up to September of 2021, so it has no knowledge of anything that has happened since. And finally, sometimes it makes up facts. Now if a model like GPT-4 performs so well, why would you want to fine-tune these models? Well, let's say you were working in a very niche area like the latest research on seaweed biology, and writing academic papers. It's likely that the GPT-4 model hasn't been trained on academic papers in this space as it's so unique. So, there'll be terms that are unique to these academic papers
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=189)** that the GPT-4 model will have no context for. Fine-tuning a model with these kind of academic papers is likely to lead to a better-performing model if you have some other NLP tasks like text classification. The only problem is that although the GPT-4 models are very capable, they can't be fine-tuned as of the time of this recording. So, if you want to fine-tune a model on this specific dataset, then you'll need to use the original GPT-3 model. Let me show you two other limitations, while I still have the OpenAI Playground open. Now, I don't know what output this GPT-4 model is going to generate, but I'd like it to write a catchy introduction to the topics I'm covering in this course. So, let me go ahead and just use some of the topics I'll be covering as input. So, this is my prompt. These are the topics I'm covering in an introduction to the large language models course. Write a catchy introduction. So, what are large language models? GPT-4, limitations of GPT-4, and [[Helm]]. Now, although the output that's been generated is very impressive, there are a couple of problems here. If I scroll down to the bottom, and let's look at this section here. So GPT-4 generates, besides GPT-4, we'll also delve into some exciting new entrants in the field like HELM. This makes it sound like HELM is another large language model. In fact, HELM stands for the Holistic Evaluation of Language Models, and it's a benchmark to allow you to compare language models.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-large-language-models/chatgpt-and-gpt-4?u=76281980&t=281)** Now, since the HELM benchmark was released at the end of 2022, this means that GPT-4 doesn't have any knowledge of it. There is a workaround where OpenAI have released plugins which allow you to reach third-party information sources, including the internet. All right, so we've seen that we cannot fine-tune the GPT-4 models, it doesn't update its knowledge in real-time, so it was trained on data up till September 2021, and it has no knowledge of anything that has happened since, and it sometimes makes up facts. Go ahead to the OpenAI Playground and try out GPT-4, and ask questions about a topic that you're reasonably skilled in, and then have a dialogue and see how good the GPT-4 model is. I think you'll find the results are very impressive. Now, let's go ahead and add Chat-GPT and GPT-4 to our table comparing the large language models. Chat-GPT was incredibly popular as soon as it was released. GPT-4 has human-level performance on various exams, and is the best performing model at the time of this recording.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (24), [[Helm]] (5), [[ChatGPT]] (4), [[Large Language Models (LLM)|Large language models]] (4), [[Real-Time]] (2)
> **Env Vars:** gpt (33), helm (5), rlhf (1), nlp (1)
> **Versions:** 3.5 (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Open LLMs](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=0)** - [Narrator] We've looked at models that have all come from big tech firms like [[Google]] and OpenAI. But what about open community models? Now, although OpenAI made GPT-3 available via an API or the Playground, which is what we've seen so far, no access was given to the actual weight of the model. So if you had access to the weight of the model, you can tweak and experiment with the model to create new variations that might be better suited for a specific task. For example, you can try and create smaller versions of the model. Meta released OPT or Open Pre-trained Transformers. This is a couple of decode-only pre-trained transformers ranging from 125 million to 66 billion parameters which they shared with anyone. And interested researchers could also apply for access to the 175 billion parameter models. This effectively gave researchers access to a large language model that was very similar to GPT-3. The Meta team also detailed the infrastructure challenges they faced, along with providing code for experimenting with the models. This model was primarily trained on English text. A couple of months later, [[Hugging Face]], which is a company that provides a machine learning platform to store models, think of it like [[GitHub]] for models, well, their research team received a grant for computing resources from the French Government allowing them to train the BLOOM model. Working together with a volunteer team of over 1,000 researchers from different countries and institutions,
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=93)** they created a 176 billion parameter model called BLOOM. This team has made everything openly available from the dataset used for training to anyone being able to download and run this model. This allows other organizations outside of big tech to experiment with these models. Now, even if you want to run these models, you still need access to expensive [[Hardware]] accelerators. Now, despite all this collaboration, the performance of these models was still lagging behind the likes of the OpenAI models. This is probably because given this is a new field, not many engineers have this skills and experience working with hundreds of hardware accelerators in parallel and the associated problems. The majority of the engineers working for big tech companies like Google and OpenAI and Meta have had a couple of years headstart on others. In February of 2023, Meta released the [[LLaMA]] models which are 7, 13, 30, and 65 billion with a license only allowing them to be used for research and non-commercial purposes. Given the excellent performance of these models on various open benchmarks, they quickly became the most popular open language models thus far. The weights for these models were available to the research community, but they were quickly leaked. Some researchers extended the LLaMA model capability by instruction tuning. Others tried training it on non-English data. This visual gives you an idea of how impactful LLaMA has been to the open community. Up to this point, we knew from the OpenAI research that training models
>
> **[3:06](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=186)** with instructions significantly improves their performance, but OpenAI didn't release the dataset allowing others to try this out. Because of the excellent model performance of LLaMA, it's been used to provide the language component for many multimodal models. These are models that can take in different inputs, for example, text or images and output either text or images. Over on the left, the LLaMA models were trained with Chinese data, providing a variety of different Chinese models trained on data for different industries like finance and law and education and medicine. I think one of the reasons that LLaMA was more widely adopted than say Meta's Open Pre-trained model is because it's much smaller and so more readily accessible to anyone 'cause you can easily run the smaller models on a single hardware accelerator like a GPU. This is the open large language model leaderboard available from the Hugging Face website. Let me just scroll down so that you can get a better look at some of the models. So this compares open [[Large Language Models (LLM)|large language models]]. In July of 2023, Meta released LLaMA 2. So this had a context length of 4,000 [[Tokens]] and was trained on a whopping two trillion tokens. Now what was remarkable was that less than a week after Meta released this model, teams in the open community produced better performing models. So for example, you can see at the top of the leaderboard the Stable Beluga 2, which is a model from Stability AI. At the time of this recording, derivatives of LLaMA 2 are the best open models out there. It's also worth noting that LLaMA 2 isn't fully open.
>
> **[4:41](https://www.linkedin.com/learning/introduction-to-large-language-models/open-llms?u=76281980&t=281)** Meta didn't release the training data. Meta also requires companies with over 700 million monthly users to ask Meta's permission before using this model. This affects a handful of fellow tech giants like Google. Now, why would Meta be willing to make all their models openly available? It would cost millions of US dollars in compute and data requirements to train such models. And one of the challenges with AI models is safety and how they're used. By making the models openly available, Meta can learn how the models are being used and this allows them to make their own [[Microsoft Products|products]] which would use some of these models more safe. Open models have got smaller and better over the years closing the gap with closed models such as [[ChatGPT]]. So let's go ahead and add LLaMA 2 to our table comparing large language models. What's unique is that all of the LLaMA 2 models were trained on two trillion tokens and it's the first set of open models that is comparable in performance to ChatGPT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LLaMA]] (11), [[Google]] (3), [[Hardware]] (3), [[Tokens]] (3), [[Hugging Face]] (2)
> **Env Vars:** gpt (2), bloom (2), api (1), opt (1), gpu (1)
> **Analogies:** for example (3), similar to (1), think of it like (1), such as (1)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Comparing LLMs](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=0)** - [Instructor] How do we even compare [[Large Language Models (LLM)|large language models]]? That's a great question. I don't think we have a perfect answer yet, but we have made great progress over the last few months. Usually, we only focus on how good a model is at a task, but we don't know if that same model generates false information. So instead of just looking at one metric, a Stanford University research team proposed [[Helm]], or the Holistic Evaluation of Language Models. With HELM, the Stanford research team worked together with the main large language model providers, and they were able to benchmark the models across a variety of data sets and get a more holistic view of model performance. The HELM benchmark is a living benchmark and should change as new models are released. I'll just cover the first couple of benchmarks and you can explore the [[Representational State Transfer (REST)|rest]] further if you're interested. So let me just go ahead and scroll down a little bit. So here, each row corresponds to a different language model that has been tested, and each of the columns correspond to different benchmarks for different tasks. You can hover over each of the benchmarks. So for example, you can see that this is MMLU, or the Massive Multitask Language Understanding benchmark. And over at the right, you've got the CNN and Daily benchmark, which is used for text summarization. Now, if you look at accuracy, the text DaVinci 2 and 3 models, which are OpenAI GPT-3.5 models have some of the best overall results across all of the data sets.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=93)** [[GPT-4]], which is released in March of 2023, doesn't feature in the helm dataset yet. The robustness of models here is the worst case performance of the model. So how does it perform when you send a text with typos or misspellings? And you can see there's some correlation here. Typically, models that have a high accuracy will be more robust. And again, we can see that the OpenAI models have high scores for this. Head over to the HELM website and dig into some of the other benchmarks like fairness and efficiency, bias, and so on. Because this benchmark is updated periodically, there might be some changes to what I've shown you here. It's important to note that HELM does have some limitations. For example, users don't know if they can easily fine tune a model for their use case. Other important considerations like the price of models and the latency when using these models is not measured, and also the availability of the model to users. Meaning is the platform available most of the time? Let's now compare open language models. [[Hugging Face]] offers an open large language model leaderboard that we've seen earlier that allows you to compare open source large language models. Like HELM, the models are evaluated on a couple of different benchmarks. ARC are reasoning challenges for a set of grade school science questions. HellaSwag, which is a test of common sense inference, which is easy for humans, but challenging for state-of-the-art models. MMLU, which measures a text model's multitask accuracy. So this covers 57 tasks across elementary mathematics,
>
> **[3:08](https://www.linkedin.com/learning/introduction-to-large-language-models/comparing-large-language-models-25144104?u=76281980&t=188)** US history, computer science, law, and loads more. And finally, TruthfulQA, which is a test to measure how likely a model is to reproduce falsehoods commonly found online. And as you can see, [[LLaMA]]-2 and its derivatives are currently at the top of the leaderboard. Alright, so we've seen that comparing large language models is tricky, but one way to compare them is to use a benchmark like HELM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Helm]] (8), [[Large Language Models (LLM)|Large language models]] (3), [[Representational State Transfer (REST)|Rest]] (1), [[GPT-4]] (1), [[Hugging Face]] (1)
> **Env Vars:** helm (7), mmlu (2), gpt (2), cnn (1), arc (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **Versions:** 3.5 (1)
> **UI Navigation:** scroll down (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [GitHub Models: Comparing LLMs](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=1)** - [Instructor] Imagine asking two teachers to explain the same mathematics problem to a class. Now, each of them might have a different approach to solving the problem, and it's like that with [[Large Language Models (LLM)|large language models]]. You can provide the same text or prompt and get a different response from the large language model. [[GitHub]] Models lets us easily compare two large language models. You need a GitHub account, and you can sign up for one by going to [github.com](https://github.com). And once you have an account, head over to [github.com/marketplace](https://github.com/marketplace). And here you can just select Models over on the left, and then you can select models based on the different providers, their capability, and then their functionality, so things like whether you need a model that has low latency, whether you want a model that can handle multiple languages, and so on. Now the OpenAI models in general are pretty good, so I'm going to use the [[GPT-4|GPT-4o]] mini as my benchmark, and I want to compare this to one of these smaller models. And so let's pick one from the Low latency list. So I'm going to go ahead and pick the Phi-3.5-mini instruct. I'm going to select Playground, and then I want to go ahead and compare this to the GPT-4o mini model. So let me go ahead and select that. Now, this is the task. I want to get the models to explain a joke. Now this isn't as trivial as it sounds because it's checking the model's capability to work
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=94)** with nuances of the English language. So here's the joke. I was going to fly to visit my family on May the 3rd, and my mom said, "Oh, great, your dad's poetry reading is that night." So now I'm flying in on May the 4th. Now I've intentionally included the reference to May the 4th to see if I can trick some of the language models to see if there's a "Star Wars" reference. The explanation of this joke or this [[Microsoft Word|word]] play is that this person doesn't want to attend their dad's poetry reading. So let's go ahead and see how the different models explain this.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-large-language-models/llm-trends?u=76281980&t=133)** Go ahead and pause the video here and compare the different outputs from the two models. After reading them, I think you'll agree with me that the GPT-4o mini produces the best results. Now remember this illustration is only comparing the models for a single task. You'll want to be comparing models on hundreds and thousands of tasks to see which one performs the best for your business needs. Ultimately, you are the best judge for which model works best for your business and your situation. All right, so we've seen that GitHub Models is a great way to prototype with large language models, letting you easily work with and compare large language models from different providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Large Language Models (LLM)|Large language models]] (4), [[GPT-4|Gpt-4o]] (3), [[Microsoft Word|Word]] (1)
> **Tools:** github (5)
> **Analogies:** compare this to (2), imagine (1), it's like (1)
> **Env Vars:** gpt (3)
> **URLs:** [github.com](https://github.com) (2)
> **Versions:** 3.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Accessing large language models using an API](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=0)** - [Instructor] Now, in the previous video, we looked at comparing [[Large Language Models (LLM)|large language models]] using [[GitHub]] models. Now in this one we looked to see how we can access the large language models via an API using a programming language like [[Python (Programming Language)|Python]]. Now I prefer GitHub [[Codespaces]] for [[Prototyping]] any apps. It's a cloud-based coding environment and you can access it from any device. And what I like about it is I don't waste any time with setting things up. I'm going to demonstrate the step-by-step process for setting up a GitHub repo and using Codespaces to work with GitHub models. You can also go directly to the course GitHub repo to see the configuration already in place. I've also included the coding files in the repo for you. So let's kick things off with creating a GitHub repo. So I'm going to head over to [github.com](https://github.com), and this is my GitHub repo. And I'm going to head over to the top and select, create a new repository. And I'm going to call this repository joke. I'm going to leave it as public. And because this is going to be in Python, I'm going to add a Python .gitignore template.
>
> **[1:23](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=83)** This is kind of standard to whatever I do for creating any new repository. And then I'm going to go ahead and select Create repository. So now that we've got the repository set up, let's head over to GitHub Codespaces. So I'm now at [github.com/codespaces](https://github.com/codespaces), and I'm going to go ahead and select a new codespace. And this is where I'm going to select the repository that I just created, and I can see it over here. So it's jonfernandes/joke. I'm going to leave everything else as is, and I'm going to go ahead and select Create codespace. And I'm just going to go ahead and ignore this walkthrough. And so I'm just going to go ahead and close this window. Now, in the previous video, we found that the GPT‑4o mini model was the better of the two at explaining jokes. So let's head back to GitHub Marketplace. So I'm going to head over to [github.com/marketplace](https://github.com/marketplace). I'm going to go ahead and select Models, and I'm going to go ahead and select the GPT‑4o mini model. So let me go ahead and enter the joke that needs to be explained. And let's send this off to the GPT‑4o mini model. And you can see that I've got the response back from the model.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=175)** So now I'm going to head over to the Code tab. And what I'm going to want to do is I'm selecting Python as my language, and I want to go ahead and copy all of this code. And you'll notice that the first thing that you do here is to install OpenAI. So you need to install the OpenAI Python package. So I'm going to go ahead and copy this and head back to Codespaces. So let me go ahead and create a new file. And so I'm going to create this file and I'm going to call it joke.py, and let me paste the details that I picked up from the marketplace. And the first thing I'll need to do, as you can see over at the top, is to do a pip install openai. So pip install openai. Now I'm going to go ahead and install the OpenAI Python package. And this will allow me to access the OpenAI large language model via Python.
>
> **[4:11](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=251)** Now let me just make a little bit of space for myself, and let me just bump the font up a little bit, and I'm going to go ahead and clear my screen. And now I'm going to go ahead and run this file. So python joke.py.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=277)** And you can see that the output I get is the capital of France is Paris, because that's the response back from the user. So what I'll actually want as the output here or the input from the user is going to be explain the joke. So if I head back to the GitHub Marketplace and head back to the Chat, and I'm going to select explain this joke, I can then replace this content, which is the default that you'll get, with the explain this joke. And because I've got a couple of single and double quotes, I'm going to use triple quotes so that there's no confusion.
>
> **[5:35](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=335)** And let me just go ahead and format this a little bit.
>
> **[5:50](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=350)** And now if I go ahead and rerun this,
>
> **[6:01](https://www.linkedin.com/learning/introduction-to-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=361)** I get the explanation of this joke from the large language model. So as you can see, I've now been able to access the GPT‑4o mini model using Python. All right, so in this video we've looked at how we can access large language models via an API using a programming language like Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (13), [[Python (Programming Language)|Python]] (10), [[Codespaces]] (5), [[Large Language Models (LLM)|Large language models]] (3), [[Prototyping]] (1)
> **CLI Commands:** python (10), pip (2), make (1)
> **Tools:** github (13)
> **Env Vars:** gpt (4), api (2)
> **Prerequisites:** install (5), set up (1)
> **Exercise Files:** github repo (4), template (1)
> **URLs:** [github.com](https://github.com) (3)
> **File Paths:** joke.py (2)

#### [LLM trends](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=0)** - [Instructor] Over this course, we've looked at scaling laws and lessons from the Chinchilla models. Let's bring this all together as we look at the current trends for [[Large Language Models (LLM)|large language models]]. When training of large language models first kicked off, most of the focus was on improving the models, and then the scaling laws were the guiding principle. And the scaling laws suggested that you would get the biggest improvement by increasing the size of the models. So you do this by increasing the model's architecture, so that's the number of layers in a model, the number of attention heads, and so on. But that was only one dimension, because as model providers created large models, the associated training cost became an important consideration. So the second important dimension became training cost, because being able to train a model effectively, given a budget, was important. And the learnings from the Chinchilla paper earlier in the course suggested that large language models were being undertrained. They also answered the question, given a training budget, how can we create an optimal model size? So far, the focus has been on training the model, but one thing we haven't talked about is what's involved in running a model. Now this is known as inference, and there are two important and very different trends around inference. One is, how can we reduce the cost of running these models? Now, one way to do this is to create smaller models that are very performant. So these are small models that are trained from scratch on large data sets. Now, because these are smaller models, this means they require less memory to run, and so we can potentially run them
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=93)** using fewer [[Hardware]] accelerators. Smaller models can also run on local devices. Now the big advantage here is [[Privacy]], as all the interactions with the language model takes place on your device. The other important consideration is how can we improve the quality of these models? You see, at this point, models have been trained primarily on the majority of publicly available data. The return from training bigger models with more data and compute is plateauing, and model providers are looking for the next big breakthrough in AI training. Major AI model providers are exploring alternatives. So there's a focus on test time compute, which allow models more time to reason during the inference stage. An example of this test time compute is the o1 model from OpenAI. The model uses these reasoning [[Tokens]] to break down their understanding of the prompt and consider multiple approaches to generating a response. Now what you see here is an example of this multi-step conversation between a user and the model. And you can see that the input tokens from the user and the output tokens from the model are carried over while the reasoning tokens are discarded. Now, we currently don't get to see the reasoning tokens, and that's because that's some of the secret source that's happening under the hood for these models. So far, results from these test time compute models that work during inference time have extraordinary results. The OpenAI team put the o1 model to the test on a GPQA diamond, which is a really tough benchmark that really digs into subjects like chemistry
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-large-language-models/github-models-comparing-llms?u=76281980&t=189)** and physics and biology. Now to see how it stacks up against humans, they brought in some PhD experts to tackle the same questions. And guess what? o1 did better than those experts, making it the first model to pull this off on this benchmark. Now, just to clarify though, this doesn't mean o1 is smarter than a PhD overall, it just shows it's better at solving certain problems that we'd usually expect a PhD to handle. All right, so we started off with the scaling laws as the one dimension to improve model performance. The Chinchilla paper showed this second dimension, the benefit of scaling both the model size and the data it was trained on. We now have this third dimension where there's a focus on inference. One is to reduce the cost of inference time by running smaller and more capable models, and the other is the improved performance by completing additional processing during inference time when running these models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (5), [[Large Language Models (LLM)|Large language models]] (3), [[Hardware]] (1), [[Privacy]] (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Env Vars:** gpqa (1)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Going further with large language models](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-large-language-models/going-further-with-large-language-models?u=76281980&t=0)** - [Instructor] If you haven't had enough about [[Large Language Models (LLM)|large language models]] and you want to understand what's happening under the hood, then check out my other course, which is available on [[LinkedIn]] Learning, titled Transformers: Text Classification for NLP using BERT. If you want to get the latest information on [[Generative AI]], you're welcome to connect with me on LinkedIn. The race for widespread AI adoption is on. Stay tuned. This space is only going to get more interesting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[Generative AI]] (1)
> **Env Vars:** nlp (1), bert (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jonathan Fernandes]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-large-language-models-4410730/codespaces)

## Skills Covered

- Artificial Intelligence (AI)
- Large Language Models (LLM)

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

---

[↑ Back to top](#)