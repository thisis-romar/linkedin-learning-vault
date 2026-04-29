---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: linkedin-ai-academy-ai-100-1-demystifying-ai
url: "https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai"
level: Intermediate
updated: 5/4/2023
learners: 12315
skills:
  - Artificial Intelligence (AI)
  - AI Literacy
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEa6pQza9mxrA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683072588848?e=2147483647&amp;v=beta&amp;t=DzVl8fz-lgBYke8LdDuUBY205-8YHT89bQSW_EoWCvI"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[LinkedIn''s AI Academy]]'
next_courses:
  - '[[LinkedIn AI Academy AI-100- 2 Supervised Learning with Neural Networks]]'
path_nav: '[{"path":"LinkedIn''s AI Academy","position":1,"total":3,"prev":null,"next":"LinkedIn AI Academy AI-100- 2 Supervised Learning with Neural Networks"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/artificial-intelligence-ai
  - skill/ai-literacy
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Linkedin%20Ai%20Academy%20Ai%20100%201%20Demystifying%20Ai.md)

![Linkedin Ai Academy Ai 100 1 Demystifying Ai](https://media.licdn.com/dms/image/v2/D4D0DAQEa6pQza9mxrA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1683072588848?e=2147483647&amp;v=beta&amp;t=DzVl8fz-lgBYke8LdDuUBY205-8YHT89bQSW_EoWCvI)

# Linkedin Ai Academy Ai 100 1 Demystifying Ai

> Artificial intelligence has been in the public consciousness for decades, but is getting more and more attention every day as the technologies advance. There seems to be equal parts curiosity and anxiety when it comes to AI, and many people have questions about what exactly “artificial intelligence” means today—and all the pros and cons that come with it. This course aims at demystifying AI—what A

> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai) | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - The LinkedIn AI Academy: The imperative of understanding AI
- [**1. Introduction to AI**](#1-introduction-to-ai) (4 videos)
  - What is AI?
  - AI and machine learning
  - Three pillars of AI: Objectives, data, algorithms
  - Building real AI applications
- [**2. Supervised Learning**](#2-supervised-learning) (1 videos)
  - Supervised learning vs. unsupervised learning
- [**3. Regression**](#3-regression) (5 videos)
  - What is regression?
  - Linear regression
  - Multiple linear regression
  - Bias and variance
  - Evaluating a linear regression model
- [**4. Classification**](#4-classification) (3 videos)
  - What is classification?
  - Logistic regression
  - Evaluating models and choosing the best
- [**5. Nonlinear Models**](#5-nonlinear-models) (2 videos)
  - Why are linear models not enough?
  - A primer to nonlinear models: Decision trees, neural networks
- [**6. Do It Right**](#6-do-it-right) (1 videos)
  - Know your objective, know your data, and listen to the data
- [**Conclusion**](#conclusion) (1 videos)
  - Continuing with AI

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### The LinkedIn AI Academy: The imperative of understanding AI
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=0)** - There is so much talk about artificial intelligence right now, and maybe you're a little apprehensive, or maybe you are excited that AI will make our lives easy.
>
> **[0:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=11)** In this course, we will try to talk about what AI is, how it works at a high level, and also the power that this might bring.
>
> **[0:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=19)** We'll go into some of the important tasks that happen in AI, like regression and classification.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=24)** We will start with simple techniques, like linear regression and slowly build up to do more complex topics, like non-linear models, and neural networks.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=34)** I'm Shouvik Ghosh, I'm a director of engineering in AI here at LinkedIn, I lead a team of scientists and engineers building AI methods, and technologies that power LinkedIn so join me in this LinkedIn Learning course as we demystify AI.
>
> **[0:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=50)** (gentle music)

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - there (1)
> **Non-Speech:** (gentle music) (1)


### 1. Introduction to AI

> [↑ Back to Table of Contents](#table-of-contents)

#### What is AI?
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=0)** - [Instructor] This is a course about artificial intelligence.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=3)** But before we go into artificial intelligence, let's talk about intelligence itself.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=9)** Intelligence is the ability to acquire knowledge, comprehend that knowledge, and apply it in new scenarios.
>
> **[0:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=16)** Now, most living things can learn, and are able to apply that knowledge.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=22)** Even if we look at, say, trees.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=24)** Trees have learned to face their leaves towards the sun and maximize how much sunlight they can intake and create food from it.
>
> **[0:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=32)** Mammals like dogs can learn to follow instructions and become our pets.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=37)** Some birds can even learn a few words from a language and utter them when we want them to.
>
> **[0:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=44)** Humans, on the other hand, have a higher level of intelligence.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=48)** We can develop abstractions, we can logic about things, and a lot more.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=53)** For example, we could observe the sun, the moon, and their movements, and also an apple falling from a tree.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=61)** Connect the dots between these events, and theorize about a concept called gravity.
>
> **[1:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=66)** On a totally different domain, we can develop a Constitution that can help govern the country for hundreds of years.
>
> **[1:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=74)** Artificial intelligence is the science and engineering of developing intelligent solutions to problems.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=81)** Now, this time, it's not humans that are acquiring knowledge and comprehending and applying that knowledge, but tools and devices run by computers.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=90)** Most AI capabilities today focus on solving specific problems like interpreting language, or detecting speech, or detecting objects in images, et cetera.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=102)** Now, these are tasks that humans can perform, but AI is able to do so with much less cost.
>
> **[1:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=109)** Scientists aim to eventually develop AI that can solve many different problems and reach human level intelligence or beyond.
>
> **[1:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=118)** Artificial intelligence constitutes many branches of science and engineering.
>
> **[2:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=122)** For example, say we will need components like statistics, economics, machine learning logical reasoning, mathematical optimization, and possibly all of them coming together to enable AI.
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=135)** On the hardware side, we need better chips, better ability to process data at large scale, and better devices, and a lot more.
>
> **[2:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=144)** Now, artificial intelligence is gaining a lot of popularity these days, but the term was actually coined in the 1950s by John McCarthy and his colleagues.
>
> **[2:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=154)** Now, some of the tools that are used in artificial intelligence actually go a long back.
>
> **[2:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=160)** For example, the tool like linear regression was developed by Adrian Legendre in 1805, like 200 years ago, when he was studying the paths of comets.
>
> **[2:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=172)** Today, we have made lots of progress.
>
> **[2:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=175)** Simple AI or machine learning algorithms are all around us and we may not even realize it.
>
> **[3:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=180)** It ranges from tools like cameras at toll booths that detect the number plates, to algorithms that safeguard our credit card activities from fraud, to applications like LinkedIn that help professionals be more successful.
>
> **[3:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=195)** AI programs today are good at a variety of prediction tasks and detection tasks.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=200)** For example, a program can look at an image and detect objects that are present in that image.
>
> **[3:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=207)** An example of prediction could be a program that studies the environment and are able to predict what the weather might be tomorrow.
>
> **[3:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=215)** In this field, we are tackling more and more complex tasks.
>
> **[3:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=219)** Take the example of self-driving cars.
>
> **[3:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=221)** We can have cameras in the car that detect human beings or other objects around the car in the roads.
>
> **[3:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=227)** But going from the problem of detection to the problem of driving the car safely from one location to another is a totally different level of decision making.
>
> **[3:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=237)** We are making good progress in this area, but we have not solved this yet.
>
> **[4:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=242)** We are seeing applications of artificial intelligence in a lot of things that we do today.
>
> **[4:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=247)** Say for example, in the internet space, like search engines, they can crawl the entire web, or sites like LinkedIn, and collect the information and serve it to a person who has a particular question and do all of this in a fraction of a second.
>
> **[4:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=263)** In the years to come, we expect AI to be able to solve problems in agriculture like utilizing resources on land and water and dramatically increase crop production.
>
> **[4:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=274)** We are also likely to be able to interact with machines using methods that are natural to humans like language that we use to talk with each other.
>
> **[4:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=284)** Also far in the future, we also expect to have AI help diagnose medical problems and speed up drug discovery to cure those illnesses in humans.
>
> **[4:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=295)** So, the potential of AI is really high.
>
> **[4:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=298)** But in this course, we aim to provide the basics of AI so that you can take the understanding and explore how you can use AI to do your job better.

> [!info]- Semantic Content
>
> **Analogies:** for example (5)
> **Code Keywords:** let (1), self (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### AI and machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] In this series we are talking generally about artificial intelligence but most of the topics are actually machine learning.
>
> **[0:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=8)** Some people use these terms interchangeably but that's not quite correct.
>
> **[0:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=12)** Artificial intelligence is the capability that we are trying to build in a program that can learn, comprehend and make decisions for us possibly very complex decisions without precedence.
>
> **[0:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=25)** So the goal of AI is to reach human level intelligence and beyond.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=29)** Machine learning is a subfield of AI which is a lot more like mimicry.
>
> **[0:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=35)** It looks at past data and looks at the actions taken in the past and then tries to replicate that in future situations using algorithms.
>
> **[0:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=44)** Concepts like logic or abstraction or generalization are pretty limited in machine learning at the moment.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=53)** Machine learning is one area where we have actually made a lot of progress, and it is central to the improvements we have made in AI thus far.
>
> **[1:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=62)** It is totally possible that in the future there will be other areas of study beyond machine learning that will help us achieve artificial intelligence.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=70)** But for now, machine learning is one of the best ways we know on how to build AI.
>
> **[1:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=75)** So we focus on that a lot in this course.
>
> **[1:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=78)** One of the earliest examples of machine learning was a program to play the game of checkers built by Dr. Arthur Samuels in the 1950s.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=87)** Now, scientists tried to build such programs even before but there's a fundamental difference in the approach that Arthur Samuels took in his solution.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=96)** Scientists before Dr. Samuels would try to define explicit rules that would tell the computer what move to play given specific situation of a game.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=106)** Now it was hard to write rules for every situation.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=110)** What Dr. Samuels did is different because instead of specifying rules, he let the machines play against each other many times, like thousands of times and he collected that data, with the data of these games.
>
> **[2:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=124)** Computer would have seen many examples of games with various situations.
>
> **[2:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=129)** What moves were played in those situations and what was the result in terms of a win or a loss in those games.
>
> **[2:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=137)** Now, using this data the computer learned the best moves to play in a given situation.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=143)** The program was eventually good enough to beat the state champion of Connecticut at that time.
>
> **[2:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=149)** Now, this phenomenon involving collecting a range of data in various situations, the actions and the results and using that to learn actions to take in new situations is the backbone of machine learning methods.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Three pillars of AI: Objectives, data, algorithms
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=0)** - As we discussed, machine learning is one of the best ways we know to achieve AI capabilities today.
>
> **[0:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=6)** In this course, we want to understand how machine learning works.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=9)** There are three core components of machine learning: the objective, the data, and the learning algorithm.
>
> **[0:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=17)** So the first, the objective means this is the task that we want the machine learning program to achieve.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=24)** So this is the what.
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=26)** The next is the data.
>
> **[0:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=28)** So this is the collection of examples that the program can use to learn from.
>
> **[0:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=33)** Typically, an example would include a situation and whether we achieved our objective in that situation or not.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=41)** And in the data, we would want a variety of examples which would involve many different situations.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=48)** The more the variety, the more versatile the machine learning program would be.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=53)** The third is how the program would learn from that data.
>
> **[0:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=57)** That is, the algorithms and things that we would want to apply to extract the important elements from the data that can be applied in future situations.
>
> **[1:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=67)** We are going to spend most of this course talking about the third pillar, the algorithms, but let's look at the first two pillars in a bit more details here.
>
> **[1:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=77)** Going back to the example of checkers, so what would be the objective for the program?
>
> **[1:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=82)** It would be to win the game.
>
> **[1:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=83)** So that is the objective.
>
> **[1:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=85)** For data, the way Dr. Samuels obtained data was by letting two computers play against each other many, many times.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=94)** So each game that he would let the computers play would become an example, and then use that and collect many, many different such examples to decide what would be the best move to play given a particular situation of a game.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=110)** Let's take another example of self-driving car.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=113)** For self-driving car, the objective would be to start from one location and go to another location, the destination, and do that safely and following the rules of the roads.
>
> **[2:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=127)** How do we collect data for that?
>
> **[2:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=129)** In many cities in the US, and possibly outside of US as well, you might have seen cars with some gadgets on the top, with cameras and radars and LiDAR and whatnot, that go around the cities and travel on the roads and collect the data.
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=147)** These instruments would be observing what's the situation around, who are the people around, what are the other cars, what are the road signs and whatnot, and what a human driver is doing in those situations.
>
> **[2:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=160)** The program will be taking in all this information and try to design a mechanism to replicate the best driving behavior in the future.
>
> **[2:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=169)** Let's look at a final example, which is very core to what we do at LinkedIn; recommending jobs to members who are looking for a change in their career or in their professional life.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=181)** A member who is seeking a job uses the LinkedIn app or our website, and we recommend to them a job that he or she might be interested in.
>
> **[3:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=189)** So the objective in this case, that is, the objective of this machine learning program, is to match a member to the best job possible.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=200)** And this would be something that the member would be interested in and apply to, and also the job is something that is the best fit for this member.
>
> **[3:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=210)** The way we get data for this particular application is also from our app.
>
> **[3:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=215)** When a member comes to the LinkedIn app, we are often recommending jobs to her and we know whether she has applied to some job or if she did not apply, and we get this information from every member who are using the LinkedIn app.
>
> **[3:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=228)** And when we collect all these information from all the members, that becomes a fantastic data set which we can use to develop a program and apply it for future recommendations.
>
> **[4:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=240)** We will get back to this example on how we learn these algorithms in the next few chapters.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=245)** As we learned here, there are three pillars in how machine learning works today, the objective, the data, and the algorithms, and this is the construct we will use throughout the course as we explain more and more complex topics.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), self (2), from. (1), case, (1)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - as (1)

#### Building real AI applications
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=0)** - [Instructor] So what does it take to build a real AI application?
>
> **[0:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=4)** Innovation, as we know, is an iterative process.
>
> **[0:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=7)** For example, the light bulb, as the famous saying goes, "Thomas Edison tried 10,000 times to get the first light bulb working."
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=15)** But from then on, it also took us more than a hundred years to get to LED lamps, which are way more efficient.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=23)** Another example, take electric cars of today.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=27)** They are more efficient and look very different from the first cars that were built by Henry Ford or Karl Benz.
>
> **[0:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=35)** Similarly, to get an AI solution and get it right, it takes many iterations.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=41)** As we discussed in the last section, building AI solutions, especially through machine learning as we do today, has three main components: the objective, the data, and the algorithms.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=53)** And we need to iterate through all these three components to build real AI applications.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=59)** We'll try to explain this more using one example that of news.
>
> **[1:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=64)** Before the digital age, it would be editors in newspapers who would decide what news they would put in the newspaper and in what order they should go.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=73)** But in the digital age with the websites and the internet, there was an option to show thousands and thousands of news article to people every day, but no one would have the time to read through all of that.
>
> **[1:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=85)** This constraint led to the development of what we know today as recommender systems.
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=91)** There's an algorithm that sits behind these websites or applications that decide what to show to a particular member.
>
> **[1:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=99)** At a high level you can imagine the program tries to recommend what one wants, but that is more complex than you would imagine.
>
> **[1:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=108)** When this class of effort started, engineers working on such projects thought, if a person clicks on a title and opens that news article, that means he's interested.
>
> **[1:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=118)** They devised programs to predict which news articles a person would click on.
>
> **[2:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=123)** This provided a great start.
>
> **[2:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=125)** However, this led to a change in behavior over time for some content creators.
>
> **[2:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=130)** These content creators try to game the system by adding provocative titles or clickbaity titles.
>
> **[2:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=137)** Engineers soon realized they need to change from the first objective of predicting a click.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=143)** In the next iteration, engineers thought, if a person clicks on an article and scrolls through it, then that indicates interest.
>
> **[2:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=152)** But then again, some would game the system and would get examples where the title of the article will encourage the person to read through a long article.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=161)** So there was a need to iterate on that objective again.
>
> **[2:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=164)** Over the years, news recommendation systems have gone through many, many iterations.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=170)** Recommendation systems of today have fairly sophisticated objectives.
>
> **[2:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=174)** They would predict what a member would like or click or comment on.
>
> **[2:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=178)** Furthermore, these programs would balance short-term and long-term effect of recommendations.
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=184)** For example, provocative content might engage members in the short term, but too many such articles might make the member unhappy in the long-term.
>
> **[3:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=193)** These programs would manage distribution of content to encourage many creators to create again.
>
> **[3:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=199)** Social networks would even optimize for network effects and content virality.
>
> **[3:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=203)** Of the three core pillars of machine learning, next we come to data where, again, we would need to iteratively understand what data is needed to improve the program.
>
> **[3:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=213)** For example, suppose, a news recommendation system starts only with the sports news.
>
> **[3:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=219)** Now, even when it has a lot of data about sport news, it will not do a good job in recommending business news.
>
> **[3:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=227)** In building real applications, at the beginning, data is scarce.
>
> **[3:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=231)** Engineers typically start with any data that can be helpful and use that to build a ML program, knowing that it is not the best.
>
> **[4:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=240)** However, over time, they would analyze some machine learning program, understand gaps and collect more data, not only in volume but also data that is representative of the target audience for the news recommendation system.
>
> **[4:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=255)** Next, as we get more data, engineers would be able to build more complex algorithms that can get better and better in recommendations.
>
> **[4:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=263)** This virtual cycle of more members using their recommendations, getting more data, which leads to better algorithms, accelerates the innovation in the news recommendation product overall.
>
> **[4:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=274)** Another extremely important aspect of building real AI applications is the infrastructure.
>
> **[4:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=280)** To power advanced algorithms that work on large data sets, the hardware and infrastructure needs to improve as well.
>
> **[4:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=287)** Some of the large companies today will depend on infrastructure consisting of millions of computers, processing petabytes of data to create experiences that delight millions of members.
>
> **[5:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=300)** At LinkedIn, we have invested in improving our applications over many years.
>
> **[5:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=305)** Today we have state-of-art machine learning algorithms, powering probably every LinkedIn product, including the LinkedIn feed, job recommendations, connecting candidates to recruiters, connecting members to other members, and a lot more.
>
> **[5:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=318)** Stay with us to learn a lot more about these applications in the future sections of this course.

> [!info]- Semantic Content
>
> **Analogies:** for example (3), imagine (2)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Env Vars:** led (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Supervised Learning

> [↑ Back to Table of Contents](#table-of-contents)

#### Supervised learning vs. unsupervised learning
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=0)** - [Instructor] Now that we know what artificial intelligence is and what we need to create AI or ML models let's talk about the big distinction in the type of ML methods that are supervised and unsupervised learning.
>
> **[0:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=14)** In supervised methods, we have a mechanism of telling the model what the target is.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=20)** This could be a numeric value or whether something belongs to a specific class or if something is correct or incorrect.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=27)** We call these targets, labels.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=29)** These labels are a specific target for the model to predict and we can evaluate the model on how accurately it predicted the labels.
>
> **[0:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=37)** If, for instance, we know that a picture is going to be one of the three different categories, a horse, a dog, or a cat we can label those images as such and then test our model out against that pre-labeled data.
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=51)** Because we have decided that these labels are correct we can use them to get a precise notion of what error the model has.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=59)** One of the trade-offs with supervised learning is that the methods are task specific and might not necessarily translate outside of the data you have provided.
>
> **[1:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=69)** For example, unless explicitly trained on a model might not be able to distinguish a horse from a zebra, there are some situations where we don't have predefined labels.
>
> **[1:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=80)** In such situations, we can use what is known as unsupervised learning to process the data and find out interesting patterns.
>
> **[1:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=88)** So for instance we might not tell a model that's looking at images what those images are in labels, but it'll detect a pattern of characteristics and group together similar images.
>
> **[1:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=101)** This is powerful and can be applied to many different types of tasks.
>
> **[1:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=105)** Unsupervised learning is often useful for data exploration purposes.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=110)** If we have data and try to cluster them it helps us derive intuition about that data which can be helpful for many purposes.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=117)** The key distinction is the following.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=119)** If you have labels that you have created or you know they're right based on some external criteria, use supervised learning.
>
> **[2:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=128)** But if you want to cluster the data without giving specific labels, use unsupervised learning.
>
> **[2:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=133)** Supervised and unsupervised learning isn't necessarily a binary decision where you have to use one or the other.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=141)** It's actually a spectrum.
>
> **[2:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=142)** You can start with one and transition into the other based on the findings, but it's good to know both sides.
>
> **[2:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=149)** So you can start with one and begin modeling.
>
> **[2:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=152)** We are going to focus on supervised learning throughout this course, but if you want to know more about unsupervised learning check out some other courses here in the LinkedIn Learning Library.
>
> **[2:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=163)** So now that we know the difference, let's start digging more into some supervised learning methods.

> [!info]- Semantic Content
>
> **Analogies:** for instance (2), picture (1), for example (1)
> **Code Keywords:** let (2), if, (1)
> **CLI Commands:** cat (1), find (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)


### 3. Regression

> [↑ Back to Table of Contents](#table-of-contents)

#### What is regression?
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=0)** - [Instructor] Regression is a widely-used machine learning tool.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=3)** This has to do with predicting things, even before they have occurred, using signals that are available.
>
> **[0:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=10)** Let's look at an example that can help you understand this concept and also recollect what might have been high school statistics lessons for many of us.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=20)** For our example, we have chosen the LinkedIn feed.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=23)** This is the personalized homepage for LinkedIn members where we aim to enable conversations amongst professionals.
>
> **[0:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=30)** So we have members who create content and members who interact with those content through comments, likes, or shares, which leads to conversations with other members in the network.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=41)** For a LinkedIn creator who is also a member, a natural question is, how can I write an article or create a video that will increase the interactions or the engagement on that piece of content?
>
> **[0:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=54)** If we put ourselves in the shoes of the creator, we would want to understand what are the factors in our control that can influence interactions?
>
> **[1:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=62)** For example, we can choose what to talk about, we can choose what tone to use, and what we write or shoot.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=70)** We can also choose how long to talk and so on.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=73)** A creator can try a variety of these combinations in the content she creates and observe a few times how members react to it.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=81)** That means she would create a post and see how many and how much engagement that has.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=87)** Now this would be valuable data that she can use.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=90)** This is a situation where we have a variable, which is engagement in our example, that is not in control.
>
> **[1:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=97)** But this variable can be influenced by other factors which are in control.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=102)** These kinds of situations are very common in our lives.
>
> **[1:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=105)** For example, we can use the weather patterns we're observing today to predict whether it will rain tomorrow or not.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=113)** We can observe the global events occurring today and predict how the stock market might react tomorrow.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=119)** A credit provider can look at the transactions and any other information available and predict if the transaction that just happened is fraudulent or not.
>
> **[2:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=129)** Regression involves two kinds of variables, those that are in our control, or at least those that can be observed, and the other variables that are unknowns, or not in our control.
>
> **[2:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=142)** In other words, we will not be able to observe this second kind of variable until the time has come.
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=147)** Regression involves finding a mathematical relationship between these two types of variables.
>
> **[2:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=153)** And once we have that relationship, we can use the observable features and predict the unknown features, and we build these mathematical relationships using data, and these relationships are called models.
>
> **[2:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=166)** In the next sections, we will learn what happens under the hood of some simple regression methods.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=0)** - [Instructor] We saw in the last section that a regression comes in when there are two kinds of variables.
>
> **[0:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=6)** One that we can observe, and the other that we cannot observe then and would want to predict.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=13)** We try to find a relationship between these two types of variables and use the observable variables to predict the unknowns.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=22)** The simplest relationship these two variables can take is a straight line, and this is called our linear regression.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=29)** Linear regression is one of the simplest form of regression, and this technique is more than 200 years old.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=36)** Let's continue with our working example of the creators on LinkedIn.
>
> **[0:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=40)** As a creator, we want to understand what we might do to increase conversations on the content that we create.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=48)** As a starting point, let's simplify it a bit and only look at text-based articles and understand the effect of the length of an article on the number of conversations that the article has.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=61)** Again, recall that as creators we do not have control over the conversations that might happen, but we can decide how long we are going to make our article when we are writing it.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=73)** So the number of conversations is the unknown variable we are predicting, and the article length, which we measure by the number of words, is our observed variable.
>
> **[1:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=82)** The objective here is to find the best linear relationship between the length of the article and the conversation on that article.
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=91)** Let's talk about the data.
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=93)** As a creator, we can collect data on this.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=96)** We can write a few articles of various lengths, and we can post them on LinkedIn and see the number of conversations on each article.
>
> **[1:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=104)** Let's say we wrote 10 articles and measured how many conversations that happened on each of them.
>
> **[1:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=110)** If we graph them, then on the X axis we have the length of articles and on the YX axis we have the amount of conversations.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=117)** For this particular point, say the length of that article was 345 words, and the number of conversations on this article was, say, 1,230.
>
> **[2:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=129)** Finding a linear relation among these points means drawing a straight line through this data.
>
> **[2:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=135)** Using this linear relation, we want to predict conversations using length of the article as an observable variable.
>
> **[2:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=142)** For this particular line and new article with length 400, the predicted engagement will be this point on this line, which is 1350, but there is a problem.
>
> **[2:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=153)** We can't draw a straight line that passes through all these points, so what would you do?
>
> **[2:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=160)** Well, we would try to draw a line that gets as close to all these points as possible.
>
> **[2:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=165)** You might recall a straight line can be represented by this equation.
>
> **[2:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=169)** Y is equal to beta naught plus beta 1X.
>
> **[2:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=173)** Where beta naught is the intercept, And beta one is the slope of the line.
>
> **[2:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=179)** For one article for which the creator has the data, say this article with length 345, the actual amount of engagement we know is 1,230, but the engagement predicted by the linear relationship is beta naught plus beta one times 345.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=198)** The gap between the actual and the predicted value is the error in prediction.
>
> **[3:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=204)** We can get this error for all the data points the creator collected, and by averaging them up we will get the mean error.
>
> **[3:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=213)** A good line might be one that minimizes mean error.
>
> **[3:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=217)** There is one caveat in that though, the positive and negative errors might both be high but cancel each other out to result in a small total error.
>
> **[3:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=227)** To address this, we need to use some form of the error that captures the magnitude but not the sign.
>
> **[3:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=234)** Square of error is a popular form that achieves this and has some nice properties as well, like differentiability.
>
> **[4:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=242)** We will see how that can help in future sections.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=245)** To find the best linear relationship between these points, we find the line that minimizes the means squared error and we do that by minimizing this function MSE over the parameters beta naught and beta one.
>
> **[4:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=258)** Although taking the square is the most popular method we can use other forms as well, like the absolute value and minimize the mean absolute error.
>
> **[4:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=267)** To summarize, you can see that we started with the objective of predicting engagement based on article length, and we have converted that to optimization of a mathematical function, so the best line that we will find is the one with the parameters that minimize the means squared error.
>
> **[4:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=285)** Just like how we solve this function together, optimization algorithms solve this sort of minimization problems and help us find the best model.
>
> **[4:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=294)** It so happens that for this specific function, we can solve it easily and there are close form solutions for beta naught and beta one.
>
> **[5:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=302)** In subsequent sections, we will continue to build on this concept of linear regression, and learn to address other problems.
>
> **[5:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=309)** In some of these situations we will not have a close from solution for the parameters and we will need to apply other methods.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), function (4), continue (2), this. (1), this, (1)
> **CLI Commands:** find (6), make (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** mse (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### Multiple linear regression
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=0)** - [Speaker] In the last video, we saw how linear regression is used to understand the relationship between the unknown variable and one observable variable.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=9)** But often there are situations where we have multiple observable variables and a single unknown variable.
>
> **[0:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=17)** To do this, we'll use a technique called Multiple Linear Regression.
>
> **[0:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=21)** Continuing with our example of predicting conversations on an article, The observable variable that we have used in our previous section is a length of the article and we used the equation, y is equal beta not plus beta one X, but there are other variables that we could consider as well.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=41)** For example, the average length of sentences in the article, a potential measure of readability which might also affect conversations.
>
> **[0:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=50)** Let's name this variable, average sentence length, Z and then we can build a linear relationship between y, the conversations and x, the length of article and Z, the average length of sentences and the equation here would be Y is equal to beta not plus beta one x plus beta two Z.
>
> **[1:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=71)** We find the best linear relationship using a similar mechanism of minimizing mean squared error.
>
> **[1:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=78)** The mean squared error is the average of the square of the error in prediction we make for every instance in the data.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=87)** And the error is the difference between the observed variable y, which is the amount of conversations we had on that article and the predicted value of the conversation from the model.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=100)** The best model is the one with parameters that minimize the means squared error.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=106)** This is a regression with two observable variables but it's easy to see that we could have additional variables that might affect the number of conversations on an article.
>
> **[1:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=116)** Perhaps the sentiment of that article has an effect.
>
> **[1:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=119)** Is it positive, neutral, or negative, or the number of grammatical errors or the topic of an article and so on.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=126)** The list can grow fast and all these variables can be added to the regression to improve predicting the unknown variable, the number of conversations.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=136)** Let's take it a little bit further.
>
> **[2:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=138)** Suppose we have a hypothesis that if the number of words is too low, then it's an indication that the article is less informative.
>
> **[2:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=146)** Our readers will not like that much, and the article will not have much conversations around it.
>
> **[2:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=151)** On the other hand, if the article is too long, then it becomes difficult to hold the attention of the readers.
>
> **[2:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=158)** And then again, there would be fewer conversations.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=161)** In such a situation, the relationship between the unknown variable, conversations and the observable variable, article length could be a quadratic.
>
> **[2:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=171)** So, we can write an equation of this form where y equal to beta not plus beta one x, which is the linear form of number of words and then beta two x square, which is the square of the number of words.
>
> **[3:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=185)** This equation is a quadratic in the variable, number of words.
>
> **[3:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=190)** However, this equation is linear in the parameters beta not, beta one and beta two.
>
> **[3:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=196)** So by this notation, this is still a linear equation from the regression point of view because the linearity is of the parameters.
>
> **[3:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=204)** So we can have X squared or we can have X cubed or any other transformation of X but those are just some transformations of the variable X, which are being included in a linear fashion in the equation.
>
> **[3:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=220)** So among all these choices, how do we find out the model that is best for the data?
>
> **[3:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=225)** Let's find that out.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **Code Keywords:** let (3), this, (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker] (1)

#### Bias and variance
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=0)** - [Instructor] In multiple linear regression, we saw that there are many possibilities in the ways we can model the predicted variable using the features.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=9)** But how do we find out which one of these possibilities is the best method for our model?
>
> **[0:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=14)** This is where we come up with two very important concepts in machine learning.
>
> **[0:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=19)** Bias is a measure of how accurately the model can learn at best.
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=24)** If you are using a simple linear model on a dataset where the relationship is more complex, the model might not predict the data very accurately and will end up with a high bias.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=36)** When a model is complex, it isn't just linear, but quadric or cubic in features, for instance, that tends to give the model more capacity to learn and be more accurate.
>
> **[0:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=46)** So we say the model has a lower bias.
>
> **[0:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=49)** This seems great, but there's a trade off.
>
> **[0:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=52)** The model might have a low bias, but it's not as easy to train.
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=56)** This is where variance comes in.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=58)** Variance measures how well we can train the model.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=61)** Suppose we collected 10 data points, and with those, we came up with one straight line.
>
> **[1:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=66)** But also suppose, just by pure luck, it could have a very different distribution, something like this or this.
>
> **[1:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=73)** Then in each instance, the model that we train will be different.
>
> **[1:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=79)** Variance captures how the model can differ just because of her randomness in the data.
>
> **[1:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=84)** You're probably guessing already that simple models are less powerful, but easier to learn.
>
> **[1:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=90)** Hence, they tend to have high bias, but low variance.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=94)** On the other hand, a much more complex model can be more accurate, but will be difficult to learn.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=100)** Hence, they will have low bias, but high variance.
>
> **[1:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=105)** Let's go back to the example of creators.
>
> **[1:47](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=107)** Suppose the underlying hypothesis is true that an article that is too short or too long has few conversations, but in the middle in some sweet spot, it has a high number of conversations.
>
> **[1:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=118)** Then a quadratic function can be a really good fit.
>
> **[2:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=122)** What we would see is that a straight line will be too simple.
>
> **[2:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=125)** It will not be able to capture that underlying hypothesis and will end up with more bias.
>
> **[2:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=131)** On the other hand, something like a cubic function will be more complex than what is needed, and this will fit to the data too much and can have a high variance.
>
> **[2:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=140)** The quadratic function in between will be the sweet spot.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=143)** But how do we actually know that's the right choice?
>
> **[2:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=147)** Let's talk about evaluating our regression model next.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (2), this. (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Evaluating a linear regression model
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=0)** - [Instructor] We know that we can find a sweet spot between bias and variance.
>
> **[0:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=4)** What principles can we apply to find that sweet spot in practice?
>
> **[0:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=8)** One popular mechanism is to take the data and split that into two parts.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=13)** The training data and the test data.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=15)** As the names suggest, training data is the data that we use to train the model.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=20)** The test data, and we keep that separate and use only for evaluation purposes.
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=26)** This separation is absolutely critical because this allows us to measure the variance of the model independent of the training.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=34)** One common way in which a high model variance manifests is through the model overfitting to the training data.
>
> **[0:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=41)** Overfitting means that the model has not only learned the major patterns in the data but also learned some of the randomness in the data as well.
>
> **[0:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=51)** It is not necessarily good because we want to learn the patterns in the data and not the randomness.
>
> **[0:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=57)** By keeping the test data separate and evaluating the model on the test data, we can measure if the model overfit on the training data.
>
> **[1:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=65)** A model that has similar accuracy in train and test data is likely to not have overfit.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=72)** But if the accuracy is very different across the two data sets, that's an indication that the model has overfit.
>
> **[1:19](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=79)** In practice, we take the training data and we try to learn different types of models with increasing complexity.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=87)** For simple models, the test error is high because of high bias.
>
> **[1:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=91)** As the complexity increases, the training and the test error decreases.
>
> **[1:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=97)** This happens because the model has more capacity to learn.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=100)** But after a point, adding more complexity continues to decrease the training error but increases the test error.
>
> **[1:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=109)** This is the phase where the model is overfitting to the training data and is not able to generalize to the test data.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=117)** The sweet spot in the level of complexity is the one where the test error is at its lowest.
>
> **[2:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=123)** Finding this sweet spot is part art and part science.
>
> **[2:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=127)** But here is one thing that we know, one aspect that helps us train models better overall.
>
> **[2:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=133)** That means lower bias and lower variance is if we can get more data.
>
> **[2:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=138)** And not only just volume of data, but higher quality data.
>
> **[2:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=142)** This course is really focused on giving you a primer for machine learning and AI.
>
> **[2:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=146)** But this is a point I really want to stress here.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=150)** Quality data makes your models better.
>
> **[2:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=152)** It's not just the amount you have but also the quality of the data and how well the data represents the phenomenon you're trying to model.
>
> **[2:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=161)** So I would encourage you think not just about the kind of model you want to train, but also what kind of data you want to collect that will allow you to train better models.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Classification

> [↑ Back to Table of Contents](#table-of-contents)

#### What is classification?
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=0)** - [Instructor] In the last few chapters we learned about regression where we were trying to predict a numeric quantity like the number of conversations using observed quantities which we call features or predictor variables or observable variables.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=15)** But in some applications we might need to predict categories or classes instead of a numeric quantity.
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=22)** This is what the topic of classification deals with.
>
> **[0:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=26)** Many of you might have applied for a loan, maybe a car loan or a home loan, and there is a process of loan approval.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=34)** That process is trying to figure out how likely you are to default on the loan.
>
> **[0:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=40)** That is a classification task.
>
> **[0:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=42)** Will you pay the loan or will you default?
>
> **[0:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=45)** Another important application, which is relatively new is looking at x-ray images and trying to decide whether a particular patient is at an elevated risk of cancer or not based on that image.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=58)** At LinkedIn, we have multiple kinds of tasks where we apply classification.
>
> **[1:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=63)** For example, we try to predict whether a member will apply to a job or not.
>
> **[1:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=68)** In account activities, we are trying to decide whether an activity is real or fraudulent or because LinkedIn is a professional network and some members might not want to see political content we try and decide whether a particular content is political in nature or not.
>
> **[1:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=86)** Now all of these examples we discussed are of the type where we are trying to make a simple decision of choosing between one category versus another.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=96)** For example, the content is political or not.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=100)** These are called binary classification tasks.
>
> **[1:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=103)** There are also situations where we need to make decisions between more than two classes and this is called multi-class classification.
>
> **[1:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=111)** For example, look at optical character recognition tools.
>
> **[1:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=115)** You might have seen places where some tool is trying to identify car number plates.
>
> **[2:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=121)** They would detect the car plate in a picture and try to map the image to specific characters between zero to nine and A to Z.
>
> **[2:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=129)** Similarly, sometimes when you deposit checks they will try to automatically detect the amount in the check.
>
> **[2:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=136)** We'll talk more about this later on in the AI Academy series.
>
> **[2:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=140)** At LinkedIn, we have many applications of multi-class classification tasks as well.
>
> **[2:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=145)** For example, understanding the relevant topics for content posted on LinkedIn.
>
> **[2:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=150)** Is it about science?
>
> **[2:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=151)** Is it about sports?
>
> **[2:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=152)** Is it politics or leadership?
>
> **[2:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=154)** And a lot more.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=155)** In the next two videos you will learn how one can solve the problem of classification using the same principles and the core components that we discussed earlier objective, data and algorithms.
>
> **[2:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=168)** But before we get into that, try and think of something in your work that you want to classify into different categories.
>
> **[2:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=175)** What does that look like for you?
>
> **[2:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=176)** Write that down in the notebook below the video and come back to it as we continue the course.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), picture (1)
> **Cross-References:** we discussed (2), in the last (1), in the next (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (2)
> **Code Keywords:** continue (1)
> **Speakers:** - [instructor] (1)

#### Logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=0)** - [Instructor] So let's talk about how we can approach the task of classification.
>
> **[0:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=4)** Recall that the main components of a machine learning task are objective, data, and algorithms.
>
> **[0:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=11)** Let's use that framework to look at an example and how we can go about solving it.
>
> **[0:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=16)** Say we want to recommend a relevant job to a LinkedIn member.
>
> **[0:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=21)** The objective in this case is to decide whether a member is going to apply to a particular job or not.
>
> **[0:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=27)** Let's consider a simplistic version of this prediction task with two features and we will explain this using a graphical plot.
>
> **[0:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=35)** The first feature is the median salary, the midpoint of the expected salary for the job and that's on the X-axis.
>
> **[0:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=42)** And the second feature is the distance of the job location from where the member lives.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=48)** And this is on the Y-axis.
>
> **[0:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=49)** This dataset has two colors.
>
> **[0:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=52)** If it's blue, that means a member has not applied and red if the member has applied to the job.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=59)** Before going into anything else, what intuitive sense can you make from this data?
>
> **[1:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=64)** Take a moment, pause the video, and write down your thoughts in the notebook below the video player.
>
> **[1:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=70)** We see that as we go more towards the right of the plot, the part of the graph where the median salary is large more people have applied.
>
> **[1:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=85)** Also looking at the Y-axis, we see that if the distance between the job location and where they live is high the member is unlikely to apply.
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=95)** So what we can see from this data is that there is a tradeoff that people try to make where if the salary is significantly high then they might be willing to travel further for the job.
>
> **[1:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=106)** The classification task here would involve separating this space into sections of apply and no apply.
>
> **[1:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=113)** We can try achieving this separation using a straight line.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=117)** In this case, what we can say is that if a particular data point is placed toward the southeast of this line, then a member is likely to apply.
>
> **[2:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=127)** And if it is in the northwest of this line, then the member will not apply.
>
> **[2:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=132)** This is a simple situation, but more often than not the examples we work with are fairly complicated where it's difficult to get a clear separation of the two classes.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=143)** So let's think of a larger version of this data set where the red and the blue dots are very mixed up so we cannot find a straight line that would completely separate all the red and blue dots.
>
> **[2:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=156)** What we can do is find the line that would get us as close to full separation as possible.
>
> **[2:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=162)** So we will have to think about our probabilistic setup using logistic regression.
>
> **[2:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=168)** This means that instead of making our decision based solely on which side of the line a point is on, we look at the likelihood that a point belongs to a particular category depending on where that point is in relation to the line.
>
> **[3:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=183)** If a point is in the bottom right of this line then the chances are high that this person will apply for the job.
>
> **[3:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=190)** Vice versa, if a point is in the upper left of this line then the member is unlikely to apply.
>
> **[3:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=197)** Now, recall how we solved the problem for regression.
>
> **[3:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=200)** We designed a mechanism where we measured the error in our predictions and then find a regression function that could minimize the sum total of all error.
>
> **[3:30](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=210)** We have to make some modifications here because in this case of classification, we are working with probability.
>
> **[3:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=216)** The way we calculate this probability is through the sigmoid function.
>
> **[3:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=220)** The sigmoid function is always between zero and one, where zero is no probability and one is complete certainty.
>
> **[3:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=229)** For a given data point, the probability that it belongs to a particular category depends on the distance of the point to the line.
>
> **[3:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=237)** In this example, the point A is far southeast from the line and we think that there's a high chance of applying.
>
> **[4:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=245)** Similarly, take this point B, which is on the far northwest of the line, and we will assign a very low probability for this person to apply.
>
> **[4:14](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=254)** We do this for every data point and come up with a function that represents total error.
>
> **[4:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=260)** But here, the error is how accurate our prediction is.
>
> **[4:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=263)** If we predict with a high probability that someone is in a given class and actually they're not, then that's an error.
>
> **[4:31](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=271)** Adding up all those errors, we get an understanding of total error in prediction for our model and we can minimize that total error to find the best model.
>
> **[4:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=281)** This is a bit different than the error we talked about in regression, and it's a lot harder to solve for in a simple way, but fortunately, we have optimization and computational techniques that come to our rescue and let us find the best model for our dataset.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (4), else, (1), case, (1)
> **CLI Commands:** find (5), make (3)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Evaluating models and choosing the best
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=0)** - [Instructor] In the last video, we learned about logistic regression, which enables us to build probabilistic models for classification so that we can obtain probabilities of a class that a new data point might belong to.
>
> **[0:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=13)** We can compute that probability, but often in the end, typically a decision has to be made.
>
> **[0:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=20)** Is the loan approved or not?
>
> **[0:22](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=22)** Do we recommend a job to a member or not?
>
> **[0:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=25)** For a machine learning practitioner, this means she or more likely, the classification model that she built will have to make a binary decision using the probability obtained from the model.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=36)** A simple mechanism to do that is to have a threshold.
>
> **[0:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=39)** For example, if the predicted probability is more than a threshold, say 0.5, then we will classify the data point into one class.
>
> **[0:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=48)** If the probability is less than the threshold, then we will classify into the other class.
>
> **[0:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=54)** Our framework depends on a mechanism to measure the error in our prediction.
>
> **[0:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=58)** This is what we call the confusion matrix.
>
> **[1:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=61)** The confusion matrix has rows and columns.
>
> **[1:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=64)** The columns determine our predictions, the predicted positives or predicted negatives, and the rows determine the actual values in the data.
>
> **[1:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=72)** Again, actual positives and actual negatives.
>
> **[1:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=76)** For example, the top left item in this matrix is called the true positive.
>
> **[1:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=81)** The number of data points where the model correctly predicted that the member will apply.
>
> **[1:27](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=87)** The bottom right element is the true negative, where the model correctly predicted that the member will not apply.
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=95)** Basically, if a data point is in these two boxes, the model is accurate.
>
> **[1:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=100)** The model makes errors as well.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=102)** The way we measure that is through the negatives.
>
> **[1:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=105)** The top right element in this matrix is the false negatives, where the model mistakenly predicted that the member will not apply.
>
> **[1:54](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=114)** And finally, we have the false positives in the lower left where the model is predicting the member applied, but actually they did not.
>
> **[2:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=123)** The ideal model has a confusion matrix, which is concentrated on the diagonal where the model makes accurate predictions.
>
> **[2:10](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=130)** Now, based on this confusion matrix, we come up with two very important concepts, precision and recall.
>
> **[2:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=137)** Precision is how accurate the model is when it classifies a data point to be positive.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=143)** It's the ratio of true positives over all predicted positives.
>
> **[2:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=148)** If the model predicted a member will apply, how many of them in the dataset actually applied?
>
> **[2:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=154)** For example, if the model says there are 125 people that applied, but among them, only 100 actually applied, the precision of that model is 80%.
>
> **[2:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=164)** The other concept, recall measures that among all data points where we know in the dataset that the members applied, what proportion did the model correctly predict to apply?
>
> **[2:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=175)** It is the ratio of true positives over actual positives.
>
> **[2:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=179)** There were 150 applications in this dataset and the model predicted 100 of them as applications.
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=186)** Then the recall is roughly 67%.
>
> **[3:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=189)** Now, remember one important thing that we did in the regression problem.
>
> **[3:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=193)** We separated the data into two parts, the training dataset and the test data set.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=198)** The training data set is something that we will use to train the model, and the test data is the one that we'll use to evaluate the model.
>
> **[3:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=206)** In the classification setting, we would do the same thing.
>
> **[3:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=209)** And an important thing to remember is that the training and the evaluation data sets should not mix.
>
> **[3:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=215)** Ideally, we would want a prediction algorithm to have a high precision and a high recall.
>
> **[3:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=221)** In real world, however, we often have to make a trade off.
>
> **[3:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=225)** A high classification threshold will result in a high precision, but can result in a lower recall as well.
>
> **[3:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=231)** Now, if we lower the threshold, that can increase the recall, but often comes at a cost of lowering the precision.
>
> **[3:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=238)** Different applications have a natural preference of what is ideal.
>
> **[4:02](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=242)** In some cases, we would want a high precision, whereas in other cases, we want a high recall.
>
> **[4:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=248)** For example, in detecting disease, we want a high recall, so that we can send the patient for additional testing.
>
> **[4:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=255)** We are okay if the precision is a bit low here because we would rather send a few false positives through than make an error and put the patient's life at risk.
>
> **[4:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=264)** An example where we want high precision is a job recommendation feature here at LinkedIn.
>
> **[4:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=269)** If we are deciding to notify a member about a job that she might be interested in, we would want a high precision because we don't want to notify a member with irrelevant jobs.
>
> **[4:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=280)** This could mean fewer job recommendations given, but the jobs that we are showing are more relevant for the member, which is what we want.
>
> **[4:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=288)** So really the decision on how to evaluate a model depends on the risk and reward associated with the choice of classes.
>
> **[4:55](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=295)** Oftentimes, it's the domain experts who are best positioned to make those decisions.
>
> **[5:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=300)** As you are thinking of applying classification to the problem you identified earlier in this course, think about what kind of accuracy was more rewarding and what kind of error is more risky for you in your application.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Analogies:** for example (4)
> **Code Keywords:** class. (2), finally, (1)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** in the last (1), earlier in (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)


### 5. Nonlinear Models

> [↑ Back to Table of Contents](#table-of-contents)

#### Why are linear models not enough?
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=0)** - [Instructor] So far, we have been working with linear models.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=3)** For regression, we saw how to build a linear relationship between outcome variables and the features.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=9)** And for classification, we saw how to find a straight line to separate the space into classes.
>
> **[0:15](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=15)** We also discussed in regression that the relationship between the outcome variables and the features might not be linear.
>
> **[0:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=23)** And we saw an example of models that are quadratic in the features but still linear in the parameters.
>
> **[0:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=29)** This is one way in which practitioners try to model non-linear behavior but still using linear regression.
>
> **[0:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=36)** And this also works in the classification problems.
>
> **[0:39](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=39)** This is seen as the more traditional way to build models.
>
> **[0:43](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=43)** You either identify what works for the data yourself or you might enlist some domain experts who know the specific transformations that might be important.
>
> **[0:53](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=53)** Going back to our previous example, if you look at an article length, it makes some logical sense that if an article is too short, there wouldn't be much conversation, and if it's too long, people might not read it at all, and there would also be fewer conversations happening.
>
> **[1:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=68)** If the practitioner has that intuition, then she can design the model and include the square of that length feature to account for that intuition.
>
> **[1:16](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=76)** When we start estimating models with more parameters, billions of data points and complex relationships between features, it becomes difficult and inefficient to rely on intuition and domain expertise.
>
> **[1:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=89)** If you break it down to what an article actually is, that's pretty nuanced data points.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=94)** Length of the article is a very specific feature but we don't just base our understanding of an article just around how long it is.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=102)** We look at lots of different things.
>
> **[1:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=105)** Take something like quality, where there are so many things that impact quality.
>
> **[1:49](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=109)** For instance, the tone, the length, what words are used, how effectively the language has been used, the topic of that article, and so on and on.
>
> **[1:58](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=118)** It's going to be difficult, if not impossible, to represent all of those in terms of numeric features.
>
> **[2:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=124)** This is common in other fields as well.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=126)** Take bioinformatics, where one might predict the chance of someone getting a disease based on their genetic composition, or in generative AI, trying to create an image based on a simple text prompt.
>
> **[2:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=138)** These are vastly more complicated tasks.
>
> **[2:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=141)** And handcrafting features is not really an option.
>
> **[2:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=144)** In such situations, we try to model the predicted variable using some function of the features, not necessarily linear, where we will try to learn this function itself.
>
> **[2:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=155)** So we, as modelers, don't actually have to handcraft those features but we let the model learn automatically, what are the important aspects of the data set?
>
> **[2:45](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=165)** Two of the most popular choices of non-linear models are decision trees and neural networks.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=170)** Let's see what they are.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### A primer to nonlinear models: Decision trees, neural networks
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=0)** - [Instructor] As we saw in the last section, there are situations where it is useful to go beyond linear models.
>
> **[0:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=6)** We try to model general functions.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=9)** Now it is impossible to model all functions, and hence what we do in practice is to limit to some classes of functions which are much broader than linear, but still some things that we can manage.
>
> **[0:21](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=21)** Decision trees are one such class of functions.
>
> **[0:25](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=25)** Going back to our example classification task on whether a member will apply to a job or not, we used two features, the distance of the job from the home of the member and the median salary for the job.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=38)** In this plot, remember a red point means a member applied, and a blue means a member did not apply.
>
> **[0:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=44)** Now we can pick one feature of the two, let's say the median salary, and divide this space into two parts, so that one will be as blue as possible and the other will be as red as possible.
>
> **[0:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=57)** We have made a binary decision to split the space into two parts based on one feature.
>
> **[1:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=63)** Now let's consider the two parts of this space separately and repeat the process.
>
> **[1:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=68)** For the space on the left, we can split that into two parts based on the feature distance, so that one part captures as much red as possible, and again, the other captures as much blue as possible.
>
> **[1:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=80)** We can do the same thing with the space on the right.
>
> **[1:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=83)** At every step, we consider one part of the space independent of everything else, and try to split that to maximize separation of red and blue.
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=93)** As we keep doing this, we end up getting many chunks of this space, each of which are primarily blue or primarily red, and when we group the blue blocks together and the red blocks together, we have a partition for the entire space that is primarily blue and red.
>
> **[1:52](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=112)** So this is what a decision tree tries to accomplish.
>
> **[1:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=116)** Observe that in decision trees, even though we have used straight lines to split the space, through repeated use, we end up with something that is highly non-linear.
>
> **[2:05](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=125)** Binary decision trees are really effective in classification tasks even when we have a large number of features to work with.
>
> **[2:13](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=133)** To this day, decision trees still are one of the most widely used types of models, especially when the input features can logically be split into two different parts, present or not present, A or B, true or false, et cetera.
>
> **[2:29](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=149)** But if you can't logically spread the input features, say you're using an image, it might make sense to use a different type of nonlinear model called neural networks.
>
> **[2:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=158)** We'll cover neural networks in detail later in the series, but let's briefly touch on them here.
>
> **[2:44](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=164)** In the last example, what we did was pick one variable at a time and divide the space into two groups.
>
> **[2:51](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=171)** We can be more general than that and take multiple possible lines to divide the space.
>
> **[2:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=176)** Say each line here is learned in a way that it is trying to divide the space into two parts, which is creating some separation.
>
> **[3:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=184)** This line and the second line and the third line, they're all trying to independently have some separation of the space.
>
> **[3:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=191)** Now, if in some way we can take a combination of these lines, then we can achieve more accurate separation.
>
> **[3:18](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=198)** For example, the southeast of this curve is more red and the northwest of this curve is more blue.
>
> **[3:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=206)** This is the approach that neural networks take.
>
> **[3:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=208)** These two types of non-linear models, decision trees and neural networks, allow us to model complex data and get results that we would not be able to achieve with simple linear regression or classification models.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), else, (1), this, (1)
> **Cross-References:** in the last (2), as we saw (1), later in (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Do It Right

> [↑ Back to Table of Contents](#table-of-contents)

#### Know your objective, know your data, and listen to the data
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=0)** - [Instructor] By some estimates only about 25% of companies in the United States have successfully implemented AI in some parts of their business.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=9)** This is a relatively low percentage in comparison to the promise that the technology holds and an indication that it is hard to get AI right when thinking about how to do AI right, it is again, helpful to bring up the three core pillars of AI, the objective, the data and the algorithms, and it is important for a practitioner to get all of them right.
>
> **[0:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=34)** Defining the right objective relates to defining what we want the AI model to accomplish.
>
> **[0:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=40)** Going back to the classification example of job applications, the goal is to notify a member about a relevant job, and we are trying to accomplish that by predicting whether the member will apply for the job or not in our training data then.
>
> **[0:56](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=56)** Apply or no apply becomes a label.
>
> **[0:59](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=59)** Note that the model has no understanding of what a job application means.
>
> **[1:04](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=64)** It just uses that label and in the given data try to maximize the separation of the space, but this actually means something to the people that apply to jobs, so it's important to keep in mind the objective your model is trying to accomplish having the right data.
>
> **[1:20](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=80)** Next, we discussed earlier that having good amount of quality data is important for models.
>
> **[1:26](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=86)** The models learn from the data and will explicitly follow the garbage in garbage out phenomenon.
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=92)** If your data is low quality, this will have an impact on both the bias and variance of your model but also it has an impact on the decisions made from that model.
>
> **[1:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=102)** As you think about data, it is also important to collect data that is representative for your use case.
>
> **[1:48](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=108)** One well-known statistic is that in the US the fatality rate for women in car accidents is higher than the same for men.
>
> **[1:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=117)** The reason is that the data used for testing car safety depends mostly on dummies that represent the average US male.
>
> **[2:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=126)** A data that is not representative can result in bias in your AI model.
>
> **[2:11](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=131)** Next about algorithms, we have talked about a few different types of machine learning models in this course, and it's important to pick the right kind of model for the purpose you're trying to achieve.
>
> **[2:23](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=143)** Considering the bias and variance trade-offs is an important part of this decision process.
>
> **[2:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=148)** Now, getting all of these steps right is very difficult and I strongly advise you to take an iterative approach for each pillar.
>
> **[2:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=157)** Start with an objective and try and quickly learn what is working and what are the gaps and improve the objective to get closer to your business goal.
>
> **[2:46](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=166)** Similarly, start with some data and a simple model.
>
> **[2:50](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=170)** Depending on the result explore other relevant and quality data that you might obtain that will help your cause.
>
> **[2:57](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=177)** As you get more data, explore other more complex models as well.
>
> **[3:01](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=181)** A successful AI application often relies heavily on the virtuous, iterative cycle of better understanding of objective, better data and better algorithms.
>
> **[3:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=192)** By getting all three right, there's a high chance that you will unlock tremendous value for the problem you are trying to solve.

> [!info]- Semantic Content
>
> **Code Keywords:** case. (1)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Continuing with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=0)** - Congratulations, you have reached the end of this course.
>
> **[0:03](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=3)** As you can imagine, this is just the beginning of your journey into understanding AI.
>
> **[0:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=9)** Now that you understand what happens behind the scenes I would encourage you to think about how AI can help in your profession.
>
> **[0:17](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=17)** What are some of the possibilities in your own work that might be improved by adding AI tools and techniques?
>
> **[0:24](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=24)** Also, check out some of these other courses in this series in LinkedIn Learning.
>
> **[0:28](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=28)** We talk about some state-of-the-art AI technologies and how our engineers apply these tools to create the best experience for our members at LinkedIn.
>
> **[0:38](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=38)** I am Shovi Kosh.
>
> **[0:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=40)** Thank you so much for watching.

> [!info]- Semantic Content
>
> **Analogies:** imagine (1)
> **Speakers:** - congratulations (1)


## Skills Covered

- Artificial Intelligence (AI)
- AI Literacy

## Path Context

### In [[LinkedIn's AI Academy]]
**1 of 3** | [[LinkedIn AI Academy AI-100- 2 Supervised Learning with Neural Networks]] →

## Appears In

- [[LinkedIn's AI Academy]]

## Related Courses

_Courses sharing skills:_

- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Artificial Intelligence (AI), AI Literacy
- [[Learning XAI- Explainable Artificial Intelligence]] — Artificial Intelligence (AI), AI Literacy
- [[Introduction To Artificial Intelligence]] — Artificial Intelligence (AI), AI Literacy
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)