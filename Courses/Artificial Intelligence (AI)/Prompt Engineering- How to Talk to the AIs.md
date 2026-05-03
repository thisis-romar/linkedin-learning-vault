---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: prompt-engineering-how-to-talk-to-the-ais
url: "https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais"
duration_minutes: 29
duration: 29m
level: Beginner
updated: 4/17/2023
learners: 612000
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Prompt Engineering
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFSXS6mzs87pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1681413686159?e=2147483647&amp;v=beta&amp;t=6_zr6IaP-j2tvL1Y48FqfUX0wHH0v2uIIhkXnRN9w4s"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
  - '[[Technical Literacy and Future Readiness for Aspiring Managers]]'
  - '[[Building AI Literacy]]'
prev_courses:
  - '[[Generative AI vs. Traditional AI]]'
  - '[[How to Boost Your Productivity with AI Tools]]'
  - '[[What Is Generative AI-]]'
next_courses:
  - '[[Prompting ChatGPT with Multimodal Techniques]]'
  - '[[Using AI for Data-Driven Insights]]'
  - '[[Introduction to Large Language Models]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":3,"total":10,"prev":"Generative AI vs. Traditional AI","next":"Prompting ChatGPT with Multimodal Techniques"},{"path":"Technical Literacy and Future Readiness for Aspiring Managers","position":4,"total":5,"prev":"How to Boost Your Productivity with AI Tools","next":"Using AI for Data-Driven Insights"},{"path":"Building AI Literacy","position":4,"total":7,"prev":"What Is Generative AI-","next":"Introduction to Large Language Models"}]'
path_count: 3
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/prompt-engineering
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Prompt%20Engineering-%20How%20to%20Talk%20to%20the%20AIs.md)

![Prompt Engineering: How to Talk to the AIs](https://media.licdn.com/dms/image/v2/D560DAQFSXS6mzs87pA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1681413686159?e=2147483647&amp;v=beta&amp;t=6_zr6IaP-j2tvL1Y48FqfUX0wHH0v2uIIhkXnRN9w4s)

# Prompt Engineering: How to Talk to the AIs

> Are you looking to learn more about prompt engineering, but not sure where to start? Join Xavier Amatriain, vice president of engineering and AI product strategy at LinkedIn, in this course designed to get you up to speed with one of the hottest topics in AI today. By the end of this course, you’ll be equipped with new engineering tips and tricks—as well as a variety of sample prompts and response

> [LinkedIn Learning](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais) | 29m | Beginner | 612K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Talking to the AIs](#talking-to-the-ais)
  - [Using the included handouts](#using-the-included-handouts)
- [**1. What Is Prompt Engineering?**](#1-what-is-prompt-engineering) (7 videos)
  - [The generative AI revolution](#the-generative-ai-revolution)
  - [What is a prompt?](#what-is-a-prompt)
  - [Designing a prompt](#designing-a-prompt)
  - [Basic prompt examples](#basic-prompt-examples)
  - [What is prompt engineering?](#what-is-prompt-engineering)
  - [Advanced prompt examples](#advanced-prompt-examples)
  - [Prompt engineering tips and tricks](#prompt-engineering-tips-and-tricks)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and resources](#next-steps-and-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Talking to the AIs](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/talking-to-the-ais?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/talking-to-the-ais?u=76281980&t=0)** - If you're here, you probably have already heard about [[ChatGPT]] and [[GPT-4|GPT4]] and might have even come across the term [[Prompt Engineering]] in that context. Is prompt engineering something you should care about? Is it relevant to you and your current role? Let me answer that with a personal story. Before I join [[LinkedIn]] to lead [[Generative AI]] effort, I co-founded a startup in the AI for healthcare space. We were at the forefront of using the state-of-the-art AI models in a high stakes domain like healthcare. At some point, it became clear that in order to make things work, the medical doctors in our team needed to be very involved in designing the interface with the AI. So we had to have medical doctors become involved in doing prompt engineering. Think about it. If medical doctors in the future will need to understand how to interact with the AI, chances are you will to. In this course, I will give you a gentle introduction on how to talk to the AI. As you will see shortly, most of it boils down to how to follow good prompt engineering practices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (4), [[ChatGPT]] (1), [[GPT-4|Gpt4]] (1), [[LinkedIn]] (1), [[Generative AI]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** gpt4 (1)
> **Speakers:** - if (1)

#### [Using the included handouts](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/using-the-included-handouts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/using-the-included-handouts?u=76281980&t=0)** - [Instructor] I've included two documents in the exercise files that you might find useful. Throughout this course, I will be providing examples of text prompts and the responses generated by [[GPT-4]]. However, it isn't feasible for me to read all the responses aloud. To accommodate, I've included a text file called [[Prompt Engineering]] - Prompts and Responses, which you can download to read or review the text at your own pace. For those learners using a screen reader, this file may be particularly helpful. The second file, called Prompt Engineering - Resources and Links. contains links to many resources you may find useful if you'd like to delve further into prompt engineering after watching the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (3), [[GPT-4]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** gpt (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 1. What Is Prompt Engineering?

[↑ Back to Table of Contents](#table-of-contents)

#### [The generative AI revolution](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/the-generative-ai-revolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/the-generative-ai-revolution?u=76281980&t=0)** - Before we go too deeply into [[Prompt Engineering]], let's talk a bit about [[Generative AI]] more broadly and define some key concepts. AI has been around for quite some time. It has been used with different degrees of success by companies and other institutions in different fields for years. For example, when I led the algorithm Steam and Netflix, we use AI for recommending movies and shows. In the past few years, you might have also heard how AI models conquer new feats. Like for example, beating professional chess or go players. But why is AI, all of the sudden, on the cover of the New York Times. Now, a few innovations have come into play, and while they're all slightly different, they have been categorized into this new label of generative AI. Generative AI not only has the ability to identify and classify inputs like the old AI did, it can also generate new content that did not exist before. To be fair, some of the old AI was also able to generate new content. However, generative AI does so with much better quality and importantly, in response to natural language input. This last aspect is key to why prompt design and engineering is so important, and we will double click on it soon. But let's also define some other important generative AI concepts. As mentioned before, generative AI is a new label that is being used to refer to a new class of AI models and applications that can generate content from a natural language prompt input. Broadly speaking, those models and applications
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/the-generative-ai-revolution?u=76281980&t=94)** include the following. First is the concept of [[Large Language Models (LLM)|large language models]], which are models that have been trained on a huge collection of text from the internet, books and beyond. These models are trained to predict the next token, roughly equivalent to the next [[Microsoft Word|word]]. However, after this training, the models show some emergent behavior and they're capable of following realistic conversations and reason about some facts given the right constraints. Large language models include [[GPT-4]] and [[ChatGPT]] from OpenAI, [[LLaMA]] from Meta, Sparrow from DeepMind, or Bard and LaMDA from [[Google]]. Another is Text to Image. These models have been trained to translate a text into an image. And they include [[DALL-E]] 2 from OpenAI, [[Stable Diffusion]] or [[Midjourney]]. But that is not all, there are more applications of generative AI such as text to music, audio or video, or even the so-called action transformers that are able to learn how to translate text into actions such as clicking on a link or browsing the internet. It's beyond the scope of this introductory course to go into the details of the different components that make up these models, but it's good for you to know that they're based on the so-called transformer architecture, which was introduced in the "Attention Is All You Need" paper by Google researchers. The attention mechanism is a key component of transformers. More recently, [[Reinforcement Learning]] with human feedback,
>
> **[3:09](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/the-generative-ai-revolution?u=76281980&t=189)** RLHF, has also become a key aspect of the latest training stages. And for image and multimedia, the novel use of diffusion models has also become key. Finally, an important novel aspect of all these models is their ability to learn on the fly, the so-called zero-shot learning capability. This means that general models can learn from information that is new to them without having to be retrained.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (7), [[Large Language Models (LLM)|Large language models]] (2), [[Google]] (2), [[Prompt Engineering]] (1), [[Microsoft Word|Word]] (1)
> **Analogies:** for example (2), such as (2)
> **Env Vars:** gpt (1), dall (1), rlhf (1)
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Speakers:** - before (1)

#### [What is a prompt?](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-a-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-a-prompt?u=76281980&t=0)** - Okay, so now that we have introduced some of the key concepts for [[Generative AI]], we need to focus on the one that is essential for this course, the prompt. What is a prompt? As mentioned before, users interface with generative AI models through textual input in natural language. You tell the model what to do through a textile interface and the model tries to accomplish the task by giving you response. What you tell the model to do is the prompt. So we define the prompt as the natural language input to a generative AI model where the user tells the model what to do. In the case of image generation AI models, the prompt is mainly the description of the image you want to generate. For example, a fat crocodile with a gold crown on his head, wearing a three piece suit, 4K, professional photography, studio lighting, [[LinkedIn]] profile picture, photorealistic. Now let's look at a couple more examples of images generated with different text to image models. A Rembrandt style painting of Winnie the Pooh, digital art, by Dali too. Some applications such as Stability Boost AI allow you to upload pictures of yourself or a subject, and then synthesize new images based on the model that is built of that person. For example, this is the result of my model after uploading a handful of pictures of myself using the prompt, a portrait of subject with white hair, film noir style.
>
> **[1:38](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-a-prompt?u=76281980&t=98)** In the case of [[Large Language Models (LLM)|large language models]], LLMs, such as GBT-4 or Chat-GBT, the prompt can contain anything from a simple question, who is the president of the US, to a complicated problem with all kinds of data inserted in the prompt. Note that you can even use a CSB file with raw data as part of the input. It can also be a vague statement, such as, tell me a joke, I'm feeling down today. Even more generally, in generative task-oriented model, such as Gato, the prompt can be extremely high level, and define a task you need help with. For example, I need to organize a one week trip to Greece. Throughout the [[Representational State Transfer (REST)|rest]] of this course, I'm going to focus on the specific use case of prompts for LLMs like [[ChatGPT]]. In our case, we'll be using the newer and more powerful [[GPT-4]] model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (3), [[LinkedIn]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[ChatGPT]] (1)
> **Analogies:** such as (4), for example (3), picture (1)
> **Env Vars:** gbt (2), csb (1), gpt (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - okay (1)

#### [Designing a prompt](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/designing-a-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/designing-a-prompt?u=76281980&t=0)** - So, if a prompt is no more than some natural language text that expresses what we want to get from the model, why do I need to learn anything, you might ask? Great question. The reality is that as smart as these AI models are, they have quirks. At the end of the day, you should remember that they have only been trained to predict the next [[Microsoft Word|word]], and now you're asking them to write about classic philosophy. Also, while you can interface with them in natural language, that doesn't mean you can't use other elements that are not so natural to talk to them. Because of all of this, it becomes important to understand the possibilities and limitations of these models, and also learn from some of the experiences we have had so far. A bad prompt can lead to the model making up stuff, known as hallucination, while a slightly better one can lead to extremely valuable knowledge being generated. Let's start by considering what are the basic elements of a prompt. While again, a prompt can be any strings of text, it is good to think of a prompt as being able to have any of the following. Instructions. For example, "Write a 3 paragraph long love letter." Question. For example, "What are some good examples of things to say in a love letter?" Input data. For example, "[[John the Ripper|John]] is a 24 year old accountant from California who is in love with Mary, a 24 year old computer programmer from Arkansas. Write a 3 paragraph love letter from John to Mary."
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/designing-a-prompt?u=76281980&t=96)** And lastly, examples, like "My boyfriend really likes 'Lala Land', 'Her', and 'Crazy, Stupid, Love.' He doesn't like 'Ghost' and 'Notting Hill.' Write a love letter for him." So again, while a prompt, in principle, is only made up of natural language, there's much more to it. Thinking about how to structure your prompt will lead to better results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (2), [[Microsoft Word|Word]] (1)
> **Analogies:** for example (3)
> **Definitions:** known as (1), is a  (1)
> **Speakers:** - so (1)

#### [Basic prompt examples](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/basic-prompt-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/basic-prompt-examples?u=76281980&t=0)** - As a reminder from before, a prompt can include instructions, the question, input data, and examples. In order to obtain a result, either the first or second one must be present. Everything else is optional. Now, let's look at a few examples. For all of this, we'll be using [[GPT-4]]. This first example is using a question plus instructions. "How should I write my college admission essay? Give me suggestions about the different sections I should include, what tone I should use, and what expressions I should avoid." Now, I'm not going to read the whole response to you here, but feel free to pause the video if you'd like to read the detailed response or open the exercise file call prompts and responses for review to use your screen reader software or to review at your own pace. Note how the model has retrieved pieces of advice from its past training data, and responded to the specific instructions that I gave it in the prompt. For the second one, it's instructions plus input data. Given the following information about me, write a four-paragraph college essay. "I'm originally from Barcelona, Spain. While my childhood had different traumatic events such as the death of my father when I was only six, I still think I had a quite a happy childhood."
>
> **[1:36](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/basic-prompt-examples?u=76281980&t=96)** Now, again, I'm not going to read the whole prompt, but you can review it by pausing the video. Now, again, I'm not going to read the whole prompt, but you can review it by pausing the video or reviewing the text file or using a screen reader. Now, note how the model here is reacting to the input data and personalizing the response. A key aspect of this response is that it's using new information that it had not been initially trained on. This illustrates the zero-shot learning capability that I mentioned earlier in the course and about college essays. I'm not advocating for this example to be an an ethical use of [[Large Language Models (LLM)|large language models]], but it is important to be aware that this possibility exists and is already being used by students around the world. It is beyond the scope of this introductory course to discuss all the possible ethical, legal, or moral concerns that LLMs or [[Generative AI]] as a whole introduces. But I thought it would be important to call it out in an introductory example. The fact that you can do something with a generative AI model does not mean that it's okay or the right thing to do. On the other hand, if you're on the receiving end, you better prepare yourself and your organization for all kinds of AI-generated content to come your way. Okay, how about the question plus examples? "Here are some examples of music I really like. Radiohead, Lana del Rey, Rosalia, Bon Iver, and Andrew Bird.
>
> **[3:11](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/basic-prompt-examples?u=76281980&t=191)** I do not like Coldplay, Taylor [[Swift (Programming Language)|Swift]] or Bruno Mars. What other music would you recommend?" Again, pause if you want to read the detailed answer, but note how by using input examples you can turn a general purpose large language model into a recommendation engine. This highlights the vast applicability of this technology. So remember, when you're starting to learn how to create effective prompts, start with a question and instructions, and optionally choose to add input data or examples that you may have. We will be getting into more advanced tips and tricks later on, but for now, if you're not satisfied with the results, revise your prompt and try again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI]] (2), [[GPT-4]] (1), [[Large Language Models (LLM)|Large language models]] (1), [[Swift (Programming Language)|Swift]] (1)
> **Env Vars:** gpt (1)
> **Cross-References:** earlier in (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - as (1)

#### [What is prompt engineering?](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-prompt-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-prompt-engineering?u=76281980&t=0)** - [[Prompt Engineering]] is a very recent but rapidly growing discipline that has the goal of designing the optimal prompt, given a generative model and a goal. Prompt engineering is growing so quickly that many believe that it will replace other aspects of machine learning, such as [[Feature Engineering]] or architecture engineering for large [[Neural Networks]]. Prompt engineering requires some domain understanding to incorporate the goal into the prompt. One example would be by determining what good and bad outcomes should look like and prompt engineering also requires understanding of the AI model. Different models will respond differently to the same kind of prompting. Generating prompts at some scale requires a programmatic approach. At the most basic level, you want to generate prompt templates that can be programmatically modified according to some dataset or context. As a simple example, let's say if you have a database of people with a short blurb about them, similar to the one I used in the college essay example from earlier. The prompt template would become something like, Given the following information about USER, write a four paragraph college essay: USER_BLURB. And the programmatic approach to generating college letters for all users would look something like this. Note how this is a simple for loop that is going across all the students in the database, taking information about each user
>
> **[1:34](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/what-is-prompt-engineering?u=76281980&t=94)** and the blurb for that user, integrating it into the prompt, and then calling GPT with that prompt. Finally, prompt engineering, as with any engineering discipline, is iterative and requires some exploration in order to find the right solution. While this is not something that is readily available or common nowadays, prompt engineering will require many of the same engineering processes as software engineering, for example, [[Version Control]], QA, and regression testing. And on that note, it's interesting there are many prompt engineering tools that are becoming available as we speak.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (7), [[Feature Engineering]] (1), [[Neural Networks]] (1), [[Version Control]] (1)
> **Env Vars:** user (1), user_blurb (1), gpt (1)
> **Analogies:** such as (1), similar to (1), for example (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Exercise Files:** template (1)
> **Speakers:** - prompt (1)

#### [Advanced prompt examples](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=0)** - Okay, so now that we have set the foundation for how to create prompts with a basic component, it is time to get a bit more creative and also dive into some of the problems with [[Generative AI]] and how to mitigate them. But before we begin with the more advanced examples, you should keep in mind that the modeled response is stochastic, meaning that it's randomly determined and therefore will be different every time you present the same prompt. Now sometimes this randomness is something that you're looking for. Now, in other cases though, you want to get as close as possible to a factually correct response. And that response should not change much if you call the model several times. Models have some parameters you can tweak to reduce their creativity, particularly the so-called temperature which you should reduce to decrease model variability. However those parameters alone will not solve all your problems. That is when you need to get a bit more advanced with your prompt design. Let's investigate Chain Of Thought prompting. In Chain Of Thought prompting we explicitly encourage the model to be factual or correct by forcing it to follow a series of steps in its reasoning. Chain Of Thought prompting has become a very important tool in the [[Prompt Engineering]] toolkit since it can drastically improve results. It was introduced in the "Chain Of Thought Prompting
>
> **[1:33](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=93)** Elicits Reasoning in [[Large Language Models (LLM)|Large Language Models]]" paper by [[Google]] researchers. In the following example, I used the prompt "What European soccer team won the Champions League "the year Barcelona hosted the Olympic games?" Use this format. Q, repeat question. A, let's think step by step. Give reasoning, therefore the answer is final answer. Note how the model follows the reasoning process that it was given in the instructions. And here's another example of Chain Of Thought prompting. (no audio) Feel free again to pause or to use the included text document to review. So one of the most important problems with generative models is that they're likely to hallucinate knowledge that is not factual or is wrong. You can also push the model in the right direction by prompting it to cite the right sources. For example, "What are the top three most important discoveries "that the Hubble Space Telescope has enabled?" Answer only using reliable sources and cite those sources. (no audio)
>
> **[3:01](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=181)** It is important to keep in mind that even if you are prompting the model to cite correct sources it could still make them up and hallucinate a response that sounds more authoritative than it should. However, including sources does allow you to verify whether the response is factual. Another downside of [[GPT-4]] and similar models is that they don't have access to the current web and have been trained with data that can be over two years old. Tools like Bing Chat, which combines GPT-4 with access to the web, are much more reliable. Here is this Bing's response to the same question. Here's something else interesting for you to know. GPT-based LLMs a special message which you write using this syntax that instructs the language model to interpret what comes after the code as a completion task. This enables you to explicitly separate some general instructions from the beginning of what you want the language model to write. For example, imagine that you want GPT-4 to use the "It was a beautiful winter day" as the beginning of something that you want to write. If you simply input that as a prompt you will get something like this.
>
> **[4:19](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=259)** The model is attempting to engage in a conversation, not to continue the text. A way to combine a more direct instruction with also introducing a beginning is to use end of prompt. Note how the paragraph continues from the last sentence in the prompt while following the instruction before the end of prompt statement. Here's a fun one. Language models do not always [[React.js|react]] well to nice, friendly language. If you really want them to follow some instructions, you might want to use forceful language.
>
> **[5:07](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=307)** Believe it or not, all caps and exclamation marks work. In this next example, I first get GPT-4 to write a questionable article. I then ask the model to correct it. "Write a short article about how to find a job in tech. "Include factually incorrect information."
>
> **[5:35](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=335)** And here are the results. You can review the text document to read the whole thing.
>
> **[5:45](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=345)** And to get it to correct the previous information, I could prompt it with "Is there any factually incorrect information "in this article?" And then paste the article into the prompt.
>
> **[6:03](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=363)** Notice how GPT-4 identified several factual questionable statements from its own previous response. In the following example, I get the AI to generate different opinions. I fitted an opinion I wrote on one of my blog posts and asked GPT-4 to disagree with it. Note the use of text "begin" and "end" to guide the model.
>
> **[6:29](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=389)** (no audio)
>
> **[6:38](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=398)** (no audio) (no audio) (no audio) (no audio) (no audio) (no audio) Language models themselves don't keep track of state. However, applications such as [[ChatGPT]] Plus implement the notion of session where the chat bot keeps track of state from one prompt to the next. This enables much more complex conversations to take place. Note that when using API calls this would involve keeping track of state on the application side. In this example, I make ChatGPT Plus answer questions in the style of Buzz Lightyear. Note that in the initial prompt I used all caps. That is because in an earlier try where I use a nicer tone the model forgot who it was supposed to be halfway through our conversation. (no audio)
>
> **[8:16](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=496)** In this final example, I will teach the AI an algorithm in the prompt. The example is taken from the appendix in "Teaching Algorithmic Reasoning "Via In Context Learning" where the definition of parity of a list is fed in an example. Note again how we're teaching the AI something that it didn't know before. In this case, a mathematical algorithm. It's also worth pointing out that we do so by feeding it examples. (no audio)
>
> **[8:56](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/advanced-prompt-examples?u=76281980&t=536)** So we've gone all the way from a simple natural language prompt to being able to teach the AI a new mathematical algorithm that it didn't know before. What can you teach the AI to do?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (6), [[ChatGPT]] (2), [[Generative AI]] (1), [[Prompt Engineering]] (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** gpt (7), api (1)
> **Analogies:** for example (2), imagine (1), such as (1)
> **Warnings:** keep in mind (2), note that (2)
> **CLI Commands:** make (2), find (1)
> **Tools:** notion (1)
> **Speakers:** - okay (1)

#### [Prompt engineering tips and tricks](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/prompt-engineering-tips-and-tricks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/prompt-engineering-tips-and-tricks?u=76281980&t=0)** - Let's take a moment and consider a few other tips and tricks you can try when creating prompts. The first is the order of the examples in the prompt. Keep in mind that LLMs like GPT only read forward, and are in fact completing texts. This means that it's worth to prompt them in the right order. It has been found that giving the instructions before the example helps. Furthermore, even the order of the examples makes a difference. Keep that in mind, and experiment with different orders of prompt and example. Next is affordances. Affordances are functions that are defined in the prompt, and the model is explicitly instructed to use when responding. For example, you can tell the model whenever finding a mathematical expression, it should call an explicit calc function, and compute the numerical result before proceeding. It has been shown that using affordances can help in many cases. You can also use different languages. I have presented all the examples in this course in English; however, one of the very fascinating things about language models such as [[GPT-4]] is that they can speak almost any language. For example, I can speak to GPT-4 in Catalan, my mother tongue from the region of Catalonia in Spain that is definitely not a majority one. Not only can GPT-4 understand and speak Catalan, but it will figure out the language on its own, without prompting. And speaking of languages, GPT-4 and other LLMs
>
> **[1:37](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/prompt-engineering-tips-and-tricks?u=76281980&t=97)** also know programming, and have been trained on lots of code. While they might not be as specialized as [[GitHub]]'s [[Microsoft Copilot|Copilot]], or OpenAI's Codex, they can be pretty good at it. Check out this example, written entirely by GPT-4.
>
> **[2:07](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/prompt-engineering-tips-and-tricks?u=76281980&t=127)** People have in fact used [[ChatGPT]] to build applications from scratch, with very little to no knowledge of programming. As this field is growing and expanding daily, there are bound to be more tips to discover that you can use when creating prompts. You should remain apprised of these changes by reading articles, watching videos, and experimenting yourself, and soon, you will be the one discovering new tips and tricks and sharing with others.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (5), [[GitHub]] (1), [[Microsoft Copilot|Copilot]] (1), [[ChatGPT]] (1)
> **Env Vars:** gpt (6)
> **Analogies:** for example (2), such as (1)
> **Tools:** github (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - let (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and resources](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/next-steps-and-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/prompt-engineering-how-to-talk-to-the-ais/next-steps-and-resources?u=76281980&t=0)** - If you have made it so far, congratulations, you are now pretty knowledgeable in this new and very important discipline of [[Prompt Engineering]]. You now have all the necessary foundations to go out and experiment on your own. The field is rapidly evolving and we all need to keep up, but with the content you have just learned, you are definitely going to be in a great position to be successful in this new AI revolution. If you want more information, I've included a PDF of some resources that you might want to check out. Many of them have been referenced. Thanks for watching. I appreciate you taking the time. We have covered a lot and this is just the beginning. Go ahead and create a free account with OpenAI and start using this exciting new technology. Experiment with [[ChatGPT]] and the many other [[Generative AI Tools]] that are being introduced everyday. It's not only fascinating and fun but will no doubt have a great impact on your organization and your career. Thanks again and always be learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Prompt Engineering]] (1), [[ChatGPT]] (1), [[Generative AI Tools]] (1)
> **Env Vars:** pdf (1)
> **Speakers:** - if (1)


## Instructor

- [[Xavier Amatriain]]

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Prompt Engineering

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[Generative AI vs. Traditional AI]] | **3 of 10** | [[Prompting ChatGPT with Multimodal Techniques]] →

### In [[Technical Literacy and Future Readiness for Aspiring Managers]]
← [[How to Boost Your Productivity with AI Tools]] | **4 of 5** | [[Using AI for Data-Driven Insights]] →

### In [[Building AI Literacy]]
← [[What Is Generative AI-]] | **4 of 7** | [[Introduction to Large Language Models]] →

## Appears In

- [[Building Generative AI Skills for Web Developers]]
- [[Technical Literacy and Future Readiness for Aspiring Managers]]
- [[Building AI Literacy]]

## Related Courses

_Courses sharing skills:_

- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative AI- Working with Large Language Models]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)

---

[↑ Back to top](#)