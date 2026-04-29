---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: predictive-analytics-essential-training-estimating-and-ensuring-roi
url: "https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi"
duration_minutes: 54
duration: 54m
level: Intermediate
updated: 9/30/2025
learners: 78523
skills:
  - ROI Optimization
  - ROI Management
  - ROI Strategies
  - Predictive Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEp6iwGZ9dKPA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621608850111?e=2147483647&amp;v=beta&amp;t=Ps6HFse2Kr047XDvBygV6lOph3oarWNIpn_FEch9V9E"
linkedin_topic: Data Science
learning_paths:
  - '[[Masterpath in Analytics Leadership for Executives]]'
  - '[[Get Ahead in Business Analytics and Analysis]]'
  - '[[Advance Your Skills in Predictive Analytics]]'
  - '[[Advance Your Business Analytics Skills]]'
prev_courses:
  - '[[Executive Guide to AutoML]]'
  - '[[Business Analytics Foundations- Predictive, Prescriptive, and Experimental Analytics]]'
  - '[[Data Science Foundations- Data Assessment for Predictive Modeling]]'
  - '[[Predictive Analytics Essential Training For Executives]]'
next_courses:
  - '[[Data-Driven Decision-Making for Business Professionals]]'
  - '[[Business Analytics- Forecasting with Exponential Smoothing]]'
  - '[[Statistics Foundations 3- Using Data Sets]]'
  - '[[Using Tableau to Discover Powerful Business Insights]]'
path_nav: '[{"path":"Masterpath in Analytics Leadership for Executives","position":5,"total":8,"prev":"Executive Guide to AutoML","next":"Data-Driven Decision-Making for Business Professionals"},{"path":"Get Ahead in Business Analytics and Analysis","position":13,"total":19,"prev":"Business Analytics Foundations- Predictive, Prescriptive, and Experimental Analytics","next":"Business Analytics- Forecasting with Exponential Smoothing"},{"path":"Advance Your Skills in Predictive Analytics","position":7,"total":8,"prev":"Data Science Foundations- Data Assessment for Predictive Modeling","next":"Statistics Foundations 3- Using Data Sets"},{"path":"Advance Your Business Analytics Skills","position":3,"total":11,"prev":"Predictive Analytics Essential Training For Executives","next":"Using Tableau to Discover Powerful Business Insights"}]'
path_count: 4
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/roi-optimization
  - skill/roi-management
  - skill/roi-strategies
  - skill/predictive-analytics
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Predictive%20Analytics%20Essential%20Training-%20Estimating%20and%20Ensuring%20ROI.md)

![Predictive Analytics Essential Training: Estimating and Ensuring ROI](https://media.licdn.com/dms/image/v2/C4E0DAQEp6iwGZ9dKPA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1621608850111?e=2147483647&amp;v=beta&amp;t=Ps6HFse2Kr047XDvBygV6lOph3oarWNIpn_FEch9V9E)

# Predictive Analytics Essential Training: Estimating and Ensuring ROI

> Nothing is more important to the future of predictive analytics teams than proving their projects have long-term value. Measuring the return on investment (ROI) often can help turn analytics into a visible profit center for your organization. Estimating ROI early—before a project even begins—can also help fast-track approval. Here Keith McCormick shows how to address ROI both before and after the 

> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi) | 54m | Intermediate | 79K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - Introduction
- [**1. Effective Problem Definition**](#1-effective-problem-definition) (4 videos)
  - Estimating ROI
  - Business considerations when measuring ROI
  - ROI starts with problem definition
  - Why estimating ROI is perceived to be challenging
- [**2. Estimating ROI before the Project Starts**](#2-estimating-roi-before-the-project-starts) (6 videos)
  - Introducing the confusion matrix
  - The possible outcomes when a micro decision is made
  - Estimating the overall size of the problem
  - Assigning value to the four possible outcomes
  - The impact of model performance on ROI
  - Two other example scenarios
- [**3. Calculating ROI after the Model Is Built**](#3-calculating-roi-after-the-model-is-built) (4 videos)
  - Determining the cut-off on propensity scores for interventions
  - A/B testing and partial rollout during the evaluation phase
  - Understanding the monitoring phase
  - Revisiting ROI 12 months after deployment
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=0)** - [Keith] Nothing is more important to the future of a predictive analytics team than showing that their projects are producing long-term value to the organization.
>
> **[0:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=10)** Pure excitement about analytics will only take you so far.
>
> **[0:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=13)** Eventually, you have to demonstrate ROI.
>
> **[0:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=17)** I'm Keith McCormick, and I've been designing and conducting analytics projects for 25 years.
>
> **[0:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=22)** In the last 10 years, my focus has been helping executives, analytics leadership, and data scientists collaborate effectively.
>
> **[0:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=31)** In this course, we will not only measure ROI when the project is over, we will estimate it before the project even begins, and we will do this step-by-step.
>
> **[0:43](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=43)** Far too many projects never reach deployment and you don't want that outcome for you or your team, so join me as we discuss how to use analytics to bring maximum value to your organization.
>
> **[0:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introduction?u=76281980&t=57)** Let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** roi (2)
> **Code Keywords:** let (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [keith] (1)


### 1. Effective Problem Definition

> [↑ Back to Table of Contents](#table-of-contents)

#### Estimating ROI
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=0)** - [Instructor] Predictive analytics has been around for decades.
>
> **[0:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=3)** By now, nearly every organization is trying to participate at some level but so many are failing and so few are succeeding.
>
> **[0:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=13)** According to the results of a well-respected survey by Karl Rexer, only 13% report having their models as always being deployed, and that has been the trend for almost 10 years.
>
> **[0:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=27)** According to McKinsey, only a relative handful, what they call breakaway companies are extracting the lion's share of the value of analytics.
>
> **[0:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=38)** One characteristic that these breakaway companies have is that they invest in the last mile, or embedding analytics into the core of all workflows and decision-making processes.
>
> **[0:50](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=50)** To help us keep track of where we are in our journey, we will periodically refer to the cross-industry standard process for data mining or CRISP-DM.
>
> **[1:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=60)** I have much more to say about CRISP-DM in my Essential Elements course.
>
> **[1:05](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=65)** CRISP-DM has six phases, shown here as the columns.
>
> **[1:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=69)** And 24 tasks but just three of the tasks will be mentioned in this course, starting with the assess situation task in the business understanding phase.
>
> **[1:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=80)** That task describes five requirements, two of which are especially relevant to this course, costs and benefits, and risks and contingencies.
>
> **[1:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=92)** The costs and benefits task encourages comparing the monetary value of the costs and benefits as specifically as possible.
>
> **[1:41](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=101)** So the CRISP-DM document is quite explicit that the goal of this course, measuring monetary impact can and should be attempted.
>
> **[1:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=113)** When comparing potential projects in this course, we will attempt to estimate the potential level of effort.
>
> **[1:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=119)** Risks and contingencies are certainly part of that.
>
> **[2:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=123)** Let's see how these factors come together to evaluate a potential project.
>
> **[2:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=128)** What I've observed over the years regarding project evaluation and selection is very consistent with what the Rexer survey results indicate.
>
> **[2:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=138)** A lot of projects fail to reach deployment because very few organizations choose the right projects to commit their time and money to and their resources get invested in the wrong projects.
>
> **[2:33](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=153)** Often, these organizations use a variety of criteria that seem to make sense.
>
> **[2:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=159)** What is the biggest executive pain point?
>
> **[2:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=162)** What do we have the most data to support?
>
> **[2:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=165)** What do our subject matter experts think?
>
> **[2:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=168)** These are all truly important but the most fundamental step of all is how does the project compare to our other choices?
>
> **[2:58](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=178)** And specifically when compared on the following two criteria.
>
> **[3:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=183)** Feasibility and potential value.
>
> **[3:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=187)** To do that, you have to try to measure both.
>
> **[3:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=191)** And just as importantly, you need multiple projects to compare.
>
> **[3:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=197)** The best projects will have high potential payoff and relatively low effort but this analysis only works if you vet numerous projects and explore how numerous good projects compare.
>
> **[3:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=211)** In order to do a proper job at evaluating your options, you must have multiple options.
>
> **[3:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=218)** You can't properly vet projects when you only have one to choose from.
>
> **[3:43](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=223)** You should have at least a half dozen to a dozen.
>
> **[3:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=226)** Projects that matter to executives and subject matter experts but that also rank most highly on feasibility and potential value.
>
> **[3:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=236)** Analytics teams want to be kept busy, so they're extremely reluctant to reject a project if it means that they're left with no project at all.
>
> **[4:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=246)** If you are going to create an environment where the team is able to give an honest assessment, you have to be prepared for some projects to perform weaker than others in the evaluation process.
>
> **[4:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=259)** Everyone can be a lot more candid if the pressure isn't on one all-or-nothing project assessment.
>
> **[4:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=267)** This course is about how to estimate potential value during the earliest stages of the project and then how to eventually measure the value that you achieved after you launched the project.
>
> **[4:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-roi?u=76281980&t=282)** Very few skills have a greater potential to transform your ability and that of your entire analytics team to produce more meaningful and more measurable results.

> [!info]- Semantic Content
>
> **Env Vars:** crisp (4)
> **Code Keywords:** let (1), from. (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Speakers:** - [instructor] (1)

#### Business considerations when measuring ROI
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=0)** - [Instructor] How do we measure ROI on a predictive analytics project?
>
> **[0:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=4)** Don't we just take some measurable gain and then subtract the costs of the data science team?
>
> **[0:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=9)** Well, we could do that, but there's a potential source of debate.
>
> **[0:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=13)** How exactly are we measuring our gain and our costs?
>
> **[0:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=18)** Let's start with the costs of the data science team.
>
> **[0:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=21)** Do we want to merely recoup our expenses like training or software or external consulting?
>
> **[0:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=28)** I've been an external consultant most of my career and some consultants will say that a project has a return if the value of the project is more than their fee.
>
> **[0:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=40)** I firmly believe that you can be more ambitious and I always make the same case when I'm speaking with senior executives about their analytics teams.
>
> **[0:50](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=50)** You should be more comprehensive with how you calculate costs.
>
> **[0:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=54)** Analytics should be a profit center.
>
> **[0:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=56)** I would be looking to earn back enough measurable return that the entire team has paid for all of their expenses, but also their salaries, including analytics leadership.
>
> **[1:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=67)** I like to be even more ambitious than that.
>
> **[1:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=70)** You should take into account the salary contributions of IT and your subject matter experts.
>
> **[1:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=76)** For years now, I've used a million US dollars as a rule of thumb for a bare minimum.
>
> **[1:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=82)** Above that, you have a good chance of subsidizing the team's time, their expenses, and their other costs.
>
> **[1:30](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=90)** Okay, so what about the flip side, the gain?
>
> **[1:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=92)** Here, I like to be conservative.
>
> **[1:35](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=95)** If there is an existing process, I want to measure the delta, the difference in profit or savings compared to the previous system.
>
> **[1:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=105)** It's tempting in the excitement of a new project to exaggerate this value if you measure profit minus expenses, but it's more accurate and persuasive to do a side-by-side comparison with previous systems.
>
> **[2:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=120)** One final point on this measurement, some members of the nonprofit community will make the point that they might measure ROI somewhat differently.
>
> **[2:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=130)** In my experience though, it isn't all that different.
>
> **[2:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=134)** If the gain is cost savings, savings would be evaluated for a for-profit and nonprofit in very similar ways.
>
> **[2:24](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=144)** While the overall goal of the organizations is different, most predictive analytics comes down to a more effective use of resources.
>
> **[2:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=154)** In my experience, you can be very inclusive with the costs and very conservative with the revenue at this stage and still find plenty of promising projects.
>
> **[2:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=166)** It would be counterproductive to make the project look more promising than it really is.
>
> **[2:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/business-considerations-when-measuring-roi?u=76281980&t=171)** You're trying to vet the projects to find the best options, so use the most realistic numbers you can find and the strongest projects will naturally climb to the top.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (3)
> **Env Vars:** roi (2)
> **Code Keywords:** let (1)
> **Definitions:** is an  (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### ROI starts with problem definition
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=0)** - [Instructor] What is the best way to ensure ROI at the end of your projects?
>
> **[0:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=6)** My recommendation is choosing and defining projects in such a way that they're capable of having a measurable ROI.
>
> **[0:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=17)** You should be choosing projects that involve a specific, rather granular decision, what is often called a micro-decision.
>
> **[0:25](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=25)** Should you investigate the insurance claim?
>
> **[0:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=28)** Should you take the machine out of service for unscheduled maintenance?
>
> **[0:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=32)** Should you prescribe a statin to a patient to lower cholesterol?
>
> **[0:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=36)** Just like these examples, they should typically be binary decisions, just two outcomes where it is pretty obvious whether you got it right after the fact but was perhaps not so obvious what to do when the decision was originally made.
>
> **[0:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=53)** There has to be some kind of prediction.
>
> **[0:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=56)** Otherwise, machine learning won't be any help.
>
> **[0:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=59)** And there has to be some intervention strategy or differential strategy based upon the prediction.
>
> **[1:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=68)** Let's illustrate this idea with a very simple example.
>
> **[1:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=71)** If your going to give the discount code to everybody, you don't need a predictive model.
>
> **[1:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=78)** The model would have no monetary value.
>
> **[1:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=81)** If you identify this kind of decision, then you must also have historical data about the past outcome of these decisions, and there must be a non-trivial impact to making the right or wrong decision.
>
> **[1:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=97)** The negative impact typically will have a financial component.
>
> **[1:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=102)** There may be other reasons to avoid wrong decisions beyond the merely financial, sometimes quite serious like injury or illness, but the financial component is usually the easiest to quantify.
>
> **[1:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=115)** Are there other kinds of projects out there that don't fit this paradigm?
>
> **[2:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=120)** Sure.
>
> **[2:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=121)** Some will be more complex, but problems that allow for this binary decision approach are extremely common, and many, many challenges can be defined in this way.
>
> **[2:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=134)** If you look specifically for these kinds of opportunities, you'd be surprised just how many you find.
>
> **[2:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=140)** Let the simple and not the complex be your default approach.
>
> **[2:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=146)** I would estimate that as many as 70 or 80% of everyday decisions in established businesses can be framed as a binary micro-decision.
>
> **[2:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=157)** And this classic type of problem is deployment-friendly and allows you to estimate ROI more easily.
>
> **[2:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=166)** Emphasizing this kind of project is especially important if it's the first project of a newly formed data science team.
>
> **[2:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=174)** That doesn't mean that you should never try to tackle a more abstract and/or more complicated problem, but that should be taken into account when you are trying to decide which projects should be done first and which ones get your time and attention.
>
> **[3:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=191)** Often when it seems there are more than two outcomes, it is really more than one decision point and the decision process has to be broken up into more than one discrete step.
>
> **[3:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=203)** For instance in healthcare, trying to predict a diagnostic code is possible, but there are many thousands of them.
>
> **[3:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=212)** Predicting whether a patient will be readmitted within 30 days of discharge is a binary decision and is almost certainly the more practical way to define the problem.
>
> **[3:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=224)** Tackle these binary outcomes with measurable ROI projects first.
>
> **[3:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/roi-starts-with-problem-definition?u=76281980&t=231)** Go earn yourself some ROI and the political capital that comes with it.

> [!info]- Semantic Content
>
> **Env Vars:** roi (5)
> **Code Keywords:** let (2), abstract (1)
> **Analogies:** just like (1), for instance (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Best Practices:** you should never (1)
> **Speakers:** - [instructor] (1)

#### Why estimating ROI is perceived to be challenging
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=0)** - [Instructor] Many analysts who I speak to about ROI and predictive analytics suggest that it's a fool's errand.
>
> **[0:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=7)** How can you do it if you don't know how accurate the model is going to be?
>
> **[0:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=12)** Or they suggest that spending too much time planning is the death of innovation.
>
> **[0:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=18)** You'll swing and miss more often than you'll hit a home run, so why overthink it?
>
> **[0:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=23)** Play around with the data in the models.
>
> **[0:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=26)** See what's promising and then go to the business and pitch the model.
>
> **[0:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=31)** As I make their case, you might agree that they have a point.
>
> **[0:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=36)** It seems to make sense, but let me make the counterargument.
>
> **[0:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=40)** In my experience, if you are overly focused on data, algorithms, and the overall accuracy of the models, you'll miss the point and get seduced by the fanciest models.
>
> **[0:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=54)** You might be tempted by them, even in instances where they are not the best choice.
>
> **[0:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=59)** The trick is to focus on how the model is going to be used.
>
> **[1:05](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=65)** One of my favorite thought leaders in analytics is Tom Khabaza.
>
> **[1:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=69)** Tom's value law states, "The value of data mining results is not determined by the accuracy or stability of predictive models.
>
> **[1:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=80)** The value of a predictive model is not determined by any technical measure.
>
> **[1:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=86)** Data miners should not focus on predictive accuracy, model stability, or any other technical metric for predictive models at the expense of business insight and business fit."
>
> **[1:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=98)** So it's certainly true that you won't have good estimates of the technical metrics, but you don't need them at this stage.
>
> **[1:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=107)** What you need to know is what are the implications of the models being right or wrong and then how that impacts the business in each individual case for each customer incentive, each patient treatment, each loan, each warranty claim, each fraud and so on.
>
> **[2:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=129)** Rough estimates are enough.
>
> **[2:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=132)** And then you need to know the rough size of the problem.
>
> **[2:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=136)** How many such cases a year, for instance?
>
> **[2:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=140)** That and a little bit of arithmetic and you have enough to rank projects on their merit, not enough to have solid numbers, but enough to tell the difference between a $10 million project and a quarter million dollar project.
>
> **[2:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/why-estimating-roi-is-perceived-to-be-challenging?u=76281980&t=156)** And that's enough to be very useful indeed.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** case, (1), let (1)
> **Env Vars:** roi (1)
> **UI Navigation:** go to (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 2. Estimating ROI before the Project Starts

> [↑ Back to Table of Contents](#table-of-contents)

#### Introducing the confusion matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=0)** - [Instructor] There are a few terms that are so fundamental to our discussion that we should pause for a moment and talk about them.
>
> **[0:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=7)** It will give you some familiarity with the terms so that you can digest this information when it's presented to you.
>
> **[0:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=13)** So if you're an executive and you need to understand a briefing, the amount of detail that I'm about to present will be sufficient.
>
> **[0:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=19)** But if you're going to be the one performing the calculations, you'll want to get more comfortable with these terms and you'll want to review them in greater depth than we do in this course.
>
> **[0:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=31)** Here we go.
>
> **[0:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=32)** A confusion matrix is a special kind of cross-tabulation table that's used to evaluate the performance of a classification model.
>
> **[0:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=40)** Now, this is especially common when trying to evaluate a classification model that has only two outcomes, a so-called binary classification model.
>
> **[0:50](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=50)** There are a couple of other names that you might hear.
>
> **[0:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=52)** Instead of cross-tabulation, you might hear contingency table and you might hear it called an error matrix instead of hearing the term confusion matrix.
>
> **[1:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=63)** Here's how it works.
>
> **[1:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=64)** Imagine if a test were performed for a fairly common illness like strep throat.
>
> **[1:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=69)** Sometimes the outcome is positive.
>
> **[1:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=71)** Other times it's negative, but it's also possible that the test is wrong.
>
> **[1:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=76)** Specifically, you can get a false positive.
>
> **[1:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=79)** You don't have strep, but the test says you do.
>
> **[1:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=82)** Or a false negative.
>
> **[1:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=83)** You do have strep, but the test says you don't.
>
> **[1:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=87)** In statistics, these kinds of errors have special names.
>
> **[1:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=91)** Type I error is the name that statisticians associate with the false positives.
>
> **[1:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=97)** And when they're talking about the false negatives, they often use the term type II error.
>
> **[1:43](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=103)** Be careful though trying to use these interchangeably in conversation.
>
> **[1:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=107)** One person might be talking about a specific instance and somebody else might be talking about a rate.
>
> **[1:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=113)** The three statistics fundamentals courses in the library review these terms from a statistical point of view, but we won't be using the terms type I and type II error again in this course.
>
> **[2:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=126)** Two more terms.
>
> **[2:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=128)** In epidemiology, you might hear sensitivity and specificity.
>
> **[2:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=133)** These are common enough terms that you might run into them just while reading the newspaper when they're talking about how accurate a diagnostic test is.
>
> **[2:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=142)** Sensitivity is the special name for the true positive rate, which measures the proportion of positives that are correctly identified.
>
> **[2:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=151)** Specificity is the special name for the true negative rate, which measures the proportion of negatives that are correctly identified.
>
> **[2:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=160)** There are dozens of special terms like this that are used along with the confusion matrix.
>
> **[2:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=166)** And these concepts can be very helpful to the person who is in charge of building the model.
>
> **[2:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=172)** But for now, we're going to return to our primary mission, estimating ROI.
>
> **[2:58](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/introducing-the-confusion-matrix?u=76281980&t=178)** Let's see how to apply the confusion matrix to the estimation of ROI.

> [!info]- Semantic Content
>
> **Env Vars:** roi (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### The possible outcomes when a micro decision is made
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=0)** - [Instructor] There are always four possible outcomes when you build a binary classification model and examine the confusion matrix because you are comparing two possible outcomes in the world, with the two possible outcomes that are being predicted by the model.
>
> **[0:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=16)** We'll be taking a close look at this using insurance fraud, as an example.
>
> **[0:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=21)** The four possible outcomes directly impact ROI and you should estimate the financial impact of each, overall accuracy just isn't good enough.
>
> **[0:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=31)** You should analyze all four separately and come up with an overall strategy that combines the model with existing human processes.
>
> **[0:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=40)** Analyzing these outcomes doesn't generally require extensive subject matter expertise.
>
> **[0:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=45)** It's mostly logic, but measuring the implications of the four outcomes very much benefits from subject matter expertise.
>
> **[0:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=55)** For instance, what are the four outcomes for our example, insurance fraud?
>
> **[0:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=59)** First, the true positive, fraud has occurred and the model correctly predicts fraud, the claim should be investigated.
>
> **[1:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=68)** How about the true negative, model correctly predicts non fraud, the claim should be honored.
>
> **[1:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=74)** So, together that accounts for the two situations where the model is correct.
>
> **[1:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=79)** Now the false positive, model falsely predicts fraud, the claim is investigated, but found to be unnecessary.
>
> **[1:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=88)** Finally, the false negative, model falsely predicts non fraud, the claim might eventually end up in litigation.
>
> **[1:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=96)** So each has its own monetary implications.
>
> **[1:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=99)** And this example, false negative, probably has the most serious financial implications.
>
> **[1:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=105)** Litigation is expensive, so the human computer partnerships should be designed with that in mind.
>
> **[1:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=111)** What about the values?
>
> **[1:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=113)** The value of the first possibility, the true positives, is the savings from avoiding litigation minus the cost of the investigation.
>
> **[2:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=123)** It doesn't have to be exact, but you know that it will be tens of thousands of dollars saved.
>
> **[2:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=129)** You should try to estimate how many true positives are not already being investigated.
>
> **[2:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=136)** The true negatives are valid claims, you don't need to worry about that claim amount.
>
> **[2:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=141)** The actuaries have already taken care of that so there is no net change in this area.
>
> **[2:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=148)** Now we move on to the incorrect predictions, here we get hit with the cost of investigation and we have nothing to offset it.
>
> **[2:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=157)** Finally, the false negatives, the primary reason for building a model, is we want to reduce the size of this value with our model.
>
> **[2:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=167)** This will be the cost of litigation and the claim amount.
>
> **[2:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=171)** Remember that these claims should not have been paid so that's an unaccounted for loss.
>
> **[2:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=177)** We can use the average a previous year, we should also take into account the previous year's grand total.
>
> **[3:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=184)** What if we could reduce that by 10% without having to increase the size of the staff?
>
> **[3:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=190)** What if we could reduce it by 20% but have to hire more investigators?
>
> **[3:15](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=195)** This is where that subject matter expertise really comes in.
>
> **[3:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=200)** However, there's a limit to how many investigations can be undertaken.
>
> **[3:24](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=204)** So if the false positive rate is high, there are major short-term implications.
>
> **[3:30](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=210)** The team won't be able to keep up and bonafide frauds could be slipping through.
>
> **[3:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-possible-outcomes-when-a-micro-decision-is-made?u=76281980&t=216)** So as we continue, we're always going to be weighing the model's accuracy with the implication for the team's bandwidth.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), require (1), continue (1)
> **Env Vars:** roi (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Estimating the overall size of the problem
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=0)** - [Instructor] Here's a rule of thumb that I think you might agree with.
>
> **[0:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=4)** You can't earn an ROI that's bigger than the total size of the problem.
>
> **[0:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=10)** Metaphorically, the slice can't be bigger than the whole pie.
>
> **[0:15](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=15)** If you only had $2 million worth of fraud last year, then no machine learning model, no matter how accurate, is ever going to save you more than 2 million a year.
>
> **[0:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=26)** That's not to make light of a number like $2 million, but you have to ask if cutting the problem in half is realistic, and you would need to cut it in half just to reach the million dollar rule of thumb.
>
> **[0:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=40)** Well, if you are currently doing nothing at all about fraud, then perhaps you really can reduce it by more than a million dollars.
>
> **[0:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=48)** But, if you have a whole team of investigators and they've already managed to investigate and prevent millions of dollars worth of fraudulent claims, and they're extremely good, even without a model, then you're likely only to make a dent with the new model.
>
> **[1:05](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=65)** Would 200,000, be enough of an ROI.
>
> **[1:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=69)** That would be a 10% improvement on $2 million.
>
> **[1:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=72)** A couple hundred thousand might sound pretty good at first, but I think you need to be more ambitious.
>
> **[1:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=79)** There's likely another option out there that would be better at covering your considerable costs.
>
> **[1:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=87)** Keep in mind, we're not suggesting that the model would only be 10% accurate, but they're already doing an excellent job.
>
> **[1:35](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=95)** The question is how much the predictive model could improve an already efficient process.
>
> **[1:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=102)** An incremental improvement of 10% might actually be quite impressive, but sometimes the amount of potential gain is simply not big enough.
>
> **[1:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=113)** You know, there's other factors as well.
>
> **[1:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=116)** Is the data in pretty good shape?
>
> **[1:58](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=118)** Could a single modeler or a small team tackle the problem and do it somewhat briskly?
>
> **[2:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=124)** Does the model look attractive from the level of effort involved?
>
> **[2:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=129)** In my experience, these so-called low hanging fruit projects are never quite as easy nor quite as quick as they seem; proceed carefully.
>
> **[2:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=139)** If you have to do everything perfectly, with limited resources and in a short period of time just to get your ROI calculations to look good, it's probably not a great project.
>
> **[2:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=152)** Low value projects don't become winners just because they seem easy.
>
> **[2:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=159)** Much better to go for this.
>
> **[2:41](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/estimating-the-overall-size-of-the-problem?u=76281980&t=161)** Problems that are having a large negative impact on the business, then commit the necessary resources to them, do a proper job, go for the incremental improvement on large enough problems, and earn your ROI that way.

> [!info]- Semantic Content
>
> **Env Vars:** roi (4)
> **CLI Commands:** make (2)
> **Best Practices:** rule of thumb (2)
> **Code Keywords:** this. (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Assigning value to the four possible outcomes
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=0)** - [Instructor] Obviously there's nothing magical about this process.
>
> **[0:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=3)** Our estimates won't be very good if our assumptions aren't very good.
>
> **[0:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=8)** So that's why many modelers are afraid to try.
>
> **[0:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=11)** But you can have very rough estimates and still learn a great deal about the potential merit of a project.
>
> **[0:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=19)** So you can and should give it your best shot.
>
> **[0:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=22)** In addition to a lot of input from your colleagues, you might even get a surprising amount of help online.
>
> **[0:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=28)** Since information like this is too sensitive to share from my actual client experiences, I searched for clues from a number of public sources.
>
> **[0:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=38)** I was able to find some interesting information on the FBI website, also from the Coalition Against Insurance Fraud.
>
> **[0:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=47)** And at first, perhaps surprisingly, a very detailed discussion of staged auto accident fraud on the National Insurance Crime Bureau website.
>
> **[0:58](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=58)** These can all give you clues.
>
> **[1:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=61)** For this practice example, since I can't work from specific client data, naturally my guesses are going to be pretty rough.
>
> **[1:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=70)** But that proves an important point.
>
> **[1:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=72)** I might have numbers that are half or double what they need to be and a pattern often still emerges.
>
> **[1:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=80)** Just be brave and make your best guess.
>
> **[1:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=82)** You'll also have to guess how accurate a model might be.
>
> **[1:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=86)** So for a 50-50 proposition, like a binary classification model, you might estimate 70 or 80% accuracy with a model at first.
>
> **[1:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=97)** If that seems like too much of a leap, try multiple guesses and you might still draw a similar conclusion.
>
> **[1:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=104)** So let's try it.
>
> **[1:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=105)** First, our true positives.
>
> **[1:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=107)** That, of course, describes the situation where the model correctly predicts fraud so the claim should be investigated.
>
> **[1:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=115)** So let's say that we're going to save 75,000 in litigation but we're going to spend 5,000 on the investigation, so we net about 70,000.
>
> **[2:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=127)** So we're going to guess, based upon numbers like the number of investigations a month that we did last year and how accurate we guess our model might be that we're going to say that we can do an additional 35 necessary investigations a month.
>
> **[2:24](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=144)** Think about that number.
>
> **[2:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=146)** That's 70,000 times 35.
>
> **[2:29](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=149)** That's almost $2.5 million.
>
> **[2:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=152)** What about our true negatives?
>
> **[2:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=154)** That's when the model correctly predicts non-fraud, the claims should be honored without an investigation.
>
> **[2:40](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=160)** If our true negative rate is any good, we should concurrently reduce the number of unnecessary investigations.
>
> **[2:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=168)** In my experience, this has the added bonus of boosting morale and building confidence in the model.
>
> **[2:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=174)** So again, based on investigation rate per month, we're going to guess a reduction of eight with a savings of 5,000 per investigation.
>
> **[3:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=183)** Now let's move on to measuring the impact of incorrect predictions.
>
> **[3:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=188)** False positive, model falsely predicts the fraud, claim is investigated but found to be unnecessary.
>
> **[3:15](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=195)** Unfortunately, this means that I'm spending money on investigations unnecessarily and I have to take that into account.
>
> **[3:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=201)** It's important to keep in mind two things here.
>
> **[3:24](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=204)** This always happens.
>
> **[3:25](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=205)** If I have zero positives, I'm not investigating enough.
>
> **[3:30](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=210)** And if in the past I had no model at all, I had business rules that were operating instead of the model, true positive and false positive rates could be calculated on that as well.
>
> **[3:41](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=221)** So I always have something about my prior process.
>
> **[3:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=225)** Based on our investigation rate per month, we'll just take a wild guess of 10 of these.
>
> **[3:49](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=229)** You can see that this somewhat cancels out with the savings that we just had but the numbers are so much smaller than the big number of 2.5 million.
>
> **[4:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=240)** What about false negatives?
>
> **[4:02](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=242)** The model falsely predicts non-fraud.
>
> **[4:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=244)** The claim might eventually end up in litigation.
>
> **[4:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=247)** But these should be reduced, not increased because they will be moving from this category into our true positive category.
>
> **[4:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=258)** That's where our estimated 35 cases came from.
>
> **[4:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=263)** Generally, if existing business rules say investigate or the model says so, you would investigate.
>
> **[4:29](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=269)** So if the model was any good, we're moving cases from this category of false negative to the category of true positive.
>
> **[4:37](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=277)** You can see in this example one number overwhelms the others and that's our 70K times 35.
>
> **[4:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=286)** You're likely going to start this process feeling as though you don't have enough info to make a solid guess.
>
> **[4:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=292)** Then you suddenly find an overwhelming amount of information to consider coming from subject matter experts and management from the accumulated history of the organization.
>
> **[5:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=303)** Take solace in the fact that most modelers don't even try.
>
> **[5:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=307)** It's more important at this stage to simply determine if it's possible or impossible to achieve an ROI.
>
> **[5:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=316)** Could the numbers work?
>
> **[5:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=319)** Don't be afraid of the model.
>
> **[5:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=320)** That part is usually not the hard part.
>
> **[5:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=323)** If all you do is weed out the impossible projects, you'll be making progress.
>
> **[5:30](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/assigning-value-to-the-four-possible-outcomes?u=76281980&t=330)** Take one step at a time and refine your guesses over time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), try. (2), public (1), from. (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** fbi (1), roi (1)
> **Versions:** 2.5 (2)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### The impact of model performance on ROI
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=0)** - [Presenter] An issue with focusing too much of your attention on overall accuracy is that it's not sophisticated enough to give you the parameters to calculate ROI.
>
> **[0:10](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=10)** We need to analyze more than simple hits and misses.
>
> **[0:15](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=15)** We need to analyze our four possible outcomes.
>
> **[0:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=18)** We've seen enough so far to understand why that's true.
>
> **[0:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=22)** However, model accuracy still plays a role because it impacts everything else.
>
> **[0:29](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=29)** So let's pause for a moment and reflect on what overall accuracy is telling us in the context of our confusion matrix.
>
> **[0:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=38)** Overall accuracy is simply our two correct categories divided by the total.
>
> **[0:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=44)** During the modeling phase, while we're especially focused on getting increased accuracy, we're hopefully decreasing the number of cases that end up in our false categories and moving them into our true categories.
>
> **[0:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=57)** Remember our terms sensitivity and specificity?
>
> **[1:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=60)** They're related to this.
>
> **[1:02](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=62)** Sensitivity is the true positive rate.
>
> **[1:05](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=65)** True positives divided by total positives and specificity is the true negative rate.
>
> **[1:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=71)** True negatives divided by total negatives.
>
> **[1:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=73)** There are instances where you are more focused on one than the other and there are natural trade-offs.
>
> **[1:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=81)** Understanding these trade-offs are important for different reasons to both executives and modelers.
>
> **[1:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=87)** First, the modelers.
>
> **[1:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=88)** Some techniques notably decision trees have ways to influence the model's performance and explicitly direct it to reduce a particular kind of error even at the risk of sacrificing a bit of overall accuracy.
>
> **[1:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=104)** It's a powerful tool to have in the modelers tool kit.
>
> **[1:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=107)** And I discuss what are called costs and priors in my advanced decision tree course, seek out these kinds of advanced techniques when building your models.
>
> **[1:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=117)** Now the executive point of view.
>
> **[1:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=119)** Executives need to understand these trade-offs well enough to know what to ask during a briefing then they need to communicate their understanding of and priorities for handling false positives and false negative rates as the numbers start to come in during the modeling phase.
>
> **[2:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=136)** The data scientists and management should be careful to discuss this before the modeling phase so that you can take into account both the ROI analysis and management priorities during the modeling phase.
>
> **[2:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/the-impact-of-model-performance-on-roi?u=76281980&t=148)** Finalizing these risk and reward priorities during the evaluation phase is ultimately the responsibility of the business, not just the data science team.

> [!info]- Semantic Content
>
> **Code Keywords:** else. (1), let (1), this. (1)
> **Env Vars:** roi (2)
> **Warnings:** be careful (1)
> **Speakers:** - [presenter] (1)

#### Two other example scenarios
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=0)** - [Narrator] Once you rehearse the basic concepts, it's not difficult to imagine how you can estimate costs and benefits in other scenarios.
>
> **[0:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=9)** We've discussed insurance fraud in some detail.
>
> **[0:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=12)** Let's briefly discuss two examples in different industries so that we can get more practice.
>
> **[0:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=18)** In manufacturing, a common application of machine learning is predictive maintenance, which is when you try to predict when a piece of equipment should be taken out of service for unscheduled maintenance.
>
> **[0:29](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=29)** Usually the motivation is that the machinery could be damaged if you continue to use it.
>
> **[0:35](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=35)** Also, you're usually applying this in situations that have non obvious symptoms.
>
> **[0:41](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=41)** So you need a model to warn you before it's too late.
>
> **[0:45](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=45)** In this scenario, what would a true positive be?
>
> **[0:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=48)** It would be when the model predicts that there's a problem and there really is a problem with the equipment.
>
> **[0:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=54)** How could you put a value on this?
>
> **[0:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=56)** Well, years ago, I attended a conference presentation and the presenter was explaining that earth movers have transmissions that cost nearly a million dollars.
>
> **[1:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=67)** So, the monetary value of a true positive would be very high.
>
> **[1:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=71)** What about false positives?
>
> **[1:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=73)** He spoke to this as well.
>
> **[1:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=74)** There would be two costs.
>
> **[1:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=76)** First, it's taken out of service and a very special test is conducted on the transmission fluid.
>
> **[1:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=83)** To use a term that we've heard a couple of times before, the special test is more expensive but it's also a more sensitive test.
>
> **[1:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=91)** But even more costly, each hour that the equipment is out of service could be tens of thousands of dollars.
>
> **[1:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=99)** However, you can see that if the model accuracy was any good at all, the value of the true positives should far outweigh the cost of the false positives.
>
> **[1:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=111)** In that presentation, the analyst was convincingly claiming an ROI in the tens of millions of dollars, and that was in less than a year.
>
> **[2:02](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=122)** So what about a financial institution proactively offering a refinance?
>
> **[2:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=127)** What's the true positive in this case?
>
> **[2:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=129)** Well, it's someone for whom our refinance offer is going to work.
>
> **[2:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=134)** Well, we have to get someone in a call center to reach out to the customer.
>
> **[2:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=138)** The customer is probably very concerned about their situation.
>
> **[2:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=141)** Then we walk them through a process that may take several weeks, but that will hopefully result in saving the loan and avoiding a foreclosure.
>
> **[2:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=151)** Sometimes we'll perform all those steps, but it still won't work out.
>
> **[2:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=156)** So the modeler should be looking for situations where default is likely, the account is eligible and the intervention is likely to work both in the short-term and the long-term.
>
> **[2:49](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=169)** We want them to be willing to do the refi, but we don't want to default down the road either.
>
> **[2:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=175)** That's a lot to consider.
>
> **[2:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=176)** But what are the additional implications for ROI?
>
> **[3:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=180)** For instance, what about false positives?
>
> **[3:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=183)** Well, the true positives are potentially very valuable but false positives will be time consuming.
>
> **[3:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=189)** And they're also a potential source of stress to the team.
>
> **[3:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=192)** So we'll want to have estimates from the call center that give their best guess as to the following.
>
> **[3:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=199)** How often do calls never result in reaching the customer?
>
> **[3:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=203)** How often are the proactive refis unsuccessful in getting all the necessary paperwork completed?
>
> **[3:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=211)** And then, how many refis are ultimately not approved?
>
> **[3:35](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=215)** These are all aspects to consider when estimating the cost of an unnecessary or unsuccessful intervention.
>
> **[3:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=224)** So it can get quite complicated, but it's ultimately good news.
>
> **[3:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=228)** We're asking the right questions and we're asking them before we start the project.
>
> **[3:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=235)** There are dozens and dozens of these binary classification use cases out there.
>
> **[4:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=240)** And in every industry.
>
> **[4:02](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/two-other-example-scenarios?u=76281980&t=242)** Now, when you encounter one, you'll be able to easily imagine the components of the problem, not just overall accuracy, but possible interventions and also the financial implications when the model is right and when the model is wrong

> [!info]- Semantic Content
>
> **Analogies:** imagine (2), for instance (1)
> **Code Keywords:** let (1), continue (1)
> **Env Vars:** roi (2)
> **Definitions:** is a  (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [narrator] (1)


### 3. Calculating ROI after the Model Is Built

> [↑ Back to Table of Contents](#table-of-contents)

#### Determining the cut-off on propensity scores for interventions
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=0)** - [Instructor] Okay, so you've got a model now, that's great.
>
> **[0:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=3)** Next step, deployment.
>
> **[0:05](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=5)** But wait a minute, not so fast.
>
> **[0:07](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=7)** We've got a more complicated job on your hands than most realize and you're going to have to make some decisions that are a mix of technical and business considerations.
>
> **[0:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=19)** Binary classification models like the ones we've been discussing produce what are called propensity scores where 1.0 indicates that what you're trying to predict is likely to happen, and zero indicates that the opposite is likely to happen.
>
> **[0:35](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=35)** I discussed these scores from both the practitioner and executive points of view in my two analytics essential courses.
>
> **[0:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=44)** And I discussed a variety of ways to assess model performance in my classification modeling course.
>
> **[0:50](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=50)** In this course, I'm going to assume that you've done all that and that you've made a thoughtful decision about which of the many models that you've considered is the winner.
>
> **[1:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=61)** Here's the part that most folks skip over.
>
> **[1:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=64)** Since a propensity score of 0.51 means that fraud is more likely, many just run with 0.5 as their number and skip a terribly important step.
>
> **[1:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=77)** Imagine that this is the top four rows of several thousand claim IDs.
>
> **[1:24](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=84)** What you have to do is analyze in detail the implications of setting the number at 0.5 or some other choice that you might make.
>
> **[1:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=94)** Here's the first thing you do, take a month's worth of claims in Excel, and simply sort descending on propensity score and now just count.
>
> **[1:43](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=103)** You see it's not primarily about math, it's about bandwidth.
>
> **[1:49](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=109)** So what are some of the considerations?
>
> **[1:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=112)** In our example, how many investigations are typically done in a month?
>
> **[1:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=117)** What were the maximum number of investigations that were done in recent memory within a single month?
>
> **[2:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=124)** How high can this number go without putting too much stress on the team?
>
> **[2:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=131)** Could the size of the team be increased if the numbers justified it?
>
> **[2:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=136)** As you get more familiar with this, you'll develop an instinct for where the cutoff should be.
>
> **[2:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=142)** And one could have an elaborate discussion of just this step.
>
> **[2:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=147)** I've taught university courses, where we spend an entire week's assignment on just this step.
>
> **[2:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=154)** But it's not difficult to get started.
>
> **[2:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=156)** Just make a little chart and do the following.
>
> **[2:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=159)** Make each row a different cutoff, 0.9, 0.8, 0.7 and so on.
>
> **[2:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=168)** You might choose to be more granular in your chart.
>
> **[2:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=172)** Calculate the demands on the team for each option.
>
> **[2:56](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=176)** Once you narrow down your options, calculate all the confusion matrix information that we've reviewed in detail for each potential cutoff.
>
> **[3:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=186)** Here are some considerations if you set the cutoff very high.
>
> **[3:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=191)** The number of interventions, in our case fraud investigations will be low.
>
> **[3:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=197)** Virtually all positives will be true positives because you're only intervening when the model is highly certain.
>
> **[3:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=206)** The number of false negatives will be high because you're failing to intervene even when the model was fairly certain.
>
> **[3:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=214)** As you lower the cutoff, the following will happen.
>
> **[3:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=218)** The number of interventions will steadily increase, eventually reaching a point where the current bandwidth can't process them.
>
> **[3:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=227)** The true positive rate will inevitably degrade and you'll start encountering more unnecessary interventions.
>
> **[3:55](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=235)** If the interventions are labor-intensive like investigations too low a cutoff can demoralize the team if they feel that they've been sent on too many unnecessary investigations.
>
> **[4:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=249)** The false negative rate will steadily decrease because some of those are now becoming true positives.
>
> **[4:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=256)** These are big decisions.
>
> **[4:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=258)** The best way to navigate this challenge is to make sure that the data science team understands the numbers and also understands management priorities from the very beginning well before the model is built, then once the final model or a handful of semi-finalist models have been chosen, the modeling team should spend a solid day looking over the numbers and becoming very well-prepared for an executive briefing.
>
> **[4:47](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=287)** Finally, you should all get together for a substantial meeting about an hour or more.
>
> **[4:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=293)** You should be able to narrow down your choices pretty quickly but you might still debate the final number.
>
> **[5:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/determining-the-cut-off-on-propensity-scores-for-interventions?u=76281980&t=301)** That's okay, you'll be getting some new solid numbers based on testing the model in a real world setting, not just projections, and that's our next topic, the evaluation phase.

> [!info]- Semantic Content
>
> **Versions:** 0.5 (2), 1.0 (1), 0.51 (1), 0.9 (1), 0.8 (1)
> **CLI Commands:** make (5)
> **Code Keywords:** this, (1), finally, (1)
> **Definitions:** means that (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### A/B testing and partial rollout during the evaluation phase
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=0)** - [Presenter] In the cross industry standard process for data mining, model assessment as a task during the modeling phase and that's when technical measures of accuracy are applied to choose the best model.
>
> **[0:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=12)** But the evaluation phase is where business criteria are the basis of judging the model's effectiveness.
>
> **[0:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=21)** And you guessed it.
>
> **[0:22](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=22)** ROI is one of the most important.
>
> **[0:25](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=25)** You're ready to shift from estimating ROI to measuring the ROI you've actually achieved.
>
> **[0:34](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=34)** One of the most thorough ways to perform this evaluation is a partial rollout combined with a kind of dress rehearsal where the model and the employees are working together on a small scale, experienced modelers learn pretty quick that there's always a degree of organizational resistance and skepticism when it comes time to deploy models.
>
> **[0:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=57)** This is because you're introducing organizational change.
>
> **[1:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=61)** In a certain degree of skepticism is warranted.
>
> **[1:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=64)** Since there's a difference between results on the computer screen and implementing the model in an existing organization.
>
> **[1:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=71)** The best way to test the model, the human computer collaboration and the rollout plan is an A/B test.
>
> **[1:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=79)** I recommend recruiting the team region, office, product line or manager that's going to participate early in the project.
>
> **[1:30](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=90)** It is rare that you can pick a test site at random.
>
> **[1:33](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=93)** It's usually too complicated to do that so choose those that are in your corner that support the project and that implement the whole system at a test site.
>
> **[1:44](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=104)** Now you have the perfect way to measure the effectiveness of the model or rather to test the whole new system.
>
> **[1:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=111)** For a substantial period of time, run the new system at the test site and then compare all of the gains and costs for both the old system and the new.
>
> **[2:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=124)** Choose a length of time that aligns with the rhythm of the business.
>
> **[2:08](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=128)** If it's a fast moving business, a month might be sufficient if it is slow moving or highly seasonal you might let them run in parallel for a year.
>
> **[2:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/a-b-testing-and-partial-rollout-during-the-evaluation-phase?u=76281980&t=139)** Next thing you know, you will have a very detailed and highly persuasive set of data that you can use to measure your success.

> [!info]- Semantic Content
>
> **Env Vars:** roi (3)
> **Code Keywords:** new. (1), let (1)
> **Definitions:** is a  (1), is an  (1)
> **Speakers:** - [presenter] (1)

#### Understanding the monitoring phase
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=0)** - [Narrator] Full deployment begins when the model and the supporting system is being used throughout the business and not just at a test site.
>
> **[0:09](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=9)** At that juncture, an AB test is no longer the appropriate method.
>
> **[0:14](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=14)** In order to gauge how things are going, you'll need to have planned a pre post test.
>
> **[0:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=21)** The name and nature of the appropriate statistical test changes a bit, but the basic concept is the same.
>
> **[0:27](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=27)** Take a similar period of time before and after deployment.
>
> **[0:31](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=31)** It's usually a year to give enough time to accumulate solid data and to cancel out the potential effect of seasonality and do a complete report.
>
> **[0:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=42)** There are always forces that could influence the numbers, like business cycles and your more skeptical colleagues will remind you of this.
>
> **[0:52](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=52)** But if you've chosen the project well and the model has performed well, you will have ample evidence that you have achieved a solid ROI.
>
> **[1:03](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=63)** Remember, that as a rough rule of thumb, you're seeking more than a million dollars in improvement before subtracting the cost of the data science team.
>
> **[1:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=73)** No-one will attribute that to chance.
>
> **[1:16](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=76)** So, achieve that milestone and you've gained more than enough fiscal benefit for your company.
>
> **[1:23](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/understanding-the-monitoring-phase?u=76281980&t=83)** Just as important as the financial benefit, you've proven that you can do this from start to finish and with solid defensible numbers, you've joined an elite club and you've gained some political capital that you can invest in getting your next project budget approved.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1)
> **Env Vars:** roi (1)
> **Best Practices:** rule of thumb (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)

#### Revisiting ROI 12 months after deployment
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=0)** - [Instructor] CRISP-DM places the plan monitoring and maintenance task in the deployment phase.
>
> **[0:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=6)** These days, some consider monitoring as a seventh phase.
>
> **[0:11](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=11)** I happen to favor this minor change because in my experience, a different team is involved in monitoring as it doesn't have a defined end.
>
> **[0:20](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=20)** It begins after full deployment and continues for the lifetime of the model.
>
> **[0:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=26)** But for our purposes in this course, the important thing is that you plan for it and do it.
>
> **[0:33](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=33)** Why is monitoring necessary?
>
> **[0:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=36)** Supervised learning models degrade.
>
> **[0:39](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=39)** Their accuracy will decrease over time even if you are refreshing and rebuilding the model.
>
> **[0:46](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=46)** There are a lot of reasons for this, but it is a well understood phenomenon.
>
> **[0:51](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=51)** Tom Khabaza, one of the coauthors of CRISP-DM, calls this the law of change.
>
> **[0:58](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=58)** If you can't prevent model degradation completely, then what should you do?
>
> **[1:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=64)** Monitoring is simply comparing the performance that you got when you first deployed the model to the current performance.
>
> **[1:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=72)** The pace of the business is a factor again.
>
> **[1:15](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=75)** You might check nightly performance.
>
> **[1:18](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=78)** You might check monthly.
>
> **[1:19](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=79)** A full report should be done, overall accuracy, all four confusion matrix outcomes, and ROI.
>
> **[1:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=88)** Most of the work should be automated, but when there are issues, some basic diagnostics should be conducted to make sure that everything is working properly.
>
> **[1:38](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=98)** If everything is functioning correctly but the performance is still indicating a steady decline, then the model might be showing its age.
>
> **[1:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=108)** The model needs more than an automated periodic recalibration.
>
> **[1:53](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=113)** It needs to be rebuilt.
>
> **[1:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=114)** New variables might need to be introduced.
>
> **[1:57](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=117)** Business goals may have changed.
>
> **[1:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=119)** Assumptions that were true during design are no longer true.
>
> **[2:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=124)** It will happen eventually.
>
> **[2:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=126)** You now need a complete rebuild and ROI has to be considered all over again.
>
> **[2:12](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=132)** The model rebuild has to compete for resources like any other project.
>
> **[2:17](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=137)** The difference now is that the improvement will be less dramatic, but the scale of effort will also be much, much less.
>
> **[2:26](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=146)** You've come full circle.
>
> **[2:28](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/revisiting-roi-12-months-after-deployment?u=76281980&t=148)** And if the potential ROI is there, it's time to start all over again.

> [!info]- Semantic Content
>
> **Env Vars:** roi (3), crisp (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Code Keywords:** this, (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=0)** - [Keith] Thanks for joining me as we discussed how to maximize ROI in your projects.
>
> **[0:06](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=6)** I hope that the very next thing that you'll do is think about your current projects and apply these techniques as soon as you're able.
>
> **[0:13](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=13)** If there's just one project in the pipeline, consider my advice about having multiple projects to rank and assess.
>
> **[0:21](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=21)** The next course to consider depends on if you're a data scientist or an executive.
>
> **[0:25](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=25)** There's an interesting connection between this course and my [[Predictive Analytics Essential Training For Executives]].
>
> **[0:32](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=32)** In that course I make the case that estimating ROI is important.
>
> **[0:36](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=36)** So if you're an executive and you want a high level overview, that is your next step.
>
> **[0:42](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=42)** If you're a practicing data scientist, you may want to go a bit deeper into model estimation.
>
> **[0:48](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=48)** If so, then my [[Machine Learning and AI Foundations- Classification Modeling]] course is the best bet.
>
> **[0:54](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=54)** I hope that you'll take advantage of the Q and A feature right here in the library.
>
> **[0:59](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=59)** And also I encourage you to follow me on LinkedIn.
>
> **[1:01](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=61)** I'm incredibly proud of my courses in the library.
>
> **[1:04](https://www.linkedin.com/learning/predictive-analytics-essential-training-estimating-and-ensuring-roi/next-steps?u=76281980&t=64)** Please do stay in touch and I'll see you again in another course.

> [!info]- Semantic Content
>
> **Env Vars:** roi (2)
> **CLI Commands:** make (1)
> **Cross-References:** we discussed (1)
> **Speakers:** - [keith] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- ROI Optimization
- ROI Management
- ROI Strategies
- Predictive Analytics

## Path Context

### In [[Masterpath in Analytics Leadership for Executives]]
← [[Executive Guide to AutoML]] | **5 of 8** | [[Data-Driven Decision-Making for Business Professionals]] →

### In [[Get Ahead in Business Analytics and Analysis]]
← [[Business Analytics Foundations- Predictive, Prescriptive, and Experimental Analytics]] | **13 of 19** | [[Business Analytics- Forecasting with Exponential Smoothing]] →

### In [[Advance Your Skills in Predictive Analytics]]
← [[Data Science Foundations- Data Assessment for Predictive Modeling]] | **7 of 8** | [[Statistics Foundations 3- Using Data Sets]] →

### In [[Advance Your Business Analytics Skills]]
← [[Predictive Analytics Essential Training For Executives]] | **3 of 11** | [[Using Tableau to Discover Powerful Business Insights]] →

## Appears In

- [[Masterpath in Analytics Leadership for Executives]]
- [[Get Ahead in Business Analytics and Analysis]]
- [[Advance Your Skills in Predictive Analytics]]
- [[Advance Your Business Analytics Skills]]

## Related Courses

_Courses sharing skills:_

- [[Python- Working with Predictive Analytics (2019)]] — Predictive Analytics
- [[Python- Working with Predictive Analytics]] — Predictive Analytics
- [[Predictive Customer Analytics]] — Predictive Analytics
- [[Predictive Analytics Essential Training For Executives]] — Predictive Analytics
- [[Program Evaluation for Data Science]] — ROI Strategies

---

[↑ Back to top](#)