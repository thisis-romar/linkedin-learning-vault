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
created: 2026-05-03
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

#### [Transforming innovation with GANs](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/transforming-innovation-with-gans?u=76281980&t=0)** - [Gwendolyn] Did you know that [[Generative Adversarial Networks (GANs)|generative adversarial networks]], or GANs, are responsible for creating realistic images, music, and even synthetic data? By the end of this course, you'll be ready to identify new opportunities for [[Generative AI]] with thin your organization, build compelling business cases for GAN projects, and effectively contribute to AI initiatives that leverage synthetic data. Hi, I'm Gwendolyn Stripling. I've helped thousands of learners understand emerging AI technologies and how to apply them to real world challenges. So join me on this journey into the fascinating world of GANs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Generative AI]] (1)
> **Env Vars:** gan (1)
> **Speakers:** - [gwendolyn] (1)

#### [What you should know](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/what-you-should-know?u=76281980&t=0)** - [Instructor] This introductory course is designed for anyone interested in a high-level look at [[Generative Adversarial Networks (GANs)|generative adversarial networks]], known as GANs, and their transformative applications in real-world scenarios. Some familiarity with the basics of [[Neural Networks]] and [[Python (Programming Language)|Python]] will be helpful, but it's not required for hands-on work. There is no coding, there's nothing to install. However, there are lots of real-world examples. Once you complete this foundational course, your understanding of GANs will help you design and build AI systems that can generate new, realistic content and understand the roles and skills required to collaborate across technical, creative and system integration teams in an AI-powered production pipeline.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Neural Networks]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1)
> **Definitions:** known as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to GANs and Their Broad Impact

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to GANs and their broad impact](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=0)** - [Narrator] Look at this image, and what do you think? Is it real or was it generated by [[Artificial Intelligence (AI)|artificial intelligence]]? And what about this image? Is it real or was it generated by AI? Now, look at this chart. Do you think it shows real sales data or synthetic data made to look like the real thing? These are all examples of output from [[Generative Adversarial Networks (GANs)|generative adversarial networks]] or GANs, and their capabilities allow them to be used in a variety of transformative ways across various sectors. Common use cases of GANs are found in healthcare. In medical report augmentation, it's possible to auto generate or enhance clinical documentation. In drug discovery support, it's possible to augment data sets for AI-assisted drug development. In medical image generation, it's possible to produce x-rays, MRIs, or CT scans for rare conditions. And in synthetic patient records, it's possible to generate anonymized realistic records for medical training. Common use cases of GANs in entertainment are found in music and soundtrack generation, where it is possible to [[Jetpack Compose|compose]] background music or soundscapes. And in AI-driven character animation, where you can create fluid facial expressions and movements. And in face generation for films and games,
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=95)** where it is possible to generate photorealistic characters and extras. Common use cases of GANs in retail and fashion include the ability to personalize marketing content where you auto generate ads, banners, and recommendations. And synthetic product photography, where you can produce high quality images without photo shoots. And customer behavior [[Simulation]], where it is possible to create behavioral data to test recommendations. Common use cases of GANs in [[Cybersecurity]] include the ability to train detection systems with varied [[Phishing]] formats, simulate brute force or credential stuffing events, or mimic malicious traffic to test an organization's defenses. What is, again, a Generative Adversarial Network is a class of machine learning systems invented by Ian Goodfellow and his colleagues in 2014. At their core, GANs consists of two competing [[Neural Networks]], a generator network, and a discriminator network. They're trained simultaneously in a zero sum game, which means that the two neural networks are competing against each other in a way where one network's gain is directly equivalent to the other network's loss. Essentially, they are locked in a competitive dynamic, where improvements in the generator's ability to produce realistic data come at the expense of the discriminator's ability
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/introduction-to-gans-and-their-broad-impact?u=76281980&t=190)** to correctly identify fake data and vice versa. In this introductory course, you'll gain a solid foundation in GANs, what they are, how they work, and how to build them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Neural Networks]] (2), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Generative Adversarial Networks (GANs)|Generative adversarial networks]] (1), [[Jetpack Compose|Compose]] (1), [[Simulation]] (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [narrator] (1)

#### [Generative and discriminative models](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=0)** - [Instructor] [[Deep Learning]] is a subset of machine learning, and both discriminative and generative models are built using deep [[Neural Networks]]. While both rely on the core principles of deep learning, they're optimized for fundamentally different tasks. Discriminative models learn boundaries between data classes, while generative models learn to model the data distribution. This is a classic example of a discriminative model. In this case, a [[Logistic Regression]] classifier trained on housing data. Each dot is a house. The x axis is size and square feet, and the Y axis is distanced to the city center. The red region shows where the model predicts low priced homes, while the green region shows high priced homes. The solid line between them is the decision boundary. The threshold the model has learned to separate one class from the other. The model doesn't generate new data. It simply learns to draw a line between categories and the data it's given. As we observed a training process, you'll see data points appear in stages. As more data is incorporated, the model adjusts and draws its decision boundary, leading to a clearly labeled final boundary line.
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/generatives-and-discriminative-models?u=76281980&t=96)** Generative models learn to model the data distribution because their goal is to understand how real data is structured. So they can generate new data points that look like they came from the same source. This process is called approximating the data distribution. Instead of memorizing the data, the model learns its structure and variability. Why is this crucial for GANs? Well, their job is to generate new synthetic data that looks indistinguishable from real data. If a GAN is trained on cats, but doesn't learn the full distribution, it only learns tabby cats with short fur. Then it can only produce limited outputs. and it fails to generalize beyond the training data. For example, it won't be able to generate long-haired cats, black cats, or cats in different poses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (2), [[Neural Networks]] (1), [[Logistic Regression]] (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** gan (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Use case: Synthetic customer reviews for product analysis](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=0)** - [Narrator] In our retail company, we face a common challenge: limited availability of customer reviews. This gap makes it difficult to evaluate product performance, personalize recommendations, or train review based AI models. To address this, we use GANs to generate high quality synthetic reviews for retail insights. These synthetic data sets allow teams to build, test, and validate machine learning models in a safe and [[Privacy]] compliant way. Our use case explores how a GAN trained on structured customer review data can generate realistic synthetic reviews. Crucially, not as freeform text, but has numerical encodings of product preferences. Instead of generating images, the generator produces structured data rows like product ID equals 103, rating equal four stars, customer preference equal value seeker. These synthetic rows can be used to simulate customer feedback in low data situations and augment datasets for traineing recommendation engines. We have two goals. First, create synthetic customer reviews. Second, ensure that the synthetic reviews
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=96)** closely mimic the patterns found in real reviews. Here is a high level overview of our use case workflow. The workflow begins with a random input which is fed into the generator. You'll learn more about random vectors in a later lesson. The generator then produces a synthetic review row. This is where the generator's learned ability to create realistic data, like specific star ratings or feature preferences becomes evident. This synthetic review row, along with a real review row from the dataset are both fed into the discriminator. The arrows leading into the discriminator from both the synthetic review row and real review row indicate that the discriminator receives input from both sources, continuously evaluating both real and synthetic reviews, ensuring the generated data maintains the characteristics of real data. The clusters shown here demonstrate how GANs can learn and generate diverse structured reviews across different sentiment dimensions, providing valuable training or testing data for customer feedback systems. The distinct clusters of positive, for example,
>
> **[3:10](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/use-case-synthetic-customer-reviews-for-product-analysis?u=76281980&t=190)** great battery life and negative sentiment, for example, disappointing build quality and their correlation with product intensity highlight the GANs ability to learn the underlying distribution of real customer reviews. For our retail company, this means we can generate an endless stream of synthetic reviews that accurately reflect genuine customer preferences and pain points. This synthetic data becomes an invaluable asset for training more robust models, providing ample diverse data to build highly accurate recommendation engines, customer segmentation [[Algorithms]], and churn prediction models, even when real data is scarce and for safe experimentation, testing new product features, marketing strategies, or even potential price changes against a realistic simulated customer base without impacting real customers or compromising privacy and identifying edge cases. Stress testing our existing ML models with synthetic data designed to challenge them, helping us uncover potential weaknesses or biases before they affect real world performance. In our next module, we'll dive into GAN components and architecture.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Algorithms]] (1)
> **Env Vars:** gan (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. How GANs Learn to Create/Generate/Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [The Generator](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=0)** - [Instructor] Recall that GANs must learn the underlying data distribution so that these synthetic outputs they produce look realistic, capture the natural variety of the real data, and can generalize beyond these specific examples seen during training. This image shows how a GAN learns to replicate the original data distribution across multiple features. On the left side, we see the product ID distribution, the real and synthetic data overlap closely, indicating that the GAN has learned how frequently different product IDs appear. In the middle, we have the rating distribution. Again, the GAN successfully mirrors the shape of the real data, capturing the popularity of certain ratings like four and five stars. On the right, we have the preference cluster distribution, which simulates types of customer behavior. The GAN matches the distribution across all three customer types. The key takeaway here is this, a GAN that has learned the data distribution well can generate new data that looks and behaves just like the real thing, even though it's entirely synthetic. This is what makes GANs so powerful for data augmentation, [[Simulation]] and testing. But how does the generator
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=94)** learn the [[Probability]] distribution? The process begins with random noise fed into the generator. The generator then transforms its noise into synthetic data. In our case, synthetic review rows. The discriminator then tries to distinguish between real data from our dataset of actual reviews and fake data, the synthetic review rows from the generator. The generator learns to create realistic fake data by continuously incorporating feedback from the discriminator. It's essentially trying to trick the discriminator into classifying its output as real. The generator doesn't know what it's supposed to create initially, but over time, by getting this crucial feedback and updating its internal workings, its weights using a loss function, it becomes increasingly proficient at fooling the discriminator, thus generating more and more realistic data. Let's dive a little deeper to understand random input. On the left is a simple blue circle labeled noise. This is just a list or vector of random numbers usually sampled from a normal distribution.
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=189)** It is the starting input for the generator, and you can think of it as creative raw material. The generator's learning process starts with this random noise input. This noise is then transformed and projected into a latent vector, which is a learned structured representation of the data distribution the generator aims to replicate. Unlike purely unstructured random noise, the latent vector can be conceptualized as a hidden control panel with feature sliders. For example, Z1 through Z8 as shown here. Each slider's value influences a specific characteristic of the generated output, such as overall rating or mention of specific product features. This high dimensional latent space [[Forms]] the GAN's imagination landscape, where different combinations of these slider values correspond to distinct output. By moving through this map, the generator can produce a wide variety of synthetic data with nearby points in the latent space yielding similar outputs. The generator transforms this latent vector into realistic synthetic data, which it attempts to make indistinguishable from real data.
>
> **[4:45](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-generator?u=76281980&t=285)** This entire transformation is a learned process during training driven by feedback from the discriminator. Now, let's take a look at the discriminator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (1), [[Probability]] (1), [[Forms]] (1)
> **Env Vars:** gan (6)
> **Analogies:** just like (1), think of it as (1), for example (1), such as (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [The Discriminator](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=0)** - [Instructor] In the previous video, we looked at the role of the generator. In this video, we look at the role of the discriminator. The discriminator's job is to look at an input and decide, "Is this real or fake?" It outputs a number between zero and one. And if the number is closer to one, it's saying, "Yes, this looks real to me." If the number is closer to zero, it's saying, "No, this seems fake, probably generated." In this diagram, we have a classic sigmoid curve showing how those probabilities are mapped. On the left, you see the red dot labeled fake review, produced by the generator. The discriminator assigns it a score near zero. On the right, the green dot shows a real review from the training set. The discriminator confidently labels this one with a score near 1.0. During training, the generator is constantly trying to move that red dot up the curve to make its outputs so realistic that the discriminator gets confused and starts assigning higher scores. So in a way, the discriminator is like a security guard checking IDs, and the generator is a forger trying to create a fake ID convincing enough to get past the guard.
>
> **[1:35](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=95)** Let's walk through this high-level example to better understand the role of the discriminator in a GAN. On the left, we have two types of input data. At the top, we see real reviews, actual customer feedback from real-world data, like, "This service exceeded my expectations." Below that, we have synthetic reviews. These are generated by the generator model, such as, "Excellent item, good product." Both types of reviews are passed into the discriminator, shown here in orange. In this example, real data is 0.93. And in this example, fake data is .08. Let's show this graphically. These two plots are sigmoid activation curves, the S-shaped green lines. The x-axis is the raw score before applying the sigmoid function. The y-axis is the [[Probability]] output after applying sigmoid, between zero and one. On the left, the sigmoid function outputs a value close to one, around 0.93, in response to a real customer review. This means the discriminator is highly confident that this data came from the real dataset. On the right, the same sigmoid function gives a much lower output,
>
> **[3:07](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=187)** around 0.08, when given a fake review generated by the generator. This means that discriminator believes it's likely synthetic. Key takeaways. During training, the discriminator is shown two types of input, real customer reviews from the dataset and fake reviews generated by the generator. The discriminator learns to recognize the subtle patterns that typically appear in human-written reviews and to flag machine-generated ones. But at the same time, the generator improves by using feedback from the discriminator to produce more realistic fake reviews, ones that are increasingly difficult to tell apart from the real thing. In this image, the generator is trying to push the red dot up the curve to fool the discriminator. So this back-and-forth setup, where one model generates and the other evaluates, is an adversarial learning process, where each model pushes the other to improve. To summarize, GANs rely on two [[Neural Networks]] working in tandem, the generator and the discriminator. They engage in an adversarial loop. One network learns to create increasingly realistic data, while the other learns to detect whether that data is real or fake. Over time, this push and pull drives both models to improve,
>
> **[4:42](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/the-discriminator?u=76281980&t=282)** until the synthetic data becomes so convincing that the discriminator can no longer reliably tell it apart from the real thing. Over time, this push and pull drives both models to improve, until the synthetic data becomes so convincing that the discriminator can no longer reliably tell it apart from the real thing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Neural Networks]] (1)
> **Versions:** 0.93 (2), 1.0 (1), 0.08 (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** make (1)
> **Env Vars:** gan (1)
> **Cross-References:** previous video (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)

#### [How GANs learn](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=0)** - [Instructor] In this video, we'll break down the core mechanics, how the generator and discriminator engage in a back and forth adversarial process; how loss functions provide feedback, how loss curves strike progress, and model convergence, the signal that training the GAN has succeeded. In this slide, we're looking at the core engine of GAN training, the training loop. The generator creates fake data from noise. The discriminator sees both real and fake samples, and tries to tell them apart, but here's the key point. Only the generator is updated during this phase, based on how well it fooled the discriminator. This loop repeats over, and over, and over as both models get better at their roles. Loss functions measure how well each model is performing. In the [[Vanilla]] GAN, we use binary cross-entropy loss. It's a function that compares to [[Probability]] distributions, whether the discriminator's output is real or fake. Once the loss is calculated, we use backpropagation, short for a backward propagation of errors. This is how [[Neural Networks]] learn, by adjusting weights and biases based on how wrong the prediction was. At some point, with proper architecture,
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=96)** the training should reach a state called model convergence. And this is when the generator's fakes become so convincing that the discriminator can't really tell the difference anymore. Its predictions for real and fake hover around 0.5, and this is a good thing! It means the GAN has successfully learned the data distribution. We say, the model has reached equilibrium. Let's first look at the graph on the left, which shows the simplified generator loss. The x-axis represents the discriminator's output when it sees data from the generator. A value of zero means the discriminator is sure it's fake, and a value of one means it's sure it's real. The green curve shows the generator's loss, but when the discriminator outputs a value close to zero for the fake data, it means it's easily caught the fake. And when the generator's loss is very high, this is the worst case for the generator. Conversely, as the generator improves and manages to make the discriminator output a value closer to one, meaning the discriminator thinks that fake data is real, the generator's loss goes down, approaching zero. And this is the best case scenario for the generator because it means
>
> **[3:09](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=189)** it has successfully fooled the discriminator. Now, let's look at the right graph, which shows how the discriminator's loss behaves during training. The blue line shows the loss when a discriminator is looking at real data. It wants to output a value close to one, so the closer DX is to one, the lower the blue curve drops. The red line shows the loss when it looks at fake data. Here, it wants to output a value close to zero. The closer DGZ is to zero, the lower the red curve gets. The total discriminator loss is just a sum of both curves. Here is another example. As you can see in the chart, the discriminator starts off confident. It's very good at spotting fake data, but as the generator improves, it becomes harder for the discriminator to tell real from fake data, so its loss increases. And finally shown here is a visualization of model convergence. As the generator improves, the discriminator's output for both real and fake inputs moves closer to 0.5. and this indicates that the discriminator can no longer confidently tell the difference between fake or real data.
>
> **[4:44](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-gans-learn?u=76281980&t=284)** This is the ideal equilibrium of GAN training.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vanilla]] (1), [[Probability]] (1), [[Neural Networks]] (1)
> **Env Vars:** gan (5), dgz (1)
> **Definitions:** is a  (2), short for (1)
> **Versions:** 0.5 (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Building Your First GAN

[↑ Back to Table of Contents](#table-of-contents)

#### [How to use the challenge exercise files](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/how-to-use-the-challenge-exercise-files?u=76281980&t=0)** - [Instructor] The files needed for this lab are located in the course's [[GitHub]] repository. To use the files, please clone the repo into your own GitHub account, or download the files locally. You'll see a begin and an end file. Use the begin file, and Open in Colab to open your Jupyter Notebook, so that you can begin working on the lab. And that should be all you need to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2), colab (1), jupyter (1)
> **Exercise Files:** clone the repo (1), download the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Build and evaluate a GAN](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=0)** - [Instructor] In this Challenge Lab, you build a simple GAN to generate structured synthetic data similar to customer reviews. We have pre-coded much of the exercise for you so that you can focus on the workflow. There are only two sections you need to code, build a generator network, and then build the discriminator network. See the Table of Contents to go directly to them. Then go to the top of the Colab menu, select Runtime, and then Run All to run all of the cells in the Jupiter notebook. Then evaluate again by reviewing the loss curves and the real versus generated data distributions. So let's take a quick look at the notebook. Here is a table of contents. Down here you see Build The Generator Network and Build The Discriminator Network. You're going to put code into this section here to define the generator and code down here to define the discriminator. And after you have coded both the generator network and the discriminator network, you're going to go up to the menu here, select Runtime, and Run All. Good luck on the Lab,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/challenge-build-and-evaluate-a-gan?u=76281980&t=94)** and please join me in the next video to see the solution.

> [!info]- Semantic Content
>
> **Env Vars:** gan (1)
> **Cross-References:** in the next (1)
> **Tools:** colab (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Build and evaluate a GAN](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=0)** - [Instructor] "This lab is part of your 'Introduction to GANs' course. You'll build a simple Generative Adversarial Network to generate structured synthetic data similar to customer reviews. The lab includes building the generator and discriminator in Keras, training the GAN, plotting loss curves, visualizing real versus synthetic data, and showing model convergence." First, we import our libraries. To do that, simply run the cell.
>
> **[0:50](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=50)** Next, we simulate real data here to avoid any future dependencies on external files. In your environment, you would typically pull this data from a data warehouse or other [[Database Systems]]. And again here, we're simply going to run the cell.
>
> **[1:16](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=76)** In our challenge lab, you had to build the generator network. And the code to do that is shown here. We are defining a [[Python (Programming Language)|python]] function to build the Keras sequential model.
>
> **[1:39](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=99)** Also in your challenge lab, you had to build the discriminator network. And again, it's a python function where you're using the Keras sequential model.
>
> **[1:56](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=116)** To compile the model and build the GAN, you simply had to run the cell.
>
> **[2:14](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=134)** And to train the GAN, again, you simply had to run the cell.
>
> **[2:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=156)** After the model has compiled, simply plot the loss curves by clicking here.
>
> **[2:49](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=169)** Your numbers may vary. However, you should see something similar where you have a convergence, dotted green line, a discriminator loss, blue line, and a generator loss, yellow line.
>
> **[3:12](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=192)** And here we have the overall interpretation of those loss curves. So there's a note. "This is the kind of loss curve behavior you would ideally want to see when training a robust and effective GAN, demonstrating that the model has successfully learned the underlying data distribution and can generate high-fidelity synthetic content." So we've built our generator network, we've built our discriminator network, we've compiled our GAN, we've plotted our loss curves. Now let's evaluate the real versus the generated data distributions. And to do that, we simply click here.
>
> **[4:08](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/solution-build-and-evaluate-a-gan?u=76281980&t=248)** "These three plots, taken together, demonstrate that your GAN has been highly successful in learning the underlying data distributions of the real customer review dataset for their 'rating,' 'review_length,' and 'sentiment_score' features. The generated data's distribution closely overlap with the real data's distributions across all three features. This is the ideal outcome for a GAN, as it signifies that the Generator is producing synthetic data that is statistically very similar to the real data, making it highly valuable for tasks like data augmentation, [[Privacy]]-safe testing, and [[Simulation]] in your retail use case. This is a very strong result!"

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Database Systems]] (1), [[Privacy]] (1), [[Simulation]] (1)
> **Env Vars:** gan (7)
> **CLI Commands:** python (2)
> **Code Identifiers:** review_length (1), sentiment_score (1)
> **Analogies:** similar to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. GANs in the Real World

[↑ Back to Table of Contents](#table-of-contents)

#### [GANs and multimodal LLMs for scalable content generation](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=0)** - [Narrator] GANs are powerful creators capable of generating realistic images, data, audio, and other synthetic content, but they don't inherently understand the meaning or context of what they create. That's where [[Large Language Models (LLM)|large language models]], particularly multimodal large language models come into play. They add the layer of comprehension, interpreting, describing, and acting on what GANs produce. Imagine an [[E-Commerce]] business selling thousands of unique [[Microsoft Products|products]] like shoes. Each product needs a compelling description, accurate category tags, and catchy marketing taglines for website listings, advertisements, and social media manually. Creating this content for every single product is a massive time consuming and expensive endeavor. It often leads to bottlenecks, inconsistent quality, and limits the pace at which new products can be launched or campaigns can be created. This is where GANs and multimodal LLMs come together to offer a powerful workflow solution. Let's break down the process. Through adversarial training, the generator learns the subtle visual details and variations of sneakers, allowing it to create entirely new, realistic images. These synthetic creations enable businesses to produce limitless product visuals without relying on traditional photography,
>
> **[1:34](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/gans-and-multimodal-llms-for-scalable-content-generation?u=76281980&t=94)** helping reduce costs and speeding up the creative process. Multimodal processing is where image to text generation truly shines. The synthetic sneaker image is passed to a multimodal large language model. And unlike traditional, LLMs that handle only language, multimodal LLMs can analyze images reason about visual details and describe features like style, shape, or material. They bridge the gap between visual content and language, enabling rich understanding and interpretation of AI generated visuals using its visual understanding. The multimodal LLM can generate useful marketing content, including a product description, a category tag, and a marketing tagline. This AI driven content generation workflow is a powerful example of how GANs working alongside advanced models like multimodal LLMs are reshaping modern marketing. Pause the video here to review best practices for integrating GANs with multimodal LLMs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[E-Commerce]] (1)
> **Definitions:** is a  (2)
> **Env Vars:** llm (1)
> **Analogies:** imagine (1)
> **Speakers:** - [narrator] (1)

#### [A collaborative pipeline](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=0)** - [Narrator] GANs do not work alone. In real world applications they operate within a larger AI pipeline, teaming up with other models, interfaces, and people to deliver usable outputs. Now, let's look beyond the core GAN model and see how it fits into a collaborative AI pipeline in the real world. Has AI systems become more sophisticated? They often involve multiple specialized models and human roles working together. This collaborative approach demonstrates several key aspects of modern AI. Specialization, different AI models [[Microsoft Excel|excel]] at different tasks. GANs are great at generating, while multimodal LLMs are great at understanding and describing complex content. And in human in the loop, human experts guide the AI, provide context, make strategic decisions, and refine the AI's output to ensure it meets business goals and [[Scalability]]. Automating parts of the [[Content Creation]] process allows businesses to generate vast amounts of personalized and diverse content at scale. Something that would be impossible with manual methods alone and efficiency. By combining the strengths of various AI tools, tasks that previously took days or weeks
>
> **[1:36](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=96)** can be completed in minutes or hours. Let's break down each role in this collaboration. The developer designer role is critical for the initial creation and [[Fine Tuning]] of the GAN itself. They are responsible for setting up the training process, curating the real data sets, monitoring convergence, and ensuring the GaN can consistently produce high quality, relevant synthetic outputs. Once the GAN generates raw content, a human expert like a marketer or content creator, steps in, and their job is not to code the GAN, but to leverage the AI's output. They might review the generated product output, select the best ones, and then prompt another AI model like a multimodal LLM to add descriptive text for example. The AI system is not a human role, but rather the underlying technological infrastructure that makes this collaboration seamless. It's the clue that connects the visual output from the GAN to the textual input for the multimodal LLM, and then orchestrates how the final integrated output, for example, an image with a matching description is delivered. It ensures that the various AI components can talk to each other and operate efficiently within a larger workflow.
>
> **[3:11](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/a-collaborative-pipeline?u=76281980&t=191)** APIs [[Application Programming Interfaces (API)|application programming interfaces]], allow different software components like your GANs output module and the multimodal LLMs input module to communicate. This table summarizes the collaborative AI pipeline by role, task and some of the key tools used. Here we briefly show some of the skills needed by role. Developers and designers need some [[Python (Programming Language)|Python]] knowledge. They need to understand GAN training and prompt tuning, data pre-processing and visual design tools. Marketers and content creators should be skilled in [[Prompt Engineering]], multimodal LLM usage, copywriting, and branding awareness, AI system integration requires knowledge of API integration, UI design, model orchestration, and cloud deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1), [[Scalability]] (1), [[Content Creation]] (1), [[Fine Tuning]] (1), [[Application Programming Interfaces (API)|Application programming interfaces]] (1)
> **Env Vars:** gan (6), llm (3), api (1)
> **CLI Commands:** make (1), python (1)
> **Analogies:** for example (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next Steps](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/introduction-to-generative-adversarial-networks-gans-26283306/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing this introduction to GANs course. It's time to think about your next steps. Continue to explore, innovate, and apply what you've learned, and you'll stay ahead of the curve, making a meaningful impact within your organization. Here are some general next steps you might consider. Depending on your role, apply what you've learned. Designers, developers, experiment with architectures. Try training a DC-GAN or StyleGAN on domain-specific visuals, like apparel, vehicles, or architecture. Marketers or product managers. Collaborate with AI teams. Apply your new understanding to team up with GAN developers to co-create content. And AI ML engineers. Scale a GAN workflow. Deploy a GAN pipeline with loss tracking, model checkpoints, and synthetic data evaluation. Interested in learning more about [[Deep Learning]] and how to prep data for model training? Scan the QR codes to check out my two [[LinkedIn]] courses. Good luck on your journey and keep learning!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Deep Learning]] (1), [[LinkedIn]] (1)
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