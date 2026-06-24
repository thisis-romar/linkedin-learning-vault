---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
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
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQG2yukDqW63ng/learning-public-crop_675_1200/B4DZWV8al1HYAY-/0/1741977398303?e=2147483647&amp;v=beta&amp;t=Xex0OtLCWwCSjtwZ0oQftd1kfJBM6b7gf-U-nhwE2RM"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)'
  - '[Develop Your Skills with Large Language Models](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20Large%20Language%20Models.md)'
  - '[Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)'
prev_courses:
  - '[Introduction to Large Language Models](Introduction%20to%20Large%20Language%20Models.md)'
  - '[Introduction To Prompt Engineering For Generative Ai](Introduction%20To%20Prompt%20Engineering%20For%20Generative%20Ai.md)'
  - '[AI Workshop- Build a Neural Network with PyTorch Lightning](AI%20Workshop-%20Build%20a%20Neural%20Network%20with%20PyTorch%20Lightning.md)'
next_courses:
  - '[LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)](LLM%20Foundations-%20Vector%20Databases%20for%20Caching%20and%20Retrieval%20Augmented%20Generation%20(RAG).md)'
  - '[Introduction to Generative AI with GPT](Introduction%20to%20Generative%20AI%20with%20GPT.md)'
  - null
path_nav: '[{"path":"Building Generative AI Skills for Developers","position":3,"total":7,"prev":"Introduction to Large Language Models","next":"LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)"},{"path":"Develop Your Skills with Large Language Models","position":4,"total":9,"prev":"Introduction To Prompt Engineering For Generative Ai","next":"Introduction to Generative AI with GPT"},{"path":"Advance Your Skills in Natural Language Processing","position":6,"total":6,"prev":"AI Workshop- Build a Neural Network with PyTorch Lightning","next":null}]'
path_count: 3
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Generative%20AI-%20Working%20with%20Large%20Language%20Models.md)

![Generative AI: Working with Large Language Models](https://media.licdn.com/dms/image/v2/D4D0DAQG2yukDqW63ng/learning-public-crop_675_1200/B4DZWV8al1HYAY-/0/1741977398303?e=2147483647&amp;v=beta&amp;t=Xex0OtLCWwCSjtwZ0oQftd1kfJBM6b7gf-U-nhwE2RM)

# Generative AI: Working with Large Language Models

> Transformers have quickly become the go-to architecture for natural language processing (NLP). As a result, knowing how to use them is now a business-critical skill in your AI toolbox. In this course, instructor Jonathan Fernandes walks you through many of the key large language models (LLMs) developed since OpenAI first released GPT-3, as well as the key contributions of each of these LLMs.

> [LinkedIn Learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models) | 1h 22m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Learning about Large Language Models](#learning-about-large-language-models)
- [**1. Transformers in NLP**](#1-transformers-in-nlp) (3 videos)
  - [What are large language models?](#what-are-large-language-models)
  - [Transformers in production](#transformers-in-production)
  - [Transformers: History](#transformers-history)
- [**2. Training Transformers and Their Architecture**](#2-training-transformers-and-their-architecture) (4 videos)
  - [Transfer learning](#transfer-learning)
  - [Transformer: Architecture overview](#transformer-architecture-overview)
  - [Self-attention](#self-attention)
  - [Multi-head attention and Feed Forward Network](#multi-head-attention-and-feed-forward-network)
- [**3. Large Language Models**](#3-large-language-models) (14 videos)
  - [GPT-3](#gpt-3)
  - [GPT-3 use cases](#gpt-3-use-cases)
  - [Challenges and shortcomings of GPT-3](#challenges-and-shortcomings-of-gpt-3)
  - [GLaM](#glam)
  - [Megatron-Turing NLG Model](#megatron-turing-nlg-model)
  - [Gopher](#gopher)
  - [Scaling laws](#scaling-laws)
  - [Chinchilla](#chinchilla)
  - [BIG-bench](#big-bench)
  - [PaLM](#palm)
  - [OPT and BLOOM](#opt-and-bloom)
  - [GitHub models](#github-models)
  - [Accessing Large Language Models using an API](#accessing-large-language-models-using-an-api)
  - [Inference time vs. pre-training](#inference-time-vs-pre-training)
- [**Conclusion**](#conclusion) (1 videos)
  - [Going further with Transformers](#going-further-with-transformers)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning about Large Language Models](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/learning-about-large-language-models?u=76281980&t=0)** - [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) have made news for the last couple of years. If you've heard about them and want to know more, then this course is for you. Hi, I'm Jonathan Fernandes and I work with large language models every day. Join me as we look at GPT-3. In the process, we'll also focus on the large language models that have been developed since like [Google](../../Glossary/Service/Google.md)'s GLaM and Palm Model, Deep Mine's Gopher and Chinchilla, OPT from Meta and Bloom from [Hugging Face](../../Glossary/Service/Hugging%20Face.md). These are exciting times to be working in AI, so let's get to it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (3), [Google](../../Glossary/Service/Google.md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1)
> **Env Vars:** gpt (1), opt (1)
> **Speakers:** - large (1)


### 1. Transformers in NLP

[↑ Back to Table of Contents](#table-of-contents)

#### [What are large language models?](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/what-are-large-language-models?u=76281980&t=0)** - [Narrator] Have you seen the terms BERT or GPT-3 in articles online? These are examples of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) and their underlying architecture is based on transformers. Transformers were proposed by a team of researchers from [Google](../../Glossary/Service/Google.md) in 2017 in a paper called Attention is All You Need. This paper has been a turning point in NLP. Now, parameters are values in a model that are updated during the training of a model. Large language models have millions and often billions of such parameters and are trained on enormous amounts of data. Most of what we look at is focused on the two-year period since the release of GPT-3. So that's from May, 2020 to July of 2022. We'll cover models released by Google Research including GLaM and PaLM, Gopher and Chinchilla, that was released by Deep Mind, and the Megatron-Turing NLG by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and Nvidia. And finally, we'll wrap up with the work done by both Meta AI and [Hugging Face](../../Glossary/Service/Hugging%20Face.md) to make large language models available to researchers outside of big tech. Meta AI released the open tree train transformer and Hugging Face coordinated a research effort with over 1000 researchers to create the blue model. As you can see, there's been a lot of activity with large language models since the release of GPT-3. Before we get into the architecture details of these models let's look at a couple of examples of where they're used in production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (4), [Google](../../Glossary/Service/Google.md) (2), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** gpt (3), bert (1), nlp (1), nlg (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Transformers in production](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-in-production?u=76281980&t=0)** - [Instructor] If you're like me, the only time you watch the winter sport curling is every four years during the Winter Olympics. Now, whenever I've used [Google](../../Glossary/Service/Google.md) search in the past, I've often only entered keywords such as curling objective. In 2019, Google started using BERT as part of search. Now BERT is an acronym for Bidirectional Encoder Representations from Transformers as one of the first [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) developed by the Google research team. Now that I know that Google Search uses BERT, I know that I can enter a more English sounding phrase like what's the main objective of curling? And the answer back from Google doesn't give me the most relevant page but the answer to my question is in bold. You can see that it's here. The goal is to deliver the stone from one side of the sheet to the circular scoring area on the other side called the house. Here's another example of transformers in production. Again, using BERT. In the past, if you did a Google search using the phrase, can you get medicine for someone pharmacy, it would've picked up on the fact that for someone was a really important part of a query because you're looking for another person to pick up the medicine. Google search would've returned results about getting a prescription filled which isn't relevant in this context. Now with BERT, Google search captures the important nuance that another person picks up the medicine and it returns results about having a friend or a family member pick up a prescription. The quality of Google search has improved significantly using BERT.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (9), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Env Vars:** bert (6)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Transformers: History](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=0)** - [Instructor] The models based on the original transformer paper from 2017 have evolved over the years. One of the challenges with training [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) in 2017 was that you needed labeled data. This required a lot of time and effort. The ULMFiT model proposed by Jeremy Howard and Sebastian Ruda provided a framework where you didn't need labeled data. And this meant large corpus of text, such as Wikipedia, could now be used to train models. In June of 2018, GPT or Generative Pre-Trained Model, which is developed by Open AI, was the first pre-trained transformer model. Now, this was used for [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) on various NLP tasks and obtained state-of-the-art results. And a couple of months later, researchers at [Google](../../Glossary/Service/Google.md) came up with BERT or Bidirectional Encoder Representations from Transformers. We saw a couple of examples of BERT being used in production at Google. In February, 2019, Open AI released a bigger and better version of GPT called GPT-2. This made headlines because the Open AI team didn't want to release the details of the model because of ethical concerns. Now, later that year, [Facebook](../../Glossary/Service/Facebook.md)'s AI research team released BART. Google released T5. Both of these models are large pre-trained models using the same architecture as the original transformer. And at the same time the team at [Hugging Face](../../Glossary/Service/Hugging%20Face.md) bucked the trend. Everyone was moving to bigger models, they released DistilBERT, which is a smaller, faster and lighter version of BERT,
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformers-history?u=76281980&t=93)** and had 95% of BERT'S performance and reduced the size of the BERT model by 40%. In May, 2020, Open AI released the third revision of their GPT models, GPT-3, which is excellent at generating high-quality English sentences. Now, although Open AI provided a lot of details in their GPT-3 paper, they didn't release the dataset they used or their model weights. So EleutherAI, which is a group of volunteer researchers focused on the open source release of language models and the data sets they used to train them. They released GPT-Neo, which has 2 billion parameters in March of 2021, GPT-J, which has 6 billion parameters a couple of months later and GPT-NeoX, which has 20 billion parameters in Feb of 2022. Now, this graph shows you the years on the x-axis and the number of parameters on the y-axis. Now, because the graph almost looks like a straight line you might think that the number of parameters has increased linearly over the years. The number of parameters in billions is a log scale on the y-axis. So the scale increases by 10 times each time you move up one unit. So BERT has around 110 million parameters. BERT Large has 340 million parameters and the largest GPT-2 model has 1.5 billion parameters. The biggest GPT-3 model that Open AI created has 175 billion parameters. And as you can see, over the years the trend has been for the language models to get larger.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1), [Facebook](../../Glossary/Service/Facebook.md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1)
> **Env Vars:** gpt (11), bert (7), nlp (1), bart (1)
> **Definitions:** is a  (3)
> **Versions:** 1.5 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Training Transformers and Their Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [Transfer learning](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=0)** - [Instructor] One of the most important techniques used in [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) is transfer learning. It's made up of two components, pretraining and fine-tuning. Your starting point is the model architecture, and all of the weights of the parameters are random. The model has no knowledge of language, and you then pretrain the model. This pretraining piece is very resource-heavy. You need loads of data, and this could include the entire Wikipedia corpus and a wide range of other corpuses. You also need a lot of compute. This is normally several hundreds to thousands of [Hardware](../../Topics/Hardware.md) accelerators, depending on how quickly you want to train your model. And these hardware accelerators are usually Nvidia's GPUs or [Google](../../Glossary/Service/Google.md)'s TPUs. At the end of this training, which can take days, weeks, or months, you have a model that has a very good understanding of the language you've trained it on. Now, fortunately, when the authors of BERT released their paper, they released the model architecture and the weights. This means we can use their pretrained model, which has a very good understanding of languages, as our starting point. So we can then go ahead and fine-tune this model for our specific task. In the case of BERT, this fine-tuning task could be text classification, named entity recognition, question answering, and so on. Now, this fine-tuning step involves training our model with labeled data. So for example, with sentiment analysis, we provide a whole lot of text examples and label each as either positive or negative. Now, what's interesting is that we can typically get better accuracy
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=93)** by starting with a pretrained model and fine-tuning it on a task such as sentiment analysis than if we trained a model from scratch on sentiment analysis. This is because the pretraining piece with large amounts of data allows you to have a model that has a very good understanding of language, which can then be used for other tasks. Let's take a look at some of the pretraining tasks for BERT. Now, BERT was fed Wikipedia and the BookCorpus data as input, and words were randomly masked out. BERT then had to predict what the most likely candidates were for these masked words. With next sentence prediction, it had to predict whether one sentence followed the other. So 50% of the time, one sentence did follow the other, and these were labeled as is next. And the other 50% of the time, a random other sentence from the corpus was used, and these were labeled as not next. Now, let's compare the pretraining for some of the larger models. So BERT was trained in 2018, the number of parameters was 109 million, and it took Google 12 days to train BERT. Now, I've put an asterisk by the 8 times V100s because BERT wasn't trained on GPUs, but rather Google's equivalent, TPUs, or Tensor Processing Units. The size of the dataset used for training was 16 gigabytes, and the training [Tokens](../../Skills/Web%20Development/Tokens.md) were 250 billion. Now, think of one [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) as being approximately equal to 1 1/2 tokens. And finally, the data sources that was used to train BERT were Wikipedia and the BookCorpus,
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=186)** now, the BookCorpus being a large collection of free novels written by unpublished authors. Now, it's difficult to try and visualize how many words there are in Wikipedia and the BookCorpus. According to OpenAI's documentation, 1,500 words is approximately equivalent to 2,400 tokens. So this means a word is approximately 1.4 tokens. And so if we say the average 300-page novel is around 100,000 words, that's 140,000 tokens. So to put that in context, when BERT is trained on 250 billion tokens, that's approximately 1.8 million 300-page novels. Looking again at pretrained models, RoBERTa was developed by [Facebook](../../Glossary/Service/Facebook.md) in 2019. The number of parameters was 125 million, and it has a very similar architecture to BERT. And quite amazingly, Facebook managed to train this in a single day, and that's because they used a whopping 1,024 V100 GPUs. Now, the size of the dataset was significantly larger than BERT's, so it was 160 gigabytes with 2 trillion tokens. The data sources were Wikipedia and BookCorpus, as used with BERT, but also the Common Crawl news dataset, OpenWebText, and the Common Crawl stories. Common Crawl is a raw webpage data from years of web crawling. And OpenWebText is a dataset created by scraping URLs from Reddit with a score of three.
>
> **[4:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transfer-learning?u=76281980&t=283)** This is a proxy for the quality of the data response. And finally, GPT-3 was released in 2020 by OpenAI. The number of parameters for the largest model was 175 billion. The training time was probably around 34 days, and the infrastructure used was 10,000 V100 GPUs, and this was primarily an [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) infrastructure. The size of the dataset used for training was 4,500 gigabytes, which is 300 billion tokens. And the dataset source was Wikipedia, Common Crawl, WebText2, Books1, and Books2. So what are the benefits of transfer learning? Well, it takes much less time to train a fine-tuned model. For BERT, the author suggests two to four epochs of training for fine-tuning. This is in contrast to the thousands of hours of GPU time required for pretraining. We also don't need another massive dataset to fine-tune for a certain use case. This is in contrast to the large corpuses, such as Wikipedia and others, which are typically hundreds of gigabytes. And finally, we're able to achieve excellent results. We saw this phenomena when using transfer learning with [Computer Vision](../../Skills/Artificial%20Intelligence%20(AI)/Computer%20Vision.md) several years ago when working with the ImageNet dataset, and this technique has worked in NLP too. We've looked at the two components of transfer learning, pretraining and fine-tuning, and why they're such powerful techniques for NLP. Next, we'll take a look at the transformer architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (8), [Google](../../Glossary/Service/Google.md) (3), [Hardware](../../Topics/Hardware.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (2)
> **Env Vars:** bert (14), v100 (2), nlp (2), gpt (1), gpu (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2), for example (1)
> **Versions:** 1.4 (1), 1.8 (1)
> **Speakers:** - [instructor] (1)

#### [Transformer: Architecture overview](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=0)** - [Instructor] You're probably wondering what the transformer architecture looks like. So let me head over to the attention is all you need paper and show you. We'll divide this architecture into two sections so that we can understand each component. The left half of the diagram is known as an encoder and the right hand side is known as a decoder. We feed in the English sentence such as I like NLP into the encoder at the bottom of the diagram. And the transformer can act as a translator from English to German. And so the output from the decoder at the top of the diagram is the German translation, ich mag NLP. The transformer is not made up of a single encoder, but rather six encoders. Each of these parts can be used independently depending on the task. So encoder-decoder models are good for generative tasks such as translation or summarization. Examples of such encoder-decoder models are [Facebook](../../Glossary/Service/Facebook.md)'s BART model and [Google](../../Glossary/Service/Google.md)'s T5. Encoder-only models are good for tasks that require understanding of the input, such as sentence classification and named entity recognition. Examples include the family of BERT models such as BERT, RoBERTa, and DistilBERT amongst others. Decoder models are good for generative tasks such as text generation. Examples include the GPT family such as GPT, GPT-2 and GBT-3. In fact, all of the models after GPT-3 that we look at in this course are decoder models. So in summary, transformers are made up of encoders and decoders, and the tasks we can perform will depend
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/transformer-architecture-overview?u=76281980&t=94)** on whether we use either or both components.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** gpt (4), nlp (2), bert (2), bart (1), gbt (1)
> **Analogies:** such as (4)
> **Definitions:** known as (2)
> **Speakers:** - [instructor] (1)

#### [Self-attention](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=0)** - [Instructor] One of the key ingredients to transformers is self-attention. In this example text, "The monkey ate that banana because it was too hungry." How is the model able to determine that the it corresponds to the monkey and not the banana? It does this using a mechanism called self-attention that incorporates the embeddings for all the other words in the sentence. So when processing the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) it, self-attention will take a weighted average of the embeddings of the other context words. The darker the shade, the more weight that word is given and every word is given some weight. And you can see that both banana and monkey come up as likely for the word it. But monkey has the higher weighted average. So what's happening under the hood? As part of the self-attention mechanism, the authors of the original transformer take the word embeddings and project it into three vector spaces, which they called query, key, and value. Projecting word embeddings into new vector spaces is a tool that mathematicians use to get different representations of the word embeddings. Now, in order to calculate to the attention weights, we'll take in as input the query, key, and value vectors. We then calculate the score of each word to determine how much focus to place on other words in the sentence. We want to try and figure out how the query and the key vectors relate to each other. This is done by taking the dot product of the query vector and the key vector. Queries and keys that are similar will have a large dot product. While those that don't share much in common will have little to no overlap.
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/self-attention?u=76281980&t=93)** Now, if you've forgotten your [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) from school, the T means that we're performing a transpose operation on the vector K. So here N is the dimension of these vectors. We then divide this by the square root of N to scale the dot product attention, and so reduce its size. We now have the logits, and we can then convert this to probabilities by using the softmax function. We now multiply each value vector by the softmax score. We can then sum up the weighted value vectors, and this produces the self-attention calculation for a word. This process takes place for every single word in the sentence. And as we've seen in this video, self-attention allows us to apply a different weight to words in a sentence.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (10), [Linear Algebra](../../Skills/Artificial%20Intelligence%20(AI)/Linear%20Algebra.md) (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Multi-head attention and Feed Forward Network](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/multi-head-attention-and-feed-forward-network?u=76281980&t=0)** - Earlier, we looked at how self-attention can help us provide context for a [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for the sentence, the monkey ate that banana because it was too hungry. But what if we could get multiple instances of the self-attention mechanism so that each can perform a different task? One could make a link between nouns and adjectives. Another could connect pronouns to their subjects. Now that's the idea behind multi-headed attention. And what's particularly impressive is we don't create these relations in the model. They're fully learned from the data. So BERT has 12 such heads and each multi-head attention block gets three inputs, the query, the key and the value. These are put through linear or dense layers before the multi-head attention function. The query, key and value are passed through separate fully connected linear layers for each attention head. And this model can jointly attend to information from different representations and at different positions. By having 12 self-attention heads, the BERT model is able to focus on several tasks at once, that's allowing it to make richer connections between words. And just so you know, for some of the larger language models, they have significantly more heads. As an example, GPT three has 96 such heads. So the key takeaway from this video is that multi-head attention allows us to make richer connections between words and none of these connections are created, but they're all learned by the model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** bert (2), gpt (1)
> **Speakers:** - earlier (1)


### 3. Large Language Models

[↑ Back to Table of Contents](#table-of-contents)

#### [GPT-3](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is probably the most well-known large language model. Let's take a look at what the letters GPT represent in turn. G is for generative, as we're predicting a future token, given past [Tokens](../../Skills/Web%20Development/Tokens.md). P is for pre-trained, as it's trained on a large corpus of data, including English Wikipedia, among several others. This involves significant compute time and costs. And finally, the T corresponds to a transformer, and we're using the decoder portion of the transformer architecture. GPT-3's objective is simple. Given the preceding tokens, it needs to predict the next token. So these are known as causal or autoregressive language models. This is very similar to how predictive text works on your phone. So if you type roses, the next suggested [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) is likely to be are followed by red and so on. GPT-3 was trained on the English Wikipedia, which is around 2 1/2 billion words, Common Crawl, WebText2, Books1, and Books2. Now, Common Crawl is raw webpage data from years of web crawling. WebText is a dataset created by scraping URLs from Reddit with a score of three, and this is a proxy for the quality of the data response. And the Books1 and Books2 corpus are likely to be the BookCorpus, which is a large collection of free novels written by unpublished authors. Earlier, we looked at how masked language modeling and next sentence prediction were the pre-training tasks for BERT. With GPT-3, the pre-training task was causal language modeling.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=94)** This means its pre-training task is that it needs to predict the next word in a text. So what this means is that we can train the model in a self-supervised way, and we don't have to annotate our datasets. We can then take all these humongous datasets and use them to train our model. Additionally, we want to use some decoding [Algorithms](../../Skills/Software%20Development/Algorithms.md) such as beam search, to give us a balance of coherent language and diversity, so we don't get sentences repeated. For a couple of years, the focus of researchers was getting a large corpus of data and then training a language model. Now, if you wanted to use that language model for a specific task, say, sentiment analysis, then you'd need to give it hundreds of examples of sentences that were labeled as either having a positive or negative sentiment and train the model on these sentences and labels, and the model would produce excellent results. Now, let's take an example from the IMDB dataset, which are movie reviews that are either positive or negative. So here's the text, brilliant execution in displaying once and for all, this time in the venue of politics, and so on. And this is labeled with a 1, which means it's a positive review. The second text goes like this, this piece ain't really worth a comment. It's simply the worst horror movie I've ever seen, and so on. And this is labeled with a 0, which means it's a negative review. Now, if you had a totally different task, like providing some sentences and a couple of questions, and the model had to find the answer to the questions in the sentences, the same model that you use for sentiment analysis would fail miserably at this task. So you'd have to start again
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3?u=76281980&t=186)** with your initial language model and give it hundreds examples of text and questions and where the answers are, and it would get good at this task. Now, what makes this different to how you and I operate is that if we have to learn a new task, we can do a reasonable job if we're given a clear set of instructions and given just a couple of examples. So the question is, what if we could create a language model that if we give it a new task and a couple of examples with the expected output, that it would be able to perform well on these tasks? And GPT-3 does just that. And what's really remarkable is that the way you interact with these models is with a prompt. This means that if you sometimes don't get the answer you expect, you can change the prompt, and you might get another and hopefully better answer. So this means you can provide a task and see how it performs without providing any examples or expected output. This is an example of zero-shot learning. One-shot learning is where you provide a task and one example with the expected output. And as the name suggests, few-shot learning is giving the model a couple of examples with the expected output. Let's summarize our understanding of GPT-3 in a table. One of GPT-3's primary objective was few-shot learning. This performed best on the largest of the GPT-3 models, the 175-parameter model. GPT-3 provides an easy way to interact with models. In the next video, we'll look at a couple of examples of working with the GPT-3.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** gpt (11), bert (1), imdb (1)
> **Definitions:** is a  (3), known as (1), means that (1), is an  (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [GPT-3 use cases](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=0)** - Open AI provides access to GPT-3 via an API, and you can sign up for an account if you want to try these out. So let's take a look at a couple of examples. So let's head over to the playground and let's select classification from the dropdown list. Now this is a classification example available by default. Let's go ahead and clear this and let's enter this one. So the following is a list of companies and the categories they fall into. So Unilever is a consumer goods. Uber is to do with transportation and technology, Burger King, fast food, Intel, computer chips. Now if we go ahead and enter FedEx, and you can see that the model correctly responds with delivery. Now let's enter [Facebook](../../Glossary/Service/Facebook.md) and select submit. Now that looks like a reasonable category. Now we all know that Facebook rebranded to Meta at the end of 2021. So what happens if we enter Meta instead? Now, if you look up the notes for Open AI's model training data, this training cuts off in 2021. So I'm not sure if this includes all of 2021, but Meta and technology seems to be a reasonable answer. Now I find it absolutely amazing that we can interact with these models in not using some complex code, but almost having a conversation about the task using prompts. Let's take a look at an example. Now, one of my favorites is a use case with GPT-3 and summarizing text for a second grader. And let's copy the data from Wikipedia about GPT-3,
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=95)** and let's see how it summarizes data about itself. So summarize this for a second grade student, Generative Pre-train Transformative 3 is an auto aggressive language model and so on. And let's see if it's able to summarize this. And you can see that it does a terrific job. GPT-3 is a machine learning model that generates human-like text. It is the third generation in the GPT-n series, and is the successor to GPT-2. It's train to predict what the next token is, and can generate text that is so realistic that's difficult to tell if it was written by a human. Now let's go ahead and experiment a little bit with some other tasks with GPT-3. So I'm going to select more examples. Now let's try and create a creative ad. So let me go ahead and just look through the list again. Okay, let's select ad from product description. Now write a creative ad for the following product to run on Facebook aimed at parents. So I'm going to create a ad for a bot to help students in high school to learn how to code in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), and let's see if it comes up with some reasonable content. And so that's a bot to help students in high school to learn how to code in Python. And let's see what ad GPT-3 has come up with. Python is the language of the future. Give your high school student a leg up on their future career by helping them to learn Python coding with our easy to use bot. So that's absolutely brilliant. Now there are examples of summarization and translation that I can get into. Let's take a look at one or two more examples. And let's pick a fun one about recipes, so.
>
> **[3:12](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=192)** And I want to create a recipe for chocolate chip cookies. So I'm just going to replace all of the ingredients and type chocolate chip cookies. And let's see what instructions GPT-3 comes up with. So preheat oven to 350 degrees Fahrenheit. In a bowl, cream together with the butter, chocolate, and eggs. In another bowl, mix together the flour, cocoa powder and white chocolate. And finally, enjoy your delicious chocolate chip cookies. So these seem to be very reasonable instructions for baking chocolate chip cookies. Now let's go ahead and try and trick GPT-3. So let me go ahead to study notes. So what are five key points I should know about, and let's say running backwards. And let's see what advice GPT-3 has for us. So running backwards is a great way to improve your speed and agility. Okay, so that's clearly incorrect advice. Running backwards also helps improve your balance and coordination. It's important to keep your head up and your back straight when running backwards. Make sure to take short, quick steps on running backwards. Always warm up and stretch before running backwards to avoid injury. So we can see that there are a couple of poor responses there in terms of those five points. Now let's change running backwards to running blindfolded and see if GPT-3 improves on its advice. Now what you should know is that each time I generate these responses, they're going to be different.
>
> **[4:46](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gpt-3-use-cases?u=76281980&t=286)** So if you go ahead and generate these responses, you're going to get different responses than I have. So the first suggestion is do not attempt to run blindfolded without a trusted guide, so that's very good advice. Be aware of your surroundings and where you're running. Be cautious of obstacles in your path. Follow your guides instructions carefully, and do not remove your blindfold until you're safely at your starting point. So most of this seems to be very good advice. Unfortunately, the fifth one, do not remove your blindfold until you're safely back at your starting point, isn't great advice. So all in all, GPT-3 performed very well there. So we've looked at a wide variety of different tasks that GPT-3 can do in this video. And in general, the results are very impressive.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (4), [Facebook](../../Glossary/Service/Facebook.md) (3)
> **Env Vars:** gpt (14), api (1)
> **Definitions:** is a  (6), is an  (1)
> **CLI Commands:** python (4), find (1), make (1)
> **UI Navigation:** dropdown (1)
> **Best Practices:** make sure to (1)
> **Warnings:** be aware (1)
> **Speakers:** - open (1)

#### [Challenges and shortcomings of GPT-3](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=0)** - [Instructor] GPT-3 is not without its problems. GPT-3 was trained on data that is biased. Now, human language and text reflects our bias, and you and I are in many sense privileged as we have access to computers, we can easily publish our thoughts online, whether that's through a blog post or on a site like Reddit. And part of this data that GPT-3 was trained on was data that was deemed interesting on Reddit based on up votes from other users. Unfortunately, this means that biases and dominant worldviews then make it into training data and are encoded in [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). Let's see if there are examples of bias in the model. So I'm going to head over to the OpenAI GPT-3 model. So this is the playground. Now, I'm not going to cherry pick any results. I'm going to give them to you exactly as I see them. So if we take our first sentence, So after a long day's work at the hospital, the nurse was tired because, and I select submit. And you can see it continues with she had to work a double shift. Now you can see that the nurse is female. This is demonstrating gender bias. Now, if we try another sentence this time using the doctor as the profession, and we go ahead and select submit. And you can see that GPT-3 switches things around and the doctor is male. This is again showing gender bias. Nurses are almost always female, and doctors are almost always male. Now, if we do the same exercise and we have another sentence, we ask the receptionist for directions to our room and select submit. So it looks like the receptionist is female. Again, this is an example of gender bias. Now, if we change the sentence,
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=93)** after long meeting with the board, the company president was tired because, and this is another example of gender bias, because there's no indication that the company president is ever female. And just one last one. After spending the entire morning staring at the screen, the programmer stepped away for lunch because he was hungry. Now, I've tried all these examples hundreds of times each and the genders are very rarely switched. I've never seen a female programmer or a male nurse. At least in the examples we've looked at, lower skilled and lower paid jobs are more readily linked to women, and higher skilled and higher paid ones more readily linked to men. And certain professions are more directly linked to men rather than women. So are there more female nurses than male nurses? Absolutely. Are there more receptionists that are female than male? Yes, again, so what's the problem? Most people now apply for jobs online, and in many cases where resumes are filtered by AI systems, these are downstream tasks from large language models. So where the model has a strong association between gender and certain professions, this means there's a bias where there are more men for certain types of employments. So for example, you don't want a resume to be preferred only because it's clear that the applicant is a man rather than a woman. There are other examples of gender bias in GPT, and we haven't carried out an in depth study. But it's clear that we need a human in the loop to check the output for some of the downstream tasks. So where does this bias come from? Well, it's clearly from the data the models were trained on. This includes Reddit and Common Crawl, amongst others. Now in early 2022, OpenAI tried to address some of these challenges
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/challenges-and-shortcomings-of-gpt-3?u=76281980&t=186)** by creating a new model called InstructGPT. They hired a team to help label and assess whether the response from the model was in line with the intent of the prompt. So let's say the model was given a prompt, such as writer story about a wise frog. If the response was in line with the same, then the model received a more favorable score. If instead, the response was off topic and used violent language and was biased in content, then the model received a negative score. They created a reward function to get the model to pick the one that the labelers would prefer. The more it got right, the more it was rewarded. One of the other major concerns with GPT-3 and large language models is their environmental impact. A carbon emission study of large language models was conducted by [Google](../../Glossary/Service/Google.md) and Berkeley in 2021 and found that training GPT-3 would've resulted in energy consumption of almost 1,300 megawatt hours and a release of 550 tons of CO2. We've looked at two of these shortcomings of GPT-3: bias and environmental impact. It's not surprising that some of the large language models that follow GPT-3 tried to optimize the model and address these challenges. And we'll take a look at some of them next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (5), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** gpt (10), co2 (1)
> **Definitions:** means that (1), is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [GLaM](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=0)** - [Instructor] The [Google](../../Glossary/Service/Google.md) research team noted that training large dense models requires significant amount of compute resources, and they proposed a family of language models called GLaM or Generalist Language Models. They use a sparsely activated mixture of experts architecture to scale and because they're using a sparse model, they have significantly less training costs compared to an equivalent dense model. Now these models use only 1/3 of the energy to train GPT-3 and still have better overall zero shot and one shot performance across the board. The largest GLaM model has 1.2 trillion parameters which is approximately seven times larger than GPT-3. Now the GLaM model architecture is made up of two components. The upper block is a transformer layer and so you can see the multi-head attention and the feed forward network. And in the bottom block you have the mixture of experts layer. Again, you have a multi-head attention at the bottom and instead of the feed forward network, you have a mixture of experts layer. Each layer here consists of a collection of independent feed forward networks and these are known as the experts. You can see the gating function in the bottom block and this will use a soft max function to help determine which of these experts will process the input. Let me give you an example. So let's say our input [Tokens](../../Skills/Web%20Development/Tokens.md) was the phrase roses are red and violets are blue and the blue grid represents the 64 experts.
>
> **[1:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/glam?u=76281980&t=95)** A gating module dynamically selects two of the experts for the first token roses. For the next token, are, as in roses are, two different experts would be dynamically selected here. Now, even though each mixture of expert layer has many more parameters the experts are sparsely activated. This means that for a given input token, only a limited subset of experts is used. Now during training, each mixture of experts layers gating network is trained to use its input to activate the best two experts for each token of an input sequence. During inference, the learned gating network dynamically picks the two best experts for each token. And as a result, you can see that when we compare a dense decoder model such as GPT-3 with its 175 billion parameters, all of them are activated when a token is inputted into the model. With the GLaM model with 64 experts, the total number of training parameters is 1.2 trillion, but only 96.6 billion of these are activated during training. So let's wrap up this section by comparing it to GPT-3. So the objective of Google's GLaM model is to reduce the training and inference cost using a sparse mixture of experts model. Although the actual size is 1.2 trillion, we've seen how it only uses a portion of this for both training and inference tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Env Vars:** gpt (4)
> **Versions:** 1.2 (3), 96.6 (1)
> **Definitions:** is a  (1), known as (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Megatron-Turing NLG Model](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=0)** - [Instructor] A lot of the research after GPT-3 was released seemed to indicate that scaling up models improved performance. So [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) and Nvidia partnered together to create the Megatron-Turing NLG model, a massive three times more parameters than GPT-3. Modelwise, the architecture uses the transformers decoder just like GPT-3, but you can see that it has more layers and more attention heads than GPT-3. So for example, GPT-3 has 96 layers while as Megatron-Turing's NLG has 105. GPT-3 has 96 attention heads, and Megatron-Turing's NLG model has 128 and finally, Megatron-Turing's NLG model has 530 billion parameters versus GPT-3's 175 billion. Now, the researchers identified a couple of challenges with working with [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). It's hard to train big models because they don't fit in the memory of one GPU because it would take a long time to do all the compute operations required. Efficient parallel techniques, scalable on both memory and compute, can help to use the full potential of thousands of GPUs. Although these researchers achieved superior zero, one and few-shot learning accuracies on several NLP benchmarks and established some new state-of-the-art results, a lot of their success is probably more around the super-computing [Hardware](../../Topics/Hardware.md) infrastructure that was developed
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/megatron-turing-nlg-model?u=76281980&t=92)** with an enormous 600 Nvidia DGX A100 nodes. To wrap this video up, let's add the Megatron-Turing language model to the list so that we can compare it with the other models. The objective around the Megatron-Turing language model seems to be mostly around hardware infrastructure, and this model was one of the largest dense decoder models coming in at 530 billion parameters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Env Vars:** gpt (7), nlg (4), gpu (1), nlp (1), dgx (1)
> **Analogies:** just like (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Gopher](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=0)** - [Instructor] The DeepMind research team released Gopher in January of 2022. They released six flavors of the model ranging from 44 million parameters to 280 billion parameters. And they also put together a diverse dataset called MassiveText and then they tested the model on 152 different tasks. Now in the next few minutes, we'll look at each of these tasks in a little more detail. So let's take a look at the architecture first. And you can see it's similar to GPT-3, where you're just using the decoder portion of the transformer. And in their paper, the DeepMind team presented results for the six models with the smallest model being 44 million, all the way to 280 billion parameters. Now, the reason the model sizes increase is because you can see that we're increasing the number of layers, the number of self attention heads, and so on as we move down the table. Now let's take a look at what data Gopher was trained on. One of the first things we notice about Gopher is that a significant dataset has been put together. The DeepMind team called this MassiveText. Now, this dataset has over 2.3 trillion [Tokens](../../Skills/Web%20Development/Tokens.md) in total. What's interesting is that they only train on a subset of these tokens so the model doesn't get to see the whole dataset. Now, over 99% of MassiveText is in English. The remaining text is split between Hindi, followed by mostly a couple of European languages. If we just look at the top six domains of MassiveWeb, you can see that four of these sources are either academic or scientific in nature.
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=94)** These would be science [direct.com](https://direct.com), [gale.com](https://gale.com), [nih.gov](https://nih.gov), or the National Library of Medicine, and [academia.edu](https://academia.edu). And so it shouldn't come as a big surprise that many of the tasks that Gopher is tested on are scientific in nature, such as high school chemistry, astronomy, clinical knowledge, and so on. There are 152 different tasks that the model is evaluated on, and they range from reading comprehension and fact checking to mathematics, common sense, and logical reasoning. And the results are pretty impressive. Gopher outperforms the current state of the art [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) in 100 of the 124 tasks it was tested on. So what you have on the X axis are the different tasks, so each vertical bar corresponds to a different task, and the Y axis is the percent change to the state of the art at that time. So bigger is better. Now the darker the shade of blue, the bigger the percent improvement. And in general, you can see that Gopher improves over the current state of the art for fact checking and general knowledge tasks, STEM and medicine, [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md), and reading comprehension. You can also see that there's more pink in this diagram. This is where there was a decreased improvement compared to other models. So in general, it looks like Gopher doesn't do as well on tasks such as language modeling, mathematics, common sense, and logical reasoning. Now, if you remember, six models were created in all. So what's really interesting
>
> **[3:07](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=187)** is that if we can compare the 280 billion parameter model versus the best performance of all the other smaller models up to 7.1 billion parameters, it looks like the bigger model performs better for things like fact checking and general knowledge, STEM and medicine, and reading comprehension. On the other hand, for tasks such as mathematics, common sense, and logical reasoning, you're still getting better performance with a bigger model. But the difference isn't as pronounced as for fact checking, STEM, and medicine type tasks. In fact, there are cases where these smaller models perform better on mathematics, common sense, and logical reasoning tasks, as shown by the bars in pink. So in general, we can conclude that the bigger 280 billion Gopher model has better accuracy scores compared to the smaller model. Now, you might be wondering what's the difference when you compare GPT-3 to Gopher. I've just picked a couple of tasks where Gopher performs the best against GPT-3. These tasks include things like microeconomics, college biology, high school US history, and so on. These are tasks that sound quite data heavy. So when comparing the GPT-3 with five shot learning for both, so that's when you give it five examples to learn from, the Gopher model is about 25% more accurate than GPT-3 for these tasks. Now, similarly, if we were to pick the five lowest performing scores when compared to GPT-3, then you can see that Gopher is marginally better than GPT-3 at elementary mathematics and college computer science and mathematics,
>
> **[4:43](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/gopher?u=76281980&t=283)** global facts, and virology. You can see by the pink bars that it also performs worse in high school mathematics and abstract algebra. So it looks like Gopher compared to GPT-3 doesn't perform so well in general in mathematics and reasoning tasks. Let's wrap things up by adding Gopher to our large language comparison table. In general, Gopher improved the state of the art performance for 80% of the task. The larger the model, with 280 billion parameters being the largest, the better the performance, but this wasn't the case across all tasks. The performance on logical and mathematical reasoning tasks doesn't seem to improve with larger language models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1)
> **Env Vars:** gpt (8), stem (3)
> **URLs:** [direct.com](https://direct.com) (1), [gale.com](https://gale.com) (1), [nih.gov](https://nih.gov) (1), [academia.edu](https://academia.edu) (1)
> **Analogies:** such as (3), similar to (1)
> **Versions:** 2.3 (1), 7.1 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Scaling laws](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=0)** - [Instructor] Up to this point, we've looked at a couple of models, but now is a good time to try and understand why we have such large parameter models. Around the time of the release of GPT-3, the OpenAI team released some results around what they called the scaling laws for large models. They suggested that the performance of large models was a function of the model parameters, the size of the data set, and the total amount of compute available for training. They performed several experiments on language models. Let's take a look at some of the results. On the Y axis is the test loss. The test loss will converge for each of the models. So the lower the test loss, the better performing the model. Across the x axis is the number of parameters of the model. You can increase the sizes of these models by making them wider or increasing the number of layers. So as we go across, we're going with models with a hundred thousand to 10 million to 1 billion parameters. So we can see here that the larger the model size, the better performing you would expect the model to be. The graph in the middle, plots the test loss versus the data size. The OpenAI researchers used a large model, so the model size would not limit the performance. And they also used a training technique called early stopping, which stops training when the test loss reaches a minimum value. Now, from the graph in the middle, you can see that there's again, this striking power log trend, much like we saw when plotting test loss against parameters. So the larger the dataset size, the lower the test loss. And finally, if we look at compute,
>
> **[1:32](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=92)** the x axis is the number of petaflop compute days. Now, petaflop day is around 10 to the power of 20 operations. In the diagram, each of the blue lines correspond to the learning curves of different models of different sizes. The reason that this moves to the right is that bigger models require more computation. So for every token that is input for larger dense models, each of the parameters are involved in some way, and so they require more compute. But you can see that the test loss reduces, meaning that the bigger models perform better. The orange line is the maximum optimal amount of performance you can get for a given amount of compute. So what this graph is telling you is that based on your compute budget, if you have more compute budget, use a larger language model, and if you have a smaller compute budget, use a smaller language model. So if we take all three, what this is saying is that language modeling performance improves as we increase the model size, the data set size, and the amount of compute used for training. For best performance, all three factors must be scaled up together. The OpenAI team then go onto propose that as more compute becomes available, you can decide where you want to allocate this. Either training a larger model using larger batches, or training for more steps. And the conclusion that came to, was that most of the increase should go towards increasing the model size. There will be some benefit to using more data and using large batch sizes, but minimal contribution if you train for more steps. One of the reasons why model sizes have just got bigger
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/scaling-laws?u=76281980&t=186)** after GPT-3, is that these scaling low suggest that increasing the model size will give you the biggest benefit.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Chinchilla](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=0)** - [Instructor] Up to this point, we've seen that the trend has been to increase the model size. Interestingly, the number of training [Tokens](../../Skills/Web%20Development/Tokens.md) used for most of these models has been around 300 billion. Now, the DeepMind team's hypothesis was that Gopher was too large. If you take the same compute budget, a smaller model trained on more data will perform better. They then tested this hypothesis by training over 400 language models, ranging from 70 million to over 16 billion parameters with data sets from five to 500 billion tokens. They then trained Chinchilla a 70 billion parameter model with 1.4 trillion training tokens and Chinchilla outperforms Gopher which has 280 billion parameters GPT-3 with its 175 billion parameters and Megatron-Turing NLG with its 530 billion parameters on a large range of downstream evaluation tasks. As this is a smaller model this means less computes required for [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) and inference. Now, let's think back to what we learned about scaling laws. One of the key insights in this paper is that if you were training a large language model and you got a tenfold increase in computational budget, the majority of that should go towards increasing the size of the model. They suggested that the model should increase by five and a half times and the number of training tokens should increase by 1.8 times. The conclusion that the DeepMind team came to was very different. For a tenfold increase in computational budget the model size and the number of training tokens
>
> **[1:34](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=94)** should be scaled in equal proportions. Let's take a look at how they demonstrated this. Now, on the X-axis we have flops or floating point operations which are a measure of computation, and on the Y-axis we have the number of parameters for the models. On the graph, you can see that the GPT-3 model represented by the red star, the Gopher model represented by the yellow star, the Megatron-Turing model given by purple, and finally the Chinchilla model represented by the green star. Now, we know that Chinchilla performs better than any of the models, but what's interesting is that it was trained on the same amount of compute as all of the larger models. The point being that you don't need to have all of these larger models because they've all been undertrained. We can see this in this table Chinchilla has 70 billion parameters, which is far fewer than any of the other models. Compare this to GPT-3s, one 75 billion parameters and Gopher's 280 billion parameters and so on. But what is different is that while most of the [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) have been trained on around 300 billion tokens, Chinchilla has been trained on 1.4 trillion tokens, which is almost five times as many tokens as has been the norm. The DeepMind team set out to answer this question, given a fixed flops budget, how should one trade off model size and the number of training tokens? Now, if you're given the number of flops, then you can figure out the number of parameters and the number of training tokens. So here the smaller models are given by a purple color and the largest models are yellow. So what's happening is that for each of the flops
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=188)** we can figure out which model has the lowest training loss and we can then plot this. We can then take all of the lowest training losses for each of the models and plot this against flops. This way, given a certain number of flops we can predict how large the model needs to be. With the example of Chinchilla, we know that the number of flops was over 10 to the power of 23, so the optimal number of parameters is going to be around 70. Similarly, we can take the number of training tokens and plot that against the number of flops and determine for a specific number of flops how many training tokens we need. Now from the graph earlier we know that the number of flops for Chinchilla was a little less than 10 to the power of 24. Now, this means that if we know that this is the compute budget we can then figure out the number of parameters for an optimal model and the number of training tokens. So let's confirm this for Chinchilla. If we then draw a line for these number flops we can determine that any model that uses this many flops should have approximately 67 billion parameters. And similarly, we need around 1.5 trillion training tokens. And if we look here, it isn't surprising. While Chinchilla has 70 billion parameters and was trained on 1.4 trillion tokens. The DeepMind team took things a step further. For a given flop budget what is the optimal parameter count? So this time we have nine different training budgets which correspond to the nine different flops and the curves that you can see in this diagram. Now we can plot these lowest loss values and the number of parameters in a model against flops.
>
> **[4:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=282)** Similarly, we can plot the number of training flops against the number of training tokens. And again, for a compute budget for Gopher of less than 10 to the power of 24 gives us an optimal parameter size of 63 billion, and we need 1.4 trillion tokens to train on. So this then begs the question, are the massive language models we are seeing today oversized? So let's say we use the Gopher model as our baseline for their compute budget of 5.76 to the power of 23. The optimal model parameter size should be 67 billion and the number of training tokens, 1.5 trillion. Now, we know that the number of training parameters for Gopher was 280 billion. This meant that their training budget should have been actually 17 times more and they would've required 5.9 trillion training tokens. It doesn't mean that you can't train these larger models it's just that these models have not been optimally trained with enough data. Now, remember that the Chinchilla model which is trained on 70 billion parameters with 1.5 trillion training tokens significantly outperformed a GPT-3 which has 175 parameters, Gopher which has 280 billion parameters and Megatron-Turing NLG which has 520 billion parameters. So where does this leave us with the scaling laws that we looked at earlier? The DeepMind team designed an interesting experiment to compare their findings with the scaling laws. So given a compute budget of 10 to the power of 21 flops, determine the number of parameters required and how much a data is required to train it
>
> **[6:16](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=376)** using the scaling laws prescribed by OpenAI and the ones determined by DeepMind. So whichever model results in the most performant model is better. With the scaling laws from the OpenAI team, a 10 to the power of 21 flops budget recommends a 4.68 billion parameter model. And DeepMind's approach recommends a 2.8 billion parameter model. The Y-axis is the training loss, so the lower the better, and the X-axis represents the number of training tokens. And you can see that if we stopped at the number of training tokens recommended by OpenAI it would appear that it has a lower training loss and that it's a better model. However, because DeepMind's 2.8 billion parameter model needs to be trained on more data, we see that it ends up with an overall lower training loss after being trained on more data. And similarly, if you were to just plot the training loss versus the number of training flops. Now we plot the two models, the 4.6 billion parameter model from OpenAI and the 2.8 billion parameter from DeepMind versus Compute. You can see that we get a lower loss with the DeepMind model. They concluded that you can end up with a more performant model using a smaller model with more training data. So let's wrap up this section by adding Chinchilla to our list of models. Our biggest takeaway is that the current large language models are significantly undertrained and from the table, Chinchilla is trained on more than four times as much data as any other large language model.
>
> **[7:48](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/chinchilla?u=76281980&t=468)** It's the smallest but also has the best performance results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (22), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (2), [Fine Tuning](../../Skills/Software%20Development/Fine%20Tuning.md) (1)
> **Versions:** 1.4 (4), 1.5 (3), 2.8 (3), 1.8 (1), 5.76 (1)
> **Env Vars:** gpt (4), nlg (2)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** compare this to (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** required to (1)
> **Speakers:** - [instructor] (1)

#### [BIG-bench](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=0)** - [Instructor] Now some of the challenges with the current benchmarks were that they were two narrow in scope, including tasks like language understanding or summarization. It almost seemed like a research team would come up with some of these more basic tasks, and then a couple of months later, another research team would come up with a model that would ace these tasks. What if there were some benchmarks that had some really challenging tasks? And that's pretty much the background to BIG-bench or Beyond the Imitation Game Benchmark. A team of researchers from different institutions came up with over 200 tasks that humans perform well on but current state of the art language models don't. They also included a team of human expert writers that performed all tasks in order to provide a strong baseline, and they were allowed to use all available resources including searching the internet. The tasks are really diverse and are all available on [GitHub](../../Skills/Software%20Development/GitHub.md). Here are a couple of examples. So Checkmate in One Move. The input to the model is a sequence of chess moves in algebraic notation such that the next move will allow you to win the game in chess. And the model needs to provide the correct move as the output. If you don't know chess or are relatively new to the algebraic notation, you have to know the current state of the chess board which moves are legal and then you might be moving a piece that you moved perhaps 10 moves ago. So it's a pretty challenging problem. Now, if we scroll down and look at the performance plots, we can see here that the best human score is around 70. An average human score or someone who might just know the basics of chess or had to look things up scored just under 10, and all the model performances were significantly worse
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=96)** than the average human performance. Let's head back to BIG-bench and look at another task. We can also ask a large language model to guess popular movies from their plot descriptions written in emojis. So this task is testing a couple of things. Can the large language model understand emoji expressions and what is its knowledge of current popular culture and movies? The focus of this task is describing the movie plot instead of the movie title. For example, the movie "Finding Nemo" can be described as a magnifying glass followed by a clown fish based on its title. But this task isn't testing the mapping of emoji characters to movie titles. So the emojis following the plot would be written as a girl that's involved along with the fact that there are other fish and a clown fish. Now, what makes this task difficult is that there isn't a one-to-one mapping between movie plots and their emoji descriptions. One can have different variants of the same emoji or different emojis to describe the same movie. Now, let's see if GPT-3 would be able to figure something like this out using zero shot learning. This means we don't give it any examples. So let's head over to the GPT-3 API. Now I have no idea what the GPT-3 model will output. So let's go ahead and select submit. And you can see that the model got this wrong, but if we try again, we see that the emoji describes the movie "Finding Nemo." Now, in 99% of the times that I've tried this example, I've got the answer "Finding Nemo." We just saw the 1% where it picked a another film. The last example I picked
>
> **[3:08](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/big-bench?u=76281980&t=188)** from these tasks is the use of Kannada, which is a low resource language used in India. To simplify things, the researchers turned it into a four choice multi-choice question format. So as an example, the task would be, and this would all be in Kannada not in English, "Black pepper is a vessel. Who am I?" And the four options provided are siv, papaya, mango, sandalwood, and the correct answer expected would be papaya. Now, if we look at the performance results, we can see that the best human rate comes in at a score of around 80. As you can imagine, the performance of a lay person, so someone who doesn't speak Kannada was very poor, even if they had access to the internet. So their score comes in at around 42. Now, if you look at the results, quite remarkably the larger power models when provided with a two or three examples performed better than the average lay person, and the scores being around 50 and 45. So what conclusion did the researchers come to? Well, they found that no model, regardless of size, outperformed the best performing human on any task. However, for some tasks, the best performing model beat the average human. So this leads us to the best performing model to date, [Google](../../Glossary/Service/Google.md)'s PaLM, and we look at this next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** gpt (3), big (2), api (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), imagine (1)
> **Tools:** github (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [PaLM](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=0)** - [Instructor] In April, 2022, [Google](../../Glossary/Service/Google.md) released PaLM, or to give it its full name, the Pathways Language Model. Now there are a couple of key takeaways from this model. Comparing the number of parameters, we can see that PaLM is the largest of the dense parameter models with 540 billion parameters. It dwarfs the GPT-3's 175 billion parameters, Gophers, 280 billion, and just edges out Megatron-Turing NLG at 530 billion parameters. Now, Google used the pathway system, a new AI architecture that they revealed at the end of 2021. So using this framework allows for many more chips to be used for model training, with PaLM being trained on 6,144 [Hardware](../../Topics/Hardware.md) accelerators versus smaller numbers of chips being used for previous [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). And finally, if we look at the Model Flops Utilization, you can see that the Model Flops Utilizations have increased going from GPT-3 to PaLM. PaLM has effectively doubled the Model Flops Utilization. So the higher the number, the more efficiently a model can be trained. And these are possible because of improvements over the years across the model and compiler technology. Now, PaLM was trained on an enormous 780 billion [Tokens](../../Skills/Web%20Development/Tokens.md) using a multilingual corpus with text from over 100 languages. Now about 78% of this training data was in English. So 50% of the training is in multi-language social media conversations, just over a quarter is filtered webpages,
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=96)** and then we have the usual contents that we've seen so far, books, [GitHub](../../Skills/Software%20Development/GitHub.md), Wikipedia, and the news. Now another really interesting phenomena that the Google team picked up on was on scaling. It looked like the models could only perform certain tasks once a certain scale was reached. Here, 8 billion parameter models could perform certain tasks such as question answering, language understanding, and arithmetic. It was only when the model was scaled up to 62 billion parameters that more tasks such as translation, summarization, and common sense reasoning were possible. But it then required a much bigger jump to 540 billion parameters for the model to be able to perform tasks, such as general knowledge, reading comprehension, and joke explanation amongst others. Yes, I did say joke explanation. Let me give you an example. Like any few short learning model, you can give it a couple of solved examples as a prompt to your input. So we provide the first example of explaining a joke. So the prompt is I will explain these jokes. The problem with kleptomaniac is that they always take things literally and we then provide a sample explanation. So the explanation is this joke is wordplay. Someone who takes things literally is someone who doesn't fully understand social cues and context, which is a negative trait. But the definition of kleptomania is someone who literally takes things. We can then provide a second example of a joke. So always borrow money from a pessimist, they'll never expect it back. And finally we provide an explanation of this joke. So the explanation goes,
>
> **[3:09](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=189)** most people expect you to pay them back when you borrow money. However, a pessimist is someone who always assumes the worst, so if you borrow money from them, they will expect that you won't pay them back anyways. And now we provide our joke as the input. So I was going to fly to visit my family on April 6th. My mom said, "Oh great, your stepdad's poetry reading is that night. So now I'm flying in on April 7th. And remarkably the model returns this as output. The joke is that the speaker's mother is trying to get them to go to their stepdad's poetry reading, but the speaker doesn't want to go. so they're changing their flights to the day after the poetry reading. Now let's see what results we get from GPT-3 with joke explanation. Now, just so you know, I have absolutely no idea what the GPT-3 model will output. Let me provide the two jokes with the explanations as an example, and then let's go ahead and see what explanation GPT-3 comes up with. So the response back from GPT-3 is this joke is a play on words. The person is saying that they were originally going to fly in on April 6th, but their stepdad's poetry reading is that night, so they decided to fly in on April 7th instead. This is funny because it's a play on the words fly and poetry, which are both pronounced the same way, so clearly this isn't correct, and GPT-3 didn't get this right. Let's head back to the findings from the PaLM model researchers. They also found that sometimes standard prompting didn't work. So if you give the model the example, Roger has five tennis balls. He buys two more cans of tennis balls. Each can has three tennis balls.
>
> **[4:42](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/palm?u=76281980&t=282)** How many tennis balls does he have now? And you gave the model, the answer is 11. And if you then ask the question, the cafeteria has 23 apples, if they use 20 to make lunch and bought six more, how many apples do they have? It would sometimes get the wrong answer. And you can see here the incorrect answers provided. The model return the answer 50. Now instead, if you provided how you came up with the answer as part of your prompt, so for example, Roger started with five balls, two cans of three tennis balls. Each is six tennis balls, five plus six equals 11. Then the output from the model would mimic your chain of thought reasoning and come up with the correct answer. So for the question with the cafeteria, the model would come up with the cafeteria had 23 apples originally. They used 20 to make lunch. So they had 23 minus 20, which is three. They bought six more apples. So they have a total of three plus six, which is nine. The answer is nine. So let's wrap up the section by adding PaLM to our list of models. You can see it's the largest language model parameter to date, and it has the best overall performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Hardware](../../Topics/Hardware.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** gpt (7), nlg (1)
> **Analogies:** such as (3), for example (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [OPT and BLOOM](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=0)** - [Instructor] You've probably noticed that up to this point all of the language models are from big tech firms. Now although OpenAI made GPT-3 available via an API, no access was given to the actual weights of the model making it difficult for smaller research organizations and institutions to study these models. The Meta, or [Facebook](../../Glossary/Service/Facebook.md), AI team then released OPT, or Open Pre-trained Transformers. This was a couple of decoder-only pre-trained transformers ranging from 125 million to 66 billion parameters, which they shared with everyone. Interested research teams could also apply for access to the 175 billion parameter model. Now, this effectively gave researchers access to a large language model that was very similar to GPT-3. The Facebook team also detailed the infrastructure challenges they faced, along with providing code for experimenting with the models. This model was primarily trained on English text. The research teams behind the BLOOM model went one step further. The [Hugging Face](../../Glossary/Service/Hugging%20Face.md) team working together with the Montreal AI [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) Institute got a 3 million Euro grant for compute resources from research institutes in France. And then working together with a volunteer team of over 1000 researchers from different countries and institutions, they created a 176 billion parameter decoder-only transformer model called BLOOM. Now, this team has made everything openly available
>
> **[1:36](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/opt-and-bloom?u=76281980&t=96)** from the dataset used for training to anyone being able to download and run the model. They also released intermediate checkpoints, so this allows other organizations outside of big tech to experiment with these models. Now, BLOOM is also able to generate text in 46 natural languages and 13 programming languages. Now, what makes BLOOM unique is that for most of these languages, such as Spanish and French and Arabic, BLOOM will be the first language model with over 100 billion parameters ever created. Now, even if you want to run these models as inference, you'll still need access to expensive [Hardware](../../Topics/Hardware.md) accelerators. What makes this project particularly exciting is that now because more research teams have access to these models, the weights and the data sets, some parts of the community might focus on trying to make smaller versions of the model, which can run on fewer and less expensive hardware accelerators. And other researchers might try and train it on other languages not covered so far and get the first 100 billion parameter model. These two initiatives from Facebook and Hugging Face have made [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) available to everyone, and only time will tell what impact this will have.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Facebook](../../Glossary/Service/Facebook.md) (3), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (2), [Hardware](../../Topics/Hardware.md) (2), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Env Vars:** bloom (5), gpt (2), api (1), opt (1)
> **Analogies:** similar to (1), such as (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [GitHub models](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=0)** - [Narrator] Imagine asking two teachers to explain the same mathematics problem to a class. Now each of them might have a different approach to solving the problem. And it's like that with [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). You can provide the same text or prompt and get a different response from the large language model. [GitHub](../../Skills/Software%20Development/GitHub.md) models let us easily compare two large language models. You'll need a GitHub account, and you can sign up for one by going to [github.com](https://github.com). And once you have an account, head over to [github.com/marketplace](https://github.com/marketplace). And here you can just select Models over on the left, and then you can select models based on the different providers, their capability, and then their functionality, so things like whether you need a model that has low latency, whether you want a model that can handle multiple languages, and so on. Now the OpenAI models, in general, are pretty good. So I'm going to use the GPT‑4o mini as my benchmark, and I want to compare this to one of the smaller models. And so let's pick one from the low latency list. So I'm going to go ahead and pick the Phi-3-mini instruct. I'm going to select Playground. And then I want to go ahead and compare this to the GPT‑4o mini model, so let me go ahead and select that. Now, this is the task. I want to get the models to explain a joke. Now this isn't as trivial as it sounds because it's checking the model's capability to work with nuances of the English language. So here's the joke. "I was going to fly to visit my family on May the 3rd,
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=93)** and my mom said, 'Oh, great, your dad's poetry reading is that night.' So now I'm flying in on May the 4th." Now I've intentionally included the reference to May the 4th to see if I can trick some of the language models to see if there's a "Star Wars" reference. The explanation of this joke or this [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) play is that this person doesn't want to attend their dad's poetry reading. So let's go ahead and see how the different models explain this.
>
> **[2:04](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/github-models?u=76281980&t=124)** Go ahead and pause the video here and compare the different outputs from the two models. After reading them, I think you'll agree with me that the GPT‑4o mini produces the best results. Now remember this illustration is only comparing the models for a single task. You'll want to be comparing models on hundreds and thousands of tasks to see which one performs the best for your business needs. Ultimately, you are the best judge for which model works best for your business and your situation. All right, so we've seen that GitHub models is a great way to prototype with large language models, letting you easily work with and compare large language models from different providers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (4), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Tools:** github (5)
> **Env Vars:** gpt (3)
> **Analogies:** imagine (1), it's like (1), compare this to (1)
> **URLs:** [github.com](https://github.com) (2)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### [Accessing Large Language Models using an API](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=0)** - [Instructor] Now in the previous video, we looked at comparing [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) using [GitHub](../../Skills/Software%20Development/GitHub.md) models. Now in this one, we look to see how we can access the large language models via an API using a programming language like [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). Now I prefer GitHub [Codespaces](../../Skills/Software%20Development/Codespaces.md) for [Prototyping](../../Skills/Software%20Development/Prototyping.md) any apps. It's a cloud-based coding environment and you can access it from any device. And what I like about it is I don't waste any time with setting things up. I'm going to demonstrate the step-by-step process for setting up a GitHub repo and using Codespaces to work with GitHub models. You can also go directly to the course GitHub repo to see the configuration already in place. I've also included the coding files in the repo for you. So let's kick things off with creating a GitHub repo. So I'm going to head over to [github.com](https://github.com), and this is my GitHub repo. And I'm going to head over to the top and select Create a New Repository. And I'm going to call this repository Joke. I'm going to leave it as public. And because this is going to be in Python, I'm going to add a python.gitignore template.
>
> **[1:23](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=83)** This is kind of standard to whatever I do for creating any new repository. And then I'm going to go ahead and select Create Repository. So now that we've got the repository set up, let's head over to GitHub Codespaces. So I'm now at [github.com/codespaces](https://github.com/codespaces), and I'm going to go ahead and Select a New Codespace. And this is where I'm going to select the repository that I just created. And I can see it over here. So it's jonfernandez/joke. I'm going to leave everything else as is, and I'm going to go ahead and select Create Codespace. Now I'm just going to go ahead and ignore this walkthrough, and so I'm just going to go ahead and close this window. Now in the previous video, we found that the [GPT-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) Mini model was the better of the two at explaining Jokes. So let's head back to GitHub Marketplace. So I'm going to head over to [github.com/marketplace](https://github.com/marketplace). I'm going to go ahead and select models. And I'm going to go ahead and select the GPT-4o Mini model. So let me go ahead and enter the joke that needs to be explained. And let's send this off to the GPT-4o mini model. And you can see that I've got the response back from the model.
>
> **[2:55](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=175)** So now I'm going to head over to the Code tab. And what I'm going to want to do is I'm selecting Python as my language, and I want to go ahead and copy all of this code. And you'll notice that the first thing that you do here is to install OpenAI. So you need to install the OpenAI Python package. So I'm going to go ahead and copy this and head back to Codespaces. So let me go ahead and create a new file. And so I'm going to create this file and I'm going to call it joke.py. And let me paste the details that I picked up from the marketplace. And the first thing I'll need to do, as you can see over at the top, is to do a pip install openai. So pip install openai. Now I'm going to go ahead and install the OpenAI Python package. And this will allow me to access the OpenAI large language model via Python.
>
> **[4:11](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=251)** Now let me just make a little bit of space for myself and let me just bump the font up a little bit, and I'm going to go ahead and clear my screen. And now I'm going to go ahead and run this file. So python joke.py.
>
> **[4:37](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=277)** and you can see that the output I get is "The capital of France is Paris," because that's the response back from the user. So what I'll actually want as the output here or the input from the user is going to be explain the joke. So if I head back to the GitHub Marketplace and head back to the chat, and I'm going to select explain this joke, I can then replace this content, which is the default that you'll get with the explain this joke. And because I've got a couple of single and double quotes, I'm going to use triple quotes so that there's no confusion.
>
> **[5:35](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=335)** And let me just go ahead and format this a little bit.
>
> **[5:50](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=350)** And now if I go ahead and rerun this,
>
> **[6:01](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/accessing-large-language-models-using-an-api?u=76281980&t=361)** I get the explanation of this joke from the large language model. So as you can see, I've now been able to access the GPT-4o Mini model using Python. All right, so in this video, we've looked at how we can access large language models via an API using a programming language like Python.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (13), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (10), [Codespaces](../../Skills/Software%20Development/Codespaces.md) (5), [Gpt-4o](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (4), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (3)
> **CLI Commands:** python (10), pip (2), make (1)
> **Tools:** github (13)
> **Env Vars:** gpt (4), api (2)
> **Prerequisites:** install (5), set up (1)
> **Exercise Files:** github repo (4), template (1)
> **File Paths:** joke.py (2), python.gitignore (1)
> **URLs:** [github.com](https://github.com) (3)

#### [Inference time vs. pre-training](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=0)** - [Instructor] Over this course, we've looked at scaling laws and lessons from the chinchilla models. Let's bring this all together as we look at the current trends for [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). When training of large language models first kicked off, most of the focus was on improving the models, and then the scaling laws were the guiding principle, and the scaling laws suggested that you would get the biggest improvement by increasing the size of the models. So you do this by increasing the model's architecture, so that's the number of layers in a model, the number of attention heads, and so on. But that was only one dimension because as model providers created large models, the associated training cost became an important consideration. So the second important dimension became training cost, because being able to train a model effectively given a budget was important. And the learnings from the chinchilla paper earlier in the course suggested that large language models were being undertrained. They also answered the question, given a training budget, how can we create an optimal model size? So far, the focus has been on training the model, but one thing we haven't talked about is what's involved in running a model. Now, this is known as inference, and there are two important and very different trends around inference. One is, how can we reduce the cost of running these models? Now, one way to do this is to create smaller models that are very performant. So these are small models that are trained from scratch on large data sets. Now, because these are smaller models, this means they require less memory to run, and so, we can potentially run
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=93)** them using fewer [Hardware](../../Topics/Hardware.md) accelerators. Smaller models can also run on local devices. Now, the big advantage here is [Privacy](../../Skills/Data%20Science/Privacy.md), as all the interactions with the language model takes place on your device. The other important consideration is how can we improve the quality of these models? You see, at this point, models have been trained primarily on the majority of publicly available data. The return from training bigger models with more data and compute is plateauing, and model providers are looking for the next big breakthrough in AI training. Major AI model providers are exploring alternatives. So there's a focus on test time compute, which allow models more time to reason during the inference stage. An example of this Test Time Compute is the o1 model from OpenAI. The model uses these reasoning [Tokens](../../Skills/Web%20Development/Tokens.md) to break down their understanding of the prompt and consider multiple approaches to generating a response. Now, what you see here is an example of this multi-step conversation between a user and the model. And you can see that the input tokens from the user and the output tokens from the model are carried over while the reasoning tokens are discarded. Now, we currently don't get to see the reasoning tokens, and that's because that's some of the secret source that's happening under the hood for these models. So far, results from these test time compute models that work during inference time have extraordinary results. The OpenAI team put the o1 model to the test on a GPQA diamond, which is a really tough benchmark
>
> **[3:06](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/inference-time-vs-pre-training?u=76281980&t=186)** that really digs into subjects, like chemistry and physics and biology. Now, to see how it stacks up against humans, they brought in some PhD experts to tackle the same questions. And guess what? O1 did better than those experts making it the first model to pull this off on this benchmark. Now, just to clarify though, this doesn't mean o1 is smarter than a PhD overall, it just shows it's better at solving certain problems that we'd usually expect a PhD to handle. All right, so we started off with the scaling laws as the one dimension to improve model performance. The chinchilla paper showed this second dimension the benefit of scaling both the model size and the data it was trained on. We now have this third dimension where there's a focus on inference. One is to reduce the cost of inference time by running smaller and more capable models, and the other is the improved performance by completing additional processing during inference time when running these models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (5), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (3), [Hardware](../../Topics/Hardware.md) (1), [Privacy](../../Skills/Data%20Science/Privacy.md) (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Env Vars:** gpqa (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Going further with Transformers](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=0)** - [Jonathan] We've covered a ton of material in this course. We've looked at many of the [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) since GPT-3. Let's review them really quickly. We saw how [Google](../../Glossary/Service/Google.md) reduced training and inference costs by using sparse mixtures of expert models with GLaM. A month later, [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) teamed up with Nvidia to create the Megatron Turing LG model that was three times larger than GPT-3 with 530 billion parameters. In the same month, the DeepMind team released Gofer and their largest 280 billion parameter model which was their best performing model. A few months later, the DeepMind team introduced Chinchilla, which turned a lot of our understanding of large language models on its head. The main takeaway was that large language models up to this point had been undertrained. Google released the 540 billion parameter modeled PaLM in April training it on their Pathways infrastructure, and this has been the best performing model to date. Up to this point, large language models have been exclusive to big tech. In an attempt to allow other researchers access to these models, Meta release the open Pre-Train model and [Hugging Face](../../Glossary/Service/Hugging%20Face.md) when one step further with BLOOM sharing data sets, weights, and checkpoints to anyone who is interested. If you haven't had enough of transformers, I've got some more resources for you. If you want a hands on code-centric look at transformers where we train a model to do text classification using BERT, then check out my other course in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) library. I hope you've enjoyed this course. Thanks for watching,
>
> **[1:33](https://www.linkedin.com/learning/generative-ai-working-with-large-language-models/going-further-with-transformers?u=76281980&t=93)** and I'd love to hear back from you and to connect via LinkedIn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (4), [Google](../../Glossary/Service/Google.md) (2), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Hugging Face](../../Glossary/Service/Hugging%20Face.md) (1)
> **Env Vars:** gpt (2), bloom (1), bert (1)
> **Speakers:** - [jonathan] (1)


## Instructor

- [Jonathan Fernandes](../../Instructors/Artificial%20Intelligence%20(AI)/Jonathan%20Fernandes.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/generative-AI-working-with-large-language-models-2495200/codespaces)

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Natural Language Processing (NLP)
- Transformer Models

## Path Context

### In [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)
← [Introduction to Large Language Models](Introduction%20to%20Large%20Language%20Models.md) | **3 of 7** | [LLM Foundations- Vector Databases for Caching and Retrieval Augmented Generation (RAG)](LLM%20Foundations-%20Vector%20Databases%20for%20Caching%20and%20Retrieval%20Augmented%20Generation%20(RAG).md) →

### In [Develop Your Skills with Large Language Models](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20Large%20Language%20Models.md)
← [Introduction To Prompt Engineering For Generative Ai](Introduction%20To%20Prompt%20Engineering%20For%20Generative%20Ai.md) | **4 of 9** | [Introduction to Generative AI with GPT](Introduction%20to%20Generative%20AI%20with%20GPT.md) →

### In [Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)
← [AI Workshop- Build a Neural Network with PyTorch Lightning](AI%20Workshop-%20Build%20a%20Neural%20Network%20with%20PyTorch%20Lightning.md) | **6 of 6**

## Appears In

- [Building Generative AI Skills for Developers](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Building%20Generative%20AI%20Skills%20for%20Developers.md)
- [Develop Your Skills with Large Language Models](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20Large%20Language%20Models.md)
- [Advance Your Skills in Natural Language Processing](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Advance%20Your%20Skills%20in%20Natural%20Language%20Processing.md)

## Related Courses

_Courses sharing skills:_

- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Google Gemini For Developers](Google%20Gemini%20For%20Developers.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Fine-Tuning for LLMs- from Beginner to Advanced](Fine-Tuning%20for%20LLMs-%20from%20Beginner%20to%20Advanced.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)