---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ai-orchestration-developing-and-testing-your-ai-prototype
url: "https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype"
duration_minutes: 58
duration: 58m
level: Intermediate
updated: 4/9/2025
learners: 2763
skills:
  - Prototype Validation
  - Software Quality Assurance
  - AI Software Development
  - Artificial Intelligence (AI)
  - AI Orchestration
exercise_files: true
github: "https://github.com/LinkedInLearning/ai-orchestration-developing-and-testing-your-ai-prototype-5211016"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQES1rTsnPi3cQ/learning-public-crop_675_1200/B4EZWwZFpEG0Ac-/0/1742421122014?e=2147483647&amp;v=beta&amp;t=Y85moEEB3QN2DCcAk23GWziLQT4AcMYn8WNKPqqbMvs"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Architecture%20and%20Orchestration%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)'
prev_courses:
  - '[AI Orchestration- Designing the Prototype Architecture and Data Strategy](AI%20Orchestration-%20Designing%20the%20Prototype%20Architecture%20and%20Data%20Strategy.md)'
next_courses:
  - '[AI Orchestration- Validation and User Feedback and Performance Metrics](AI%20Orchestration-%20Validation%20and%20User%20Feedback%20and%20Performance%20Metrics.md)'
path_nav: '[{"path":"Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning","position":4,"total":5,"prev":"AI Orchestration- Designing the Prototype Architecture and Data Strategy","next":"AI Orchestration- Validation and User Feedback and Performance Metrics"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/prototype-validation
  - skill/software-quality-assurance
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/ai-orchestration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Orchestration-%20Developing%20and%20Testing%20Your%20AI%20Prototype.md)

![AI Orchestration: Developing and Testing Your AI Prototype](https://media.licdn.com/dms/image/v2/D4E0DAQES1rTsnPi3cQ/learning-public-crop_675_1200/B4EZWwZFpEG0Ac-/0/1742421122014?e=2147483647&amp;v=beta&amp;t=Y85moEEB3QN2DCcAk23GWziLQT4AcMYn8WNKPqqbMvs)

# AI Orchestration: Developing and Testing Your AI Prototype

> This course takes AI developers through the process of building and testing an AI prototype, with a focus on hands-on implementation. Instructor Nayan Saxena begins by showing you how to set up a basic prototype and integrate your AI models. He covers best practices in testing and debugging AI models, along with tools to help streamline the orchestration and testing process.This course is part of 

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype) | 58m | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Developing an AI prototype](#developing-an-ai-prototype)
  - [What you should know](#what-you-should-know)
- [**1. Building an AI Prototype**](#1-building-an-ai-prototype) (3 videos)
  - [What is an AI MVP?](#what-is-an-ai-mvp)
  - [Choosing tools and frameworks for AI prototyping](#choosing-tools-and-frameworks-for-ai-prototyping)
  - [Building an MVP from scratch](#building-an-mvp-from-scratch)
- [**2. Debugging and Troubleshooting AI Applications**](#2-debugging-and-troubleshooting-ai-applications) (3 videos)
  - [Common AI prototype issues](#common-ai-prototype-issues)
  - [Debugging overfitting and underfitting](#debugging-overfitting-and-underfitting)
  - [Handling data-related errors](#handling-data-related-errors)
- [**3. Testing and Debugging Your AI Prototype**](#3-testing-and-debugging-your-ai-prototype) (3 videos)
  - [Why testing matters in AI development](#why-testing-matters-in-ai-development)
  - [Unit testing for AI components](#unit-testing-for-ai-components)
  - [Performance testing your AI model](#performance-testing-your-ai-model)
- [**4. Preparing Your Prototype for Production**](#4-preparing-your-prototype-for-production) (3 videos)
  - [Transitioning from prototype to production](#transitioning-from-prototype-to-production)
  - [Optimizing your prototype for scalability](#optimizing-your-prototype-for-scalability)
  - [Common production pitfalls](#common-production-pitfalls)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps and additional resources](#next-steps-and-additional-resources)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Developing an AI prototype](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/developing-an-ai-prototype?u=76281980&t=0)** - [Nayan] [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) is transforming industries at an unprecedented pace, but taking an AI idea from concept to a functional prototype can feel overwhelming. How do you choose the right tools, build a model, and test it for real-world performance? That's exactly what you'll learn in this course. You'll learn practical techniques for improving performance, addressing common pitfalls, and preparing your prototype for production. Whether you're building a simple sentiment analysis tool or a more complex LLM-based model, this course will give you the skills you need to bring your AI ideas to life. Hi, I'm Nayan Saxena, a [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) expert, and in this course, we'll walk through the end-to-end process of building an AI prototype, from selecting the right frameworks, to training, debugging, and testing your models, so let's dive right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1), [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (1)
> **Env Vars:** llm (1)
> **Speakers:** - [nayan] (1)

#### [What you should know](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-you-should-know?u=76281980&t=0)** - [Instructor] Before we dive into the course, it's important to take a look at what you need to know as prerequisites to understand the course better. What's required is that you have some comfort with the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language, especially for [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) and [Algorithms](../../Skills/Software%20Development/Algorithms.md). It's also important that you know how to work with Jupyter Notebooks, as we'll be using some of the Jupyter Notebook functionalities to write our AI MVPs. It's also important that you have basic machine learning knowledge, familiarity with key concepts like [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md), loss functions, and gradient descent. And finally, if you have some knowledge of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md), including their structure, capabilities, and applications, that would be useful as well. Now let's take a look at how you can set up your environment for the course. First, head on over to the course [GitHub](../../Skills/Software%20Development/GitHub.md) page where you will see an MVP Transformer For TextJupyter Notebook. Click on this, and on the top right corner, you'll see a download button. Press that and download the file. Once the file is downloaded, what you can do is head on over to [Google](../../Glossary/Service/Google.md) Colab, click on File, Upload notebook, and then choose the Download file. And there you go. Now you can write code and run the code simultaneously in Google Colab with me as we go through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Data Manipulation](../../Skills/Data%20Science/Data%20Manipulation.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Tools:** jupyter (2), colab (2), github (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** python (1)
> **Env Vars:** mvp (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 1. Building an AI Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### [What is an AI MVP?](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=0)** - [Instructor] AI development is complex, time-consuming, and resource-intensive. Before fully committing to an AI project, we need to test whether it works as expected. This is where the concept of an MVP or a minimal viable product comes in. So what is an MVP? An AI MVP is the simplest version of your AI solution that still delivers some core value. It helps you validate your idea, test feasibility, and gather early feedback without wasting months of work on unnecessary features. The key principle here is simple, Build, Test, Learn. Instead of developing a massive, fully-trained AI system right away, we build a lightweight prototype that demonstrates the most essential functions of our AI system. An AI MVP is not about perfection. It's about providing feasibility. Let's break down its key characteristics. First, it has focused scope. It solves one well-defined problem. Instead of trying to build a general purpose AI, we focus on a single task. Next, it requires minimal data. A production AI model may need millions or billions of data points, but an AI MVP should work with a smaller, manageable data set, just enough to test feasibility. Third, the AI model itself does not need to be perfect. It prioritizes functionality over accuracy because the goal is validation, not perfection.
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=95)** Fourth, an MVP must support rapid iteration after getting feedback. We can improve our model and adjust our approach without excessive development costs. And finally, even a basic AI MVP should have a user interface so that your stakeholders can try it out. Whether it's an API, a simple chatbot, or a visualization, this is quite useful. Now, let's break down the AI development process step by step. So we begin by identifying the problem. Instead of building an AI just for the sake of AI, we need to ensure it aligns with real business need. This is where most of the friction lies with stakeholders. Then we collect minimal data. We don't need a huge data set. Instead, we collect enough representative data to train a small prototype. This could be a few thousand labeled samples instead of millions. Make sure there are some out-of-distribution samples in this data to make it representative of the general sample. Choose a simple model. For instance, if we're building an AI MVP for text classification, I might start with [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) instead of a full transformer model, like [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md). And finally, we train the AI MVP. We'll train a small-scale version of our AI model, and this could include fine-tuning, where we try to get our initial results. We're not aiming for perfection yet. We will then test the AI MVP with our users so that they can interact with it.
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=188)** This can be our stakeholders or a beta testing group, and a basic interface, like a simple web app or a chatbot, can be really useful at this step. Finally, we gather some feedback from the real world. We also analyze the results and validate our MVP. Now, if it's meeting our needs based on these metrics, we then improve it further or pivot our approach to different AI techniques. So let's take a look at some real-world AI MVP examples. First, we have [Google](../../Glossary/Service/Google.md) Duplex. This is quite interesting because when it was first introduced, it was not a full-fledged AI assistant. Instead, it had one job, booking reservations over the phone. This focused scope allowed Google to refine its voice before expanding into other domains. Now, Google Duplex is part of the Google Home family. Then we have Tesla's Autopilot, which did not start off as an autonomous self-driving system. Earlier versions focused on basic lane-keeping and auto-braking. Over time, more features were added based on real-world data and feedback. And finally, we have [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). The earliest models were simple chatbots with limited context awareness. It wasn't until OpenAI iterated on feedback and improved model architectures that it became the highly capable assistant we know today. These examples show that successful AI [products](../../Skills/Software%20Development/Microsoft%20Products.md) start small with an MVP and improve over time through iteration and learning.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/what-is-an-ai-mvp?u=76281980&t=283)** So a strong AI MVP has to be focused, lightweight, and designed for rapid iteration and learning. It might lead you to your next AI breakthrough.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (1), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
> **Env Vars:** mvp (14), api (1), gpt (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Choosing tools and frameworks for AI prototyping](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=0)** - [Instructor] How do we select the right AI framework, API, or development tool for rapid [Prototyping](../../Skills/Software%20Development/Prototyping.md)? Let's try to understand this concept in more detail. Selecting the right AI tool is critical. Do you need a machine learning framework, an API, or a cloud-based service? The choice you will make will impact how fast you can build, how well your model performs, and how scalable your system is. A good decision means faster development and better performance. A bad decision can mean high costs, wasted time, and a prototype that does not scale. To choose wisely, we need to evaluate four key factors. Speed. How fast can you build the prototype and test it? [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), which is, will the tool be able to handle real world demands. Cost. If the tool is open source or free, or a paid cloud service? And finally, customization. Do you need to train from scratch or can you use pre-trained models? There are three major AI prototyping approaches that can help us here. First, [Traditional AI](../../Skills/Artificial%20Intelligence%20(AI)/Traditional%20AI.md) frameworks. If you need full control over your model architecture, frameworks like [TensorFlow](../../Skills/Artificial%20Intelligence%20(AI)/TensorFlow.md), [PyTorch](../../Skills/Artificial%20Intelligence%20(AI)/PyTorch.md), and JAX, let you build from scratch. However, this requires [Data Collection](../../Skills/Data%20Science/Data%20Collection.md), model training,
>
> **[1:35](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=95)** and access to compute resources. Then we have API based AI services. If you need fast results, using pre-trained models from OpenAI, Anthropic, AWS Bedrock, [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) AI, or [Google](../../Glossary/Service/Google.md) [Vertex](../../Skills/Software%20Development/Vertex.md) AI, you can use these services that provide AI without training from scratch. You simply need to request to an API and the AI generates a response. And finally, we have cloud AI platforms. If you need to fine tune models or deploy large scale applications, SageMaker, Vertex AI, Azure, ML, and [Hugging Face](../../Glossary/Service/Hugging%20Face.md), allow you to train, fine tune, and then deploy the AI at scale. Each of these tools have their own pros and cons, and I encourage you to evaluate them depending on the problem you're trying to solve. This chart shows how different AI tools fit into the three categories. If you want to build AI models from scratch, use traditional AI frameworks like Scikit-learn, TensorFlow and PyTorch. These provide flexibility, but require domain expertise. If you want plug-and-play AI services, you can use APIs like OpenAI's GPT, [Anthropic Claude](../../Skills/Software%20Development/Anthropic%20Claude.md), AWS Bedrock, or Azure AI. These services let you send a simple request to a powerful AI model without needing to train anything
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/choosing-tools-and-frameworks-for-ai-prototyping?u=76281980&t=189)** or having too much domain knowledge. And to scale, we have cloud AI platforms like [AWS SageMaker](../../Skills/Web%20Development/AWS%20SageMaker.md), Google Vertex AI, and Hugging Face, which will allow you to train, fine tune and deploy AI models efficiently. Note how some of these API based services overlap with the cloud-based services. This makes integration even much more easier down the line. So here's a summary. If you need full customization and full control, go with traditional AI frameworks. If you need a fast and efficient AI prototype or an API-based service, go with OpenAI, GPT, Anthropic Claude, or AWS Bedrock. And if you want scalability, use cloud systems. Always consider speed, cost, scalability, and flexibility when choosing a tool. And remember, using pre-trained AI models can save months of development time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (3), [Traditional AI](../../Skills/Artificial%20Intelligence%20(AI)/Traditional%20AI.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (3), [Vertex](../../Skills/Software%20Development/Vertex.md) (3), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (2)
> **Env Vars:** api (6), aws (4), gpt (2), jax (1)
> **CLI Commands:** aws (4), make (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Building an MVP from scratch](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=0)** - [Speaker] It's time now to build our minimal viable product. We'll be building out a powerful but simple sentiment analysis model using the Transformers library. So let's dive right in. First, install the required packages and import all of the necessary libraries, which I've done here. I'll also be setting a seed for reproducibility. And now, let's set up our data. I've created a very small data set of product reviews, just 10 examples with clear, positive and negative sentiments. In real applications, you'd see thousands of examples, but this works perfectly for demonstration. We've got comments like, "I love this product. It's amazing for positive sentiment, and this product is terrible. Avoid at all costs", for negative. In our code, we'll be splitting this into training and test sets, which I've done here with a 70-30 split. You can see that here. Next, we'll see the magic of [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) like DistilBERT. These models are pre-trained and we'll be starting from one of these checkpoints. These models have already learned language patterns from massive data sets, so we can fine tune them for specific tasks such as ours with relatively little data. First, I'll be loading the DistilBERT tokenizer, which will convert text to numerical [Tokens](../../Skills/Web%20Development/Tokens.md). This tokenization step is crucial because [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) can't process raw text. The tokenizer handles all of the complexities of language,
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=96)** and it will split our words, handle punctuation, and add special tokens needed by our model to fine tune on the text that we just created. Now for the model itself, I'll, again, be using the DistilBERT sequence classification model. This is a lightweight version of BERT that's about 40% smaller, but retains 97% of its language understanding capabilities. We'll be configuring it for sequence classification with two possible labels, which I've specified here. And finally, in our training configuration, notice, we're just using train epochs, which means our model will see our entire data set only three times. We're also using a small batch size of two and adding some weight decay for regularization. So let's run this and see what our results look like. At the end of my script, I'm also evaluating my model by calling trainer.evaluate, and then finally, calculating the accuracy and then generating a final report and saving the model. These steps can vary depending on the library you're using. Keep in mind, we're using transformers, so it's fairly simple to do it in this library. So let's run this and see how the results look like. As you can see in our results, we have a bunch of output here, but let's focus on the training output. Looking at the results on our test set, what we can see is that the accuracy is about 67%,
>
> **[3:10](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/building-an-mvp-from-scratch?u=76281980&t=190)** and the classification report that we've generated here shows something interesting. Our model is doing much better at identifying negative reviews compared to positive ones, and with our tiny dataset, this isn't surprising, but it highlights how you'd want to ensure balanced data in real applications. What's great about this approach is how quickly we can get a sentiment analyzer with minimal code and data. And there you go. We have a model that we just created and fine-tuned, and we have it saved and ready-to-go for such use cases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (2), [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1), [Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Neural%20Networks.md) (1)
> **Prerequisites:** install (1), set up (1)
> **Env Vars:** bert (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [speaker] (1)


### 2. Debugging and Troubleshooting AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Common AI prototype issues](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=0)** - [Instructor] Let's try to understand the key pitfalls in AI [Prototyping](../../Skills/Software%20Development/Prototyping.md), and how to avoid them. AI prototypes often fail due to fundamental problems in model training, [Data Quality](../../Skills/Data%20Science/Data%20Quality.md), and system design. These arise both in traditional machine learning models and [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md). So for [Traditional AI](../../Skills/Artificial%20Intelligence%20(AI)/Traditional%20AI.md) models, we have three major problems. First is overfitting, where the model memorizes the training data instead of learning general patterns. Then we have under fitting, where the model is too simple to capture any meaningful trends. We have data quality issues, where the training data may be biased, incomplete, or noisy. LLM-based prototypes, which use API-based AI models or retrieval augmented generation systems face different challenges. The APIs can be unpredictable, generate hallucinations, or cost too much at scale. And in retrieval systems, if your retrieval systems feed incorrect or irrelevant data, your AI becomes unreliable. So let's try to understand what overfitting is. Overfitting is one of the most common issues in AI development. It happens when your model becomes too specialized in the training data, memorizing every detail instead of learning general patterns that work in the real world. Symptoms of overfitting would be extremely high accuracy on training set, but low on the test set, a training loss that keeps increasing
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=93)** but a validation loss that increases, and overconfident predictions that fail in real-world scenarios. There are a few techniques we can use to fix this. We can apply regularization techniques like L1 or L2 regularization, weight decay, or dropout layers in our model. We can use data augmentation to increase the variance in our training samples by including more out of distribution samples, and we can reduce model complexity. If your neural network is too deep or has too many parameters, maybe it's time to simplify it. Underfitting is the opposite of overfitting. It happens when a model is too simple to learn from data effectively. You'll notice underfitting if your model is just not learning at all, it has low accuracy on both training and test set, and fails to recognize meaningful patterns in any input. So the solutions here are quite simple. It might be preferable to use a more powerful model, train for longer, and fine-tune your hyperparameters using a hyperparameter sweep. So these hyperparameters are learning rate, bad size, number of epochs, or if you're using a gradient booster tree, then the length of your tree, the number of nodes and so on. Performing [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) is also quite useful to fix this issue to extract better insights from raw data, because this may indicate what we're about to talk about next, which is data quality. Data quality will fail your model
>
> **[3:12](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=192)** if the data is not good. So the common issues include noisy data, which is mislabeled samples, duplicates, and errors that make training unstable. If your training data is biased, then that's a major red flag and that has to be resolved. And finally, data leakage. This is a bit nuanced, but essentially if your features contain information about what you're trying to predict and the model looks extremely artificially good in your testing but fails in real world applications, then maybe there's some data leakage happening, where there's features that indicate or correlate really well with your output feature. Solutions here are cleaning and pre-processing our data, balancing our data sets, and using feature selection again to remove irrelevant data. LLMs are extremely powerful, but they also have major challenges. So if you're building your prototype using LLMs, be careful about hallucinations, where LLMs confidently generate incorrect information. High costs, calling OpenAI or anthropic APIs frequently can be expensive, and then rate limits and latency as well. Many APIs have strict rate limits, causing delays. For RAG systems, the biggest issue is your data quality again. If your system pulls bad information, your outputs will be misleading. So solutions would include fine-tuning models and using RAG to improve accuracy
>
> **[4:46](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-ai-prototype-issues?u=76281980&t=286)** using hybrid search methods like BM25 plus vector search for better document retrieval, and using APIs with [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) and caching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (5), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1), [Traditional AI](../../Skills/Artificial%20Intelligence%20(AI)/Traditional%20AI.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **Env Vars:** rag (2), llm (1), api (1), bm25 (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Debugging overfitting and underfitting](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=0)** - [Instructor] It's time now to tackle one of the most fundamental challenges in machine learning, the balance between underfitting and overfitting. With [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) having millions of parameters, finding that sweet spot becomes especially critical. In our notebook, we'll be creating three different versions of our original sentiment analysis MVP. First, we'll be creating an underfit model, then an overfit one and one that is balanced. So let's dive right in. Here, I have a function that creates these three different kinds of models. For the underfit model, my parameters are quite simple. I'm using only one training epoch, which is too low, and heavy regularization to prevent it from learning properly, even on that one epoch. Then I have the underfit trainer that trains this model and records the predictions and the evaluations. Keep in mind, we're still using the same DistilBERT-base uncased model with two labels. This is important to keep our comparison fair. Next, I have the overfit model. For this model, I'll be using 10 epochs, which is a lot, and zero regularization. What I'll also be doing, which you can see here, is I'm using a smaller training data set. So, instead of using all of the 10 examples that we had, we'll be using seven. Similar to the above example,
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=94)** I'll be using the DistilBERT-base uncased model and then specifying the trainer and then running the trainer to train the overfit model. And, finally, I have a balanced model. This model has balanced training and regularization parameters, including a reasonable number of epochs, and it uses our entire dataset. This model will also be trained and evaluated similarly to the previous ones. And finally, what my function does is record all of the results in an organized manner using a dictionary. Great, so now that we have this function to do all of the work for us, let's run this and then see how the model performance compares. I also have some visualization code here that will help us visualize some of these comparisons. So let's run this and see how it looks like Looking at the output, which is quite vast, what we see is the underfit model has a training accuracy of close to 43%, but somehow it managed 67% on the test set. This negative gap is unusual and likely reflects variance in our tiny data set rather than true generalization. The overfit model tells a classic story. If you look closely, we have 100% accuracy on the training data, but only 67% again on the test data. This model has essentially memorized the training examples,
>
> **[3:09](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/debugging-overfitting-and-underfitting?u=76281980&t=189)** but still struggles with new data. And most interestingly, our balanced model achieves perfect accuracy on both training and test sets. With a larger data set, we'd rarely see such perfection, but it demonstrates finding really good hyperparameters. If we look at the graphs, they display the same information visually. As we can see, the underfit model versus the balanced model show a [stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) difference in how the training and test accuracy compare. This demonstrates that the classic machine learning dilemma is true. If your model is too simple or hasn't trained enough, it won't capture the patterns. And for transformer-based models specifically, it's important that we train them just enough. To combat this issue, as you saw, we simply trained the model for three epochs and did not use too much regularization. To prevent overfitting, we can add more training data and use techniques like early stopping or weight decay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Transformer Models](../../Skills/Artificial%20Intelligence%20(AI)/Transformer%20Models.md) (1), [Stark](../../Skills/Web%20Development/Stark%20(Accessibility%20Software).md) (1)
> **Env Vars:** mvp (1)
> **Cross-References:** as you saw (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Handling data-related errors](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=0)** - [Instructor] How to detect, diagnose, and fix missing data, noisy data, outliers, and data leakage in AI systems. Let's take a look. The single most important rule in AI is this, garbage in, garbage out. No matter how sophisticated your model is, if the data is flawed, AI will fail. Bad data can lead to misleading predictions, biased outcomes, and unreliable AI systems. There are four main data issues that can break your AI model, missing data, noisy data, outliers, and data leakage. Each of these problems require specific debugging techniques, which we'll explore next. So let's take a look at missing data. Missing data is a silent killer. It sneaks in from human errors, system failures, or even [Privacy](../../Skills/Data%20Science/Privacy.md) related data removals. If missing data is minimal, you might drop the affected rows, but if the gaps are large, better techniques are needed. We can use some stuff like statistical imputation, where we fill in missing values with the mean, median, or mode. We can take it one step further and use ML-based imputation using models like KNN or Bayesian methods to predict missing values. And, finally, if nothing works, it's good to use robust ML [Algorithms](../../Skills/Software%20Development/Algorithms.md) like XGBoost and LightGBM as examples, which can handle missing data natively. Noisy data occurs when the dataset contains inaccurate, mislabeled,
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=94)** or redundant information. This makes it harder for the AI model to learn meaningful patterns. Common symptoms of noise include inconsistent labels where the training data contains errors, duplicates in your data, which adds unnecessary weight to certain features, and random fluctuations, making patterns harder to detect. So if it looks like noise, it most likely is. To fix noisy data, clean the data set by removing duplicates and correcting mislabeled entries. You can use [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) for this. Train models with noise-resistant losses. There's a long list of losses in scikit-learn, and you can use any one of those, which are noise resistant, to fix this issue. And finally, you can use denoising techniques like autoencoders or statistical filtering to remove irrelevant signals. Outliers are extreme values that can distort AI models. They might be caused by faulty [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) or genuine rare events. Usually outliers are detected using box plots and Z-scores to identify extreme values, and interquartile range is used to define thresholds. Once you see these outliers, they can be removed. However, be careful. They can only be removed if they are due to data errors. They can be transformed using log scaling or clipping to reduce their impact. And they can be handled with robust models
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=188)** like [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md), which are less sensitive. And finally, we have data leakage, which is our silent model killer. This is a very common issue that is found in multiple production models, and it happens when models accidentally learn from test data, making it look better than it actually is. Leakage can happen when training data contains test samples, leading to over optimistic accuracy. Time sensitive data is not split correctly in time series models, causing the model to predict future events using future data. And finally, if feature selection includes leaked information about your target variable, like a label encoded in a feature, then data leakage can happen. To prevent data leakage, ensure strict separation of training and test data sets. Use time-based splits in [Forecasting](../../Skills/Data%20Science/Forecasting.md) problems, and double check feature selection pipelines to avoid unintentional leaks. To systematically debug data related issues, take a look at this flow chart. It's quite a structured process. First, we identify the type of the issue. It can be missing data, noise, outliers, leakage, or maybe all of them. Once you identify the issue, we go to the node in the flow chart. If it's missing data, you decide between statistical imputation or MAML-based methods. If the data is noisy, you can clean it or use noise resistant models.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/handling-data-related-errors?u=76281980&t=283)** If outliers are present, analyze them with box plots and scaling techniques, and if you suspect data leakage, check how your data split is working and review [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) steps. To systematically debug data related issues, follow this structured process. Identify the type of issue, missing data, noise, outliers, or leakage. If it's missing data, decide between statistical imputation or ML-based methods. If the data is noisy, clean it and use noise resistant models. If outliers are present, analyze them with box plots and scaling techniques. And finally, if you suspect data leakage, check how your data set is split and review feature engineering steps. So good data is good AI. Always prioritize high [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) when you move from your MVP to productionization. Make sure you handle these issues before using more specialized techniques or models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Pandas](../../Skills/Software%20Development/Pandas%20(Software).md) (1), [Data Collection](../../Skills/Data%20Science/Data%20Collection.md) (1)
> **Env Vars:** knn (1), maml (1), mvp (1)
> **CLI Commands:** node (1), make (1)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 3. Testing and Debugging Your AI Prototype

[↑ Back to Table of Contents](#table-of-contents)

#### [Why testing matters in AI development](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=0)** - [Instructor] Let's take a look at how to ensure your AI models are accurate, generalizable, and robust. In traditional [Software Testing](../../Skills/Software%20Development/Software%20Testing.md), the goal is simple. Verify that the program produces the expected output for a given input. Bugs are deterministic, meaning if you fix the code, the bug disappears. AI testing is different. AI models don't have hard-coded rules. They learn patterns from data. The result? Errors aren't just from the code mistakes, but also from data biases, unseen edge cases, and changing real-world conditions. Key differences include a deterministic versus non-deterministic approach, where a bug in traditional software exists until fixed, but an AI model might fail unpredictably on different inputs, and we don't know that until we test it. AI models can also degrade over time due to data drift, not code changes. This means that an AI system might work perfectly today, but fail the next month. And finally, AI models don't follow explicit rules. They learn from examples, so their accuracy depends on the quality of their training data. The takeaway is that AI testing is an ongoing process, not a one-time task. To build a reliable AI system, testing must cover multiple dimensions. Accuracy, does the model return correct predictions? A high accuracy in testing
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=94)** but poor real-world performance may indicate overfitting. Generalization, can the model handle new unseen data? If not, it has memorized training data rather than learning patterns. Robustness, does the model break under slight changes? Small variations in input should not dramatically change predictions. Fairness and bias detection. AI models inherit biases from training data. Testing should uncover unfair predictions. And finally, efficiency and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Can the AI system that we've built handle real-world user loads without slowing down? By focusing on all of these factors, we ensure AI is trustworthy and effective in production. So let's take a look at some AI testing methods. AI testing, as we've seen, is not just about checking final predictions. Every component in the pipeline, data pre-processing, model inference, post-processing, must be tested individually in isolation. This is what [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) means. Before even testing the model, we need to verify that the data pre-processing steps like tokenization, normalization, and feature scaling work. A single mistake here can distort the entire model's performance. Then we move on to model evaluation, where metrics like precision-recall curves, F1-scores, faithfulness confusion matrices, and even in simpler models,
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=186)** mean squared errors, root means squared error, and R-squared scores can come in handy. Finally, we do robustness testing, where AI models are tested with adversarial examples, noise injections, and real-world edge cases. As I've mentioned before, AI systems degrade over time. So we check for concept drift at the end, where real-world data shifts away from training data over time. And to ensure fairness across different groups, we need to make sure that concept drift is taken care of. So here's a structured pipeline for AI testing. We start with [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) checks. If issues exist, first, fix the imbalances and biases in our data. Then we proceed to unit testing, where we verify pre-processing steps. Ensuring clean input data prevents errors. Then we move on to model evaluation using accuracy, precision recall, or regression metrics. Then we come to robustness, where we check our model's resilience against adversarial attacks and noisy inputs. And finally, we look at concept drift and fairness over time. AI models must stay reliable in real-world conditions, and using this structured pipeline helps us ensure that. Only after passing these tests should a model be deployed into production. So keep in mind, this is probabilistic, unlike traditional software testing,
>
> **[4:40](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/why-testing-matters-in-ai-development?u=76281980&t=280)** and our focus has to be to ensure that these models do not degrade over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (2), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Data Quality](../../Skills/Data%20Science/Data%20Quality.md) (1)
> **Definitions:** means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Unit testing for AI components](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=0)** - [Instructor] It's time now to take a look at how to ensure AI reliability by testing pre-processing, [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), and inference pipelines. So let's dive right in. [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) in AI is about testing individual components, pre-processing pipelines, feature transformations, and model inference before they are combined into a full system. Keep in mind, AI testing differs from traditional [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) because AI is non-deterministic. The same input might not always give the same output. Here, data matters just as much as the code and these models degrade over time, which means these models must be tested regularly. The goal of unit testing here is to catch these issues early on before they become expensive to fix in production. So let's take a look at a few examples. I've implemented here, a few unit tests, using very simple libraries. However, you can use whatever you feel best in your given situation. First, we have [Data Processing](../../Skills/Database%20Management/Data%20Processing.md). Some common errors here include missing values, mislabeled or shuffled data, and data leakage. And to prevent these issues, we can implement simple assertions in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) to cast these errors. For instance, I can use [pandas](../../Skills/Software%20Development/Pandas%20(Software).md) to check for missing values and ensure all the inputs in our features are complete. Next, I can verify the labels and check for any extreme labels in our dataset. These extreme labels have to be removed or dealt with
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=94)** because they're not part of what we are trying to predict. And finally, we can try to ensure a proper train and test split by checking if they are disjoint completely, which is really important. We don't want our test data to leak into our train data. Keep in mind, at this step, there are more sophisticated ways to check for data leakage, but this is a very preliminary check. When it comes to feature engineering, we have several mistakes that can happen. The major mistake that happens most often is incorrect scaling, or normalization. If some inputs range from zero to one, while others range from zero to 100, the model might favor certain features unfairly. We also have encoding errors that can creep in in categorical data, which means if categorical data is not mapped correctly, models might break. And then we have feature drift over time, which means features can change significantly between training and deployment, resulting in the accuracy dropping. To prevent these issues, we again, use a few assertions. First, we can check if numerical features are scaled correctly and lie between, for instance, zero and one here. Next, I can check for categorical encoding ranges to avoid any mismatches by enforcing ranges in advance. And finally, we have feature drift. So I'm using here, the KS test,
>
> **[3:08](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=188)** but you can use whatever feels convenient and relevant to your dataset. This test simply helps us check if there is a drift offering in the features. Finally, we're at the step of inference. Once pre-processing and feature engineering are validated, we must test inference. Some common risks here include inconsistent model outputs, which means if the same input gives different predictions, something may be wrong. There are latency issues when it comes to APIs, and we have hallucinations when it comes to LLMs. Now catching these can be done in many sophisticated ways, including grounding techniques for LLMs and several API and latency checks that can be implemented using profilers. These are just some simple examples for you to understand how these work. So for instance, I can ensure identical inputs produce stable outputs by simply asserting in Python. If the same input produces different outputs, then we may have to revisit our model and see what's going on there. In the case of an LLM, this may be a result of too high a temperature. When it comes to API response times, we want to make sure we prevent delays or high latency in production. And to do so, you can simply use the time function in Python and time the API response time. And finally, we can check for hallucinations.
>
> **[4:43](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/unit-testing-for-ai-components?u=76281980&t=283)** Here's a simple check I've implemented where I'm simply asking an LLM a question, which should not have an answer, technically. If the LLM says anything other than, I don't know, we throw an error. You can check your LLMs that you fine tuned or grounded in RAG, using these approaches. So as we've seen, there's a logical approach that we follow when it comes to unit testing AI pipelines. Take a look at this flow chart. We start with data pre-processing where we fix the missing values and labeling issues. Then we move to feature engineering where we check for scaling and encoding errors. Next, we test model inference where we are ensuring that outputs are stable and API calls are fast. And finally, we move on to deployment, only if all of these tests pass. By systematically testing each AI component, we create a robust, production ready model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (4), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Software Testing](../../Skills/Software%20Development/Software%20Testing.md) (1), [Data Processing](../../Skills/Database%20Management/Data%20Processing.md) (1)
> **Env Vars:** api (4), llm (3), rag (1)
> **CLI Commands:** python (3), make (1)
> **Analogies:** for instance (3)
> **Definitions:** is a  (2)
> **Warnings:** keep in mind (2)
> **Speakers:** - [instructor] (1)

#### [Performance testing your AI model](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=0)** - [Instructor] Now, let's take a look at performance testing and model robustness for our AI MVP. We'll be putting our sentiment analysis models to the test with challenging examples that push the boundaries of classification. Let's see how our models would perform in real-world scenarios with nuanced language. I have code here that simply sets up our experiment to do just this. It creates confusion matrices, plots them, and uses a classification report to compare the three models that we used earlier: A balanced model, an overfit model, and an underfit model. To refresh your memory, the balanced model is a model that is trained on a reasonable number of epochs, three in our case, without regularization. The overfit model was trained for much longer without regularization on a smaller training dataset. And the underfit model was trained just for one epoch with too much regularization, which prevented it from learning anything. For this experiment, I've set up some challenging examples. These are simply examples which are on the edges of our decision boundary. For instance, I have an ambiguous example here where the sentiment is mixed. It talks about great features, but poor build quality of the product. These would be quite difficult for our classifier to classify. So finally, what I have here is a prediction function that essentially tokenizes the input and predicts, and then everything that prints out the output
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=97)** that we're going to look at. Once you run this, what you'll see is a very detailed report with a graph that shows the confusion matrice. Looking at these matrices on screen, we can quickly spot some difference in the behavior of these three models. The underfit model clearly shows a bias towards negative predictions, which you can see here. The Overfit model has more varied predictions, but still makes errors. And the balanced model is much better at classifying our test examples as you can see here. But perfect accuracy can also be misleading with small datasets. So using our test examples that we created, which were deliberately tricky, we can now see if the linguistic complexities are captured by these models. So let's look at our results for ambiguous examples. What we see here is that the underfit model predicts negative with 57% confidence. And the overfit model predicts positive with 65% confidence, which you can see here. And the balanced model predicts negative with just 52% confidence. That's near 50% confidence from the balanced model that reflects the ambiguity of the statement, which is accurately captured by the balanced model as you can see. For the expectation shift example, which is basically not the worst thing I've ever bought, you can see that the balanced model is again 51%, whereas the overfit model is predicting positive,
>
> **[3:11](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/performance-testing-your-ai-model?u=76281980&t=191)** and the underfit model is predicting negative with a high confidence. So as you can see with some of these examples, our model has distinguished clear patterns in text, and can give us neutral answers as well. This highlights the importance of testing beyond simple accuracy matrix. A model may have high accuracy, or clearly positive, or negative examples, but struggle with the nuanced language people use.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Env Vars:** mvp (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Preparing Your Prototype for Production

[↑ Back to Table of Contents](#table-of-contents)

#### [Transitioning from prototype to production](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=0)** - [Instructor] Let's talk about a very crucial step, moving from AI prototype to production. Many AI projects never make it to deployment, because they aren't designed for real world constraints like scaling, monitoring, and latency. So let's take a look at how to do it right. When developing an AI MVP, your main goal is proving that the model works. However, production is a whole different world. A working prototype doesn't mean a scalable product. In production, models needs to be fast, robust, and cost efficient. You have to think about latency, reliability, and security. Specifically, when it comes to [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), your model will be used by millions of people, so it has to be able to handle millions of requests. Then we have to be able to monitor data drift, failures and bias in real time, the latency has to be low. And our API keys, user data, and logs have to be protected. So how do we get a model from a Jupyter Notebook or your own environment to real world application? We need a solid deployment pipeline. A typical deployment pipeline moving from prototype to production involves pre-processing and [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md), which are [Real-Time](../../Skills/Database%20Management/Real-Time.md) versus [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md). We have model hosting, which includes APIs like OpenAI, Cohere versus self-hosted models, which we can host on TorchServe using FastAPI or on AWS.
>
> **[1:37](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=97)** Then we have [Version Control](../../Skills/Web%20Development/Version%20Control.md) where we keep record of the model version using [MLflow](../../Skills/Data%20Science/MLflow.md) or DVC. And finally, we have observability, which involves monitoring and logging using tools like Prometheus, Grafana, or Weights & Biases. The AI deployment pipeline is quite simple. When we look at the flow chart, it starts off with the [Data Ingestion](../../Skills/Software%20Development/Data%20Ingestion.md) step, moving on to pre-processing, then we have our model inference endpoint or API. Next, it subdivides into two steps. One is scaling and optimization, where we use load balancers and autoscaling to deal with high traffic. And we have monitoring and logging where if issues directed, there should be a retraining pipeline in place to mitigate those issues. Now, how do you choose the right deployment strategy? Depending on your use case, you need to choose between batch inference, realtime inference, or a hybrid approach. For instance, fraud detection must be real-time, but something like customer churn prediction can be done in batches vernight. APIs like the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) now also support batch inference, and it is significantly cheaper. Now, how do you deploy the model? That matters as well. We can use APIs like AWS Bedrock or OpenAI, or use self-hosted models like [Hugging Face](../../Glossary/Service/Hugging%20Face.md) or FastAPI. The cheaper alternatives require more setup on our end,
>
> **[3:13](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/transitioning-from-prototype-to-production?u=76281980&t=193)** whereas going with industry standard providers like AWS or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) provide us speed at a greater cost. Once deployed, we need to ensure that our model can increase its capacity. This is where scaling comes in. We can use [Kubernetes](../../Skills/DevOps/Kubernetes.md) for auto scaling, caching with [Redis](../../Skills/Software%20Development/Redis.md) to speed up system responses, and load balancing to prevent system failures. Model optimization techniques like quantization and distillation also helps significantly. The model can be quantized or reduced in size using ONIX or TF Lite. It can also be distilled. And finally, we come to the observability step. One major mistake is launching a model and forgetting about it. Models degrade over time, due to concept drift and data drift. This is why monitoring tools like Weights and Biases, Prometheus, and Grafana are crucial for tracking performance and triggering alerts when accuracy drops. The ELK stack is also an industry standard stack for AI monitoring, which uses [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) Logstash,and Kibana. So taking an AI prototype to production is one of the hardest but most rewarding parts of the development cycle. And by following some of these practices, we'll be able to ensure our model not only works, but stays reliable over time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Data Pipelines](../../Skills/Data%20Science/Data%20Pipelines.md) (1), [Batch Processing](../../Skills/Data%20Science/Batch%20Processing.md) (1), [Version Control](../../Skills/Web%20Development/Version%20Control.md) (1)
> **Env Vars:** api (3), aws (3), mvp (1), dvc (1), onix (1)
> **CLI Commands:** aws (3), make (1)
> **Tools:** jupyter (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Optimizing your prototype for scalability](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=0)** - [Instructor] It's time now to focus on making our sentiment analysis MVP model ready for real-world deployment by optimizing for performance and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). So, let's take a look at how we can do this. First, we need to know our current model's footprint and speed, which I'm doing using my measure_model_performance function. It simply takes our saved model, runs inference through it, and calculates the inference time. And I have some code here that runs this function and then measures the initial performance. If we look at the output below, we can see that our original model's inference time is 146 milliseconds and the size of the model is 255 MBs. Well, that's a good starting point. Next, we'll be looking at some optimization approaches. So, let's start with the first strategy, which is TorchScript, or JIT compilation. This is fairly simple. What I'll be doing here is using a traced model, which reduces the model size and perhaps even the model inference speed. This may run into issue with some complex models like the one we are using here. The next approach which we can try is using a smaller model, a model like TinyBERT for example. This model is much smaller, just 17 MB, which is a 90% reduction. And even more impressive is that the inference time for this model is a 96% improvement under 6 milliseconds.
>
> **[1:36](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/optimizing-your-prototype-for-scalability?u=76281980&t=96)** The trade-off would be some reduction in accuracy, so you need to run some performance tests here, but for many applications, this trade-off is well worth it. I also have an ONNX example here, which is not fully implemented, but you can use this code as a starting point. ONNX compilation can provide substantial free speed improvements of around 40% with no loss in accuracy. And finally, I have some notes here for pruning and quantization. Depending on the model and library you're using, it can differ. So, let's take a look at the output. As you can see, TorchScript optimization ran into an error, which we predicted earlier, because of the complex architecture we're using. However, if we look at the smaller model, we can see that the model size is 16 MB, and we've reduced the size by 93% and the speed by 96%. That's a great start. If we start off with this model now, fine-tune it on our same dataset and then use that for performance comparison, I'm sure we can use a TinyBERT model for the same task with little to no accuracy trade-offs. These are just some examples, but you can use any optimization technique under the hood that I've mentioned here, and these are essential for real-world deployment. An unoptimized model might cost 10 times more to run and provide a poor [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) compared to one that's been properly optimized.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** onnx (2), mvp (1), jit (1)
> **Definitions:** is a  (2)
> **Code Identifiers:** measure_model_performance (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Common production pitfalls](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=0)** - [Instructor] Let's dive into the key reasons why AI models fail when deployed at scale, and the practical strategies we can use to address these challenges. Most AI models work well in a lab setting, but once deployed, they can start to fail due to unpredictable real-world conditions. A major cause of this is data drift, where the distribution of input data changes over time, leading to a drop in accuracy. Even more concerning is concept drift, where relationships between input features and output changes, making your model completely outdated. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) is another issue. Your model might work fine with a small data set, but in production it has to handle thousands or even millions per requests. If it's not optimized, it can lead to latency and downtime. Lastly, models can suffer from bias and fairness issues. They may perform well on one demographic, but fail on another, leading to ethical concerns, and even legal risks. First, let's focus on data drift and concept rift. So to resolve these issues, here's a flow chart which we can refer to. Once your model is trained and deployed, any incoming data has to be monitored for data drift and concept rift. If the incoming data shows that it's distributed differently from your training data, then we have data drift. If your incoming data fails to work with your model entirely, and your outputs and inputs seem to be differently correlated, then we have a concept drift.
>
> **[1:33](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=93)** In both of these cases, we need a thorough model reevaluation, which will lead to retraining or fine-tuning of the model at the end. This is an ongoing process that happens cyclically in the production cycle. So how do we detect this? To detect drift, we can use metrics like KL divergence, Chi-Square tests, and even population stability indices. There's also multiple tools like EvidentlyAI, Fiddler AI, [MLflow](../../Skills/Data%20Science/MLflow.md) monitoring, and so on, that can help us. To fix drift, retraining your model regularly is key. Feature stores are also quite useful, because they help us version historical data, making it easier to roll back if an issue arises. Scaling AI models efficiently is a challenge. Many companies struggle with high inference costs. Running large models like [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md), Claude, or Mistral can be expensive and slow, and so if your model takes too long to generate a response, it's unusable for [Real-Time](../../Skills/Database%20Management/Real-Time.md) applications, no matter how good it is. To solve this, we use model quantization, which is one of the more basic techniques to reduce latency. There's also pruning, which can remove unnecessary neurons from your [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) models, and additionally, caching frequently used responses, and batching multiple requests together can also significantly improve performance. Finally, there's a few security considerations we always need to keep in the back of our minds. One of the biggest risks is prompt injection attacks, where malicious users trick models
>
> **[3:06](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/common-production-pitfalls?u=76281980&t=186)** into exposing sensitive information. API security is another major concern, irrespective of if you're using a custom API or a model hosted on [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) or any API based service. If an API key is exposed, anyone can use it. And finally, we need to make sure we're implementing rate limits, access controls, and secure cloud hosting, on AWS Azure or even [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), to help mitigate these risks. So let's take a look at a final flow chart to debug any production AI model. Let's go step by step. If you notice a performance drop in a production AI model, then we first check for concept drift. If there is a concept drift, then we will look at the real-world data and see if it has changed its distribution as compared to our previous data stores. If yes, then we retrain the model, and if no, we check our data pipeline, because sometimes a broken pipeline can result in data shifts as well. If the performance hasn't dropped, but there are other issues, we look at latency. If there's high latency, we optimize model inference, and otherwise, if all's good on the latency end, we look at security concerns. It's always useful to test your model against a few adversarial defenses, and keep monitoring it for future issues. So there you go. Here's our pipeline for proactively monitoring all of the issues that you may come across in productionizing a model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [MLflow](../../Skills/Data%20Science/MLflow.md) (1), [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** api (4), gpt (1), aws (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** make (1), aws (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps and additional resources](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=0)** - [Instructor] As we wrap up our journey through the exciting world of [AI Orchestration](../../Skills/Software%20Development/AI%20Orchestration.md) and prototype development, I want to take a moment to say thank you for being part of this learning experience. Throughout this course, we've explored the fundamentals of building AI MVPs, testing, debugging, and optimizing AI applications for production. I hope you're leaving with valuable insights that will help you build and refine AI models with confidence. But of course, the learning doesn't stop here. If you're looking to expand your knowledge on AI orchestration and working with LMS, I highly encourage checking out another [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) learning course called Introduction to AI Orchestration with [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) and [LlamaIndex](../../Glossary/Framework/LlamaIndex.md). It's a fantastic next step for those looking to build more advanced AI-powered applications. Additionally, I invite you to visit my website where I regularly share updates and news on what I've been working on. For [Real-Time](../../Skills/Database%20Management/Real-Time.md) updates and discussions, let's connect on LinkedIn. Feel free to send me a connect request, and I'd love to hear from you about your experience working on AI orchestration, LLM workflows, debugging, and more. And finally, you can also follow me on Twitter for latest updates, tools, challenges, and industry insights on AI. Thank you once again for your curiosity, dedication, and eagerness to learn. AI is evolving at an incredible pace, and the opportunities are limitless.
>
> **[1:34](https://www.linkedin.com/learning/ai-orchestration-developing-and-testing-your-ai-prototype/next-steps-and-additional-resources?u=76281980&t=94)** Keep experimenting, innovating, and let's continue to build amazing AI applications together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [AI Orchestration](../../Skills/Software%20Development/AI%20Orchestration.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1), [LlamaIndex](../../Glossary/Framework/LlamaIndex.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** lms (1), llm (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Nayan Saxena](../../Instructors/Artificial%20Intelligence%20(AI)/Nayan%20Saxena.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/ai-orchestration-developing-and-testing-your-ai-prototype-5211016)

## Skills Covered

- Prototype Validation
- Software Quality Assurance
- AI Software Development
- Artificial Intelligence (AI)
- AI Orchestration

## Path Context

### In [Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Architecture%20and%20Orchestration%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)
← [AI Orchestration- Designing the Prototype Architecture and Data Strategy](AI%20Orchestration-%20Designing%20the%20Prototype%20Architecture%20and%20Data%20Strategy.md) | **4 of 5** | [AI Orchestration- Validation and User Feedback and Performance Metrics](AI%20Orchestration-%20Validation%20and%20User%20Feedback%20and%20Performance%20Metrics.md) →

## Part of

- [Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Architecture%20and%20Orchestration%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Appears In

- [Building AI Products- Architecture and Orchestration Professional Certificate by LinkedIn Learning](../../Paths/Artificial%20Intelligence%20(AI)/Professional%20Certificates/Building%20AI%20Products-%20Architecture%20and%20Orchestration%20Professional%20Certificate%20by%20LinkedIn%20Learning.md)

## Related Courses

_Courses sharing skills:_

- [AI Orchestration- Foundations](AI%20Orchestration-%20Foundations.md) — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [AI Orchestration- Planning and Orchestrating for Observability](AI%20Orchestration-%20Planning%20and%20Orchestrating%20for%20Observability.md) — Artificial Intelligence (AI), AI Software Development, AI Orchestration
- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI), AI Software Development
- [Welcome To The Building Ai Products Understanding The Workflow Professional Certificate](Welcome%20To%20The%20Building%20Ai%20Products%20Understanding%20The%20Workflow%20Professional%20Certificate.md) — Artificial Intelligence (AI), AI Software Development
- [Advanced Python Projects- Build AI Applications](Advanced%20Python%20Projects-%20Build%20AI%20Applications.md) — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)