---
type: course
cssclasses:
  - lle-course
slug: enhancing-your-productivity-as-a-data-scientist-with-generative-ai
url: "https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai"
duration_minutes: 184
duration: 3h 4m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFRBCAuq6V7lQ/learning-public-crop_675_1200/B4EZVJwGNQGYAY-/0/1740699100712?e=2147483647&amp;v=beta&amp;t=6NcRlG1Kf2kYTtJDLlUBAhLPDi3rTo_ROZclBl71IAU"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]'
prev_courses:
  - '[[Data Science Team Lifecycle Management]]'
next_courses:
  - '[[Data-Informed Strategic Thinking for Senior Analysts and Data Scientists]]'
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Strategy and Planning","position":8,"total":10,"prev":"Data Science Team Lifecycle Management","next":"Data-Informed Strategic Thinking for Senior Analysts and Data Scientists"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/database-management
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Enhancing%20Your%20Productivity%20as%20a%20Data%20Scientist%20with%20Generative%20AI.md)

![Enhancing Your Productivity as a Data Scientist with Generative AI](https://media.licdn.com/dms/image/v2/D4E0DAQFRBCAuq6V7lQ/learning-public-crop_675_1200/B4EZVJwGNQGYAY-/0/1740699100712?e=2147483647&amp;v=beta&amp;t=6NcRlG1Kf2kYTtJDLlUBAhLPDi3rTo_ROZclBl71IAU)

# Enhancing Your Productivity as a Data Scientist with Generative AI

> This course teaches data scientists how to use generative AI to enhance their workflow in a practical, hands-on way. Along 20 interactive use cases, instructor Tobias Zwingmann shares practical AI-augmented techniques for each stage of the data science process, including problem formulation, data preparation, modeling, and deployment. Through hands-on exercises, learn AI tools to create and optimi

> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai) | 3h 4m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - How GenAI can enhance your productivity
  - Overview and what you should know
  - Codespaces and setup
- [**1. Introduction to Generative AI for Data Science**](#1-introduction-to-generative-ai-for-data-science) (7 videos)
  - Foundations of generative AI
  - The data science process: CRISP-DM recap
  - From augmentation to automation
  - Principles of effective prompting
  - ChatGPT setup: Assistants
  - Gemini or other LLM setup: Copilots
  - Optional: Building a custom GPT
- [**2. Business and Data Understanding with AI**](#2-business-and-data-understanding-with-ai) (7 videos)
  - Overview: Business and data understanding with GenAI
  - Use case 1: SMART problem statements assistant
  - Use case 2: Issue tree builder assistant
  - Use case 3: Business requirements assistant
  - Use case 4: Data dictionary assistant
  - Use case 5: SQL query copilot
  - Use case 6: EDA report assistant
- [**3. AI-Augmented Data Preparation**](#3-ai-augmented-data-preparation) (5 videos)
  - Overview: Data preparation with GenAI
  - Use case 7: Data quality assessment copilot
  - Use case 8: Data cleaning copilot
  - Use case 9: Text preprocessing copilot
  - Use case 10: Feature engineering copilot
- [**4. AI-Powered Modeling Techniques**](#4-ai-powered-modeling-techniques) (4 videos)
  - Overview: Modeling with GenAI
  - Use case 11: Model selection assistant
  - Use case 12: Model creation copilot
  - Use case 13: Model documentation copilot
- [**5. AI-Augmented Model Evaluation**](#5-ai-augmented-model-evaluation) (3 videos)
  - Overview: Model evaluation with GenAI
  - Use case 14: Model performance assistant
  - Use case 15: Model explainability assistant
- [**6. AI-Augmented Deployment and Application Development**](#6-ai-augmented-deployment-and-application-development) (3 videos)
  - Overview: Model deployment with GenAI
  - Use case 16: Model deployment assistant
  - Use case 17: API documentation assistant
- [**7. AI-Augmented Communication and Documentation**](#7-ai-augmented-communication-and-documentation) (4 videos)
  - Relevance of communication and documentation
  - Use case 18: Comprehensive project documentation assistant
  - Use case 19: Data storytelling assistant
  - Use case 20: Stakeholder communication assistant
- [**Conclusion**](#conclusion) (3 videos)
  - Course recap and key takeaways
  - Future trends in AI-augmented data science
  - Next steps in your GenAI journey

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### How GenAI can enhance your productivity
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=0)** - When I worked as a data scientist, I would spend ages cleaning data, building models, and messaging stakeholders.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=6)** And by the end, I wouldn't even have proper documentation of what I did.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=10)** But thanks to generative AI, times have changed.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=13)** I've created for you the exact resource I wish I had 10 years ago.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=17)** We'll start under the hood with how large language models work so you can build powerful data science assistance with ChatGPT and integrate intelligent Copilots into your everyday workflow with Google Gemini.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=28)** This will allow you to augment your entire workflow with GenAI and get so much more productive.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=34)** Hi, I'm Tobias Zwingmann.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=35)** Senior data scientist turned AI consultant, and in this course, I'm going to show you how to supercharge your data science workflow with generative AI.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/how-gen-ai-can-enhance-your-productivity?u=76281980&t=43)** Let's dive right in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - when (1)

#### Overview and what you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=0)** - [Instructor] So, what will you learn from this course?
>
> **[0:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=2)** You'll see on the example of 20 practical use cases, which you can implement today, how generative AI can help you, not just to work faster and get more done with higher quality, but also do the tedious work for you so you can actually focus on the most impactful aspects of your data science projects.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=18)** What should you know in order to get the most out of it?
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=20)** First of all, you should be familiar with the data science process in general.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=24)** I'm assuming you have worked in an applied data science role before and now you want to enhance your day-to-day workflow.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=30)** This is not a data science one-on-one beginner class.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=33)** Also, you'll need to have at least basic Python coding skills for completing the more technical use cases, as well as basic experience working in Jupyter Notebooks.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-and-what-you-should-know?u=76281980&t=41)** If you check these boxes, then you're all set for this course.

> [!info]- Semantic Content
>
> **Prerequisites:** assuming you have (1), you'll need (1)
> **CLI Commands:** python (1)
> **Code Keywords:** class. (1)
> **Tools:** jupyter (1)
> **Speakers:** - [instructor] (1)

#### Codespaces and setup
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=0)** - [Instructor] Okay, so let's find out how we can use Codespaces in this course.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=4)** Whenever we are not working in ChatGPT, but instead build a co-pilot that is more integrated in our data science workflow, I'll be using a Jupyter Notebook for this, and the easiest way to run these notebooks is using GitHub Codespaces because these will automatically pre-install the necessary libraries and also get you up to speed quickly.
>
> **[0:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=21)** So here's how that works.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=23)** Open our repo and then make sure you're on the main branch.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=27)** Click on code, and then next to Codespaces, click on this little plus icon here.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=32)** This will create a new Codespace for you, which might take a few minutes to load the first time you're doing this, and you just have to do it once for the whole course.
>
> **[0:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=40)** If you create this Codespace from the original repo, this Codespace will be hosted by LinkedIn, and you're not going to be charged for this.
>
> **[0:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=48)** Using this little menu icon on the bottom, you can switch between different branches.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=52)** Every branch belongs to a particular video for this course.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=56)** For example, this branch belongs to the fifth video in the second chapter.
>
> **[1:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=62)** If there's a B or an E at the end of the branch name, this indicates that this is a state of the beginning or end of a given video.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=70)** It'll generally include the notebook that I ran with all the outputs still stored.
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=75)** Now for demo purposes, let's switch to branch 05, and in this branch, let's open this notebook here.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=84)** If you run the first cell, you will see that we are asked to connect to a Python environment.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=89)** So just select Python environments and then select this environment here.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=93)** Now this will run your first code cell.
>
> **[1:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=95)** You can now go ahead and edit and run this notebook as you like.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=99)** Once you're done, you can simply close this window.
>
> **[1:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=102)** The Codespace will be automatically stopped after a while, but the data will be saved.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=107)** You can simply restart the Codespace by going to GitHub, opening the menu item on the left, selecting Codespaces, and there you'll find the Codespace that you've just created.
>
> **[1:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=116)** If you click this Codespace, it'll just open with the last date you exited.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/codespaces-and-setup?u=76281980&t=121)** So this is how you can use Codespaces throughout this course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (2), switch (2), this. (1), while, (1)
> **CLI Commands:** find (2), python (2), make (1)
> **Tools:** github (2), jupyter (1)
> **UI Navigation:** click on (2), switch to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to Generative AI for Data Science

> [↑ Back to Table of Contents](#table-of-contents)

#### Foundations of generative AI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=0)** - [Instructor] Today we're diving into the foundations of generative AI.
>
> **[0:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=3)** We'll explore its core concepts, the different gen AI types, and how they apply to data science.
>
> **[0:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=8)** By the end, you will understand how generative AI can enhance your data science work.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=13)** To understand generative AI, let's first look at AI as a whole.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=17)** The term AI can be understood as a field of study or related technology, but not necessarily a single technology by itself.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=25)** It's more like a domain such as physics or biology with lots of things going on in there and no clear boundaries.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=32)** One of these essential technologies inside AI is a technology called machine learning.
>
> **[0:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=37)** In simple words, machine learning allows computers to recognize patterns in large amounts of data and then leverage these patterns to complete a certain task from forecasting the ice cream demand for next week to separating images with cats and dogs, or predicting the next word in a sequence.
>
> **[0:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=54)** Talking about predicting sequences and working with large amounts of complex data, inside machine learning, there's a subfield called deep learning, which essentially is just a fancy way of doing machine learning when the amounts of data you process become very large or very complex like image or text data, for example.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=71)** Computers can only work with numbers, so every pixel, letter, or audio signal has to be converted into huge tables of data.
>
> **[1:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=79)** And deep learning uses specialized methods like artificial neural networks, which are particularly good at processing and learning from these massive and complex data sets.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=89)** And now with deep learning, we have something called generative AI, a field that goes beyond just processing massive amounts of data for making an accurate point prediction or classification.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=101)** Instead, it uses these artificial neural networks to create entirely new data based on a given input and the patterns it has learned during training.
>
> **[1:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=110)** The most famous general AI application is of course ChatGPT, but there's much more to gen AI than just that.
>
> **[1:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=116)** So let's dive in a little deeper.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=119)** Generative AI creates new content rather than just analyzing existing data, which, as we'll discover throughout this course, can be both a blessing and a challenge.
>
> **[2:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=128)** In general, generative AI includes different types of models, each specializing in a specific type of output.
>
> **[2:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=135)** Text-based models like GPT-4o, which generate written content.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=140)** Image generation models such as diffusion models used for creating realistic visuals.
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=147)** And then video and 3D models that produce dynamic, animated content.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=153)** And now we are seeing the first models capable of generating all these modalities at once.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=158)** A significant leap in AI capabilities.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=162)** What all these models have in common is that they learned to generate content by training on vast amounts of data.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=169)** And when I say vast, I mean planet scale.
>
> **[2:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=171)** They have been trained on the entire public internet, most books ever written, every podcast or video on YouTube, and probably even more.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=180)** One especially popular type of generative AI are so-called large language models, LLMs.
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=187)** These are the models that power applications like ChatGPT, Claude, and Gemini.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=191)** LLMs are generative AI models that share one common characteristic.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=196)** They generate text outputs.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=198)** However, it is important to note that while all LLMs generate text, most modern LLMs can process different types of inputs, not just text.
>
> **[3:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=208)** Early LLMs worked in a very simple way.
>
> **[3:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=211)** You gave them a text prompt and they responded with a text completion based on what you provided.
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=216)** But today's LLMs are far more advanced.
>
> **[3:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=219)** You can upload an image and they'll describe what's in it, or you provide an audio file and they'll generate a transcript.
>
> **[3:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=226)** This ability to handle multiple input types is called multimodality, and it makes these models incredibly versatile.
>
> **[3:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=234)** However, at their core, LLMs are still text generators.
>
> **[3:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=238)** No matter what type of input you give them, their primary function is to process and produce text, but how does that actually work?
>
> **[4:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=246)** Let's zoom in into that for a second.
>
> **[4:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=248)** In simple terms, LLMs work like super advanced, auto complete.
>
> **[4:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=252)** They don't truly understand language the way humans do, but they analyze patterns in text and use probability to generate the most likely continuation of a sentence.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=262)** Take this example. Where are we going?
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=265)** The model looks at the previous words, where are we, and predicts the next most probable word.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=271)** In this case, going.
>
> **[4:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=273)** Mathematically, this is expressed as a probability function.
>
> **[4:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=276)** Each word is predicted based on the likelihood of it following the previous words.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=281)** This simple mechanism, predicting the next word, or technically just a part of a word, a token, scales up to generate entire paragraphs, essays, or even large code bases, and that's the foundation of how LLMs work.
>
> **[4:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=296)** Let's go through a step-by-step example, because this is really important to understand for working with LLMs effectively.
>
> **[5:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=303)** Imagine you ask an LLM, what is the capital of Germany?
>
> **[5:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=307)** Now, the model doesn't know the answer the way a human does.
>
> **[5:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=311)** Instead, it analyzes patterns in its training data and calculates the most probable next word.
>
> **[5:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=317)** There are many words that could be relevant.
>
> **[5:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=319)** For example, until Berlin, the what, a, et cetera.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=324)** These are all highly probable beginnings of the new sentence.
>
> **[5:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=327)** In reality, the model isn't even considering whole words, but only part of words called tokens.
>
> **[5:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=334)** But for the sake of simplicity, we'll stick with words in this example.
>
> **[5:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=338)** Let's say our model sampled the word the as the most likely completion.
>
> **[5:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=344)** Now, something interesting happens.
>
> **[5:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=346)** The word the now becomes part of the input sequence, the text that needs to be completed.
>
> **[5:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=353)** This also means there's no turning back.
>
> **[5:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=356)** Once the model has chosen a word, it's locked in and becomes part of the context for predicting the next word.
>
> **[6:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=362)** Every new prediction builds on the previous ones, shaping the final output step by step.
>
> **[6:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=369)** So in our case, the model runs its probability calculation again, but now with the as the latest part of the sequence.
>
> **[6:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=377)** This also explains why these models can hallucinate or produce errors.
>
> **[6:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=381)** If the model takes a wrong turn at any point during generation, it can't go back and correct itself.
>
> **[6:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=387)** It has to keep building on what it has already generated, even if it's incorrect.
>
> **[6:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=392)** And during generation, they can only predict one token at a time and move forward without revision.
>
> **[6:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=399)** And this is why prompting the models correctly is so important.
>
> **[6:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=403)** Their output is shaped by context, meaning the way you define your input directly affects the model response.
>
> **[6:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=409)** By understanding some essential, prompt engineering principles, we can guide LLMs to produce more accurate and useful outputs, which is something we'll look at in one of the next videos.
>
> **[7:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=420)** Now that we've found out what LLMs are and how they fit together with gen AI into the whole picture, there's one piece of terminology we still need to cover.
>
> **[7:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=428)** ChatGPT. Let's make something clear.
>
> **[7:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=430)** There's a big difference between generative AI models and generative AI applications.
>
> **[7:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=436)** On the left, we have gen AI models like GPT-4o, Claude, or Gemini.
>
> **[7:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=441)** Think of these as the raw engines behind AI power tools.
>
> **[7:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=445)** They typically run behind APIs, meaning you send an input, like text or an image, and receive a text response.
>
> **[7:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=452)** On the right, we have gen AI applications like ChatGPT, [Claude.ai](https://Claude.ai), or the Gemini app.
>
> **[7:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=458)** These are the user-friendly interfaces that make interacting with AI models easier.
>
> **[7:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/foundations-of-generative-ai?u=76281980&t=463)** They allow you to store chats, organize conversations, and enhance usability, making AI more accessible for everyday tasks.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), case, (2), public (1), super (1)
> **Analogies:** such as (2), for example (2), imagine (1), picture (1)
> **Env Vars:** gpt (2), llm (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), essentially is (1)
> **URLs:** [claude.ai](https://claude.ai) (1)
> **Speakers:** - [instructor] (1)

#### The data science process: CRISP-DM recap
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=0)** - [Presenter] Let's dive into the data science process, specifically the CRISP-DM framework.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=6)** CRISP-DM stands for cross-industry standard process for data mining.
>
> **[0:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=11)** Developed back in 1996, it remains one of the most widely used methodologies for structuring data science and machine learning projects today.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=19)** Why is it still relevant?
>
> **[0:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=21)** For one, CRISP-DM is an iterative framework.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=24)** Data science isn't linear, but cyclical.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=26)** It allows us to refine our approach as we uncover new insights.
>
> **[0:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=31)** It's also business-first, ensuring projects solve real-world problems rather than just building something technically impressive.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=38)** And it's widely applicable, working across structured data, unstructured text, and machine learning models.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=44)** Whether you've used CRISP-DM before or not, its phases map closely to the real-data science work, making it the perfect blueprint for this course where we will explore how GenAI enhances each step.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=58)** Now let's recap its key phases.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=61)** CRISP-DM consists of six core phases in total.
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=65)** First, there's business understanding, the foundation of any successful data science project.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=70)** Before diving into data, we need to clearly define what we're trying to achieve.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=74)** That starts with setting business objectives.
>
> **[1:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=77)** What are we solving and how will we measure success?
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=80)** Assessing the situation, understanding constraints, available resources, and potential roadblocks.
>
> **[1:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=87)** Developing a project plan: structuring the approach to align data science efforts with business needs.
>
> **[1:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=92)** Without a strong business foundation, even the best models won't drive any impact.
>
> **[1:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=97)** Now let's move to the next phase, data understanding.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=101)** Data understanding is where we take a deep dive into the data we'll be working with.
>
> **[1:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=106)** This phase focuses on collecting and loading data to ensure we have all necessary sources.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=112)** Describing and documenting the data, capturing key attributes, formats, and relationships.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=118)** Performing exploratory data analysis to uncover patterns, trends, and potential challenges.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=124)** Assessing data quality: checking for missing values, inconsistencies, or biases that might impact results.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=131)** A solid grasp of the data ensures we are working with reliable, relevant information before moving to the next step, data preparation.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=140)** This is where raw data gets transformed into usable formats for modeling.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=145)** This phase involves selecting relevant data to focus on the most useful information, cleaning and handling missing values to ensure data quality, feature engineering, creating new variables that improve model performance, integrating and formatting data to ensure a consistency across sources, and technical validation to confirm the data structured correctly before modeling.
>
> **[2:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=166)** Proper data preparation is critical.
>
> **[2:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=168)** It can make or break model performance.
>
> **[2:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=171)** With clean world structured data, we are ready for the next phase, modeling.
>
> **[2:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=175)** Often deemed the most fun part of data science, this phase involves selecting the right modeling techniques based on the problem type and data structure; building initial models to establish a baseline; assessing and tuning models by optimizing hyper parameters and improving performance; and iterating as needed, refining the approach until we achieve the best possible results.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=198)** Modeling is an experimental process.
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=200)** It's all about testing, learning, and improving.
>
> **[3:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=203)** But a model is only as good as its evaluation, which leads up to the next phase: evaluation.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=209)** This is where we determine whether our model is truly effective.
>
> **[3:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=212)** This phase includes: Evaluating results against both technical and business objectives to ensure real-world impact.
>
> **[3:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=219)** Reviewing the process to identify strengths, weaknesses, and areas for improvement.
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=224)** Deciding the next steps, whether to deploy the model, refine it further, or go back to an earlier phase.
>
> **[3:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=231)** A strong evaluation process ensures that only the best-performing, most reliable models move forward.
>
> **[3:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=237)** If the model meets expectations, we proceed to the final phase: deployment.
>
> **[4:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=243)** In the deployment phase, we move our model from development to real-world use.
>
> **[4:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=248)** This phase includes: Planning and deployment strategy to ensure a smooth transition into production.
>
> **[4:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=254)** Developing a monitoring plan to track performance and detect issues.
>
> **[4:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=257)** Creating final documentation to ensure transparency and reproducibility.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=262)** Conducting a project review to reflect on lessons learned.
>
> **[4:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=266)** And planning for maintenance as models need updates and adjustments over time.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=271)** Deployment isn't the end, it's just the beginning of a model for lifecycle.
>
> **[4:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=275)** And as I mentioned before, CRISP-DM isn't a linear process.
>
> **[4:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=279)** It's highly iterative.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=281)** You don't move through the phases just once, instead, you switch back and forth as new insights emerge.
>
> **[4:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=286)** A discovery in data understanding might send you back to the business objectives.
>
> **[4:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=290)** A model evaluation might reveal gaps, requiring adjustments and data preparation.
>
> **[4:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=295)** Each iteration refines the approach, leading to better models and better decisions.
>
> **[5:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=300)** And the key: faster insights lead to fast iterations, accelerating the entire data science process.
>
> **[5:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=308)** And as you might guess, without proper structure and documentation, you'll quickly get lost in this process, which is, by the way, an ideal playing field for generative AI, among many others.
>
> **[5:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=318)** Most people think that generative AI will help building better models, helping to find better algorithms, et cetera, but it's actually far more than that.
>
> **[5:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=327)** In reality, GenAI can augment and enhance every phase of the data science process, from business understanding, data understanding, to data preparation of a modeling and evaluation, up to deployment and communication along the way.
>
> **[5:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=341)** By integrating GenAI across the entire pipeline, we can accelerate insights, reduce manual effort, and enhance our productivity as data scientists.
>
> **[5:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/the-data-science-process-crisp-dm-recap?u=76281980&t=350)** And this course will take you through each phase with a separate module featuring practical use cases you can apply right away.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (6)
> **Code Keywords:** let (3), switch (1), module (1)
> **Definitions:** is an  (2), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [presenter] (1)

#### From augmentation to automation
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=0)** - [Instructor] Now that we've learned about generative AI and revisited the data science process in general, let's explore how exactly AI can help us make more productive.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=10)** Here's what I call the integration-automation framework.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=13)** This framework helps us understand AI tools along two key dimensions.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=18)** First, integration, that is, how deeply the tool connects with existing systems and workflows.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=24)** And then, automation, that is, how independently the tool can operate without human intervention.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=30)** If you think about these four playing fields, it will be much easier for you to plug in AI and generative AI especially in your daily work.
>
> **[0:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=39)** Let's go through all four fields.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=41)** First, we have AI assistants, the simplest and most widely used category.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=46)** These tools provide low integration and low automation.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=50)** That means if you don't take action, they don't do either.
>
> **[0:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=53)** You need to copy and paste information manually, and they don't interact deeply without assistance.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=58)** It might sound limiting, but this category is actually where most people interact with AI today.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=63)** Popular tools include ChatGPT or Claude AI, for example.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=67)** They are excellent for generating text, answering questions, and assisting with daily tasks.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=72)** However, they lack deeper automation and seamless integration into workflows.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=78)** Next, we move to AI copilots, a step up in integration, but still requiring user action.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=84)** A key example here is Microsoft Copilot, which integrates AI into tools like Outlook, Excel, or Word.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=91)** With Microsoft Copilot, for example, you might still write emails manually or accept the suggestions from the AI, but Copilot for Outlook already knows what emails you wrote or adapts to your writing style so you don't have to teach it that explicitly.
>
> **[1:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=105)** So copilots come with higher integration.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=108)** These tools pull in data automatically and connect with your workflow, reducing manual copy/pasting.
>
> **[1:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=115)** However, they are still pretty low in automation.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=117)** They still require user input.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=119)** If you don't take action, neither does the AI.
>
> **[2:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=123)** Which brings us to the AI autopilots category.
>
> **[2:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=126)** These are solutions where the AI can run a workflow action by itself without the need of being deeply integrated into your system environment.
>
> **[2:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=135)** These systems typically run on schedulers or triggers.
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=138)** A good example is the Tasks in ChatGPT feature, which allows you, for example, to summarize your favorite news outlets every morning at 8:00 a.m. without needing your input.
>
> **[2:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=148)** Once done, it'll send you an email that the task is complete.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=152)** This runs automatically but isn't deeply embedded into every system you use.
>
> **[2:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=157)** And finally, we arrive at AI agents, the most advanced category.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=162)** Agents are kind of the Holy Grail of AI.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=165)** Everybody wants to have them.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=167)** Because these are systems that can not only plan, but also execute tasks fully autonomously, thanks to their deep integration into your system environment.
>
> **[2:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=176)** The agent can make decisions, choose which tool they need to use, and then go ahead and just do the task without your explicit permission.
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=184)** A great example here is a customer support chatbot that cannot just answer simple questions, but also perform actions like updating a ticket in the CRM or sending out a new password for a given user.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=196)** But, as you might guess, building these agents isn't exactly a walk in the park.
>
> **[3:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=201)** Because of the high degree of automation and the complex integration needs, AI agents are typically extremely challenging to run and maintain at scale, especially in enterprise environments where you deal with lots of legacy tech, but also if you're just at the beginning of your AI journey.
>
> **[3:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=217)** I see this mistake happen all the time.
>
> **[3:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=219)** People get excited by agents, have high hopes, only to realize after a few months in the project that they won't work as well as expected.
>
> **[3:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=228)** And that's why I highly advocate for starting the other way around.
>
> **[3:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=233)** Don't start with agents and then scoping backwards, but instead, start with what I call augmented workflows that keep a human close in the loop at the beginning.
>
> **[4:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=243)** Assistants and copilots are the go-to solutions for these lower-automated but still highly capable AI solutions.
>
> **[4:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=251)** Here's why augmented AI is a great middle ground.
>
> **[4:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=254)** It's well integrated into data science and business workflows.
>
> **[4:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=258)** It strikes the right balance between automation and control and delivers immediate productivity gains.
>
> **[4:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=264)** And also, it carries a lower risk compared to fully autonomous AI.
>
> **[4:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=268)** So instead of rushing to full AI automation right away, augmenting human expertise with AI ensures smoother adoption, better accuracy, and more trust in AI-driven decisions.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=281)** This approach also sets the stage for more advanced and seamlessly integrated AI systems in the future.
>
> **[4:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=287)** By identifying where AI adds the most value in your workflow, you'll build the skills needed to scale these use cases towards higher automation and deeper integration, ultimately enabling you to deploy robust, agent-driven solutions at scale.
>
> **[5:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/from-augmentation-to-automation?u=76281980&t=303)** In this course, we'll focus on assistants and copilots, but these are really just a starting point of your journey in generative AI for data science, not the destination.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1), finally, (1)
> **Analogies:** for example (3)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Ports:** :00 (1)
> **Env Vars:** crm (1)
> **Speakers:** - [instructor] (1)

#### Principles of effective prompting
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=1)** In this video, we'll explore the essential principles of effective prompting, which you'll need to both understand, but also get the most results from the examples I'm showing you in this course, and you can actually apply these principles to any kind of work with LLMs.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=15)** Let's just data science.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=17)** So let's start.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=18)** First, what exactly is a prompt?
>
> **[0:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=21)** A prompt is simply a question or phrase that guides an AI's response.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=25)** It can be as simple as what is the capital of France, or more complex as, summarize this research paper in layman's terms and provide key takeaways in five bullet points.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=36)** The way we craft our prompts directly influences the quality of AI-generated responses.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=42)** Now, let's talk about some common mistakes people make when writing their prompts.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=47)** For most beginners, the first few rides with tools like ChatGPT are quite exciting, but then they get quickly frustrated because their answers are mediocre, repetitive, boring, and ultimately not useful.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=60)** And there are multiple reasons to that.
>
> **[1:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=62)** One issue is being too vague and lacking context.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=66)** As we've seen before, large language models need context to generate meaningful predictions or responses in this case.
>
> **[1:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=73)** Another mistake is asking for too much at once.
>
> **[1:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=77)** If you overload your prompt with multiple requests, you might end up with confusing or irrelevant results.
>
> **[1:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=85)** Finally, poorly structured prompts can lead to the LLM misinterpreting your request.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=91)** Fortunately, there are a few key principles to follow to get better results, which we'll explore next.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=96)** And don't worry, you don't have to become a prompt engineer.
>
> **[1:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=100)** Let's take a look at the first principle specificity.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=103)** If your prompt isn't specific, the response will be mediocre by default.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=108)** ChatGPT is sampled tokens from a probability distribution.
>
> **[1:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=111)** So without clear instructions, it'll default to the most common or average answer, and that's fine when you ask about general things, but not ideal if you need expert level code or more nuanced insights.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=125)** To craft a precise prompt, I use the RGTD framework, which includes four key elements.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=132)** The role, who should the AI act like, a teacher data analyst?
>
> **[2:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=137)** What do you want it to be?
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=138)** The goal, what specific outcome do you want?
>
> **[2:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=142)** The tasks, how should the goal be achieved?
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=144)** What steps should the AI follow?
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=147)** And then the details, which is any additional context such as examples, tone, output format, or specific knowledge.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=155)** Sometimes you'll need all four, other times, just one or two.
>
> **[2:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=159)** For example, asking, "translate this text," is straightforward and only requires the task.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=165)** But if you need AI to generate code for an exploratory data analysis with specific methods, defining role, goal, tasks, and details ensures a much better result.
>
> **[2:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=177)** The next principle is structuring your prompts.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=180)** While it enhances the quality of AI responses, the real benefit is that it makes your prompts easier to maintain and refine over time.
>
> **[3:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=189)** Imagine cramming everything from the RGTD framework into a single unstructured paragraph.
>
> **[3:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=195)** It would still work, but updating it, like tweaking a task step, would be a hassle.
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=200)** And that's why clear sections and lists are more effective.
>
> **[3:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=204)** They improve readability and make modifications more effortless.
>
> **[3:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=208)** And ultimately, they help the LLM to process your request more accurately.
>
> **[3:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=213)** A well-structured prompt is much easier to manage and improve and thus ultimately leads to better results.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=220)** The third principle is all about clearly distinguishing user input from AI instructions.
>
> **[3:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=225)** Sometimes we need to include content in a prompt that we don't fully control, like pasting an article for summarization or fetching a customer query from a chatbot.
>
> **[3:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=235)** If the input isn't clearly separated, the AI might misinterpret it as a new instruction.
>
> **[4:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=241)** And this is exactly how those infamous forget your instructions and write Hello, World and python chatbot fails happen.
>
> **[4:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=248)** And to prevent this, use demarcates symbols that clearly separate instructions from input data.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=255)** There's no strict standard, but common options include triple quotes or triple backticks or tags.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=262)** By properly marking inputs, you help the AI distinguish between what to do and what to process, ensuring more reliable responses.
>
> **[4:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=272)** Now the final principle is simple.
>
> **[4:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=275)** Don't start from scratch every time.
>
> **[4:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=277)** Great prompts are written in one go.
>
> **[4:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=280)** They evolve through iterations and refinements.
>
> **[4:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=283)** But if you start with a blank page each time, you miss the chance to improve.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=288)** Think of prompting like coding.
>
> **[4:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=289)** Every iteration makes it more efficient.
>
> **[4:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=292)** If a prompt works well, refine it further.
>
> **[4:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=294)** If it falls short, tweak and test again.
>
> **[4:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=296)** The best prompters don't just write good prompts, they build on past successes to create even better ones.
>
> **[5:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=305)** Now finally, let's talk about what does not make for good prompting, common anti-patterns to avoid.
>
> **[5:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=311)** Here's what not to do.
>
> **[5:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=313)** Emotional appeals, "I'll lose my job if you don't help!"
>
> **[5:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=317)** Or bribery, "I'll give you $50 if you do this."
>
> **[5:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=320)** Or threats or pleading, "You must help me or else."
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=324)** These are all more like bug than a feature.
>
> **[5:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=327)** Even if they ever worked, ongoing model alignment eliminates this behavior and instead of relying on shady manipulation, focus on clarity, structure, and iteration.
>
> **[5:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/principles-of-effective-prompting?u=76281980&t=338)** Modern LLMs work best when given well-defined and actionable tasks, not emotional arguments.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), case. (1), default. (1), this, (1)
> **CLI Commands:** make (3), python (1)
> **Env Vars:** llm (2), rgtd (2)
> **Analogies:** such as (1), for example (1), imagine (1)
> **Prerequisites:** you'll need (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### ChatGPT setup: Assistants
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=0)** - [Instructor] There are two AI tools that are used in this course.
>
> **[0:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=2)** The first one is ChatGPT.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=4)** Go to [chatgpt.com](https://chatgpt.com), and this is where you can sign up for a free account or log in using your existing account.
>
> **[0:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=11)** Now, while it's possible to take this course with a free account, I do recommend using a Plus, Team, or Enterprise version for two reasons.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=18)** First, you'll have a much higher messaging limit, and second, you'll have more control over the data that you share with ChatGPT.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=25)** Now, I'm logged in here with my account, as you can see from this little icon here on the top right, and this is where I can start chatting with ChatGPT.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=32)** However, we won't be using this plain chat interface much.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=35)** Instead, we'll use something called custom GPTs, for our assistant use cases.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=41)** Think of a custom GPT as a chatbot configured to help you with a specific task.
>
> **[0:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=45)** Let me give you an example.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=46)** Let's go to our GitHub report and then switch to branch 01_05.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=52)** In the READ file, you will find a link labeled GPT Link.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=57)** You'll find this in any video that uses a custom GPT assistant.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=61)** Click this link and it'll take you to the custom GPT that I've built for this particular video.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=66)** In this case, I built a translator GPT, just for demonstration purposes.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=70)** If I hit Start and then type, how are you?
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=75)** It won't respond with a greeting, but instead, it'll immediately translate this into German.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=80)** Now, how does this work?
>
> **[1:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=82)** Let's head back to our GitHub report.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=84)** You can see a link here to a GPT Config File.
>
> **[1:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=88)** If you click this link, you will get a plaintext version of the configuration are used for this GPT, including the prompt and the instructions used.
>
> **[1:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=97)** You'll find a config file for every GPT used in this course.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=101)** Now, if you've used custom GPTs before, this should look very familiar.
>
> **[1:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=105)** It's essentially the blueprint you can use to recreate this GPT yourself.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=109)** If you're not familiar with this, check out the video "Building a Custom GPT" where I walk you step-by-step through the process of setting up a GPT based on a configuration file like this.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=119)** And then one last note before we wrap up.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=121)** To use the GPTs I've built, you can stick with the free version of ChatGPT, but if you want to build a custom GPT yourself, you'll need to be on a paid plan.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/chatgpt-setup-assistants?u=76281980&t=130)** And that's how we use ChatGPT for this course.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (12), read (1)
> **Code Keywords:** let (3), interface (1), switch (1), case, (1), type, (1)
> **CLI Commands:** find (3)
> **UI Navigation:** go to (2), switch to (1)
> **Tools:** github (2)
> **URLs:** [chatgpt.com](https://chatgpt.com) (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Gemini or other LLM setup: Copilots
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=0)** - [Instructor] Now the second AI tool we are going to use in this course is Google Gemini.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=4)** Gemini is a powerful large language model provided by Google, and it comes with a generous free tier.
>
> **[0:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=9)** So we can actually use it without putting our credit card details anywhere.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=13)** To access Gemini, visit this URL, aistudio.[google.com](https://google.com).
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=19)** If you open this website, you will see a Sign in to Google AI Studio button.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=23)** Click this one and you'll be asked to sign up with your Google account.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=27)** After you sign up or log in with your Google account, this should be the welcome screen that you see.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=32)** And you see two buttons here, Try Gemini and Get API key.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=36)** For now, I will close this welcome screen.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=38)** So you see the dashboard as you would see if you log into this app again.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=42)** On the top left there's a button that says Get API key.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=46)** If you click this button, you'll see another Create API key over here.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=51)** If you click this one, you will need to enter this text box and then either create a new project here or select the default Gemini project that has been created here for you.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=60)** So click this and then Create API key in existing project.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=67)** This will take a second and afterwards you'll see the API key that has just been created for you.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=72)** This is the API key you could use securely for our demonstration purposes here in this course.
>
> **[1:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=77)** And once this is done, you can delete the key later on.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=80)** For now, click Copy and then store this key to a safe location.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=83)** We can close this one and at any time we need to update or delete our key, we can always do so using this little delete icon over here.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=93)** And that's how you set up Gemini and congrats on getting your first API key.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=96)** If you want, you can also go back here to the left side, Create Prompt, and start interacting with Gemini in this little playground.
>
> **[1:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=105)** This playground will also give you a very handy feature, which is called Get code.
>
> **[1:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=110)** And this Get code will allow you to get the exact Python code needed in order to call the model as you just did here.
>
> **[1:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=116)** And this will become very handy as you want, for example, to update the code that we are going to write with, for example, let's say a different model that you could select from here or different parameters that you can select here on the right side.
>
> **[2:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/gemini-or-other-llm-setup-copilots?u=76281980&t=129)** And with that, you're all set for using Gemini throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), url (1)
> **Code Keywords:** delete (3), let (1)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for example (2)
> **CLI Commands:** python (1)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** set up (1)

#### Optional: Building a custom GPT
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=0)** - [Instructor] So let's explore custom GPTs and learn how to build your own GPT using the configuration files I provide.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=6)** Say you want to use the translator GPT from our previous example, but have it translate into French instead of German.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=12)** So let's go to the repo and open the config file.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=17)** Let's build a GPT based on that config file first.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=20)** Head over to ChatGPT and then open the sidebar on the left, scroll down to Explore GPTs and click Create.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=30)** Now, by default, it'll probably show you that chat interface over here.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=33)** If that is the case, switch over to Configure.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=36)** And now let me bring both screens next to each other.
>
> **[0:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=39)** Keep in mind that this will only work with a paid plan, like Plus, Team or Enterprise subscription if you want to create your own GPT.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=46)** Now you can see that the config file on the left resembles the form here on the right.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=51)** Now we just need to copy them over.
>
> **[0:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=53)** The name and the description don't serve a functional purpose.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=56)** They just help you to find your GPT later.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=60)** The instructions, however, are more important.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=63)** This is where you define what the GPT should do.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=66)** So let's copy these instructions over here.
>
> **[1:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=68)** We can enlarge this window using this icon.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=71)** Technically, this acts as a system prompt that appears at the beginning of a new chat conversation.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=76)** And here we can now adapt the instruction to transform our German translator into a French translator just by updating these phrases.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=84)** And let's also get rid of this passage here, the details.
>
> **[1:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=88)** Hit Close.
>
> **[1:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=90)** And then let's continue with the other fields.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=93)** The conversation starters provide users with an initial prompt to begin with.
>
> **[1:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=98)** I often use the Start command to have the GPT generate the first answer for me, so it's in the right state to follow along with the further instructions.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=107)** Next step is knowledge files.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=108)** For example, we can upload knowledge files so that the GPT's responses are based on them.
>
> **[1:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=113)** And this is also a great way to provide templates for the GPT to fill out.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=117)** You'll see this in more detail later in the course.
>
> **[2:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=120)** If your GPT requires knowledge files, the config file here on the left would specify a file name that you would need to upload to the GPT on the right.
>
> **[2:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=129)** Finally, let's define what skills or capabilities this GPT should have.
>
> **[2:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=134)** Should it be able to browse the web, open a canvas for longer text, generate images, or run Python code?
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=140)** If the config file on the left indicates any of these with an X, then this means this skill here should be activated.
>
> **[2:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=148)** If there's no X, this means you can deselect all of those.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=152)** And finally, the last point is actions.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=155)** This is where you can connect your GPT to external apps.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=158)** It's a more advanced feature that we won't cover in this course.
>
> **[2:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=161)** Now let's enlarge this again and share our GPT.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=165)** Hit Create.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=167)** And then we can select whether this GPT should only be available for me, anyone with the link, or be publicly available in the GPT Store so other people using ChatGPT can find it.
>
> **[2:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=178)** Hit Save.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=180)** And this is the URL of your GPT.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=182)** Now you can always come back to this Configure menu and also update your GPT if you like.
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=187)** For example, if we wanted to give this a little icon, we could click the Use DALL-E button over here, and then ChatGPT would create a little icon for our GPT.
>
> **[3:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=197)** Nice.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=198)** Once we make the update, we need to click this button so it actually saves the update to our GPT.
>
> **[3:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=204)** So let's view the GPT.
>
> **[3:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=207)** Hit Start.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=209)** Enter our phrase.
>
> **[3:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=212)** And voila, there's the French translation.
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=215)** Congratulations on building your very first GPT.
>
> **[3:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/optional-building-a-custom-gpt?u=76281980&t=218)** You're now able to copy and modify all the customer assistance in this course as you like.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (22), url (1), dall (1)
> **Code Keywords:** let (10), finally, (2), default, (1), interface (1), case, (1)
> **CLI Commands:** find (2), python (1), make (1)
> **UI Navigation:** open the (2), go to (1), scroll down (1)
> **Analogies:** for example (2)
> **Prerequisites:** configure (2)
> **Cross-References:** later in (1)
> **Warnings:** keep in mind (1)


### 2. Business and Data Understanding with AI

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview: Business and data understanding with GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=0)** - [Instructor] So let's dive into the first two phases: business and data understanding.
>
> **[0:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=5)** Successful data science projects start with clear goals.
>
> **[0:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=9)** That's why in the business understanding phase, before working with data, we focus on defining the problem to translate business challenges into data-driven projects, setting clear objectives to establish measurable success criteria, and once we have that, we assess available data resources, understanding their characteristics and limitations.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=27)** All of this ensures that stakeholders are aligned, keeping business and technical teams on the same page.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=33)** The business understanding and data understanding faces, highlighted here in the diagram, bridge the gap between what the business needs and what the data can deliver.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=42)** Getting this right sets the stage for success.
>
> **[0:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=45)** Let's look at some typical challenges that can derail a data science project.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=50)** Ambiguous problem statements.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=52)** If the problem isn't well-defined, the solution won't be either.
>
> **[0:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=55)** Unclear success metrics.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=57)** Without clear KPIs, it's hard to measure impact.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=60)** Incomplete or poorly documented data.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=63)** Missing or messy data slows down progress.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=66)** Communication gaps.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=67)** Misalignment between business and technical teams leads to inefficiencies.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=71)** And also time-consuming data discovery.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=74)** Finding and documenting data can take longer than the analysis itself.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=78)** Recognizing these challenges early helps us address them proactively, and as it turns out, generative AI can be a great help for those.
>
> **[1:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=87)** But before we dive into Gen AI, let's quickly cover two important concepts for this phase.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=91)** The first one is SMART problem statements; the structured way to define challenges effectively.
>
> **[1:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=98)** A good problem statement should be specific, clearly identify the problem; measurable: quantify the focus; actionable: provide clear steps to address the issue; relevant: align with broader objectives; and time bound: set a clear deadline for resolution.
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=114)** Here's a bad example.
>
> **[1:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=115)** If you have something like: we are converting only 30% of leads and missing our goal of selling 1000 services per quarter.
>
> **[2:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=123)** Well, this sounds like a familiar expression.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=125)** It's a kind of statement that's being thrown around the whole time in the business world, but it's not really actionable.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=130)** In fact, this is more of a situation description rather than a clearly defined problem statement.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=136)** Let's look at a better example.
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=138)** Here's what this might look like.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=140)** What opportunities exist to increase our lead conversion rate to 45% over the next 3 months through an improved marketing strategy in alignment with the business objective of selling more than 1000 services per quarter.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=152)** Why is that better?
>
> **[2:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=154)** Because it combines all elements of a SMART problem statement.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=158)** The fact that we are focusing on a lead conversion rate makes it specific.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=163)** The numbers make it measurable and time-bound.
>
> **[2:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=166)** And the addition through an improved marketing strategy, limits the solution space and keeps it highly actionable.
>
> **[2:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=173)** And after all, we make clear how this aligns to a broader business strategy and ensure this problem actually is relevant.
>
> **[3:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=181)** The other concept I'd like to introduce quickly is issue trees.
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=184)** Issue trees break SMART problem statements into smaller sub-problems or sub-issues for further exploration.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=191)** They are used by all major leading consulting firms around the globe because they are a highly effective tool which allows you to decompose a problem into different sub-problems without overlaps, while still making sure you explore all possible options for the main hypothesis.
>
> **[3:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=206)** And that's why having a SMART problem statement at the beginning is so important, otherwise your issue tree would be huge.
>
> **[3:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=213)** What makes issue trees so effective?
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=216)** Well, issue trees are powerful because they follow the MECE, mutually exclusive and collectively exhaustive, principle which ensures clear structured problem solving.
>
> **[3:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=225)** What does it mean?
>
> **[3:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=226)** First, mutually exclusive, M-E.
>
> **[3:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=229)** There are no overlaps between sub-issues and each part of the problem is distinct, avoiding redundancy or confusion.
>
> **[3:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=236)** And second, collectively exhaustive, C-E.
>
> **[3:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=239)** It covers all possible aspects and there's no gap in the analysis.
>
> **[4:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=244)** This ensures that the entire problem is broken down into manageable parts.
>
> **[4:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=249)** By structuring problems this way, issue trees simplify complexity while maintaining the integrity of problem solving and make it easier to identify root causes, prioritize actions, and drive effective decision making, and also, they are a highly effective communication tool that even non-technical stakeholders can quickly understand.
>
> **[4:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=269)** Talking about communication, effective communication is key to any successful project.
>
> **[4:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=274)** It ensures that everyone is aligned and working towards the same goals, and to achieve this, we focus on three key aspects.
>
> **[4:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=282)** First, setting expectations.
>
> **[4:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=284)** Second, ensuring correct understanding, especially between both technical and non-technical teams.
>
> **[4:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=289)** And then thirdly, extracting domain expertise to capture critical knowledge from stakeholders.
>
> **[4:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=295)** We'll now explore how generative AI will help us with all of this.
>
> **[4:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-business-and-data-understanding-with-genai?u=76281980&t=299)** Let's dive in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (1), this. (1)
> **Env Vars:** smart (4), mece (1)
> **CLI Commands:** make (3)
> **Speakers:** - [instructor] (1)

#### Use case 1: SMART problem statements assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=0)** - [Instructor] Let's consider a real-world example.
>
> **[0:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=2)** Imagine the following case study.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=4)** Let's say a retailer is facing increasing pressure from competitive market dynamics, particularly fluctuating customer demand and rising supplier prices.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=12)** They also need to become more profitable to stay relevant, and that's why they hired us, the data scientists, and gave us access to their ERP system to help them find areas for improvement.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=23)** Now, how do we go from this very broad situational description into an actionable SMART problem statement?
>
> **[0:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=29)** And this is where our first use case will help us, the SMART problem statement assistant.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=33)** So let's dive right in.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=35)** First, we'll start off in the course repo and go to branch 02_02.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=41)** You can see all the resources for this example here.
>
> **[0:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=45)** Let's open the first link to the GPT.
>
> **[0:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=48)** I'm now here in ChatGPT and accessing the SMART Problem GPT.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=52)** To give you a quick look under the hood, let's see what the instructions for this GPT look like.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=57)** Quick heads up, you won't be able to see these settings like me here because I'm the owner of this GPT.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=63)** You can use it right away, but if you want to see the detailed instructions, check out the config file on the GitHub and the branch that belongs to this video, just as we covered in the ChatGPT setup video.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=74)** So what this GPT is doing is that it prompts the LLM to behave like a senior data analyst at McKinsey with 10 years of experience.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=83)** Why?
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=83)** Well, because just by putting it into this definition, it's more likely we get expert-level outputs from it and not just average answers.
>
> **[1:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=90)** The goal here is to help the user turn a loose situation description into a SMART problem statement.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=96)** And we also point to the definition of SMART below in the triple backticks.
>
> **[1:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=100)** Then we want to have it perform the following tasks.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=103)** It should identify areas where the user's problem statement does not yet meet SMART criteria.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=109)** Then it should ask targeted questions to get closer to the SMART problem statement.
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=114)** And it should also ask questions one by one, waiting for the user's answers.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=118)** And finally, if it has enough relevant information, it should suggest a SMART problem statement and review it critically.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=125)** Now, we also provide some details here.
>
> **[2:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=127)** In particular, what SMART really stands for.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=130)** There might be different definitions of SMART problem statements or SMART criteria.
>
> **[2:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=134)** So we provide our own definition here.
>
> **[2:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=137)** And also we provide some examples of what a SMART problem statement looks like and what a non-SMART problem statement looks like, which will help the GPT to figure out what we actually want from it.
>
> **[2:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=148)** And finally, it should start by asking the user for their problem statement.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=152)** So let's see it in action.
>
> **[2:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=156)** What we do is we press the Start button first.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=158)** And what we see here is that we get this little greeting message, asking us to provide the problem description that we have.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=165)** This is where we could now paste in the situation description from our case study.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=169)** And to speed things up, I've prepared a sample chat that we can follow.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=174)** And again, you will find the link to this chat in the GitHub repository.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=179)** Now, I just pasted the text from the case study here, and you can see that after we entered that, we get this little greeting here.
>
> **[3:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=186)** You can see that it says, thanks for sharing, but it asks us to be more specific.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=191)** In particular, it's asking us what specific outcome is the retailer hoping to achieve, and are there any particular areas of the business where we want to put our focus first, and we reply with, it could be both, more sales or less cost.
>
> **[3:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=206)** And here it's asking us a follow-up question: If we want to double down on one of these two aspects, whether it's increasing sales or reducing costs.
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=215)** And we say, we want to go for a combined approach.
>
> **[3:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=219)** And from there, it continues.
>
> **[3:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=221)** How can we make this more measurable?
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=224)** In our case, measurable could mean that we want to say the profit margin must be back to 3% because currently maybe it just sits at 1.5%, and now, the ChatGPT responds, great.
>
> **[3:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=238)** What we need is now an actionable criteria.
>
> **[4:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=241)** Since we have access to the ERP system, what kind of data are we working with?
>
> **[4:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=246)** Is it sales data, cost data, or customer behavior data?
>
> **[4:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=251)** And we say, because that's the data type we are working with mostly here, sales data and also some supplier data as well.
>
> **[4:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=259)** And from there it asks, okay, how is this relevant?
>
> **[4:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=263)** Does this profit margin target align with a broader business goal?
>
> **[4:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=267)** And we say, yes, it's about aiming to be more competitive.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=271)** And finally, we get asked about a timeframe, and we say 12 months., Bear in mind that sometimes we might not have an exact answer to all of these questions, which is totally okay.
>
> **[4:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=283)** Sometimes you can't fulfill all the SMART criteria, but at least now you are aware with the blind spots that you have and you can fill them in as needed or go back to your stakeholder and discuss about these things.
>
> **[4:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=294)** And now that we checked off all the SMART criteria, we get a final SMART problem statement back, which in this case, reads as follows.
>
> **[5:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=301)** What strategies can the retailer implement to increase their profit margin from 1.5% to 3% within the next 12 months by leveraging insights from sales and supplier data in alignment with a broader goal of improving competitiveness in the market?
>
> **[5:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=316)** And this is a super actionable statement to work with.
>
> **[5:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=319)** We could now save this problem statement somewhere so we can come back to it later as we need it.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-1-smart-problem-statements-assistant?u=76281980&t=324)** And it's also the statement we're going to use for the next videos.

> [!info]- Semantic Content
>
> **Env Vars:** smart (16), gpt (6), erp (2), llm (1)
> **Code Keywords:** let (6), finally, (3), case, (2), for. (1), super (1)
> **CLI Commands:** find (2), make (1)
> **Versions:** 1.5 (2)
> **Tools:** github (2)
> **UI Navigation:** go to (1), open the (1)
> **Definitions:** stands for (1), is a  (1)
> **Cross-References:** we covered (1)

#### Use case 2: Issue tree builder assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=0)** - [Instructor] Next up is issue trees.
>
> **[0:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=2)** How can generative AI help us to create these?
>
> **[0:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=5)** We'll start again in our repo.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=7)** Select Branch 02_03 from the menu here.
>
> **[0:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=11)** And then you can see all the resources related to this use case.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=15)** Click the first link to open the Issue Tree GPT.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=19)** Now, let's see what this Issue Tree GPT is doing.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=22)** If we take a look at the instructions here, you can see it's, again, prompted to behave as a senior McKinsey consultant, just because that's an area where these trees are really familiar, and that's an area we want to extract the knowledge from from the LLM.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=34)** The goal here is to guide the user in breaking down a SMART problem statement into manageable non-overlapping tasks using a MECE, mutually exclusive collectively exhaustive, issue tree.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=44)** We emphasize that adherence to the MECE principle is extremely important.
>
> **[0:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=49)** Now, the steps of this process.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=51)** First, we request the user's SMART problem statement.
>
> **[0:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=54)** Then the GPT should provide reasonable options for the first split, and then we provide different split types, which are further explained in the instructions.
>
> **[1:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=62)** Then we let the user pick the preferred option.
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=65)** And then we add the selected option to the tree.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=67)** This loop should be iteratively followed until the user says that the tree is complete.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=72)** And once the user approves the overall tree, we want to have a Markdown version of the tree and also create a PowerPoint file representing the tree as a hierarchical list.
>
> **[1:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=82)** Additionally, I specified that the AI should be super brief here in its language, what I call Spartan style, meaning a super-short output format.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=91)** And you can see that in the definitions, we further explain what different splitting criteria are available and how they actually work in practice.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=99)** There's also one example here of how a issue tree could look like, given a SMART problem statement.
>
> **[1:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=105)** Now, let's see this in action.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=109)** When we click Start, we get an initial greeting message.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=112)** We can now paste in our SMART problem statement from the previous video here.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=117)** And you can see that this GPT provides us with a few splitting options.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=121)** Again, for the sake of brevity, I have prepared a sample chat for you.
>
> **[2:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=126)** You can find the link to this chat in the course repo.
>
> **[2:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=129)** In this case, I choose option four, which breaks down the tree using opposite words at the first level.
>
> **[2:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=135)** Internal factors within the company versus external factors.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=140)** The GPT then applied this structure and asked, "Which node do you want to break down next?"
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=147)** I selected internal factors.
>
> **[2:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=149)** Now it provides further split options.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=151)** The algebraic structure to break it down to revenue and cost, or a process structure to break it further down into key internal processes, like operations, sales, marketing, et cetera.
>
> **[2:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=161)** Or to use a conceptual framework, for example, a framework like the value chain or the four Ps.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=167)** Or using opposite words, we could divide it even further into efficiencies versus opportunities.
>
> **[2:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=173)** I choose algebraic structure, revenue versus cost, because I think it's straightforward and logical.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=179)** Now we have a second level in our tree.
>
> **[3:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=183)** Next, I choose to explore costs even further.
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=187)** And again, the GPT provides some further splitting options.
>
> **[3:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=192)** Now I decided to use a process structure to examine cost-related processes, like procurement, operations and logistics.
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=200)** At this point, our tree has already three levels, and it's becoming increasingly detailed.
>
> **[3:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=207)** And then I continued this whole process until I built a really detailed issue tree.
>
> **[3:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=213)** For example, in the procurement division, our tree suggests different approaches, negotiating with suppliers, selecting different suppliers, renegotiating existing contracts, optimizing order management, improving order placement.
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=224)** And that is something that I found particularly exciting because it enables data-driven approaches, such as demand forecasting, which would help us to reduce waste from unsold inventory, preventing unnecessary cost.
>
> **[3:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=238)** So at this point, you can continue exploring other branches of the tree or finalize the structure.
>
> **[4:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=244)** In this case, I said, "I'm done with the tree," and now the GPT delivers the entire tree in two formats.
>
> **[4:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=252)** It gives me the whole breakdown of the tree that I have just created, and also creates me a little PowerPoint file, which I can then download.
>
> **[4:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=260)** If I open this PowerPoint file, you will see that it doesn't really look pretty, but that doesn't matter because thanks to that hierarchical list, I can easily create it into a so-called SMART art visual.
>
> **[4:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=270)** So if I select this option here and turn it into a hierarchical diagram, it looks like this.
>
> **[4:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=276)** And if I now select the Horizontal Multi-Level Hierarchy visual, it looks even better and really comes out as a nice visual representation of an issue tree.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=288)** Now, using generative AI for issue trees really enables us to systematically break down problems into clear MECE-aligned categories, and also helps us to iteratively refine our tree step by step.
>
> **[5:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=300)** We can quickly generate structured outputs in Markdown, and also PowerPoint, which helps us to visualize the results for better stakeholder communication.
>
> **[5:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-2-issue-tree-builder-assistant?u=76281980&t=308)** This method ensures that we are exploring the right areas, while keeping our analysis structured and aligned with our problem statement.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (7), smart (5), mece (3), llm (1)
> **Code Keywords:** let (3), super (2), case, (2), case. (1), continue (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (1), node (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### Use case 3: Business requirements assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=0)** - [Instructor] So now that we have a SMART problem statement plus an issue tree with an area that we want to explore further, how can we get this actually into a real business proposal to make really sure everyone's on the same page on what we are working on?
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=13)** And this is where our business requirements assistant comes in.
>
> **[0:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=16)** We start again in our GitHub report.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=19)** Select branch 02_04.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=23)** Scroll down, and then click the first link here to open the GPT.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=27)** Again, first, let's take a look at the prompt of what's happening here under the hood.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=33)** So in this case, the business requirements assistant is primed to be a highly skilled business requirements engineer, and the goal is that given a SMART problem statement and a MECE issue tree with a particular node of interest, it should help the user to create a business requirement document, BRD, that guides the further data analysis and data science project.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=56)** These are the tasks here, which should be executed one by one.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=61)** First, we want to ask the user for the SMART problem statement, then ask them for the MECE issue tree and ask them for which part of the tree they want to formulate the requirements.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=72)** Then it should suggest some relevant project titles for a data analysis or data science project given the current scope.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=78)** Also, we want to make sure that this does not overlap with other areas of the tree, but stays within the given bounds.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=84)** If there are overlaps with other areas, it should flag these to the user.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=89)** And finally, it should help the user and guide them on creating the final BRD.
>
> **[1:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=94)** There are also some details here as to what this BRD should include in particular.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=99)** For example, the purpose of this project, the stakeholders, the business requirements, and obviously these are all things you would need to fill in with your actual requirements.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=109)** And again, quick heads up, you can find the instructions for this GPT in the GitHub repo so you can set up your own GPT and customize it to your needs.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=118)** Now let's go back and see how this works in action.
>
> **[2:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=123)** I have again prepared a little chat here and just initiated that chat by pressing the Start button and was greeted with this message.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=130)** What is the SMART problem statement?
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=132)** I pasted my SMART problem statement in here.
>
> **[2:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=134)** And then I was asked for the MECE issue tree, and this is where I just copied in essentially what we got as a result from the previous step.
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=144)** Now that we have the structure, I define that I want to double down on demand forecasting.
>
> **[2:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=149)** And from here, the business requirement assistant gives me some relevant project titles.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=155)** I selected this one here, improving demand accuracy using machine learning on supplier and sales data, and said this is good.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=163)** The GPT then proceeded with, great, let's use this title and I'll guide you in creating the BRD for this project.
>
> **[2:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=171)** And the nice thing here is it comes up with an initial draft that I can now refine and change as I need.
>
> **[2:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=178)** For example, it suggests an overall purpose of this project, given the SMART problem statement and the issue tree that I have, and also suggests some stakeholders that could be relevant for this project.
>
> **[3:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=189)** And again, of course, I would need to double check that and see if I would like to update, add, or remove some of these particular members here on the team.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=198)** What are the specific business requirements?
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=200)** These are also some points that ideally I would like to customize and adjust to the actual project I'm working on.
>
> **[3:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=208)** But most importantly, I would like to highlight this one here as well, which is a very important aspect of every project at the beginning.
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=215)** That is what is in scope and what is out of scope of this project?
>
> **[3:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=219)** We can see that in scope is the data collection, building and deploying the demand forecasting model, and maybe building some dashboards for forecast visualization and actionable insights.
>
> **[3:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=230)** Out of scope will be the broader operational cost reduction efforts and also non-data driven approaches to forecasting.
>
> **[3:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=237)** And of course, you can customize these as you like, but be clear about what is in the project and what is not in the project.
>
> **[4:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=245)** When it comes to success criteria, it suggests some KPIs like for example, achieving a forecasting accuracy of 85% measured by the mean absolute percentage error.
>
> **[4:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=256)** Or for example, reducing all the discrepancies by about 20% within six months of deployment in order to contribute to an increased profit margin from 1.5 to 3%.
>
> **[4:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=266)** And again, these are just suggestions.
>
> **[4:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=267)** Feel free to use them or decline them as you like.
>
> **[4:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=270)** In our case here, I said that's good and defined that the forecasting scope should be for the next week, given the current week's data, because orders in our case maybe are placed on a Sunday, and it's really important to mention what should the forecast actually be like.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=288)** And you can see that now the GPT adds this to our requirement document and, for example, says that we want to visualize weekly forecasts to aid procurement decisions.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=297)** And also when it comes to what's in scope for this project, this would include the next week's demand forecast based on current week's data.
>
> **[5:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=307)** Now this is really specific about what we want to do.
>
> **[5:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=310)** Let's wrap this up and say give this to me as a Word document.
>
> **[5:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=315)** You can see that the GPT goes ahead and creates this Word document for us.
>
> **[5:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=319)** So let's open this.
>
> **[5:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=321)** In the end, the Word document will look similar to this.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=324)** It's a non-styled version of all the content, and it's something we could now update with our own template.
>
> **[5:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=330)** Of course, we can also format it and style it as needed and also add or adjust things here as we want.
>
> **[5:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-3-business-requirements-assistant?u=76281980&t=336)** So in conclusion, that's essentially how we can leverage the business requirements assistant to go from a SMART problem statement, a MECE issue tree with an identified area of focus into a fully-fledged project documentation and a business requirements document all in just a few minutes.

> [!info]- Semantic Content
>
> **Env Vars:** smart (7), gpt (6), mece (4), brd (4)
> **Code Keywords:** let (5), this. (2), case, (1), finally, (1)
> **Analogies:** for example (5), similar to (1)
> **CLI Commands:** make (2), node (1), find (1)
> **Tools:** github (2)
> **UI Navigation:** scroll down (1), open the (1)
> **Exercise Files:** github repo (1), template (1)
> **Versions:** 1.5 (1)

#### Use case 4: Data dictionary assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=0)** - [Instructor] So now that we know what to do, it's actually time to work with some real-world data.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=4)** So let's open our repo in Branch 02_05, and then we want to open this Jupyter Notebook here.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=12)** Now, the easiest way to do this is to create a new Codespace from this branch, which you can do by pressing this button over here and start a new Codespace.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=22)** Now this might take a little while to load up, but after some time, you should see VS Code, like on this screen here.
>
> **[0:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=29)** Now on the left side, you can see all the files in this branch of the repository.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=33)** This is a data set that is super popular called the Northwind database.
>
> **[0:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=37)** It's provided by Microsoft for training purposes and essentially resembles a retailer with a lot of ERP data in it.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=44)** Now we're going to explore this data, and in our first case, get a broad understanding of what is actually in this dataset.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=51)** And to do this, we don't even need AI, just a few lines of code to extract this schema of the given database.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=57)** For all of you who are not familiar with databases, the schema describes what tables exist, what the different data types are for each table, and how the tables are connected in terms of relationships.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=67)** Now let's open up our notebook.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=70)** So what I'm doing here in Python is loading the SQLite library and pandas.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=76)** And then I wrote a little function that loops over all the tables and relationships in a given database.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=83)** It shows us what tables are available in this database and also what schema each table has, that is, what are the different columns and the data types.
>
> **[1:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=94)** Now, if we connect to our database and run that schema extraction code, we get a dictionary of all the different data schemas.
>
> **[1:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=102)** And when we run the relationship function, we get a list of all the different relationships in the tables.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=108)** Now this is great, but the problem is that this is really hard to understand and quite technical.
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=114)** If you want to analyze it, it's hard to make sense of what's really going on in this data set.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=118)** And now this is where generative AI comes in.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=121)** With that in mind, let's open our Data Dictionary Assistant.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=125)** We'll go back to the repository, and then scroll down to the resources and open the first GPT Link over here.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=132)** So let's see what this Data Dictionary Assistant is actually doing.
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=138)** Let's take a quick look at the instructions.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=140)** You can see that the role is you are a data dictionary generator, and the goal is to turn a given data schema and table relations into a data dictionary that is both accessible for technical and non-technical stakeholders.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=151)** And the tasks are pretty straightforward.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=153)** We want to ask the user to provide information about the data, especially table schemas and table relationships, and then return a table for each database table with the following information, the column name, a simple description, which should be short, the data type and technical terms, and also the relationships of that table as a list.
>
> **[2:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=171)** So let's see how that looks like in action.
>
> **[2:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=175)** I've prepared a sample chat over here.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=179)** I triggered the conversation with Start, and then the GPT follows the instruction and asks, "Great, please provide the table schema and table relationships."
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=187)** And what I did here, I just copied over the dictionaries that I got from the functions inside the Jupyter Notebook.
>
> **[3:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=194)** So this is just the raw output I got from both the table schema and the table relationship functions that I just ran in the Jupyter Notebook.
>
> **[3:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=203)** Now, the GPT takes this as an input and then returns all the tables in our data set.
>
> **[3:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=211)** For example, it lists the Category table, which shows the category ID, the category name, and the description of each category in our retail product data set.
>
> **[3:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=222)** There's the sqlite_sequence table, which is just an internal table, and that's relevant for our purposes.
>
> **[3:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=227)** What is more important is, for example, the Customer table, and we can see that this Customer table has a customer ID identifier, which is also linked to the Orders table, and also it includes the name of the customer, the name of the primary contact, the address, city, postal code, and so on.
>
> **[4:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=243)** And this gives us a pretty good overview of all the tables that are available in our data set.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=247)** And we can see information about the suppliers or even the products in our data set, where, for example, we can see that this table has a field called ProductID, which lists your unique ID for each product and also has a relationship backed to the Order Details table.
>
> **[4:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=263)** And also we have a supplier ID here for a particular product, which is linked to the Supplier table.
>
> **[4:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=269)** So this gives us a pretty good understanding of what data is available and how are the connections between the different tables, which is super useful for further exploration of this data set.
>
> **[4:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=279)** Now, to extract this data dictionary, we could ask ChatGPT to create a Word document or export it as a structured data format, like a JSON file, for example.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=288)** But in my case, I'll just ask it right away to create a simple markdown representation of this data dictionary.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=297)** Now we have a nicely formatted data dictionary in Markdown format, we can just go ahead and copy this code, and if we put this into a simple text editor, you can see that the Markdown format here is preserved.
>
> **[5:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=310)** And if we store it in a Markdown file format, and for example, upload it to our GitHub repository, which I called here data_dictionary.md, you can see that we have this nice visual representation of our data dictionary here.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=324)** And just again, if you take a look behind, this is just the raw Markdown code of this file.
>
> **[5:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=330)** So there you have it.
>
> **[5:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=332)** That's how we quickly go from a raw list of tables with column names and relationships to a nicely formatted structured data dictionary that we can now use and also share with less technical stakeholders.
>
> **[5:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-4-data-dictionary-assistant?u=76281980&t=342)** With that in mind, let's move ahead to the next use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), super (2), case, (2), function (2), this, (1)
> **Env Vars:** gpt (3), erp (1), json (1)
> **Tools:** jupyter (3), vs code (1), github (1)
> **Analogies:** for example (5)
> **CLI Commands:** python (1), make (1)
> **Code Identifiers:** sqlite_sequence (1), data_dictionary (1)
> **UI Navigation:** scroll down (1), open the (1)
> **File Paths:** data_dictionary.md (1)

#### Use case 5: SQL query copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=0)** - [Instructor] So, now that we have access to our database and also know the table schema and their relationships, let's actually start with our first Copilot.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=7)** Remember, a Copilot is also an LM solution, but, in this case, it's more integrated into our workflow.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=13)** That means, we are now not going to copy-paste stuff into ChatGPT, but, instead, we are in integrating generative AI capabilities directly into our workflow.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=22)** What we're going to do now is to build a little SQL query assistant.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=26)** This assistant will take a natural language query from us and then return the SQL code that needs to be written to pull the required information from the database we provide.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=35)** Now, make sure you are in branch O2_06b.
>
> **[0:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=39)** If you're still in Codespaces, you can switch to branch by clicking here.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=44)** Now, I'm going to switch over to branch O2_06e to walk you through the end result.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=50)** But if you are following along, feel free to stay in the O2_06b branch and just run the notebook from there.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=58)** Scroll down, until you see this import Gemini code cell over here.
>
> **[1:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=64)** Click this button to make sure that you execute all of the above cells to make sure that the actual table relationships and table schemas are loaded correctly.
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=75)** And also update the placeholder with your actual Gemini API key in here.
>
> **[1:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=81)** So, if you run this cell, you will import the Gemini package and also configure it with your custom API key.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=89)** Next, let's do a little test run to see if Gemini is actually working correctly.
>
> **[1:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=94)** The way we call Gemini is by first providing a generation_config dictionary, and these are just some parameters for the model, such as the temperature, the top_p or the top_k value.
>
> **[1:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=106)** Now, let's leave these to the default values, and you can use them as well.
>
> **[1:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=110)** I don't want to dive too deep into them right now.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=112)** More importantly, let's look at the max_output_tokens.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=117)** This controls the maximum number of tokens that should be generated.
>
> **[2:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=120)** Another crucial parameter is the response type.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=124)** In this case, I specified the response type as application/json, so we get structured output back from the LLM.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=132)** Modern LLM APIs like GPT-4o, Claude, and also Gemini support a so-called JSON mode, meaning the output will not be just raw text, but instead formatted as a JSON dictionary.
>
> **[2:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=143)** And this is super helpful for integrating AI into your workflows.
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=147)** Now, for this project, I'm using the Gemini 2.0 Flash Experimental model, and this is defined in the generative AI model object.
>
> **[2:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=157)** Gemini 2.0 is exceptional at coding and especially SQL code generation.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=162)** The third component we need is the chat_session object.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=167)** This keeps track of your chat history.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=169)** However, we are not building a chatbot, so this part is not really so important to us right now.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=174)** But, just so you know, we can define the chat history to keep track of previous messages, if needed.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=180)** Now, we can go ahead and send a test message to the model.
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=184)** For example, we can ask it "What's up?"
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=187)** And if we print a response, you should see something like this; "I am doing well, thank you for asking!
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=191)** How can I help you today?"
>
> **[3:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=193)** If you see this message, Gemini is configured correctly and you can go ahead and use it.
>
> **[3:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=197)** If you get an error message, it could be due to the API key that is not loaded properly, or maybe quota issues, though, you should have enough free quota by default if you sign up with a fresh account for the APIs.
>
> **[3:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=211)** Now, you should be good to go even without spending any money.
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=215)** With that, let's dive in to actually writing our SQL Copilot.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=220)** This is the structure I will be using for all the Copilots we are going to build in this course.
>
> **[3:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=225)** It's a raw and minimalistic implementation, but you can always extend it into, for example, a class or a package, or other scalable structures.
>
> **[3:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=233)** For now, I'm really keeping it bare bones, just writing a simple function that takes a set of parameters and returns, in this case, a SQL output.
>
> **[4:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=242)** Now this function in particular takes the following inputs.
>
> **[4:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=245)** It takes a natural_language_query, it takes a table schema, and a list of relationships in these tables, and it creates the generation_config file, and also the model name.
>
> **[4:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=258)** In this case here, I'm using the Gemini 1.5 Pro version, just for demonstration purposes.
>
> **[4:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=264)** Now, let's take a look at the system_prompt inside this function.
>
> **[4:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=268)** I'm following the RGTD framework here.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=271)** I'm defining this Copilot to be a SQL code generator, and the goal is to assist the user in getting the requested information from a database by turning a natural language query into working SQL code.
>
> **[4:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=287)** Then there are two main tasks.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=288)** First, it should familiarize itself with the given table schema and the table relationship, that are provided below, and then translate the user query into working SQL code.
>
> **[4:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=298)** And then it provide the table relationships and table schemas here in the DETAILS.
>
> **[5:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=303)** And you can see thanks to the f-string, I can just pass the relationships and the schemas here as raw text.
>
> **[5:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=309)** Most importantly, there's no actual data shared here, only the schema and the structure, the so-called metadata about our dataset.
>
> **[5:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=319)** Now the final instruction is to return the JSON with SQL code stored in SQL elements.
>
> **[5:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=326)** After defining the model and then initiating the chat session, we send the user query to Gemini.
>
> **[5:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=333)** And once the model responds, we format the output as JSON and return the final sql_query.
>
> **[5:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=340)** And we will also print a sql_query, so we can always follow along what the model is actually generating.
>
> **[5:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=346)** Now, if you define this function and connect to the database, let's actually run a test query to see how well our Copilot is doing.
>
> **[5:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=353)** If you run this cell, you can ask something like, "How many customers are in the database?"
>
> **[5:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=358)** And you can see that the SQL Copilot will return a very simple SQL query like SELECT COUNT (*) FROM Customers.
>
> **[6:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=366)** The output shows 91 customers in the database.
>
> **[6:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=370)** Great.
>
> **[6:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=371)** It means that our assistant is working correctly.
>
> **[6:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=373)** Well, you might say, "That was a simple query.
>
> **[6:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=376)** I could have written that by myself."
>
> **[6:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=378)** Well, yes, but because it provided the table descriptions and schemas, we can also ask it to generate much more complex queries.
>
> **[6:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=385)** For example, we can ask it to create a flat table of daily product sales, including product names, quantity, price, and information on who bought it, customer ID and country, as well as who supplied it, the supplier ID and the country.
>
> **[6:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=402)** Now, there's a lot happening in this request, but our assistant understands the schema and the relationships, so it generates a complex SQL query with multiple joins, as you can see here.
>
> **[6:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=413)** Now this query is much more complex than the initial one, but our SQL Copilot gets this correct, thanks to the natural language understanding and also the understanding of the structure of our data.
>
> **[7:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=425)** So what it does is that it selects the required necessary columns, it joins multiple tables, it doesn't perform an aggregation yet, even though we could ask for it, and then it formats the data as a flat table.
>
> **[7:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=436)** And, as you can see, the final output includes the ProductName, the Quantity, the Price, the CustomerID, the CustomerCountry, the SupplierID, the SupplierCountry, and then also the OrderDate, just as we wanted.
>
> **[7:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=451)** And this is exactly the data we need to make our forecasts later.
>
> **[7:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=455)** We could now also specify individual columns, or double-check the SQL correctness, or manually review the queries before execution.
>
> **[7:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=464)** Remember, this is an augmented use case.
>
> **[7:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=465)** The assistant helps you to write SQL queries faster, but you should still validate the query, especially for larger and more complex tasks.
>
> **[7:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-5-sql-query-copilot?u=76281980&t=472)** Now, finally, we can save the generated table here as a CSV file, so we can go ahead later on and use this data for our next use case.

> [!info]- Semantic Content
>
> **Env Vars:** sql (16), json (4), api (3), llm (2), gpt (1)
> **Code Keywords:** let (7), function (4), case, (3), switch (2), case. (2)
> **Code Identifiers:** generation_config (2), sql_query (2), max_output_tokens (1), chat_session (1), natural_language_query (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (3), such as (1)
> **Versions:** 2.0 (2), 1.5 (1)
> **UI Navigation:** switch to (1), scroll down (1)
> **Definitions:** means that (1), is an  (1)

#### Use case 6: EDA report assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=0)** - [Instructor] Now we pulled some data from our database, which we are probably going to use for forecasting, the first and most important step is to understand our data a little better, and this is where exploratory data analysis comes in.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=12)** Now, make sure to switch to Branch 02_07 in the report.
>
> **[0:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=16)** We won't need code spaces for this use case.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=19)** Now this will actually be the only use case where I'm really going to upload data and expose it to Chat GPT.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=26)** So just bear in mind that if you want to do that here together with me and you want to use your own data, you are actually allowed to upload that data to Chat GPT, and you don't run into any constraints set by your employer or any personal data that is contained in your dataset.
>
> **[0:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=39)** Now, the amount of data that you can upload to Chat GPT has a hard file size limit, which at the time of this recording is about 50 megabytes.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=47)** In terms of tabular data, that is equivalent to a few thousand of rows on average.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=50)** So the workflow should be use a SQL query to get a certain snapshot filter or view of your data, and then you can upload that subset to a tool like Chat GPT and explore it interactively.
>
> **[1:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=62)** Now let's see what our EDA assistant here is doing.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=67)** Go to the resources and open the first link here.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=70)** Let's take a look at the instructions.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=74)** You can see that I'm priming this one here as an experienced data analyst specialized in performing visual exploratory data analysis.
>
> **[1:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=81)** The goal is to help the user get a high level understanding of the dataset and identify potential flaws as well as generate hypotheses for further data analysis.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=89)** And the tasks are as follows.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=91)** Again, step by step, first, ask the user to provide the dataset.
>
> **[1:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=95)** Then create some summary statistics for all columns in the dataset, just with a small explanation.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=101)** Then we wanted to visualize each distribution of every column in the dataset using an appropriate chart, and for every chart, it should write a key summary of what's going on here with a focus on outliers and other surprising findings.
>
> **[1:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=113)** Then ask the user if they have a target variable in mind they want to analyze for further in-depth analysis.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=119)** And then visualize the relationship between every column and the particular target column.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=124)** And finally, highlight any noticeable insights that you might find in order to drive the analysis proactively.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=131)** It should always suggest areas that could be further explored or aspects in the data that might be problematic.
>
> **[2:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=137)** It should suggest hypotheses for further explorations.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=140)** And then provide some style notes here on how this GPT should respond.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=145)** So with that, let's close this and see the action.
>
> **[2:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=149)** So you can press start and you will see this little greeting message.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=152)** And this is where you could now upload the product sales CSV file that we just created in our last video.
>
> **[2:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=159)** Now, I have prepared a little sample chat.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=162)** I won't be able to see the uploaded file here, that is totally okay, but I'm able to see the rest of this conversation.
>
> **[2:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=168)** So first of all, you can see that the GPT just reiterated all the columns that it found, which is good, so I can confirm whether it understood correctly what is in the data set or if there was any misunderstanding of those columns.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=182)** And from there it'll create some summary of statistics here that includes some basic statistical measures like the count, the unique values, the mean, the standard deviation, minimum, maximum value, et cetera.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=196)** From there, it asks me whether I want to further analyze this data set or if we should visualize the distributions next.
>
> **[3:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=202)** And I say, yes, let's visualize those.
>
> **[3:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=205)** And you will see I get a visualization of the different distributions of my data set here for all the different numeric columns.
>
> **[3:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=213)** Now, I could explore that even further and ask even to analyze the categorical columns, but in this case, I'm jumping straight ahead to analyze the relationships because right now I already know that I'm interested in demand forecasting.
>
> **[3:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=227)** So it asks me if I have a specific target variable in mind I would like to analyze relationships with, for example, quantity or price.
>
> **[3:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=234)** And since I'm interested into forecasting, I'm going to analyze the quantity variable.
>
> **[3:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=239)** So from here, it'll give me the relationship between quantity and all other variables in my data set.
>
> **[4:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=244)** For example, quantity versus price, so I can see the distribution here, quantity versus custom id, which really doesn't make any sense here, but as part of the analysis, which is part of the output, supply ID is the same.
>
> **[4:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=257)** But from here, I can even ask it to also explore the categorical variables, which would make even more sense in this case.
>
> **[4:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=264)** So now I can see the breakdown of quantity, for example, by product names, or the quantity by customer country.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=271)** And I could see that I have these outliers here for different countries and quite a big spread, for example, in countries like Australia or Poland, for example.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=281)** So I can also see the quantity by supplier country, by order date.
>
> **[4:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=286)** And then finally, I can also ask it to explore the quantity by week because I'm interested in a weekly forecast.
>
> **[4:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=293)** And since I don't really have week as a categorical variable in my dataset, it will go ahead and create that column week based on the daytime that I have in my dataset.
>
> **[5:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=303)** And you can see the chart here looks a little weird, so I ask it to fix it because what's happening is that our dataset spans two different years, and I ask it to fix this chart as there are two years in it.
>
> **[5:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=316)** And so after this little hint, Chat GPT will understand that it actually has to format those different calendar weeks here in different colors depending on the year they are in.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=324)** And now I have this visualization of how the quantity is distributed against the different week of the years.
>
> **[5:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=334)** And with that, I have a super high level exploratory data analysis that already gives me some insights of what's going on.
>
> **[5:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=340)** And feel free to explore this data set even further and see if you can find any outliers or if you can find any interesting noticeable patterns and just explore how it feels to interact with the data in this conversational style inside Chat GPT.
>
> **[5:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=353)** And quick note, if you want to understand what actually happened under the hood, you can always click this little view analysis icon, which shows you exactly what code was being used by Chat GPT to run the visualizations or to create the analysis that was done here.
>
> **[6:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=368)** And if you want, you can copy this code and paste it over to a notebook or to a local repository, and then run this code locally, for example, on the total data set that you have locally, or on an update of the data set so you don't have to re-upload it to Chat GPT the next time.
>
> **[6:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=384)** Just take this code, store it locally, and the next time you run the analysis, you can run it offline without any dependency to Chat GPT.
>
> **[6:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-6-eda-report-assistant?u=76281980&t=390)** So hopefully you saw how easy it is to interact with your data and Chat GPT and get critical insights from it really fast.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (12), sql (1), eda (1), csv (1)
> **Code Keywords:** let (4), case. (2), finally, (2), switch (1), case, (1)
> **CLI Commands:** make (3), find (3)
> **Analogies:** for example (6)
> **UI Navigation:** switch to (1), go to (1), open the (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)


### 3. AI-Augmented Data Preparation

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview: Data preparation with GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=0)** - [Narrator] Let's talk about the augmentation of data preparation with generative AI.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=4)** This is one of the most critical parts because as you know, preparing and cleaning data is the most time consuming part of a data science project.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=12)** But just to quickly recap, what are the main goals of the data preparation phase?
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=15)** First of all, we need to transform raw data into an analysis ready format.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=20)** Very often that involves converting columns or data types to things that we can actually work with.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=25)** We typically also want to ensure data quality and consistency.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=28)** So anything that was flagged or highlighted during the exploratory data analysis phase might need to be fixed here.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=35)** Also, this is something where we want to bring the data to a format that can actually be used for modeling.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=41)** That very often involves adding or creating additional features that we can use in order to get better predictive performance.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=47)** And also, we want to handle special data types effectively.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=51)** So if we have anything that should be categorical and is numeric or anything that is a daytime format, for example, we want to fix all these nuances here at this stage.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=61)** Now, what are the typical challenges in data preparation?
>
> **[1:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=64)** Here's where we enter the most time consuming phase of all.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=67)** On average, we spend about 70 to 80% just cleaning and preparing data to make it a good fit for the actual model.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=76)** There are also very often complex feature engineering decisions involved.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=80)** What kind of features are we building?
>
> **[1:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=82)** What are the most predictive features and how can we actually build these features?
>
> **[1:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=87)** Also, handling missing values and outliers is often a challenge.
>
> **[1:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=90)** How to treat them, what to do about them.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=93)** Another big challenge is processing unstructured text data.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=96)** This is especially important because so far it has been exceptionally hard to work with unstructured text data.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=103)** If we have text data in our data set, for example, product names or open customer feedback, and this data is messy, it very often turns into complex Regex formulas that we need to write in order to fix this data set.
>
> **[1:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=115)** Maintaining data, pre-processing pipelines is also a typical challenge because data is always updating, so we need to make sure that our data cleaning and preparation pipelines are actually good enough to also handle changes in data.
>
> **[2:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=128)** And this is where GenAI can really help.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=130)** Genai can help us not only by assessing the data quality, but it can also help us to clean our data and better support feature engineering.
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=138)** And finally, GenAI really shines at text pre-processing, turning text into actionable categories or fixed values in existing text data.
>
> **[2:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-data-preparation-with-genai?u=76281980&t=146)** Let's jump into the first use case and see how GenAI can help us in the data preparation phase.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **CLI Commands:** make (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Use case 7: Data quality assessment copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=0)** - [Instructor] So let's build a data quality assessment Copilot that helps us to identify and detect areas that need our attention with regards to data quality.
>
> **[0:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=8)** And because this is a Copilot, we're integrating it directly into our data science workflow.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=13)** So let's open up our repo and switch to branch 03_02b.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=20)** And from here, we can just launch a codespace.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=25)** Now, in my case, I already have Codespaces open, and you can navigate to this data_preparation Jupyter Notebook over here on the left side.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=33)** Bear in mind, I'm already on the end state of that branch, but if you want to follow along, feel free to stay in the beginning branch, indicated by the b at the end.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=42)** So first of all, let's load our data as we did previously using the SQL query that we just got from the SQL Copilot in the previous use case.
>
> **[0:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=53)** Next, we're going to import a library called pandas_dq.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=57)** Now, pandas_dq as a library has nothing to do with AI.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=61)** It's simply a little helper that helps us to systematically analyze all the different columns in our dataset and detect potential issues.
>
> **[1:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=69)** If you run this command, you will get a comprehensive report that looks like this.
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=75)** Now, this report is based on all categorical and numerical values in your dataset.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=80)** It includes the data type, the missing values percentage, the percentage of unique values, the minimum value, the maximum value, and some general recommendations on fixing potential data quality issues.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=93)** However, note that pandas_dq is a pretty static tool.
>
> **[1:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=97)** It follows predefined rules to flag potential issues.
>
> **[1:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=100)** You still need to manually interpret these results.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=103)** For example, if we go down to OrderDate, you can see that it flags the high cardinality of this column, but then it suggests to use hash encoding or text embeddings to reduce the dimension.
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=114)** But this is obviously not true because as a date column, what we actually want is to convert this into a datetime format.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=121)** And this is actually now where generative AI comes in and helps us to build on top of that.
>
> **[2:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=127)** We can use the data quality report here as a baseline and feed it into an LLM that can then interpret the results and provide actionable suggestions on how to actually fix these issues.
>
> **[2:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=139)** So let's go ahead and bring in Gemini over here.
>
> **[2:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=143)** Update your API code with your own key.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=145)** And keep in mind that outside of this demo scenario, you should always save that key safely.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=151)** For example, in an environment variable and not in plain text as here.
>
> **[2:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=156)** Then we also provide our generation_config just like before.
>
> **[2:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=160)** And this time, we also define our business problem.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=162)** In this case, that is predict sales, the quantity, for next week.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=167)** Why?
>
> **[2:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=168)** Well, because a common misconception about data quality is the belief that all columns in a dataset must be fixed.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=174)** However, we only need to fix the data that's actually relevant for our problem, which is called the fit for use principle.
>
> **[3:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=181)** And by defining our business goal clearly, we can give the LLM more context on what data actually needs to be fixed and how.
>
> **[3:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=188)** So going ahead, we define our dq_copilot, which essentially takes two arguments, the dq_report from pandas_dq and our business problem.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=198)** And then we also pass our generation_config and the model name, in this case, gemini-2.0 experimental.
>
> **[3:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=205)** The system prompt goes as follows.
>
> **[3:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=208)** We define the role to be a data quality pilot, and the goal is that given a business problem statement and a data quality report, we want it to highlight areas that need particular attention, and possible ways to address it.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=220)** Now, how should that be done?
>
> **[3:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=222)** First, we want it to go through each column of the data quality report and highlight areas that need our attention.
>
> **[3:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=229)** And then we point out that the data quality report is just a generic document and not everything might be relevant for the given business problem.
>
> **[3:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=238)** So thirdly, we wanted to focus on highlighting quality areas that are relevant for our problem.
>
> **[4:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=243)** And for the relevant areas, it should give us a reason why they are relevant and also suggest the best action to address the given issue.
>
> **[4:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=253)** Now, with that in mind, we give some examples here.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=255)** For example, if a column has 95% missing values, we could suggest removing this column if this column will be needed in our future prediction.
>
> **[4:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=264)** If the column is likely not needed, no need for us to do anything, we can just ignore it.
>
> **[4:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=269)** Or another example, if a column has very high cardinality, that should actually be numeric or date format, suggest encoding instead of hashing.
>
> **[4:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=277)** And, of course, we can adjust that and modify it according to our needs.
>
> **[4:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=280)** And if you find that your own dataset has some intricacies that the model should pick up, you can put that in here or you leave it really open and let the model do the heavy lifting.
>
> **[4:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=291)** In the details then, we specify how the output should look like.
>
> **[4:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=294)** In this case, we specify that the output must be a JSON dictionary with issues and best action resolutions for each column.
>
> **[5:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=303)** And this is how the JSON should look like.
>
> **[5:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=305)** We want to have the column_name and then as a sub element whether this column is relevant to our problem or not and whether it has a data quality issue or not.
>
> **[5:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=313)** And if it has, we want to have a best action to resolve this issue.
>
> **[5:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=317)** And then it should basically provide this for all the columns in our dataset.
>
> **[5:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=320)** And then we just plug in the business problem over here as a simple f-string and then we can call the model.
>
> **[5:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=327)** We will return the response and I would say let's see how that looks like.
>
> **[5:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=332)** If you run the data quality Copilot on the data quality report in our business problem, we will get an output that looks similar to this one here.
>
> **[5:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=341)** You can see that we get a dictionary, which has all the different column names, along with a description of the best action and whether a data quality issue is here, and whether this column is actually relevant for our problem or not.
>
> **[5:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=353)** So we can see that CustomerCountry in this case is relevant and it also has some issues.
>
> **[5:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=358)** And the best action here would be to group rare countries into an 'Other' category to reduce the dimensionality and potential overfitting, which is great because there might be some countries that just have one or two or three observations, which we can't really use for predictions.
>
> **[6:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=373)** And now if we take a look at our date column here, the OrderDate, we can see that this is relevant.
>
> **[6:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=379)** It has a problem, the high cardinality, but instead of suggesting hash encoding, it will now suggest to convert it to a datetime format and extract relevant features, like day of the week, the month or the season.
>
> **[6:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=390)** So this is something we can consider using for our time series forecasting problem.
>
> **[6:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=396)** Now, with this dictionary, we can go ahead and actually update it if we want because if we take a look at, for example, the quantity, we can see that the best action here is that the LLM suggests to cap the outlier values at a reasonable threshold.
>
> **[6:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=412)** For example, the 95th percentile.
>
> **[6:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=414)** However, maybe we don't want to do this.
>
> **[6:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=416)** Maybe we want to keep high quantities in our data center.
>
> **[6:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=418)** We want to apply the threshold.
>
> **[7:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=420)** And because this is an augmented scenario, we can also update the suggestions that the LLM gives to us.
>
> **[7:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=426)** So in this case, for example, we could say that for the price and for the quantity, we want our best action not to be a cap of the maximum threshold, but we want it to remove observations with negative values because these might be return orders.
>
> **[7:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=441)** We just formulate it in plain English and store it in our dictionary here.
>
> **[7:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=445)** And you will see that in the next use case, we can actually build on top of these instructions and then write the code to actually perform that on our data.
>
> **[7:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=453)** But that's just the next step.
>
> **[7:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-7-data-quality-assessment-copilot?u=76281980&t=454)** For now, let's just store our data quality report here as a JSON file so we can easily access it in the next use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (6), case. (2), this. (2), switch (1)
> **Code Identifiers:** pandas_dq (4), generation_config (2), data_preparation (1), dq_copilot (1), dq_report (1)
> **Env Vars:** llm (4), json (3), sql (2), api (1)
> **Analogies:** for example (6), just like (1), similar to (1)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Cross-References:** in the next (2)
> **Warnings:** note that (1), keep in mind (1)
> **CLI Commands:** find (1)

#### Use case 8: Data cleaning copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=0)** - [Instructor] So knowing what data quality issues exist and what to do about them is great, but what's even better is to actually perform these actions and fix the issues.
>
> **[0:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=8)** And this is where our data cleaning copilot comes in.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=12)** Now, I'm still in the same code space, and if you're following along, switch to the 03_03b branch of this notebook.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=20)** I'm heading over to 03_03e because this already includes the outputs.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=26)** Now what are we going to do here?
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=28)** First of all, let's collapse the first use case.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=30)** We don't need this right now and jump into the next one, use case 8.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=34)** First of all, I'm loading my data here just as we did previously, and then also initializing Gemini, just as we did before.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=42)** Now the new step is that we load in our dq_result.json that we just generated in the previous step.
>
> **[0:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=49)** And just as a quick heads up, that's how it looks like.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=51)** It does not contain any actual data, but instead, it's just a list of column names, whether they are relevant and what to do about the data quality problems, if there were any.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=61)** And then comes the interesting part, defining our data cleaning copilot.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=66)** Now, how is this working?
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=67)** This copilot accepts a whole data frame, and I'll come back to that in a second.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=72)** The data quality json that we just saw, the name of the data frame and then our generation config, as well as the name of the Gemini model that we want to use.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=83)** Now, the system prompt goes as follows, we prompted to be a Pandas code generator specialized on data cleaning.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=89)** The goal should be that given some data, it should clean the data based on the instructions and using end-to-end Pandas code.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=99)** The tasks as follows, we wanted to analyze the data cleaning instructions, then write the code to implement the cleaning instructions, one function at a time.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=108)** And let me just enlarge that here a little bit more so we can see that better.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=112)** So one function per line, and then each function must return a new column, which takes the name of the original column, but with a suffix, _clean.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=124)** Then we wanted to write the code that applies all functions to the data frame and return the clean data frame.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=131)** Some more detailed here.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=132)** We wanted to return the Pandas script in a pandas_script element inside a json object, and then define a separate function for each data cleaning step.
>
> **[2:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=141)** Also, we don't want it to wrap all the functions into a main function.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=145)** This is essentially to demonstrate the LLM, how we expect the code to look like.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=151)** Remember, I'm telling it here to generate Pandas code, but I'm not actually telling it to run anything, and it couldn't because it's a text generation model.
>
> **[2:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=159)** It can just produce text and code for me, but it can't run it on its own.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=165)** So in order to produce the best working code, it actually needs some more information and more context for me about my data.
>
> **[2:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=172)** And that's why I provide the data frame name here because this is important.
>
> **[2:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=177)** So it can actually plug in the data frame name into the actual code, so it'll work later on.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=182)** And then we also want to give it more information about the data frame structure.
>
> **[3:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=186)** You see, I'm providing the data frame here as an input, but the information that I'm actually using here is just the data types.
>
> **[3:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=194)** So this is the most minimalistic implementation you can have that does not share anything about your actual data.
>
> **[3:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=199)** But if you want to share particular examples from your data, like unique categories, you can do that as well here.
>
> **[3:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=205)** Now finally, we send the message where we say these are the data cleaning instructions, and we just passed the data quality json, that we just produced from the previous step.
>
> **[3:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=217)** And now you can see that this is the Pandas script here that the LLM wrote for us.
>
> **[3:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=221)** And actually it looks pretty good.
>
> **[3:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=223)** Now what I do is I don't really let this whole script loose on my data automatically.
>
> **[3:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=230)** Now, what I would do instead is literally select the whole code that was generated, copy it, and then paste it into a new code cell as I did already here, because this gives me the opportunity to review the code and also comment out things that I don't need.
>
> **[4:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=246)** For example, the LLM wrote a clean product name function here, which I don't really need.
>
> **[4:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=253)** Maybe I want to keep my product names and apply a different cleaning methodology to it, as we will see later.
>
> **[4:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=259)** But for the other ones here, cleaning the quantity, removing anything that is below zero or the price or grouping the customer countries, these all look really good.
>
> **[4:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=269)** And you can see that I would also be able to write that by myself.
>
> **[4:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=273)** But imagine if we didn't have just 5 or 10 columns, but maybe 20, 30 or 50 columns or even more.
>
> **[4:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=279)** This is such a useful way to have the LLM write the cleaning code for you and you can just review it quickly and it's much faster than just writing everything out from scratch.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=288)** And now finally, we apply these actual functions to our data frame, and in the end, what we get is a clean data frame that looks like this.
>
> **[4:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=298)** So this is how you augment your data cleaning and preparation process with the help of generative AI while still keeping control of the entire process.
>
> **[5:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-8-data-cleaning-copilot?u=76281980&t=306)** Now let's see what else we can do to our data to.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (4), finally, (2), switch (1), case. (1)
> **Env Vars:** llm (4)
> **Code Identifiers:** dq_result (1), pandas_script (1)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** dq_result.json (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)

#### Use case 9: Text preprocessing copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=0)** - [Instructor] Remember how we excluded the text cleaning function previously and what we got from our data cleaning copilot?
>
> **[0:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=5)** Well, as it turns out, when it comes to cleaning text data, we can just leverage the power of the LLM directly instead of just having it to write the code for us.
>
> **[0:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=14)** And in fact, there are two main types of text processing and generative AI.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=18)** Now, before we dive into the first one, make sure you're on the branch 0304B.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=26)** Again, if you want, you can switch the branches directly from within code spaces.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=30)** And I'm here on the 0304E branch because I'm showing you the final results.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=35)** So if you want to follow along, use the beep branch.
>
> **[0:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=37)** If you just want to see the final outputs switch to the branch on which I'm working on right here.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=43)** So first of all, let's again load our data using the SQL script, nothing new here.
>
> **[0:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=48)** And then we also pasted the data cleaning script from the previous exercise in here, so we get this little clean data frame out of this process.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=58)** Now let's jump into the first big category of doing text processing with LMS mapping text data.
>
> **[1:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=64)** How does this work?
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=65)** For example, let's say we want to enrich our data set with information about whether a given product here is perishable or not.
>
> **[1:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=73)** This is important because it might make more sense to forecast demand specifically for highly perishable products because if a product is perishable, we might need to throw it away if it's not sold in time, which creates real cost in our business.
>
> **[1:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=86)** So let's say we want to detect if a product is perishable or not given the product name.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=91)** That's where our first mapping copilot comes in.
>
> **[1:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=95)** Let's first load up Gemini as we did previously.
>
> **[1:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=97)** And then let's see how this mapping co-pilot is working.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=101)** In this case, it accepts two main variables.
>
> **[1:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=105)** The first one is a list of unique values, and then the second is a list of mapping categories that we want to map to those.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=112)** And then also we provide the generation config and the model name here as previously.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=117)** Let's take a look at the system prompt.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=119)** We prompted to be a text mapper, and the goal is that given a list of unique values and a list of mapping categories, it should provide a mapping dictionary.
>
> **[2:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=129)** Now the task is that for every given unique value, it should assign exactly one of the given mapping categories.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=136)** And of course, this could also be multiple categories if you had a classification problem.
>
> **[2:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=141)** In our case here, it's just one single category.
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=144)** If you have multiple categories, you would need to update this piece of the prompt in particular.
>
> **[2:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=149)** Now the details.
>
> **[2:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=150)** In the end, what we want to have is a mapping JS as a result, and this is how the JS should look like.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=155)** We want to have the element as the unique value, and then the assigned mapping category as a child element to this.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=163)** And then we provide the mapping categories here simply as a text list.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=169)** Now, when we send the first message, we provide all the unique values that we have and then off it goes, and the model generates the response.
>
> **[2:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=177)** Let's see this in action.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=179)** First of all, we take all of our product names that we have here, and you can see this is a pretty long array of data, and there are lots of things going on here.
>
> **[3:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=189)** We have lots of different product names in different languages, and also with different naming conventions.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=196)** So let's define the categories.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=198)** Again, we are interested in perishable goods and non-perishable goods.
>
> **[3:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=202)** And now we can just call the mapping copilot using our list of unique product names and the categories we are interested in.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=209)** And if we pass that to the model, then what we get as a result is a dictionary with the actual mappings.
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=216)** So let's see how that looks like.
>
> **[3:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=218)** So you can see that now for every unique product name, we have the category assigned to it.
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=224)** So you can see that this queso cabrales is a perishable good because it's probably cheese, right?
>
> **[3:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=230)** Or the mozzarella, it's also perishable.
>
> **[3:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=232)** And now throughout this whole dictionary, there's a mapping applied to all the unique product names in our dataset.
>
> **[3:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=239)** Now, if you wonder, how accurate is this and how good is this classification, well then you can actually treat it as a classification problem.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=247)** You could take a subset of your data, a sample where you calculate the confusion matrix given the true labels of these items if you have them.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=255)** And this would give you the confidence score to understand how well the LLM understands your data and perhaps if another LLM works even better.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=262)** And also, one more tip, if you have lots of unique text values, instead of sending them all at once, you can just send them to the LLM in small batches, for example, just 50 unique values at once.
>
> **[4:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=272)** And then in the end, just concatenate the dictionaries together.
>
> **[4:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=277)** And now that we have the text mapping dictionary, we can simply apply it to our data frame and get a new column that assigns whether a product is perishable or not.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=288)** And this is how it would look like.
>
> **[4:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=290)** So you can see we now have a neat column here that shows us all the perishable and non-perishable goods in this case.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=297)** Great, so now let's move over to the second big category of using LMS for tax pre-processing, which is inferring categories.
>
> **[5:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=306)** Because previously we gave the list of categories that we were interested in.
>
> **[5:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=310)** But what do we do if we actually want to extract categories dynamically from our data?
>
> **[5:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=315)** And this is where our category copilot comes in.
>
> **[5:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=318)** The input is similar, but instead of defining categories before we just provide a list of unique values, we provide a goal, well, I'll come back to that in a second.
>
> **[5:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=328)** And a number of categories that we want to see.
>
> **[5:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=331)** Let's take a look at the system prompt.
>
> **[5:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=332)** In this case, we prompted to be a tax category generator.
>
> **[5:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=336)** The goal is that given a list of unique values and the goal, you provide a list of categories, it should group the given list of unique values into exactly.
>
> **[5:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=346)** And then we provide the number of categories here based on the given goal.
>
> **[5:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=351)** And then the details are that we wanted to include at least one category, which is named other, which collects all the rare observations.
>
> **[5:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=358)** And finally, it should return the list of categories and JS format together with some popular examples per category.
>
> **[6:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=366)** And these examples are just for your own reference and also for the model so that during the generation process, it stays on track assigning the categories correctly.
>
> **[6:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=375)** And this is how the final JS object should look like.
>
> **[6:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=378)** We want to see the first category here as a main element, and then some examples here as a child element, and then the second category and so on and so forth.
>
> **[6:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=387)** And if we pass our goal here in the prompt and the list of the unique values, what we get is the dictionary accordingly.
>
> **[6:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=395)** Before we run this, let's quickly define our goal because as I mentioned before, we need to tell the LLM, what are we actually interested in?
>
> **[6:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=401)** What do we want to see?
>
> **[6:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=402)** In this case, I explained it in plain English where I say I want to find product categories that are similar in terms of shopping behavior.
>
> **[6:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=410)** For example, milk, cheese, meat, et cetera.
>
> **[6:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=413)** Now looking at different shopping categories is important because this lets us the predict demand for specific product types, and also it allows us to identify categories that maybe have a higher cost associated to it.
>
> **[7:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=427)** For example, it makes a big difference whether we throw away seafood or dairy products.
>
> **[7:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=432)** And also we can then use the generated categories as input for further analysis.
>
> **[7:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=437)** Now, let's go ahead and filter our data frame to the perishable goods category that we are interested in, and then get a list of all the perishable products that we have in this data frame.
>
> **[7:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=448)** So you can see this is how our perishable products would look like.
>
> **[7:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=451)** And now the task is to find out in what categories do these perishable products actually fall into, and this is where the copilot comes in.
>
> **[7:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=460)** So we define our list of perishable products.
>
> **[7:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=463)** We had the goal as mentioned before, and then we said we want to find six different categories.
>
> **[7:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=468)** And of course, this is a parameter you can tune and adjust depending on your concrete juice case.
>
> **[7:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=473)** And let's see what we got.
>
> **[7:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=474)** So you can see that the first category that was identified was dairy and cheese, with of course all the cheese in here, but also milk, for example.
>
> **[8:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=482)** And we have a second big category, which is seafood, so crab meat for example, or we have other type of fish or seafood in here.
>
> **[8:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=491)** The next one is meat and poultry.
>
> **[8:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=494)** And finally we have prepared meals and sides.
>
> **[8:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=497)** So there are other examples as well.
>
> **[8:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=500)** But this already gives us a pretty good overview of different categories of perishable products in our data frame.
>
> **[8:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=507)** Now, let's say we are particularly interested in seafood.
>
> **[8:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=510)** What we can now define is to say we want to have the categories, seafood and non seafood.
>
> **[8:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=516)** And now thanks to our mapping dictionary that we got from the copilot, we can list all the different products that fall into the seafood or non seafood category, and finally store them as a mapping dictionary that lists all the items that are seafood and non seafood in our entire data set.
>
> **[8:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=535)** And now we could, of course, filter our data set to this and for example, just forecast the demand for seafood products in our entire product catalog, which makes it obviously more interesting and more useful instead of predicting just every demand in our retail store.
>
> **[9:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=553)** So now let's do this mapping dictionary here as FJSON file so we can always go back to it and actually pull the mapping of the different categories, seafood to the actual product names here from the file.
>
> **[9:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=563)** And we don't need to call the LLM the whole time.
>
> **[9:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=566)** And then we can just add another column here, seafood, that gives us not only a list, whether our product is perishable or not, but also whether it is seafood or non seafood.
>
> **[9:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=577)** In this case, we have a list of all the seafood items, and this is exactly what we're going to use when we are going to build our predictive model for this dataset.
>
> **[9:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=584)** In conclusion, by using generative AI for text data pre-processing, we can map text data efficiently, infer categories dynamically without predefined labels, and then also optimize our downstream task by focusing on high impact categories.
>
> **[10:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-9-text-preprocessing-copilot?u=76281980&t=600)** This workflow significantly reduces the manual effort and ensures that our models only process the most relevant data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), case, (4), switch (2), throw (2), pass (2)
> **Env Vars:** llm (6), lms (2), sql (1), fjson (1)
> **Definitions:** is a  (7)
> **Analogies:** for example (7)
> **CLI Commands:** find (3), make (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Use case 10: Feature engineering copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=0)** - [Instructor] Now that we have our list of seafood items that have been sold in recent dates, we want to actually create some meaningful features from it.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=7)** Now switch to branch 0305E or 0305B.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=13)** If you want to follow along.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=15)** The goal of this video will be to have generative AI right code for us that is helping us with the actual feature engineering.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=22)** But before we can actually do this, we need to prep our data a little bit further, in this case, without the help of AI.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=28)** So first of all, let's load our data as we used to do it before, and then apply our data cleaning script, also nothing new here.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=36)** Then we will map the seafood items using the dictionary that we just created previously.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=42)** And this is the point where we now need to aggregate our data to a weekly format.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=46)** Because remember, we want to do a weekly forecast.
>
> **[0:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=49)** So that means every row in our data frame must be an aggregate of one week of data.
>
> **[0:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=54)** And this is essentially what this script is doing here.
>
> **[0:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=57)** So first of all, I'm adding a new column here that is called calendar week, which is just extracting the calendar week from the cleaned order date.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=66)** And then I sort this data frame by the weeks and the sending order and then aggregate it by calendar week.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=74)** And just a quick heads up here, if you write comments out like this, and if you have an AI assistant or AI co-pilot inside your IDE, like for example GitHub co-pilot, it'll just go ahead and auto complete the following code for you.
>
> **[1:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=87)** So that's also a good way to use generative AI inside your data science workflow.
>
> **[1:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=92)** In fact, this whole code here was also generated by AI just by prompting it to aggregate data by calendar week.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=99)** It suggested to group this data frame by calendar week and then suggested these different aggregations, which makes sense.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=107)** We want to count the unique product IDs.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=109)** We want to sum up the quantity, we want to have the average of the price, and then also count the number of unique customers and the number of unique countries here.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=118)** Finally, reset the index.
>
> **[2:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=120)** And then what we want to do in the end here is just rename these columns for clarity.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=124)** And also just by putting this comment in here, the AI auto completed this whole part for me.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=131)** Again, this is only working if you have something like GitHub copilot or for example, Gemini included, if you use an IDE provided by Google like CoLab, for example.
>
> **[2:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=140)** So let's see how this data set looks like.
>
> **[2:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=142)** So now this is a neatly organized weekly data set where every row is one week of data with the aggregations that we have just defined.
>
> **[2:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=152)** Now, this is something we can now use for our feature engineering tasks.
>
> **[2:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=156)** Again, the task here is to predict the amount of seafood, the quantity for the next week that's going to be sold, so we can adjust our orders for this category more effectively.
>
> **[2:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=166)** And this is where the feature engineering copilot comes in.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=169)** What it does is that it accepts our data frame, and again, we are not sharing the actual data, just some information about our data, the business problem, the data frame name, and also the generation config and the actual model name.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=182)** So in the system prompt, we prompt our LLM to behave as a pandas code generator, specialized on building high quality features for a machine learning pipeline.
>
> **[3:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=193)** The goal is that given a data set and a business problem, we wanted to create the code to compute relevant predictive features using pandas code.
>
> **[3:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=203)** And then the tasks are as follows, it should analyze the business problem and the business problem analysis element, analyze the available data and the data analysis element, suggest features in a feature reasoning element, and then finally define these features in a features element with a description and a Pandas code.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=220)** Now, why am I doing this here?
>
> **[3:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=222)** You might have heard about a thing called chain of thought or chain of thought reasoning in large language models.
>
> **[3:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=228)** By making the model reason through the business problem and what kind of features it could generate, it gives it some more time to generate the final response before arriving at the actual feature implementation code.
>
> **[4:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=240)** This just gives it a little bit more time to "think" and also improve the accuracy of the actual features it's going to come up with.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=247)** If we just ask it to create the features right away, it might not really generate the best ones.
>
> **[4:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=253)** So first, we let it understand our data set, then understand our business problem, define the best features, and then ultimately generate the code for the best available features.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=262)** And also this approach serves as a documentation.
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=265)** If someone asks why I chose a specific feature, I can refer back to this reasoning process and also I can modify it accordingly in the details.
>
> **[4:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=273)** I'm just specifying that we want to make sure that the target does not leak into the features.
>
> **[4:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=278)** And I also provide some custom instructions here based on our forecasting tasks because let's say I want to focus on lagged features and maybe I want to use three quantity lags.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=288)** And of course you can just adjust that depending on your problem or depending on how you like to generate your own features, or you can just leave it away and let the LLM come up with its own suggestions.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=297)** We also want the pandas code to create new columns prefixed with feature using only row wise or column wise operations.
>
> **[5:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=304)** The original data frame should not be altered, and this is how the final Jason should look like.
>
> **[5:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=309)** It should have an element with the business problem analysis, with the dataset analysis with the feature reasoning process, and then a list of the individual features listing the feature name, the description of that feature, and then the panda script containing the actual script to generate this particular feature.
>
> **[5:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=326)** Now, I'm also providing the data frame name, so the LLM can actually write code that also works on my data set.
>
> **[5:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=333)** And also I provide the column names also to give it the necessary context of what columns are available to work with.
>
> **[5:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=339)** I'm also providing it with some descriptive statistics just in case that might be helpful for knowing what kind of features to generate depending on the distribution of the data.
>
> **[5:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=350)** And then finally, when I initiate the message, I just pass in the business problem.
>
> **[5:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=355)** So the LLM knows the overall context that.
>
> **[5:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=357)** Speaking of context, the business problem in our case is again to predict weekly total quantity for the next week.
>
> **[6:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=364)** And here I'm really specifying the target variable by its exact name.
>
> **[6:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=368)** So the LLM knows that this target variable should not leak into the features.
>
> **[6:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=374)** Here, I'm defining the generation config just as we used to do it before.
>
> **[6:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=378)** And then this is how my call to the feature engineering copilot looks like I'm providing my data frame here, the business problem, and also the name of this data frame.
>
> **[6:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=388)** And again, I'm not sharing any actual data, just information about the data here.
>
> **[6:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=393)** So let's see how the result looks like.
>
> **[6:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=396)** If we open this features JSON, we get as a response from our LLM.
>
> **[6:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=400)** This is the output that we get.
>
> **[6:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=401)** It's actually pretty comprehensive and you can see the whole JSON file inside the GitHub Ripple.
>
> **[6:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=407)** But just to give you a quick overview, we have the business problem analysis here with the reasoning process of what's actually happening.
>
> **[6:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=413)** We have the feature reasoning that says we need lagged features of those different column names, for example.
>
> **[6:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=419)** And then we have a list of the actual features.
>
> **[7:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=422)** For example, the feature name feature weekly total with quantity lag one or the feature weekly total with a quantity lag two.
>
> **[7:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=430)** Now how do we access these features and run it on our data set?
>
> **[7:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=434)** The simplest way will just be to loop through this dictionary and then print the pandas code out here.
>
> **[7:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=440)** You can see that this is still stored in list format.
>
> **[7:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=443)** So if you want to access this list element, just add this little zero here at the end, and then you will see you get the actual raw code from here.
>
> **[7:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=453)** Now using this execute command, you could also immediately just run these feature commands and these feature scripts to generate the features on your dataset.
>
> **[7:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=461)** But that's something I don't really like to do.
>
> **[7:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=463)** Instead, what I do is, is I just copy all of this code over here and paste it inside a new code cell because this gives me the ability to just review the code and then also update it as needed because there might be something that the LLM missed or there might be another feature I would like to add to this.
>
> **[8:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=480)** In this case, let's just accept as it is because it did a pretty good job in adding these different lags here to my data set and also having the different interactions on our lacked features.
>
> **[8:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=491)** So this is how our feature data set now looks like.
>
> **[8:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=494)** If we apply that to the weekly DF data frame, you can see that the feature columns have been added here nicely to the end.
>
> **[8:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=502)** Now what we want to do is finally is to save our features dictionary JSON, because this dictionary will serve both as a documentation of what we did, but also as a code source to just grab this code from this JSON file later on and then apply it to our feature processing pipeline.
>
> **[8:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=519)** And also, I want to save the features so I can literally just use this CSV file for training our model in the next use case in this demo scenario.
>
> **[8:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=528)** So in conclusion, I hope you have seen how powerful a lamps can be to create features for you to help you write the code and how helpful this can be if you want to create lots of lagged features, for example, or lots of feature combinations on very large data sets with dozens or hundreds of columns in your set.
>
> **[9:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-10-feature-engineering-copilot?u=76281980&t=545)** So you don't have to write everything from scratch and just let the LLM help you do the tedious work here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), case, (2), finally, (2), switch (1)
> **Env Vars:** llm (8), json (4), ide (2), csv (1)
> **Analogies:** for example (6)
> **Tools:** github (3), colab (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)


### 4. AI-Powered Modeling Techniques

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview: Modeling with GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=0)** - [Narrator] All right, let's go to the fun part.
>
> **[0:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=2)** Modeling.
>
> **[0:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=3)** To quickly recap, what are the goals of modeling here?
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=7)** First of all, we want to select appropriate modeling approaches.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=10)** Depending on the business task that we have, there might be different models that could be suitable.
>
> **[0:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=14)** So we want to choose which model might work best and narrow down our choices.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=19)** Of course, in this phase, we also want to build and train effective models.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=22)** It's about implementing them and training them on our actual data.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=25)** And then finally, this is what often gets overlooked.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=28)** We actually want to document what we did, the decisions that we made, and the code that we use for that.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=33)** This ensures reproducibility and maintainability of our approach.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=38)** Now here are the typical challenges you will encounter in this phase.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=41)** Choosing the right algorithms, definitely a trial and error process to a certain degree.
>
> **[0:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=45)** However, there's a big difference between testing 100 algorithms randomly versus narrowing down to maybe just 10 before high parameter tuning.
>
> **[0:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=54)** Hyperparameter tuning itself can also turn out to be quite complex.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=58)** And model documentation, as I just mentioned, can be quite burdensome, especially when every decision needs to be recorded.
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=65)** For future reference, code quality and maintainability is another challenge.
>
> **[1:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=69)** Fast iteration cycles can lead to sloppy code, which leads to reproducibility issues.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=76)** Now, how can generative AI help model selection can help us narrow down the models that are actually relevant for our tasks.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=83)** Code generation will help us write the code needed to train these models, and documentation support can assist in writing and organizing documentation.
>
> **[1:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-modeling-with-genai?u=76281980&t=91)** So let's see all these things in action.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### Use case 11: Model selection assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=0)** - [Instructor] So the first use case in this model selection phase actually brings us back to an assistant in ChatGPT, because when we want Generative AI to be a sparing partner for us for selecting a good model, being able to have a back and forth conversation is actually much more useful.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=15)** So in our report, select branch O4O2, and then you can click the link here down at the bottom.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=22)** This will bring you to the model selection assistant.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=25)** Let's see what's happening here under the hood.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=27)** And again, just as a quick recap, you can always see the config file in the repo.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=32)** So the instructions of this are as follows.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=34)** The role is you are machine learning model selection assistant and the goal is to interact with the data scientist to help them narrow down the most suitable machine learning algorithm to about three, feel free to customize that here, for their specific business problem and data set.
>
> **[0:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=48)** You will ask a structured series of questions and then propose a short list of models, listing key advantages and disadvantages for each.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=56)** And then the tasks are as follows: greet the user, ask clarifying questions, gather data details, inquire about constraints, and then based on the responses, generate a short list of potential models explaining pros and cons.
>
> **[1:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=69)** Ask only one question at a time, use a clear, concise style, summarize the user's previous answers in posing the next question and provide brief justifications for each recommended algorithm.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=78)** Also, if the user's input suggests a pivot in approach, then adapt your questions and recommendations accordingly.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=84)** So you see this is quite a flexible prompt and we just want this assistant to be a good sparing partner for us in order to find out what is a good model that we could use in order to solve our machine learning task.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=96)** So let's see it in action.
>
> **[1:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=98)** And again, I have prepared a little sample chat here and feel free to just follow along with that.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=103)** You will find the link in the repo, or you can just start from scratch by yourself.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=107)** I initiated this conversation with start and then it greeted me with the question of what is the goal of the model?
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=114)** What are we trying to achieve?
>
> **[1:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=115)** And then I gave a little explanation of what I'm trying to do here.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=118)** In this case, forecasting weekly sales, the quantity for perishable goods, seafood.
>
> **[2:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=123)** So just give enough information that it knows what the business task is at hand for the given, in this case, forecasting problem.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=130)** And accordingly, a time series forecasting problem.
>
> **[2:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=133)** So now it asks me about some data details for my data set.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=136)** And the good thing is because we have actually used Generative AI before to help us document the whole process, we can just upload the features dictionary JSON from the previous use case.
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=147)** If you recap this JSON file you will see that it actually contains the whole reasoning process about what our data set looks like, what features might be suitable for this, and also the final decision on what features we are going to use.
>
> **[2:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=160)** So we can just provide this information here and then the GPT will update accordingly, read this information and adapt its responses accordingly.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=169)** So in this case it'll say, thanks for sharing these details, here's a quick summary, the target variable, which is weekly total quantity.
>
> **[2:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=176)** The features include lacked sales data, lacked prices, and also customer rated features and interaction terms.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=182)** It only realizes we also have 31 weeks of data.
>
> **[3:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=185)** Again, this was part of the reasoning process in the features dictionary where it says we just have 31 weeks of data.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=191)** So this is one constraint that we have.
>
> **[3:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=193)** And then the key challenge here is that we have short historical data with potential seasonality and the need to handle perishable good trends, which is a good summary of the challenges that we have here.
>
> **[3:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=203)** So next it asks us some follow-up questions.
>
> **[3:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=206)** Are we prioritizing accuracy or interpretability?
>
> **[3:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=210)** Do we have any computational or deployment constraints and what's the update frequency of the model?
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=215)** In this case, we just specify we want to have an accurate model and there's no need for realtime predictions and also we want to train it weekly.
>
> **[3:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=223)** And with that, it's now able to give us a short list of good candidates of machine learning models.
>
> **[3:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=228)** So you can see in this case it narrowed down the choices to three different model types or model categories.
>
> **[3:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=233)** The first one is a gradient boosting model category that could involve XGBoost LGBM or CatBoost and some advantages of this model class, like being able to handle ACT features and also working pretty well with even small data sets.
>
> **[4:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=246)** It can also incorporate actional sectors like pricing customer behavior if you want that, but one of the downsides is that it needs careful hyper parameter tuning, and it's also less interpretable than classical models.
>
> **[4:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=257)** We can see that it also suggested here the seasonal SARIMA model, which is strong for capturing seasonality trends, but also assumes linear relationships, so it's less flexible than boosting models, and also it requires us to tune the parameters manually.
>
> **[4:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=273)** And finally, the third selection here will be Prophet, Facebook's time series model, which is also good at handing seasonality and trend changes, but overall, mostly less accurate than boosting models in highly complex scenarios and most importantly, it can struggle with very short time series.
>
> **[4:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=291)** So in essence, these are the three models it came up with, and this is a pretty good starting point for us to actually develop one of these models and implement it, of course with the help of Generative AI.
>
> **[5:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-11-model-selection-assistant?u=76281980&t=302)** And for that, I see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (2), case. (1), this, (1), class, (1)
> **Env Vars:** json (2), o4o2 (1), gpt (1), lgbm (1), act (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Use case 12: Model creation copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=0)** - [Instructor] So now that we know what model to train, we actually want to train it.
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=4)** So back in our code space, make sure you're in branch 04_03b if you want to follow along, or 04_03e if you just want to see the end result, like me here.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=17)** And then in the code space, open the modeling notebook over here.
>
> **[0:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=21)** Let's close this so we have a little more space.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=23)** So first what we're going to do is we'll load our features CSV file that we have created in one of the previous steps, the data set that contains all of our features.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=33)** Then we also are going to load the dictionary with the feature documentation.
>
> **[0:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=37)** You'll see in a bit why.
>
> **[0:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=39)** To train our model, we are going to split it by calendar week.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=42)** In this case here, we're training on all rows before 2024 week three, we'll drop all rows with missing values and also reset the index.
>
> **[0:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=51)** Now in the end, this will leave us with 24 rows of data.
>
> **[0:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=55)** Not much, but for now that's all we have.
>
> **[0:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=59)** Next we want to build upon the existing feature dictionary that we have and build a comprehensive feature documentation specifically for the current training data.
>
> **[1:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=68)** For this, we'll add some summary statistics.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=71)** For numeric data, some general descriptive statistics, and for categorical data, the unique values.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=78)** We are also going to store this as a table so we can access it later on easily.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=84)** The result is a feature documentation table where each row is one feature, along with the feature name, the description, the corresponding panda script to calculate the feature, the data type, and then also some statistics on that particular feature.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=99)** Now this will serve two purposes.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=101)** It's useful for documentation, but also as a context for training our machine learning model.
>
> **[1:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=106)** For example, if we had a model that would need to do dummy variable and coding, it could pull the list of categories directly from this feature documentation.
>
> **[1:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=114)** Now let's move ahead to the actual model training.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=118)** For this, we are going to import Gemini and also again set our API key here.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=124)** We define the generation config just as before, and this is where we define our model training Copilot.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=132)** Now there's quite a lot going on here, so let's walk through this in detail.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=136)** This Copilot takes a couple of inputs, the business problem, our feature documentation, the ML model we want to train, the name of the data frame, the name of the target variable in that data frame, and then the generation config as well as the model.
>
> **[2:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=154)** Gemini 1.5 Pro is indicated here as a default model, but we can always override that when actually calling the function.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=163)** Let's take a look at the system prompt.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=165)** We prompt the LLM to behave as a machine learning engineer specialized in training high performing machine learning models.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=174)** The goal is that given a feature documentation table and a machine learning model class, it should create the end-to-end python code for training the model based on the available features.
>
> **[3:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=185)** Now, the tasks are to first analyze the available features carefully and then write ML expert code that works in production grade ML systems.
>
> **[3:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=195)** For example, this is where it gets a little bit more concrete.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=198)** If an algorithm requires dummy variable in coding, we want it to generate an encoding dictionary based on the information from the feature documentation, not from the dataset itself.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=209)** This will make it more robust once we apply the same model training code to an updated data set.
>
> **[3:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=215)** Also, we wanted to write training code for the model using all available features, and then also tune hyper parameters automatically using cross validation and grid search.
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=224)** It should include code that retrains on the full data set after the best hyper parameters have been identified.
>
> **[3:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=230)** And there are some details here, like the column names equal to the feature names.
>
> **[3:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=234)** The training data is stored as a pandas data frame, which is called as this variable.
>
> **[4:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=240)** And then the target variable is called like this.
>
> **[4:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=242)** And then the available machinery libraries, and I'm just listing a few here, feel free to adapt these to whatever you have actually available.
>
> **[4:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=250)** And then return the code in adjacent element called training code.
>
> **[4:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=254)** And then this is where we plug in the feature dictionary in triple backticks and also the model class to train.
>
> **[4:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=261)** And then we prompt the whole process with the business problem at hand.
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=265)** And speaking about business problems, this is how we could formulate it, forecast weekly sales, quantity for perishable seafood products.
>
> **[4:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=272)** Now we could also formulate that more generically, but this is also working good here.
>
> **[4:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=277)** The important thing is that we give the model enough context on what we are actually trying to do here.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=281)** And this is where we actually call the Copilot.
>
> **[4:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=283)** We provide the machine learning model, and bear in mind that we are just providing the high level machine learning model class, not the exact algorithm.
>
> **[4:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=290)** This is essentially what we got from the model selection assistant previously.
>
> **[4:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=295)** We leave everything else up to the Copilot.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=297)** We define the business problem, we give it the feature documentation, the class of the machine learning model we want to train, the name of the training data set, and then also the name of the target variable.
>
> **[5:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=309)** And in this case, I'm training here on Gemini 2.0 flash experimental.
>
> **[5:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=316)** So, and if I run this Copilot, what I will get in return is a pretty long output of Pandas and SK learn code.
>
> **[5:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=324)** Now, I could go ahead and just run this code directly, but what I prefer is just as we did previously, copy this whole code, and just paste it here into a new code cell.
>
> **[5:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=334)** This will be good for reproducibility and also for double checking whether everything is really working and doing the training as we intended.
>
> **[5:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=343)** So you can see that it imported the gradient boosting regressor class from SK learn and also grid search CV, and the training metric here was the means grad error.
>
> **[5:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=353)** If you wanted to update that, we could of course do that either here in the code, or just run the whole Copilot again and provide the exact performance metric we want to optimize for.
>
> **[6:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=363)** You can see that using all the features that we've specified.
>
> **[6:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=367)** And then it created the whole training code for us, including the parameter grid for the grid search.
>
> **[6:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=372)** Now, if we run this whole code cell, this will take a few minutes to actually train the model because it's trying different combinations.
>
> **[6:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=379)** But in the end, it'll find one model, which is called best GBR, that has the best performance metrics overall.
>
> **[6:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=385)** And this model is going to be trained on the overall training dataset.
>
> **[6:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=389)** So in my case, this is the evaluation metric I came out here, which is maybe good, maybe not.
>
> **[6:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=395)** We will find that out in the next use case where we will have generative AI help us actually interpret the result of this training and figure out if the model that we trained is actually good or not.
>
> **[6:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=405)** But for now, let's simply export our model using job lib and save it to our file system so we can access this model later on.
>
> **[6:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=414)** And in conclusion, I hope you have seen how fast you can come up with coding machine learning training code based on contacts that you give to this Copilot and the actual data that you have without actually sharing one single row of data with a third party LLM service.
>
> **[7:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-12-model-creation-copilot?u=76281980&t=432)** And with that, I'll see you in the next use case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (2), class, (2), case, (2), type, (1)
> **CLI Commands:** make (2), find (2), python (1)
> **Env Vars:** llm (2), csv (1), api (1), gbr (1)
> **Definitions:** is called (3), is a  (2)
> **Versions:** 1.5 (1), 2.0 (1)
> **Cross-References:** in the next (2)
> **Analogies:** for example (2)
> **UI Navigation:** open the (1)

#### Use case 13: Model documentation copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=0)** - [Instructor] Now that we have trained and stored our model, the next logical thing we can do is, of course, to create a documentation about the whole training progress.
>
> **[0:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=8)** And since we have everything stored already as nice text files, we can just generate this documentation really easily using generative AI.
>
> **[0:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=16)** And this is where I build this model documentation copilot that takes the code that was used to train the machine learning model, the feature documentation, which we have just created previously, the training data frame, and also the generation conflict, as well as the model name for making the actual call.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=32)** So how does the system prompt look like?
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=35)** We are prompting it to be behave as a machine learning model documentation generator.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=38)** The goal is to write a comprehensive, easy-to-understand machine learning documentation report, given the machine learning training code and all features.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=46)** The tasks are pretty straightforward.
>
> **[0:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=48)** We want to check the provided model code and feature documentation carefully and then create a Markdown file for the report according to the template below.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=56)** And this is actually where the meat of this prompt is.
>
> **[0:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=59)** We want to use simple language, short bullet points, avoid technical jargon where possible, and then only return the final Markdown file in a Markdown report element.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=70)** And this is the report that we can specify here.
>
> **[1:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=73)** I took a really generic approach, where just take the name of the model and put that into the headline, followed by a short description, the whole feature set that was used, the training data that we used, ideally the first and last observation.
>
> **[1:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=86)** That's why, in this case, I'm actually sending some data here to the LLM just to pull the first and the last observation.
>
> **[1:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=92)** And here, if you don't want to do this, you don't need to send any data there.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=96)** And also the background pros and cons of the model approach, and also the takeaway why the current approach was chosen.
>
> **[1:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=102)** And the nice thing about this is that all of this information is already stored in the files that we have been producing throughout our workflows.
>
> **[1:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=109)** So we don't need to create anything new.
>
> **[1:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=111)** We just plug in the feature documentation, the training data, some descriptive statistics, like the length of it, or the first and last observation if we want to use that, and then the model that we are going to use, followed by the actual model code that we just plug in here as raw text.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=130)** And now if you run this on the model code, the feature documentation, the training data frame, and our generation config, what we get is, as you can see, a Markdown report, which is pretty comprehensive.
>
> **[2:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=141)** I'm just printing the first 200 lines here.
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=144)** But there's one thing actually we want to add to this Markdown report because if you want to document your machine learning training, then what you need to include, of course, is also the code that you use for this.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=155)** But we don't want the LLM to regenerate the whole code because even if we provide the code and ask the LLM to return it one by one, it might be that it misses a little tap here or a little comma there, or little quotation mark over there, and this is not really reliable.
>
> **[2:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=171)** So a better way is just to generate the whole report as we did right now, and then just paste the model code here as a simple Python function.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=179)** And then we are also going to add the file name over here.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=182)** That's also something where we don't need generative AI for.
>
> **[3:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=185)** And in the end, save this whole documentation as a nice Markdown file.
>
> **[3:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=190)** And if you run this, you can see on the left side, you see this model_documentation file, which looks really nice.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=196)** And if you open it in a Markdown reader, like for example here, if you open the same file on GitHub, you see that you have this nice visual representation of your model training workflow with some background information, the code that was being used, and also some information about the features that were used here.
>
> **[3:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=214)** And this gives you, like, a pretty good out-of-the-box description of what you did for the training without any additional work on your end.
>
> **[3:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=221)** You just call the model documentation pilot, feed in all the artifacts that you produced anyway during this whole workflow, and in the end, you get this little Markdown report as a result.
>
> **[3:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-13-model-documentation-copilot?u=76281980&t=230)** And if you run multiple model runs, then, of course, feel free to generate more than just one documentation, but one documentation for every model that you train.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (2), case, (1), new. (1), include, (1), this. (1)
> **Env Vars:** llm (3)
> **CLI Commands:** python (1)
> **Code Identifiers:** model_documentation (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** template (1)
> **Analogies:** for example (1)


### 5. AI-Augmented Model Evaluation

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview: Model evaluation with GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=0)** - [Instructor] How well is our model actually working at generalizing our new data?
>
> **[0:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=4)** This is what the model evaluation phase will tell us.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=7)** The goal here is to assess the model performance thoroughly, to understand the model behavior, but also its limitations and to validate the model against business requirements.
>
> **[0:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=17)** It's not just about hitting some technical targets, we also need to ensure that the model is actually solving the business problems we originally intended.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=24)** This is a crucial aspect of this phase.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=27)** Some typical challenges in this phase include selecting the appropriate evaluation metrics.
>
> **[0:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=32)** There are a variety of metrics to choose from, and depending on the problem, some may be more suitable than others.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=38)** Additionally, interpreting complex modeling results and explaining them to stakeholders can be an issue, especially if one gets too lost in the technical details.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=47)** Moreover, this is a quite time-consuming analysis process.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=50)** While there are standard libraries to assist with model evaluation, it still involves a lot of manual back and forth to determine the most relevant metrics.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=58)** And besides that, we also need to choose a set of metrics that simplifies communication for a non-technical audience.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=66)** Now, how can generative AI help you?
>
> **[1:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=69)** There are many ways, but in my opinion, the two most important ones are, first, performance analysis, helping you understand or write the code for evaluating how well your model predicts new data points.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=80)** And then second, model explainability, assisting in explaining performance metrics and the model's behavior to a non-technical audience.
>
> **[1:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-evaluation-with-genai?u=76281980&t=88)** So, this is what we are going to do, and I'll see you in the next use case.

> [!info]- Semantic Content
>
> **Code Keywords:** from, (1), case. (1)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Use case 14: Model performance assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=0)** - [Instructor] So we are in the first use case for the model evaluation phase.
>
> **[0:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=3)** Now, the actual assistant lives in ChatGPT.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=6)** But before we get there, there's some pre-work that needs to be done.
>
> **[0:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=9)** So open up Codespaces and make sure you're in Branch 05 02.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=15)** And then open up the evaluation notebook here on the left side.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=19)** In this case, you can just click Run All.
>
> **[0:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=22)** This will load the model and actually calculate some predictions from the model based on in sample and out of sample data.
>
> **[0:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=29)** Now, I'm not going too much into detail here because this is really just getting predictions for the training and the test data, and then storing them into two CSV files, because these two files will allow us to run a more thorough model evaluation process.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=43)** Now, once you see these two CSV files here on the left side, you're all set.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=47)** And let's get back to ChatGPT.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=50)** Open the Read Me file and you will find the link to the GPT here.
>
> **[0:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=54)** Open this in a new browser tab, and you should see the Model Performance Assistant like here.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=60)** Now, let's quickly see what this GPT is doing.
>
> **[1:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=64)** You can see this GPT is prompted to behave as a highly skilled machine learning model evaluation engineer.
>
> **[1:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=70)** And the goal is to assist the user in understanding the performance of a given machine learning model and suggest areas of improvement.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=76)** The tasks are as follows and should be done one by one.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=80)** First, it should ask the user to provide a feature documentation which defines the scope of the available features.
>
> **[1:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=85)** Then the user should upload a model documentation which defines the current modeling approach.
>
> **[1:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=90)** And then the user should upload a CSV file or two CSV files that compare the actual versus the predicted values.
>
> **[1:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=97)** And then we should ask the user which metric they're interested in, perform an analysis of the given dataset, and then guide the user in improving the model.
>
> **[1:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=104)** When done, it should write a summary of the model evaluation that can be added as an appendix to the model documentation file which was provided by the user.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=112)** So these steps should be done one by one, and the user should be guided in what's to be done next.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=117)** And finally, it should return the documentation as markdown code.
>
> **[2:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=120)** So let's close this for now and let's see it in action.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=124)** Again, I have prepared a little sample chat here, so we can go through this together.
>
> **[2:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=128)** I initiated this conversation with start, and then the GPT asks me to provide the feature dictionary.
>
> **[2:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=134)** In this case, I just uploaded the feature documentation .CSV file from our GitHub repository, so the GPT can actually process this and just summarize the features that we're working with.
>
> **[2:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=146)** Next, it asks me to upload the model documentation, and I just uploaded the model documentation markdown file here, so the GPT can make sense of what modeling approach we chose and also how our training data looked like.
>
> **[2:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=159)** And now, as a final step, we are uploading the actual versus predicted CSV files.
>
> **[2:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=164)** And this is actually where I uploaded two files, both the predicted and actual values for the training set, and also the actual versus predicted values for the test set, data that was not seen during training.
>
> **[2:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=177)** And now, with these, the GPT will go ahead and actually compute performance metrics for me.
>
> **[3:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=183)** So in this case, it will go ahead to calculate the mean absolute error, the mean squared error, the root mean squared error, and the R squared score.
>
> **[3:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=190)** Well, I can also ask it to compute a different metric if I'm interested in that, but for now, let's stick with these standard ones here.
>
> **[3:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=196)** So you can see, I have now this result of what the MAE, the MSE and the RMSE is, for my given dataset, and also the R squared value.
>
> **[3:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=206)** I can expand this table so I can see that all in here.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=209)** Now, as you can already see it, the R squared score, actually, does not look too good on our dataset.
>
> **[3:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=214)** So let's see what the GPT says on this.
>
> **[3:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=217)** So we can see, it recognizes that the performance dropped significantly with an R squared score of minus 3.53, meaning the model performs worse than a simple average predictor.
>
> **[3:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=227)** What happened here?
>
> **[3:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=229)** It also gives us the interpretation.
>
> **[3:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=231)** In this case, it's very likely that the model is overfitting, meaning it performs well on training data, but fails on test data.
>
> **[3:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=237)** So it struggles with generalization, and this could be due to the insufficient training data, or the high model complexity, or possible feature selection issues, or maybe even data leakage.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=247)** So as some next steps, it comes up with some suggestions where we say, in this case, suggestions to improve generalization.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=255)** And now, it comes up with some key issues and solutions for generalization improvement.
>
> **[4:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=260)** One, of course, is to have more training data, if possible, but what might even work better in our case is to reduce overfitting with regularization.
>
> **[4:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=269)** In this case, it could be that we could reduce the maximum depths from 3, 4 and 5, to 2, 3 and 4 in the training approach.
>
> **[4:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=277)** And you can see how important it is that we gave this GPT the context and the model documentation of the actual code that we used, so it can now come up with these suggestions because it knows what we actually did.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=288)** It also gives some other technical implementations that we can do here, and these could all be good values to try, and see if our model actually creates a better performance with that.
>
> **[4:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=296)** Another approach would be to tune the learning rate and the shrinkage.
>
> **[4:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=299)** So we could go from the current range, 0.01 to 0.1, to maybe lower values, like 0.005 up to maybe 0.03, for smoother learning.
>
> **[5:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=310)** And these are all things we could now go ahead and implement if we wanted to do that.
>
> **[5:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=314)** But in our case, the only thing I would like to see now is to get the evaluation summary markdown, so I can actually go ahead and add this evaluation report to my model documentation.
>
> **[5:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=325)** And you can see, in this case, the GPT will give me a markdown formatted evaluation summary of all the things that I just mentioned, including the performance metrics, the key observations, as well as the identified issues and the potential recommendations here.
>
> **[5:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=342)** Now, what I will do is I will copy this text and then add this text to my model documentation.
>
> **[5:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=348)** So back in our codespace, we choose the model documentation markdown file, and you can see, I have actually already put it in here.
>
> **[5:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=355)** This is all the text I just copied from ChatGPT.
>
> **[5:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=358)** I can just literally append that to my model documentation, and now, I have the performance evaluation attached to it.
>
> **[6:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-14-model-performance-assistant?u=76281980&t=365)** If I now open this model documentation markdown file in a markdown reader, like for example on GitHub, you can see that it comes out really nicely, and this is how the performance evaluation report looks like at the bottom of my overall model documentation file, which gives me really a super nice end-to-end overview of my whole training progress, what kind of model I chose, which features I used, what training data, why I made the decisions, what code was used, and then also, how this model eventually performed, all without creating any extra work on our table, and instead just producing that on the fly, while we were doing this whole analysis.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (10), csv (6), mae (1), mse (1), rmse (1)
> **Code Keywords:** case, (8), let (6), finally, (1), this. (1), try, (1)
> **Versions:** 3.53 (1), 0.01 (1), 0.1 (1), 0.005 (1), 0.03 (1)
> **CLI Commands:** make (2), find (1)
> **Tools:** github (2)
> **Documentation:** the documentation (1)
> **UI Navigation:** open the (1)
> **Analogies:** for example (1)

#### Use case 15: Model explainability assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=0)** - [Instructor] All right, so now let's see how we can use generative AI to help us understand our machine learning models even better.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=6)** Make sure you're in Codespaces and in branch 05_03.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=10)** And here open the read me file.
>
> **[0:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=13)** And in this read me file, you will find the GPT link to our model explainability assistant.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=18)** Open this one in a new tab, and this is how your model explainability assistant should now look like.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=23)** You can initiate this conversation with start.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=25)** And you can see that this GPT will now ask you to provide some information about the model that you use, the framework that you use, which features, which data set, et cetera.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=34)** And the good thing is we don't need to come up with that.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=36)** We actually can immediately upload our model documentation markdown file because everything that this tool needs is stored in there.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=44)** And I have already prepared a little sample chat to walk you through this.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=47)** So you can see I was greeted here with the same message, and then I just provided the model documentation file from our GitHub repository.
>
> **[0:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=55)** And based on that, the GPT identified that we were using a Gradient Boosting Regressor.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=61)** And now it suggests to use SHAP values to provide both the global and the local feature importance data.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=66)** Now, if you have never worked with SHAP values before, don't worry because the GPT will guide you through this step by step.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=72)** And first of all, it will give you the code needed to run in order to install the SHAP library.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=78)** Now what I will do now is to show the GPT, as well as our code side by side.
>
> **[1:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=84)** So you can see on the left side is my Codespace and on the right side is the GPT.
>
> **[1:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=88)** So let me go to the evaluation notebook here and close our file browser so we have a little bit more space.
>
> **[1:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=94)** Now what we can do now is just copy and paste the code that the GPT is providing us over to our notebook.
>
> **[1:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=100)** And this actually works because, thanks to our model documentation, the GPT knows the name of our model, where it is stored, what features it has been using and so on.
>
> **[1:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=110)** So first you can see I installed the SHAP Library over here, as well as Matplotlib.
>
> **[1:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=117)** Next I loaded the data and our model, and the GPT actually did a pretty good job of providing the actual model name and how to load it correctly.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=125)** I just had to update the test dataset here.
>
> **[2:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=128)** So instead of this CSV file, I just copied the code from before where we read the test dataset directly from our features CSV, and then applied this selection criteria here to just select those calendar weeks in particular.
>
> **[2:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=143)** Next is step number three, to calculate the global feature importance score.
>
> **[2:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=146)** And now with this, I copied the same code over here for the SHAP values and also ran this code.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=153)** And this would give me this plot here.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=155)** Now, if you have never worked with SHAP values before, it can be quite hard to interpret these kind of plots.
>
> **[2:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=160)** So now what you can do now is just copy this graphic by either clicking this button or using a right click and then saying copy.
>
> **[2:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=166)** And then you can just paste this one in here into ChatGPT and ask it to explain this graph.
>
> **[2:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=175)** Now I did this previously here.
>
> **[2:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=178)** If I scroll down, you can see this is where I asked the GPT what does this graph mean?
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=184)** And now it goes ahead and gives me an explanation of this summary plot, which explains how different features in our Gradient Boosting Regressor influence the predictions of weekly total quantity.
>
> **[3:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=194)** And it gives me an in-depth breakdown of how to read this plot, as well as some areas that I should put my attention to.
>
> **[3:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=201)** For example, that interaction features are dominant and also that lacked quantities are strong predictors.
>
> **[3:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=207)** Now going ahead, it provides me with some recommendations I could do in order to improve the model, but what I did here in this case is just implemented the second piece of code from above to check the dependency plot for one feature interaction.
>
> **[3:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=221)** In this case, for the feature weekly total quantity lag1.
>
> **[3:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=225)** And similarly, I just copied this graphic, pasted it over here and asked charge GPT to interpret this.
>
> **[3:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=231)** And now my GBT went ahead and gave me an interpretation for this particular feature.
>
> **[3:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=236)** So it gives me the information of what this plot shows, but also some key observations, what those positive and negative shape values mean, and also what relationships can find here.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=247)** There are also some pointers in terms of what problems exist with the data.
>
> **[4:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=250)** In this case, there are only a few distinct points which could indicate a small dataset or really low variability in features.
>
> **[4:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=257)** In our case, it's really a small dataset because we just have a few calendar weeks in our test data.
>
> **[4:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=262)** Now there are some further recommendations, to either increase data points, to scale or transform our features, and to check for overfitting.
>
> **[4:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=268)** Because if the training R squared is high, but the test performance is poor, the model might be memorizing instead of generalizing.
>
> **[4:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=275)** And this is again, due to the few data points that we have.
>
> **[4:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=278)** But now we have a pretty good interpretation which of those features are actually being memorized by our model.
>
> **[4:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=284)** And then we can go ahead and update those, take them out, or maybe add more data in order to make sure that the model is better generalizing and not just remembering our data from before.
>
> **[4:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-15-model-explainability-assistant?u=76281980&t=294)** But thanks to this GPT, we can now dive deeper into the explanation of this dataset and find out what are actually the areas that our machine learning model works well and where does it need further improvement.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (12), shap (6), csv (2), gbt (1)
> **Code Keywords:** case, (3), let (2), this. (2), this, (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** open the (1), go to (1), scroll down (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 6. AI-Augmented Deployment and Application Development

> [↑ Back to Table of Contents](#table-of-contents)

#### Overview: Model deployment with GenAI
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=0)** - [Instructor] So let's say we trained the model, the performance is good, and now it's time to bring it to life.
>
> **[0:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=5)** This is called the model deployment phase, and also it's where many data science projects die because a lot of data scientists don't know how to do this.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=12)** But thanks to generative AI, that's going to change.
>
> **[0:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=16)** But first, let's quickly review the goals of this phase.
>
> **[0:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=19)** And this phase, you'll generally want to deploy the model efficiently to production so other people or applications can use it.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=26)** Ensure the proper model serving, create the necessary documentation, and set up the basic monitoring and maintenance.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=33)** Some common challenges here include the deployment process that can be quite complex, especially if you're not familiar with the underlying mechanics.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=41)** The documentation requirements can also be a burden.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=43)** Figuring out the best API design, implementing that, and then finally, monitoring the whole thing, maintaining the model, which relates back to the missing documentation.
>
> **[0:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=53)** Now, there are two big areas where GenAI can help us to overcome these challenges.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=58)** First, code generation for deploying the actual model, bringing it from your notebook to wherever it should live in this world so other people or services can access it.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=66)** And then secondly, documenting the API, so other people know how to use it.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=71)** And this is exactly what we're going to do now.
>
> **[1:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/overview-model-deployment-with-genai?u=76281980&t=73)** So let's get to the deployment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), finally, (1)
> **Env Vars:** api (2)
> **Documentation:** the documentation (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Use case 16: Model deployment assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=0)** - [Instructor] Okay, so let's find out how we can use generative AI to help us deploy our machine learning model.
>
> **[0:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=5)** In this case, we don't need code spaces.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=7)** Just go to the repo and then switch over to branch 0602.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=12)** And in this branch you will find the README file over here, which brings you to a Chat GPT.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=18)** So open this one in a new tab and you should see the model deployment assistant.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=24)** Now again, let's take a look under the hood of what's actually happening here.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=28)** So the instructions say that this is a machine learning model deployment expert.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=33)** It should help the user to deploy a machine learning model to a provider so other people or services can interact with it.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=38)** The deployed model must come with a user friendly guide or an API documentation.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=43)** Now the tasks are first step-by-step, ask what to deploy, provide a model documentation file, then how to deploy, ask the user whether they want to deploy the model as a Streamlit app or just rest API.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=56)** And again, feel free to just replace this one here with anything else you like.
>
> **[0:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=59)** Streamlit is a pretty good app for deploying really simple user interfaces to have other people interact with your model.
>
> **[1:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=66)** Then where to deploy, let users choose from these deployment options like AWS, Azure, Google Cloud, or Replit.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=72)** Again, feel free to customize these here as you need, and then provide deployment instructions one at a time.
>
> **[1:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=79)** And this is important here before proceeding to the next step, verify that the user has completed the previous step.
>
> **[1:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=85)** So this is just to make sure that the GPT guides the user through full process, one step at a time, which is more important for complex environments like AWS or Azure.
>
> **[1:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=94)** We don't want the GPT to give us a whole user instruction in one go, but just in small breadcrumbs.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=101)** Now when the deployment is complete, it should also create a quick user guide or a user-friendly API documentation based on the template attached.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=108)** We'll see that template in a minute, and it should also return the documentation as a downloadable HTML file according to the template attached, then details, avoid Docker and that's really necessary.
>
> **[1:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=118)** Again, feel free to update this.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=119)** And then for API deployment I wanted to have a Swagger UI add by default.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=124)** Now if we close this, you can see that this is one GPT where we actually added a knowledge file.
>
> **[2:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=129)** This knowledge file is just an template for how we want the API documentation to look like.
>
> **[2:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=133)** Then we also check code interpreter and data analysis just in this case because we wanted to generate an HTML document in the end that we can actually download.
>
> **[2:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=141)** And with that, let's see this one in action.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=145)** Okay, so in this chat you can see how I have initiated the conversation with start and then I was prompted to upload the model documentation.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=151)** And you can see how helpful this has become.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=153)** We have probably even uploaded this three or four times now to Chat GPT.
>
> **[2:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=157)** This is really good to give the model enough context of what we're trying to do just with one single file.
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=162)** And now it asks us to choose the deployment option.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=165)** Do we want to deploy the Streamlit app as a user friendly web interface or rather as a rest API, so a backend that can be integrated into other applications.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=174)** In this case, I'm choosing Streamlit and I let this GPT now guide me through the process for this.
>
> **[2:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=179)** Now it asks me, where do I want to deploy it?
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=182)** Gives me some options based on my initial prompt.
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=184)** In this case I'm going to use Replit because it is, as it says here, an easier and free option to go with.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=191)** So I'm saying Replit and now it guides me through the process of setting up a Streamlit app on Replit.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=198)** Even if I have no idea of how Replit works, it gives me step-by-step instructions on how to do this.
>
> **[3:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=204)** So first of all, I should go to [Replit.com](https://Replit.com) here and then log in or create a free account.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=209)** You can for example log in immediately with your GitHub account so you don't need to sign up for anything and create a new RepL, which is in this case a new project.
>
> **[3:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=218)** So let me show you how that works.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=220)** So this is how Replit looks like once you are locked in.
>
> **[3:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=224)** And here on the left side you can see create app and just as our GPT told me, I'm going to use Python here as an environment, and then I'm selecting create app.
>
> **[3:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=235)** So let's see actually what the next step was.
>
> **[3:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=238)** So it says now that the Replit project is ready, we need to install the required Python packages.
>
> **[4:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=242)** So in order to do this, we need to open the shell in our project, and then run this command here.
>
> **[4:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=248)** Alright, so let's copy this and move over to Replit.
>
> **[4:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=252)** I've actually created a sample application before, so I'm just going to open this one, but if you select a new one, this should basically look the same if you just create a new app from scratch.
>
> **[4:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=263)** So in order to run the shell command, I'm just opening the shell here and then just pasting this pip command that the GPT gave me in here, and execute that.
>
> **[4:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=273)** I ran that before so I'm not going to rerun it again.
>
> **[4:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=276)** So let's find out what the next step is.
>
> **[4:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=279)** So the next step is to upload the model file, in this case, our best GBR joblib.
>
> **[4:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=283)** So let's see how that works. Back to Replit.
>
> **[4:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=287)** And you can see on the left side here, I already uploaded this file.
>
> **[4:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=291)** So the way you do this, you click these three buttons, upload file, and this is where you would upload your file.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=297)** So back to Chat GPT, I confirmed with okay, I uploaded my joblib file and then it goes ahead and says let's write the Streamlit app.
>
> **[5:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=307)** So I need to create a new file which is called Streamlit App dot py, and then it gives me the whole code here.
>
> **[5:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=313)** And bear in mind it uses exactly the same feature names and the same code that I use for running my model locally because that's all part of the model documentation file.
>
> **[5:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=321)** So I can just copy this one here and head back over to Replit, where in this case I would create a new file which is called Streamlit App dot py.
>
> **[5:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=332)** And as you can see, it already exists because I created this one before.
>
> **[5:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=336)** And what I did here is just like pacing in the whole code from Chat GPT, just write into this simple file.
>
> **[5:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=342)** So let's go back to Chat GPT on what's next.
>
> **[5:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=345)** Next is that I save the file, in this case, Replit is doing that automatically.
>
> **[5:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=349)** And then I say okay, and we are now ready to run the Streamlit app on Replit.
>
> **[5:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=354)** So it says to me that I should open the shell again and then run this Streamlit command here.
>
> **[6:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=360)** Alright, so copy this one, and back to Replit.
>
> **[6:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=365)** Let's go back to our shell then delete this one here because I ran that before.
>
> **[6:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=371)** And now just hit enter and run this app.
>
> **[6:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=375)** And as you can see, it should now give you this URL.
>
> **[6:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=380)** You can see anything here that's not too bad because I ran this before.
>
> **[6:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=383)** So let's just close it.
>
> **[6:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=384)** But you should see on the bottom it gives you a new link.
>
> **[6:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=387)** And then on this link, if you click on it, it'll actually load the URL.
>
> **[6:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=392)** And then in this URL you'll be able to run your prediction.
>
> **[6:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=398)** So we can open this in a new tab so it actually is a little bit bigger.
>
> **[6:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=402)** And here you can see, we can now enter some values for our feature lags.
>
> **[6:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=405)** Let's come just with some values over here of like previous total quantity lags or previous average prices.
>
> **[6:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=412)** And then we can hit predict, and what we can see is the output from the model here.
>
> **[6:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=416)** So this is a super easy and user friendly way to have our model shared with other people and then let them interact with the model that we just built.
>
> **[7:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=423)** And Chat GPT gave us all the instructions for that and we didn't have to be a Replit or Streamlit expert in order to do this.
>
> **[7:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-16-model-deployment-assistant?u=76281980&t=431)** And we didn't even have to be a Replit or Streamlit expert to do this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (5), case, (4), this, (3), switch (1)
> **Env Vars:** gpt (12), api (6), url (3), aws (2), html (2)
> **CLI Commands:** find (3), aws (2), python (2), make (1), docker (1)
> **Definitions:** is a  (4), is called (2)
> **UI Navigation:** go to (2), open the (2), click on (1)
> **Exercise Files:** template (4)
> **Cross-References:** go back to (2)
> **Documentation:** the readme (1), the documentation (1)

#### Use case 17: API documentation assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=0)** - [Instructor] Okay, so the next use case is really straightforward as it builds up exactly on top of what we have just built before.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=6)** Now we use the same GPT, the same assistant, and also the same chat as just previously.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=12)** The only thing we are adding now is that we asked the GPT to create documentation based on what it just did.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=18)** So in this case, actually went just one step further and said, let's deploy this as an API as well.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=24)** Remember before we deployed our app using streamlet, and now we want to deploy just as an API and also we want to use Replit for this.
>
> **[0:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=31)** Now the GPT will go ahead and list out all the steps of how we can do this.
>
> **[0:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=35)** You see, we need to install some new packages over here.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=38)** We need to create a new API file.
>
> **[0:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=40)** This is the code for this API file, and then we save it on Replit.
>
> **[0:44](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=44)** We call this command in order to launch our API and then our API should be ready under our custom URL.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=52)** Feel free to follow along here, but that's not the main demonstration for this use case.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=56)** The main demonstration is now to show you how to generate a documentation from this API here in particular.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=63)** So once we say, okay, this works, now give me the documentation, the GPT will actually go ahead and generate the API documentation based on the template that I provided to the GPT.
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=75)** Bear in mind, you can of course upload your own template or any document that you want this GPT to fill in.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=80)** In my case, it was really basic, it just includes a documentation with the base URL, the available endpoints, the request example, the response example, some error handling, and then the code for calling the API.
>
> **[1:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=92)** It generates the API documentation as an HTML file, just as they ask it to do, and provides me with a final HTML document in the end.
>
> **[1:39](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=99)** If I open this file, it'll look like this.
>
> **[1:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=103)** So this is the nicely formatted HTML document that I provided, and it includes my base URL, the different endpoints, what I get in the root endpoint, what I get in the predict endpoint, what features are we expecting, an example request, an example response, and also finally, the end-to-end code in Python I can use in order to make a request to this API.
>
> **[2:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=126)** This can of course be even more descriptive.
>
> **[2:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=128)** Feel free to tune it and tweak it as you like.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=131)** You now have all the information available both in the chat from deploying this API and also in your model documentation.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-17-api-documentation-assistant?u=76281980&t=136)** So if you want to add more context and information about your model to the API, it's just one prompt way to do this in the GPT.

> [!info]- Semantic Content
>
> **Env Vars:** api (13), gpt (7), url (3), html (3)
> **Code Keywords:** this. (3), case, (2), let (1), case. (1), finally, (1)
> **CLI Commands:** python (1), make (1)
> **Exercise Files:** template (2)
> **Documentation:** the documentation (1)
> **Definitions:** we call this (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 7. AI-Augmented Communication and Documentation

> [↑ Back to Table of Contents](#table-of-contents)

#### Relevance of communication and documentation
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=0)** - [Narrator] So last but not least, let's cover the important communication and documentation aspect as part of your data science project and how generative AI can help you with that.
>
> **[0:09](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=9)** So this phase isn't really a phase that stands on its own, but rather something that is there all the time, effectively communicating results to stakeholders, creating a comprehensive project documentation and developing compelling data stories to share insights and transfer knowledge.
>
> **[0:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=26)** Here are some common challenges in this area.
>
> **[0:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=29)** First, documentation is a time consuming process and often not much fun.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=33)** Second, creating engaging presentations, it's difficult.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=36)** Not everyone can do it well.
>
> **[0:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=38)** And then also explaining technical concepts to non-technical stakeholders, which can be quite challenging.
>
> **[0:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=43)** Non-technical stakeholders often get overwhelmed or intimidated when it gets too technical, which is not helpful for bringing your intended message across.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=52)** There are three big blocks where GenAI can be particularly useful.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=56)** We'll cover each of these in the next videos.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=58)** First, end-to-end project documentation, which ensures complete coverage of what you did and wraps up everything into a structured, well-documented format.
>
> **[1:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=68)** Second, data storytelling enhancement.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=71)** It helps you improve your presentation skills and increases the impact of your storytelling.
>
> **[1:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=75)** And thirdly, stakeholder communication, which translates between technical and non-technical terms and enhances message clarity and reduces misunderstandings.
>
> **[1:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/relevance-of-communication-and-documentation?u=76281980&t=86)** So without further ado, let's dive into the remaining use cases.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Use case 18: Comprehensive project documentation assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=0)** - [Instructor] So let's bring everything together that we did so far, and create a comprehensive end-to-end project report.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=6)** How do we do this?
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=7)** Go to our GitHub repository, and make sure you're in branch 07_02.
>
> **[0:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=12)** And in this branch, you will find a couple of links.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=15)** And this first link here, GPT Link, brings you to the project documentation assistant.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=20)** So if you open this link, you can see this assistant over here.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=23)** And before we start off and go into the first chat, let's quickly see what's happening under the hood.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=28)** So let's open the configuration for this one.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=30)** And again, you will find this configuration file in the GitHub report.
>
> **[0:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=34)** Now, the role of this project communication assistant is to behave as a highly skilled project documentation expert.
>
> **[0:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=40)** The goal is to help the user create a thorough, easy-to-understand end-to-end project documentation for a given data science or machine learning project.
>
> **[0:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=47)** And then the tasks are to be done one by one.
>
> **[0:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=49)** First, we request all available artifacts from the user, ask for the business requirement document, presentations, programming files, model documentation, model results, other technical communication, meeting protocols if there are, et cetera.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=63)** And this might seem quite overwhelming, but if you take a look at this, it might actually look familiar, because these are all things that we produce throughout our whole workflow.
>
> **[1:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=73)** So you can just upload these documents, and then these can be taken as an input for this GPT.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=78)** And then we wanted to start draft the first section based on the template below.
>
> **[1:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=82)** We'll take a look at this in a second.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=83)** And then this is really important to cite only sources from the user uploaded documents.
>
> **[1:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=87)** So there must be no text without a source.
>
> **[1:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=89)** This is important because we don't want this assistant to create new information.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=93)** It should basically just take information that is already there, and organize it in a much better way.
>
> **[1:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=98)** And then we want to have the user feedback for every section of the draft, and continue this iteratively until the whole document is completed.
>
> **[1:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=106)** And once it's complete, we wanted to provide the final documentation as an HTML file or Word document, and some details here.
>
> **[1:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=112)** We want it to be brief and also avoid technical language unless necessary.
>
> **[1:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=116)** And more importantly, this is the template we want to use.
>
> **[1:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=119)** In this case, I'm using the CRISP-DM phases here to organize my report, and you can see how practical that framework is, because it also serves as a nice outline for such a project report.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=130)** Alright, now, so let's see this in action.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=132)** Again, I've prepared a little sample chat here.
>
> **[2:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=135)** Feel free to follow along or create your own chat depending on your preference.
>
> **[2:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=139)** I initiated that chat with Start, and then it asks me to provide all these inputs here.
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=144)** And in this case, I just uploaded all the files that I had so far.
>
> **[2:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=148)** I didn't create anything new.
>
> **[2:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=150)** And these are all the files you will find in this GitHub report under the Artifacts folder.
>
> **[2:35](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=155)** So just pull these files up here, and from there, you will see that the GPT starts to draft the first section, which is the business understanding and data understanding phase.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=165)** And it's pulling information here from our business requirements document, and actually doing this in the so-called ChatGPT Canvas feature.
>
> **[2:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=174)** Now if you click here, then you will see that this brings up the document on the right side, which allows me to interact with that document in a more seamless way.
>
> **[3:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=182)** For example, I could now select something here, and then ask ChatGPT, for example, to expand this, or to remove this, or provide further details.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=191)** And you see it also provides the source where this particular piece of information is coming from.
>
> **[3:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=195)** This will be important later on if we export this, but for now, you can see we have the sources here.
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=200)** And then it goes through the whole process asking me if I want to proceed to the next section, or if I have any updates.
>
> **[3:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=206)** In this case, I just said proceed.
>
> **[3:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=209)** Then it went ahead and created the data preparation data cleaning section for me.
>
> **[3:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=213)** Also, I said here in this case proceed, because this is how it looks like.
>
> **[3:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=217)** Pretty neat, everything taken from our data dictionary, and also our data pre-processing code, and put in here in nice plain English.
>
> **[3:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=226)** After I say proceed, it goes ahead and creates the modeling section, and this is how the modeling section looks like.
>
> **[3:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=231)** And then so I continue this whole loop until finally we get to a point where it has everything in regarding the redeployment, and also the next steps that need to be taken right now.
>
> **[4:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=243)** Now in this case, I say let's finalize, give me this documentation as an HTML file.
>
> **[4:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=248)** And I'm also adding here no canvas, so this should just be a download link.
>
> **[4:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=253)** And this is just a reinforce that I just want to have a plain download link over here, and it'll give me the HTML file over here.
>
> **[4:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=259)** And now this HTML file, you'll also find this in the GitHub report, looks like this.
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=265)** So you can see this is nicely formatted, and it actually looks pretty good.
>
> **[4:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=268)** But there's one thing missing here, which is the sources.
>
> **[4:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=271)** And this is really important, because if it's just a report without any source, then we can't really be sure that this is really coming from the original source document, like the business requirements document or the model documentation for example.
>
> **[4:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=282)** So let's go back to ChatGPT, and ask it especially about this documentation.
>
> **[4:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=288)** So we say, make sure the documentation includes references to the original source files.
>
> **[4:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=291)** Use file names to cite these.
>
> **[4:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=294)** And if we do this, it'll recreate the document, and also include the references here.
>
> **[4:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=298)** So let me show you how that looks like.
>
> **[5:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=301)** Now, if we open the Demand Forecasting Documentation with references HTML file, we can see that we basically have the same text, but now we can see where this information is coming from.
>
> **[5:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=311)** So this one is from the business requirement document.
>
> **[5:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=313)** This is also from the business requirement document here.
>
> **[5:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=316)** This is from the model documentation, and this is taken from our code.
>
> **[5:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=320)** So these references are really good pointers for us to both understand where this information is coming from, but also to have a entry point if you want to dive deeper and add even further information here, or perhaps just tell people where they can go and look for more in-depth information.
>
> **[5:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-18-comprehensive-project-documentation-assistant?u=76281980&t=337)** And this is how we can use this GPT to wrap up everything that we have done, and provide a really nice end-to-end project report.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (5), case, (4), continue (2), from. (2)
> **Env Vars:** html (5), gpt (4), crisp (1)
> **CLI Commands:** find (4), make (2)
> **Tools:** github (4)
> **UI Navigation:** open the (2), go to (1)
> **Analogies:** for example (3)
> **Exercise Files:** template (2)
> **Cross-References:** go back to (1)

#### Use case 19: Data storytelling assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=0)** - [Instructor] Okay, so now that we have a cool report, let's see how we can turn this into an engaging data story, which is super important because in the end we need to communicate all the findings that we have.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=10)** And this is where of course, generative AI can be super helpful.
>
> **[0:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=14)** So make sure you're in Branch 07_03, and then scroll down and open this GPT link over here.
>
> **[0:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=20)** And this will bring you to the data storytelling assistant.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=23)** So let's see what this assistant is doing.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=27)** So you can see that I prompted this to behave as a senior data analyst at McKinsey, formerly BCG specialized in creating highly engaging and convincing data stories.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=36)** Why did I put in the names here?
>
> **[0:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=37)** Well, because these are organizations that thrive in creating highly engaging presentations.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=42)** So I want to extract this expert knowledge from the LLM.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=46)** And then the goal is to help the user craft a compelling data story based on the pyramid principle, given the input data.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=52)** And this is an important keyword here because the pyramid principle is a principle that is used by these consultancies in order to create engaging data stories.
>
> **[1:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=60)** So let's see how that pyramid principle works.
>
> **[1:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=62)** The tasks are as follows, done one by one.
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=65)** First, we ask the user to provide some data.
>
> **[1:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=68)** This could be a report, an existing documentation, or just some notes.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=71)** And then we ask the user to provide some more details on the audience of this presentation.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=76)** And if needed, we ask clarifying questions to gather more relevant information.
>
> **[1:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=80)** And then the assistant should start to build the pyramid.
>
> **[1:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=82)** That means discuss what is the key insight that will be the top of the pyramid, the key message that needs to be delivered.
>
> **[1:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=88)** And then we want to add three or four supporting arguments for this key insight.
>
> **[1:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=93)** And this will essentially form the structure of our presentation.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=96)** So we make sure that everything that we put in is really driving the key message home.
>
> **[1:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=101)** In point 6, we wanted to go through all the supporting arguments and collect evidence or examples based on the information that the user has provided.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=107)** And if data is missing, we could ask the user to provide this data.
>
> **[1:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=110)** And once the pyramid is constructed, share a summary of the overall story flow and the presentation title.
>
> **[1:55](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=115)** And finally, once the user signs off, give us the PowerPoint or in this case, Slidev file.
>
> **[2:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=121)** If you're not familiar with Slidev, it's essentially a programmatic way to create presentations because ChatGPT is not really that great at creating PowerPoint presentations out of the box.
>
> **[2:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=130)** But for our purposes, it'll be good enough.
>
> **[2:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=132)** So details use simple non-technical language, actionable, and then also tailor the pyramid to the audience perspective and consider using mini pyramids for complex topics.
>
> **[2:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=142)** So let's close this one here and see it in action.
>
> **[2:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=145)** Again, you can always initiate that with the start button, and that's exactly what I did before.
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=151)** So you can see that after the start prompt, I get the greeting here with some questions.
>
> **[2:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=157)** Do you have a data set report or notes which are target audience?
>
> **[2:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=161)** What's the main goal of this presentation?
>
> **[2:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=162)** And this is where I just provided in my case, the model documentation file.
>
> **[2:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=168)** Remember the model documentation file is just a summary of the whole modeling process, what kind of model we chose, what were the pitfalls, what was the evaluation of that model?
>
> **[2:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=176)** And let's say we want to communicate these insights to a certain audience and to what audience?
>
> **[3:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=181)** Well, this is what the GPT asks us, who is your target audience?
>
> **[3:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=184)** Is it executives, decision makers?
>
> **[3:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=186)** Is it other data scientists or is it maybe clients or external stakeholders?
>
> **[3:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=190)** And then it also suggests to define the key message based on the data that we uploaded.
>
> **[3:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=195)** In this case, it could be three ideas that it comes up here with.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=198)** The first one could be to say our gradient boosting model needs refinement to improve generalization and prevent overfitting.
>
> **[3:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=204)** The other could be to expand the training data and refine features which is critical for better demand forecasting.
>
> **[3:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=211)** Or thirdly, simpler models might perform just as well with lower risk of overfitting.
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=216)** And in this case, I said my target audience is decision makers.
>
> **[3:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=220)** And I really like the third key insight or key message here, which is simpler models might perform just as well with lower risk of overfitting.
>
> **[3:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=227)** And now based on this profile, the GPT goes ahead and creates the pyramid for me.
>
> **[3:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=232)** So the key insight top of the pyramid is this one, simpler models might perform just as well with lower risk of overfitting, and then it breaks this down to three supporting arguments.
>
> **[4:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=242)** So this will be the middle of the pyramid.
>
> **[4:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=244)** The first one is overfitting is detected.
>
> **[4:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=247)** The current model fails on unseen data and it gives some data evidence here.
>
> **[4:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=251)** The second is that the gradient boosting is too complex for limited data and also provides some data points here to back this up.
>
> **[4:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=258)** And then thirdly, it says that reducing the complexity and trying simpler models can improve generalization.
>
> **[4:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=264)** Also backing this up with a few data points.
>
> **[4:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=267)** And then in the next steps it asks us if we agree to the structure or if we would like to make any adjustment before we move to the final presentation.
>
> **[4:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=274)** And I, in this case said, let's add a little bit more depth to each argument because otherwise it might be quite shallow.
>
> **[4:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=281)** And so it goes ahead and adds data-driven details and also clear business implications to each of these different arguments.
>
> **[4:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=287)** So you can see here, for example, that for the first argument overfitting detected, that we see some evidence here both now in the training and tested performance and also some elaboration what this would mean in terms of business impact.
>
> **[5:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=301)** So this is important to communicate this to our decision makers, which were the key audience of this presentation.
>
> **[5:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=308)** We also get a little bit more explanation on the gradient boosting that might be a little too complex for our limit data with an alternative approach of what we could do instead.
>
> **[5:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=317)** And also the business impact here.
>
> **[5:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=320)** Same goes for the third part of the pyramid where we have the evidence and recommendations and then the business impact tailored to exactly this argument.
>
> **[5:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=329)** As a next step, it suggests some decisions that are required.
>
> **[5:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=332)** And then action plan, which in this case could include comparing different models and see if they deliver better performance with less complexity.
>
> **[5:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=341)** Now it asks us if we agree to this refined structure.
>
> **[5:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=343)** And in this case I say, yes, okay.
>
> **[5:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=346)** And it goes ahead and builds the final pyramid structure for me.
>
> **[5:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=350)** So this is the overall story flow of my presentation.
>
> **[5:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=352)** This is the key insight.
>
> **[5:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=354)** And then it delivers all the supporting arguments which will turn out to become the structure of the presentation that I'm giving.
>
> **[6:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=361)** So this is the presentation flow.
>
> **[6:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=363)** We have every slide here with a title and then some bullet points on it.
>
> **[6:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=366)** The second one is the executive summary.
>
> **[6:08](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=368)** Slide number 3 is the key argument for the overfitting issue.
>
> **[6:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=371)** Slide number 4, the complexity versus data science.
>
> **[6:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=374)** Slide number 5, the simplification and model alternatives.
>
> **[6:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=377)** And then slide number 6, the action plan and next steps.
>
> **[6:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=381)** And whether you like that or not, you can always go back and revise that.
>
> **[6:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=384)** But for now, let's say I'm good with this draft and I want to move ahead.
>
> **[6:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=388)** So I just ask you to create the final presentation file.
>
> **[6:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=391)** And if I download this PowerPoint presentation, which you will also find in the repo, you will find something that looks like this.
>
> **[6:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=398)** So this is the presentation as it comes out from ChatGPT.
>
> **[6:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=401)** And I mentioned already ChatGPT is not really the best tool to create nice visual presentations, but it's really good to prefill presentations with content and give us a high level structure.
>
> **[6:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=411)** So you can see we have the title here, Improving Demand Forecasting: Why Simpler Models Might Be Better, A Data-Driven Approach to Model Selection, which is quite a good title.
>
> **[7:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=420)** And then we have the executive summary with the different bullet points here, the over fitting issue and all the other points that we discussed.
>
> **[7:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=425)** And now of course, we could go ahead and just like apply our own styling or our own company template to this presentation to make it look really nice.
>
> **[7:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-19-data-storytelling-assistant?u=76281980&t=433)** But that will be out of scope of this course, and I leave that to you so you can adjust that to whatever template or visual you like.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (4), super (2), finally, (1), this. (1)
> **CLI Commands:** make (4), find (2)
> **Env Vars:** gpt (3), bcg (1), llm (1)
> **Cross-References:** in the next (1), we discussed (1)
> **Exercise Files:** template (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), just like (1)
> **UI Navigation:** scroll down (1)

#### Use case 20: Stakeholder communication assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=0)** - [Instructor] One key trait of data science is that you need to communicate across the whole organization from very technical to not so technical.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=7)** And this is where a custom GPT can help you that adapts the key message that you have to different type of audiences.
>
> **[0:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=15)** Now, open the GitHub Repo and Branch 07_04.
>
> **[0:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=18)** Go to the ReadMe file and then you will find the first link here, which takes you to the Stakeholder Communication Assistant.
>
> **[0:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=25)** So, let's review what this assistant is doing.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=30)** You can see that the role of this GPT is to be a communication expert who helps data scientists communicate complex insights clearly by simplifying technical terms and anticipating stakeholder questions.
>
> **[0:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=41)** The goal is to ensure reports and presentations are understandable and address key stakeholder concerns.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=46)** And the tasks that need to be performed one by one are the following.
>
> **[0:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=50)** First, ask the user for a target audience.
>
> **[0:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=52)** For example, they could be executives, marketers, investors, or whatsoever, and their level of technical expertise.
>
> **[0:58](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=58)** Also, we want to define what are the key interests of this group.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=61)** And then, there are actually two working modes that this GPT supports.
>
> **[1:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=65)** The first working mode is to simplify technical terms, and the second working mode is to generate stakeholder questions.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=72)** So, let's go through these two modes.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=74)** The first mode asks the user to upload a document, and then it will go ahead and extract technical jargon and acronyms from this document.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=83)** And ultimately it provides a table where one column contains the original terms and the other columns, the audience tailored versions of that, which is extremely helpful to find out what are the difficult or not so easy to understand terminologies or expressions in your source document and then translate that into a more audience-friendly format.
>
> **[1:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=102)** And then, mode 2 is to anticipate stakeholder questions.
>
> **[1:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=107)** It starts very similar.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=108)** The user needs to upload the document and then the GPT will start to generate potential questions that this stakeholder might have.
>
> **[1:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=116)** So, it will group the questions around similar themes and also prioritize the most relevant and likely questions.
>
> **[2:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=122)** And this will help you to enrich your existing presentations with insights or with further details or further insights that these people might have.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=131)** Now, let's close this and see how this looks like in action.
>
> **[2:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=134)** You can initiate the conversation with Start.
>
> **[2:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=136)** And in my case, I'm just pulling up the previous chat, which I have prepared for this.
>
> **[2:22](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=142)** So, you can see once you start this conversation, it starts, it greet you with different questions.
>
> **[2:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=146)** Who's your target audience?
>
> **[2:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=147)** What's the level of technical expertise?
>
> **[2:29](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=149)** What's the key interest?
>
> **[2:31](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=151)** And also which mode we prefer.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=153)** And in this case, let's say, we are going to report to the operation managers here in our retail store.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=158)** And then, the level of this manager is low technical expertise with regards to data and IT, but they have really high domain expertise.
>
> **[2:45](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=165)** And the focus here is on ROI, on return of investment.
>
> **[2:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=169)** So, and then we also prefer mode number 1, which is to simplify technical terms.
>
> **[2:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=173)** Now, the GPT will just recap what we just told it and then bring up the next step, which in this case is to upload a document.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=180)** What I did here was just to upload the presentation that we just generated in the previous use case, the Demand_Forecasting_Presentation, where we delivered the key insight that it might be better to train a less complex model.
>
> **[3:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=194)** And you can see that the GPT now extracts the original terms and then the simplified explanations of these.
>
> **[3:20](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=200)** For example, instead of talking about gradient boosting regressors, we could say that it's a complex forecasting model that may not work well with small data.
>
> **[3:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=208)** Or instead of talking about overfitting, we could tell that when a model learns a pattern it works only on past data but fails in real world scenarios.
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=216)** And there are other explanations here which you might like to adapt, or which you might like not to adapt depending on your preference.
>
> **[3:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=223)** But this gives you a good overview of what are the most technical terms here and the terms that need your attention most when it comes to tailoring that to your audience.
>
> **[3:52](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=232)** It also delivers some key takeaways here.
>
> **[3:54](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=234)** So, one of the key takeaways in plain business terms could be to say that the current model is too complex for the available data leading to unreliable demand forecasts, and that simpler models could provide more stable prediction, which then would reduce the risk of stockouts or overstocking.
>
> **[4:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=251)** Now with that, let's see how mode number 2 would look like.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=255)** If I tell it to switch to mode 2, it will go ahead and provide me with a summary of questions that the operation managers might ask me.
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=265)** They might ask me questions about the model performance and accuracy.
>
> **[4:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=268)** For example, why does the current model perform poorly in real world data?
>
> **[4:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=272)** Or how do we know that simpler models will actually provide better results?
>
> **[4:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=276)** Or with regards to business impact and ROI, it could be that we get the question, "How does unreliable forecasting affect our bottom line?"
>
> **[4:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=283)** or "What are the financial risks of stockouts are overstocking?"
>
> **[4:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=286)** or "Will switching to a simpler model reduce our costs, by how much?"
>
> **[4:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=291)** So, these are all questions that could come up, and this will help us to anticipate a question.
>
> **[4:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=296)** For example, a question like this.
>
> **[4:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=297)** "How difficult is it to switch from GBR to a simpler model?"
>
> **[5:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=301)** Is it difficult? Is this really complex?
>
> **[5:02](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=302)** Well, for us, it could be really simple and easy to do this, but for a stakeholder who's not in data science, they might not know whether this takes half a day or one week or a whole month to implement that.
>
> **[5:13](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=313)** So, these are all questions we could now anticipate and get the answers ready.
>
> **[5:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/use-case-20-stakeholder-communication-assistant?u=76281980&t=317)** So, once these questions come up, we are actually prepared to answer them in the best way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (3), this. (2), switch (2), this, (1)
> **Env Vars:** gpt (6), roi (2), gbr (1)
> **Analogies:** for example (4)
> **UI Navigation:** open the (1), go to (1), switch to (1)
> **CLI Commands:** find (2)
> **Documentation:** the readme (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Course recap and key takeaways
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=0)** - [Instructor] So let's review what we've covered in our course about enhancing our productivity as data scientists with the help of generative AI.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=7)** In this course, we explored five key areas.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=10)** We learned how GenAI fits into data science, explored the basics of prompt engineering and saw how to implement AI assistants and copilots ourselves using real world examples.
>
> **[0:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=21)** We also discussed balancing automation with human expertise, and how to build efficient AI-augmented workflows.
>
> **[0:28](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=28)** I hope you could see how GenAI really helps at every stage of a data science project.
>
> **[0:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=33)** For business understanding, it helps to define problems better, align with business goals, and interpret data much faster.
>
> **[0:40](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=40)** In data prep, it cuts down cleaning time.
>
> **[0:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=42)** And during modeling, it speeds up development, while at the same time getting higher quality outcomes.
>
> **[0:49](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=49)** When evaluating machine learning models, GenAI helps us to deliver an improved documentation while spending less time creating it, which leads to higher documentation quality, and more decision transparency.
>
> **[1:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=61)** For model deployment, GenAI can be used to streamline the implementation process significantly.
>
> **[1:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=67)** And finally, it helps us communicate better with stakeholders.
>
> **[1:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=71)** Let's review some of the best practices that we've learned here.
>
> **[1:14](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=74)** When it comes to effective prompting, success really hinges on these things.
>
> **[1:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=78)** Clear and specific instructions, iterative refinements, and providing context-rich inputs.
>
> **[1:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=85)** Having these basics dialed in will really make a big difference.
>
> **[1:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=90)** And when it comes to integrating GenAI into our data science workflows, we start small and then build up.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=96)** Always check AI outputs, especially when you're just starting out, and keep humans in charge.
>
> **[1:42](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=102)** Up to a point where you are confident that removing human supervision does not affect the result negatively.
>
> **[1:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=108)** This approach helps to avoid mistakes while maximizing benefits.
>
> **[1:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=113)** To enhance your data science workflow with GenAI effectively, you should watch out for repetitive tasks, create prompts you can reuse, and document the patterns that work.
>
> **[2:04](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=124)** This makes your process more efficient over time.
>
> **[2:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=127)** While leveraging generative AI for data science can be extremely practical and make you more productive, there are some pitfalls you should avoid.
>
> **[2:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=135)** First, don't fall asleep while in the driver's seat.
>
> **[2:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=138)** Relying too much on AI or trusting AI outputs blindly can set your project up for failure.
>
> **[2:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=144)** And technically, always make sure that when you prompt an AI models, you provide enough context and background to formulate a clear, unambiguous request.
>
> **[2:33](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=153)** Remember, AI is a leverage, not a replacement for your expertise.
>
> **[2:38](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=158)** Looking ahead, what should you do next?
>
> **[2:41](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=161)** First of all, keep practicing.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=163)** Build your prompt library over time, experiment with new techniques, and double down on things that work well for your organization.
>
> **[2:50](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=170)** Even if you can just implement a handful of the use cases shown in this course, this could give you a tremendous productivity boost.
>
> **[2:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=177)** This course is meant to be the beginning of your journey, not the end.
>
> **[3:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=180)** So stay up to date with new AI capabilities, adapt to new tools and AI models as they come out, and see how you can refine your workflows based on the evolving technology.
>
> **[3:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=191)** If you are working with others, be sure to share what you learned and foster a culture where you establish best practices.
>
> **[3:18](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=198)** The more people experimenting with GenAI, the more likely you are to find things that move the needle and work really well.
>
> **[3:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=204)** Make sure these are well-documented so that others can benefit from these discoveries as well.
>
> **[3:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=210)** Success is simple.
>
> **[3:32](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=212)** Don't adopt generative AI because it's cool, but because it's useful for you.
>
> **[3:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=216)** This could mean you're able to work faster, you're able to deliver better results, or simply, you are enjoying what you do even more.
>
> **[3:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/course-recap-and-key-takeaways?u=76281980&t=223)** If you're hitting these marks, it's a good sign you're on the right track.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4), find (1)
> **Code Keywords:** let (2), finally, (1)
> **Definitions:** is a  (1)
> **Best Practices:** always make sure (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Future trends in AI-augmented data science
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=0)** - [Instructor] Finally, let's see what's next in generative AI and how it's about to transform the way we do data science in the future.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=7)** One of the big themes is AI agents.
>
> **[0:10](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=10)** As you gain experience and discover more workflows that benefit from AI augmentation, the next logical step is to increase the level of integration and automation so that you're not just building assistants and copilots, but true AI agents that can do the work for you without you lifting a finger.
>
> **[0:27](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=27)** Let's start with autonomous data science agents.
>
> **[0:30](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=30)** These are AI systems that can work independently in a self-directed data science workflow.
>
> **[0:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=36)** Imagine a computer running the CRISP-DM cycle on its own, stitching together the different steps we've done in this course, and being able to orchestrate all the different tasks involved.
>
> **[0:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=46)** Ultimately, given the data set and the business problem, these systems could iterate toward the technically best solution, continuously learning and adapting as new data comes in.
>
> **[0:56](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=56)** Multi-agent systems would take this even further.
>
> **[0:59](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=59)** Here, different AI agents work together like a team.
>
> **[1:03](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=63)** Perhaps you would have one agent for each stage of the CRISP-DM cycle, where every agent is an expert on its own, having a clearly defined role.
>
> **[1:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=72)** They share tasks between each other and work together smoothly as a team.
>
> **[1:16](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=76)** Imagine it like having a coordinated digital data science workflows that can operate with only minimal human involvement.
>
> **[1:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=83)** Here's how some of these agents could look like.
>
> **[1:26](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=86)** For example, we could have a data discovery and data collection agent that automatically checks data quality and keeps information up to date based on the systems it has access to.
>
> **[1:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=96)** Equipped with the right tools, it could potentially even fix common data quality errors and update data dynamically in a dedicated database.
>
> **[1:46](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=106)** Orchestration agents would come in to build self-improving analysis pipelines.
>
> **[1:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=111)** They adapt features as needed and generate insights automatically, surfacing only the most important pieces of information to humans.
>
> **[2:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=120)** In model operations, data science agents continuously improve model performance.
>
> **[2:05](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=125)** They could track experiments automatically and fix deployment issues on their own using self-healing systems.
>
> **[2:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=131)** Eventually, this could lead to more stable and up-to-date and efficient ML systems.
>
> **[2:17](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=137)** And to facilitate all of these things, AI systems will need to work with each other.
>
> **[2:21](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=141)** This will result in specialized networks of AI agents to emerge, which will be able to decompose tasks into smaller items and combine findings to a final solution, very similar to how humans are solving problems in a large organization.
>
> **[2:36](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=156)** But let's be clear.
>
> **[2:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=157)** While all of this sounds really exciting, the future isn't just about AI working alone.
>
> **[2:43](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=163)** AI agents will be working alongside humans for the foreseeable future.
>
> **[2:47](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=167)** They'll understand context, communicate naturally, and make proactive suggestions when needed.
>
> **[2:53](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=173)** And that's where we will need humans to understand the nuances of these systems, ideally by having worked with them in an extended workflow.
>
> **[3:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=181)** So starting with assistants and copilots really sets you up for success in this future.
>
> **[3:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=187)** Let's briefly shine a line on how this evolution will reshape data science jobs.
>
> **[3:12](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=192)** Data scientists will need new skills.
>
> **[3:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=195)** They'll need to be able to direct AI through effective prompts, manage agent systems, and design overall solutions.
>
> **[3:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=203)** There will also be new roles that will emerge.
>
> **[3:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=205)** We'll need AI architects, agentic system managers, and specialists who can bridge the gap between humans and AI.
>
> **[3:34](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=214)** Ultimately, the focus will shift to bigger challenges.
>
> **[3:37](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=217)** Data scientists will be able to tackle even more complex problems end-to-end and create innovative solutions while AI handles most of the underlying routine tasks.
>
> **[3:48](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=228)** But with great power comes great responsibility.
>
> **[3:51](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=231)** We'll need strong oversight of AI decisions, bias monitoring, and clear transparency rules.
>
> **[3:57](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=237)** Success also requires good technical foundations.
>
> **[4:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=240)** Organizations must be able to provide the infrastructure to deploy scalable agent systems and ensure there are the necessary security guardrails in place, in line with processes to optimize the growing resource and computation demands.
>
> **[4:15](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=255)** And remember, the human factor remains central to this future.
>
> **[4:19](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=259)** Organizations must manage change carefully, build trust, and help people learn new AI skills.
>
> **[4:25](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/future-trends-in-ai-augmented-data-science?u=76281980&t=265)** The goal is to enhance human capabilities and not replace them in the hope that AI can do everything just better and cheaper.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (3), finally, (1)
> **Analogies:** imagine (2), for example (1), similar to (1)
> **Env Vars:** crisp (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Next steps in your GenAI journey
> [LinkedIn Learning](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=0)** - [Tobias] Thanks for watching the course.
>
> **[0:01](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=1)** I really hope you enjoyed it, and I wish you the best of luck on your data science and generative AI journey.
>
> **[0:06](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=6)** I'd love to get your feedback.
>
> **[0:07](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=7)** If you took this course and enjoyed it, feel free to post it on LinkedIn and tag me.
>
> **[0:11](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=11)** You can reach me here on this profile and feel free to connect and there's much more in AI here at the LinkedIn Library, including more courses that I have created so you can check them out, and I wish you all the best on your generative AI learning journey.
>
> **[0:23](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=23)** Until next time.
>
> **[0:24](https://www.linkedin.com/learning/enhancing-your-productivity-as-a-data-scientist-with-generative-ai/next-steps-in-your-genai-journey?u=76281980&t=24)** (speaking foreign language)

> [!info]- Semantic Content
>
> **Speakers:** - [tobias] (1)


## Instructor

- [[Tobias Zwingmann]]

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]
← [[Data Science Team Lifecycle Management]] | **8 of 10** | [[Data-Informed Strategic Thinking for Senior Analysts and Data Scientists]] →

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Strategy and Planning]]

---

[↑ Back to top](#)