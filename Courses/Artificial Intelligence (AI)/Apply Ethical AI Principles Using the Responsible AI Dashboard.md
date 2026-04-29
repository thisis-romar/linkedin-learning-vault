---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: apply-ethical-ai-principles-using-the-responsible-ai-dashboard
url: "https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard"
duration_minutes: 35
duration: 35m
level: Beginner
updated: 12/5/2023
learners: 726358
skills:
  - Responsible AI
  - Artificial Intelligence (AI)
  - Microsoft Azure
exercise_files: true
github: "https://github.com/microsoft/ResponsibleAIAccelerator"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFEFjtfzTZzug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701470647846?e=2147483647&amp;v=beta&amp;t=INW3W59nm879LOsGUlG0l9imJ3EBn3aCXmtOcDr5nfc"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Foundational AI Skills for Azure Administration]]'
prev_courses:
  - '[[Azure AI Services Essential Training]]'
path_nav: '[{"path":"Foundational AI Skills for Azure Administration","position":6,"total":6,"prev":"Azure AI Services Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - skill/responsible-ai
  - skill/artificial-intelligence-ai
  - skill/microsoft-azure
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Apply%20Ethical%20AI%20Principles%20Using%20the%20Responsible%20AI%20Dashboard.md)

![Apply Ethical AI Principles Using the Responsible AI Dashboard](https://media.licdn.com/dms/image/v2/D560DAQFEFjtfzTZzug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701470647846?e=2147483647&amp;v=beta&amp;t=INW3W59nm879LOsGUlG0l9imJ3EBn3aCXmtOcDr5nfc)

# Apply Ethical AI Principles Using the Responsible AI Dashboard

> If you’re creating machine learning models and want to embrace responsible AI principles, this course with instructor Rodrigo Diaz Concha takes you through the Responsible AI dashboard that can be used in web applications and in the Azure cloud. Rodrigo first details the framework of the six guiding principles Microsoft considers key to responsible AI: fairness, reliability and safety, privacy and

> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard) | 35m | Beginner | 726K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Foundations of Responsible AI]]** (5 videos)
- **[[#3. 2. Using the Responsible AI Dashboard]]** (8 videos)
- **[[#4. Conclusion]]** (1 videos)

### 1. Introduction

#### Responsible AI dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=0)** - [Rodrigo] Want to embrace responsible AI principles for your machine learning practice?
>
> **[0:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=5)** The responsible AI dashboard consolidates existing tools for machine learning interpretability, error and counterfactual analysis, among others, enabling comprehensive model assessments and informed decision making.
>
> **[0:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=19)** I'll show you the essential steps to implement the responsible AI dashboard quickly.
>
> **[0:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=24)** I'm Rodrigo Diaz Concha, a Microsoft Regional Director in Microsoft and MVP.
>
> **[0:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=30)** Over the last few years, I've helped companies across diverse industries implement ML and AI strategies.
>
> **[0:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=38)** Your learning journey is about to start.
>
> **[0:40](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=40)** Let's jump right in.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** mvp (1)
> **Speakers:** - [rodrigo] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this training course, there are some knowledge prerequisites that you should have.
>
> **[0:06](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=6)** First and foremost, this is not a machine learning course.
>
> **[0:09](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=9)** You should already have at least the basic knowledge about what machine learning is and what are some of its essential concepts.
>
> **[0:17](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=17)** In this course, I'm not going to write code from scratch but use some machine learning Jupyter Notebooks from the Responsible AI toolbox repository.
>
> **[0:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=26)** That said, you should already know how to open and run Jupyter Notebooks.
>
> **[0:32](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=32)** Jupyter is an open source technology that allows you to create and share documents that contain code, equations, visualizations, and even documentation.
>
> **[0:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=42)** Again, this is not a programming course.
>
> **[0:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=45)** However, I'm going to show you different prebuilt examples implemented in the Python programming language, so you should at least be comfortable reading and understanding basic Python code.
>
> **[0:57](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=57)** Luckily, Python syntax is quite easy to grasp, and it's an excellent choice as a first programming language for non-tech people.
>
> **[1:06](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=66)** The Responsible AI toolbox is being crafted by Microsoft as an open source project in GitHub.
>
> **[1:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=73)** Because of this, you should know how to clone a GitHub repo in your local machine or the cloud.
>
> **[1:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=81)** You can use the Responsible AI dashboard and its tools whenever you like.
>
> **[1:25](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=85)** In this course, I'm going to show you how to execute and create the dashboard components in both your local machine and Azure.
>
> **[1:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=94)** If you want to follow the Azure samples, you should have at least basic knowledge of the Azure Portal.
>
> **[1:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=101)** Of course, you need an Azure account and subscription to deploy the Azure Machine Learning workspace.

> [!info]- Semantic Content
>
> **Tools:** jupyter (3), github (2), azure portal (1)
> **CLI Commands:** python (3)
> **Code Keywords:** this, (1)
> **Exercise Files:** github repo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Foundations of Responsible AI

#### What is responsible AI?
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=0)** - [Narrator] Artificial intelligence has revolutionized the way we function in our day-to-day lives.
>
> **[0:06](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=6)** Its progress has attracted global attention, but with the excitement comes a real worry about its ethical usage.
>
> **[0:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=13)** To address this concern, businesses are giving precedence to responsible AI tactics, guaranteeing that their approaches are not only innovative, but also ethical.
>
> **[0:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=24)** Responsible AI is the approach to defining, creating, operating and using artificial intelligence in such a way that is ethical, transparent, and beneficial to humanity.
>
> **[0:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=38)** This is not an easy endeavor, though.
>
> **[0:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=41)** The complexity arises from the multitude of individuals involved in the machine learning lifecycle and the plethora of disjointed tools available.
>
> **[0:51](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=51)** This kind of scenario leads to cumbersome, manual, and time-consuming procedures.
>
> **[0:58](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=58)** It's crucial that responsible AI isn't treated as an afterthought.
>
> **[1:03](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=63)** Rather, its principles should be deeply embedded throughout the entire machine learning lifecycle to ensure ethical and transparent outcomes.
>
> **[1:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=73)** In today's world, responsible AI is not a luxury, but a must-have for every organization.
>
> **[1:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=81)** Now, more than ever, it's paramount for us to unite, bringing diverse voices and perspectives, ensuring a future where AI doesn't merely exist, but thrives, benefiting every person and the very foundation of our society.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1)
> **Speakers:** - [narrator] (1)

#### Microsoft responsible AI principles
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=0)** - [Instructor] Microsoft has defined six principles to ensure that AI technologies are developed and deployed responsibly.
>
> **[0:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=8)** Let's describe each one.
>
> **[0:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=11)** Fairness emphasizes that AI should act without bias, providing equitable opportunities and resources to everyone, regardless of their background or characteristics.
>
> **[0:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=23)** Reliability and safety ensure that AI systems operate consistently and protect users and the environment from potential harm.
>
> **[0:32](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=32)** Privacy emphasizes the rights of individuals, and the proper handling of their data, while security focuses on defending AI systems and data from potential threats and breaches.
>
> **[0:46](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=46)** Inclusiveness ensures that AI technologies are designed and used to empower everyone, and don't reinforce biases or exclude certain groups.
>
> **[0:58](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=58)** Transparency emphasizes the importance of being open and clear about how AI systems work, why they make their decisions, and the principles guiding their development and use.
>
> **[1:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=73)** And finally, accountability refers to assigning responsibility for AI systems' outcomes, behaviors, and impacts.
>
> **[1:22](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=82)** If you want to learn more about responsible AI and the responsible AI principles in Microsoft, you can visit [microsoft.com/ai/responsible-ai](https://microsoft.com/ai/responsible-ai).

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **CLI Commands:** make (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### Tools for responsible AI
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=0)** - [Presenter] Data scientists often mix and match different tools to get a full picture of their models and data.
>
> **[0:06](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=6)** Some of the tools are the following.
>
> **[0:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=8)** Error analysis for identifying and understanding errors.
>
> **[0:12](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=12)** Fairlearn helps us identify fairness in our data.
>
> **[0:16](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=16)** For example, which groups of people might face more negative effects from an AI system and how.
>
> **[0:22](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=22)** InterpretML for machine learning models explanation.
>
> **[0:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=26)** DiCE for counterfactual explanations.
>
> **[0:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=30)** EconML for using machine learning to figure out different outcomes from data without doing an experiment.
>
> **[0:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=38)** And finally, DoWhy for causal inference.
>
> **[0:43](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=43)** This is not a complete list of responsible AI tools.
>
> **[0:47](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=47)** Still, it's clear to see how such a variety could lead to some confusion and overlap.
>
> **[0:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=55)** That's precisely why Microsoft created the Responsible AI dashboard.
>
> **[1:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=60)** Join me in the next video to learn more about it.

> [!info]- Semantic Content
>
> **Analogies:** picture (1), for example (1)
> **Code Keywords:** finally, (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### What is the responsible AI dashboard?
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] Having tons of different tools for different purposes sounds like a great idea, but in practical terms, there are many challenges in this scenario.
>
> **[0:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=11)** For example, if a data scientist finds a fairness problem using one tool, they have to switch to another completely different tool to understand and analyze the cause in the data or model before they can fix it.
>
> **[0:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=26)** The Responsible AI Dashboard helps mitigate the fragmentation of disconnected tools that data scientists have to use.
>
> **[0:35](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=35)** The Responsible AI Dashboard is a single pane of glass, enabling you to easily flow through different stages of model debugging and decision-making.
>
> **[0:46](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=46)** The Responsible AI Dashboard and all the tools are part of the Responsible AI Toolbox.
>
> **[0:54](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=54)** This toolbox is a suite of tools.
>
> **[0:57](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=57)** providing a collection of model and data exploration and assessment user interfaces and libraries that enable a better understanding of artificial intelligence systems.
>
> **[1:10](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=70)** If you want to learn more about the Responsible AI Toolbox and all its tools, including the Responsible AI Dashboard, you can visit aka.ms/rai-toolbox.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Code Keywords:** switch (1)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Ways to use the responsible AI dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] Before we advance deeper into the material, it's essential to understand that there are two primary methods to use the Responsible AI dashboard.
>
> **[0:09](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=9)** The first one is integrating Python modules into your solutions, and the second one is using Azure Machine Learning Studio.
>
> **[0:18](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=18)** If you're comfortable with coding, the first method allows you to embed the dashboard directly within your own applications by using specific Python modules.
>
> **[0:29](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=29)** This is actually the technique that I'm going to use most of the time in this course.
>
> **[0:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=34)** On the other hand, if you prefer a more user-friendly graphical interface, Azure Machine Learning Studio offers a robust environment where you can interact with the Responsible AI dashboard.
>
> **[0:48](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=48)** In this other case, you should be comfortable with Azure and of course Azure Machine Learning Studio.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2)
> **Code Keywords:** interface (1), case, (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Using the Responsible AI Dashboard

#### Creating the responsible AI dashboard
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] You can think of the Responsible AI Dashboard as a buffet, where you take what you truly need in order to support your objectives.
>
> **[0:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=8)** In this video, I'll show you how you can use the open source flavor of the Responsible AI Dashboard.
>
> **[0:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=15)** However, the Azure machine learning flavor is practically the same.
>
> **[0:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=21)** In other words, you're going to see some Python code in this video.
>
> **[0:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=26)** Okay, so the first thing that we need to do is we need to import the Responsible AI Insights and the Responsible AI Dashboard classes.
>
> **[0:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=36)** And then we need to load and split the dataset, and of course, this is for training the model.
>
> **[0:44](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=44)** And we need to initialize the Responsible AI Insights object.
>
> **[0:49](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=49)** After we do that, we're ready to add the desired components to the dashboard.
>
> **[0:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=55)** This is the moment where you can add, say the explainer or the counterfactuals tools.
>
> **[1:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=62)** Next, we need to calculate the values.
>
> **[1:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=65)** And finally, after the values have been calculated, they can be displayed by loading the Responsible AI Dashboard.
>
> **[1:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=75)** Okay, let's open up Visual Studio Code where I already opened a Jupyter Notebook from the Responsible AI Toolbox.
>
> **[1:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=84)** Here we are in Visual Studio Code, and as you can see, this instance is connected to my Ubuntu 22 distro.
>
> **[1:32](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=92)** And of course, I've already cloned the GitHub repo, and I selected Python 3.10.12 as a kernel.
>
> **[1:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=101)** So here you can see that inside the notebooks, responsibleaidashboard, tabular folder, we can find a number of examples that use the Responsible AI Dashboard.
>
> **[1:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=115)** For instance, I am showing you this housing classification model that predicts if a house is selling for more than the median price or not.
>
> **[2:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=125)** You can also see that this Jupyter Notebook has full documentation of what's going on here.
>
> **[2:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=133)** So this is a place where the dataset is being created for the test and the train.
>
> **[2:20](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=140)** And this is using the LightGBM classifier as a model.
>
> **[2:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=146)** And we can see that this is a place where the Responsible AI Dashboard and the Responsible AI Insights classes are being imported.
>
> **[2:37](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=157)** And here you can see that this is initializing the RAIInsights object.
>
> **[2:44](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=164)** Here you can pass a model, both the full and test datasets, and the target feature as a string.
>
> **[2:53](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=173)** You can also pass the feature metadata for the train test and the class labels in the training set.
>
> **[3:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=180)** This is the moment that I was talking about, where you can add the components to the dashboard.
>
> **[3:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=188)** For instance, this is adding the explainer and then the error analysis tool.
>
> **[3:14](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=194)** And finally, the counterfactuals tool.
>
> **[3:18](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=198)** And then this is for calculating the values relevant to the added components.
>
> **[3:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=204)** And finally, after the values have been calculated, we need to show them by using this line of code.
>
> **[3:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=214)** This is displaying the dashboard, and we can click on this URL.
>
> **[3:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=218)** Of course, I already executed this Jupyter Notebook to expedite this process.
>
> **[3:44](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=224)** So we're ready to click on this URL, and we can see that the dashboard was created successfully.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), pass (2), let (1)
> **Tools:** jupyter (3), visual studio (2), github (1)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** url (2)
> **Versions:** python 3 (1), 10.12 (1)
> **UI Navigation:** click on (2)
> **Analogies:** for instance (2)

#### Error analysis component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=0)** - [Instructor] Think of the different responsible AI dashboard components as a group of building blocks you can use to know better how your AI systems work.
>
> **[0:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=11)** One of the main tools in this group is the Error Analysis dashboard.
>
> **[0:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=15)** With the Error Analysis dashboard, you can identify subsets of data with more mistakes compared to the average and see how these mistakes are spread out.
>
> **[0:28](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=28)** And also dive deep visually into the data and models to discover why these error occur.
>
> **[0:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=34)** For example, using error analysis, you might find out that your AI system could be more accurate for certain groups of people or demographics.
>
> **[0:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=45)** With the dashboard, you can identify why these errors are happening, look at specific cases, see which features matter most, and even play a what if game to get to the heart of the issue.
>
> **[0:59](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=59)** It's like being a detective for your AI.
>
> **[1:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=62)** Okay, let's open up the browser to see how this dashboard looks.
>
> **[1:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=67)** Here we are in this responsible AI dashboard that we created before.
>
> **[1:12](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=72)** The first thing that you can notice is that the error analysis component is the first one in the dashboard.
>
> **[1:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=79)** This component has two main views: a tree map and a heat map.
>
> **[1:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=84)** The tree map has different nodes that represent a cohort.
>
> **[1:27](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=87)** You can think of a cohort as a subset of data.
>
> **[1:31](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=91)** Here you want to look for the nodes or cohorts with stronger red colors.
>
> **[1:37](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=97)** That's the way the component is telling us that the nodes have the highest error rates.
>
> **[1:43](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=103)** As you can see on the left side, we have the error coverage and the error rate related to the selected node.
>
> **[1:51](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=111)** Speaking of which, this is the entire dataset, this root node.
>
> **[1:56](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=116)** Actually it's the old data cohort that was created automatically for me.
>
> **[2:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=122)** Okay, so let's select a node.
>
> **[2:04](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=124)** Say that I want this, since I know this has the highest error rate.
>
> **[2:10](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=130)** This cohort has 26 instances, and 12 out of 26 are incorrect.
>
> **[2:18](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=138)** This is an error rate of 46%.
>
> **[2:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=141)** You can easily save this cohort if you need further analysis later, if you click on the Save as a new cohort button.
>
> **[2:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=150)** And give it a name, say Cohort or MyCohort, or something, and let's click on Save.
>
> **[2:39](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=159)** That's ready for me to use later on.
>
> **[2:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=162)** Okay, so now let's navigate to the heat map.
>
> **[2:46](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=166)** Let's shift, and here you need to select intersection of features to display in the heat map.
>
> **[2:53](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=173)** Say that I want the first feature to be YearBuilt.
>
> **[2:59](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=179)** And the other one, say, GarageArea.
>
> **[3:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=185)** So you can see this heat map here.
>
> **[3:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=187)** You can select one or many heat map cells and create new cohorts.
>
> **[3:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=193)** For instance, let's click on this, three and four cells.
>
> **[3:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=199)** So I can see the filters included in those cells.
>
> **[3:24](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=204)** And I know those four cells have 55% of error rate.
>
> **[3:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=210)** And I can also save this as a new cohort.
>
> **[3:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=214)** Let's do that, MyCohort2, and then save.
>
> **[3:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=221)** And finally, let me show you how you can see the entire cohorts that you created.
>
> **[3:47](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=227)** So you can do that if you click on the Cohort settings button.
>
> **[3:51](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=231)** And here you can see all the different cohorts that have been created.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (2), finally, (1)
> **CLI Commands:** node (3), find (1)
> **UI Navigation:** click on (3), navigate to (1)
> **Analogies:** for example (1), it's like (1), for instance (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Model overview and performance analysis component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=0)** - [Narrator] If you want to see how well your model is performing, look at the predictions it's making and how it measures up to performance and standards, you can use the Model Overview component.
>
> **[0:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=11)** With the Dataset Cohorts tab, you can peek into how your model's doing by comparing its results across various ready-to-use or freshly-made groups of data.
>
> **[0:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=23)** With the Feature Cohorts tab, you can compare how the model performs for specific details like different genders or income levels.
>
> **[0:32](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=32)** Consider it a way to ensure your AI treats everyone equally.
>
> **[0:37](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=37)** Okay, let's open up the browser to see how this component works.
>
> **[0:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=42)** As I mentioned before, the goal of this model is to predict if a house is selling for more or less than the median price.
>
> **[0:50](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=50)** As potential buyers or sellers, we want to ensure we're getting a fair deal.
>
> **[0:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=55)** Nobody wants to overpay for a property or sell their precious home for less than it's worth.
>
> **[1:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=62)** Let's see what's going on here.
>
> **[1:04](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=64)** The model overview component is the second one in the dashboard.
>
> **[1:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=68)** It displays data based on the selected cohort.
>
> **[1:12](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=72)** So let's scroll up again and create a couple of cohorts.
>
> **[1:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=75)** This time, I want to investigate these two other nodes since they belong to the higher error coverage branch of the tree.
>
> **[1:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=83)** You can identify that by looking at the thickness of the branches.
>
> **[1:27](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=87)** So this cohort is telling me that houses that were remodeled before 1980 have a higher rate.
>
> **[1:37](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=97)** So let's save this as a new cohort.
>
> **[1:40](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=100)** Let's name it before1980, and click on Save.
>
> **[1:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=105)** And similarly, I want to click on this other node.
>
> **[1:49](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=109)** This time, this is telling me that houses that were remodeled after 1980 have a lower error rate.
>
> **[1:57](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=117)** So there's a difference there that I think is worth investigating.
>
> **[2:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=122)** So let's save this as a new cohort.
>
> **[2:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=125)** And after 1980, let's click on Save, and let's scroll down to the Model Overview component so we can see that there's a dramatic difference between those two cohorts in terms of the false negative rates.
>
> **[2:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=143)** You can see that before 1980, it has a higher false negative rate.
>
> **[2:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=150)** You can actually go here to the Metrics Visualizations tab, and choose False Negative rate, so we can see this dramatic difference between those two.
>
> **[2:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=162)** Okay, let's go back to the Probability Distribution tab, because this is telling me that properties that were remodeled before 1980 have a higher probability of selling less than the median.
>
> **[2:56](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=176)** It could be because of those false negative rate differences.
>
> **[3:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=180)** Of course, I'm only scratching the surface here, but with the Model Overview component, I can continue analyzing the performance of the model in an easy way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (1)
> **UI Navigation:** click on (3), scroll up (1), scroll down (1)
> **CLI Commands:** node (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Data analysis component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=0)** - [Narrator] With the data analysis component, you can dive into your data in an easy way.
>
> **[0:05](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=5)** This tool can help you see if certain groups don't have enough representation or if their data looks a bit off compared to the rest.
>
> **[0:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=13)** You can explore the dataset simply by choosing features like age, location, et cetera, and see how they play out in your data.
>
> **[0:22](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=22)** And you can also see how one cohort stands against another or even against the average of all the data you have.
>
> **[0:29](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=29)** Okay, let's go back to the dashboard.
>
> **[0:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=33)** Let's scroll down a little bit so we can find the data analysis component that is below the model overview component.
>
> **[0:40](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=40)** You can see that data analysis has a couple of tabs.
>
> **[0:44](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=44)** The first one is for displaying a table view, and the second one is for displaying a chart view.
>
> **[0:50](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=50)** Here you can change the X and Y-axis for displaying the results you need.
>
> **[0:56](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=56)** For instance, let's change this to true Y, and let's change this to count so we can see the differences between the two cohorts.
>
> **[1:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=67)** Let's select before 1980 so we can see that in this case, there are more in the less than median group, and if we select after 1980, is the other way around.
>
> **[1:22](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=82)** You can also select individual data points to display the data you need.
>
> **[1:28](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=88)** For example, let's change this to predicted Y so we can see how the individual data points are being distributed in this kind of chart type.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), case, (1), type. (1)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### Feature importances component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=0)** - [Instructor] With the Feature Importance component, you can identify the most influential or significant features that impact the model's predictions.
>
> **[0:09](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=9)** The following are the most essential traits of this component.
>
> **[0:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=13)** You can see the top features that make a difference in prediction for specific cohorts.
>
> **[0:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=19)** You can compare two cohorts directly to determine whether they're influenced by the same or distinct factors.
>
> **[0:28](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=28)** It helps you understand if it's making decisions for the right reasons, and not just random patterns or potentially biased factors.
>
> **[0:39](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=39)** By comparing how a model reacts to a specific group versus the overall average, we can identify if it's behaving oddly or unfairly to that group.
>
> **[0:50](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=50)** This is crucial, especially if the group is based on sensitive details like age, gender, or race.
>
> **[0:59](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=59)** Let's go back to the dashboard.
>
> **[1:02](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=62)** Let's scroll down the page to find the Feature Importances component.
>
> **[1:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=67)** In this component, we can find two tabs, the Aggregate feature importance, and the Individual feature importance.
>
> **[1:14](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=74)** In the first one, we can find this chart that is showing us the global explanation of the model.
>
> **[1:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=81)** Here we can see that the overall quality of the house, the above ground living area, total basement square footage, and the year it was built, are the most important features globally.
>
> **[1:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=93)** In other words, those are the most influential or significant features.
>
> **[1:39](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=99)** You can also use this control to show more features if you want.
>
> **[1:44](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=104)** However, let's keep it that way, with top four features.
>
> **[1:49](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=109)** Now, let's add a dependence plot so we can visualize how values of the selected feature are impacting the model prediction.
>
> **[1:58](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=118)** So, let's click on this, and let's change this to say less than median.
>
> **[2:03](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=123)** So, this is suggesting that houses with better quality are less likely to sell for below the average price.
>
> **[2:12](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=132)** Now, let's navigate to the Individual feature importance tab so we can see that there are some correct predictions and of course those incorrect predictions as well.
>
> **[2:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=143)** So, you can see that those are the different houses that model predicted correctly, and here we can see a lot of different errors.
>
> **[2:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=154)** For example, in this particular house, the model is giving me a wrong prediction, since it predicted that the house will sell for less than the median price.
>
> **[2:46](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=166)** But actually, it's the other way around, and it's the same for all of those houses that we have here in this group.
>
> **[2:56](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=176)** Let's select another house, say this one, and another one, so we can scroll down and we can see this local explanation to display the top important features that are impacting this prediction.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this, (1)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** scroll down (2), click on (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Counterfactuals component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=0)** - [Instructor] The counterfactuals component allows users to play around with what-if predictions.
>
> **[0:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=7)** They can start with some data, and then make a guess, and then see what might happen if things were flipped or different.
>
> **[0:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=15)** Sometimes, the ready-to-use counterfactuals might not answer your specific questions.
>
> **[0:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=21)** In this case, you can create your own.
>
> **[0:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=23)** This feature is quite convenient when trying to figure out the impact of multiple features.
>
> **[0:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=30)** Perhaps, one significant change can influence the prediction.
>
> **[0:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=34)** Or maybe, a mix of minor tweaks is needed.
>
> **[0:39](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=39)** Okay, let's open up the browser.
>
> **[0:43](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=43)** In this component, we can see all the datapoints in this chart.
>
> **[0:47](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=47)** We can see the probability of houses being sold for less than the median price.
>
> **[0:52](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=52)** Of course, some houses have a higher probability than others.
>
> **[0:58](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=58)** Let's say that we want to improve one of those houses chances to be sold for more than the median price.
>
> **[1:04](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=64)** Or in other words, we want to decrease the chances of that house to be sold for less than the median price.
>
> **[1:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=73)** So for instance, let's select this one, which is index 198.
>
> **[1:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=79)** And here, we need to inspect the different what-if options that were created by the counterfactuals component.
>
> **[1:27](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=87)** So we can click on the Create what-if counterfactual.
>
> **[1:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=90)** Here, we can see the counterfactual analysis for this house.
>
> **[1:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=94)** It's showing different values that we can move in order to reduce the probability of being sold for less than the median price.
>
> **[1:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=102)** Of course, there are some things that are immutable.
>
> **[1:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=105)** Some features cannot be changed in the real world.
>
> **[1:50](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=110)** Take the lot area, for instance.
>
> **[1:52](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=112)** You can't just magically expand the property's lot size, can you?
>
> **[1:56](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=116)** But we can do some things.
>
> **[2:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=120)** For example, we can improve the overall quality of a house.
>
> **[2:04](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=124)** This is telling me that if we increased the overall quality from five to seven, then we're flipping the projection around.
>
> **[2:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=135)** Let's click on said value, and let's save this as a new datapoint.
>
> **[2:20](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=140)** You can see that this is the original datapoint, and now this is the copy.
>
> **[2:25](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=145)** With the new value, we dramatically improved the chances of this house.
>
> **[2:31](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=151)** Now, this house will be less likely to be sold for less than the median price.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (1)
> **Analogies:** for instance (2), for example (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Causal analysis component
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=0)** - [Narrator] The causal analysis component helps users make better decisions by understanding their data.
>
> **[0:06](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=6)** Let's say you're looking to sell a house and want to know what modifications can increase its price.
>
> **[0:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=13)** It gives you practical advice based on real cause and effect relationships.
>
> **[0:18](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=18)** Instead of guessing based on trends or coincidences, you get solid recommendations on what might make a difference.
>
> **[0:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=26)** It's worth noting that this component requires just a data set as its input and not the full machine learning model.
>
> **[0:35](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=35)** It has three main elements.
>
> **[0:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=38)** The aggregate causal effects is like a handy what-if tool for real-life choices.
>
> **[0:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=45)** In our example, it shows how making certain changes like adding more fireplaces could affect average house prices.
>
> **[0:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=55)** Treatment policies are like a roadmap, guiding homeowners or real estate developers on the best changes to make to their properties to see the most significant jump in house prices.
>
> **[1:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=67)** And finally, with individual causal what-if, users can get tailor-made advice for a specific house using individual causal effects.
>
> **[1:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=79)** In addition, they can play around and see how different changes might affect their house's price.
>
> **[1:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=86)** Okay, let's open up Visual Studio Code to run another Jupyter Notebook that uses the causal analysis component.
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=96)** In this other demo, I'm using the plan house improvements using causal analysis notebook.
>
> **[1:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=102)** So I already executed this to expedite this process.
>
> **[1:47](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=107)** As you can see, I selected Python 3.10.12 as a kernel and let me scroll down a little bit so I can show you the place where the causal analysis component is being added.
>
> **[2:01](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=121)** So here is the place where this component is added to the Responsible AI dashboard.
>
> **[2:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=127)** And speaking of which, this Responsible AI insights object is being initialized just with the datasets and it's not passing the model to this object.
>
> **[2:20](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=140)** Okay, so now we're ready to open up the browser and we're ready to explain this.
>
> **[2:26](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=146)** Let's scroll down to find the causal analysis component.
>
> **[2:31](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=151)** You can see that it has three tabs, aggregate causal effects, individual causal what-if, and the treatment policy.
>
> **[2:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=161)** Here in the aggregate causal effects, we can see the data.
>
> **[2:45](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=165)** This data demonstrates how a tiny change such as a slight increase in a feature can influence a property's value by thousands of dollars.
>
> **[2:57](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=177)** Here's another example.
>
> **[2:59](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=179)** Let's navigate to the individual causal what-if tab, and let's select how, say, that I want this property and we can select the treatment, say, overall quality.
>
> **[3:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=195)** So we can play with this what-if tool.
>
> **[3:19](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=199)** Say that we increase just a little bit the quality of this house and you can see the new outcome here in this causal analysis component.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), if, (2), finally, (1), this. (1)
> **CLI Commands:** make (3), python (1), find (1)
> **UI Navigation:** scroll down (2), navigate to (1), select the (1)
> **Versions:** python 3 (1), 10.12 (1)
> **Tools:** visual studio (1), jupyter (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Using the responsible AI dashboard in Azure ML Studio
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=0)** - [Instructor] I have great news for you.
>
> **[0:03](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=3)** All the knowledge you've acquired thus far is relevant when using the responsible AI dashboard within Azure Machine Learning Studio.
>
> **[0:12](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=12)** In fact, the only difference is that you don't directly use the Python modules.
>
> **[0:17](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=17)** Instead, you use Azure Machine Learning Studio components.
>
> **[0:22](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=22)** Before I show you the responsible AI dashboard running in Azure, let me summarize the required steps.
>
> **[0:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=30)** First, you need to create a workspace.
>
> **[0:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=33)** This is a machine learning studio workspace.
>
> **[0:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=36)** I already did this beforehand to expedite this process.
>
> **[0:40](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=40)** So let's navigate to the workspace, and you can see that it has many different options.
>
> **[0:46](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=46)** However, we're interested in notebooks.
>
> **[0:49](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=49)** Let's navigate to notebooks, and here you can add the files that you want to use in the workspace.
>
> **[0:57](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=57)** In other words, here's the place where you can upload the Jupyter Notebook that you want to execute.
>
> **[1:03](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=63)** You can upload the file directly or you can clone a repo.
>
> **[1:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=68)** That's actually the technique that I used.
>
> **[1:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=71)** I cloned the responsible AI accelerator repo.
>
> **[1:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=75)** That repo includes some interesting demos for running the responsible AI dashboard in Azure.
>
> **[1:21](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=81)** If you want to do the same, you can open the terminal and clone the GitHub repo by executing the Git clone command.
>
> **[1:30](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=90)** Here you can see that it has different folders, and each folder has one or many Jupyter Notebooks, in which case I already executed.
>
> **[1:40](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=100)** So let's navigate to pipelines.
>
> **[1:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=102)** In here, let's open up this successful pipeline that has the responsible AI dashboard components.
>
> **[1:53](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=113)** As you can see here, this is for initializing the dashboard, and this other one is for adding the explanation component, counterfactuals component, and the error analysis component and so on.
>
> **[2:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=128)** Those are actually similar to the code that we saw in Visual Studio Code.
>
> **[2:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=135)** As you can see, Azure Machine Learning Studio includes this nice graphical user interface for creating ML pipeline instead of using a programming language, such as Python directly.
>
> **[2:28](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=148)** So this is nice and I already executed this.
>
> **[2:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=153)** I'm ready to show you the responsible AI dashboard.
>
> **[2:38](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=158)** As you can see, there's no difference at all.
>
> **[2:42](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=162)** We have the error analysis component, model overview, data analysis, feature, importances, and so on and so on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), interface (1), this. (1)
> **Tools:** jupyter (2), terminal (1), github (1), visual studio (1)
> **UI Navigation:** navigate to (3), open the (1)
> **CLI Commands:** python (2), git (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** similar to (1), such as (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=0)** - [Narrator] Congratulations, you've completed this course.
>
> **[0:03](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=3)** By now, you should understand what the Responsible AI dashboard is and how you can use it in your own projects.
>
> **[0:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=11)** There are many paths you can take from here.
>
> **[0:13](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=13)** First, I suggest you continue learning about ethics in AI, which is why the Responsible AI dashboard was created in the first place.
>
> **[0:23](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=23)** Then, if you want to hone your technical skills, Python is one of the most important programming languages you should have in your tool belt.
>
> **[0:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=33)** Finally, you can continue learning about Azure for AI, of course, and as a cloud platform for your projects.
>
> **[0:41](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=41)** Remember that you can find fantastic training courses here in the LinkedIn Learning library.
>
> **[0:48](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=48)** I hope you've enjoyed this course as much as I've enjoyed creating it for you.
>
> **[0:53](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=53)** If you do, please let me know.
>
> **[0:55](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=55)** Thanks for watching, and I'll see you next time.

> [!info]- Semantic Content
>
> **Code Keywords:** continue (2), finally, (1), let (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Rodrigo Díaz Concha]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/microsoft/ResponsibleAIAccelerator)

## Skills Covered

- Responsible AI
- Artificial Intelligence (AI)
- Microsoft Azure

## Path Context

### In [[Foundational AI Skills for Azure Administration]]
← [[Azure AI Services Essential Training]] | **6 of 6**

## Appears In

- [[Foundational AI Skills for Azure Administration]]

## Related Courses

_Courses sharing skills:_

- [[Azure AI for Developers- Content Safety and Responsible AI]] — Artificial Intelligence (AI), Responsible AI, Microsoft Azure
- [[Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI]] — Artificial Intelligence (AI), Responsible AI
- [[Responsible AI- Global Risks, Governance, and Human Oversight]] — Artificial Intelligence (AI), Responsible AI
- [[Understanding Ai S Global Impact Governance Equity And Responsibility]] — Artificial Intelligence (AI), Responsible AI
- [[Responsible AI to the Rescue]] — Artificial Intelligence (AI), Responsible AI

---

[↑ Back to top](#)