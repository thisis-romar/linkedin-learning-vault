---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: introduction-to-generative-adversarial-networks-gans-26283306
url: "https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306"
duration_minutes: 61
duration: 1h 1m
level: Beginner
updated: 8/19/2025
learners: 29611
skills:
  - Artificial Intelligence (AI)
  - Generative Adversarial Networks (GANs)
exercise_files: true
github: "https://github.com/LinkedInLearning/introduction-to-generative-adversarial-networks-gans-3963173"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHJKIXSiJjxMg/learning-public-crop_675_1200/B4EZikYWgPGwAY-/0/1755104504794?e=2147483647&amp;v=beta&amp;t=OPXs5dlkj4EvBSdjHTjVqHD33ezT23ZiCIpnsHjVItQ"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Advance Your Skills in Deep Learning and Neural Networks]]'
  - '[[Advance Your Skills in AI and Machine Learning]]'
prev_courses:
  - '[[Deep Learning with Python- Optimizing Deep Learning Models]]'
  - '[[Training Neural Networks in Python]]'
next_courses:
  - '[[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]]'
  - '[[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]]'
path_nav: '[{"path":"Advance Your Skills in Deep Learning and Neural Networks","position":6,"total":8,"prev":"Deep Learning with Python- Optimizing Deep Learning Models","next":"AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)"},{"path":"Advance Your Skills in AI and Machine Learning","position":6,"total":16,"prev":"Training Neural Networks in Python","next":"AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/generative-adversarial-networks-gans
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Introduction%20to%20Generative%20Adversarial%20Networks%20(GANs).md)

![Introduction to Generative Adversarial Networks (GANs)](https://media.licdn.com/dms/image/v2/D4E0DAQHJKIXSiJjxMg/learning-public-crop_675_1200/B4EZikYWgPGwAY-/0/1755104504794?e=2147483647&amp;v=beta&amp;t=OPXs5dlkj4EvBSdjHTjVqHD33ezT23ZiCIpnsHjVItQ)

# Introduction to Generative Adversarial Networks (GANs)

> Generative Adversarial Networks (GANs) are a groundbreaking innovation in deep learning, capable of generating realistic images, audio, and synthetic data. In this hands-on course, Gwendolyn Stripling—a machine learning and artificial intelligence and PhD—provides a solid foundation in the architecture and training of GANs. Learn how GANs work and get proactive practice, applying GANs to tasks suc

> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306) | 1h 1m | Beginner | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Transforming innovation with GANs](#transforming-innovation-with-gans)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to GANs and Their Broad Impact**](#1-introduction-to-gans-and-their-broad-impact) (3 videos)
  - [Introduction to GANs and their broad impact](#introduction-to-gans-and-their-broad-impact)
  - [Generative and discriminative models](#generative-and-discriminative-models)
  - [Use case: Synthetic customer reviews for product analysis](#use-case-synthetic-customer-reviews-for-product-analysis)
- [**2. How GANs Learn to Create/Generate/Architecture**](#2-how-gans-learn-to-creategeneratearchitecture) (3 videos)
  - [The Generator](#the-generator)
  - [The Discriminator](#the-discriminator)
  - [How GANs learn](#how-gans-learn)
- [**3. Building Your First GAN**](#3-building-your-first-gan) (3 videos)
  - [How to use the challenge exercise files](#how-to-use-the-challenge-exercise-files)
  - [Challenge: Build and evaluate a GAN](#challenge-build-and-evaluate-a-gan)
  - [Solution: Build and evaluate a GAN](#solution-build-and-evaluate-a-gan)
- [**4. GANs in the Real World**](#4-gans-in-the-real-world) (2 videos)
  - [GANs and multimodal LLMs for scalable content generation](#gans-and-multimodal-llms-for-scalable-content-generation)
  - [A collaborative pipeline](#a-collaborative-pipeline)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next Steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### Transforming innovation with GANs
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=0)** - [Gwendolyn] Did you know that generative adversarial networks, or GANs, are responsible for creating realistic images, music, and even synthetic data?
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=12)** By the end of this course, you'll be ready to identify new opportunities for generative AI with thin your organization, build compelling business cases for GAN projects, and effectively contribute to AI initiatives that leverage synthetic data.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=28)** Hi, I'm Gwendolyn Stripling.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=30)** I've helped thousands of learners understand emerging AI technologies and how to apply them to real world challenges.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=40)** So join me on this journey into the fascinating world of GANs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), ai (2), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Generative AI]] (1), business (1)
> **Env Vars:** gan (1)
> **Speakers:** - [gwendolyn] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=0)** - [Instructor] This introductory course is designed for anyone interested in a high-level look at generative adversarial networks, known as GANs, and their transformative applications in real-world scenarios.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=14)** Some familiarity with the basics of neural networks and Python will be helpful, but it's not required for hands-on work.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=23)** There is no coding, there's nothing to install.
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=27)** However, there are lots of real-world examples.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=32)** Once you complete this foundational course, your understanding of GANs will help you design and build AI systems that can generate new, realistic content and understand the roles and skills required to collaborate across technical, creative and system integration teams in an AI-powered production pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Neural Networks]] (1), [[Python (Programming Language)|Python]] (1), teams (1)
> **CLI Commands:** python (1)
> **Definitions:** known as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to GANs and Their Broad Impact

[↑ Back to Table of Contents](#table-of-contents)

#### Introduction to GANs and their broad impact
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=0)** - [Narrator] Look at this image, and what do you think?
>
> **[0:03](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=3)** Is it real or was it generated by artificial intelligence?
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=9)** And what about this image?
>
> **[0:12](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=12)** Is it real or was it generated by AI?
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=17)** Now, look at this chart.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=19)** Do you think it shows real sales data or synthetic data made to look like the real thing?
>
> **[0:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=27)** These are all examples of output from generative adversarial networks or GANs, and their capabilities allow them to be used in a variety of transformative ways across various sectors.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=42)** Common use cases of GANs are found in healthcare.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=45)** In medical report augmentation, it's possible to auto generate or enhance clinical documentation.
>
> **[0:52](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=52)** In drug discovery support, it's possible to augment data sets for AI-assisted drug development.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=59)** In medical image generation, it's possible to produce x-rays, MRIs, or CT scans for rare conditions.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=67)** And in synthetic patient records, it's possible to generate anonymized realistic records for medical training.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=75)** Common use cases of GANs in entertainment are found in music and soundtrack generation, where it is possible to compose background music or soundscapes.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=86)** And in AI-driven character animation, where you can create fluid facial expressions and movements.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=92)** And in face generation for films and games, where it is possible to generate photorealistic characters and extras.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=101)** Common use cases of GANs in retail and fashion include the ability to personalize marketing content where you auto generate ads, banners, and recommendations.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=111)** And synthetic product photography, where you can produce high quality images without photo shoots.
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=117)** And customer behavior simulation, where it is possible to create behavioral data to test recommendations.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=126)** Common use cases of GANs in cybersecurity include the ability to train detection systems with varied phishing formats, simulate brute force or credential stuffing events, or mimic malicious traffic to test an organization's defenses.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=144)** What is, again, a Generative Adversarial Network is a class of machine learning systems invented by Ian Goodfellow and his colleagues in 2014.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=155)** At their core, GANs consists of two competing neural networks, a generator network, and a discriminator network.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=164)** They're trained simultaneously in a zero sum game, which means that the two neural networks are competing against each other in a way where one network's gain is directly equivalent to the other network's loss.
>
> **[2:58](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=178)** Essentially, they are locked in a competitive dynamic, where improvements in the generator's ability to produce realistic data come at the expense of the discriminator's ability to correctly identify fake data and vice versa.
>
> **[3:15](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=195)** In this introductory course, you'll gain a solid foundation in GANs, what they are, how they work, and how to build them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (6), ai (3), [[Neural Networks]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [narrator] (1)

#### Generative and discriminative models
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=0)** - [Instructor] Deep learning is a subset of machine learning, and both discriminative and generative models are built using deep neural networks.
>
> **[0:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=11)** While both rely on the core principles of deep learning, they're optimized for fundamentally different tasks.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=19)** Discriminative models learn boundaries between data classes, while generative models learn to model the data distribution.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=28)** This is a classic example of a discriminative model.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=32)** In this case, a logistic regression classifier trained on housing data.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=38)** Each dot is a house.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=41)** The x axis is size and square feet, and the Y axis is distanced to the city center.
>
> **[0:48](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=48)** The red region shows where the model predicts low priced homes, while the green region shows high priced homes.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=57)** The solid line between them is the decision boundary.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=62)** The threshold the model has learned to separate one class from the other.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=68)** The model doesn't generate new data.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=71)** It simply learns to draw a line between categories and the data it's given.
>
> **[1:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=78)** As we observed a training process, you'll see data points appear in stages.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=85)** As more data is incorporated, the model adjusts and draws its decision boundary, leading to a clearly labeled final boundary line.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=96)** Generative models learn to model the data distribution because their goal is to understand how real data is structured.
>
> **[1:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=105)** So they can generate new data points that look like they came from the same source.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=111)** This process is called approximating the data distribution.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=116)** Instead of memorizing the data, the model learns its structure and variability.
>
> **[2:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=122)** Why is this crucial for GANs?
>
> **[2:05](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=125)** Well, their job is to generate new synthetic data that looks indistinguishable from real data.
>
> **[2:12](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=132)** If a GAN is trained on cats, but doesn't learn the full distribution, it only learns tabby cats with short fur.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=141)** Then it can only produce limited outputs.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=144)** and it fails to generalize beyond the training data.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=148)** For example, it won't be able to generate long-haired cats, black cats, or cats in different poses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (15), [[Deep Learning]] (2), [[Neural Networks]] (1), [[Logistic Regression]] (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** gan (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Use case: Synthetic customer reviews for product analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=0)** - [Narrator] In our retail company, we face a common challenge: limited availability of customer reviews.
>
> **[0:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=8)** This gap makes it difficult to evaluate product performance, personalize recommendations, or train review based AI models.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=19)** To address this, we use GANs to generate high quality synthetic reviews for retail insights.
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=28)** These synthetic data sets allow teams to build, test, and validate machine learning models in a safe and privacy compliant way.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=40)** Our use case explores how a GAN trained on structured customer review data can generate realistic synthetic reviews.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=50)** Crucially, not as freeform text, but has numerical encodings of product preferences.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=58)** Instead of generating images, the generator produces structured data rows like product ID equals 103, rating equal four stars, customer preference equal value seeker.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=74)** These synthetic rows can be used to simulate customer feedback in low data situations and augment datasets for traineing recommendation engines.
>
> **[1:26](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=86)** We have two goals.
>
> **[1:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=88)** First, create synthetic customer reviews.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=92)** Second, ensure that the synthetic reviews closely mimic the patterns found in real reviews.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=102)** Here is a high level overview of our use case workflow.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=107)** The workflow begins with a random input which is fed into the generator.
>
> **[1:54](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=114)** You'll learn more about random vectors in a later lesson.
>
> **[1:59](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=119)** The generator then produces a synthetic review row.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=123)** This is where the generator's learned ability to create realistic data, like specific star ratings or feature preferences becomes evident.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=134)** This synthetic review row, along with a real review row from the dataset are both fed into the discriminator.
>
> **[2:24](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=144)** The arrows leading into the discriminator from both the synthetic review row and real review row indicate that the discriminator receives input from both sources, continuously evaluating both real and synthetic reviews, ensuring the generated data maintains the characteristics of real data.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=171)** The clusters shown here demonstrate how GANs can learn and generate diverse structured reviews across different sentiment dimensions, providing valuable training or testing data for customer feedback systems.
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=187)** The distinct clusters of positive, for example, great battery life and negative sentiment, for example, disappointing build quality and their correlation with product intensity highlight the GANs ability to learn the underlying distribution of real customer reviews.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=207)** For our retail company, this means we can generate an endless stream of synthetic reviews that accurately reflect genuine customer preferences and pain points.
>
> **[3:40](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=220)** This synthetic data becomes an invaluable asset for training more robust models, providing ample diverse data to build highly accurate recommendation engines, customer segmentation algorithms, and churn prediction models, even when real data is scarce and for safe experimentation, testing new product features, marketing strategies, or even potential price changes against a realistic simulated customer base without impacting real customers or compromising privacy and identifying edge cases.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=261)** Stress testing our existing ML models with synthetic data designed to challenge them, helping us uncover potential weaknesses or biases before they affect real world performance.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=276)** In our next module, we'll dive into GAN components and architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (12), product (5), [[Privacy]] (2), ai (1), teams (1)
> **Env Vars:** gan (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. How GANs Learn to Create/Generate/Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### The Generator
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=0)** - [Instructor] Recall that GANs must learn the underlying data distribution so that these synthetic outputs they produce look realistic, capture the natural variety of the real data, and can generalize beyond these specific examples seen during training.
>
> **[0:19](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=19)** This image shows how a GAN learns to replicate the original data distribution across multiple features.
>
> **[0:26](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=26)** On the left side, we see the product ID distribution, the real and synthetic data overlap closely, indicating that the GAN has learned how frequently different product IDs appear.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=41)** In the middle, we have the rating distribution.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=44)** Again, the GAN successfully mirrors the shape of the real data, capturing the popularity of certain ratings like four and five stars.
>
> **[0:54](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=54)** On the right, we have the preference cluster distribution, which simulates types of customer behavior.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=62)** The GAN matches the distribution across all three customer types.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=68)** The key takeaway here is this, a GAN that has learned the data distribution well can generate new data that looks and behaves just like the real thing, even though it's entirely synthetic.
>
> **[1:24](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=84)** This is what makes GANs so powerful for data augmentation, simulation and testing.
>
> **[1:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=92)** But how does the generator learn the probability distribution?
>
> **[1:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=98)** The process begins with random noise fed into the generator.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=103)** The generator then transforms its noise into synthetic data.
>
> **[1:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=109)** In our case, synthetic review rows.
>
> **[1:52](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=112)** The discriminator then tries to distinguish between real data from our dataset of actual reviews and fake data, the synthetic review rows from the generator.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=126)** The generator learns to create realistic fake data by continuously incorporating feedback from the discriminator.
>
> **[2:17](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=137)** It's essentially trying to trick the discriminator into classifying its output as real.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=145)** The generator doesn't know what it's supposed to create initially, but over time, by getting this crucial feedback and updating its internal workings, its weights using a loss function, it becomes increasingly proficient at fooling the discriminator, thus generating more and more realistic data.
>
> **[2:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=171)** Let's dive a little deeper to understand random input.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=175)** On the left is a simple blue circle labeled noise.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=180)** This is just a list or vector of random numbers usually sampled from a normal distribution.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=189)** It is the starting input for the generator, and you can think of it as creative raw material.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=198)** The generator's learning process starts with this random noise input.
>
> **[3:24](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=204)** This noise is then transformed and projected into a latent vector, which is a learned structured representation of the data distribution the generator aims to replicate.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=218)** Unlike purely unstructured random noise, the latent vector can be conceptualized as a hidden control panel with feature sliders.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=229)** For example, Z1 through Z8 as shown here.
>
> **[3:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=235)** Each slider's value influences a specific characteristic of the generated output, such as overall rating or mention of specific product features.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=248)** This high dimensional latent space forms the GAN's imagination landscape, where different combinations of these slider values correspond to distinct output.
>
> **[4:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=260)** By moving through this map, the generator can produce a wide variety of synthetic data with nearby points in the latent space yielding similar outputs.
>
> **[4:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=274)** The generator transforms this latent vector into realistic synthetic data, which it attempts to make indistinguishable from real data.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=285)** This entire transformation is a learned process during training driven by feedback from the discriminator.
>
> **[4:53](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=293)** Now, let's take a look at the discriminator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (17), product (3), [[Simulation]] (1), [[Probability]] (1), feature (1)
> **Env Vars:** gan (6)
> **Analogies:** just like (1), think of it as (1), for example (1), such as (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### The Discriminator
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=0)** - [Instructor] In the previous video, we looked at the role of the generator.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=5)** In this video, we look at the role of the discriminator.
>
> **[0:10](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=10)** The discriminator's job is to look at an input and decide, "Is this real or fake?"
>
> **[0:17](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=17)** It outputs a number between zero and one.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=21)** And if the number is closer to one, it's saying, "Yes, this looks real to me."
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=28)** If the number is closer to zero, it's saying, "No, this seems fake, probably generated."
>
> **[0:37](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=37)** In this diagram, we have a classic sigmoid curve showing how those probabilities are mapped.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=44)** On the left, you see the red dot labeled fake review, produced by the generator.
>
> **[0:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=51)** The discriminator assigns it a score near zero.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=55)** On the right, the green dot shows a real review from the training set.
>
> **[1:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=60)** The discriminator confidently labels this one with a score near 1.0.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=67)** During training, the generator is constantly trying to move that red dot up the curve to make its outputs so realistic that the discriminator gets confused and starts assigning higher scores.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=81)** So in a way, the discriminator is like a security guard checking IDs, and the generator is a forger trying to create a fake ID convincing enough to get past the guard.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=95)** Let's walk through this high-level example to better understand the role of the discriminator in a GAN.
>
> **[1:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=102)** On the left, we have two types of input data.
>
> **[1:46](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=106)** At the top, we see real reviews, actual customer feedback from real-world data, like, "This service exceeded my expectations."
>
> **[1:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=115)** Below that, we have synthetic reviews.
>
> **[1:58](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=118)** These are generated by the generator model, such as, "Excellent item, good product."
>
> **[2:04](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=124)** Both types of reviews are passed into the discriminator, shown here in orange.
>
> **[2:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=131)** In this example, real data is 0.93.
>
> **[2:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=136)** And in this example, fake data is .08.
>
> **[2:22](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=142)** Let's show this graphically.
>
> **[2:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=145)** These two plots are sigmoid activation curves, the S-shaped green lines.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=151)** The x-axis is the raw score before applying the sigmoid function.
>
> **[2:37](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=157)** The y-axis is the probability output after applying sigmoid, between zero and one.
>
> **[2:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=165)** On the left, the sigmoid function outputs a value close to one, around 0.93, in response to a real customer review.
>
> **[2:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=175)** This means the discriminator is highly confident that this data came from the real dataset.
>
> **[3:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=182)** On the right, the same sigmoid function gives a much lower output, around 0.08, when given a fake review generated by the generator.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=194)** This means that discriminator believes it's likely synthetic.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=198)** Key takeaways.
>
> **[3:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=200)** During training, the discriminator is shown two types of input, real customer reviews from the dataset and fake reviews generated by the generator.
>
> **[3:30](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=210)** The discriminator learns to recognize the subtle patterns that typically appear in human-written reviews and to flag machine-generated ones.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=218)** But at the same time, the generator improves by using feedback from the discriminator to produce more realistic fake reviews, ones that are increasingly difficult to tell apart from the real thing.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=233)** In this image, the generator is trying to push the red dot up the curve to fool the discriminator.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=241)** So this back-and-forth setup, where one model generates and the other evaluates, is an adversarial learning process, where each model pushes the other to improve.
>
> **[4:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=256)** To summarize, GANs rely on two neural networks working in tandem, the generator and the discriminator.
>
> **[4:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=265)** They engage in an adversarial loop.
>
> **[4:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=268)** One network learns to create increasingly realistic data, while the other learns to detect whether that data is real or fake.
>
> **[4:37](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=277)** Over time, this push and pull drives both models to improve, until the synthetic data becomes so convincing that the discriminator can no longer reliably tell it apart from the real thing.
>
> **[4:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=291)** Over time, this push and pull drives both models to improve, until the synthetic data becomes so convincing that the discriminator can no longer reliably tell it apart from the real thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), [[Security]] (1), product (1), [[Probability]] (1), [[Neural Networks]] (1)
> **Versions:** 0.93 (2), 1.0 (1), 0.08 (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** gan (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### How GANs learn
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=0)** - [Instructor] In this video, we'll break down the core mechanics, how the generator and discriminator engage in a back and forth adversarial process; how loss functions provide feedback, how loss curves strike progress, and model convergence, the signal that training the GAN has succeeded.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=23)** In this slide, we're looking at the core engine of GAN training, the training loop.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=30)** The generator creates fake data from noise.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=33)** The discriminator sees both real and fake samples, and tries to tell them apart, but here's the key point.
>
> **[0:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=42)** Only the generator is updated during this phase, based on how well it fooled the discriminator.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=50)** This loop repeats over, and over, and over as both models get better at their roles.
>
> **[0:58](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=58)** Loss functions measure how well each model is performing.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=62)** In the vanilla GAN, we use binary cross-entropy loss.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=67)** It's a function that compares to probability distributions, whether the discriminator's output is real or fake.
>
> **[1:17](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=77)** Once the loss is calculated, we use backpropagation, short for a backward propagation of errors.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=85)** This is how neural networks learn, by adjusting weights and biases based on how wrong the prediction was.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=93)** At some point, with proper architecture, the training should reach a state called model convergence.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=101)** And this is when the generator's fakes become so convincing that the discriminator can't really tell the difference anymore.
>
> **[1:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=110)** Its predictions for real and fake hover around 0.5, and this is a good thing!
>
> **[1:57](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=117)** It means the GAN has successfully learned the data distribution.
>
> **[2:03](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=123)** We say, the model has reached equilibrium.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=127)** Let's first look at the graph on the left, which shows the simplified generator loss.
>
> **[2:13](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=133)** The x-axis represents the discriminator's output when it sees data from the generator.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=140)** A value of zero means the discriminator is sure it's fake, and a value of one means it's sure it's real.
>
> **[2:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=148)** The green curve shows the generator's loss, but when the discriminator outputs a value close to zero for the fake data, it means it's easily caught the fake.
>
> **[2:40](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=160)** And when the generator's loss is very high, this is the worst case for the generator.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=169)** Conversely, as the generator improves and manages to make the discriminator output a value closer to one, meaning the discriminator thinks that fake data is real, the generator's loss goes down, approaching zero.
>
> **[3:05](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=185)** And this is the best case scenario for the generator because it means it has successfully fooled the discriminator.
>
> **[3:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=194)** Now, let's look at the right graph, which shows how the discriminator's loss behaves during training.
>
> **[3:22](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=202)** The blue line shows the loss when a discriminator is looking at real data.
>
> **[3:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=207)** It wants to output a value close to one, so the closer DX is to one, the lower the blue curve drops.
>
> **[3:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=218)** The red line shows the loss when it looks at fake data.
>
> **[3:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=222)** Here, it wants to output a value close to zero.
>
> **[3:47](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=227)** The closer DGZ is to zero, the lower the red curve gets.
>
> **[3:53](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=233)** The total discriminator loss is just a sum of both curves.
>
> **[3:59](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=239)** Here is another example.
>
> **[4:01](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=241)** As you can see in the chart, the discriminator starts off confident.
>
> **[4:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=247)** It's very good at spotting fake data, but as the generator improves, it becomes harder for the discriminator to tell real from fake data, so its loss increases.
>
> **[4:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=261)** And finally shown here is a visualization of model convergence.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=267)** As the generator improves, the discriminator's output for both real and fake inputs moves closer to 0.5.
>
> **[4:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=275)** and this indicates that the discriminator can no longer confidently tell the difference between fake or real data.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=284)** This is the ideal equilibrium of GAN training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), [[Vanilla]] (1), [[Probability]] (1), [[Neural Networks]] (1)
> **Env Vars:** gan (5), dgz (1)
> **Definitions:** is a  (2), short for (1)
> **Versions:** 0.5 (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Building Your First GAN

[↑ Back to Table of Contents](#table-of-contents)

#### How to use the challenge exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=0)** - [Instructor] The files needed for this lab are located in the course's GitHub repository.
>
> **[0:05](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=5)** To use the files, please clone the repo into your own GitHub account, or download the files locally.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=18)** You'll see a begin and an end file.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=23)** Use the begin file, and Open in Colab to open your Jupyter Notebook, so that you can begin working on the lab.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=39)** And that should be all you need to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2), colab (1), jupyter (1)
> **Exercise Files:** clone the repo (1), download the (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Build and evaluate a GAN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=0)** - [Instructor] In this Challenge Lab, you build a simple GAN to generate structured synthetic data similar to customer reviews.
>
> **[0:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=14)** We have pre-coded much of the exercise for you so that you can focus on the workflow.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=20)** There are only two sections you need to code, build a generator network, and then build the discriminator network.
>
> **[0:29](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=29)** See the Table of Contents to go directly to them.
>
> **[0:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=34)** Then go to the top of the Colab menu, select Runtime, and then Run All to run all of the cells in the Jupiter notebook.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=45)** Then evaluate again by reviewing the loss curves and the real versus generated data distributions.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=55)** So let's take a quick look at the notebook.
>
> **[0:59](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=59)** Here is a table of contents.
>
> **[1:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=62)** Down here you see Build The Generator Network and Build The Discriminator Network.
>
> **[1:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=68)** You're going to put code into this section here to define the generator and code down here to define the discriminator.
>
> **[1:19](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=79)** And after you have coded both the generator network and the discriminator network, you're going to go up to the menu here, select Runtime, and Run All.
>
> **[1:33](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=93)** Good luck on the Lab, and please join me in the next video to see the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (2), next (1)
> **Env Vars:** gan (1)
> **Cross-References:** in the next (1)
> **Tools:** colab (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Solution: Build and evaluate a GAN
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=0)** - [Instructor] "This lab is part of your 'Introduction to GANs' course.
>
> **[0:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=9)** You'll build a simple Generative Adversarial Network to generate structured synthetic data similar to customer reviews.
>
> **[0:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=20)** The lab includes building the generator and discriminator in Keras, training the GAN, plotting loss curves, visualizing real versus synthetic data, and showing model convergence."
>
> **[0:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=36)** First, we import our libraries.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=41)** To do that, simply run the cell.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=50)** Next, we simulate real data here to avoid any future dependencies on external files.
>
> **[0:56](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=56)** In your environment, you would typically pull this data from a data warehouse or other database systems.
>
> **[1:03](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=63)** And again here, we're simply going to run the cell.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=76)** In our challenge lab, you had to build the generator network.
>
> **[1:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=81)** And the code to do that is shown here.
>
> **[1:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=85)** We are defining a python function to build the Keras sequential model.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=99)** Also in your challenge lab, you had to build the discriminator network.
>
> **[1:43](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=103)** And again, it's a python function where you're using the Keras sequential model.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=116)** To compile the model and build the GAN, you simply had to run the cell.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=134)** And to train the GAN, again, you simply had to run the cell.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=156)** After the model has compiled, simply plot the loss curves by clicking here.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=169)** Your numbers may vary.
>
> **[2:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=170)** However, you should see something similar where you have a convergence, dotted green line, a discriminator loss, blue line, and a generator loss, yellow line.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=192)** And here we have the overall interpretation of those loss curves.
>
> **[3:17](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=197)** So there's a note.
>
> **[3:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=198)** "This is the kind of loss curve behavior you would ideally want to see when training a robust and effective GAN, demonstrating that the model has successfully learned the underlying data distribution and can generate high-fidelity synthetic content."
>
> **[3:37](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=217)** So we've built our generator network, we've built our discriminator network, we've compiled our GAN, we've plotted our loss curves.
>
> **[3:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=229)** Now let's evaluate the real versus the generated data distributions.
>
> **[3:56](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=236)** And to do that, we simply click here.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=248)** "These three plots, taken together, demonstrate that your GAN has been highly successful in learning the underlying data distributions of the real customer review dataset for their 'rating,' 'review_length,' and 'sentiment_score' features.
>
> **[4:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=267)** The generated data's distribution closely overlap with the real data's distributions across all three features.
>
> **[4:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=276)** This is the ideal outcome for a GAN, as it signifies that the Generator is producing synthetic data that is statistically very similar to the real data, making it highly valuable for tasks like data augmentation, privacy-safe testing, and simulation in your retail use case.
>
> **[4:57](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=297)** This is a very strong result!"

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (13), [[Python (Programming Language)|Python]] (2), next (1), database (1), [[Privacy]] (1)
> **Env Vars:** gan (7)
> **CLI Commands:** python (2)
> **Code Identifiers:** review_length (1), sentiment_score (1)
> **Analogies:** similar to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. GANs in the Real World

[↑ Back to Table of Contents](#table-of-contents)

#### GANs and multimodal LLMs for scalable content generation
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=0)** - [Narrator] GANs are powerful creators capable of generating realistic images, data, audio, and other synthetic content, but they don't inherently understand the meaning or context of what they create.
>
> **[0:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=16)** That's where large language models, particularly multimodal large language models come into play.
>
> **[0:23](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=23)** They add the layer of comprehension, interpreting, describing, and acting on what GANs produce.
>
> **[0:32](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=32)** Imagine an e-commerce business selling thousands of unique products like shoes.
>
> **[0:38](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=38)** Each product needs a compelling description, accurate category tags, and catchy marketing taglines for website listings, advertisements, and social media manually.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=50)** Creating this content for every single product is a massive time consuming and expensive endeavor.
>
> **[0:57](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=57)** It often leads to bottlenecks, inconsistent quality, and limits the pace at which new products can be launched or campaigns can be created.
>
> **[1:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=67)** This is where GANs and multimodal LLMs come together to offer a powerful workflow solution.
>
> **[1:15](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=75)** Let's break down the process.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=76)** Through adversarial training, the generator learns the subtle visual details and variations of sneakers, allowing it to create entirely new, realistic images.
>
> **[1:27](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=87)** These synthetic creations enable businesses to produce limitless product visuals without relying on traditional photography, helping reduce costs and speeding up the creative process.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=101)** Multimodal processing is where image to text generation truly shines.
>
> **[1:47](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=107)** The synthetic sneaker image is passed to a multimodal large language model.
>
> **[1:53](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=113)** And unlike traditional, LLMs that handle only language, multimodal LLMs can analyze images reason about visual details and describe features like style, shape, or material.
>
> **[2:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=127)** They bridge the gap between visual content and language, enabling rich understanding and interpretation of AI generated visuals using its visual understanding.
>
> **[2:20](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=140)** The multimodal LLM can generate useful marketing content, including a product description, a category tag, and a marketing tagline.
>
> **[2:31](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=151)** This AI driven content generation workflow is a powerful example of how GANs working alongside advanced models like multimodal LLMs are reshaping modern marketing.
>
> **[2:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=162)** Pause the video here to review best practices for integrating GANs with multimodal LLMs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** product (4), [[Microsoft Products|Products]] (2), ai (2), data (1), [[Large Language Models (LLM)|Large language models]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** llm (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### A collaborative pipeline
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=0)** - [Narrator] GANs do not work alone.
>
> **[0:02](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=2)** In real world applications they operate within a larger AI pipeline, teaming up with other models, interfaces, and people to deliver usable outputs.
>
> **[0:15](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=15)** Now, let's look beyond the core GAN model and see how it fits into a collaborative AI pipeline in the real world.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=25)** Has AI systems become more sophisticated?
>
> **[0:28](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=28)** They often involve multiple specialized models and human roles working together.
>
> **[0:33](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=33)** This collaborative approach demonstrates several key aspects of modern AI.
>
> **[0:40](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=40)** Specialization, different AI models excel at different tasks.
>
> **[0:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=45)** GANs are great at generating, while multimodal LLMs are great at understanding and describing complex content.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=55)** And in human in the loop, human experts guide the AI, provide context, make strategic decisions, and refine the AI's output to ensure it meets business goals and scalability.
>
> **[1:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=71)** Automating parts of the content creation process allows businesses to generate vast amounts of personalized and diverse content at scale.
>
> **[1:22](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=82)** Something that would be impossible with manual methods alone and efficiency.
>
> **[1:30](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=90)** By combining the strengths of various AI tools, tasks that previously took days or weeks can be completed in minutes or hours.
>
> **[1:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=101)** Let's break down each role in this collaboration.
>
> **[1:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=104)** The developer designer role is critical for the initial creation and fine tuning of the GAN itself.
>
> **[1:51](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=111)** They are responsible for setting up the training process, curating the real data sets, monitoring convergence, and ensuring the GaN can consistently produce high quality, relevant synthetic outputs.
>
> **[2:06](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=126)** Once the GAN generates raw content, a human expert like a marketer or content creator, steps in, and their job is not to code the GAN, but to leverage the AI's output.
>
> **[2:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=141)** They might review the generated product output, select the best ones, and then prompt another AI model like a multimodal LLM to add descriptive text for example.
>
> **[2:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=155)** The AI system is not a human role, but rather the underlying technological infrastructure that makes this collaboration seamless.
>
> **[2:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=164)** It's the clue that connects the visual output from the GAN to the textual input for the multimodal LLM, and then orchestrates how the final integrated output, for example, an image with a matching description is delivered.
>
> **[3:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=180)** It ensures that the various AI components can talk to each other and operate efficiently within a larger workflow.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=191)** APIs application programming interfaces, allow different software components like your GANs output module and the multimodal LLMs input module to communicate.
>
> **[3:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=205)** This table summarizes the collaborative AI pipeline by role, task and some of the key tools used.
>
> **[3:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=214)** Here we briefly show some of the skills needed by role.
>
> **[3:39](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=219)** Developers and designers need some Python knowledge.
>
> **[3:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=221)** They need to understand GAN training and prompt tuning, data pre-processing and visual design tools.
>
> **[3:48](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=228)** Marketers and content creators should be skilled in prompt engineering, multimodal LLM usage, copywriting, and branding awareness, AI system integration requires knowledge of API integration, UI design, model orchestration, and cloud deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (14), llm (3), data (2), prompt (2), [[Microsoft Excel|Excel]] (1)
> **Env Vars:** gan (6), llm (3), api (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next Steps
> [LinkedIn Learning](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing this introduction to GANs course.
>
> **[0:04](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=4)** It's time to think about your next steps.
>
> **[0:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=7)** Continue to explore, innovate, and apply what you've learned, and you'll stay ahead of the curve, making a meaningful impact within your organization.
>
> **[0:18](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=18)** Here are some general next steps you might consider.
>
> **[0:21](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=21)** Depending on your role, apply what you've learned.
>
> **[0:25](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=25)** Designers, developers, experiment with architectures.
>
> **[0:30](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=30)** Try training a DC-GAN or StyleGAN on domain-specific visuals, like apparel, vehicles, or architecture.
>
> **[0:39](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=39)** Marketers or product managers.
>
> **[0:41](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=41)** Collaborate with AI teams.
>
> **[0:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=44)** Apply your new understanding to team up with GAN developers to co-create content.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=50)** And AI ML engineers.
>
> **[0:53](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=53)** Scale a GAN workflow.
>
> **[0:55](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=55)** Deploy a GAN pipeline with loss tracking, model checkpoints, and synthetic data evaluation.
>
> **[1:04](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=64)** Interested in learning more about deep learning and how to prep data for model training?
>
> **[1:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=69)** Scan the QR codes to check out my two LinkedIn courses.
>
> **[1:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=74)** Good luck on your journey and keep learning!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** next (2), ai (2), data (2), product (1), teams (1)
> **Env Vars:** gan (4)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Gwendolyn Stripling]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/introduction-to-generative-adversarial-networks-gans-3963173)

## Skills Covered

- Artificial Intelligence (AI)
- Generative Adversarial Networks (GANs)

## Path Context

### In [[Advance Your Skills in Deep Learning and Neural Networks]]
← [[Deep Learning with Python- Optimizing Deep Learning Models]] | **6 of 8** | [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] →

### In [[Advance Your Skills in AI and Machine Learning]]
← [[Training Neural Networks in Python]] | **6 of 16** | [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] →

## Appears In

- [[Advance Your Skills in Deep Learning and Neural Networks]]
- [[Advance Your Skills in AI and Machine Learning]]

## Related Courses

_Courses sharing skills:_

- [[AI Workshop- Hands-on with GANs with Deep Convolutional Networks]] — Artificial Intelligence (AI), Generative Adversarial Networks (GANs)
- [[AI Workshop- Hands-on with GANs Using Dense Neural Networks (2023)]] — Artificial Intelligence (AI), Generative Adversarial Networks (GANs)
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)