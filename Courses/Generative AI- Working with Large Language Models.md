---
type: course
slug: generative-ai-working-with-large-language-models
url: "https://www.linkedin.com/learning/generative-ai-working-with-large-language-models"
duration_minutes: 82
duration: 1h 22m
level: Advanced
updated: 3/17/2025
learners: 13970
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Natural Language Processing (NLP)
  - Transformer Models
exercise_files: true
github: "https://github.com/LinkedInLearning/generative-AI-working-with-large-language-models-2495200/codespaces"
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/natural-language-processing-nlp
  - skill/transformer-models
status: not-started
created: 2026-04-17
---

# Generative AI: Working with Large Language Models

> Transformers have quickly become the go-to architecture for natural language processing (NLP). As a result, knowing how to use them is now a business-critical skill in your AI toolbox. In this course, instructor Jonathan Fernandes walks you through many of the key large language models (LLMs) developed since OpenAI first released GPT-3, as well as the key contributions of each of these LLMs.

> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models) | 1h 22m | Advanced | 14K learners

## Instructor

- [[Jonathan Fernandes]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/generative-AI-working-with-large-language-models-2495200/codespaces)

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Natural Language Processing (NLP)
- Transformer Models

## Table of Contents

### Introduction

#### Learning about Large Language Models
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=0)** - Large language models have made news for the last couple of years.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=4)** If you've heard about them and want to know more, then this course is for you.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=8)** Hi, I'm Jonathan Fernandes and I work with large language models every day.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=13)** Join me as we look at GPT-3.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=15)** In the process, we'll also focus on the large language models that have been developed since like Google's GLaM and Palm Model, Deep Mine's Gopher and Chinchilla, OPT from Meta and Bloom from Hugging Face.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=29)** These are exciting times to be working in AI, so let's get to it.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (1), opt (1)
> **Code Keywords:** let (1)
> **Speakers:** - large (1)


### 1. Transformers in NLP

#### What are large language models?
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=0)** - [Narrator] Have you seen the terms BERT or GPT-3 in articles online?
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=5)** These are examples of large language models and their underlying architecture is based on transformers.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=12)** Transformers were proposed by a team of researchers from Google in 2017 in a paper called Attention is All You Need.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=19)** This paper has been a turning point in NLP.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=22)** Now, parameters are values in a model that are updated during the training of a model.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=28)** Large language models have millions and often billions of such parameters and are trained on enormous amounts of data.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=35)** Most of what we look at is focused on the two-year period since the release of GPT-3.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=41)** So that's from May, 2020 to July of 2022.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=45)** We'll cover models released by Google Research including GLaM and PaLM, Gopher and Chinchilla, that was released by Deep Mind, and the Megatron-Turing NLG by Microsoft and Nvidia.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=57)** And finally, we'll wrap up with the work done by both Meta AI and Hugging Face to make large language models available to researchers outside of big tech.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=66)** Meta AI released the open tree train transformer and Hugging Face coordinated a research effort with over 1000 researchers to create the blue model.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=76)** As you can see, there's been a lot of activity with large language models since the release of GPT-3.
>
> **[1:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=81)** Before we get into the architecture details of these models let's look at a couple of examples of where they're used in production.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (3), bert (1), nlp (1), nlg (1)
> **Code Keywords:** finally, (1), let (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### Transformers in production
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=0)** - [Instructor] If you're like me, the only time you watch the winter sport curling is every four years during the Winter Olympics.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=7)** Now, whenever I've used Google search in the past, I've often only entered keywords such as curling objective.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=13)** In 2019, Google started using BERT as part of search.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=18)** Now BERT is an acronym for Bidirectional Encoder Representations from Transformers as one of the first large language models developed by the Google research team.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=29)** Now that I know that Google Search uses BERT, I know that I can enter a more English sounding phrase like what's the main objective of curling?
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=37)** And the answer back from Google doesn't give me the most relevant page but the answer to my question is in bold.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=44)** You can see that it's here.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=45)** The goal is to deliver the stone from one side of the sheet to the circular scoring area on the other side called the house.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=52)** Here's another example of transformers in production.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=55)** Again, using BERT.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=56)** In the past, if you did a Google search using the phrase, can you get medicine for someone pharmacy, it would've picked up on the fact that for someone was a really important part of a query because you're looking for another person to pick up the medicine.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=71)** Google search would've returned results about getting a prescription filled which isn't relevant in this context.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=77)** Now with BERT, Google search captures the important nuance that another person picks up the medicine and it returns results about having a friend or a family member pick up a prescription.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=88)** The quality of Google search has improved significantly using BERT.

> [!info]- Semantic Content
>
> **Env Vars:** bert (6)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Transformers: History
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=0)** - [Instructor] The models based on the original transformer paper from 2017 have evolved over the years.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=5)** One of the challenges with training large language models in 2017 was that you needed labeled data.
>
> **[0:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=11)** This required a lot of time and effort.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=14)** The ULMFiT model proposed by Jeremy Howard and Sebastian Ruda provided a framework where you didn't need labeled data.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=22)** And this meant large corpus of text, such as Wikipedia, could now be used to train models.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=28)** In June of 2018, GPT or Generative Pre-Trained Model, which is developed by Open AI, was the first pre-trained transformer model.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=37)** Now, this was used for fine tuning on various NLP tasks and obtained state-of-the-art results.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=43)** And a couple of months later, researchers at Google came up with BERT or Bidirectional Encoder Representations from Transformers.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=51)** We saw a couple of examples of BERT being used in production at Google.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=55)** In February, 2019, Open AI released a bigger and better version of GPT called GPT-2.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=62)** This made headlines because the Open AI team didn't want to release the details of the model because of ethical concerns.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=69)** Now, later that year, Facebook's AI research team released BART.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=73)** Google released T5.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=75)** Both of these models are large pre-trained models using the same architecture as the original transformer.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=82)** And at the same time the team at Hugging Face bucked the trend.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=85)** Everyone was moving to bigger models, they released DistilBERT, which is a smaller, faster and lighter version of BERT, and had 95% of BERT'S performance and reduced the size of the BERT model by 40%.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=99)** In May, 2020, Open AI released the third revision of their GPT models, GPT-3, which is excellent at generating high-quality English sentences.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=109)** Now, although Open AI provided a lot of details in their GPT-3 paper, they didn't release the dataset they used or their model weights.
>
> **[1:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=118)** So EleutherAI, which is a group of volunteer researchers focused on the open source release of language models and the data sets they used to train them.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=127)** They released GPT-Neo, which has 2 billion parameters in March of 2021, GPT-J, which has 6 billion parameters a couple of months later and GPT-NeoX, which has 20 billion parameters in Feb of 2022.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=143)** Now, this graph shows you the years on the x-axis and the number of parameters on the y-axis.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=148)** Now, because the graph almost looks like a straight line you might think that the number of parameters has increased linearly over the years.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=155)** The number of parameters in billions is a log scale on the y-axis.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=159)** So the scale increases by 10 times each time you move up one unit.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=164)** So BERT has around 110 million parameters.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=167)** BERT Large has 340 million parameters and the largest GPT-2 model has 1.5 billion parameters.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=175)** The biggest GPT-3 model that Open AI created has 175 billion parameters.
>
> **[3:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=182)** And as you can see, over the years the trend has been for the language models to get larger.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (11), bert (7), nlp (1), bart (1)
> **Definitions:** is a  (3)
> **Versions:** 1.5 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Training Transformers and Their Architecture

#### Transfer learning
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=0)** - [Instructor] One of the most important techniques used in deep learning is transfer learning.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=4)** It's made up of two components, pretraining and fine-tuning.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=8)** Your starting point is the model architecture, and all of the weights of the parameters are random.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=14)** The model has no knowledge of language, and you then pretrain the model.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=18)** This pretraining piece is very resource-heavy.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=21)** You need loads of data, and this could include the entire Wikipedia corpus and a wide range of other corpuses.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=27)** You also need a lot of compute.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=29)** This is normally several hundreds to thousands of hardware accelerators, depending on how quickly you want to train your model.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=36)** And these hardware accelerators are usually Nvidia's GPUs or Google's TPUs.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=42)** At the end of this training, which can take days, weeks, or months, you have a model that has a very good understanding of the language you've trained it on.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=49)** Now, fortunately, when the authors of BERT released their paper, they released the model architecture and the weights.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=56)** This means we can use their pretrained model, which has a very good understanding of languages, as our starting point.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=63)** So we can then go ahead and fine-tune this model for our specific task.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=67)** In the case of BERT, this fine-tuning task could be text classification, named entity recognition, question answering, and so on.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=75)** Now, this fine-tuning step involves training our model with labeled data.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=80)** So for example, with sentiment analysis, we provide a whole lot of text examples and label each as either positive or negative.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=89)** Now, what's interesting is that we can typically get better accuracy by starting with a pretrained model and fine-tuning it on a task such as sentiment analysis than if we trained a model from scratch on sentiment analysis.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=103)** This is because the pretraining piece with large amounts of data allows you to have a model that has a very good understanding of language, which can then be used for other tasks.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=113)** Let's take a look at some of the pretraining tasks for BERT.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=117)** Now, BERT was fed Wikipedia and the BookCorpus data as input, and words were randomly masked out.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=123)** BERT then had to predict what the most likely candidates were for these masked words.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=128)** With next sentence prediction, it had to predict whether one sentence followed the other.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=133)** So 50% of the time, one sentence did follow the other, and these were labeled as is next.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=138)** And the other 50% of the time, a random other sentence from the corpus was used, and these were labeled as not next.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=145)** Now, let's compare the pretraining for some of the larger models.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=149)** So BERT was trained in 2018, the number of parameters was 109 million, and it took Google 12 days to train BERT.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=158)** Now, I've put an asterisk by the 8 times V100s because BERT wasn't trained on GPUs, but rather Google's equivalent, TPUs, or Tensor Processing Units.
>
> **[2:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=169)** The size of the dataset used for training was 16 gigabytes, and the training tokens were 250 billion.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=176)** Now, think of one word as being approximately equal to 1 1/2 tokens.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=181)** And finally, the data sources that was used to train BERT were Wikipedia and the BookCorpus, now, the BookCorpus being a large collection of free novels written by unpublished authors.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=192)** Now, it's difficult to try and visualize how many words there are in Wikipedia and the BookCorpus.
>
> **[3:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=197)** According to OpenAI's documentation, 1,500 words is approximately equivalent to 2,400 tokens.
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=206)** So this means a word is approximately 1.4 tokens.
>
> **[3:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=210)** And so if we say the average 300-page novel is around 100,000 words, that's 140,000 tokens.
>
> **[3:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=219)** So to put that in context, when BERT is trained on 250 billion tokens, that's approximately 1.8 million 300-page novels.
>
> **[3:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=231)** Looking again at pretrained models, RoBERTa was developed by Facebook in 2019.
>
> **[3:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=237)** The number of parameters was 125 million, and it has a very similar architecture to BERT.
>
> **[4:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=243)** And quite amazingly, Facebook managed to train this in a single day, and that's because they used a whopping 1,024 V100 GPUs.
>
> **[4:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=253)** Now, the size of the dataset was significantly larger than BERT's, so it was 160 gigabytes with 2 trillion tokens.
>
> **[4:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=262)** The data sources were Wikipedia and BookCorpus, as used with BERT, but also the Common Crawl news dataset, OpenWebText, and the Common Crawl stories.
>
> **[4:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=272)** Common Crawl is a raw webpage data from years of web crawling.
>
> **[4:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=276)** And OpenWebText is a dataset created by scraping URLs from Reddit with a score of three.
>
> **[4:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=283)** This is a proxy for the quality of the data response.
>
> **[4:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=287)** And finally, GPT-3 was released in 2020 by OpenAI.
>
> **[4:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=291)** The number of parameters for the largest model was 175 billion.
>
> **[4:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=297)** The training time was probably around 34 days, and the infrastructure used was 10,000 V100 GPUs, and this was primarily an Azure infrastructure.
>
> **[5:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=307)** The size of the dataset used for training was 4,500 gigabytes, which is 300 billion tokens.
>
> **[5:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=314)** And the dataset source was Wikipedia, Common Crawl, WebText2, Books1, and Books2.
>
> **[5:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=321)** So what are the benefits of transfer learning?
>
> **[5:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=323)** Well, it takes much less time to train a fine-tuned model.
>
> **[5:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=326)** For BERT, the author suggests two to four epochs of training for fine-tuning.
>
> **[5:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=331)** This is in contrast to the thousands of hours of GPU time required for pretraining.
>
> **[5:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=337)** We also don't need another massive dataset to fine-tune for a certain use case.
>
> **[5:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=341)** This is in contrast to the large corpuses, such as Wikipedia and others, which are typically hundreds of gigabytes.
>
> **[5:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=348)** And finally, we're able to achieve excellent results.
>
> **[5:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=351)** We saw this phenomena when using transfer learning with computer vision several years ago when working with the ImageNet dataset, and this technique has worked in NLP too.
>
> **[6:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=361)** We've looked at the two components of transfer learning, pretraining and fine-tuning, and why they're such powerful techniques for NLP.
>
> **[6:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=368)** Next, we'll take a look at the transformer architecture.

> [!info]- Semantic Content
>
> **Env Vars:** bert (14), v100 (2), nlp (2), gpt (1), gpu (1)
> **Code Keywords:** finally, (3), let (2), case. (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), for example (1)
> **Versions:** 1.4 (1), 1.8 (1)
> **Speakers:** - [instructor] (1)

#### Transformer: Architecture overview
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=0)** - [Instructor] You're probably wondering what the transformer architecture looks like.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=4)** So let me head over to the attention is all you need paper and show you.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=8)** We'll divide this architecture into two sections so that we can understand each component.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=12)** The left half of the diagram is known as an encoder and the right hand side is known as a decoder.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=18)** We feed in the English sentence such as I like NLP into the encoder at the bottom of the diagram.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=25)** And the transformer can act as a translator from English to German.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=28)** And so the output from the decoder at the top of the diagram is the German translation, ich mag NLP.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=35)** The transformer is not made up of a single encoder, but rather six encoders.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=40)** Each of these parts can be used independently depending on the task.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=44)** So encoder-decoder models are good for generative tasks such as translation or summarization.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=51)** Examples of such encoder-decoder models are Facebook's BART model and Google's T5.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=57)** Encoder-only models are good for tasks that require understanding of the input, such as sentence classification and named entity recognition.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=66)** Examples include the family of BERT models such as BERT, RoBERTa, and DistilBERT amongst others.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=72)** Decoder models are good for generative tasks such as text generation.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=77)** Examples include the GPT family such as GPT, GPT-2 and GBT-3.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=82)** In fact, all of the models after GPT-3 that we look at in this course are decoder models.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=89)** So in summary, transformers are made up of encoders and decoders, and the tasks we can perform will depend on whether we use either or both components.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), nlp (2), bert (2), bart (1), gbt (1)
> **Analogies:** such as (4)
> **Code Keywords:** let (1), require (1)
> **Definitions:** known as (2)
> **Speakers:** - [instructor] (1)

#### Self-attention
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=0)** - [Instructor] One of the key ingredients to transformers is self-attention.
>
> **[0:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=3)** In this example text, "The monkey ate that banana because it was too hungry."
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=8)** How is the model able to determine that the it corresponds to the monkey and not the banana?
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=14)** It does this using a mechanism called self-attention that incorporates the embeddings for all the other words in the sentence.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=20)** So when processing the word it, self-attention will take a weighted average of the embeddings of the other context words.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=27)** The darker the shade, the more weight that word is given and every word is given some weight.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=32)** And you can see that both banana and monkey come up as likely for the word it.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=36)** But monkey has the higher weighted average.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=39)** So what's happening under the hood?
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=41)** As part of the self-attention mechanism, the authors of the original transformer take the word embeddings and project it into three vector spaces, which they called query, key, and value.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=52)** Projecting word embeddings into new vector spaces is a tool that mathematicians use to get different representations of the word embeddings.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=61)** Now, in order to calculate to the attention weights, we'll take in as input the query, key, and value vectors.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=68)** We then calculate the score of each word to determine how much focus to place on other words in the sentence.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=74)** We want to try and figure out how the query and the key vectors relate to each other.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=79)** This is done by taking the dot product of the query vector and the key vector.
>
> **[1:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=85)** Queries and keys that are similar will have a large dot product.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=89)** While those that don't share much in common will have little to no overlap.
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=93)** Now, if you've forgotten your linear algebra from school, the T means that we're performing a transpose operation on the vector K.
>
> **[1:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=100)** So here N is the dimension of these vectors.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=103)** We then divide this by the square root of N to scale the dot product attention, and so reduce its size.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=110)** We now have the logits, and we can then convert this to probabilities by using the softmax function.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=117)** We now multiply each value vector by the softmax score.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=122)** We can then sum up the weighted value vectors, and this produces the self-attention calculation for a word.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=128)** This process takes place for every single word in the sentence.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=131)** And as we've seen in this video, self-attention allows us to apply a different weight to words in a sentence.

> [!info]- Semantic Content
>
> **Code Keywords:** self (6), function (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Multi-head attention and Feed Forward Network
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=0)** - Earlier, we looked at how self-attention can help us provide context for a word for the sentence, the monkey ate that banana because it was too hungry.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=9)** But what if we could get multiple instances of the self-attention mechanism so that each can perform a different task?
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=16)** One could make a link between nouns and adjectives.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=19)** Another could connect pronouns to their subjects.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=21)** Now that's the idea behind multi-headed attention.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=25)** And what's particularly impressive is we don't create these relations in the model.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=29)** They're fully learned from the data.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=31)** So BERT has 12 such heads and each multi-head attention block gets three inputs, the query, the key and the value.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=40)** These are put through linear or dense layers before the multi-head attention function.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=45)** The query, key and value are passed through separate fully connected linear layers for each attention head.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=51)** And this model can jointly attend to information from different representations and at different positions.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=57)** By having 12 self-attention heads, the BERT model is able to focus on several tasks at once, that's allowing it to make richer connections between words.
>
> **[1:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=67)** And just so you know, for some of the larger language models, they have significantly more heads.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=72)** As an example, GPT three has 96 such heads.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=76)** So the key takeaway from this video is that multi-head attention allows us to make richer connections between words and none of these connections are created, but they're all learned by the model.

> [!info]- Semantic Content
>
> **Code Keywords:** self (3), function (1)
> **CLI Commands:** make (3)
> **Env Vars:** bert (2), gpt (1)
> **Speakers:** - earlier (1)


### 3. Large Language Models

#### GPT-3
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is probably the most well-known large language model.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=4)** Let's take a look at what the letters GPT represent in turn.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=8)** G is for generative, as we're predicting a future token, given past tokens.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=14)** P is for pre-trained, as it's trained on a large corpus of data, including English Wikipedia, among several others.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=21)** This involves significant compute time and costs.
>
> **[0:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=24)** And finally, the T corresponds to a transformer, and we're using the decoder portion of the transformer architecture.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=32)** GPT-3's objective is simple.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=34)** Given the preceding tokens, it needs to predict the next token.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=38)** So these are known as causal or autoregressive language models.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=42)** This is very similar to how predictive text works on your phone.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=45)** So if you type roses, the next suggested word is likely to be are followed by red and so on.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=52)** GPT-3 was trained on the English Wikipedia, which is around 2 1/2 billion words, Common Crawl, WebText2, Books1, and Books2.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=62)** Now, Common Crawl is raw webpage data from years of web crawling.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=66)** WebText is a dataset created by scraping URLs from Reddit with a score of three, and this is a proxy for the quality of the data response.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=75)** And the Books1 and Books2 corpus are likely to be the BookCorpus, which is a large collection of free novels written by unpublished authors.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=84)** Earlier, we looked at how masked language modeling and next sentence prediction were the pre-training tasks for BERT.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=90)** With GPT-3, the pre-training task was causal language modeling.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=94)** This means its pre-training task is that it needs to predict the next word in a text.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=99)** So what this means is that we can train the model in a self-supervised way, and we don't have to annotate our datasets.
>
> **[1:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=106)** We can then take all these humongous datasets and use them to train our model.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=111)** Additionally, we want to use some decoding algorithms such as beam search, to give us a balance of coherent language and diversity, so we don't get sentences repeated.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=121)** For a couple of years, the focus of researchers was getting a large corpus of data and then training a language model.
>
> **[2:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=128)** Now, if you wanted to use that language model for a specific task, say, sentiment analysis, then you'd need to give it hundreds of examples of sentences that were labeled as either having a positive or negative sentiment and train the model on these sentences and labels, and the model would produce excellent results.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=145)** Now, let's take an example from the IMDB dataset, which are movie reviews that are either positive or negative.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=151)** So here's the text, brilliant execution in displaying once and for all, this time in the venue of politics, and so on.
>
> **[2:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=157)** And this is labeled with a 1, which means it's a positive review.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=161)** The second text goes like this, this piece ain't really worth a comment.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=165)** It's simply the worst horror movie I've ever seen, and so on.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=168)** And this is labeled with a 0, which means it's a negative review.
>
> **[2:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=171)** Now, if you had a totally different task, like providing some sentences and a couple of questions, and the model had to find the answer to the questions in the sentences, the same model that you use for sentiment analysis would fail miserably at this task.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=185)** So you'd have to start again with your initial language model and give it hundreds examples of text and questions and where the answers are, and it would get good at this task.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=193)** Now, what makes this different to how you and I operate is that if we have to learn a new task, we can do a reasonable job if we're given a clear set of instructions and given just a couple of examples.
>
> **[3:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=205)** So the question is, what if we could create a language model that if we give it a new task and a couple of examples with the expected output, that it would be able to perform well on these tasks?
>
> **[3:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=216)** And GPT-3 does just that.
>
> **[3:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=218)** And what's really remarkable is that the way you interact with these models is with a prompt.
>
> **[3:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=223)** This means that if you sometimes don't get the answer you expect, you can change the prompt, and you might get another and hopefully better answer.
>
> **[3:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=230)** So this means you can provide a task and see how it performs without providing any examples or expected output.
>
> **[3:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=236)** This is an example of zero-shot learning.
>
> **[3:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=239)** One-shot learning is where you provide a task and one example with the expected output.
>
> **[4:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=243)** And as the name suggests, few-shot learning is giving the model a couple of examples with the expected output.
>
> **[4:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=249)** Let's summarize our understanding of GPT-3 in a table.
>
> **[4:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=252)** One of GPT-3's primary objective was few-shot learning.
>
> **[4:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=256)** This performed best on the largest of the GPT-3 models, the 175-parameter model.
>
> **[4:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=262)** GPT-3 provides an easy way to interact with models.
>
> **[4:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=266)** In the next video, we'll look at a couple of examples of working with the GPT-3.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (11), bert (1), imdb (1)
> **Code Keywords:** let (3), finally, (1), self (1), this, (1)
> **Definitions:** is a  (3), known as (1), means that (1), is an  (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### GPT-3 use cases
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=0)** - Open AI provides access to GPT-3 via an API, and you can sign up for an account if you want to try these out.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=6)** So let's take a look at a couple of examples.
>
> **[0:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=9)** So let's head over to the playground and let's select classification from the dropdown list.
>
> **[0:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=17)** Now this is a classification example available by default.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=20)** Let's go ahead and clear this and let's enter this one.
>
> **[0:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=24)** So the following is a list of companies and the categories they fall into.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=28)** So Unilever is a consumer goods.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=30)** Uber is to do with transportation and technology, Burger King, fast food, Intel, computer chips.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=36)** Now if we go ahead and enter FedEx, and you can see that the model correctly responds with delivery.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=45)** Now let's enter Facebook and select submit.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=49)** Now that looks like a reasonable category.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=51)** Now we all know that Facebook rebranded to Meta at the end of 2021.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=55)** So what happens if we enter Meta instead?
>
> **[1:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=60)** Now, if you look up the notes for Open AI's model training data, this training cuts off in 2021.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=66)** So I'm not sure if this includes all of 2021, but Meta and technology seems to be a reasonable answer.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=73)** Now I find it absolutely amazing that we can interact with these models in not using some complex code, but almost having a conversation about the task using prompts.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=82)** Let's take a look at an example.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=84)** Now, one of my favorites is a use case with GPT-3 and summarizing text for a second grader.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=91)** And let's copy the data from Wikipedia about GPT-3, and let's see how it summarizes data about itself.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=98)** So summarize this for a second grade student, Generative Pre-train Transformative 3 is an auto aggressive language model and so on.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=105)** And let's see if it's able to summarize this.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=109)** And you can see that it does a terrific job.
>
> **[1:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=111)** GPT-3 is a machine learning model that generates human-like text.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=115)** It is the third generation in the GPT-n series, and is the successor to GPT-2.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=120)** It's train to predict what the next token is, and can generate text that is so realistic that's difficult to tell if it was written by a human.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=127)** Now let's go ahead and experiment a little bit with some other tasks with GPT-3.
>
> **[2:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=131)** So I'm going to select more examples.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=134)** Now let's try and create a creative ad.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=136)** So let me go ahead and just look through the list again.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=141)** Okay, let's select ad from product description.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=145)** Now write a creative ad for the following product to run on Facebook aimed at parents.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=149)** So I'm going to create a ad for a bot to help students in high school to learn how to code in Python, and let's see if it comes up with some reasonable content.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=158)** And so that's a bot to help students in high school to learn how to code in Python.
>
> **[2:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=163)** And let's see what ad GPT-3 has come up with.
>
> **[2:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=166)** Python is the language of the future.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=167)** Give your high school student a leg up on their future career by helping them to learn Python coding with our easy to use bot.
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=174)** So that's absolutely brilliant.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=176)** Now there are examples of summarization and translation that I can get into.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=180)** Let's take a look at one or two more examples.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=185)** And let's pick a fun one about recipes, so.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=192)** And I want to create a recipe for chocolate chip cookies.
>
> **[3:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=196)** So I'm just going to replace all of the ingredients and type chocolate chip cookies.
>
> **[3:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=204)** And let's see what instructions GPT-3 comes up with.
>
> **[3:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=208)** So preheat oven to 350 degrees Fahrenheit.
>
> **[3:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=211)** In a bowl, cream together with the butter, chocolate, and eggs.
>
> **[3:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=213)** In another bowl, mix together the flour, cocoa powder and white chocolate.
>
> **[3:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=217)** And finally, enjoy your delicious chocolate chip cookies.
>
> **[3:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=220)** So these seem to be very reasonable instructions for baking chocolate chip cookies.
>
> **[3:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=225)** Now let's go ahead and try and trick GPT-3.
>
> **[3:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=230)** So let me go ahead to study notes.
>
> **[3:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=237)** So what are five key points I should know about, and let's say running backwards.
>
> **[4:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=244)** And let's see what advice GPT-3 has for us.
>
> **[4:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=248)** So running backwards is a great way to improve your speed and agility.
>
> **[4:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=252)** Okay, so that's clearly incorrect advice.
>
> **[4:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=255)** Running backwards also helps improve your balance and coordination.
>
> **[4:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=258)** It's important to keep your head up and your back straight when running backwards.
>
> **[4:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=262)** Make sure to take short, quick steps on running backwards.
>
> **[4:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=265)** Always warm up and stretch before running backwards to avoid injury.
>
> **[4:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=268)** So we can see that there are a couple of poor responses there in terms of those five points.
>
> **[4:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=273)** Now let's change running backwards to running blindfolded and see if GPT-3 improves on its advice.
>
> **[4:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=282)** Now what you should know is that each time I generate these responses, they're going to be different.
>
> **[4:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=286)** So if you go ahead and generate these responses, you're going to get different responses than I have.
>
> **[4:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=292)** So the first suggestion is do not attempt to run blindfolded without a trusted guide, so that's very good advice.
>
> **[4:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=296)** Be aware of your surroundings and where you're running.
>
> **[4:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=299)** Be cautious of obstacles in your path.
>
> **[5:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=301)** Follow your guides instructions carefully, and do not remove your blindfold until you're safely at your starting point.
>
> **[5:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=306)** So most of this seems to be very good advice.
>
> **[5:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=309)** Unfortunately, the fifth one, do not remove your blindfold until you're safely back at your starting point, isn't great advice.
>
> **[5:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=316)** So all in all, GPT-3 performed very well there.
>
> **[5:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=319)** So we've looked at a wide variety of different tasks that GPT-3 can do in this video.
>
> **[5:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=324)** And in general, the results are very impressive.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), default. (1), this. (1), finally, (1)
> **Env Vars:** gpt (14), api (1)
> **Definitions:** is a  (6), is an  (1)
> **CLI Commands:** python (4), find (1), make (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be aware (1)
> **Speakers:** - open (1)

#### Challenges and shortcomings of GPT-3
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is not without its problems.
>
> **[0:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=2)** GPT-3 was trained on data that is biased.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=5)** Now, human language and text reflects our bias, and you and I are in many sense privileged as we have access to computers, we can easily publish our thoughts online, whether that's through a blog post or on a site like Reddit.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=16)** And part of this data that GPT-3 was trained on was data that was deemed interesting on Reddit based on up votes from other users.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=23)** Unfortunately, this means that biases and dominant worldviews then make it into training data and are encoded in large language models.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=31)** Let's see if there are examples of bias in the model.
>
> **[0:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=33)** So I'm going to head over to the OpenAI GPT-3 model.
>
> **[0:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=38)** So this is the playground.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=39)** Now, I'm not going to cherry pick any results.
>
> **[0:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=42)** I'm going to give them to you exactly as I see them.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=44)** So if we take our first sentence, So after a long day's work at the hospital, the nurse was tired because, and I select submit.
>
> **[0:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=52)** And you can see it continues with she had to work a double shift.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=55)** Now you can see that the nurse is female.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=57)** This is demonstrating gender bias.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=59)** Now, if we try another sentence this time using the doctor as the profession, and we go ahead and select submit.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=68)** And you can see that GPT-3 switches things around and the doctor is male.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=71)** This is again showing gender bias.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=73)** Nurses are almost always female, and doctors are almost always male.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=77)** Now, if we do the same exercise and we have another sentence, we ask the receptionist for directions to our room and select submit.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=86)** So it looks like the receptionist is female.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=88)** Again, this is an example of gender bias.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=91)** Now, if we change the sentence, after long meeting with the board, the company president was tired because, and this is another example of gender bias, because there's no indication that the company president is ever female.
>
> **[1:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=103)** And just one last one.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=105)** After spending the entire morning staring at the screen, the programmer stepped away for lunch because he was hungry.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=112)** Now, I've tried all these examples hundreds of times each and the genders are very rarely switched.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=117)** I've never seen a female programmer or a male nurse.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=120)** At least in the examples we've looked at, lower skilled and lower paid jobs are more readily linked to women, and higher skilled and higher paid ones more readily linked to men.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=129)** And certain professions are more directly linked to men rather than women.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=133)** So are there more female nurses than male nurses?
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=135)** Absolutely.
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=137)** Are there more receptionists that are female than male?
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=139)** Yes, again, so what's the problem?
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=142)** Most people now apply for jobs online, and in many cases where resumes are filtered by AI systems, these are downstream tasks from large language models.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=150)** So where the model has a strong association between gender and certain professions, this means there's a bias where there are more men for certain types of employments.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=159)** So for example, you don't want a resume to be preferred only because it's clear that the applicant is a man rather than a woman.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=165)** There are other examples of gender bias in GPT, and we haven't carried out an in depth study.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=170)** But it's clear that we need a human in the loop to check the output for some of the downstream tasks.
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=174)** So where does this bias come from?
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=176)** Well, it's clearly from the data the models were trained on.
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=179)** This includes Reddit and Common Crawl, amongst others.
>
> **[3:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=182)** Now in early 2022, OpenAI tried to address some of these challenges by creating a new model called InstructGPT.
>
> **[3:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=189)** They hired a team to help label and assess whether the response from the model was in line with the intent of the prompt.
>
> **[3:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=195)** So let's say the model was given a prompt, such as writer story about a wise frog.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=200)** If the response was in line with the same, then the model received a more favorable score.
>
> **[3:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=204)** If instead, the response was off topic and used violent language and was biased in content, then the model received a negative score.
>
> **[3:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=211)** They created a reward function to get the model to pick the one that the labelers would prefer.
>
> **[3:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=216)** The more it got right, the more it was rewarded.
>
> **[3:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=219)** One of the other major concerns with GPT-3 and large language models is their environmental impact.
>
> **[3:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=225)** A carbon emission study of large language models was conducted by Google and Berkeley in 2021 and found that training GPT-3 would've resulted in energy consumption of almost 1,300 megawatt hours and a release of 550 tons of CO2.
>
> **[4:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=242)** We've looked at two of these shortcomings of GPT-3: bias and environmental impact.
>
> **[4:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=246)** It's not surprising that some of the large language models that follow GPT-3 tried to optimize the model and address these challenges.
>
> **[4:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=254)** And we'll take a look at some of them next.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (10), co2 (1)
> **Code Keywords:** let (2), function (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### GLaM
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=0)** - [Instructor] The Google research team noted that training large dense models requires significant amount of compute resources, and they proposed a family of language models called GLaM or Generalist Language Models.
>
> **[0:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=13)** They use a sparsely activated mixture of experts architecture to scale and because they're using a sparse model, they have significantly less training costs compared to an equivalent dense model.
>
> **[0:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=25)** Now these models use only 1/3 of the energy to train GPT-3 and still have better overall zero shot and one shot performance across the board.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=35)** The largest GLaM model has 1.2 trillion parameters which is approximately seven times larger than GPT-3.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=44)** Now the GLaM model architecture is made up of two components.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=48)** The upper block is a transformer layer and so you can see the multi-head attention and the feed forward network.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=55)** And in the bottom block you have the mixture of experts layer.
>
> **[0:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=59)** Again, you have a multi-head attention at the bottom and instead of the feed forward network, you have a mixture of experts layer.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=66)** Each layer here consists of a collection of independent feed forward networks and these are known as the experts.
>
> **[1:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=73)** You can see the gating function in the bottom block and this will use a soft max function to help determine which of these experts will process the input.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=83)** Let me give you an example.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=84)** So let's say our input tokens was the phrase roses are red and violets are blue and the blue grid represents the 64 experts.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=95)** A gating module dynamically selects two of the experts for the first token roses.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=101)** For the next token, are, as in roses are, two different experts would be dynamically selected here.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=107)** Now, even though each mixture of expert layer has many more parameters the experts are sparsely activated.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=114)** This means that for a given input token, only a limited subset of experts is used.
>
> **[2:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=120)** Now during training, each mixture of experts layers gating network is trained to use its input to activate the best two experts for each token of an input sequence.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=133)** During inference, the learned gating network dynamically picks the two best experts for each token.
>
> **[2:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=140)** And as a result, you can see that when we compare a dense decoder model such as GPT-3 with its 175 billion parameters, all of them are activated when a token is inputted into the model.
>
> **[2:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=153)** With the GLaM model with 64 experts, the total number of training parameters is 1.2 trillion, but only 96.6 billion of these are activated during training.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=165)** So let's wrap up this section by comparing it to GPT-3.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=168)** So the objective of Google's GLaM model is to reduce the training and inference cost using a sparse mixture of experts model.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=177)** Although the actual size is 1.2 trillion, we've seen how it only uses a portion of this for both training and inference tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (2), module (1)
> **Env Vars:** gpt (4)
> **Versions:** 1.2 (3), 96.6 (1)
> **Definitions:** is a  (1), known as (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Megatron-Turing NLG Model
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=0)** - [Instructor] A lot of the research after GPT-3 was released seemed to indicate that scaling up models improved performance.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=7)** So Microsoft and Nvidia partnered together to create the Megatron-Turing NLG model, a massive three times more parameters than GPT-3.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=18)** Modelwise, the architecture uses the transformers decoder just like GPT-3, but you can see that it has more layers and more attention heads than GPT-3.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=28)** So for example, GPT-3 has 96 layers while as Megatron-Turing's NLG has 105.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=35)** GPT-3 has 96 attention heads, and Megatron-Turing's NLG model has 128 and finally, Megatron-Turing's NLG model has 530 billion parameters versus GPT-3's 175 billion.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=51)** Now, the researchers identified a couple of challenges with working with large language models.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=56)** It's hard to train big models because they don't fit in the memory of one GPU because it would take a long time to do all the compute operations required.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=65)** Efficient parallel techniques, scalable on both memory and compute, can help to use the full potential of thousands of GPUs.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=74)** Although these researchers achieved superior zero, one and few-shot learning accuracies on several NLP benchmarks and established some new state-of-the-art results, a lot of their success is probably more around the super-computing hardware infrastructure that was developed with an enormous 600 Nvidia DGX A100 nodes.
>
> **[1:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=97)** To wrap this video up, let's add the Megatron-Turing language model to the list so that we can compare it with the other models.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=105)** The objective around the Megatron-Turing language model seems to be mostly around hardware infrastructure, and this model was one of the largest dense decoder models coming in at 530 billion parameters.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (7), nlg (4), gpu (1), nlp (1), dgx (1)
> **Code Keywords:** finally, (1), super (1), let (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### Gopher
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=0)** - [Instructor] The DeepMind research team released Gopher in January of 2022.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=5)** They released six flavors of the model ranging from 44 million parameters to 280 billion parameters.
>
> **[0:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=12)** And they also put together a diverse dataset called MassiveText and then they tested the model on 152 different tasks.
>
> **[0:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=21)** Now in the next few minutes, we'll look at each of these tasks in a little more detail.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=26)** So let's take a look at the architecture first.
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=28)** And you can see it's similar to GPT-3, where you're just using the decoder portion of the transformer.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=34)** And in their paper, the DeepMind team presented results for the six models with the smallest model being 44 million, all the way to 280 billion parameters.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=44)** Now, the reason the model sizes increase is because you can see that we're increasing the number of layers, the number of self attention heads, and so on as we move down the table.
>
> **[0:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=54)** Now let's take a look at what data Gopher was trained on.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=57)** One of the first things we notice about Gopher is that a significant dataset has been put together.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=63)** The DeepMind team called this MassiveText.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=65)** Now, this dataset has over 2.3 trillion tokens in total.
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=70)** What's interesting is that they only train on a subset of these tokens so the model doesn't get to see the whole dataset.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=77)** Now, over 99% of MassiveText is in English.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=80)** The remaining text is split between Hindi, followed by mostly a couple of European languages.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=86)** If we just look at the top six domains of MassiveWeb, you can see that four of these sources are either academic or scientific in nature.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=94)** These would be science [direct.com](https://direct.com), [gale.com](https://gale.com), [nih.gov](https://nih.gov), or the National Library of Medicine, and [academia.edu](https://academia.edu).
>
> **[1:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=104)** And so it shouldn't come as a big surprise that many of the tasks that Gopher is tested on are scientific in nature, such as high school chemistry, astronomy, clinical knowledge, and so on.
>
> **[1:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=115)** There are 152 different tasks that the model is evaluated on, and they range from reading comprehension and fact checking to mathematics, common sense, and logical reasoning.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=127)** And the results are pretty impressive.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=129)** Gopher outperforms the current state of the art large language models in 100 of the 124 tasks it was tested on.
>
> **[2:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=138)** So what you have on the X axis are the different tasks, so each vertical bar corresponds to a different task, and the Y axis is the percent change to the state of the art at that time.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=150)** So bigger is better.
>
> **[2:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=152)** Now the darker the shade of blue, the bigger the percent improvement.
>
> **[2:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=156)** And in general, you can see that Gopher improves over the current state of the art for fact checking and general knowledge tasks, STEM and medicine, ethics, and reading comprehension.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=167)** You can also see that there's more pink in this diagram.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=170)** This is where there was a decreased improvement compared to other models.
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=174)** So in general, it looks like Gopher doesn't do as well on tasks such as language modeling, mathematics, common sense, and logical reasoning.
>
> **[3:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=183)** Now, if you remember, six models were created in all.
>
> **[3:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=185)** So what's really interesting is that if we can compare the 280 billion parameter model versus the best performance of all the other smaller models up to 7.1 billion parameters, it looks like the bigger model performs better for things like fact checking and general knowledge, STEM and medicine, and reading comprehension.
>
> **[3:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=207)** On the other hand, for tasks such as mathematics, common sense, and logical reasoning, you're still getting better performance with a bigger model.
>
> **[3:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=214)** But the difference isn't as pronounced as for fact checking, STEM, and medicine type tasks.
>
> **[3:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=220)** In fact, there are cases where these smaller models perform better on mathematics, common sense, and logical reasoning tasks, as shown by the bars in pink.
>
> **[3:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=228)** So in general, we can conclude that the bigger 280 billion Gopher model has better accuracy scores compared to the smaller model.
>
> **[3:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=238)** Now, you might be wondering what's the difference when you compare GPT-3 to Gopher.
>
> **[4:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=243)** I've just picked a couple of tasks where Gopher performs the best against GPT-3.
>
> **[4:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=248)** These tasks include things like microeconomics, college biology, high school US history, and so on.
>
> **[4:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=254)** These are tasks that sound quite data heavy.
>
> **[4:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=256)** So when comparing the GPT-3 with five shot learning for both, so that's when you give it five examples to learn from, the Gopher model is about 25% more accurate than GPT-3 for these tasks.
>
> **[4:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=269)** Now, similarly, if we were to pick the five lowest performing scores when compared to GPT-3, then you can see that Gopher is marginally better than GPT-3 at elementary mathematics and college computer science and mathematics, global facts, and virology.
>
> **[4:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=285)** You can see by the pink bars that it also performs worse in high school mathematics and abstract algebra.
>
> **[4:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=291)** So it looks like Gopher compared to GPT-3 doesn't perform so well in general in mathematics and reasoning tasks.
>
> **[4:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=298)** Let's wrap things up by adding Gopher to our large language comparison table.
>
> **[5:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=303)** In general, Gopher improved the state of the art performance for 80% of the task.
>
> **[5:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=308)** The larger the model, with 280 billion parameters being the largest, the better the performance, but this wasn't the case across all tasks.
>
> **[5:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=316)** The performance on logical and mathematical reasoning tasks doesn't seem to improve with larger language models.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (8), stem (3)
> **Code Keywords:** let (3), self (1), from, (1), abstract (1)
> **URLs:** [direct.com](https://direct.com) (1), [gale.com](https://gale.com) (1), [nih.gov](https://nih.gov) (1), [academia.edu](https://academia.edu) (1)
> **Analogies:** such as (3), similar to (1)
> **Versions:** 2.3 (1), 7.1 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Scaling laws
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=0)** - [Instructor] Up to this point, we've looked at a couple of models, but now is a good time to try and understand why we have such large parameter models.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=8)** Around the time of the release of GPT-3, the OpenAI team released some results around what they called the scaling laws for large models.
>
> **[0:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=16)** They suggested that the performance of large models was a function of the model parameters, the size of the data set, and the total amount of compute available for training.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=26)** They performed several experiments on language models.
>
> **[0:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=29)** Let's take a look at some of the results.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=31)** On the Y axis is the test loss.
>
> **[0:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=34)** The test loss will converge for each of the models.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=37)** So the lower the test loss, the better performing the model.
>
> **[0:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=40)** Across the x axis is the number of parameters of the model.
>
> **[0:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=44)** You can increase the sizes of these models by making them wider or increasing the number of layers.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=49)** So as we go across, we're going with models with a hundred thousand to 10 million to 1 billion parameters.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=56)** So we can see here that the larger the model size, the better performing you would expect the model to be.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=61)** The graph in the middle, plots the test loss versus the data size.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=66)** The OpenAI researchers used a large model, so the model size would not limit the performance.
>
> **[1:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=71)** And they also used a training technique called early stopping, which stops training when the test loss reaches a minimum value.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=77)** Now, from the graph in the middle, you can see that there's again, this striking power log trend, much like we saw when plotting test loss against parameters.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=86)** So the larger the dataset size, the lower the test loss.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=90)** And finally, if we look at compute, the x axis is the number of petaflop compute days.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=96)** Now, petaflop day is around 10 to the power of 20 operations.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=101)** In the diagram, each of the blue lines correspond to the learning curves of different models of different sizes.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=108)** The reason that this moves to the right is that bigger models require more computation.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=113)** So for every token that is input for larger dense models, each of the parameters are involved in some way, and so they require more compute.
>
> **[2:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=121)** But you can see that the test loss reduces, meaning that the bigger models perform better.
>
> **[2:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=126)** The orange line is the maximum optimal amount of performance you can get for a given amount of compute.
>
> **[2:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=132)** So what this graph is telling you is that based on your compute budget, if you have more compute budget, use a larger language model, and if you have a smaller compute budget, use a smaller language model.
>
> **[2:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=144)** So if we take all three, what this is saying is that language modeling performance improves as we increase the model size, the data set size, and the amount of compute used for training.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=154)** For best performance, all three factors must be scaled up together.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=158)** The OpenAI team then go onto propose that as more compute becomes available, you can decide where you want to allocate this.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=165)** Either training a larger model using larger batches, or training for more steps.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=170)** And the conclusion that came to, was that most of the increase should go towards increasing the model size.
>
> **[2:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=176)** There will be some benefit to using more data and using large batch sizes, but minimal contribution if you train for more steps.
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=184)** One of the reasons why model sizes have just got bigger after GPT-3, is that these scaling low suggest that increasing the model size will give you the biggest benefit.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), function (1), let (1), finally, (1), this. (1)
> **Env Vars:** gpt (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Chinchilla
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=0)** - [Instructor] Up to this point, we've seen that the trend has been to increase the model size.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=4)** Interestingly, the number of training tokens used for most of these models has been around 300 billion.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=10)** Now, the DeepMind team's hypothesis was that Gopher was too large.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=14)** If you take the same compute budget, a smaller model trained on more data will perform better.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=19)** They then tested this hypothesis by training over 400 language models, ranging from 70 million to over 16 billion parameters with data sets from five to 500 billion tokens.
>
> **[0:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=32)** They then trained Chinchilla a 70 billion parameter model with 1.4 trillion training tokens and Chinchilla outperforms Gopher which has 280 billion parameters GPT-3 with its 175 billion parameters and Megatron-Turing NLG with its 530 billion parameters on a large range of downstream evaluation tasks.
>
> **[0:56](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=56)** As this is a smaller model this means less computes required for fine tuning and inference.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=62)** Now, let's think back to what we learned about scaling laws.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=65)** One of the key insights in this paper is that if you were training a large language model and you got a tenfold increase in computational budget, the majority of that should go towards increasing the size of the model.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=76)** They suggested that the model should increase by five and a half times and the number of training tokens should increase by 1.8 times.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=84)** The conclusion that the DeepMind team came to was very different.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=88)** For a tenfold increase in computational budget the model size and the number of training tokens should be scaled in equal proportions.
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=96)** Let's take a look at how they demonstrated this.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=99)** Now, on the X-axis we have flops or floating point operations which are a measure of computation, and on the Y-axis we have the number of parameters for the models.
>
> **[1:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=109)** On the graph, you can see that the GPT-3 model represented by the red star, the Gopher model represented by the yellow star, the Megatron-Turing model given by purple, and finally the Chinchilla model represented by the green star.
>
> **[2:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=123)** Now, we know that Chinchilla performs better than any of the models, but what's interesting is that it was trained on the same amount of compute as all of the larger models.
>
> **[2:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=133)** The point being that you don't need to have all of these larger models because they've all been undertrained.
>
> **[2:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=139)** We can see this in this table Chinchilla has 70 billion parameters, which is far fewer than any of the other models.
>
> **[2:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=145)** Compare this to GPT-3s, one 75 billion parameters and Gopher's 280 billion parameters and so on.
>
> **[2:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=152)** But what is different is that while most of the large language models have been trained on around 300 billion tokens, Chinchilla has been trained on 1.4 trillion tokens, which is almost five times as many tokens as has been the norm.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=165)** The DeepMind team set out to answer this question, given a fixed flops budget, how should one trade off model size and the number of training tokens?
>
> **[2:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=174)** Now, if you're given the number of flops, then you can figure out the number of parameters and the number of training tokens.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=180)** So here the smaller models are given by a purple color and the largest models are yellow.
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=186)** So what's happening is that for each of the flops we can figure out which model has the lowest training loss and we can then plot this.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=193)** We can then take all of the lowest training losses for each of the models and plot this against flops.
>
> **[3:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=198)** This way, given a certain number of flops we can predict how large the model needs to be.
>
> **[3:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=203)** With the example of Chinchilla, we know that the number of flops was over 10 to the power of 23, so the optimal number of parameters is going to be around 70.
>
> **[3:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=213)** Similarly, we can take the number of training tokens and plot that against the number of flops and determine for a specific number of flops how many training tokens we need.
>
> **[3:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=223)** Now from the graph earlier we know that the number of flops for Chinchilla was a little less than 10 to the power of 24.
>
> **[3:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=229)** Now, this means that if we know that this is the compute budget we can then figure out the number of parameters for an optimal model and the number of training tokens.
>
> **[3:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=238)** So let's confirm this for Chinchilla.
>
> **[4:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=240)** If we then draw a line for these number flops we can determine that any model that uses this many flops should have approximately 67 billion parameters.
>
> **[4:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=249)** And similarly, we need around 1.5 trillion training tokens.
>
> **[4:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=253)** And if we look here, it isn't surprising.
>
> **[4:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=255)** While Chinchilla has 70 billion parameters and was trained on 1.4 trillion tokens.
>
> **[4:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=262)** The DeepMind team took things a step further.
>
> **[4:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=264)** For a given flop budget what is the optimal parameter count?
>
> **[4:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=269)** So this time we have nine different training budgets which correspond to the nine different flops and the curves that you can see in this diagram.
>
> **[4:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=276)** Now we can plot these lowest loss values and the number of parameters in a model against flops.
>
> **[4:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=282)** Similarly, we can plot the number of training flops against the number of training tokens.
>
> **[4:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=286)** And again, for a compute budget for Gopher of less than 10 to the power of 24 gives us an optimal parameter size of 63 billion, and we need 1.4 trillion tokens to train on.
>
> **[4:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=298)** So this then begs the question, are the massive language models we are seeing today oversized?
>
> **[5:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=304)** So let's say we use the Gopher model as our baseline for their compute budget of 5.76 to the power of 23.
>
> **[5:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=311)** The optimal model parameter size should be 67 billion and the number of training tokens, 1.5 trillion.
>
> **[5:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=318)** Now, we know that the number of training parameters for Gopher was 280 billion.
>
> **[5:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=322)** This meant that their training budget should have been actually 17 times more and they would've required 5.9 trillion training tokens.
>
> **[5:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=332)** It doesn't mean that you can't train these larger models it's just that these models have not been optimally trained with enough data.
>
> **[5:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=339)** Now, remember that the Chinchilla model which is trained on 70 billion parameters with 1.5 trillion training tokens significantly outperformed a GPT-3 which has 175 parameters, Gopher which has 280 billion parameters and Megatron-Turing NLG which has 520 billion parameters.
>
> **[5:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=357)** So where does this leave us with the scaling laws that we looked at earlier?
>
> **[6:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=362)** The DeepMind team designed an interesting experiment to compare their findings with the scaling laws.
>
> **[6:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=367)** So given a compute budget of 10 to the power of 21 flops, determine the number of parameters required and how much a data is required to train it using the scaling laws prescribed by OpenAI and the ones determined by DeepMind.
>
> **[6:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=381)** So whichever model results in the most performant model is better.
>
> **[6:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=386)** With the scaling laws from the OpenAI team, a 10 to the power of 21 flops budget recommends a 4.68 billion parameter model.
>
> **[6:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=394)** And DeepMind's approach recommends a 2.8 billion parameter model.
>
> **[6:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=398)** The Y-axis is the training loss, so the lower the better, and the X-axis represents the number of training tokens.
>
> **[6:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=406)** And you can see that if we stopped at the number of training tokens recommended by OpenAI it would appear that it has a lower training loss and that it's a better model.
>
> **[6:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=415)** However, because DeepMind's 2.8 billion parameter model needs to be trained on more data, we see that it ends up with an overall lower training loss after being trained on more data.
>
> **[7:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=427)** And similarly, if you were to just plot the training loss versus the number of training flops.
>
> **[7:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=432)** Now we plot the two models, the 4.6 billion parameter model from OpenAI and the 2.8 billion parameter from DeepMind versus Compute.
>
> **[7:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=441)** You can see that we get a lower loss with the DeepMind model.
>
> **[7:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=445)** They concluded that you can end up with a more performant model using a smaller model with more training data.
>
> **[7:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=452)** So let's wrap up this section by adding Chinchilla to our list of models.
>
> **[7:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=456)** Our biggest takeaway is that the current large language models are significantly undertrained and from the table, Chinchilla is trained on more than four times as much data as any other large language model.
>
> **[7:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=468)** It's the smallest but also has the best performance results.

> [!info]- Semantic Content
>
> **Versions:** 1.4 (4), 1.5 (3), 2.8 (3), 1.8 (1), 5.76 (1)
> **Code Keywords:** let (5), this. (2)
> **Env Vars:** gpt (4), nlg (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** compare this to (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### BIG-bench
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=0)** - [Instructor] Now some of the challenges with the current benchmarks were that they were two narrow in scope, including tasks like language understanding or summarization.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=8)** It almost seemed like a research team would come up with some of these more basic tasks, and then a couple of months later, another research team would come up with a model that would ace these tasks.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=15)** What if there were some benchmarks that had some really challenging tasks?
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=20)** And that's pretty much the background to BIG-bench or Beyond the Imitation Game Benchmark.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=26)** A team of researchers from different institutions came up with over 200 tasks that humans perform well on but current state of the art language models don't.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=35)** They also included a team of human expert writers that performed all tasks in order to provide a strong baseline, and they were allowed to use all available resources including searching the internet.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=47)** The tasks are really diverse and are all available on GitHub.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=51)** Here are a couple of examples.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=53)** So Checkmate in One Move.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=55)** The input to the model is a sequence of chess moves in algebraic notation such that the next move will allow you to win the game in chess.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=63)** And the model needs to provide the correct move as the output.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=66)** If you don't know chess or are relatively new to the algebraic notation, you have to know the current state of the chess board which moves are legal and then you might be moving a piece that you moved perhaps 10 moves ago.
>
> **[1:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=77)** So it's a pretty challenging problem.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=79)** Now, if we scroll down and look at the performance plots, we can see here that the best human score is around 70.
>
> **[1:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=86)** An average human score or someone who might just know the basics of chess or had to look things up scored just under 10, and all the model performances were significantly worse than the average human performance.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=98)** Let's head back to BIG-bench and look at another task.
>
> **[1:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=101)** We can also ask a large language model to guess popular movies from their plot descriptions written in emojis.
>
> **[1:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=108)** So this task is testing a couple of things.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=110)** Can the large language model understand emoji expressions and what is its knowledge of current popular culture and movies?
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=117)** The focus of this task is describing the movie plot instead of the movie title.
>
> **[2:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=122)** For example, the movie "Finding Nemo" can be described as a magnifying glass followed by a clown fish based on its title.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=130)** But this task isn't testing the mapping of emoji characters to movie titles.
>
> **[2:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=134)** So the emojis following the plot would be written as a girl that's involved along with the fact that there are other fish and a clown fish.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=142)** Now, what makes this task difficult is that there isn't a one-to-one mapping between movie plots and their emoji descriptions.
>
> **[2:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=149)** One can have different variants of the same emoji or different emojis to describe the same movie.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=155)** Now, let's see if GPT-3 would be able to figure something like this out using zero shot learning.
>
> **[2:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=159)** This means we don't give it any examples.
>
> **[2:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=161)** So let's head over to the GPT-3 API.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=164)** Now I have no idea what the GPT-3 model will output.
>
> **[2:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=168)** So let's go ahead and select submit.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=170)** And you can see that the model got this wrong, but if we try again, we see that the emoji describes the movie "Finding Nemo."
>
> **[2:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=179)** Now, in 99% of the times that I've tried this example, I've got the answer "Finding Nemo."
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=184)** We just saw the 1% where it picked a another film.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=187)** The last example I picked from these tasks is the use of Kannada, which is a low resource language used in India.
>
> **[3:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=193)** To simplify things, the researchers turned it into a four choice multi-choice question format.
>
> **[3:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=199)** So as an example, the task would be, and this would all be in Kannada not in English, "Black pepper is a vessel. Who am I?"
>
> **[3:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=206)** And the four options provided are siv, papaya, mango, sandalwood, and the correct answer expected would be papaya.
>
> **[3:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=214)** Now, if we look at the performance results, we can see that the best human rate comes in at a score of around 80.
>
> **[3:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=220)** As you can imagine, the performance of a lay person, so someone who doesn't speak Kannada was very poor, even if they had access to the internet.
>
> **[3:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=228)** So their score comes in at around 42.
>
> **[3:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=230)** Now, if you look at the results, quite remarkably the larger power models when provided with a two or three examples performed better than the average lay person, and the scores being around 50 and 45.
>
> **[4:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=242)** So what conclusion did the researchers come to?
>
> **[4:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=245)** Well, they found that no model, regardless of size, outperformed the best performing human on any task.
>
> **[4:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=252)** However, for some tasks, the best performing model beat the average human.
>
> **[4:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=257)** So this leads us to the best performing model to date, Google's PaLM, and we look at this next.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (3), big (2), api (1)
> **Code Keywords:** let (4)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), imagine (1)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### PaLM
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=0)** - [Instructor] In April, 2022, Google released PaLM, or to give it its full name, the Pathways Language Model.
>
> **[0:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=7)** Now there are a couple of key takeaways from this model.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=10)** Comparing the number of parameters, we can see that PaLM is the largest of the dense parameter models with 540 billion parameters.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=19)** It dwarfs the GPT-3's 175 billion parameters, Gophers, 280 billion, and just edges out Megatron-Turing NLG at 530 billion parameters.
>
> **[0:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=31)** Now, Google used the pathway system, a new AI architecture that they revealed at the end of 2021.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=37)** So using this framework allows for many more chips to be used for model training, with PaLM being trained on 6,144 hardware accelerators versus smaller numbers of chips being used for previous large language models.
>
> **[0:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=53)** And finally, if we look at the Model Flops Utilization, you can see that the Model Flops Utilizations have increased going from GPT-3 to PaLM.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=61)** PaLM has effectively doubled the Model Flops Utilization.
>
> **[1:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=64)** So the higher the number, the more efficiently a model can be trained.
>
> **[1:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=69)** And these are possible because of improvements over the years across the model and compiler technology.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=74)** Now, PaLM was trained on an enormous 780 billion tokens using a multilingual corpus with text from over 100 languages.
>
> **[1:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=84)** Now about 78% of this training data was in English.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=88)** So 50% of the training is in multi-language social media conversations, just over a quarter is filtered webpages, and then we have the usual contents that we've seen so far, books, GitHub, Wikipedia, and the news.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=102)** Now another really interesting phenomena that the Google team picked up on was on scaling.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=107)** It looked like the models could only perform certain tasks once a certain scale was reached.
>
> **[1:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=112)** Here, 8 billion parameter models could perform certain tasks such as question answering, language understanding, and arithmetic.
>
> **[1:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=119)** It was only when the model was scaled up to 62 billion parameters that more tasks such as translation, summarization, and common sense reasoning were possible.
>
> **[2:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=129)** But it then required a much bigger jump to 540 billion parameters for the model to be able to perform tasks, such as general knowledge, reading comprehension, and joke explanation amongst others.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=142)** Yes, I did say joke explanation.
>
> **[2:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=144)** Let me give you an example.
>
> **[2:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=146)** Like any few short learning model, you can give it a couple of solved examples as a prompt to your input.
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=151)** So we provide the first example of explaining a joke.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=155)** So the prompt is I will explain these jokes.
>
> **[2:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=158)** The problem with kleptomaniac is that they always take things literally and we then provide a sample explanation.
>
> **[2:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=164)** So the explanation is this joke is wordplay.
>
> **[2:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=167)** Someone who takes things literally is someone who doesn't fully understand social cues and context, which is a negative trait.
>
> **[2:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=173)** But the definition of kleptomania is someone who literally takes things.
>
> **[2:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=177)** We can then provide a second example of a joke.
>
> **[3:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=180)** So always borrow money from a pessimist, they'll never expect it back.
>
> **[3:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=184)** And finally we provide an explanation of this joke.
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=187)** So the explanation goes, most people expect you to pay them back when you borrow money.
>
> **[3:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=191)** However, a pessimist is someone who always assumes the worst, so if you borrow money from them, they will expect that you won't pay them back anyways.
>
> **[3:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=200)** And now we provide our joke as the input.
>
> **[3:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=202)** So I was going to fly to visit my family on April 6th.
>
> **[3:25](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=205)** My mom said, "Oh great, your stepdad's poetry reading is that night.
>
> **[3:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=209)** So now I'm flying in on April 7th.
>
> **[3:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=212)** And remarkably the model returns this as output.
>
> **[3:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=215)** The joke is that the speaker's mother is trying to get them to go to their stepdad's poetry reading, but the speaker doesn't want to go.
>
> **[3:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=222)** so they're changing their flights to the day after the poetry reading.
>
> **[3:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=225)** Now let's see what results we get from GPT-3 with joke explanation.
>
> **[3:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=229)** Now, just so you know, I have absolutely no idea what the GPT-3 model will output.
>
> **[3:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=235)** Let me provide the two jokes with the explanations as an example, and then let's go ahead and see what explanation GPT-3 comes up with.
>
> **[4:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=246)** So the response back from GPT-3 is this joke is a play on words.
>
> **[4:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=249)** The person is saying that they were originally going to fly in on April 6th, but their stepdad's poetry reading is that night, so they decided to fly in on April 7th instead.
>
> **[4:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=257)** This is funny because it's a play on the words fly and poetry, which are both pronounced the same way, so clearly this isn't correct, and GPT-3 didn't get this right.
>
> **[4:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=267)** Let's head back to the findings from the PaLM model researchers.
>
> **[4:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=271)** They also found that sometimes standard prompting didn't work.
>
> **[4:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=274)** So if you give the model the example, Roger has five tennis balls.
>
> **[4:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=278)** He buys two more cans of tennis balls.
>
> **[4:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=280)** Each can has three tennis balls.
>
> **[4:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=282)** How many tennis balls does he have now?
>
> **[4:44](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=284)** And you gave the model, the answer is 11.
>
> **[4:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=288)** And if you then ask the question, the cafeteria has 23 apples, if they use 20 to make lunch and bought six more, how many apples do they have?
>
> **[4:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=297)** It would sometimes get the wrong answer.
>
> **[4:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=298)** And you can see here the incorrect answers provided.
>
> **[5:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=301)** The model return the answer 50.
>
> **[5:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=304)** Now instead, if you provided how you came up with the answer as part of your prompt, so for example, Roger started with five balls, two cans of three tennis balls.
>
> **[5:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=311)** Each is six tennis balls, five plus six equals 11.
>
> **[5:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=315)** Then the output from the model would mimic your chain of thought reasoning and come up with the correct answer.
>
> **[5:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=322)** So for the question with the cafeteria, the model would come up with the cafeteria had 23 apples originally.
>
> **[5:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=328)** They used 20 to make lunch.
>
> **[5:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=330)** So they had 23 minus 20, which is three.
>
> **[5:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=333)** They bought six more apples.
>
> **[5:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=334)** So they have a total of three plus six, which is nine.
>
> **[5:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=337)** The answer is nine.
>
> **[5:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=339)** So let's wrap up the section by adding PaLM to our list of models.
>
> **[5:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=343)** You can see it's the largest language model parameter to date, and it has the best overall performance.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (7), nlg (1)
> **Code Keywords:** let (6), finally, (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### OPT and BLOOM
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=0)** - [Instructor] You've probably noticed that up to this point all of the language models are from big tech firms.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=6)** Now although OpenAI made GPT-3 available via an API, no access was given to the actual weights of the model making it difficult for smaller research organizations and institutions to study these models.
>
> **[0:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=20)** The Meta, or Facebook, AI team then released OPT, or Open Pre-trained Transformers.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=27)** This was a couple of decoder-only pre-trained transformers ranging from 125 million to 66 billion parameters, which they shared with everyone.
>
> **[0:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=37)** Interested research teams could also apply for access to the 175 billion parameter model.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=43)** Now, this effectively gave researchers access to a large language model that was very similar to GPT-3.
>
> **[0:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=50)** The Facebook team also detailed the infrastructure challenges they faced, along with providing code for experimenting with the models.
>
> **[0:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=57)** This model was primarily trained on English text.
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=61)** The research teams behind the BLOOM model went one step further.
>
> **[1:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=65)** The Hugging Face team working together with the Montreal AI Ethics Institute got a 3 million Euro grant for compute resources from research institutes in France.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=76)** And then working together with a volunteer team of over 1000 researchers from different countries and institutions, they created a 176 billion parameter decoder-only transformer model called BLOOM.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=92)** Now, this team has made everything openly available from the dataset used for training to anyone being able to download and run the model.
>
> **[1:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=102)** They also released intermediate checkpoints, so this allows other organizations outside of big tech to experiment with these models.
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=110)** Now, BLOOM is also able to generate text in 46 natural languages and 13 programming languages.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=117)** Now, what makes BLOOM unique is that for most of these languages, such as Spanish and French and Arabic, BLOOM will be the first language model with over 100 billion parameters ever created.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=130)** Now, even if you want to run these models as inference, you'll still need access to expensive hardware accelerators.
>
> **[2:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=136)** What makes this project particularly exciting is that now because more research teams have access to these models, the weights and the data sets, some parts of the community might focus on trying to make smaller versions of the model, which can run on fewer and less expensive hardware accelerators.
>
> **[2:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=152)** And other researchers might try and train it on other languages not covered so far and get the first 100 billion parameter model.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=160)** These two initiatives from Facebook and Hugging Face have made large language models available to everyone, and only time will tell what impact this will have.

> [!info]- Semantic Content
>
> **Env Vars:** bloom (5), gpt (2), api (1), opt (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### GitHub models
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=0)** - [Narrator] Imagine asking two teachers to explain the same mathematics problem to a class.
>
> **[0:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=4)** Now each of them might have a different approach to solving the problem.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=8)** And it's like that with large language models.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=10)** You can provide the same text or prompt and get a different response from the large language model.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=15)** GitHub models let us easily compare two large language models.
>
> **[0:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=19)** You'll need a GitHub account, and you can sign up for one by going to [github.com](https://github.com).
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=23)** And once you have an account, head over to [github.com/marketplace](https://github.com/marketplace).
>
> **[0:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=28)** And here you can just select Models over on the left, and then you can select models based on the different providers, their capability, and then their functionality, so things like whether you need a model that has low latency, whether you want a model that can handle multiple languages, and so on.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=49)** Now the OpenAI models, in general, are pretty good.
>
> **[0:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=51)** So I'm going to use the GPT‑4o mini as my benchmark, and I want to compare this to one of the smaller models.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=58)** And so let's pick one from the low latency list.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=62)** So I'm going to go ahead and pick the Phi-3-mini instruct.
>
> **[1:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=66)** I'm going to select Playground.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=68)** And then I want to go ahead and compare this to the GPT‑4o mini model, so let me go ahead and select that.
>
> **[1:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=76)** Now, this is the task.
>
> **[1:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=78)** I want to get the models to explain a joke.
>
> **[1:20](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=80)** Now this isn't as trivial as it sounds because it's checking the model's capability to work with nuances of the English language.
>
> **[1:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=88)** So here's the joke.
>
> **[1:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=90)** "I was going to fly to visit my family on May the 3rd, and my mom said, 'Oh, great, your dad's poetry reading is that night.'
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=96)** So now I'm flying in on May the 4th."
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=99)** Now I've intentionally included the reference to May the 4th to see if I can trick some of the language models to see if there's a "Star Wars" reference.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=107)** The explanation of this joke or this word play is that this person doesn't want to attend their dad's poetry reading.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=114)** So let's go ahead and see how the different models explain this.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=124)** Go ahead and pause the video here and compare the different outputs from the two models.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=130)** After reading them, I think you'll agree with me that the GPT‑4o mini produces the best results.
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=137)** Now remember this illustration is only comparing the models for a single task.
>
> **[2:21](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=141)** You'll want to be comparing models on hundreds and thousands of tasks to see which one performs the best for your business needs.
>
> **[2:28](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=148)** Ultimately, you are the best judge for which model works best for your business and your situation.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=154)** All right, so we've seen that GitHub models is a great way to prototype with large language models, letting you easily work with and compare large language models from different providers.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), class. (1), this. (1)
> **Tools:** github (5)
> **Env Vars:** gpt (3)
> **Analogies:** imagine (1), it's like (1), compare this to (1)
> **URLs:** [github.com](https://github.com) (2)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Accessing Large Language Models using an API
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=0)** - [Instructor] Now in the previous video, we looked at comparing large language models using GitHub models.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=5)** Now in this one, we look to see how we can access the large language models via an API using a programming language like Python.
>
> **[0:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=14)** Now I prefer GitHub Codespaces for prototyping any apps.
>
> **[0:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=18)** It's a cloud-based coding environment and you can access it from any device.
>
> **[0:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=22)** And what I like about it is I don't waste any time with setting things up.
>
> **[0:26](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=26)** I'm going to demonstrate the step-by-step process for setting up a GitHub repo and using Codespaces to work with GitHub models.
>
> **[0:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=35)** You can also go directly to the course GitHub repo to see the configuration already in place.
>
> **[0:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=41)** I've also included the coding files in the repo for you.
>
> **[0:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=45)** So let's kick things off with creating a GitHub repo.
>
> **[0:49](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=49)** So I'm going to head over to [github.com](https://github.com), and this is my GitHub repo.
>
> **[0:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=55)** And I'm going to head over to the top and select Create a New Repository.
>
> **[1:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=63)** And I'm going to call this repository Joke.
>
> **[1:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=70)** I'm going to leave it as public.
>
> **[1:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=72)** And because this is going to be in Python, I'm going to add a python.gitignore template.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=83)** This is kind of standard to whatever I do for creating any new repository.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=87)** And then I'm going to go ahead and select Create Repository.
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=92)** So now that we've got the repository set up, let's head over to GitHub Codespaces.
>
> **[1:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=99)** So I'm now at [github.com/codespaces](https://github.com/codespaces), and I'm going to go ahead and Select a New Codespace.
>
> **[1:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=107)** And this is where I'm going to select the repository that I just created.
>
> **[1:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=113)** And I can see it over here.
>
> **[1:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=114)** So it's jonfernandez/joke.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=117)** I'm going to leave everything else as is, and I'm going to go ahead and select Create Codespace.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=127)** Now I'm just going to go ahead and ignore this walkthrough, and so I'm just going to go ahead and close this window.
>
> **[2:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=135)** Now in the previous video, we found that the GPT-4o Mini model was the better of the two at explaining Jokes.
>
> **[2:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=143)** So let's head back to GitHub Marketplace.
>
> **[2:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=147)** So I'm going to head over to [github.com/marketplace](https://github.com/marketplace).
>
> **[2:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=151)** I'm going to go ahead and select models.
>
> **[2:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=154)** And I'm going to go ahead and select the GPT-4o Mini model.
>
> **[2:40](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=160)** So let me go ahead and enter the joke that needs to be explained.
>
> **[2:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=165)** And let's send this off to the GPT-4o mini model.
>
> **[2:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=172)** And you can see that I've got the response back from the model.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=175)** So now I'm going to head over to the Code tab.
>
> **[3:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=181)** And what I'm going to want to do is I'm selecting Python as my language, and I want to go ahead and copy all of this code.
>
> **[3:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=189)** And you'll notice that the first thing that you do here is to install OpenAI.
>
> **[3:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=194)** So you need to install the OpenAI Python package.
>
> **[3:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=197)** So I'm going to go ahead and copy this and head back to Codespaces.
>
> **[3:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=207)** So let me go ahead and create a new file.
>
> **[3:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=210)** And so I'm going to create this file and I'm going to call it joke.py.
>
> **[3:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=215)** And let me paste the details that I picked up from the marketplace.
>
> **[3:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=226)** And the first thing I'll need to do, as you can see over at the top, is to do a pip install openai.
>
> **[3:51](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=231)** So pip install openai.
>
> **[3:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=234)** Now I'm going to go ahead and install the OpenAI Python package.
>
> **[3:59](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=239)** And this will allow me to access the OpenAI large language model via Python.
>
> **[4:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=251)** Now let me just make a little bit of space for myself and let me just bump the font up a little bit, and I'm going to go ahead and clear my screen.
>
> **[4:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=262)** And now I'm going to go ahead and run this file.
>
> **[4:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=267)** So python joke.py.
>
> **[4:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=277)** and you can see that the output I get is "The capital of France is Paris," because that's the response back from the user.
>
> **[4:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=286)** So what I'll actually want as the output here or the input from the user is going to be explain the joke.
>
> **[4:53](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=293)** So if I head back to the GitHub Marketplace and head back to the chat, and I'm going to select explain this joke, I can then replace this content, which is the default that you'll get with the explain this joke.
>
> **[5:18](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=318)** And because I've got a couple of single and double quotes, I'm going to use triple quotes so that there's no confusion.
>
> **[5:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=335)** And let me just go ahead and format this a little bit.
>
> **[5:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=350)** And now if I go ahead and rerun this,
>
> **[6:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=361)** I get the explanation of this joke from the large language model.
>
> **[6:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=367)** So as you can see, I've now been able to access the GPT-4o Mini model using Python.
>
> **[6:13](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=373)** All right, so in this video, we've looked at how we can access large language models via an API using a programming language like Python.

> [!info]- Semantic Content
>
> **CLI Commands:** python (10), pip (2), make (1)
> **Tools:** github (13)
> **Code Keywords:** let (10), public (1), this, (1)
> **Env Vars:** gpt (4), api (2)
> **Prerequisites:** install (5), set up (1)
> **Exercise Files:** github repo (4), template (1)
> **File Paths:** joke.py (2), python.gitignore (1)
> **URLs:** [github.com](https://github.com) (3)

#### Inference time vs. pre-training
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=0)** - [Instructor] Over this course, we've looked at scaling laws and lessons from the chinchilla models.
>
> **[0:05](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=5)** Let's bring this all together as we look at the current trends for large language models.
>
> **[0:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=10)** When training of large language models first kicked off, most of the focus was on improving the models, and then the scaling laws were the guiding principle, and the scaling laws suggested that you would get the biggest improvement by increasing the size of the models.
>
> **[0:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=23)** So you do this by increasing the model's architecture, so that's the number of layers in a model, the number of attention heads, and so on.
>
> **[0:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=30)** But that was only one dimension because as model providers created large models, the associated training cost became an important consideration.
>
> **[0:39](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=39)** So the second important dimension became training cost, because being able to train a model effectively given a budget was important.
>
> **[0:47](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=47)** And the learnings from the chinchilla paper earlier in the course suggested that large language models were being undertrained.
>
> **[0:54](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=54)** They also answered the question, given a training budget, how can we create an optimal model size?
>
> **[1:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=61)** So far, the focus has been on training the model, but one thing we haven't talked about is what's involved in running a model.
>
> **[1:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=68)** Now, this is known as inference, and there are two important and very different trends around inference.
>
> **[1:14](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=74)** One is, how can we reduce the cost of running these models?
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=79)** Now, one way to do this is to create smaller models that are very performant.
>
> **[1:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=82)** So these are small models that are trained from scratch on large data sets.
>
> **[1:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=87)** Now, because these are smaller models, this means they require less memory to run, and so, we can potentially run them using fewer hardware accelerators.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=95)** Smaller models can also run on local devices.
>
> **[1:38](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=98)** Now, the big advantage here is privacy, as all the interactions with the language model takes place on your device.
>
> **[1:45](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=105)** The other important consideration is how can we improve the quality of these models?
>
> **[1:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=110)** You see, at this point, models have been trained primarily on the majority of publicly available data.
>
> **[1:57](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=117)** The return from training bigger models with more data and compute is plateauing, and model providers are looking for the next big breakthrough in AI training.
>
> **[2:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=127)** Major AI model providers are exploring alternatives.
>
> **[2:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=130)** So there's a focus on test time compute, which allow models more time to reason during the inference stage.
>
> **[2:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=137)** An example of this Test Time Compute is the o1 model from OpenAI.
>
> **[2:22](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=142)** The model uses these reasoning tokens to break down their understanding of the prompt and consider multiple approaches to generating a response.
>
> **[2:30](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=150)** Now, what you see here is an example of this multi-step conversation between a user and the model.
>
> **[2:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=155)** And you can see that the input tokens from the user and the output tokens from the model are carried over while the reasoning tokens are discarded.
>
> **[2:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=163)** Now, we currently don't get to see the reasoning tokens, and that's because that's some of the secret source that's happening under the hood for these models.
>
> **[2:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=170)** So far, results from these test time compute models that work during inference time have extraordinary results.
>
> **[2:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=178)** The OpenAI team put the o1 model to the test on a GPQA diamond, which is a really tough benchmark that really digs into subjects, like chemistry and physics and biology.
>
> **[3:10](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=190)** Now, to see how it stacks up against humans, they brought in some PhD experts to tackle the same questions.
>
> **[3:17](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=197)** And guess what? O1 did better than those experts making it the first model to pull this off on this benchmark.
>
> **[3:24](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=204)** Now, just to clarify though, this doesn't mean o1 is smarter than a PhD overall, it just shows it's better at solving certain problems that we'd usually expect a PhD to handle.
>
> **[3:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=215)** All right, so we started off with the scaling laws as the one dimension to improve model performance.
>
> **[3:41](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=221)** The chinchilla paper showed this second dimension the benefit of scaling both the model size and the data it was trained on.
>
> **[3:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=228)** We now have this third dimension where there's a focus on inference.
>
> **[3:52](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=232)** One is to reduce the cost of inference time by running smaller and more capable models, and the other is the improved performance by completing additional processing during inference time when running these models.

> [!info]- Semantic Content
>
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Code Keywords:** let (1), require (1)
> **Env Vars:** gpqa (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Going further with Transformers
> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=0)** - [Jonathan] We've covered a ton of material in this course.
>
> **[0:03](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=3)** We've looked at many of the large language models since GPT-3.
>
> **[0:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=6)** Let's review them really quickly.
>
> **[0:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=8)** We saw how Google reduced training and inference costs by using sparse mixtures of expert models with GLaM.
>
> **[0:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=15)** A month later, Microsoft teamed up with Nvidia to create the Megatron Turing LG model that was three times larger than GPT-3 with 530 billion parameters.
>
> **[0:27](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=27)** In the same month, the DeepMind team released Gofer and their largest 280 billion parameter model which was their best performing model.
>
> **[0:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=36)** A few months later, the DeepMind team introduced Chinchilla, which turned a lot of our understanding of large language models on its head.
>
> **[0:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=43)** The main takeaway was that large language models up to this point had been undertrained.
>
> **[0:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=48)** Google released the 540 billion parameter modeled PaLM in April training it on their Pathways infrastructure, and this has been the best performing model to date.
>
> **[0:58](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=58)** Up to this point, large language models have been exclusive to big tech.
>
> **[1:02](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=62)** In an attempt to allow other researchers access to these models, Meta release the open Pre-Train model and Hugging Face when one step further with BLOOM sharing data sets, weights, and checkpoints to anyone who is interested.
>
> **[1:15](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=75)** If you haven't had enough of transformers, I've got some more resources for you.
>
> **[1:19](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=79)** If you want a hands on code-centric look at transformers where we train a model to do text classification using BERT, then check out my other course in the LinkedIn library.
>
> **[1:29](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=89)** I hope you've enjoyed this course.
>
> **[1:31](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=91)** Thanks for watching, and I'd love to hear back from you and to connect via LinkedIn.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (2), bloom (1), bert (1)
> **Code Keywords:** let (1)
> **Speakers:** - [jonathan] (1)


## Path Context

### In [[Building Generative AI Skills for Developers]]
← [[Introduction to Large Language Models]] | **3 of 7** | [[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)]] →

### In [[Develop Your Skills with Large Language Models]]
← [[Introduction To Prompt Engineering For Generative Ai]] | **4 of 9** | [[Introduction to Generative AI with GPT]] →

### In [[Advance Your Skills in Natural Language Processing]]
← [[AI Workshop- Build a Neural Network with PyTorch Lightning]] | **6 of 6**

## Appears In

- [[Building Generative AI Skills for Developers]]
- [[Develop Your Skills with Large Language Models]]
- [[Advance Your Skills in Natural Language Processing]]

## Related Courses

_Courses sharing skills:_

- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Fine-Tuning for LLMs- from Beginner to Advanced]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
