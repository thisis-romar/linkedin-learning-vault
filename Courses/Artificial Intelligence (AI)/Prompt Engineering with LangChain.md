---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: prompt-engineering-with-langchain
url: "https://www.linkedin.com/learning/prompt-engineering-with-langchain"
duration_minutes: 321
duration: 5h 21m
level: Intermediate
updated: 4/18/2024
learners: 44046
skills:
  - LangChain
  - Artificial Intelligence (AI)
  - Prompt Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHu5CCKBy4pyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713212432463?e=2147483647&amp;v=beta&amp;t=IYFJ7ivG7FaMm2fPpWCfZiBWLW_ckaXzz2Q58sD-r0k"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - Prompt Engineering Skills for Developers
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/langchain
  - skill/artificial-intelligence-ai
  - skill/prompt-engineering
status: not-started
created: 2026-04-19
---

![Prompt Engineering with LangChain](https://media.licdn.com/dms/image/v2/D560DAQHu5CCKBy4pyA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1713212432463?e=2147483647&amp;v=beta&amp;t=IYFJ7ivG7FaMm2fPpWCfZiBWLW_ckaXzz2Q58sD-r0k)

# Prompt Engineering with LangChain

> This course provides a comprehensive yet concise introduction to LangChain, a powerful framework for large language model (LLM) applications. Starting with the basics of LLMs, instructor Harpreet Sahota explores the key features and capabilities of LangChain, showing you how to integrate it with various systems and gain hands-on experience in building practical applications. Whether you're a seaso

> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain) | 5h 21m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Harpreet Sahota]]

## Resources

- Exercise files available

## Skills Covered

- LangChain
- Artificial Intelligence (AI)
- Prompt Engineering

## Table of Contents

### Introduction

#### Create powerful LLM driven applications
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=0)** - Hi, I'm Harpreet Sahota.
>
> **[0:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=2)** For over 10 years, I've worked in various roles using statistical and machine learning.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=7)** I've never been more excited about the potential of this technology to change the world than I have been at this particular moment in time.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=15)** And it's all because of one specific advancement in machine learning.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=21)** Large language models or LLMs.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=24)** LLMs are at the forefront of a technological revolution.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=28)** And as with any powerful tool, harnessing its potential requires a robust framework.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=34)** Enter LangChain.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=36)** A orchestration framework that will give you the building blocks to create powerful LLM-driven applications.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=43)** I designed this course to be a comprehensive introduction to LangChain.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=47)** I hope you're excited to embark on your journey into AI and prompt engineering.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/create-powerful-llm-driven-applications?u=76281980&t=51)** Are you ready? Let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** llm (1)
> **Speakers:** - hi (1)


### 1. Introduction to Language Models

#### What are language models?
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=0)** - [Instructor] Our world is increasingly shaped by technology, from asking a digital assistant about the weather, to translating documents into your native language.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=9)** Our interactions with technologies is becoming deeply rooted in natural language.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=15)** Language models are increasingly becoming the heart of these interactions, the backbone of our daily digital engagements.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=22)** They help machines understand and generate human language, making our interactions with technology smoother and more intuitive.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=31)** A language model is a machine learning model trained to understand, generate, and interact with human languages.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=38)** These models learn patterns, structures, and nuances of a language.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=43)** When given a word or a sequence, a language model predicts what might come next based on what it's learned.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=50)** This is similar to how after hearing the phrase "peanut butter", and many of us might instinctively complete with "jelly".
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=58)** In practice, a language model gives the probability of a certain word sequence being valid.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=65)** It's important to note that validity here doesn't strictly refer to the grammatical correctness of the generated text, it's about understanding human language's nuances, its context and its intricacies.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=79)** Instead, it's about how closely the sequence mirrors human-like writing patterns.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=86)** This is achieved by training these models on vast amounts of textual data, enabling them to understand context, nuances, and intricacies of human language.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=98)** There are primarily two types of language models, probabilistic language models, and neural network-based language models.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=107)** Probabilistic language models are typically based on n-gram probabilities.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=113)** They predict the next word from the preceding n words.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=117)** An n-gram is a sequence of n items from a text.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=122)** For instance, "I love dogs" has a bigram inside of it.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=127)** Actually, it has two bigrams, "I love" and "love dogs".
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=132)** The biggest limitation for these probabilistic language models lies in their inability to capture deep context.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=141)** Neural network-based language models excel at predicting the next word in a sequence using mechanisms like attention for contextual understanding.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=151)** When referring to large language models, or LLMs, we're often talking about the transformer architecture, which is a type of deep neural network architecture.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=164)** Transformers understand the contextual relationship of words in a sequence using a mechanism called self-attention.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=172)** Transformers can be categorized into the following varieties, encoder only, like the BERT model, which stands for Bidirectional Encoder Representation Transformer.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=184)** Decoder-only, like the GPT, the generative pre-trained transformer.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=189)** And the encoder-decoder, like the T5 model.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=196)** LLMs have some key features that distinguish them from previous language models.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=200)** First is that these large language models display surprising emergent abilities that were not observed in smaller models.
>
> **[3:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=210)** For example, GPT-3 can handle few-shot tasks through in-context learning, something its predecessor GPT-2 struggled with.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=220)** Accessing LLMs is primarily done through a prompting interface like the ChatGPT UI or the GPT-4 API from OpenAI.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=231)** This means users need to understand how LLMs function and format your prompts appropriately.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=239)** Developing LLMs blurs the lines between peer research and engineering.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=244)** Training these models demands practical experience in large-scale data processing and distributed parallel training.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=253)** As we become increasingly reliant on AI assistance, a foundational grasp of language models equips us to better appreciate this technology's marvel.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=264)** It empowers us to utilize these tools to their fullest potential and critically evaluate them when necessary.
>
> **[4:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=271)** Remember, these models will start to underpin more and more advanced technologies, from search engines to digital assistants built into tools that you're already using every day, to even operating systems.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-are-language-models?u=76281980&t=284)** LLMs represent a significant leap in AI capabilities, and they'll continue to shape and redefine our digital experiences.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), bert (1), api (1)
> **Code Keywords:** self (1), interface (1), function (1), continue (1)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** similar to (1), for instance (1), for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 2. LLMs and Text Generation

#### How do language models generate text?
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=0)** - [Instructor] In this course, we'll treat LLMs as a black box.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=4)** They're essentially text in, text out machines, but I want to provide you with some intuition for how they generate text.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=12)** At a high level, this is how LLMs generate text.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=15)** You start with an initial sequence and then use a LLM to generate the next token.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=21)** Then you append that to the sequence and repeat the process until you've got the desired sequence.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=27)** A token, in language models, is a piece or chunk of text, which can be as short as one character or as long as one word, or it could be punctuation, like parentheses, question marks, et cetera.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=42)** Okay, but how exactly does the LLM generate text?
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=45)** Well, the entire process can be broken down into three primary steps: encoding, prediction, and decoding.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=53)** In encoding, the initial sequence is processed by the LLM.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=58)** The LLM will then predict the next token based on what it's seen.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=63)** Then that predicted token is added to the sequence, and this process repeats.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=69)** In the encoding step.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=71)** The input text is converted into a sequence of vectors that the LLM can process.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=76)** The LLM is going to use an embedding layer to map each word in the input token to a vector representation.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=83)** Instead of treating words as discreet units, embeddings capture the semantic meaning of words by placing semantically similar words closer in the vector space.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=94)** For instance, the words cat and kitten might have vectors that are close together, reflecting their similar meanings.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=103)** With the encoded input, the LLM predicts the most likely next word or sequence of words based on the received input.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=111)** This involves using the learned knowledge of language patterns to generate the most likely output sequence.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=118)** The self-attention mechanism ensures that words are considered about each other, allowing for deeper comprehension and context-aware prediction.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=129)** The LLM uses a softmax layer to produce a probability distribution over the possible next words or sequences.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=136)** A softmax is just a mathematical function that's going to convert a vector of numbers into a probability distribution.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=142)** Once the softmax layer outputs a probability distribution, overall potential next words or sequences, the model can select the most probable one.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=153)** Finally, the LLM is going to translate that vector representation back into human-readable text, generating the output sequence word by word.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=162)** The output sequence is generated one word at a time, with each new word being generated based on the previous words in the sequence.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=171)** The quality of the generated text depends on the size in terms of the number of parameters of the model and the amount and quality of training data that was used to train the model, as well as how many tokens were seen during training.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=186)** I just want to take a moment to talk about randomness, variation and human influence in LLM outputs.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=192)** While LLMs inherently possess a element of randomness, which leads to varied responses for the same query, humans do have some tools to influence and refine these outputs.
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=206)** The balance between machine unpredictability and human control is achieved through parameters like temperature, top-k, and top-p.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=217)** The temperature parameter is what controls the model's, quote unquote, creativity.
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=222)** A lower temperature makes the model more deterministic.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=225)** As the temperature increases, the model introduces more variability.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=230)** For instance, at a temperature of zero, the model might consistently complete the phrase The sky is, with blue.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=239)** As you increase the temperature, the model might produce varied outputs like the sky is falling or the sky is filled with stars.
>
> **[4:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=249)** You could, of course, always pick the token with the highest probability, but that might get the model stuck in a repetitive loop, and that's where parameters like top-k and top-p come in.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=260)** By adjusting these parameters, you can control the breadth of potential outputs.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=265)** So top-k is going to restrict the model to pick from the top-k tokens sorted by probability.
>
> **[4:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=271)** In contrast, top-p selects based on the cumulative probability of top tokens.
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=278)** So a lower temperature means less randomness.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=281)** A temperature of zero will almost always yield the same output, and lower temperatures, which are less than one, are appropriate when performing tasks that have a, quote unquote, correct answer, like answering questions or summarization, or if you really need the model to stick to a particular output.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=299)** Top-k is more rigid, and that's going to focus on the most probable tokens.
>
> **[5:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=304)** Top-p is more flexible, which considers tokens whose probabilities add up to some threshold p.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=313)** These parameters are going to allow you to balance deterministic outputs and creative variability.
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=320)** While LLMs might inherently lean towards randomness, these tools offer a degree of predictability and control, ensuring that LLMs' outputs align more closely with your intent.
>
> **[5:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=334)** Language models are powerful tools for generating text and understanding language, and they typically follow a three-step process.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=341)** Encoding, prediction, and decoding.
>
> **[5:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=344)** We can balance creativity and control and their outputs by adjusting parameters like temperature, top-k and top-p.
>
> **[5:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=351)** These models play a crucial role in our digital world, from search engines to virtual assistants and continue to advance AI and natural language processing.
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/how-do-language-models-generate-text?u=76281980&t=361)** Having a little bit of an understanding of your workings is going to empower you to maximize their potential and evaluate their outputs effectively, which will shape the future of technology and communication.

> [!info]- Semantic Content
>
> **Env Vars:** llm (10)
> **Code Keywords:** self (1), function (1), finally, (1), yield (1), continue (1)
> **Analogies:** for instance (2)
> **CLI Commands:** cat (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Base LLMs vs. instruction-tuned LLMs
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=0)** - [Instructor] In this course, we'll primarily be working out of Jupyter Notebooks.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=5)** There's a couple of ways that you can run a Jupyter Notebook.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=8)** One is, of course, you could download the Jupyter Notebook and run it locally on your own machine.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=14)** Or if you'd prefer, you can go to Google Colab and run the notebooks there.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=18)** So you'll have to go to Colab.research.[google.com](https://google.com) if you choose to run it in Google Colab.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=26)** Please ensure that you do have a Gmail account or a Google account.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=31)** That's the only way you'll be able to use Colab.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=34)** But once you've gone ahead and done that, all you've got to do is hit the Upload tab, go to Browse, pick whichever notebook it is that we're working on, and it'll upload.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=46)** And you can work along with me, like so.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=50)** And that's all you've got to do.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=52)** I think it's important for you to know the difference between a base instruction tuned and chat tuned language model.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=60)** And the best way to get a good feel of the difference between these is just through some code.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=66)** So that's what we're going to go ahead and do here.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=68)** First thing we want to do is install the huggingface_hub and langchain.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=74)** We'll import a number of libraries that we need to be successful for this section.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=79)** Now, if you haven't already, you're going to need to sign up for a Hugging Face.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=83)** So the way you could do that is just by going to [huggingface.co](https://huggingface.co).
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=89)** Just click on Sign Up, and you'll be prompted to enter some information here.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=95)** Once you enter in that information, you can go to your profile up here.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=101)** Click on your name.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=102)** Go to Settings.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=104)** Scroll down to Access Tokens.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=106)** And then just go ahead and copy that access token, and you'll paste that here.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=113)** So Hugging Face, there's a couple of ways you can work with models from Hugging Face.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=117)** One, probably the most common way is to just download the models locally and run it using their Transformers library.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=127)** Another way is actually Hugging Face has inference endpoints.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=130)** So not all the models that are available on the model hub are available through the inference endpoints.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=136)** So that's something to keep in mind.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=137)** Just for this section, making it so that we're just using APIs here so you don't need to worry about having a GPU, we are just going to use the Hugging Face inference endpoint here.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=147)** You'll learn about this as we progress along the course so don't worry too much about it right now, but this is just helping us set up a chain to generate text.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=157)** So let's start by seeing a base model in action.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=164)** So a base language model, these are essentially the starting point of the "process," right?
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=171)** These base language models are designed to predict the next word in a sequence based on the training data they've been exposed to.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=177)** However, they're not tailored to answer questions, carry out conversations, or solve problems.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=182)** So for instance, if you give a prompt, like, "write a story about some place," a base LLM might complete the sentence in a way that's related to the topic, but it won't answer a specific question, engage in dialogue, or really follow the instruction the way that you intended to.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=199)** Some examples of base LLMs, GT3, GT2, you know, in this case we're using Mistral 7B.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=207)** You know, these are language models that just have been trained on vast, diverse data sets.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=212)** Throughout this process, they really get a good understanding of the patterns in human language, and so they're able to predict the next token or the next word with ease.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=224)** So the thing about these base language models, again, is that they could sometimes struggle with specific prompts or instructions like tone or keyword.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=232)** So in this case, we are going to use a base model, Mistral 7B in this case.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=238)** And we're going to pass it this input story, sorry, this input prompt, "write a story about the Dasuya Punjab."
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=244)** And you can see here that it's not really following the instruction, it's kind of just completing the text for us.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=251)** It's kind of just given us a little bit of factual information about this place, which it could be making some stuff up here, but that's okay.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=260)** Now let's see what happens within instruction tuned LLM.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=264)** So an instruction tuned LLM, they're developed from the base LLM through further training and what's called "fine tuning," to follow specific instructions that are provided in the input, rather than merely just, you know, predicting the next word in a token.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=281)** So they're specialized in answering questions or executing commands.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=284)** So for instance, they will respond appropriately to prompts like, "write a story about such and such place."
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=290)** So to create an instruction tuned LLM, you take a base LLM, and then you train it further using a large data set that covers sample instructions and the expected responses.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=302)** And so this further training is going to help the model understand and execute instructions that are provided in the input.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=311)** So the instruction model that we're going to use here is Mistral 7B Instruct version 0.2.
>
> **[5:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=318)** Interesting thing to keep in mind with these language models is the use of special tokens.
>
> **[5:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=324)** And we'll see the effect of these in a second.
>
> **[5:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=326)** But remember the prompt here was "write a story about Dasuya Punjab."
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=330)** And here we can see it's actually writing a actual story, right?
>
> **[5:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=334)** "It's a small town, nestled in here, blah, blah, blah."
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=337)** You know, it has more of a story feel than what was up here for the base language model output, where it was just kind of stating facts.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=345)** So Mistral 7B Instruct actually, and most base language models that are kind of on the smaller range, will have special tokens that you need to prepend and append them with.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=357)** And I just want to take a moment here to look at the difference in in generation.
>
> **[6:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=362)** So here Mistral is actually, you know, if you go to their model card on Hugging Face, they say that in order for you to take advantage of the instruction tuned, you should start your sequence with these special tokens, and end your sequence with this special token.
>
> **[6:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=377)** And you can see here by including these special tokens, it does a far better job at following the instructions.
>
> **[6:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=385)** So now just something real subtle, I'm just including an extra white space here and an extra white space here.
>
> **[6:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=391)** And you would think that the model is going to output pretty much the exact same thing that it does up here, but you know, you'll be surprised that it actually doesn't.
>
> **[6:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=401)** So you know, you could see that it's a bit different than that.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=405)** So something interesting to keep in mind.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=409)** It's a little nuance of working with these smaller language models and it could be extremely frustrating, but such as the way when you're working on language models, and you'll get used to it.
>
> **[6:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=419)** And finally, there's the chat tuned LLMs.
>
> **[7:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=421)** You know, classic example of chat tuned LLM, of course, is ChatGPT.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=425)** And you can see the history that I have here with ChatGPT, where I ask to write a story, it writes a story with a lot of veracity, and then I can tell it, you know, "Actually, make it about a man named Harpreet."
>
> **[7:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=439)** And you know, we could change it accordingly.
>
> **[7:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=442)** So it has much more of a conversational feel to it.
>
> **[7:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=447)** So this is something important to keep in mind.
>
> **[7:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=448)** If you go up to base model and try to interact with it like it's a chat model, you'll be disappointed.
>
> **[7:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=454)** Likewise, if you have an instruction model and you try to interact with the instruction model as if it was a chat model, you might be frustrated that it does not remember any of the chat history.
>
> **[7:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/base-llms-vs-instruction-tuned-llms?u=76281980&t=463)** But this is a good distinction for you to understand, and hopefully you enjoyed this session.

> [!info]- Semantic Content
>
> **Env Vars:** llm (7), gpu (1), gt3 (1), gt2 (1)
> **UI Navigation:** go to (6), click on (2), scroll down (1)
> **Tools:** colab (4), jupyter (3)
> **Code Keywords:** let (2), case, (1), case. (1), pass (1), finally, (1)
> **Warnings:** keep in mind (4)
> **Analogies:** for instance (2), such as (1)
> **URLs:** [google.com](https://google.com) (1), [huggingface.co](https://huggingface.co) (1)
> **Exercise Files:** download the (2)

#### Training, fine-tuning, and in-context learning
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=0)** - [Presenter] In the previous section, you heard me talk about base, instruction-tuned, and chat-tuned models.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=6)** When you're working with large language models, it's important that you familiarize yourself with key terms that are fundamental to understanding their functionality and development.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=15)** These terms include pre-training, fine-tuning, in-context learning, and retrieval-augmented generation.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=22)** Understanding these concepts is crucial for anyone working with or studying large language models.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=29)** Let's start by talking about pre-training.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=31)** So pre-training is the initial process of teaching a language model to understand and generate human-like text.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=39)** It involves feeding a massive dataset of text to the model.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=43)** The text can come from books, website, or other written material.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=48)** The primary goal in this phase is to enable the model to recognize patterns in language, including grammar, word usage, and stylistic elements.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=58)** Through this pre-training process, the model is going to develop a base understanding of language, which it can use to generate coherent and contextually-appropriate responses.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=71)** Fine-tuning is adjusting the base model to specialize in specific tasks or styles of text, or to tailor the behavior of a model.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=83)** This process involves training the model further on a more specialized dataset.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=88)** So for example, if the goal is to make the model proficient in legal language, it would be fine-tuned on legal documents.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=96)** Or if you wanted to make a model that is capable of following instructions, you would take that base language model and further train it on a instruction following dataset.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=108)** Likewise, if you want to take a base model and tune it for chat purposes, you'd use a chat dataset that has examples of multi-term conversations.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=117)** In either one of those situations, the goal of fine-tuning is to adapt the general language understanding of the model to specific domains, styles, or applications.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=130)** The model becomes more accurate and relevant in the context of the specialized data it was fine tuned on.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=137)** In-context learning refers to the ability of the model to adapt and respond based on the immediate context provided in the prompt.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=147)** This doesn't involve additional training.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=150)** It just relies on the model's existing knowledge and its ability to interpret and respond to the context within a given input.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=159)** So to enable the model to understand and respond appropriately to new unseen prompts by leveraging context is the main goal here.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=169)** So the model can then generate responses that are relevant to the specific prompt, even if the prompt presents information or asks for a style of response that the model wasn't explicitly trained or fine-tuned on.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=184)** In essence, training provides the foundational language understanding.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=189)** Fine-tuning adapts this understanding to specific domains or styles.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=194)** And in-context learning allows the model to apply this understanding flexibly based on the immediate input it receives.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=204)** Then there's also retrieval-augmented generation, also known as RAG.
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=208)** RAG is a hybrid approach that combines language models with traditional information retrieval techniques.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=215)** So this is going to enhance a language model's responses using external data.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=221)** So RAG embeds a dataset into vectors and then stores that into vector database.
>
> **[3:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=227)** Upon receiving a query from the user, it's going to search the vector database for contextually-relevant information and then take that information and stuff it into the prompt of the language model so that we can augment that prompt.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=244)** The goal here is to provide more accurate, context-aware, and up-to-date responses, especially when dealing with specific, detailed, or rapidly-changing information.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=256)** RAG results in responses that are enriched with external data.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=260)** This is going to reduce inaccuracies and enhance the relevancy of the information provided by a large language model.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=268)** So to sum it all up, grasping the core concepts of pre-training, fine-tuning, in-context learning, and retrieval-augmented generation is super important for effectively working with and understanding large language models.
>
> **[4:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/training-fine-tuning-and-in-context-learning?u=76281980&t=280)** Each term here has a unique aspect of LLM development, and it reflects the intricate balance between foundational learning, specialized adaptation, contextual responsiveness, and data-enriched generation that defines how AI engineers are using language models in their applications.

> [!info]- Semantic Content
>
> **Env Vars:** rag (4), llm (1)
> **Definitions:** refers to (1), known as (1), is a  (1)
> **CLI Commands:** make (2)
> **Code Keywords:** let (1), super (1)
> **Analogies:** for example (1)
> **Speakers:** - [presenter] (1)

#### Prompt engineering
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=0)** - [Presenter] Prompt engineering and in-context learning are related, but distinct concepts.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=6)** And in this module, you get a high-level overview of what prompt engineering is.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=12)** Prompt engineering involves strategically crafting and structuring the input or prompt to a language model to guide it towards generating a specific type of response.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=23)** This is like giving detailed instructions to achieve a desired output.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=29)** In-context learning refers to the model's ability to understand and respond to new information or requests based on the context provided within the prompt itself.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=40)** It's about the model's capability to adapt its responses based on the input without additional training.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=47)** So in essence, prompt engineering is the art and science of crafting effective prompts to guide LLMs in generating desired outputs, while in-context learning is a characteristic of the model itself, describing how it processes and responds to the input it receives.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=65)** The clearer and more specific your prompts, the better the final output.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=70)** In the context of LLMs, prompt engineering ensures that the model understands the user's intent and delivers accurate and relevant responses.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=80)** So why is prompt engineering important?
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=83)** Well, at its core, prompt engineering is about communication.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=87)** It's the bridge between human intent and machine understanding.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=90)** A well-crafted prompt can guide an LLM to produce accurate, relevant, and context-aware responses.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=100)** On the other hand, a poorly-designed prompt can lead to ambiguous or incorrect outputs.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=106)** Thus, mastering prompt engineering is essential for anyone looking to leverage LLMs effectively.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=115)** Prompt engineering, which is the process of generating responses from large language models by providing them with specific inputs, has undergone significant advancements since its inception.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=127)** Initially, the main focus of prompt engineering was on formulating the right questions to extract the desired answers from a model.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=136)** With the evolution of large language models, the techniques for prompting have improved.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=142)** With the introduction of early large language models, prompts still function mainly as queries to extract information.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=150)** But as these models evolved, so did the intricacies of prompt crafting.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=155)** The development of models like GPT-3 marked a significant shift in large language models.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=162)** Unlike its predecessors, GPT-3 could generate responses that weren't explicitly present in the training data, indicating an ability to generalize from input prompts in more abstract ways.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=175)** This advancement led to new prompting techniques, such as zero-shot, one-shot, and few-shot learning, where models could perform tasks without extensive prior examples.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=188)** Engineers can now craft prompts that not only requested information, but also structured tasks to guide the LLM towards a particular style of response or reasoning path.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=202)** As prompt engineering has continued to develop, it's become a crucial component of LLM utility, moving beyond simple question and answer formats to include more creative and complex interactions.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=217)** The focus has shifted to optimizing prompts for the best possible outcomes.
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=222)** Recognizing that the way a prompt is structured can significantly influence a model's output.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=230)** While basic prompting techniques have their place, they might fall short in some situations.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=235)** This is where advanced techniques come into play.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=238)** For example, chain-of-thought prompting.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=241)** This technique improves a language model's reasoning capabilities.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=245)** By providing examples paired with a rationale, LLMs can generate a rationale along with their answers, enhancing their reasoning performance.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=256)** LLMs can also be integrated with external databases to reduce errors and enhance the accuracy of responses.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=264)** This gives them a richer context and ensures that their information is relevant and accurate.
>
> **[4:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=272)** The future of prompting includes developing more intricate prompts that can handle a wide range of tasks and inquiries, and enhance an LLM's ability to interpret and respond to these prompts accurately.
>
> **[4:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=286)** Prompt engineering is not just a technical skill, it's an art.
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=290)** It requires a deep understanding of a model's capabilities and what your desired outcome is.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=297)** Understanding prompt engineering is crucial whether you're a developer, researcher, or AI enthusiast.
>
> **[5:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=303)** It's the key to unlocking the true potential of LLMs and ensuring that they serve us in the best way possible.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=310)** As LLMs grow in complexity and capability, prompt engineering becomes even more critical.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=317)** LangChain, with this forward-thinking approach, an extensive toolkit, is poised to lead this change.
>
> **[5:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-engineering?u=76281980&t=324)** By simplifying the development process and fostering a collaborative ecosystem, LangChain is shaping the future of prompt engineering and redefining how we interact with AI.

> [!info]- Semantic Content
>
> **Env Vars:** llm (4), gpt (2)
> **Code Keywords:** module (1), function (1), abstract (1)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [presenter] (1)


### 3. Components of LangChain

#### What is LangChain?
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=0)** - [Instructor] Understanding and generating human-like text is a remarkable achievement, made possible by large language models like ChatGPT and GPT-4.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=11)** These models offer many possibilities, from creating human-like text to understanding complex queries, and revolutionizing our interaction with machines.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=22)** However, utilizing these models in practical applications can be challenging, which is where LangChain comes in.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=29)** It's a solid framework that's essential to harness the potential of these powerful tools.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=36)** LangChain's a framework for developing applications powered by large language models.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=41)** It enables applications that are context-aware.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=45)** One of the standout features of LangChain is its ability to connect to context sources.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=51)** Context can be prompt instructions, few short examples, or content to ground its response in.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=59)** Whether you're integrating with a database, a cloud storage solution, or online repository, LangChain ensures the context is accessible and ready for processing.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=70)** It also enables applications that are able to reason, meaning applications are relying on a large language model to reason about how to answer based on provided context, what actions to take, et cetera.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=86)** This means that the framework can dynamically interact with this environment, making applications feel alive in responses.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=94)** It's not just about answering a query, it's about understanding the context and providing a solution.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=100)** The LangChain library consists of several packages including the core libraries, LangChain templates, LangServe, and LangSmith.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=110)** These products work together to make an entire application lifecycle simple and efficient.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=117)** In this course, we're going to focus on the LangChain Python library which offers composable tools and integrations for working with large language models.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=126)** These components are modular and easy to use, whether you're using the rest of the LangChain framework or not.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=134)** Additionally, built-in assemblages of components called Off-the-Shelf chains, allow you to easily accomplish higher level tasks.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=143)** You can get started immediately with these prebuilt chains or customize them using the individual components to create your own chains.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=152)** The LangChain Library consists of several different packages including the base abstractions and the LangChain expression language.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=160)** In LangChain core, third party integrations in LangChain community and chains, agents, and retrieval strategies that make up an applications' cognitive architecture in LangChain.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=173)** LangChain templates is a collection of easily deployable reference architectures, and these are just designed to streamline various tasks.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=184)** LangServe is a library that enables the deployment of LangChain applications as a REST API.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=193)** LangSmith is a developer platform that allows debugging, testing, evaluation, and monitoring of chains built on any LLM framework and seamlessly integrates with LangChain.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=207)** We'll have a brief intro into this in the prompt management section of the course.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=212)** These products work together to make the entire application lifecycle simple and efficient.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=217)** First, you can write your applications using LangChain and start quickly with the reference templates.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=224)** Next, LangSmith can be used to inspect, test, and monitor your chains so you can make improvements and deploy with confidence.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=232)** Finally, you can turn any chain into an API with LangServe.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=237)** LangChain offers a modular, easy-to-use and customizable framework for working with large language models.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=244)** Its main value proposition includes composable tools, integrations, and prebuilt chains for higher level tasks.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=253)** LangChain is a powerful tool in the AI toolkit.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=256)** By simplifying the integration of LLMs into real-world applications, LangChain is paving the way for a future where our interactions with machines are more natural, intuitive, and productive.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=269)** As we stand at the cusp of a new era in human-machine interaction, LangChain and prompt engineering will undoubtedly play pivotal roles.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/what-is-langchain?u=76281980&t=279)** For developers, businesses and curious minds, now is the time to dive deep into the fascinating world and framework of LangChain and really unlock the potential of large language models for your business and for your customers.

> [!info]- Semantic Content
>
> **Definitions:** is a  (5), means that (1)
> **CLI Commands:** make (4), python (1)
> **Env Vars:** api (2), gpt (1), rest (1), llm (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### LangChain overview
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=0)** - LangChain has several core modules.
>
> **[0:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=3)** A module in LangChain is a reusable component that provides specific functionality for building AI systems.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=11)** Each of the following modules abstracts away complex implementation details and exposes a simplified API.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=19)** Models allows you to interface effortlessly with language models.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=25)** Retrieval allows you to access application-specific data seamlessly.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=30)** Chains allow you to construct sequence of calls with ease.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=34)** Agents let chains smartly select tools based on high-level directives.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=40)** Memory helps you maintain application state between chain runs.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=44)** And callbacks, for example, will allow you to stream and log every chain step.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=50)** So let's just do a brief overview of each of these modules, and then after this lesson, we'll go into the code for each one of these.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=58)** To develop a language model-powered application, you need a language model.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=63)** Model I/O makes it easy to swap and dynamically build prompts, models, and output parsers.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=70)** The module includes the following components.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=73)** Prompts, which are just input messages that guide the model's response.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=78)** Prompt templates are predefined recipes for generating prompts, and LangChain has a number of different prompt templates that we can use.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=85)** We will do a very, very deep dive into those prompt templates in a future session.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=92)** Language models.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=93)** The LangChain framework provides interfaces for base LLMs and chat models.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=98)** LLMs can take a text string as input and then return a text string, while chat models take a list of chat messages as input and return a chat message as output.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=110)** Then there's also output parsers.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=112)** So after an LLM returns text, you can use an output parser to structure the output and obtain more structured outputs if needed.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=122)** Many applications that utilize LLMs require specific domain knowledge that's not present in the original training dataset.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=130)** The retrieval module is responsible for sourcing, preparing, embedding, storing, and retrieving external data to enhance the language model's generation process.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=140)** It offers features such as basic retrieval and advanced techniques like retrieval augmented generation.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=147)** So this is a module that contains all the document loaders, transformers, text embeddings, vector stores, and retrievers that are all there to help you fetch relevant documents and improve the accuracy of generated answers.
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=163)** You can use a large language model in isolation for simple applications, however, chaining LLMs together with other components is a better solution for more complex applications.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=175)** This approach allows you to build modular and maintainable applications.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=179)** So to achieve this, you can use LangChain's chains.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=183)** So a single LLM can handle simple prompts and simple applications, but more complex ones require chaining LLMs with other components.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=192)** So for instance, you might create a chain that receives user input, formats it with the prompt template, and then passes the formatted response to another LLM instance.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=202)** That way you can build more complex chains by combining multiple chains or chains with other components.
>
> **[3:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=210)** Agents module enables the creation of AI agents that can converse naturally and perform real-world actions using tools.
>
> **[3:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=218)** The module manages conversation flow, tool integration, and memory, and combines language model capabilities with executable tools.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=226)** The agent's core components include the base agent class, some tool abstractions, the agent executor, as well as conversational agents and various other agent types.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=237)** Memory module in LangChain allows agents to maintain context and reason over time.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=242)** It provides interfaces for storing agent states across multiple inferences.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=248)** It handles the complexity of different storage options through a simple unified API.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=252)** And it's essential for LangChain agents to reason.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=257)** The callbacks module provides a way to hook into events and LangChain to enable logging, monitoring, streaming, and other custom integrations.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=265)** Note that we're not going to get into callbacks for this course.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=270)** LangChain offers a suite of core modules that empower developers to harness the full potential of language models.
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=278)** These modules collectively provide a powerful toolkit for building intelligent, context-aware applications.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langchain-overview?u=76281980&t=285)** And in the rest of this section, we are going to jump right into code and start seeing all of this in action.

> [!info]- Semantic Content
>
> **Code Keywords:** module (8), let (2), require (2), interface (1), this, (1)
> **Env Vars:** llm (3), api (2)
> **Definitions:** is a  (3)
> **Analogies:** for example (1), such as (1), for instance (1)
> **Exercise Files:** template (1)
> **Warnings:** note that (1)
> **Speakers:** - langchain (1)

#### Model I/O: Interface with language models
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/model-i-o-interface-with-language-models?u=76281980)

#### Retrieval: Interface with application-specific data
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=0)** - [Instructor] Now that we know how to send data to a language model and parse that data, let's talk about another core component of LangChain.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=10)** This component is called retrieval.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=13)** So we'll start the notebook off by installing our dependencies, importing a couple of preliminaries that we need, set our OpenAI key, download a document.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=23)** That's essentially what we're doing here.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=24)** The document that we're downloading is the golden_hymns_of_epictetus.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=28)** We're going to go ahead and just parse this text file to a Python object.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=34)** That's pretty much all we're doing.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=35)** Just cleaning this up a little bit.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=38)** And you can see here that this is a document of 23,500 words.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=44)** So real quick, I want to give you a high-level overview of this task called retrieval-augmented generation.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=52)** So language models are trained on kind of a fixed dataset, right?
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=57)** There's so much data out in the world that a language model did not have access to during training.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=63)** For example, you might be working at a company, your company's internal documentation most definitely was not available to a language model during its pre-training phase, but it would be nice to give a language model access to that information.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=76)** And so this is where retrieval comes in.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=78)** This is where this task of retrieval-augmented generation fits in.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=82)** Essentially, the flow is like this.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=83)** We've got some external sources of data.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=86)** We're going to load that external source of data.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=89)** We're going to transform that data by splitting it into chunks.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=92)** We'll take those chunks of data, create vector embeddings from it.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=96)** We're going to take those vector embeddings, push them to a vector store.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=100)** And then once it's in the vector store, we can retrieve relevant documents to a query from the vector store using some type of similarity.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=111)** You know, it could be cosine similarity, BM25.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=113)** There's a number of different retrieval methods.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=116)** That's a high-level overview of how retrieval-augmented generation works.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=120)** But let's kind of dive a little bit deeper into that.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=123)** Let's talk about retrieval in LangChain.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=124)** Essentially, it's just the process of fetching and retrieving relevant data or documents from an external source, right?
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=130)** And like I mentioned before, this is useful because it's going to allow you to incorporate external data into the language model's context.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=138)** Because if we're providing additional context and information that's not present in the training data, you're going to enhance the generation process and improve the quality and relevance of the generated response.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=150)** So to start off with, we need document loaders, and that's what we're going to talk about right now.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=156)** So document loaders and LangChain are used to load data from various sources into what's called a LangChain document object.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=164)** A document is essentially a just a piece of text with some associated metadata.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=168)** And document loaders give us a convenient way to fetch data from these sources, which could be text files, web pages, video transcripts, database.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=177)** It could be a wide number of things.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=179)** And the abstractions in LangChain just make it easy for us to connect to this data and use that data as context for language model.
>
> **[3:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=187)** The most simplest document loader is the TextLoader.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=192)** All it does is reads in a file as text and places it all into one document object.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=198)** And so we're going to do that here with the document that we just downloaded, right?
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=204)** So we see here that this thing that we have, this thing that we've loaded is a list.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=211)** And this list, every element of this list is a LangChain document object.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=217)** There are a ton of different document loaders in LangChain.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=221)** I encourage you to go check out the documentation.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=225)** You can see here that LangChain provides connection to a wide variety of data sources.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=231)** So go ahead and check that out and know that you have options available to you.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=236)** So how does a document loader work in LangChain?
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=239)** So you're going to bring in your document loader of choice, enter LangChain environment, instantiate the loader, and then use that loader's load method to turn files into LangChain documents.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=250)** The whole purpose of a document loader is just to tweak the document to fit your model's needs.
>
> **[4:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=254)** And so part of what we need to make that happen is something called a text splitter.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=258)** So a text splitter is just going to cut up long chunks of text into manageable, meaningful parts.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=264)** This helps keep related text together and fit text into the model's processing window.
>
> **[4:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=271)** We are going to make use of what's called the RecursiveCharacterTextSplitter.
>
> **[4:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=275)** It smartly splits up text into chunks, and then it uses a series of separators.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=282)** If a chunk is too big, it's going to try a different separator.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=285)** And this process is repeated until all the chunks are the right size.
>
> **[4:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=289)** So a high-level overview of splitting, how it works is we are going to select the best separator to divide the text, and then it's going to continue to split any oversized chunks recursively.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=305)** We're going to look at the character count or tokens to size up those chunks.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=309)** Then we're going to allow for some overlap between chunks for some contextual continuity.
>
> **[5:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=315)** And then we can optionally track the start index of chunks for reference.
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=320)** This gives us a nice way to kind of fetch what we need from a document, like we don't need to pull in the whole text, right?
>
> **[5:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=333)** So let's see this in action.
>
> **[5:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=336)** Here, we are going to define a chunk_size of 1,000 with an overlap of 50.
>
> **[5:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=343)** The length_function we need to define as well.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=345)** This is the regular python length_function.
>
> **[5:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=347)** And we're going to add the start index.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=349)** And let's take a look at what happens here.
>
> **[5:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=351)** So we've split up our text, and here's what we have.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=357)** So these are two separate chunks of text.
>
> **[5:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=359)** We can see here, are these only the works of Providence within us?
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=363)** What word suffice, so on and so forth.
>
> **[6:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=365)** And so these are what these text chunks look like.
>
> **[6:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=368)** Now that we have the text chunks, we're going to need to do embeddings.
>
> **[6:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=372)** So let's go ahead and talk about that.
>
> **[6:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=374)** So text embedding models for retrieval in LangChain are used to represent text documents in a high dimensional vector space, where the similarity between vectors are going to correspond to the semantic similarity between corresponding documents.
>
> **[6:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=389)** And so these models are going to capture the semantic meaning of text and allow for an efficient retrieval of the similar documents that are based on embeddings.
>
> **[6:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=399)** So we're not going to go too deep into embeddings conceptually, but you're free to look that up.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=405)** We'll just essentially treat it as a black box here.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=409)** Once we've instantiated our embedding model, we need to construct a vector store and a vector store retriever.
>
> **[6:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=416)** And to construct a vector store retriever, you first need to load documents using the document loader.
>
> **[7:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=422)** Then you're going to split the documents into smaller chunks using the text splitter.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=425)** And then now you can finally generate vector embeddings for the text chunks using an embeddings model like OpenAI.
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=432)** And then finally, you're going to create a vector store using those generated embeddings.
>
> **[7:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=436)** Once that vector store is constructed, you're going to use it as a retriever to query the results.
>
> **[7:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=442)** So LangChain abstracts a lot of that away from us, and it's just a one-liner.
>
> **[7:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=447)** And this one-liner is going to essentially turn our texts into embeddings and push it into a vector store.
>
> **[7:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=454)** That's all that's happening here.
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=455)** We're using a FAISS vector store.
>
> **[7:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=457)** So that's Facebook AI Similarity Search.
>
> **[7:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=460)** I believe that's what that stands for, but it's just an in-memory vector store.
>
> **[7:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=464)** For this course, that's all we're going to use is in-memory vector stores.
>
> **[7:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=468)** We're not going to use anything fancy like Weaviate or Pinecone or anything like that.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=471)** I'm mostly going to stick to FAISS.
>
> **[7:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=474)** Great.
>
> **[7:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=475)** So now that we have instantiated a vector store, let's talk a little bit more in depth about vector store retrievers.
>
> **[8:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=481)** Once a vector store is constructed, you're going to use this as a retriever to query the text.
>
> **[8:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=487)** So the vector store retriever supports a lot of different methods, including similarity_search, max_marginal_relevant_search.
>
> **[8:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=496)** You know, you can also set a similarity_score_threshold or specify the number of top documents to receive.
>
> **[8:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=502)** What you see here below, we're just going to use a similarity_search method of the vector store, and you can think of this as a search tool.
>
> **[8:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=509)** You give it a piece of text, tell it how many results you want, and then it's going to return a list of documents that are most similar to the given text.
>
> **[8:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=517)** So if you've got specific requirements, like you only want documents from a certain author, you can use filters to specify that.
>
> **[8:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=524)** So here what we're going to do is we're going to pass this query and we're going to fetch the most relevant documents from that text that we've embedded that answered this question.
>
> **[8:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=537)** And if you're curious about the different settings that you can pass to the vector store, you can just do this, go to vector store similarity_search, copy, paste that here, hit it with the question mark.
>
> **[9:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=550)** You can see the different arguments that we have here.
>
> **[9:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=553)** So we're using just the default arguments.
>
> **[9:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=555)** So we're hitting it and getting the top four documents.
>
> **[9:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=558)** I'm not using any filters. That's pretty much it.
>
> **[9:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=562)** Fetch_k is a number of documents to fetch before filtering.
>
> **[9:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=565)** So what's happening is that the vector store retriever is going to go in there and it's going to fetch 20 documents.
>
> **[9:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=570)** And then from those 20 documents, it's going to filter it down to four of the most relevant documents, essentially.
>
> **[9:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=577)** And there we have that.
>
> **[9:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=580)** All right, now that we know how to retrieve context from a vector store, it is time to generate some text.
>
> **[9:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=590)** So to generate text, we essentially need to construct a prompt.
>
> **[9:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=594)** And this prompt needs to be able to accommodate the retrieve text that we just got from our vector store retriever.
>
> **[10:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=602)** So we'll go ahead and do our imports.
>
> **[10:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=604)** We're going to use a RetrievalQA chain, we're going to send you a prompt template, and we're going to use ChatOpenAI.
>
> **[10:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=610)** The template that we're going to use is going to look like this, string of text that just says, "Use the following pieces of context to answer the question.
>
> **[10:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=617)** If you don't know the answer, just say, 'Ah, snap homie.
>
> **[10:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=619)** I ain't going to front. I don't know,' and don't try to make up an answer.
>
> **[10:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=622)** Use three sentence maximum, relevant analogies, and keep the answer as concise that as possible."
>
> **[10:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=627)** And this is where we are going to inject the retrieved context right here.
>
> **[10:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=634)** This is where we're going to inject our question.
>
> **[10:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=637)** All right, so now that we've got our template constructed, we are going to create a QA prompt.
>
> **[10:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=643)** This is just going to be a prompt template that's based on the template we just saw.
>
> **[10:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=647)** Instantiate our large language model.
>
> **[10:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=649)** Just use gpt-4 in this case with the temperature of zero.
>
> **[10:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=652)** And then we're going to set up a RetrievalQA chain.
>
> **[10:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=655)** We're going to pass the RetrievalQA chain, our language model, the vector store retriever, and then the prompt.
>
> **[11:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=663)** We have our query here, "What do grief, fear, envy, and desire stem from?"
>
> **[11:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=668)** And then we're going to take this query and fetch a result.
>
> **[11:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=674)** And here we have the result, "Grief, fear, envy, and desire stem from the mind's focus on external factors and the lack of inner tranquility."
>
> **[11:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=682)** So essentially what's happened here is that all the context we saw that, for example, this context that we saw gets injected right here, our questions there, and then we get the answer out.
>
> **[11:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=697)** So we're using retrieve context to augment our prompt.
>
> **[11:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=701)** So the preferred method to do anything nowadays in LangChain is to use the LangChain expression language.
>
> **[11:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=706)** And so that's what we're going to do here.
>
> **[11:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=708)** I'm going to show you how to do retrieval using the LangChain expression language.
>
> **[11:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=714)** So first thing we do is going to integrate context in the question.
>
> **[11:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=718)** So we have a prompt template.
>
> **[11:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=719)** that's going to include placeholders for the context in question.
>
> **[12:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=723)** Then we're going to set up a retriever with a in-memory store for document retrieval, we're going to create what's called a runnable component.
>
> **[12:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=729)** Then in this case, we're going to use a RunnableParallel that's going to combine document search results with the user's question, and a RunnablePassthrough, which is going to pass the user's question unchained to the language model.
>
> **[12:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=741)** And the steps are like this.
>
> **[12:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=742)** Essentially we create a RunnableParallel with two entries, context and question.
>
> **[12:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=747)** We're going to feed this dictionary to the prompt component, which is going to construct a prompt using the user's question and retrieve documents.
>
> **[12:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=755)** The model component is going to evaluate the prompt using the OpenAI LLM.
>
> **[12:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=762)** And then finally, the output parser is going to transform the response into a readable python string.
>
> **[12:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=767)** So it's the end to end process is going from document retrieval and prompt creation to model evaluation and output parsing, and it's a very seamless flow that's going to integrate these components for us using the expression language.
>
> **[13:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=781)** And it looks like so.
>
> **[13:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=784)** You see here, we've got the response from the language model.
>
> **[13:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=789)** I'm not going to go too depth into what runnables are in LangChain.
>
> **[13:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=793)** I encourage you to check out the documentation to learn more about RunnableParallels and RunnablePassthroughs.
>
> **[13:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=799)** For right now, good enough to know that we need these to essentially pass data between our chains and between the components of LangChain.
>
> **[13:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=809)** And there you have it.
>
> **[13:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/retrieval-interface-with-application-specific-data?u=76281980&t=810)** You're now familiar with retrieval in LangChain.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (5), this. (2), finally, (2), this, (2)
> **Code Identifiers:** similarity_search (3), length_function (2), golden_hymns_of_epictetus (1), chunk_size (1), max_marginal_relevant_search (1)
> **CLI Commands:** make (4), python (3), snap (1)
> **Exercise Files:** template (6)
> **Definitions:** is a  (4), is called (1), stands for (1)
> **Env Vars:** faiss (2), bm25 (1), llm (1)
> **Analogies:** for example (2), similar to (1)
> **Documentation:** the documentation (2)

#### Chains: Construct sequences of calls
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=0)** - [Instructor] Let's talk about chains in LangChain.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=4)** So in one sentence, a chain is just an end-to-end wrapper around multiple individual components which are executed in some defined order.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=11)** And these are really core to LangChain.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=14)** They allow you to go beyond just a single API call to a language model, and instead kind of chain together multiple calls in a logical sequence.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=23)** Chains are really what allow you to combine multiple components together to create a single coherent application.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=30)** So some reasons you might want to use a chain is just to break down complex tasks into smaller steps that could be handled sequentially or by different models or utilities, which does not allow you to leverage different strengths of different systems.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=44)** You can also add state and memory between calls.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=46)** So the output of one call can be fed as the input to the next call to provide context and state.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=52)** You can do additional processing like filtering or validation logic between calls.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=58)** It also simplifies the debugging process as well.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=62)** So there's some foundational chain types in LangChain.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=67)** These are the LLMChain, the RouterChain, SimpleSequentialChain, and TransformChain.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=74)** These used to be standalone kind of modules and objects in LangChain, but now we can implement these all using the LangChain Expression Language.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=85)** So we're not going to use the former abstraction for this course.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=91)** We're just going to use LangChain Expression Language for each one of these.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=95)** So let's start now with a LLMChain, right?
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=99)** So now we know that we have the brand new GPT-4 model available to us.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=103)** Let's go ahead and use that.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=105)** And we've talked about a chain before.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=108)** And essentially, at a high level, all the chain does is help you chain together calls to a language model, and we just pass a prompt to a language model.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=120)** And in this simple chain, here's what we're going to do.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=123)** So we're going to go ahead and import OpenAI.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=128)** We're going to import a prompt template.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=129)** We're then going to instantiate a language model.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=133)** In this case, ChatOpenAI, the brand new GPT model that came out today.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=139)** We're going to create a prompt template.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=141)** And this prompt template is going to say, "Write a comedic, parody rap about the following topic:" And topic is going to be our input variable.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=148)** And so the chain is constructed like this, just prompt being passed the language model.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=153)** So when we invoke the chain, we're going to pass the chain a dictionary.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=158)** That dictionary is going to contain the input variable to the prompt template as well as the value for the prompt.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=165)** So in this case, ({"topic": wasabi flavoured saki:}) and let's see what we get.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=174)** All right, so you can see here we get the content out like so.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=179)** So that's nice and all, but why don't we do something to make our lives just a bit easier.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=188)** So I'm going to go ahead and import a StrOutputParser.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=192)** And let's go ahead and copy this chain, this part again, right?
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=199)** And I'm just going to chain a StrOutputParser here and you can just see the difference that we'll have in output.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=212)** And you can see by adding the StrOutputParser here, we get a much cleaner output than what we had up here.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=220)** You see here with the AIMessage content, you know, a better thing to do would've probably saved this to a variable and print it and you could have got, like, a even better printout.
>
> **[3:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=229)** So let's go ahead and just do that real quick just to kind of show you.
>
> **[3:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=233)** So we can go like this.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=237)** I'm just going to wrap this in a print statement.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=242)** All right, and you can see the response here.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=244)** By using the StrOutputParser and wrapping it in a print statement, we get something that looks a lot more visually appealing than what we saw before.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=252)** And here we have a parody rap about wasabi flavored saki.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=259)** All right, so now let's go ahead and use the ChatPromptTemplate.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=267)** And so when we use the ChatPromptTemplate, we pass a list of messages and this list will have the system prompt.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=273)** In this case, "You are PaRappa the Rapper.
>
> **[4:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=275)** You spit hot fire flows like lava."
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=278)** And the human message is, "Write a comedic, parody rap about the following topic:" So let's go ahead and run that chain.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=285)** In this case, I've already attached the StrOutputParser and we'll go ahead and wait on that response.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=293)** So you can see here that we got the output like so.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=299)** Now, if you're like me and you get tired of just waiting for the output all at once, something you could do is actually create a stream.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=307)** And let's see what the streaming looks like.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=309)** And you can see streaming, we kind of see it happen right in front of our eyes rather than waiting for the entire call to language model to complete and just print out all at once.
>
> **[5:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=318)** So you do have that option if you're building like a chat bot for a user interface.
>
> **[5:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=324)** You can have this type of streaming effect if you'd like.
>
> **[5:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=327)** And there you have it.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=328)** We've got our song about wasabi flavored saki.
>
> **[5:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=333)** Now, let's go ahead and talk about routing in LangChain.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=337)** All right, so let's talk about routing in LangChain.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=341)** So, routing is a technique that's going to allow you to create chains of non-deterministic steps where the result of a previous step is going to define the next step.
>
> **[5:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=352)** And so this is helpful to add structure and consistency to an interaction with a LLM.
>
> **[5:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=358)** And there are two main ways to perform routing in LangChain.
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=363)** One is to use a RunnableBranch.
>
> **[6:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=365)** Two is to use a Custom Factory Function that's going to take the input of a previous step and then return a runnable.
>
> **[6:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=373)** So it's important to note that this function should only return a runnable and not execute it.
>
> **[6:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=379)** So, to illustrate both methods, let's consider a two-step sequence, right?
>
> **[6:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=384)** The first step is going to classify an input question as being about literature, history, biology, philosophy, or other.
>
> **[6:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=391)** And then from there we're going to route it to a corresponding prompt chain.
>
> **[6:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=396)** So let's go ahead and set up some prompt templates here.
>
> **[6:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=400)** We'll change this out to be the brand new model that was released.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=405)** And you'll see here that we define some prompt templates, a literature_template, a history_template, biology_template, philosophy_template, and a general_prompt.
>
> **[6:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=416)** So, instantiate that.
>
> **[6:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=419)** And so a RunnableBranch is basically just a list of, you know, a list of condition and runnable pairs.
>
> **[7:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=426)** So it's essentially a list of two pools, a condition, runnable pair and a default runnable.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=431)** So when we invoke this with an input, it's going to evaluate each condition in the list until it finds the first one that evaluates the true, then it's going to run the corresponding runnable with that input.
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=444)** If there's nothing provided, it's going to run the default runnable.
>
> **[7:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=449)** So in this case, the RunnableBranch, you can see here it's just a bunch of two pools where we have the topic and then the associated prompt.
>
> **[7:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=459)** So let's go ahead and construct that runnable prompt_branch.
>
> **[7:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=463)** Now, what we're going to do is define a class that simply just classifies what topic a particular query belongs to.
>
> **[7:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=473)** So we're going to have this classifier function be created, and you can look at the LangChain documentation for this function.
>
> **[7:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=479)** I'm not going to get too into that right now.
>
> **[8:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=483)** Instantiate our language model.
>
> **[8:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=484)** He's the brand new model that was released.
>
> **[8:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=486)** Then we're going to bind this classifier function to the language model.
>
> **[8:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=491)** We're going to have the output parser that's going to parse the output from that function.
>
> **[8:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=496)** And then finally, construct a chain.
>
> **[8:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=499)** And all this chain does is classify the topic of the query.
>
> **[8:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=505)** So now, we're going to construct our final chain.
>
> **[8:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=507)** And essentially, what this final chain is going to do is going to take a user's question, classify what this question is about.
>
> **[8:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=515)** Once we have the classification of what this question is about, we're going to send it to the appropriate prompt template and get a response from the language model.
>
> **[8:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=523)** So let's see that in action here.
>
> **[8:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=528)** So now, we can execute this chain in one of two ways.
>
> **[8:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=531)** One is using the invoke method.
>
> **[8:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=534)** And so as you recall, for the invoke method, we're going to have to wait for the chain to complete before we get a response.
>
> **[8:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=539)** Or alternatively, we can just stream the response.
>
> **[9:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=542)** And because, you know, we're in a video here, we're going to stream it just for the aesthetics.
>
> **[9:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=547)** So the questionnaire is, "Describe the Stoic philosophy for a good life."
>
> **[9:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=551)** And here Stoic philosophy, originate from the ancient Greek, later developed in Rome, so on and so forth.
>
> **[9:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=556)** And it goes here and it gives us the appropriate kind of response.
>
> **[9:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=561)** So, what's happening is this input is going to go in, be classified into one of these particular topics.
>
> **[9:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=569)** Once we figure out what topic this question belongs to, we're going to get the associated prompt.
>
> **[9:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=574)** In this case, the associated prompt here is the philosophy prompt.
>
> **[9:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=579)** And this is going to be the prompt that eventually is sent to the language model, and that's how we go ahead and get our answer.
>
> **[9:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=586)** Next up, we're going to talk about sequential chains in LangChain.
>
> **[9:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=591)** All right, so now let's talk about sequential chains.
>
> **[9:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=593)** So sometimes you might want a series of calls to a language model, and you might want to take the output from one call and use it as the input to another call.
>
> **[10:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=600)** So a sequential chain is going to allow you to connect multiple chains and compose them into pipelines that execute some specific scenario.
>
> **[10:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=610)** So we're going to go ahead and see that in action here.
>
> **[10:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=613)** Of course, change this out to the brand new model that was released on January 25th, 2024.
>
> **[10:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=620)** All right, so what we're going to do is have our necessary imports.
>
> **[10:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=625)** We're going to instantiate our language models and we're going to set up a couple of templates.
>
> **[10:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=630)** One template is for an initial rap.
>
> **[10:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=632)** Another template is for a diss track.
>
> **[10:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=635)** And so now we're going to create a template from the defined prompts.
>
> **[10:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=638)** So prompt_template_one and prompt_template_two.
>
> **[10:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=642)** Next, we're going to define the final chain.
>
> **[10:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=645)** And so how the final chain works is it starts by taking the first prompt template that we define prompt_template_one, passing that to the language model, and using a structured output parser to just get a string.
>
> **[11:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=661)** With that string, we're going to pass it directly to the second prompt.
>
> **[11:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=666)** And then we're going to take that, pass the language model, and get the output.
>
> **[11:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=669)** So remember, this is kind of like the flow that's going to happen.
>
> **[11:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=673)** What we pass into this chain is going to be sent here to the topic.
>
> **[11:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=677)** And so this is going to generate something from the language model.
>
> **[11:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=681)** Once that's generated from the language model, whatever the output is of this prompt template is going to get fed into here.
>
> **[11:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=688)** And then we're going to have a response.
>
> **[11:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=690)** So, to see it in action, of course you can invoke or you can stream.
>
> **[11:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=694)** We are going to stream because it's always more fun to see streaming text.
>
> **[11:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=699)** And what's happening behind the scene, the reason it's taking a little bit of time is that that first call to the language model, right, needs to execute.
>
> **[11:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=709)** Once that's executed, it gets fed to the second prompt.
>
> **[11:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=711)** And what we're seeing in front of our eyes is actually the diss track prompt the response of that.
>
> **[11:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=718)** So that's what we see here.
>
> **[12:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=721)** And so that's what we do with sequential chains.
>
> **[12:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=723)** We're essentially taking the output of one language model call, passing it to another language model call.
>
> **[12:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=728)** And that's basically how it works.
>
> **[12:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=731)** All right, so let's talk about transformation chains.
>
> **[12:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=733)** So very often you might need to modify the inputs as they move from one component to another.
>
> **[12:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=742)** So to illustrate this, we're just going to create a fictitious transformation that receives a lengthy body of text.
>
> **[12:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=750)** It's going to filter out all but the first x number of characters and then send that to a series of steps to summarize it.
>
> **[12:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=758)** So, to complete that, we're just going to download some text from Project Gutenberg, and this is essentially sending the text to a variable called meditations.
>
> **[12:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=769)** You can see here the thing that we're actually downloading is Marcus Aurelius's meditations.
>
> **[12:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=774)** Construct our prompt template, and now we have the runnable.
>
> **[12:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=776)** So the runnable is just going to apply an anonymous function of Lambda to the text and just split it up.
>
> **[13:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=783)** In this case, it's going to take the text, split it by new line characters, and just take, in this case, the characters from position 921 to 1021.
>
> **[13:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=794)** Going to take that, pass into our prompt, which is, "Summarize this text:" Pass that to the language model.
>
> **[13:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=801)** In this case, we're going to pass it to the newest language model from OpenAI.
>
> **[13:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=806)** And we're going to go ahead and have an output.
>
> **[13:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=809)** So I'm going to go ahead and make this, actually use the streaming output.
>
> **[13:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=814)** All right, so we'll do that.
>
> **[13:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=819)** So runnable.stream, and just go ahead and invoke the runnable sequence here.
>
> **[13:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=831)** And so you can see we have the summary for that bit of text.
>
> **[13:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=835)** So now, what we're going to do is have another prompt that just is going to rephrase the text in the style of a '90s gangster rapper.
>
> **[14:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=844)** Of course, we'll update the model that we're going to use and run.
>
> **[14:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=852)** And so essentially it's going to take that text.
>
> **[14:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=855)** In this case, the meditations text.
>
> **[14:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=857)** It's going to take the characters from position 921 to 1021 and then pass it to this prompt where it is going to be asked to rephrase that bit of text.
>
> **[14:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=869)** In the style of 90s gangster rapper passionately speaking to his homies.
>
> **[14:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=874)** And we'll get back a rephrased response.
>
> **[14:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=880)** And there we have it.
>
> **[14:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=882)** Focus on being as real as a Roman, as a dude.
>
> **[14:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=884)** Do your thing with deep seriousness, love, freedom, and fairness.
>
> **[14:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=888)** Awesome. Forget all that other noise in your head.
>
> **[14:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=890)** And there you have it.
>
> **[14:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=893)** A great response, a great rephrasing of Marcus Aurelius meditations.
>
> **[14:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=898)** And there we have it.
>
> **[14:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=899)** So now we've got a good understanding of how chains work in LangChain.
>
> **[15:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=902)** You've seen all of this implemented using the LangChain Expression Language, which is now the preferred method to construct chains in LangChain.
>
> **[15:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chains-construct-sequences-of-calls?u=76281980&t=911)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), pass (10), case, (10), function (7), this, (3)
> **Exercise Files:** template (11)
> **Code Identifiers:** prompt_template_one (2), literature_template (1), history_template (1), biology_template (1), philosophy_template (1)
> **Env Vars:** gpt (2), api (1), llm (1)
> **CLI Commands:** make (2)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)

#### Agents: Let chains choose tools based on high-level directives
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=0)** - [Instructor] Agents in LangChain are systems that use a language model to interact with tools.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=6)** they could be used for tasks such as grounded question answering, interacting with APIs, or taking action.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=13)** LangChain provides a standard interface for agents, a selection of agents to choose from, and example of end-to-end agents.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=21)** So one thing I want to drive home here is, I know it sounds fancy, but at the end of the day, agents are really nothing more than a prompting strategy.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=29)** A sophisticated prompting strategy, but at the end of the day, agents are just prompts.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=34)** So let's talk about the difference between agents and chains.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=38)** So the core idea of an agent is to use an LLM to choose a sequence of actions.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=43)** So in chains, a sequence of actions is hard coded through the prompt template, through code.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=48)** But an agent, a language model, is going to be used as a reasoning engine to determine what actions to take and in which order.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=57)** So an agent essentially is a language model that is interacting with tools or environments.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=66)** So agents involve a language model.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=68)** So language model is going to make decisions about what actions to take.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=71)** It's going to take those actions, observe the results, and then repeat the process until a desired outcome is achieved.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=78)** So it's different from a chain in that a chain is nothing but a sequence of calls, whether to a language model or some other utility.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=85)** So chains focus on the flow of information and computation, but an agent is focused on decision making and interaction with the environment.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=93)** And these can be used for a wide variety of applications such as personal assistance, question answering, chat bots, querying tablet or data, interact with APIs, so on and so forth.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=103)** Essentially an agent just uses an LLM as a reasoning engine, but it's still using prompts.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=108)** It's nothing more than a prompting strategy.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=112)** An agent though it needs access to tools and it needs a toolkit.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=115)** So tools and toolkits just are what provide additional functionality and capabilities to agents.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=122)** So tools are individual components that perform a specific task like retrieving information from an external source or processing data.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=131)** Toolkits on the other hand, these are collections of tools that are designed to work together and provide a more comprehensive set of functionalities.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=139)** So why do agents even need tools?
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=141)** Well, when we provide an agent with a tool, it becomes powerful.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=145)** It becomes a system that can execute and implement something on your behalf.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=150)** So the combination of an agent's decision making ability with the functionality provided by tools is going to allow it to perform a wide range of tasks efficiently.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=161)** Agents also need memory, and we'll go into memory deeper a bit later, but an agent and LangChain needs memory to store and retrieve information during decision making.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=171)** So memory is what allows an agent to really maintain context and remember the previous interactions it had.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=177)** This is crucial for getting that personalized and coherent responses.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=182)** So let's go ahead and instantiate a language model.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=186)** I like to set the temperature to zero every time I'm using an agent, every time I need a language model to, say, kind of a structured output or adhere strictly to a prompt, I set that temperature to zero, so that's what we're going to do here.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=200)** Now that we've instantiated our language model, let's equip it with some tools.
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=205)** So we can either pass tools as arguments when initializing the toolkit, or either individually initialize those desired tools.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=213)** So tools can be selected from the native tools that LangChain has available.
>
> **[3:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=218)** Or you could just define functions by yourself if you want to, you can look at the documentation to get a idea of some of the tools that LangChain has available to it.
>
> **[3:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=228)** Feel free to scroll through the documentation.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=230)** What I'm going to do is I'm going to use DDG search, so that's DuckDuckGo search.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=235)** The reason I'm using DuckDuckGo is because it does not require an API key, so that's one less API key that you have to manage.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=241)** We're going to use the LLM math tool and a Wikipedia tool that will search Wikipedia.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=245)** So we are now equipping this language model with some tools.
>
> **[4:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=249)** Now we need to instantiate and initialize the agent.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=252)** So there's two ways that you can initialize the agent using the agent executor or initializing the agent.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=258)** Let's first talk about the initialize agent.
>
> **[4:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=261)** So this is essentially a function that's a convenience function provided by LangChain and it just simplifies the process of creating an agent.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=269)** It's going to take the agent class, the language model, and a list of tools as an input, and then it'll automatically initialize the agent with that language model and the tools.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=279)** So let's go ahead and set up a query here.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=281)** Who's the current chief AI scientist at Meta?
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=284)** When was he born? Where was he born?
>
> **[4:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=286)** What's the current temperature there?
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=288)** That's going to be the query.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=292)** We're going to initialize the agent, we give it the tools, we give it the LLM.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=296)** And this agent right here, what we pass here is zero-shot-react-description, this is essentially the agent type.
>
> **[5:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=304)** And again, remember, it's nothing more than a prompt.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=307)** We'll inspect the prompt a little bit later when we see how to do an agent and create an agent in the new format.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=313)** But now we're going to go ahead and run this agent with that query.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=317)** Take note of this deprecation warning, we're going to see how to create agents in a new way, starting in v0.2 in a little bit further down in this notebook.
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=330)** So here we're getting an idea into the thought process of the language model.
>
> **[5:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=334)** So you recall we gave the language model this query, and you can see it's thinking to itself.
>
> **[5:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=339)** First I need to find out who the current chief scientist is.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=341)** After that I need to do this and then I need to do that.
>
> **[5:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=344)** And so it starts doing each one of these.
>
> **[5:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=347)** So you can see here the thought it has, okay?
>
> **[5:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=350)** It does a DuckDuckGo search.
>
> **[5:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=352)** It gets Yann LeCun's place of birth, finds out that he was born somewhere in France, and now it says, "Okay, I need to find the current temperature there."
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=361)** So it's going and getting the current temperature in that place and returning it to us.
>
> **[6:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=366)** There we have it.
>
> **[6:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=369)** Now let's talk about the other way that we can initialize an agent.
>
> **[6:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=372)** And that is using the agent executor.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=375)** So the agent executor is responsible for executing the agent's actions and then managing the agent's memory.
>
> **[6:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=380)** So it's going to take an agent, a set of tools and an optional memory object as its input.
>
> **[6:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=386)** And so that's how we instantiate it here.
>
> **[6:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=389)** We got a prompt, we're going to instantiate the language model, instantiate our set of tools, and then we're going to create a open AI function agent.
>
> **[6:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=399)** We're going to send that to the agent executor, and then have it execute this query.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=409)** All right, as you can see here, it's thinking through and figuring out what the actual current temperature is, and we'll get a response in just a second.
>
> **[6:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=419)** All right, so the forecast tonight is negative 13 C for Monday January 22, 2024.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=425)** So it gave us the weather from a few days ago.
>
> **[7:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=429)** I think that's just a fault of the DuckDuckGo search, not the agent itself.
>
> **[7:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=435)** All right, so let's talk about agents and memory now.
>
> **[7:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=437)** So as we stated before, an agent is stateless, which implies that it can't recall past interactions, but we can make it remember by feeding it with the previous chat history.
>
> **[7:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=449)** So it's important to note that the variable name of chat history needs to always be chat_history to be compatible with the prompt that we're going to use here.
>
> **[7:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=458)** If we modify the prompt, we can use a different variable name as well, but it's essentially going to work like this.
>
> **[7:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=465)** So it's, get our messages set up and we're going to have message history, and we're going to have an agent with history by making it a runable with message history.
>
> **[7:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=475)** Pass it the agent executor.
>
> **[7:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=477)** This is needed right here because in most real world scenarios, the session ID is needed.
>
> **[8:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=482)** Not going to be used for what we're doing here because we're just using a simple in-memory chat message history.
>
> **[8:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=489)** And then we can now invoke.
>
> **[8:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=495)** So you can see here we're running the same query that we defined earlier, which is what's the current weather in Winnipeg?
>
> **[8:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=501)** So it's going to go through here, get the current weather in Winnipeg.
>
> **[8:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=505)** And then I'm going to hit it with the follow up query.
>
> **[8:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=509)** What do you reckon I should wear then?
>
> **[8:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=512)** And so it has context of what I asked it before, so it knows that it's cold in Winnipeg.
>
> **[8:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=519)** And it's going to say, given the current conditions of this temperature, here's how you should dress.
>
> **[8:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=525)** So pretty cool, an agent with history.
>
> **[8:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=529)** Next up we're going to talk about how to create agents in LangChain v0.2 and beyond.
>
> **[8:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=538)** Starting in LangChain v0.2, they're actually going to stop using initialize agent in favor of individual agent methods because they believe that this is going to be more clear.
>
> **[9:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=552)** So you take a look at the affected agents in the change log here, and the most recent change log was from January 5th.
>
> **[9:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=560)** And you can look at the agents that were actually affected by kind of scrolling down here.
>
> **[9:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=567)** The chat agent, conversational agent, conversational chat agent, so on and so forth, so we're going to see that in action here.
>
> **[9:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=577)** So what we're going to do is just create kind of a retrieval agent, basically is what we're going to set up here.
>
> **[9:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=582)** And you'll see the flow here.
>
> **[9:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=584)** We're going to instantiate the language model, all right?
>
> **[9:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=586)** Once we've instantiated the language model, all this is doing right here is just some retrieval stuff, not necessarily pertinent to the construction of an agent.
>
> **[9:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=596)** Here we're setting up the tools.
>
> **[9:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=599)** Again, the tools we're creating is the search tool, which is going to use DuckDuckGo search as well as a retrieval tool.
>
> **[10:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=608)** Here's the prompt that we're going to use for the agent.
>
> **[10:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=611)** And now this is the part that becomes impacted here.
>
> **[10:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=614)** So we're going to define our agent using the create_openai_functions_agent, give it the language model, the tools, and the prompt, and then we create the agent executor.
>
> **[10:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=626)** And we can invoke like so.
>
> **[10:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=628)** And so this pattern, still being kind of figured out, the documentation is not fully flushed out for how to create agents in this new way.
>
> **[10:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=638)** But then again, we have a bit of time to create agents how you've learned before.
>
> **[10:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=642)** But starting in v0.2 and beyond, we're going to be using this pattern.
>
> **[10:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=646)** And by then hopefully the documentation becomes a lot better.
>
> **[10:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=650)** And here we have the answer that we're looking for.
>
> **[10:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=652)** This answer is for the question, how can LangSmith help with testing?
>
> **[10:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=658)** And there we have it.
>
> **[11:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/agents-let-chains-choose-tools-based-on-high-level-directives?u=76281980&t=660)** Now we know all about agents in LangChain and how to use them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (3), function (3), interface (1), from, (1)
> **Env Vars:** llm (4), api (2), ddg (1)
> **CLI Commands:** make (2), find (2)
> **Versions:** v0.2 (4)
> **Documentation:** the documentation (4)
> **Prerequisites:** set up (3)
> **Code Identifiers:** chat_history (1), create_openai_functions_agent (1)
> **Analogies:** such as (2)

#### Memory: Persist application state between runs of a chain
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=0)** - [Instructor] If you've seen the movie "Finding Nemo," then you might remember the character Dory, who is notorious for her short term memory loss.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=9)** LLMs, especially chat-based ones are a lot like that.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=13)** You need a way to ensure your system doesn't pull a Dory.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=17)** Luckily, LangChain has a memory module that will help you out.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=21)** So what is memory in LangChain?
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=24)** It's essentially just a module that's responsible for persisting state between calls of a chain or an agent.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=30)** And this is going to help the language model remember previous interactions and use that information to make better decisions.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=37)** So this is going to provide a standard interface for a persisting state between calls of a chain or agent, which is then going to enable the language model to have memory and context.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=49)** So what does the memory module do?
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=51)** So it enables, again, the language model to have memory and context.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=56)** This can help the language model make more informed decisions if it's able to remember past interactions.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=62)** The stored information can be accessed and utilized during subsequent interactions.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=68)** Every memory system in LangChain does two tasks.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=73)** It reads and it writes.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=75)** So every chain has some core logic that requires some specific inputs.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=80)** Some inputs are going to originate from the user while others are going to derive from memory.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=86)** So during the invocation of a chain, what's going to happen is that it's going to access memory twice, if it has memory.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=95)** First it's going to read a memory to supplement the user input before executing the core logic.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=101)** Then after it processes, but before responding, it's going to write the current runs data to the memory for feature reference.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=110)** So there's a few different types of memory in LangChain.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=112)** The first one we're going to talk about is the conversation buffer memory.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=116)** This is pretty straightforward, simple memory that's just going to store chat messages in a buffer and pass them to the prompt template.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=124)** I'm going to show you right up front how to use memory with LangChain expression language.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=130)** And then the rest of the notebook, we're just going to use the legacy chain interface, but you should be able to abstract away quite easily.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=137)** So here we're just setting up the system message.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=141)** In this case, I'm going to ask the language model to be Spider Punk, Hobart Brown from Earth 138.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=147)** I'm going to instantiate the language model.
>
> **[2:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=149)** And we set up our prompt template.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=151)** This is going to be a chat prompt template.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=154)** I want you to pay attention to the fact that we have the messages placeholder here.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=159)** And so now we're also going to instantiate conversation buffer memory, and let's look at the memory variables.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=166)** So we have the history memory variable, and right now it is empty.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=170)** The reason it's empty is because we haven't even interacted with the language model yet.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=174)** Now we're going to go ahead and set up our chain, the runnable pass through, we're going to assign history to it and it's going to have this variable name.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=184)** I'm going to send all that into the prompt, send all that to the LLM.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=190)** And then finally, we're going to send some inputs to the LLM and invoke the chain.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=196)** And let's take a look at what we have.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=199)** So once the chain is invoked, we also just got to make sure that we save the context, right?
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=205)** So we have the inputs, this is what we're going to save for the memory, and the output is going to be the response context.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=213)** So in this case, all this stuff here.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=216)** So let's take a look at the memory variables.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=220)** Here we got the history, and what's the history?
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=222)** It's just the human message chat message, right?
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=225)** And so now let's run this again with a different input.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=230)** And you can see here it remembered my name, Harpreet.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=235)** So that's the nice part about having memory.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=238)** So let's go ahead and see some other types of memory.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=242)** We'll look first at the conversation buffer window memory.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=246)** This helps keep conversations fresh.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=248)** So just keeps track of past interactions in the conversation.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=251)** So it does this by maintaining a list of the most recent interactions and then only using the last K of those interactions.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=259)** This is going to help ensure that the buffer doesn't become too large and it allows for a sliding window of the most recent interactions to be kept.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=268)** This type of memory is really useful for keeping the history of past interactions small and manageable.
>
> **[4:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=275)** By only capturing the most recent interactions, it's going to help prevent the buffer, again, from becoming too large, which can be overwhelming.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=284)** And you might even exceed the context window of your language model.
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=288)** So let's go ahead and take a look at conversation buffer window memory.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=293)** I'm going to use this with a legacy chain, the conversation chain, and we'll run it like this.
>
> **[4:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=298)** It's the same prompt on passing, but we're, you know, we're not using a system prompt or anything like that.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=305)** And we'll just run the next few chains because I want you to see what is happening.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=313)** So you could see here the first time we ran the chain didn't really say anything about the previous interactions.
>
> **[5:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=322)** When we run it again, it's got the history of the last interaction.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=328)** We run it again, it's got the last couple of histories, right?
>
> **[5:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=332)** And when we run it again, it's got the last few histories.
>
> **[5:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=336)** And then finally this chain, you'll notice that we're going to drop off these and only keep the last three interactions.
>
> **[5:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=343)** So we'll wait for that to finish.
>
> **[5:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=350)** And we can see here that once we got to this point, remember we're only keeping the last three messages.
>
> **[5:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=355)** And so we've had three interactions already, right?
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=357)** We've had this first, second, third interaction, and the next run, we'll see that this part has popped off.
>
> **[6:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=368)** So it's no longer there, right here.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=375)** And so that's what conversation buffer window memory does.
>
> **[6:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=381)** It just is a sliding window of the last K interactions.
>
> **[6:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=386)** Now let's see conversation summary memory.
>
> **[6:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=390)** So in order to condense information from a conversation over time, we can use conversation summary memory.
>
> **[6:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=397)** This memory type is designed to keep track of all interactions that happened during a conversation, and it could be useful to only use the most recent ones.
>
> **[6:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=406)** So you would need to use conversation summary memory when you just want a concise representation of the conversation's history without using too many tokens.
>
> **[6:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=416)** This is going to allow the model to understand the overall context and key points of the conversation, while not flooding the context window with excessive details.
>
> **[7:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=427)** You can tell if you need conversation summary memory if you find that the conversation history is becoming too long and complex for the model to handle effectively.
>
> **[7:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=435)** By using conversation summary memory you can condense the conversation into a more manageable summary, which is going to make it easier for the model to process and respond accurately.
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=444)** So we'll go ahead and run it here.
>
> **[7:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=449)** So we're not giving it a system message or anything, we're just saying, hey, what's up?
>
> **[7:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=454)** And so we see the current conversation, hey, what's up?
>
> **[7:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=456)** And then we run it here.
>
> **[7:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=458)** The current conversation has a summary and we can see the summary again.
>
> **[7:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=467)** And so that's it.
>
> **[7:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=468)** That's the memory module in LangChain.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=471)** We can use this in agents, we can use this in chains.
>
> **[7:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=475)** And it's really useful in situations, for example, like a chat bot or a virtual assistant when you need that language model to have context of previous interactions.
>
> **[8:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=483)** And there we have it.
>
> **[8:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=484)** With this video we've seen all of the core components of LangChain.
>
> **[8:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/memory-persist-application-state-between-runs-of-a-chain?u=76281980&t=490)** The next section, we'll move on to some basics of prompting and then a deep dive into prompt templates.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), module (4), interface (2), pass (2), case, (2)
> **CLI Commands:** make (4), find (1)
> **Exercise Files:** template (3)
> **Env Vars:** llm (2)
> **Prerequisites:** set up (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 4. Basics of Prompting

#### Prompt basics
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=0)** - [Instructor] In the early days of language models, you needed a different model for every language task.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=5)** Those days are gone.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=7)** Transformers and transfer learning have made things much simpler.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=11)** You have one model that is like a Swiss Army knife that can be used for various language tasks.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=17)** You give this model a prompt, which essentially is just a string of text, and the model will give you a answer.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=24)** The better your prompt, the better the answer.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=27)** So what's the big deal with prompts?
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=29)** Well, it is a phenomena called in-context learning.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=32)** And this refers to methods for steering an LLM's behavior towards your desired outcome without updating the model weights.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=40)** This approach is rooted in practical testing, and the success of various prompt strategies can differ significantly across models.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=47)** This means that it's up to you to hack around and play around with prompts to see which one is going to work for your task.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=55)** As a result, this means that there is extensive trial and error, along with some intuitive reasoning, both of which are going to be essential.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=65)** Prompts are the key to using LLMs effectively.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=67)** This is about smartly communicating with a model to get your desired results.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=72)** And you accomplish this by creating clear, concise, and easily understandable prompts.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=78)** But here's the thing, there's no one perfect prompt.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=81)** You need to test the different ones to see which one is going to work best.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=86)** So what makes a good prompt?
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=87)** Well, there's four elements to a prompt.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=89)** One is the instruction.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=91)** This is going to guide the model for its task.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=94)** Two is context.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=95)** This is just extra background information that's going to refine the model's answer.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=99)** This can be inserted manually, or sourced from databases or APIs.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=104)** Three is input data.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=106)** This is often a question or topic that you're feeding to the model.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=109)** And finally, the output indicator.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=111)** This is going to signal how you want the model to answer.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=116)** Grasping the makeup and elements of a prompt is key to using language models effectively.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=121)** You don't need all these elements every single time.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=124)** It's going to vary by task.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=125)** The key is understanding and combining them effectively.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=129)** It's often best to put the instruction towards the end of your prompt.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=132)** This ensures that the model will hone in on the task instead of just expanding on the background.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-basics?u=76281980&t=138)** As you refine the art of prompt engineering, the guidelines I just presented are going to give you a reliable starting point for designing effective prompts.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), essentially is (1), is a  (1), refers to (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** llm (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### Principles and tactics for prompting
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=0)** - [Instructor] In this video, I want to share some principles for getting the most out of your prompts.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=4)** So we'll start the notebook off as we usually do, install our dependencies and set our API key.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=9)** In this case, we're going to be using a model from the HuggingFaceHub.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=13)** So that's the API key that you want to have handy.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=17)** Next, we'll import our libraries and define a function that's going to execute a LLM chain for us.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=23)** Essentially just taking a prompt, instantiate a model from the HuggingFaceHub, construct a llm chain, and then invoke that chain with some input.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=34)** The model we're going to pull from the hub is going to be Mistral-7B-Instruct-v0.2.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=39)** So now we're using the HuggingFaceHub inference endpoint.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=42)** So we're not actually going to be downloading the model locally.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=46)** The first principle I want to talk about is clarity.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=48)** When you're constructing your prompts, clarity is key.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=51)** Ambiguity is going to be your biggest enemy.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=54)** The clearer your instructions are, the more accurate the model's response will be.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=59)** So make sure you use delimiters like triple quotes, back ticks or angle brackets to distinctly separate your instructions from the context and content of your prompt.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=70)** This way, you're ensuring that the model doesn't confuse the instructions.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=74)** You're giving it with the context that you're providing it.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=78)** After we instantiate our text to summarize and the template, you'll notice that I'm going to be constructing a prompt template.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=85)** When constructing this prompt template, you'll notice that I'm adding these tokens here.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=90)** The prefix and suffix tokens, these are special tokens that the model is going to use to know when the instruction starts and ends.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=100)** This isn't really important for the OpenAI models that we'll use in the majority of this course, but it becomes really important when you're using smaller language models.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=110)** In the case of Mistral-7B-Instruct, we need to include these special tokens because that's how the instruction model was trained.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=120)** Putting it together, our prompt is going to look something like this.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=124)** Now we can run the LLM and get a result, and you can see here we have the result.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=131)** Providing clear and detailed instructions when asking 'em all to perform a task is crucial, so on and so forth.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=137)** The next principle I want to discuss is asking the model for structured output.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=143)** So a well-structured output is going to be easier to interpret and process, especially for downstream tasks.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=150)** So it's important that you define the format you need upfront.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=153)** If you're looking for data that could be easily parsed, then request outputs and formats like JSON or XML.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=159)** This is going to ensure that you get your output in a structured and organized manner.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=165)** So here I'm just essentially asking the model to come up with some imaginary movie titles and give me a JSON object that has the movie ID title, director and genre.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=177)** And we construct our prompt template, and it's going to look like this.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=183)** Send that to the model, and you'll see here that it does in fact output as a JSON.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=191)** You can also ask a model to structure its output based on whether or not a condition was satisfied.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=198)** So the first thing that you want to do is, you know, ask the model to determine if the text meets some specific criteria.
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=206)** For example, does this text contain a sequence of instructions?
>
> **[3:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=210)** Then the model can analyze this text to confirm if the criteria is actually fulfilled.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=217)** Then the model will respond based on whether the conditions are met.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=220)** If it's met, then proceed with that specified action.
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=223)** If not, then state that this condition wasn't satisfied and you know, tell the model to do something else.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=230)** So you want to clearly convey whether the conditions were satisfied and the reasoning behind the response.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=237)** So you'll notice we're asking the model to do that here.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=239)** We're giving the model some input text.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=242)** Essentially, this input text is how to reset your password.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=246)** The actual instructions we're telling the model is that you're going to get some text that's going to be enclosed in these angle brackets, determine if this text has some type of procedure.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=257)** If it does, then give us a list formatted like so.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=262)** The title and the individual steps.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=264)** If it doesn't, then just respond with no procedural guide found.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=269)** And here's the input that we give the text.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=273)** And instead you the prompt template.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=274)** Here's what the prompt is going to look like.
>
> **[4:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=277)** Run the llm_chain.
>
> **[4:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=280)** And then we can print our result.
>
> **[4:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=283)** And you can see here that it does in fact structure it the way that we want.
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=288)** The next principle is a strategy for complex queries.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=293)** Here you can ask the model to outline its thought process.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=296)** So when you're dealing with a complex query, you want to allow the model to have enough time to process information thoroughly.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=305)** So there's two strategies you can use here.
>
> **[5:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=308)** The first strategy is detailing the steps needed to complete a task, and then demanding output in a specific format.
>
> **[5:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=315)** So for complex tasks, you want to ask the model to break them down into smaller steps.
>
> **[5:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=321)** Just as humans often find step-by-step instructions helpful, you'll find that the model will find it helpful if it could follow a logical sequence or chain of reasoning before arriving at a final answer.
>
> **[5:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=335)** The second strategy is instructing the model to work out its solution before jumping to a conclusion.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=341)** This is going to help the model to thoroughly process the task at hand before delivering the output.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=349)** So here you'll see we're prompting the model with the falling template, like determine if the student solution is correct or incorrect.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=357)** You know, this is how you're going to do it.
>
> **[5:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=358)** Work out the solution, compare your solution to students.
>
> **[6:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=362)** Don't decide if the student solution is correct until you did the problem yourself.
>
> **[6:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=366)** Here you can see that we're a pending in suffix here to just respond with the following format.
>
> **[6:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=372)** And then this is the actual input question that we're going to send the model.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=375)** So we run that here, create a prompt template, and this is the fully constructed prompt.
>
> **[6:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=384)** And here is the actual result.
>
> **[6:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=385)** So you see here that the model is going to respond in the way that we ask it to.
>
> **[6:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=392)** So of course, the result you're looking at here is going to be a bit underwhelming.
>
> **[6:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=395)** This is from a smaller model, it's a 7 billion parameter model.
>
> **[6:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=399)** But if you were past this prompt to GPT-4, it would do a excellent job at solving that question.
>
> **[6:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=406)** Finally, I want to talk about the importance of balancing context and clarity.
>
> **[6:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=410)** What I mean here is don't overload your prompt.
>
> **[6:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=412)** Context is essential, but too much can be counterproductive.
>
> **[6:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=415)** So you want to strike a balance.
>
> **[6:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=417)** So prioritize the most critical information in your prompt.
>
> **[7:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=420)** For the larger models that we're going to be dealing with throughout the remainder of this course.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=425)** For example, GPT-4, it's smart enough to know when it requires additional context.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=431)** So if it does require additional context, it will request it.
>
> **[7:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=435)** And to sum it all up, these are the principles you want to keep in mind when constructing your prompt.
>
> **[7:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=441)** Clarity is essential.
>
> **[7:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=443)** You are able to request a structured output if you need it.
>
> **[7:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=447)** You can ask the model to verify if some conditions are met.
>
> **[7:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=452)** You can prompt the model in such a way that it could handle complex queries.
>
> **[7:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/principles-and-tactics-for-prompting?u=76281980&t=456)** And you always want to balance context with clarity.

> [!info]- Semantic Content
>
> **Env Vars:** json (3), api (2), llm (2), gpt (2), xml (1)
> **Code Keywords:** this. (2), case, (1), function (1), else. (1), finally, (1)
> **Exercise Files:** template (7)
> **CLI Commands:** find (3), make (1)
> **Analogies:** for example (2)
> **Code Identifiers:** llm_chain (1)
> **Versions:** v0.2 (1)
> **Definitions:** is a  (1)


### 5. Prompt Templates Deep Dive

#### Introduction to prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=0)** - [Instructor] Prompt templates are a core concept and object in langchain.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=5)** Before we get into prompt templates, just refresh your memory on the structure of a prompt.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=10)** So remember that a prompt has multiple components, the instructions and the external information or context as well as the user input or query plus some output indicator.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=20)** Not all prompts will require all of these components, but a good prompt, will use two or more of them.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=27)** So what is a prompt template then?
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=30)** So a prompt template is a tool that we use to produce a prompt in a consistent and repeatable manner.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=38)** So once you've laid out a prompt, you've got the instructions, you've got a place to put external information or context, a place to put the user query, you can turn that into a template.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=48)** And so essentially what a prompt template is, is just a text string.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=52)** This is known as the template.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=53)** And this template can take input from users to generate a prompt.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=58)** The template might have the instructions for language models, some examples to do in context learning or a specific question to guide the model's response.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=68)** It helps to create a more accurate and efficient prompt generation process.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=74)** And a prompt template will take some input and then format the template to include that input.
>
> **[1:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=80)** Let me show you this in action.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=82)** So we'll start by importing the prompt template from langchain, and then we'll instantiate the template itself.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=88)** So the template itself is a string, and this string will have a place for the query.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=95)** So we start off by importing the prompt template.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=97)** We'll define a string, we'll call it template.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=100)** Template will have a place for a user input, so an input variable that will be wrapped in curly brackets.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=107)** So we go ahead and instantiate the template.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=111)** And there's two ways that you can actually instantiate this prompt template.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=115)** So you can instantiate the prompt template using the initializer.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=119)** And if you're using the initializer, you have to explicitly pass in a argument called input variable, which will be a list of all the input variables in your template.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=130)** And in this case, we have one input variable and that is query.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=134)** And you can see the prompt will look like this.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=137)** And so what we could do now is we can pass a value for query and the prompt template will format it appropriately.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=144)** So you can see here the query is being passed to the prompt template and parsed within the prompt template.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=150)** And this is what ultimately gets sent to the language model.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=154)** The recommended way to instantiate a prompt template, however, is using the from template method.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=160)** So when you instantiate this using from template, all you have to do is pass in your template string and langchain knows exactly what to do under the hood.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=172)** And you can see here using the from template method, the input variable is already there for us.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=178)** And you can format in the same exact way.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=181)** And you'll see that we end up with the same exact prompt that we end up passing to the large language model.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=185)** So let's go ahead and pass this to the large language model and see what we end up with.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=190)** So here you'll notice we're going to use gpt-3.5-turbo.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=193)** I find generation times tend to be a lot quicker with gpt-3.5turbo, so we'll make use of that.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=197)** We've instantiated our chain, so we have our prompt template, the language model, and the output parser.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=203)** And now we can go ahead and invoke the chain to get a response.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=207)** And of course we can let that response run or we could stream the response like so.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=217)** So now you can see here we have our llm chain.
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=222)** Recall that our llm chain is constructed using the prompt template, the language model, and an output parser.
>
> **[3:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=229)** So we don't need to explicitly format the prompt when we are using the langchain expression language.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=238)** We just pass in the value for the input variable.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=241)** So you can see here now we're going to pass a new query into the llm chain.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=247)** So the way the llm chain will work is it'll take this dictionary here, it'll grab the value for query, in this case why is a SoftMax function used in NNs.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=257)** It'll format the prompt template appropriately.
>
> **[4:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=261)** It'll take that prompt template, pass it through to the large language model.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=265)** The large language model will get a response and that response will be parsed for us.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=269)** So let's see this again in action here.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=274)** And you can see we have the answer.
>
> **[4:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=277)** So now we can pass in another query just to kind of show you for completeness.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=281)** In this case, I'm going to ask the language model to gimme the training loop for psychic learn.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=284)** And let's observe the answer.
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=288)** So sklearn doesn't have a built-in training loop.
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=290)** You would typically use the fit method to train a model, so exactly right.
>
> **[4:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=294)** Awesome.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=296)** So you could use Python string manipulation to create a prompt, but prompt template is more legible and it works with any number of input variables.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=307)** So here what we're going to do now is define a function.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=311)** This function, we'll call it the get advice function.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=313)** It's going to create a chain for us essentially.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=317)** And all we need to do to this function is just pass in a string input for a topic on which we want to get advice from.
>
> **[5:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=325)** So you can see here we instantiate our language model, define the prompt template.
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=330)** In this case, we're going to be using the from template method, which is recommended, construct our chain, and then we'll stream our output.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=337)** So here we'll get advice on how to balance so many priorities when you don't have free time.
>
> **[5:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=346)** And so now we have like a reusable kind of function to get advice.
>
> **[5:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=350)** And you can see here we'll get an advice for learning new things.
>
> **[5:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=356)** Great, and you can see here the language model gives us great advice.
>
> **[6:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=360)** And so all this is doing is, it's taking the string that we have defined here and here, for example, balancing so many priorities, getting over addiction to learning new things, it's going to inject that into the topic and send it to the language model.
>
> **[6:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=377)** Great, so we can see here that the prompt that we've used right now is just a single input variable prompt.
>
> **[6:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-prompt-templates?u=76281980&t=384)** As it turns out, lanechain allows you to create prompts with multiple input variables, and that's what we're going to see how to do next.

> [!info]- Semantic Content
>
> **Exercise Files:** template (34)
> **Code Keywords:** pass (9), function (6), let (5), case, (3), require (1)
> **Definitions:** is a  (4), known as (1)
> **CLI Commands:** find (1), make (1), python (1)
> **Best Practices:** recommended (2)
> **Versions:** 3.5 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Multi-input prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=0)** - [Presenter] We're going to pick up where we left off in the same notebook, but this time we're going to talk about multi input prompts.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=6)** So the first video we saw about prompt templates showed you how to construct a prompt template with just one input variable.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=13)** You could, however, construct prompt templates with more than one variable.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=17)** And so we'll do that here.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=19)** So the first thing I want to start by doing, of course, is always import the prompt template and import a language model.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=26)** We'll go ahead and initialize the language model, and then we'll create a function here to construct a prompt template.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=32)** Now I want you to notice that I'm using the prompt template here using the initializer.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=37)** So I'm explicitly stating what the input variables are and then passing the prompt.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=42)** When we do it this way, we're going to have to format the prompt template.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=46)** And this function right here will simply just print the prompt for us.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=49)** And then finally, we will go ahead and invoke the chain with that prompt.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=55)** So let's go ahead and look at that.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=58)** So you can see here we get the answer.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=61)** In this case we're not streaming, so it'll take just a second to get the answer up.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=66)** All right, so you can see here we were not streaming, so we just printed the answer out, and here you can see we've formatted the movie with this value, "Jatt da Pajama Uuchaa Ho Gayaa," with the actor, "AP Dhillon."
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=79)** And then we get the genre as well as the synopsis, exactly what it is that we had asked for, the movie and the actor, and it gave us a synopsis and genre.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=88)** So now what I want to do is go through a live exercise for you.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=91)** We are going to rewrite this code together.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=96)** Using not the initializer, but just the recommended method, which is using "from" template.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=101)** And then we'll go ahead and add in streaming as well.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=105)** So this is inevitably something you might come across in the future.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=108)** You'll have to rewrite code that is not using the link chain expression language into using the link chain expression language.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=116)** And I want to show you how to do it live so that you're not kind of overwhelmed by it at all, and it's really not that hard.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=122)** So we start with our prompt template.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=124)** We'll just add the "from_template" method because we're adding from template, we can remove the input variables and just have the template be the argument.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=136)** We're going to use lane chain expression language, so that means we don't need to explicitly format our text so we can actually remove this.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=142)** We'll remove this part.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=143)** We don't really care about printing out the prompt.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=146)** And now what we're going to do is rewrite this last part by first constructing an LLM chain.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=152)** So let's create an LLM chain.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=156)** This LLM chain will consist of the prompt, which will be passed to the language model, and we'll be sure to use the output parser so that we get some clean text out.
>
> **[2:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=167)** This LLM chain will then be invoked, and in this case we'll invoke it by passing the movie title as well as the main actor.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=175)** Let's go ahead and do that.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=177)** So remember, to invoke it, we need to pass a dictionary.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=181)** The dictionary's keys are going to be the movie title, And this is the argument that we're passing in.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=191)** And again, we also need to pass in the main actor, so this will also be a key like so.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=196)** And we'll pass in the main actor.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=199)** Right, so in lane chain expression language, we invoke the chain by passing in a dictionary, the dictionary's keys will be the input variables of the prompt and the value is whatever it is that we want to put inside that placeholder.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=213)** Of course, we can send this to something called response, maybe we call it response variable.
>
> **[3:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=218)** And this way it'll go ahead and just print out the output.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=221)** Now if we want to change it to streaming, we can just go ahead and actually comment this out.
>
> **[3:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=227)** For streaming, we say "for chunk in" the "llm_chain.stream,"
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=236)** and we're going to pass in this exact same dictionary, so I'll go ahead and copy that dictionary here.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=248)** So pass in the dictionary like so.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=253)** And what we're going to say is "print(chunk)," I have that as the end, and "flush=True."
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=265)** Great.
>
> **[4:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=266)** And so now we can go ahead and invoke the chain like so.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=273)** And you can see here, it gives us the answer that we were looking for.
>
> **[4:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=277)** And you can see here, again, just printed a couple more times just for illustrated purposes, and we get the answer just as we wish.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=284)** So we get a synopsis and the genre for a fictional movie called "Amritsar: 1984", starring "Gurdaas Mann."
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=293)** And then another one starring "Diljit Dosanjh."
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=296)** Sounds like awesome movie tiles and something that I would like to watch.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=299)** All right, so now that we've seen how to construct multi input prompt templates, we are now going to look at chat prompt templates.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/multi-input-prompt-templates?u=76281980&t=307)** So I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (3), function (2), finally, (1), for, (1)
> **Exercise Files:** template (9)
> **Env Vars:** llm (4)
> **Code Identifiers:** from_template (1), llm_chain (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [presenter] (1)

#### Chat prompt template
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=0)** - [Instructor] Let's wrap up our introduction to prompt templates by talking about chat prompt templates.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=7)** The prompt to a chat model is a list of chat messages.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=11)** Each chat message is associated with content and an additional parameter called role.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=17)** For example, in the OpenAI chat completions API a chat message can be associated with an AI assistant, a human, or a system role.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=28)** Chat prompt template dot from messages accepts a list as the argument, and each element in that list is a message representation, which is usually a tuple of the role and content.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=43)** You can also pass in instances of message prompt templates like system message, prompt templates, or human message prompt templates.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=52)** So to summarize this chat prompt templates dot from messages, we'll accept a list.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=58)** Each element in the list is a message representation.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=63)** One option for the message representation is a message prompt template subclass like the system message prompt template.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=70)** So we're going to see all of this in action right now.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=73)** So of course begin by importing what we need.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=78)** We'll instantiate a LLM here using GPT 3.5.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=83)** I'll set the temperature up a little bit to be 0.8.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=86)** You can toggle around with that and you'll see here chat prompt template dot from messages.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=91)** We're passing a list and each element in that list is a tuple and we have the role followed by the content of the role.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=102)** And now take a look here, you'll see that we have some placeholders for input variables.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=109)** So without me running the cell, take a moment, take a second and tell me what you think the input variables in this chat prompt template are.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=122)** If you said name and user input, you are right.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=127)** So the template itself has a attribute called messages and you can look at the message and this is what I was talking about when I said instance of a message prompt template.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=138)** So when we initialize the chat prompt template like we did here using the tuples under the hood LangChain will go ahead and automatically convert it into the appropriate message prompt template.
>
> **[2:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=153)** So in this case, I've got the system human and AI message prompt templates.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=157)** We can of course format the messages.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=159)** In this case we'll format the message so that the name of the AI is Robo Talker and the user input is talk robo to me.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=168)** So I'll go ahead and do that and we'll see what the message looks like once it's been formatted.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=172)** So your helpful yet slightly quirky and cheeky AI bot, your name is Robo Talker and the human message is talk robo to me.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=179)** So of course we can use LLM dot invoke and print out the messages or we can construct a chain using the LangChain expression language.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=191)** So let's go ahead and do that.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=193)** Of course, we can invoke the chain like so, but we'll go ahead and just stream the output.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=199)** And you can see here robo talker is in fact talking robo to us.
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=205)** So the other way to instantiate the chat prompt template is to just create instances of the appropriate message prompt template, so the system message, human message, and then build that like so.
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=223)** So our template will look like this.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=226)** So we have a chat prompt template object with the input variable and the appropriate messages.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=230)** And you'll see here, this is the exact same object that we have up here is a chat prompt template.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=239)** You can in fact confirm that by going type template.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=246)** So we'll reinstantiate that and see the type here chat prompt template.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=252)** Right? So going back here, we're doing the same thing.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=253)** We've got a chat prompt template, input variables of course is going to be text.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=258)** The messages is a list of messages in this case, just a system message and a human message.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=265)** We can get the response like so by invoking it and formatting the messages or use a preferred method of constructing a LLM chain.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=274)** Let's go ahead and do that.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=276)** And we can pass in to the LLM chain a dictionary.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=282)** The dictionary has a key, which is the same as the input variable for the template.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=287)** And the value is what we want that placeholder to be.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=292)** And of course we'll go ahead and stream the output.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=296)** And there we have it.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=297)** We get a response that is actually quite funny, but that's because we asked them to be super freaking rude.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=309)** So that's it for your introduction to prompt templates.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=311)** We're going to go and take a further deep dive into prompt templates in the next several videos.
>
> **[5:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-template?u=76281980&t=318)** So I'll see you in the next one.

> [!info]- Semantic Content
>
> **Exercise Files:** template (18)
> **Code Keywords:** let (3), pass (2), case, (2), this. (1), super (1)
> **Definitions:** is a  (7)
> **Env Vars:** llm (4), api (1), gpt (1)
> **Versions:** 3.5 (1), 0.8 (1)
> **Cross-References:** in the next (2)
> **UI Navigation:** toggle (1)
> **Analogies:** for example (1)

#### Serializing prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=0)** - [Instructor] Serializing prompts in LangChain allows you to efficiently store and share your prompts.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=6)** So instead of relying solely on Python code, you can actually save prompts as files.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=12)** This makes it much easier to version and distribute your prompts.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=18)** Some key features of prompt serialization in LangChain is that it supports both the JSON and YAML formats.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=25)** These are human readable formats and they're popular and ideal for serialization.
>
> **[0:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=30)** You can choose to store everything in a single file or distribute components like templates or examples across multiple files.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=37)** This flexibility caters to different use cases, whether you're dealing with lengthy templates, extensive examples, or reusable components.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=46)** LangChain also provides a singular entry point to load prompts.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=50)** This streamlines the process regardless of the prompt type.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=54)** There's a couple core design principles for the serialization of prompts in a LangChain.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=59)** One is that they be serialized in human readable formats.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=64)** So JSON and YAML are the primary methods for prompt serialization because of their readability.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=69)** Other things like examples might support different serialization methods.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=74)** Also, adaptable storage.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=76)** So whether you prefer to consolidate a file or you know, segmented storage, LangChain can accommodate both of those approaches.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=84)** By leveraging serialization in LangChain you're ensuring that there's a seamless experience for managing and sharing your prompts, which is essential for prompt management.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=95)** So here what we're going to do is instantiate a prompt template.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=98)** So you can see here we just have our template.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=102)** We'll go ahead and in this case, we will instantiate from the initializer, and then we're going to save it.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=108)** So you can see here the prompt is saved as a JSON object.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=115)** You can also print the contents of the JSON object out like so.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=119)** Now, you can also load this prompt later if you'd like.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=122)** So illustrate an example of loading a prompt by just downloading one from the LangChain prompt hub, right?
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=132)** You can see here, we just download a prompt, and here's the input variables to the prompt.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=138)** We have summary and new lines.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=140)** You can also, of course, print the prompt as well after you load it.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=148)** And you can see what the prompt looks like.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=151)** So serializing prompts in LangChain is as easy as that.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=154)** A bit later in the course, you'll be introduced to the LangChain Hub and the Lang Smith, and you'll see just how you can actually properly manage prompts in a more version controlled manner.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/serializing-prompts?u=76281980&t=166)** But this should be enough to get you started with sharing your prompts.

> [!info]- Semantic Content
>
> **Env Vars:** json (4), yaml (2)
> **Code Keywords:** type. (1), case, (1)
> **Exercise Files:** template (2)
> **CLI Commands:** python (1)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)

#### Zero-shot prompts
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=0)** - [Instructor] Because large language models were trained on such a vast amount of data, they possess a surprising feature.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=8)** And that feature is the ability to do what's called zero shot learning.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=12)** And Zero Shot learning facilitates something called zero shot prompting.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=17)** So what is Zero Shot prompting?
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=19)** Well, it involves asking the model to perform a task without giving it any specific examples beforehand.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=26)** This is going to allow the language model to generate responses to a prompt without requiring specific examples or even being specifically trained for that task.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=37)** That's because of the way language models were pre-trained.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=39)** They're trained on vast quantities of data, and because of this, again, they're able to execute tasks with what's called the zero shot.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=49)** For example, to classify a text as neutral, negative, or positive, you might prompt the language model by saying, classify the text into neutral, negative, or positive.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=60)** And the model could respond with, for example, neutral for a statement like, I think the vacation is okay, but zero shot prompting doesn't produce the satisfactory outcomes that you're looking for.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=70)** You can also include demonstrations or examples in the prompt, and that would shift more towards few shot prompting.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=77)** But it's fascinating that large language models possess this ability to do tasks even if they weren't specifically trained for that task.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=84)** So let's see some of this in action.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=87)** So we're going to start by importing our language models, output parsers and prompt template.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=94)** We're going to create a zero shot class here that will be initialized with a language model.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=100)** We are going to have a prompt here that we're going to construct from a template.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=106)** We're going to create the LLM chain, which consists of the output parser and the chain itself.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=114)** And then we can invoke the chain by creating the prompt, creating the chain, and invoking it.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=122)** So let's go ahead and do that.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=126)** So we create an instance of our zero shot chain.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=129)** And so now we can pass a template and a input to the language model.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=135)** So here we've got a sarcasm template where we're just simply asking the language model to classify the user statement, which is going to be delimited by brackets as sarcastic or not sarcastic.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=148)** And you can see here it does in fact classify it correctly.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=152)** Another example of zero shot prompting is asking the model to classify the user statement as appropriate or inappropriate.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=162)** Again, just another example of zero shot prompting.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=169)** You see here it is appropriately classifying it.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=173)** Zero shot prompting isn't limited to situations like we just described.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=178)** You can also use zero shot prompting for named entity recognition.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=183)** Essentially, named entity recognition is kind of like a smart highlighter that's going to find and label specific information in the text.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=191)** So this could spot and categorize names, places, companies, and more.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=197)** It's great to quickly understand who, what and where without really reading every single word.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=203)** And this is great for sorting through documents to find the most important bits.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=209)** So let's see named entity recognition in action.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=212)** So we start by initializing a template, which is identifying, categorize the names and the text limited by these brackets.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=221)** Here's what we're going to pass in this sentence.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=225)** We're going to go ahead and invoke our chain with the template and the input, and we'll get our results.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=232)** So Barack Obama is a person from United States Honolulu, so on and so forth.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=238)** You can see here that it's able to identify all that information.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=242)** You could even have a template that is going to take somebody's information, for example, their name, contact info, so on and so forth.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=252)** And then write a cover letter.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=256)** In this case, the cover letter we're going to write, it's going to be in the most pompous way possible that's guaranteeing that this person won't be hired.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=262)** So again, this is not like a task these model is specifically trained on, but because it was exposed to such a wide, wide range of data during this pre-training phase, it's picked up this emergent ability to do these type of tasks.
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=278)** So you can see here it kind of does write the cover letter, but it almost writes it as a recommendation letter.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=287)** So a zero shot prompting does have its limits, of course.
>
> **[4:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=291)** So sometimes the AI's first guess isn't going to be quite right.
>
> **[4:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=294)** And this is especially true of tricky tasks.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=297)** We can't really steer the AI's responses as precisely as we might like with zero shot prompting.
>
> **[5:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=303)** When topics are niche or jargon heavy, the AI might not be able to quote unquote speak our language as zero shot prompts are great for quick texts, but it might stumble if there's a lot of text that you're sending into the prompt.
>
> **[5:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/zero-shot-prompts?u=76281980&t=319)** So as great as zero shout prompting is, it could be hit or miss as great for quick tasks, but less so for nuanced or lengthy context.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (2), this, (1), for. (1), case, (1)
> **Exercise Files:** template (7)
> **Analogies:** for example (3), kind of like (1)
> **CLI Commands:** find (2)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Custom prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=0)** - [Instructor] Custom prompt templates in LangChain allow you to dynamically generate prompts tailored to your specific needs.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=8)** You might need a custom prompt template if you want to include unique instructions, examples, or context for your model, if you want to dynamically insert task-specific information into the prompt, or if you simply want full control over the prompt structure and formatting.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=25)** To create a custom prompt template, there's two things you need to do.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=28)** One is specify the input variables and you need to expose these through the input variables attribute.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=34)** Two is you need to implement a format method that's going to generate the prompt string.
>
> **[0:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=40)** So these default prompt templates that you've seen so far, for example, prompt template and string prompt template, these only allow inserting simple string substitutions into the template.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=51)** So for example, this prompt template here is simply going to allow me to just enter in a string.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=59)** This is useful for simple cases, but it doesn't allow you to dynamically customize the prompt based on your input.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=67)** A custom prompt template, on the other hand, is going to allow you to dynamically assemble prompts however you need for your particular use case.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=76)** This is giving you full programmatic control over your prompt generation.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=81)** So let's see an example of this in action.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=84)** So we're going to create a FunctionExplainerPromptTemplate.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=87)** And this class is going to be designed to take a function's name as a input, fetch its source code, and then format that into a prompt.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=96)** So this class is a custom template that's going to take a function.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=100)** So it's not going to take just the name, it's going to take the entire function as input.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=105)** And it's going to inspect the function to get the source code.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=110)** Then it's going to format that into the prompt template.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=114)** So let's see this in action.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=116)** So we've got our source code here that we are going to define this function, get_source_code.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=123)** We have a prompt template here that we're going to create, just a string.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=130)** Given the name of a function and source code, generate a English language explanation of that function.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=138)** And here's what we're going to do now.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=139)** We're going to create a FunctionExplainerPromptTemplate class.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=144)** It's in a subclass from the string prompt template and the base model.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=150)** And you can see here, it's just a custom prompt template that takes in a function's name as input and formats the prompt template to provide the source code of the function.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=160)** We'll have a validator here that just validates the input variables.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=166)** We are implementing the format method that's going to format the prompt using the function's name and source code.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=172)** So we'll retrieve the source code of the provided function, and then we're going to format the prompt using the function name and the source code.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=180)** And this is just a attribute to return the type of prompt that we have, in this case, a function-explainer.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=189)** So now we can instantiate this function-explainer, right?
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=194)** So before we do that, let's pull this up here.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=197)** Let's run that.
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=201)** And let's look at the type of object function explainer is, right?
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=208)** And we can see that is a FunctionExplainerPromptTemplate.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=212)** So now we can generate the prompt like so.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=216)** We're going to pass the function name.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=220)** In this case, it's get_source_code.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=224)** And you can see that this is now the prompt that we are going to send to our large language model.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=230)** So we'll go ahead and run that like so, and we'll get a response shortly, right.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=238)** There we have it, function get_source_code takes in a function, returns source code, so on and so forth.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=244)** Let's go ahead and rewrite this using the LangChain expression language.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=247)** I'll start actually by importing the appropriate output parser, which we'll do here.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=259)** And we'll construct it in the usual way.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=262)** Of course, we need to define our LLM.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=265)** So we've actually already done that above, right?
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=268)** So I don't need to define the LLM again, done it above, but I do need to figure out what I need to put for the prompt, right?
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=276)** And so for the prompt, it's actually just going to be the fn_explainer.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=282)** We'll pipe that to the LLM, and, of course, use the output parser.
>
> **[4:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=289)** Finally, we can stream.
>
> **[4:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=294)** The input variable to our function, if you recall, is going to be the function name.
>
> **[5:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=303)** We'll pass the function_name.
>
> **[5:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=306)** Function name, in this case, is get_source_code, right?
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=311)** So we'll say for chunk in this.
>
> **[5:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=315)** We're going to print the chunk and put that and flush equal to true.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=328)** We can invoke it like so.
>
> **[5:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=331)** And here we have another example.
>
> **[5:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=332)** It follows the same exact pattern what we saw above.
>
> **[5:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=334)** In this case, we're going to have a AlgorithmOptimizerPromptTemplate.
>
> **[5:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=338)** It's going to, again, accept a function.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=341)** It's going to validate the input variables.
>
> **[5:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=343)** It's going to format that for us.
>
> **[5:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=347)** We have an attribute here for prompt_type.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=349)** We have a function that we're going to define.
>
> **[5:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=351)** And then, of course, we can go ahead and run that.
>
> **[5:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=355)** So let's see this in action here.
>
> **[5:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=358)** Define the function.
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=361)** The algorithm_function is the input variable.
>
> **[6:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=364)** In this case, we can get the recursive function here and we'll get the answer like this.
>
> **[6:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=369)** Well first, we will format the prompt template, get the answer like so.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=375)** And, of course, for completeness, let's see how we would write this using the LangChain expression language, so we have the LLM chain.
>
> **[6:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=384)** In this case, the prompt we're going to pass is going to be the algo_optimizer.
>
> **[6:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=392)** And we'll send this to the LLM, send that to the output parser.
>
> **[6:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=399)** We'll say for chunk in llm_chain.stream.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=405)** In this case, we're passing in a dictionary.
>
> **[6:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=407)** And the input variable, in this case, can be algorithm_function, which will be the recursive, what do we call it?
>
> **[6:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=418)** We call it a recursive factorial.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=425)** We'll print the chunk.
>
> **[7:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=428)** We'll say end. There's that.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=431)** And flush is true.
>
> **[7:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=436)** And, of course, get the answer like so.
>
> **[7:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=440)** So you could see here that customizing a prompt template allows you so much more flexibility than just passing in a simple string.
>
> **[7:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=447)** So here, like we're sending in to our prompt template actual functions, and we're able to parse those functions and do what we need to do to get a response from our large language model.
>
> **[7:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/custom-prompt-templates?u=76281980&t=457)** So this opens up a whole range of possibilities.

> [!info]- Semantic Content
>
> **Code Keywords:** function (25), let (8), case, (8), pass (3), this. (2)
> **Exercise Files:** template (16), source code (9)
> **Code Identifiers:** get_source_code (4), algorithm_function (2), fn_explainer (1), function_name (1), prompt_type (1)
> **Env Vars:** llm (5)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Prompt pipelining
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=0)** - [Instructor] Prompt Pipelining is a powerful tool that's designed for those who seek modular and efficient approaches to prompt design.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=9)** There are several use cases where prompt pipelining can be useful.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=14)** For example, if you want to reuse prompt components like introductions, instructions, examples, et cetera, across multiple prompts.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=23)** Or if you want to split up a long prompt into smaller, logical chunks.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=27)** Another way you can use prompt pipelines are when you want to dynamically assemble prompts based on conditional or other logics.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=36)** Prompt pipelining will allow you to build prompts on the fly from those reusable parts.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=41)** You can also mix static text with templates that contain variables so that static text can provide structure while the templates can inject dynamic content.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=52)** You could also compose chat prompts from message templates and static messages.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=57)** Each piece can get appended as a new message.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=60)** You can also build up prompts from user provided components for customization.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=66)** Prompt pipelining allows prompts to be assembled from these modular parts.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=71)** Basically, you can use a prompt pipeline in any situation where you want to build up prompts in a reusable and composable way.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=79)** This is where prompt pipelining will give you a nice, clean interface to do that.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=86)** Let's start by talking about string prompt pipelining.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=89)** So for string prompts, templates are going to be interconnected in sequence, so you have the liberty to either utilize direct prompts or strings but it's essential to note that the initial element in the sequence should always be a prompt template object.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=105)** So let's see this in action here.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=108)** Here we're going to of course, import the prompt template.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=113)** Our prompt here is going to be a pipeline like so.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=118)** So you can see the input variables are coming from both of these elements.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=125)** And we can add more to this like so by a simple + sign.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=130)** And so let's just kind of print this out so it looks a bit cleaner.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=134)** prompt.template.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=143)** You can see here that it's just being built upon, and of course if we format it, it'll look like so.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=151)** So at this point you're probably wondering," Okay, I've seen multi-input prompts.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=155)** What's the difference between prompt pipelining and multi-input prompts?"
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=160)** Well, prompt pipelining composes multiple prompts into a single final prompt, whereas a multi-input prompt just allows you to pass multiple inputs to a single prompt template.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=172)** With pipelining, each component can be formatted independently before being joined.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=178)** Multi-input prompt will just format a single template.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=181)** Pipelining allows you to join components in a linear sequence, whereas a multi-input prompt is just a single template that's handling multiple inputs.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=192)** Pipelining also allows the reuse of components like introductions, examples, et cetera.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=198)** Multi-inputs prompts are focused on handling multiple query inputs.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=204)** So pipelining output is a single prompt, whereas multi-input output is the completion based on multiple inputs.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=211)** Pipelining lets you build up prompts modularly.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=214)** Multi-input prompts is just one template handling multiple inputs.
>
> **[3:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=219)** So to summarize that, prompt pipelining composes multiple prompts into a final prompt in a linear sequence.
>
> **[3:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=228)** Multi-input prompts just allow a single template to handle multiple input variables in parallel.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=235)** Pipelining focuses on modular prompt building while multi-input prompts handle multiple query inputs.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=243)** So let's see this in use in a chain.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=246)** So we have our prompt defined above here, and this case, that prompt is going to be " I'm heading to (destination), recommend a great (activity).
>
> **[4:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=254)** Also any local delicacies I should try?"
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=257)** So this is the prompt that we're now about to format.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=260)** We'll just instantiate an output parser.
>
> **[4:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=263)** We'll construct our prompt chain and remember the two input variables we're going to pass in here and we get the response like so.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=273)** And now to this prompt, before we execute this, I want to show you what the result is here.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=282)** So now we're going to add to this prompt a piece here, " How do I greet the locals in a jolly, informal manner?"
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=288)** And then we can look at the prompt here and you can see that we now have that part as part of the prompt.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=296)** Send that like so and we get the response.
>
> **[5:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=303)** Another example use case, let's say we want to build up a travel chat bot.
>
> **[5:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=308)** So we'll create a travel chat bot class.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=310)** It will take in a base prompt.
>
> **[5:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=314)** We're then going to have the ability to just add stuff to the prompt.
>
> **[5:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=318)** And then we can of course run the chain.
>
> **[5:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=322)** We can run it like so, and of course, build upon it like that.
>
> **[5:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=329)** And again, like so.
>
> **[5:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=333)** So essentially the travel chat bot, all I did was just create a reasonable class that we can use and we can pass in actually any number of things to this, but we'll use it as chat bot.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-pipelining?u=76281980&t=345)** Next up, we're going to take a look at the Chat Prompt pipelines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), static (3), pass (3), case, (2), this, (2)
> **Exercise Files:** template (8)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Chat prompt pipelining
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=0)** - [Instructor] Let's now talk about chat prompt templates.
>
> **[0:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=2)** So we're going to pick up in the exact same notebook where we left off in the previous video.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=7)** Recall that a chat prompt is made up of a list of messages.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=10)** And for developer experience, LangChain has added a convenient way to create these prompts.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=17)** In pipelines, each new element is going to be a new message in the final prompt.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=22)** So there's a few key things that you need to know about chat prompt pipelining in LangChain.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=28)** One is that chat prompt pipelining makes it easy for you to create chat prompts using reusable message components.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=35)** So each addition to the pipeline translates to a new message in the final chat prompt.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=42)** You can seamlessly integrate static messages, such as human messages or AI messages, with variables containing message templates.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=53)** The culmination of all this is a unified chat prompt template, which is great for formatting and integrating into LangChain.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=60)** This structure is going to promote the effortless reuse of components, including instructions and examples.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=67)** This approach makes it easy to dynamically construct chat prompts using modular blocks.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=74)** This ensures flexibility and efficiency.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=78)** So the chat prompt pipelining composes chat prompts from reusable message templates and static messages.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=85)** It's going to allow you to dynamically construct prompts from a logical blocks in a user-friendly way.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=92)** The end result is going to be a single reusable chat prompt template.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=96)** So let's see this in action here.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=99)** We'll start by importing chat prompt templates and human message prompt templates.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=105)** We'll import as well the message templates for human, AI, and system message.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=110)** We'll instantiate and output parser for our chain.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=112)** And, of course, the LLM.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=114)** So here's going to be the prompts.
>
> **[1:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=117)** So we're going to set the scene with a cockney-themed system message, so "Welcome to the East End Cockney Chat."
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=124)** And so we're going to construct a new flow with dry humor, right?
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=127)** So we have a new prompt.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=128)** We're going to start with that prompt that we defined above, the system message prompt.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=132)** To that, we're going to add a human message.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=134)** To that, we're going to add the AI message.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=137)** And then the input, which is going to come now from the user.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=143)** So, of course, we can format the message like so.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=146)** So this input, "No, what about it?"
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=148)** will be passed into there.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=150)** Now let's go ahead and print the prompt so we can see what it looks like.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=155)** Let's make it a little bit easier to look at, so we can say print new_prompt.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=161)** This will have the dot messages attribute and we can look at that.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=166)** Oh, a little bit of live debugging there.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=172)** Now, we can see what the messages look like. Great.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=176)** So let's go ahead now and create a chain where we have our new prompt.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=181)** We're going to send this to our language model and parse it with our output parser.
>
> **[3:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=187)** There we go, and so this is how we can do prompt pipelining using chat prompt messages.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chat-prompt-pipelining?u=76281980&t=193)** In the next video, we're going to pick up right where we leave off here in this notebook, and we're going to talk about prompt composition.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), static (2)
> **Cross-References:** previous video (1), in the next (1)
> **Exercise Files:** template (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** new_prompt (1)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### Prompt composition
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=0)** - [Instructor] Picking up in the same notebook where we left off in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=4)** Let's now talk about prompt composition.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=7)** Prompt composition is useful when you want to reuse parts of prompts.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=12)** This could be done using the pipeline prompt.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=15)** A pipeline prompt has two main parts.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=19)** One is the final prompt, which is the prompt that will be returned, and the final prompt itself is actually made up of our pipeline prompts, which are a list of two pools, which consist of a string name and a prompt template.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=35)** Each prompt template will be formatted and then passed to a future prompt template as a variable with the same name.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=43)** Let's see this in action, let's go ahead and import the pipeline prompt template and the regular prompt template.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=51)** I'm going to construct a full prompt, which is going to have the following input variables, introduction, example, and start.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=59)** So let's construct that full prompt.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=62)** So let's just real quickly inspect the full prompt so we can look at the input variables, right?
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=72)** So the input variables are going to be example, introduction and start.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=79)** Now what I'm going to do is I'm going to define a introduction template.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=84)** So the introduction prompt, we'll have an input variable.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=91)** Let's take a look at that, right?
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=92)** I'll have you guess what it is as I am typing it out.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=96)** Input variables going to be person.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=99)** And then we'll have another example template.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=101)** So here's an example of an interaction Q and A, whatever example prompt here.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=110)** And of course you can guess what the input variables are going to be for this example prompt.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=115)** It'll be example Q and example A.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=120)** And then finally we're going to have a start template.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=124)** And the start template has one input variable called input.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=130)** Great. Now let's go ahead and take a look at that full prompt that we defined at the very top of this section.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=139)** Right? So note, the full prompt has the input variables example, introduction and start.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=146)** What I'm going to do now is create a list of two pools where now introduction is going to be the introduction prompt, example is going to be that example prompt.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=158)** And then start will be the start prompt.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=161)** We're going to put all this together and come up with a pipeline prompt.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=166)** Now I want you to take a second here to think about what the input variables are now going to be for this pipeline prompt.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=175)** So we started off with the full prompt and we get these pipeline prompts.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=182)** So take a second to think about what the input variables are going to be.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=186)** The input variables are now the input variables from each one of these prompts here, right?
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=197)** Let me just format this for you so we can see exactly what the full prompt is going to look like.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=204)** It's going to look something like this, right?
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=208)** So now we can construct our chain.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=211)** So we'll construct our chain by instantiating the language model, setting up the chain, and then invoking the chain.
>
> **[3:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=218)** Unfortunately, using this pattern, we're not able to stream the outputs, so we're just going to have to invoke the chain and wait for the response.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=230)** There you go, seems accurate that Elon Musk's favorite social media site is in fact, Twitter.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=236)** Here is another example.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=237)** Let's say you want to do a cooking show chat bot.
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=240)** You can, you know, do the same exact pattern that we've done before.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=243)** Instantiate the full template.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=246)** I have various introduction templates.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=248)** So these introduction templates are set here, but of course you can define them outside.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=253)** You'd have to rewrite the class, but of course you can define these as inputs to the class and you can run them like so.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=265)** And unfortunately, this pattern with the prompt composition does not yet support streaming.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=270)** So we do have to wait for the answer in these scenarios.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-composition?u=76281980&t=273)** And there you have it, so now you've got an understanding of prompt pipelining for chat messages as well as composition for prompts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (1), class, (1)
> **Exercise Files:** template (10)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### Few-shot prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=0)** - [Instructor] Earlier in the course, we talked about the ability of large language models to perform tasks with zero-shot prompting, meaning they've never seen this example before and they weren't specifically trained on that task.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=13)** There's also a emergent ability in large language models called few-shot learning.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=20)** So few-shot learning is just a form of in-context learning where in the prompt you're providing a few examples to help the language model perform on the tasks that you want it to.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=31)** LangChain offers a FewShotPromptTemplate that's going to allow you to provide a few examples to prime the model before your main prompt.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=41)** This is useful for providing relevant context and, quote, unquote, warming up the model on your task.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=48)** So when do you want to use a FewShotPromptTemplate?
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=51)** Well, you want to use it if your task requires some background context to perform well.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=56)** For example, summarization tasks often benefit from example summaries.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=61)** If you want to bias the model towards a certain style or tone, example outputs can help with that.
>
> **[1:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=69)** So FewShotPromptTemplates just allow providing sample input/output to prime the model for your task.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=75)** Use it when you need extra context style priming or have very short prompts.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=81)** To create a FewShotPromptTemplate, you need to provide a list of example dictionaries with input and output keys.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=90)** Each example should be a dictionary with the keys being the input variable and the values being the values for those input variables, then you want to create a formatter for the few shot examples, and then you can feed these examples and the formatter to the FewShotPromptTemplate.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=108)** This is going to return a prompt with your examples, then the main input.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=112)** So some of the key aspects here are examples need to demonstrate the desired input/output format.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=118)** Examples should provide some relevant context, and the main prompt should be formatted to match the style of the examples.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=127)** This allows priming the model in a more nuanced way than just providing a generic instruction like answer the following geography question.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=137)** So the FewShotPromptTemplate allows you to assemble a prompt that's going to guide the model using these targeted examples rather than just high level instructions.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=147)** This again will result in more nuanced prompt that's going to prime your model for the specific task.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=152)** So we start by importing the FewShotPromptTemplate from a LangChain, and we'll have a set of examples here.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=160)** So this example is going to be a list of dictionaries.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=164)** Dictionary is going to be some question and then some answers.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=169)** This answer is really intended to be the way you'd want the model to kind of think through, answer to your question.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=177)** So we're providing it a bunch of different examples for how I want this thing to go and answer any question I give it.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=186)** So we've got a list of examples there.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=189)** And again, each element of the list is a dictionary.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=192)** The dictionary is going to have the key for the input variable along with this value.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=197)** And we're going to go ahead and create our example prompt template like so.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=203)** Now we're going to feed the examples and the formatter to the FewShotPromptTemplate.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=211)** So we have the examples here, and then the example prompt.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=216)** Putting a suffix here because I want the prompt to end with Question:, and output indicator, if you recall, for the model.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=225)** And the input variable here is going to be input.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=231)** And so you can see here our final prompt and we have the question here, and the model should complete its answer like so.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=248)** So let's go ahead and actually let's turn down the temperature down to 0.1 and see what the response looks like.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=257)** And there you go.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=258)** So you see that it's actually answering in the way that we have described it with those examples, which is exactly the behavior that we want.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=268)** Now we can actually engineer the prompt, and you'll see what I mean by that.
>
> **[4:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=273)** So language models are continuing to expand their context capacity.
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=278)** It's becoming more common to incorporate a lot of different examples in your prompt.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=284)** But as the diversity and number of classes increase, manually curating examples for every class is a challenging task.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=292)** And this results in a reliance on kind of the random selection from a collection of examples.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=299)** What I want to do here is create some few-shot examples in a more smart way.
>
> **[5:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=304)** And I'm going to do that using a dataset.
>
> **[5:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=306)** And the dataset we're going to be using here is from Hugging Face.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=309)** It's the intent classification dataset.
>
> **[5:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=312)** And so you can see here we've got a intent, and then you know the accompanying classification, right?
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=320)** So let's just take again a look at what that looks like.
>
> **[5:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=323)** And it looks something like this, right?
>
> **[5:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=326)** So now I'm going to define a function, and this function is going to generate a prefix string for the prompt, and it's going to help guide the language model in the intent classification.
>
> **[5:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=336)** So it's going to take a dataset, which in this case is going to be a list of dictionaries or a Pandas DataFrame needs to have the text and the intent columns, and it's going to return a formatted string.
>
> **[5:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=348)** So let's go ahead and see what that looks like here.
>
> **[5:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=352)** So the prefix is going to be like so.
>
> **[5:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=354)** Each input is associated with the user intent.
>
> **[5:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=358)** Choose from the following intents, and these are all the different intents that the model is going to choose from.
>
> **[6:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=364)** Now we're going to get examples, and that's what this function is going to do.
>
> **[6:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=369)** So extract one random example from each unique intent present in the dataset, and let's see what that looks like once we run this.
>
> **[6:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=379)** All right, so here we have some random examples that we're going to be using for intent classification.
>
> **[6:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=386)** And then finally, we're going to construct the prompt.
>
> **[6:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=389)** So the prompt is going to be a k-shot prompt, meaning, you know, however, many examples we want to incorporate.
>
> **[6:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=395)** It's going to have to prefix the examples and then the target text that we want to classify.
>
> **[6:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=401)** We'll construct the prompt template using the initializer.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=405)** And the final prompt that we're going to use is going to be a FewShotPromptTemplate.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=409)** The example_prompt will be our prompt template that we defined above.
>
> **[6:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=414)** The examples will be those examples that we have selected.
>
> **[6:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=418)** To get the prefix, we'll use this get prefix function.
>
> **[7:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=422)** The suffix is text, so this is the output indicator and the input will be the text variable.
>
> **[7:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=428)** So let's see what this looks like.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=431)** So each input belongs is associated with the user intent.
>
> **[7:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=433)** Obviously, I made a spelling error there.
>
> **[7:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=436)** You can go ahead and remove that belongs, but GPT-4 will be smart enough to know what I meant.
>
> **[7:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=441)** So each input is associated with a user intent.
>
> **[7:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=445)** Choose from the following intents.
>
> **[7:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=446)** And then I'm giving it examples, right?
>
> **[7:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=448)** Here's some text.
>
> **[7:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=450)** This is the label, here's some text, there's a label, so on and so forth, right?
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=455)** So now what I want the language model to do is give me the label for this, Save Free Smoke by AP Dhillon to my songs.
>
> **[7:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=464)** And let's see what it comes up with and add to playlist, and there you have it.
>
> **[7:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=470)** And so this is how FewShotPromptTemplates work.
>
> **[7:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=473)** In the next video, I'll show you how to use FewShotPromptTemplates for chat prompt templates.
>
> **[7:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates?u=76281980&t=478)** So I'll see you in that video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (4), this, (2), from. (1), this. (1)
> **Cross-References:** earlier in (1), we talked about (1), in the next (1)
> **Exercise Files:** template (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** example_prompt (1)
> **Env Vars:** gpt (1)
> **Versions:** 0.1 (1)
> **Analogies:** for example (1)

#### Few-shot prompt templates for chat
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=0)** - [Instructor] Few-shot examples are used to provide sample interactions to a chat model, which helps guide its behavior.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=7)** The purpose of few-shot prompt templates is to select examples dynamically based on the input and format them into a final prompt to provide for the model.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=18)** These templates demonstrate the desired input and output format as well as the content.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=23)** This helps ensure that the model can provide relevant and accurate responses.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=27)** For chat models, few-shot examples typically consist of a simulated conversation between a human and a AI speaker.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=37)** Each example has a human message input, and expected AI response output.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=43)** few-shot examples for chat models differ from few-shot examples for standard language models in the following ways.
>
> **[0:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=50)** One is they're formatted as dialogues, rather than just input-output pairs.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=55)** Two, the examples model a conversation between two speakers rather than just an input to an output.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=63)** Three is that they help teach the conversational flow and tone in addition to context.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=70)** To create a few-shot example for a chat model, you need to do a few things.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=75)** One is come up with a few different example conversations that are going to be representative of your use case.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=82)** You want to format them as alternating human and AI messages.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=85)** Then you want to pass this to your chat model wrapped in the few-shot chat message prompt template.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=94)** The chat model will condition on these examples when it's making its predictions.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=99)** So to sum that up, few-shot chat examples demonstrate the desired conversational flow to the model through these formatted message examples.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=109)** This is going to guide the model to converse in the way that you want it to converse.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=116)** Let's talk briefly about fixed examples.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=119)** Fixed examples are the most basic and common few-shot prompting techniques.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=124)** This way you can select a chain, evaluate it, and avoid worrying about additional moving parts in production.
>
> **[2:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=131)** So the basic components of the template are examples, which is going to be a list of dictionary examples to include in the final prompt, and an example prompt, which is going to convert each example into one or more messages through its format messages method.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=148)** A common example would be to convert each example into one human message and one AI message response, or a human message, followed by a function call message.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=159)** Later on, you'll see how to dynamically select prompts using example selectors.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=165)** So let's see this in action, and here are some examples that we want to use.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=173)** These are all related to "Back to the Future."
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=175)** So pretty much what I'm saying is if I ask you a question about "Back to the Future," respond about the movie.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=181)** If the question is not related to "Back to the Future," just respond with a verse from the song, "Power of Love," which was on the "Back to the Future" soundtrack.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=190)** So let's go ahead and assemble the prompt, and you can see it looks something like this.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=196)** Now we have our system message.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=197)** You're a "Back to the Future" fanatic bot.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=200)** You only answer questions about "Back to the Future."
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=201)** If you're asked a question that is not related to any of the "Back to the Future" movies, simply reply with lyrics from the soundtrack of the movie.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=209)** So the final prompt, let's print out what the final prompt looks like.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=217)** And you can see here it's got the example.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=220)** So it's the template, the system message template, the few-shot chat message prompt template.
>
> **[3:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=227)** These are the examples, the human message, which we're going to pass in the AI message.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=235)** So let's go ahead and instantiate the language model.
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=240)** Construct a chain, and let's stream our response.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=245)** Input Burger King gym diner.
>
> **[4:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=249)** So let's just switch this up a little bit.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=252)** What scene did we see the Burger King gym and diner in?
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=260)** Let's see how well GPT-3.5 knows "Back to the Future," 'cause this is the opening scene of "Back to the Future" when he's skateboarding behind a Jeep.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=270)** Yeah, so GPT-3.5 is in fact not a "Back to the Future" fanatic.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=276)** Power of love is curious thing, makes one man weep, another man sing.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=279)** So obviously, the answer of this should have been enchantment under the sea dance.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=284)** It got that part right, so that's quite nice.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=287)** It responded with that for my name, a verse from the song.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=293)** Alright, so now we see how to use few-shot templates for chat.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/few-shot-prompt-templates-for-chat?u=76281980&t=297)** We also see that GPT-3.5 doesn't know much about "Back to the Future," sadly, but I encourage you to think about now how you can use few-shot templates for chat in your applications.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (2), case. (1), function (1), this. (1)
> **Exercise Files:** template (5)
> **Env Vars:** gpt (3)
> **Versions:** 3.5 (3)
> **Speakers:** - [instructor] (1)

#### Introduction to example selectors
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=0)** - [Instructor] Example selectors in LangChain are classes that are responsible for selecting which examples to include in a prompt.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=8)** They're useful when you have a large number of examples available, but need to select a subset of them to include in your prompt.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=15)** Some key things to know about example selectors is that they implement a select_examples method, which takes in the input variables and returns a list of examples to include in the prompt.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=29)** There are several different strategies for selecting examples.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=34)** For example, you can select based on semantic similarity to the input, you can select based on maximal marginal relevance, so you can balance similarity and diversity using that.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=46)** Or you can select based on prompt length.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=48)** Example selectors allow prompts to dynamically choose examples based on the inputs rather than having fixed examples.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=57)** They help you manage long prompts by only including the most relevant examples for the given inputs.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=64)** New example selectors can be implemented using the BaseExampleSelector class and defining a custom select_examples method.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=74)** So let's go ahead and implement a CustomExampleSelector before going into some of the example selectors that LangChain offers us out of the box.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=85)** So here what we're going to do is we're going to implement a random example selector class.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=91)** This is going to inherit from the BaseExampleSelector class, and it needs to implement the select_examples method.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=99)** So that's what we're going to do here.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=101)** You can see that we need to first import the BaseExampleSelector, and then we can define our class here, which is going to be called CustomExampleSelector, which inherits from the BaseExampleSelector, and we implement the add_example and select_example methods.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=123)** So now we can have some examples just for some recipes and initialize the example selector.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=129)** Great.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=130)** Now let's see this thing in action.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=132)** Note that the use of this pattern that you see here, a recipe, a recipe, this is just a placeholder for a generic representation, it doesn't affect the outcome of the method.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=142)** In a more sophisticated example selector the input variables might be used to filter or prioritize the selection of examples based on some criteria.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=151)** But in the provided example right here, we're not utilizing that.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=156)** So here's our example selectors.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=159)** You can see these are examples that we have.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=160)** We can add an example to that and now we can randomly select an example.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=168)** And there you have it, there's a introduction to example selectors.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/introduction-to-example-selectors?u=76281980&t=171)** Now we're going to see several different example selectors in action.

> [!info]- Semantic Content
>
> **Code Identifiers:** select_examples (3), add_example (1), select_example (1)
> **Code Keywords:** let (2), class. (1), class, (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Length-based example selector
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=0)** - [Instructor] One of the simplest ways to select examples for your prompt is by length.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=6)** And so what we're going to see how to do in this video is use the length based example selector, which does what it says on the tin.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=14)** It selects examples based on their length.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=17)** This is useful for situations where you're worried about the total length of the constructed prompt, especially given the context limitations of some models.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=27)** So we'll start by just importing the prompt template, as well as the few shot prompt template, and the length based example selector.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=35)** We'll define our examples.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=37)** We will define our example prompt, and then now we can use the length based example selector.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=42)** So essentially, the primary goal of this selector is to adjust the number of examples included in the prompt based on the length of the input and the examples themselves.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=52)** Again, this is useful when you're worried about the total length of the constructed prompt.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=57)** So it works like this.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=58)** When you're adding a new example using the add example method.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=62)** The example is formatted using the provided example prompt, and its length is calculated using the get text length function.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=72)** This length is then stored in the example text lengths list.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=77)** So when we're selecting examples using select examples, the method will calculate the length of the provided input.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=84)** It's going to determine how much length is left for examples by subtracting the input length from max length.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=91)** And it's going to iteratively check each example's length against the remaining length.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=96)** If an example fits, it's going to be added to the list of selected examples, and its length is going to be subtracted from the remaining length.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=105)** And this process will continue until the remaining length is exhausted, or all examples have been considered.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=112)** And this allows it to dynamically select more examples for shorter inputs, and fewer examples for longer inputs, to keep the overall prompt length under a max length.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=123)** So in summary, it's going to select examples based on length to try to construct prompts that don't exceed the context window of the model.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=132)** And so it does so just like this.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=134)** So we instantiate the length based example selector with our examples, the example prompt, and the max length.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=142)** And we have our dynamic prompt here.
>
> **[2:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=145)** We can put in a long prompt, and you can see for the long prompt, it doesn't select any examples because we do not have any space left.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=155)** We can also give it a short string.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=157)** We can say, for example, short string feeling wired.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=162)** And then you can see here that actually ends up selecting examples.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=166)** Same prompt, but it's selecting now based on length.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=168)** You can see here this input was longer than that entire length that we're giving at 15, and it did not add any examples, whereas this is less than that, and we do have an example.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=180)** That's it for the length based selectors.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/length-based-example-selector?u=76281980&t=183)** Coming up, we'll pick up on the same spot in the notebook and learn about max marginal relevance.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), function (1), continue (1)
> **Exercise Files:** template (2)
> **Analogies:** just like (1), for example (1)
> **Cross-References:** coming up (1)
> **Speakers:** - [instructor] (1)

#### Max marginal relevance example selector
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=0)** - [Instructor] Maximal marginal relevance, or MMR, is a technique often used in information retrieval to balance between the relevance of documents, or examples in this case, and the diversity among them.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=17)** The idea is to avoid redundancy in the selected set of documents or examples while ensuring that they're still relevant to the query.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=27)** Here's how it works.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=28)** First, there is a relevance calculation that's done.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=32)** So for each example we calculate its cosine similarity with the input.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=38)** This gives us a measure of how relevant each example is to the input.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=43)** There's also a diversity calculation.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=46)** For each example, we are going to calculate its cosine similarity with the already selected examples.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=53)** This will give us a measure of how similar the example is to what's already been chosen.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=59)** And then there's the MMR score calculation.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=64)** For each example, we are going to compute its MMR score as a combination of its relevance to the input and its diversity from the already selected examples.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=76)** And the formula is typically expressed like so.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=79)** MMR = lambda times relevance minus one minus lambda times diversity.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=87)** Lambda is a parameter between zero and one that controls the trade-off between relevance and diversity.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=95)** Then we will iteratively select the examples with the highest MMR score, add it to the selected set, and then update the diversity calculations for the remaining examples.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=109)** This process will continue until a stopping criteria is met, such as a predefined number of examples or until the MMR score falls below some threshold.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=121)** In LangChain, the MMR is implemented in the MaxMarginalRelevanceExampleSelector.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=130)** And we can take a look at the examples that we have here in the example prompt.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=137)** So given an input, produce a output and these are going to serve as a set of few shot examples.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=146)** Let's talk in a little bit more detail about how this class is going to be used in LangChain.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=152)** So the MaxMarginalRelevanceExampleSelector is a specialized class that's designed to select examples based on the MMR criteria.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=161)** So again, MMR is balancing the trade off between the relevance, so how similar an example is to a given query, and diversity, how different the selected examples are from each other.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=174)** And this is going to give us a comprehensive set of examples that are relevant to the query, yet diverse.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=181)** So this class, the MaxMarginalRelevanceExampleSelector, we are going to use the from_examples method to create a instance of this class.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=193)** So we're going to initialize this with a set of examples, as well as the embeddings model that we're going to use, a vector store.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=203)** And then two other parameters for k and fetch_k.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=207)** Fetch_k is the number of examples to initially fetch before re-ranking them using the MMR algorithm.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=214)** And k is the number of actual examples that we want to include in the prompt.
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=223)** If you want more information about the MMR selector, you can always run the help on it.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=230)** Great, so now we've got our MMR selector instantiated.
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=234)** Next, we need to create a prompt template.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=237)** In this case, we're going to leverage a few shot prompt template.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=241)** So the example_selector is now the argument that we are going to pass in to this.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=248)** Along with the example_selector, we have the prompt, the prefix of the prompt is what's the opposite of, suffix will be the input where we'll inject that particular adjective and then the output indicator.
>
> **[4:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=263)** And so we can then run the following.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=267)** So we get the adjective buzzed.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=269)** And according to this, these are the two most similar examples to that.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=276)** That's all for the MMR selector.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/max-marginal-relevance-example-selector?u=76281980&t=279)** In the next video, we are going to see the NGramOverlapExampleSelector in action, picking up from the exact same notebook that we're working in right now.

> [!info]- Semantic Content
>
> **Env Vars:** mmr (13)
> **Code Keywords:** lambda (3), case, (2), continue (1), let (1), class, (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** example_selector (2), from_examples (1)
> **Exercise Files:** template (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)

#### N-gram overlap example selector
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=0)** - [Instructor] The n-gramOverlapExampleSelector selects and orders examples based on which examples are most similar to the input according to an n-gram overlap score.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=11)** But what is an n-gram?
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=13)** So consider the following sentence, "Sunsets are always beautiful."
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=18)** From this sentence, you can construct a unigram, bigram, and a fourgram.
>
> **[0:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=23)** Unigram would just be a sequence of individual words, so this sentence actually has four unigrams.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=31)** Bigrams would be pairs of words, so this sentence has three bigrams, sunsets are, are always, and always beautiful, so on and so forth.
>
> **[0:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=43)** And the N for n-gram just indicates that you can have as many in a sequence as you'd like.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=48)** So that value of N is entirely up to you.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=52)** But here I've represented n-grams of bigrams, trigrams, and four grams.
>
> **[0:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=58)** The n-gram overlap score relies on the sentence blue score for overlap calculation.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=65)** And this overlap score is actually a floating point number between zero and one.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=70)** And it is going to select and order examples based on their n-gram overlap score with a given input.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=79)** So this overlap score is again, a metric used in machine translation to evaluate a translated sentence's quality.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=90)** So the selector provides the option to establish a threshold score.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=95)** So examples with a n-gram overlap score less than or equal to this threshold will be excluded, by default the threshold is set at negative 1.0, which means it will not exclude any examples, but only reorder them.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=112)** In the case of a threshold value being passed that is greater than 1.0, the function is going to exclude all examples and return an empty list.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=121)** The threshold is equal to 0.0.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=124)** It'll sort the examples based on their n-gram overlap score and exclude those that have no n-gram overlap score with the input.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=134)** Let's go ahead and instantiate the n-gram overlap selector.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=139)** We're going to use these examples and we're going to set up our prompt.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=146)** Now, when we instantiate the n-gram overlap selector, you notice that we need to pass in a list of examples, and that's what we're doing here.
>
> **[2:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=157)** We also need to pass in an example prompt, which we've just defined above.
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=163)** And of course, this is where we'll set the threshold.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=165)** I'm going to keep it right now actually at negative 1.0.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=170)** Now that we have our example selector instantiated, we can construct our few shop prompt template.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=176)** We'll pass the example selector, we'll pass the example prompt as well as the prefix suffix and indicate what the input variable is.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=188)** So let's take a look at something real quick.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=190)** I want to show you what the example prompt is.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=194)** See here we've got one value, the input and the other value here, the output and the template is just simply this input output, right?
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=204)** The dynamic prompt now is going to take sentence as an input, and then it's going to help us to parse through our examples.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=215)** It'll inject the sentence there and it'll construct a prompt for us.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=220)** So let's see what that looks like here.
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=223)** So here is this constructed prompt.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=226)** You see here we left the threshold at negative one.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=230)** So all it is doing is not excluding any examples, but simply reordering them based on their overlap.
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=240)** Here's another sentence, right?
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=244)** And now we can play around with a little bit of the threshold.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=247)** So actually I'm going to copy the same exact sentence.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=252)** Let's see what happens when we toggle the threshold to a different value.
>
> **[4:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=255)** In this case, I'm going to set the value to zero.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=257)** So setting the value to zero is just going to sort the examples based on their n-gram overlap score and then exclude those that have no n-gram overlap with the input.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=268)** So you see here, it looks like there is no actual n-gram overlaps with this sentence, but what if we kick this number up a notch, maybe .25, and it'll be the same.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=279)** Now, if we set this to be a negative value 0.25, we can see here that a value less than zero is just going to behave the same as if it was negative one.
>
> **[4:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=298)** And we can see another example here.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=302)** And that's pretty much a high level overview of how the n-gram overlap selector works.
>
> **[5:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=306)** You're free to use this with better examples if you'd like and get more of an intuition about how it works.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/n-gram-overlap-example-selector?u=76281980&t=313)** But you now understand how the n-gram overlap selector works and how you might be able to use it to select the correct examples to include as part of your prompt.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (4), function (1), case, (1)
> **Versions:** 1.0 (3), 0.0 (1), 0.25 (1)
> **UI Navigation:** toggle (1), select the (1)
> **Exercise Files:** template (2)
> **Code Identifiers:** gramoverlapexampleselector (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### Semantic similarity example selector
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=0)** - [Instructor] The semantic similarity example selector is designed to select examples based on their semantic similarity to a given input.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=10)** So it's a type of example selector that's going to leverage embeddings and a vector store to find the most semantically similar examples.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=19)** In order to instantiate this, we need to define a few things in the constructor.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=26)** That is the vector store.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=28)** The number of examples to select the example keys, these are optional to filter the examples if they're provided.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=36)** Only these keys will be considered when selecting the examples and also the input keys.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=42)** And these are optional keys to filter the input.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=44)** So if provided the searches based on these input variables, instead of considering all the variables.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=52)** It has the same methods that we've seen with previous example selectors, that is add example, select examples, and it can be instantiated with the from examples method.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=64)** So again, recap on how it works.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=67)** It's leveraging embeddings to represent the semantic meaning of examples and input variables.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=74)** When you want to select examples that are semantically similar to a given input, you can provide the input variables to the select examples method.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=83)** The method will then query the vector store to find the most similar examples based on their embeddings.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=89)** And then the return examples can be filtered based on the examples keys if they're provided.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=95)** So let's take a look at the examples again, it is these input output pairs.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=100)** Our example prompt is going to look like that.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=105)** All right, so we're go ahead and instantiate the example selector by passing in our examples.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=110)** The embedding model that we're going to use, the vector store and the K, meaning the number of similar examples we want to include in the prompt.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=119)** And then we also instantiate the prompt.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=122)** So again, this will be our few shot template.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=125)** We're going to pass in the example selector to the view shot template.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=128)** We'll pass in the example prompt, which we defined above, as well as the prefix, suffix, and the input variable.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=135)** Now we can go ahead and run this, and you can see here that we get the 1, 2, 3, 4 most similar input output pairs to this sentence.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=154)** And there you have it, this we can finally send into our language model and get an answer and a response.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=161)** So I encourage you to write the code for that on your own.
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/semantic-similarity-example-selector?u=76281980&t=163)** You've seen how to construct a change several times by this point, so I'm sure you can take it from here.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), pass (2), let (1)
> **CLI Commands:** find (2)
> **Exercise Files:** template (2)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Partial prompt templates
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=0)** - [Instructor] Partial prompt templates in LangChain offer a flexible way to work with prompt templates by allowing users to predefine a subset of required values.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=12)** This is especially beneficial when some values are known beforehand.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=17)** This enables a more streamlined approach to formatting the remaining values later on.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=24)** LangChain provides two primary methods for creating partial prompt templates.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=29)** One is partial with strings.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=32)** This is going to allow users to input string values for specific variables during the creation of the partial prompt template, and is ideal for scenarios where certain variable values are obtained earlier than others.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=47)** Next is partial with functions.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=49)** This is going to enable users to input functions that return specific values.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=55)** This is useful for dynamic variables like date and time, which need to be fetched in real time.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=63)** Let's see this in action.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=66)** So I want you to consider a prompt that necessitates multiple variables.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=73)** So if certain values like name and location are already known, a partial prop template can be crafted with those preset values.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=82)** This partial template can then be used more efficiently, requiring only the input of the remaining variables, such as time.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=93)** For instance, if you have a personalized story prompt that might need variables like name, location, and time.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=98)** If the name and location are predetermined, a partial template can be created with those values.
>
> **[1:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=105)** This simpler partial template can then be utilized to gather only the outstanding variables like time.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=113)** And by using the partial with strings method, you can optimize your workflows and ensure that the process isn't halted due to the unavailability of some source variables.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=126)** So let's see this in action here.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=127)** So we're going to take this prompt template, format it with Alice.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=132)** Oh, what happened here?
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=134)** Notice we have a key error for user activity.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=138)** Huh.
>
> **[2:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=138)** Well, we can circumvent this by casting prompts as partial and saying that the username is Alice.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=150)** And we see here that we have a prompt, the template, hello, username, the partial variable being prefilled to Alice, and this being the remaining input variable.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=164)** And now we can finally pass that in.
>
> **[2:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=165)** Hello Alice, hope you're enjoying your time at the Wonderland Resort chasing our white rabbits.
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=172)** Using functions in partial prompt templates gives you a dynamic way to incorporate real-time data into your prompts.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=179)** This approach shines when you need to consistently fetch and update certain variables.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=185)** A good example is when you're integrating real-time conditions like the current weather.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=189)** So imagine designing a website greeting that adjusts based on the day's weather.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=194)** So manually updating the weather condition in the prompt every time is not practical.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=199)** Also, passing it as a regular input each time will be super tedious.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=203)** So to streamline this, you can use a function within the partial prompt template that will automatically fetch the current weather whenever the prompt is used.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=212)** So here we have a function here that's just going to get weather, we're going to define a prompt template.
>
> **[3:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=218)** The partial prompt template will be this prompt template casted as partial, and the weather value will be determined by this function, and we can take a look at that right now with everything parsed in.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=235)** Great, and here's another example as well.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=241)** And there you have it, now you've seen the flexibility that partial prompt templates provide you.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/partial-prompt-templates?u=76281980&t=245)** So you don't need to fill in the values for the input variables all at once, you can cast them as partial, pre-fill some values, and then leave other ones to be inputted further along in the process.

> [!info]- Semantic Content
>
> **Exercise Files:** template (11)
> **Code Keywords:** function (3), let (2), pass (1), super (1), this, (1)
> **Analogies:** such as (1), for instance (1), imagine (1)
> **Speakers:** - [instructor] (1)


### 6. Prompting Techniques

#### Chain of thought
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=0)** - [Instructor] Before we get into chain-of-thought prompting, I just want to point out that for this notebook, you'll notice that we're using a T4 GPU.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=8)** This is a GPU that is available to you on the free tier of Google Colab.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=13)** And we're using the T4, because we're going to make use of a embeddings model to embed a data set, and you'll see when we do that further along in this notebook.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=24)** But for now, let's go ahead and jump into chain-of-thought prompting.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=28)** So chain-of-thought prompting was introduced by Wei et al. in a 2022 paper called, "Chain-of-Thought Prompting Elicits Reasoning "in Large Language Models."
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=39)** Chain-of-thought prompting emerged from the need to enhance the reasoning capabilities of large language models when faced with complex tasks.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=49)** But what is chain-of-thought prompting?
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=52)** Well, it is a technique that guides language models through a series of intermediate reasoning steps.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=59)** This method involves providing a few demonstrations of the chain-of-thought as exemplars during prompting.
>
> **[1:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=67)** So instead of directly providing an answer, the model details its reasoning forming a chain of thoughts leading to the conclusion.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=76)** The idea is to mimic a step-by-step thought process that could lead to an answer.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=82)** So for example, if we look at this example here, the question is, "Roger has five tennis balls.
>
> **[1:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=88)** "He buys two more cans of tennis balls.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=91)** "Each can has three tennis balls.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=93)** "How many tennis balls does he have now?"
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=95)** So think about how you would think through that.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=97)** You'd probably say, "Okay, Roger starts with five, "buys two more, he's got five plus two times three, "that's six, that gives me 11."
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=108)** So you're kind of thinking through it that way.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=111)** Instead of just saying the answer is 11, the chain-of-thought prompting will actually incorporate what I just said, those actual intermediate reasoning steps.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=121)** And you can see here that it ends up, in this case for this model, getting the correct answer.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=128)** So, when would you use chain-of-thought prompting?
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=132)** Well, you'd use it when you want your language model to break down multi-step problems.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=137)** This will allow the model to allocate computational resources to these tasks that require intricate reasoning.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=144)** You want to use this in combination with few-shot prompting.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=148)** Chain-of-thought can be combined with few-shot, and remember, few-shot is where the model is given a few examples to guide its response.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=155)** This combination actually ends up being especially effective for complex tasks.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=161)** Chain-of-thought prompting also offers interpretability, so by detailing its quote, unquote thought process, the model is able to provide insights into its reasoning.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=173)** This can be applied to various tasks, including arithmetic, common sense, reasoning, and symbolic manipulation.
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=181)** So chain-of-though prompting significantly advances language models, emphasizing a reasoning and interpretability.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=188)** It ensures more accurate and insightful responses, especially for complex tasks.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=193)** So, here's what we're going to do.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=194)** We're going to download this data set from Hugging Face.
>
> **[3:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=197)** This is a few chain-of-though collection data set.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=199)** It's got 1.8 million rows.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=202)** We're going to subset just to take 10,000 of those rows, and here you can see what this looks like.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=211)** I'm kind of slicing into see an example in the fullest.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=216)** So here we have the question, "What about Neptune did NASA propose in 2003 "in their Vision Mission Studies?"
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=224)** Options, yes, no, and then gives rationale, so we have the question, we have the rationale for how to think through it, and then the final answer.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=232)** What we're going to do now is we're going to take this data set, and we are going to embed this data set and send it to a vector database.
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=240)** We're going to use the BGE embeddings from Hugging Face, and now we're going to construct our prompt template.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=250)** So we've got the prefix, consider the following as examples for how to reason, then we'll have our examples template.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=257)** And this is where we'll inject the query, the rationale, and the response.
>
> **[4:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=263)** And then we say, "Using a similar reasoning approach, "answer the user's question delimited by backticks.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=270)** "Take a deep breath, "break down the user's query step-by-step, "and provide a clear chain of though in your response."
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=276)** So this is just a ending salutation, "Take a deep breath and break down step-by-step," tends to improve a language model's ability to do chain-of-though prompting.
>
> **[4:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=286)** If you wanted to, you can even offer the language model a tip, and that apparently seems to work really well, as well.
>
> **[4:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=293)** All right, so we have a large number of examples to embed and send to the vector store.
>
> **[4:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=298)** So this cell below is going to take a few minutes to run.
>
> **[5:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=300)** It could take up to three to five minutes.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=302)** So, we're going to first instantiate the max marginal relevance example selector.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=307)** We've already learned about this.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=309)** We're going to give it the list of examples to select from, the embeddings model, the vector store, and the number of examples to produce, so we'll go ahead and run that.
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=320)** Once we have the example selector instantiated, we're then going to construct our prompt, the MMR prompt, so again, we've seen how to do this.
>
> **[5:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=329)** Pass in our example selector, the example prompt, the prefix, the suffix, and of course, what the input variable is.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=337)** And here, we have a query.
>
> **[5:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=339)** So, "Here's a short story: A lifter uses a barbell, "but moves a jump rope in a wider arc.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=345)** "The object likely to travel further "is A, the jump rope B, the barbell.
>
> **[5:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=350)** "What is the most sensical answer "between a jump rope and a barbell?"
>
> **[5:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=353)** And we're going to pass this to the language model.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=357)** And as soon as the embeddings model is done, we're going to run this cell, so we'll be back in just a couple of minutes.
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=363)** So it took just about three minutes for the embedding model to embed the 10,000 examples that we had.
>
> **[6:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=370)** And now we have our prompt, which is formatted as such.
>
> **[6:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=376)** So again, we have our query here, and it's being sent to the max marginal relevance example selector, and we're getting the examples that are most similar to this query.
>
> **[6:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=391)** And that way we are hoping to get our language model to reason about this query correctly.
>
> **[6:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=399)** So you can see here, this is what our prompt looks like.
>
> **[6:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=403)** And now we can construct our LLM chain.
>
> **[6:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=406)** We'll be sure to set the temperature to be 0.0.
>
> **[6:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=412)** So we've instantiated our LLM, we've constructed our LLM chain with the prompt, language model, and the output parser, and we can run this to get a response.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=425)** And there you go, you see how it's thinking through step-by-step, and it's following along these examples that it has here.
>
> **[7:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=434)** So it's got a query, it's thinking through, and then finally responds with the answer.
>
> **[7:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=440)** We can try that again with a different query.
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=444)** You can see here it is doing a step-by-step type of reasoning, and it's able to produce eventually a good answer, so let's see increases.
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=455)** I think that matches with the intuition here.
>
> **[7:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=458)** So, "Given the fact that: Inhaling breathing in "is increasing the size of the chest "and decreasing air pressure inside the lungs.
>
> **[7:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=466)** "Answer the question: If Mona is done with a race "and her chest contracts, what happens to the amount "of air pressure in her lungs, increases or decreases?"
>
> **[7:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=475)** So if her chest contracts, I guess that means she is breathing in, and that decreases the air pressure inside the lungs, so the opposite action, chest contracting, so on and so forth, and you see here the language model does a convincing job of reasoning through this.
>
> **[8:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=493)** I'm going to go ahead and give this response, the W.
>
> **[8:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=497)** So chain-of-though prompting, as you've seen here, is essentially just a few-shot prompt with a specific type of example.
>
> **[8:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/chain-of-thought?u=76281980&t=504)** This example breaks down how to reason through a process and then invites the language model to think step-by-step before providing its final answer.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (3), let (2), pass (2), require (1), from, (1)
> **Env Vars:** llm (3), gpu (2), nasa (1), bge (1), mmr (1)
> **Definitions:** is a  (3)
> **Versions:** 1.8 (1), 0.0 (1)
> **Exercise Files:** template (2)
> **Analogies:** for example (1), similar to (1)
> **CLI Commands:** make (1)
> **Tools:** colab (1)

#### Self-consistency
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=0)** - [Instructor] Self-consistency prompting was introduced in the March 2022 paper, "Self-Consistency Improves Chain of Thought Reasoning in Large Language Models," by Wang, et al.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=13)** So what is self-consistency prompting?
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=17)** The idea behind self-consistency is that complex reasoning problems often have multiple valid ways of thinking that lead to the same correct answer.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=28)** By exploring these diverse reasoning paths, you can achieve a more reliable and consistent answer.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=36)** How's this different, though, from other prompting techniques?
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=39)** Well, traditional chain of thought prompting, which we've already seen, prompts a language model to generate a series of short sentences that mimic the reasoning process a person might use to solve a task.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=53)** Self-consistency, instead of just taking the most probable reasoning path, will sample multiple paths and then determine the most consistent answer among them.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=64)** Unlike methods that require additional training, human annotations, or auxiliary models, self-consistency is unsupervised and works directly with the pre-trained language models.
>
> **[1:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=78)** So how do we construct a self-consistency prompt?
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=82)** Well, we start off first with a chain of thought prompt.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=84)** So we start by prompting the language model using chain of thought prompting.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=89)** Then we're going to sample diverse reasoning paths.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=92)** So instead of greedy decoding the optimal reasoning path, we're going to use a sample and marginalized decoding procedure.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=101)** So this involves sampling from the language models decoder to generate a diverse set of reasoning paths.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=108)** And then we're going to marginalize the reasoning paths.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=110)** So each reasoning path might lead to a different answer.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=114)** We're going to determine the optimal answer by marginalizing out the sampled reasoning paths to find the most consistent answer in the final set.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=124)** So here's an example.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=126)** "If there are three cars in the parking lot and two more cars arrive, how many cars are in the parking lot?"
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=133)** Instead of directly answering five, the model might respond with, "There are three cars in the parking lot already, two are arrived. Now there are three plus two, five.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=140)** The answer is five," right?
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=141)** That is the chain of thought prompting.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=144)** Self-consistency now, let's talk about what this is.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=147)** So for a question about how much Janet makes from selling eggs, the model might generate multiple reasoning paths.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=154)** For example, you know, she has got 16 minus 3 minus 4, 9 eggs left.
>
> **[2:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=159)** So she makes 2 times 9.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=161)** This means she sells the remainder for so on and so forth.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=164)** And you could see here that there's a few different reasoning paths that we're looking at.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=170)** So the model can then aggregate these reasoning paths and determine the most consistent answer, which in this case would be $18 per day.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=180)** So self-consistency, it improves the reasoning capabilities of language models by exploring diverse reasoning paths and selecting the most consistent answer.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=192)** This method has been shown to provide a significant performance boost on various arithmetic and common sense reasoning benchmarks.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=202)** So, let's go ahead and set up a chain of thought prompt.
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=205)** So first thing we need to do is follow the same pattern from the chain of thought lessons.
>
> **[3:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=210)** We're going to download the chain of thought prompt dataset from Hugging Face, download the embedding model from Hugging Face, create a prompt template for a chain of thought, create the example selector, and then, finally, construct the prompt.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=224)** So that's what we're going to be doing here.
>
> **[3:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=227)** Subsetting the dataset to 10,000 data points.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=231)** Here we are downloading the embedding model.
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=234)** Again, BGE-base embeddings.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=236)** Here we're going to construct our prompt templates.
>
> **[4:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=240)** And finally, instantiate the example selector.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=243)** In this case, again, we're going to use max marginal relevance, passing the selected examples, the embeddings model, vector store, and the number of examples we want to select.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=257)** Construct our MMR prompt, like so.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=262)** Passing the example selector, example prompt, the prefix, suffix, and the input variables.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=267)** So recall prefix and suffix, are going to be the same as our chain of thought reasoning.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=274)** All right. And now, what we're going to do is have this query and construct our prompt.
>
> **[4:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=283)** So now the self-consistency prompt is going to look like so.
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=288)** So we're going to say, "Based on the responses, delimited by these brackets, to the following query, which is going to be delimited by triple backticks, return the response that occurs most frequently."
>
> **[5:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=300)** So we have our self-consistency prompt.
>
> **[5:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=303)** So we're going to use the n parameter here to generate alternative responses.
>
> **[5:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=308)** So you can increase n to explore different variations.
>
> **[5:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=312)** So we're going to use a default model, GPT-3.5 Turbo-Instruct here.
>
> **[5:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=316)** We're going to get five responses out.
>
> **[5:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=321)** And we'll have the LLM generate a number of generations.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=328)** We're now going to take these generations and parse them to get our final answer.
>
> **[5:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=338)** Right.
>
> **[5:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=340)** So we had these generations.
>
> **[5:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=342)** Went through the generations.
>
> **[5:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=344)** Parsed everything here that came after response.
>
> **[5:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=348)** Gave this list again to the LLM.
>
> **[5:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=352)** The LLM responds with the most frequent response.
>
> **[5:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=355)** "There are 29 computers in the server room."
>
> **[5:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=358)** And so that is self-consistency prompting.
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-consistency?u=76281980&t=361)** It's a combination of chain of thought prompting, sampling diverse reasoning paths, and then from those diverse reasoning paths, getting the answer that occurs most frequently.

> [!info]- Semantic Content
>
> **Code Keywords:** self (12), let (2), finally, (2), require (1), case, (1)
> **Env Vars:** llm (3), bge (1), mmr (1), gpt (1)
> **Exercise Files:** download the (1), template (1)
> **CLI Commands:** find (1)
> **Versions:** 3.5 (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Self-ask
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=0)** - [Instructor] The Self-Ask prompting method was introduced in October, 2022 in a paper titled "Measuring and Narrowing the Compositionally Gap in Language Models" by Ofir Press and others.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=12)** This paper investigates how well language models can perform tasks that require compositional reasoning.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=20)** This means solving problems by combining answers to smaller sub-problems.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=25)** The researchers introduced a metric called the compositionally gap to measure how often models can answer all the sub problems correctly, yet fail to generate an overall solution.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=38)** They found as models like GPT-3 get bigger, their ability to answer single hop questions improves faster than multi-hop questions.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=49)** This means the compositionally gap doesn't decrease with bigger models.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=57)** While these models remember and recall more facts, they don't necessarily get better at combining those facts to reason through complex problems.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=68)** The paper introduces a new prompting method called Self-Ask to address the compositionally gap.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=75)** Here's how it works.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=77)** Instead of directly answering a given question like you would with direct prompting, the model first asks itself follow-up questions.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=86)** The model then answers these self-generated follow-up questions.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=91)** After addressing the follow-ups, the model proceeds to answer the initial question.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=97)** The Self-Ask technique allows the model to reason more explicitly.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=104)** The structured nature of this method also makes it easy to integrate a search engine to answer the follow-up questions.
>
> **[1:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=112)** Further enhancing the model's accuracy.
>
> **[1:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=115)** It's like the model is having an internal dialogue with itself to better understand and answer a question.
>
> **[2:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=121)** It breaks down a complex problem into smaller parts, addresses each part and it combines the answers to provide a comprehensive response, I've included a pseudocode implementation from the papers GitHub repo here for you to look at.
>
> **[2:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=136)** The Python code that you'll see in this notebook has the main function self_ask, which starts with an initial question.
>
> **[2:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=144)** And if the model generates follow-up questions, the system tries to get an answer from an external source.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=151)** This process continues until the model has a final answer.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=155)** The helper functions are placeholders based on the initial code and would need actual implementations.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=162)** Initially, the workflow of the algorithm is like this.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=164)** We begin with framing the initial question.
>
> **[2:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=167)** We then enter a loop where if a follow-up question is detected, an external answer is sought.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=173)** This external answer is added to the current prompt and the model's called again.
>
> **[2:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=178)** If there's no external, it proceeds to seek the final answer.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=182)** This process is going to be repeated until a final answer is formulated.
>
> **[3:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=186)** So just kind of walking through the code real quick.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=189)** We see here there's a loop until we have no more follow-up questions.
>
> **[3:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=193)** We're going to extract the follow-up question from the model's response.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=198)** We're going to get an external answer for the follow-up question.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=203)** We're then going to add that external answer to the current prompt.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=207)** If no external answer is found, we're just going to continue the conversation with the model.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=214)** We'll check if a final answer is provided.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=216)** If not, get one.
>
> **[3:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=220)** And we have a few helper functions that are not implemented here, but you know, if we assume that they are implemented, this is what these are going to do.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=230)** The frame questions function is going to frame the question based on the desired format.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=235)** So for simplicity, we'll just return the question here 'cause it's not implemented.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=241)** call_gpt is going to interact with the GPT model and return its response.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=246)** get_last_line is going to extract the last line from the provided text.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=251)** extract_questions is going to extract the follow-up question from the provided text.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=256)** And then get_answer is going to get an answer for the provided question from an external source, like a search engine.
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=265)** You don't have to worry about implementing this code yourself because LangChain makes Self-Ask easy.
>
> **[4:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=271)** So we're going to go ahead and instantiate a large language model and search.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=274)** For search we're going to use DuckDuckGo.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=276)** I'm using DuckDuckGo because it does not require an API key.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=281)** Now what we're going to do is create the tool, give it a name.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=284)** In this case a name must be intermediate answer.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=287)** The function this tool is going to use is the run function and we give it a description.
>
> **[4:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=294)** We're going to pull a prompt from the LangChain prompt hub.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=297)** You'll see this in the prompt management section, but essentially we're just going to pull the Self-Ask prompt, which looks like this.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=305)** And we're not going to use this exact prompt, but we are going to use this prompt as inspiration.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=311)** So let me show you the prompt we're actually going to use, we're going to use a prompt that's specific to deep learning type of questions.
>
> **[5:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=318)** So you can see here the examples I've come up with model the prompt template that we pulled from the hub where we have questions, see if there are follow-up questions needed.
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=330)** Example follow-up example, immediate answer.
>
> **[5:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=332)** Example follow-up example, immediate answer.
>
> **[5:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=335)** And then finally final answer.
>
> **[5:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=338)** So go ahead and instantiate that.
>
> **[5:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=340)** We'll do that from template.
>
> **[5:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=343)** And what we're going to do here is bind the LLM to stop generating text when it outputs the string intermediate answer.
>
> **[5:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=354)** So this is going to be used in the Self-Ask with Search Agent to have the LLM stop generating after each intermediate answer so that the agent can process the intermediate answer and ask a follow-up before having the LLM continue generating again.
>
> **[6:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=373)** The intermediate answer string, again is acting as a delimiter that's going to signal to stop generation and parse the intermediate answer.
>
> **[6:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=382)** So if we bind a stop sequence, it's going to allow for more fine-grain control over the LLM generation because we have this custom stopping condition.
>
> **[6:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=392)** So this type of binding of a stop condition to an LLM is very useful in agentic frameworks like Self-Ask where you want the LLM to generate text in a structured back and forth manner.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=405)** And here's just a clip from the actual paper about how this thing works, like an example of it, right?
>
> **[6:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=412)** So I'll let you go ahead and explore this in the notebook on your own.
>
> **[6:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=417)** So we'll go ahead and construct our agent, so we need to import the AgentExecutor.
>
> **[7:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=424)** We have an output parser, in this case the Self-Ask output parser has its own output parser.
>
> **[7:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=429)** We've got the scratch pad here for the agent's scratch pad.
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=432)** And we're going to format the logs to strings.
>
> **[7:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=435)** Instantiate an LLM.
>
> **[7:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=436)** We defined an LLM already above, but we're going to bind a stopping condition to it.
>
> **[7:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=441)** In this case that stopping condition is intermediate answer.
>
> **[7:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=446)** And now we'll set up our agent.
>
> **[7:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=447)** We'll give it a agent scratch pad, tell it the observation that it's looking for and a prefix.
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=455)** Again, this is the agent being constructed with LangChain expression language.
>
> **[7:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=458)** So we'll pipe all this to the prompt to the LLM with the stopping condition and then parse the answer.
>
> **[7:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=467)** And we'll run it right here.
>
> **[7:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=469)** And everything is instantiated.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=471)** And now we're going to execute the agent.
>
> **[7:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=476)** So I'm asking it a question called what is the RWKV architecture for LLM?
>
> **[8:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=481)** So this is a new architecture is definitely not in GPT-4 training data.
>
> **[8:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=484)** So this is definitely going to be something that the model has to look up.
>
> **[8:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=487)** So let's go ahead and see how the agent goes about answering this question.
>
> **[8:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=493)** So now we can have a insight into how Self-Ask with the search works.
>
> **[8:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=500)** So it gets this question.
>
> **[8:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=501)** Essentially is asking itself, do I need to do any search?
>
> **[8:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=504)** It says yes.
>
> **[8:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=505)** So it's going to do this follow up.
>
> **[8:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=507)** Okay, what does RWKV stand for?
>
> **[8:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=509)** Gets the intermediate answer.
>
> **[8:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=511)** It stands for random window key value.
>
> **[8:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=513)** What's the purpose of this?
>
> **[8:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=514)** Designed to improve efficiency and effectiveness of language models.
>
> **[8:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=518)** And it parses that answer and then gives us that nice answer right there.
>
> **[8:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=521)** And you know, we can even verify this.
>
> **[8:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=523)** We can say RWKV architecture. Right?
>
> **[8:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=528)** And we can see that this was introduced in May, 2023.
>
> **[8:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=533)** What is the RWKV architecture? We can look that up here.
>
> **[8:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=539)** So Receptance Weighted Key Value.
>
> **[9:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=541)** And so clearly the LLM hallucinated this fact because it is not called the random window key value mechanism, unless of course we look that up, let's see.
>
> **[9:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=553)** No. All right.
>
> **[9:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=555)** So of course this does not mitigate the hallucination aspect of language models.
>
> **[9:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=560)** So obviously use your agents with care.
>
> **[9:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=564)** Let's see how it works on this, the direct preference optimization question.
>
> **[9:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=570)** This was also a method that was introduced in mid 2023.
>
> **[9:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=575)** So it was not included in the training data.
>
> **[9:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=578)** In this case, I could tell you that this is correct.
>
> **[9:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=580)** So direct preference optimization does differ from traditional RLHF and that DPO focused directly on learning from preferences between outcomes.
>
> **[9:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=589)** Yeah, so this is absolutely correct.
>
> **[9:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=590)** So that's awesome to see here.
>
> **[9:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=592)** I invite you to go verify whether or not its answer to RWKV is hallucinated or not.
>
> **[10:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=600)** But you know, we are working with language models.
>
> **[10:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=601)** These are probabilistic machines, right?
>
> **[10:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=605)** So be careful when using your agent and how it's being used because language models are still prone to hallucination.
>
> **[10:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=613)** This is just simply showing you the new way that LangChain recommends that you start constructing your agents.
>
> **[10:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=621)** Here it recommends that you start constructing your agents explicitly with create_self_ask_with_search.
>
> **[10:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=627)** And then we will have the same pattern, instantiate the LLM.
>
> **[10:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=631)** We'll pull the prompt. We need to give our agents tools.
>
> **[10:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=635)** The only difference here is instead of the code we saw up here where we instantiate our agent, like, so, all we have to do is say, create_self_ask_with_search_agent.
>
> **[10:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=649)** Pass it the LLM, the tools and the prompt.
>
> **[10:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=652)** And send that to the AgentExecutor.
>
> **[10:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=656)** And then we can go ahead and invoke this and see what the answer is.
>
> **[11:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=662)** Yes, Hippie Sabotage is in fact an American electronic music duo from my hometown of Sacramento, California.
>
> **[11:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=671)** So Self-Ask search is a interesting and novel technique.
>
> **[11:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=675)** It does elicit agentic behavior in language models.
>
> **[11:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=679)** The reason we're including this in this course is because honestly agents are nothing more than a prompting strategy for language models.
>
> **[11:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=687)** So next up we're going to see a few different types of agents, but first we'll see the react agent followed by retrieve augmented generation and more interesting stuff.
>
> **[11:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/self-ask?u=76281980&t=697)** So I'll see you in the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** self (11), let (5), function (4), this. (3), require (2)
> **Env Vars:** llm (13), rwkv (5), gpt (3), api (1), rlhf (1)
> **Code Identifiers:** self_ask (1), call_gpt (1), get_last_line (1), extract_questions (1), get_answer (1)
> **Definitions:** is a  (2), essentially is (1), stands for (1)
> **Exercise Files:** template (2), github repo (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)

#### ReAct
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=0)** - [Instructor] The ReAct prompting framework was introduced in a 2022 paper by researchers at Google called ReAct: Synergizing Reasoning and Acting in Language Models.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=14)** ReAct stands for Reasoning and Acting.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=16)** It's a paradigm that was introduced to synergize reasoning and acting in language models.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=22)** It prompts models to generate both verbal reasoning traces and task specific actions in an interleaved manner.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=32)** The goal is to allow models to induce track and update action plans, handle exceptions, and gather additional information from external sources.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=42)** So we can compare four prompting methods here.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=45)** 1A is the standard prompting method where we just give the model a question and it gives us an answer.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=53)** B is chain of thought where we provide the model with examples for how to reason.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=60)** C is just action only where we give the model examples of actions.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=64)** And D is the reason and acting together.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=71)** So you'll see here this method interleaves both reasoning and action.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=77)** So the ReAct prompts here are prompting the model to produce these reasoning traces and these actions side by side.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=86)** So this allows for more kind of dynamic adjustments as the model continues its prompts.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=93)** You can see here that they also have an interaction with an external environment.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=100)** So models can actively interact with external sources like Wikipedia to gather and incorporate more data into their reasoning paths.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=108)** So ReAct generates this trajectory that's more interpretable and it really helps us see the model's quote unquote decision making process in a more transparent manner.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=119)** Turns out that this framework is good for a wide range of tasks, from question answering and fact verification to text games and web navigation.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=128)** So ReAct stands out because traditional methods focus on either reasoning or action.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=134)** So ReAct does both simultaneously, so this is enhancing a model's capabilities.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=140)** Unlike models that solely rely on internal knowledge, ReAct can actively seek real-time information from external sources.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=148)** This could potentially reduce hallucinations.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=151)** This interleaved reasoning and action step makes the models decisions more understandable to humans.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=158)** ReAct is an approach in language model prompting that merges internal reasoning with external data retrieval for more informed and reliable decision making.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=168)** So how do we implement ReAct in LangChain?
>
> **[2:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=172)** It's implemented as an agent type.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=174)** So the ReAct agent is going to use the ReAct framework to determine which tools to use based on the tool's description.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=182)** It could be used in various scenarios such as chatbots, document question answering and more.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=188)** The ReAct agent is designed to be context aware and it can reason about how to answer based on the provided context.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=196)** It's one of the available agents in LangChain and it does really truly leverage the power of language models to make informed decisions and generate responses.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=204)** So we start by importing our libraries.
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=208)** Again, using DuckDuckGo because it does not require an API key.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=211)** We're also including Wikipedia here.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=214)** And we instantiate the tools, so we have the search tool instantiated, give the search tool a name and a description.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=221)** Instantiate the Wikipedia tool, also give it a name and description.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=224)** Put these tools together in a list and let's just call that tool belt.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=230)** We'll go ahead and pull the prompt from LangChain Hub.
>
> **[3:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=233)** I just want to go ahead and print out the prompt template for you.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=237)** And you can see, it is similar to what we saw previously with Self Ask, but we have these explicit action steps here.
>
> **[4:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=248)** The input variables are going to be the agent scratch pad, input tool's name and tools.
>
> **[4:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=254)** We'll go ahead and instantiate GPT-4 as our language model.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=258)** We're going to use the preferred way now, the new preferred way to create a ReAct agent, that's just creating it explicitly like so.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=267)** We then create the agent executor and now this ReAct agent with the tools we give it, we're going to ask it a question, who is playing in the Super Bowl in 2024?
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=276)** Where will it be played?
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=278)** So this is being recorded on Thursday, February 1st.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=281)** The Super Bowl is not for another 10 days.
>
> **[4:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=283)** So let's go ahead and see what the reasoning traces are for this.
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=290)** And you can see here, the language model is kind of being more explicit in its thought process, right?
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=296)** It's saying I need to go find out what teams are playing.
>
> **[4:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=298)** Great, so that means I need to do a current event search.
>
> **[5:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=300)** What to the search for?
>
> **[5:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=301)** Super Bowl 2024, teams and location.
>
> **[5:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=304)** Gets an answer, parses that answer, and gives it right back to us.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=309)** So remember that LangChain has a ton of tools that you can use in an agent.
>
> **[5:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=316)** So I encourage you to go ahead and look at the documentation for tools here.
>
> **[5:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=322)** There are a ton of tools that you can use.
>
> **[5:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=325)** You can always just go to GitHub, go to the source code, it's what I always recommend.
>
> **[5:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=331)** Click on libs and you'll see LangChain community
>
> **[5:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=339)** and the tools here.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=341)** And these are all the different tools that you can use within the ReAct prompting framework.
>
> **[5:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=347)** There's a tool here for archive.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=349)** You can build a ReAct agent that can search archive for you.
>
> **[5:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=353)** Bing search, DuckDuckGo search is the one that we used.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=357)** So there are a wide range of tools that you can use and it's essentially all going to follow the same pattern that I just showed you in this notebook.
>
> **[6:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=367)** So I encourage you to go hack around with some of these tools and do some interesting stuff.
>
> **[6:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=373)** That's it for the ReAct framework.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=375)** Again, remember, this is an agent, and an agent does nothing more than a prompting strategy.
>
> **[6:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=379)** I know it sounds science fiction-ish to use the word agent, but really that's all an agent is.
>
> **[6:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=385)** I do also encourage you to look into the source code to actually see what's happening under the hood of an agent.
>
> **[6:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=390)** For us, this abstraction is very high level, but, you know, you dig down deep into it, there's a number of different calls happening.
>
> **[6:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=397)** So again, I recommend bookmarking LangChain's GitHub.
>
> **[6:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=402)** You can go to LangChain libraries, go to core, LangChain core, and you can look at the agents here and take a deep dive into what it is that the agent is actually doing.
>
> **[7:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=422)** And you can see here, it's just a number of different calls.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=425)** And if you're curious how the DuckDuckGo search works, you know, you can always go back to LangChain community tools, look into DuckDuckGo search, look in the source code for the tool itself, and you get a better idea of what it is that this abstraction is doing.
>
> **[7:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/react?u=76281980&t=442)** So I encourage you to satisfy any curiosity, any curious itches you have by referring strictly to the source code.

> [!info]- Semantic Content
>
> **Code Keywords:** super (3), let (2), type. (1), require (1), self (1)
> **UI Navigation:** go to (4), click on (1)
> **Exercise Files:** source code (4), template (1)
> **Definitions:** is an  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** api (1), gpt (1)
> **Tools:** github (2)
> **Documentation:** the documentation (1)

#### RAG
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=0)** - [Instructor] Retrieval Augmented Generation or RAG for short is a technique that's designed to enhance the capabilities of large language models by allowing them access to external knowledge sources.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=13)** This was a technique that was introduced by Meta AI in September of 2020 and emphasized the potential for language models to excel in knowledge intensive tasks.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=26)** In the original Meta paper, they combined an information retrieval component with a text generation model, allowing the LLM to access the latest information for generating reliable outputs.
>
> **[0:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=38)** This approach was especially beneficial for knowledge intensive tasks where the model needs to provide accurate and up-to-date information.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=48)** While LLMs have shown remarkable capabilities in understanding and generating human-like text, they have some severe limitations.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=57)** One is that they could be expensive to train, or fine tune.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=61)** Two is that their knowledge is static.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=63)** It's based on the latest training data and it doesn't update with new information.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=70)** And finally, they sometimes provide incorrect information with high confidence, a phenomenon known as hallucinating.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=79)** So RAG is able to address these challenges by combining the power of LLMs with the ability to retrieve real time information from external sources.
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=91)** So how does RAG work?
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=92)** There's two components, essentially.
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=94)** One is the retrieval component, where we're given an input in the form of a user question or a query.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=102)** The RAG is going to retrieve the relevant documents from an external source such as Wikipedia.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=109)** Then in the generation component, the retrieved documents are going to be combined with the original prompt to form a new enriched augmented context.
>
> **[2:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=123)** This context is going to be fed to the language model, which is going to produce and generate a final output.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=132)** So unlike traditional language models with static knowledge, RAG can access up-to-date information, which is adapting it to situations where facts evolve.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=143)** RAG allows for integrating new information without needing expensive retraining of the entire LLM.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=150)** By retrieving information from trusted sources, RAG is going to reduce the chance that the model might hallucinate or provide incorrect information.
>
> **[2:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=161)** RAG can be used in a wide variety of practical applications, such as answering questions about dynamic or evolving topics, assisting in domains where real time accuracy is crucial, like medical or legal inquiries or enhancing chatbots or visual assistance to provide more factual and updated responses.
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=183)** In summary, RAG is a powerful technique that's bridging the gap between the vast knowledge that's encapsulated within the weights of a large language model and the dynamic ever evolving real time information in the real world.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=198)** By combining retrieval and generation RAG's ensuring that language models are knowledgeable while also being relevant, current, and up-to-date.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=209)** So before building out a RAG system, I think it's essential to familiarize yourself with the components that make the process possible.
>
> **[3:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=216)** Each one of these components has a specific role in ensuring that the RAG system operates correctly.
>
> **[3:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=223)** At the heart of the system is the language model.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=225)** This is the core model that's responsible for generating the human-like text response.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=231)** The vector store is where all of the magic happens.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=236)** So the vector store is a dedicated storage system that's housing embeddings and their corresponding text data.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=242)** So it's ensuring quick and efficient retrieval.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=246)** The vector store retrieval, you could think of this as a search engine of the system.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=251)** The vector store retriever is going to fetch relevant documents by comparing the vector similarities between the user query and what's in the vector database.
>
> **[4:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=261)** This way, it's fetching the most relevant document to be put into the context.
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=268)** There's also the embedder.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=270)** So before storing or retrieving data, we need to convert this text into a format that could be ingested by the Vector Store, and that's an embedding.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=279)** So the embedding is going to take on this role.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=281)** It's going to transform text into these vector representations.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=285)** We also need a prompt.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=287)** Every interaction starts with the user query or statement.
>
> **[4:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=290)** The prompt's going to capture this initial input and it sets the stage for the retrieval and generation process.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=297)** You also need document loaders.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=299)** There's so much data out there to process.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=302)** So the document loader is critical.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=305)** It imports and reads documents and prepares them to be chunked and embedded.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=310)** That brings us to the next point, document chunkers.
>
> **[5:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=313)** So to make the data more manageable and efficient for retrieval document chunker's going to break the documents down into smaller, more digestible pieces.
>
> **[5:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=323)** Last but not least is the user input.
>
> **[5:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=326)** So the user input is going to capture the query or statement provided by the end user, and then this is going to be converted into an embedding using the same embedding model that we use to embed our documents.
>
> **[5:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=338)** And this is what we are going to fetch documents relative to is this user input.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=345)** So let's talk about the index subsystem of RAG.
>
> **[5:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=351)** So to begin with, we need to load our data using document loaders.
>
> **[5:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=354)** So this step is crucial in the process.
>
> **[5:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=357)** Tech splitters break down large documents into smaller sections.
>
> **[6:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=360)** This is helpful for both indexing data and inputting this into the model.
>
> **[6:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=365)** Large sections are difficult to search through and can't fit into a model's limited context window.
>
> **[6:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=370)** So that's why we need to split our large document up into chunks.
>
> **[6:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=374)** We also need to store and index our splits so that we can search them later.
>
> **[6:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=379)** And this is commonly done with a vector store and an embeddings model.
>
> **[6:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=385)** Next is retrieve and generate.
>
> **[6:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=388)** So retrieve means given a user's input, given a user's query, relevant splits are going to be retrieved from the storage, vector storage using a retriever.
>
> **[6:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=400)** The chat model or the LLM is going to produce an answer using a prompt that includes the question as well as the retrieved data.
>
> **[6:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=408)** These work together as an orchestrated flow that's going to transform a user's query into a texturally rich and accurate response.
>
> **[6:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=417)** So there are many, many document loaders in LangChain.
>
> **[7:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=420)** I'm not going to go into every single one of them in this notebook, but by all means, check out the documentation here so you can get a good idea of all the different document loaders that you have available to you.
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=432)** I mean, there's document loaders for CSVs, for Dropbox, there's document loaders for Excel, there's document loaders for even WhatsApp.
>
> **[7:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=440)** If you wanted to use document loader for WhatsApp, we have one for that as well.
>
> **[7:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=446)** So document loaders in LangChain, they're used to load data from the different sources, and these are going to be loaded in as document objects.
>
> **[7:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=454)** A document object is just a piece of text with some metadata.
>
> **[7:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=457)** So document loaders give you a convenient way to fetch data from the different sources like text files, web pages, or transcripts of the videos.
>
> **[7:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=465)** The main purpose of document loaders is to retrieve data and prepare it for further processing.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=471)** Document loaders expose a load method that's going to fetch data from the source and return it as a document object.
>
> **[8:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=480)** Some document loaders also support what's called lazy loading, which allows data to be loaded into memory only when it's needed.
>
> **[8:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=488)** In general, document loaders all follow the same pattern: import the loader class, create an instance of the loader, provide the path to a directory.
>
> **[8:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=498)** And then after we create an instance of the loader class, we just point to where our data is.
>
> **[8:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=506)** Then we use a load method of the loader instance to load all the files in the directory and convert them into a LangChain document format.
>
> **[8:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=515)** So here we're just going to use a web-based loader.
>
> **[8:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=517)** I'm going to pull some web pages here.
>
> **[8:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=522)** Right, so these are going to be loaded.
>
> **[8:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=524)** And just to give you an idea of what one of these objects looks like, let's take a look at this, right?
>
> **[8:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=535)** So here we have a list, right?
>
> **[8:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=537)** We've got a list, and each element of the list is a document object.
>
> **[9:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=546)** So what is a document object?
>
> **[9:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=550)** You can see here it's got page content.
>
> **[9:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=554)** And the page content here is essentially all the text that is on that webpage.
>
> **[9:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=562)** There's also associated metadata.
>
> **[9:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=565)** So having the entire text of a webpage might not always work out because language models have limited context window.
>
> **[9:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=574)** So that's what we need to split documents and chunk them up.
>
> **[9:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=578)** And we do that with text splitters.
>
> **[9:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=580)** So text splitters in LangChain are used to split long pieces of text into smaller semantically meaningful chunks.
>
> **[9:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=586)** At a high level, they work like this.
>
> **[9:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=589)** They split the text up into small semantically meaningful chunks.
>
> **[9:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=593)** We start combining these small chunks into a larger chunk until you reach a certain size, and this is going to be measured by some function.
>
> **[10:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=603)** Once we reach that size, we make that chunk its own piece of text and then start creating a new chunk of text with a little bit of overlap if you'd like.
>
> **[10:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=612)** So this means there's two different axes along which you can customize your text splitter: how the text is split, and how the chunk size is measured.
>
> **[10:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=623)** So the default recommended text splitter is the recursive character text splitter.
>
> **[10:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=627)** This text splitter is going to take a list of characters, it's then going to try to create chunks based on splitting on the first character, but if any chunks are too large, it then moves to the next character, so on and so forth.
>
> **[10:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=640)** By default, it tries to split on new line characters and blanks.
>
> **[10:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=646)** In addition to controlling which characters you can split on, you can also control a few other things.
>
> **[10:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=653)** For example, the length function, you know, how the length of chunks is calculated.
>
> **[10:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=657)** This is going to default to just counting number of characters, but it's pretty common to pass a token counter here as well.
>
> **[11:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=665)** Chunk size is going to be the maximum size of your chunks as measured by some length function.
>
> **[11:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=670)** Chunk overlap is going to be the maximum overlap between chunks.
>
> **[11:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=674)** So it could be nice to have some overlap to maintain a continuity between the chunks.
>
> **[11:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=680)** And add start index is whether to include the starting position of each chunk within the original document in the metadata.
>
> **[11:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=690)** And so here we are going to import our recursive character text splitter.
>
> **[11:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=695)** We're going to instantiate that as a text splitter.
>
> **[11:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=699)** We'll use a chunk size of 500, overlap of 50 as measured by the length function.
>
> **[11:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=705)** And we use the transform documents method of the text splitter on the object that we want to split.
>
> **[11:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=715)** And let's just take a look at one of these, for example, yolo_nas_chunks.
>
> **[12:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=721)** The length of this is 51 and we can see what one element of this thing looks like.
>
> **[12:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=730)** You could see here it's just a little bit of text here.
>
> **[12:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=737)** Right?
>
> **[12:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=738)** We have some text, right?
>
> **[12:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=739)** Not the entire blog like we're getting before.
>
> **[12:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=743)** Next, we need to create the index system.
>
> **[12:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=746)** So the index system is responsible for preparing and organizing the data for retrieval.
>
> **[12:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=751)** So there's some steps that we need to do to create the index system.
>
> **[12:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=755)** And one is we got to load our documents.
>
> **[12:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=758)** So we need to import and read that amount of text.
>
> **[12:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=761)** We chunk them up like we just did, and now we're going to finally embed them.
>
> **[12:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=766)** So we're going to convert these chunks into vector representations so that way we can search them using some type of nearest neighbors algorithm.
>
> **[12:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=776)** Then we're going to store these embeddings.
>
> **[12:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=778)** So we'll use the Open AI's embedding model here.
>
> **[13:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=781)** In fact, we'll have to change this.
>
> **[13:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=784)** Just be langchain_openai.
>
> **[13:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=788)** We'll just use a in memory vector store, FAISS and local file store.
>
> **[13:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=793)** We'll go ahead and create our embedder.
>
> **[13:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=801)** Right and added our documents to the vector store.
>
> **[13:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=806)** Just a note here, CacheBackedEmbeddings, this is just embeddings that are stored temporarily.
>
> **[13:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=812)** They're cached temporarily, so we don't need to recompute them.
>
> **[13:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=816)** So that's what we're doing here, CacheBackedEmbeddings.
>
> **[13:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=819)** And now we have a retrieval system.
>
> **[13:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=822)** So as the name suggests, this subsystem is going to fetch the most relevant information based on the user's query.
>
> **[13:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=829)** So there's a few steps in the retrieval system.
>
> **[13:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=832)** One is to obtain the user's query.
>
> **[13:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=835)** Then we're going to transform the user's query into a vector format.
>
> **[13:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=839)** That's basically what we just did in the index part.
>
> **[14:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=842)** We're going to search the vector store for documents with embeddings that closely match our user's query.
>
> **[14:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=849)** Then we're going to return the top matches.
>
> **[14:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=852)** This ensures that the most relevant information is provided in the context.
>
> **[14:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=858)** So let's go ahead and do that.
>
> **[14:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=861)** So we create a vector store and then a retriever here.
>
> **[14:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=865)** We're instantiating this as a retriever.
>
> **[14:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=867)** We'll use OpenAI.
>
> **[14:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=871)** We'll just change this to the latest open AI model.
>
> **[14:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=875)** Then it's the augment system.
>
> **[14:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=877)** So this just is enhancing the LLMs input prompt with the retrieve context, and it's ensuring that the model has all the information it needs to generate a comprehensive response.
>
> **[14:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=889)** So we start with the original user query, then we're going to merge the initial prompt with the context that's retrieved from the vector store.
>
> **[14:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=897)** So we now have an augmented prompt.
>
> **[15:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=900)** So this augmented prompt is then going to be given to the language model as input.
>
> **[15:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=906)** And then after language model does its thing, it's going to generate a response and give us an answer.
>
> **[15:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=913)** Right, so in order to get the language model to do its thing, let's go ahead and install LangChain Hub.
>
> **[15:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=919)** We're going to do that so we can pull a prompt from the hub.
>
> **[15:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=921)** Just quick function here.
>
> **[15:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=923)** This is just formatting documents.
>
> **[15:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=925)** It's adding two new line characters between each of the documents that we are inserting into the context.
>
> **[15:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=935)** Here we are setting up our RAG chain.
>
> **[15:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=938)** So here is the retriever.
>
> **[15:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=941)** We're going to be getting the context from the retriever.
>
> **[15:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=944)** Format documents, this is going to be this function here and that's going to format the documents correctly.
>
> **[15:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=950)** And then question is going to be inserted through this runnable pass through.
>
> **[15:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=955)** So a runnable pass through just allows you to pass inputs unchanged or with the addition of extra keys.
>
> **[16:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=964)** So it's used really to assign data to a new key in the map, essentially.
>
> **[16:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=969)** So we're going to be assigning some new data to question.
>
> **[16:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=974)** I encourage you to go ahead and take a look at the LangChain documentation.
>
> **[16:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=978)** If you go to LangChain right here, type in RunnablePassthrough, and you can read more about the runnable passthrough here.
>
> **[16:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=990)** Great, so we've got our RAG chain instantiated.
>
> **[16:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=993)** The prompt, let's take a look at the prompt.
>
> **[16:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=995)** It's a chat prompt template.
>
> **[16:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=997)** You can see here the prompt is like so.
>
> **[16:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1002)** So you're an assistant for question answering task.
>
> **[16:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1004)** Use the following pieces of retrieve context to answer the question.
>
> **[16:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1008)** Right, so we're injecting the user's question here, whatever we're fetching from the user.
>
> **[16:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1012)** So that's what we're getting from this runnable passthrough is that question.
>
> **[16:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1017)** And then that context is what we're going to get from the retriever, and then the output indicator for the language model to give the answer.
>
> **[17:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1025)** And we can confirm the input variable is like so.
>
> **[17:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1030)** And there we have it.
>
> **[17:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1031)** Let's go ahead and invoke and see what the generation is.
>
> **[17:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1038)** All right, so the answer here, you know, what does Neural Architecture Search have to do with how Deci creates its models?
>
> **[17:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1043)** You see here, this is pulling information from the documents.
>
> **[17:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1048)** DeciCoder, we have some information here as well.
>
> **[17:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1053)** And we can always get the sources as well.
>
> **[17:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1056)** So we can pull the sources that were used to create that query as well.
>
> **[17:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1063)** And so that's doing, so right here.
>
> **[17:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1066)** And you can see here, these are all the documents that were fetched and injected into the query.
>
> **[17:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1075)** Right, so now you're equipped with the ability to use this language model and augment this language model with private company data or with documents that maybe this model wasn't exposed to during training.
>
> **[18:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/rag?u=76281980&t=1089)** So it's a great skill to have.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (6), pass (4), static (2), class, (2)
> **Env Vars:** rag (15), llm (3), faiss (1)
> **Definitions:** is a  (5), known as (1)
> **Analogies:** such as (2), for example (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** yolo_nas_chunks (1), langchain_openai (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)

#### FLARE
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=0)** - [Instructor] FLARE stands for Forward-Looking Active REtrieval augmented generation.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=6)** It's method that was introduced in a 2023 paper titled "Active Retrieval Augmented Generation".
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=14)** The original implementation can be found in the paper's GitHub repo, which the LangChain implementation draws heavily from.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=22)** FLARE is a method that enhances the capabilities of a large language model by actively retrieving information from external sources during the generation process.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=34)** The motivation behind FLARE is to address the tendencies of language models to hallucinate or produce factually inaccurate outputs.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=44)** By actively retrieving relevant information during the generation process, FLARE aims to produce more accurate and informed outputs.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=53)** So the basic idea is we start answering a question.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=57)** If the language model starts to generate tokens that it's uncertain about based on log probs, it's going to look up some relevant documents.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=66)** It'll then use those documents to continue generating, and it's going to repeat this process until it's finished.
>
> **[1:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=74)** The tokens that the model is uncertain about are highlighted, and the LLM is called to generate a question that would lead to that answer.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=85)** So how is FLARE different from other rag methods?
>
> **[1:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=91)** Traditional retrieval augmented generation methods typically retrieve information once based on the input and then generate an output.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=101)** This approach can be limited, especially for generating long text.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=106)** FLARE differs in that it actively decides when and what to retrieve throughout the generation process.
>
> **[1:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=114)** It uses a prediction of the upcoming sentence to anticipate future content, which is then used as a query to retrieve relevant documents.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=125)** If the generated sentence contains low-confidence tokens, it retrieves relevant information and generates the sentence again.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=135)** So what does a prompt look like in FLARE?
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=139)** The prompt for FLARE with retrieval instructions involves guiding the language model to generate search queries when necessary while generating an answer.
>
> **[2:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=148)** An example is, for example, "The colors on the flag "of Ghana have the following meaning.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=155)** "Red is for," and then maybe the language model here wants to search for the Ghana red flag meaning, "the blood of martyrs."
>
> **[2:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=163)** In the direct FLARE method, the next sentence generated by the language model is used to decide when and what to retrieve.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=173)** If the language model is confident about the sentence, it's accepted without retrieving additional information.
>
> **[3:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=180)** If not, the sentence is used to formulate search queries to retrieve relevant documents, and then that sentence is regenerated.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=189)** In order to set up this chain, we need three things, a language model to generate an answer, a language model to generate hypothetical questions and a retriever to use to look up answers.
>
> **[3:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=202)** The language model that we use to generate the answer needs to return log probs so we can identify uncertain tokens.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=213)** For that reason, it's highly recommended that you use the OpenAI wrapper.
>
> **[3:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=219)** So again, that's not the ChatOpenAI, it's the OpenAI regular model.
>
> **[3:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=225)** So the language model we use to generate hypothetical questions to use in retrieval could be anything.
>
> **[3:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=231)** In this notebook, we're going to use ChatOpenAI because it's fast and cheap.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=236)** And the retriever can be anything.
>
> **[3:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=238)** In this notebook, we're going to use the archive loader.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=241)** Other important parameters to consider is the max generation length parameter, which is the number of tokens to generate before stopping to check if the language model's uncertain.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=251)** And then also MinProb, so any tokens generated with a probability below this will be considered as uncertain.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=260)** So let's go ahead and import what we need, and that's what we're going to do here.
>
> **[4:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=266)** And it's the same kind of pattern as we saw in the rag lecture, so the language model, the embeddings.
>
> **[4:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=272)** In this case, we're going to fetch documents from archive.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=276)** Rather ironically, I'm going to fetch the FLARE paper itself, instantiate a text splitter, set the chunk size, set the chunk overlap, split the documents, create that vector store, and then create the vector store retriever.
>
> **[4:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=294)** So we'll go ahead and set up our FLARE chain.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=296)** FLARE chain is instantiated like so.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=299)** We have the FLAREChain class .from_llm.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=302)** It's not yet implemented using LangChain expression language, so we can use the legacy instantiation of a chain.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=310)** And we pass in our language model, pass in our retriever, the max generation length, the min probability to consider for uncertainty, set verbose to true so we can kind of see the printouts from the language model as it's getting the answer, and then have it handle parsing errors for us.
>
> **[5:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=329)** And let's go ahead and take a look here.
>
> **[5:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=331)** We call invoke on some query.
>
> **[5:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=336)** And you can see here it's parsing through the documents and you really do get to see it in action.
>
> **[5:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=341)** So you can see here it's generating questions for itself and then coming up with an answer.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=349)** And I encourage you to kind of look through some of these intermediate steps before it goes and gives us a final answer, and then you'll get a better idea of how it's kind of looking forward, so to speak.
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=361)** So let's see a printout here.
>
> **[6:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=365)** Asking to get the steps in the FLARE pipeline.
>
> **[6:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=371)** So there's the existing partial response, another partial response, and it uses these partial response to generate some questions, then fetches the appropriate documents that might be related to those questions.
>
> **[6:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=392)** Then it'll finally parse all that together and give us a output once it's finished.
>
> **[6:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=398)** All right, so you can see here this has been running for well over five minutes, so this must be a tough question for this to answer.
>
> **[6:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=403)** but something I want to call out here is the kind of internal reasoning you're seeing the model do.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=409)** So you're seeing here that it goes through a chain here, then it goes into a question generation chain.
>
> **[6:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=417)** And so there's answering its own questions and here are the questions that it kind of generates.
>
> **[7:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=424)** So it's asking itself these questions and then kind of going through the document itself.
>
> **[7:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=429)** And you can see these kind of reasoning steps here.
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=432)** And actually, this did end up finishing, it took roughly six minutes.
>
> **[7:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=435)** So let's go ahead and see what the final answer is.
>
> **[7:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=438)** I'll scroll all the way down here.
>
> **[7:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=441)** And here it says "FLARE starts with the user input x "as the initial query to retrieve documents "to generate the first sentence "to bootstrap the iterative generation process "for the following steps.
>
> **[7:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=452)** "The tempo-rary next sentence is generated "and checked for low-probability tokens."
>
> **[7:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=456)** It sounds exactly like what we had described just earlier.
>
> **[7:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=459)** "If present, relevant documents are retrieved "to regenerate the next sentence.
>
> **[7:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=462)** "This process continues until the end of the generation."
>
> **[7:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=467)** And there you have it, we have a FLARE.
>
> **[7:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=469)** So just to kind of recap the steps, the basic idea is to start answering a question.
>
> **[7:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=473)** If the language model starts to generate tokens that it's uncertain about, then we prompt it to look up relevant documents.
>
> **[8:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=480)** We then use those documents to continue generating and then repeat this process until it's finished.
>
> **[8:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=486)** So kind of recapping it in more concrete steps, step one, start with the user input and the initial retrieved results.
>
> **[8:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=494)** Step two is generate a temporary next sentence, check if that contains low-probability tokens.
>
> **[8:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=501)** Step three, if the sentence does in fact contain low-confidence tokens, retrieve relevant documents and regenerate the sentence.
>
> **[8:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=509)** And then this is repeated iteratively until it ends.
>
> **[8:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=512)** So in the case here, you saw this generation took six minutes.
>
> **[8:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/flare?u=76281980&t=515)** So it seems the model was quite uncertain about what it was generating throughout the process, but it eventually got there.

> [!info]- Semantic Content
>
> **Env Vars:** flare (15), llm (1)
> **Code Keywords:** let (4), continue (2), pass (2), from. (1), for, (1)
> **Definitions:** stands for (1), is a  (1), is called (1)
> **Cross-References:** as we saw (1), coming up (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** from_llm (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)

#### Plan and execute
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=0)** - [Instructor] Plan-and-Solve prompting was introduced in a May 2023 paper titled, "Plan-and-Solve Prompting: Improving Zero-shot Chain-of-Thought Reasoning in Large Language Models," by Lei Wang et al.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=13)** So what is Plan-and-Solve prompting?
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=14)** Well, essentially, it's a method that's been proposed to address the shortcomings of a Zero-shot Chain-of-Thought prompting.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=21)** So let's quickly talk about what Zero-shot Chain-of-Thought prompting is.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=25)** Zero-shot Chain-of-Thought prompting is a technique that's used to elicit complex, multi-step reasoning in large language models without having to craft these intricate step-by-step examples, right?
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=37)** So if you recall, with Zero-shot prompting, what do we do?
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=41)** We simply asked the language model to perform a task.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=45)** And if you recall, in Chain-of-Thought prompting, we asked the model to come up with its reasoning steps by providing you with several examples of how to reason about something.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=56)** So we give it a question and examples of how to reason through it.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=61)** So Zero-shot Chain-of-Thought prompting, actually we do away with the examples and we just add a simple, almost magical phrase to our prompt.
>
> **[1:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=70)** And that phrase is, "Let's think step by step."
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=73)** And this approach is really helping improve the reasoning abilities, the Zero-shot reasoning abilities of language models in a wide variety of tasks.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=83)** A lot of experimental results have shown that Zero-shot Chain-of-Thought prompting significantly outperforms Zero-shot prompting and even Chain-of-Thought prompting in a few different scenarios.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=96)** So here we can see a difference between Zero-shot Chain-of-Thought prompting, which is in example A, and Plan-and-Solve prompting, which is in example B, and then example C, here's what's called a answer extraction, but you could see that the main difference here is in Zero-shot chain-of-thought prompting, we're we're adding that magic phrase, "Let's think step by step," but we're doing something different in Plan-and-Solve prompting.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=124)** So let's talk about exactly what we're doing in Plan-and-Solve prompting.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=127)** We're asking the language model to devise a plan and then carry out that plan.
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=134)** So, essentially, Plan-and-Solve prompting is dividing this task into two main components.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=140)** The planning phase, where the model is going to first devise a plan by breaking the entire task into smaller sub-tasks, and then the solving phase, where the model's going to execute the subtasks according to the plan.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=154)** So instead of just prompting the model with let's think step by step, Plan-and-Solve prompting is going to say, "Let's first understand the problem and devise a Plan-and-Solve the problem.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=164)** Then let's carry out the plan and solve the problem step by step."
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=169)** There is a enhanced version of Plan-and-Solve prompting called Plan-and-Solve Plus.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=174)** So this will include more detailed instructions to kind of address calculation errors and help improve the quality of the generated reasoning steps.
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=184)** And so an example of Plan-and-Solve Plus would be the one right here.
>
> **[3:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=188)** So example C.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=190)** So we're asking it to extract kind of that actual percentage.
>
> **[3:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=195)** Plan-and-Solve prompting is really promising because it's providing more structured guidance to the model.
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=201)** It's helping ensure that the model thinks step by step and plans its reasoning process before kind of just predicting the next token.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=209)** This leads to more coherent and accurate reasoning chains.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=213)** The papers experiment show that the Plan-and-Solve Plus prompting consistently outperform Zero-shot Chain-of-Thought across various data sets.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=224)** It's actually comparable and even superior to other methods like Zero-shot-Program-of-Thought prompting.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=230)** Despite manual demonstrations, the Plan-and-Solve Plus prompting actually outperforms 8-shot Chain-of-Thought prompting in arithmetic reasoning tasks.
>
> **[4:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=241)** In LangChain, Plan-and-Solve prompting is executed via the Plan-and-Execute agents.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=246)** So remember, an agent is really nothing more than a prompting strategy.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=250)** So in LangChain, the Plan-and-Solve prompting framework or Plan-and-Solve prompting methodology is implemented as a plan-and-execute agent.
>
> **[4:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=260)** So the Plan-and-Execute agent is just going to first plan what it needs to do and then execute those sub-tasks.
>
> **[4:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=267)** So there's a couple of key components to the Plan-and-Execute agents.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=270)** There's the planner, which is going to plan out the steps and deal with whatever ambiguities or edge cases might arise to the extent that it can.
>
> **[4:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=278)** Then there's the executor.
>
> **[4:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=280)** So this will be an action agent that's going to take the high-level objective from the planner and determine what tools it needs to use to achieve those objectives.
>
> **[4:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=289)** And surprisingly, or not, this is done in two steps.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=292)** There's the planning and the executing stage.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=296)** So the planning stage, again, just mapping out the steps that's required to achieve the objective, and the language model's reasonability is going to be harnessed to plan and deal with any ambiguities or edge cases.
>
> **[5:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=309)** Then in the execution stage, it's going to be a separate agent that's going to be equipped with the necessary tools, and it's going to take over in this phase.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=317)** So whatever the high-level objectives it receive from the planner, it's going to determine what tools it needs and execute on that.
>
> **[5:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=327)** So Plan-and-Execute agents are really effective when the objective you have requires some complex planning and coordination of multiple subtasks.
>
> **[5:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=338)** So these agents can handle tasks that involve multiple steps and multiple dependencies between the steps.
>
> **[5:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=346)** So consider the complexity of what it is that you're trying to do.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=349)** And if what you are trying to do requires you to plan and coordinate some actions, then that might lend itself this prompting framework and this agent kind of usage.
>
> **[6:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=361)** If you can achieve your objective through some simple sequence of steps without much planning, then you might want to look for another type of agent, a simpler agent.
>
> **[6:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=370)** So let's go ahead and see this in action in LangChain.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=375)** Start by a necessary import.
>
> **[6:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=376)** So within LangChain, Plan-and-Execute is housed in the experimental module.
>
> **[6:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=383)** So we're going to go ahead and define our agent.
>
> **[6:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=386)** In this case, let's actually use gpt-4-0125-preview.
>
> **[6:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=393)** We're going to instantiate the math_chain.
>
> **[6:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=395)** So this is just a particular chain in LangChain where it'll make use of the Python interpreter to actually do some math calculations.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=405)** DuckDuckGoSearch, using this because it doesn't require an API key.
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=409)** And then, of course, let's set up our agent tools.
>
> **[6:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=414)** Implement the planner.
>
> **[6:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=415)** So again, we'll use the newest instance of GPT-4.
>
> **[7:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=422)** Always set the temperature to zero when you're using an agent because you don't want the language model to be creative at all here.
>
> **[7:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=428)** You want it to explicitly follow your instructions.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=431)** So we go ahead and we can look at the planner.
>
> **[7:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=434)** Now let's look at the prompt of the planner.
>
> **[7:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=436)** So we can take a look at the prompt message from the agent.
>
> **[7:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=439)** And you can see here, it's saying, "Let's first understand the problem and devise a plan to solve the problem.
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=444)** Please output the plan starting with the header 'Plan:' and then followed by numbered list of steps," right?
>
> **[7:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=450)** So this is a prompt that we are giving the planner.
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=455)** Then we, of course, instantiate our executor.
>
> **[7:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=458)** So the executor's just going to use the same exact model.
>
> **[7:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=461)** We're going to use GPT-4 as well for the executor.
>
> **[7:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=465)** We can make it even more explicit like this if it is helpful to you.
>
> **[7:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=469)** But it's the exact same model that we're going to use.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=471)** We could say executor_model, right?
>
> **[7:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=478)** And instantiate that, like so.
>
> **[8:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=483)** And so now we can print the prompt template for the executor.
>
> **[8:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=488)** We tell the agents what tools it has access to.
>
> **[8:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=491)** So the search tool.
>
> **[8:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=493)** And this is coming from the actual prompt of the search tool.
>
> **[8:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=501)** And we can execute.
>
> **[8:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=506)** We can see how it is working.
>
> **[8:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=508)** So we're entering the planning stage, right?
>
> **[8:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=510)** Here's my query that is being sent to the agent.
>
> **[8:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=512)** So this is essentially being input into the prompt template for the actual planning agent, right?
>
> **[8:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=519)** And the agent you can see here is kind of thinking through what it needs to do.
>
> **[8:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=524)** All right, well I need to go and I need to look up the current temperature.
>
> **[8:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=527)** And you can scroll all the way here and you can see that it is using DuckDuckGoSearch.
>
> **[8:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=533)** What is it looking in DuckDuckGoSearch?
>
> **[8:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=535)** It's looking for the current temperature in Winnipeg, Manitoba.
>
> **[8:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=539)** Get some results.
>
> **[9:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=541)** It's outputting as a JSON, because in the prompt for the DuckDuckGo tool, it is asking it to respond in JSON.
>
> **[9:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=549)** So it does that.
>
> **[9:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=550)** So here's the next step, all right, look at the current temperature.
>
> **[9:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=553)** All right, the current temperature is this, and then it's a new executor chain.
>
> **[9:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=557)** Now it's saying, "Okay, well I need to go and get the absolute value of it," right?
>
> **[9:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=564)** And it gives me the answer.
>
> **[9:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=566)** And, of course, you could try this with any number of questions, if you'd like.
>
> **[9:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=575)** So we can say something along the lines of, "When is the next webinar on Direct Policy Optimization?"
>
> **[9:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=588)** and we'll let this run live for us.
>
> **[9:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=590)** So we're entering the Plan-and-Execute chain.
>
> **[9:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=594)** And you can see here the reasoning steps, search for upcoming webinars.
>
> **[10:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=600)** And you can see here the next step, okay, I need to find the date, time, and how to register.
>
> **[10:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=606)** Then the step here, give them the above steps.
>
> **[10:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=608)** Respond to the user's question, right?
>
> **[10:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=612)** And you can see the output here.
>
> **[10:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=615)** So to find information on upcoming webinars, a search was conducted, but the search details, date, time, registration were not provided, all right?
>
> **[10:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=623)** So it's saying that it went to look for this and did not find an answer, which is reasonable.
>
> **[10:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=629)** So we can go and add maybe more details.
>
> **[10:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=633)** When is the next webinar on Direct Policy Optimization from [DeepLearning.ai](https://DeepLearning.ai)?
>
> **[10:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=643)** And so we're being more specific with the query.
>
> **[10:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=645)** And let's see if this actually does help the Plan-and-execute agent find the answer.
>
> **[10:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=651)** So here the step is like, "Hey, let's visit official [DeepLearning.ai](https://DeepLearning.ai) website or their social media channels.
>
> **[10:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=658)** Look for any announcements," right?
>
> **[10:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=659)** So these are the steps in the reasoning process that it's coming up with, right?
>
> **[11:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=666)** You can see here that it's got this little bit of information here where it's actually telling us what DPO pipeline is.
>
> **[11:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=673)** That's quite interesting.
>
> **[11:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=675)** All right, so it says here, "The agent, after conducting searches and reviewing the steps taken, specific information was not found," right?
>
> **[11:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=685)** So you can see, of course, this also has some limitations, but it's valuable in the sense that it is actually taking reasoning steps and outlining how it needs to go about finding an answer.
>
> **[11:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=695)** So I encourage you to play with the Plan-and-Execute agent.
>
> **[11:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=697)** Use different sets of tools.
>
> **[11:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/plan-and-execute?u=76281980&t=699)** You know where to go to find tools and use this and give it a shot, and see how you can use it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (15), import. (1), module (1), case, (1), require (1)
> **CLI Commands:** find (5), make (2), python (1)
> **Env Vars:** gpt (2), json (2), api (1), dpo (1)
> **Definitions:** is a  (3)
> **Code Identifiers:** math_chain (1), executor_model (1)
> **URLs:** [deeplearning.ai](https://deeplearning.ai) (2)
> **Exercise Files:** template (2)
> **Prerequisites:** required to (1), set up (1)


### 7. Prompt Management a.k.a. PromptOps

#### Prompt management
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=0)** - [Instructor] As you've come to learn throughout this course, prompt engineering is an important part of working with large language models.
>
> **[0:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=7)** A well-crafted prompt can lead to insightful, accurate responses.
>
> **[0:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=11)** While a poorly structured one may result in irrelevant or inaccurate information.
>
> **[0:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=17)** But prompt engineering presents a unique set of challenges.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=21)** LLMs exhibit a remarkable sensitivity to even the most minor changes to a prompt, a mere tweaking and wording, adding or removing punctuation, a subtle shift in phrasing or even just adding an extra space or new line character will drastically and dramatically transform a model's output.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=42)** This high sensitivity requires careful consideration with every element in the prompt.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=49)** We need to version control prompts the same way we version control code.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=54)** As you've come to see throughout the course, finding the optimal prompt often involves a time-consuming process of trial and error.
>
> **[1:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=61)** It's an iterative journey and a systematic approach.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=65)** You carefully adjust the prompt, you evaluate the impact of that change, and then you go and refine that prompt further.
>
> **[1:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=73)** Given the number of iterations and slight changes made during prompt optimization, it could become challenging to remember or track what changes were made between different runs.
>
> **[1:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=84)** This can lead to confusion and difficulty understanding which alterations led to a particular outcome.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=92)** You need a way to examine and revisit previous versions or restore a previous version of a prompt using a prompt management tool.
>
> **[1:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=103)** Like software development, Prompt engineering needs a robust system for managing in version controlling prompts.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=110)** This system should involve meticulously documenting each change to a prompt along with the corresponding outputs.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=119)** This approach is essential for systematically analyzing and refining prompts.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=124)** Imagine a librarian meticulously cataloging books.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=129)** In a similar way, a practical prompt to management system would organize and track the evolution of prompts and enable a more structured and effective optimization process.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=141)** Remember, LLMs are super sensitive to even tiny prompt changes.
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=147)** Perfecting prompts is a journey of trial, error, and patience.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=151)** You need a system that will keep track of every tweak so you can avoid confusion and understand what changes lead to a particular outcome.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=162)** You need a robust, prompt management system for a smooth and effective optimization process.
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=168)** Just like a jeweler or a librarian, precision and organization are keys to success in prompt engineering, and that's what this section is about.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-management?u=76281980&t=177)** You're going to learn a prompt management system that comes built into LangChain called LangSmith.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** imagine (1), just like (1)
> **Code Keywords:** super (1)
> **Speakers:** - [instructor] (1)

#### LangSmith
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=0)** - LangChain gives you a streamlined approach to prototyping applications and agents using large language models.
>
> **[0:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=8)** But the journey from prototyping to deploying LLM applications requires extensive iteration on prompts, chains, and agents to attain high-quality outputs.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=19)** This is where LangSmith comes in.
>
> **[0:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=22)** LangSmith is a unified platform that's designed to assist in debugging, testing, and monitoring LLM applications.
>
> **[0:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=31)** For those working with LLMs, LangSmith is useful in several scenarios.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=37)** If you're developing a new chain, agent, or set of tools, LangSmith can help you quickly identify and resolve issues.
>
> **[0:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=45)** LangSmith helps in visualizing the relationships and usage patterns of different components, like chains, LLMs, and retrievers.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=54)** This is crucial for understanding the overall structure and functionality of your application.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=60)** LangSmith also enables the evaluation of various prompts and LLMs for a specific component, aiding in selecting the most effective combinations for your application.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=72)** It also allows for repeated testing of a chain over a data set to confirm consistent quality, which is an essential step in ensuring the reliability of your LLM-based applications.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=85)** For capturing your usage traces and leveraging LLMs or analytics pipelines for insight generation, LangSmith provides you a platform that simplifies and streamlines this process.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=98)** So to sum it all up, LangSmith is a platform that's designed to streamline the development and deployment of LLM-based applications.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=109)** It includes tools for debugging, testing, and monitoring, and simplifies the transition from prototype to fully operational products.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=118)** LangSmith also facilitates extensive tweaking of prompts and components for optimal performance in production environments.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=125)** It's ideal for developers facing challenges, managing, and refining LLM capabilities.
>
> **[2:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith?u=76281980&t=132)** And in the next video, we'll get into the LangSmith UI and see what it's all about before seeing some coding examples.

> [!info]- Semantic Content
>
> **Env Vars:** llm (5)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - langchain (1)

#### LangSmith walkthrough
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=0)** - [Instructor] In order to use LangSmith, you first have to sign up and obtain an API key.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=6)** You could do that by going to smith.[langchain.com](https://langchain.com).
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=9)** And as you'll see, you've got multiple options to sign up.
>
> **[0:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=12)** You can sign up with Discord, with your GitHub, with Google or with your email address.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=18)** But once you've signed up for LangSmith, you'll be brought to a page that looks something like this.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=25)** Now, first thing you want to do is go and get your API key.
>
> **[0:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=29)** So you go down to here where it says API Keys.
>
> **[0:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=32)** Scroll down to the bottom and hit create API Key.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=36)** When you hit create API Key, a pop-up box will come up and that pop-up box will have a API key for you to use.
>
> **[0:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=44)** For example like this.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=47)** You'll need to copy this API key and paste it somewhere where you won't lose it.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=55)** Now I'll go ahead and delete that API key so that nobody else can take it and use it.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=62)** But you want to make sure you store that API key somewhere safe.
>
> **[1:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=66)** Now let's go ahead and poke around the UI for LangSmith.
>
> **[1:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=71)** You'll see here that you've got a number of different tabs that you can navigate to.
>
> **[1:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=75)** You've got projects, annotation cues, deployments, dataset and training and the hub.
>
> **[1:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=82)** Projects will be just all the different runs that you are doing with LangSmith.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=86)** And we'll do one a bit later.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=89)** Annotation allows you to add human feedback to your LLM projects.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=95)** Deployments is based on LangServe, which we're not going to be covering in this course.
>
> **[1:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=100)** You can add new datasets to LangSmith simply by uploading here.
>
> **[1:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=107)** You'll see here I have some datasets.
>
> **[1:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=109)** These were related to some benchmarking I was doing with a comparing and contrasting to language models for their agentic behavior.
>
> **[1:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=118)** And then you finally have the LangSmith hub.
>
> **[2:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=122)** Now the hub is a place where you can download prompts.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=126)** This is also a place where you can push and pull prompts too.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=130)** So this is going to be the central repository for you to push and pull hubs to and from.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=137)** So to create a new prompt, you just hit that plus button.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=142)** You'll create a name for the prompt, a description of the prompt, a read-me, what it's used for, the language that prompt is in, a model that you want to associate it with.
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=156)** Any type of settings and then you can hit whether it's private or public.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=160)** So let's go ahead and fill that out.
>
> **[2:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=162)** So this prompt name that we're going to use here, I'll put in LinkedIn Learning Example.
>
> **[2:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=170)** Now you'll see there, apparently you can only use lowercase letters.
>
> **[2:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=174)** I'm going to go ahead and add some hyphens here for readability.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=177)** Let's say LinkedIn Learning example.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=179)** Description, this is a prompt that we are using in the LangSmith section of the LinkedIn Learning course titled Prompt Engineering with LangChain.
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=201)** And we'll spell learning correctly.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=203)** Read-me, this is entirely up to you.
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=207)** I'll just say nothing to say here.
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=211)** Particular use case that we'll do here.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=214)** We're just going to come up with a basic kind of example.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=217)** So I'll just put something like maybe code writing as the use case.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=221)** Language will be English.
>
> **[3:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=224)** Model we'll use this for, we'll use it for any one of these models you could choose.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=230)** You could even choose to leave that blank.
>
> **[3:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=232)** License, we can leave that blank.
>
> **[3:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=235)** I'll make this private so only we can see it.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=239)** We'll hit save, right?
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=243)** And now we can start actually creating the prompt.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=246)** So to create the prompt, we'll just do this.
>
> **[4:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=250)** Alright, so we can come up with a template here.
>
> **[4:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=252)** For this one I'll say you're an expert in PyTorch Hugging Face and OpenAI.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=262)** You're helping a user write code to complete their work.
>
> **[4:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=270)** And of course, just use whatever best practices you'd like to create the template here.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=274)** I'm just doing this for illustrative purposes.
>
> **[4:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=277)** You're helping a user write code to complete their work.
>
> **[4:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=281)** Be brief and speak as if you were a punk rocker.
>
> **[4:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=287)** Great.
>
> **[4:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=289)** And so we can play around with this here.
>
> **[4:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=291)** So here the OpenAI model they've got some settings that we can use.
>
> **[4:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=295)** Text DaVinci, we're not going to use that.
>
> **[4:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=297)** Let's just use GPT-3.5 turbo.
>
> **[5:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=300)** We've got other options here, but let's just stick with GPT-3.5 turbo and instruct.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=305)** Drop the temperature lower.
>
> **[5:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=306)** You can see all the different settings that you have available to you.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=310)** Of course, these are also available to you in pure LangSmith, even though we didn't mess with any of these in the course.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=317)** And we can say, enter a value here.
>
> **[5:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=321)** Write the PyTorch training loop.
>
> **[5:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=325)** And go ahead, hit start.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=328)** And of course we need to enter a OpenAI API key.
>
> **[5:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=330)** So that's where you would enter this information here.
>
> **[5:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=333)** You can go ahead and enter your OpenAI API key and hit start.
>
> **[5:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=339)** And you'll see here that we're getting a response, right?
>
> **[5:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=342)** And we can play around with the prompt here.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=345)** See kind of minor tweaks, what they do.
>
> **[5:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=348)** For example, you're expert in PyTorch, Hugging Face and OpenAI.
>
> **[5:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=352)** You know everything about prompt engineering and large language models, right?
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=363)** And then maybe you want to add a delimiter here, right?
>
> **[6:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=367)** And then we can add a question here, like what's the best prompt to get a LLM to write code for Hugging Face models?
>
> **[6:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=382)** Just kind of as an example, right?
>
> **[6:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=386)** Hit Shift + Enter and it'll run.
>
> **[6:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=389)** Now what we're going to do is actually commit this.
>
> **[6:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=393)** And once we commit this, we'll see how we can play around with this programmatically.
>
> **[6:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-walkthrough?u=76281980&t=397)** So I'll go ahead and commit this, and in the next video we'll see how we can programmatically play around with this prompt, make changes to it, and then push it back to the prompt up here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (4), for, (2), private (2), this, (2)
> **Env Vars:** api (11), llm (2), gpt (2)
> **CLI Commands:** make (3)
> **Versions:** 3.5 (2)
> **Tools:** discord (1), github (1)
> **UI Navigation:** scroll down (1), navigate to (1)
> **Exercise Files:** template (2)
> **Definitions:** is a  (2)

#### Prompt versioning in LangSmith
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=0)** - [Instructor] Utilizing the latest version of a prompt can lead to some unpredictable issues in production environments.
>
> **[0:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=6)** For more stable and consistent deployments, it's advisable to use specific prompt versions.
>
> **[0:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=13)** LangChain Hub supports pulling prompts by their specific commit hash.
>
> **[0:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=18)** This ensures that you're using the exact version of the prompt needed for your application.
>
> **[0:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=24)** To specify the version, you'd use a pattern like this.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=28)** You simply just add the version tag to the prompt ID in the pull command.
>
> **[0:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=35)** Here's a Python snippet for reference.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=37)** Let's go ahead and load a prompt from the LangChain Hub.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=41)** Specifically. We are going to load this prompt, which we have created in the previous video.
>
> **[0:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=48)** So we'll write a function here that is just going to pull the prompt from LangChain and then push the prompt from LangChain.
>
> **[0:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=57)** We will instantiate an LLM, because we want to do some generations with it.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=60)** The repo is going to be the Linkedin-learning-example, which is what this is called, and it's coming from my user.
>
> **[1:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=72)** And so we can see the prompt as so.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=77)** We can construct the prompt chain and then get a result.
>
> **[1:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=83)** I'll go ahead and let that run and then we'll pretty print out the results.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=90)** All right, and you can see we've got the result here.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=92)** I simply just ask, "How do I generate text with a Hugging Face transformers model?"
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=96)** And it goes on and it tells me exactly what it is I need to do.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=101)** Now what I want to talk about is actually how to upload a prompt to LangChain Hub.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=108)** So we saw how easy it was to retrieve a prompt from LangChain.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=111)** It's quite user friendly, and the nice thing about this is that uploading your prompts to LangChain is quite user friendly as well.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=119)** This is nice, because it's going to allow you to share and manage your own custom prompts efficiently.
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=124)** So to upload a prompt to LangChain Hub, it's quite simple.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=128)** You start by creating a simple prompt.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=130)** Then you can ensure that it meets the criteria and standards that's expected by the LangChain Hub.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=135)** And the upload process is quite easy.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=137)** It's simply two key components that you need.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=140)** You need your account handle.
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=142)** So this is the unique identifier within the LangChain Hub.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=146)** So for example, mine was datascienceharp, which happens to be my username everywhere.
>
> **[2:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=151)** Then there's the name of the prompt.
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=152)** So it's kind of a descriptive name for your prompt.
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=154)** And so the one that we just pulled in this example was the Linkedin-learning-example.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=160)** Once you have that, it's real simple to upload your prompt to the LangChain Hub.
>
> **[2:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=166)** It's just this right here.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=169)** You fill in your account handle and the name of your prompt, and then just push it.
>
> **[2:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=175)** So what we're actually going to do now is we're going to make an amendment to the prompt that we have just pulled from LangChain Hub.
>
> **[3:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=182)** So if you recall, our prompt looks something like this.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=189)** Now to add to this prompt, since it is just a string, we can simply do this type of pattern here, plus equal.
>
> **[3:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=196)** We'll see what our prompt looks like now, right?
>
> **[3:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=201)** And you can see here that you write code that follows PEP8 standards and just being appended right to it, right?
>
> **[3:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=207)** Of course, you can also follow principles for prompt pipelining that we had discussed before, right?
>
> **[3:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=211)** So we can say something like prompt is equal to prompt plus, and then have whatever string that we want, right?
>
> **[3:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=219)** And that's, you know, for example, "You also hate being nice," for whatever reason, right?
>
> **[3:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=229)** Just kind of an example to show you what different ways you have to amend the prompt.
>
> **[3:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=234)** And you can see here we've got that there. Great.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=237)** Now what we're going to do is we're going to push this to LangChain Hub.
>
> **[4:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=242)** Great.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=243)** And you can see here this is the version of that prompt.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=245)** So when we go back to LangChain Hub, you'll see here that this was updated just a few seconds ago.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=251)** You can see the different commits that we have here.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=253)** So we can see here, this was the initial commit that we had seen.
>
> **[4:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=258)** This right here is now reflecting the changes that we have just made.
>
> **[4:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=264)** And this specific version of the prompt now has the version appended to it.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=269)** So we can copy that, and we can actually just pull this now into our environment.
>
> **[4:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=280)** Use that helper function that I had defined before.
>
> **[4:43](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=283)** We could just pass the arguments here for the particular repo.
>
> **[4:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=291)** And then the version here.
>
> **[4:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=295)** So we can just copy that version from down here.
>
> **[5:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=302)** Of course, I may have over-engineered the thing by having this helper function, because you can always just pull the prompt just like this, right, like so.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=311)** Right. And now we have the prompt as such.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=317)** And of course, we can pass this like we normally would.
>
> **[5:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=321)** So we have our LLM chain that we have defined.
>
> **[5:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=324)** Let's just redefine a new one. We'll say chain_new.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=328)** This is going to be the prompt with the LLM.
>
> **[5:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=334)** We'll also just have our string up with parser in as well.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=337)** So from langchain_community.output_parsers import.
>
> **[5:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=349)** of course, it's not from langchain_community, this should actually just be coming from langchain.
>
> **[6:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=360)** Live debugging in action.
>
> **[6:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=362)** You'd think that I would remember how to do all this by now.
>
> **[6:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=366)** All right, so it's actually from langchain_core, my friends.
>
> **[6:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=370)** So we're pulling from langchain_core.
>
> **[6:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=371)** We'll have an output parser, we'll add that output parser here.
>
> **[6:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=375)** And of course, we'll just pass this to our language model and generate some text.
>
> **[6:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=380)** So we'll just use streaming for this example.
>
> **[6:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=384)** So for chunk in chain_new.stream.
>
> **[6:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=390)** And you'll remember that the stream will take a dictionary, and that's going to be question for the input variable, right?
>
> **[6:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=400)** Question.
>
> **[6:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=401)** The question I want to ask it is, how about, "How do I hack an API?"
>
> **[6:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=409)** We'll see if it chooses to answer that question or not.
>
> **[6:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=412)** I'll print chunk, end equals this, flush equals True.
>
> **[7:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=422)** And we'll get our response here. All right.
>
> **[7:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=425)** So it's, you know, just saying, "Don't be illegally tinkering with an API."
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=432)** So yeah, it's quite nice.
>
> **[7:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=433)** It is responding in a punkish manner like it's supposed to.
>
> **[7:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=438)** And yeah, it's giving us good advice.
>
> **[7:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=440)** "Being a punk rocker in the tech world isn't about breaking the rules just because."
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=444)** There you go.
>
> **[7:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=444)** So now I hope you understand the importance of doing this type of managing and versioning of prompts, right?
>
> **[7:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=451)** You want to treat prompts just like you would treat code.
>
> **[7:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=455)** So you want to make sure that whatever application you're building, that you're loading, whatever specific version of the prompt that you need, so that you can ensure stability in the deployment, this is going to safeguard you against any type of unintended consequences of ongoing updates, because things are changing rapidly.
>
> **[7:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=472)** So remember that with prompt versioning, you and your team can freely commit new versions to the prompt repo.
>
> **[7:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=478)** This flexibility is really going to give you a more dynamic environment for experimentation and for improvement.
>
> **[8:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=485)** Version control plays a crucial role in preventing the accidental deployment of untested or under-validated components.
>
> **[8:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=494)** So select versions of prompts that are proven.
>
> **[8:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=498)** That way you're able to maintain the integrity and reliability of your system.
>
> **[8:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=503)** Prompt versioning also has an added benefit of just streamlining your development process.
>
> **[8:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=508)** This, you know, allows for agile development and iteration without risking your production environment.
>
> **[8:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=514)** So incorporate prompt versioning into your LangChain workflow, not just because it's the best practice for stability and reliability, but because it's really a strategic approach to having more innovation and collaboration, but in a efficient manner.
>
> **[8:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=528)** So prompt versioning is key to prompt engineering.
>
> **[8:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/prompt-versioning-in-langsmith?u=76281980&t=533)** Treat your prompts like you would treat code and you will be in good shape.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), function (3), pass (3), this, (3), this. (2)
> **Code Identifiers:** chain_new (2), langchain_community (2), langchain_core (2), output_parsers (1)
> **Env Vars:** llm (3), api (2), pep8 (1)
> **Analogies:** for example (2), just like (2)
> **CLI Commands:** make (2), python (1)
> **Cross-References:** previous video (1), go back to (1)
> **Definitions:** is called (1)
> **Best Practices:** best practice (1)

#### LangSmith deep dive
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=0)** - [Instructor] In this notebook, we're going to do a bit of a deep dive into LangSmith.
>
> **[0:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=5)** Now, this notebook was co-authored with my friends at the AI Makerspace.
>
> **[0:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=9)** I highly recommend you check out their YouTube channel for hands-down the best educational content on all things LLM and all things AI engineering.
>
> **[0:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=19)** Be sure to connect with Chris Alexiuk and Greg Loughnane on LinkedIn.
>
> **[0:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=25)** I've learned so much from Chris and Greg about AI engineering and working with language models.
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=34)** So I'm going to really quickly breeze through everything in the first half of this notebook because you've seen this all before.
>
> **[0:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=41)** We're instantiating an LLM, setting up Nest sync AO so that we could do asynchronous stuff in a Jupyter Notebook.
>
> **[0:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=49)** We're instantiating a document loader.
>
> **[0:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=52)** This document loader is actually just a site map loader.
>
> **[0:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=54)** So it's going to go through here, the site map for LangChain and just essentially it's loading in all the docs.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=62)** So we can take a look at this once it's done.
>
> **[1:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=65)** All right, and we can see here that we have a list of documents, right, which is 169 elements, right?
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=77)** Each one of these document objects is essentially the entire text for a particular page.
>
> **[1:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=85)** So this page is generating usable text with AI, so on and so forth.
>
> **[1:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=89)** And you can check out the blog itself if you'd like by go in here, right?
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=95)** So essentially, this is what we've done.
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=96)** We've loaded the entirety of the LangChain blog into a list where each page in the LangChain blog is a document object now.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=106)** We're going to split the LangChain blog up.
>
> **[1:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=110)** We'll use a chunk_size of 256, chunk_overlap of 16.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=113)** And so we've got 2014 elements of documents.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=119)** So just to verify, right, you can take a look at one of these split_documents, right?
>
> **[2:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=124)** Let's look at the first element in this list, the 42nd element of this list.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=127)** And you can just see it's just a chunk of text.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=130)** We've got the associated metadata with it as well.
>
> **[2:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=133)** It's just text.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=135)** We are going to instantiate a embeddings model.
>
> **[2:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=139)** We're going to go ahead and set up a vector store now.
>
> **[2:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=143)** I use capture, so I don't see all the printout from all the stuff installing, just keeps the notebook clean.
>
> **[2:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=150)** We're then going to instantiate the vectorstore and set up a vectorstore retriever, right?
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=154)** So we've seen this before, right?
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=156)** If you're forgetting what this process is, you can go back to the retrieval section of the course or you can look at the video on retrieval augmented generation because that's essentially what we're doing here, right?
>
> **[2:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=168)** So we're going to let this work and do its thing.
>
> **[2:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=171)** So right now what's happening is all those chunks of documents are being passed to our embeddings model.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=176)** Those embeddings is just a fixed length vector, right?
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=179)** It's just vectorizing each one of those chunks, putting it into this vector database, right?
>
> **[3:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=184)** And now we have a retriever that is set up.
>
> **[3:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=187)** So what's going to happen is that a user is going to input a query.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=191)** That query will be embedded using the exact same embedding model that we used to embed all the vectors in this vectorstore.
>
> **[3:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=199)** It's going to fetch similar documents and inject that right into this prompt_template right here.
>
> **[3:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=206)** So of course, we are familiar with prompt_templates.
>
> **[3:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=208)** We know what this is all about.
>
> **[3:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=209)** We also know all about how to create a chain using LangChain expression language.
>
> **[3:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=215)** And here we are just going to invoke and get a response and we get a response.
>
> **[3:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=221)** Great.
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=222)** All right, so now, this is where we're going to see some LangSmith action here.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=226)** So it's going to be cool to see this side by side with the LangSmith screen here.
>
> **[3:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=233)** So let's go to the project here, just setting environment variables so that LangSmith knows that we're now tracking the LangChain API key.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=243)** You should already have that.
>
> **[4:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=244)** I'll go ahead and enter mine.
>
> **[4:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=249)** So let's look what's going to happen here.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=251)** So let's go ahead and invoke this generation and see what happens here on our Projects page.
>
> **[4:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=257)** Now, you can see here that we have a new project that just was opened up, right?
>
> **[4:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=261)** So this is the current date and time, right?
>
> **[4:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=265)** And this project has now kicked off, right?
>
> **[4:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=268)** And we could take a look in depth what is happening under the hood.
>
> **[4:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=272)** So we have a RunnableSequence.
>
> **[4:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=274)** What's happening in the RunnableSequence.
>
> **[4:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=276)** We've got, you know, this question coming in.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=279)** These are all the documents that are being retrieved.
>
> **[4:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=282)** We get all this source information, location, all this great metadata, and we get the output from the LLM as well.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=292)** Let's go ahead and dig a bit deeper here now.
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=296)** So now what we're going to do is we're just going to create a testing dataset.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=299)** So let's go ahead and create a testing dataset.
>
> **[5:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=301)** I'm going to go ahead and navigate to the dataset page here and you'll see what will happen, right?
>
> **[5:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=308)** This will take a second to load into its thing here.
>
> **[5:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=311)** So we're getting this warning because apparently I had passed in the wrong name for an embeddings model, but it's okay.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=317)** This will just work just fine for us.
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=320)** Let's go ahead and make sure that our dataset has generated, which it has, that's the current date and time.
>
> **[5:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=329)** And now we have a dataset here.
>
> **[5:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=331)** You can click in on an element of the dataset.
>
> **[5:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=335)** You can see here, here's a question, here's the page content that is retrieved for that.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=345)** We can also do some evaluation as well.
>
> **[5:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=347)** In this case, we're going to do some evaluation on, you know, harmfulness and some additional evals as well.
>
> **[5:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=354)** So let's go ahead and just run this and we'll see it come up on our Projects here.
>
> **[6:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=360)** You'll see here that we also get a nice link that we can click on.
>
> **[6:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=362)** So let's go ahead and just click on that link, right?
>
> **[6:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=366)** Here's the question.
>
> **[6:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=367)** We get all this wonderful metadata.
>
> **[6:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=369)** You can see all these runs are still pending.
>
> **[6:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=372)** This is all, again, you can go to Dataset and Testing.
>
> **[6:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=376)** This is going to be saved here, Projects as well.
>
> **[6:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=379)** This will be saved here as well.
>
> **[6:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=381)** So you can see how many tokens we've used, cost 15 cents to do all this stuff.
>
> **[6:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=387)** And you can see all these particular runs that are happening, right?
>
> **[6:31](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=391)** So here's the harmfulness criteria that is being checked against, right?
>
> **[6:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=396)** And we get the response here from the language model, right?
>
> **[6:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=401)** And so we get all this wonderful tracing, so much detail.
>
> **[6:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=405)** You can see all the detail that we get from LangSmith.
>
> **[6:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=408)** So we get really full visibility into our application development.
>
> **[6:54](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=414)** Here, of course, if we want to do some more re-ranking, we could do that.
>
> **[6:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=417)** So you'll need your Cohere API to do that.
>
> **[6:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=419)** So this is just kind of added extra stuff here and I will see our new chain.
>
> **[7:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=424)** So let's go back to Projects here.
>
> **[7:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=429)** We have a new evaluation criteria.
>
> **[7:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=431)** The code itself isn't that important.
>
> **[7:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=432)** I just want to show you how you can see all this stuff in LangSmith.
>
> **[7:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=437)** So we'll go ahead and let this run, right?
>
> **[7:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=440)** We get a direct link to our project that we can check out.
>
> **[7:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=443)** Of course, it's pulled up right here as well.
>
> **[7:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=446)** We can take a look here and you can see all of these evaluations that are running.
>
> **[7:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=456)** Get full visibility into all this wonderful information.
>
> **[7:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=460)** You can add your feedback here if you'd like to.
>
> **[7:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=462)** There's metadata associated with it, or we get information in terms of latency and cost.
>
> **[7:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=471)** And you know, you can click into this and each one of these, you know, we can see the scoring.
>
> **[7:58](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=478)** You even click into this a little bit further if you'd like.
>
> **[8:01](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=481)** And you could see all the different bits of contents that's retrieved.
>
> **[8:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=485)** You can click on Open Run and get even more under the hood, see all the retrieved context and the response from OpenAI here.
>
> **[8:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=498)** You could see how with LangSmith, you get full visibility, transparency into the development of your application.
>
> **[8:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=505)** So that's it for this video.
>
> **[8:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/langsmith-deep-dive?u=76281980&t=507)** This next video is actually not about LangSmith, but it's about how to manage the length of your prompts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case, (1)
> **UI Navigation:** click on (3), go to (2), navigate to (1)
> **Code Identifiers:** chunk_size (1), chunk_overlap (1), split_documents (1), prompt_template (1), prompt_templates (1)
> **Env Vars:** llm (3), api (2)
> **Prerequisites:** set up (3), you'll need (1)
> **Cross-References:** go back to (2), next video (1)
> **CLI Commands:** make (1)
> **Documentation:** the docs (1)

#### Managing prompt length for agents
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=0)** - [Instructor] You've seen agents that work in LangChain and if you recall, agents use tools, but every time they call a tool, the result of that call is added back to the prompt so that the agent can go and plan the next action.
>
> **[0:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=14)** But depending on what tools are being used and how those tools are being called, the prompt for this agent can grow very large.
>
> **[0:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=21)** In fact, it can go larger than the context window for the model.
>
> **[0:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=26)** Luckily, LangChain expression language makes it easy for us to add a custom function that will help us manage the size of our prompt within a chain or an agent.
>
> **[0:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=36)** All right, so let's go ahead and instantiate a couple of tools for our agent 'cause as you know, agents need a toolkit.
>
> **[0:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=42)** Two tools we're going to use is Wikipedia Search and Duck Duck Go Search.
>
> **[0:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=46)** We'll go ahead and create a tool belt out of that and just call it tools and we'll go ahead and create a chat prompt template.
>
> **[0:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=53)** So here we're essentially telling the system message that you are the world's greatest research assistant.
>
> **[0:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=59)** You know exactly where and what to look for when you're given a query.
>
> **[1:02](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=62)** You've been a research assistant to people like Yann LeCun Geoffry Hinton, and Francois Challet.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=68)** So I'm hinting to this particular system message that I want the model to help me with deep learning concepts.
>
> **[1:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=77)** Go ahead and instantiate an LLM in this case we'll use chat OpenAI.
>
> **[1:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=81)** I'll use the GPT-3.5 Turbo model because the prompts will get a bit long here.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=87)** So I want to keep the cost to you down low.
>
> **[1:30](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=90)** You can however swap this out for any model that you'd like.
>
> **[1:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=92)** So go ahead and do that.
>
> **[1:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=95)** I'll go ahead and instantiate the agent before I run this bit of code.
>
> **[1:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=99)** However, we'll instantiate the agent.
>
> **[1:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=102)** First thing we'll do, we've seen this pattern before.
>
> **[1:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=104)** We need to give the agent a scratch pad.
>
> **[1:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=108)** In this case, I want the agent to format function to messages for OpenAI.
>
> **[1:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=113)** Got the prompt and we're going to bind a function.
>
> **[1:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=116)** And the functions that we're going to bind are the tools.
>
> **[1:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=119)** And I'll go ahead and send this to the OpenAI function agent output parser and set up the agent executor.
>
> **[2:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=126)** We're going to log everything to LangSmith.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=128)** So let's go ahead and log into LangSmith here.
>
> **[2:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=130)** So I'll go ahead and resize the windows, right?
>
> **[2:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=134)** So I've gone ahead and logged into LangSmith.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=135)** So what I'm going to do is invoke the agent with this particular prompt.
>
> **[2:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=140)** Why does deep learning work?
>
> **[2:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=142)** Is there some inherent property of a models architecture that makes it capable of learning?
>
> **[2:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=147)** Or is it more about the data that is trained on any theorems or hypotheses that you can find that support this?
>
> **[2:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=152)** Is there something special about how humans generate data?
>
> **[2:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=154)** What are the philosophical implications?
>
> **[2:36](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=156)** You can see here like unpacking the prompt in with a lot of questions and a lot of things that the model is going to go search for.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=164)** So kind of artificially long prompt just to kind of demonstrate what will happen when we have that and how we're going to rectify and remedy that.
>
> **[2:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=173)** We'll go ahead, start the agent executor and we'll refresh this.
>
> **[2:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=179)** We'll see here that we've got our run happening here, right?
>
> **[3:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=183)** And you can see here it's choosing to use Wikipedia over Duck Duck Go search.
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=189)** And we get an error here.
>
> **[3:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=190)** So we can go ahead and actually see the error here.
>
> **[3:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=194)** The model is maximum context length is that many tokens, but we sent that many tokens.
>
> **[3:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=200)** Of course, we can look at that in LangChain here.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=203)** You can see the error has how it errors out.
>
> **[3:25](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=205)** So in this case, we capture the error there and we can see the intermediate kind of results.
>
> **[3:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=212)** So find something via Duck Duck Go search here and it pulls this up.
>
> **[3:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=217)** You could see that it's then going to Wikipedia so on and so forth.
>
> **[3:42](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=222)** So typical things that you would expect to see with LangSmith gives you that visibility.
>
> **[3:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=228)** Looks like you can look at even more detail by looking at some parallel runs and stuff that was hidden.
>
> **[3:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=237)** And of course we see here the total number of tokens that went in and how much that run cost us, of course.
>
> **[4:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=243)** So we're familiar with this in LangSmith of course.
>
> **[4:06](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=246)** What we could do now is actually define a function that is going to help condense the prompt.
>
> **[4:13](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=253)** So we've seen the situation here.
>
> **[4:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=256)** We ran out of context window before we can get the final answer.
>
> **[4:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=261)** So what we're going to do is build out some prompt handling logic.
>
> **[4:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=266)** So essentially what this is doing, it's saying, okay, if our messages have too many tokens, we need to start dropping the earliest tokens, the earliest AI function message pairs, right?
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=279)** And write all this logic to handle that aspect of it.
>
> **[4:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=284)** Now we'll instantiate the agent and we're going to pipe it actually from prompt to this function.
>
> **[4:52](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=292)** So we added this bit to our agent.
>
> **[4:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=295)** We'll still bind the tools and we'll still parse in the usual way.
>
> **[4:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=299)** And of course, instantiate the agent executor and invoke the agent.
>
> **[5:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=305)** And we can of course look right here in a LangSmith to see that run, which is happening as we speak.
>
> **[5:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=315)** This is the current time we're in the current run.
>
> **[5:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=320)** This is the agents running here.
>
> **[5:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=322)** And of course we can see everything that is happening under the hood.
>
> **[5:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=328)** LangChain gives us that visibility and we can look at all the metadata can add feedback here as well.
>
> **[5:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=335)** And let's go ahead and see if we get a final answer here from the language model.
>
> **[5:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=340)** Alright, and so you can see this time, same exact prompt.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=345)** We just added some logic that kind of compresses and condenses the prompt and we get the agent to run successfully.
>
> **[5:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=353)** So it says here, deep learning works due to a combination of factors related to the model's architecture and the data it's trained on.
>
> **[5:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=359)** One important aspect is the universal approximation theorem, which states that the neural networks with a sufficient number of parameters can approximate any continuous function.
>
> **[6:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=368)** And then unfortunately it cuts off here as the answer.
>
> **[6:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/managing-prompt-length-for-agents?u=76281980&t=369)** So just an illustrative example for how you can manage prompt size in one way.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), let (3), case, (2), for. (1), this. (1)
> **CLI Commands:** find (2)
> **Env Vars:** llm (1), gpt (1)
> **Versions:** 3.5 (1)
> **Exercise Files:** template (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 8. The LLM Landscape

#### Applications of language models
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=0)** - [Instructor] Large language models are revolutionizing various industries by powering smart virtual assistants, analyzing customer sentiment, and more.
>
> **[0:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=10)** Let's discuss some of the use cases and applications of large language models.
>
> **[0:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=16)** LLM chatbots are being used to personalize customer interactions, to engage in natural language conversations, understand customer queries, and provide relevant responses.
>
> **[0:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=27)** LLM-driven virtual assistants for automated customer support handle common customer inquiries, guide users, and offer real-time support.
>
> **[0:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=37)** They also analyze customer feedback to determine sentiment towards products or services, and they're even being used to communicate in multiple languages, breaking down language barriers, and providing a global reach for businesses.
>
> **[0:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=51)** In social media, LLMs are being used to automate article writing.
>
> **[0:55](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=55)** They're assisting journalists in generating drafts and brainstorming ideas.
>
> **[1:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=60)** They're also being used for blog and social media post creation.
>
> **[1:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=64)** They're helping creators generate engaging blog and social media content.
>
> **[1:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=68)** They're also generating product descriptions to assist ecommerce platforms in creating compelling product descriptions.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=76)** There's also a potential risk for LLM-generated content that's similar to existing online content, which would lead to unintentional plagiarism.
>
> **[1:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=86)** Within ecommerce, LLMs are powering real-time translation tools, which are instantaneously translating text or speech from one language to another.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=97)** They're also being used to automatically translate documents for global businesses.
>
> **[1:41](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=101)** Language models are also being used to help translate user interfaces and other textual elements for international markets.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=111)** However, while LLMs promise efficiency, there's a need to ensure the authenticity and human touch in interactions.
>
> **[2:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=120)** Within finance, language models are being used for fraud detection and prevention because they can analyze financial data and detect and prevent fraud.
>
> **[2:08](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=128)** LLMs are also being used to analyze financial news and market data for investment decision-making.
>
> **[2:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=135)** They're also being used to analyze customer data for loan underwriting and credit risk assessment.
>
> **[2:21](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=141)** But as with anything, the challenge lies in ensuring data security and accurate interpretation of complex financial data.
>
> **[2:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=149)** Marketing and advertising was one of the biggest first wins for language models, because they're used for content categorization for personalized recommendations.
>
> **[2:38](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=158)** They're also being used to play a role in targeted advertising and marketing campaign.
>
> **[2:44](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=164)** LLMs are also changing the search engine game completely, because now, they're being used to enhance search engine results by better understanding user queries.
>
> **[2:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=176)** However, there is a potential risk of LLMs generating content that misrepresents a brand's voice or could be perceived as misleading.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=185)** Within cyber law, LLMs are being used to analyze privacy policies and ensure adherence to privacy laws.
>
> **[3:12](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=192)** They're also being used to assist in legal research and case analysis within cyber law.
>
> **[3:18](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=198)** LLMs also can analyze data related to security breaches and other cyber incidents.
>
> **[3:24](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=204)** The challenge, of course, is ensuring accurate interpretation of the intricate legal language and maintaining data confidentiality.
>
> **[3:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=213)** LLMs are also being used increasingly in healthcare to support healthcare professionals with medical diagnoses, to assist healthcare professionals in literature review, and research analysis within biomedicine.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=226)** They're also being used to analyze patient data to support personalized treatment recommendations.
>
> **[3:53](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=233)** However, misdiagnosis or incorrect treatment suggestions by LLMs can have serious consequences.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=239)** Ensuring these models are thoroughly tested and validated for medical applications is critical.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=245)** We've touched on just some of the potential applications of large language models.
>
> **[4:11](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=251)** I hope you're seeing that these models are ushering in a new era of innovation across wide variety of sectors.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=259)** From healthcare, where they're supporting medical diagnosis, to finance, where they aid in fraud prevention, the language models are transforming decision-making and boosting efficiency.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=269)** However, it's vital to exercise caution and diligence when employing LLMs, particularly in sensitive areas, like healthcare and law.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=279)** This is to mitigate risks and ensure that we have the highest quality outcomes.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=285)** Looking ahead, the potential for large language model-driven innovation is immense.
>
> **[4:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/applications-of-language-models?u=76281980&t=291)** The future promises exciting opportunities for these models to revolutionize further how we work, learn, and communicate.

> [!info]- Semantic Content
>
> **Env Vars:** llm (3)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### The LLM landscape
> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=0)** - [Instructor] Since the Transformer architecture was introduced in 2017 and the BERT model was introduced in 2019, both by Google, LLMs have revolutionized natural language processing, content generation and beyond.
>
> **[0:15](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=15)** The last few years have seen a surge in the development and deployment of LLMs.
>
> **[0:20](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=20)** As these models grow in capabilities, complexities, and parameter count, a pivotal question emerges for businesses and developers.
>
> **[0:28](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=28)** Should you lean towards open-source models or opt for the closed source alternatives?
>
> **[0:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=34)** Open-source models have democratized access to state-of-the-art AI capabilities.
>
> **[0:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=39)** Open-source LLMs have publicly accessible source codes which anyone can use, modify, and distribute.
>
> **[0:47](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=47)** This means developers, researchers, and enthusiasts can work together to develop, improve, and customize these models.
>
> **[0:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=56)** These open-source models encourage innovation, knowledge sharing, and collective development efforts.
>
> **[1:03](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=63)** Models like Llama 2, Alpaca, and Falcon have carved niches for themselves, excelling in dialogue situations, instruction following tasks, and text generation respectively.
>
> **[1:16](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=76)** Llama and Llama 2 were developed by Meta AI.
>
> **[1:19](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=79)** These models are designed for dialogue situations and are trained on a vast corpus of publicly available data.
>
> **[1:27](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=87)** The Falcon series of models was developed by the Technology Innovation Institute.
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=93)** Falcon models are optimized for text generation and chatbot functionality.
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=97)** Deci AI produces models that excel at fast inference while maintaining quality, resulting in efficiency and cost savings.
>
> **[1:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=106)** There's a number of startups out there that are pumping out open-source models.
>
> **[1:51](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=111)** For example, Mistral and Stability, and there's far too many to name, but these models are hitting the open-source scene and providing developers with a wide range of alternatives.
>
> **[2:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=125)** The open-source ecosystem offers a number of benefits to developers.
>
> **[2:09](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=129)** One is that developers can tailor models to their specific needs from full fine-tuning to prompt engineering.
>
> **[2:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=137)** While the initial setup might demand more resources, the long-term benefits, especially at scale, are undeniable.
>
> **[2:26](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=146)** With the ability to self-host businesses can ensure data privacy, which is paramount concern in today's digital landscape.
>
> **[2:35](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=155)** Closed-source LLMs is the land of proprietary titans.
>
> **[2:40](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=160)** These closed-source LLMs are developed and maintained by organizations or companies that do not make their source code publicly available.
>
> **[2:49](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=169)** As a result, the specific details of their architecture, training data, and algorithms are usually not accessible to the public.
>
> **[2:57](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=177)** These models are often created as commercial products that might require licenses or subscriptions to use.
>
> **[3:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=185)** A few models to watch in the closed-source space include OpenAI's GPT series, GPT-3.5, GPT-4, GPT-4 turbo have set new benchmarks in various tasks, excelling in text completion, translation, and question answering.
>
> **[3:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=203)** Anthropic has a model called Claude, which is a cutting edge model that stands out in research, offering capabilities like editing, rewriting, summarizing, and more.
>
> **[3:34](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=214)** Cohere is another company that has models like Command XL and Command Medium, which excel at interpreting instruction like prompts and making them ideal for chatbots.
>
> **[3:46](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=226)** There are several other closed-source models and companies that are making waves.
>
> **[3:50](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=230)** For example, models like Jurassic-2 or Google's PaLm, or Writer's Palmyra.
>
> **[3:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=236)** Closed-source models have their pros and cons.
>
> **[3:59](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=239)** They're accessible via API, and this brings along with it its own set of advantages.
>
> **[4:05](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=245)** One is that it's easy to use.
>
> **[4:07](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=247)** It requires minimal expertise, so businesses can integrate these models into their applications easily.
>
> **[4:14](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=254)** These APIs offer a swift route for companies looking to deploy AI powered features quickly being proprietary.
>
> **[4:22](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=262)** These models often receive regular updates, which ensure that they remain at the forefront of the AI landscape.
>
> **[4:29](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=269)** However, they come with limitations and customization, potential data privacy concerns, and costs that can escalate at scale.
>
> **[4:39](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=279)** Here's some things to take into consideration when making the choice between open-source and closed-source models.
>
> **[4:45](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=285)** First is the expertise of your team.
>
> **[4:48](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=288)** Does your team possess deep machine learning or NLP knowledge, or are you just looking for a plug and play solution?
>
> **[4:56](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=296)** While closed-source models might seem economical, initially, open-source model can offer cost benefits in the long run.
>
> **[5:04](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=304)** If your application demands specific customizations, open-source models provide the flexibility that you need.
>
> **[5:10](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=310)** For applications that are handling sensitive data, open-source models with their self-hosting capabilities offer an edge.
>
> **[5:17](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=317)** The LLM landscape is dynamic with constant innovations, reshaping the train.
>
> **[5:23](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=323)** As businesses staying informed, evaluating the pros and cons and making choices that align with long-term strategies are imperative.
>
> **[5:32](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=332)** Whether you lean towards the open-source vanguard or those proprietary titans, one thing is clear.
>
> **[5:37](https://www.linkedin.com/learning/prompt-engineering-with-langchain/the-llm-landscape?u=76281980&t=337)** Large language models are here to stay and they promise to redefine the future of AI powered applications.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), bert (1), api (1), nlp (1), llm (1)
> **Code Keywords:** self (2), public (1), require (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Versions:** 3.5 (1)
> **Exercise Files:** source code (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)


## Path Context

### In [[Prompt Engineering Skills for Developers]]
← [[ChatGPT- Perfecting Your Output with Templates in Prompts]] | **5 of 6** | [[Building Advanced AI Apps with Prompt Flow]] →

## Appears In

- [[Prompt Engineering Skills for Developers]]

## Related Courses

_Courses sharing skills:_

- [[AI Agents Made Simple- Your Zero-to-Hero Guide to Prompting for Work Automation]] — Artificial Intelligence (AI), Prompt Engineering
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), Prompt Engineering
- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), Prompt Engineering
- [[Prompt Engineering With Gemini]] — Artificial Intelligence (AI), Prompt Engineering
- [[Multimodal Prompting with Google's Project Gemini]] — Artificial Intelligence (AI), Prompt Engineering

---

[↑ Back to top](#)