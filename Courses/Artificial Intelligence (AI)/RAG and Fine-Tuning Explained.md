---
type: course
cssclasses:
  - lle-course
slug: rag-and-fine-tuning-explained
url: "https://www.linkedin.com/learning/rag-and-fine-tuning-explained"
duration_minutes: 20
duration: 20m
updated: 6/25/2024
learners: 20740
skills:
  - Generative AI
  - AI Software Development
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEwj8XFayAkAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719268835474?e=2147483647&amp;v=beta&amp;t=76S-SQZEYeVPrCVjI0S4FGqmNtlzjFbWkVahJ-XDRbY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Understanding Generative AI for Tech Leaders]]'
  - '[[Master Retrieval-Augmented Generation (RAG)]]'
prev_courses:
  - '[[Building a Generative AI Tech Strategy]]'
  - null
next_courses:
  - '[[Introduction to Multimodal Prompting for Generative AI]]'
  - '[[Vector Databases in Practice- Deep Dive]]'
path_nav: '[{"path":"Understanding Generative AI for Tech Leaders","position":20,"total":22,"prev":"Building a Generative AI Tech Strategy","next":"Introduction to Multimodal Prompting for Generative AI"},{"path":"Master Retrieval-Augmented Generation (RAG)","position":1,"total":7,"prev":null,"next":"Vector Databases in Practice- Deep Dive"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/it-help-desk
  - topic/database-management
  - topic/software-development
  - skill/generative-ai
  - skill/ai-software-development
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/RAG%20and%20Fine-Tuning%20Explained.md)

![RAG and Fine-Tuning Explained](https://media.licdn.com/dms/image/v2/D560DAQEwj8XFayAkAQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719268835474?e=2147483647&amp;v=beta&amp;t=76S-SQZEYeVPrCVjI0S4FGqmNtlzjFbWkVahJ-XDRbY)

# RAG and Fine-Tuning Explained

> Successful AI integration in mission-critical systems requires data accuracy. The current best method for this is using Retrieval Augmented Generation (RAG) in combination with fine-tuned language models. In this short course you’ll get a high-level breakdown of how RAG and fine-tuning works, when they are useful, and where pitfalls are for these approaches.

> [LinkedIn Learning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained) | 20m | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [RAG, fine-tuning, and the enterprise](#rag-fine-tuning-and-the-enterprise)
- [**1. RAG and Fine-Tuning**](#1-rag-and-fine-tuning) (8 videos)
  - [How LLMs work](#how-llms-work)
  - [Context makes all the difference](#context-makes-all-the-difference)
  - [RAG: Retrieval Augmented Generation](#rag-retrieval-augmented-generation)
  - [The RAG flow](#the-rag-flow)
  - [Embeddings: Helping AI understand data](#embeddings-helping-ai-understand-data)
  - [Knowledge graphs](#knowledge-graphs)
  - [Fine-tuning](#fine-tuning)
  - [RAFT: RAG with fine-tuning](#raft-rag-with-fine-tuning)
- [**2. Conclusion**](#2-conclusion) (1 videos)
  - [Tying it all together](#tying-it-all-together)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [RAG, fine-tuning, and the enterprise](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-fine-tuning-and-the-enterprise?u=76281980&t=0)** - What does this rag and some fine-tuning screwdrivers have to do with AI? Well, nothing directly, but they effectively illustrate both one of the biggest challenges with [[Large Language Models (LLM)|large language models]] and how RAG, [[Retrieval-Augmented Generation (RAG)|retrieval-augmented generation]], and fine-tuning of LLMs can help address it. The challenge before us as we start implementing AI in the form of LLMs into enterprise applications is how to first ground the LLM in real-world enterprise data, and second, ensure it provides the right data in return. Like, actual information on RAG and fine-tuning, and not an actual rag and fine-tuning screwdrivers. RAG and fine-tuning are the current best path forward for AI in the enterprise, and in this course, we'll take a high-level conceptual approach to these and related topics to help make sense of it all. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Large Language Models (LLM)|Large language models]] (1), [[Retrieval-Augmented Generation (RAG)|Retrieval-augmented generation]] (1)
> **Env Vars:** rag (3), llm (1)
> **CLI Commands:** make (1)
> **Speakers:** - what (1)


### 1. RAG and Fine-Tuning

[↑ Back to Table of Contents](#table-of-contents)

#### [How LLMs work](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=0)** - To understand rag and [[Fine Tuning]]. It's important to understand where these concepts came from, and that starts with understanding how LLMs work at a practical level. When you interact with an LLM through an app like [[ChatGPT]], it feels as if you're chatting with a real person. You ask a question, it responds, then you carry on a conversation. This back and forth produces a feeling of the LLM being actually intelligent and having reasoning capabilities. So, when the output from the LLM invariably becomes imprecise or even flat out wrong, but it's still 100% confident, it's easy to think the system is lying, or as we often describe it, hallucinating. This entire mental model for LLMs lead us astray and makes it difficult to work with LLMs and talk about how to use them efficiently. So, let's start over. [[Large Language Models (LLM)|Large language models]] implemented as chat applications are advanced, spicy auto-complete systems. When you open a new chat, the LLM already has a starting message to work off, a so-called system message. This is effectively the start of a document you'll work on with the LLM. When I put in a prompt, for example, "What ingredients do I need to bake a cake?", the LLM reads the system message, then my message, and then auto completes the [[Representational State Transfer (REST)|rest]]. In return, I get what looks like an ingredient list for a cake, but it's actually, a probabilistic auto completion of the entire document so far. The important thing to understand here is that the LLM doesn't look up information about cake recipes before answering me. Instead, it uses its enormously complex multidimensional map
>
> **[1:37](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/how-llms-work?u=76281980&t=97)** of our language to auto complete the document, and because millions of cake recipes were part of the training data, and most cake recipes are slight variations over a standard set of ingredients, the chance of it producing an accurate list of ingredients for a generic cake, is quite high. In other words, there's no intelligence here, at least not in the way we understand the term intelligence. Instead, this magical ability to answer my question is actually just super fancy math.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (1), [[ChatGPT]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** llm (7)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - to (1)

#### [Context makes all the difference](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/context-makes-all-the-difference?u=76281980&t=0)** - The big "aha" moment for many of us when we start working with LLMs is discovering that providing context to the LLM makes all the difference. This isn't something we explicitly think about or even consciously discover. It's something we intuitively take advantage of in our interactions with LLMs because it's something we do naturally in our everyday conversations. When I want to bake a cake, I don't start out by saying, "What's the ingredients for cake?" I specify what type of cake I want to bake. I provide additional context by saying something like, "What's the ingredients for a carrot cake?" The carrot is the key context here. When I add that context to [[ChatGPT]], the LLM rereads everything, from the system message through my initial request and the response all the way down to this new context, and responds with a list of carrot cake ingredients. This is why so-called "[[Prompt Engineering]]" works. The more context we provide to the LLM, the more likely it is to auto complete the chat with something in context. It's also why cutting and pasting a document or webpage or video transcript into an LLM and then asking it for a summary works really well. Once you provide text as context, the LLM augments that text in response, which to us, feels as if it's reading the content and summarizing it to our specifications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[Prompt Engineering]] (1)
> **Env Vars:** llm (5)
> **Speakers:** - the (1)

#### [RAG: Retrieval Augmented Generation](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=0)** - People tend to treat chat-based LLM systems as a combination of a search engine and a knowledgeable and skilled assistant. They ask the LLM to answer questions or ask you to perform some task and often combine the two. The trouble is, and I explained this earlier, the LLM isn't a knowledge lookup system, it's a language transformer. It doesn't actually know anything, it just has this complex enough map of our language to be able to auto complete most sentences in a way that is mostly correct, as long as the pattern of the information was readily available and prevalent in its training data. This is a challenge because for us users of AI systems, incorrect information presented with 100% confidence reads at best, like hallucination, and at worst, like a blatant lie. The good news is we already know how to make the output far more accurate. Remember, context makes all the difference. So if instead of immediately answering, the AI service were to retrieve some information from a knowledge base, add that information into its context, and then generate a response based on that new context, that response would be far more accurate. An early version of this concept was introduced with the Bing AI system. When you ask a question, it goes and searches the web for relevant information, then uses that information to provide the answer. It retrieved information, augmented the data, then generated a response. Retrieval, augmented, generation. This right here is the light bulb moment. You see, this approach isn't confined to search engines.
>
> **[1:35](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/rag-retrieval-augmented-generation?u=76281980&t=95)** We can build LLM systems that can retrieve data from any structured data source and augment it in whatever way we specify, so it generates responses that fit our needs.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - people (1)

#### [The RAG flow](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/the-rag-flow?u=76281980&t=0)** - As a flow chart, this is how a RAG system works. When a request comes in, an LLM is used to parse the meaning of the request and transform it into a query for whatever data source and knowledge-based it's attached to. That could be a standard database accessed via an API or an array of embeddings or a vector database, or even a cookbook, and we refer to it as the grounded truth. The LLM functions as a translator, turning the natural language request into a software query. Then the grounded truth data source processes the request and returns the data to the LLM. Now the LLM combines the original request with the newly retrieved data and produces an answer. This process should produce an accurate answer, but because LLMs are probabilistic and non-deterministic, the accuracy can be off. To reduce this risk, it's become fairly standard to add an additional verification loop here by returning the generated response along with the retrieved data to the LLM and asking it to make sure the generated response contains only information from the retrieved data. This loop, which can be repeated as many times as necessary, increases the [[Probability]] of the LLM producing a more accurate response. So in practical terms, RAG is me giving the LLM a cookbook to reference when I ask for my carrot cake ingredients. If there is a carrot cake recipe in the book, the LLM will, in most cases, give me that ingredient list instead of a probabilistic response. And that's the whole point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1)
> **Env Vars:** llm (8), rag (2), api (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - as (1)

#### [Embeddings: Helping AI understand data](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=0)** - There's an obvious question in need of an answer here. Let's say I build an AI app, give it a cookbook as a grounded source for RAG, and ask it for a carrot cake recipe. Carrots are very common ingredients, which will be featured in a lot of different recipes. So how does the AI system and the grounded source know to only give me carrot cake recipes, and even what the difference between a carrot cake and a carrot soup is? How does the LLM know the meaning of my request? And how does the ground truth retrieval system know how to find it? This is a really interesting topic warranting several dedicated courses, so I'll only barely scratch the surface here. First off, if we use an LLM with a sufficiently large context window, meaning how much data we can stuff into the current context, we could lean on the LLM's auto-complete feature to figure this out and would do so with an acceptable level of accuracy. Give it the entire book, ask a question about it, and it would retrieve information out of the book and give it to you. But that's neither practical nor scalable. Instead, we need some way of getting the LLM and the grounded truth retrieval system to retrieve only relevant information and ignore the [[Representational State Transfer (REST)|rest]]. One way to do this is by turning the original data and the request into embeddings, and then compare them to find the matching pairs. Say what now? Let me explain. Using what's called an embeddings model, we can take any string of text and turn it into a series of numerical representations of points and vectors that connect in a multidimensional space.
>
> **[1:34](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/embeddings-helping-ai-understand-data?u=76281980&t=94)** This is a bit hard to make sense of when I just say it, so here's a simplified example of the core concept. First, we take each recipe from a recipe book and place it in its own field in a database. Next, we find a two-dimensional embeddings model where each dimension represents some parameter. Then we give each recipe to the embeddings model and it places the words in the two-dimensional space. This produces a different map of points for each recipe with the key words featured. The embeddings model puts more similar words, like carrot and squash, closer together and dissimilar words, like squash and kohlrabi, further apart. Finally, lines called vectors are drawn between these points to represent the connections between the words in the text. This mathematical representation of the points and vectors now becomes the embeddings for each individual recipe. And we add these back into the database, so we have both the original text and its embeddings in one row. Now we can prompt an AI system with a query like, "How do I make a vegetable cake?" And the AI system will create embeddings from this question using the same embeddings model, and we get a new vector representing the query, in this case, the line between vegetable and cake. We can then use basic math to compare the query embedding against each of the recipe embeddings and we quickly see that some of the recipes are a close match while others are not. Finally, the AI system returns the original recipe text from the closest matched embeddings as context, and we are back in the RAG flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** llm (4), rag (2)
> **CLI Commands:** find (3), make (2)
> **Definitions:** is a  (2)
> **Speakers:** - there (1)

#### [Knowledge graphs](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=0)** - Okay, looking at this embeddings example, you may have spotted an inherent weakness, and it becomes more obvious if we add in a larger data set that includes things that are not related to cooking. In many cases, especially in the enterprise, domain data is expansive and covers many different subject matters, and disciplines, and context. This passes a significant challenge for embeddings because our language is semantically, syntactically, and lexically ambiguous. For example, the same [[Microsoft Word|word]] can mean different things in different contexts. Let me show you, let's say we have one embedding for use, tomato, paste, and another embedding for use, tooth, paste. These embeddings look nothing alike, but there are two common words in there, use and paste. Now let's say the user puts in a very vague prompt, "What paste do I use to make pasta?" Without further context, the embedding system will zero in on the words use and paste and find any embeddings that match. In return, we get tomato paste and toothpaste. I can think of exactly zero scenarios where both of these responses are correct, but the AI has neither knowledge nor understanding of the data or the query, so it returns both entities and the RAG-based completion becomes some nonsense about how to use toothpaste to add peppermint flavor to your pasta dish or something. The problem here is that while an embedding system can help us identify close matches in language, it has no understanding of the semantic meaning of the connections. Both toothpaste and tomato paste are pastes,
>
> **[1:36](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=96)** but they have very different uses. To address this problem, we can lean on an ancient AI technology called [[Knowledge Graphs]]. Originally invented for search, knowledge graphs add direction and semantic meaning to the vectors connecting the dots in an embeddings map. So rather than having a vector that just says, "This word and this word are connected," the graph says maybe, "This word is part of this word or is used in this context." Remapping our examples using knowledge graphs, we add semantic context by connecting, for example, tomato and paste to cooking with an "is used in" graph and connecting tooth and paste to hygiene using a "is part of" graph. Now, when the system creates a knowledge graph of the query, "What paste do I use to make pasta?" it contains the added graph capturing the context "is used in cooking," and we get only tomato paste as a relevant match. Now seeing this, you may rightfully conclude that we should just use knowledge graphs for RAG all the time, and in practical reality, that's not always possible. In real-world environments, AI systems using RAG draw from a variety of sources, including traditional [[Databases]], APIs, embeddings, and advanced knowledge graph vectors. The best option for a particular use case comes down to many variables, including what type of data it is, how much work is involved in transforming the data into, for example, vector embeddings, how often the data updates, et cetera. The typical recommendation
>
> **[3:07](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/knowledge-graphs?u=76281980&t=187)** is to start with the most basic option, a straight-up database with an API, and explore more advanced options if the results are not satisfactory.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (5), [[Knowledge Graphs]] (4), [[Databases]] (1)
> **Env Vars:** rag (3), api (1)
> **CLI Commands:** make (2), find (1)
> **Analogies:** for example (3)
> **Speakers:** - okay (1)

#### [Fine-tuning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/fine-tuning?u=76281980&t=0)** - RAG is a powerful approach to improving the accuracy of LLM outputs, but it's not the only one, and it's best used in combination with other approaches, in particular, fine-tuning. Fine-tuning is when you provide a huge list of training examples, a completed exchange, including a system message, a prompt, and a response, to a foundation model to train it to respond to specific types of queries in specific ways. When you have a fine-tuned model, you don't need to provide a complex system message or request a specific behavior every time. Instead, the system has been literally fine-tuned to create responses to fit the patterns in the training examples. Fine-tuning is used to conform chatbot responses to a specific tone, or include predefined information like standard contact support for more information phrases in every response, and to perform specific actions like provide a document or database reference in every response. The challenge with fine-tuning in LLM is you need to create a lot of training data for the fine-tuning to be successful, and then run all of those examples multiple times for the model to conform. And even then, the fine-tuned model doesn't always behave as you intended, so the process involves a lot of trial and testing and error before you get to usable state. That said, for a situation where consistency and responses matters at scale, a fine-tuned model is a good avenue to explore because the fine-tuning reduces the variance in response and gives you direct control over the LLM behavior in a way that foundation models simply do not.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), rag (1)
> **Definitions:** is a  (2)
> **Speakers:** - rag (1)

#### [RAFT: RAG with fine-tuning](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=0)** - Based on what I've said about RAG and [[Fine Tuning]] so far, you may already intuit that there is a connection here. And that connection has been proven through experimentation and research, so much so that it now has a name, RAFT, Retrieval Augmented Fine-Tuning. RAFT is an answer to the challenge of creating efficient LLM based AI systems that are grounded in specialized domain data like internal enterprise documents. The idea is to first use RAG to fine-tune the LLM on the domain=specific data, so it recognizes and matches the patterns in the data, and then use the resulting raft model in conjunction with RAG to produce better answers that are not only grounded in the domain data, but also conforms to its patterns. The RAFT process leverages the reasoning capabilities of LLM foundation models to create the training data for fine-tuning. It goes something like this, first, create or generate a set of domain-specific questions matching the types of user queries the system will handle. Next, use RAG to retrieve two types of domain documents, oracle docs containing the answer to the question and distractor docs containing irrelevant information. From here, combine the original question with the associated Oracle docs to create a chain of thought answer that breaks down not only the answer, but a detailed reasoning process. And finally, run the fine-tuning process using three types of training examples, question, oracle data, and correct chain of thought answers. Question, distractor data, and correct chain of thought answers. And question, a mix of data,
>
> **[1:34](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/raft-rag-with-fine-tuning?u=76281980&t=94)** and correct chain of thought answers. When a mix of these three training examples are used in the fine-tuning process, the model imprints a pattern to use relevant oracle data, ignore irrelevant distractor data, and discern what data is relevant for any question. This new RAFT model combined with traditional RAG produces a robust, fine-tuned LLM based AI system, firmly grounded in specialized domain knowledge and highly likely to generate relevant and accurate responses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fine Tuning]] (1)
> **Env Vars:** rag (5), raft (4), llm (4)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - based (1)


### 2. Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Tying it all together](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=1)** - Okay, where does all this leave us? We've learned that LLMs on their own are magical language machines that appear to be knowledge bases, but are in fact just very good at stumbling on right-ish answers due to their extensive training sets. This means building enterprise LLM-based AI apps is risky because the answers the LLM provides may not be accurate, especially if the user is asking for specialized domain data and even private data. To improve the accuracy of LLM responses, we can provide relevant context by adding it directly into the request. But to do this at scale, we need to be able to retrieve the relevant context on the fly, and that gives us retrieval augmented generation, or RAG. In some cases, like an online store, a simple product database API may be sufficient to build a RAG system. In others, it may be necessary to build an embedding space vector database, or even leverage [[Knowledge Graphs]] to get the best results. In either case, combining RAG with a fine-tuned model can significantly improve the responses from the LLM and ensure they conform with company language policies and user patterns. And this can be further enhanced by using retrieval augmented fine-tuning, or RAFT, to build a fine-tuned model that recognizes and conforms to the patterns and language in the grounded domain data. And finally, all of this points to one crucial insight. For anything beyond casual use, a standard chat app built on a foundation LLM model is not sufficient. For the enterprise, some combination of RAG
>
> **[1:35](https://www.linkedin.com/learning/rag-and-fine-tuning-explained/tying-it-all-together?u=76281980&t=95)** and fine-tuning built into a larger traditional app is required to produce consistent, reliable, and safe responses, for the company and for its clients. And all of this is possible thanks to the concepts presented in this course. All right, I've given you a lot to think about, and now it's your turn to figure out how all of this impacts your business and its [[AI Strategy]]. My best advice to you is to take the next step on this journey slowly and be willing to experiment, fail, and try again. AI is not an exacting science. Quite the opposite. And the best way forward is to try and fail and try again until you discover new and exciting ways to solve your challenges. That is how everything I've covered in this course was discovered, and that's how you'll find your own path. Now all that's left for me to say is (speaking in foreign language), go build robust AI implementations with RAG and fine-tuning, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knowledge Graphs]] (1), [[AI Strategy]] (1)
> **Env Vars:** llm (5), rag (5), api (1), raft (1)
> **CLI Commands:** find (1), go build (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** required to (1)
> **Speakers:** - okay (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Skills Covered

- Generative AI
- AI Software Development
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)

## Path Context

### In [[Understanding Generative AI for Tech Leaders]]
← [[Building a Generative AI Tech Strategy]] | **20 of 22** | [[Introduction to Multimodal Prompting for Generative AI]] →

### In [[Master Retrieval-Augmented Generation (RAG)]]
**1 of 7** | [[Vector Databases in Practice- Deep Dive]] →

## Appears In

- [[Understanding Generative AI for Tech Leaders]]
- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Knowledge Graph Data Engineering for Generative AI Use Cases]] — Generative AI, Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Building Advanced AI Apps with Prompt Flow]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[The AI Ecosystem for Developers- Models, Datasets, and APIs]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Agentic AI for Developers- Concepts and Application for Enterprises]] — Generative AI, Artificial Intelligence (AI), AI Software Development
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)