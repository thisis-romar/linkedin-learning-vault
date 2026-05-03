---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: executive-guide-to-predictive-modeling-strategy-at-scale
url: "https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale"
duration_minutes: 62
duration: 1h 2m
level: Beginner
updated: 4/5/2024
learners: 104585
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Predictive Modeling
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEZ9BpB52FHPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567800423045?e=2147483647&amp;v=beta&amp;t=ckrFgDiJ9cwJIkjjRH2fn412NP8SMXOXrFdxAOPYIek"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Masterpath in Analytics Leadership for Executives]]'
prev_courses:
  - '[[Predictive Analytics Essential Training For Executives]]'
next_courses:
  - '[[Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation]]'
path_nav: '[{"path":"Masterpath in Analytics Leadership for Executives","position":2,"total":8,"prev":"Predictive Analytics Essential Training For Executives","next":"Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/predictive-modeling
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Executive%20Guide%20to%20Predictive%20Modeling%20Strategy%20at%20Scale.md)

![Executive Guide to Predictive Modeling Strategy at Scale](https://media.licdn.com/dms/image/v2/C560DAQEZ9BpB52FHPg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567800423045?e=2147483647&amp;v=beta&amp;t=ckrFgDiJ9cwJIkjjRH2fn412NP8SMXOXrFdxAOPYIek)

# Executive Guide to Predictive Modeling Strategy at Scale

> Building world-class predictive analytics solutions requires recognizing that the challenges of scale and sample size fluctuate greatly at different stages of a project. How do you know how much data to use? What is too little, what is too much? How does your infrastructure need to scale with the volume and demands of the project? This course walks step by step through the strategic and tactical a

> [LinkedIn Learning](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale) | 1h 2m | Beginner | 105K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Scaling machine learning initiatives](#scaling-machine-learning-initiatives)
  - [Defining terms](#defining-terms)
- [**1. The Phases of a Machine Learning Project**](#1-the-phases-of-a-machine-learning-project) (4 videos)
  - [Data and supervised machine learning](#data-and-supervised-machine-learning)
  - [The nine big data bottlenecks](#the-nine-big-data-bottlenecks)
  - [The stages of predictive analytics data](#the-stages-of-predictive-analytics-data)
  - [Why you might have too little data](#why-you-might-have-too-little-data)
- [**2. Designing a Machine Learning Dataset**](#2-designing-a-machine-learning-dataset) (6 videos)
  - [How much data do I need?](#how-much-data-do-i-need)
  - [Balancing](#balancing)
  - [Who truly has big data?](#who-truly-has-big-data)
  - [Assessing data](#assessing-data)
  - [Selecting: Data that should be left out](#selecting-data-that-should-be-left-out)
  - [Seasonality and time alignment](#seasonality-and-time-alignment)
- [**3. Data Prep Challenges**](#3-data-prep-challenges) (4 videos)
  - [Data and the data scientist](#data-and-the-data-scientist)
  - [Aggregate and restructure](#aggregate-and-restructure)
  - [Dummy coding](#dummy-coding)
  - [Feature engineering](#feature-engineering)
- [**4. Chapter Name**](#4-chapter-name) (7 videos)
  - [Understanding the modeling process](#understanding-the-modeling-process)
  - [Slow algorithms: Brute force](#slow-algorithms-brute-force)
  - [Slow algorithms: More calculations](#slow-algorithms-more-calculations)
  - [Slow algorithms: More models](#slow-algorithms-more-models)
  - [How to sample properly](#how-to-sample-properly)
  - [Modeling with missing data](#modeling-with-missing-data)
  - [Looking ahead to deployment and scoring in production](#looking-ahead-to-deployment-and-scoring-in-production)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continuing your predictive modeling journey](#continuing-your-predictive-modeling-journey)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Scaling machine learning initiatives](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/scaling-machine-learning-initiatives-23239794?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/scaling-machine-learning-initiatives-23239794?u=76281980&t=0)** - How much data do you need to build a machine learning model? How do data scientists answer this question? If you're in analytics management, it's an important question because you need to make crucial decisions about resources. Many organizations marshal resources sufficient to build models on every bit of data they've got, but that scenario of needing all the data is vanishingly rare. I'm Keith McCormick, and for nearly three decades I've been helping clients build predictive models. In this course, we'll talk about building models and data. How much is just enough? How much is so much that it might pose a challenge? Join me as we explore how to build predictive models at scale.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - how (1)

#### [Defining terms](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/defining-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/defining-terms?u=76281980&t=0)** - [Instructor] I want to begin by reviewing some terms that will allow us to identify where we'll be focused in this course. My favorite definition of [[Artificial Intelligence (AI)|artificial intelligence]] is one that I'm going to borrow from a thought leader in this space named Colin Shearer. "A computer doing something that, "if done by a human being, "would be judged to be intelligent." Now of course, artificial intelligence is a huge field and involves all kinds of things like visual recognition, driverless cars, and devices in our home, like smart thermostats or devices like Amazon Alexa. We're going to be focused on traditional machine learning, which encompasses two of the most important topics of all, supervised and unsupervised machine learning. I'm going to define traditional machine learning in the following way, a broad term that generally refers to presenting carefully curated data to computer [[Algorithms]] that find patterns and systematically generate models. These models are going to be in the form of formulas or rule sets. While the algorithms are explicitly programmed by humans, the models are automatically generated. We're going to be even more focused than that. Throughout the course, we're going to be talking about supervised machine learning. Supervised machine learning is going to rely upon historical data set, where some important outcome is known. So given a data set with a target variable and input variables,
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/defining-terms?u=76281980&t=94)** a modeling algorithm automatically generates a model, establishes a relationship between the target variable and those input variables. This allows us to make predictions, and that's supervised machine learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Artificial Intelligence (AI)|Artificial intelligence]] (2), [[Algorithms]] (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. The Phases of a Machine Learning Project

[↑ Back to Table of Contents](#table-of-contents)

#### [Data and supervised machine learning](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-supervised-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-supervised-machine-learning?u=76281980&t=0)** - [Instructor] Now we're going to do a high level review of supervised machine learning, which essentially is taking historical data to build a model which we then score on new data. So let's take a closer look. In our historical data we have to have an established outcome. So if we're talking about loans, they paid or perhaps they defaulted on their mortgage. We need that end result to be known. Then we need predictors. There can be numerous predictors. Hopefully we have dozens or hundreds of them. Examples could include things like this. Whether or not the loan in question is their primary mortgage or maybe it's a second mortgage. Or what percentage of their income is being paid to housing. And this can help us predict that end result. So in order to do it. In order to map those predictors to the end result, we need a modeling algorithm. And modelers are experts in this. And there's going to be many of them that they might draw upon. They have names like Decision Tree, Support Vector Machine, [[Logistic Regression]], or Neural Network. There are dozens more. We're going to use that historical data to establish the model. And inside the model it's just some kind of a formula, very frequently in the form of a rule set. Like if variable x is true and the value of y is less than 100 then we think that they might default. Now, the past data is the basis of that rule set or model. But we've got to score it on new data,
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-supervised-machine-learning?u=76281980&t=93)** on a regular basis. Every month or every night or so on. And this is going to produce a score. It's not just going to tell us default or not. It's going to give us a [[Probability]], like this. So we have just four loan IDs and we have these scores. 6% chance, 80% chance, 1% chance that they're going to default. And we use that score to predict the end result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (1), [[Probability]] (1)
> **Definitions:** essentially is (1)
> **Speakers:** - [instructor] (1)

#### [The nine big data bottlenecks](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-nine-big-data-bottlenecks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-nine-big-data-bottlenecks?u=76281980&t=0)** - [Instructor] I'm going to identify nine steps in the building of supervised machine learning models where you want to pause and ask yourself, what volume of data am I processing at this step? Store. First, you have to store the data and steward it so that the organization can access it as needed. Typically, when organizations come up with a [[Big Data]] strategy, they are focused almost entirely on the [[Data Storage]] aspect, and assume that all other phases are done on the entirety of the data. It's simply not true. The volume of data will change dramatically from step to step in the process. Assess. The data scientist who is in charge of modeling has to have access to all of the data so that they can assess it. They can't be exactly certain of what they'll need until they take a good look. While the assessment is pretty basic, they might have to look at several years' worth of data. The most important thing that they're searching for is to figure out, how much data do I need to build this model? The volume of data tends to start going down after this step. Select. The select step is closely tied to the business problem. For instance, you might be sending promotions out via email. Well, you might only analyze loyalty card customers if they are the only ones that you have emails for. The volume of data will tend to decrease dramatically during this step. Integrate. Based upon the assessment, the basic structure of the modeling data set takes shape.
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-nine-big-data-bottlenecks?u=76281980&t=95)** What often makes this computationally intensive is that in order to aggregate the data, you might be searching many millions of rows to find the transactions that belong to the cases of interest. Explore. Once you've gotten the data much closer to the form that you'll need, you've got to explore it extensively. At this point, the modeler is looking into [[Data Quality]] issues and identifying strong and weak predictors. This process must be done by the modeler, and can't be delegated to others, so typically, some kind of data sandbox has been created. Prepare. [[Data Preparation]] tends to be very labor-intensive. It's not just cleaning and formatting. The most important task is what's called [[Feature Engineering]], when the modeler is experimenting with many different formulas to help make the predictions. The modeler has to be intimately involved, and it's highly iterative. Model. At this step, we use those fancy [[Algorithms]] that are so closely associated with machine learning, One of the themes of this course is that folks worry too much about data volume during modeling. At this point, much of the hard work has been done, and the data sets have become smaller. This is rarely when data volume is the biggest issue. Scoring. Unlike modeling, which is done infrequently, scoring might be done in real time. It's got to be fast. Most pay too little attention to the speed requirement at this step, and also forget a seemingly obvious, but powerful point. Scoring is sometimes done on just a single record.
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-nine-big-data-bottlenecks?u=76281980&t=191)** Maintain. Folks also underestimate the challenge of this step. If models are going to be routinely refreshed and rebuilt, then you will probably want to automate the entire process. A lot of steps that were done manually at first now have to be transformed into a production step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (1), [[Data Storage]] (1), [[Data Quality]] (1), [[Data Preparation]] (1), [[Feature Engineering]] (1)
> **CLI Commands:** find (1), make (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [The stages of predictive analytics data](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-stages-of-predictive-analytics-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-stages-of-predictive-analytics-data?u=76281980&t=0)** - [Narrator] So let's follow the data through the whole process. When the modeler begins, their almost always starting by looking at lots of transactions. So for instance, we have a bunch of items that people have bought, and we can see that several rows are associated with one customer. What they're looking for at this stage, is things as simple as, how long is the maximum length of time a customers been around? Did they buy just a few things, or did they buy a lot of things? Because, what we want to zero in on is the individual customer level. So here we're looking at just one customer. Mr. Streeter, who lives on Rockwell Lane, and what we have to now do, is pull in all the transactions that belong to just him. So our data set is about to get shorter, but much wider, let's see why. It's not just all those transactions that we're interested in, but all kinds of other things that we can get at that individual level. So we might have had hundred of thousands of transactions, but associated with ten's of thousands of customers. So again, a shorter data set, but made wider by all these facts about the customer that we're accumulating. We end up with something like this. So let's switch over to a churn example, and we can see that we have a data set that's got just one row per customer, and in this historical data, some conclusions been reached. We know that they either stayed loyal
>
> **[1:32](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/the-stages-of-predictive-analytics-data?u=76281980&t=92)** to our cell phone company, or they churned. We're not done yet though. What we have to do, is a terribly important technical step. What the modeler now does is assigns about half of these cases at random to what is called a train data set, or a train partisan. The other half is in the test partisan. So, what the modeler now does is builds the model only on the train data. In a fact, our data size, just got cut in half. It was massively reduced when we went from transactional to customer, and now we're building the model on only half of the customers. We do this, so that we can validate our results against the other half of the data, the test partisan. So now along comes a new customer. We've got to score them, we have to make a prediction for them, and again this can be done on a single row of data. So we have the input variables, the predictors, but we don't know if they're going to churn or not. Which is really the whole point of our modeling project. But what we can do is use that model that's been built and generate a score, and from that score we can make a prediction. This particular customer has a 98% chance of being loyal to our company, according to the model.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), is called (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### [Why you might have too little data](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/why-you-might-have-too-little-data-23238920?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/why-you-might-have-too-little-data-23238920?u=76281980&t=0)** - I want to revisit one of the recurring themes of the course. Sometimes you'll actually discover that you have too little data. Years ago in the [[IBM SPSS]] Modeler and [[CRISP-DM]] communities, we'd hear about the tale of the vanishing terabyte. It was a popular story of a client engagement from many years ago, way back in the 90s in fact, in some ways it's a [[Big Data]] story long before that phrase became popular. The name, the vanishing terabyte alone communicates the basic idea. The [[Data Mining]] consultant in the story was told that their client was very concerned that their systems couldn't handle the volume. As they performed the data understanding phase and began the actual act of choosing the relevant data, they discovered that they only had a few hundred instances of fraud. They may have had a very large number of total transactions, but as is often the case, the critical data points, the fraudulent transactions, were actually quite rare. Overall scale has gone up in the years since, as well as the ability of computers to handle it. But this scenario is just as common as it used to be. In my personal experience on client engagements, I worry about too little data much more often than I worry about the ability to keep up with large scale. Now use cases differ, and as consultants we have different specialties, but it's more common than you might guess.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/why-you-might-have-too-little-data-23238920?u=76281980&t=94)** So what are some of the forces at play that cause your training data set to get smaller and smaller? First, not all the cases are relevant. I worked on a project for a well-known retailer of handbags and leather goods. We were working on a project recommendation model. We chose not to include cash transaction customers because we had no way to look at their purchases over time. Second, going too far back in history sometimes causes problems. 10 years ago or even five years ago, you might have had a very different business than you have now. More data often helps you more accurately model a pattern, but not always if there's been a shift in the pattern. Finally, we've seen that the modeler has to partition the data into train and test partitions, and we're going to see that there's another technical step called balancing, which was a likely factor in the story of the vanishing terabyte. These data prep steps can further reduce the data, so there's lots of reasons you're not going to use all the data in the enterprise data warehouse's training data. Be prepared for this phenomenon of too little data. It's more common than you might think.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IBM SPSS]] (1), [[CRISP-DM]] (1), [[Big Data]] (1), [[Data Mining]] (1)
> **Env Vars:** ibm (1), spss (1), crisp (1)
> **Speakers:** - i (1)


### 2. Designing a Machine Learning Dataset

[↑ Back to Table of Contents](#table-of-contents)

#### [How much data do I need?](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-much-data-do-i-need?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-much-data-do-i-need?u=76281980&t=0)** - [Instructor] So now, we're going to cover some critical concepts that come into play whether your data set is large or small. So, how much data is just enough? Well, let's say you're trying to predict churn, a good rule of thumb is that you should have more than a thousand cases that churned that you can use in training the model, but don't forget, you also need non-churns to compare them to. A thousand of them would be helpful, and also, you need that test data set. Remember, we'll have our train and test partitions. So, the minimum really starts to add up. It might surprise you how often you start to flirt with these minimums. Too little is more common than too much. So, here you can see that to meet those very basic requirements, 4,000 is a nice, round number on the low end. As you can imagine, 4,000 total, isn't the hard part. Sometimes, it's the 2,000 churns because they are more rare than the non-churns. We don't need to go deeply into the theory behind this, but many data scientists advocate having a third data set. It's a kind of double check, but we can see that while this can be helpful, it's tough if we're studying something like aircraft engine failures. We might not have 3,000 of those, so if you've got a little bit less, first of all, you almost certainly won't worry about the validation data set if you don't have your 3,000. You can live without that.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-much-data-do-i-need?u=76281980&t=93)** The next thing that you can sacrifice if you're on the low end, is you can keep the trained data at a thousand plus, but pull back a bit on the number and the test, and this, within reason, will work just fine, but now what do you do if you still don't have enough? If you have less than 1200 churns, things start to get a bit more complicated and the data scientist has to start looking into options. It can be done by starting to dip into their bag of tricks. Over the last two decades, this exact scenario has been present in at least 20% of my projects. It's not as rare as you think.

> [!info]- Semantic Content
>
> **Best Practices:** rule of thumb (1), don't forget (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Balancing](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/balancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/balancing?u=76281980&t=0)** - [Instructor] What do you do if you're analyzing something that is highly out of balance? For instance, it's extremely unlikely that fraud represents half of our insurance claims. We certainly hope not. So perhaps you've got 20,000 fraudulent claims, but over the same period, two million legitimate claims. The concept of balancing is forcing the numbers to be in balance by discarding at random some of the common cases. In this instance, legitimate claims are more common so we discard some of them. I get into the theory of this in more depth in my introduction to classification course. For now, trust in the fact that the modeler does this fairly often and they know how to do it and they do it because it works. For now, let's attend to the following fact. We're suddenly down to just 40,000 cases and we're only going to have half of those cases in our training data set. But don't you want to emphasize training numbers over testing numbers? Yes, that would indeed make sense to do. So of course with a million frauds you don't worry about that, but with these numbers, we probably would make some adjustments. So for instance, we keep 16,000 frauds in the training and put 2,000 in the test and if we wanted to 2,000 in validate as well. Those numbers would be quite reasonable. So for our purposes, here's the punch line. No matter how we slice up train and test, whether we have validate or not,
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/balancing?u=76281980&t=93)** we're down to about 40,000 cases, yet we started with more than two million. Balancing probably affects about a third of projects. So what has a major impact on sample size that is sent to those modeling [[Algorithms]] that are very computationally intensive. This has a huge impact on the whole process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **Speakers:** - [instructor] (1)

#### [Who truly has big data?](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/who-truly-has-big-data-23240813?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/who-truly-has-big-data-23240813?u=76281980&t=0)** - [Lecturer] We've seen that technical requirements like partitioning and balancing and other factors have a dramatic impact in the amount of data that actually gets to those modeling [[Algorithms]]. So, who truly has [[Big Data]], data sets so large that they pose a true scaling problem? Well, remarkably, [[LinkedIn]] has over a billion subscribers worldwide. About half login monthly, but nearly one in five log in daily, and there's an average of 20 INmails sent every second for job opportunities. That's a lot of transactional data. Netflix has over a quarter billion subscribers worldwide. Their most recent engagement report reviewed over 18,000 titles and nearly 100 billion hours viewed, and that was over just a six-month period. So clearly, no one's going to question that we're talking about big data here, but let's talk about two somewhat disguised client examples from my own experience. So imagine that I'm having a conversation with a regional healthcare provider, and they were looking at a very common use case of 30-day re-admit. 30-day re-admit is when someone leaves the hospital and has to return with the same diagnostic code. If that happens within 30 days, then it has implications
>
> **[1:38](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/who-truly-has-big-data-23240813?u=76281980&t=98)** for whether or not that return visit can be billed. So it's a very big deal in [[Healthcare Analytics]]. So naturally, we have tons of transactions in healthcare analytics. Every time a temperature is taken or a drug is administered or blood is drawn. So imagine that you've got 2 billion transactions in the data warehouse. Naturally, you're going to be thinking that we're still and very much a big data situation, but think about what that will look like when it's modeled. Your dependent variable is 30-day re-admit. So a row in the dataset is going to be a patient, not a transaction. You're going to have to aggregate that data, so you're going to end up with hundreds of thousands of rows, not millions of rows, meaning that you probably have more of a data prep challenge than you have a modeling challenge in this case. Let's talk now about a situation that you might encounter with a cell phone carrier. And again, I encountered a similar situation on an actual engagement. We were talking about churn. Churn is when a customer leaves one company for another, so it's type of loyalty analysis, which has been an important use case in [[Predictive Analytics]] for decades. So they have 60 million customers in the data warehouse. By implication, we're probably talking hundreds of millions
>
> **[3:15](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/who-truly-has-big-data-23240813?u=76281980&t=195)** or even billions of phone calls linked to those customers. But how many of those 60 million customers are active? How many of them had at least one phone call in the previous year? A simple question like that will drop the number by tens of millions. So let's plot these four scenarios and look at them visually. If we plot them on active, relevant rows, so remember in the case of the healthcare example, relevant rows would be patients, not transactions, and then we also plotted against recent relevant transactions that belong to those rows. Then we can see, given these two axes, Netflix and LinkedIn are off the chart. They're truly dramatic, both in terms of numbers of subscribers and numbers of events, if you recall the 20 INmails per second, for instance. However, I would place the cell phone carrier and the regional healthcare company more like here on the plot. Active cell phone customers could be as few as 15 or 20 million. Frankly, these are numbers that with contemporary computers you can easily analyze on a laptop, and I've done so many times. You don't need a server. You don't have to worry about pushing that out to the cloud. You don't need distributed systems to handle just 15
>
> **[4:49](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/who-truly-has-big-data-23240813?u=76281980&t=289)** or 20 million rows. So what about the healthcare example? Admittedly, 2 billion is a lot of transactions. That's going to be difficult for the typical data scientists to manipulate on their individual laptop, for instance. However, a quarter million rows is really a modest number. So once the dataset has been transposed and it's down to the quarter million patients and not the 2 billion transactions, then the data scientists can easily manipulate the data and even run modeling algorithms on it. Folks, this is so important because this is where a lot of organizations often get mixed up. They're looking at the total amount of data, including the transactions. If you focus on the relevant row and what the data will actually look like during the modeling phase, you often have a much more manageable number than you thought you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Big Data]] (3), [[Algorithms]] (2), [[LinkedIn]] (2), [[Healthcare Analytics]] (2), [[Predictive Analytics]] (1)
> **Analogies:** imagine (2), for instance (2)
> **Definitions:** is a  (1)
> **Speakers:** - [lecturer] (1)

#### [Assessing data](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/assessing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/assessing-data?u=76281980&t=0)** - [Instructor] Now what I would like to do is kind of invite you to watch my thought process as I assess a data set from the modeler's point of view. What this is going to do is give you an idea of why the modeler has to have access to such a huge amount of data in the early part of the process, while they're trying to figure out what the final form of the data will be. The first thing we're going to do is focus in on the number of transactional rows per case, so let's take a quick look at some transactional data. Now, I may even do this visually at first, like I might look to see that this customer has just a few transactions, but obviously I'm combining this with queries; I can see this customer has many more. Here are some of the questions that I'm asking at this point: What is the maximum number of rows that I'm finding for any particular customer ID? And I might have millions or tens of millions of transactions that I'm looking at, or even more. I'm also curious if there are any case IDs that appear in my transactional data that are not considered active customers or vice versa. In theory this shouldn't happen but in practice you discover those kinds of things. Then I want to get a sense of when I summarize the rows through aggregation, how I'm going to go about doing that and what information I might lose. For instance, turning back to this first customer, we can see that they bought things as expensive as $209,
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/assessing-data?u=76281980&t=95)** but there are also some purchases at $49. I'm not going to preserve all of those individual purchases, but I'm going to do something like a summation or an average, and I have see how varied those purchases are, not just from person to person but within each person. Also, do I want to separately pull the purchases they made with cash from the purchases they made from credit card? By doing so I would be making the data set wider, but what is the data telling me? Is preserving the distinction between those transactional rows going to be important for the analysis? Another one that's on my mind is the date range. Here in the data it looks like this customer's transactions actually were all in 2015; here we have a customer that has some transactions that go as far back as 2010. Again, it seems like we're searching for all these little details, but this is all helping us answer some important questions, like how far back do these transactions go, can I look at just one calendar year and get the full pattern, or will I be missing out if I only look at one calendar year? We're in the early stages of trying to figure that out and that's why the data scientist has to physically look. They can't just have someone pull the data on their behalf, they have to look at this huge amount of data and start to sort this out. Finally, I'm curious about inactive rows. I want to look at my customer IDs and find out
>
> **[3:11](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/assessing-data?u=76281980&t=191)** are there some that had purchases way back in the past but no recent purchases? If that's the case, they might be considered irrelevant to the current business problem, and perhaps I want to drop those. So that's just a taste of what I'm looking for when I do my initial assessment of the data.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Selecting: Data that should be left out](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/selecting-data-that-should-be-left-out?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/selecting-data-that-should-be-left-out?u=76281980&t=0)** - [Instructor] Now, we're going to talk about what data we're going to use and what data we're going to set aside. I also discuss this in my Essential Elements of [[Predictive Analytics]] course, and there, I go into a tad bit more depth and use a different example. So you'll recall that the whole purpose of building these predictive models is to generate a score that allows us to predict an end result. So let's revisit this notion that what we're tryin' to predict is whether or not a mortgage is going to be paid on time or someone might default. At deployment, we're going to let our new data flow through the model, and we're going to generate a score. The rule for the data that we should include is really as simple as this. If it's going to be part of the scoring process, it belongs in the data, and if it's not going to be part of the scoring process down the road when we score our future cases, it doesn't belong in the data set. A lot of times what folks will think is that they're adding bias to the model if they don't use all of their data. It's simply not true, the reverse is true. You want to only include those cases for which the model is relevant. So let's say that the reason that we're building this model is because we're going to proactively refinance folks that are at risk of default. Maybe some loans are not eligible for that refinance program because sometimes banks sell loans to other banks, then it belongs to someone else.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/selecting-data-that-should-be-left-out?u=76281980&t=93)** So even though we originated the loan, they're not eligible for the refinance program. Therefore, loans like that should not be part of the modeling process, either. So when we go to grab our data, we should be very careful to select only the relevant cases. That way, there's proper alignment between the historical data that we used to build the model and the new data that the model is going to be used on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (1)
> **Tools:** notion (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Seasonality and time alignment](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/seasonality-and-time-alignment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/seasonality-and-time-alignment?u=76281980&t=0)** - [Instructor] Now we're going to get into a topic that can become very technical and even somewhat confusing. But gosh, it's an important one. We have to talk about seasonality, the notion of a cohort, and time alignment. In the majority of projects, you're going to end up looking at a year's worth of data. Why? If you look at less than a year, there's all kinds of seasonal effects that you might not detect. For instance, if we were looking at a bunch of cellphone monthly statements, we have dads and grad specials in June, and we have Black Friday specials around the holidays, and we don't know how that's going to impact people upgrading their phones and changing their behaviors in certain ways. So looking at less than a year is risky. If a year is better than a month, why isn't 10 years even better than one year? Technologies come and go, phone plans get discontinued, going back 10 years now, our data becomes very heterogeneous. So one year is often a balance between these two extremes. Let's take a closer look. We're looking at a bunch of monthly contract numbers that are coming in for a cellphone customer. And this is their non-contract spend. So notice that we get $0 fairly often, that's when they're just paying their contract amount, and that's it. But in March and June and some other months, they spent more than the contracted amount.
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/seasonality-and-time-alignment?u=76281980&t=93)** They ran out of data, or they bought something a la carte. We notice the same number popping up, and a subject matter expert could help us figure out what that is, but there's some kind of pattern here where in many months they spend the minimum, but in other months they spend a little extra. How are we going to figure out how this impacts something like churn? This customer as it turns out did indeed churn in December. So what are we going to do? How are we going to figure this out, and how does this shed light on how we're going to put our dataset together? Well, here we go, we're going to start doing a bunch of calculations. Comparing recent behavior to baseline behavior is a very powerful way to get at what is going on psychologically in a customer's mind when they choose to churn. So we'll take the previous three months, we'll just call those the recent months, and their average extra spend is about $22. But over the previous nine months before that, it was about $9 on average. So it's going to look something like this. For this one particular customer, we might have millions of them, but for this one customer, we compare their baseline to their recent, and we get a ratio, gosh that spend is going to climb just before they churn, and that may have had an impact on the churn event, especially when you think we might have dozens or hundreds of variables just like this. So far so good, but here's where it gets complicated. We don't have only individuals that churned
>
> **[3:09](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/seasonality-and-time-alignment?u=76281980&t=189)** in December, we have individuals that have churned at all different times. And the data warehouse in those monthly statements, these statements are referred to by the month. For us, the month is not the key fact about it. It's which months were just prior to the churn event and which baseline months were prior to that? Imagine doing this for millions of customers, tens of millions of monthly statements, all with different churn months. You can see how this gets complicated, and it's probably the most important example that we will see of why the data scientist has to be collaborating with folks in IT to decide how to handle calculations like this efficiently in production, but picking up on the characteristics that the data scientist finds in the data.

> [!info]- Semantic Content
>
> **Analogies:** for instance (1), just like (1), imagine (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Data Prep Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Data and the data scientist](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-the-data-scientist-23234924?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-the-data-scientist-23234924?u=76281980&t=0)** - For both understandable and appropriate reasons, most enterprise [[Data Management]] and [[Data Governance]] is designed around the typical user of enterprise data. When I attend and speak at TDWI conferences, I sit in on the talks of expert enterprise data professionals, and in a variation of the 80/20 rule, they often describe that about 80% of users of data are content with existing tables, data sources, reports, and [[Dashboards]]. The other 20% need some kind of extra attention. Most of these same experts put data scientists in the top 1 to 3% in terms of their need for custom requests and access to unusual data. It's worth pausing to ask why. As we've seen, they're often looking over long time horizons and should also be crossing departmental boundaries, pulling data from multiple silos. No standard, prebuilt monthly or quarterly report is going to do all of that. Frankly, if data scientists aren't at least considering some [[Unstructured Data]], they probably aren't working hard enough to get comprehensive data. Granular requests will be common as well. I remember one of my favorite examples from my own work. On a customer loyalty project, I wanted the billing detail.
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-the-data-scientist-23234924?u=76281980&t=96)** Not just the summary, everything. No one ever asked for that since the billing statement transactional history was really quite detailed, but I also needed unpaid transactional activity, like how often they sent or received a text on an unlimited plan, because only with that could I understand the psychology and behavior of the phone user. Unpaid transactions gave me insight into how they spent time on their phone, and it turned out to be a fruitful analysis on that project that resulted in some new and valuable predictor variables. Now, if you are pulling a quarter billion transactions for 10 million phone customers, a query like that should be done in coordination with the IT team, but that's the kind of request that data scientists might make that is not typical of most analysts. Until the data scientist explores a data request like that, they can't be 100% certain of what they need. We all still need to work together and try to be patient with one another. The data scientist ultimately has to explore the transactions and has to explore the customer file that is produced when all those transactions are manipulated and transposed. And on any project, there's going to be some surprises, and those surprises may prompt you to have to pull the data and transform it again. If this happens two dozen times,
>
> **[3:12](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/data-and-the-data-scientist-23234924?u=76281980&t=192)** then the data scientist is probably new in their role, but even the most veteran modeler may have to make adjustments and pull the data more than once. Initial data exploration is one of the trickiest stages of any modeling project. The challenge is getting all the people and all the machines working together to organize the data that's going to graduate to the next steps, data prep and modeling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Management]] (1), [[Data Governance]] (1), [[Dashboards]] (1), [[Unstructured Data]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** tdwi (1)
> **Speakers:** - for (1)

#### [Aggregate and restructure](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/aggregate-and-restructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/aggregate-and-restructure?u=76281980&t=0)** - [Narrator] In my experience, some of the most important variables get generated when you convert a very tall transactional data set into a case level data set, but you lose a lot of information when you go from a lot of rows to fewer rows so what kind of information do you want to keep? A lot of this will seem obvious like you might do total purchases or median or mean purchases. What might be less obvious at first is it won't be clear to the data scientist which of these variables is going to work best until they're in there assessing and exploring the data. So for instance, somewhat famously in [[Statistics]] means are sensitive to outliers. The presence of just a few outliers can change the mean, but it doesn't change the median as much. Now an experienced data scientist will just grab a few of these but there are some that they won't know about until they look. For instance, looking for something like the number of transactions under five dollars is not something that a data scientist chooses to do because of statistical theory, but because they find something unusual in the data that they want to further explore. You also have to restructure so you don't want to take what could be hundreds of transactions for an individual person and summarize them in just one or two numbers. Sometimes you'll want to do that for each department or category in which they've made purchases. Think about Netflix.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/aggregate-and-restructure?u=76281980&t=94)** Most of use Netflix as a service to watch movies. If all we did was the total number of minutes that we watch Netflix in a calendar year that's not going to be nearly as powerful as if we break it down into documentary minutes, comedy minutes, horror minutes and so on. And this is what we mean by restructuring. Dozens if not hundreds of variables will come from this process of aggregating and restructuring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1)
> **Analogies:** for instance (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### [Dummy coding](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/dummy-coding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/dummy-coding?u=76281980&t=0)** - [Instructor] Now, we're going to take a moment to talk about an aspect of [[Data Preparation]], which might at first seem like a minor technical detail. But pretty much everyone who's involved in the project, both the modelers as well as the folks that are helping provide and prep the data need to know about this, it's called dummy coding. So let's say you're making a prediction, and one of your predictors is employment category. So here, we've got folks on salary, we've got some independent contractors, some part-time wage and some full-time wage. In general, what we're going to do now is we're going to transform this so that whenever they are true in a particular category, they're going to get a one, and otherwise they're going to get a false. So again, we've got four salary IC we'll call it, part-time, full-time. What does that end up looking like? It ends up looking like this. So our original variable had four categories, and now we have four new variables, Salary Yes-No, which is true or false, Independent Contractor Yes-No, and so on, okay? So, why do you have to know this if you're in a data prep role, or perhaps in an IT role? Isn't this something that the modelers just worry about, here's why it's important. A lot of modeling software will automate this internally. Sometimes even the modelers don't notice that all of this is going on, 'cause the software will just do it. So then when you go and put the model into production and you're generating scores,
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/dummy-coding?u=76281980&t=94)** you go, where did this FTW variable come from? We gave it a variable employment category, and now we have these other variables. Who made them, where are they? This is critical if you're going to take the model out of one software platform, and carry it over to something else. What if you build in a commercial package, but you're going to deploy it in [[SQL]]? You have to know that these were generated behind the scenes so that you can score and deploy the model correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Data Preparation]] (1), [[SQL]] (1)
> **Env Vars:** ftw (1), sql (1)
> **Speakers:** - [instructor] (1)

#### [Feature engineering](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/feature-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/feature-engineering?u=76281980&t=0)** - [Instructor] Pretty much everything we've been talking about in regards to [[Data Preparation]] is a kind of [[Feature Engineering]]. Now, the cross-industry standard process for [[Data Mining]] likes to call this data construction but the more common term these days is feature engineering. What it basically is is extracting the meaning out of variables by using a whole bunch of different formulas, so we've already seen that we might calculate a ratio or a delta comparing recent behavior to baseline behavior. We generate all kinds of variables through aggregating and restructuring. But once it's already in its basic form, one row per customer, or one row per patient, one row per loan, we're still going to continue doing formulas. Let me show you a couple of quick examples. Dates, for instance, are not very useful to these predictive models but the gaps between dates is very interesting to modeling, so we're going to be doing what's called date arithmetic. You also might extract a fact about a date that it was a day during the business week as opposed to on the weekend. You might also be extracting information from a whole host of codes and IDs, for instance, the second character in a VIN number is how you figure out the manufacturer of the vehicle. Finally, a lot of folks think of [[Text Mining]] as a kind of modeling and it's reasonable to say that but you can also think of it as a kind of data prep because an instance like this,
>
> **[1:33](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/feature-engineering?u=76281980&t=93)** the customer said my bag was lost and I still had to pay a bag fee, we're extracting that Fee_Concept and we're creating a Boolean variable that says that for this consumer, Fee_Concept was true. So, it's also a kind of feature engineering and we might generate hundreds of variables just like this that are generated through text mining. So, just to give you an idea of how terribly important this is, let me tell you about a project that I did a few years ago and just the volume of variables that we did in this way. We ended up generating more than 800 variables that we considered for inclusion in the model. Of those more than 800, only 60 were pulled directly from the data warehouse, so therefore more than 700 had been engineered by us. The final model used about 80 variables which is actually quite a bit in a model. Of those 80, only six were pulled directly off the data warehouse, so all of the critical variables or nearly all had been created through feature engineering. The reason all of this is so critical to our current discussion is that all of these calculations are eventually going to become part of the scoring and deployment process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Feature Engineering]] (4), [[Text Mining]] (2), [[Data Preparation]] (1), [[Data Mining]] (1)
> **Analogies:** for instance (2), think of it as (1), just like (1)
> **Env Vars:** vin (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Chapter Name

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the modeling process](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/understanding-the-modeling-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/understanding-the-modeling-process?u=76281980&t=0)** - [Instructor] I've mentioned that I think that most folks overestimate the scaling concerns regarding the modeling phase. I want to walk through the modeling phase from the point of view of the modeler to put that comment into proper context. At the beginning of the modeling phase, an organized modeler should have a list of all of the different [[Algorithms]] and settings that they're going to try. Now, I wanted a manageable list for our purposes here, but keep in mind that the list would be several dozen, and very possibly over 100 combinations of algorithms and settings. So let me give you a sense of the kinds of things you'd be experimenting with. You'd certainly do more than one algorithm. Most modelers are going to have access to many of these. Here, I've listed C&RT, Support Vector Machine, Neural Net, and [[Logistic Regression]], but there are many others. Then, the modeler's going to be changing settings, as well, so for instance, in Support Vector Machines, there's something very technical called the regularization parameter. And they call this kind of thing changing the hyperparameters. But you're going to be changing these settings. There's going to be a bunch of those. Then, we've talked about balancing in this course. The modeler, though, if they're being diligent, is going to try data that's been balanced and very possibly, data that has not been balanced, as well, and they're going to have the skills to know what to experiment with. But the decisions here should be made empirically and not from some theoretical basis. You just try and try again. Then some algorithms are better at using all the variables, and other algorithms benefit from the modeler
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/understanding-the-modeling-process?u=76281980&t=95)** choosing the best variables first and then running the algorithms, so you have to experiment with this. Ultimately what's happening is these 80 or 100 or 120 attempts are all being ranked on train and test accuracy, and the modeler knows how to do that. So what is critical for us in this course, does it matter if this is running overnight? Does it matter if you write a little bit of a loop in your code and you're trying 10 different values of C in your Support Vector Machine between when you leave for the evening and come back to the [[Microsoft Office|office]] in the morning? The answer, in short, is that it doesn't. So the reason that you really don't have to worry about [[Scalability]] in the modeling phase, unless you get to huge, huge numbers, is it doesn't matter that much if the model takes a half hour or an hour or even a few hours to run because you're only going through this process once. Where you have to worry about these algorithms is during scoring, and then you have to worry about them again during model rebuilding, both of which we will talk about.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (6), [[Logistic Regression]] (1), [[Microsoft Office|Office]] (1), [[Scalability]] (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Slow algorithms: Brute force](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-brute-force?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-brute-force?u=76281980&t=0)** - [Narrator] Now we're going to talk about three reasons why some algorithmic approaches are much slower than others. The first is that some modeling [[Algorithms]] they tend to be of the machine learning style, perform brute-force calculations. Let me show you what I mean. This is tiny little data set, but we're trying to predict whether or not an expected mom is going to have a low birth weight baby. If we use a statistically based approach, what it's going to do is only perform about a dozen calculations or so between a dozen and two dozen. Specifically what it's going to do to figure out that that cut point between lower risk and higher risk is 107 pounds is it's going to break all of the expectant moms into deciles, less than 100 pounds going all the way up with the highest one being over 171 pounds. Then it's going to perform a calculation on just those 10 groups to decide where that cut point should be. If we're using a machine learning technique on the very same data it's going to use a brute force approach. It's going to take every single expectant mom and rank them from lowest to highest weight and try all possible cut points. So if you were doing something like predictive maintenance on machinery and you had heat or pressure being measured to three decimal places
>
> **[1:36](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-brute-force?u=76281980&t=96)** every measurement might be different and you might be comparing tens or hundreds of thousands of measurements in very large data sets. So this can be a difference of an order of magnitude or two orders of magnitude in terms of speed comparing the two groups. Here you would never notice the difference and up to a million rows of data, you would probably never notice the difference, but at high levels you would.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **Speakers:** - [narrator] (1)

#### [Slow algorithms: More calculations](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-more-calculations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-more-calculations?u=76281980&t=0)** - [Instructor] The second reason that some [[Algorithms]] are much slower than others is some algorithms just perform more calculations. Let's take a look. This is an artificial neural network that's been built on the same data set. All we're trying to do is predict whether or not an expectant mom will have a low birth weight baby. Now, [[Artificial Neural Networks]] get quite technical, but take a look. I just want you to attend to the very large number of lines. If we were using a statistically-based approach, we've only got three variables here, weight of the mom, uterine irritability, and hypertension. A statistical approach would only do four calculations, one per variable and what's called the constant, but the point is there would only be four. But look at all these lines, many, many more, so the neural net is doing many more calculations. That makes it more accurate, but it makes it slower. Over here, we've got six times five lines, and yes, indeed, there's a relationship between the number of shapes on the left and the number of shapes in the middle. Over here, we've got six times two. The traditional technique would have just four numbers that have to be fit, what's called coefficients. The neural net's got 42. On data sets of a couple hundred thousand or a million, or even a couple million, you're not going to notice the difference, but if you've got very, very large data sets, you will start to notice the difference between the number of calculations that have to be performed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2), [[Artificial Neural Networks]] (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Slow algorithms: More models](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-more-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-more-models?u=76281980&t=0)** - [Narrator] The third reason why some algorithmic approaches are going to be slower is we literally build more models in some cases. So for instance, going all the way back to the 80's it was proposed that we could build more accurate [[Decision Trees]] if we simply built a bunch of them and then averaged. That's called bagging, but over the years a number of new [[Algorithms]] have been developed that capitalize in this same idea. Somewhat famously there's one called random forests. More recently, there's a fancier one called XGBoost, but all of these do that same basic notion. They build lots of trees and then average them. So think about this now. If you're going to build 50 trees and average them, you know that your computational time is going to be about 50 times more. That can start to catch up with you. There's a completely different sense in which we could talk about building more models. Let me give you an example. Years ago I was running an analytics team and one of the big projects that we did was building models for each SKU so each bike model of a bunch of children's bikes. There were tens of thousands of them, but we also had to build a model for each style of bike at each store location. This was particularly important to get right at Christmas because this company sold a large fraction of its total sales during Christmas time. So picture that now. You've got tens of thousands of SKUs and you've got hundreds of store locations.
>
> **[1:37](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/slow-algorithms-more-models?u=76281980&t=97)** Let's say that you chose an algorithmic approach that was 10 times or 50 times or 100 times slower than a statistical approach like [[Logistic Regression]]. If you only had to build one model, go for it. That added accuracy is going to be very helpful to you, but we're building hundreds of thousands of models. Under these circumstances, you might choose to use a technique even if it was a tiny bit less accurate if you could build this more efficiently. Especially if you're going to rebuild these models every month. So on that particular project, a great choice turned out to be logistic regression which does indeed turn out to be one of those statistically based techniques, but for that project it was the right choice.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (2), [[Decision Trees]] (1), [[Algorithms]] (1)
> **Analogies:** for instance (1), picture (1)
> **Env Vars:** sku (1)
> **Tools:** notion (1)
> **Speakers:** - [narrator] (1)

#### [How to sample properly](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-to-sample-properly?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-to-sample-properly?u=76281980&t=0)** - [Instructor] Now we're going to talk about sampling. I find that a lot of folks are afraid to sample and there's really no need to be. First, in most projects that I do these days, I don't have to worry about sampling because the models will run in just a few minutes, even if I have five or 10 million rows. You get up into tens of millions, it might take 15 or 30 minutes but you'd be surprised how quickly these models will run. Secondly, folks are afraid it's going to introduce some kind of bias. It doesn't tend to and with these techniques I'm about to mention, you can eliminate that concern. First, there is a mistake that some folks make that is easy to avoid. Let me explain. If you're looking at my credit card transactions, it's okay that I'm not included in the sample of customers that you chose to look at but if I add 81 credit card transactions last year, you don't want to sample the transactions because then when you calculate number of transactions from it, you won't get the correct number, 81. So, make sure that you're sampling people, cases, insurance claims, not the transactions that belong to those cases. Also, and this is such an easy trick, sample temporarily. Let's say you're going to run 120 different algorithmic variations, [[Algorithms]], settings, balanced or not and so on. This is so easy, folks. Just go ahead and take a 10% sample,
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/how-to-sample-properly?u=76281980&t=94)** run all 120 of your algorithmic variations on that, identify the top five or 10 and then run those on all the data. You have saved hours or days of processing time and you've lost almost nothing because on a 10% sample, the accuracy that you're going to get is still going to be correct to a few decimal places and you're still ultimately running all of the data. So, it's easy and harmless. Finally, you can just be a little creative. We know that we divide our data into train and test and sometimes validation datasets. Does that mean that we always have to do 1/3, 1/3, 1/3? Of course not. Why not go with 20% train, 40% test and 40% validate if you happen to have 150 million rows? That will work just fine but you've massively reduced the amount of data that's going through the computationally intensive phase but you're still utilizing all the data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Modeling with missing data](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/modeling-with-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/modeling-with-missing-data?u=76281980&t=0)** - [Instructor] Now we're going to talk about a topic that could easily warrant its own course, Modeling with Missing Data. But we're going to try to stay laser focused on the topic at hand, which is the implications of the decisions that we make throughout the entire process with a particular focus on scoring and deployment. You've got to be deployment focused. 100% of the times there's going to be some missing data. Then what happens in most projects is the modeler has to fix it and clean it so that it's not missing. But then at scoring, it's missing again. Everybody has to work together to ensure that the model will work at scoring. Modelers, especially if they're statisticians, are trained to repair and address data issues. This is a critical skill to have on the team, but don't forget to ask yourself if the data even belongs in the model. For instance, before the mortgage crisis, a lot of small real estate investors could get so called no doc loans. Which got that name because they didn't have to submit all of the usual paperwork. If they could show good credit, then they didn't need detailed income documentation. And that documentation could be waved. No one grants those loans anymore though. So if that kind of data is systematically missing, and you figure out why, then they probably don't belong in your brand new loan model anyway. The reason we worry about these issues
>
> **[1:35](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/modeling-with-missing-data?u=76281980&t=95)** is that if you fix the data during modeling, but then it's missing its scoring, whatever fix you introduced, you have to carry over to the scoring process. A technique that all modelers learn is imputing. It's replacing a missing value with an estimate of its value. Sometimes software will even do this automatically, and it can get quite elaborate. But what if your deployment platform is different from your modeling platform? Too often modelers get caught up in the modeling process, and don't think ahead to deployment. Whatever imputation strategy you choose including not doing it at all, has to work during scoring too. One of my favorite solutions to this is just being creative about it. And you can potentially make the issue go away. Let me explain, it's important to remember that what we're doing during modeling is more like inventing a helpful device. Like a light bulb or a vacuum cleaner. It's less like discovering the laws of gravity. In other words, models aren't right, they're reliable and useful, or not. So one of my favorite tricks is making the missing data go away. And this makes it deployment friendly too. One of my favorite examples of this was on a cellphone project. We dealt with missing data by building two models. The problem we had was a big percentage of customers were on their first contract,
>
> **[3:10](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/modeling-with-missing-data?u=76281980&t=190)** so all of our prior contract variables were missing. And there were a bunch of them, and they were good variables too. Imputing would of made no sense in this context, so we built two scoring engines. One for new customers, and one for established customers. It wasn't overly complicated, it got the job done, and at scoring and deployment, all we had to do was score two models instead of one. So it worked great.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for instance (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [Looking ahead to deployment and scoring in production](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/looking-ahead-to-deployment-and-scoring-in-production?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/looking-ahead-to-deployment-and-scoring-in-production?u=76281980&t=0)** - We've seen that modeling is not about simply directing a modeling algorithm at all the data. There's a lot of curation involved, and that curation and other factors generally decrease the amount of data presented to the algorithm. Knowing that, enhances our understanding of issues surrounding scale when we build models. But what about after all of that? It's a topic in its own right, and I have a course that explores deployment and the phases at the end of the life cycle, but we're ready at this point in this course. To summarize some of the issues. First, when you build a model, you're working with a substantial time period, a year at least, and likely more. When you're scoring, it could be a day's worth or a month's worth, or it could even be a single record. Second, we have options when we choose a model to put into production. If an XG boost model is too slow scoring a production, we might find a faster [[Logistic Regression]] model is accurate enough. So scale is as much an evaluation phase issue as it is a deployment issue. Third, you're running a formula or a rule set at scoring, not an algorithm. The speeds will be very different.
>
> **[1:34](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/looking-ahead-to-deployment-and-scoring-in-production?u=76281980&t=94)** Finally, and we've seen this earlier in the course, but it's an important reminder. You might not worry too much if a modeling algorithm runs all night, but you can't keep a client waiting very long at all. So whereas you might be thrilled with a modeling algorithm that runs in an hour, you might need a record scored in under a second to meet the business need. In short, almost every aspect of building models and then using models to score records is different, and you can expect it to be so. The later stages are not just an automated repeat of the modeling phase, but for now, we've accomplished what we set out to do. We've overviewed the model building process from the standpoint of scale and efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Logistic Regression]] (1)
> **CLI Commands:** find (1)
> **Cross-References:** earlier in (1)
> **Definitions:** is a  (1)
> **Speakers:** - we (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continuing your predictive modeling journey](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/continuing-your-predictive-modeling-journey?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/executive-guide-to-predictive-modeling-strategy-at-scale/continuing-your-predictive-modeling-journey?u=76281980&t=0)** - So what are some possible next steps on your journey? Before recommending some courses in the library, I'd like to encourage you to apply what you've learned. If you've already got a model in deployment, consider revisiting your assumptions when you chose the training data. What might have been different if you had chosen different data, perhaps, it's time to refresh the model, and you can use some insights in the course to assemble the training data set. When you're ready for more training, the natural next step would be the course that picks up where this course has just ended, where this course focuses on modeling, executive guide to deploying, monitoring, and maintaining machine learning models focuses on the machine learning lifecycle after modeling. If you want a high-level strategic overview of the entire machine learning lifecycle, you might want to consider [[Predictive Analytics Essential Training For Executives]], or a similar course for [[Data Science]] practitioners, [[Predictive Analytics Essential Training- Data Mining]], whichever you choose. I hope that you'll stay in touch by following me on [[LinkedIn]] and looking out for one of my [[Microsoft Office|office]] hour events. And if you see me at a conference, I hope that you'll say hi.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Predictive Analytics]] (2), [[Data Science]] (1), [[Data Mining]] (1), [[LinkedIn]] (1), [[Microsoft Office|Office]] (1)
> **Speakers:** - so (1)


## Instructor

- [[Keith McCormick]]

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Predictive Modeling

## Path Context

### In [[Masterpath in Analytics Leadership for Executives]]
← [[Predictive Analytics Essential Training For Executives]] | **2 of 8** | [[Executive Guide to Human-in-the-Loop Machine Learning and Data Annotation]] →

## Appears In

- [[Masterpath in Analytics Leadership for Executives]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning & AI Foundations- Linear Regression]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)