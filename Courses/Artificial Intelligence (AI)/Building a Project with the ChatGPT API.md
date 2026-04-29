---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-a-project-with-the-chatgpt-api
url: "https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api"
duration_minutes: 116
duration: 1h 56m
level: Intermediate
updated: 12/22/2023
learners: 2608329
skills:
  - Chatbot Development
  - OpenAI Products
  - Artificial Intelligence (AI)
  - Application Development
exercise_files: true
github: "https://github.com/LinkedInLearning/building-a-project-with-the-chatgpt-api-4484140/tree/main"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFcICjaYZlNsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703108198308?e=2147483647&amp;v=beta&amp;t=xpfc5YPCA8XfzzvHmUlfTsKfXGXyZq4eUVh89CmxTlk"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Improve Your Programming Skills with Artificial Intelligence]]'
prev_courses:
  - '[[AI Pair Programming with GitHub Copilot]]'
path_nav: '[{"path":"Improve Your Programming Skills with Artificial Intelligence","position":4,"total":4,"prev":"AI Pair Programming with GitHub Copilot","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/devops
  - topic/software-development
  - skill/chatbot-development
  - skill/openai-products
  - skill/artificial-intelligence-ai
  - skill/application-development
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20a%20Project%20with%20the%20ChatGPT%20API.md)

![Building a Project with the ChatGPT API](https://media.licdn.com/dms/image/v2/D560DAQFcICjaYZlNsA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1703108198308?e=2147483647&amp;v=beta&amp;t=xpfc5YPCA8XfzzvHmUlfTsKfXGXyZq4eUVh89CmxTlk)

# Building a Project with the ChatGPT API

> Generative models produced by OpenAPI, like ChatGPT, have rapidly advanced AI development, particularly the ability to incorporate AI into applications. In this hands-on course, instructor Kesha Williams takes a deep dive into the world of OpenAI's powerful language models, equipping you with the technical know-how you need to leverage their full potential and create innovative AI-driven solutions

> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api) | 1h 56m | Intermediate | 2608K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Understanding the OpenAI Platform]]** (3 videos)
- **[[#3. 2. Exploring the OpenAI API]]** (8 videos)
- **[[#4. 3. Setting Up Your Environment]]** (3 videos)
- **[[#5. 4. Writing a Prompt for ChatGPT]]** (4 videos)
- **[[#6. 5. Constructing a Multi-Turn Conversation with ChatGPT]]** (3 videos)
- **[[#7. 6. Generating an Image Using DALL-E]]** (4 videos)
- **[[#8. 7. Integrating with the Twitter API]]** (4 videos)
- **[[#9. 8. Troubleshooting Errors and Getting Help]]** (2 videos)
- **[[#10. 9. Effectively Managing API Costs]]** (1 videos)
- **[[#11. Conclusion]]** (1 videos)

### 1. Introduction

#### Introduction to the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=0)** - You've heard of ChatGPT, but did you know that large language models like it are transforming industries like finance, healthcare, education, government, and more?
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=13)** Right now we have an incredible opportunity to harness the power of generative AI technology to elevate our applications to new heights.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=24)** And that's why in this LinkedIn Learning course, I will teach you how to use ChatGPT for practical application development.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=33)** Together we will unlock new development capabilities using both theory and hands-on challenges.
>
> **[0:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=40)** I'm Kesha Williams and I've helped hundreds of thousands of people leverage AI tools and machine learning technologies, and I'd love to help you.
>
> **[0:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/introduction-to-the-openai-api?u=76281980&t=51)** So if you're ready, join me.

> [!info]- Semantic Content
>
> **Speakers:** - you (1)

#### Review the OpenAI API scenario
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=0)** - During our time together, you'll learn how to use the OpenAI API and large language models or LLMs like ChatGPT and DALL-E.
>
> **[0:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=11)** We'll use them to build practical applications that were expensive and nearly impossible just a few years ago.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=18)** What I love about this course is that it's not just theory.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=23)** With each lesson, you'll have an opportunity to reinforce the concepts through fun hands-on challenges.
>
> **[0:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=31)** By the end, you'll have developed an intelligent Python-based application, powered by LLMs.
>
> **[0:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=38)** The application you develop will review a website and summarize the content of that website in a tweet-friendly format.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=47)** Once the website is summarized, your application will generate a custom image from scratch based on that summary.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=56)** The image and summary will be composed into a tweet that is sent to your followers through an integration you build with a Twitter API.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=66)** Each hands-on challenge builds upon the previous challenge, allowing you to build your confidence as you watch your knowledge grow.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=75)** As we go through each coding challenge, I'll show you how to make it your own by extending and customizing the code to suit your interests.
>
> **[1:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=85)** I encourage you to start thinking about the information you'd like to share with friends and followers on X, formerly known as Twitter.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=95)** Maybe it's about your favorite sports team, a place you'd like to explore, a mountain you'd like to hike, recipes from your favorite restaurant, your favorite subject in school, or tips for new parents.
>
> **[1:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=109)** The possibilities are endless.
>
> **[1:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=112)** If you know me, you know I'll be tweeting about Amazon Web Services, of course.
>
> **[1:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=118)** And one more thing, this course has a lot of links.
>
> **[2:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=122)** To access them all in one spot, go to your Exercise Files and download the Resources handout.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-the-openai-api-scenario?u=76281980&t=130)** Now it's time to ignite your imagination as we explore the world of Generative AI, LLMs, ChatGPT, OpenAI and more.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), dall (1)
> **CLI Commands:** python (1), make (1)
> **Exercise Files:** exercise files (1), download the (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - during (1)


### 2. 1. Understanding the OpenAI Platform

#### Explore the OpenAI platform
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=0)** - By unleashing the power of artificial intelligence, OpenAI's innovation is where minds and machines unite.
>
> **[0:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=9)** OpenAI is an AI research and development company with a goal to promote and develop friendly AI.
>
> **[0:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=16)** If you haven't heard of them before, they are the creators of ChatGPT, which I know you've heard of.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=23)** ChatGPT is an AI-powered chat bot that managed to take AI mainstream overnight.
>
> **[0:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=31)** OpenAI has developed multiple large language models or LLMs.
>
> **[0:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=37)** LLMs are machine learning models trained on massive amounts of text data from a wide variety of sources.
>
> **[0:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=45)** ChatGPT is based on the GPT family of LLMs.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=50)** The GPT family continues to evolve as OpenAI advances the models and adds new capabilities.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=59)** So what is the difference between ChatGPT and GPT?
>
> **[1:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=63)** Well ChatGPT is an intelligent chat bot with a web application interface that is powered by GPT, allowing you to hold an intelligent conversation with it.
>
> **[1:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=76)** ChatGPT generates answers to your questions and adjusts the responses based on your conversation history.
>
> **[1:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=84)** The more you interact with it, the more you'll train the model to provide more accurate answers.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=92)** Let's have fun asking ChatGPT about itself.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=97)** Let's pose the simple question, "What are you?"
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=102)** And the answer is "I am ChatGPT, an AI language model developed by OpenAI."
>
> **[1:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=110)** It goes on to talk about its architecture, which is based on GPT-3.5 and that it's been trained on a diverse range of text from the internet, books, articles, and other sources up until September, 2021.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=128)** I'll let you read the rest.
>
> **[2:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=131)** The next question we can pose, let's see if it's smart enough to answer this question.
>
> **[2:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=139)** "What is your relationship to GPT-3?"
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=144)** And it goes on to say, "As I told you earlier, I am ChatGPT, an AI language model based on the GPT-3.5 architecture."
>
> **[2:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=156)** The next paragraph talks about GPT-3, which is a generative model, and then it talks about GPT-3.5 being an extension or improvement of the GPT-3 model.
>
> **[2:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=171)** If you haven't had an opportunity to try ChatGPT, I encourage you to play around with it so you can see how intelligent this artificial intelligence really is.
>
> **[3:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=184)** Other models from OpenAI include DALL-E, which creates images and art from a simple text description and Whisper, which transcribes audio to text and translates languages.
>
> **[3:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=199)** OpenAI also provides developers access to their models using an application programming interface or API, which we'll use to integrate GPT and DALL-E into the application we develop later in this course.
>
> **[3:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-the-openai-platform?u=76281980&t=214)** As you learn about the API, I guarantee you'll see its power.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (11), dall (2), api (2)
> **Code Keywords:** let (4), interface (2)
> **Definitions:** is an  (3), is a  (1)
> **Versions:** 3.5 (3)
> **Cross-References:** later in (1)
> **Speakers:** - by (1)

#### Understand generative AI models
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=0)** - Developers are creators.
>
> **[0:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=2)** We love to take an idea or concept from a set of requirements on paper to a tangible product that improves the world.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=10)** We build new things.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=13)** Generative AI models are much like developers, they use learning patterns from data they're trained on to create new things like music, images, text, and other content like poetry or blog posts.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=28)** Large language models, or LLMs, like OpenAI's GPT family of models, fall under the generative AI umbrella because they are used to generate something new, like the next word in a sentence based on the previous words.
>
> **[0:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=45)** When considering LLMs, there are generally two types, the base or foundation model, and the fine-tuned models retrained for specific task.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=56)** This further illustrates the difference between GPT and ChatGPT I introduced in the previous video.
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=64)** ChatGPT is a fine-tuned model from a foundation model in the GPT-3.5 family.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=72)** ChatGPT is fine tuned to hold a dialogue by following instructions in a prompt or question and providing a detailed response called a completion.
>
> **[1:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=83)** So, how are foundation models trained?
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=87)** They use large amounts of unlabeled data, like a massive collection of text data, webpages, books, and other sources to perform a wide variety of natural language processing, or NLP, tasks.
>
> **[1:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=103)** Foundation models learn a representation that generalizes well to many generative tasks.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=111)** LLMs are trained to process natural language data using the transformer architecture, a type of neural network that learns to transform input sequences into output sequences.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=124)** This architecture is often used to learn contextual relationships between words in a sentence.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=130)** And by the way, the name GPT comes from generative pre-trained transformer.
>
> **[2:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=138)** There are several models in the GPT family, GPT-3.0, a set of models that can understand and generate natural language, text-davinci-003, text-curie-001, text-babbage-001, and text-ada-001.
>
> **[2:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=156)** GPT-3.5, a set of models that improve on GPT-3 and can understand and generate natural language or code.
>
> **[2:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=167)** Developers who use the GPT-3.5 Turbo model will always get the recommended stable version of that model.
>
> **[2:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=175)** GPT-4.0, a set of models that improve on GPT-3.5 and can understand and generate natural language or code.
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=186)** ChatGPT is fine tuned from a model in the GPT-3.5 series using reinforcement learning from human feedback, or RLHF.
>
> **[3:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=197)** The method includes an initial model that's trained using supervised fine tuning.
>
> **[3:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=204)** This is where human AI trainers provide data in the form of conversations where they play both sides, the user and an AI assistant.
>
> **[3:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=214)** Then, a reward model is created using reinforcement learning.
>
> **[3:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=218)** The training data for the reward model consists of responses ranked by quality.
>
> **[3:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=224)** I'm sure OpenAI will continue to iterate by introducing evolved models.
>
> **[3:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=230)** The pace of innovation in AI is astounding.
>
> **[3:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-generative-ai-models?u=76281980&t=234)** Now that you understand generative AI models available from OpenAI, let's explore the API you'll use to access these models.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (12), nlp (1), rlhf (1), api (1)
> **Versions:** 3.5 (5), 3.0 (1), 4.0 (1)
> **Code Keywords:** new, (1), continue (1), let (1)
> **Cross-References:** previous video (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - developers (1)

#### Access models using the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=0)** - The OpenAI application programming interface or API, gives you access to a world of creativity that can be integrated into your existing applications.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=12)** It allows developers to access their AI models programmatically from application code.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=18)** This means developers can add intelligence to any application by making a simple API call to access LLMs created by OpenAI.
>
> **[0:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=29)** In order to do this, the first step is to authenticate to the API using an API key.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=36)** I'll show you how to generate this API key in an upcoming video.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=41)** Once you're authenticated, you'll make a request to a specific model like gpt-3.5.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=47)** Using a prompt like "Which olive oil is best for cooking?"
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=52)** There's an attempt to match the input pattern you provided to an output value using tokenization.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=59)** The gpt family of models processes text using tokens, which are a common sequence of characters found in text.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=68)** For example, the string tokenization is decomposed as token and ization.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=75)** While a short and common word like "The" is represented as a single token.
>
> **[1:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=81)** When the model returns a response or completion, it is actually predicting the next token, not the next word.
>
> **[1:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=90)** In our example prompt, "Which olive oil is best for cooking?"
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=96)** there are eight tokens.
>
> **[1:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=99)** OpenAI provides a tool to help you count tokens and better understand how a piece of text would be tokenized by the API and the total count of tokens.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=111)** It's important to understand tokenization because of rate limitations placed on the API calls and cost associated with using the OpenAI API.
>
> **[2:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=122)** The calls to the APIs are limited using the TPM, or token per minute, which differs based on the model.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=130)** You are also billed per token when using the API.
>
> **[2:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=135)** For instance, gpt-3.5-turbo costs $0.002 per 1,000 tokens.
>
> **[2:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=143)** You are billed based on the number of tokens sent in your prompt, plus the number of tokens in the completions returned by the API.
>
> **[2:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=152)** We'll discuss the pricing model and ways to effectively manage your costs in an upcoming lesson.
>
> **[2:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=158)** Once the model predicts the next token, you'll get a response called a completion.
>
> **[2:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=164)** In our case, the suggested olive oil.
>
> **[2:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=169)** I'm interacting with the gpt-3.5-turbo model using the playground environment provided by OpenAI, which makes it easy to prototype with the models.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=182)** In this course, we'll use OpenAI's Python Library to access the API endpoints programmatically from our application code.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/access-models-using-the-openai-api?u=76281980&t=192)** Now that you understand how to access models using the OpenAI API, let's explore it in more detail.

> [!info]- Semantic Content
>
> **Env Vars:** api (12), tpm (1)
> **Code Keywords:** interface (1), this, (1), case, (1), let (1)
> **Versions:** 3.5 (3), 0.002 (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** for example (1), for instance (1)
> **Speakers:** - the (1)


### 3. 2. Exploring the OpenAI API

#### Create chatbots using chat completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=0)** - You will not believe how easy it is to use ChatGPT to add interactive assistance and improve user experiences within your applications.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=12)** The Chat Completions API is used to pass a list of messages to the model as input and receive a model generated response as output.
>
> **[0:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=22)** The conversation can be single-turn without a back and forth conversation or multi-turn.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=28)** Do you remember when I explained tokenization to you?
>
> **[0:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=32)** If you recall, traditional GPT models consume unstructured text, which is represented to the model as a sequence of tokens.
>
> **[0:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=40)** This is considered text in and text out, where a prompt string is accepted and a completion to append to the prompt is returned.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=50)** Unlike traditional GPT models, the ChatGPT, like GPT-3.5 and GPT-4 models, are conversation in and message out.
>
> **[1:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=61)** That is, the model takes in a series of messages along with metadata.
>
> **[1:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=67)** I bet many of you are thinking, "How does this work under the hood?"
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=72)** Well, the messages are still translated to tokens before they are consumed by the model, but our interaction with the model is through a series of messages.
>
> **[1:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=83)** Here's the format of a basic Chat Completion.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=87)** Let me explain using code.
>
> **[1:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=90)** You can follow along by accessing the Exercise Files in GitHub.
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=94)** We'll be using the file 02_01 for this video.
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=98)** We'll be using Jupyter Notebooks for the environment.
>
> **[1:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=101)** If you haven't used Python or Jupyter Notebooks, I don't expect you to get into the code right now.
>
> **[1:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=107)** I'll go more in depth about setting up your environment in Chapter 3.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=111)** You'll also get a chance for some hands-on challenges in a later chapter.
>
> **[1:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=116)** Now going into our code, here's the format of a basic Chat Completion.
>
> **[2:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=121)** You'll notice here on line 4, the first line in the array is the system message.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=128)** The system message sets the context for the model and sets the persona for the AI assistant.
>
> **[2:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=135)** You'll customize this each time for your specific use case After the system message, here on line 6, you include a series of messages between you, the user, and the AI assistant.
>
> **[2:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=148)** A sample conversation would look like this.
>
> **[2:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=152)** IN the system message.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=153)** you pass in the context.
>
> **[2:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=155)** "You are a helpful assistant that acts as a sous chef."
>
> **[2:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=161)** The next prompt comes from you, the user, and it says, "When should I use Capellini pasta?"
>
> **[2:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=168)** I've already executed this code, and I've printed out the response.
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=172)** You'll notice that the model talks about Capellini pasta, also known as angel hair pasta, and it offers up four suggestions on when to use Capellini pasta, light tomato sauces, classic Italian dishes, light seafood dishes, and Asian-inspired dishes.
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=195)** And just like a great sous chef, it provides tips so that you do not overcook the pasta.
>
> **[3:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=203)** You'll see the model is wordy, and this is a known challenge.
>
> **[3:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=208)** Don't forget that we are charged per token on the input and the output.
>
> **[3:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=213)** To fix this, we could change the initial message to teach or train the model what we expect back, and this is a brief introduction to prompt engineering.
>
> **[3:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=224)** Notice here, the system message is exactly the same, but the second prompt, I've tweaked it just a bit.
>
> **[3:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=233)** Now it reads, "Can you tell me when I should use Capellini pasta in 15 words or less?"
>
> **[4:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=241)** And notice the response back.
>
> **[4:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=242)** "Capellini pasta is best used in delicate, light dishes, like simple sauces or seafood."
>
> **[4:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=251)** This course will use OpenAI's Python library to access the API endpoints.
>
> **[4:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=257)** However, you can test them directly from tools like cURL or Postman.
>
> **[4:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/create-chatbots-using-chat-completion?u=76281980&t=263)** Now that you understand how to create chatbots using Chat Completion, let's look at the Text Completion API and explore the differences between the two.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), api (3)
> **Code Keywords:** pass (2), let (2), this. (1), this, (1)
> **Tools:** jupyter (2), github (1), postman (1)
> **CLI Commands:** python (2), curl (1)
> **Definitions:** is a  (2), known as (1)
> **Code Identifiers:** curl (1)
> **Versions:** 3.5 (1)
> **Exercise Files:** exercise files (1)

#### Generate text using text completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=0)** - The possibilities of what you can create with the Completions API are limitless.
>
> **[0:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=6)** You can generate and edit content, and code to complete task in a matter of minutes, not hours.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=14)** The Completions API uses the text in, text out format for a wide variety of tasks.
>
> **[0:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=22)** The input is a simple text prompt with a model generating output that matches the context or pattern you provide.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=30)** The Completions API is backed by a traditional GPT model that consumes unstructured text, which you already know is represented to the model as a sequence of tokens.
>
> **[0:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=43)** A simple example input would be, "Write a title for a course on the OpenAI API."
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=50)** With the output being, "Getting Started with the OpenAI API: A Comprehensive Guide."
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=57)** Have you considered what would happen if you provided the exact same prompt to the model again?
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=64)** You may actually see a different result.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=68)** Let's test this out.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=70)** Using the same prompt, write a title for a course on the OpenAI API.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=75)** Let's execute this code to see what happens.
>
> **[1:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=79)** The response is "Getting Started with the OpenAI API: Unlocking the Power of AI."
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=87)** This happens because the model is considered stochastic!
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=91)** The responses are generated randomly based on the input and the model's probability distribution.
>
> **[1:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=99)** Imagine reaching into a jar filled with different colored balls.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=104)** Each ball represents a possible outcome, and the color of each ball represents the probability of that outcome occurring.
>
> **[1:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=112)** The outcome is stochastic because you cannot predict which color ball you will pick, but each specific color has a known probability of being chosen.
>
> **[2:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=123)** You can control the randomness of the model by using the temperature attribute.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=129)** Lower values result in more consistent outputs, while higher values generate more random results.
>
> **[2:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=138)** You'll notice the Completions API is similar to the Chat Completions API, but there are differences.
>
> **[2:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=145)** Instead of the input being a list of messages, it's freeform text.
>
> **[2:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=151)** Another difference is the underlying GPT models available to each.
>
> **[2:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=157)** The Chat Completions API interfaces to GPT-4 and GPT-3 0.5 Turbo, and the Completions API interfaces with GPT-3.0, and anything before.
>
> **[2:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=171)** Developers often opt to use the Chat Completions API over the Completions API, because it's more cost-effective, and handles complex tasks better.
>
> **[3:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=183)** From my experience, the newer models are more creative as well.
>
> **[3:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=187)** Here's the link to the endpoint to carry out the interaction with the Completions API.
>
> **[3:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=193)** This course will use open AI's Python library to access the API endpoints.
>
> **[3:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=199)** However, you can test them directly from tools like Curl or Postman.
>
> **[3:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-text-using-text-completion?u=76281980&t=204)** Now that you understand how to generate text using text completions, let's explore the use cases for the Embeddings API.

> [!info]- Semantic Content
>
> **Env Vars:** api (16), gpt (5)
> **Code Keywords:** let (3)
> **CLI Commands:** python (1), curl (1)
> **Versions:** 0.5 (1), 3.0 (1)
> **Analogies:** imagine (1), similar to (1)
> **Prerequisites:** getting started (2)
> **Tools:** postman (1)
> **Definitions:** is a  (1)

#### Measure relatedness using embeddings
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=0)** - Have you ever wondered how advanced searching works?
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=5)** What about detecting emotions and product reviews or extracting underlying topics or themes from a collection of text documents?
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=14)** Well, today you are going to find out.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=18)** The Embeddings API measures similarities of text strings by mapping text and even code to a vector, also known as a list representation.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=28)** This transforms text into a sequence of floating point numbers.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=33)** This numeric representation of text enables machine learning models and algorithms to comprehend the connections and associations among concepts more easily.
>
> **[0:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=45)** The distance between two vectors measures their relatedness.
>
> **[0:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=49)** For example, if two pieces of text are similar, their vector representations should also be similar.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=57)** Think of embeddings like a map.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=59)** Just as a map represents the spatial relationships between different locations, a word embeddings model represents the semantic relationships between words.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=70)** Embeddings are often used for advanced document searches like: querying a knowledge base to find the most relevant article, sentence similarity where the model captures semantic similarities and differences based on the context and meaning of the words, Text classification like analyzing and classifying the sentiment expressed as positive or negative in product reviews, clustering, like identifying and extracting underlying topics or themes from a collection of text documents without prior knowledge of the topics, code search that includes code recommendations for software developers and more.
>
> **[1:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=113)** The models take either text or code as input and return an embedding vector.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=119)** Let's see the Embeddings API in action.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=124)** The word embeddings model might indicate that these sentences are somewhat similar because they both involve animals, cat and dog, and objects they are situated on, mat and rug.
>
> **[2:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=136)** However, it may also recognize differences, such as the verbs use, sitting versus lying, and the specific animals involved.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=147)** Let's walk through the code.
>
> **[2:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=149)** In this cell, the input is, The cat is sitting on the mat.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=153)** Let's execute this cell, and we see the response is a list of word embeddings.
>
> **[2:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=161)** Let's scroll down to the next cell.
>
> **[2:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=164)** The input for this cell is, The dog is lying on the rug.
>
> **[2:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=169)** Let's execute this.
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=172)** And again, we see our output is a list of embeddings.
>
> **[2:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=177)** Let's scroll down.
>
> **[2:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=179)** After retrieving the sentences embeddings, we'll calculate the cosine similarity.
>
> **[3:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=185)** The cosine similarity is a measure of similarity between two non-zero vectors.
>
> **[3:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=191)** The value can be between 0 and 1.
>
> **[3:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=194)** The closer the value is to 1, the more similar the vectors are.
>
> **[3:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=199)** Here in this cell, I'm checking the length because the vectors need to be the same length for the comparison.
>
> **[3:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=206)** And let's check the length on the dog_embeddings vector.
>
> **[3:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=209)** They are both the same length, so we are good to proceed.
>
> **[3:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=214)** In this cell, I am computing the cosine similarity.
>
> **[3:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=219)** I'm using NumPy, which is a Python-based data science library, to help calculate this similarity.
>
> **[3:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=226)** Let's execute this code, and we see our cosine similarity.
>
> **[3:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=231)** The two vectors have a cosine similarity of 0.89, or 89%, so they are close.
>
> **[4:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=241)** In our example, we use OpenAI's Python library to access the Embeddings API endpoint.
>
> **[4:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=248)** However, you can test the API directly from tools like cURL or Postman using the endpoint below.
>
> **[4:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/measure-relatedness-using-embeddings?u=76281980&t=256)** Now that you understand how to measure the relatedness of words using the Embeddings API, let's learn how to turn audio into text.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this. (1)
> **CLI Commands:** find (2), cat (2), python (2), curl (1)
> **Env Vars:** api (5)
> **Definitions:** is a  (4), known as (1)
> **Code Identifiers:** dog_embeddings (1), curl (1)
> **UI Navigation:** scroll down (2)
> **Analogies:** for example (1), such as (1)
> **Versions:** 0.89 (1)

#### Turn audio into text using Whisper
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=0)** - Do you want to learn about the most robust and accurate automatic speech recognition system on the planet?
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=8)** We're talking about a model trained on 680,000 hours of multilingual and multitask data collected from the web.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=18)** Through Open AI's whisper APIs, you can turn audio or speech into text.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=24)** It provides easy access to the open source text to speech whisper model.
>
> **[0:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=31)** The model takes in an audio file and performs transcriptions, which enables translation in multiple languages and from those languages into English.
>
> **[0:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=42)** Whisper accepts certain input file types like MP3 or MP4 and others.
>
> **[0:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=49)** There are nine models in the Whisper family to choose from, with different sizes and capabilities available.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=57)** The Whisper model is a transformer based encoder decoder model, also called a sequence to sequence model.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=66)** I encourage you to pause this video and learn more about sequence to sequence learning to deepen your understanding of machine learning.
>
> **[1:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=74)** You can even ask chat GPT about the topic.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=78)** Here's the endpoint link to access the APIs using the following URL from a tool like Curl or Postman.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=87)** To upload audio files, you'll use the file's API URL.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=92)** In our code examples, I'm using Open AI's Python Library.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=97)** When using the Python library, the model name Whisper One will retrieve the Whisper version Two large language model.
>
> **[1:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=105)** Let's see Whisper in action.
>
> **[1:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=109)** In cell three, here I'm importing the necessary library, in this case, the audio library, in cell four.
>
> **[1:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=117)** This is a quick fix when using the Chrome browser so that I can play the audio file from within the Jupyter Notebook.
>
> **[2:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=126)** Now let's look at our transcription example.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=129)** I have this audio file, LinkedIn Learning.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=133)** Let me play this so you can hear it.
>
> **[2:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=136)** Here in this next cell, let's use Whisper to transcribe that audio file, execute the code, and here is the output, a perfect transcription.
>
> **[2:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=149)** Now let's look at a language translation example.
>
> **[2:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=154)** I have this audio file in Italian. Let's play it.
>
> **[2:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=160)** (speaking Italian)
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=172)** Just in case you don't speak Italian, we can use Whisper to do the language translation.
>
> **[2:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=179)** Let's execute it and we see the output here.
>
> **[3:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=183)** If you like this course, take a look at my other courses, Artificial Intelligence Foundations, Automatic Learning on Programming Foundations, APIs, and Web Services.
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=195)** This word automatic should be machine learning, but this gives you an idea of how you can use Whisper for language translation and transcribing audio to text.
>
> **[3:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=208)** Whisper produces high quality results and is an efficient solution for many speech to text applications.
>
> **[3:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/turn-audio-into-text-using-whisper?u=76281980&t=216)** Now that you understand how to turn audio into text using Whisper, let's generate images from scratch using Dali.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), from, (1), case, (1)
> **Env Vars:** url (2), mp3 (1), mp4 (1), gpt (1), api (1)
> **CLI Commands:** python (2), curl (1)
> **Definitions:** is a  (2), is an  (1)
> **Tools:** postman (1), jupyter (1)
> **Speakers:** - do (1)

#### Generate images using DALL-E
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=0)** - You can generate an image from scratch using a simple text description available using open AI's DALL-E model.
>
> **[0:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=9)** I admit, I had a lot of fun using DALL-E to bring my creative ideas to life and I'm not alone.
>
> **[0:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=17)** Artists and creative professionals use DALL-E to inspire and jumpstart their creative process.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=24)** With DALL-E, you can: generate brand new images from a text prompt, edit or retouch an existing image based on a text prompt, create variations of an existing image.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=39)** With DALL-E, users get full usage rights to commercialize the images they create including the right to reprint, sell, and merchandise.
>
> **[0:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=49)** The process is relatively simple.
>
> **[0:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=51)** You feed a text prompt to DALL-E and it generates four images.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=56)** Only three images are generated if you're using the edit or variations features.
>
> **[1:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=62)** There are multiple ways to access DALL-E.
>
> **[1:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=65)** The first way is through the browser-based tool.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=68)** Let's see that in action.
>
> **[1:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=71)** This is the browser-based version of DALL-E.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=75)** Here in this text box, you simply enter your text prompt: a Van Gogh style painting of a computer in Times Square, New York City.
>
> **[1:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=84)** Then, you click on Generate.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=87)** It takes a moment for it to generate.
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=91)** And there we have four images in a Van Gogh style.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=97)** Now let's try a different prompt: a hammock between palm trees on a beach in Jamaica on a bright, sunny day and click on Generate.
>
> **[1:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=109)** It takes a moment for the four images to generate, and there we have four beautiful images of a hammock on a beach in Jamaica.
>
> **[2:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=120)** The second way to access DALL-E is through OpenAI's Images API, sometimes called the DALL-E API.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=129)** There are three endpoints.
>
> **[2:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=131)** We will not access these APIs directly through a tool like Postman or Curl.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=137)** Instead, we'll use OpenAI's Python library.
>
> **[2:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=141)** Let's see that now.
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=144)** In this cell, I have Python code that calls the Images API, and the prompt that I'm passing in is a rainbow with a pot of gold.
>
> **[2:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=155)** I'm setting the number of images and the size.
>
> **[2:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=159)** Let's execute this.
>
> **[2:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=161)** The response, I'm going to store in the image URL variable.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=166)** Then, I'm going to print the image.
>
> **[2:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=169)** And then, I'm displaying it within the notebook.
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=172)** And here is the image of a pot of gold at the end of a rainbow.
>
> **[2:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=179)** Next, you can edit an existing image.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=182)** Let's execute this so that you can see the original image of Hawaii.
>
> **[3:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=187)** I actually took this on my cell phone.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=192)** In the next cell, let's execute it and I'll explain it while it's running.
>
> **[3:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=198)** First, I'm resizing the image.
>
> **[3:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=200)** Here on line nine, I'm using the create_edit of the Images API.
>
> **[3:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=206)** I'm passing in an image.
>
> **[3:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=208)** I'm passing in a mask.
>
> **[3:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=210)** And then, I'm using the prompt: A beach chair with an umbrella.
>
> **[3:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=215)** So I want the image to be edited to include a beach chair.
>
> **[3:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=219)** Still using one for the number of images to generate and the size.
>
> **[3:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=225)** Let's execute this code to see the image that was generated.
>
> **[3:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=231)** And there, you now see a beach chair with an umbrella.
>
> **[3:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=235)** Lastly, you can create an image variation.
>
> **[3:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=239)** Let's execute this to, again, see the original image.
>
> **[4:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=246)** We're using the create_variation of the Images API, passing in the image, passing in the number of images to generate and the size.
>
> **[4:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=255)** Let's execute this, and it's going to take a moment to generate a variation of this beautiful image here.
>
> **[4:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=265)** Let's scroll down.
>
> **[4:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=266)** It's still generating.
>
> **[4:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=268)** We'll give it a few seconds, and here is a variation of the Hawaii image.
>
> **[4:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=276)** Let's look at the original image.
>
> **[4:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=279)** Notice here, there are palm trees in the background.
>
> **[4:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=283)** The trees in this image look slightly different, and that is the variation.
>
> **[4:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=291)** Using DALL-E is only free if you are an early adopter.
>
> **[4:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=296)** You should also know that using the Images API is billed separately from DALL-E's web interface at labs.[openai.com](https://openai.com).
>
> **[5:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=306)** Also, any credits granted or purchased on the website do not apply to the Images API.
>
> **[5:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/generate-images-using-dall-e?u=76281980&t=313)** Now that you understand how to generate images from scratch using DALL-E, let's learn how to customize one of OpenAI's models for your specific use case.

> [!info]- Semantic Content
>
> **Env Vars:** dall (13), api (7), url (1)
> **Code Keywords:** let (12), this. (1), this, (1), interface (1), case. (1)
> **CLI Commands:** python (2), curl (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Code Identifiers:** create_edit (1), create_variation (1)
> **Definitions:** is a  (2)
> **URLs:** [openai.com](https://openai.com) (1)
> **Cross-References:** in the next (1)

#### Customize a model using fine-tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=0)** - What if you could tailor the OpenAI models we've studied to your specific use case.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=7)** Wouldn't that be nice?
>
> **[0:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=9)** Imagine the access you would have to limitless innovation.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=13)** Well, I've got great news for you.
>
> **[0:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=16)** You can, and I will show you how.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=18)** You can tailor OpenAI's GPT-3 models through a process called fine-tuning.
>
> **[0:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=25)** Fine-tuning allows you to adapt the pre-trained model to your specific use case using your own data.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=33)** Fine-tuning is like taking a skilled musician and teaching them new songs.
>
> **[0:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=38)** The musician already has a solid foundation and understands music theory, but they adapt their skills to play specific tunes with precision and style through practice and guidance.
>
> **[0:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=51)** Similarly, the GPT-3 model with its pre-trained knowledge is fine-tuned to learn and specialize in specific tasks that you define.
>
> **[1:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=62)** During fine-tuning, you start with the pre-trained GPT-3 model and train it further on a smaller dataset, which makes running the model cheaper and faster.
>
> **[1:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=73)** It takes fewer than 100 examples to start seeing the benefits of fine-tuning GPT-3, and performance continues to improve as you add more data.
>
> **[1:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=84)** To get started, just run a single command, passing in a training data file you provide.
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=91)** Very easy.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=92)** Your custom version will start training and be available immediately via the OpenAI API.
>
> **[1:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=100)** Let's see this in action.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=102)** We are going to fine tune the model to generate science fiction movie plots based on a prompt.
>
> **[1:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=108)** The first step is to provide your data.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=111)** In the real world, you'll have your data already.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=115)** In this example, we're generating synthetic data to walk through the fine-tuning process.
>
> **[2:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=121)** The code generates a series of random prompts the model will learn from.
>
> **[2:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=127)** For example, here on line five, locations.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=130)** The moon, a spaceship, and outer space.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=133)** And alien types.
>
> **[2:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=135)** Grey, reptilian, Nordic, shape-shifting.
>
> **[2:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=139)** And hero goals.
>
> **[2:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=141)** Save the earth, destroy the alien home planet, save the human race.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=147)** Here on line 10, we have the prompt template that will be completed using the values from the list above.
>
> **[2:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=154)** Imagine the plot for a new science fiction movie.
>
> **[2:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=156)** The location is, and it will come from the location.
>
> **[2:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=159)** Humans are fighting the specific alien types, and the hero of the movie intends to do this hero goal.
>
> **[2:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=168)** Write the movie plot in 50 words or less.
>
> **[2:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=174)** Here on line 20, we're generating 100 records of the locations, alien types, and hero goals combined in a random fashion and retrieving a movie plot based on the prompt template defined.
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=188)** Now let's scroll down.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=192)** We're saving the results to a CSV file here on line 70.
>
> **[3:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=197)** And now let's look at the training data in cell 16.
>
> **[3:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=201)** One example reads, "The spaceship is in danger."
>
> **[3:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=205)** Another example reads, "The crew of the spaceship find themselves."
>
> **[3:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=211)** And another plot, "The movie follows a brave human astronaut."
>
> **[3:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=217)** You get the idea.
>
> **[3:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=218)** The model will learn how to generate a movie plot by looking at these examples.
>
> **[3:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=225)** Next, here in cell 17, we are cleaning up the data by removing special characters.
>
> **[3:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=231)** Certain special characters cannot be processed by the model Here, let's scroll down.
>
> **[3:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=237)** In cell 18, we are reformatting the data by removing unnecessary columns.
>
> **[4:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=243)** The final format of the data is shown here in cell 19, and it simply shows a prompt and a completion.
>
> **[4:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=251)** And this completion is the movie plot.
>
> **[4:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=254)** Scroll down a bit.
>
> **[4:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=256)** Now that we have the training data in this format, we'll need to prepare it using a data preparation tool provided by OpenAI.
>
> **[4:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=264)** The tool essentially takes the CSV file and formats it so that the model can understand it.
>
> **[4:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=271)** If you scroll down, you'll see the final output is this JSONL file type.
>
> **[4:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=278)** And that is what we need to upload.
>
> **[4:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=281)** So here in cell 12, we are uploading our data using the files API.
>
> **[4:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=287)** And now that we've uploaded the data, notice we get the ID to this file object, and we'll take that ID, and here in cell 20, we will create a fine-tuning job, passing in that ID as shown on line seven.
>
> **[5:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=304)** Now let's scroll down.
>
> **[5:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=306)** Here, in cell 23, this is where we retrieve the job status.
>
> **[5:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=310)** This is helpful for tracking to know whether or not your job is still in progress, whether or not it failed, or whether or not it succeeded.
>
> **[5:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=321)** Here, we can see the status of this job is succeeded.
>
> **[5:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=326)** The model is usually available.
>
> **[5:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=330)** Rephrase, the model is usually available momentarily in your account.
>
> **[5:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=336)** Sometimes it takes a little longer if there are a lot of jobs in the queue or if you have a lot of data to process.
>
> **[5:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=346)** Now, once you have your fine-tuned model, you can use it to generate a movie plot.
>
> **[5:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=350)** And that is what we're doing here in cell 25.
>
> **[5:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=353)** We are putting on line two the name of the fine-tuned model, and you get that from the output of the fine-tuning job.
>
> **[6:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=361)** Here, I'm passing in the prompt for the movie plot.
>
> **[6:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=365)** The moon, Nordic, destroy the alien home planet.
>
> **[6:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=370)** So we pass that in, and here is an output.
>
> **[6:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=374)** The Mall of Miracles and the hero's loyal sidekick.
>
> **[6:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=379)** Together, they fight the forces of evil to save humanity from extinction.
>
> **[6:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=385)** You get the idea of how this works.
>
> **[6:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=387)** You can continue to generate movie plots until you find one to your liking.
>
> **[6:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=395)** Now that you understand how to customize OpenAI's models, try them out.
>
> **[6:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=400)** How will you fine-tune your model?
>
> **[6:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/customize-a-model-using-fine-tuning?u=76281980&t=403)** Next, let's prepare you to integrate the APIs into your application code by exploring key concepts and terms.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case. (1), from. (1), type. (1), pass (1)
> **Env Vars:** gpt (4), api (2), csv (2), jsonl (1)
> **UI Navigation:** scroll down (5)
> **Analogies:** imagine (2), for example (1)
> **CLI Commands:** find (2)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1)
> **Speakers:** - what (1)

#### Examine key concepts
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=0)** - By now you're familiar with key terms and concepts like models, LLMs, fine tuning, prompts, tokens, completions, embeddings, transformers, and more.
>
> **[0:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=15)** Let's pool all these concepts together and introduce a few new concepts like probabilities and completion parameters.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=23)** At the center, you have foundation LLMs like GPT trained on terabytes of data from the internet, including text, websites, images, online books, and more.
>
> **[0:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=37)** Once you have a foundation LLM, you can fine tune it using data for your specific use case.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=44)** ChatGPT takes a series of prompts that go through a tokenization process by which the model processes the input text by breaking it down into smaller units called tokens.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=57)** Now I'm going to introduce a new concept, probabilities.
>
> **[1:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=62)** It's when the model aims to answer your input prompt by predicting which token is most likely to come next.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=70)** Take a look at this example using the phrase, which cheese pairs.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=75)** The model predicts at a 72% probability that the next word should be best, with better coming in only at 2.26%.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=87)** Do you remember when I told you about the temperature setting?
>
> **[1:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=90)** The value ranges from zero to one and helps the model determine which word is selected next.
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=98)** Lower values like zero mean the model will always return best next, because it has the highest probability.
>
> **[1:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=106)** As you increase the temperature, moving it closer to one, the model will take more risk and consider tokens with lower probabilities like with or better.
>
> **[1:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=117)** Higher temperatures may be helpful to increase the randomness of the model, providing more variety and creativity.
>
> **[2:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=126)** You're aware that the response from the model is called a completion.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=130)** When sending a request to the model, you pass in parameters called completion parameters.
>
> **[2:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=136)** You're familiar with temperature, and there are a few more parameters you'll find helpful.
>
> **[2:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=143)** n tells the number of chat completion choices to generate for each input message.
>
> **[2:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=150)** top_p tells the model to return the top responses that meet your desired probability score.
>
> **[2:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=157)** For example, a value of 0.1 means only words in the top 10% probability score are returned.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=166)** max_tokens tells the model the number of tokens to generate in the chat completion.
>
> **[2:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=172)** This is useful to keep costs down, but can limit the model's creativity.
>
> **[2:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=178)** Lastly, presence_penalty or frequency_penalty helps you control the repetition in the responses coming back.
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=186)** Values can be between negative two and two.
>
> **[3:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=190)** You should aim for values to be around 0.1 to 1 to somewhat reduce the repetition.
>
> **[3:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=197)** If you want to strongly reduce repetition, set the number to two, which is the highest value.
>
> **[3:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=204)** However, higher values can start to degrade the responses coming back.
>
> **[3:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/examine-key-concepts?u=76281980&t=210)** Now that you understand key concepts and terms, you're better prepared to integrate the APIs into your application code and dig deeper into the pricing models, which is up next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), case. (1), pass (1)
> **Code Identifiers:** max_tokens (1), presence_penalty (1), frequency_penalty (1)
> **Versions:** 0.1 (2), 2.26 (1)
> **Env Vars:** gpt (1), llm (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - by (1)

#### Understand pricing models
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=0)** - The OpenAI API is not free.
>
> **[0:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=4)** If you're going to use it, it's important that you understand the cost so you're not surprised when you receive your monthly bill.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=12)** OpenAI offers a pay as you go pricing model where you're billed at the end of each calendar month.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=19)** The prices are per 1,000 tokens roughly equal to 750 words, with $5 in free credit that can be used during your first three months.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=30)** 1,000 tokens of input costs 0.0015 of a dollar, while 1,000 tokens of output costs 0.002 of a dollar.
>
> **[0:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=42)** There are usage or spend quota limits put in place for your account.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=47)** When you sign up, you're granted an initial spend limit or quota, which is increased over time as you build a track record with your application.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=57)** Individual developer accounts using the pay as you go pricing structure have an approved usage or spend limit set to 120 US dollars per month when the account is opened.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=70)** You must complete a form to increase that limit if the quota doesn't meet your needs.
>
> **[1:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=76)** Requests are billed based on the number of tokens set in your prompt, plus the number of tokens in the completions returned by the API.
>
> **[1:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=86)** There are various models at different price points, each having a maximum content length that can't be exceeded.
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=94)** For most models, a single API request can only process up to 4,096 tokens between your prompt and completion.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=104)** For the most up-to-date pricing, visit the pricing page.
>
> **[1:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=108)** As you build projects Using the OpenAI's API, it's important to understand rate limits.
>
> **[1:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=116)** OpenAI enforces rate limits on the requests you can make to the API.
>
> **[2:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=121)** These are enforced through requests per minute, tokens per minute, or images per minute for images.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=128)** You may have heard about the ChatGPT Plus subscription, which differs from API pricing and is billed separately.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=137)** The ChatGPT Plus subscription covers usage on chat.[openai.com](https://openai.com), the ChatGPT web interface, and currently costs a flat fee of $20 per month.
>
> **[2:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=150)** ChatGPT Plus provides availability even when demand is high, has faster response speeds, and provides priority access to new features.
>
> **[2:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-pricing-models?u=76281980&t=161)** Now that we've explored the OpenAI API and the associated pricing models, let's set up your local development environment so you can start building.

> [!info]- Semantic Content
>
> **Env Vars:** api (7)
> **Code Keywords:** interface (1), let (1)
> **Versions:** 0.0015 (1), 0.002 (1)
> **CLI Commands:** make (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)


### 4. 3. Setting Up Your Environment

#### Install Python and Jupyter Notebook
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=0)** - Are you ready for the hands-on portion of this course?
>
> **[0:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=4)** We'll configure your environment and get started with OpenAI and ChatGPT.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=10)** We'll be using the classic Jupyter Notebook interface and OpenAI's Python library that provides access to the OpenAI API.
>
> **[0:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=20)** With Jupyter Notebooks, we'll author code using the Python programming language and OpenAI libraries.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=28)** The first step is to install Python by following the download instructions on the Python website.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=33)** Make sure to follow the instructions for your specific operating system, Mac, Windows, et cetera.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=41)** If you already have Python installed, ensure your version is at Python 3.7.1 or above, because that's what OpenAI supports.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=50)** On a Mac, which is what I'm using, you can check your version by navigating to a terminal window.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=57)** Since I'm using Python 3, I'd use the python3 --version command to check my version.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=66)** I'm currently at Python 3.8.9, which OpenAI supports.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=72)** Typically when you install the most recent version of Python, pip comes with it.
>
> **[1:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=77)** pip is a package manager for Python that helps you download the packages and modules needed to support your development.
>
> **[1:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=84)** pip is installed by default with Python versions 3.4 and newer.
>
> **[1:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=90)** Since I'm on a Mac, I can verify my version of pip by typing pip3 --version.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=102)** My current version is set at 3.8.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=104)** When you update Python, the pip version that comes with it is also updated.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=111)** Now that you've confirmed pip, use it to download Jupyter.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=115)** Follow the instructions for the classic Jupyter Notebook interface.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=119)** Since you already have Python installed, you'll follow the instructions for Python users that walk you through installing Jupyter with pip.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=128)** Follow the instructions provided to upgrade pip and then install Jupyter.
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=134)** Now let's navigate back to terminal.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=137)** Starting the notebook server is simple.
>
> **[2:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=141)** Mine is already running, and the command that I used was jupyter notebook.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=147)** This opens the Notebook dashboard in your default web browser.
>
> **[2:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=152)** If you run into issues verifying or running the Jupyter Notebook interface, you may need to use the fully qualified path like I did here.
>
> **[2:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=162)** Now let's navigate to that Jupyter Notebook.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=166)** The next step is to install the OpenAI Python library.
>
> **[2:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=171)** You've already seen this library in action and know that it provides convenient access to the OpenAI API from Python by acting as a wrapper for the API.
>
> **[3:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=183)** Within the Jupyter Notebook, you will use pip to install the library using this command: pip install openai.
>
> **[3:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=194)** You can confirm it by typing openai --version.
>
> **[3:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=198)** If you encounter issues confirming your version, you may need to make the OpenAI CLI executable.
>
> **[3:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=205)** The steps depend on your operating system.
>
> **[3:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=209)** Now that you have installed Python, Jupyter, and the necessary OpenAI libraries, you'll need to create an OpenAI account and generate an API key for authentication.
>
> **[3:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/install-python-and-jupyter-notebook?u=76281980&t=220)** We'll do both steps in the next video.

> [!info]- Semantic Content
>
> **CLI Commands:** python (17), pip (10), make (2), python3 (1), pip3 (1)
> **Tools:** jupyter (11), terminal (2)
> **Prerequisites:** install (6), configure (1), you'll need (1)
> **Versions:** python 3 (3), 7.1 (1), 8.9 (1), 3.4 (1), 3.8 (1)
> **Code Keywords:** interface (3), let (2)
> **Env Vars:** api (4), cli (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** navigate to (1)

#### Sign up for an OpenAI API account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=0)** - You have one last step before officially accessing the OpenAI API from your application code.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=7)** That step is to create an API key.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=10)** An API key is like a backstage pass to a concert.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=14)** It gives you privileged entry into the inner workings of an API.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=19)** By including the API key, sometimes called a secret key and API requests you gain permission to interact with the API.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=28)** The first step is to generate the API key and then configure your application code to use it when making an API call.
>
> **[0:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=37)** Before generating a key, you'll need to sign up for an OpenAI account, which you can do by going to [openai.com](https://openai.com) and clicking sign up.
>
> **[0:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=46)** If you already have an account, you can go ahead and log in.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=50)** You'll visit your API keys page to generate the API key needed for your request.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=56)** I will go ahead and log in.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=59)** If you see a screen like this after logging in or signing up, click on API to navigate to the API.
>
> **[1:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=67)** To set up an API key, click on your profile and go to view API Keys.
>
> **[1:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=74)** Once this page loads, you'll click create new secret key and let's just call this "Test".
>
> **[1:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=83)** Click on create secret key, and it's very important that you save your secret key here at this point because you won't be able to view it again through your OpenAI account.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=95)** Click Done.
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=96)** You want to treat the secret key the way you would treat a password and keep it secure.
>
> **[1:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=101)** Save it safely because you'll need it to authenticate to the API.
>
> **[1:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=105)** If you had already signed up for an OpenAI account before watching this course, you are likely passed the free three month trial given to new accounts.
>
> **[1:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=114)** If that is the case, you'll see a rate limit error when you try to run the API using the API key.
>
> **[2:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=122)** To correct the error, you'll need to turn your account into a paid account by clicking on your profile, going to manage account, and then clicking billing.
>
> **[2:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=132)** I'm going to delete this test API key because I don't need it.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=137)** Now that you've set up your OpenAI account and generated your API key, you can start coding.
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=144)** Get ready for your first step, which is to store your newly generated API key in a secure environment variable accessible by your Python code.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-an-openai-api-account?u=76281980&t=153)** See you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (21)
> **Prerequisites:** you'll need (3), set up (2), configure (1)
> **UI Navigation:** click on (3), navigate to (1), go to (1)
> **Code Keywords:** pass (1), let (1), case, (1), delete (1)
> **CLI Commands:** python (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Cross-References:** in the next (1)
> **Speakers:** - you (1)

#### Test the APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=0)** - Once you have an API key, testing APIs are easy.
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=5)** I will show you three different ways to test and explore APIs.
>
> **[0:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=9)** Feel free to use the one that works best for you.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=13)** I encourage you to play around and familiarize yourself with them before incorporating them into your application code.
>
> **[0:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=20)** You can use a free tool like Curl.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=23)** Curl comes pre-installed on Windows and Mac.
>
> **[0:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=26)** Otherwise, you can download the package from the Curl website.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=30)** I love OpenAI's API documentation because they provide the sample Curl commands for you.
>
> **[0:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=38)** Let's go there and copy and paste the command for the Chat Completions API Click on Copy.
>
> **[0:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=46)** We'll take the request and paste it into a terminal window.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=50)** Let's navigate there now.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=52)** In an upcoming video, we will explore the deeper details of the requests.
>
> **[0:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=58)** Just notice the model name that we're testing here is GPT-3.5 Turbo, in the request body that we are passing in a system message, "You are a helpful assistant," and the message of, "Hello."
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=75)** When we run this code, what happens is very interesting.
>
> **[1:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=80)** There is an authentication error that says, "You didn't provide an API key."
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=87)** As we learned in the last lesson, you'll need to use your backstage pass to authenticate to the API.
>
> **[1:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=94)** You'll simply replace this OpenAI API key up here with your API key.
>
> **[1:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=101)** Once you do that and execute the code again, the response from the model should be, "Hi, how can I assist you today?"
>
> **[1:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=112)** Another way to test the API is through a free tool called Postman, which has a nice visual interface.
>
> **[2:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=120)** You can find the API URL in the documentation.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=124)** Let's review calling the API from Postman.
>
> **[2:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=127)** I've set up a post request.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=129)** I've added the full URL.
>
> **[2:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=132)** I've added the API key under the authentication tab as a bearer token, and I've set up the body here just simply copying and pasting the body from the Curl request.
>
> **[2:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=145)** Let's click Send.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=147)** Notice the model that we are using here is GPT-3.5 Turbo, and the message or the prompt that is being sent in is a simple hello.
>
> **[2:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=157)** Notice here on line 11, the response from the model is, "Hello, how can I assist you today?"
>
> **[2:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=164)** You can save the request to a collection so that it's available later.
>
> **[2:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=170)** The third way to test is through OpenAI's Playground, which is easy to use.
>
> **[2:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=175)** In the environment, you'll see a way to access the different models, send in completion parameters like temperature, top P, frequency penalty, and more.
>
> **[3:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=185)** You'll notice that you will not need to enter an API key to use the APIs from this environment.
>
> **[3:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=191)** We're selecting Chat mode and we're selecting the GPT-3 0.5 Turbo model.
>
> **[3:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=198)** Here, let's enter a user message and we'll simply type hello and click Submit.
>
> **[3:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=207)** And the assistant responds with, "Hello, how can I assist you today?"
>
> **[3:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=213)** I encourage you to explore other APIs using either Curl, Postman, or the Playground environment.
>
> **[3:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=220)** Now that you understand how to test the APIs, let's get hands on with the Chat Completion API and start building our application that reviews a website and summarizes the content in a tweet-friendly format.
>
> **[3:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/test-the-apis?u=76281980&t=234)** See you in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** api (13), gpt (3), url (2)
> **Code Keywords:** let (6), pass (1), interface (1)
> **CLI Commands:** curl (6), find (1)
> **Tools:** postman (3), terminal (1)
> **Versions:** 3.5 (2), 0.5 (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Cross-References:** in the last (1), in the next (1)
> **Definitions:** is an  (1), is a  (1)


### 5. 4. Writing a Prompt for ChatGPT

#### Explore chat completion API call
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=0)** - Do you remember when I told you we would review the Chat Completion API request?
>
> **[0:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=6)** Well, now is that time.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=8)** We'll review the syntax of the request line by line, completion parameter by completion parameter.
>
> **[0:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=15)** As a reminder, this is the ChatGPT-powered application we're building.
>
> **[0:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=21)** In this chapter, we'll build the foundation for a multi-turn conversation with our AI assistant that jumpstarts the process of summarizing a website.
>
> **[0:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=31)** Let's look at the API reference for the Chat Completions API to understand what a sample request will look like.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=39)** I'll be using Postman because it has a nice user interface that is easy to navigate and is the go-to tool for API testing.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=50)** You've seen Postman before.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=52)** For a quick refresher, the method goes here.
>
> **[0:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=55)** In our case, we are posting data to the API, the full URL of the API goes here, your API key goes under the Authorization tab, the request body goes under the Body tab, and you send the request to the API by clicking on the blue Send button.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=72)** I'm on the Body tab and you'll notice that the request body is in raw JSON format and includes the model parameter here on line two, which identifies the model we're using, in our case, GPT-3.5 Turbo.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=87)** There's also the messages parameter here on line three, which includes the conversation.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=92)** In this example, we ask the model, Which olive oil is best for frying?
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=98)** We'll need to add a few completion parameters to this request body.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=102)** Let's go to the documentation for the Completions API to understand the parameters available.
>
> **[1:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=110)** The documentation defines in great detail what your requests should include.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=115)** There is a list of the different parameters shown here.
>
> **[2:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=120)** We'll update our requests to add additional completion parameters.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=124)** We'll use temperature, top_p, n, max_tokens, and frequency_penalty.
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=134)** Let's navigate back to Postman.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=137)** I'm going to add these completion parameters.
>
> **[2:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=141)** Notice here n that represents the number of completion responses.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=147)** So when we execute this code by clicking Send, we should see three responses coming back.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=153)** While we're waiting for that to appear, do you remember why we see randomness in the three responses?
>
> **[2:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=161)** You guessed it.
>
> **[2:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=162)** It's because of the temperature parameter.
>
> **[2:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=165)** Let's look at the first response.
>
> **[2:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=167)** The first response, and I'm not going to read the entire response, says when it comes to frying, it is generally recommended to use olive oil with a higher smoke point.
>
> **[2:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=178)** The next response.
>
> **[2:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=179)** Extra virgin olive oil is not recommended for frying because it has a low smoke point.
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=186)** And the third response.
>
> **[3:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=187)** Extra virgin olive oil is not recommended for frying due to its low smoke point and delicate flavor.
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=195)** By looking at these responses, I've learned that I should not fry anything in extra virgin olive oil.
>
> **[3:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=204)** I bet you're asking yourself how an API call like this works in conjunction with the OpenAI Python library and what the differences are.
>
> **[3:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=215)** The library makes the API easier to work with from application code by providing a layer of abstraction and simplifying the interaction with the API.
>
> **[3:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=226)** Think of the library like this.
>
> **[3:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=228)** Imagine you are planning a trip to a foreign country where you don't speak the language or know the local customs.
>
> **[3:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=236)** Navigating the complexities of the new environment can be challenging and time consuming.
>
> **[4:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=243)** However, you come across a friendly and knowledgeable tour guide who offers assistance.
>
> **[4:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=249)** The Python library is your tour guide to the API.
>
> **[4:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=253)** Instead of having to figure everything out on your own, you can rely on the tour guide's expertise to make your trip smoother and more enjoyable.
>
> **[4:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=264)** Let's see the same API call you made from Postman using the Python library.
>
> **[4:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=271)** Here in cell six, I'm using the Python library.
>
> **[4:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=276)** You'll notice I have the entire block of code in a try-except block.
>
> **[4:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=282)** Here on line two, I'm calling the create function of the ChatCompletion, passing in several parameters.
>
> **[4:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=291)** The first parameter is model using GPT-3.5 turbo.
>
> **[4:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=296)** The messages, here, the prompt is Which olive oil is best for frying?
>
> **[5:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=302)** Also passing in the temperature, top_p, n, max_tokens, and frequency_penalty.
>
> **[5:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=310)** Here on lines 12 and 13, I'm looping through the response and printing the messages, so let's look at that output.
>
> **[5:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=321)** The first is "The best type of olive oil for frying is one with a high smoke point."
>
> **[5:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=327)** The second response is "When it comes to frying, it is recommended to use an olive oil with a high smoke point and neutral flavor."
>
> **[5:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=335)** And the last one, "Extra virgin olive oil is not recommended for frying as it has a low smoke point."
>
> **[5:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=342)** The output is similar to what we saw in the Postman example.
>
> **[5:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-chat-completion-api-call?u=76281980&t=349)** Now that you can structure an API request, let's review the API response.

> [!info]- Semantic Content
>
> **Env Vars:** api (16), gpt (2), url (1), json (1)
> **Code Keywords:** let (7), case, (2), interface (1), include. (1), this. (1)
> **CLI Commands:** python (4), make (1)
> **Tools:** postman (5)
> **Best Practices:** recommended (5)
> **Code Identifiers:** max_tokens (2), frequency_penalty (2)
> **Documentation:** the documentation (2), api reference (1)
> **Versions:** 3.5 (2)

#### Review chat completion API response
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=0)** - [Instructor] Let's explore the most essential part of your interaction with the Open AI, API, their response.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=7)** That's why we send a request in the first place, right?
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=10)** To get much needed information back.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=13)** Let's review the API documentation to understand the fields returned in the response.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=19)** Here is an example response.
>
> **[0:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=21)** On line two, you'll see choices.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=24)** Choices hold the actual completion data.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=28)** Let's break down each property.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=30)** First, you see finish reason here on line four.
>
> **[0:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=34)** Finish reason indicates the reason why the language model stopped generating text.
>
> **[0:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=40)** A common reason is stop, which means the completion was generated successfully.
>
> **[0:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=45)** Another reason is length, which means the language model ran out of tokens before being able to finish the completion.
>
> **[0:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=53)** You'll want the finish reason to be stopped to indicate that everything was completed successfully.
>
> **[1:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=60)** Next, we see index here on line five, index holds the index of the completion inside the choices array.
>
> **[1:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=69)** Next, we have message.
>
> **[1:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=71)** Message holds the model's response.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=75)** Let's scroll down and look here on line 12, there's created.
>
> **[1:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=80)** This is a date timestamp indicating the date and time the response was generated.
>
> **[1:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=86)** Next, on line 13, there's ID.
>
> **[1:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=89)** The ID represents the unique response identifier.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=93)** This is very useful if you need to track the responses.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=97)** Next, there's model here on line 14.
>
> **[1:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=100)** This represents the Open AI model that was used for generating the response.
>
> **[1:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=106)** Next, on line 15, there's something called object.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=111)** Object represents the response type.
>
> **[1:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=114)** If we use the chat completion's API, it would say chat completion.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=119)** If we use the text completion API, it would say text completion and so on.
>
> **[2:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=125)** And lastly, on line 16, there is usage.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=129)** Describes the number of tokens used by the completion.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=133)** You see in this example on line 17, completion tokens at 17, prompt tokens at 57, and total tokens at 74.
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=144)** Now let's look at a real response by navigating to the Jupyter Notebook.
>
> **[2:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=149)** This is the code example from the previous lesson that returns three responses to the prompt: Which olive oil is best for frying?
>
> **[2:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=160)** Let's scroll down to the bottom.
>
> **[2:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=163)** If you haven't pulled the code down already, I encourage you to do so and follow along with me.
>
> **[2:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=170)** Here on line one, we are going to print the response.
>
> **[2:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=174)** Let's execute the code.
>
> **[2:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=176)** There are several familiar attributes returned in the response.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=182)** The first thing that catches my attention is the model here.
>
> **[3:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=187)** If you remember from our request, we passed in GPT-3.5 Turbo.
>
> **[3:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=193)** However, the response indicates that the GPT-3.5 turbo 0613 model was used.
>
> **[3:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=201)** Where did the 0613 come from?
>
> **[3:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=204)** Well, GPT-3.5 turbo is a pointer to the most recent version of the model, which is helpful so that you don't have to track the versions yourself.
>
> **[3:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=215)** The 0613 is the underlying version, but you'll use the pointer.
>
> **[3:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=222)** Scroll down, we see our choices.
>
> **[3:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=227)** Let's scroll down to the very bottom and take a look at our usage.
>
> **[3:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=233)** Notice that this request and response used a total of 377 tokens, 15 in the prompt and 362 in the completion.
>
> **[4:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=247)** Do you remember how you're charged?
>
> **[4:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=249)** You're right.
>
> **[4:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=250)** Based on the number of tokens, you'll notice three choices returned.
>
> **[4:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=255)** That's because we set the end parameter with a value of three in our request.
>
> **[4:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=261)** Now that you understand the request and response, let's get hands-on with building.
>
> **[4:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-chat-completion-api-response?u=76281980&t=266)** See you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), type. (1)
> **Env Vars:** api (4), gpt (3)
> **UI Navigation:** scroll down (4)
> **Versions:** 3.5 (3)
> **Definitions:** is a  (2), is an  (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Build a dialog using chat completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=0)** - This is the first official hands-on challenge in this course.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=10)** Let's combine everything you've learned to start building the multi-turn conversation with an AI assistant.
>
> **[0:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=17)** You're ready to start writing codes, since you've already set up your development environment, created an OpenAI account and generated an API key.
>
> **[0:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=27)** Your first step is to create an empty Jupyter Notebook.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=30)** You'll continue to use this Notebook for the remaining challenges.
>
> **[0:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=35)** Each challenge builds on the last challenge.
>
> **[0:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=38)** As you solve this challenge, look at the chat completion API.
>
> **[0:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=42)** And here's a tip.
>
> **[0:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=43)** Experiment with different temperature values and observe what happens.
>
> **[0:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=48)** Good luck, and have fun.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-build-a-dialog-using-chat-completion?u=76281980&t=50)** I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), continue (1)
> **Env Vars:** api (2)
> **Tools:** jupyter (1)
> **Prerequisites:** set up (1)
> **Speakers:** - this (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Build a dialog using chat completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=5)** - [Instructor] So, how did you do?
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=7)** Let's compare.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=8)** Let's look at how I saw the challenge of building the foundation of a multi-turn conversation with an AI assistant.
>
> **[0:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=17)** The first step is to install the necessary libraries.
>
> **[0:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=21)** I've installed these libraries already, so I won't run this code again.
>
> **[0:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=26)** Next, I imported the OS and OpenAI modules, or libraries.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=33)** You're familiar with the OpenAI Python library.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=36)** The OS module provides access to operating system dependent functionality.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=41)** I'll use it to access the API key stored as an environment variable in an external dotenv file.
>
> **[0:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=50)** Scroll down.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=52)** On line one, here I am retrieving the OpenAI API key from the environment variable and storing it in OpenAI.API_key.
>
> **[1:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=65)** This variable is used to authenticate to the API.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=70)** Next, here in cell 16, I'm storing the name of the model I'm using in the model variable, which I'll use later.
>
> **[1:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=79)** Let's scroll down.
>
> **[1:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=81)** Notice cells 17 and 18.
>
> **[1:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=85)** In the following few sections, you'll see that I've designed my code to be modular with reusable code defined in functions.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=93)** The first function here in cell 17 is generate_prompt, which is used to set the context for the AI assistant.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=102)** It helps us compose a tweet based on an AI-generated summary of a website.
>
> **[1:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=108)** The next function here in cell 18 is called get_completion, which calls the ChatCompletions API, passes in the request, and gets a response back.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=119)** You'll notice that this function takes one parameter called temperature.
>
> **[2:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=125)** The value for temperature will default to zero if a value is not passed in.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=130)** In this function, you'll see that I'm storing the completion response in the response variable.
>
> **[2:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=136)** I'm passing in the model and prompt in the messages and temperature parameters.
>
> **[2:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=141)** Next, here on line 10, I'm printing the content from the response.
>
> **[2:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=147)** Scroll down, here on line 19, I'm calling the get_completion function and passing in zero for the temperature.
>
> **[2:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=155)** I could have left this blank since the temperature will default to zero.
>
> **[2:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=160)** I've executed this cell already, and the response is shown below.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=166)** The assistant replies with, "Sure, I can help with that.
>
> **[2:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=170)** Please provide me with the website you would like me to summarize."
>
> **[2:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=174)** If you scroll down, I have a few examples that illustrate temperature, and this is just for extra credit.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=182)** I encourage you to explore different temperature values on your own.
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=188)** And that's all there is to it.
>
> **[3:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-build-a-dialog-using-chat-completion?u=76281980&t=190)** We now have the foundation for our application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (3), module (1)
> **Env Vars:** api (4)
> **UI Navigation:** scroll down (4)
> **Code Identifiers:** get_completion (2), generate_prompt (1)
> **CLI Commands:** python (1)
> **Definitions:** is called (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Constructing a Multi-Turn Conversation with ChatGPT

#### Construct a multi-turn conversation
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=0)** - [Instructor] Let's continue building our ChatGPT-powered application by expanding the single prompt into a multi-turn conversation with the AI assistant.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=10)** We'll show the AI assistant how to remember the conversation, showing the real power of ChatGPT.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=18)** This API documentation shows a sample multi-turn conversation here in lines six through nine.
>
> **[0:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=27)** There's a system message and a series of user and assistant messages.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=33)** Each interaction with the AI assistant is a new session, which means the model doesn't remember previous prompts or responses.
>
> **[0:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=43)** For the model to remember the entire chat message history, including user prompts and assistant responses, each must be included in the exchange.
>
> **[0:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=54)** The messages parameter here on line five is the key to making this work.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=59)** Notice the entire conversation is sent in this example.
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=64)** This technique is called prompt chaining.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=68)** Let's navigate to the Jupyter Notebook to see it in action.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=72)** While we review these examples, I'll also highlight the importance of designing effective prompts.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=78)** It's important for you to be aware of techniques that can improve the output returned from the model.
>
> **[1:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=84)** In this Jupyter Notebook, you're familiar with the first few lines of code, importing the necessary libraries and obtaining the API key.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=93)** To implement prompt chaining, I've added a function called collect_messages here in cell six that appends requests and responses to the context array shown here on line eight.
>
> **[1:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=107)** You're familiar with get completion.
>
> **[1:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=110)** Then here in this next cell, I've created a loop that continues to track the conversation until I enter the word exit.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=119)** The goal of this code is to summarize a website in a tweet-friendly format.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=124)** When you're passing prompts to ChatGPT, there are strategies for getting better results.
>
> **[2:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=130)** The first strategy is to include details in the prompt to get more relevant answers.
>
> **[2:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=136)** For example, you can optimize the output for a specific audience.
>
> **[2:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=140)** And another strategy is to use stop sequences and specify the desired output length.
>
> **[2:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=146)** Like, can you summarize it in 50 words instead.
>
> **[2:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=151)** There are several strategies, so let's see them in action.
>
> **[2:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=156)** I'm going to execute this code, and the assistant says, sure, please provide me with the website you would like me to summarize.
>
> **[2:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=165)** In this case, I want it to summarize the Amazon Rekognition website, and it gives a nice summary.
>
> **[2:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=173)** Rekognition is a powerful image and video analysis service.
>
> **[2:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=178)** Now, let's tailor the output for developers.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=182)** Can you summarize it for developers?
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=186)** And the output calls out Rekognition as a service designed for developers.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=192)** It uses deep learning algorithms to accurately identify objects.
>
> **[3:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=197)** The next question, can you summarize it for executives?
>
> **[3:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=202)** In that output, Rekognition is a cutting-edge image and video analysis service, and it just gives a very generic general summary.
>
> **[3:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=213)** You can use it to identify objects, people, text, and activities, and it offers valuable insights that can enhance various business applications.
>
> **[3:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=222)** The next question, can you summarize it for college students?
>
> **[3:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=227)** And the summary says, Rekognition is an innovative image and video analysis service.
>
> **[3:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=233)** Skip down to the last sentence.
>
> **[3:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=235)** It has numerous applications and can be a valuable tool for college students in various fields of study.
>
> **[4:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=242)** And now, let's add a few stop words.
>
> **[4:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=244)** Can you summarize it using 50 words instead?
>
> **[4:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=249)** And let's look at the response, and the response says, I would have to count each word to see if it is 50 words or less.
>
> **[4:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=259)** But the summary talks about image and video analysis, and the last sentence says, it's a valuable tool for executives, developers, and college students alike.
>
> **[4:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=269)** And the last prompt, can you summarize it using 10 words instead?
>
> **[4:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=275)** Let's see.
>
> **[4:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=276)** That looks like less than 10 words.
>
> **[4:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=278)** Says Amazon Rekognition: accurate image and video analysis with deep learning.
>
> **[4:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/construct-a-multi-turn-conversation?u=76281980&t=284)** Now that you can construct a multi-turn conversation, let's strengthen your knowledge through hands-on exploration.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), continue (1), function (1), case, (1)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **Env Vars:** api (2)
> **Tools:** jupyter (2)
> **Code Identifiers:** collect_messages (1)
> **UI Navigation:** navigate to (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)

#### Challenge: Generate tweet content using chat completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=0)** - Let's build on the last hands-on challenge by incorporating a multi-turn conversation with the AI assistant.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=13)** We want to include a prompt, instructing the model to remember the conversation and summarize a website in a tweet-friendly format.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=23)** Start by going to your existing Jupyter Notebook.
>
> **[0:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=26)** Review your code to refresh your memory on how the existing code works.
>
> **[0:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=31)** Don't forget that each interaction with the AI assistant is a new session.
>
> **[0:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=37)** If you want the model to remember the conversation and have the proper context to produce output, you must include the entire message history, meaning all the prompts and responses with each request.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=52)** Take a look at Python's input function to see if it could be helpful as you solve this challenge.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=59)** Good luck, and have fun.
>
> **[1:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-tweet-content-using-chat-completion?u=76281980&t=61)** I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Generate tweet content using chat completion
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=0)** - [Instructor] Let's solve our challenge.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=7)** The goal was to expand the multi-term conversation to remember the conversation and summarize a website in a tweet friendly format.
>
> **[0:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=16)** Here in our Jupyter notebook in cell 9, I'm importing the OS and OpenAI modules or libraries.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=24)** You're familiar with the OpenAI Python Library.
>
> **[0:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=27)** The OS module provides access to operating system dependent functionality.
>
> **[0:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=32)** I'll use it to access the API key stored as an environment variable in an external.env or environment file.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=41)** Here on lines 4 and 5, I'm loading the environment file.
>
> **[0:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=46)** Next on line 10, I'm reading the API key from the environment variable and storing it in openai.api_key.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=56)** Next, I'm storing the name of the model I'm using in the model variable, which I'll use later.
>
> **[1:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=63)** Next, here on line 4, I'm setting the context in a system message.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=68)** The persona is that of an AI assistant designed to produce website summaries.
>
> **[1:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=74)** Next, I have a function here in cell 12 called collect messages that keeps track of the conversation history by appending the most recent message in the context array here on line 8.
>
> **[1:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=89)** The next function is called get_completion in Cell 13.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=93)** This calls the chat completion's API, passes in a request and gets a response back.
>
> **[1:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=100)** You'll notice that this function takes one parameter called temperature.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=104)** The value for temperature will default to zero if a value is not passed in.
>
> **[1:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=110)** In the function, you'll see I'm storing the completion response in the response variable.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=115)** I'm passing in the model and the prompt and messages and temperature parameters.
>
> **[2:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=123)** Next, I'm starting the conversation with the AI assistant in this cell.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=128)** I'm using an infinite loop to manage the multiterm conversation.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=133)** The loop ends when I enter the text exit.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=137)** Let's see this in action.
>
> **[2:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=139)** I'll click run and the AI assistant responds with, "Sure, please provide me with the website you would like me to summarize."
>
> **[2:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=148)** I would like for it to summarize the LinkedIn Learning website.
>
> **[2:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=152)** The response says, "LinkedIn Learning is an online platform that offers a wide range of professional courses and tutorials to help individuals enhance their skills and advance their careers."
>
> **[2:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=163)** That sounds about right to me.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=166)** The next prompt is, can you summarize it for developers?
>
> **[2:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=171)** And the response for developers calls out LinkedIn Learning as an online platform that provides developers with a vast array of courses and tutorials to enhance their skills.
>
> **[3:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=183)** The next prompt, can you summarize it for executives?
>
> **[3:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=188)** And the response there, LinkedIn Learning is an online platform that offers executives a comprehensive selection of courses and tutorials to develop leadership skills, stay informed about industry trends, and enhance their professional growth and success.
>
> **[3:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=205)** That is a great summary for an executive. Next prompt.
>
> **[3:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=211)** Can you summarize it for college students?
>
> **[3:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=215)** And the response is, LinkedIn Learning is an online platform that provides college students with a wide range of courses and tutorials to supplement their education, gain practical skills, and increase their employability.
>
> **[3:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=229)** Again, a perfect summary for a college student.
>
> **[3:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=234)** This time I'm going to use stop words.
>
> **[3:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=236)** Can you summarize it using 50 words instead?
>
> **[4:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=240)** Now, I'll let you all count these words to make sure it's less than 50, but it looks about right to me.
>
> **[4:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=247)** And the last prompt, can you summarize it using 10 words instead?
>
> **[4:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=253)** That looks like less than 10.
>
> **[4:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=255)** "LinkedIn learning: online courses for professionals to boost career growth."
>
> **[4:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=260)** Let's type exit to end the multi-term conversation.
>
> **[4:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=266)** That's all there is to it.
>
> **[4:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=267)** We now have a tweet friendly summary of the website.
>
> **[4:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=271)** My version of the solution is pretty straightforward.
>
> **[4:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=274)** Yours probably looked similar to mine, but don't worry if it didn't.
>
> **[4:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=278)** There are always multiple ways to solve the problem.
>
> **[4:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=281)** Now let's learn about what comes next for our application.
>
> **[4:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=285)** Exploring the Image Generation API.
>
> **[4:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-tweet-content-using-chat-completion?u=76281980&t=288)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), module (1)
> **Definitions:** is an  (3), is called (1), is a  (1)
> **Env Vars:** api (4)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** api_key (1), get_completion (1)
> **File Paths:** external.env (1)
> **Cross-References:** in the next (1)
> **Tools:** jupyter (1)


### 7. 6. Generating an Image Using DALL-E

#### Explore images API call
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=0)** - [Narrator] Image generation is a fun use case for generative AI.
>
> **[0:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=4)** I spent hours generating unique images from scratch using a simple text description.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=10)** Let's look more closely at the image generation API call that provides access to DALL-E, OpenAI's image generation model.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=19)** We will use DALL-E to generate a custom image based on the website summary provided by the chat completion's API in the previous lesson.
>
> **[0:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=29)** I've navigated to the OpenAI API documentation to review what a request will contain.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=36)** The documentation is a great resource for you.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=39)** It defines what your request should include in great detail.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=44)** The Images API provides three methods for interacting with images, creating a new image, editing an existing image, or creating variations of an existing image, all based on a text prompt.
>
> **[1:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=61)** Let's look at creating an image.
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=64)** There are five parameters.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=66)** The first parameter is prompt, which is the description of the image you want to generate.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=72)** N, which is the number of images to generate based on the prompt.
>
> **[1:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=77)** The default is one.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=78)** Size, which is the size of the image to generate.
>
> **[1:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=82)** The default is 1,024 by 1,024.
>
> **[1:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=85)** Response format, which is the format the generated image is returned in.
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=91)** The default is to return a URL.
>
> **[1:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=93)** User, which is a unique identifier representing the end user or calling client.
>
> **[1:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=100)** This is often used to monitor and detect abuse.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=104)** Let's see this API call in Postman.
>
> **[1:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=108)** Notice here, this will be a post request to the image's generation's URL endpoint.
>
> **[1:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=116)** You'll put your API key as the bearer token on the Authorization tab.
>
> **[2:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=121)** On the Body tab, you'll enter the parameters you pass to the API.
>
> **[2:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=126)** In this example, for the prompt parameter, I'm passing in "A palm tree on a beach."
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=134)** For N, I'm passing in two, which means two pictures will be generated.
>
> **[2:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=139)** Finally, I'm passing in the image size 1024 by 1024.
>
> **[2:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=146)** You could also use 256 by 256 or 512 by 512.
>
> **[2:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=151)** When we are ready to execute, we will click the Send button to see the response in the bottom pane.
>
> **[2:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=158)** Let's do that now.
>
> **[2:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=159)** We'll talk more about the API's output in the next video.
>
> **[2:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=164)** Notice the response format here on line five is b64_json.
>
> **[2:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=170)** We have our output in the b64_json format.
>
> **[2:54](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=174)** I encourage you to explore editing an existing image or creating new variations of an existing image on your own to strengthen your understanding of what the Images API can do.
>
> **[3:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=186)** Now, let's see the exact same call using OpenAI's Python library.
>
> **[3:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=192)** Let's navigate to the Jupyter Notebook.
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=195)** Let's take a look at the new generate_image function in cell six.
>
> **[3:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=200)** Here, on line seven, we are generating an image using the image's API.
>
> **[3:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=206)** In this example, we are using DALL-E 3.
>
> **[3:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=209)** We're passing in a prompt, which is the summary, the size, the quality, and n, for the number of images.
>
> **[3:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=216)** This is similar to the call in Postman.
>
> **[3:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-images-api-call?u=76281980&t=219)** Now that you can structure an API request, let's review the API response.

> [!info]- Semantic Content
>
> **Env Vars:** api (12), dall (3), url (2)
> **Code Keywords:** let (8), pass (1), finally, (1), function (1)
> **Tools:** postman (2), jupyter (1)
> **Definitions:** is a  (3)
> **CLI Commands:** python (1)
> **Code Identifiers:** generate_image (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)

#### Review images API response
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=0)** - [Instructor] Let's see the output of the image's API, a custom image generated based on your text prompt.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=7)** The response format parameter is important.
>
> **[0:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=11)** It drives the model's output.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=14)** Let's navigate to the API documentation to look at the parameter more closely.
>
> **[0:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=20)** There are two possible values for the parameter, URL or b64, which stands for Base64, json.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=30)** Let's navigate to Postman to see the output.
>
> **[0:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=34)** Here on line five, the response format is set to base64_json, which returns the Base64 value of the generated image down here in this output window.
>
> **[0:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=45)** You'll need to convert this Base64 value to an image format such as PNG.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=52)** Let's change the response format attribute to URL, and notice this value is case sensitive.
>
> **[1:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=60)** Let's click Send again.
>
> **[1:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=63)** And within our output, once it completes we should see two URLs.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=68)** And yes, there are two URLs that point to the images which you can view and download.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=75)** Let's look at one of the images by copying the URL and pasting it into a web browser.
>
> **[1:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=83)** Here is one of the images of a palm tree on a beach.
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=91)** Let's copy the URL for the second image.
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=96)** Now look at the second image.
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=98)** They are both beautiful images of palm trees on a beach.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=102)** Don't you wish you were there?
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=104)** I sure do!
>
> **[1:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=105)** An advantage of using the Base64 value is that while the URLs expire after an hour, you can programmatically save the Base64-encoded string to a JSON file.
>
> **[1:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=119)** A disadvantage is that you can't look at your image unless you decode the data, which is easy to do in Python but requires additional code.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=128)** There're also websites on the internet that will do the decoding for you.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=133)** Now let's navigate to the Jupyter Notebook.
>
> **[2:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=137)** You've seen most of this code already.
>
> **[2:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=139)** Let's scroll down to the generate_image function in cell six.
>
> **[2:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=143)** This function is used to generate the image, and I've executed the code in cell seven to generate the tweet-friendly summary.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=153)** Let's scroll down, and here is the summary.
>
> **[2:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=156)** Imagine a virtual library filled with books on various subjects representing the vast range of courses available on LinkedIn.
>
> **[2:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=166)** Each book represents a different skill or topic, symbolizing the opportunity for professionals to enhance their knowledge and advance their careers through the platform.
>
> **[2:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=177)** Now let's look in cell eight.
>
> **[2:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=179)** We've generated an image by passing in that summary.
>
> **[3:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=183)** Notice the URL variable holds the URL to the generated image.
>
> **[3:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=189)** Now let's look in cell nine.
>
> **[3:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=191)** We're using the Python image library to display the image directly in the notebook for easy viewing.
>
> **[3:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=198)** And this is the first image using DALL-E 3, and it is pretty amazing.
>
> **[3:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=205)** Now let's scroll down and slightly modify the summary, which is the text prompt to the model to improve the generated image that's shown here in cell 10.
>
> **[3:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=216)** The prompt is simply a learning library.
>
> **[3:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=219)** Let's execute that code again.
>
> **[3:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=221)** And now, this image is much better, but it's not based on the summary, but I like it.
>
> **[3:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=231)** Let's try it again using a shortened version of the original summary, which is shown here on line 12, virtual classroom.
>
> **[4:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=241)** Let's execute the code, and this is the image that is returned.
>
> **[4:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=248)** I like this image.
>
> **[4:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/review-images-api-response?u=76281980&t=249)** It can be used in the tweet, and you'll just continue to modify the prompt until an image is generated to your liking.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), function (2), continue (1)
> **Env Vars:** url (6), api (2), png (1), json (1), dall (1)
> **UI Navigation:** navigate to (3), scroll down (3)
> **CLI Commands:** python (2)
> **Tools:** postman (1), jupyter (1)
> **Analogies:** such as (1), imagine (1)
> **Code Identifiers:** generate_image (1)
> **Definitions:** stands for (1)

#### Challenge: Generate images using images API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=0)** - Let's build on the last hands-on challenge by generating a custom image based on the summarized website.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=13)** Start by going to your existing Jupyter Notebook.
>
> **[0:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=16)** Review your code to refresh your memory on how the existing code works.
>
> **[0:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=21)** You'll start by adding a new function that will be used to call the images API by passing in the website summary as a prompt.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=30)** I recommend you review the prompt and size parameters as they could be helpful as you solve this challenge.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=39)** Good luck and have fun.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-generate-images-using-images-api?u=76281980&t=41)** I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Env Vars:** api (1)
> **Tools:** jupyter (1)
> **Speakers:** - let (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Generate images using images API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=0)** - [Instructor] Time to solve our challenge.
>
> **[0:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=7)** Let's look at how I solved our prompt of generating a custom image based on the summarized website.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=14)** You're familiar with the code that installs the needed libraries, pulls the API key from the environment variable, collects the messages of the multi-turn conversation, and gets the completion.
>
> **[0:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=27)** This code manages the multi-turn conversation, allowing the user to enter a website to summarize.
>
> **[0:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=35)** I've added a new function called generate_image that takes in the summary and passes it into the prompt parameter.
>
> **[0:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=42)** I also use the n parameter to indicate that I want one image generated.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=47)** For the size parameter, I'm passing the value of 1024 by 1024.
>
> **[0:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=53)** I'm storing the URL in the image_url variable here on line 15.
>
> **[0:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=58)** I've started the multi-turn conversation already, so let me enter the website to summarize.
>
> **[1:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=67)** So, it's off thinking, summarizing the website, we have our response.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=72)** Now I'm going to ask it to shorten the summary, and that was fast.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=78)** It came back with a shorter summary.
>
> **[1:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=80)** And lastly, I'm going to ask it to describe an image that represents that summary in five words or less.
>
> **[1:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=92)** And it came up with "Skills for career growth."
>
> **[1:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=96)** Let's exit this.
>
> **[1:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=101)** After the multi-turn conversation completes, I call the generate_image function and I store the response in the url variable.
>
> **[1:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=109)** I use Python's Image Library to display the image in line, and here is the image that was generated.
>
> **[1:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=117)** I think this is a really cool image, and it works perfectly for the use case.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=124)** My version of the solution is pretty straightforward.
>
> **[2:07](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=127)** Yours probably look similar to mine, but don't worry if it didn't.
>
> **[2:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=131)** There are always multiple ways to solve the same problem.
>
> **[2:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=135)** Now, let's learn about what comes next for our application, integrating with the Twitter or X API.
>
> **[2:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-generate-images-using-images-api?u=76281980&t=142)** I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (2), this. (1), case. (1)
> **Code Identifiers:** generate_image (2), image_url (1)
> **Env Vars:** api (2), url (1)
> **CLI Commands:** python (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Integrating with the Twitter API

#### Sign up for a Twitter API account
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=0)** - [Instructor] We're now in our final steps before we can tweet our AI generated text.
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=5)** Let's start by accessing the Twitter API.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=8)** The first step is to sign up for a Twitter developer account, to gain access to the API.
>
> **[0:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=13)** Let's navigate to the developer portal, and sign up.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=18)** Make sure that you sign up for a free account.
>
> **[0:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=20)** If you already have a developer account, you can skip this step.
>
> **[0:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=26)** If you've already created an account, simply click on "Developer Portal," and you will have access to the dashboard page of your developer portal.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=36)** The next step is to create a new project.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=39)** Name it, select the appropriate use case, and provide a project description.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=44)** I've already created a project, so I'll click on it.
>
> **[0:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=49)** Next, you either create a new app, or connect an existing app, if you've already set one up.
>
> **[0:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=56)** An app serves as the container for the API keys that you need, to make an HTTP request to the Twitter API.
>
> **[1:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=65)** You can navigate to your app's keys and tokens page, by clicking on this key icon.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=72)** You'll go here to generate the required credentials.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=78)** You'll also need to ensure the authentication settings are set to "read and write."
>
> **[1:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=83)** Click on settings, scroll down to "use our authentication settings," click "edit," and make sure your app permissions are set to "read and write," and verify your type of app is web app, automated app, or bot.
>
> **[1:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=102)** Let's go back.
>
> **[1:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=104)** Make sure from the keys and tokens page, you save the generated credentials, the client ID, and the client's secret in a secure location.
>
> **[1:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=113)** I recommend storing their credentials in an environment variable, similar to how we store the OpenAI API Key.
>
> **[2:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/sign-up-for-a-twitter-api-account?u=76281980&t=120)** Now that you have your credentials, you can make your first API call using Python code.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), http (1)
> **UI Navigation:** click on (3), navigate to (2), select the (1), scroll down (1)
> **CLI Commands:** make (5), python (1)
> **Code Keywords:** let (3), case, (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Explore Twitter API call and response
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=0)** - [Instructor] Have you heard of Tweepy?
>
> **[0:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=2)** It's an open source Python package that gives you easy ways to access the Twitter API from Python.
>
> **[0:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=10)** Your first step is to install the Tweepy package.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=14)** Let's navigate to the Jupyter notebook.
>
> **[0:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=17)** The first step is to run the PIP installed Tweepy command.
>
> **[0:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=21)** If you want to learn more about all of the features of Tweepy, review the documentation for the client interface.
>
> **[0:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=30)** And let's just search for it.
>
> **[0:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=34)** There we are, create tweet, let's click on it.
>
> **[0:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=37)** The create tweet function is what we'll use to send an HTTP post request.
>
> **[0:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=43)** I encourage you to review the details of the function.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=47)** Now let's return to our Jupyter Notebook.
>
> **[0:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=51)** Returning to the Jupyter Notebook, you need to import Tweepy and request, shown here in cell 47.
>
> **[0:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=58)** The request package allows you to send HTTP requests using Python, returning a response object with all the response data.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=66)** Next, shown here on lines five through eight, you'll need to pull in the environment variables containing your credentials.
>
> **[1:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=74)** If you haven't stored your credentials in the environment file, now would be the time to do so, to authenticate to the Twitter API.
>
> **[1:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=82)** Next, let's look at this download image function on line 11, I'm downloading the image that was generated using Dalle and we're calling it dalle_image.jpeg.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=97)** Next, the image needs to be uploaded to Twitter servers so that it is available to attach to a tweet.
>
> **[1:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=105)** To do this, I'm using API, another interface provided by Tweepy.
>
> **[1:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=111)** But it interfaces to version 1.1 of the Twitter API.
>
> **[1:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=116)** As of the time we were developing this video, the ability to upload an image via version two of the API is not available.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=124)** Next, we have the send tweet function on line 35.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=129)** Once the image is on the Twitter servers, we'll send the tweet.
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=134)** And notice here on line 46, we are using the create tweet function of the client interface in order to do that.
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=144)** Once you send the tweet, you can check your Twitter account to ensure the tweet was sent.
>
> **[2:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=149)** Feel free to manually delete the tweet if you're just testing and don't want it to remain on the timeline.
>
> **[2:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=155)** As you see, it's very easy to interact with the Twitter API using Tweepy.
>
> **[2:40](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/explore-twitter-api-call-and-response?u=76281980&t=160)** Now it's your turn to be hands-on with Tweepy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), interface (3), this, (1), delete (1)
> **Env Vars:** api (6), http (2), pip (1)
> **CLI Commands:** python (3), pip (1)
> **Tools:** jupyter (3)
> **UI Navigation:** navigate to (1), click on (1)
> **Prerequisites:** install (1), you'll need (1)
> **Code Identifiers:** dalle_image (1)
> **Versions:** version 1 (1)

#### Challenge: Post a tweet using the Twitter API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=0)** - In this hands-on challenge, you'll combine your AI generated image and text into a tweet sent to your followers using the Twitter API.
>
> **[0:16](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=16)** Start by going to your existing Jupyter Notebook.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=19)** Review your code to refresh your memory on how the existing code works.
>
> **[0:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=24)** You'll use Tweepy to interact with the Twitter API.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=28)** I recommend you look at the media upload function of the API interface and the create tweet function of the client interface.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=36)** Don't forget to authenticate to the Twitter API using the credentials you generated via the Twitter developer portal.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=44)** And since this is officially your last hands-on challenge, I'm including an extra credit option.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=52)** After you finish the initial challenge, turn the code into a REST API using Flask.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=59)** If you're not familiar with Flask, it allows Python developers to create lightweight RESTful APIs.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=66)** Good luck and have fun.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/challenge-post-a-tweet-using-the-twitter-api?u=76281980&t=68)** I can't wait to share my solution with you in the following video.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), rest (1)
> **Code Keywords:** function (2), interface (2)
> **CLI Commands:** python (1)
> **Tools:** jupyter (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - in (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Post a tweet using the Twitter API
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=0)** - [Instructor] Let's solve the challenge of sending your image and text summary as a tweet.
>
> **[0:11](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=11)** You're familiar with the code that summarizes the website and generates the image, so we'll pick up with installing Tweepy.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=19)** I do want to show you the two images generated.
>
> **[0:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=23)** This is the first image that was generated.
>
> **[0:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=26)** I wasn't happy with it, so I tweaked the prompt to say online course library, and this is the second image that was generated that we will send out via a tweet.
>
> **[0:39](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=39)** If you haven't installed Tweepy, you'll need to use the pip command to install it.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=44)** I've already installed it, so I'm not going to run that code again.
>
> **[0:48](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=48)** As a reminder, Tweepy is the Python package that allows us to quickly call the Twitter API from Python.
>
> **[0:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=55)** After installing it here on line one, let's import it along with the requests package that we'll use to make HTTP requests.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=66)** Next, on lines five through eight, you'll populate variables with the authentication credentials stored in the environment variables.
>
> **[1:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=74)** We'll use these variables to authenticate to the Twitter API.
>
> **[1:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=78)** Next, I've created a function called download_image here on line 11 that saves the downloaded image as dalle_image.jpg.
>
> **[1:31](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=91)** Here on line 14, I'm using the requests package to pull down the image and save it locally.
>
> **[1:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=98)** Let's scroll down to line 21.
>
> **[1:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=101)** Here I've created another function called upload_image that uploads the downloaded image to the Twitter servers.
>
> **[1:50](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=110)** On lines 23 through 29, I'm authenticating the API call.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=115)** Then here on line 30, I use the media_upload function to upload the image.
>
> **[2:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=122)** Next here on line 35, I've created a function called send_tweet.
>
> **[2:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=128)** I authenticate the call on line 36 through 39.
>
> **[2:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=133)** Call the upload_image function on line 42 and send the tweet here on line 46 using the create_tweet function.
>
> **[2:24](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=144)** The next step is to download the generated image to the notebook and then call the send_tweet function.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=153)** Let's execute this code.
>
> **[2:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=157)** The extra credit portion was to turn the code into a REST API using Flask.
>
> **[2:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=162)** I solve this using two notebooks.
>
> **[2:45](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=165)** One notebook acts as the client, while the other acts as the server.
>
> **[2:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=169)** This notebook here will act as the server responsible for running the API.
>
> **[2:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=175)** I'll scroll down over the code that you're already familiar with and we'll stop here.
>
> **[3:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=182)** The first step is to install Flask using pip, and then on line six, importing it, and then creating a Flask app as shown here on line three.
>
> **[3:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=195)** Next, in cell seven, you'll define the API route.
>
> **[3:20](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=200)** In this case, there will be a GET request to the tweets' API endpoint on lines four through seven.
>
> **[3:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=208)** I'm retrieving the argument, which is the name of the AWS service.
>
> **[3:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=214)** To summarize, this will be passed to the AI assistant so that it knows which website to summarize.
>
> **[3:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=222)** In this example, I'm summarizing websites from [amazon.com](https://amazon.com) with whatever selected service I pass in.
>
> **[3:51](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=231)** On line 10, I generate that URL using the service name and pass it to the AI assistant.
>
> **[3:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=238)** The summary returned is stored in the summary variable.
>
> **[4:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=243)** On line 14, I generate the image using the summary and the tweet is sent on line 18.
>
> **[4:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=253)** In this cell here, the server is launched, which means the API is ready to be called from the client notebook.
>
> **[4:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=261)** Let's navigate there now.
>
> **[4:23](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=263)** The client is used to test the API.
>
> **[4:26](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=266)** The code is straightforward.
>
> **[4:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=268)** In cell one, I'm importing the requests package.
>
> **[4:32](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=272)** Then in cell two, I'm passing in the URL of the API and SageMaker as the name of the AWS service I want the AI assistant to summarize.
>
> **[4:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=284)** I've already executed this code and I see that the tweet is sent.
>
> **[4:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=289)** Let's navigate to my Twitter account.
>
> **[4:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=292)** Let's verify that the tweet was actually sent, and yes, here is a tweet with a summary of SageMaker and the associated AI-generated image.
>
> **[5:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=304)** I'm going to delete this so that my timeline is not cluttered.
>
> **[5:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=309)** That's it.
>
> **[5:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=310)** That's how I solved the challenge and extra credit.
>
> **[5:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=314)** Yours probably looked similar to mine, but don't worry if it didn't.
>
> **[5:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/solution-post-a-tweet-using-the-twitter-api?u=76281980&t=318)** There are multiple ways to solve the problem.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), function (7), pass (2), case, (1), delete (1)
> **Env Vars:** api (10), aws (2), url (2), http (1), rest (1)
> **Code Identifiers:** upload_image (2), send_tweet (2), download_image (1), dalle_image (1), media_upload (1)
> **CLI Commands:** pip (2), python (2), aws (2), make (1)
> **UI Navigation:** scroll down (2), navigate to (1)
> **Prerequisites:** install (2), you'll need (1)
> **URLs:** [amazon.com](https://amazon.com) (1)
> **API Endpoints:** get  (1)


### 9. 8. Troubleshooting Errors and Getting Help

#### Understand common error codes
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=0)** - Troubleshooting and uncovering errors become easy when your error messages are simple to understand.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=8)** Thankfully, OpenAI has helpful descriptions.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=12)** Let's review some of the common troubleshooting steps and errors that you may encounter.
>
> **[0:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=17)** First, if you're receiving errors, check the OpenAI status page to see if any ongoing incidents or maintenance are happening.
>
> **[0:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=27)** There are two types of OpenAI errors, errors from the API and errors from the Python library.
>
> **[0:34](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=34)** Since we've mainly focused on the Python library, let's discuss a few common errors you may encounter.
>
> **[0:42](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=42)** If you see an API error, it's typically an error on the OpenAI side.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=47)** A temporary error, a bug, or a system outage could cause this.
>
> **[0:52](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=52)** Just try your request again in a short time to see if it clears up.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=57)** For a timeout error, it means, you guessed it, your request timed out.
>
> **[1:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=62)** This happens when your request takes too long to complete.
>
> **[1:06](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=66)** I've seen this happen when my request was very complex and required a lot of processing time.
>
> **[1:13](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=73)** It could also be caused by load on the OpenAI servers.
>
> **[1:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=77)** Try your request again after a short time.
>
> **[1:21](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=81)** Another error you may encounter is a rate limit error.
>
> **[1:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=85)** This indicates you've hit your assigned rate limit.
>
> **[1:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=88)** Rate limits are similar to throttling API requests, which limit the number of requests that a user can make in a certain period.
>
> **[1:37](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=97)** Unlike throttling, a rate limiting is not placed on a user, but on the server itself, limiting the times the API can be accessed across a given organization.
>
> **[1:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=109)** You can view the rate limits from your organization under the rate limit section of the account management page.
>
> **[1:56](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=116)** The last error we're going to talk about is an authentication error.
>
> **[2:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=121)** That means your API key is invalid.
>
> **[2:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=124)** Make sure your API key is still active and of course valid.
>
> **[2:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=129)** If there's an issue with your key, you can always generate a new one.
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=134)** It's good coding practice to programmatically handle errors with a try except block, as seen in my coding examples.
>
> **[2:22](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=142)** If you're unable to determine the root cause of the error, reach out to the OpenAI support by logging into your account and using the help button to start a conversation.
>
> **[2:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=153)** Make sure to include the following information, the model you're using, the error message and code you received, the request data and headers you sent, the timestamp and time zone of your request, and any other relevant details that may help diagnose the issue.
>
> **[2:53](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/understand-common-error-codes?u=76281980&t=173)** Now, let's talk about ways to get help from the broader OpenAI developer community.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **CLI Commands:** make (3), python (2)
> **Code Keywords:** let (3), this. (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** similar to (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - troubleshooting (1)

#### Get help from the community
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=0)** - Let's say you run into an error, followed all of the steps I mentioned in the last video, but still can't resolve it.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=8)** Now it's time to ask for help from your community.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=12)** As a developer, the first place I'll go when I need help is the OpenAI Developer Forum, which is a developer community site and not monitored for customer account or billing questions.
>
> **[0:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=25)** It's a great forum to search for similar topics.
>
> **[0:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=29)** Most times the issues you're experiencing have already been discussed.
>
> **[0:33](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=33)** If not, you can post a new question.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=36)** You can communicate with other developers, ask questions about the API, and share your thoughts.
>
> **[0:43](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=43)** Your next option for help would be a developer ambassador.
>
> **[0:47](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=47)** Developer community ambassadors host weekly office hours on specific topics like prompt design, product development, demos, and more.
>
> **[0:58](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=58)** They enjoy answering questions and helping to scale the growing application ecosystem.
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=64)** Another place I've turned for help is the OpenAI blog.
>
> **[1:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=68)** It's a great place to go for the latest model updates, short tutorials, and important announcements.
>
> **[1:15](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=75)** Don't worry, you're not alone.
>
> **[1:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/get-help-from-the-community?u=76281980&t=77)** The OpenAI community is there when you need help.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** api (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)


### 10. 9. Effectively Managing API Costs

#### Manage your spend
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=0)** - Do you remember how you're billed?
>
> **[0:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=3)** That's right.
>
> **[0:03](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=3)** Your billed based on the number of tokens sent in your prompt, plus the number of tokens in the completions returned by the API.
>
> **[0:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=12)** The best way to manage your spend is to monitor the number of tokens you've used each month.
>
> **[0:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=18)** This is simple.
>
> **[0:19](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=19)** Log into your account and view your usage tracking dashboard, which shows how many tokens you've used during the current and past billing cycles.
>
> **[0:29](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=29)** Another way to manage your spending is to configure a hard limit in your billing settings, which I've done.
>
> **[0:36](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=36)** I've added a monthly spending limit of $120.
>
> **[0:41](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=41)** Once I hit that limit, Open AI will stop serving my requests.
>
> **[0:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=46)** This works well, while I'm learning and prototyping.
>
> **[0:49](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=49)** However, be mindful that this could potentially impact production systems, and disrupt the use of your applications and impair users.
>
> **[0:59](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=59)** Instead of using a hard limit, you can enter a soft limit instead.
>
> **[1:04](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=64)** A soft limit sends an email alert once you pass the soft limit threshold.
>
> **[1:10](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=70)** The soft limit alert is just a notification that doesn't stop serving requests like the hard limit.
>
> **[1:17](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=77)** There is a disclaimer that Open AI may have a delay in enforcing limits, so you'll be responsible for any overages you incur.
>
> **[1:27](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=87)** Now, let's talk about estimating your costs once you've moved your prototype to a production environment, which can be challenging.
>
> **[1:35](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=95)** Open AI's pricing model is per 1000 tokens, so you'll need to estimate the traffic and token utilization based on your user base.
>
> **[1:46](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=106)** You'll need to think about traffic levels, the frequency that users will interact with your application and the amount of data you'll process.
>
> **[1:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=115)** A strategy to manage your costs is to reduce the cost per token by switching to a smaller model.
>
> **[2:02](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=122)** Once you have everything working with the most capable model, experiment to see if a smaller model can produce the same results with lower costs and latency.
>
> **[2:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=134)** Another strategy is to reduce the overall number of tokens required.
>
> **[2:18](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=138)** You can do this by experimenting with shorter prompts that achieve the same results.
>
> **[2:25](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=145)** Don't forget that you can use the Tokenizer tool as a way to estimate your costs.
>
> **[2:30](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=150)** As the usage of your applications grow, you'll get better at estimating your costs and managing your spend.
>
> **[2:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/manage-your-spend?u=76281980&t=158)** It won't be perfect at first, but you'll get there over time.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (2), configure (1)
> **Code Keywords:** pass (1), let (1)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - do (1)


### 11. Conclusion

#### Your OpenAI API journey
> [LinkedIn Learning](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=0)** - Congratulations on reaching the end of the course.
>
> **[0:05](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=5)** You should feel proud of what you've accomplished.
>
> **[0:08](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=8)** Thank you for going on this journey with me to build a project using ChatGPT.
>
> **[0:14](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=14)** During our time together, you've learned all about the power of OpenAI's APIs to create chatbots, summarize and generate text, create custom images from text prompts and more.
>
> **[0:28](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=28)** If you haven't pulled down the challenge solutions, I encourage you to deepen your understanding and retain your newfound knowledge through hands-on exploration.
>
> **[0:38](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=38)** You'll find extra credit options that will help you continue your learning journey.
>
> **[0:44](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=44)** You can also continue learning by watching my other course, "AI Foundations: Machine Learning," as well as courses on prompt engineering and generative AI.
>
> **[0:55](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=55)** I've enjoyed our time together.
>
> **[0:57](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=57)** Please follow me on LinkedIn so that we can stay connected.
>
> **[1:01](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=61)** I love speaking on the topic of AI and machine learning, so please consider me for your upcoming conference or event.
>
> **[1:09](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=69)** Now go and transform the world.
>
> **[1:12](https://www.linkedin.com/learning/building-a-project-with-the-chatgpt-api/your-openai-api-journey?u=76281980&t=72)** I'm Keisha Williams, and I'll see you next time.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2)
> **CLI Commands:** find (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Kesha Williams]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-a-project-with-the-chatgpt-api-4484140/tree/main)

## Skills Covered

- Chatbot Development
- OpenAI Products
- Artificial Intelligence (AI)
- Application Development

## Path Context

### In [[Improve Your Programming Skills with Artificial Intelligence]]
← [[AI Pair Programming with GitHub Copilot]] | **4 of 4**

## Appears In

- [[Improve Your Programming Skills with Artificial Intelligence]]

## Related Courses

_Courses sharing skills:_

- [[Exploring Million-Token Models with Google Gemini Pro 1.5]] — Artificial Intelligence (AI), Chatbot Development
- [[Azure AI for Developers- Building AI Agents]] — Artificial Intelligence (AI), OpenAI Products
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI Products
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI Products
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI Products

---

[↑ Back to top](#)