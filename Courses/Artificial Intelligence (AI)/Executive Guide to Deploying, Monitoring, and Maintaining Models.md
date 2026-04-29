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
  - '[[Masterpath in Analytics Leadership for Executives]]'
prev_courses:
  - '[[Data Analytics for Business Professionals]]'
path_nav: '[{"path":"Masterpath in Analytics Leadership for Executives","position":8,"total":8,"prev":"Data Analytics for Business Professionals","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/mlops
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Executive%20Guide%20to%20Deploying%2C%20Monitoring%2C%20and%20Maintaining%20Models.md)

![Executive Guide to Deploying, Monitoring, and Maintaining Models](https://media.licdn.com/dms/image/v2/D560DAQGQFcDu06-Gkg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712343465209?e=2147483647&amp;v=beta&amp;t=MUZpGpJLUEOiw6rC31MCHGUnaZdHIHp-I721RiEBH-U)

# Executive Guide to Deploying, Monitoring, and Maintaining Models

> With recent developments in the AI space, workflows for deploying, monitoring, and maintaining ML models have changed. In this course, Keith McCormick—an independent data miner, trainer, speaker, and author—breaks down the phases of an ML project and guides you through model evaluation, scoring, deployment, and model maintenance. Learn about data engineering and MLOps in the ML lifecycle, as well 

> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models) | 57m | Beginner | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. The Phases of a Machine Learning Project]]** (4 videos)
- **[[#2. Model Evaluation]]** (2 videos)
- **[[#3. Scoring]]** (3 videos)
- **[[#4. Deployment]]** (3 videos)
- **[[#5. Monitoring and Maintenance]]** (2 videos)

### 1. The Phases of a Machine Learning Project

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Data and supervised machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=0)** - Since you've joined me for a course in predictive analytics model deployment, then you probably either already have a predictive analytics model or you know how to obtain one.
>
> **[0:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=12)** The model could be formula-based, like linear or logistic regression.
>
> **[0:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=16)** Rule-based like decision trees.
>
> **[0:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=18)** Or perhaps you have a so-called black box model.
>
> **[0:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=21)** Whichever you have, you need to use it to score new records and to push that information out into the organization where it can be used to drive day-to-day decisions.
>
> **[0:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=33)** The process of deployment is automating this so that you can make a large volume of predictions efficiently.
>
> **[0:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=42)** Therefore, your criterion for choosing a predictive model has to include more than simply model accuracy.
>
> **[0:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=51)** Other factors include model transparency, the ease of migrating your solution to a production platform, and speed of scoring.
>
> **[1:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=63)** This course focuses on the phases of the machine learning lifecycle after the model is built.
>
> **[1:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=70)** Adopting the terminology from the widely used Cross Industry Standard Process for Data Mining or CRISP-DM, the phases we'll discuss are evaluation and deployment.
>
> **[1:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=84)** Some critical tasks listed by CRISP-DM within those phases that we'll discuss include model scoring, monitoring, and maintenance.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=95)** Most data science education emphasizes modeling.
>
> **[1:39](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=99)** Modeling is important without question, but a failure to discuss deployment is almost certainly a contributing factor in the failure to deploy the majority of models that organizations attempt to build.
>
> **[1:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=113)** Even though many of these models are sincere efforts to address important problems.
>
> **[1:59](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-and-supervised-machine-learning?u=76281980&t=119)** In this course, let's attempt to correct that shortcoming and focus less on modeling, and instead focus more on deployment.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (2)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Speakers:** - since (1)

#### Data engineering and MLOps in the ML lifecycle
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=1)** - Now let's talk about two roles that are rapidly becoming specialties with their own career paths and their own development life cycles, data engineering, and ML Ops.
>
> **[0:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=15)** Of the two, there's a bit more consensus about what data engineering is.
>
> **[0:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=21)** It's the preparation of enterprise data so that a downstream consumer of that data, like a data scientist building a model, has high quality data to work with.
>
> **[0:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=32)** In their excellent and influential book, Joe Reis and Matt Housley define it this way.
>
> **[0:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=38)** "The development, implementation, and maintenance of systems and processes that take in raw data and produce high quality, consistent information that supports downstream use cases such as analysis and machine learning."
>
> **[0:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=57)** So note the data scientists building a model like the ones we discuss in this course are just one of the types of data professionals that are consumers of the work that the data engineers do.
>
> **[1:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=69)** I think there's consensus on two issues, that the data engineers work is upstream and the work is different enough that it's a distinct career path, but the reality on the ground in most organizations is that there's a fuzzy boundary between data engineering and data science because this boundary is relatively new.
>
> **[1:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=91)** In an O'Reilly report on the subject, "ML Ops: Operationalizing Data Science", the authors define ML Ops as the process of operationalizing data science by getting ML models into production.
>
> **[1:46](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=106)** In this sense, it's potentially a handoff from data scientist to the ML Ops team when a model has completed initial deployment and enters monitoring and maintenance mode.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=120)** It's my own preferred scenario, but others like the thought leader, Noah Gift, who has numerous courses in the LinkedIn library, defines it as the process of automating machine learning using DevOps methodologies.
>
> **[2:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=135)** This implies that we're automating the entire lifecycle, which potentially makes the boundaries a bit more fuzzy.
>
> **[2:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=143)** If you're going to automate the entire lifecycle, you're probably exploring technologies like AutoML.
>
> **[2:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=150)** I dedicate an entire course to helping you decide how to navigate the world of AutoML.
>
> **[2:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=158)** Why are these two new roles important to us in this course?
>
> **[2:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=164)** If your organization has data engineers, and many of them now do, you'll want the data science team to be collaborative and to build upon their work.
>
> **[2:55](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=175)** Data Science teams tend to be the most demanding internal customers in terms of the volume of data, the granularity of the data, and custom requests.
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=187)** Also, once predictive scores are produced, they may have to travel in the reverse direction so that model predictions can be made available to enterprise systems.
>
> **[3:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=199)** And if your organization has an ML Ops team, then you'll need to navigate the handoffs between data science and that team.
>
> **[3:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=209)** I would place monitoring and maintenance under that team's responsibilities, for instance, but there's simply no consensus on that issue.
>
> **[3:39](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=219)** There may even be some fuzzy boundaries between ML Ops and data engineering that some organizations have to navigate.
>
> **[3:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=228)** What everyone agrees upon is that this is complicated work and the trend towards specialization is going to continue.
>
> **[3:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-engineering-and-ml-ops-in-the-ml-lifecycle?u=76281980&t=236)** We're all in this together as data professionals and we all want the models we've worked so hard to build to succeed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), new. (1), continue (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - now (1)

#### Why ML projects fail to be deployed
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=1)** - Numerous surveys of data scientists from sources like Gartner, KDnuggets, and Rexer Analytics have consistently found that less than 20% of machine learning models are deployed even when the intention of the project was to produce a deployed model.
>
> **[0:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=17)** These numbers haven't improved for decades.
>
> **[0:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=20)** Often, when I first meet a potential client, they've already tried and failed.
>
> **[0:25](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=25)** Here are some of the most common challenges I've observed.
>
> **[0:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=30)** Spoiler alert, they are more often attributable to culture and readiness for organizational change than they are attributable to technical considerations.
>
> **[0:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=43)** First, a failure of expectations.
>
> **[0:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=47)** This rarely takes the form of the data science team promising the world and failing.
>
> **[0:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=52)** It typically takes the form of no expectations at all.
>
> **[0:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=58)** Many teams are afraid to do any planning until after the model is built.
>
> **[1:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=63)** It's caused by a rational but mistaken assumption that you can't anticipate the organizational impact until after the technical work is done.
>
> **[1:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=73)** For decades, I've started projects with the assumption that technical challenges can be overcome.
>
> **[1:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=81)** So I start the project with a simple question.
>
> **[1:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=84)** Let's assume the model can be built.
>
> **[1:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=87)** What is the desired impact on the business?
>
> **[1:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=90)** How can it be measured?
>
> **[1:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=92)** It's critical to identify success metrics and reduce them to writing for later use in the evaluation phase.
>
> **[1:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=101)** The second reason is the failure to achieve sufficient ROI to justify deployment.
>
> **[1:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=109)** This is also a failure to plan, but it takes a specific form.
>
> **[1:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=113)** So what's the false assumption here?
>
> **[1:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=116)** That it's impossible to estimate ROI until you know how accurate the model is.
>
> **[2:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=122)** But if you fail to estimate it in advance, you can't compare potential projects and the assumption is just not true.
>
> **[2:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=131)** I have an entire course dedicated to how to make these estimates step-by-step, but the basic idea is quite straightforward.
>
> **[2:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=139)** You start by estimating the financial implications of the model being right and the model being wrong.
>
> **[2:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=147)** Then you take into account how many model predictions you make a year, and you're on your way to making an estimate.
>
> **[2:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=154)** You can use this estimate to compare multiple projects and commit only to those projects that will earn back more money than you spend on them.
>
> **[2:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=164)** The third reason is organizational resistance.
>
> **[2:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=169)** I've believed for years that it may be the most common reason that models don't get deployed.
>
> **[2:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=176)** Deployed models are all about the efficient use of resources.
>
> **[3:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=180)** They're essentially time management tools so that you are efficiently spending time with the right patients, the right inspections, and the right equipment repairs.
>
> **[3:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=192)** But who is spending the time?
>
> **[3:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=195)** It's not the data science team, it's the frontline workers, the client-facing team.
>
> **[3:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=201)** They are spending the time.
>
> **[3:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=203)** These teams can see their workload temporarily go up as the model identifies more actions to take.
>
> **[3:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=211)** Everyone likes having their time well spent, so they may eventually be the model's biggest fans.
>
> **[3:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=218)** But it can be disruptive if no one takes the time to understand their workflow and how it will be impacted by model deployment.
>
> **[3:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=228)** Please, don't wait until the end of the project to involve them.
>
> **[3:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/why-ml-projects-fail-to-be-deployed?u=76281980&t=232)** Involve them early and seek to understand and anticipate the impact on them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Env Vars:** roi (2)
> **Code Keywords:** let (1)
> **Speakers:** - numerous (1)

#### The basics of ML modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=0)** - [Instructor] Okay, so predictive analytics modeling is a huge topic, and this is not a course in modeling, but we have to do a very brief recap of what the modeling phase is all about to better understand how the topics in this course fall within the machine learning lifecycle.
>
> **[0:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=20)** So since we are talking about supervised machine learning, we need a lot of past data that has a clearly defined end result, like folks paid for their loan or they defaulted.
>
> **[0:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=34)** And then we also need a bunch of input variables.
>
> **[0:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=38)** I'm showing only two here, but we need a lot of them.
>
> **[0:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=41)** Typically on a project, I have hundreds of these that are considered.
>
> **[0:45](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=45)** Then what we have to do is we have to feed that past data to a bunch of modeling algorithms.
>
> **[0:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=52)** I mentioned just four here, decision tree, support vector machine, logistic regression, and neural network.
>
> **[0:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=57)** But there are dozens and dozens and dozens of them.
>
> **[1:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=61)** So during the modeling phase, what we have to do is a series of algorithmic experiments.
>
> **[1:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=66)** It truly is trial and error.
>
> **[1:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=70)** So we're not only using a bunch of different algorithms, we're also doing a bunch of algorithmic settings.
>
> **[1:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=77)** So for instance, support vector machine has this setting called C.
>
> **[1:22](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=82)** So I'm showing here in the table that I might try three different values of C.
>
> **[1:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=87)** Again, we're not going to get into the details in this course.
>
> **[1:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=91)** So what have you learned when you emerge from the modeling phase?
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=97)** Well, you figure out which modeling algorithms with which settings, like the settings we were just talking about, and which of those many, many input variables are producing the best job.
>
> **[1:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=112)** So you come out of the modeling phase with a winner, so to speak, a model that had the highest accuracy.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=120)** But as I often discuss in these courses, including this one, it's not only about modeling accuracy, it's really about how well that model addresses the business problem.
>
> **[2:14](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=134)** So you should be emerging from the modeling phase with more than one model, probably more like two or three that have different strengths and weaknesses.
>
> **[2:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=143)** But nonetheless, you're trying to learn which algorithm, which settings, and which variables are getting the job done.
>
> **[2:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=151)** Then you use that information in scoring for new loans now.
>
> **[2:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=158)** These might be loans that haven't even closed yet, but they're working their way through the pipeline, and you can generate a predictive score and get a predicted end result.
>
> **[2:50](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=170)** That's the goal, everybody, is to get here.
>
> **[2:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-basics-of-ml-modeling?u=76281980&t=173)** So what we're focused on in this course is to take the information that's learned during the modeling phase and then move on to the later phases as efficiently as possible, generate those scores as speedily as possible, and also be efficient in how we work with our colleagues so that ultimately these scores will get generated and will get used and be valuable to the business.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Model Evaluation

> [[#Table of Contents|↑ Back to Table of Contents]]

#### The business evaluation phase
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=1)** - CRISP-DM describes the phase immediately after modeling the Evaluation phase in the following way.
>
> **[0:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=9)** "Before proceeding to final deployment of the model, it is important to thoroughly evaluate it and review the steps executed to create it, to be certain that the model properly achieves the business objectives."
>
> **[0:25](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=25)** It sounds pretty straightforward, doesn't it?
>
> **[0:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=27)** But I think this is often where many folks get into trouble and endanger deployment.
>
> **[0:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=34)** When a project begins, you have to translate your problem into a form that machine learning can help us with.
>
> **[0:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=41)** In the Evaluation phase, and I like to call it the Business Evaluation phase, you have to translate it back.
>
> **[0:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=48)** So here's the mistake that many folks make.
>
> **[0:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=51)** They emerge from the Modeling phase having made a substantial number of models that could reasonably be considered for deployment, and they overemphasize technical criteria like model accuracy, sometimes choosing just a single model, the model that won, in terms of accuracy.
>
> **[1:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=71)** As a data scientist and model builder, I always remind myself that the choice of the final model is not solely my decision.
>
> **[1:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=80)** I share details with my internal customer or client like that the most accurate model is also the slowest to score, or that the most accurate model is often a very complex model that is difficult to explain.
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=97)** Now, at this stage, I should already know the project criteria.
>
> **[1:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=102)** But I still have to involve colleagues because everyone would want the fastest model, and the most transparent model, and the most accurate model, all to be the same.
>
> **[1:55](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=115)** And they never are the same.
>
> **[1:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=118)** I have to navigate those trade-offs with the business side of the project.
>
> **[2:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=123)** This is important to remember whether you are the one building the model or are representing the business side of the project.
>
> **[2:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=132)** Also, there are other deployment considerations.
>
> **[2:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=135)** How many predictor variables are there in the model?
>
> **[2:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=139)** Models with more variables can have logistical costs.
>
> **[2:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=143)** I remember being explicitly asked this by someone that we would probably now describe as an MLOps engineer.
>
> **[2:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=150)** He was asking me if I could drop a few variables without sacrificing too much accuracy.
>
> **[2:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=156)** He was running preliminary tests and was estimating scoring at five milliseconds per record, but his goal was to get it down to three milliseconds per record.
>
> **[2:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=167)** There are other activities that are firmly in the organizational and cultural realm that you have to conduct during this phase, like A/B testing and partial rollouts.
>
> **[2:59](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=179)** In virtually every project, it will be a good idea to try the model in a test setting with one small team of sales reps, or one repair team, or a team of fraud investigators before you deploy the model to the entire organization.
>
> **[3:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/the-business-evaluation-phase?u=76281980&t=198)** The final judge of success is not some fancy technical measure, like area under the curve, but rather, it's if the model actually works to solve the problem in your organizational setting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** crisp (1)
> **Speakers:** - crisp (1)

#### A deployment checklist
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=0)** - [Lecturer] One way to think through a deployment checklist after the evaluation phase but before the deployment phase is to consider the various teams that participate in the project.
>
> **[0:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=15)** Let's start with the IT team as well as the data engineers and the MLOps team.
>
> **[0:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=20)** Their various responsibilities will differ a bit from organization to organization, but what do they need to know?
>
> **[0:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=27)** There needs to be a substantive meeting where the provenance of the data is reviewed.
>
> **[0:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=34)** They will have some familiarity with this already because they would've been involved at the very, very beginning, but there are at least three critical details that have evolved at this point and need to be revisited.
>
> **[0:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=48)** First, this team needs to know which input variables out of the available pool of input variables were chosen by the model.
>
> **[0:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=57)** Second, they'll need to see the formulas for any calculations that were performed on the original input variables.
>
> **[1:04](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=64)** This is always an issue.
>
> **[1:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=65)** Many data scientists refer to feature engineering, the kind of calculation at issue here as being one of the most important steps in the entire process, and the model will be expecting these calculated variables, so someone will have to prepare these calculations for production, and that's usually not the data scientist.
>
> **[1:26](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=86)** This is an opportunity to recode those calculations for speed.
>
> **[1:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=91)** Missing data handling is part of that discussion as well.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=95)** Third, the model is going to produce predictions and propensity scores.
>
> **[1:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=101)** Where are those scores going to be routed?
>
> **[1:45](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=105)** In many cases, those scores will be routed back into the systems that the data engineers maintain because they may get incorporated into reports and dashboards.
>
> **[1:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=116)** Now, the critical relationship with the frontline team.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=120)** Before deployment, their management and some representatives of the team should be briefed on how deployment is going to be rolled out.
>
> **[2:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=131)** Also, the results of a small-scale partial rollout during evaluation should be shared with the team.
>
> **[2:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=137)** The most important thing they will want to know is how their job may be changed.
>
> **[2:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=144)** Will there be an explicit and visible change?
>
> **[2:28](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=148)** For instance, might a sales rep or call center rep see new information on their screen, or will the model's influence be less visible and behind the scenes?
>
> **[2:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=158)** How should feedback from the frontline team be shared back to the data science team?
>
> **[2:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=164)** If nothing is proposed, it implies that feedback is not encouraged.
>
> **[2:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=169)** The specific feedback that should be requested is what I sometimes call the volume of the model.
>
> **[2:55](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=175)** If the frontline team suddenly experiences being very busy, the model might be too sensitive and might also be producing some false positives.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=186)** For instance, a sales team might experience getting more leads, but with a lower closing percentage.
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=191)** An issue like this should be anticipated, and it doesn't typically require a new model.
>
> **[3:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=197)** It's simply adjusting the model's cut point.
>
> **[3:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=200)** If the frontline team is warned that this might occur, it invites collaboration and lowers the stress that is natural with any organizational change.
>
> **[3:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=211)** Finally, the internal customer or project sponsor as a representative of the business, whomever requested the project and whose business need is being addressed by the model.
>
> **[3:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=223)** what do they need to know?
>
> **[3:46](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=226)** Having done many of these briefings over the years, I'm going to suggest that this briefing need not be a comprehensive history lesson.
>
> **[3:54](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=234)** It should start with fundamental questions.
>
> **[3:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=238)** Recap, why did this particular model get chosen?
>
> **[4:04](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=244)** What are its high level characteristics?
>
> **[4:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=247)** How did it perform during trial deployment during the evaluation phase?
>
> **[4:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=253)** And then finally, what are the responsibilities of all team members going forward along with a timeline?
>
> **[4:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=259)** So it should be a forward thinking meeting with a brief review of decisions that were made during the evaluation phase.
>
> **[4:28](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=268)** The nitty gritty details are better reserved for a separate meeting with the data team, and we've already discussed that.
>
> **[4:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/a-deployment-checklist?u=76281980&t=276)** What the internal customer needs to know is who has which responsibility, and when those tasks will be completed.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1), require (1)
> **Analogies:** for instance (2)
> **Definitions:** is an  (1)
> **Speakers:** - [lecturer] (1)


### 3. Scoring

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Scoring traditional ML models
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=0)** - [Instructor] Let's talk about scoring.
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=1)** In particular, we're focused on how to score new data with our models.
>
> **[0:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=6)** There's a good reason why traditional machine learning methods have stood the test of time.
>
> **[0:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=11)** They still work quite well and they tend to be highly scalable.
>
> **[0:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=16)** Let's look at some of their features.
>
> **[0:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=19)** One advantage of these more traditional techniques, like logistic regression let's say or decision trees, is that they're highly transparent.
>
> **[0:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=27)** They really tell you a story about the data, and they're fast.
>
> **[0:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=32)** They're fast to build, and they're fast at scoring.
>
> **[0:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=37)** Also, super important to us in this particular course, they're easy to migrate.
>
> **[0:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=43)** They're still quite common, so please don't feel pressure to keep up with the fanciest, latest algorithms if a traditional machine learning model will fit the situation.
>
> **[0:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=56)** These are wonderful advantages to have.
>
> **[0:59](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=59)** Let's go a level deeper.
>
> **[1:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=61)** So in the case of the statistical models, you're going to have algebra-like formulas with one coefficient per variable, and that helps you give the transparency that we were talking about.
>
> **[1:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=76)** In the case of something like decision trees or any technique that generates rules, you're going to have essentially if/then statements with one rule per subgroup or segment.
>
> **[1:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=90)** So if you picture the decision tree diagram itself, the subgroup here is a leaf node.
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=97)** So let's take a look at a specific example.
>
> **[1:40](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=100)** This is the logistic regression example.
>
> **[1:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=104)** Now, this is a little bit more complicated than it is in linear regression, but it's helpful that you have that one coefficient per variable and that helps you reverse engineer what's going on here.
>
> **[1:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=116)** So for instance, we have a coefficient for weight.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=120)** We have another coefficient for premature labor, and we have a coefficient for hypertension.
>
> **[2:08](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=128)** Three different variables in our risk model.
>
> **[2:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=132)** Then also, finally, we have something that essentially is like the y-intercept and regression.
>
> **[2:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=138)** It's a little bit different here, but that's what we have.
>
> **[2:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=141)** What that is, is essentially a constant.
>
> **[2:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=144)** So in the case of decision trees and other techniques that generate rules, we have something that's more like an if/then statement.
>
> **[2:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=151)** But again, with information associated with each variable.
>
> **[2:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=155)** Once more, we've got the mother's weight, hypertension, and age, and the various cutoffs associated with them.
>
> **[2:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=164)** Now, when you go to deploy, don't forget that a technique like decision trees is also generating scores.
>
> **[2:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=172)** So they're making a prediction, but there would also be a score that would reflect the amount of risk, like 70% or 80% and so on.
>
> **[3:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=181)** In this case, this risk group is associated with a healthy weight baby.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=186)** So in order to migrate this to another platform, you have to familiarize yourself either with the algebraic-like formulas you get with logistic regression or the if/then like statements as you see here associated with decision trees.
>
> **[3:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-traditional-ml-models?u=76281980&t=204)** So looking at this, as you can see, it's very easy to convert these into your language of choice like R or Python or SQL.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), super (1), finally, (1), case, (1), this, (1)
> **Definitions:** is a  (2), essentially is (1)
> **CLI Commands:** node (1), python (1)
> **Analogies:** picture (1), for instance (1)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Scoring a "black box" model
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=0)** - [Instructor] What about scoring so-called "black box" models?
>
> **[0:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=5)** Black box models are just models that have gotten sufficiently complex that it becomes extremely difficult to tell a story about your model.
>
> **[0:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=13)** In other words, you can't really interpret it very easily.
>
> **[0:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=17)** Now, black box models are sometimes very accurate and they come in multiple forms.
>
> **[0:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=23)** This artificial neural net is just one of the many algorithms that falls into this category.
>
> **[0:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=29)** What people like about them is that they can be incredibly accurate, but they have some disadvantages that we have to mention here.
>
> **[0:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=36)** Now remember, each line in this diagram represents a coefficient, so they're getting quite complex.
>
> **[0:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=42)** That also means that getting your black box model out of one platform and into another can be a challenge.
>
> **[0:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=51)** So if you are going to build the model in one piece of software but you're deploying it somewhere else, you have to deal with that.
>
> **[1:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=60)** One great way to do it is using something called Predictive Model Markup Language or PMML.
>
> **[1:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=69)** Now, this has been around for many, many years, and the corporate members of the Data Mining Group, which involves many of the important companies in this space collaborate on PMML so that you can get these complicated models out of one software package and into another one.
>
> **[1:28](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=88)** Now, if you're particularly interested in this aspect of it or in the technology around deployment, you're going to want to check out Dan Sullivan's course right here in the library called "Deploying Scalable Machine Learning for Data Science," and he mentions PMML in the course.
>
> **[1:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=108)** Deep learning is something you're bound to hear about, not just in machine learning instruction, but also in the news.
>
> **[1:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=116)** What deep learning is is very complex artificial neural networks.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=120)** In fact, what makes it deep is that there's more than one hidden layer or many hidden layers.
>
> **[2:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=127)** So check out this diagram.
>
> **[2:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=129)** Isn't it remarkable how many lines there are?
>
> **[2:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=133)** Now, each line is a parameter or coefficient.
>
> **[2:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=136)** So unlike traditional models, we don't have just one coefficient per variable.
>
> **[2:22](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=142)** So we've lost all transparency.
>
> **[2:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=144)** And this diagram reflects what would now be a deep learning model of trivial size compared to the famous large language models like ChatGPT 4.
>
> **[2:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=156)** It is believed that ChatGPT 4 has 120 hidden layers in nearly 2 trillion parameters, that would be 2 trillion lines.
>
> **[2:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=169)** The good news is that for most folks, you're dealing with everyday business problems and you're not going to have to worry about speech recognition and driverless cars, or building your own large language model, which are the big application areas for deep learning.
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=187)** Most of us facing everyday business problems within our organizations are going to be able to get by just fine with models that are somewhat less complicated than deep learning models.
>
> **[3:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=199)** If you're curious about deep learning, there are some fantastic courses about deep learning right here in the library.
>
> **[3:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-a-black-box-model?u=76281980&t=204)** But remember, if you go that route, you're going to lose transparency and scoring is going to be both slower and more complicated.

> [!info]- Semantic Content
>
> **Env Vars:** pmml (3)
> **Definitions:** in other words (1), means that (1), is a  (1)
> **Code Keywords:** else, (1)
> **Speakers:** - [instructor] (1)

#### Scoring an ensemble
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=0)** - [Instructor] So, what about scoring ensemble models?
>
> **[0:04](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=4)** Ensembles are really hot right now, so we'll talk a bit about the implications of choosing an ensemble when it gets to scoring.
>
> **[0:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=13)** What ensembles are is a collection of models.
>
> **[0:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=16)** It could be three, as you see depicted here.
>
> **[0:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=19)** It could be several.
>
> **[0:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=20)** It could be as many as 40 or 50 or even more.
>
> **[0:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=23)** They come in all kinds of different styles.
>
> **[0:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=27)** The kind that is depicted in this slide is what is sometimes called a heterogeneous ensemble, where you build some models independently and then combine them.
>
> **[0:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=36)** That's a little different than an ensemble algorithm, like Random Forest or XGBoost, which end up behaving more like black box models.
>
> **[0:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=47)** In this video, we'll focus more on building the models independently and then combining them yourself.
>
> **[0:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=53)** But remember that the way this is going to work is that you have to build the individual models and then you have to combine them in some way.
>
> **[1:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=62)** And sometimes you combine them by simply performing an average.
>
> **[1:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=66)** Another option that has been doing especially well in data mining competitions recently is called stacking.
>
> **[1:14](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=74)** You build multiple models, and then there's another model on top, which takes the predictions of the first models as input and then produces your final prediction.
>
> **[1:25](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=85)** They're really something and they perform very well.
>
> **[1:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=89)** That's why they're consistently among the top performers in these predictive analytics competitions.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=94)** I have a course dedicated to ensembles in the library that explains the concepts like stacking, as well as the algorithms like Random Forest and XGBoost.
>
> **[1:45](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=105)** A bit of a cautionary note: if you're building five models or 10 models, then your scoring is going to be roughly five or 10 times slower because you have to score them separately, then perform the calculation that combines them.
>
> **[2:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=121)** The Netflix prize, now of many years ago, is very informative here.
>
> **[2:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=127)** Netflix offered a million dollars to the team that could do the best job improving their recommendation engine.
>
> **[2:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=135)** And you may have heard the story.
>
> **[2:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=137)** The winner was never deployed because the winner was a very complex ensemble of dozens and dozens of underlying models, and it was too slow at runtime.
>
> **[2:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=152)** So even though it was the model built by the team that won the million dollars, it was a non-winning team's model that was actually deployed because it was so much faster in a production environment.
>
> **[2:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/scoring-an-ensemble?u=76281980&t=167)** An important lesson, I think, for anyone that's trying to anticipate a successful deployment of their machine learning model.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1)
> **Speakers:** - [instructor] (1)


### 4. Deployment

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Batch vs. real-time scoring
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=0)** - [Instructor] Now we're going to talk about batch scoring versus real-time scoring.
>
> **[0:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=6)** We're going to have to focus on when to choose each.
>
> **[0:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=10)** I think we're all familiar with the basic concepts, but let's do a couple of examples.
>
> **[0:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=15)** The classic real-time scoring situation is something like credit card fraud.
>
> **[0:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=20)** A transaction is run and you need near-instant feedback.
>
> **[0:25](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=25)** As a business traveler, not infrequently, I will get a text message from my credit card, asking me to confirm in real time if a particular transaction was legitimate.
>
> **[0:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=37)** The classic example of batch scoring is traditional marketing campaign models.
>
> **[0:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=43)** Now, of course, back in the day, and this was one of the earliest applications of machine learning techniques, you would send out a mass mailing, but only to those individuals that had a high score.
>
> **[0:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=56)** All you need is a walk to your mailbox to determine that direct mail still exists, but now it's more often email.
>
> **[1:04](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=64)** Clearly what you're doing is you're doing the entire campaign, choosing the list, and then sending out the mailing.
>
> **[1:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=71)** It's not as black and white as it first seems, however.
>
> **[1:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=75)** What about an inbound call center situation?
>
> **[1:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=80)** Let's say, for instance, that someone's calling in to their cable company and they're asking about an upgrade, or maybe they even have a repair issue or something like that.
>
> **[1:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=91)** Well, maybe what we want to do is take their churn score into account.
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=96)** Churn would be the risk that they're going to leave us as a company and go to another company.
>
> **[1:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=101)** But here's the issue.
>
> **[1:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=102)** Most people don't make a distinction between the following two events.
>
> **[1:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=107)** When did you generate the risk score and when did you retrieve the risk score?
>
> **[1:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=113)** So in the call center, they might offer a discount, because this individual has a high churn score.
>
> **[2:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=120)** They've had complaints with their account in the past, but we want to keep them as a good customer.
>
> **[2:08](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=128)** But that doesn't mean that when the call center employee hits the enter key, that that generates a new score.
>
> **[2:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=137)** You could go that route and have a new score generated, but you could also choose to generate the score in batch, but simply retrieve it when the call center operator needs it.
>
> **[2:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=150)** There's a huge difference in cost in terms of your machine learning development, deployment, and maintenance.
>
> **[2:39](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=159)** So which should you choose?
>
> **[2:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=162)** We'll look into that increase in cost, and it's not trivial.
>
> **[2:46](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=166)** It's hard to generalize, but this is going to be several times more expensive to do in real-time models.
>
> **[2:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=173)** It's just a lot more complicated in terms of infrastructure.
>
> **[2:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=178)** That doesn't mean that it's not going to be the right choice in some situations.
>
> **[3:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=183)** So here are some considerations.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=186)** Is it mission critical?
>
> **[3:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=189)** In my experience, most clients that I meet for the first time only go this far.
>
> **[3:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=195)** They ask, "Do we have the budget, and is it mission critical?"
>
> **[3:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=199)** If so, it's presumed that real-time is always better than batch, but there are other things to consider.
>
> **[3:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=209)** How often do the variables change?
>
> **[3:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=212)** I encounter so few organizations that take the time to ask this question, and it's such an important one.
>
> **[3:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=222)** For instance, years ago, when I was on a cell phone churn project, virtually all of our variables came from monthly statements.
>
> **[3:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=229)** Since the variables only changed once per month, it didn't make any sense to do nightly scoring or certainly not real-time scoring, because you could know in advance that the scores were not going to change until a customer's billing date had arrived for the current month.
>
> **[4:07](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=247)** So you might also want to ask, what increase in accuracy might I experience if I make the investment in real-time?
>
> **[4:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=256)** Well, it's hard to make this prediction in advance.
>
> **[4:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=260)** One way to think of it is if you build the model with only slowly-changing variables, then you can score with slowly-changing variables, and therefore you can do batch scoring.
>
> **[4:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=274)** Also, what's the rhythm of the business?
>
> **[4:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=277)** I've been on a number of insurance fraud projects, and think about what's happening.
>
> **[4:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=283)** The list of cases is passed on to an investigative team.
>
> **[4:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=287)** These are the folks that are physically driving around in cars, taking pictures, asking questions, and so on.
>
> **[4:54](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=294)** This is not something that happens like the credit card transactions where a business traveler is trying to check in in a hotel lobby, and they're confirming their identity in real-time with a text message.
>
> **[5:08](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=308)** Therefore, doing this kind of model as a weekly batch might fit the rhythm of the business just fine.
>
> **[5:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=317)** An exception might be if you're fast-tracking certain payments, 'cause you certainly don't want to send out a payment until you've verified that the risk of fraud is low.
>
> **[5:27](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=327)** And the reason that that might fit the rhythm of the business is because if you're updating claims in real-time, it would have no direct impact of the behaviors of the investigative team because they're operating at a slower pace.
>
> **[5:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=342)** It takes a while for them to do their job.
>
> **[5:45](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=345)** Therefore, batch is perfect.
>
> **[5:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/batch-vs-real-time-scoring?u=76281980&t=348)** So don't dive into the increased investment of real-time until you weigh the relative merits of real and batch and then compare it to the rhythm of the business.

> [!info]- Semantic Content
>
> **CLI Commands:** make (4)
> **Code Keywords:** let (2)
> **Analogies:** for instance (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Data prep and scoring
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=0)** - [Instructor] Let's talk about data prep and scoring.
>
> **[0:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=3)** Let's revisit the monthly statements example.
>
> **[0:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=6)** I want to discuss in some detail how this worked on an actual project.
>
> **[0:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=10)** At this particular client site, there were eight different billing statements.
>
> **[0:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=15)** So customers would get their monthly billing every couple of days.
>
> **[0:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=19)** Some folks got it on the fourth, some folks on the eighth and so on.
>
> **[0:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=24)** So on the evenings that those monthly statements were about to go out, all the new billing variables were calculated, and an hour later at one in the morning, all the data preparation was done.
>
> **[0:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=38)** So what all those calculations were doing was the feature engineering that the modelers had prototyped during the data prep and ultimately the modeling phase, and that were going to be used in the model.
>
> **[0:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=52)** And then an hour after that, at two in the morning, the model ran and the scores were calculated.
>
> **[0:59](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=59)** So what folks often forget to take into account is that scoring is not just about the model, but also about all that data preparation that generates the variables.
>
> **[1:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=69)** After all, it's usually the feature engineered variables that are used in the model more often than the original raw variables.
>
> **[1:17](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=77)** Once those loyalty or churn scores were in place, they were now tied to the customer ID and they were used as ingredients in numerous calculations until the next billing date.
>
> **[1:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=92)** So now I want to talk about some issues that come up when you're trying to get all that data preparation ready as it moves from the modeling phase and into production.
>
> **[1:45](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=105)** First, remember that not all of the variables are used.
>
> **[1:49](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=109)** Hundreds of variables are considered for inclusion in the model typically, but usually only dozens of them are actually used.
>
> **[1:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=118)** So to give you an example on this particular project, more than 800 variables were considered nearly a hundred was used, but that was a larger number of used variables than are typical, and the vast majority of the variables that were considered and the variables that were used were features and not original variables pulled off the data warehouse.
>
> **[2:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=141)** Also note that not all formulas were originally, when they're prototyped built for speed, you're wading through hundreds of possibilities and doing many, many calculations.
>
> **[2:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=154)** So once you've identified the variables that are working, that's when you want to turn your attention to get these calculations to be as fast as they possibly can.
>
> **[2:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=163)** Also, historical data is not identical to scoring data.
>
> **[2:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=168)** For instance, and preparing the model, you might create a variable to determine if there was a customer complaint within 30 days of a churn event.
>
> **[2:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=178)** A churn event would be the day the customer left you.
>
> **[3:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=183)** When you score the model, you're only scoring current customers, so there is no churn event.
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=190)** So you would instead check to see if there was a customer complaint within 30 days of when you scored.
>
> **[3:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=196)** So similar but not identical.
>
> **[3:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=200)** Finally, sources that were ad hoc during the modeling phase that you simply prototype to see if they might work, have to be made more permanent.
>
> **[3:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=210)** For instance, on this very same client engagement, I didn't have access to dropped calls when you're on your cell phone and you lose the call because that was actually part of the cell tower data, not the customer service data.
>
> **[3:46](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=226)** Once we identify that variable is going to be in the model, more ready access was made to the data.
>
> **[3:53](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=233)** In today's terms, you would sit down with the data engineers and determine if that calculation is something that should be done at the enterprise level so that everyone has access to it.
>
> **[4:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=243)** Here's the bottom line folks.
>
> **[4:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/data-prep-and-scoring?u=76281980&t=245)** Moving all of that data preparation code from the form it was in during the modeling phase to the form it needs to be in for scoring and deployment is a non-trivial event, and you have to work together to make it as efficient as possible.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Combining batch and real-time scoring
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=0)** - [Instructor] Now let's visit the call center example and see if there are circumstances under which we would definitely want realtime scoring.
>
> **[0:10](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=10)** For instance, let's say someone's calling into the call center regarding a cell phone repair issue or possibly even an upgrade, and they've had three complaints over the last seven days.
>
> **[0:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=21)** It would certainly seem inappropriate to not take that recent activity into account if we can, but what would be the most efficient way to do so?
>
> **[0:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=32)** This is what a lot of folks don't realize.
>
> **[0:35](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=35)** We can actually do a mix, a batch, in real time.
>
> **[0:40](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=40)** We can do our standard model, which is taking our billing data, only updated monthly, which might cause us to miss recent events like complaints.
>
> **[0:52](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=52)** We can run it through our model and we can generate our churn score.
>
> **[0:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=57)** Keep in mind that this model is using dozens of variables.
>
> **[1:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=62)** It's run in batch, and when we run it for the entire customer population once a month, it might take a substantial period of time, but the system's already there.
>
> **[1:11](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=71)** We want to leverage that, not rebuild it.
>
> **[1:14](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=74)** So this is what we do.
>
> **[1:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=76)** We can take that churn score from the first model and simply add to it those things that change between billing statements, like a complaint, visits to the physical store, calls to the inbound call center, repair events, complaints, that kind of thing.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=93)** This could be as few as a handful of additional variables.
>
> **[1:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=98)** We use the score that uses dozens of variables and we add just a few more, and that gets fed into a second model.
>
> **[1:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=108)** Since it only has a handful of variables, it's going to run quickly and the data prep associated with it is going to run quickly as well.
>
> **[1:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=118)** And then we have an adjusted score.
>
> **[2:01](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/combining-batch-and-real-time-scoring?u=76281980&t=121)** If I was asked by a client to do real time in a call center, this is exactly what kind of approach that I would recommend.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 5. Monitoring and Maintenance

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is model monitoring?
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=0)** - [Instructor] The Cross-Industry Standard Process for Data Mining describes monitoring and maintenance in the following way.
>
> **[0:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=6)** "Monitoring and maintenance are important issues if the data mining results becomes part of the day-to-fay business and its environment.
>
> **[0:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=15)** A careful preparation of a maintenance strategy helps to avoid unnecessarily long periods of incorrect usage of data mining results."
>
> **[0:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=24)** I want to elaborate on this a little bit more and then provide a case study.
>
> **[0:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=29)** Here are some other considerations that CRISP-DM provides.
>
> **[0:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=34)** How do you know when this is happening?
>
> **[0:36](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=36)** When should the data mining result or model not be used anymore?
>
> **[0:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=41)** Well, there's specific criterion that you should be looking for, and they should have been set before you built the model.
>
> **[0:48](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=48)** So thresholds of accuracy, in particular, you'll start to notice that they degrade.
>
> **[0:56](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=56)** So you should decide in advance what should happen if the model or result can no longer be used.
>
> **[1:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=65)** Also, you should determine if there's a possibility, and it will almost always be the case, that the business objectives that originally drove the use of the model may change over time.
>
> **[1:19](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=79)** Your current business objectives may no longer match those that were used to inspire the original model.
>
> **[1:28](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=88)** So let's put this in a bit of perspective.
>
> **[1:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=91)** Let's say you had an external modeler that was involved in building the model, someone that came in from outside, like a consultant, to help you build the model.
>
> **[1:41](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=101)** They're almost certainly not around at this point.
>
> **[1:44](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=104)** The project manager that was assigned to this project might no longer be there, so you've got to have a team member, and they tend to be a more junior member of the team, that's going to invest just a little bit of time, about an hour a month, to look in and double-check that the model is still meeting these original criteria and then report to others if some of these warning signals have started to occur.
>
> **[2:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=138)** Now, if you want a more philosophical take on model monitoring, in Tom Khabaza's "The 9 Laws of Data Mining," he talks about the law of change.
>
> **[2:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=150)** I discuss the law of change as well as all of the CRISP-DM phases in detail in my course, [[Predictive Analytics Essential Training- Data Mining]].
>
> **[2:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=162)** I want to now share an example, which, unfortunately, is an example where monitoring was not done, and it started to cause problems.
>
> **[2:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=171)** I was invited in for an initial chat with a manufacturer who wanted to completely rebuild their forecasting model.
>
> **[3:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=182)** Now, this model had taken many weeks, in fact, almost certainly many months, to build.
>
> **[3:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=189)** It was only about a year and a half old, and to completely rebuild it would've been quite expensive and time-consuming.
>
> **[3:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=198)** So the question that I asked this potential client was the following, "Could you describe what the accuracy has been like from month to month?
>
> **[3:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=209)** Was this a poor model from the very beginning, or did it degrade over time?
>
> **[3:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=214)** How would you describe that change in accuracy over time?"
>
> **[3:39](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=219)** Well, unfortunately, the answer was they really didn't know, but that the sales managers who were responsible to ensure that product was available to ship to clients and also to communicate to management what the demand was were increasingly vocal about their disappointment in the model, but there was nothing tangible about it.
>
> **[4:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=243)** It hadn't been quantified.
>
> **[4:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=246)** This is what you'd be looking for each month.
>
> **[4:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=249)** Here's an instance where the percent accuracy seems to fluctuate.
>
> **[4:14](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=254)** Now remember that these were forecasts, so the forecast might be a percent or two high or a percent or two low.
>
> **[4:22](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=262)** A typical statistic that you might calculate would be something like a MAPE, a mean absolute percent error.
>
> **[4:30](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=270)** So you're simply measuring that error and tracking it over time and asking, "Is it stable?"
>
> **[4:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=277)** Well, again, in this instance, it seems to be fluctuating a bit.
>
> **[4:40](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=280)** It's going up a bit and then down a bit, but it's consistently around 2% error, and you would determine as a team whether or not that was a level of accuracy that met the project criteria.
>
> **[4:55](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=295)** What if, in contrast, you had a pattern more like this, where over time, the inaccuracy is slowly creeping up and up and really kind of establishing a new set point?
>
> **[5:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=312)** This is exactly what somebody should be watching.
>
> **[5:15](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=315)** When you start to notice this happening, you want to bring the team in.
>
> **[5:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=321)** The IT folks, the data scientist, the internal customer, all assemble again, and you start asking whether or not the model needs attention and possibly needs to be rebuilt.
>
> **[5:33](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=333)** But if you fail to monitor it month after month, you won't know this is happening, and then you'll suddenly have a crisis on your hands.
>
> **[5:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/what-is-model-monitoring?u=76281980&t=342)** You don't want that outcome, so make sure that someone is assigned to the model monitoring task.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for, (1), case, (1), if, (1), this, (1)
> **Env Vars:** crisp (2), mape (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### How often should you rebuild?
> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=0)** - [Instructor] How often should you rebuild your models?
>
> **[0:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=3)** It's an important question to ask because it has major cost implications for the cost of the project.
>
> **[0:09](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=9)** One of my favorite examples is luggage fees.
>
> **[0:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=13)** When I first started traveling many years ago now, the whole way that we handled luggage as business travelers was very different.
>
> **[0:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=21)** Most people check their bags and they're usually weren't luggage fees.
>
> **[0:26](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=26)** Now luggage fees can be quite high, and anyone who flies has noticed the increased number of carry-on bags onboard.
>
> **[0:34](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=34)** Obviously, folks are trying to avoid the fees.
>
> **[0:38](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=38)** So the point that I'm making is straightforward enough I think.
>
> **[0:42](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=42)** Any model that involves business travelers and flying and luggage is going to have to change perhaps dramatically by the addition or subtraction of changes like this to how we travel.
>
> **[0:58](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=58)** So clearly in general, we need to rebuild our models.
>
> **[1:03](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=63)** The question is how often?
>
> **[1:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=66)** Because if we do it more often than we need to, even though modern technology makes it easier and easier to automate the rebuilding of models, we're still spending infrastructure dollars where we don't necessarily need to spend them.
>
> **[1:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=83)** How do we think through our decision?
>
> **[1:25](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=85)** Well, let's be clear about what our options might be.
>
> **[1:28](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=88)** Let's say you're going to build infrequently.
>
> **[1:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=92)** You might have a situation where you're content with monthly scoring and annual rebuilding, not unlike the example we've been talking about actually.
>
> **[1:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=103)** Well, if you're only going to rebuild the model annually and you have a data scientist on staff, then you can do it easily without trying to automate it.
>
> **[1:54](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=114)** There are some wonderful advantages to a manual rebuild.
>
> **[1:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=117)** You can think about things like changes to the business problem in a way that automated rebuilt models can't do.
>
> **[2:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=125)** Now I'm not saying that you always go this infrequent, but think it through.
>
> **[2:13](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=133)** How about much more frequent?
>
> **[2:16](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=136)** How about real-time scoring combined with somehow automatically building the model every night?
>
> **[2:23](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=143)** Something that increasingly software vendors make it easy for you to do.
>
> **[2:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=149)** But let's think through the cost implications.
>
> **[2:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=152)** This scenario would probably be multiple times more expensive than the infrequent rebuild scenario with the manual rebuild.
>
> **[2:43](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=163)** What are some things to think about when you're choosing between these two extremes I've proposed, infrequent and frequent?
>
> **[2:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=171)** Obviously, with shades of gray in between.
>
> **[2:54](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=174)** Here's the first question to ask.
>
> **[2:57](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=177)** What's the potential increase in accuracy?
>
> **[3:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=182)** As we've seen before, this should not be an intangible.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=186)** You should be able to measure the actual increase that you get by rebuilding the model.
>
> **[3:12](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=192)** You could even do A/B testing where the data scientist on the team rebuilds the model a month later and you check to see how much things have changed.
>
> **[3:21](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=201)** We also want to ask, what's the increase in cost?
>
> **[3:26](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=206)** This too should not be an intangible.
>
> **[3:29](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=209)** You should be able to measure this.
>
> **[3:31](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=211)** So a remaining critical question, how often do the underlying relationships change?
>
> **[3:40](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=220)** This is different than asking how often do the underlying variables change?
>
> **[3:47](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=227)** Let me clarify this within an example.
>
> **[3:51](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=231)** I once heard a member of a deployment team giving a conference talk presenting about how they were going to start moving towards more rapid rebuilding of their models, and I was very curious why, because these projects can be expensive.
>
> **[4:05](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=245)** So I was curious to hear the data scientists justification around this particular decision because it can be a very powerful thing when it's done right but it's not always necessary.
>
> **[4:18](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=258)** His answer was, let's say that you're a healthcare provider.
>
> **[4:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=264)** You want to make sure that your latest measurements, let's say blood pressure, are in the model.
>
> **[4:32](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=272)** We didn't get a chance to talk at length that day, but I've often remembered this conversation.
>
> **[4:37](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=277)** Because think about it, having the most recent blood pressure measurement does not affect the rebuilding of the model because the relationship between blood pressure and health may remain constant, but the individual's blood pressure measurement certainly could change, which would result in a different score.
>
> **[5:02](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=302)** So changing attitudes around something like luggage fees affects both the score and the model because it changes the values, but it also changes the relationship between luggage fees and something like loyalty to an airline.
>
> **[5:20](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=320)** So try to avoid confusing the two.
>
> **[5:24](https://www.linkedin.com/learning/executive-guide-to-deploying-monitoring-and-maintaining-models/how-often-should-you-rebuild?u=76281980&t=324)** Because if you were to, you might be rebuilding models more frequently than you need to and that's very expensive indeed.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Skills Covered

- MLOps
- Artificial Intelligence (AI)

## Path Context

### In [[Masterpath in Analytics Leadership for Executives]]
← [[Data Analytics for Business Professionals]] | **8 of 8**

## Appears In

- [[Masterpath in Analytics Leadership for Executives]]

## Related Courses

_Courses sharing skills:_

- [[Learning Vertex AI- MLOps with Google Cloud]] — Artificial Intelligence (AI), MLOps
- [[Introduction to MLSecOps]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Monitoring Model Drift and Bias]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Deployment and Monitoring]] — Artificial Intelligence (AI), MLOps
- [[MLOps Essentials- Model Development and Integration]] — Artificial Intelligence (AI), MLOps

---

[↑ Back to top](#)