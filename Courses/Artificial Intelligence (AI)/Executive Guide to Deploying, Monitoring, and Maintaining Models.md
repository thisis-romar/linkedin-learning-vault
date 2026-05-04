---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: executive-guide-to-deploying-monitoring-and-maintaining-models
url: "https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models"
duration_minutes: 57
duration: 57m
level: Beginner
updated: 4/8/2024
learners: 3859
skills:
  - MLOps
  - Artificial Intelligence (AI)
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGQFcDu06-Gkg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712343465209?e=2147483647&amp;v=beta&amp;t=MUZpGpJLUEOiw6rC31MCHGUnaZdHIHp-I721RiEBH-U"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Masterpath in Analytics Leadership for Executives](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Masterpath%20in%20Analytics%20Leadership%20for%20Executives.md)'
prev_courses:
  - '[Data Analytics for Business Professionals](../Data%20Science/Data%20Analytics%20for%20Business%20Professionals.md)'
path_nav: '[{"path":"Masterpath in Analytics Leadership for Executives","position":8,"total":8,"prev":"Data Analytics for Business Professionals","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/mlops
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Executive%20Guide%20to%20Deploying%2C%20Monitoring%2C%20and%20Maintaining%20Models.md)

![Executive Guide to Deploying, Monitoring, and Maintaining Models](https://media.licdn.com/dms/image/v2/D560DAQGQFcDu06-Gkg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712343465209?e=2147483647&amp;v=beta&amp;t=MUZpGpJLUEOiw6rC31MCHGUnaZdHIHp-I721RiEBH-U)

# Executive Guide to Deploying, Monitoring, and Maintaining Models

> With recent developments in the AI space, workflows for deploying, monitoring, and maintaining ML models have changed. In this course, Keith McCormick—an independent data miner, trainer, speaker, and author—breaks down the phases of an ML project and guides you through model evaluation, scoring, deployment, and model maintenance. Learn about data engineering and MLOps in the ML lifecycle, as well 

> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models) | 57m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. The Phases of a Machine Learning Project**](#1-the-phases-of-a-machine-learning-project) (4 videos)
  - [Data and supervised machine learning](#data-and-supervised-machine-learning)
  - [Data engineering and MLOps in the ML lifecycle](#data-engineering-and-mlops-in-the-ml-lifecycle)
  - [Why ML projects fail to be deployed](#why-ml-projects-fail-to-be-deployed)
  - [The basics of ML modeling](#the-basics-of-ml-modeling)
- [**2. Model Evaluation**](#2-model-evaluation) (2 videos)
  - [The business evaluation phase](#the-business-evaluation-phase)
  - [A deployment checklist](#a-deployment-checklist)
- [**3. Scoring**](#3-scoring) (3 videos)
  - [Scoring traditional ML models](#scoring-traditional-ml-models)
  - [Scoring a "black box" model](#scoring-a-black-box-model)
  - [Scoring an ensemble](#scoring-an-ensemble)
- [**4. Deployment**](#4-deployment) (3 videos)
  - [Batch vs. real-time scoring](#batch-vs-real-time-scoring)
  - [Data prep and scoring](#data-prep-and-scoring)
  - [Combining batch and real-time scoring](#combining-batch-and-real-time-scoring)
- [**5. Monitoring and Maintenance**](#5-monitoring-and-maintenance) (2 videos)
  - [What is model monitoring?](#what-is-model-monitoring)
  - [How often should you rebuild?](#how-often-should-you-rebuild)

### 1. The Phases of a Machine Learning Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Data and supervised machine learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=0)** - Since you've joined me for a course in [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) model deployment, then you probably either already have a predictive analytics model or you know how to obtain one. The model could be formula-based, like linear or [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md). Rule-based like [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md). Or perhaps you have a so-called black box model. Whichever you have, you need to use it to score new records and to push that information out into the organization where it can be used to drive day-to-day decisions. The process of deployment is automating this so that you can make a large volume of predictions efficiently. Therefore, your criterion for choosing a predictive model has to include more than simply model accuracy. Other factors include model transparency, the ease of migrating your solution to a production platform, and speed of scoring. This course focuses on the phases of the machine learning lifecycle after the model is built. Adopting the terminology from the widely used Cross Industry Standard Process for [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) or [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md), the phases we'll discuss are evaluation and deployment. Some critical tasks listed by CRISP-DM within those phases that we'll discuss include model scoring, monitoring, and maintenance.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=95)** Most [Data Science](../../Topics/Data%20Science.md) education emphasizes modeling. Modeling is important without question, but a failure to discuss deployment is almost certainly a contributing factor in the failure to deploy the majority of models that organizations attempt to build. Even though many of these models are sincere efforts to address important problems. In this course, let's attempt to correct that shortcoming and focus less on modeling, and instead focus more on deployment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (2), [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md) (2), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1), [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (1), [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) (1)
> **Env Vars:** crisp (2)
> **CLI Commands:** make (1)
> **Speakers:** - since (1)

#### [Data engineering and MLOps in the ML lifecycle](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=1)** - Now let's talk about two roles that are rapidly becoming specialties with their own career paths and their own development life cycles, [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md), and ML Ops. Of the two, there's a bit more consensus about what data engineering is. It's the preparation of enterprise data so that a downstream consumer of that data, like a data scientist building a model, has high quality data to work with. In their excellent and influential book, Joe Reis and Matt Housley define it this way. "The development, implementation, and maintenance of systems and processes that take in raw data and produce high quality, consistent information that supports downstream use cases such as analysis and machine learning." So note the data scientists building a model like the ones we discuss in this course are just one of the types of data professionals that are consumers of the work that the data engineers do. I think there's consensus on two issues, that the data engineers work is upstream and the work is different enough that it's a distinct career path, but the reality on the ground in most organizations is that there's a fuzzy boundary between data engineering and [Data Science](../../Topics/Data%20Science.md) because this boundary is relatively new. In an O'Reilly report on the subject,
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=93)** "ML Ops: Operationalizing Data Science", the authors define ML Ops as the process of operationalizing data science by getting ML models into production. In this sense, it's potentially a handoff from data scientist to the ML Ops team when a model has completed initial deployment and enters monitoring and maintenance mode. It's my own preferred scenario, but others like the thought leader, Noah Gift, who has numerous courses in the [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) library, defines it as the process of automating machine learning using [DevOps](../../Topics/DevOps.md) methodologies. This implies that we're automating the entire lifecycle, which potentially makes the boundaries a bit more fuzzy. If you're going to automate the entire lifecycle, you're probably exploring technologies like AutoML. I dedicate an entire course to helping you decide how to navigate the world of AutoML. Why are these two new roles important to us in this course? If your organization has data engineers, and many of them now do, you'll want the data science team to be collaborative and to build upon their work. Data Science teams tend to be the most demanding internal customers in terms of the volume of data, the granularity of the data, and custom requests. Also, once predictive scores are produced, they may have
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=191)** to travel in the reverse direction so that model predictions can be made available to enterprise systems. And if your organization has an ML Ops team, then you'll need to navigate the handoffs between data science and that team. I would place monitoring and maintenance under that team's responsibilities, for instance, but there's simply no consensus on that issue. There may even be some fuzzy boundaries between ML Ops and data engineering that some organizations have to navigate. What everyone agrees upon is that this is complicated work and the trend towards specialization is going to continue. We're all in this together as data professionals and we all want the models we've worked so hard to build to succeed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (6), [Data Engineering](../../Skills/Data%20Science/Data%20Engineering.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [DevOps](../../Topics/DevOps.md) (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### [Why ML projects fail to be deployed](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=1)** - Numerous surveys of data scientists from sources like Gartner, KDnuggets, and Rexer Analytics have consistently found that less than 20% of machine learning models are deployed even when the intention of the project was to produce a deployed model. These numbers haven't improved for decades. Often, when I first meet a potential client, they've already tried and failed. Here are some of the most common challenges I've observed. Spoiler alert, they are more often attributable to culture and readiness for organizational change than they are attributable to technical considerations. First, a failure of expectations. This rarely takes the form of the [Data Science](../../Topics/Data%20Science.md) team promising the world and failing. It typically takes the form of no expectations at all. Many teams are afraid to do any planning until after the model is built. It's caused by a rational but mistaken assumption that you can't anticipate the organizational impact until after the technical work is done. For decades, I've started projects with the assumption that technical challenges can be overcome. So I start the project with a simple question. Let's assume the model can be built. What is the desired impact on the business? How can it be measured? It's critical to identify success metrics
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=95)** and reduce them to writing for later use in the evaluation phase. The second reason is the failure to achieve sufficient ROI to justify deployment. This is also a failure to plan, but it takes a specific form. So what's the false assumption here? That it's impossible to estimate ROI until you know how accurate the model is. But if you fail to estimate it in advance, you can't compare potential projects and the assumption is just not true. I have an entire course dedicated to how to make these estimates step-by-step, but the basic idea is quite straightforward. You start by estimating the financial implications of the model being right and the model being wrong. Then you take into account how many model predictions you make a year, and you're on your way to making an estimate. You can use this estimate to compare multiple projects and commit only to those projects that will earn back more money than you spend on them. The third reason is organizational resistance. I've believed for years that it may be the most common reason that models don't get deployed. Deployed models are all about the efficient use of resources. They're essentially time management tools so that you are efficiently spending time with the right patients, the right inspections,
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=190)** and the right equipment repairs. But who is spending the time? It's not the data science team, it's the frontline workers, the client-facing team. They are spending the time. These teams can see their workload temporarily go up as the model identifies more actions to take. Everyone likes having their time well spent, so they may eventually be the model's biggest fans. But it can be disruptive if no one takes the time to understand their workflow and how it will be impacted by model deployment. Please, don't wait until the end of the project to involve them. Involve them early and seek to understand and anticipate the impact on them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Science](../../Topics/Data%20Science.md) (2)
> **CLI Commands:** make (2)
> **Env Vars:** roi (2)
> **Speakers:** - numerous (1)

#### [The basics of ML modeling](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=0)** - [Instructor] Okay, so [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) modeling is a huge topic, and this is not a course in modeling, but we have to do a very brief recap of what the modeling phase is all about to better understand how the topics in this course fall within the machine learning lifecycle. So since we are talking about supervised machine learning, we need a lot of past data that has a clearly defined end result, like folks paid for their loan or they defaulted. And then we also need a bunch of input variables. I'm showing only two here, but we need a lot of them. Typically on a project, I have hundreds of these that are considered. Then what we have to do is we have to feed that past data to a bunch of modeling [Algorithms](../../Skills/Software%20Development/Algorithms.md). I mentioned just four here, decision tree, support vector machine, [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md), and neural network. But there are dozens and dozens and dozens of them. So during the modeling phase, what we have to do is a series of algorithmic experiments. It truly is trial and error. So we're not only using a bunch of different algorithms, we're also doing a bunch of algorithmic settings. So for instance, support vector machine has this setting called C. So I'm showing here in the table that I might try three different values of C. Again, we're not going to get into the details in this course. So what have you learned
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=93)** when you emerge from the modeling phase? Well, you figure out which modeling algorithms with which settings, like the settings we were just talking about, and which of those many, many input variables are producing the best job. So you come out of the modeling phase with a winner, so to speak, a model that had the highest accuracy. But as I often discuss in these courses, including this one, it's not only about modeling accuracy, it's really about how well that model addresses the business problem. So you should be emerging from the modeling phase with more than one model, probably more like two or three that have different strengths and weaknesses. But nonetheless, you're trying to learn which algorithm, which settings, and which variables are getting the job done. Then you use that information in scoring for new loans now. These might be loans that haven't even closed yet, but they're working their way through the pipeline, and you can generate a predictive score and get a predicted end result. That's the goal, everybody, is to get here. So what we're focused on in this course is to take the information that's learned during the modeling phase and then move on to the later phases as efficiently as possible,
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=186)** generate those scores as speedily as possible, and also be efficient in how we work with our colleagues so that ultimately these scores will get generated and will get used and be valuable to the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Algorithms](../../Skills/Software%20Development/Algorithms.md) (3), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (1), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Model Evaluation

[↑ Back to Table of Contents](#table-of-contents)

#### [The business evaluation phase](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=1)** - [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md) describes the phase immediately after modeling the Evaluation phase in the following way. "Before proceeding to final deployment of the model, it is important to thoroughly evaluate it and review the steps executed to create it, to be certain that the model properly achieves the business objectives." It sounds pretty straightforward, doesn't it? But I think this is often where many folks get into trouble and endanger deployment. When a project begins, you have to translate your problem into a form that machine learning can help us with. In the Evaluation phase, and I like to call it the Business Evaluation phase, you have to translate it back. So here's the mistake that many folks make. They emerge from the Modeling phase having made a substantial number of models that could reasonably be considered for deployment, and they overemphasize technical criteria like model accuracy, sometimes choosing just a single model, the model that won, in terms of accuracy. As a data scientist and model builder, I always remind myself that the choice of the final model is not solely my decision. I share details with my internal customer or client like that the most accurate model is also the slowest to score, or that the most accurate model is often a very complex model that is difficult to explain.
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=97)** Now, at this stage, I should already know the project criteria. But I still have to involve colleagues because everyone would want the fastest model, and the most transparent model, and the most accurate model, all to be the same. And they never are the same. I have to navigate those trade-offs with the business side of the project. This is important to remember whether you are the one building the model or are representing the business side of the project. Also, there are other deployment considerations. How many predictor variables are there in the model? Models with more variables can have logistical costs. I remember being explicitly asked this by someone that we would probably now describe as an [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) engineer. He was asking me if I could drop a few variables without sacrificing too much accuracy. He was running preliminary tests and was estimating scoring at five milliseconds per record, but his goal was to get it down to three milliseconds per record. There are other activities that are firmly in the organizational and cultural realm that you have to conduct during this phase, like A/B testing and partial rollouts. In virtually every project, it will be a good idea to try the model in a test setting with one small team of sales reps, or one repair team,
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=191)** or a team of fraud investigators before you deploy the model to the entire organization. The final judge of success is not some fancy technical measure, like area under the curve, but rather, it's if the model actually works to solve the problem in your organizational setting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md) (1), [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** crisp (1)
> **Speakers:** - crisp (1)

#### [A deployment checklist](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=0)** - [Lecturer] One way to think through a deployment checklist after the evaluation phase but before the deployment phase is to consider the various teams that participate in the project. Let's start with the IT team as well as the data engineers and the [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) team. Their various responsibilities will differ a bit from organization to organization, but what do they need to know? There needs to be a substantive meeting where the provenance of the data is reviewed. They will have some familiarity with this already because they would've been involved at the very, very beginning, but there are at least three critical details that have evolved at this point and need to be revisited. First, this team needs to know which input variables out of the available pool of input variables were chosen by the model. Second, they'll need to see the formulas for any calculations that were performed on the original input variables. This is always an issue. Many data scientists refer to [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md), the kind of calculation at issue here as being one of the most important steps in the entire process, and the model will be expecting these calculated variables, so someone will have to prepare these calculations for production, and that's usually not the data scientist. This is an opportunity to recode those calculations for speed. Missing data handling is part of that discussion as well.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=95)** Third, the model is going to produce predictions and propensity scores. Where are those scores going to be routed? In many cases, those scores will be routed back into the systems that the data engineers maintain because they may get incorporated into reports and [Dashboards](../../Skills/Data%20Science/Dashboards.md). Now, the critical relationship with the frontline team. Before deployment, their management and some representatives of the team should be briefed on how deployment is going to be rolled out. Also, the results of a small-scale partial rollout during evaluation should be shared with the team. The most important thing they will want to know is how their job may be changed. Will there be an explicit and visible change? For instance, might a sales rep or call center rep see new information on their screen, or will the model's influence be less visible and behind the scenes? How should feedback from the frontline team be shared back to the [Data Science](../../Topics/Data%20Science.md) team? If nothing is proposed, it implies that feedback is not encouraged. The specific feedback that should be requested is what I sometimes call the volume of the model. If the frontline team suddenly experiences being very busy, the model might be too sensitive and might also be producing some false positives. For instance, a sales team might experience
>
> **[3:08](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=188)** getting more leads, but with a lower closing percentage. An issue like this should be anticipated, and it doesn't typically require a new model. It's simply adjusting the model's cut point. If the frontline team is warned that this might occur, it invites collaboration and lowers the stress that is natural with any organizational change. Finally, the internal customer or project sponsor as a representative of the business, whomever requested the project and whose business need is being addressed by the model. what do they need to know? Having done many of these briefings over the years, I'm going to suggest that this briefing need not be a comprehensive history lesson. It should start with fundamental questions. Recap, why did this particular model get chosen? What are its high level characteristics? How did it perform during trial deployment during the evaluation phase? And then finally, what are the responsibilities of all team members going forward along with a timeline? So it should be a forward thinking meeting with a brief review of decisions that were made during the evaluation phase. The nitty gritty details are better reserved for a separate meeting with the data team, and we've already discussed that. What the internal customer needs to know is who has which responsibility,
>
> **[4:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=282)** and when those tasks will be completed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [MLOps](../../Skills/Artificial%20Intelligence%20(AI)/MLOps.md) (1), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1), [Data Science](../../Topics/Data%20Science.md) (1)
> **Analogies:** for instance (2)
> **Definitions:** is an  (1)
> **Speakers:** - [lecturer] (1)


### 3. Scoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Scoring traditional ML models](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=0)** - [Instructor] Let's talk about scoring. In particular, we're focused on how to score new data with our models. There's a good reason why traditional machine learning methods have stood the test of time. They still work quite well and they tend to be highly scalable. Let's look at some of their features. One advantage of these more traditional techniques, like [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) let's say or [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md), is that they're highly transparent. They really tell you a story about the data, and they're fast. They're fast to build, and they're fast at scoring. Also, super important to us in this particular course, they're easy to migrate. They're still quite common, so please don't feel pressure to keep up with the fanciest, latest [Algorithms](../../Skills/Software%20Development/Algorithms.md) if a traditional machine learning model will fit the situation. These are wonderful advantages to have. Let's go a level deeper. So in the case of the statistical models, you're going to have algebra-like formulas with one coefficient per variable, and that helps you give the transparency that we were talking about. In the case of something like decision trees or any technique that generates rules, you're going to have essentially if/then statements with one rule per subgroup or segment. So if you picture the decision tree diagram itself, the subgroup here is a leaf node.
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=97)** So let's take a look at a specific example. This is the logistic regression example. Now, this is a little bit more complicated than it is in [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md), but it's helpful that you have that one coefficient per variable and that helps you reverse engineer what's going on here. So for instance, we have a coefficient for weight. We have another coefficient for premature labor, and we have a coefficient for hypertension. Three different variables in our risk model. Then also, finally, we have something that essentially is like the y-intercept and regression. It's a little bit different here, but that's what we have. What that is, is essentially a constant. So in the case of decision trees and other techniques that generate rules, we have something that's more like an if/then statement. But again, with information associated with each variable. Once more, we've got the mother's weight, hypertension, and age, and the various cutoffs associated with them. Now, when you go to deploy, don't forget that a technique like decision trees is also generating scores. So they're making a prediction, but there would also be a score that would reflect the amount of risk, like 70% or 80% and so on. In this case, this risk group is associated with a healthy weight baby. So in order to migrate this to another platform, you have to familiarize yourself
>
> **[3:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=192)** either with the algebraic-like formulas you get with logistic regression or the if/then like statements as you see here associated with decision trees. So looking at this, as you can see, it's very easy to convert these into your language of choice like R or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or [SQL](../../Skills/Data%20Science/SQL.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Decision Trees](../../Skills/Artificial%20Intelligence%20(AI)/Decision%20Trees.md) (5), [Logistic Regression](../../Skills/Software%20Development/Logistic%20Regression.md) (3), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Linear Regression](../../Skills/Data%20Science/Linear%20Regression.md) (1), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Definitions:** is a  (2), essentially is (1)
> **CLI Commands:** node (1), python (1)
> **Analogies:** picture (1), for instance (1)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Scoring a "black box" model](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=0)** - [Instructor] What about scoring so-called "black box" models? Black box models are just models that have gotten sufficiently complex that it becomes extremely difficult to tell a story about your model. In other words, you can't really interpret it very easily. Now, black box models are sometimes very accurate and they come in multiple [Forms](../../Skills/Web%20Development/Forms.md). This artificial neural net is just one of the many [Algorithms](../../Skills/Software%20Development/Algorithms.md) that falls into this category. What people like about them is that they can be incredibly accurate, but they have some disadvantages that we have to mention here. Now remember, each line in this diagram represents a coefficient, so they're getting quite complex. That also means that getting your black box model out of one platform and into another can be a challenge. So if you are going to build the model in one piece of software but you're deploying it somewhere else, you have to deal with that. One great way to do it is using something called Predictive Model Markup Language or PMML. Now, this has been around for many, many years, and the corporate members of the [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) Group, which involves many of the important companies in this space collaborate on PMML so that you can get these complicated models out of one software package and into another one. Now, if you're particularly interested in this aspect of it
>
> **[1:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=92)** or in the technology around deployment, you're going to want to check out Dan Sullivan's course right here in the library called "Deploying Scalable Machine Learning for [Data Science](../../Topics/Data%20Science.md)," and he mentions PMML in the course. [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) is something you're bound to hear about, not just in machine learning instruction, but also in the news. What deep learning is is very complex [Artificial Neural Networks](../../Skills/Artificial%20Intelligence%20(AI)/Artificial%20Neural%20Networks.md). In fact, what makes it deep is that there's more than one hidden layer or many hidden layers. So check out this diagram. Isn't it remarkable how many lines there are? Now, each line is a parameter or coefficient. So unlike traditional models, we don't have just one coefficient per variable. So we've lost all transparency. And this diagram reflects what would now be a deep learning model of trivial size compared to the famous [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) 4. It is believed that ChatGPT 4 has 120 hidden layers in nearly 2 trillion parameters, that would be 2 trillion lines. The good news is that for most folks, you're dealing with everyday business problems and you're not going to have to worry about [Speech Recognition](../../Skills/Software%20Development/Speech%20Recognition.md) and driverless cars, or building your own large language model, which are the big application areas for deep learning.
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=187)** Most of us facing everyday business problems within our organizations are going to be able to get by just fine with models that are somewhat less complicated than deep learning models. If you're curious about deep learning, there are some fantastic courses about deep learning right here in the library. But remember, if you go that route, you're going to lose transparency and scoring is going to be both slower and more complicated.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Deep Learning](../../Skills/Artificial%20Intelligence%20(AI)/Deep%20Learning.md) (7), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1), [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) (1)
> **Env Vars:** pmml (3)
> **Definitions:** in other words (1), means that (1), is a  (1)
> **Speakers:** - [instructor] (1)

#### [Scoring an ensemble](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=0)** - [Instructor] So, what about scoring ensemble models? Ensembles are really hot right now, so we'll talk a bit about the implications of choosing an ensemble when it gets to scoring. What ensembles are is a collection of models. It could be three, as you see depicted here. It could be several. It could be as many as 40 or 50 or even more. They come in all kinds of different styles. The kind that is depicted in this slide is what is sometimes called a heterogeneous ensemble, where you build some models independently and then combine them. That's a little different than an ensemble algorithm, like Random Forest or XGBoost, which end up behaving more like black box models. In this video, we'll focus more on building the models independently and then combining them yourself. But remember that the way this is going to work is that you have to build the individual models and then you have to combine them in some way. And sometimes you combine them by simply performing an average. Another option that has been doing especially well in [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) competitions recently is called stacking. You build multiple models, and then there's another model on top, which takes the predictions of the first models as input and then produces your final prediction. They're really something and they perform very well. That's why they're consistently among the top performers in these [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) competitions.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=94)** I have a course dedicated to ensembles in the library that explains the concepts like stacking, as well as the [Algorithms](../../Skills/Software%20Development/Algorithms.md) like Random Forest and XGBoost. A bit of a cautionary note: if you're building five models or 10 models, then your scoring is going to be roughly five or 10 times slower because you have to score them separately, then perform the calculation that combines them. The Netflix prize, now of many years ago, is very informative here. Netflix offered a million dollars to the team that could do the best job improving their recommendation engine. And you may have heard the story. The winner was never deployed because the winner was a very complex ensemble of dozens and dozens of underlying models, and it was too slow at runtime. So even though it was the model built by the team that won the million dollars, it was a non-winning team's model that was actually deployed because it was so much faster in a production environment. An important lesson, I think, for anyone that's trying to anticipate a successful deployment of their machine learning model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) (1), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (1), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)


### 4. Deployment

[↑ Back to Table of Contents](#table-of-contents)

#### [Batch vs. real-time scoring](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=0)** - [Instructor] Now we're going to talk about batch scoring versus [Real-Time](../../Skills/Database%20Management/Real-Time.md) scoring. We're going to have to focus on when to choose each. I think we're all familiar with the basic concepts, but let's do a couple of examples. The classic real-time scoring situation is something like credit card fraud. A transaction is run and you need near-instant feedback. As a business traveler, not infrequently, I will get a text message from my credit card, asking me to confirm in real time if a particular transaction was legitimate. The classic example of batch scoring is traditional marketing campaign models. Now, of course, back in the day, and this was one of the earliest applications of machine learning techniques, you would send out a mass mailing, but only to those individuals that had a high score. All you need is a walk to your mailbox to determine that direct mail still exists, but now it's more often email. Clearly what you're doing is you're doing the entire campaign, choosing the list, and then sending out the mailing. It's not as black and white as it first seems, however. What about an inbound call center situation? Let's say, for instance, that someone's calling in to their cable company and they're asking about an upgrade, or maybe they even have a repair issue or something like that. Well, maybe what we want to do
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=93)** is take their churn score into account. Churn would be the risk that they're going to leave us as a company and go to another company. But here's the issue. Most people don't make a distinction between the following two events. When did you generate the risk score and when did you retrieve the risk score? So in the call center, they might offer a discount, because this individual has a high churn score. They've had complaints with their account in the past, but we want to keep them as a good customer. But that doesn't mean that when the call center employee hits the enter key, that that generates a new score. You could go that route and have a new score generated, but you could also choose to generate the score in batch, but simply retrieve it when the call center operator needs it. There's a huge difference in cost in terms of your machine learning development, deployment, and maintenance. So which should you choose? We'll look into that increase in cost, and it's not trivial. It's hard to generalize, but this is going to be several times more expensive to do in real-time models. It's just a lot more complicated in terms of infrastructure. That doesn't mean that it's not going to be the right choice in some situations. So here are some considerations.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=186)** Is it mission critical? In my experience, most clients that I meet for the first time only go this far. They ask, "Do we have the budget, and is it mission critical?" If so, it's presumed that real-time is always better than batch, but there are other things to consider. How often do the variables change? I encounter so few organizations that take the time to ask this question, and it's such an important one. For instance, years ago, when I was on a cell phone churn project, virtually all of our variables came from monthly statements. Since the variables only changed once per month, it didn't make any sense to do nightly scoring or certainly not real-time scoring, because you could know in advance that the scores were not going to change until a customer's billing date had arrived for the current month. So you might also want to ask, what increase in accuracy might I experience if I make the investment in real-time? Well, it's hard to make this prediction in advance. One way to think of it is if you build the model with only slowly-changing variables, then you can score with slowly-changing variables, and therefore you can do batch scoring. Also, what's the rhythm of the business? I've been on a number of insurance fraud projects,
>
> **[4:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=281)** and think about what's happening. The list of cases is passed on to an investigative team. These are the folks that are physically driving around in cars, taking pictures, asking questions, and so on. This is not something that happens like the credit card transactions where a business traveler is trying to check in in a hotel lobby, and they're confirming their identity in real-time with a text message. Therefore, doing this kind of model as a weekly batch might fit the rhythm of the business just fine. An exception might be if you're fast-tracking certain payments, 'cause you certainly don't want to send out a payment until you've verified that the risk of fraud is low. And the reason that that might fit the rhythm of the business is because if you're updating claims in real-time, it would have no direct impact of the behaviors of the investigative team because they're operating at a slower pace. It takes a while for them to do their job. Therefore, batch is perfect. So don't dive into the increased investment of real-time until you weigh the relative merits of real and batch and then compare it to the rhythm of the business.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (9)
> **CLI Commands:** make (4)
> **Analogies:** for instance (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data prep and scoring](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=0)** - [Instructor] Let's talk about data prep and scoring. Let's revisit the monthly statements example. I want to discuss in some detail how this worked on an actual project. At this particular client site, there were eight different billing statements. So customers would get their monthly billing every couple of days. Some folks got it on the fourth, some folks on the eighth and so on. So on the evenings that those monthly statements were about to go out, all the new billing variables were calculated, and an hour later at one in the morning, all the [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) was done. So what all those calculations were doing was the [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) that the modelers had prototyped during the data prep and ultimately the modeling phase, and that were going to be used in the model. And then an hour after that, at two in the morning, the model ran and the scores were calculated. So what folks often forget to take into account is that scoring is not just about the model, but also about all that data preparation that generates the variables. After all, it's usually the feature engineered variables that are used in the model more often than the original raw variables. Once those loyalty or churn scores were in place, they were now tied to the customer ID and they were used as ingredients in numerous calculations until the next billing date. So now I want to talk about some issues that come up
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=96)** when you're trying to get all that data preparation ready as it moves from the modeling phase and into production. First, remember that not all of the variables are used. Hundreds of variables are considered for inclusion in the model typically, but usually only dozens of them are actually used. So to give you an example on this particular project, more than 800 variables were considered nearly a hundred was used, but that was a larger number of used variables than are typical, and the vast majority of the variables that were considered and the variables that were used were features and not original variables pulled off the data warehouse. Also note that not all formulas were originally, when they're prototyped built for speed, you're wading through hundreds of possibilities and doing many, many calculations. So once you've identified the variables that are working, that's when you want to turn your attention to get these calculations to be as fast as they possibly can. Also, historical data is not identical to scoring data. For instance, and preparing the model, you might create a variable to determine if there was a customer complaint within 30 days of a churn event. A churn event would be the day the customer left you. When you score the model, you're only scoring current customers, so there is no churn event.
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=190)** So you would instead check to see if there was a customer complaint within 30 days of when you scored. So similar but not identical. Finally, sources that were ad hoc during the modeling phase that you simply prototype to see if they might work, have to be made more permanent. For instance, on this very same client engagement, I didn't have access to dropped calls when you're on your cell phone and you lose the call because that was actually part of the cell tower data, not the customer service data. Once we identify that variable is going to be in the model, more ready access was made to the data. In today's terms, you would sit down with the data engineers and determine if that calculation is something that should be done at the enterprise level so that everyone has access to it. Here's the bottom line folks. Moving all of that data preparation code from the form it was in during the modeling phase to the form it needs to be in for scoring and deployment is a non-trivial event, and you have to work together to make it as efficient as possible.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Preparation](../../Skills/Data%20Science/Data%20Preparation.md) (4), [Feature Engineering](../../Skills/Data%20Science/Feature%20Engineering.md) (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Combining batch and real-time scoring](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=0)** - [Instructor] Now let's visit the call center example and see if there are circumstances under which we would definitely want realtime scoring. For instance, let's say someone's calling into the call center regarding a cell phone repair issue or possibly even an upgrade, and they've had three complaints over the last seven days. It would certainly seem inappropriate to not take that recent activity into account if we can, but what would be the most efficient way to do so? This is what a lot of folks don't realize. We can actually do a mix, a batch, in real time. We can do our standard model, which is taking our billing data, only updated monthly, which might cause us to miss recent events like complaints. We can run it through our model and we can generate our churn score. Keep in mind that this model is using dozens of variables. It's run in batch, and when we run it for the entire customer population once a month, it might take a substantial period of time, but the system's already there. We want to leverage that, not rebuild it. So this is what we do. We can take that churn score from the first model and simply add to it those things that change between billing statements, like a complaint, visits to the physical store, calls to the inbound call center, repair events, complaints, that kind of thing. This could be as few as a handful of additional variables.
>
> **[1:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=98)** We use the score that uses dozens of variables and we add just a few more, and that gets fed into a second model. Since it only has a handful of variables, it's going to run quickly and the data prep associated with it is going to run quickly as well. And then we have an adjusted score. If I was asked by a client to do real time in a call center, this is exactly what kind of approach that I would recommend.

> [!info]- Semantic Content
>
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 5. Monitoring and Maintenance

[↑ Back to Table of Contents](#table-of-contents)

#### [What is model monitoring?](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=0)** - [Instructor] The Cross-Industry Standard Process for [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) describes monitoring and maintenance in the following way. "Monitoring and maintenance are important issues if the data mining results becomes part of the day-to-fay business and its environment. A careful preparation of a maintenance strategy helps to avoid unnecessarily long periods of incorrect usage of data mining results." I want to elaborate on this a little bit more and then provide a case study. Here are some other considerations that [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md) provides. How do you know when this is happening? When should the data mining result or model not be used anymore? Well, there's specific criterion that you should be looking for, and they should have been set before you built the model. So thresholds of accuracy, in particular, you'll start to notice that they degrade. So you should decide in advance what should happen if the model or result can no longer be used. Also, you should determine if there's a possibility, and it will almost always be the case, that the business objectives that originally drove the use of the model may change over time. Your current business objectives may no longer match those that were used to inspire the original model. So let's put this in a bit of perspective. Let's say you had an external modeler
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=94)** that was involved in building the model, someone that came in from outside, like a consultant, to help you build the model. They're almost certainly not around at this point. The project manager that was assigned to this project might no longer be there, so you've got to have a team member, and they tend to be a more junior member of the team, that's going to invest just a little bit of time, about an hour a month, to look in and double-check that the model is still meeting these original criteria and then report to others if some of these warning signals have started to occur. Now, if you want a more philosophical take on model monitoring, in Tom Khabaza's "The 9 Laws of Data Mining," he talks about the law of change. I discuss the law of change as well as all of the CRISP-DM phases in detail in my course, [Predictive Analytics Essential Training- Data Mining](../Data%20Science/Predictive%20Analytics%20Essential%20Training-%20Data%20Mining.md). I want to now share an example, which, unfortunately, is an example where monitoring was not done, and it started to cause problems. I was invited in for an initial chat with a manufacturer who wanted to completely rebuild their [Forecasting](../../Skills/Data%20Science/Forecasting.md) model. Now, this model had taken many weeks, in fact, almost certainly many months, to build.
>
> **[3:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=189)** It was only about a year and a half old, and to completely rebuild it would've been quite expensive and time-consuming. So the question that I asked this potential client was the following, "Could you describe what the accuracy has been like from month to month? Was this a poor model from the very beginning, or did it degrade over time? How would you describe that change in accuracy over time?" Well, unfortunately, the answer was they really didn't know, but that the sales managers who were responsible to ensure that product was available to ship to clients and also to communicate to management what the demand was were increasingly vocal about their disappointment in the model, but there was nothing tangible about it. It hadn't been quantified. This is what you'd be looking for each month. Here's an instance where the percent accuracy seems to fluctuate. Now remember that these were forecasts, so the forecast might be a percent or two high or a percent or two low. A typical statistic that you might calculate would be something like a MAPE, a mean absolute percent error. So you're simply measuring that error and tracking it over time and asking, "Is it stable?" Well, again, in this instance, it seems to be fluctuating a bit. It's going up a bit and then down a bit,
>
> **[4:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=282)** but it's consistently around 2% error, and you would determine as a team whether or not that was a level of accuracy that met the project criteria. What if, in contrast, you had a pattern more like this, where over time, the inaccuracy is slowly creeping up and up and really kind of establishing a new set point? This is exactly what somebody should be watching. When you start to notice this happening, you want to bring the team in. The IT folks, the data scientist, the internal customer, all assemble again, and you start asking whether or not the model needs attention and possibly needs to be rebuilt. But if you fail to monitor it month after month, you won't know this is happening, and then you'll suddenly have a crisis on your hands. You don't want that outcome, so make sure that someone is assigned to the model monitoring task.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Data Mining](../../Skills/Data%20Science/Data%20Mining.md) (6), [CRISP-DM](../../Skills/Data%20Science/CRISP-DM.md) (2), [Predictive Analytics](../../Skills/Data%20Science/Predictive%20Analytics.md) (1), [Forecasting](../../Skills/Data%20Science/Forecasting.md) (1)
> **Env Vars:** crisp (2), mape (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [How often should you rebuild?](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=0)** - [Instructor] How often should you rebuild your models? It's an important question to ask because it has major cost implications for the cost of the project. One of my favorite examples is luggage fees. When I first started traveling many years ago now, the whole way that we handled luggage as business travelers was very different. Most people check their bags and they're usually weren't luggage fees. Now luggage fees can be quite high, and anyone who flies has noticed the increased number of carry-on bags onboard. Obviously, folks are trying to avoid the fees. So the point that I'm making is straightforward enough I think. Any model that involves business travelers and flying and luggage is going to have to change perhaps dramatically by the addition or subtraction of changes like this to how we travel. So clearly in general, we need to rebuild our models. The question is how often? Because if we do it more often than we need to, even though modern technology makes it easier and easier to automate the rebuilding of models, we're still spending infrastructure dollars where we don't necessarily need to spend them. How do we think through our decision? Well, let's be clear about what our options might be. Let's say you're going to build infrequently. You might have a situation where you're content
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=95)** with monthly scoring and annual rebuilding, not unlike the example we've been talking about actually. Well, if you're only going to rebuild the model annually and you have a data scientist on staff, then you can do it easily without trying to automate it. There are some wonderful advantages to a manual rebuild. You can think about things like changes to the business problem in a way that automated rebuilt models can't do. Now I'm not saying that you always go this infrequent, but think it through. How about much more frequent? How about [Real-Time](../../Skills/Database%20Management/Real-Time.md) scoring combined with somehow automatically building the model every night? Something that increasingly software vendors make it easy for you to do. But let's think through the cost implications. This scenario would probably be multiple times more expensive than the infrequent rebuild scenario with the manual rebuild. What are some things to think about when you're choosing between these two extremes I've proposed, infrequent and frequent? Obviously, with shades of gray in between. Here's the first question to ask. What's the potential increase in accuracy? As we've seen before, this should not be an intangible. You should be able to measure
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=187)** the actual increase that you get by rebuilding the model. You could even do A/B testing where the data scientist on the team rebuilds the model a month later and you check to see how much things have changed. We also want to ask, what's the increase in cost? This too should not be an intangible. You should be able to measure this. So a remaining critical question, how often do the underlying relationships change? This is different than asking how often do the underlying variables change? Let me clarify this within an example. I once heard a member of a deployment team giving a conference talk presenting about how they were going to start moving towards more rapid rebuilding of their models, and I was very curious why, because these projects can be expensive. So I was curious to hear the data scientists justification around this particular decision because it can be a very powerful thing when it's done right but it's not always necessary. His answer was, let's say that you're a healthcare provider. You want to make sure that your latest measurements, let's say blood pressure, are in the model. We didn't get a chance to talk at length that day, but I've often remembered this conversation. Because think about it,
>
> **[4:39](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=279)** having the most recent blood pressure measurement does not affect the rebuilding of the model because the relationship between blood pressure and health may remain constant, but the individual's blood pressure measurement certainly could change, which would result in a different score. So changing attitudes around something like luggage fees affects both the score and the model because it changes the values, but it also changes the relationship between luggage fees and something like loyalty to an airline. So try to avoid confusing the two. Because if you were to, you might be rebuilding models more frequently than you need to and that's very expensive indeed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Keith McCormick](../../Instructors/Data%20Science/Keith%20McCormick.md)

## Skills Covered

- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [Masterpath in Analytics Leadership for Executives](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Masterpath%20in%20Analytics%20Leadership%20for%20Executives.md)
← [Data Analytics for Business Professionals](../Data%20Science/Data%20Analytics%20for%20Business%20Professionals.md) | **8 of 8**

## Appears In

- [Masterpath in Analytics Leadership for Executives](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Masterpath%20in%20Analytics%20Leadership%20for%20Executives.md)

## Related Courses

_Courses sharing skills:_

- [Learning Vertex AI- MLOps with Google Cloud](Learning%20Vertex%20AI-%20MLOps%20with%20Google%20Cloud.md) — Artificial Intelligence (AI), MLOps
- [Introduction to MLSecOps](Introduction%20to%20MLSecOps.md) — Artificial Intelligence (AI), MLOps
- [MLOps Essentials- Monitoring Model Drift and Bias](MLOps%20Essentials-%20Monitoring%20Model%20Drift%20and%20Bias.md) — Artificial Intelligence (AI), MLOps
- [MLOps Essentials- Model Deployment and Monitoring](MLOps%20Essentials-%20Model%20Deployment%20and%20Monitoring.md) — Artificial Intelligence (AI), MLOps
- [MLOps Essentials- Model Development and Integration](MLOps%20Essentials-%20Model%20Development%20and%20Integration.md) — Artificial Intelligence (AI), MLOps

---

[↑ Back to top](#)