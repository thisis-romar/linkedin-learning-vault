---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio
url: "https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio"
duration_minutes: 84
duration: 1h 24m
level: Intermediate
updated: 12/12/2024
learners: 5485
skills:
  - Azure AI Studio
  - Retrieval-Augmented Generation (RAG)
  - Artificial Intelligence (AI)
  - Azure AI Foundry
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEFLbl9QHJO2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722011200013?e=2147483647&amp;v=beta&amp;t=ZtwuRFzr9WRj02hKOeLknDCG62pvDR7f8VjyNqCjiKs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Master Retrieval-Augmented Generation (RAG)]]'
prev_courses:
  - '[[Advanced RAG Applications with Vector Databases]]'
next_courses:
  - '[[Hands-On AI- RAG using LlamaIndex]]'
path_nav: '[{"path":"Master Retrieval-Augmented Generation (RAG)","position":6,"total":7,"prev":"Advanced RAG Applications with Vector Databases","next":"Hands-On AI- RAG using LlamaIndex"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/database-management
  - topic/software-development
  - skill/azure-ai-studio
  - skill/retrieval-augmented-generation-rag
  - skill/artificial-intelligence-ai
  - skill/azure-ai-foundry
status: not-started
created: 2026-04-21
---

![Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)](https://media.licdn.com/dms/image/v2/D560DAQEFLbl9QHJO2w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1722011200013?e=2147483647&amp;v=beta&amp;t=ZtwuRFzr9WRj02hKOeLknDCG62pvDR7f8VjyNqCjiKs)

# Building RAG Solutions with Azure AI Foundry (Formerly Azure AI Studio)

> This in-depth course is crafted to empower you with the proficiency to effectively leverage Azure AI Foundry (formerly Azure AI Studio) for the creation of retrieval-augmented generation (RAG) solutions. The course begins with a systematic walkthrough of the process involved in creating a RAG solution and the fundamentals and principles of RAG, diving into the prerequisites for crafting a RAG solu

> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio) | 1h 24m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Ziggy Zulueta]]

## Skills Covered

- Azure AI Studio
- Retrieval-Augmented Generation (RAG)
- Artificial Intelligence (AI)
- Azure AI Foundry

## Table of Contents

### Introduction

#### Create a RAG solution with little coding
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=0)** RAG solutions in Azure AI studio are transforming how businesses access and utilize information with very little coding required.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=10)** That's right.
>
> **[0:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=11)** You can become an AI innovator without being experienced developer.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=16)** I'm here to guide you on how to harness the power of AI to transform your data into actionable insights, driving decision making, and market leadership.
>
> **[0:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=26)** I am Ziggy Zulueta.
>
> **[0:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=28)** If you are ready to unlock the secrets of building RAG solutions using Azure AI studio with little coding required.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-RAG-solution-with-little-coding?u=76281980&t=35)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2)
> **Code Keywords:** let (1)


### 1. Fundamentals of RAG

#### The basics of RAG: Adding custom data to your LLM
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=0)** Large language models are trained on a large set of data, mainly from the internet.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=6)** However, they do have limitations.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=10)** First, if you ask it questions about current events, it will not be able to respond accurately.
>
> **[0:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=17)** Each model will have a specific date on how recent the data it was trained on.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=22)** The free version of ChatGPT, for example, was trained on January 2022 data.
>
> **[0:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=29)** So it will reply that Queen Elizabeth II is still alive when we already know she passed away.
>
> **[0:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=36)** Second, if you ask questions about your domain data, it may also not respond back accurately.
>
> **[0:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=45)** And worse, it may even make up a fabricated answer.
>
> **[0:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=50)** In the given example, the model is providing an answer, but the source links given when clicked do not match the actual product.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=59)** RAG LLM context is a popular acronym for retrieval-augmented generation.
>
> **[1:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=66)** It is the technique of adding data to an LLM from an external data source.
>
> **[1:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=71)** This data can be your legal contracts, product manuals, customer information sheets, software designs, and even your code.
>
> **[1:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=82)** A good analogy for drag is to come to an open book exam when you are a student. In an open book exam, we can refer to any books you have brought to the classroom to answer questions.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=94)** Imagine your brain as the LLM, but you needed to open the books you came with to get the information needed to answer questions.
>
> **[1:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=103)** To further understand drag, let us discuss the workflow.
>
> **[1:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=107)** First, every time a user makes a query, the system needs to retrieve from an external data source the relevant information that will answer that query.
>
> **[1:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=118)** Second, the users query and retrieve content is augmented or added together.
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=124)** This becomes the new prompt.
>
> **[2:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=127)** Third, the new prompt is now fed into the LLM to generate a response.
>
> **[2:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=133)** To simplify, the main difference between RAG and a typical LLM system is that a typical LLM system would answer user queries based on its training data set, while RAG provides answers to queries from an external source, you have provided.
>
> **[2:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/the-basics-of-rag-adding-custom-data-to-your-llm?u=76281980&t=149)** How the relevant data is retrieved based on the user's initial prompt is best explained by discussing other concepts, called tokens and embeddings in the next chapters.

> [!info]- Semantic Content
>
> **Env Vars:** llm (6), rag (3)
> **Analogies:** for example (1), imagine (1)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** open the (1)
> **Definitions:** is a  (1)

#### Understanding tokens: A key factor of costs in your system
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=0)** Tokens play a big role in large language models because they affect how much your system will cost.
>
> **[0:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=7)** Tokens are needed because computer systems don't really understand birds.
>
> **[0:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=12)** They don't understand what a dog or a cat means, for example.
>
> **[0:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=18)** But they are great at understanding numbers like zeros and ones.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=22)** When you give an LLM a prompt, it must convert these words into numbers or tokens.
>
> **[0:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=29)** Tokens represent common sequences of characters.
>
> **[0:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=34)** Usually, one token is approximately the same as four characters or 0.75 words in English.
>
> **[0:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=42)** To simplify, imagine that every word in the dictionary gets its own number.
>
> **[0:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=47)** So in this sentence "I heard a dog barked loudly at a cat", each word gets a different number, and if the same word is used more than once, like the letter A, it gets the same number three.
>
> **[1:01](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=61)** In the second sentence, "I heard a cat", the numbers assigned to each word are similar to the previous sentence.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=70)** In the last sentence, the word "meow" is a newly occurring word, hence it has a different number.
>
> **[1:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=77)** Now tokens can also represent parts of words, characters, or even punctuation marks, depending on how the LLM tokenize things.
>
> **[1:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=88)** The tokenization strategy may differ based on the LLM we are using.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=94)** OpenAI cloud and Llama, for example, use different methods.
>
> **[1:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=99)** In addition, OpenAI's GPT 3.5 and GPT 4 models use different tokenizers than the previous versions.
>
> **[1:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=108)** For OpenAI, you can check them out on their website.
>
> **[1:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=111)** And to give an idea in the sentence, "The quick brown fox jumps over the lazy dog", each word, along with the punctuation mark gets its own token.
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=124)** Tokens are also important because they affect how much you pay for using the application.
>
> **[2:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=130)** The more tokens you use, the more it costs.
>
> **[2:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=135)** Azure Open AI charges you based on the number of tokens in the input, what you ask the model and output, what the model responds with.
>
> **[2:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=146)** So to keep your costs under control, you need to limit how many characters you put into the system and how many characters you get back.
>
> **[2:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-tokens-a-key-factor-of-costs-in-your-system?u=76281980&t=154)** We'll talk more about how to do that in the next videos.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), gpt (2)
> **Analogies:** for example (2), imagine (1), similar to (1)
> **CLI Commands:** cat (3)
> **Versions:** 0.75 (1), 3.5 (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is a  (1)

#### Vector embeddings: How words connect to each other
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=0)** Once the words are converted into numbers called tokens, the next question would be how does the system know that the cat and dog are animals?
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=10)** And meow and bark are verbs? In addition, how will the system know if the word "bank" is referring to the financial institution or a river bank?
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=22)** The answer to this is the concept called vector embeddings.
>
> **[0:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=26)** Vector embeddings are a way of representing words or data into vectors.
>
> **[0:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=32)** As discussed in the previous video, words are first converted into tokens.
>
> **[0:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=38)** They are then converted into vectors using an algorithm called an embedding model.
>
> **[0:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=44)** The embedding model to be used varies again based on the model you decide to choose.
>
> **[0:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=50)** Open AI uses, for example, text embedding ada-002, which is a method to convert tokens into vectors with the dimension of 1,536.
>
> **[1:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=62)** To put in perspective, this is a sample vector that has ten dimensions.
>
> **[1:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=69)** A 1,536 dimension vector will not fit our screen.
>
> **[1:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=74)** The main purpose of using vector embeddings is that they can capture the relationships between different objects.
>
> **[1:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=82)** Words that are used in similar contexts will be closer to each other in the vector space.
>
> **[1:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=88)** This allows us to capture the meaning of words in a way that is efficient and effective.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=94)** To explain in simpler terms imagine that we have a three dimensional space to represent the words and their relationships.
>
> **[1:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=102)** The words "cat" and "dog" are close to each other to represent their relationship as animals.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=109)** In addition, the words "bark" and "meow" are close to each other as they are sounds of animals.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=116)** Finally, the word "skateboard" would be very far from the first forewords because it is unrelated to all of them.
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=124)** You could also see that "cat" and "dog" are much closer to "bark" and "meow" versus "skateboard", because they have a closer relationship versus the "skateboard".
>
> **[2:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=134)** Again, this is an example in a three dimensional space, but in reality, the vectors actually have 1,536 dimensions.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=144)** Vector embeddings are used in drag in two ways.
>
> **[2:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=148)** One, the external data source that we use in the system for the data must be converted into vector form.
>
> **[2:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=156)** This conversion is done during the initial setup.
>
> **[2:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=160)** The vectors are then stored in a special database called a vector database.
>
> **[2:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=165)** It is a special type of database used for storing and creating vectors, and has become widely popular because of LLMs.
>
> **[2:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=173)** Two, every query a user inputs into a system is also converted into vector form.
>
> **[3:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=180)** This conversion happens at runtime every time a user enters a query.
>
> **[3:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=186)** After the user query is converted into vector form, the system in the retrieve process would then search the vector database for content that is a close relationship to the query.
>
> **[3:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/vector-embeddings-how-words-connect-to-each-other?u=76281980&t=198)** Hence, vector embeddings look for relationships and the conversion process happens during initial setup for the data source and at runtime for the user query.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** cat (3)
> **Analogies:** for example (1), imagine (1)
> **Prerequisites:** setup (2)
> **Code Keywords:** finally, (1)
> **Cross-References:** previous video (1)

#### How RAG works: Understanding the process under the hood
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=0)** Now that we understand the basic concepts of drag and the concepts of tokens and vector embeddings, let us discuss how RAG works.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=10)** First, documents must be broken down into smaller documents.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=16)** We call this process chunking.
>
> **[0:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=18)** Chunking is very important so that information is not lost.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=23)** Imagine if you have a novel that is 1000 pages long, and you summarize it to just two pages.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=31)** A lot of details would certainly be lost.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=35)** In addition, if a page has a lot of information, you may need to break down the page into smaller pages.
>
> **[0:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=43)** It is normally the case that after you do chunking, you may end up with more documents than what you originally started.
>
> **[0:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=51)** Second, the chunked documents are then converted into vector embeddings.
>
> **[0:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=56)** As discussed in the previous chapter, the embedding model to be used is based on the model you're using for Azure OpenAI.
>
> **[1:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=65)** We will use text embedding ada-002.
>
> **[1:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=69)** The text embedding is then stored in a vector database for storage and retrieval.
>
> **[1:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=75)** Third, a user inputs a query in natural language.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=80)** The query is then converted into vector embeddings at runtime.
>
> **[1:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=85)** The embedding model to be used must be the same model used for your documents. Fourth, the user query in vector form is now sent to the drug application.
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=96)** Fifth, the user query in vector form is then searched against the vector database for similarity using different search methods.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=105)** We will discuss these methods in the succeeding videos.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=109)** This is the retrieval process in RAG.
>
> **[1:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=113)** Six, the vector database provides an output based on the search criteria.
>
> **[1:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=119)** Seven, the result of the search plus the user query are now added together to form one prompt.
>
> **[2:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=127)** This is the augment process in RAG.
>
> **[2:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=130)** The new prompt is then given to the LM in order to generate a response.
>
> **[2:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=135)** Eight, the LLM generates a response and is given back to the RAG system.
>
> **[2:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=141)** This is the generation process in RAG.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=144)** Finally, the RAG system then provides the response to the user.
>
> **[2:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/how-rag-works-understanding-the-process-under-the-hood?u=76281980&t=150)** Now that you understand how RAG works, the next step is to understand the components we need to build a RAG solution.

> [!info]- Semantic Content
>
> **Env Vars:** rag (8), llm (1)
> **Code Keywords:** let (1), finally, (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** we call this (1)
> **Analogies:** imagine (1)

#### RAG high-level architecture: The required components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=0)** Our RAG system would have the following components.
>
> **[0:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=4)** One, an information retrieval system or retriever.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=9)** The retriever would store your vector embeddings and would provide you the logic and ability to search for those vector embeddings based on different retrieval and search methods.
>
> **[0:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=20)** It would also contain security and compliance policies needed by your business.
>
> **[0:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=25)** The retriever can be a vector database such as Azure Cosmos DB for MongoDB or a search engine such as Azure AI search.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=35)** You also need a large language model.
>
> **[0:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=38)** The users query, plus the search results provided by the retriever would be sent to the LLM as a new prompt.
>
> **[0:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=46)** The LLM would analyze the combined prompt and generate a response.
>
> **[0:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=50)** You would also need an orchestrator.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=53)** The orchestrator provides a way to integrate the retriever to the LLM.
>
> **[0:57](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=57)** This is optional as some systems like Azure handle this for you.
>
> **[1:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=62)** Finally, you would need a front end.
>
> **[1:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=65)** The front end system at minimum would be the place where the user enters their query.
>
> **[1:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=71)** This can be a chat website, a mobile app, an MS teams channel, or even a simple command line interface.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=80)** It may also contain many features such as having a chat history, feedback buttons, text to speech capabilities, a user login, and a way to upload files and images depending on the requirements of your users.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=95)** In our course, we will have the following high level architecture.
>
> **[1:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=100)** We will use Microsoft Teams to enable users to make user queries.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=105)** Copilot studio shall be used to connect Microsoft Teams to the Rest API endpoint, to be provided by Azure AI studio.
>
> **[1:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=113)** Azure AI studio shall be used to connect our data source to the LLM.
>
> **[1:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=118)** We will also use other features of the studio to create content filters, manage the prompt flow and retrieve information and evaluate the system.
>
> **[2:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=128)** Azure AI search would now be used as a data source to contain all our vector embeddings, and the engine to handle our search queries.
>
> **[2:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=138)** Finally, we shall use an Azure OpenAI resource to provide the algorithm to generate our vector embeddings and the large language model used to generate the system responses.
>
> **[2:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/rag-high-level-architecture-the-required-components?u=76281980&t=150)** We will discuss in the next chapters how to set up each component.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4), rag (1), api (1)
> **Code Keywords:** finally, (2), interface (1)
> **Analogies:** such as (3)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Tools:** command line (1)


### 2. Introduction to Azure AI Foundry

#### Azure AI Foundry overview: Deploy at scale in a safe, secure, and responsible way
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=0)** Azure AI Studio is your go to portal in building a solution.
>
> **[0:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=5)** You can do the following with this tool.
>
> **[0:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=8)** You can build, test and deploy generative AI applications in one place.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=13)** Modules are available to help you build and connect together the different parts of a RAG solution.
>
> **[0:19](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=19)** Test the accuracy of the solution and provide you methods to deploy to your customer.
>
> **[0:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=26)** You have options to choose from a wide variety of models.
>
> **[0:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=30)** You are not limited to Azure Open AI models only.
>
> **[0:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=33)** You can also use Mistral, Llama, Neutron, and even other small language models like FI for urgent AI application.
>
> **[0:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=44)** You can develop and deploy AI responsibly here.
>
> **[0:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=47)** You'll be able to create content filters, for example.
>
> **[0:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=51)** These are powered by Azure AI content safety and it will detect and prevent the input and output of harmful content.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=59)** You can also manage security and permissions.
>
> **[1:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=63)** You can add or remove people who can have access to your project and even assign them specific roles.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=70)** In addition, you can also apply certain policies for project resources.
>
> **[1:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=76)** Finally, you can organize all your resources in one place.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=80)** You can view in the Studio your different AI projects here, different Azure AI resources and connections, your team members, permissions and policies, compute instances or virtual machines, and even your billing and costs in one area.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=97)** Azure AI Studio introduces us to two new resources unique to the Studio the AI Hub and the AI Project.
>
> **[1:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=106)** The Hub is the high level resource of Azure AI Studio.
>
> **[1:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=110)** The Hub would hold the following information.
>
> **[1:54](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=114)** One, your data and other artifacts such as flows and evaluations. Two, your connections to different Azure resources such as Azure OpenAI, Azure AI Search and other Azure AI services.
>
> **[2:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=128)** Three, your base model endpoints for Azure OpenAI speech and vision. Four, your compute resources are virtual machines. And five, your security settings and governance policies.
>
> **[2:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=143)** Every time AI Hub is created, a set of dependent Azure resources are created to support its operation.
>
> **[2:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=152)** Azure AI Search provides the search capabilities for your project.
>
> **[2:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=157)** Azure Storage Account stores your project's data flows and evaluations.
>
> **[2:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=162)** Azure Key Vault stores your connection strings to different resources.
>
> **[2:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=166)** Azure Container Registry contains Docker images created to run prompt flow.
>
> **[2:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=172)** And finally, Azure Application Insights and Log Analytics workspace stores logging info if you decide to enable logging for your prompt flows, Azure AI Studio manages all these resources for you, but it's good to know what gets created alongside the Hub for transparency.
>
> **[3:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=193)** Finally, the AI Project is a child resource at the AI Hub.
>
> **[3:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=198)** Every time you create an AI Project, it inherits the connections, compute, resources, and security settings of its parent Hub.
>
> **[3:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=207)** It should also contain the following features.
>
> **[3:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=211)** One, your data sets, models and indexes used in the project.
>
> **[3:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=216)** Two, an isolated data container unique to the project.
>
> **[3:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=221)** Three, project project scope connections.
>
> **[3:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=224)** A project, for example, might need access to data stored in a separate Azure storage account.
>
> **[3:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=230)** And finally, your open source model deployments from the catalog and other fine tuned model endpoints.
>
> **[3:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/azure-ai-studio-overview-deploy-at-scale-in-a-safe-secure-and-responsible-way?u=76281980&t=238)** The parent Hub would contain Azure Open AI based models, but the child project would contain deployments from open source models such as Llama.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **Code Keywords:** finally, (4)
> **CLI Commands:** docker (1)
> **Env Vars:** rag (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)

#### Navigating the Azure AI Foundry
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=0)** Let us now navigate into Azure AI Studio.
>
> **[0:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=3)** You can access the studio through the URL ia.[azure.com](https://azure.com).
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=9)** Let me give you a warning here.
>
> **[0:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=11)** Microsoft has been updating this a lot by the time this recording is done the interface may change, however the concepts will remain the same.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=22)** The model catalog gives you a list of models that you can deploy in Azure AI Studio.
>
> **[0:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=29)** As mentioned in the previous chapter, you not only have access to Azure Open AI models, but also other models such as Phi Llama, Mistral, and all other models that Microsoft has a partnership with.
>
> **[0:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=45)** The model benchmarks allow you to see how each model is performing against a specific task and industry recognized data set.
>
> **[0:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=55)** In this example, you will see that GPT for 32 K performs the best in the question answering task.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=64)** While another model performs better for text generation.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=72)** The prompt catalog gives you a list of prompt templates that you can use based on different business scenarios.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=80)** The Real Estate Agent assistant can be used for a real estate setting, for example.
>
> **[1:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=88)** AI services gives you access to all the different AI functionalities that Azure has to offer.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=95)** Coda provides you with a list of virtual machines and Azure Open AI models that you can deploy for your projects.
>
> **[1:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=106)** Let us now explore a specific hub.
>
> **[1:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=110)** As we discussed in a previous chapter, the hub is a high level resource while the project is a child resource.
>
> **[2:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=120)** A hub may contain many projects, many connected resources and members with different roles and responsibilities.
>
> **[2:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=132)** The deployments, connections, compute instances, users, and content filters are the shared resources that can be used by projects under the project hub.
>
> **[2:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=150)** Let us now explore a specific project.
>
> **[2:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=156)** For our RAG exercise we will focus on the following areas.
>
> **[2:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=161)** Data is where we will upload our domain data for the RAG application.
>
> **[2:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=167)** Indexes are where we will build vector embeddings on the store data.
>
> **[2:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=172)** Deployments are where we will create models for our deployed application, evaluation process and vector embeddings.
>
> **[3:01](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=181)** It will also contain our application deployments.
>
> **[3:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=185)** Content filters are where we will create filters to be applied against the deployments we created based on business needs.
>
> **[3:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=193)** The Chat Project playground is where we will manually test our index using a specific model we deployed.
>
> **[3:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=202)** The prompt flow is the orchestrator that will connect our user input, external data and LLM.
>
> **[3:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=209)** We will also use prompt flow to deploy our application to production.
>
> **[3:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-azure-ai-studio?u=76281980&t=214)** Finally, the evaluation will allow us to evaluate the prompt flow we created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (1), finally, (1)
> **Env Vars:** rag (2), url (1), gpt (1), llm (1)
> **Cross-References:** previous chapter (2), we discussed (1)
> **Analogies:** such as (1), for example (1)
> **URLs:** [azure.com](https://azure.com) (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)

#### Creating a project in Azure AI Foundry
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=0)** Let me now show you how to create a hub and project in the Studio.
>
> **[0:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=4)** Before creating a project, there are a couple of things you should do.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=9)** First, you should already have a subscription that let us Azure Open AI enabled.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=16)** If you do not have access to Azure Open AI yet, you need to get access via this registration form.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=23)** Second, I recommend that you create an Azure AI Search and Azure OpenAI Resource beforehand.
>
> **[0:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=32)** This gives you more control on the pricing tier and location of the Azure AI Search resource, and the location of the Azure Open AI resource.
>
> **[0:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=44)** You can also create them when creating a hub, but you will have to accept the default settings given to you.
>
> **[0:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=51)** For our example, we will create a new hub directly without creating those resources.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=59)** You can create a hub by going to the Studio and clicking all hubs &gt; new hub in the create a new hub form enter any name for the hub name.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=72)** Select the subscription that has Azure Open Access.
>
> **[1:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=78)** Create a new resource group or accept the default given.
>
> **[1:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=84)** Choose your desired location.
>
> **[1:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=89)** Create a new Azure AI Services or Azure OpenAI Resource or select the one you created for the project.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=97)** When you create a new one, the location of the resource will be the same as the location of the hub.
>
> **[1:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=104)** If this does not meet your needs, then the recommendation is to create the resource for separately.
>
> **[1:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=112)** Finally, you create a new Azure AI Search or select the one you also created previously.
>
> **[2:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=120)** Recall that this will be our data source.
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=124)** If you decide to create a new resource here, the pricing tier will be set to standard by default.
>
> **[2:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=131)** If this is not acceptable for you, then you should create a search resource first, then select it in the drop down upon hub creation.
>
> **[2:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=141)** Once the validation is done, click next, then click create.
>
> **[2:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=147)** The creation process will take a few minutes.
>
> **[2:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=150)** You'll be able to see the status of the creation, and you will see other resources created, such as a Storage Account and Key Vault.
>
> **[2:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=161)** When the process is done, you will be sent to the Hub Overview screen where you will find the connected resources, permissions and properties of the hub.
>
> **[2:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=175)** You can click on the resource group in order for you to see all the resources created to support the hub.
>
> **[3:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=185)** You will see that the Key Vault and Storage Account were created along with the Azure AI Service, Azure AI Services and Azure AI Hub.
>
> **[3:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=196)** All resources are assigned the same location since you created them via the hub.
>
> **[3:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=202)** The Azure AI Search service gets the standard pricing tier by default.
>
> **[3:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=208)** This is very important to know because the AI Search is one of the key drivers of cost.
>
> **[3:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=214)** If you want to change the pricing tier, you would have to create the whole service again.
>
> **[3:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=220)** Going back to the hub overview screen, we can now create our project.
>
> **[3:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=226)** Click New Project and enter the project name.
>
> **[3:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=231)** The process will again take a few minutes.
>
> **[3:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=235)** Once the project has been created, you will be directed to the project overview screen.
>
> **[4:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-a-project-in-azure-ai-studio?u=76281980&t=243)** You will also notice in the portal that an Azure AI Project resource is created in the same resource group as the others.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), default. (2), finally, (1)
> **UI Navigation:** select the (2), click on (1)
> **CLI Commands:** find (1)
> **Analogies:** such as (1)


### 3. Setting Up Azure AI Foundry

#### Understanding content filters
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=0)** Azure AI Studio has a content filter system that works alongside the core models to help you deploy AI responsibly.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=10)** It is powered by Azure AI content safety, and it will filter the input prompt and the output completion of the system.
>
> **[0:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=18)** It has been trained for English, German, Japanese, Spanish, French, Italian, Portuguese, and Chinese languages.
>
> **[0:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=26)** It can still work with other languages, but the quality of results may vary.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=31)** The content filter system will only work with Azure OpenAI based models such as GPT 4 and GPT 3.5.
>
> **[0:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=39)** The feature will not work for other models like Llama and Mistral.
>
> **[0:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=45)** The list of languages and models may change in the future.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=49)** It is best to check the Microsoft Learn website on the content filter system of Azure AI Studio.
>
> **[0:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=56)** The content filter system has four categories.
>
> **[1:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=60)** Violence covers any language that will hurt, injure, damage, or kill someone or something.
>
> **[1:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=67)** Hate covers any racist or discriminatory language to the different races ethnicity, nationality, gender identity, religion, immigration status, personal appearance, and body size of a group of people.
>
> **[1:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=82)** Sexual covers any language related to sexual organs, romantic relationships, erotic or affectionate terms, physical sexual acts including prostitution, pornography, and abuse.
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=96)** Finally, self-harm covers language that will hurt, injure, or damage one's body or kill oneself.
>
> **[1:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=104)** It also includes toxic behavior, name-calling, repeated insults, reputation tarnishing, excessive rudeness, and rumors spreading.
>
> **[1:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=115)** Examples of these categories can be found in the categories documentation of the content filter system.
>
> **[2:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=122)** The content filter system has four severity levels which you will set per category.
>
> **[2:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=129)** The safe severity level is not available by default and needs special approval. Since this is the lowest level, it will allow words from the different categories if they are used in an educational, journalistic, scientific, medical and other similar professional contexts.
>
> **[2:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=152)** The low severity level will include some bias, judgment, or offensive language that may be okay for some, but not for others.
>
> **[2:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=163)** Examples are stereotypes or content from fictional worlds like video games or books.
>
> **[2:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=171)** The medium severity level may contain content that may be quite upsetting for some. It will include offensive, insulting, or demeaning content toward certain groups of people.
>
> **[3:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=184)** It might also include harmful instructions or glorification of harm, but at a moderate level. The high severity level is generally not okay for most people to read.
>
> **[3:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=197)** The content will contain explicit and severe harmful actions and endorsement, glorification, or promotion of such severe harmful acts among other things. We will discuss in the next video how we can set all of these.
>
> **[3:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=213)** Finally, there are three other optional pre-built filters that you can use.
>
> **[3:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=219)** The prompt shield for jailbreak attacks is a feature to protect the system from jailbreaking.
>
> **[3:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=226)** Jailbreaking is an attempt of a user through the user prompt to bypass the desired behavior the developer has set, protected materials that will help detect materials from books, songs, news, recipes, and selected web content that are copyrighted.
>
> **[4:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=246)** Finally, protected materials code covers source code that matches a set of source code from public repositories.
>
> **[4:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-content-filters?u=76281980&t=254)** Once detected, it will provide example citation and license information in annotations.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), protected (2), self (1), public (1)
> **Env Vars:** gpt (2)
> **Exercise Files:** source code (2)
> **Definitions:** is a  (1), is an  (1)
> **Versions:** 3.5 (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)

#### Creating content filters
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=0)** In order to create a content filter in Azure AI Studio, we should go to the project we created and click the Content Filter section in the left hand navigation bar.
>
> **[0:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=12)** Click Content Filter in order to set the parameters.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=16)** Provide a unique name for your content filter and set your connection.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=23)** Choose the necessary threshold levels for each category for both the input and the output.
>
> **[0:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=29)** By default, there's no option to disable a category.
>
> **[0:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=33)** You would need special access to do so.
>
> **[0:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=36)** In addition, the threshold level here can be quite tricky.
>
> **[0:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=41)** The low setting is the strictest setting as it blocks both low, medium and high level settings.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=49)** The medium setting allows only low severity, but blocks both medium and high.
>
> **[0:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=55)** Finally, the high setting is the most lenient setting as it allows both low and medium and only blocks the high level scenarios.
>
> **[1:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=65)** This can be confusing at the start.
>
> **[1:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=68)** Again, putting everything at low is the strictest and safest setting, and putting everything at high is the most lenient setting.
>
> **[1:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=77)** In my example, I am choosing low in all categories for both input and output.
>
> **[1:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=83)** Scrolling down you will see the additional pre-built filter settings.
>
> **[1:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=88)** These are all optional.
>
> **[1:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=91)** You would have to decide if your business requires this. In the output setting, you can also choose your streaming mode.
>
> **[1:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=99)** Select customers can choose an optional low latency streaming mode.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=105)** With with the synchronous filter, content filters are run asynchronously, and completions will stream back token by token with the delayed content filtering signal.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=116)** The default setting filters data back to you in real time.
>
> **[2:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=120)** Clicking on Next lets you select the models where you can apply this content filter.
>
> **[2:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=126)** Since we have not created any deployment yet, we will set the content filter settings once you create a deployment.
>
> **[2:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=136)** Finally, creating a custom content filter is not really required.
>
> **[2:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-content-filters?u=76281980&t=142)** If you do not create a custom content filter, Azure AI Studio will assign the default content filter for your deployment, which is the medium threshold level for all categories for both input and output.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), default, (1), this. (1)
> **UI Navigation:** go to (1), select the (1)

#### Creating model deployments
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=0)** Creating model deployments is a very important step in the RAG process, as this is where you choose the large language model you will use.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=9)** But before you deploy a model, you should strategize by deciding on the following.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=16)** First, you need to decide on what model to choose.
>
> **[0:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=20)** As of this recording, you can decide from Azure OpenAI, Meta, Huggingface, Nvidia, Microsoft., Mistral, Go here, Databricks and Snowflake.
>
> **[0:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=34)** I am pretty sure there will be a lot more in the future.
>
> **[0:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=38)** For RAG purposes, Azure AI Studio currently only supports Azure Open AI models.
>
> **[0:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=45)** This can also change as well in the future.
>
> **[0:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=48)** You then need to decide the best model for your use case.
>
> **[0:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=52)** Question answering isn't the only use case available.
>
> **[0:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=56)** There is also text classification, image classification, object detection, and a lot more.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=64)** In addition, you should also consider the cost of the model you are choosing.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=70)** For example, GPT 4 costs more than GPT 3.5, so you may want to see if the cheaper model meets the requirements.
>
> **[1:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=81)** For our model, we will create three deployments.
>
> **[1:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=85)** We will use text embedding ada-002 for our embeddings model.
>
> **[1:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=90)** As discussed in the previous chapters, this is required to convert into vector embeddings our data source during initial setup and our user queries at runtime.
>
> **[1:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=103)** We will use GPT 3.5 turbo 16 K for our chat completion.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=109)** This would be the model used to generate our chat responses.
>
> **[1:54](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=114)** Finally, we will use GPT 4 32 K for our evaluation.
>
> **[2:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=120)** It is best to use a separate model to check if our responses are accurate.
>
> **[2:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=125)** To create a model deployment, you would need to click the deployments left navigation option and click Create Deployment.
>
> **[2:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=134)** You would then select the model you want to deploy, then click Confirm.
>
> **[2:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=140)** You then specify the deployment type.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=144)** Connect it to an Azure OpenAI resource, select the model version and set the deployment name.
>
> **[2:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=153)** I normally set the deployment name the same as the model name.
>
> **[2:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=157)** Under Advanced Options, you can then assign a content filter for the model.
>
> **[2:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=164)** If you created one in the previous chapter, this is where you assign it. A content filter with medium threshold set for all categories is assigned by default if you do not assign a custom setting.
>
> **[2:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=178)** The tokens per minute rate limit setting is also important, as this is your limit for the number of requests and tokens for both input and output that you have per minute.
>
> **[3:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-model-deployments?u=76281980&t=190)** This setting can be important as well if you have multiple projects using the same model deployment, and this can also help you track costs as well.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), rag (2)
> **Code Keywords:** case. (1), finally, (1), type. (1)
> **Versions:** 3.5 (2)
> **UI Navigation:** select the (2)
> **Prerequisites:** required to (1), setup (1)
> **Cross-References:** previous chapter (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Navigating the Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=0)** The Chat Project playground is where you can manually test, evaluate and deploy your application.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=6)** You can access the module through the project playground chat left navigation.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=10)** The first setting you should set is one of the deployments you created earlier that you intend to use for testing.
>
> **[0:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=17)** The second setting to modify is the system message.
>
> **[0:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=21)** This is where you specify how the system should behave.
>
> **[0:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=25)** You can specify here the system's name, it's personality, if it needs to far match responses and any safety parameters you want to specify.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=35)** You can also set variables as placeholders that can be filled with different values or information for each API call.
>
> **[0:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=43)** In our example, we will set country as a variable.
>
> **[0:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=47)** Examples are where you can provide a few examples of the responses you're expecting for certain scenarios.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=53)** This would be disabled when you attach your own data, however, so we will not use this functionality.
>
> **[1:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=60)** There is an option to provide safety system messages as well.
>
> **[1:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=65)** In our given example, if we add a personality to the system and add all the safety system messages, these words would add up to the total number of tokens to be sent during every API call.
>
> **[1:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=78)** Since we are using Azure OpenAI, we can count the total number of tokens from OpenAI's tokenizer website.
>
> **[1:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=87)** Every time you make changes in the system message, you need to click Apply changes.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=92)** Besides the system message, there are other areas you can go to.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=97)** Add your data is where you can attach your data for a RAG.
>
> **[1:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=101)** We will discuss this in the next chapters.
>
> **[1:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=104)** Parameters set the chat history and settings of the LLM.
>
> **[1:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=108)** We will also discuss this more in the next chapter.
>
> **[1:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=112)** The chat area is where you can input your user queries.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=116)** You should be trying a few queries here to test your Azure OpenAI connection, and to see if the system is behaving according to the behavior you specified in the system messages.
>
> **[2:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=127)** The playground settings lets you enable text to speech and speech to text capabilities.
>
> **[2:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=133)** With this enabled, you can talk to the system and the system can be able to talk back.
>
> **[2:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=140)** The top menu bar has some options that would be helpful to. View code lets you view sample code that allows you to access the system using the programming language of your choice.
>
> **[2:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=153)** The evaluate option lets you go to manual evaluations.
>
> **[2:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=158)** We will discuss how this is performed in the evaluation chapter.
>
> **[2:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=162)** Finally, you can deploy the system into a sample web app to show your customers how the system performs.
>
> **[2:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/navigating-the-playground?u=76281980&t=170)** The web app can be used for demo purposes.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), rag (1), llm (1)
> **Code Keywords:** module (1), finally, (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is an  (1)

#### Using the Playground and its settings
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=0)** Before we test the playground further, there are a few parameters that we need to cover.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=6)** Past messages specify how many user queries and how many system responses will be included in the chat history during every API call.
>
> **[0:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=17)** A value of ten, for example, will include five user queries and five system responses.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=23)** The maximum response represents the number of tokens limit .The number of tokens set are shared between the prompt, including system messages, examples, message history, and user query, and the model's response.
>
> **[0:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=39)** Remember that token length is directly proportional to the cost of the system.
>
> **[0:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=43)** Temperature varies from 0 to 1.
>
> **[0:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=47)** A low temperature closer to zero provides a more focused response, and a higher temperature closer to one provides a diverse and unpredictable response.
>
> **[0:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=58)** Topic controls the diversity of the words generated by the LLM.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=64)** A low top setting makes the words more predictable, while a high top P produces more diverse words.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=72)** The stop sequence stops the output or response when the specified string is detected in the response.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=80)** Positive values for frequency penalty will make tokens less likely to appear, as their frequency increases and decreases the model's likelihood of repeating the same statements.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=92)** Finally, positive values for presence penalty will make tokens less likely to appear when they already exist and increase the model's likelihood to output new topics.
>
> **[1:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=104)** Knowing the values for each setting will take trial and error. In a RAG situation we may want a lower temperature, lower top, and lower presence penalty to make the response more predictable so that words only come out from the tree of content.
>
> **[2:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=123)** Let us now go to the playground to see some of these settings in action.
>
> **[2:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=128)** First, we ask the system if it has a name.
>
> **[2:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=133)** Right now it's definitely replying back without one.
>
> **[2:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=138)** The developer can now provide it with a name and personality in the system message.
>
> **[2:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=146)** Second, let us ask details about France and Spain.
>
> **[2:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=154)** The system should be able to respond back for both countries.
>
> **[2:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=172)** But if you specify in the system message to only respond to questions about France, then the system will behave that way.
>
> **[3:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=186)** Third, let us check maximum response.
>
> **[3:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=195)** The first response provides a very detailed answer.
>
> **[3:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=207)** If you specify the maximum response to just 300, you will see that the response is immediately cut.
>
> **[3:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=220)** Finally, let us try out the stop sequence. By setting the stop
>
> **[3:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=230)** sequence to day five, the system will only provide an itinerary till the fourth day.
>
> **[3:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=238)** The system answers data from its training data set, which comes from the internet.
>
> **[4:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/using-the-playground-and-its-settings?u=76281980&t=243)** Let us now set this up to answer questions using our own data in the next videos.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2)
> **CLI Commands:** make (3)
> **Env Vars:** api (1), llm (1), rag (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)


### 4. Creating an Index for RAG Using Azure

#### Creating an index using Azure AI Foundry
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=0)** In order for the LLM to answer based on our data, the data should first be converted into vector embeddings and then stored in the data source.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=9)** Looking at the drug process, data storage, chunking, computing vector embeddings, and index storage may be difficult tasks to perform.
>
> **[0:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=21)** Fortunately, Azure AI Studio makes this process as easy for you.
>
> **[0:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=27)** There are a couple of ways to create an index.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=31)** One way is to do it in Azure AI Studio, and the other is to do it separately in Azure AI Search.
>
> **[0:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=38)** While both processes manage the chunking and vector embedding conversions for you, each process provides different results.
>
> **[0:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=48)** This video shall discuss how to do it in Azure AI Studio.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=53)** We go to the indexes in the left hand navigation and click New index.
>
> **[1:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=60)** We will upload our files here so that the data is stored in the same blob storage account we have with a project.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=70)** Select Azure AI Search.
>
> **[1:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=75)** This should use the Azure Search service that was created when you created the hub.
>
> **[1:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=80)** You may assign an appropriate name to the index name.
>
> **[1:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=83)** You can then choose any virtual machine.
>
> **[1:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=87)** I will choose auto select.
>
> **[1:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=89)** Make sure you add vector search to the search resource to create the vector embeddings.
>
> **[1:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=94)** Choose the Azure OpenAI resource intend to use.
>
> **[1:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=98)** This resource should have the text embedding model created.
>
> **[1:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=103)** Make one final review and click Finish.
>
> **[1:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=106)** This process will take a few minutes to complete.
>
> **[1:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=110)** Once complete, you will see that the whole process will do three things.
>
> **[1:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=115)** First, it will perform the document chunking, which is a split up the different files into smaller ones so that context is not lost.
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=124)** Second, it will compute the vector embeddings per document chunk and create an index in Azure AI Search.
>
> **[2:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=132)** Finally, it will register the index into your project.
>
> **[2:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=137)** Let us now go to the Azure AI Search resource to view the index data.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=144)** You will notice that we uploaded 20 product files, but the end result is 61 documents.
>
> **[2:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=151)** The junking process approximately split each file into three documents.
>
> **[2:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=157)** You can also view the vector data by doing a quick search on the index.
>
> **[2:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-studio?u=76281980&t=162)** Observe the long vector created for each data.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), let (1)
> **UI Navigation:** go to (2)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)

#### Creating an index using Azure AI Search
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=0)** Another method to create the index is to do it in Azure AI Search.
>
> **[0:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=4)** There are a few reasons why you want to create the index outside of Azure AI Studio.
>
> **[0:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=11)** You already have data stored in an Azure Storage resource outside the AI project.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=16)** You already have an existing Azure AI Search resource from other projects that you want to reuse.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=23)** You have data that is stored in image format. As of the recording of this video, Azure AI Studio can only accept text formats.
>
> **[0:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=33)** Finally, you want to schedule indexing. If you have use cases where in your data keeps changing continually, then you may want to automatically recreate your index at a certain schedule.
>
> **[0:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=46)** We now go to the Azure AI Search Resource in order to create the index. In the overview section we click the button Import and Vectorize Data.
>
> **[0:57](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=57)** We then choose the subscription Blob storage account and container where data is located.
>
> **[1:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=67)** You can enable deletion tracking if necessary.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=70)** We then choose the subscription Azure OpenAI service and the embedding model.
>
> **[1:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=78)** You should also take the checkbox.
>
> **[1:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=82)** You have options to vectorize your images and extract text from images if you have image files.
>
> **[1:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=89)** Since our data is purely in text form, we will not select any of these.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=95)** Enable semantic ranker if needed.
>
> **[1:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=98)** We will discuss what this is about in the next chapter.
>
> **[1:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=102)** Specify as well your desired schedule to update the index.
>
> **[1:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=107)** Finally, specify a name for the index, then click Create.
>
> **[1:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=115)** Index creation will take a while to complete.
>
> **[1:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=118)** Once done, I suggest that you review the index created in the Azure AI Search resource to see if your data contains the vector embeddings.
>
> **[2:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=129)** You'll also notice that the index has more documents compared to the previous chapter.
>
> **[2:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=135)** In this chapter, you have noticed that there are more settings you can control when creating your index in Azure AI Search, versus creating it using Azure AI Studio.
>
> **[2:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/creating-an-index-using-azure-ai-search?u=76281980&t=146)** If you still need even more control, then you may try the Python or the Rest APIs documentation of Azure AI Search.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2)
> **Cross-References:** in the next (1), previous chapter (1)
> **UI Navigation:** go to (1), checkbox (1)
> **CLI Commands:** python (1)

#### Understanding retrieval and relevance in Azure AI Search
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=0)** Azure AI Search uses two different layers of execution when searching for information, retrieval and relevance or ranking.
>
> **[0:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=11)** These are two very important concepts we need to understand in RAG.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=16)** Retrieval finds and fetches the most relevant data based on a user's query., while relevance or ranking determines how closely the results match the user's query.
>
> **[0:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=29)** Both of these concepts will determine how well the RAG performs in getting content and the cost of your solution.
>
> **[0:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=38)** In Azure AI Search retrieval often called L1, has three different types.
>
> **[0:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=45)** Full text search or keyword search is the cheapest search method and the most traditional method we know.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=53)** The method is actually a complicated process, but in Layman's terms it tries to find a match of the text between the user query and the source index.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=64)** Vector search is a method that uses mathematical vectors to represent and search through complex data.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=72)** Both our data source and the user query are first converted into vectors using an embedding model such as text embedding ada-002.
>
> **[1:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=83)** We then try to get the closest results in the data source from the user query using a chosen algorithm, such as cosine similarity.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=92)** Hybrid search is a search method that combines both full text search and vector search.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=97)** When this is selected, both search methods run in parallel in a method called reciprocal rank fusion ref will produce a single combined result.
>
> **[1:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=110)** Once the L1 process is completed, Azure AI Search will then apply relevance or ranking, often called L2.
>
> **[1:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=119)** This also has three different types. BM25 or best match 25 ranking is a ranking method exclusive only to full text search.
>
> **[2:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=132)** The method looks at a lot of factors, such as giving a higher score to documents that contain a lot of the search word, giving a smaller document a higher score over a larger document if they contain the same amount of the search word, or if a word search query is available in most documents, then it is not useful in searching.
>
> **[2:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=155)** Exhaustive key-nearest neighbors (KNN) or Hierarchical Navigable Small World (HNSW) are methods exclusive to vector search.
>
> **[2:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=167)** When exhaustive KNN is used, the user query vector is matched against all the vectors in the data source. It is used to, and high recall is very important.
>
> **[2:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=178)** However, it is very computationally expensive and slower as it needs to go through every single vector.
>
> **[3:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=187)** HNSW uses an advanced algorithm that tries to put the data in different categories.
>
> **[3:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=193)** When a search is done using HNSW, your query vector is immediately matched against a particular category and thus ignoring the rest of the other categories of data in the data source.
>
> **[3:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=206)** Semantic ranking is the best ranking method now according to Microsoft research.
>
> **[3:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=212)** It is used to in hybrid search is selected.
>
> **[3:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=215)** It improves the BM25 and RF by using a deep learning model adapted from Microsoft Bing, to rearrange the initial results of L1.
>
> **[3:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=226)** Your business requirements would decide what would be the best L1 and L2 method for you.
>
> **[3:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=233)** Performance comes at a cost.
>
> **[3:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=236)** The best method as of this recording is to use hybrid search and semantic ranking in your settings when using RAG.
>
> **[4:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=244)** However, this option is also the priciest option.
>
> **[4:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-retrieval-and-relevance-in-azure-ai-search?u=76281980&t=250)** To learn more about Hybrid Search and Semantic Ranker, you may visit this URL.

> [!info]- Semantic Content
>
> **Env Vars:** rag (3), hnsw (3), bm25 (2), knn (2), url (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)

#### Testing your index in the Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=0)** You can now manually test your index in the chat playground to see its performance.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=6)** We first set the system message properly.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=9)** We should specify the role and behavior of the system.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=13)** In this case, it is an AI assistant that tells people find information about the products of the Contoso company.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=22)** In addition, we should specify how the system responds when asked questions outside the data source you provided.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=31)** This is to reduce fabrications in the response.
>
> **[0:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=36)** We then need to attach the index in the Azure Data section.
>
> **[0:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=42)** If the index was created in Azure AI Studio, the index would be readily available.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=49)** However, if we created the index using Azure AI Search, then you would manually have to add this. Click add a new data source.
>
> **[1:01](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=61)** Select Azure AI Search in the data source, then select the Azure AI Search resource in the index you created.
>
> **[1:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=71)** Select the embedding model and ensure that the vector search option is selected.
>
> **[1:19](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=79)** We then have to choose Custom Field Mapping and individually map each field.
>
> **[1:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=86)** The chunk field in our index contains the content data.
>
> **[1:33](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=93)** Once the index is set, select the search type we intend to use. Under the advanced settings, we can specify to limit the responses based on your data, set the strictness factor and the number of retrieved documents to display.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=116)** We then set the temperature, top P and other parameters
>
> **[2:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=124)** accordingly.
>
> **[2:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-your-index-in-the-playground?u=76281980&t=126)** When everything is set, we recommend that you provide a list of ten ready made questions based on your data and verify if the response provided is correct.

> [!info]- Semantic Content
>
> **UI Navigation:** select the (3)
> **Code Keywords:** case, (1), this. (1)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)


### 5. Introduction to Azure Prompt Flow

#### Understanding prompt flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=0)** Prompt Flow is an orchestrator or organizer that connects your LLM data source system prompts and user inputs into a well connected system.
>
> **[0:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=12)** It provides us with a comprehensive solution that simplifies the process of prototyping, experimenting, iterating, and deploying your AI applications.
>
> **[0:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=24)** What I like about Prompt Flow is that it provides you with a directed acyclic graph in order for you to visualize how each component of the flow interacts with each other.
>
> **[0:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=36)** This will help you understand how the system works under the hood.
>
> **[0:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=40)** Azure AI Studio then provides you an interactive interface to set each component as needed.
>
> **[0:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=48)** In addition, it gives you a simple to use evaluation mechanism that lets you test the performance of the system based on a different set of system message scenarios.
>
> **[1:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=60)** An LLM system will have different behaviors, functionality, and outcomes based on how you set the system message.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=70)** Instead of manually testing and recording each system message scenario, you can set all the possible scenarios in the Prompt Flow and have AI studio evaluate the performance of each scenario in one sweep.
>
> **[1:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=85)** We will show you how this is done in the video focus on evaluations.
>
> **[1:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=90)** Finally, Azure AI Studio provides you with the list of Prompt Flow templates that you can easily use for your project.
>
> **[1:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=99)** The templates would either be a standard flow for general applications, a chat flow for conversational applications, and an evaluation flow for different evaluation scenarios.
>
> **[1:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=112)** A typical Prompt flow will contain nodes which are tools with specific functionalities.
>
> **[1:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=119)** You can view the complete list of tools with this URL.
>
> **[2:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=122)** We will discuss briefly what tools you'll be using for our course.
>
> **[2:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=128)** LLM tool allows you to use large language models with the Azure OpenAI service for tasks such as text completion or chat.
>
> **[2:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=136)** Index lookup allows you to search a vector based query for relevant results using one or more text queries.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=144)** Python tool allows you to run different Python code.
>
> **[2:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=148)** Finally, Prompt tool allows you to craft a prompt by using Jinja as a templating language.
>
> **[2:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/understanding-prompt-flow?u=76281980&t=156)** We will discuss in the next video how to create a Prompt Flow for our project, and modify the different tools to make our system work.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3), url (1)
> **CLI Commands:** python (2), make (1)
> **Code Keywords:** finally, (2), interface (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)

#### Create a sample prompt flow for RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=0)** Let me show you how to create a simple prompt flow for a RAG solution.
>
> **[0:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=5)** We go to Prompt Flow under tools and click Create.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=10)** You will see the different standard chart and evaluation flows available for you to reuse.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=16)** You can also import a prompt flow from a file share or from your local machine.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=23)** A prompt flow follows the YAML schema and is saved in a YAML file.
>
> **[0:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=28)** For our sample, we will clone a multi round Q&A on your data template.
>
> **[0:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=34)** Enter a name for your prompt flow and click clone.
>
> **[0:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=40)** When the flow is created, you will see a graph which shows the different components or tools of the flow.
>
> **[0:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=48)** Before we modify each tool, we need to start a compute session.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=53)** Clicking the Start Compute session gives you a predefined virtual machine.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=59)** Start with advanced settings lets you configure one.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=64)** We will choose the default for now.
>
> **[1:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=67)** It will take 1 to 3 minutes to provision a compute session for you.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=72)** Once completed, we need to modify each tool.
>
> **[1:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=77)** We will modify two LLM tool settings to connect our Azure OpenAI resource and set the proper deployment model.
>
> **[1:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=86)** You can also modify here the temperature and max token count.
>
> **[1:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=91)** Set the response format to text.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=97)** Chat with context is the second LLM tool.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=105)** We will then modify the index lookup to use the index we created in the previous video.
>
> **[1:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=113)** Under ML index content, you can select a wide variety of options.
>
> **[2:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=120)** We will choose registered index which contains one of the indexes we set in Azure AI Studio.
>
> **[2:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=129)** We will select Hybrid Semantic for the query type and set the top K value.
>
> **[2:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=137)** Top K defines the top score document search is retrieved.
>
> **[2:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=142)** Finally, you can also see the different system prompt variants or scenarios.
>
> **[2:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=150)** By default, you're given three different variants for you to modify.
>
> **[2:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=154)** We will accept the default set for now.
>
> **[2:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=157)** After you have completed setup, do not forget to save.
>
> **[2:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=163)** You should then test the prompt flow by asking questions about your data in the chat interface.
>
> **[2:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=171)** This will take a while for the first run.
>
> **[2:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=173)** If everything seems to be working fine, we can now evaluate the prompt flow against the list of question and answer pairs we have prepared.
>
> **[3:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/create-a-sample-prompt-flow-for-rag?u=76281980&t=182)** But before we do that, let us define the different evaluation metrics in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1), default, (1), interface (1)
> **Env Vars:** yaml (2), llm (2), rag (1)
> **Cross-References:** previous video (1), in the next (1)
> **Prerequisites:** configure (1), setup (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### Evaluation and monitoring metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=0)** Azure AI Studio provides you a tool in order to measure the performance of your system.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=6)** Evaluating your system is done in four easy steps.
>
> **[0:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=10)** First, you will need to prepare a set of question and answer pairs that will be used as a benchmark.
>
> **[0:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=17)** You would need to go through your source documents and generate questions with the correct answers.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=23)** These answers would serve as the ground truth.
>
> **[0:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=27)** You will then store them in a specific file format found in this URL.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=31)** Second, you then need to decide which metrics shall be used during the evaluation process.
>
> **[0:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=39)** This decision must involve your users.
>
> **[0:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=42)** Third, you then upload your benchmark file and perform the evaluation test.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=49)** During the test, the system will generate answers and will verify if they match the ground truth answers you specified in your benchmark file.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=59)** Finally, you review the statistical results of the test.
>
> **[1:04](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=64)** You would then align with your stakeholders if the results are sufficient or modifications need to be done.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=72)** The evaluation test allows you to choose any of the following quality metrics.
>
> **[1:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=76)** Coherence measures how well the application can produce output that flows smoothly, reads naturally, and resembles human like language. Fluency measures the language proficiency of the application's answer.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=92)** GPT similarity measures the similarity between a ground truth and the generated response of the application.
>
> **[1:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=100)** Finally, the F1 score measures the ratio of the number of shared words between the application prediction and the ground truth.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=109)** The evaluation test also allows you to test the risks and safety metrics we have earlier discussed on content filters.
>
> **[1:57](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=117)** You can choose to test self-harm, hateful, violent or sexual content, and you can also indicate the threshold of the test either low, medium, or high.
>
> **[2:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/evaluation-and-monitoring-metrics?u=76281980&t=129)** As a final note, remember to always involve your key stakeholders when defining which quality and safety metrics will be used during the test and your success criteria.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), self (1)
> **Env Vars:** url (1), gpt (1)
> **Best Practices:** remember to (1)

#### Perform evaluations on your RAG system
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=0)** Before we evaluate our RAG system, we must first prepare our benchmark file, which contains our ground truth data.
>
> **[0:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=8)** The ground truth must come from your source documents.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=13)** You have the option to generate this manually, or you can have an LLM generated document for you.
>
> **[0:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=20)** In both cases, proper verification is needed to ensure that this file is correct and that you have enough scenarios to test your different business requirements. Inside the prompt flow, we have an evaluate button at the top right of the screen.
>
> **[0:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=37)** Select built in evaluation, then assign a name for the evaluation.
>
> **[0:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=44)** Select question and answer without context and verify that your prompt flow is properly selected.
>
> **[0:54](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=54)** Then click next.
>
> **[0:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=56)** Upload your benchmark file and verify that your data is properly mapped.
>
> **[1:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=66)** Under chat input, select Data question, then click next.
>
> **[1:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=72)** You then select the desired performance and safety metrics that you want to test.
>
> **[1:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=76)** Make sure that the connection and deployment model is properly set.
>
> **[1:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=83)** At the bottom, select chat Chat Output to answer.
>
> **[1:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=89)** Then click next.
>
> **[1:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=91)** Make one final review, then click submit.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=97)** The evaluation will take a few minutes to complete.
>
> **[1:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=101)** Notice that three evaluation tests are running together.
>
> **[1:45](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=105)** Recall that our flow has three different system prompt variants.
>
> **[1:50](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/perform-evaluations-on-your-rag-system?u=76281980&t=110)** Once completed, you can view the results of each evaluation run.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** rag (1), llm (1)
> **UI Navigation:** select the (1)


### 6. Deploying a RAG Solution

#### Deploying the RAG solution using prompt flow
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=0)** Once we have evaluated the RAG solution and it has passed this testing, we can now deploy the solution into production.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=9)** Go back to your prompt flow and select deploy.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=13)** Specify the endpoint and deployment name.
>
> **[0:18](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=18)** Then choose the virtual machine where you intend to deploy the solution.
>
> **[0:23](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=23)** Make sure you select the right machine that meets the requirements.
>
> **[0:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=27)** Specify as well the number of instances. For high availability, Microsoft recommends you set at least three.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=35)** Select your desired authentication type and specify if you want the endpoint to be accessible in the public internet, modify your deployment settings if needed and finally, select the desired deployment model.
>
> **[0:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=53)** Recall that we have two LLM tools in the flow.
>
> **[0:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=58)** Make one final review, then click create.
>
> **[1:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=66)** The deployment will take a few minutes.
>
> **[1:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=70)** You can view the status of your deployment under components deployments.
>
> **[1:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=77)** Once completed, you can now view its details.
>
> **[1:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=82)** You should then test the deployment by asking the system some questions.
>
> **[1:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=89)** Finally, let us view how we can consume the deployment.
>
> **[1:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=95)** You will see the Rest endpoint and the authentication keys.
>
> **[1:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=101)** You can also consume the deployment using JavaScript, Python, C-sharp and R. Going back to JavaScript I would like to highlight the following.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=116)** First, the Rest endpoint is accessible via a Post request.
>
> **[2:01](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=121)** Second, the headers must have the following: content type set to application JSON, the authorization key should be a string, which is the bearer plus a space, plus the API key, and the Azure model deployment key should be your deployment name.
>
> **[2:25](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rag-solution-using-prompt-flow?u=76281980&t=145)** Let me show you how to access this via postman in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (2), public (1)
> **Env Vars:** rag (1), llm (1), json (1), api (1)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** go back to (1), in the next (1)
> **UI Navigation:** select the (2)
> **Tools:** postman (1)

#### Testing the REST endpoint using Postman
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=0)** Postman is a software application that allows developers to test document and share APIs. To access a Rest endpoint, we need to make a Post request and copy the URL.
>
> **[0:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=17)** Recall that authorization should be bearer plus your API key
>
> **[0:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=30)** and your Azure ML model deployment should equal your model deployment name.
>
> **[0:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=39)** We then need to specify the raw body.
>
> **[0:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=43)** In order to do that we need to go back to our prompt flow and view the inputs.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=49)** The inputs of our Rest endpoint is a JSON file that contains a chat input string in a chat history list.
>
> **[0:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=58)** Upon further investigation, you will see that the chat history contains a pair of input and output strings.
>
> **[1:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=68)** Let us see this in action in Postman.
>
> **[1:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=74)** We first make an initial query.
>
> **[1:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=77)** The history should be blank.
>
> **[1:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=81)** We then make another query adding the history of the previous
>
> **[1:30](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=90)** conversation.
>
> **[1:32](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=92)** In this scenario, in the question how much is it?
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=96)** The system already knows that it refers to a cosy night sleeping bag.
>
> **[1:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=101)** Given that it's part of the history.
>
> **[1:46](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=106)** Here's another example with more chart history.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/testing-the-rest-endpoint-using-postman?u=76281980&t=116)** The reason that I'm showing this to you is because you would have to eventually make a program to continually add the previous conversations in the chat history.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Env Vars:** url (1), api (1), json (1)
> **Definitions:** is a  (2), refers to (1)
> **Tools:** postman (2)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)

#### Deploying the REST endpoint to Copilot Studio and Microsoft Teams
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=0)** Let me now show you how we can chat with our data in Microsoft Teams using the Rest endpoint provided by Azure AI Studio.
>
> **[0:09](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=9)** To make this possible, we will use Copilot Studio.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=13)** We create a copilot.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=22)** Go to system topics.
>
> **[0:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=26)** We will disable conversational boosting.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=31)** And modify the fallback topic.
>
> **[0:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=36)** Using Postman, what do we know?
>
> **[0:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=41)** First, we know it's a Post request, these are the headers and this is the body.
>
> **[0:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=49)** If you look at it the body's always composed of a prefix which is this one and a suffix, and sandwiched in between is your user query.
>
> **[0:59](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=59)** Let's set this up in Copilot.
>
> **[1:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=65)** We create a variable called prefix.
>
> **[1:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=74)** And the prefix is this value.
>
> **[1:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=84)** Create another variable called suffix.
>
> **[1:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=97)** And set the value to the string.
>
> **[1:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=109)** Then you make another variable called the request body,
>
> **[2:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=122)** which is a concatenation of
>
> **[2:12](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=132)** .topic.prefix your user query which has system dot last
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=144)** message.text.suffix
>
> **[2:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=154)** We then create an HTTP request.
>
> **[2:43](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=163)** We copy our URL.
>
> **[2:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=169)** Set the post method.
>
> **[2:54](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=174)** Then we enter our headers.
>
> **[3:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=191)** We set body to raw content.
>
> **[3:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=200)** And specify content to request body.
>
> **[3:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=206)** And then in the response data type we add sample data.
>
> **[3:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=219)** And save it to a new variable called
>
> **[3:47](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=227)** response.
>
> **[3:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=231)** Finally, we output the response output.
>
> **[4:01](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=241)** Response chat output, this one.
>
> **[4:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=248)** Now let's test the system.
>
> **[4:19](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=259)** You will see that Copilot is now answering based on your data.
>
> **[4:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=268)** We can now publish the copilot.
>
> **[4:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=274)** This will take a few minutes.
>
> **[4:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/deploying-the-rest-endpoint-to-copilot-studio-and-ms-teams?u=76281980&t=277)** Once publish is complete, you can now deploy to Microsoft Teams.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1)
> **CLI Commands:** make (2)
> **Env Vars:** http (1), url (1)
> **Tools:** postman (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)


### Conclusion

#### Key takeaways
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=0)** Congratulations.
>
> **[0:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=2)** You have learned how to create a rug application using Azure AI Studio. To provide the recap, here are the key things we learned.
>
> **[0:11](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=11)** Retrieval Augmented Generation allows you to chat with your own data.
>
> **[0:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=16)** It is one of the most widely used patterns in using generative AI for business.
>
> **[0:22](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=22)** Tokens are words converted into numeric form for LLMs to understand.
>
> **[0:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=28)** They are a key driver of course for your system.
>
> **[0:31](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=31)** Vector embeddings capture the relationships between words.
>
> **[0:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=35)** Embedding conversion happens during data setup and during data retrieval.
>
> **[0:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=42)** We also discussed the workflow of RAG.
>
> **[0:44](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=44)** Retrieval occurs when the user's query is used to search for similar documents in your data source.
>
> **[0:51](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=51)** Augmentation happens when the user query and the search context are combined together to form a new prompt.
>
> **[1:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=60)** Generation takes place when the LLM creates a response based on the new prompt.
>
> **[1:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=67)** RAG solutions need a Retriever, LLM, Orchestrator, and a Front end. We use Azure AI Search, Azure OpenAI, Azure AI Studio Prompt Flow, and Microsoft Teams using Copilot studio to make our solution.
>
> **[1:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=87)** Azure AI Studio is a tool that lets you build, evaluate, and deploy AI applications in a responsible manner.
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=96)** In order to build a rug solution, we did the following high level steps.
>
> **[1:41](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=101)** One, we created content filters that provide you a mechanism to filter out harmful, violent and sexual content using Azure AI content safety.
>
> **[1:53](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=113)** Two, we deployed a model of our choice.
>
> **[1:56](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=116)** We have the option to deploy OpenAI, Llama, Mistral, Phi, and other models that Microsoft has a partnership with.
>
> **[2:05](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=125)** Three, we created an index with vector embeddings to prepare our data.
>
> **[2:10](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=130)** We can use either the Studio or Azure AI Search for the conversion.
>
> **[2:16](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=136)** Four, we set up a prompt flow that would meet our business requirement.
>
> **[2:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=141)** Five, we evaluated the flow based on metrics we chose, and finally we deployed the flow to production and consumed the endpoint using any method we chose. When consuming the Rest endpoint, you need to make sure that the following information is set.
>
> **[2:38](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=158)** The post method which contains your URL, the headers should be set, specifically, the content type, authorization key, and Azure model deployment.
>
> **[2:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/key-takeaways?u=76281980&t=169)** And finally, the body should have your input string in the Chat history list, which contains the input and output of previous conversations.

> [!info]- Semantic Content
>
> **Env Vars:** rag (2), llm (2), url (1)
> **CLI Commands:** make (2)
> **Code Keywords:** type, (1), finally, (1)
> **Prerequisites:** setup (1), set up (1)
> **Definitions:** is a  (1)

#### Additional learning
> [LinkedIn Learning](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=0)** Generative AI is a very big space and it's continually evolving and changing.
>
> **[0:06](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=6)** You will never run out of things to learn.
>
> **[0:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=8)** There are so many concepts to cover just within GenAI.
>
> **[0:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=13)** You can continue to research the latest trends coming out of GenAI, such as organic workflows.
>
> **[0:20](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=20)** The traditional non agent approach we are using consists of providing a prompt and receiving a single direct response.
>
> **[0:28](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=28)** A genetic workflows are the next level as it empowers AI agents to engage in a more dynamic, iterative, and self-reflective process.
>
> **[0:37](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=37)** You can focus on learning prompt engineering.
>
> **[0:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=40)** This field will continue to evolve as new models come out, and there will be specific techniques that will cater to different business functions. From engineering for HR, finance, marketing and sales, for example, will continue to be a need.
>
> **[0:57](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=57)** You can also read up on the latest trends in RAG and fine tuning.
>
> **[1:02](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=62)** These techniques will continue to evolve as new research and use cases come out.
>
> **[1:08](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=68)** You can continue researching using Microsoft AI technologies.
>
> **[1:13](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=73)** Microsoft is one of the companies in the industry that provides you a well integrated, complete package of AI tools that will support your business at scale with enterprise grade security.
>
> **[1:26](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=86)** Azure AI Search and Azure Cosmos DB are one of the best in the world when it comes to data storage and retrieval for AI applications.
>
> **[1:36](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=96)** OpenAI themselves uses these technologies.
>
> **[1:40](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=100)** Azure OpenAI will continue to release newer models and with it newer functionalities and software development kits.
>
> **[1:48](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=108)** We only covered the tip of the iceberg when it comes to Azure Prompt Flow.
>
> **[1:52](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=112)** There are also other libraries you can use, such as semantic Kernel and LongChain to name a few.
>
> **[1:58](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=118)** Azure AI Studio will also continue to change.
>
> **[2:03](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=123)** We did not cover in this course assistance and fine tuning.
>
> **[2:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=127)** By the time you see this video, I wouldn't be surprised if it would have more functionalities.
>
> **[2:14](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=134)** Finally, you can also look at Copilot Studio for building Quick Copilot for your business.
>
> **[2:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=141)** While they may not be as powerful as Azure Air Studio.
>
> **[2:24](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=144)** You may be surprised how these tools can immediately meet your business needs.
>
> **[2:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=149)** Microsoft would also have a lot of other co-pilots available for use, such as CoPilot for 365, Copilot for the different dynamics modules and the power platform. In your quest for knowledge, you may also want to get Microsoft's industry recognized certifications.
>
> **[2:49](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=169)** These certifications will certainly spice up your résumé and would show the industry your competency in the space.
>
> **[2:57](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=177)** Azure AI fundamental certification, is an opportunity for you to demonstrate knowledge of AI concepts and related Microsoft Azure services.
>
> **[3:07](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=187)** You can use this as your entry level to advance into higher certifications such as AI Engineering and Data Engineering.
>
> **[3:17](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=197)** Azure AI Engineer Associate Certification lets you showcase your ability to build, manage and deploy a solutions that leverage Azure AI.
>
> **[3:27](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=207)** This is a higher level certification compared to the fundamental scores and is more challenging.
>
> **[3:35](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=215)** These certifications may not be free, as it requires you to take a proctored exam from an accredited provider.
>
> **[3:42](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=222)** However, Microsoft would provide challenges and promotions from time to time that lets you complete modules and courses with the reward of free certification codes upon completion.
>
> **[3:55](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=235)** Microsoft is also offering five free Applied Skill certifications in AI.
>
> **[4:00](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=240)** They are designed to validate your proficiency in specific scenario based skills such as natural language processing, computer vision, document intelligence, generative AI, and machine learning.
>
> **[4:15](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=255)** Upon completion, you can get an achievement badge that you can showcase to social media.
>
> **[4:21](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=261)** From personal experience, these applied skills do test your practical skills in the set of technologies.
>
> **[4:29](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=269)** Finally, you may want to bookmark Microsoft Learn in your home page.
>
> **[4:34](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=274)** It is your one stop shop for learning anything about Microsoft.
>
> **[4:39](https://www.linkedin.com/learning/building-rag-solutions-with-azure-ai-foundry-formerly-azure-ai-studio/additional-learning?u=76281980&t=279)** We decide you can learn by doing, find technical documentation, ask questions, try sample codes and showcase your skills.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (7), finally, (2), self (1)
> **Analogies:** such as (5), for example (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1)
> **Env Vars:** rag (1)


## Path Context

### In [[Master Retrieval-Augmented Generation (RAG)]]
← [[Advanced RAG Applications with Vector Databases]] | **6 of 7** | [[Hands-On AI- RAG using LlamaIndex]] →

## Appears In

- [[Master Retrieval-Augmented Generation (RAG)]]

## Related Courses

_Courses sharing skills:_

- [[Azure for Developers- Retrieval-Augmented Generation (RAG) with Azure AI]] — Artificial Intelligence (AI), Azure AI Foundry, Retrieval-Augmented Generation (RAG)
- [[Building in Azure AI Foundry]] — Artificial Intelligence (AI), Azure AI Studio, Azure AI Foundry
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[GraphRAG Essential Training]] — Artificial Intelligence (AI), Retrieval-Augmented Generation (RAG)
- [[Azure Ai For Developers Ai Design Foundations]] — Artificial Intelligence (AI), Azure AI Studio

---

[↑ Back to top](#)