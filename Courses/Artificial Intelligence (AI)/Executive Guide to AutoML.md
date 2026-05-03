---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: executive-guide-to-automl
url: "https://www.linkedin.com/learning/executive-guide-to-automl"
duration_minutes: 62
duration: 1h 2m
level: Beginner
updated: 4/3/2023
learners: 24536
skills:
  - Automated Machine Learning (AutoML)
  - Artificial Intelligence (AI)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGu0bi4H4k6Kw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680198412162?e=2147483647&amp;v=beta&amp;t=5nG7gPDk8PRjIhYNiwxqszVJFF1BTEw3NjPSjAuDJuo"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Masterpath in Analytics Leadership for Executives]]'
prev_courses:
  - '[[Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation]]'
next_courses:
  - '[[Predictive Analytics Essential Training- Estimating and Ensuring ROI]]'
path_nav: '[{"path":"Masterpath in Analytics Leadership for Executives","position":4,"total":8,"prev":"Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation","next":"Predictive Analytics Essential Training- Estimating and Ensuring ROI"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/automated-machine-learning-automl
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Executive%20Guide%20to%20AutoML.md)

![Executive Guide to AutoML](https://media.licdn.com/dms/image/v2/D560DAQGu0bi4H4k6Kw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1680198412162?e=2147483647&amp;v=beta&amp;t=5nG7gPDk8PRjIhYNiwxqszVJFF1BTEw3NjPSjAuDJuo)

# Executive Guide to AutoML

> An increasing number of open-source and commercial vendors are attempting to automate machine learning (ML), and analytics leaders need to know how this impacts data science and machine learning in their organizations. In this course, machine learning specialist, trainer, and author Keith McCormick dives into what AutoML can and can't do and raises important questions about team structure and orga

> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-automl) | 1h 2m | Beginner | 25K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [How AutoML is changing analytics teams](#how-automl-is-changing-analytics-teams)
  - [What you should know?](#what-you-should-know)
- [**1. Introducing AutoML**](#1-introducing-automl) (5 videos)
  - [What is AutoML?](#what-is-automl)
  - [Understanding supervised machine learning on structured data](#understanding-supervised-machine-learning-on-structured-data)
  - [Data engineering and ML Ops](#data-engineering-and-ml-ops)
  - [Understanding the ML lifecycle](#understanding-the-ml-lifecycle)
  - [The challenge of ML problem definition](#the-challenge-of-ml-problem-definition)
- [**2. Stages in the ML Lifecycle**](#2-stages-in-the-ml-lifecycle) (6 videos)
  - [Which phases have been automated most successfully?](#which-phases-have-been-automated-most-successfully)
  - [The challenge of automating data understanding](#the-challenge-of-automating-data-understanding)
  - [What AutoML can and can't do during data prep](#what-automl-can-and-cant-do-during-data-prep)
  - [AutoML's capabilities during the modeling phase](#automls-capabilities-during-the-modeling-phase)
  - [Comparing model accuracy and business evaluation](#comparing-model-accuracy-and-business-evaluation)
  - [Monitoring and maintaining models](#monitoring-and-maintaining-models)
- [**3. AutoML Options**](#3-automl-options) (4 videos)
  - [The AutoML vendor landscape](#the-automl-vendor-landscape)
  - [Demonstrating AutoML with KNIME](#demonstrating-automl-with-knime)
  - [A metaphor for AutoML](#a-metaphor-for-automl)
  - [Advice for team composition](#advice-for-team-composition)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How AutoML is changing analytics teams](https://www.linkedin.com/learning/executive-guide-to-automl/how-automl-is-changing-analytics-teams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/how-automl-is-changing-analytics-teams?u=76281980&t=0)** - This course is an exploration of how AutoML technology is changing how humans and computers collaborate to build predictive models. It's not a course about actually building the models but how the emerging technology impacts who is on the team and what their responsibilities are. I've been using various aspects of machine learning automation for decades. The idea is not new. But what is new is how much of the machine learning life cycle can be automated and who participates in building models. So join me as we decipher the language of AutoML and explore what you need to know as an executive in an analytics leadership role.

> [!info]- Semantic Content
>
> **Definitions:** is an  (1)
> **Speakers:** - this (1)

#### [What you should know?](https://www.linkedin.com/learning/executive-guide-to-automl/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/what-you-should-know?u=76281980&t=0)** - [Instructor] So what should you already know to fully enjoy and benefit from this course? The only prerequisite is an interest in machine learning models and a rough idea of what we're trying to accomplish when we build predictive models with machine learning. If you're starting absolutely from scratch, you could consider taking [[Predictive Analytics]] Essentials for Executives first, but if you have a particular interest in AutoML, you'll likely be okay taking this course first. The other course will provide some very helpful context. In this course, there are two terms that we'll mention only briefly that are helpful to know because they'll define the scope of the course. We'll be focused on AutoML, helping to build supervised machine learning models on structured data, but we will see an example of data like this in the course. If you are going to be a practitioner and it will be your job to actually build the models, this course won't give you enough to achieve that goal. You'll want to consider taking the practitioner course, Predictive Analytics Essentials [[Data Mining]]. If you're curious about AutoML, it's probably okay to watch this first, but eventually you'll need some important information from the other course. But AutoML is an interesting topic of its own, so let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (2), [[Data Mining]] (1)
> **Definitions:** is an  (2)
> **Prerequisites:** prerequisite (1), you'll need (1)
> **Speakers:** - [instructor] (1)


### 1. Introducing AutoML

[↑ Back to Table of Contents](#table-of-contents)

#### [What is AutoML?](https://www.linkedin.com/learning/executive-guide-to-automl/what-is-automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/what-is-automl?u=76281980&t=1)** - The term AutoML describes the attempt to replace human experts with software for various tasks associated with building machine learning models. It's that simple. What isn't simple is navigating exactly what tasks we mean, and what kinds of experts we mean The [[Data Science]] community and even the most optimistic and ambitious vendors agree. We haven't reached the point where we have true end-to-end automation. That's 100% software with no human expertise. The current state of affairs is that some tasks in the machine learning life cycle are largely a solved problem. Others are receiving lots of R&D with vendors competing to address them, and others remain tasks for data scientists and [[Business Leadership]]. So someone with expertise has to oversee this process, but AutoML potentially makes their work much more efficient. So where's the debate? Well, it's in two areas. Which tasks are solved, and how much expertise is needed to oversee the AutoML. Therefore, to participate in this debate and to better understand software demonstrations and marketing materials, one has to be fairly familiar with the tasks in the machine learning life cycle.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1), [[Business Leadership]] (1)
> **Speakers:** - the (1)

#### [Understanding supervised machine learning on structured data](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-supervised-machine-learning-on-structured-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-supervised-machine-learning-on-structured-data?u=76281980&t=0)** - It will be helpful to clear up the kinds of data and the kinds of use cases that we're talking about. We're going to be focused on the business application of AutoML, but the easiest way to understand the kinds of problems that most AutoML solutions are focused on is to look at a couple of examples. So let's take a look at the datasets and the well known repository for machine learning datasets maintained by UC Irvine. This is exactly where data scientists go when they want to practice machine learning, and it's also where a lot of AutoML vendors will go to produce demonstrations. Okay, I wanted you to actually see what this data looks like. So here I am in the UCI Machine Learning Repository. This is not something that's only for members of the UC Irvine community. This is a very well known practice dataset. They're trying on a new version of the website so let's go to that version, and I want to actually show you how a data scientist might search for a practice dataset. This might even be something that they would search for if they wanted to see how well AutoML worked on the practice dataset. So let me walk you through how this works. I can click on view datasets and under data type I'm going to choose tabular. Tabular data and structured data is basically the same thing. If you scroll down a little bit,
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-supervised-machine-learning-on-structured-data?u=76281980&t=94)** you can actually also say that you want to do classification or regression. I'm going to say classification for now. Classification is a type of [[Supervised Learning]]. When we say supervised learning on structured data in terms of this website, that's classification on tabular data. Same thing. This one's interesting. Let's take a look. Predict students' dropout and academic success. Clearly it's a classification task and there's 37 attributes. What is this all about? Well, if you scroll down, you can see that it describes the variables and we have things like marital status and application mode. But if we go further down, we can skip all the way. We can show more rows per page and we can go all the way to the end. The final variable is explicitly called target. If you have a dataset that looks like this, you're not at the very beginning. It implies that you've already completed business misunderstanding, you've already done a substantial amount of data understanding, you've already done a substantial amount of data prep, and you're basically ready to model. So that's something important when you're looking at datasets like this or perhaps you're seeing an AutoML demo. Is that a dataset that looks like this is somewhat jumping in the middle of the process,
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-supervised-machine-learning-on-structured-data?u=76281980&t=187)** but it's what's typically used for demonstrations and for practice, including by data scientists when they need to rehearse something or try out a new piece of software. Let's take a look at this in [[Microsoft Excel|Excel]]. Okay, so I think you can see why it's called tabular or structured. You know, you really can think of both of those as being synonyms for the phrase, "looks like Excel," or "looks like a spreadsheet," because that's really what tabular and structured means. So every row is a person and the columns are characteristics about that person. If we scroll to the far right-hand side to get past our variables here, we can see the final column is the target variable that we were talking about and that's what makes this supervised, because we know whether they were a dropout or a graduate. Now the machine learning algorithm can take this knowledge combined with the three dozen input variables and establish a relationship all on its own between the three dozen input variables and the target and it's able to predict future cases as to whether or not they will be a dropout or they will be a graduate. So there you have it. This is the kind of datasets that we're talking about for the vast majority of use cases when we're talking about AutoML.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Supervised Learning]] (2), [[Microsoft Excel|Excel]] (2)
> **UI Navigation:** scroll down (2), go to (1), click on (1)
> **Definitions:** is a  (3)
> **Env Vars:** uci (1)
> **Speakers:** - it (1)

#### [Data engineering and ML Ops](https://www.linkedin.com/learning/executive-guide-to-automl/data-engineering-and-ml-ops?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/data-engineering-and-ml-ops?u=76281980&t=0)** - To get a thorough understanding of the machine learning lifecycle, it's helpful to discuss two aspects, the broad view, where [[Data Science]] tasks fit into analytics overall, and the narrow view, getting more specific about the building of machine learning models. The use of terms [[Data Engineering]] and ML Ops varies a bit from team to team, but there's a growing consensus that they are different skills with different career paths. Data engineering work is done before model building and ML Ops is done after model building. Data engineering refers to preparing the data infrastructure so that analytics and other activities can be successful. There's also a growing consensus that no one can master all of these skill sets, so data engineering and data science are becoming two different career paths. There's less consensus about ML Ops, but most would agree that it involves the various tasks of putting the models to work in a production environment. What's less clear is who is in charge of it? Are data scientists and ML engineers on different career paths as well? If so, how exactly do they differ?
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-automl/data-engineering-and-ml-ops?u=76281980&t=93)** There's no agreed-upon answer yet, but we can say this. Once the models are built, in order to provide value, they have to be deployed, and ML Ops refers to putting machine learning models into production and doing so at scale. Why is this broad view important to understand? Some vendors will emphasize their ability to support machine learning from end to end. In order to make that claim, they try to support data engineering tasks, or at least the transition from data engineering to machine learning. The same is true for deployment in ML Ops. Therefore, if you have different teams for these three distinct phases, it's a good idea to involve the data engineers and the ML Ops team when evaluating an AutoML solution, even if they won't be the primary users of the AutoML tool. They will want to ensure that the tool is compatible with the tools that they use. Of course, some vendors will try to meet the needs of all three teams. The details are still evolving, but ultimately the team approach is here to stay.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Engineering]] (6), [[Data Science]] (2)
> **Definitions:** refers to (2)
> **CLI Commands:** make (1)
> **Speakers:** - to (1)

#### [Understanding the ML lifecycle](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-the-ml-lifecycle?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-the-ml-lifecycle?u=76281980&t=0)** - What about the machine learning lifecycle in the more narrow sense? What tasks are required to build a machine learning model? Which are the tasks that a data scientist has to worry about, and how do we come to understand which tasks AutoML is capable of automating? I'm a fan of a particular articulation of the lifecycle called [[CRISP-DM]], the Cross-Industry Standard Process for [[Data Mining]]. Now, you may encounter some others, but I like CRISP-DM because it's tool-agnostic, it's independent both by industry and by use case, and it was carefully researched and well-documented over multiple years. Finally, since it was the first on the scene, everything else is based on it. I think it's still very useful to understand the lifecycle. Here are the phases shown in the famous circular diagram. We'll revisit most of these phases again in more detail later, but for now, I'll briefly describe each phase. The most important task of the business understanding phase is translating the business problem into a machine learning problem. One way to think about it is that at the start
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-the-ml-lifecycle?u=76281980&t=94)** of the six phases you're in the language of the business, then the language of machine learning, and as we'll see, after modeling, you have to translate back. Data understanding is not just exploration. There's a specific mission that has to be accomplished. You are determining the suitability of the data in its current state to solve the machine learning problem. [[Data Preparation]] then addresses the shortcomings in the data as identified in data understanding. I've actually dedicated an entire course to how data understanding produces a task list for data preparation. The modeling phase is the one that gets all the attention. It's the phase where the model is built. It's the primary reason that we're here. Auto-ML options differ in their features but all AutoML solutions automate modeling. The modeling phase also includes tasks like determining model accuracy. The evaluation phase, in contrast, requires that you translate back into the language of the business. So it's not all about accuracy, it's about the suitability of the model to solving the business problem, and therefore, you should use [[Business Metrics]] as defined during the business understanding phase if you're going to evaluate if you've succeeded. Deployment then takes the model and puts it into production.
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-automl/understanding-the-ml-lifecycle?u=76281980&t=191)** Scaling and scoring models efficiently takes a somewhat different set of skills than building models, which is why [[MLOps]] has been trending lately. There's much more to it than that, of course. In addition to the six phases, there are 24 explicitly named tasks and many recommendations for documentations in CRISP-DM. I discuss it in my [[Predictive Analytics]] Essentials Data Mining Course. For this course, CRISP-DM is going to serve to help us organize the course because we'll revisit each phase and ask, where can AutoML potentially help us on the tasks required during this phase?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CRISP-DM]] (4), [[Data Mining]] (2), [[Data Preparation]] (2), [[Business Metrics]] (1), [[MLOps]] (1)
> **Env Vars:** crisp (4)
> **Prerequisites:** required to (1)
> **Speakers:** - what (1)

#### [The challenge of ML problem definition](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-ml-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-ml-problem-definition?u=76281980&t=0)** - Have you ever heard about Kaggle? Kaggle is a website where companies sponsor competitions so that they can crowdsource innovation on specific machine learning tasks like trying to predict credit card default. American Express, for instance, recently sponsored one and offered up to $100,000 in prize money. These competitions have been a powerful way for data scientists to hone their skills and to prove to others that they have what it takes. I think overall it's been a very positive influence on the [[Data Science]] community but it has created some confusion and occasionally inspired some weird behaviors. Accuracy is everything in these competitions so the resulting models tend to be highly complex with the top teams fighting over a very small fraction of a single percent of accuracy. But AutoML can do surprisingly well in these competitions. With prize money that can be as much as a million dollars at stake, some of the world's best machine learning competitors participate. Yet AutoML can do quite well. If business understanding and data understanding are difficult for computers to do, how does it rank so well? It's because they are competitions about the modeling phase only, of course with some data prep involved. They don't test one's ability on all of the phases. And the reason is that the sponsors spend weeks
>
> **[1:39](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-ml-problem-definition?u=76281980&t=99)** or months working with the Kaggle team to set up the competition. What they are doing to set it up is to find a clear success criterion and is therefore somewhat analogous to the business understanding phase. That's all done in advance before the competition begins. So we have to be careful to place some of these impressive performances in their proper context.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** be careful (1)
> **Prerequisites:** set up (1)
> **Speakers:** - have (1)


### 2. Stages in the ML Lifecycle

[↑ Back to Table of Contents](#table-of-contents)

#### [Which phases have been automated most successfully?](https://www.linkedin.com/learning/executive-guide-to-automl/which-phases-have-been-automated-most-successfully?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/which-phases-have-been-automated-most-successfully?u=76281980&t=1)** - We've discussed that business understanding and problem definition is at least for now an exclusively human activity. Short of attempting to have some pre-built templates for certain use cases, no AutoML vendor has tried to position their solution as addressing this phase. However, for each of the remaining phases, there's been some progress in automating at least some tasks within the phase. For data understanding, a number of tools attempt to automate the generation of reports and graphics. [[Data Preparation]] is a hot area of research and competition. It is perhaps the biggest market differentiator at the moment. The challenge is that there are different aspects of data prep and some have been more successfully automated than others. Modeling has been automated with some success for decades. Dozens of tools do this very well and only the rare data scientist makes no use of this automation. Evaluation however is tricky. All tools will compare models on model accuracy but they can't translate back into the language of the business. Deployment is something that all tools have to make some attempt to address. However, as we've discussed, it's been increasingly interpreted as a distinct phase so some teams will choose to explore pairing AutoML tools with [[MLOps]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[MLOps]] (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)

#### [The challenge of automating data understanding](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-automating-data-understanding?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-automating-data-understanding?u=76281980&t=1)** - There's a common question posed in philosophy classes. Does a fallen tree make a sound if there's no one there to hear it? It's become a metaphor for a highly abstract philosophical question. Bear with me though. We can ask a similar question about AutoML. Can a computer perform the data understanding phase if there's no one there to see it? In other words, AutoML can automatically generate some amazing data visualizations. It can even automatically act on certain things that it finds. For instance, most AutoML will do some missing [[Data Processing]] and outlier detection. I attended an [H2O.AI](https://H2O.AI) conference and had the opportunity to see Leland Wilkinson speak there. He died just a couple of years later in 2021. H2O is the vendor that makes the very well-received driverless AI commercial AutoML product. Wilkinson was a absolute giant in the data visualization community writing the very influential book, "The Grammar of Graphics" and he was doing amazing work for H2O. His lecture was about the beautiful graphics that he helped create and how they were thoughtfully generated by the software automatically based on a variety of criteria. With almost no instruction the software could generate a remarkable report about the entire data set. I was very impressed but also struck by the substantial amount
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-automl/the-challenge-of-automating-data-understanding?u=76281980&t=95)** of [[Statistics]] knowledge that he assumed in his lecture. Yet the report was ultimately designed for human consumption. So there has to be a data scientist or very knowledgeable practitioner to fully digest what the data visualizations are revealing and to understand the implications for the data prep phase to follow. So can you automate the generation of an exploratory data analysis report? You can, and it's impressive what can be done but you still need a human to understand the report before you can be certain that the data is suited for the business problem and ready for analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Processing]] (1), [[Statistics]] (1)
> **Env Vars:** h2o (3)
> **CLI Commands:** make (1)
> **URLs:** [h2o.ai](https://h2o.ai) (1)
> **Cross-References:** later in (1)
> **Definitions:** in other words (1)
> **Analogies:** for instance (1)
> **Speakers:** - there (1)

#### [What AutoML can and can't do during data prep](https://www.linkedin.com/learning/executive-guide-to-automl/what-automl-can-and-can-t-do-during-data-prep?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/what-automl-can-and-can-t-do-during-data-prep?u=76281980&t=1)** - Data prep isn't just about [[Data Cleaning]]. The toughest yet most important part involves what is called [[Feature Engineering]]. AutoML has made considerable strides in recent years. In fact, it's remarkable the progress that's been made regarding data prep. But this phase is still tough for computers to do. One determinant is whether the feature engineering draws upon subject matter expertise or not. So let's discuss each scenario First with an example of something that doesn't require any knowledge of what the variable represents. Let me explain with a specific example. Here's a classic example that data scientists would encounter in [[Data Science]] 101. It's called one hot encoding. When you have a categorical variable, in this case, we just call it variable one. You have to convert it into a series of binary variables. So A on variable one becomes true on the new variable V1_A and faults on the others, the same for B. And then we get another instance of A in the third row and then in the fourth row of the data. Category C is true on the new variable V1_C and faults on the other two columns. The theory explaining why this is done is not especially important at the moment.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-automl/what-automl-can-and-can-t-do-during-data-prep?u=76281980&t=93)** You would learn this in a course on [[Linear Regression]] and other data science courses. In fact, this is discussed quite often in the [[LinkedIn]] Learning Library. What is important is that AutoML can easily recognize this situation and can act even though it has no understanding of what variable one means in the real world. There are dozens of tasks like this that computers can be taught to do that do not require an understanding of what the variables mean. And AutoML can do almost all of them quite well. So what about data prep activities that do require an understanding of what the variables actually mean? Let's take luggage fees and whether they are predictive of customer churn as an example. And by churn I simply mean that a previously loyal customer gets frustrated and switches airlines. You would think that machine learning is smart enough that you just load the variables and it takes care of the [[Representational State Transfer (REST)|rest]]. Why not just put in all the transactions and it finds the pattern on its own? I've learned over the years that many are quite surprised at how much help the modeling [[Algorithms]] need. For instance, we could try dividing fees and dollars over the last 12 months
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-automl/what-automl-can-and-can-t-do-during-data-prep?u=76281980&t=190)** by their total spend and put that ratio in a new variable that we could call luggage fee ratio. But we could also do it as events, which in this case would essentially be flights. So we could do how many flights had fees divided by the total. And this might behave quite differently in the model or maybe it's a change, maybe it's an increase in fees. We could calculate the delta. We could start by comparing the current 12 months to the previous 12 months or we could try the most recent 90 days compared to the previous nine months. And by the way, that's a completely different number and might give us different results. So it's a bit laborious to try all of these possibilities. But subject matter expertise helps. It's a bit of an art, frankly and it's a mix of subject matter expertise and persistence. One could do a whole course on this and courses on feature engineering, as it's called, actually exist. But historically, this is what has separated average modelers from expert modelers. And it's hard to automate but it's not impossible to automate, on modern machines, AutoML developers can try to do all of the possibilities
>
> **[4:45](https://www.linkedin.com/learning/executive-guide-to-automl/what-automl-can-and-can-t-do-during-data-prep?u=76281980&t=285)** but that means trying some nonsensical possibilities. But that ultimately might not matter. By systematically trying everything on fast computers and then letting the modeling algorithms wash out the unsuccessful tries, AutoML can try to mimic the results of the traditional method. But obviously it's not quite the same. So this is why data prep is perhaps the greatest market differentiator among the AutoML solutions. Some vendors have been much more successful than others in trying to duplicate this task with automation. So it's also perhaps where the greatest potential lies in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (3), [[Data Science]] (2), [[Algorithms]] (2), [[Data Cleaning]] (1), [[Linear Regression]] (1)
> **Env Vars:** v1_a (1), v1_c (1)
> **Definitions:** is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - data (1)

#### [AutoML's capabilities during the modeling phase](https://www.linkedin.com/learning/executive-guide-to-automl/automl-s-capabilities-during-the-modeling-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/automl-s-capabilities-during-the-modeling-phase?u=76281980&t=1)** - The modeling phase is where AutoML really shines. In fact, it's hard to imagine that there are any data scientists out there that aren't taking advantage of some kind of automation, programming loop, or other shortcut. First, there's always some kind of tournament of [[Algorithms]]. It's a simple matter to run all of the available modeling algorithms, and AutoML has been doing this for decades. Data scientists have many different ways to build models in their toolkit. You may even be familiar with some of them, or at least the more famous ones like [[Decision Trees]], [[Neural Networks]], random forests, XGBoost and so on. All software vendors are drawing upon a similar set of these approaches, and it's a simple matter on contemporary machines to run them all and then report back on which ones did the best job. Sometimes the top one automatically gets sent to the next step. Sometimes the AutoML tool produces a report for a data scientist to look over. But that's not all AutoML does during the modeling phase. Contemporary options perform a much more thorough search than that. To better understand this search, we have to understand what a parameter is. So we'll turn our attention to that now.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-automl/automl-s-capabilities-during-the-modeling-phase?u=76281980&t=95)** So we have to understand what parameters are. And then in a moment we're going to contrast it with what are called hyperparameters. But first, the parameters. So this is a very simple model. It's what's called a regression tree. And this example is actually drawn from a course that is dedicated to decision trees. So what this tree is telling us is that the average miles per gallon for a collection of cars that have been analyzed is 23.46 miles per gallon. And that's shown at the top of the tree. Then the tree automatically finds the input variables that are best able to make this prediction. And in this case, it looks like it's the number of cylinders, horsepower, and weight. So what's a parameter? Let's take a look. Here we see that the miles per gallon goes up considerably to 29.68, I'm rounding, if the number of cylinders is four or five. So if that's the number of cylinders, and it's also true that the weight is over 2217 pounds, then the miles per gallon comes down a little bit, but it's still higher than the overall average at 26.43. The parameter is the specific numbers that the tree is identifying:
>
> **[3:08](https://www.linkedin.com/learning/executive-guide-to-automl/automl-s-capabilities-during-the-modeling-phase?u=76281980&t=188)** the four or five cylinders, and then this weight of 2217 pounds. So the parameters are the values that the machine learning model finds that are used to make future predictions. So what's a hyperparameter? Well, we have to give the model instructions, or rather the data scientists do or possibly AutoML does, and the hyperparameter represents those instructions. So now we are giving the hyperparameters to the model. And we see that the sample size is 82 that the arrow is pointing to. We could determine that the minimum sample size must be more than 50. That kind of instruction would be adjusting a hyperparameter. Or we can indicate there's a maximum height of the tree indicating how detailed we want the tree to be. And this has implications for accuracy: a larger tree is more accurate. However, too large a tree can be what's called overfit, and this is the kind of thing that data scientists are trained to do. But AutoML does it as well. So a hyperparameter is the value that we give the machine learning algorithm to control the learning process. Keep in mind, this is a very simple model,
>
> **[4:44](https://www.linkedin.com/learning/executive-guide-to-automl/automl-s-capabilities-during-the-modeling-phase?u=76281980&t=284)** much less complex than the models that AutoML is producing. But it's enough to understand a phenomenon that you might observe. Let's say it only takes a minute or so to run a simple model on your data. Then you ask for a dozen different algorithms, but then it takes longer than you expect. It's because it's not just running those algorithms. It's doing data prep, of course, but it's also sometimes searching for the optimal hyperparameters to all of those algorithms, and they all have different kinds. It's working very hard to find those optimal values. So the modeling phase is where AutoML is the most mature, and it can save your [[Data Science]] team a lot of time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (5), [[Decision Trees]] (2), [[Neural Networks]] (1), [[Data Science]] (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** 23.46 (1), 29.68 (1), 26.43 (1)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - the (1)

#### [Comparing model accuracy and business evaluation](https://www.linkedin.com/learning/executive-guide-to-automl/comparing-model-accuracy-and-business-evaluation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/comparing-model-accuracy-and-business-evaluation?u=76281980&t=0)** - [Instructor] Technical metrics. Every data scientist has their favorite. For regression models, we have metrics like R squared, root mean squared error, or MAPE, the mean absolute percent error. For classification problems, we have accuracy of course, but there are others like the true positive rate, or a fairly famous one is the area under the curve. Data scientists spend a lot of time learning about these and dozens more. So how does it affect our use of AutoML? Well, first we have to pick one because AutoML will use it to rank the models, and that takes some knowledge. You should always learn where your AutoML settings are that control this, but also they each have strengths and weaknesses. But generally speaking, AutoML is very good at technical metrics. So it's not our primary concern. The bigger concern is that we have to use a technical measure because it's convenient for ranking purposes, but it's not really getting at what we care about. I love to quote Tom Khabaza's Nine Laws of [[Data Mining]]. Here is his Value Law, and he states, "The value of data mining results is not determined by the accuracy or stability of predictive models." Well, gosh, we were just talking about ways of measuring accuracy. So what is he getting at?
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-automl/comparing-model-accuracy-and-business-evaluation?u=76281980&t=95)** What he's saying is that of course we want our models to be accurate and stable, but that doesn't mean that the best model is the most accurate or the most stable. What are some other considerations? Well, there's a lot of them. So what we really want to do during the evaluation phase, and this has to be done outside of AutoML, so the way that you can think about it is that AutoML is going to give you your semi-finalists but you should choose the best model taking into account not only accuracy, but also your [[Business Metrics]]. Here are just a few. One is your ROI estimation of the project as a whole. One way to think about this is what is the value of a true positive or a false positive? If you are doing predictive maintenance, a true positive might be that you've saved expensive equipment from damage. So the value of the true positive is the cost of the equipment, or at least the repair that you avoided. A false positive might mean taking the machine out of service for a half hour unnecessarily. These have monetary values attached to them. What about workforce implications? Do you have the person power to investigate true positives? So sticking with the predictive maintenance example, do you have sufficient maintenance personnel
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-automl/comparing-model-accuracy-and-business-evaluation?u=76281980&t=190)** to handle the number of true positives that you think the model is going to generate? Then there's organizational resistance, which I found over the years is one of the most common reasons that modeling projects ultimately fail. Are there reasons, like the ones we've already mentioned, why there might be some teams or individuals that are not in favor of the project because their role will change, or the demands put on them will increase, or because they don't have faith in the model? What about ML Ops team input? How fast will the model run in production? Not how long did AutoML take to find the model, but how fast will it score new cases down the road? And finally, you ultimately have to do an A/B test. No, I don't mean just running some math on modeling results, but what will the whole system, humans and computers working together, be like after the model is implemented? 'Cause the model won't be running in a vacuum. It's going to be part of your organization. And all of these considerations and more are an important part of the evaluation phase.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (2), [[Business Metrics]] (1)
> **Env Vars:** mape (1), roi (1)
> **CLI Commands:** find (1)
> **Best Practices:** you should always (1)
> **Speakers:** - [instructor] (1)

#### [Monitoring and maintaining models](https://www.linkedin.com/learning/executive-guide-to-automl/monitoring-and-maintaining-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/monitoring-and-maintaining-models?u=76281980&t=0)** - [Instructor] Machine learning models inevitably degrade over time and it often happens slowly. Once the model's been adopted and put into production, many organizations do not keep a careful eye on it and its performance eventually suffers. The solution I believe, is one of the least appreciated benefits of Auto ML but something that offers tremendous potential during the deployment phase. Auto ML is a powerful way to monitor your model's performance. Might not seem obvious at first certainly not as one of the most powerful contributions, but let me explain. It's not just that the world changes, the models degrade because our internal processes and knowledge is influenced by the use of the model, and it could even be individuals outside of the organization like our company's customers. Tom Khabaza puts it this way in the "Nine Laws of [[Data Mining]]", "All patterns are subject to change because they reflect not only a changing world but also our changing understanding." How can Auto ML help with this? Well, here's where the opportunity lies. Once you've built the original model you can leverage Auto ML's powerful ability to run lots of modeling experiments as new data becomes available.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-automl/monitoring-and-maintaining-models?u=76281980&t=94)** It's safe to assume that the decisions you made during business understanding, data understanding, and data prep still apply, because you're using the modeling only as an alert system. When new models become more accurate it tells you that the old model has degraded. So there's a common approach supported in many Auto ML systems generally referred to as Champion Challenger. On a regular basis, as data is updated, the Auto ML runs again, this is often as frequently as nightly. Since there was a careful development and evaluation process to choose the initial champion, it will have the initial advantage. But when there's a new champion that wins by a non-trivial amount, it indicates that the original model has potentially degraded and the [[Data Science]] team should take a look. It's a powerful way to leverage the power of Auto ML while monitoring a large number of models in a scalable way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Mining]] (1), [[Data Science]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. AutoML Options

[↑ Back to Table of Contents](#table-of-contents)

#### [The AutoML vendor landscape](https://www.linkedin.com/learning/executive-guide-to-automl/the-automl-vendor-landscape?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/the-automl-vendor-landscape?u=76281980&t=0)** - [Instructor] I want to to give you a taste of the options out there. Without that, it will all feel out of context but there are dozens of options. In an attempt at a complete taxonomy or a market analysis would warrant a much more thorough discussion. At this point, I just want suggest three possible categories of solutions. Then I'll have a bit of advice on how to learn more. Importantly, I'm not trying to do something definitive with this list, I'm simply trying to list some examples of each type. First, there are several vendors, many more than just these three, that are well known specifically for their AutoML capabilities. These are the kinds of brands and many more that you might encounter at a conference expo, for instance. Second, there are coding libraries. Of course, that requires that you're a coder, but they're very popular for that segment. Of these three, the newer is probably FLAML, but all three of them are quite popular. And notice that H2O is actually the same brand as Driverless AI, H2O being a coding library, and Driverless AI being a commercial product. So again, there's a lot to learn in terms of the marketplace here. Then we shouldn't forget this third category. It gets less attention these days, but there are many general purpose [[Predictive Analytics]] platforms,
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-automl/the-automl-vendor-landscape?u=76281980&t=94)** some of which that have been around for decades and that have large user communities that are primarily targeted at data scientists, but have added AutoML functionality in addition to their other features. This as well is not a comprehensive list. So what happens if you try to research this or perhaps to try to find a [[Market Research]] report or some reviews? Well, one report you might come across is Gartner's report on what they call Multipersona [[Data Science]] and Machine Learning platforms, which they define as, "A cohesive and composable portfolio of [[Microsoft Products|products]] and capabilities, offering augmented and automated support to a diversity of user types and their collaboration." They go on to say, "This is achieved by bringing the power of data science and machine learning to a wider nontechnical and technical audience while hiding complexity under the hood by automation and augmentation throughout all phases." I recommend this report because they are prepared to hunt down all the major players in the space. And I think if you're interested in AutoML, then what that typically means is
>
> **[3:07](https://www.linkedin.com/learning/executive-guide-to-automl/the-automl-vendor-landscape?u=76281980&t=187)** that you want either faster development of models or you want to support a more diverse team or both. And that's exactly what they're describing here. Let's take a quick look at the report. So here it is, including the definitions that I just quoted, and you can see there's a bunch of them and you can sort by industry and company size. You see one that wasn't in the slide, Alteryx, which is well known, Metlab, [[IBM SPSS]] [[Statistics]], which is different than IBM SPSS model, or by the way, RapidMiner and many, many more. So I think if you're interested in researching AutoML it's probably because you want to understand these kinds of platforms that assist, automate, and augment, as Gartner is describing in this report.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (2), [[IBM SPSS]] (2), [[Predictive Analytics]] (1), [[Market Research]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** h2o (2), ibm (2), spss (2), flaml (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Demonstrating AutoML with KNIME](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=0)** - [Speaker] I've chosen for our example an example in the [[Knime]] analytics platform. So the reason that I've done this is that it's open source, so anybody can try it. Also, it's a very well documented example. And finally, it's a straightforward example. I'm not intending this demonstration primarily so that you will master AutoML, N Knime or even Knime more generally. Rather, I want to give you an idea of what AutoML looks like, and I could have chosen any of more than a dozen software packages to do that but I think this example will work quite well. Also, I want to give you some idea of what it would feel like to download some software, do a trial, watch a demo, and so on. So let's begin. Here, on the Knime hub, which is a website with supporting material, there's AutoML for both a regression example, that means that we're predicting a scale value and classification example. So if we scroll down, we can see the regression example is up at the top. I'm going to walk you through that in a moment. And then we have the classification example, is just below that. And I happen to know, because I've looked at the examples, that the dataset for the first regression example is the bike sharing dataset.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=93)** So if we click on that, it will actually take us to, you guessed it, the UCI data repository. So the folks at Knime have chosen this very well known source of data for the bike data. What's great about the fact that the Knime folks have grabbed the dataset from the UCI data repositories is that there's a description here. So if you want to know more about the bike data set, you can read it. And what we're doing is we're going to have as our target variable, this count variable that you see down there. So let's go back to the examples. And if we scroll down to the data sets again, I can tell you that the classification example is the census income data. And at first you might think that doesn't sound like a category, but it's because the target is whether or not the person exceeds 50 K. So it's above below, and that's why it's classification and not regression. So there you go, more information on the data, if you choose to investigate that. And then I want to show you a great example that makes this easy. This is the kind of thing that prompted me to use this as the example, because all you have to do is take this icon and drag it onto the software window. I'm going to show you where this goes and the example will automatically load. So let's switch over to Knime and see how that works. Now, here we are in Knime, and when you launch Knime, it's going to look like this. So there's a very important step.
>
> **[3:06](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=186)** We have some pretty sophisticated components being used here. So it's very important that you have the latest version of Knime. Let me show you how to ensure that. You want to go up to Knime file after you install it. And they make that pretty easy. You want to go to update Knime and verify that you're completely up to date. So if I click on that, it says, no updates were found. That's what you want to see. But also, and this would be easy to miss, you want to go to Knime extensions and make sure that you have all of the extensions because you will need them. For an example, with components like this. You want to do all of that before you do the drag and drop step. Then you want to take the drag and drop icon that we saw on the Knime hub and drag it to the local workspace. It will then load, which will take a few moments and you're going to see it, here it is here. Then you're going to double click on it and by double clicking on it, you'll get the example in a window in the center here. Now, your version of Knime might look a little different in that you might have a lot of small [[Windows]] blocking your view. I've closed a number of those windows, so you can see what's going on. So we read in the dataset. In fact, if you right click and configure, you can choose the dataset
>
> **[4:39](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=279)** but we're going to stay with the default example because we don't want to have to change any settings. Going to click on cancel. Then it partition the data. So for those of you that are brand new to machine learning, what partitioning means is that we're going to build the model on the train data set but we're going to verify its accuracy on the test data set. This is a standard step. All AutoML software does it. Sometimes it's more visible than others. Here at Knime it's highly visible what's going on. Then here's where the actual regression modeling is done. Now remember, the basic idea of modeling in AutoML is that we're trying all the possible [[Algorithms]]. So if we right click and configure, we see that it's going to try regression tree, [[Linear Regression]], polynomial regression, H20s, GLM model and a whole bunch of others. And its identified count as the target column. in all of these variable season, year, month and so on as input variables. We're going to click on cancel. And since we have green lights throughout this workflow, that's because I've already executed it. When you execute it, it's going to take a few minutes because remember it's running a bunch of models. So I can right click and go down to interactive view because mine is done now. I'm going to click on that and it actually shows us the performance of all of those different options. So in this particular case, H2O was the winner.
>
> **[6:16](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=376)** Now if you recall, we briefly mentioned H2O before. H2O is a coding library. So the Knime folks are calling that library and it's the top performer here. Now you might ask, why is that the top performer? It's got the smallest bar. Well the smallest bar is the smallest error. So small bar here is good news. We're going to go ahead and close that. And that's a very basic example but you can see the components that all AutoML options are going to have, the ability to run lots of different algorithms and then rank the performance of those algorithms on some criteria. Here, root mean square error, which is one of the many ways to measure performance on regression models. We're not quite done though because I want to show you how much additional complexity is hidden here. If we right click on the AutoML regression node, and we go down to component and open, we actually see that this node is calling a lot of other functionality, including auto data prep. And if we look at the description of auto data prep, we see that it's doing a bunch of things. It's doing normalization, it's doing missing value imputation and it's doing something that we talked about earlier. One hot encoding.
>
> **[7:52](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=472)** So I'm going to go back to the main window and we won't talk in as much detail about the classification example because it's similar but we can confirm that the data set is the census data set. That it is also running a bunch of algorithms but the list is a little bit different. We're seeing some examples here that we didn't see before and vice versa. And therefore we can anticipate that when we look at the interactive view, it also is going to be a little different. And at first you might say, why is this a bit more complicated? Well, because we're not simply ranking on root mean square error, we're ranking on accuracy, recall, precision, F measure, and even Cohen's kappa. So I'm not going to define all of those. I'm not going to get into the technical details, but that's exactly what we've come to expect from AutoML. The ability to run lots of different models, evaluate them and rank them on performance. We're nearly done. But I want to show you one additional detail and that is we want to evaluate our performance on the test data. So if you follow the arrows here, the train data is going from the partition node up to the model and that's where we looked at the report. But the test data is flowing directly not on the curved line,
>
> **[9:26](https://www.linkedin.com/learning/executive-guide-to-automl/demonstrating-automl-with-knime?u=76281980&t=566)** but on the horizontal line. So if we go to the numeric scorer, we get to evaluate the performance on the model on the test data. And that's very important because the test data was not the data that was used to build the model but becomes more important to evaluate the performance of the model. And when we right click on that and go to [[Statistics]], for instance, we get a bunch of them. We get the R squared, we get the root mean squared error that we were referring to earlier but we also get a bunch of others. I'll close that. And for classification, we also get that, but it's a different kind of report. We can get what's called a confusion matrix or we can get some accuracy statistics. Let's go to the confusion matrix. You may have encountered this before. This is when you talk about your true positives, your false positives, your true negatives and your false negatives. And if you ever take a machine learning modeling course, they spend a lot of time discussing those kinds of things. The point that I want to close with is that we're doing a different set of algorithms for regression. We use different evaluation criteria, both on the model itself and on the performance on the test data. So there's really a comprehensive competition, as it were, amongst all these different modeling algorithms and it really makes it fast and easy for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Knime]] (17), [[Algorithms]] (6), [[Windows]] (2), [[Statistics]] (2), [[Linear Regression]] (1)
> **UI Navigation:** click on (8), go to (5), scroll down (2), drag and drop (2)
> **Env Vars:** h2o (3), uci (2), glm (1)
> **CLI Commands:** node (3), make (2)
> **Definitions:** is a  (4), means that (1)
> **Cross-References:** go back to (2), we talked about (1)
> **Prerequisites:** configure (2), install (1)
> **Analogies:** for instance (1)

#### [A metaphor for AutoML](https://www.linkedin.com/learning/executive-guide-to-automl/a-metaphor-for-automl?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/a-metaphor-for-automl?u=76281980&t=1)** - I'd like to offer two metaphors for AutoML that I think will put the current technology into a helpful perspective. At first, it seems that since so many steps have been successfully automated that using AutoML is a bit like taking a picture on our smartphones. Anyone can simply point and click. Advanced features including remarkable AI technologies and even things like LiteAR produce great pictures, even under challenging conditions. While it seems we're nearly there, I think there's an important difference. Any camera owner can safely determine if the resulting picture is good. When building machine learning models, it's not always obvious that a model is problematic. It takes some skill and experience to verify that a model is worthy of being put into production and meets the necessary business requirements. Also, we're all increasingly aware of the potential for bias. Vendors, believe it or not, are actively working on addressing testing bias but it's in the early stages. For reasons we've seen, we're probably many years away from an AutoML that can help us measure business value. So here's a better metaphor; AutoML is currently more like an advanced camera with an auto setting. Some users will tend to keep the camera on auto
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-automl/a-metaphor-for-automl?u=76281980&t=96)** and others will be more adept at using the advanced features. But we can override the defaults when we aren't getting the result that we need. So at least some team members need to understand the complete range of options to make full use of the technology and to ensure that the model is appropriate to put into production.

> [!info]- Semantic Content
>
> **Analogies:** picture (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - i (1)

#### [Advice for team composition](https://www.linkedin.com/learning/executive-guide-to-automl/advice-for-team-composition?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/executive-guide-to-automl/advice-for-team-composition?u=76281980&t=1)** - Let's talk about the three types of experts that would likely use AutoML. The senior data scientist, the junior data scientist and the business user, sometimes called the citizen data scientist. First, the senior data scientist. Are they so skilled that they don't bother with AutoML? Not in my experience. Data scientists seek out anything that could potentially save them time. However, they likely use AutoML to rapidly prototype while the final product is very much their own work. The well respected data scientist, Claudia Perlich, explained it quite well in an interview with TDWI. "There is nothing wrong with tools "that make me more efficient." But then she goes on to explain that data prep is so important that the data scientist has to be quite hands-on in producing the final product. As she puts it, "[[Data Preparation]] is their job. "If you are not good at data preparation, "you are not a good data scientist." And then she concludes with "The validity of any analysis "is resting almost completely on the preparation." So it's best to think of AutoML as augmenting the data scientist and thereby speeding them along. As the technology gets better, the added speed will continue to increase.
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-automl/advice-for-team-composition?u=76281980&t=96)** Remember, however, that phases, like business understanding and evaluation, are almost impossible to speed up because they can't be scaled. They involve careful interaction with the business. Now, the junior data scientist, and by that, I mean a newer data scientist on the team. They likely have extensive training, but they might be newer to the business, less experienced with a specific industry in which they are applying machine learning or less experienced with working with leadership to get models approved and into production. Note that it's usually not a more experienced data scientist coaching them on something technical. It's usually everything else. What AutoML means for this member of the team is that they can prototype faster and with less help. Whether this results in a ratio of four data scientists to one senior data scientist or a ratio of a dozen or more depends on your team. But that senior expertise can be scaled more than ever before. Finally, the business user. From time to time, folks use the phrase citizen data scientist to describe a business user who with the help of technology can perform [[Data Science]] tasks. Sometimes the phrase is the democratization of data science and machine learning.
>
> **[3:12](https://www.linkedin.com/learning/executive-guide-to-automl/advice-for-team-composition?u=76281980&t=192)** Here's the decision that I think analytics leadership has to make. Do they intend that business users will be producing models that will be sent to the ML ops team and put into production? When I ask business leaders, I generally get the sense that they haven't thought about it this way, but that the answer is ultimately no. Instead, the goal is to explore and possibly prototype models that would eventually be sent to the data science team. If the goal is purely exploratory, then what we are really democratizing is the access to data and the ability to explore it. If that is more consistent with your goals, than perhaps many business users would probably be just as well served with a good [[Business Intelligence (BI)|business intelligence]] tool. In general, I think it's good advice to decentralize access to data, but to centralize machine learning model production. Each organization will have to navigate this, while [[Prototyping]] models can be powerful, models that are sent into production should be carefully reviewed and aligned with business goals.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Science]] (3), [[Data Preparation]] (2), [[Business Intelligence (BI)|Business intelligence]] (1), [[Prototyping]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** tdwi (1)
> **Best Practices:** it's best to (1)
> **Warnings:** note that (1)
> **Speakers:** - let (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/executive-guide-to-automl/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-automl/next-steps?u=76281980&t=0)** - So, where should you go next on your learning journey? It's always helpful and often fun to give yourself a hands-on experience. Take on one of the prepared examples that vendors always provide for this purpose and give yourself a half hour or more to try it. You'll certainly get a deeper understanding about what it's all about. If you want to deepen your understanding of the machine learning modeling lifecycle, I have another course in the library that will be very helpful for that. And it's also specifically developed for analytics leaders. [[Predictive Analytics Essential Training For Executives]] discusses each of the Christian phases and puts them into a more complete context. Whichever learning experience you choose next, I hope you'll follow me on [[LinkedIn]] and you'll let me know about your progress. And if you see me at a conference, I hope that you'll say hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (1), [[LinkedIn]] (1)
> **Speakers:** - so (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Automated Machine Learning (AutoML)
- Artificial Intelligence (AI)

## Path Context

### In [[Masterpath in Analytics Leadership for Executives]]
← [[Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation]] | **4 of 8** | [[Predictive Analytics Essential Training- Estimating and Ensuring ROI]] →

## Appears In

- [[Masterpath in Analytics Leadership for Executives]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI)
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI)
- [[Big Data in the Age of AI]] — Artificial Intelligence (AI)
- [[Complete Guide to Excel Statistics with Copilot]] — Artificial Intelligence (AI)
- [[Hands-On AI- RAG using LlamaIndex]] — Artificial Intelligence (AI)

---

[↑ Back to top](#)