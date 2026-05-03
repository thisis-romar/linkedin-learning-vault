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
created: 2026-05-03
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
  - [The LinkedIn AI Academy: The imperative of understanding AI](#the-linkedin-ai-academy-the-imperative-of-understanding-ai)
- [**1. Introduction to AI**](#1-introduction-to-ai) (4 videos)
  - [What is AI?](#what-is-ai)
  - [AI and machine learning](#ai-and-machine-learning)
  - [Three pillars of AI: Objectives, data, algorithms](#three-pillars-of-ai-objectives-data-algorithms)
  - [Building real AI applications](#building-real-ai-applications)
- [**2. Supervised Learning**](#2-supervised-learning) (1 videos)
  - [Supervised learning vs. unsupervised learning](#supervised-learning-vs-unsupervised-learning)
- [**3. Regression**](#3-regression) (5 videos)
  - [What is regression?](#what-is-regression)
  - [Linear regression](#linear-regression)
  - [Multiple linear regression](#multiple-linear-regression)
  - [Bias and variance](#bias-and-variance)
  - [Evaluating a linear regression model](#evaluating-a-linear-regression-model)
- [**4. Classification**](#4-classification) (3 videos)
  - [What is classification?](#what-is-classification)
  - [Logistic regression](#logistic-regression)
  - [Evaluating models and choosing the best](#evaluating-models-and-choosing-the-best)
- [**5. Nonlinear Models**](#5-nonlinear-models) (2 videos)
  - [Why are linear models not enough?](#why-are-linear-models-not-enough)
  - [A primer to nonlinear models: Decision trees, neural networks](#a-primer-to-nonlinear-models-decision-trees-neural-networks)
- [**6. Do It Right**](#6-do-it-right) (1 videos)
  - [Know your objective, know your data, and listen to the data](#know-your-objective-know-your-data-and-listen-to-the-data)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing with AI](#continuing-with-ai)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [The LinkedIn AI Academy: The imperative of understanding AI](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/the-linkedin-ai-academy-the-imperative-of-understanding-ai?u=76281980&t=0)** - There is so much talk about [[Artificial Intelligence (AI)|artificial intelligence]] right now, and maybe you're a little apprehensive, or maybe you are excited that AI will make our lives easy. In this course, we will try to talk about what AI is, how it works at a high level, and also the power that this might bring. We'll go into some of the important tasks that happen in AI, like regression and classification. We will start with simple techniques, like [[Linear Regression]] and slowly build up to do more complex topics, like non-linear models, and [[Neural Networks]]. I'm Shouvik Ghosh, I'm a director of engineering in AI here at [[LinkedIn]], I lead a team of scientists and engineers building AI methods, and technologies that power LinkedIn so join me in this LinkedIn Learning course as we demystify AI. (gentle music)

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[Linear Regression]] (1), [[Neural Networks]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - there (1)
> **Non-Speech:** (gentle music) (1)


### 1. Introduction to AI

[↑ Back to Table of Contents](#table-of-contents)

#### [What is AI?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=0)** - [Instructor] This is a course about [[Artificial Intelligence (AI)|artificial intelligence]]. But before we go into artificial intelligence, let's talk about intelligence itself. Intelligence is the ability to acquire knowledge, comprehend that knowledge, and apply it in new scenarios. Now, most living things can learn, and are able to apply that knowledge. Even if we look at, say, trees. Trees have learned to face their leaves towards the sun and maximize how much sunlight they can intake and create food from it. Mammals like dogs can learn to follow instructions and become our pets. Some birds can even learn a few words from a language and utter them when we want them to. Humans, on the other hand, have a higher level of intelligence. We can develop abstractions, we can logic about things, and a lot more. For example, we could observe the sun, the moon, and their movements, and also an apple falling from a tree. Connect the dots between these events, and theorize about a concept called gravity. On a totally different domain, we can develop a Constitution that can help govern the country for hundreds of years. Artificial intelligence is the science and engineering of developing intelligent solutions to problems. Now, this time, it's not humans that are acquiring knowledge and comprehending and applying that knowledge, but tools and devices run by computers. Most AI capabilities today
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=92)** focus on solving specific problems like interpreting language, or detecting speech, or detecting objects in images, et cetera. Now, these are tasks that humans can perform, but AI is able to do so with much less cost. Scientists aim to eventually develop AI that can solve many different problems and reach human level intelligence or beyond. Artificial intelligence constitutes many branches of science and engineering. For example, say we will need components like [[Statistics]], economics, machine learning logical reasoning, mathematical optimization, and possibly all of them coming together to enable AI. On the [[Hardware]] side, we need better chips, better ability to process data at large scale, and better devices, and a lot more. Now, artificial intelligence is gaining a lot of popularity these days, but the term was actually coined in the 1950s by [[John the Ripper|John]] McCarthy and his colleagues. Now, some of the tools that are used in artificial intelligence actually go a long back. For example, the tool like [[Linear Regression]] was developed by Adrian Legendre in 1805, like 200 years ago, when he was studying the paths of comets. Today, we have made lots of progress. Simple AI or machine learning [[Algorithms]] are all around us and we may not even realize it. It ranges from tools like cameras at toll booths that detect the number plates,
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=186)** to algorithms that safeguard our credit card activities from fraud, to applications like [[LinkedIn]] that help professionals be more successful. AI programs today are good at a variety of prediction tasks and detection tasks. For example, a program can look at an image and detect objects that are present in that image. An example of prediction could be a program that studies the environment and are able to predict what the weather might be tomorrow. In this field, we are tackling more and more complex tasks. Take the example of self-driving cars. We can have cameras in the car that detect human beings or other objects around the car in the roads. But going from the problem of detection to the problem of driving the car safely from one location to another is a totally different level of decision making. We are making good progress in this area, but we have not solved this yet. We are seeing applications of artificial intelligence in a lot of things that we do today. Say for example, in the internet space, like search engines, they can crawl the entire web, or sites like LinkedIn, and collect the information and serve it to a person who has a particular question and do all of this in a fraction of a second. In the years to come, we expect AI to be able to solve problems in agriculture like utilizing resources on land and water and dramatically increase crop production. We are also likely to be able to interact with machines using methods that are natural to humans
>
> **[4:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-ai?u=76281980&t=281)** like language that we use to talk with each other. Also far in the future, we also expect to have AI help diagnose medical problems and speed up drug discovery to cure those illnesses in humans. So, the potential of AI is really high. But in this course, we aim to provide the basics of AI so that you can take the understanding and explore how you can use AI to do your job better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (7), [[Algorithms]] (2), [[LinkedIn]] (2), [[Statistics]] (1), [[Hardware]] (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [AI and machine learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=0)** - [Instructor] In this series we are talking generally about [[Artificial Intelligence (AI)|artificial intelligence]] but most of the topics are actually machine learning. Some people use these terms interchangeably but that's not quite correct. Artificial intelligence is the capability that we are trying to build in a program that can learn, comprehend and make decisions for us possibly very complex decisions without precedence. So the goal of AI is to reach human level intelligence and beyond. Machine learning is a subfield of AI which is a lot more like mimicry. It looks at past data and looks at the actions taken in the past and then tries to replicate that in future situations using [[Algorithms]]. Concepts like logic or abstraction or generalization are pretty limited in machine learning at the moment. Machine learning is one area where we have actually made a lot of progress, and it is central to the improvements we have made in AI thus far. It is totally possible that in the future there will be other areas of study beyond machine learning that will help us achieve artificial intelligence. But for now, machine learning is one of the best ways we know on how to build AI. So we focus on that a lot in this course. One of the earliest examples of machine learning was a program to play the game of checkers built by Dr. Arthur Samuels in the 1950s. Now, scientists tried to build such programs even before but there's a fundamental difference in the approach
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/ai-and-machine-learning?u=76281980&t=94)** that Arthur Samuels took in his solution. Scientists before Dr. Samuels would try to define explicit rules that would tell the computer what move to play given specific situation of a game. Now it was hard to write rules for every situation. What Dr. Samuels did is different because instead of specifying rules, he let the machines play against each other many times, like thousands of times and he collected that data, with the data of these games. Computer would have seen many examples of games with various situations. What moves were played in those situations and what was the result in terms of a win or a loss in those games. Now, using this data the computer learned the best moves to play in a given situation. The program was eventually good enough to beat the state champion of Connecticut at that time. Now, this phenomenon involving collecting a range of data in various situations, the actions and the results and using that to learn actions to take in new situations is the backbone of machine learning methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (3), [[Algorithms]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Three pillars of AI: Objectives, data, algorithms](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=0)** - As we discussed, machine learning is one of the best ways we know to achieve AI capabilities today. In this course, we want to understand how machine learning works. There are three core components of machine learning: the objective, the data, and the learning algorithm. So the first, the objective means this is the task that we want the machine learning program to achieve. So this is the what. The next is the data. So this is the collection of examples that the program can use to learn from. Typically, an example would include a situation and whether we achieved our objective in that situation or not. And in the data, we would want a variety of examples which would involve many different situations. The more the variety, the more versatile the machine learning program would be. The third is how the program would learn from that data. That is, the [[Algorithms]] and things that we would want to apply to extract the important elements from the data that can be applied in future situations. We are going to spend most of this course talking about the third pillar, the algorithms, but let's look at the first two pillars in a bit more details here. Going back to the example of checkers, so what would be the objective for the program? It would be to win the game. So that is the objective. For data, the way Dr. Samuels obtained data was by letting two computers play against each other many, many times.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=94)** So each game that he would let the computers play would become an example, and then use that and collect many, many different such examples to decide what would be the best move to play given a particular situation of a game. Let's take another example of self-driving car. For self-driving car, the objective would be to start from one location and go to another location, the destination, and do that safely and following the rules of the roads. How do we collect data for that? In many cities in the US, and possibly outside of US as well, you might have seen cars with some gadgets on the top, with cameras and radars and LiDAR and whatnot, that go around the cities and travel on the roads and collect the data. These instruments would be observing what's the situation around, who are the people around, what are the other cars, what are the road signs and whatnot, and what a human driver is doing in those situations. The program will be taking in all this information and try to design a mechanism to replicate the best driving behavior in the future. Let's look at a final example, which is very core to what we do at [[LinkedIn]]; recommending jobs to members who are looking for a change in their career or in their professional life. A member who is seeking a job uses the LinkedIn app or our website, and we recommend to them a job
>
> **[3:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/three-pillars-of-ai-objectives-data-algorithms?u=76281980&t=187)** that he or she might be interested in. So the objective in this case, that is, the objective of this machine learning program, is to match a member to the best job possible. And this would be something that the member would be interested in and apply to, and also the job is something that is the best fit for this member. The way we get data for this particular application is also from our app. When a member comes to the LinkedIn app, we are often recommending jobs to her and we know whether she has applied to some job or if she did not apply, and we get this information from every member who are using the LinkedIn app. And when we collect all these information from all the members, that becomes a fantastic data set which we can use to develop a program and apply it for future recommendations. We will get back to this example on how we learn these algorithms in the next few chapters. As we learned here, there are three pillars in how machine learning works today, the objective, the data, and the algorithms, and this is the construct we will use throughout the course as we explain more and more complex topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (4), [[LinkedIn]] (4)
> **Cross-References:** we discussed (1), in the next (1)
> **UI Navigation:** go to (1)
> **Speakers:** - as (1)

#### [Building real AI applications](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=0)** - [Instructor] So what does it take to build a real AI application? Innovation, as we know, is an iterative process. For example, the light bulb, as the famous saying goes, "Thomas Edison tried 10,000 times to get the first light bulb working." But from then on, it also took us more than a hundred years to get to LED lamps, which are way more efficient. Another example, take electric cars of today. They are more efficient and look very different from the first cars that were built by Henry Ford or Karl Benz. Similarly, to get an AI solution and get it right, it takes many iterations. As we discussed in the last section, building [[AI Solutions]], especially through machine learning as we do today, has three main components: the objective, the data, and the [[Algorithms]]. And we need to iterate through all these three components to build real AI applications. We'll try to explain this more using one example that of news. Before the digital age, it would be editors in newspapers who would decide what news they would put in the newspaper and in what order they should go. But in the digital age with the websites and the internet, there was an option to show thousands and thousands of news article to people every day, but no one would have the time to read through all of that. This constraint led to the development of what we know today as recommender systems. There's an algorithm that sits behind these websites
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=94)** or applications that decide what to show to a particular member. At a high level you can imagine the program tries to recommend what one wants, but that is more complex than you would imagine. When this class of effort started, engineers working on such projects thought, if a person clicks on a title and opens that news article, that means he's interested. They devised programs to predict which news articles a person would click on. This provided a great start. However, this led to a change in behavior over time for some content creators. These content creators try to game the system by adding provocative titles or clickbaity titles. Engineers soon realized they need to change from the first objective of predicting a click. In the next iteration, engineers thought, if a person clicks on an article and scrolls through it, then that indicates interest. But then again, some would game the system and would get examples where the title of the article will encourage the person to read through a long article. So there was a need to iterate on that objective again. Over the years, news recommendation systems have gone through many, many iterations. Recommendation systems of today have fairly sophisticated objectives. They would predict what a member would like or click or comment on. Furthermore, these programs would balance short-term and long-term effect of recommendations. For example, provocative content
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=186)** might engage members in the short term, but too many such articles might make the member unhappy in the long-term. These programs would manage distribution of content to encourage many creators to create again. Social networks would even optimize for network effects and content virality. Of the three core pillars of machine learning, next we come to data where, again, we would need to iteratively understand what data is needed to improve the program. For example, suppose, a news recommendation system starts only with the sports news. Now, even when it has a lot of data about sport news, it will not do a good job in recommending business news. In building real applications, at the beginning, data is scarce. Engineers typically start with any data that can be helpful and use that to build a ML program, knowing that it is not the best. However, over time, they would analyze some machine learning program, understand gaps and collect more data, not only in volume but also data that is representative of the target audience for the news recommendation system. Next, as we get more data, engineers would be able to build more complex algorithms that can get better and better in recommendations. This virtual cycle of more members using their recommendations, getting more data, which leads to better algorithms, accelerates the innovation in the news recommendation product overall. Another extremely important aspect of building real AI applications is the infrastructure.
>
> **[4:40](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/building-real-ai-applications?u=76281980&t=280)** To power advanced algorithms that work on large data sets, the [[Hardware]] and infrastructure needs to improve as well. Some of the large companies today will depend on infrastructure consisting of millions of computers, processing petabytes of data to create experiences that delight millions of members. At [[LinkedIn]], we have invested in improving our applications over many years. Today we have state-of-art machine learning algorithms, powering probably every LinkedIn product, including the LinkedIn feed, job recommendations, connecting candidates to recruiters, connecting members to other members, and a lot more. Stay with us to learn a lot more about these applications in the future sections of this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[LinkedIn]] (3), [[AI Solutions]] (1), [[Hardware]] (1)
> **Analogies:** for example (3), imagine (2)
> **Cross-References:** we discussed (1), in the last (1), in the next (1)
> **CLI Commands:** make (1)
> **Env Vars:** led (1)
> **UI Navigation:** click on (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. Supervised Learning

[↑ Back to Table of Contents](#table-of-contents)

#### [Supervised learning vs. unsupervised learning](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=0)** - [Instructor] Now that we know what [[Artificial Intelligence (AI)|artificial intelligence]] is and what we need to create AI or ML models let's talk about the big distinction in the type of ML methods that are supervised and unsupervised learning. In supervised methods, we have a mechanism of telling the model what the target is. This could be a numeric value or whether something belongs to a specific class or if something is correct or incorrect. We call these targets, labels. These labels are a specific target for the model to predict and we can evaluate the model on how accurately it predicted the labels. If, for instance, we know that a picture is going to be one of the three different categories, a horse, a dog, or a cat we can label those images as such and then test our model out against that pre-labeled data. Because we have decided that these labels are correct we can use them to get a precise notion of what error the model has. One of the trade-offs with [[Supervised Learning]] is that the methods are task specific and might not necessarily translate outside of the data you have provided. For example, unless explicitly trained on a model might not be able to distinguish a horse from a zebra, there are some situations where we don't have predefined labels. In such situations, we can use what is known as unsupervised learning to process the data and find out interesting patterns. So for instance we might not tell a model that's looking at images what those images are in labels, but it'll detect a pattern
>
> **[1:37](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/supervised-learning-vs-unsupervised-learning?u=76281980&t=97)** of characteristics and group together similar images. This is powerful and can be applied to many different types of tasks. Unsupervised learning is often useful for data exploration purposes. If we have data and try to cluster them it helps us derive intuition about that data which can be helpful for many purposes. The key distinction is the following. If you have labels that you have created or you know they're right based on some external criteria, use supervised learning. But if you want to cluster the data without giving specific labels, use unsupervised learning. Supervised and unsupervised learning isn't necessarily a binary decision where you have to use one or the other. It's actually a spectrum. You can start with one and transition into the other based on the findings, but it's good to know both sides. So you can start with one and begin modeling. We are going to focus on supervised learning throughout this course, but if you want to know more about unsupervised learning check out some other courses here in the [[LinkedIn]] Learning Library. So now that we know the difference, let's start digging more into some supervised learning methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (4), [[Artificial Intelligence (AI)|Artificial intelligence]] (1), [[LinkedIn]] (1)
> **Analogies:** for instance (2), picture (1), for example (1)
> **CLI Commands:** cat (1), find (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)


### 3. Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [What is regression?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=0)** - [Instructor] Regression is a widely-used machine learning tool. This has to do with predicting things, even before they have occurred, using signals that are available. Let's look at an example that can help you understand this concept and also recollect what might have been high school [[Statistics]] lessons for many of us. For our example, we have chosen the [[LinkedIn]] feed. This is the personalized homepage for LinkedIn members where we aim to enable conversations amongst professionals. So we have members who create content and members who interact with those content through comments, likes, or shares, which leads to conversations with other members in the network. For a LinkedIn creator who is also a member, a natural question is, how can I write an article or create a video that will increase the interactions or the engagement on that piece of content? If we put ourselves in the shoes of the creator, we would want to understand what are the factors in our control that can influence interactions? For example, we can choose what to talk about, we can choose what tone to use, and what we write or shoot. We can also choose how long to talk and so on. A creator can try a variety of these combinations in the content she creates and observe a few times how members [[React.js|react]] to it. That means she would create a post and see how many and how much engagement that has. Now this would be valuable data that she can use. This is a situation where we have a variable,
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-regression?u=76281980&t=93)** which is engagement in our example, that is not in control. But this variable can be influenced by other factors which are in control. These kinds of situations are very common in our lives. For example, we can use the weather patterns we're observing today to predict whether it will rain tomorrow or not. We can observe the global events occurring today and predict how the stock market might react tomorrow. A credit provider can look at the transactions and any other information available and predict if the transaction that just happened is fraudulent or not. Regression involves two kinds of variables, those that are in our control, or at least those that can be observed, and the other variables that are unknowns, or not in our control. In other words, we will not be able to observe this second kind of variable until the time has come. Regression involves finding a mathematical relationship between these two types of variables. And once we have that relationship, we can use the observable features and predict the unknown features, and we build these mathematical relationships using data, and these relationships are called models. In the next sections, we will learn what happens under the hood of some simple regression methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[React.js|React]] (2), [[Statistics]] (1)
> **Definitions:** is a  (2), in other words (1)
> **Analogies:** for example (2)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Linear regression](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=0)** - [Instructor] We saw in the last section that a regression comes in when there are two kinds of variables. One that we can observe, and the other that we cannot observe then and would want to predict. We try to find a relationship between these two types of variables and use the observable variables to predict the unknowns. The simplest relationship these two variables can take is a straight line, and this is called our [[Linear Regression]]. Linear regression is one of the simplest form of regression, and this technique is more than 200 years old. Let's continue with our working example of the creators on [[LinkedIn]]. As a creator, we want to understand what we might do to increase conversations on the content that we create. As a starting point, let's simplify it a bit and only look at text-based articles and understand the effect of the length of an article on the number of conversations that the article has. Again, recall that as creators we do not have control over the conversations that might happen, but we can decide how long we are going to make our article when we are writing it. So the number of conversations is the unknown variable we are predicting, and the article length, which we measure by the number of words, is our observed variable. The objective here is to find the best linear relationship between the length of the article and the conversation on that article. Let's talk about the data.
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=93)** As a creator, we can collect data on this. We can write a few articles of various lengths, and we can post them on LinkedIn and see the number of conversations on each article. Let's say we wrote 10 articles and measured how many conversations that happened on each of them. If we graph them, then on the X axis we have the length of articles and on the YX axis we have the amount of conversations. For this particular point, say the length of that article was 345 words, and the number of conversations on this article was, say, 1,230. Finding a linear relation among these points means drawing a straight line through this data. Using this linear relation, we want to predict conversations using length of the article as an observable variable. For this particular line and new article with length 400, the predicted engagement will be this point on this line, which is 1350, but there is a problem. We can't draw a straight line that passes through all these points, so what would you do? Well, we would try to draw a line that gets as close to all these points as possible. You might recall a straight line can be represented by this equation. Y is equal to beta naught plus beta 1X. Where beta naught is the intercept, And beta one is the slope of the line. For one article for which the creator has the data, say this article with length 345, the actual amount
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=186)** of engagement we know is 1,230, but the engagement predicted by the linear relationship is beta naught plus beta one times 345. The gap between the actual and the predicted value is the error in prediction. We can get this error for all the data points the creator collected, and by averaging them up we will get the mean error. A good line might be one that minimizes mean error. There is one caveat in that though, the positive and negative errors might both be high but cancel each other out to result in a small total error. To address this, we need to use some form of the error that captures the magnitude but not the sign. Square of error is a popular form that achieves this and has some nice properties as well, like differentiability. We will see how that can help in future sections. To find the best linear relationship between these points, we find the line that minimizes the means squared error and we do that by minimizing this function MSE over the parameters beta naught and beta one. Although taking the square is the most popular method we can use other [[Forms]] as well, like the absolute value and minimize the mean absolute error. To summarize, you can see that we started with the objective of predicting engagement based on article length, and we have converted that to optimization of a mathematical function, so the best line that we will find is the one
>
> **[4:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/linear-regression?u=76281980&t=281)** with the parameters that minimize the means squared error. Just like how we solve this function together, optimization [[Algorithms]] solve this sort of minimization problems and help us find the best model. It so happens that for this specific function, we can solve it easily and there are close form solutions for beta naught and beta one. In subsequent sections, we will continue to build on this concept of linear regression, and learn to address other problems. In some of these situations we will not have a close from solution for the parameters and we will need to apply other methods.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (3), [[LinkedIn]] (2), [[Forms]] (1), [[Algorithms]] (1)
> **CLI Commands:** find (6), make (1)
> **Definitions:** is a  (3), is called (1)
> **Env Vars:** mse (1)
> **Cross-References:** in the last (1)
> **Analogies:** just like (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Multiple linear regression](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=0)** - [Speaker] In the last video, we saw how [[Linear Regression]] is used to understand the relationship between the unknown variable and one observable variable. But often there are situations where we have multiple observable variables and a single unknown variable. To do this, we'll use a technique called Multiple Linear Regression. Continuing with our example of predicting conversations on an article, The observable variable that we have used in our previous section is a length of the article and we used the equation, y is equal beta not plus beta one X, but there are other variables that we could consider as well. For example, the average length of sentences in the article, a potential measure of readability which might also affect conversations. Let's name this variable, average sentence length, Z and then we can build a linear relationship between y, the conversations and x, the length of article and Z, the average length of sentences and the equation here would be Y is equal to beta not plus beta one x plus beta two Z. We find the best linear relationship using a similar mechanism of minimizing mean squared error. The mean squared error is the average of the square of the error in prediction we make for every instance in the data. And the error is the difference between the observed variable y, which is the amount of conversations we had
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=95)** on that article and the predicted value of the conversation from the model. The best model is the one with parameters that minimize the means squared error. This is a regression with two observable variables but it's easy to see that we could have additional variables that might affect the number of conversations on an article. Perhaps the sentiment of that article has an effect. Is it positive, neutral, or negative, or the number of grammatical errors or the topic of an article and so on. The list can grow fast and all these variables can be added to the regression to improve predicting the unknown variable, the number of conversations. Let's take it a little bit further. Suppose we have a hypothesis that if the number of words is too low, then it's an indication that the article is less informative. Our readers will not like that much, and the article will not have much conversations around it. On the other hand, if the article is too long, then it becomes difficult to hold the attention of the readers. And then again, there would be fewer conversations. In such a situation, the relationship between the unknown variable, conversations and the observable variable, article length could be a quadratic. So, we can write an equation of this form where y equal to beta not plus beta one x, which is the linear form of number of words and then beta two x square, which is the square of the number of words. This equation is a quadratic
>
> **[3:08](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/multiple-linear-regression?u=76281980&t=188)** in the variable, number of words. However, this equation is linear in the parameters beta not, beta one and beta two. So by this notation, this is still a linear equation from the regression point of view because the linearity is of the parameters. So we can have X squared or we can have X cubed or any other transformation of X but those are just some transformations of the variable X, which are being included in a linear fashion in the equation. So among all these choices, how do we find out the model that is best for the data? Let's find that out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (2)
> **CLI Commands:** find (3), make (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Speakers:** - [speaker] (1)

#### [Bias and variance](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=0)** - [Instructor] In multiple [[Linear Regression]], we saw that there are many possibilities in the ways we can model the predicted variable using the features. But how do we find out which one of these possibilities is the best method for our model? This is where we come up with two very important concepts in machine learning. Bias is a measure of how accurately the model can learn at best. If you are using a simple linear model on a dataset where the relationship is more complex, the model might not predict the data very accurately and will end up with a high bias. When a model is complex, it isn't just linear, but quadric or cubic in features, for instance, that tends to give the model more capacity to learn and be more accurate. So we say the model has a lower bias. This seems great, but there's a trade off. The model might have a low bias, but it's not as easy to train. This is where variance comes in. Variance measures how well we can train the model. Suppose we collected 10 data points, and with those, we came up with one straight line. But also suppose, just by pure luck, it could have a very different distribution, something like this or this. Then in each instance, the model that we train will be different. Variance captures how the model can differ just because of her randomness in the data. You're probably guessing already that simple models are less powerful, but easier to learn. Hence, they tend to have high bias, but low variance.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/bias-and-variance?u=76281980&t=94)** On the other hand, a much more complex model can be more accurate, but will be difficult to learn. Hence, they will have low bias, but high variance. Let's go back to the example of creators. Suppose the underlying hypothesis is true that an article that is too short or too long has few conversations, but in the middle in some sweet spot, it has a high number of conversations. Then a quadratic function can be a really good fit. What we would see is that a straight line will be too simple. It will not be able to capture that underlying hypothesis and will end up with more bias. On the other hand, something like a cubic function will be more complex than what is needed, and this will fit to the data too much and can have a high variance. The quadratic function in between will be the sweet spot. But how do we actually know that's the right choice? Let's talk about evaluating our regression model next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating a linear regression model](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=0)** - [Instructor] We know that we can find a sweet spot between bias and variance. What principles can we apply to find that sweet spot in practice? One popular mechanism is to take the data and split that into two parts. The training data and the test data. As the names suggest, training data is the data that we use to train the model. The test data, and we keep that separate and use only for evaluation purposes. This separation is absolutely critical because this allows us to measure the variance of the model independent of the training. One common way in which a high model variance manifests is through the model overfitting to the training data. Overfitting means that the model has not only learned the major patterns in the data but also learned some of the randomness in the data as well. It is not necessarily good because we want to learn the patterns in the data and not the randomness. By keeping the test data separate and evaluating the model on the test data, we can measure if the model overfit on the training data. A model that has similar accuracy in train and test data is likely to not have overfit. But if the accuracy is very different across the two data sets, that's an indication that the model has overfit. In practice, we take the training data and we try to learn different types of models with increasing complexity. For simple models, the test error is high because of high bias. As the complexity increases,
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-a-linear-regression-model?u=76281980&t=93)** the training and the test error decreases. This happens because the model has more capacity to learn. But after a point, adding more complexity continues to decrease the training error but increases the test error. This is the phase where the model is overfitting to the training data and is not able to generalize to the test data. The sweet spot in the level of complexity is the one where the test error is at its lowest. Finding this sweet spot is part art and part science. But here is one thing that we know, one aspect that helps us train models better overall. That means lower bias and lower variance is if we can get more data. And not only just volume of data, but higher quality data. This course is really focused on giving you a primer for machine learning and AI. But this is a point I really want to stress here. Quality data makes your models better. It's not just the amount you have but also the quality of the data and how well the data represents the phenomenon you're trying to model. So I would encourage you think not just about the kind of model you want to train, but also what kind of data you want to collect that will allow you to train better models.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Classification

[↑ Back to Table of Contents](#table-of-contents)

#### [What is classification?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=0)** - [Instructor] In the last few chapters we learned about regression where we were trying to predict a numeric quantity like the number of conversations using observed quantities which we call features or predictor variables or observable variables. But in some applications we might need to predict categories or classes instead of a numeric quantity. This is what the topic of classification deals with. Many of you might have applied for a loan, maybe a car loan or a home loan, and there is a process of loan approval. That process is trying to figure out how likely you are to default on the loan. That is a classification task. Will you pay the loan or will you default? Another important application, which is relatively new is looking at x-ray images and trying to decide whether a particular patient is at an elevated risk of cancer or not based on that image. At [[LinkedIn]], we have multiple kinds of tasks where we apply classification. For example, we try to predict whether a member will apply to a job or not. In account activities, we are trying to decide whether an activity is real or fraudulent or because LinkedIn is a professional network and some members might not want to see political content we try and decide whether a particular content is political in nature or not. Now all of these examples we discussed are of the type where we are trying to make a simple decision of choosing between one category versus another.
>
> **[1:36](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/what-is-classification?u=76281980&t=96)** For example, the content is political or not. These are called binary classification tasks. There are also situations where we need to make decisions between more than two classes and this is called multi-class classification. For example, look at optical character recognition tools. You might have seen places where some tool is trying to identify car number plates. They would detect the car plate in a picture and try to map the image to specific characters between zero to nine and A to Z. Similarly, sometimes when you deposit checks they will try to automatically detect the amount in the check. We'll talk more about this later on in the AI Academy series. At LinkedIn, we have many applications of multi-class classification tasks as well. For example, understanding the relevant topics for content posted on LinkedIn. Is it about science? Is it about sports? Is it politics or leadership? And a lot more. In the next two videos you will learn how one can solve the problem of classification using the same principles and the core components that we discussed earlier objective, data and [[Algorithms]]. But before we get into that, try and think of something in your work that you want to classify into different categories. What does that look like for you? Write that down in the notebook below the video and come back to it as we continue the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (4), [[Algorithms]] (1)
> **Analogies:** for example (4), picture (1)
> **Cross-References:** we discussed (2), in the last (1), in the next (1)
> **Definitions:** is a  (3), is called (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Logistic regression](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=0)** - [Instructor] So let's talk about how we can approach the task of classification. Recall that the main components of a machine learning task are objective, data, and [[Algorithms]]. Let's use that framework to look at an example and how we can go about solving it. Say we want to recommend a relevant job to a [[LinkedIn]] member. The objective in this case is to decide whether a member is going to apply to a particular job or not. Let's consider a simplistic version of this prediction task with two features and we will explain this using a graphical plot. The first feature is the median salary, the midpoint of the expected salary for the job and that's on the X-axis. And the second feature is the distance of the job location from where the member lives. And this is on the Y-axis. This dataset has two colors. If it's blue, that means a member has not applied and red if the member has applied to the job. Before going into anything else, what intuitive sense can you make from this data? Take a moment, pause the video, and write down your thoughts in the notebook below the video player. We see that as we go more towards the right of the plot, the part of the graph where the median salary is large more people have applied. Also looking at the Y-axis, we see that if the distance between the job location and where they live is high
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=92)** the member is unlikely to apply. So what we can see from this data is that there is a tradeoff that people try to make where if the salary is significantly high then they might be willing to travel further for the job. The classification task here would involve separating this space into sections of apply and no apply. We can try achieving this separation using a straight line. In this case, what we can say is that if a particular data point is placed toward the southeast of this line, then a member is likely to apply. And if it is in the northwest of this line, then the member will not apply. This is a simple situation, but more often than not the examples we work with are fairly complicated where it's difficult to get a clear separation of the two classes. So let's think of a larger version of this data set where the red and the blue dots are very mixed up so we cannot find a straight line that would completely separate all the red and blue dots. What we can do is find the line that would get us as close to full separation as possible. So we will have to think about our probabilistic setup using [[Logistic Regression]]. This means that instead of making our decision based solely on which side of the line a point is on, we look at the likelihood that a point belongs to a particular category depending on where that point is in relation to the line. If a point is in the bottom right of this line
>
> **[3:06](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=186)** then the chances are high that this person will apply for the job. Vice versa, if a point is in the upper left of this line then the member is unlikely to apply. Now, recall how we solved the problem for regression. We designed a mechanism where we measured the error in our predictions and then find a regression function that could minimize the sum total of all error. We have to make some modifications here because in this case of classification, we are working with [[Probability]]. The way we calculate this probability is through the sigmoid function. The sigmoid function is always between zero and one, where zero is no probability and one is complete certainty. For a given data point, the probability that it belongs to a particular category depends on the distance of the point to the line. In this example, the point A is far southeast from the line and we think that there's a high chance of applying. Similarly, take this point B, which is on the far northwest of the line, and we will assign a very low probability for this person to apply. We do this for every data point and come up with a function that represents total error. But here, the error is how accurate our prediction is. If we predict with a high probability that someone is in a given class and actually they're not, then that's an error. Adding up all those errors, we get an understanding of total error in prediction for our model and we can minimize that total error to find the best model.
>
> **[4:41](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/logistic-regression?u=76281980&t=281)** This is a bit different than the error we talked about in regression, and it's a lot harder to solve for in a simple way, but fortunately, we have optimization and computational techniques that come to our rescue and let us find the best model for our dataset.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), [[Algorithms]] (1), [[LinkedIn]] (1), [[Logistic Regression]] (1)
> **CLI Commands:** find (5), make (3)
> **Definitions:** is a  (3), means that (1)
> **Cross-References:** we talked about (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Evaluating models and choosing the best](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=0)** - [Instructor] In the last video, we learned about [[Logistic Regression]], which enables us to build probabilistic models for classification so that we can obtain probabilities of a class that a new data point might belong to. We can compute that [[Probability]], but often in the end, typically a decision has to be made. Is the loan approved or not? Do we recommend a job to a member or not? For a machine learning practitioner, this means she or more likely, the classification model that she built will have to make a binary decision using the probability obtained from the model. A simple mechanism to do that is to have a threshold. For example, if the predicted probability is more than a threshold, say 0.5, then we will classify the data point into one class. If the probability is less than the threshold, then we will classify into the other class. Our framework depends on a mechanism to measure the error in our prediction. This is what we call the confusion matrix. The confusion matrix has rows and columns. The columns determine our predictions, the predicted positives or predicted negatives, and the rows determine the actual values in the data. Again, actual positives and actual negatives. For example, the top left item in this matrix is called the true positive. The number of data points where the model correctly predicted that the member will apply. The bottom right element is the true negative, where the model correctly predicted
>
> **[1:32](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=92)** that the member will not apply. Basically, if a data point is in these two boxes, the model is accurate. The model makes errors as well. The way we measure that is through the negatives. The top right element in this matrix is the false negatives, where the model mistakenly predicted that the member will not apply. And finally, we have the false positives in the lower left where the model is predicting the member applied, but actually they did not. The ideal model has a confusion matrix, which is concentrated on the diagonal where the model makes accurate predictions. Now, based on this confusion matrix, we come up with two very important concepts, precision and recall. Precision is how accurate the model is when it classifies a data point to be positive. It's the ratio of true positives over all predicted positives. If the model predicted a member will apply, how many of them in the dataset actually applied? For example, if the model says there are 125 people that applied, but among them, only 100 actually applied, the precision of that model is 80%. The other concept, recall measures that among all data points where we know in the dataset that the members applied, what proportion did the model correctly predict to apply? It is the ratio of true positives over actual positives. There were 150 applications in this dataset and the model predicted 100 of them as applications. Then the recall is roughly 67%.
>
> **[3:09](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=189)** Now, remember one important thing that we did in the regression problem. We separated the data into two parts, the training dataset and the test data set. The training data set is something that we will use to train the model, and the test data is the one that we'll use to evaluate the model. In the classification setting, we would do the same thing. And an important thing to remember is that the training and the evaluation data sets should not mix. Ideally, we would want a prediction algorithm to have a high precision and a high recall. In real world, however, we often have to make a trade off. A high classification threshold will result in a high precision, but can result in a lower recall as well. Now, if we lower the threshold, that can increase the recall, but often comes at a cost of lowering the precision. Different applications have a natural preference of what is ideal. In some cases, we would want a high precision, whereas in other cases, we want a high recall. For example, in detecting disease, we want a high recall, so that we can send the patient for additional testing. We are okay if the precision is a bit low here because we would rather send a few false positives through than make an error and put the patient's life at risk. An example where we want high precision is a job recommendation feature here at [[LinkedIn]]. If we are deciding to notify a member about a job that she might be interested in, we would want a high precision because we don't want to notify a member with irrelevant jobs. This could mean fewer job recommendations given,
>
> **[4:42](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/evaluating-models-and-choosing-the-best?u=76281980&t=282)** but the jobs that we are showing are more relevant for the member, which is what we want. So really the decision on how to evaluate a model depends on the risk and reward associated with the choice of classes. Oftentimes, it's the domain experts who are best positioned to make those decisions. As you are thinking of applying classification to the problem you identified earlier in this course, think about what kind of accuracy was more rewarding and what kind of error is more risky for you in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (4), [[Logistic Regression]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (4)
> **Analogies:** for example (4)
> **Definitions:** is a  (2), is called (1)
> **Cross-References:** in the last (1), earlier in (1)
> **Versions:** 0.5 (1)
> **Speakers:** - [instructor] (1)


### 5. Nonlinear Models

[↑ Back to Table of Contents](#table-of-contents)

#### [Why are linear models not enough?](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=0)** - [Instructor] So far, we have been working with linear models. For regression, we saw how to build a linear relationship between outcome variables and the features. And for classification, we saw how to find a straight line to separate the space into classes. We also discussed in regression that the relationship between the outcome variables and the features might not be linear. And we saw an example of models that are quadratic in the features but still linear in the parameters. This is one way in which practitioners try to model non-linear behavior but still using [[Linear Regression]]. And this also works in the classification problems. This is seen as the more traditional way to build models. You either identify what works for the data yourself or you might enlist some domain experts who know the specific transformations that might be important. Going back to our previous example, if you look at an article length, it makes some logical sense that if an article is too short, there wouldn't be much conversation, and if it's too long, people might not read it at all, and there would also be fewer conversations happening. If the practitioner has that intuition, then she can design the model and include the square of that length feature to account for that intuition. When we start estimating models with more parameters, billions of data points and complex relationships between features, it becomes difficult and inefficient to rely on intuition and domain expertise. If you break it down to what an article actually is, that's pretty nuanced data points.
>
> **[1:34](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/why-are-linear-models-not-enough?u=76281980&t=94)** Length of the article is a very specific feature but we don't just base our understanding of an article just around how long it is. We look at lots of different things. Take something like quality, where there are so many things that impact quality. For instance, the tone, the length, what words are used, how effectively the language has been used, the topic of that article, and so on and on. It's going to be difficult, if not impossible, to represent all of those in terms of numeric features. This is common in other fields as well. Take bioinformatics, where one might predict the chance of someone getting a disease based on their genetic composition, or in [[Generative AI]], trying to create an image based on a simple text prompt. These are vastly more complicated tasks. And handcrafting features is not really an option. In such situations, we try to model the predicted variable using some function of the features, not necessarily linear, where we will try to learn this function itself. So we, as modelers, don't actually have to handcraft those features but we let the model learn automatically, what are the important aspects of the data set? Two of the most popular choices of non-linear models are [[Decision Trees]] and [[Neural Networks]]. Let's see what they are.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linear Regression]] (1), [[Generative AI]] (1), [[Decision Trees]] (1), [[Neural Networks]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [A primer to nonlinear models: Decision trees, neural networks](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=0)** - [Instructor] As we saw in the last section, there are situations where it is useful to go beyond linear models. We try to model general functions. Now it is impossible to model all functions, and hence what we do in practice is to limit to some classes of functions which are much broader than linear, but still some things that we can manage. [[Decision Trees]] are one such class of functions. Going back to our example classification task on whether a member will apply to a job or not, we used two features, the distance of the job from the home of the member and the median salary for the job. In this plot, remember a red point means a member applied, and a blue means a member did not apply. Now we can pick one feature of the two, let's say the median salary, and divide this space into two parts, so that one will be as blue as possible and the other will be as red as possible. We have made a binary decision to split the space into two parts based on one feature. Now let's consider the two parts of this space separately and repeat the process. For the space on the left, we can split that into two parts based on the feature distance, so that one part captures as much red as possible, and again, the other captures as much blue as possible. We can do the same thing with the space on the right. At every step, we consider one part of the space independent of everything else, and try to split that to maximize separation of red and blue.
>
> **[1:33](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=93)** As we keep doing this, we end up getting many chunks of this space, each of which are primarily blue or primarily red, and when we group the blue blocks together and the red blocks together, we have a partition for the entire space that is primarily blue and red. So this is what a decision tree tries to accomplish. Observe that in decision trees, even though we have used straight lines to split the space, through repeated use, we end up with something that is highly non-linear. Binary decision trees are really effective in classification tasks even when we have a large number of features to work with. To this day, decision trees still are one of the most widely used types of models, especially when the input features can logically be split into two different parts, present or not present, A or B, true or false, et cetera. But if you can't logically spread the input features, say you're using an image, it might make sense to use a different type of nonlinear model called [[Neural Networks]]. We'll cover neural networks in detail later in the series, but let's briefly touch on them here. In the last example, what we did was pick one variable at a time and divide the space into two groups. We can be more general than that and take multiple possible lines to divide the space. Say each line here is learned in a way that it is trying to divide the space into two parts, which is creating some separation. This line and the second line and the third line,
>
> **[3:07](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/a-primer-to-nonlinear-models-decision-trees-neural-networks?u=76281980&t=187)** they're all trying to independently have some separation of the space. Now, if in some way we can take a combination of these lines, then we can achieve more accurate separation. For example, the southeast of this curve is more red and the northwest of this curve is more blue. This is the approach that neural networks take. These two types of non-linear models, decision trees and neural networks, allow us to model complex data and get results that we would not be able to achieve with simple [[Linear Regression]] or classification models.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Decision Trees]] (5), [[Neural Networks]] (4), [[Linear Regression]] (1)
> **Cross-References:** in the last (2), as we saw (1), later in (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 6. Do It Right

[↑ Back to Table of Contents](#table-of-contents)

#### [Know your objective, know your data, and listen to the data](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=0)** - [Instructor] By some estimates only about 25% of companies in the United States have successfully implemented AI in some parts of their business. This is a relatively low percentage in comparison to the promise that the technology holds and an indication that it is hard to get AI right when thinking about how to do AI right, it is again, helpful to bring up the three core pillars of AI, the objective, the data and the [[Algorithms]], and it is important for a practitioner to get all of them right. Defining the right objective relates to defining what we want the AI model to accomplish. Going back to the classification example of job applications, the goal is to notify a member about a relevant job, and we are trying to accomplish that by predicting whether the member will apply for the job or not in our training data then. Apply or no apply becomes a label. Note that the model has no understanding of what a job application means. It just uses that label and in the given data try to maximize the separation of the space, but this actually means something to the people that apply to jobs, so it's important to keep in mind the objective your model is trying to accomplish having the right data. Next, we discussed earlier that having good amount of quality data is important for models. The models learn from the data and will explicitly follow the garbage in garbage out phenomenon. If your data is low quality, this will have an impact
>
> **[1:35](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=95)** on both the bias and variance of your model but also it has an impact on the decisions made from that model. As you think about data, it is also important to collect data that is representative for your use case. One well-known statistic is that in the US the fatality rate for women in car accidents is higher than the same for men. The reason is that the data used for testing car safety depends mostly on dummies that represent the average US male. A data that is not representative can result in bias in your AI model. Next about algorithms, we have talked about a few different types of machine learning models in this course, and it's important to pick the right kind of model for the purpose you're trying to achieve. Considering the bias and variance trade-offs is an important part of this decision process. Now, getting all of these steps right is very difficult and I strongly advise you to take an iterative approach for each pillar. Start with an objective and try and quickly learn what is working and what are the gaps and improve the objective to get closer to your business goal. Similarly, start with some data and a simple model. Depending on the result explore other relevant and quality data that you might obtain that will help your cause. As you get more data, explore other more complex models as well. A successful AI application often relies heavily on the virtuous, iterative cycle of better understanding of objective, better data and better algorithms.
>
> **[3:12](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/know-your-objective-know-your-data-and-listen-to-the-data?u=76281980&t=192)** By getting all three right, there's a high chance that you will unlock tremendous value for the problem you are trying to solve.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (3)
> **Cross-References:** we discussed (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing with AI](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/linkedin-ai-academy-ai-100-1-demystifying-ai/continuing-with-ai?u=76281980&t=0)** - Congratulations, you have reached the end of this course. As you can imagine, this is just the beginning of your journey into understanding AI. Now that you understand what happens behind the scenes I would encourage you to think about how AI can help in your profession. What are some of the possibilities in your own work that might be improved by adding AI tools and techniques? Also, check out some of these other courses in this series in [[LinkedIn]] Learning. We talk about some state-of-the-art AI technologies and how our engineers apply these tools to create the best experience for our members at LinkedIn. I am Shovi Kosh. Thank you so much for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2)
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