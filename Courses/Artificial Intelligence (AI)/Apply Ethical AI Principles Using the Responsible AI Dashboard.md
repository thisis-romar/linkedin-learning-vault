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
  - '[Foundational AI Skills for Azure Administration](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20AI%20Skills%20for%20Azure%20Administration.md)'
prev_courses:
  - '[Azure AI Services Essential Training](Azure%20AI%20Services%20Essential%20Training.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Apply%20Ethical%20AI%20Principles%20Using%20the%20Responsible%20AI%20Dashboard.md)

![Apply Ethical AI Principles Using the Responsible AI Dashboard](https://media.licdn.com/dms/image/v2/D560DAQFEFjtfzTZzug/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701470647846?e=2147483647&amp;v=beta&amp;t=INW3W59nm879LOsGUlG0l9imJ3EBn3aCXmtOcDr5nfc)

# Apply Ethical AI Principles Using the Responsible AI Dashboard

> If you’re creating machine learning models and want to embrace responsible AI principles, this course with instructor Rodrigo Diaz Concha takes you through the Responsible AI dashboard that can be used in web applications and in the Azure cloud. Rodrigo first details the framework of the six guiding principles Microsoft considers key to responsible AI: fairness, reliability and safety, privacy and

> [LinkedIn Learning](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard) | 35m | Beginner | 726K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Responsible AI dashboard](#responsible-ai-dashboard)
  - [What you should know](#what-you-should-know)
- [**1. Foundations of Responsible AI**](#1-foundations-of-responsible-ai) (5 videos)
  - [What is responsible AI?](#what-is-responsible-ai)
  - [Microsoft responsible AI principles](#microsoft-responsible-ai-principles)
  - [Tools for responsible AI](#tools-for-responsible-ai)
  - [What is the responsible AI dashboard?](#what-is-the-responsible-ai-dashboard)
  - [Ways to use the responsible AI dashboard](#ways-to-use-the-responsible-ai-dashboard)
- [**2. Using the Responsible AI Dashboard**](#2-using-the-responsible-ai-dashboard) (8 videos)
  - [Creating the responsible AI dashboard](#creating-the-responsible-ai-dashboard)
  - [Error analysis component](#error-analysis-component)
  - [Model overview and performance analysis component](#model-overview-and-performance-analysis-component)
  - [Data analysis component](#data-analysis-component)
  - [Feature importances component](#feature-importances-component)
  - [Counterfactuals component](#counterfactuals-component)
  - [Causal analysis component](#causal-analysis-component)
  - [Using the responsible AI dashboard in Azure ML Studio](#using-the-responsible-ai-dashboard-in-azure-ml-studio)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Responsible AI dashboard](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/responsible-ai-dashboard?u=76281980&t=0)** - [Rodrigo] Want to embrace [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) principles for your machine learning practice? The responsible AI dashboard consolidates existing tools for machine learning interpretability, error and counterfactual analysis, among others, enabling comprehensive model assessments and informed decision making. I'll show you the essential steps to implement the responsible AI dashboard quickly. I'm Rodrigo Diaz Concha, a [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) Regional Director in Microsoft and MVP. Over the last few years, I've helped companies across diverse industries implement ML and AI strategies. Your learning journey is about to start. Let's jump right in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2)
> **Env Vars:** mvp (1)
> **Speakers:** - [rodrigo] (1)

#### [What you should know](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this training course, there are some knowledge prerequisites that you should have. First and foremost, this is not a machine learning course. You should already have at least the basic knowledge about what machine learning is and what are some of its essential concepts. In this course, I'm not going to write code from scratch but use some machine learning Jupyter Notebooks from the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) toolbox repository. That said, you should already know how to open and run Jupyter Notebooks. Jupyter is an open source technology that allows you to create and share documents that contain code, equations, visualizations, and even documentation. Again, this is not a programming course. However, I'm going to show you different prebuilt examples implemented in the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) programming language, so you should at least be comfortable reading and understanding basic Python code. Luckily, Python syntax is quite easy to grasp, and it's an excellent choice as a first programming language for non-tech people. The Responsible AI toolbox is being crafted by [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) as an open source project in [GitHub](../../Skills/Software%20Development/GitHub.md). Because of this, you should know how to clone a GitHub repo in your local machine or the cloud. You can use the Responsible AI dashboard and its tools whenever you like. In this course, I'm going to show you how to execute and create the dashboard components in both your local machine and [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md). If you want to follow the Azure samples,
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-you-should-know?u=76281980&t=96)** you should have at least basic knowledge of the Azure Portal. Of course, you need an Azure account and subscription to deploy the Azure Machine Learning workspace.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Tools:** jupyter (3), github (2), azure portal (1)
> **CLI Commands:** python (3)
> **Exercise Files:** github repo (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. Foundations of Responsible AI

[↑ Back to Table of Contents](#table-of-contents)

#### [What is responsible AI?](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=0)** - [Narrator] [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) has revolutionized the way we function in our day-to-day lives. Its progress has attracted global attention, but with the excitement comes a real worry about its ethical usage. To address this concern, businesses are giving precedence to [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) tactics, guaranteeing that their approaches are not only innovative, but also ethical. Responsible AI is the approach to defining, creating, operating and using artificial intelligence in such a way that is ethical, transparent, and beneficial to humanity. This is not an easy endeavor, though. The complexity arises from the multitude of individuals involved in the machine learning lifecycle and the plethora of disjointed tools available. This kind of scenario leads to cumbersome, manual, and time-consuming procedures. It's crucial that responsible AI isn't treated as an afterthought. Rather, its principles should be deeply embedded throughout the entire machine learning lifecycle to ensure ethical and transparent outcomes. In today's world, responsible AI is not a luxury, but a must-have for every organization. Now, more than ever, it's paramount for us to unite, bringing diverse voices and perspectives, ensuring a future where AI doesn't merely exist, but thrives, benefiting every person
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-responsible-ai?u=76281980&t=96)** and the very foundation of our society.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (4), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (2)
> **Speakers:** - [narrator] (1)

#### [Microsoft responsible AI principles](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/microsoft-responsible-ai-principles?u=76281980&t=0)** - [Instructor] [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) has defined six principles to ensure that AI technologies are developed and deployed responsibly. Let's describe each one. Fairness emphasizes that AI should act without bias, providing equitable opportunities and resources to everyone, regardless of their background or characteristics. Reliability and safety ensure that AI systems operate consistently and protect users and the environment from potential harm. [Privacy](../../Skills/Data%20Science/Privacy.md) emphasizes the rights of individuals, and the proper handling of their data, while security focuses on defending AI systems and data from potential threats and breaches. Inclusiveness ensures that AI technologies are designed and used to empower everyone, and don't reinforce biases or exclude certain groups. Transparency emphasizes the importance of being open and clear about how AI systems work, why they make their decisions, and the principles guiding their development and use. And finally, [Accountability](../../Skills/Data%20Science/Accountability.md) refers to assigning responsibility for AI systems' outcomes, behaviors, and impacts. If you want to learn more about [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) and the responsible AI principles in Microsoft, you can visit [microsoft.com/ai/responsible-ai](https://microsoft.com/ai/responsible-ai).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Privacy](../../Skills/Data%20Science/Privacy.md) (1), [Accountability](../../Skills/Data%20Science/Accountability.md) (1)
> **CLI Commands:** make (1)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Definitions:** refers to (1)
> **Speakers:** - [instructor] (1)

#### [Tools for responsible AI](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/tools-for-responsible-ai?u=76281980&t=0)** - [Presenter] Data scientists often mix and match different tools to get a full picture of their models and data. Some of the tools are the following. Error analysis for identifying and understanding errors. Fairlearn helps us identify fairness in our data. For example, which groups of people might face more negative effects from an AI system and how. InterpretML for machine learning models explanation. DiCE for counterfactual explanations. EconML for using machine learning to figure out different outcomes from data without doing an experiment. And finally, DoWhy for [Causal Inference](../../Skills/Software%20Development/Causal%20Inference.md). This is not a complete list of [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) tools. Still, it's clear to see how such a variety could lead to some confusion and overlap. That's precisely why [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) created the Responsible AI dashboard. Join me in the next video to learn more about it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Causal Inference](../../Skills/Software%20Development/Causal%20Inference.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Analogies:** picture (1), for example (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [presenter] (1)

#### [What is the responsible AI dashboard?](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/what-is-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] Having tons of different tools for different purposes sounds like a great idea, but in practical terms, there are many challenges in this scenario. For example, if a data scientist finds a fairness problem using one tool, they have to switch to another completely different tool to understand and analyze the cause in the data or model before they can fix it. The [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) Dashboard helps mitigate the fragmentation of disconnected tools that data scientists have to use. The Responsible AI Dashboard is a single pane of glass, enabling you to easily flow through different stages of model debugging and [Decision-Making](../../Skills/Data%20Science/Decision-Making.md). The Responsible AI Dashboard and all the tools are part of the Responsible AI Toolbox. This toolbox is a suite of tools. providing a collection of model and data exploration and assessment user interfaces and libraries that enable a better understanding of [artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) systems. If you want to learn more about the Responsible AI Toolbox and all its tools, including the Responsible AI Dashboard, you can visit aka.ms/rai-toolbox.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (6), [Decision-Making](../../Skills/Data%20Science/Decision-Making.md) (1), [Artificial intelligence](../../Topics/Artificial%20Intelligence%20(AI).md) (1)
> **Definitions:** is a  (2)
> **UI Navigation:** switch to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Ways to use the responsible AI dashboard](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/ways-to-use-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] Before we advance deeper into the material, it's essential to understand that there are two primary methods to use the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) dashboard. The first one is integrating [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) modules into your solutions, and the second one is using [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Machine Learning Studio. If you're comfortable with coding, the first method allows you to embed the dashboard directly within your own applications by using specific Python modules. This is actually the technique that I'm going to use most of the time in this course. On the other hand, if you prefer a more user-friendly graphical interface, Azure Machine Learning Studio offers a robust environment where you can interact with the Responsible AI dashboard. In this other case, you should be comfortable with Azure and of course Azure Machine Learning Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (4), [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** python (2)
> **Speakers:** - [instructor] (1)


### 2. Using the Responsible AI Dashboard

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating the responsible AI dashboard](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=0)** - [Instructor] You can think of the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) Dashboard as a buffet, where you take what you truly need in order to support your objectives. In this video, I'll show you how you can use the open source flavor of the Responsible AI Dashboard. However, the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) machine learning flavor is practically the same. In other words, you're going to see some [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code in this video. Okay, so the first thing that we need to do is we need to import the Responsible AI Insights and the Responsible AI Dashboard classes. And then we need to load and split the dataset, and of course, this is for training the model. And we need to initialize the Responsible AI Insights object. After we do that, we're ready to add the desired components to the dashboard. This is the moment where you can add, say the explainer or the counterfactuals tools. Next, we need to calculate the values. And finally, after the values have been calculated, they can be displayed by loading the Responsible AI Dashboard. Okay, let's open up Visual Studio Code where I already opened a Jupyter Notebook from the Responsible AI Toolbox. Here we are in Visual Studio Code, and as you can see, this instance is connected to my [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) 22 distro. And of course, I've already cloned the [GitHub](../../Skills/Software%20Development/GitHub.md) repo,
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=96)** and I selected Python 3.10.12 as a kernel. So here you can see that inside the notebooks, responsibleaidashboard, tabular folder, we can find a number of examples that use the Responsible AI Dashboard. For instance, I am showing you this housing classification model that predicts if a house is selling for more than the median price or not. You can also see that this Jupyter Notebook has full documentation of what's going on here. So this is a place where the dataset is being created for the test and the train. And this is using the LightGBM classifier as a model. And we can see that this is a place where the Responsible AI Dashboard and the Responsible AI Insights classes are being imported. And here you can see that this is initializing the RAIInsights object. Here you can pass a model, both the full and test datasets, and the target feature as a string. You can also pass the feature [Metadata](../../Skills/Web%20Development/Metadata.md) for the train test and the class labels in the training set. This is the moment that I was talking about, where you can add the components to the dashboard. For instance, this is adding the explainer
>
> **[3:11](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/creating-the-responsible-ai-dashboard?u=76281980&t=191)** and then the error analysis tool. And finally, the counterfactuals tool. And then this is for calculating the values relevant to the added components. And finally, after the values have been calculated, we need to show them by using this line of code. This is displaying the dashboard, and we can click on this URL. Of course, I already executed this Jupyter Notebook to expedite this process. So we're ready to click on this URL, and we can see that the dashboard was created successfully.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (10), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Ubuntu](../../Skills/Web%20Development/Ubuntu.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Tools:** jupyter (3), visual studio (2), github (1)
> **CLI Commands:** python (2), find (1)
> **Definitions:** is a  (2), in other words (1)
> **Env Vars:** url (2)
> **Versions:** python 3 (1), 10.12 (1)
> **UI Navigation:** click on (2)
> **Analogies:** for instance (2)

#### [Error analysis component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=0)** - [Instructor] Think of the different [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) dashboard components as a group of building blocks you can use to know better how your AI systems work. One of the main tools in this group is the Error Analysis dashboard. With the Error Analysis dashboard, you can identify subsets of data with more mistakes compared to the average and see how these mistakes are spread out. And also dive deep visually into the data and models to discover why these error occur. For example, using error analysis, you might find out that your AI system could be more accurate for certain groups of people or demographics. With the dashboard, you can identify why these errors are happening, look at specific cases, see which features matter most, and even play a what if game to get to the heart of the issue. It's like being a detective for your AI. Okay, let's open up the browser to see how this dashboard looks. Here we are in this responsible AI dashboard that we created before. The first thing that you can notice is that the error analysis component is the first one in the dashboard. This component has two main views: a tree map and a heat map. The tree map has different nodes that represent a cohort. You can think of a cohort as a subset of data. Here you want to look for the nodes
>
> **[1:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=93)** or cohorts with stronger red colors. That's the way the component is telling us that the nodes have the highest error rates. As you can see on the left side, we have the error coverage and the error rate related to the selected node. Speaking of which, this is the entire dataset, this root node. Actually it's the old data cohort that was created automatically for me. Okay, so let's select a node. Say that I want this, since I know this has the highest error rate. This cohort has 26 instances, and 12 out of 26 are incorrect. This is an error rate of 46%. You can easily save this cohort if you need further analysis later, if you click on the Save as a new cohort button. And give it a name, say Cohort or MyCohort, or something, and let's click on Save. That's ready for me to use later on. Okay, so now let's navigate to the heat map. Let's shift, and here you need to select intersection of features to display in the heat map. Say that I want the first feature to be YearBuilt. And the other one, say, GarageArea. So you can see this heat map here.
>
> **[3:07](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/error-analysis-component?u=76281980&t=187)** You can select one or many heat map cells and create new cohorts. For instance, let's click on this, three and four cells. So I can see the filters included in those cells. And I know those four cells have 55% of error rate. And I can also save this as a new cohort. Let's do that, MyCohort2, and then save. And finally, let me show you how you can see the entire cohorts that you created. So you can do that if you click on the Cohort settings button. And here you can see all the different cohorts that have been created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2)
> **CLI Commands:** node (3), find (1)
> **UI Navigation:** click on (3), navigate to (1)
> **Analogies:** for example (1), it's like (1), for instance (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Model overview and performance analysis component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=0)** - [Narrator] If you want to see how well your model is performing, look at the predictions it's making and how it measures up to performance and standards, you can use the Model Overview component. With the Dataset Cohorts tab, you can peek into how your model's doing by comparing its results across various ready-to-use or freshly-made groups of data. With the Feature Cohorts tab, you can compare how the model performs for specific details like different genders or income levels. Consider it a way to ensure your AI treats everyone equally. Okay, let's open up the browser to see how this component works. As I mentioned before, the goal of this model is to predict if a house is selling for more or less than the median price. As potential buyers or sellers, we want to ensure we're getting a fair deal. Nobody wants to overpay for a property or sell their precious home for less than it's worth. Let's see what's going on here. The model overview component is the second one in the dashboard. It displays data based on the selected cohort. So let's scroll up again and create a couple of cohorts. This time, I want to investigate these two other nodes since they belong to the higher error coverage branch of the tree. You can identify that by looking at the thickness of the branches. So this cohort is telling me that houses that were remodeled before 1980 have a higher rate.
>
> **[1:37](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/model-overview-and-performance-analysis-component?u=76281980&t=97)** So let's save this as a new cohort. Let's name it before1980, and click on Save. And similarly, I want to click on this other node. This time, this is telling me that houses that were remodeled after 1980 have a lower error rate. So there's a difference there that I think is worth investigating. So let's save this as a new cohort. And after 1980, let's click on Save, and let's scroll down to the Model Overview component so we can see that there's a dramatic difference between those two cohorts in terms of the false negative rates. You can see that before 1980, it has a higher false negative rate. You can actually go here to the Metrics Visualizations tab, and choose False Negative rate, so we can see this dramatic difference between those two. Okay, let's go back to the [Probability](../../Skills/Data%20Science/Probability.md) Distribution tab, because this is telling me that properties that were remodeled before 1980 have a higher probability of selling less than the median. It could be because of those false negative rate differences. Of course, I'm only scratching the surface here, but with the Model Overview component, I can continue analyzing the performance of the model in an easy way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (2)
> **UI Navigation:** click on (3), scroll up (1), scroll down (1)
> **CLI Commands:** node (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Data analysis component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=0)** - [Narrator] With the data analysis component, you can dive into your data in an easy way. This tool can help you see if certain groups don't have enough representation or if their data looks a bit off compared to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md). You can explore the dataset simply by choosing features like age, location, et cetera, and see how they play out in your data. And you can also see how one cohort stands against another or even against the average of all the data you have. Okay, let's go back to the dashboard. Let's scroll down a little bit so we can find the data analysis component that is below the model overview component. You can see that data analysis has a couple of tabs. The first one is for displaying a table view, and the second one is for displaying a chart view. Here you can change the X and Y-axis for displaying the results you need. For instance, let's change this to true Y, and let's change this to count so we can see the differences between the two cohorts. Let's select before 1980 so we can see that in this case, there are more in the less than median group, and if we select after 1980, is the other way around. You can also select individual data points to display the data you need. For example, let's change this to predicted Y so we can see how the individual data points
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/data-analysis-component?u=76281980&t=96)** are being distributed in this kind of chart type.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Analogies:** for instance (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Feature importances component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=0)** - [Instructor] With the Feature Importance component, you can identify the most influential or significant features that impact the model's predictions. The following are the most essential traits of this component. You can see the top features that make a difference in prediction for specific cohorts. You can compare two cohorts directly to determine whether they're influenced by the same or distinct factors. It helps you understand if it's making decisions for the right reasons, and not just random patterns or potentially biased factors. By comparing how a model reacts to a specific group versus the overall average, we can identify if it's behaving oddly or unfairly to that group. This is crucial, especially if the group is based on sensitive details like age, gender, or race. Let's go back to the dashboard. Let's scroll down the page to find the Feature Importances component. In this component, we can find two tabs, the Aggregate feature importance, and the Individual feature importance. In the first one, we can find this chart that is showing us the global explanation of the model. Here we can see that the overall quality of the house, the above ground living area, total basement square footage, and the year it was built, are the most important features globally.
>
> **[1:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=93)** In other words, those are the most influential or significant features. You can also use this control to show more features if you want. However, let's keep it that way, with top four features. Now, let's add a dependence plot so we can visualize how values of the selected feature are impacting the model prediction. So, let's click on this, and let's change this to say less than median. So, this is suggesting that houses with better quality are less likely to sell for below the average price. Now, let's navigate to the Individual feature importance tab so we can see that there are some correct predictions and of course those incorrect predictions as well. So, you can see that those are the different houses that model predicted correctly, and here we can see a lot of different errors. For example, in this particular house, the model is giving me a wrong prediction, since it predicted that the house will sell for less than the median price. But actually, it's the other way around, and it's the same for all of those houses that we have here in this group. Let's select another house, say this one, and another one, so we can scroll down and we can see this local explanation to display the top important features
>
> **[3:08](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/feature-importances-component?u=76281980&t=188)** that are impacting this prediction.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** scroll down (2), click on (1), navigate to (1)
> **Cross-References:** go back to (1)
> **Definitions:** in other words (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Counterfactuals component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=0)** - [Instructor] The counterfactuals component allows users to play around with what-if predictions. They can start with some data, and then make a guess, and then see what might happen if things were flipped or different. Sometimes, the ready-to-use counterfactuals might not answer your specific questions. In this case, you can create your own. This feature is quite convenient when trying to figure out the impact of multiple features. Perhaps, one significant change can influence the prediction. Or maybe, a mix of minor tweaks is needed. Okay, let's open up the browser. In this component, we can see all the datapoints in this chart. We can see the [Probability](../../Skills/Data%20Science/Probability.md) of houses being sold for less than the median price. Of course, some houses have a higher probability than others. Let's say that we want to improve one of those houses chances to be sold for more than the median price. Or in other words, we want to decrease the chances of that house to be sold for less than the median price. So for instance, let's select this one, which is index 198. And here, we need to inspect the different what-if options that were created by the counterfactuals component. So we can click on the Create what-if counterfactual. Here, we can see the counterfactual analysis for this house.
>
> **[1:34](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/counterfactuals-component?u=76281980&t=94)** It's showing different values that we can move in order to reduce the probability of being sold for less than the median price. Of course, there are some things that are immutable. Some features cannot be changed in the real world. Take the lot area, for instance. You can't just magically expand the property's lot size, can you? But we can do some things. For example, we can improve the overall quality of a house. This is telling me that if we increased the overall quality from five to seven, then we're flipping the projection around. Let's click on said value, and let's save this as a new datapoint. You can see that this is the original datapoint, and now this is the copy. With the new value, we dramatically improved the chances of this house. Now, this house will be less likely to be sold for less than the median price.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Probability](../../Skills/Data%20Science/Probability.md) (3)
> **Analogies:** for instance (2), for example (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** make (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### [Causal analysis component](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=0)** - [Narrator] The causal analysis component helps users make better decisions by understanding their data. Let's say you're looking to sell a house and want to know what modifications can increase its price. It gives you practical advice based on real cause and effect relationships. Instead of guessing based on trends or coincidences, you get solid recommendations on what might make a difference. It's worth noting that this component requires just a data set as its input and not the full machine learning model. It has three main elements. The aggregate causal effects is like a handy what-if tool for real-life choices. In our example, it shows how making certain changes like adding more fireplaces could affect average house prices. Treatment policies are like a roadmap, guiding homeowners or real estate developers on the best changes to make to their properties to see the most significant jump in house prices. And finally, with individual causal what-if, users can get tailor-made advice for a specific house using individual causal effects. In addition, they can play around and see how different changes might affect their house's price. Okay, let's open up Visual Studio Code to run another Jupyter Notebook that uses the causal analysis component.
>
> **[1:36](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=96)** In this other demo, I'm using the plan house improvements using causal analysis notebook. So I already executed this to expedite this process. As you can see, I selected [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.10.12 as a kernel and let me scroll down a little bit so I can show you the place where the causal analysis component is being added. So here is the place where this component is added to the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) dashboard. And speaking of which, this Responsible AI insights object is being initialized just with the datasets and it's not passing the model to this object. Okay, so now we're ready to open up the browser and we're ready to explain this. Let's scroll down to find the causal analysis component. You can see that it has three tabs, aggregate causal effects, individual causal what-if, and the treatment policy. Here in the aggregate causal effects, we can see the data. This data demonstrates how a tiny change such as a slight increase in a feature can influence a property's value by thousands of dollars. Here's another example. Let's navigate to the individual causal what-if tab, and let's select how, say, that I want this property and we can select the treatment, say, overall quality.
>
> **[3:15](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/causal-analysis-component?u=76281980&t=195)** So we can play with this what-if tool. Say that we increase just a little bit the quality of this house and you can see the new outcome here in this causal analysis component.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (3), python (1), find (1)
> **UI Navigation:** scroll down (2), navigate to (1), select the (1)
> **Versions:** python 3 (1), 10.12 (1)
> **Tools:** visual studio (1), jupyter (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Using the responsible AI dashboard in Azure ML Studio](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=0)** - [Instructor] I have great news for you. All the knowledge you've acquired thus far is relevant when using the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) dashboard within [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Machine Learning Studio. In fact, the only difference is that you don't directly use the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) modules. Instead, you use Azure Machine Learning Studio components. Before I show you the responsible AI dashboard running in Azure, let me summarize the required steps. First, you need to create a workspace. This is a machine learning studio workspace. I already did this beforehand to expedite this process. So let's navigate to the workspace, and you can see that it has many different options. However, we're interested in notebooks. Let's navigate to notebooks, and here you can add the files that you want to use in the workspace. In other words, here's the place where you can upload the Jupyter Notebook that you want to execute. You can upload the file directly or you can clone a repo. That's actually the technique that I used. I cloned the responsible AI accelerator repo. That repo includes some interesting demos for running the responsible AI dashboard in Azure. If you want to do the same, you can open the terminal and clone the [GitHub](../../Skills/Software%20Development/GitHub.md) repo by executing the [Git](../../Skills/Software%20Development/Git.md) clone command. Here you can see that it has different folders,
>
> **[1:33](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/using-the-responsible-ai-dashboard-in-azure-ml-studio?u=76281980&t=93)** and each folder has one or many Jupyter Notebooks, in which case I already executed. So let's navigate to pipelines. In here, let's open up this successful pipeline that has the responsible AI dashboard components. As you can see here, this is for initializing the dashboard, and this other one is for adding the explanation component, counterfactuals component, and the error analysis component and so on. Those are actually similar to the code that we saw in Visual Studio Code. As you can see, Azure Machine Learning Studio includes this nice graphical user interface for creating ML pipeline instead of using a programming language, such as Python directly. So this is nice and I already executed this. I'm ready to show you the responsible AI dashboard. As you can see, there's no difference at all. We have the error analysis component, model overview, data analysis, feature, importances, and so on and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (6), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Git](../../Skills/Software%20Development/Git.md) (1)
> **Tools:** jupyter (2), terminal (1), github (1), visual studio (1)
> **UI Navigation:** navigate to (3), open the (1)
> **CLI Commands:** python (2), git (1)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** similar to (1), such as (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/apply-ethical-ai-principles-using-the-responsible-ai-dashboard/next-steps?u=76281980&t=0)** - [Narrator] Congratulations, you've completed this course. By now, you should understand what the [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) dashboard is and how you can use it in your own projects. There are many paths you can take from here. First, I suggest you continue learning about [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) in AI, which is why the Responsible AI dashboard was created in the first place. Then, if you want to hone your technical skills, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) is one of the most important programming languages you should have in your tool belt. Finally, you can continue learning about [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) for AI, of course, and as a cloud platform for your projects. Remember that you can find fantastic training courses here in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning library. I hope you've enjoyed this course as much as I've enjoyed creating it for you. If you do, please let me know. Thanks for watching, and I'll see you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Responsible AI](../../Skills/Artificial%20Intelligence%20(AI)/Responsible%20AI.md) (2), [Ethics](../../Skills/Artificial%20Intelligence%20(AI)/Ethics.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [Rodrigo Díaz Concha](../../Instructors/Artificial%20Intelligence%20(AI)/Rodrigo%20D%C3%ADaz%20Concha.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/microsoft/ResponsibleAIAccelerator)

## Skills Covered

- Responsible AI
- Artificial Intelligence (AI)
- Microsoft Azure

## Path Context

### In [Foundational AI Skills for Azure Administration](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20AI%20Skills%20for%20Azure%20Administration.md)
← [Azure AI Services Essential Training](Azure%20AI%20Services%20Essential%20Training.md) | **6 of 6**

## Appears In

- [Foundational AI Skills for Azure Administration](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Foundational%20AI%20Skills%20for%20Azure%20Administration.md)

## Related Courses

_Courses sharing skills:_

- [Azure AI for Developers- Content Safety and Responsible AI](Azure%20AI%20for%20Developers-%20Content%20Safety%20and%20Responsible%20AI.md) — Artificial Intelligence (AI), Responsible AI, Microsoft Azure
- [Implement and Evaluate Cloud AI Solutions- Foundations of Responsible AI](Implement%20and%20Evaluate%20Cloud%20AI%20Solutions-%20Foundations%20of%20Responsible%20AI.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI- Global Risks, Governance, and Human Oversight](Responsible%20AI-%20Global%20Risks%2C%20Governance%2C%20and%20Human%20Oversight.md) — Artificial Intelligence (AI), Responsible AI
- [Understanding Ai S Global Impact Governance Equity And Responsibility](Understanding%20Ai%20S%20Global%20Impact%20Governance%20Equity%20And%20Responsibility.md) — Artificial Intelligence (AI), Responsible AI
- [Responsible AI to the Rescue](Responsible%20AI%20to%20the%20Rescue.md) — Artificial Intelligence (AI), Responsible AI

---

[↑ Back to top](#)