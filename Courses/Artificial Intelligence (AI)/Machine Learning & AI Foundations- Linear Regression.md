---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: machine-learning-ai-foundations-linear-regression
url: "https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression"
duration_minutes: 245
duration: 4h 5m
level: Intermediate
updated: 7/11/2023
learners: 45821
skills:
  - Machine Learning
  - Artificial Intelligence (AI)
  - Linear Regression
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHOipzpS91UiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117835966?e=2147483647&amp;v=beta&amp;t=zehj-BdbpnIDe9oLizDYNMWV_c3M3BqBJBwhsnEYnns"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your SPSS Skills]]'
prev_courses:
  - '[[Spss Wrangling Visualizing And Modeling Data]]'
next_courses:
  - '[[Machine Learning and AI Foundations- Classification Modeling]]'
path_nav: '[{"path":"Develop Your SPSS Skills","position":2,"total":6,"prev":"Spss Wrangling Visualizing And Modeling Data","next":"Machine Learning and AI Foundations- Classification Modeling"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/machine-learning
  - skill/artificial-intelligence-ai
  - skill/linear-regression
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Machine%20Learning%20%26%20AI%20Foundations-%20Linear%20Regression.md)

![Machine Learning & AI Foundations: Linear Regression](https://media.licdn.com/dms/image/v2/C4E0DAQHOipzpS91UiQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1567117835966?e=2147483647&amp;v=beta&amp;t=zehj-BdbpnIDe9oLizDYNMWV_c3M3BqBJBwhsnEYnns)

# Machine Learning & AI Foundations: Linear Regression

> Having a solid understanding of linear regression—a method of modeling the relationship between one dependent variable and one to several other variables—can help you solve a multitude of real-world problems. Applications areas involve predicting virtually any numeric value including housing values, customer spend, and stock prices. This course reveals the concepts behind the most important linear

> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression) | 4h 5m | Intermediate | 46K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (3 videos)
- **[[#2. 1. Simple Linear Regression]]** (6 videos)
- **[[#3. 2. Introduction to Multiple Linear Regression]]** (8 videos)
- **[[#4. 3. Dummy Code and Interaction Terms]]** (4 videos)
- **[[#5. 4. Three Regression Strategies]]** (11 videos)
- **[[#6. 5. Spotting Problems and Taking Corrective Action]]** (7 videos)
- **[[#7. 6. Other Approaches to Regression]]** (8 videos)
- **[[#8. 7. Advanced Alternatives Using the Extension Hub]]** (3 videos)
- **[[#9. Conclusion]]** (1 videos)

### 1. Introduction

#### Linear regression for machine learning
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=0)** - [Keith] I'm Keith McCormick, and I'm an active consultant, conference speaker, and book author.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=5)** Regression is the technique that everybody thinks they know, but let me try to persuade you that it's critical to learn regression thoroughly.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=13)** What I really enjoy about this topic is how understanding the concepts well allows you to solve real-world problems.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=20)** So what are we going to cover?
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=22)** We're going to have a real focus on concepts.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=24)** Even though we'll be using SPSS Statistics throughout, I hope that if you're a user of R or SaaS or some other tool, that you'll benefit greatly from a thorough review of the basics.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/linear-regression-for-machine-learning?u=76281980&t=36)** I hope you enjoy the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Env Vars:** spss (1)
> **Speakers:** - [keith] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=0)** - [Instructor] What should you know to get the most value out of this course?
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=6)** Well, we're gonna be working inside the IBM SPSS Statistics package.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=11)** So, you're gonna wanna make sure you have access to it.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=14)** But you're also gonna wanna make sure that you're familiar with it.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=17)** Certainly opening and saving files, but also other things like setting up the data properly, adding labels, all the basics are things that you should be familiar with because we won't be taking extra time to review that.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=33)** In particular, you really have to have a good grounding of descriptive statistics and level of measurement.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=41)** That's declaring your variables as nominal, ordinal, or scale.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=47)** We're gonna be talking about that a lot, so you're gonna wanna have a good, solid grounding in it.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=52)** Next, and this one's also very important.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=55)** Statistical inference.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=57)** I'm gonna be using phrases like this variable is statistically significant.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=62)** Or this variable is not statistically significant a lot.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=66)** So, if that's new language for you, you're gonna wanna revisit the basics of statistics and what statistical inference is all about.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=75)** Two topics are gonna come up that I'm gonna talk about quite a bit.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=78)** But if you arrive to the course with a little bit of familiarity with it, it's gonna help a lot.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=83)** Correlation is one.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=85)** And another one is the differences between data that looks like a normal distribution as opposed to a distribution that's skewed.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=93)** All of these topics are covered wonderfully in Bart Poulson's class, SPSS Statistics Essential Training.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=103)** Unless you really have a fantastic grounding in SPSS, I urge you to seek out that course first.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-you-should-know?u=76281980&t=109)** It really does a wonderful job getting you ready for this course.

> [!info]- Semantic Content
>
> **Env Vars:** spss (3), ibm (1)
> **CLI Commands:** make (2)
> **Code Keywords:** class, (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=0)** - [Narrator] Every statistical tool out there has an ability to do linear regression, but I've done all of the demonstrations in IBM SPSS Statistics.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=10)** So I encourage you to download the trial and work along with me.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=15)** I've also provided the data that you'll need.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=17)** The most important files will be in the resources folder under Case Study Data.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=23)** Those are the files that I use repeatedly.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=27)** In additional data files, I've included some data files that I use for single demonstrations.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=34)** Each time I complete a demonstration, I give you the M state of my work in the form of an SPSS output file, and then also as a PDF.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=47)** The reason I provide the PDF is if you're working along in a different software package, let's say R or SAS, you can look at my output in the PDF without needing the SPSS Statistic software.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/using-the-exercise-files?u=76281980&t=59)** I encourage you to work through the examples with me, whether it's by using an SPSS Statistics trial or in using the software of your choice.

> [!info]- Semantic Content
>
> **Env Vars:** spss (4), pdf (3), ibm (1), sas (1)
> **Code Keywords:** let (1)
> **Exercise Files:** download the (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [narrator] (1)


### 2. 1. Simple Linear Regression

#### Building effective scatter plots in Chart Builder
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=0)** - [Instructor] Okay, let's get started by talking about scatter plots.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=3)** Our broader subject is simple linear regression, which is the prediction of one scale variable with one other variable, and there's no better way to do that than scatter plots.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=15)** So, in our resources folder, there is a file called Auto MPG Modified, and we can just simply double-click on that, and that's gonna launch SPSS.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=26)** And you'll notice as it's loading, that it says IBM SPSS Statistics Subscription.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=32)** IBM started offering the subscription with version 25, but everything I'm gonna be showing you would apply with any recent version.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=41)** Okay, so the first thing we're gonna do is go to the data window.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=47)** And let's take a look at this dataset.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=49)** Auto MPG is a modified version of a file that I got from the well-known and very useful UCI data repository.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=60)** Here it is.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=61)** I've just made a couple of minor modifications to it, and that's what we're gonna be working on this scatter plot.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=65)** I really recommend this repository.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=67)** It's a great source for practice files.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=70)** Let's take a quick look at the file.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=72)** We see on the far right-hand side we have the name of the vehicle, and we've got miles per gallon, cylinders, displacement, and several others.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=82)** What we're gonna do is pretend that our focus at the moment is predicting miles per gallon, so that will be our dependent variable, using one of the other variables.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=92)** And I'm gonna go ahead and choose weight as my single independent variable.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=97)** SPSS is a large, complicated software, so there's often a lot of options for doing the same thing.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=102)** I'm gonna recommend Chart Builder, and that's what we're gonna use.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=105)** Let's briefly talk about this warning message, and then I'm gonna choose the selection to not show this again.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=111)** It reads, "Before you use this dialog, "measurement level should be set properly "for each variable in your chart."
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=118)** Let me check off "Don't show this dialog again," click on OK, and I'm gonna briefly cancel out of Chart Builder, and walk you through what it's talking about.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=128)** See the symbols next to the variables here.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=130)** We have miles per gallon, it has a ruler next to it.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=133)** Cylinder has some circles.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=135)** Model year has these three bars.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=138)** It's terribly important that those are declared properly.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=142)** If you go to the Variable View, you can see where it can be declared.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=146)** The chart builder will automatically adjust the settings based upon these variable types.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=153)** A scale variable is like height and weight, where decimal places and so on make sense.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=158)** Nominal variables are separate and distinct categories, and ordinal variables like model year are also separate and distinct categories, but where they're meaningfully ranked.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=168)** Since we don't talk about a model year like 85 1/2, it really should be declared as ordinal, and not as scale.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=177)** If we return to the chart builder, those same symbols are visible here, and we can start making our scatter plot.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=184)** So, we're gonna down to Scatter/Dot, and there's a new feature in version 25, there's a choice, simple scatter plot with fit line.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=193)** You may find that that choice is not available to you.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=196)** If not, don't worry about it.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=198)** You can add the fit line in a later step.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=200)** But I'm gonna choose this one.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=203)** Okay, so I've dragged the scatter-plot symbol up to the canvas, and now I'm gonna choose miles per gallon as my Y, and weight as my X, I'm gonna drag it over here.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=217)** Now, your dependent variable always goes into the Y-axis, and your independent variable always goes into the X-axis.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=227)** It's just a rule, it's always done that way.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=229)** Your audience would be very disoriented by any report where you didn't follow that convention.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=235)** I'm just gonna go ahead and click OK now.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=237)** And congratulations, we've made our first scatter plot.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=240)** So, let's just briefly pause and kind of observe here.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=243)** We can see that there's a regression line that's been added, that thin line that's going diagonally through it.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=249)** It seems to fit the data reasonably well, but there's a bit of a curve here, so it's worth investigating some of the many Chart Builder features that allow us to dig deeper, and further investigate into this scatter plot.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=262)** So, what we can do is double-click on the chart, double-click on the line, and we see, I wasn't close enough.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=270)** Double-click on the line, there we go.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=272)** And you see that a linear line is not the only choice.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=278)** We could see if a quadratic fit was a better fit.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=282)** It looks like, in this case, it might possibly be.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=285)** We're not gonna further investigate curvilinearity now, but there's lots of features hiding inside Chart Builder that you can interact with, that help you explore and better understand your data.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=298)** Let's take a look at another one of those features.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=302)** I'm gonna close this, return to Chart Builder, and now do a colored scatter plot.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=309)** Drag the colored symbol up, and I'm gonna make origin the color.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=315)** Just as it's important that you declare nominal, ordinal, and scale, you must also label your data when necessary, and I've added labels for Japan, Europe, and USA.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=328)** I did that step, the raw data did not have it.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=332)** By adding that color, we actually can see a pattern right away.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=336)** There's almost no red or green dots above 3,500 in weight.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=344)** All of the European and Japanese cars tend to be lighter.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=347)** Now, there's a number of light USA cars, but the heavy cars seem to all be American cars.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=355)** There's other features hiding within Chart Builder that can help us further understand this.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=363)** For instance, we've seen this filter region over on the right-hand side.
>
> **[6:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=369)** I can revert back to a black-and-white chart, and drag origin into that area, and tell it that I wanna see only Japan.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=384)** I get a very different scatter plot.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=386)** I could use other variables, and filter in that way.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=389)** Let's do one final variation on our scatter plot.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=395)** I'm gonna remove origin from the filter, and I'm gonna go to Groups and Point ID, and I'm gonna ask for a row panel variable.
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=406)** And now I'm gonna try origin over here, and I actually get three different scatter plots, showing each of the three regions separately.
>
> **[6:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/building-effective-scatter-plots-in-chart-builder?u=76281980&t=418)** Chart Builder can be a powerful way to explore your data, and you wanna always begin using visualization, particularly when you're building a more complicated regression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (1), this, (1), this. (1)
> **Env Vars:** spss (3), mpg (2), ibm (2), usa (2), uci (1)
> **UI Navigation:** double-click (4), go to (3), click on (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Versions:** version 25 (2)
> **Analogies:** for instance (1)
> **Warnings:** warning (1)

#### Adding labels and spikes to a scatter plot
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=0)** - [Instructor] I wanna introduce you to a couple of very cool features of Chart Builder, but these features are best done when you have a very small data set, let me show you, I'm gonna open a data file called Auto Imports Scatter, switch to that file, here it is, okay this also, is about cars but it's different, this is also taken from the UC Irvine Data Repository, it's been heavily modified, it's much smaller than that file, and on that repository it's called Auto Imports, in fact specifically I think it's called Auto Imports 1985, this is my modified version and we're going to go in Chart Builder.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=46)** And this is a very tiny data set, which is gonna allow me to demonstrate a very powerful feature, I'm gonna go ahead and do a regular black and white scatter plot, drag that up, I'm going to predict price in the Y, using horsepower in the X, but I'm gonna click on Groups and Point ID, select Point ID label, and use make of the vehicle as my label.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=83)** Go to the Output window to see that, here it is.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=87)** And take a look, it really is pretty powerful to do this, but be careful, if you have even a couple hundred data points, it can get very crowded, so I'm going to double click so I can edit this, and I'm gonna either double click on the Y axis, or go up the the big blue Y here, either one and that's gonna allow me to modify that, and I'm doing it so that it won't be so crowded down there, where we have some data points.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=114)** What's interesting about this is now I can put the efficacy of my regression line into context, because I can spot which data points fit well and which data points don't fit well.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=128)** Let me add some context to our chart, so that you can see that.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=132)** I can add Fit Line at Total, I'm not gonna worry about the formula for now, so I'm gonna deselect Attach label to line, but I'm going to add Spikes.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=145)** See how helpful that is visually, because now I can see that the line really fits, Honda and Chevy and Mitsubishi quite well, Volkswagen a little bit less, but look at Jaguar and Mercedes-Benz, I can really see quite easily now by eye, that it doesn't fit that as well.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=172)** If I were a subject matter expert in these brands I may even be able to imagine some of the reasons why those, data points are somewhat off the regression line and perhaps if I was building a model that was more complicated than simple linear regression, I could start to contemplate what other variables that I could bring into my model, to better explain these data points.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/adding-labels-and-spikes-to-a-scatter-plot?u=76281980&t=197)** So labels and spikes can be a fantastic way to visualize your simple linear regression model.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (2), switch (1)
> **UI Navigation:** click on (2), switch to (1), go to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Create a 3D scatter plot
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=0)** - [Instructor] Okay, we're going to continue to work in the same data set.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=4)** We're going to do a 3D scatter plot.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=6)** So let's go up to graphs, chart builder.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=12)** And a 3D scatter plot is going to be helpful because of course we're going to get to see two independent variables instead of just one.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=19)** And that's going to be useful as we start the transition to multiple regression.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=25)** So let's go down to scatter dot.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=27)** And the one that you want to look for is the colored scatter because that's going to allow us to add a fourth variable as you are about to see.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=36)** So we're going to drag that up into place and let's make our Y axis price.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=44)** Then we can pick two variables that we think would correlate with that, like horsepower in the X and engine size in the Z.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=58)** And we can have body type, be the color, for the color.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=64)** You're going to want to pick something that doesn't have a huge number of categories, but with body we have three categories, so it's perfect for this purpose.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=71)** Then we're going to go down to groups and point ID click on point ID label and let's drag over make for that.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=83)** And it really is that simple.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=85)** So let's take a look.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=86)** Let's click on okay and let's double click on this to get a better view.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=95)** And we can right click over in this region.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=98)** And we have a couple of things we can do.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=100)** We can actually rotate it.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=102)** I won't demonstrate that at the moment, but I'm going to go into the properties window and we can make this bigger.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=108)** Let's take fuller advantage of the screen here.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=113)** I think that's going to pretty much max it out.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=115)** And let's take a quick look.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=117)** So we can see that Jaguar is high on the Y axis or dependent, but naturally it's also towards the high end on the other two variables as well.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=133)** But you know, as I look at it, it's a bit hard to see that.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=137)** We know that Jaguar is going to be high horsepower and high engine size, but I often have difficulty.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=143)** Now, we could try to rotate it and we clearly can see some things.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=149)** We can see the Jaguar, Mercedes-Benz and Porsche up at the top.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=153)** But if you are like me it's a little tricky sometimes to see where exactly we're falling on horsepower and engine size.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=164)** So 3D scatter plots can be useful but they're not our only option.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=168)** Another option that I'm quite fond of is the bubble chart.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-3d-scatter-plot-22614687?u=76281980&t=172)** It's kind of an alternative to what we've just done and we'll do that next.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), continue (1), type, (1)
> **CLI Commands:** make (3)
> **UI Navigation:** click on (3)
> **Speakers:** - [instructor] (1)

#### Create a bubble chart
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=0)** - [Instructor] Okay, we're going to pick up where we left off, and we're going to do an alternative to this chart.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=6)** We're going to do a bubble chart.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=8)** So let's go back to graphs.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=12)** And I've emphasized that we're doing an alternative, because since it's very similar, we can save some time by simply dragging our new chart request over the existing one.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=24)** Now, SPSS has made bubble charts easier to do than they had been in the past, so I want to make note of the fact that I'm doing this demonstration in version 29.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=36)** You used to have to do code, it's much easier now.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=40)** So let's take a look.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=42)** So we'll drag that up over here, and we've lost our engine size.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=49)** Now, of course, because there was no place for it to go, there was no third dimension.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=54)** But check it out.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=55)** We have Set size, and we see the bubbles have changed size.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=62)** Now, of course, this doesn't reflect our data yet.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=64)** It's simply SPSS telling us that, yes, SPSS understands that these bubbles are going to be of varying size based on the data.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=74)** We're not quite done yet though, because we want to go back to groups and Point ID.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=79)** You'll often lose a request like that when you reset one.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=83)** And we'll have make drag over into there, right?
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=89)** And then we also want to, on the right hand side here, click on Total Fit Line.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=97)** And we'll click on OK.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=101)** Scroll down, double click on it.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=107)** And again, we can make it bigger.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=114)** I'm going to pretty much exactly what we did in the previous chart.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=120)** And I'm a real fan of these.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=122)** Now, I recognize that there's a lot going on, but it's useful, useful information.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=129)** And it's worth taking a moment.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=130)** Pause, catch your breath and say, "Wow, what have we accomplished?"
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=135)** We've got four variables in a fit line here.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=139)** So you want to be thoughtful about when to do this, because if the relationships are weak, it will be hard to read.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=147)** But here the relationships are pretty strong.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=150)** In fact, as price goes up, horsepower goes up and engine size goes up.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=156)** So Jaguar is not only the farthest up and over, it is also the largest bubble.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=165)** And the color coding is helpful.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=167)** We have the difference between our convertible, hatchback, and sedan is easier to see.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=172)** I think, in general, this is easier to read than a 3D plot.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=177)** Both have their advocates, obviously.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=180)** I'm a fan of this.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=181)** And, again, it's wonderful that we're looking at quite a few variables in this one chart.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/create-a-bubble-chart?u=76281980&t=188)** So I hope you'll give bubble chart a try.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), this. (1), try. (1)
> **UI Navigation:** click on (3), scroll down (1)
> **CLI Commands:** make (3)
> **Env Vars:** spss (3)
> **Cross-References:** go back to (2)
> **Versions:** version 29 (1)
> **Speakers:** - [instructor] (1)

#### Residuals and R2
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=1)** - [Instructor] Now we have to discuss a terribly important topic and that is how can we come up with some kind of objective way of evaluating how well our regression line fits data when these data and models come in so many different shapes and sizes, like the two models shown here that we're already discussed.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=25)** We've gotta come up with some way of measuring that even though the number of data points will change, the proximity of the data points will change, and so on.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=34)** So let's start at the beginning.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=37)** Where does the regression line come from?
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=41)** Well frankly the thing to do is to find a regression fit that minimizes the distance between our data points and the regression line.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=52)** So there you go, this line tries to be as close to those data points as possible.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=57)** Now of course, when one is talking about multiple regression this becomes very conceptual and it's hard to picture, but when we're talking about simple linear regression as we are now you really can visualize it if you simply display it in a scatter plot.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=74)** So I'm gonna make what I hope to be a straightforward claim.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=79)** The total variance in our data set, and you can think of variance the way we define it in statistics if you're familiar with that, and if you're not, I'm simply talking about variation or perhaps you'd rather think of it as noise.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=92)** So my claim is that the total variance in the data set is equal to the variance that we manage to explain with our regression line plus the variance that we fail to explain with our regression line, what I'm calling here the variance unexplained.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=108)** So how can we visualize these elements?
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=112)** Well the total variance is actually quite easy to visualize.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=117)** If we come up with the most primitive explanation of car prices that we can imagine which is simply all cars have the same price.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=128)** If we simply do that and we plot the grand mean as it's often called, the mean across the board, we can measure the difference between these car models and the average price.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=140)** And if we take that and we simply square those distances and add that up, you may have heard of that before, that is the sums of squares, that's our variance.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=152)** So again, metaphorically you can think of this as the noise in our data.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=158)** And every data set will have a slightly different variance, but that is the context by which we judge how much we're able to explain away that variance.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=168)** So what's the best way to draw a picture of the explained variants?
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=174)** You know what's tricky, but drawing a picture of the unexplained variance is easy.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=181)** Once we place that regression line we can do something very similar, we can request those spikes and now we can look to see if the distance between the data points and the tilted like our regression line is smaller than what we saw when we were measuring the distance between the data points and the flat line, and of course it is smaller.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=205)** So when we're looking at the flat line that's a visualization of our total variance and when we're looking at the tilted line those spikes are showing us what we have failed to explain.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=217)** So now let's revisit our basic claim about how these pieces fit together.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=223)** We can say that if we take the total variance and we subtract away what we failed to explain that should tell us what we have explained.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=234)** Now watch this.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=235)** We can simply calculate that as a ratio.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=239)** Take what we explained and divide it by the total.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=243)** And if you do what most people do you think of that as a percentage.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/residuals-and-r2?u=76281980&t=248)** You multiply times 100 and then you say that it's the percentage of variance explained, and if that percentage goes up our model fits the data very well, and if that percentage is small then we have failed to explain the variance well.

> [!info]- Semantic Content
>
> **Analogies:** picture (3), think of it as (1), imagine (1)
> **Code Keywords:** let (2), this. (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### Calculating and interpreting regression coefficients
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=0)** - [Instructor] Okay, we're gonna be working in a new dataset.
>
> **[0:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=2)** So if we go into our resources, one of the case study files is called MWBank.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=8)** So we'll just go ahead and double-click on that to launch SPSS.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=13)** Let me tell you a little bit about this dataset.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=15)** This is actual data from court few years ago.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=18)** Some employees of a bank sued about fairness and pay.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=22)** And as we take a look at the dataset, we're actually gonna see some evidence that maybe there was bias in pay.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=28)** So what we're gonna do is we're gonna do the simplest regression we can imagine.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=33)** We're gonna go ahead and have just one independent variable.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=36)** So we're gonna go down here to Linear, not to Automatic Linear Modeling, that's quite different, we're gonna go down here to Linear.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=44)** And our dependent variable is going to be beginning salary.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=49)** And our independent variable is gonna be Education Level.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=52)** Now, Education Level has been declared as ordinal because, of course, we don't talk about 10 1/2 years of school or 12 1/2 years of school.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=62)** But quite appropriate in this case to go ahead and let Education Level be our independent variable.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=69)** And then, we're just gonna run that, just as is.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=73)** Okay, so what I wanna do is orient you to the SPSS output.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=78)** We're not gonna talk about every single number that's on the screen, but the most important ones.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=84)** To make it easier for you to tell what I'm talking about, I'm gonna go ahead and go down to Edit Content, I have right-clicked to do this, and I'm gonna look at it in a separate window.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=95)** I'm not gonna literally edit it, I just want you to be able to see what I'm talking about.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=99)** So first, let's talk about the R.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=102)** The R here is simply the correlation between our dependent and independent variable.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=108)** Sometimes, you'll see that labeled or discussed as a multiple R, but there's nothing multiple here because we're doing simple linear regression.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=117)** So that R is the same as the correlation that you may have heard of in other discussions of statistics.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=125)** We're gonna focus on regression, nor correlation, but it's very foundational that you're comfortable with correlations.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=132)** So if you wanna dig a little bit deeper into correlation or review, there's a really good chapter on it in Bart Poulsons' SPSS Statistics Essential Training.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=143)** Now, if you take the R and you square it, not surprisingly, you get the R Square.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=150)** But it's not just that it's the square of the correlation.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=154)** Remember that R Square represents the percentage of variants explained.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=160)** So it's terribly important when we talk about regression, it's one of the most important numbers in the output.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=166)** I'm gonna close that window and go down to the Coefficients, and again, right-click Edit Content In Separate Window, not with the goal of editing it but rather, to make it easier for you to see what I'm referring to.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=180)** So we're gonna spend a couple of minutes now, going through this pretty carefully because I wanna make sure that you're comfortable doing the necessary calculations.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=187)** So here's my handy calculator.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=190)** And imagine, for a moment, that you're trying to estimate what an employee would earn at this bank if they had 12 years of school.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=202)** Now, keep in mind that this is real data, but from some years ago.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=206)** So, the result that we get might seem a bit small to you for an annual salary, but it's because it was 20-25 years ago.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=214)** And what we're gonna do first is we're gonna go ahead and take the 691, that's actually $691, but it represents $691 per year of school, and we said that we want to imagine that this is 12 years of school.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=232)** So we're gonna multiply times 12, so far, pretty simple.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=237)** But we've got to remember to subtract the constant.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=240)** Now, the constant is the y-intercept, but here, we call it the beta zero.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=247)** We're gonna subtract our $2,516, I'm not gonna worry about the pennies.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=253)** So we're gonna estimate that an employee with 12 years of school with the bank is gonna earn about $5,776.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=262)** Now, let's add one complication to this.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=267)** Close out of that.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=268)** We're gonna be needing the calculator again in a moment.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=271)** We're gonna run the regression again, but with one additional variable.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=275)** You would think this doesn't complicate things much, but you'll be surprised when you add another variable, what kinds of things can go on.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=282)** So it's important to see that this variable has been labeled, let me go down to Variable Information here, again, this is a right-click, that Males are coded zero and Females are coded one.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=296)** You're gonna have to remember that, that's arbitrary coding, but we're gonna need to know that to do our calculation.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=302)** Let me go ahead and click on Run.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=304)** We get the result.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=306)** Now, let's compare the R Square.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=307)** We're up to .681 for the correlation, and an R square of .463.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=315)** Before scrolling up here, we had .4 or 40% variance explained before, and now, 46% of variance explained to tad over that.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=328)** So the second variable has boosted our ability to make predictions.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=332)** Scroll down to Coefficients.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=334)** I'm gonna put that in its own window again so we can see what we're doing.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=338)** And obviously, things are a little bit more complicated now.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=342)** So let's do this again.
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=344)** We're gonna also assume that the employee has 12 years of school, but we're gonna do it twice: 12 years of school for men, 12 years of school for women.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=355)** Now, remember how it's coded, men get a zero, women get a one.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=360)** So let's do the calculation for a male employee with 12 years of school.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=366)** So 592 times 12, but remember now, we gotta refer to that beta zero, and it's changed.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=376)** Any time we add or subtract a variable, those numbers are gonna change.
>
> **[6:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=380)** We subtract our 433, and we get $6,671 for the male employee.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=389)** What about for the female employee?
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=392)** We'll, think about it now, all of those steps we just did would remain the same, except men are coded zero.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=400)** So, we're multiplying zero times that 1655, and that's why we didn't have to worry about it.
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=406)** Now, we have to multiply one times that 1655, which means we have an extra step for the women.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=413)** We've gotta subtract 1655.
>
> **[6:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=417)** So already, some evidence that there really is this gender gap.
>
> **[7:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=422)** Part of what we would do in multiple regression is try to figure out the nature of that gender gap and what's driving it and better understand it.
>
> **[7:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/calculating-and-interpreting-regression-coefficients?u=76281980&t=430)** But for now, we've rehearsed that calculation, and women get substantially less, 5,106 is the number we're estimating for those female employees with 12 years of school.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), this, (1), this. (1)
> **UI Navigation:** right-click (2), double-click (1), click on (1), scroll down (1)
> **CLI Commands:** make (4)
> **Env Vars:** spss (3)
> **Analogies:** imagine (3)
> **Definitions:** is called (1), is a  (1)
> **Best Practices:** remember to (1)
> **Warnings:** keep in mind (1)


### 3. 2. Introduction to Multiple Linear Regression

#### Challenges and assumptions of multiple regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=3)** - [Instructor] Okay, now we've arrived at a terribly important topic.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=7)** It can come off as a bit technical, but we really wanna do this thoroughly, so we're about to talk about multiple linear regression.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=17)** Quite simply, that's when you have one dependent variable, but multiple independent variables.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=24)** Now, there's more than one kind of regression, but overwhelmingly the most common is called ordinary least squares regression.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=33)** And maybe you haven't even heard that phrase, but when someone said I built a regression model, they almost certainly meant ordinary least squares.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=42)** And this is, again, the most common type, and it's the type of regression we're gonna discuss in this course.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=48)** Before we walk through the assumptions, I wanna let you know that it's possible to really go down the rabbit hole with these assumptions.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=56)** So I'm gonna give you a high level overview, but if you wanna dig deeper, there are two resources that I'm gonna recommend.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=63)** One is Multiple Regression: A Primer by Paul Allison, and if you really wanna go into it, then a textbook that is very frequently used is Applied Multiple Regression by Jacob Cohen, Patricia Cohen, and then two additional authors, Aiken and West.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=84)** Now that's a big book, but it really gets into the details of the entire process, including the assumptions here.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=90)** They're very formal, very academic in style, that second book.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=94)** Okay, let's begin by talking about what's usually referred to as the specification errors of regression.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=101)** Basically, it's just this notion that regression takes on a very particular form.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=107)** So the predicted value of your dependent, that's gonna be called the Y in this formula, is gonna be built up from three things, the beta zero, which is the Y intercept, or sometimes called the constant, and then a whole series of pairs, the beta coefficient in the variable, and then since we're doing multiple regression, you're also gonna have a beta two and an X two, and a beta three and an X three, depending on how many variables you have.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=138)** Finally, you're gonna have an error term.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=141)** So again, this always takes on a particular form.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=143)** It's a constant, a series of beta one X one pairs, and an error term.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=149)** So where can you go wrong?
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=150)** Well, first you gotta make sure to put all the relevant variables in the model, why?
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=155)** Probably sounds obviously, but it's kinda subtle.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=158)** It's because the error is supposed to be random.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=162)** So if you don't put all the relevant variables in your model, there's going to be systematic error and you want the error to be just random error.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=172)** So do your best to try to find all the variables that can help predict that dependent and then you wanna make sure that you don't have any variables in the model that aren't relevant.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=183)** That's just gonna create noise in your model.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=186)** This is really about getting a good signal to noise ratio if that metaphor is helpful to you.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=192)** Finally, the relationships have to be linear.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=195)** And we're certainly gonna practice looking for linear relationships and things that might be a departure from linear relationships when we look at our data visually.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=205)** When we encounter non-linear relationships in regression there actually are techniques to address those which we'll be discussing in the course.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=214)** Okay, let's pull the lens back so to speak and talk about these assumptions more broadly.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=221)** This is gonna be a kind of to do list which we're gonna wanna use when you're exploring your data, so when you run your regression model your residual should have a mean of zero.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=233)** And this gonna be visible in the SPSS output.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=236)** Frankly this one isn't gonna be that common of a problem.
>
> **[4:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=241)** Normality of errors, a lot of folks when they learn about multiple regression think that what they've learned is that that the independent variables have to be normally distributed.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=252)** Technically this isn't true.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=254)** We have to have normality of the errors.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=256)** However, until you've built the model you haven't generated an error term yet so in practice we do check for the normality of the independent variables and that's something we're gonna be practicing.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=269)** Residuals are not auto correlated.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=271)** This is another one of the rules.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=273)** This too is something that you may not encounter but there is a formal test called the Durban Watson test that can be run in SPSS that we're gonna see.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=283)** Normally autocorrelation is associated with time series data like stock prices or economic data and so on.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=291)** So it can sometimes be a problem and it can be checked for with the Durban Watson test.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=297)** Again you need linear relationships that we're gonna be checking for when we run our scatter plots.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=303)** And finally, and when you reflect on this one it might seem strange, but people do make this mistake sometimes.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=310)** You need more observations than you have variables.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=314)** So let's say that you were doing case studies of very big companies.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=320)** You might be looking only at Fortune 500 chemical companies and maybe you only identify about a dozen.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=327)** If you have 20 variables that describe those 12 chemical companies you now suddenly have more variables than you have data.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=336)** Again the whole notion might seems strange to you if your data sets are large but people actually do make this mistake sometimes.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=343)** Finally a lot of times this will be listed as you cannot have multicollinearity, but frankly in a real world you probably will have some.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=352)** The problem is whether or not multicollinearity becomes severe, so what is multicollinearity?
>
> **[5:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=358)** We'll have a whole discussion of this it's a big topic and terrible important to your understanding of regression.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=365)** Let's pull back a little bit further.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=366)** What problems might you encounter when you start to do multiple regression that you didn't face perhaps when you're only trying to do simple linear regression with a single independent variable.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=381)** Well one challenge is visual examination becomes more difficult.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=385)** You can look at each independent variable against the dependent one at a time, that's not a problem, but you can't really look at all of your variables in a single scatter plot.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=397)** So it's very difficult to see how the variables are bouncing off each other as it were.
>
> **[6:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=402)** Simple linear regression never produces multicollinearity because multicollinearity is what happens when you're independent variables are correlated with each other so this is becomes a new problem that we have to discuss in this environment.
>
> **[6:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=416)** When have a single variable you don't have to worry about your independent variables interacting with each other but now that you're doing multiple regression with more than on independent variable you have a whole new set of problems to worry about.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=431)** One of the most important challenges, one that we're gonna invest a lot a time and thought into, is how to attribute the importance to each of your independent variables.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=442)** Now that you have a collection of them you might be trying to prove the importance of one.
>
> **[7:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=447)** For instance trying to prove the importance of a experimental effect as opposed to a placebo effect.
>
> **[7:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=454)** This too is a big new set of challenges that we'll be discussing at some length.
>
> **[7:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=460)** Finally, and I think this will seem straightforward to you you're juggling multiple problems at once.
>
> **[7:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/challenges-and-assumptions-of-multiple-regression?u=76281980&t=467)** So it's not just a matter that you have an outlier on one variable, but your have outliers on other variables too and you're trying to deal with all of this and sometimes it'll be hard to know how to address one problem without causing another problem to pop up someone else in your analysis.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (4), type, (1)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** spss (2)
> **Tools:** notion (2)
> **Documentation:** specification (1)
> **Analogies:** for instance (1)
> **Best Practices:** make sure to (1)

#### Checking assumptions visually
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=0)** - [Instructor] Okay, when you are taking a look at a data set for the first time and you're about to build a multiple regression model, there's no substitute for just taking your time and thoroughly examining it visually.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=13)** So let's do just that.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=15)** We're gonna go into one of the case study data files, specifically waste.sav.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=22)** Let me orient you to the data set.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=25)** It's pretty straightforward.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=26)** We've got amounts of municipal waste in tons.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=32)** So this first case here is just over a third of a million tons of waste in a calendar year, and then these other variables are land utilization.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=45)** So we have industrial land in acres, we've got fabricated metals in acres, trucking, retail, and restaurants, all acreage.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=59)** So we're trying to predict the amount of municipal waste per year based upon how the land is being used.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=67)** So how should we go about exploring this visually.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=70)** Again, you just have to jump in and get comfortable with the variables.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=74)** And since these were all scale variables and since we're doing regression, the core visual approaches will be the histogram and the scatter plot.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=84)** So let's just start with the first payer.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=86)** And by the first payer I mean the dependent waste in the first of the independent variables.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=93)** So we'll go into Chart Builder, and we're gonna do a scatter plot with a fit line.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=103)** Waste is our dependent.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=104)** The dependent will always go into the y axis.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=107)** And industrial land will go into the x axis.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=111)** I'm gonna go ahead and click on OK.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=114)** Now as I look at this it's hard for me not to have a visceral reaction to it, even though I'm familiar with the data.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=119)** Let's remind ourselves of the assumptions, though, so you get a sense of what I'm thinking about when I look at this.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=126)** I wand my variables to be normally distributed.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=130)** I want the relationships to be linear and oh my goodness we have neither of those things going on here.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=136)** We've got trouble.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=138)** This really doesn't look like a very pretty scatter plot at all.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=143)** And let's talk about why.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=145)** So for instance, let me go ahead and right click and I'm gonna edit this in a separate window so it's clear what we're talking about.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=152)** I actually can use this ID tool to identify what row of data that we're talking about, and these three in particular are all kind of all off in all directions.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=167)** But then also notice in the extreme bottom left corner there's a whole bunch of data points that look like they're going straight up.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=176)** They're not within a country mile of that regression line.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=180)** So we have a very weak relationship here.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=184)** One of the nice things about what SPSS automatically does with Chart Builder, is it shows us the R squared in the upper right hand corner, and sure enough, if we multiply that times 100 that is telling us that only 3.4% of variants explained by industrial.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=204)** And what can happen, actually, is when you have two data points like row ID 31 there and row ID 40, those two points seem to be pulling the regression line towards themselves on the right-hand side.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=219)** That can happen.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=220)** Data points can have what's called undue influence.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=223)** There are very specific ways of measuring and diagnosing undue influence, but we seem to be seeing it visually here.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=234)** So let me show you a different visual approach so we can start looking at the other variables.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=240)** But we would wanna take the time to run that scatter plot on all of them.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=244)** But let's use this alternate approach.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=247)** We can go to the graph board template chooser.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=250)** It's another way of doing graphics in SPSS.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=254)** Because it's got a cool choice that's gonna be helpful to us.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=257)** We can do what's called, I'm scrolling down to it now, a scatter plot matrix.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=265)** And so that we can see what we're doing, I'm gonna go ahead and choose just three variables here.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=271)** But make sure to include the dependent because that's really our focus right now.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=276)** We wanna look at each of those independent variables against the dependent, but for now, we'll grab just two of them, retail and restaurants.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=284)** After all, we've just seen industrial.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=287)** And here you go, this is what our scatter plot matrix looks like.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=290)** So it's a terribly useful way of looking at more than one variable at a time.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=295)** The way this works is we can see that this row is retail and then over here on the right the column is waste tons.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=303)** So this scatter plot, shown as one dot way up in the right.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=307)** Again, there's probably a bit of an outlier there.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=311)** It seems to be an extreme value on both retail and waste tons.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=317)** Restaurants and hotels is here.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=320)** But be careful because this is the relationship between restaurants and hotels in this column against retail.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=326)** So if we wanna see restaurants against waste, I have to scroll up a little bit.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=332)** And that's gonna be over here.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=335)** We can see that that's the row for restaurants, and again, the column for waste tons.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=340)** So in general, we could certainly say that the relationship for restaurants and retail isn't quite as nice and linear as we might like, but it's certainly better than industrial versus waste tons isn't it?
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=356)** Let's revisit restaurants against retail.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=359)** That one's up here.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=360)** This one actually is quite linear.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=363)** You can imagine a regression line here that would pass through these points in such a way that they'd be fairly close.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=371)** So oddly enough the relationship between restaurants and retail appears to be stronger than the relationship of either of them with waste tons.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=381)** Keep in mind that at this stage as you're exploring the data, the keyword to be thinking about is familiarity.
>
> **[6:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=387)** You're trying to get familiar with the data.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=389)** You're not drawing any concrete conclusions yet.
>
> **[6:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=392)** But we're certainly learning some things about the data.
>
> **[6:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=396)** Now we've looked at a bunch of scatter plots, but I've been ignoring the histogram up until now.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=401)** So let's look at all three histograms, starting with retail in the upper left-hand corner.
>
> **[6:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=408)** Does that look like a bell curve to us?
>
> **[6:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=411)** Gosh, it really, really doesn't.
>
> **[6:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=413)** There's a pile up of data points in the far left-hand side, which frankly is communities that have zero utilization of retail.
>
> **[7:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=421)** There's just this huge spike at zero.
>
> **[7:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=423)** A bell curve, we would imagine, fewer points on the left, lots of points in the middle, fewer points on the right.
>
> **[7:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=430)** So this doesn't look anything like a bell curve at all.
>
> **[7:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=432)** If we scroll down and we look at restaurants, that one looks about the same.
>
> **[7:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=438)** There's this huge pile up at the far left-hand side.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=441)** This shape, by the way everybody, has a specific name.
>
> **[7:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=444)** This is called a skewed data set.
>
> **[7:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=446)** When it's piled up on the left and it's thin, pulled out to the right, that's called a positive skew.
>
> **[7:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=453)** And the mirror image of this, with a pileup on the right and pulled thin out to the left would be called a negative skew.
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=463)** But when you describe data as being skewed, it's the same as saying that it doesn't look normal, it doesn't look like a bell curve.
>
> **[7:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=470)** Finally let's look at the bottom right, and we see the histogram for waste tons.
>
> **[7:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=475)** It seems somewhat less extreme in its skew compared to the other two.
>
> **[8:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=480)** But this also does not look like a bell curve.
>
> **[8:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=483)** Let me close on a minor technical detail.
>
> **[8:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=486)** As it turns out, that when you violate normality in regression, and clearly that's not a good thing, we don't want to embrace that, but when you violate normality in regression, if they all have a similar shape it's not quite as bad if they all have different shapes.
>
> **[8:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=503)** So the fact that they all have a positive skew here helps us out a little bit, but certainly the conclusion that we would draw is that the relationship between industrial and waste was not very promising at all.
>
> **[8:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=517)** Restaurants and retail looks better.
>
> **[8:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=519)** The data does not seem to be normally distributed, and then finally, one more that's important to remember, restaurants and retail seem to be more strongly related with each other than either of them are related to waste tons.
>
> **[8:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-visually?u=76281980&t=533)** We're just looking at this point, but those are all important things to observe as we look at this data for the first time.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), this. (1), pass (1), this, (1), finally, (1)
> **UI Navigation:** click on (1), go to (1), scroll up (1), scroll down (1)
> **Analogies:** imagine (2), for instance (1)
> **Env Vars:** spss (2)
> **Warnings:** be careful (1), keep in mind (1)
> **CLI Commands:** make (1)
> **Versions:** 3.4 (1)
> **Exercise Files:** template (1)

#### Checking assumptions with Explore
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=0)** - [Instructor] Okay, we're gonna explore the waste data set through the lens of the explore procedure.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=7)** So I'm gonna go here in the menus to analyze, descriptive statistics, explore.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=14)** Many years ago, way back in the 70s, a famous book was written.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=20)** I don't recommend that you actually seek out the book because it's too old now, but in the late 70s there was a book written called Exploratory Data Analysis, by a very influential statistician by the name of John Tookey.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=32)** The explore procedure literally does the kinds of things that were recommended by Tookey in that very famous book.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=41)** So what we're gonna do is we're gonna take all six variables, our dependent and the others, and this may be surprising at first, we're gonna put all of them in the dependent list.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=51)** Now let me review what a factor would be.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=55)** We don't have one in this case, but you really wanna think of the dependent list as where you put your scale variables, and the factor list is where you put your categorical variables.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=65)** Since we don't have any categorical variables, we're gonna put everything in the dependent list.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=70)** Again the labeling might be confusing to you but this is the way that we wanna do it.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=74)** Now, explore has some additional optional features, but for now we're just gonna run it on default settings and look at the output together.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=85)** Okay.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=85)** So let's take a look, and what we see is that we, up in the case processing summary, which is usually not the critical part of it at all, but it just tells us that we ran all 40 cases.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=96)** And actually a little trick that you might find useful when you're working with SPSS output is we can go over to that piece of output and click on the little book icon there and it collapses that piece of output because we really don't need that.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=108)** But now let's proceed to look at the descriptives table in our explore report.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=114)** Again all we did is load the variables.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=116)** It automatically decided what all the stuff should be, it's all part of the explore procedure.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=121)** So we see for industrial land that we have a mean of 562 acres.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=127)** But the median, a couple of rows down now, the median is 70.5 acres.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=135)** Folks, that is a radical pair of numbers, because if data is normally distributed, the mean and the median will really be quite close.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=147)** Here, the mean is several times larger than the median.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=152)** That always indicates that you've got a positive skew.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=157)** Cases piled up on the left, but pulled out and drawn out to the right.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=161)** And actually if we jump further down here, to the skewness statistic ... For industrial land, we actually see that indeed it's bigger than one.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=176)** If you get one or a little bit bigger than one there's a little bit of a skew there but nothing much to write home about.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=181)** If you start getting larger than that, in this case four and a half, that number is indicative of the fact that we have a positive skew.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=190)** What other numbers might we notice?
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=193)** Well look at the trend mean.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=195)** This is telling a similar story to when we compared the mean to the median.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=200)** The whole idea of the trim mean is we throw out the top numbers and we throw out the smallest numbers and then we recalculate the mean.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=207)** It gives a sense of kind of how stable the mean is, or whether or not maybe we're suffering under a skew, which we know that we have.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=214)** Notice that the mean is 561, but the trim mean is a lot smaller.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=218)** It's indicative of the same pattern that we've already been talking about.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=222)** So let's take a look at a second variable.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=224)** Let's take a look at fabricated metals.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=227)** Just for a little bit of additional practice here.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=229)** We see a mean of 149.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=231)** I'm rounding of course.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=233)** And the median is only 36, and the skew is over 4.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=237)** Same story, folks.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=239)** This is not normally distributed, it's positively skewed.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=243)** Heading down to trucking.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=245)** Mean of 312, median of 93, skewness of 3.9.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=251)** Very much the same pattern.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=253)** So let's go all the way down to waste now.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=256)** Now remember, waste is in tons, not in acres, so we gotta anticipate that the numbers will be rather different now.
>
> **[4:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=264)** And we've got sure enough an average of over a third of a million, 380,000 tons, and a median of 286,000.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=275)** Could round up to 287 there.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=277)** So again a positive skew.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=279)** Doesn't seem to be as severe as the other variables, and sure enough the skewness statistic is a bit lower for waste, it's 2.6 and not 4.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=289)** Bottom line folks, we're just acclimating to the data.
>
> **[4:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=292)** Clearly we don't have normally distributed data.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=294)** Clearly we have a whole bunch of variables that have a positive skew.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=297)** Now we're gonna move down to something that looks sufficiently old school, that folks of a certain age might be reminded of things like Ms. Pac-Man and the like.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=307)** But remember this is all based on a book that was written many years ago.
>
> **[5:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=310)** You may dismiss it as being so old school in its appearance that you don't wanna pay attention to it, but a stem and leaf plot is still something that a lot of us use, that have learned this technique over the years, because what it's actually giving you is all of your data in detail.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=325)** So take a look at this top row.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=327)** This is just for industrial land now.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=330)** We can see that we have a frequency of 18.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=334)** That just simply means 18 cases.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=337)** And then the stem and leaf part, again it takes a little bit of practice.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=340)** We see a 0.0, 0.0.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=343)** Count all those zeroes up, you can do so manually, and what you'll find is the number of cases that have a zero for industrial land.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=354)** And you see the ones?
>
> **[5:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=356)** Those are gonna be the cases that have a one times 100.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=362)** Again this takes a little bit of practice to interpret, but that means that there's two cases with industrial land acreage of about 100.
>
> **[6:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=369)** And then there's one case, two times 100, for the industrial land is about 200 acres.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=376)** And another two, that's about 400, and so on, right?
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=379)** So it takes a little practice to read a stem and leaf plot but even as the data set gets up to a couple hundred, if you rehearse this you'll get an extremely good sense of not just the shape of your data, but actually how many cases have specific values.
>
> **[6:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=395)** Now let's move on to another one of the recommended visualizations that are generated by the explore procedure.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=404)** This is a so-called box and whiskers plot, and for industrial land it's so scrunched together that you can barely see the blue color, and that's because there are so many cases that have a similar value.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=420)** So I'm gonna scroll down past most of these variables, all the way down to waste, because if you recall, waste was the least skewed.
>
> **[7:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=431)** And these are gonna be easier to read.
>
> **[7:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=434)** Here it is.
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=435)** This is gonna be much easier to get familiar with what a box and whiskers plot is telling us.
>
> **[7:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=442)** So the bottom of the blue region is the 25th percentile, and the top of the blue region is the 75th percentile.
>
> **[7:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=451)** What's the relevance of that?
>
> **[7:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=452)** Think about it everybody, it means that half of your data ... Lives between the bottom of that blue region and the top of that blue region.
>
> **[7:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=461)** So it gives you a sense where half of your data is, where the bulk of your data is, and that heavy black line running through the middle of the blue region is the median.
>
> **[7:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=471)** The whiskers have a rather complicated definition, it's ... One and a half times the box length is the maximum length of the whisker.
>
> **[7:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=479)** You can certainly find a lot of information about box and whiskers plots without too much difficulty, either in statistics books or on the web.
>
> **[8:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=487)** But what the whiskers are telling us here is that below the 25th percentile, next thing you know you hit zero.
>
> **[8:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=495)** Or you get close to zero rather.
>
> **[8:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=497)** So some of the communities are quite low on waste tons but we hit the minimum case.
>
> **[8:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=503)** Going above the blue region, the whisker stops, it appears, about 700,000 tons or so, and above that, are a couple of circles.
>
> **[8:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=515)** Those circles are outliers as Tookey has defined outliers in his book.
>
> **[8:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=522)** He has a very specific definition, and those cases fall outside the typical range, so they meet his definition of outliers.
>
> **[8:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=529)** So we have outliers that have a large amount of waste but we don't have any outliers on the low end.
>
> **[8:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=535)** And then way up at the top at almost 2 million tons, we have an asterisk and that meets Tookey's definition of what's called an extreme outlier.
>
> **[9:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=546)** It gets a different symbol, it's way outside the others, and a case, everybody, that is that far outside the typical range, can wreak havoc inside our multiple regression.
>
> **[9:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=558)** It can be very problematic so one of the things that we'll wanna know is if that case, which is case ID number two by the way, that's what the number two next to it means, if it's an outlier in waste tons I wonder if it's also an outlier in restaurants.
>
> **[9:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=572)** And retail and on other things, which is something that we'd want to explore.
>
> **[9:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=577)** So to recap, the explore routine is gonna give you a descriptives report, stem and leaf plots, and box and whiskers plots.
>
> **[9:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-with-explore?u=76281980&t=586)** Might take a little practice, might be something that's new to you, but you can get a very rich understanding of your data by running the explore procedure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (4), throw (2), case. (1)
> **Definitions:** is a  (4), means that (2)
> **Versions:** 0.0 (2), 70.5 (1), 3.9 (1), 2.6 (1)
> **CLI Commands:** find (3)
> **UI Navigation:** click on (1), scroll down (1)
> **Best Practices:** recommended (2)
> **Env Vars:** spss (1)
> **Speakers:** - [instructor] (1)

#### Checking assumptions: Durbin-Watson
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=0)** - [Narrator] One of our mathematical assumptions of multiple regression is having to worry about the possibility of auto correlation, or auto correlated errors.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=10)** As it turns out, there's a specific test that is in SPSS just to check for this.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=16)** Let's take a look.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=18)** Analyze, Regression, Linear.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=22)** Now, we're really not focused on building a model.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=24)** We're just gonna make waste our dependent and restaurants our independent, and we're gonna focus only on Durbin-Watson.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=32)** So if we go over to Statistics, we can check off Durbin-Watson.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=37)** But let me show you something before we continue.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=41)** If you click on the question mark here within the menu, you'll get online help that's only for this menu.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=51)** That's prevents you from having to worry about what key word should I choose to get the right help.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=56)** And sure enough, there's a little paragraph, granted a bit brief, on what the Durbin-Watson test is all about.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=64)** So that's the most efficient way of requesting help.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=69)** So we'll click on Continue, and click on OK.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=73)** And it's kinda hidden here a little bit.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=75)** Let me put this in it's own window so that you can see it.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=78)** And we simply get a number.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=81)** But the rule of thumb is that if the Durbin-Watson is fairly close to two, generally it's described as being between one and a half and two and a half.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=93)** You get a clean bill of health according to the Durbin-Watson.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=96)** So remember that auto correlation is a problem that can occur if you're looking at things like stock prices or economic data.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=103)** So we wouldn't anticipate that we would have that problem in the waste dataset, but it is a well-known assumption.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=110)** And SPSS has this special test dedicated just to this issue.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-durbin-watson?u=76281980&t=113)** And we pass.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), this. (1), pass (1)
> **UI Navigation:** click on (3)
> **Env Vars:** spss (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [narrator] (1)

#### Checking assumptions: Levine's test
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=0)** - [Instructor] It is terribly important to check your variables for normality visually.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=6)** I always find that to be the most compelling.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=9)** However, there's also a formal assumptions check within SPSS to check for normality.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=15)** It's not specific to regression by the way, there might be all kinds of reasons why you might check for normality so it's not found in the regression menu but it's very useful for this purpose.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=26)** So we're going to go to Analyze, Descriptive Statistics, Explore, but we're going to go to Plots and we're going to check normality plots with tests, that's going to give us our Lavines test.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=43)** So we're going to click on Continue.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=46)** Sense we're only interested in the plots at the moment we can click Plots and that will prevent a lot of output that's unnecessary to (mumbles) we'll go ahead and click on OK.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=60)** And let's stop at Tests of Normality, right click I'm going to put it in its own window so we can see it more clearly.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=68)** And of course it's very important to be comfortable understanding tests of statistical significance or tests of inference.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=80)** What's surprising at first about assumptions checks if you haven't used them before, is that normally when a result comes in with a low significance statistic like this one for instance is very small, it's .000 even smaller than that in fact.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=99)** Normally when we're running statistical tests we celebrate the very low significance because it means that variable is meaningful in our model or that our hypothesis was true and so on, right.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=112)** But here with assumptions checks, when the significance is very low, it almost always means that we're rejecting the null hypothesis that the assumption was met.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=126)** So if the null hypothesis is that the assumption was met, a very low significance with assumptions checks actually indicates that the assumption was not met.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=136)** This should not surprise us because through the lens of histograms, looking at scatter plots, none of these variables looked like they were normally distributed.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=145)** But this is a formal test that is telling us that on a statistically significant basis, these six variables are not normally distributed.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=155)** The so called KS test is the more common of the two, the Shapiro-Wilk is an alternate version of the same test.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=162)** Let's return to the output and we automatically got these plots, we got them simply by asking for the Lavines test, they're also looking at the same issue.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=175)** Is our data normally distributed?
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=177)** If it was normally distributed, the dots would fall on the line, clearly they don't.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=184)** Now the worst culprit is this case way over there, case ID 31 and this one is kind of off the line as well, case 40.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=194)** And way down here we actually have three of them piled up and that's what SPSS will do when you have more than one, we've got ten, 23, and 27.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=206)** What will frequently happen is when you use the point ID tool like this and different plots, you'll assemble a list of what you might come to call all the usual suspects, the same case IDs will come up.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=220)** They will depart from normality and industrial land but those same municipalities will depart from normality and fabricated metals or in restaurants, or in retail.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=230)** So the point ID tool when used with these Q-Q plots, that stands for quartile quartile plot can really help you assemble this list of the cases that are a concern so that you can take a closer look at them.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-levine-s-test?u=76281980&t=243)** So the bottom line is our variables are not normally distributed, but as I would do on any real world project, you proceed to the next step, just proceed with caution.

> [!info]- Semantic Content
>
> **Definitions:** means that (2), is a  (1), is an  (1), stands for (1)
> **UI Navigation:** go to (2), click on (2)
> **Code Keywords:** let (2), continue (1)
> **Env Vars:** spss (2)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Checking assumptions: Correlation matrix
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=0)** - [Instructor] Another useful tool in our toolkit is the correlation matrix.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=5)** It's gonna give us information that's similar to what we learned through a scatter plot matrix, but as we'll see, it allows us to look at more variables than we could fit on the screen otherwise.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=18)** So this way we'll be able to look at all six variables all at once.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=21)** I've gone to Analyze, Correlate, Bivariate.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=27)** So the correlation that we're gonna run is the default choice, Pearson correlation, and when folks simply say, I'm gonna run a correlation, they almost always mean a Pearson correlation.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=39)** I'm gonna bring all six variables into place, and we're gonna click on OK.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=45)** I'll put this in its own window.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=48)** And let's see what we observe, 'kay.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=52)** Now at the risk of being obvious, when industrial land is related to itself, it gets a correlation of one.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=59)** That's not gonna be the interesting information for us.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=62)** Let's first start by looking at the column for waste.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=67)** Now we really would have this information at this point, but these correlations, if we square them, is gonna give us a notion, in fact it's really quite precise, of what the R squared would be if we built these simple linear regression models one at a time.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=86)** So what do we observe?
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=87)** We observe that the strongest correlation is the .823 for restaurants.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=95)** And if we were to square that, we would get around 65% or so of variance explained.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=101)** If we try to build a simple linear regression model using just restaurants.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=107)** Our second best predictor appears to be retail trade.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=113)** And our weakest through this lens appears to be industrial land.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=119)** What this cannot tell us at this stage is how those variables will bounce off each other and how they'll interact with each other when they're all in a model together doing a multiple regression.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=133)** So what else can we learn from this correlation matrix?
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=137)** Perhaps even more important than which variables are strongest and weakest against our dependent.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=143)** We can also see how they interact with each other.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=147)** Something that is done very effectively here.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=149)** We can see for instance that trucking and fabricated metals is correlated at .893.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=157)** That's very high.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=159)** That's higher than the relationship of restaurants with our dependent.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=164)** And if we were to square that, we would get more than 80% of the variance in trucking explained by fabricated metals or vice versa.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=174)** When the correlation is that high, we can get a problem that's called multicollinearity.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=179)** That occurs when our independent variables are highly, highly correlated with each other.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=185)** Essentially what's happening is, the information in trucking is redundant to a large degree with the information in fabricated metals.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=195)** And the two variables will be fighting it out metaphorically to explain that overlapping variance and waste.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=202)** When the amount of overlap becomes very large, it causes problems in our multiple regression.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=208)** And we see that we have another variable pair that's gonna cause us trouble, namely here, we have an extremely high correlation between restaurants and retail.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=219)** We want to be looking for strange behaviors in our multiple regression when we run it.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=227)** Having seen early indications that trucking and metals is highly correlated, and restaurants and retail is highly correlated.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=236)** One of the many symptoms that we can be looking for, based upon this evidence, is that we might even have relationships that change direction, or change sign.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=247)** In other words, all of these correlations are positive.
>
> **[4:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=251)** As number of acres goes up, the amount of waste goes up.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=255)** But one of the symptoms of multicollinearity is, that as acres goes up, waste goes down.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=262)** It suddenly changes direction unexpectedly.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-correlation-matrix?u=76281980&t=266)** So we should be looking out for that when we run our multiple regression based upon what we see here.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for, (1)
> **Analogies:** similar to (1), for instance (1)
> **Tools:** notion (1)
> **UI Navigation:** click on (1)
> **Definitions:** in other words (1)
> **Speakers:** - [instructor] (1)

#### Checking assumptions: Residuals plot
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=0)** - [Instructor] Okay, we're gonna discuss a very important topic.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=4)** A bit technical, a bit mysterious at first, but nonetheless terribly important, the notion of a residuals plot.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=11)** So let's do an investigation of one using the MWBank dataset.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=16)** So that's one of our case study datasets.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=20)** Here's our data.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=22)** A common trap that folks can fall into when they're new to multiple regression is that they hear about assumptions like, "Put all the relevant variables in," "leave the irrelevant variables out," "make sure that you have normality of errors," and it just sounds like this mysterious laundry list as if there's not much that we can do about it.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=43)** There actually is, and the residuals plots are probably the key to understanding those assumptions.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=49)** So let's take a closer look.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=51)** We're gonna go into the regression menu.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=55)** And because this set of menus can produce complex output, we're gonna start with just a simple regression example of this plot.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=64)** We're gonna choose beginning salary as our dependent and education level as our independent.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=71)** Don't worry about it being ordinal in this menu.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=74)** Then we're gonna go to plots and we're going to request a histogram.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=80)** Now, this will not be a histogram of our independent variable or even our dependent variable.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=86)** It's gonna be a histogram of the residuals.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=89)** So remember that the assumption is normality of errors.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=94)** Well, sometimes before you do the regression, you have to go ahead and settle for a histogram of the independent variables themselves, but here we can actually generate a histogram of the residuals but we have to build a regression to do it.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=108)** And also what we're gonna do is we're gonna take ZRESID and make that the Y, and ZPRED the X.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=117)** Now if you're not familiar with that nomenclature, Z in this context means Z score or standardized score, so no matter what we're talking about whether it be dollars or acres or tons, the Z score will always be the same.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=133)** Zero is the average, one will be one standard deviation above the mean, and negative one will be one standard deviation below the mean so no matter what we're doing regression on this plot will always have the same Y and X axis.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=147)** So let's take a look at it.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=152)** We're gonna scroll past the regression results itself because that's not the topic of the moment.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=157)** And we're gonna take a look at this histogram.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=158)** Now remember that this is a histogram of residuals.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=163)** Now the residuals are what we see visually when we request a spike in a scatterplot.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=170)** And the formula for the residual is observed minus expected.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=175)** The reason that's relevant here is that if it's positive it means that it's floating above that regression line, and if it's negative it's below.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=183)** So what do we see?
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=184)** You might look at this at first and say, "Wow, it doesn't look too bad."
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=187)** "It kind of looks like a bell curve."
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=189)** But there's something in particular to look out for here.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=192)** To the left of the zero we see a tall spike, meaning that we have a lot of small negative residuals.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=202)** We don't see that on the right, so it's not really symmetric which should cause concern, because a bell curve would be symmetric.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=209)** So to the right what we see is a smaller number of big, positive residuals.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=216)** This is not a good sign, it's not what we wanna see.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=218)** We wanna see balance, but this is a very common pattern, but it means that we actually do not have normally distributed errors.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=227)** No regression is ever gonna be perfect.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=229)** But this pattern is not a bell curve pattern and it's something to watch out for.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=234)** Again this large number of small negatives counter balanced by a small number of big positives.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=243)** Not symmetric.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=243)** So let's scroll down, and here's the residuals plot.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=247)** Now, if you've never seen a residuals plot before you might wonder what to look for.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=253)** It can be a little disorienting.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=254)** Let me show you a trick of that I'm quite fond of.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=256)** I'm gonna put this in its own window and I'm gonna add reference lines so we can better see what we're doing.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=263)** So I'm gonna go ahead and choose a horizontal reference line.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=267)** And then force it to be zero, always force it to be zero, that's basically the trick.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=273)** And then choose a vertical reference line and again force it to be zero.
>
> **[4:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=279)** If this was a symmetric residuals plot, remember what we want our residual to be.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=286)** We want it to be random.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=288)** If the errors that we make are systematic, if we consistently make overestimates for certain cases, and underestimates for other cases we don't have that symmetry and that's bad.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=300)** So what we would expect to find is a large clustering of dots at zero, zero.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=306)** That would be average error.
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=308)** So that would be average in our predicted value and it would be average on our residual.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=313)** That's not what we see.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=314)** We see kind of a two dimensional version of what we were witnessing in the histogram.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=319)** We certainly see a clump of errors a little bit to the left of zero, but we see these spread out errors going up and going out to the right.
>
> **[5:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=328)** There's actually a very fancy name for this.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=330)** It says that this is showing that our residuals are heteroscedastic.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=336)** Basically we don't have that symmetry that we want.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=339)** So you would think, "Gosh this is all so technical," "what action and I'm supposed to take?"
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=342)** "What could I hope to do?"
>
> **[5:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=344)** If there's a pattern in your error term, in other words if there's a pattern in your residuals it means your model is missing something.
>
> **[5:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=353)** There's something systematic about those errors and it usually means you have to add something to your model.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=359)** Add a variable, add an interaction term, possibly even deal with some curvilinearity that you have.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=366)** But something's not quite right about this model as is.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=370)** So interpreting residuals plots are bit of an art, they take a little bit of practice.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-residuals-plot?u=76281980&t=375)** But it really gives us a lens by which to view whether or not our model is in good shape.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), for. (2), this. (1)
> **Definitions:** is a  (4), means that (2), in other words (1)
> **CLI Commands:** make (4), find (1)
> **Env Vars:** zresid (1), zpred (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Tools:** notion (1)
> **Warnings:** watch out (1)
> **Speakers:** - [instructor] (1)

#### Checking assumptions: Summary
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=0)** - [Instructor] We've just covered a great deal of ground regarding multiple regression assumptions.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=6)** It's a good time to kinda take stock and briefly review the assumptions and which corrective action or check is appropriate for each.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=18)** First, directly from our earlier discussion we said that we should put all the relevant variables in the model.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=28)** It seems like something that you can't check or act on but you can.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=31)** Recall that we want to look at the residuals plot.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=35)** And if the residuals plot shows a random pattern that's a good sign, that's what we want.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=40)** Also, one of the relevant variables that might be not included but that we need to include could be an interaction.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=49)** The other phrase that leaves folks wondering what they should do is the phrase we used at the very beginning of talking about assumptions, make sure we leave the irrelevant variables out.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=60)** But there are actions you can take here as well.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=63)** Obviously we have the statistical significance of each and every independent variable.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=68)** We can check to see if any of them are nonsignificant.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=71)** Also remember, when we request the residuals plots we can get all of the partial plots for each independent variable.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=79)** They should show a nice, clean linear relationship.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=83)** Now we know that we're doing linear regression so that we need linear relationships.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=87)** Let me remind you what actions you can take about this.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=90)** The easiest one, to be honest, is curve estimation or simply looking at a scatter plot and remember what corrective action goes with this.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=100)** What we might wanna consider doing is squaring one of the independent variables.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=106)** If it's showing curvilinear then maybe we take, let's say, education and we add education squared as an additional variable to our model.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=115)** Now one of the ones that is rarely violated is residuals have a mean of zero.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=120)** But this one's so easy to check.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=123)** And then another assumption that's trickier is normality of errors, and frankly you're never gonna have a plot of your residuals, your errors, that look like a beautiful bell curve.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=137)** The trick is whether or not it's gone too far, it's too skewed, and you have some real problems.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=143)** So quick reminder of what you can do.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=145)** Before you build the model you can run a Levene's test to see if your independent variables are normally distributed.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=152)** They'll never be perfectly normally distributed, but if you fail the Levene's test on any of your variables that's a bad sign and you want to proceed with caution.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=160)** Once the model is built, recall that you can get that little histogram and the SPS output.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=166)** You also get a direct report of whether or not the residuals have a mean of zero.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=172)** Okay, multicollinearity, what can you do before you build the model?
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=176)** Well you should do a correlation matrix and recall that what you're looking for is if independent variables are highly correlated with each other.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=184)** That would be a warning sign.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=187)** After you build the model you can request the collinearity diagnostics, and if you recall that includes things like variance inflation factor and tolerance.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=196)** Finally, and this is another one you're not gonna run into all that often, is what's called serial autocorrelation.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=204)** You're gonna find this if every row in your data is in some sequence like stock prices or economic data.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=212)** If you fail the Durbin-Watson test, this is an indication that maybe what you have to do is kind of do a little homework on time series forecasting, because maybe you've got a data set where time series forecasting is gonna be a better approach than linear regression.
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=229)** And there you have it.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/checking-assumptions-summary?u=76281980&t=231)** We've worked hard over the last several videos, but that's a quick summary of each of the assumptions and what we can do about them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (2), finally, (1)
> **CLI Commands:** make (1), find (1)
> **Warnings:** caution (1), warning (1)
> **Env Vars:** sps (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 4. 3. Dummy Code and Interaction Terms

#### Creating dummy codes
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=0)** - [Instructor] Okay, well now we're gonna talk about an issue that's gonna come up in almost every regression that you do.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=7)** Certainly well more than half, certainly the majority of the ones that I've done over the years.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=12)** Whenever you have a categorical variable, you're gonna have to prepare the data by performing what we call dummy coding.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=20)** So if you have a categorical variable, you simply cannot feed this directly into your regression.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=27)** And in a couple of moments, I'll be showing you a dataset example that will explain this.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=34)** So what you have to do, is if you have original variable with four categories in it, you have to create four new variables.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=42)** So if a particular case belongs to category one, then what you have to do is make that true, just simply coded one, for the category one variable, but then false, coded zero, for the others.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=58)** And this is the most common way to do this.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=60)** Again, it's gonna happen all the time on your regression projects.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=64)** So with all those cases that belong to category two, they will be coded one for the category two variable, and false for the others.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=73)** And then you just continue to fill out the matrix.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=75)** So let's proceed with an example with a dataset in SPSS, and learn how to do this there.
>
> **[1:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=81)** We're gonna be using the MWBank dataset for this demonstration.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=87)** Okay, here we are in MWBank, and what I'm gonna do, is I'm gonna take just a moment to run the regression directly with the categorical variable as is.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=101)** Now remember, please don't do this at home.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=103)** What I'm about to show you is the wrong way, but what I want you to see is that SPSS won't stop you.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=111)** So the employment category variable is right here.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=114)** I'm gonna make that my independent variable, and I'm gonna run the regression.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=118)** SPSS does not give us a warning, it does not tell us that we did something wrong, and what it's actually telling us here, let me open this in its own window, is that for each job category, we're getting an additional $1,730 in pay.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=136)** Now at first, you might think, well wow, it seems like it's working.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=139)** But let me explain why that's such a problem.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=143)** If we take a look at employment category, let's look at the order of these variables.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=150)** It's arbitrary, isn't it?
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=151)** We've got clerical, office trainee, security officer, college trainee.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=155)** What would make us believe that the salary gap between each of these jobs in this arbitrary order is $1,700?
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=165)** It really doesn't make any sense.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=167)** SPSS is trying its best to honor our request to fit this variable, but it's just not right.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=174)** So what we have to do, is we must dummy code this.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=177)** To proceed in this way would be a serious error.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=180)** The most efficient way to do this is in syntax.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=185)** This is a very easy command to learn, so even if you're not very rehearsed at syntax, I think you're gonna find this to be pretty straightforward.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=194)** So we're gonna use the compute command.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=196)** What we wanna do, is for each of the categories that we have, we wanna create a new variable.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=201)** Now I like to add YN, yes/no, as a suffix, but you can use whatever naming convention you like.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=208)** But the first category we're gonna do is clerical.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=211)** And the next bit of code might seem a little surprising at first, but we're gonna say jobcat equals one within parens, and then simply put a period.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=220)** Let me explain what's going on there.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=223)** I'm missing an equals sign actually.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=225)** What's going on is that this parens part is gonna be evaluated as either true or false.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=235)** And if it's true it's gonna put a one in clerical yes/no, and if it's false, it's gonna put a zero in clerical yes/no.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=242)** A little additional detail: if the value is unknown for a particular case, it's actually gonna put a system missing value, SPSS' version of a null, in that as well.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=254)** So it actually takes care of all three circumstances.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=256)** The jobcat is one, jobcat is not one, or jobcat is unknown for a particular case.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=263)** So now that we've done that, it's actually pretty simple.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=265)** We just simply make more than one copy of this.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=269)** We're gonna need seven, and clean it up a little bit, so we know that jobcat is gonna be two, and then it's gonna be three, and then four, and five, and six, and seven.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=286)** And the other job categories, I'm pretty familiar with this dataset, so I happen to know them.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=290)** You've got office trainee, which I'll just say is OT.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=295)** And then security officer, clerical, and then, oh we already had clerical.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=305)** And then exempt, which is basically the executive's salary, and then finally, MBA, and tech.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=318)** Now, there's a special rule that you have to know as well, and that is, whenever you do dummy coding, you have to pick one category to be left out.
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=329)** And let me explain why.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=330)** First I'm gonna go ahead and run this.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=335)** And when we go to the data window, I'll be able to show you visually why you have to do that.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=342)** We have to execute those commands, so I'm gonna click on something in the menu called run pending transformations.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=349)** What I could have done in the syntax window, is write the word execute, okay.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=354)** I don't wanna get too deep into syntax in this video, but we had to get that to run.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=359)** The reason why you have to drop one, is if a particular case is false on these six, we absolutely, 100% of the time, know that they must be true on the seventh one.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=375)** So if we use all seven variables, we will have perfect multicollinearity.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=383)** Not just high correlations, but perfect correlations.
>
> **[6:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=385)** So this is a very important rule, when you dummy code, and then actually run the regression, you have to leave one of these out.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=393)** So now let's run the regression.
>
> **[6:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=398)** I'm gonna take job category out.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=400)** Remember, that would have been a very serious error to proceed in that way.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=404)** And I'm gonna put six of the seven variables in, let it run, and what do we observe?
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=409)** We observe that our R squared is actually quite good.
>
> **[6:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=412)** Our R squared is 74%, just from jobcat alone, collectively.
>
> **[6:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=418)** And then if we go down to the coefficients, what we find is, is that the beta zero has a value of 20,000.
>
> **[7:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=426)** Is that our average, is that a minimum or a maximum?
>
> **[7:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=429)** It actually is the salary of the tech folks.
>
> **[7:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=433)** Why the tech folks?
>
> **[7:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=435)** It's the group that we left out.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=437)** Usually folks will refer to them as the reference group.
>
> **[7:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=441)** So actually, what we discover is, they must be the highest paid group, because all other dummy codes are associated with a negative coefficient.
>
> **[7:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=452)** So clerical makes 14,000 less than our reference group.
>
> **[7:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=457)** And MBA makes 7,000 less than our reference group.
>
> **[7:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=463)** In fact, even the executives make 6,700 less than our reference group, so apparently here, the CIO, or IT team, makes more than the bank management.
>
> **[7:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=473)** Okay, so that's not only how we create the dummy codes, but how we then interpret them.
>
> **[7:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-dummy-codes?u=76281980&t=479)** Don't forget about the reference group, it's kind of an important key to the whole process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), this. (5), continue (1), case, (1), case. (1)
> **CLI Commands:** make (6), find (2)
> **Env Vars:** spss (5), mba (2), cio (1)
> **UI Navigation:** go to (1), click on (1), in the menu (1)
> **Definitions:** is a  (2)
> **Best Practices:** don't forget (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Dummy coding with the R extension
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=0)** - [Instructor] SPSS offers a cool shortcut for generating dummy codes.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=6)** However, there's a little bit of trick to how to use this shortcut and others like it.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=12)** It is a so-called programmability extension, so we can go up to the extensions, and down to the extension hub.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=22)** It's gonna send us to the internet, and what we're gonna search for is just dummy.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=28)** Just the first word should be sufficient, and there it is.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=31)** So we're gonna go ahead and click on get extension, and okay.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=37)** I'm gonna accept the terms and click on finish.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=41)** Great, and it says it's been installed, so let's see if we can't find it there.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=45)** Minimize that, and go to transform, and sure enough, it is now there.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=52)** That symbol to the left does not specifically mean create dummy variables.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=59)** The blue plus, rather, means that that's an extension.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=63)** So we could install other extensions, and they would all have that symbol of the blue plus.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=71)** And we're gonna go ahead and create dummy variables for jobcat, which is one of our nominal variables.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=78)** And I'm gonna go ahead and give it a root name.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=80)** Now what this is gonna do is, it's gonna be a naming convention, essentially.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=85)** So if I say jobcat, then it's gonna go ahead and make that a suffix on all these new variables.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=92)** Then I can click on okay.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=96)** And isn't that something?
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=97)** There it is.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=98)** So that's very easy, and for each of those variables, I've got jobcat one, jobcat two, jobcat three, and so on.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=104)** It's created all those variables in one step.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dummy-coding-with-the-r-extension?u=76281980&t=108)** Very easy, indeed.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (1), means that (1)
> **Code Keywords:** let (1)
> **Env Vars:** spss (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Detecting variable interactions
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=0)** - [Instructor] There are many topics that fall under multiple regression.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=4)** So it's hard to pick one that's the most important.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=8)** But, variable interactions is a candidate for that number one slot.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=14)** When you detect a variable interaction, if often becomes the most interesting part of your analysis.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=21)** So, let's take a close look.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=23)** I've reverted back to the original MW Bank data set and now let's go up to chart builder.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=32)** And, I'm going to go ahead and do a scatter plot.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=35)** I'm going to do a colored scatter.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=39)** And I'm going to make my dependent variable beginning salary.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=45)** I'm going to make my X axis education level.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=49)** And a terribly important step here, I have to right click on education level and declare it as a scale.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=58)** Because, if I call it an ordinal, which is a fair description of education value, but if I call it an ordinal, chart builder will not build a scatter plot, it will do a different type of plot.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=70)** So terribly important that I make that change.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=73)** And then I'm going to make sex of employee the color.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=77)** I'm going to go down to the bottom right and request a linear fit line for subgroup.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=83)** That's a recent option in SPSS, to do that directly here.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=88)** So, if you don't see that checkbox on your own copy of SPSS, go ahead and proceed, build the scatter plot and add the subgroups later.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=97)** Going to click on OK.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=102)** And I'm going to right click on this to put in it's own window, so that it's clear what we're talking about.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=108)** And what we're going to be focused on, is the relationship for men, the relationship for women, and whether or not there might be a possible difference between the relationship for men and women.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=121)** Now, it's very easy to get very deep into this subject.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=126)** There's a lot that's been written about it.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=128)** One book that I'll often recommend is a book called Multiple Regression Testing and Interpreting Interactions.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=136)** It's about a couple hundred pages.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=138)** It's written by Akin and West.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=140)** But, the entire book is dedicated to variable interactions and regression.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=146)** So, let's take a look.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=147)** Let's see what we observe.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=149)** Let's look at the relationship for men first.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=151)** Those are the blue dots.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=153)** And what we see, as education level increases from left to right, clearly, that's associated with higher salaries.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=162)** So, for instance, if we look at education levels of around 14 and 15, let's say an associates degree or part of the way to a bachelors degree, we see that that's associated with annual salaries for the men of around 10,000 or so.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=177)** As we get further along in education, those salaries start to floruit more with the $20,000 annual range.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=186)** This is real data, but from some years ago.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=189)** So, you might have anticipated that these salaries would be higher.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=193)** But, it's because of the age of the data set.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=196)** If we look at the relationship for women, we see that women with 12 years of school or 15 years of school, have about the same salaries.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=208)** There's a little, tiny tilt from left to right, tilting upwards on that red regression line.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=216)** But it's clearly not as steep as the blue line, which is associated with men.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=221)** Now, it's not necessary that the lines cross in order for us to conclude that there's an interaction.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=230)** An interaction will be present when the slope of the blue line is not the same as the slope of the red line.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=238)** Because what this tells us, is that the gap between the blue line and the red line are not uniform.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=248)** The gender gap at high levels of education is wide.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=253)** And the gender gap at low levels of education is more narrow.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=257)** To put it another way, the nature of the gap between men and women depends on upon another variable, education.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=266)** Or, one more way to phrase it, the impact of education on salary depends upon another variable, namely, sex of employee.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=277)** So, an interaction is present here and there are two consequences of that fact.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=283)** One is, we have to learn how to create an interaction term and include that term in our regression.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-variable-interactions?u=76281980&t=290)** And the second implication is, we've discovered something interesting that we absolutely have to explore further and report on when we're done with our regression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **CLI Commands:** make (4)
> **UI Navigation:** click on (2), checkbox (1)
> **Env Vars:** spss (2)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Creating and testing interaction terms
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=0)** - [Instructor] Okay, so here we are in the M.W. Bank data set and we know that we have an interaction, but what action should we now take?
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=7)** Well, what we're gonna have to do is create an interaction term.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=13)** Since education and sex are the two variables that are interacting, what you have to do, and this might surprise you at first, just create a new variable that is the product.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=24)** Literally multiplying education times sex.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=28)** So let's walk through the process, but there's one step that we have to do in addition.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=34)** What's gonna happen is when we have this education times sex variable, it is certain to be highly, highly correlated with the education variable, and that's gonna cause multicollinearity.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=47)** So academics differ a bit on how to tackle this, but the classic approach is called centering, which I'm about to show you.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=56)** And if you want it to do a deeper dive into the theory behind centering, you could read about it in Aiken and West's book "Multiple Regression: Testing "and Interpreting Interactions."
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=68)** So let's dive in and actually perform this task.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=71)** Probably the most efficient way is just to go ahead and do it in syntax.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=76)** So here I am in the syntax window, and the first thing that we have to do is center the education variable.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=83)** So what is centering?
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=85)** Well, what we're gonna do is we're gonna take education and subtract from it its average.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=91)** So let's figure out what the average is.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=92)** We're gonna go to descriptives.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=94)** It's gonna be the quickest and easiest way.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=96)** I'm gonna take the education variable, and I learn pretty quick here that the average is 13 1/2.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=104)** So I'm gonna go back to my syntax, and I'm gonna say compute education cen equals education.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=115)** Now if you're not sure how education is coded in the data set, you can always check here.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=121)** It's actually educational level.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=123)** So I was right about to make a mistake.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=125)** I can click on paste, and that's a nice little trick there.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=129)** So in this data set, it's called edlevel, and I'm gonna subtract from it my 13.5.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=137)** Now again, this might seem mysterious at first, but what I'm trying to do is combat the inevitable multicollinearity that I'll get if I create an interaction term without centering.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=148)** So now what I can do is I can compute ed sex, which is gonna be the centered version of education times sex.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=162)** Now a lot of folks when they first see this kind of find it hard to believe.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=167)** Say, "Wow, we're gonna take a 01 variable, "and we're gonna multiply it times a scale variable.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=171)** "It doesn't seem to make sense."
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=172)** But this is absolutely the way that this is done.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=175)** So now I'm gonna have these two new variables.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=177)** I'll go ahead and put an execute after this so that those will run.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=182)** I'll highlight that, and now what we're gonna do is we're gonna actually use the variables that we just made.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=188)** So we're gonna go back to the data window, analyze, regression, linear.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=194)** Beginning salary is gonna be my dependent, and my independent variables are going to be the centered version of education, the sex variable which is okay because it's just like a dummy coded variable.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=209)** It's coded zero and one.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=211)** And then this new variable.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=213)** We're gonna go ahead and click on okay.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=216)** The coefficients are really where the action is.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=219)** I'm gonna right click and put this in its own window, and let's take a look.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=224)** Now we're gonna have a lot of practice looking at multiple regression content in this course, but what we see is that ed sex is significant.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=234)** That's the key.
>
> **[3:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=235)** So what you can see visually in a scatter plot with two regression lines, one for men and one for women, the fact that they were not parallel.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=244)** We have now confirmed by creating an interaction variable and finding that that interaction variable is significant.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=250)** It's well below the standard cutoff of .05 for 95% confidence.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=257)** And if we return to the main part of the regression output, the r squared is higher than it would be certainly if we took that interaction variable out.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-and-testing-interaction-terms?u=76281980&t=268)** So we have now confirmed in the regression output what we saw in a scatter plot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** click on (2), go to (1)
> **Cross-References:** go back to (2)
> **Versions:** 13.5 (1)
> **Definitions:** is called (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 5. 4. Three Regression Strategies

#### Three regression strategies and when to use them
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=0)** - [Instructor] You're looking at a cheat sheet that has been provided to you as a PDF.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=6)** I want you to understand the context behind the three distinct case studies that we're gonna be doing over the next several videos in this chapter.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=15)** There's three styles of doing regression.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=19)** And this whole idea of having different regression styles might be new to you.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=24)** If that is, you probably are used to doing regression as simultaneous.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=31)** That's what we can kind of think of as regular regression.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=34)** So let me briefly go through the three, and then we'll have a case study of each.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=39)** So you're gonna do hierarchical when you have a very strong theory that allows you to meaningfully order the variables in the sequence in which those variables are entered into the regression.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=53)** So let's say that you want to better understand childhood reading acquisition or vocabulary and you want to measure the effect of something like Head Start.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=65)** Someone might critique you and say, "Wow, you really need to take into account "parental education or parental income "or something like hours read to at home."
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=75)** So what you would do in hierarchical is you would put those variables in first followed by Head Start.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=82)** So you're sequencing either chronologically or in importance.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=86)** It's a terribly important technique and kind of considered the gold standard academically.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=91)** When you're doing simultaneous, you have a less rich theory involved.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=97)** You're basically that you've assembled a list of variables which you believe to be important variables, but you don't have an additional basis on which to rank or sequence those variables.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=110)** So essentially what you're using regression to do is to help indicate to you which of those variables are more important and which of those variables are less important.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=118)** Again, this is the standard way of doing things.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=121)** The final approach is called stepwise, and it's not hard to find an academic that really doesn't like stepwise.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=129)** Sometimes in an academic setting, you'll be told in no uncertain terms do not do stepwise.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=136)** However, in a world where data science and predictive analytics and data mining are popular, this is actually very similar to this technique.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=145)** So stepwise, which is very widely found, it's not found only in SPSS, or things like regression trees or other things associated with predictive analysis are of a very different style.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=158)** So we're gonna be also seeing an example of this.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/three-regression-strategies-and-when-to-use-them?u=76281980&t=161)** So once more, each of these will be covered in its own case study.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **Env Vars:** pdf (1), spss (1)
> **CLI Commands:** find (1)
> **Definitions:** is called (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Understanding partial correlations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=0)** - [Instructor] The SPSS regression procedure calculates two very different kinds of correlations for us: part and partial.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=9)** Understanding the difference between the two is critical in understanding the difference between the simultaneous regression strategy and the hierarchical regression strategy.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=18)** So let's begin with partial, but not inside the Regression menus, but inside the Correlation menus.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=26)** So if we go to Analyze, Correlate, let's go to Bivariate for just a moment, to refresh our memories as to the magnitude of the relationship between retail and waste and then restaurants and waste.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=42)** So there you go, our standard correlation, what is sometimes called the zero order correlation, of retail with waste, is about .8, a little bit less, actually, and with restaurants and waste, again, about .8, a tad more than eight.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=60)** So try to kind of remember those numbers, it will help us put the rest in perspective.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=65)** Now we're gonna return to the Correlate menu, but go to Partial, and here's where it gets interesting.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=71)** We're gonna take restaurants and waste, but controlling for retail.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=78)** So what we're interested in knowing is how capable is restaurants at explaining the variance in waste tons, even though we've removed retail.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=90)** What additional information does it offer that retail cannot offer?
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=96)** And we find out that the number is .465.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=99)** Now we shouldn't be surprised that that correlation is smaller, because we've removed something from the correlation.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=106)** Now something to think about, 'cause this can be a source of confusion, is remember that we talk about R squared as a percentage of variance explained.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=115)** Remember that we're looking at correlations now.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=117)** So if we wanted to convert them into something more like R squared, we could take any of these correlations and simply square them.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=125)** So now let's go back, and run the partial a different way.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=131)** And it shouldn't surprise us that the number's gonna be different, because we're not asking the same question.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=138)** Now we're saying, "What's the correlation "of retail with waste, having removed or controlled for "the influence of restaurants?"
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=148)** See, now we're asking, "What can retail tell us "about waste that restaurants cannot?
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=154)** "What's unique about retail?"
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=158)** Turns out, the number's very small.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=160)** It's dropped down a lot.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=162)** So there's a lot of overlap, apparently, between retail and restaurants, because when we remove restaurants, the partial correlation for retail comes way down.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=175)** This shouldn't surprise us either, because we know from the correlation matrix, and from earlier exploration, that the correlation between retail and restaurants is super, super high.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=188)** It's .92.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=190)** So one final thought: if we request help, there's an example here that might help you remember what partial correlations are all about.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=201)** This is right in the SPSS Help on the IBM website.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=205)** Let's say there's a relationship between healthcare funding and disease rates.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=210)** Controlling for the rate of visits to healthcare providers, however, virtually eliminates the observed positive correlation.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=217)** That's exactly the kind of concept that we're talking about with partial relationships.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=222)** Is one variable masquerading as another?
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-partial-correlations?u=76281980&t=225)** Or is there an effect that appears to be present, but in reality, it's simply another variable that's involved?

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), super (2)
> **Env Vars:** spss (2), ibm (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Understanding part correlations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=0)** - [Instructor] The best way to understand part correlations is to compare them to partials, but also to realize that part correlations are very closely related to Delta R Squared, which is a stastic that we can request right in the Regression menus.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=19)** Let's request it and take a look at the output, together.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=22)** I'm going to go into Analyze, Regression, Linear, and Waste Tons is going to be my dependent and we're going to do something new now.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=34)** We're going to go ahead and say that Retail Trade is our independent, then click on Next and then click on Restaurants.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=43)** This is actually what you do when you're doing a hierarchical regression.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=48)** And we have to do that to be able to request our Delta R Squared.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=52)** So, we're going to go into Statistics and request Part and partial correlations, as well as R squared change, very frequently called Delta R Squared.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=65)** We're going to click on Continue.
>
> **[1:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=66)** We're going to click on OK.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=69)** Let's scroll down and the first thing that we see is that the Zero order Correlation, let me put this is in its own window, the Zero order Correlation is the same as the numbers that we would get if we ran a Pearson Correlation.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=87)** Just about point eight for both retail and restaurants and hotels.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=92)** And then we notice, that the partial correlations are exactly what we would get by doing the partial correlation menu.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=100)** One would be retail controlling for restaurants and the other is restaurants controlling for retail.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=106)** So, what's the part correlation?
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=109)** Well, the part correlation is closely related to Delta R Squared and our Delta R Squared is further up in the output window.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=117)** So, let's look at it first.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=119)** What this is telling us is, is that our R Squared for the first variable, retail, is just under sixty percent of variance explained.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=129)** Specifically, it's five point eight nine.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=133)** Then, the R Square jumps up substantially when we add the second variable.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=138)** That increase is called the R Squared change or the Delta R Squared.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=144)** Here's where it gets a little tricky, we have to remember that R Squared is literally the correlation squared.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=152)** So, since the part correlation is being reported as a correlation, but the Delta R Squared is being reported as an R Squared, we can't compare them directly without doing a tiny little bit of math.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=165)** So, I'm going to bring out my calculator.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=168)** And go down to the part correlation for restaurants and hotels, which is point two nine eight.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=178)** Then square that and I get point oh eight eight.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=183)** Which rounds up to point oh eight nine.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=189)** What's the meaning of this though?
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=190)** Why would we want to know this?
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=193)** It's telling us how much the R Squared goes up when that variable is put in last.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=201)** That's what the part correlation squared is telling us.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=206)** The contribution of that variable having taken care of all the variance that's explained by all the previous independent variables.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/understanding-part-correlations?u=76281980&t=214)** So, it's going to be a critical building block in understanding hierarchical regression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), continue (1)
> **UI Navigation:** click on (4), scroll down (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Visualizing part and partial correlations
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=0)** - [Instructor] When it's a new topic for you this whole issue around R squared, and partial correlations, and part correlations can be confusing.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=10)** Certainly it doesn't help, that sometimes to make an apples to apples comparison, we then get involved in part squared, or partial squared.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=20)** I know when I was first learning this and I got a scratch pad out, I found that very helpful.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=26)** If I was drawing this or looking at numbers and in order to keep everything the same, I would think of R squared, partial squared, and part squared.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=34)** In that spirit, let's look at some Venn diagrams together and see if we can't get comfortable with the concepts behind these statistics.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=44)** In the case of R squared, this is the one of course we're probably the most familiar with.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=49)** It's gonna be the variance that the independent variables are able to explain in R squared.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=56)** And, it's calculated as a ratio but we tend to go ahead and multiply it times 100 and think of it as a percentage.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=62)** So, that's our R squared.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=64)** So, when we're talking about a partial relationship, or again to keep it consistent, you may wanna think of this as the partial correlation squared.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=73)** Now what we're doing, is we're completely removing the overlap involving that second variable.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=83)** If we're doing the partial of the dependent in our first independent variable, the second independent variable has been completely controlled for.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=92)** So now what we're doing, is we're taking the part of the independent variable one that helps explain the dependent variable, and we're dividing that by what is left of the dependent variable, when we remove IV2.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=110)** If we do that for the other variable now, now we're removing independent variable one.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=117)** So think about the implications of that.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=119)** You're denominator is changing because you're not dividing into the total variance of the dependent variable, but rather only that portion of the dependent variable but it has not been partialed out.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=132)** This causes two problems that make partial correlations, even though they're important, less than desirable.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=140)** There's a couple of issues that get complicated here.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=143)** It becomes a little bit trickier to compare the partial correlation of one variable to another.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=150)** We can certainly look at it's magnitude but still that process gets a little bit complicate.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=155)** But more importantly, when we add up all these partial squared, we're not really getting the total R squared.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=162)** And that's the biggest problem I think with partials is that you really want a sense of this total R squared that I've gained in my entire model, how can I attribute the importance of each variable in such a way that that total contribution adds up to my R squared.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=179)** That's tougher to do with a partial.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=181)** So it has it's place.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=182)** In the case studies we're gonna explain how that all works.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=185)** Let's contrast that with part.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=188)** Remember that the part correlation, or rather the part correlation squared, is the same as the delta R squared.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=196)** This is gonna be a lot easier for you if you just focus on the delta R squared.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=201)** If you have a single variable, your independent variable one, we all know what R squared is.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=206)** It's the amount of the variance in the dependent variable that can be explained by independent variable one.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=212)** So when your second variable comes along, and the second step of a hierarchical regression, what we're interested in is that new little slice of variance in the dependent that the independent variable two can explain, that independent variable one could not.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=230)** And we simply divide that into the total variance of the dependent variable and that's our delta R squared.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=237)** We can do this in reverse.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=239)** We can load independent variable two in first, establish the R squared, add the second variable, and simply measure how much R squared went up.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=249)** So it's very easy to get turned around when you're worried about all these formulas and so on.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=256)** The concept behind delta R squared is actually quite straight forward.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=260)** If you think of partial squared is delta R squared, you're really gonna be all set.
>
> **[4:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=266)** One final thought, while we're looking at these Venn diagrams, and this a very important concept, if independent variable one and independent variable two have a very high correlation, they're gonna overlap to a large degree.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=280)** And what can happen is that there's a tiny little sliver of the dependent variable that's left, when you remove the influence of the other.
>
> **[4:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=290)** That can cause a problem called suppression.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=293)** It's closely related to severe multicollinearity and it can wreck all kinds of havoc in your model.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=300)** Positive relationships will look like negative relationships, things will become unstable and it can cause serious problems.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/visualizing-part-and-partial-correlations?u=76281980&t=307)** We'll see example of suppression in the case studies.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), for. (1)
> **CLI Commands:** make (2)
> **Env Vars:** iv2 (1)
> **Analogies:** think of it as (1)
> **Speakers:** - [instructor] (1)

#### Simultaneous regression: Setting up the analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=0)** - [Narrator] This is gonna be an interesting milestone for us 'cause we're gonna have a lot of pieces come together in a case study.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=7)** In this video, we're gonna be setting up an example of simultaneous regression.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=13)** Let's go to Analyze, Regression, Linear.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=17)** We're gonna have waste tons be the dependent, and all of the available scale variables, all five of them will be independent.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=27)** Now, one of the features that makes this simultaneous, the primary one in fact, is the fact that method is going to be Enter, and we are not gonna be utilizing the Next button.
>
> **[0:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=39)** Those two things taken together is what really makes this simultaneous.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=43)** So since we are approaching this as a simultaneous regression, let's talk about what settings are appropriate for that.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=50)** We're gonna click on the Statistics sub-menu.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=54)** And we don't need R squared changed, 'cause that's really a hierarchical regression kind of thing.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=60)** But we are gonna request descriptives.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=62)** We are interested in partial correlations.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=65)** And we're not gonna request collinearity diagnostics now.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=69)** We're gonna address that later.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=71)** Also, we're not gonna request a Durbin-Watson statistic.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=75)** The assumption is that we've done a good check of multiple regression assumptions prior to getting to this stage.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=83)** Also remember, it's always terribly important to explore your data and check all your assumptions before you get to this point.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=91)** What we will do, however, is request confidence intervals around our data coefficients, and then click on Continue.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=99)** Moving on, we're gonna go ahead and request Residuals Plots.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=103)** So recall that the standard way to do this is ZRESID and the Y and ZPRED in the X.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=111)** We're also gonna request a histogram.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=114)** And since we now have multiple independent variables, we're gonna request produce all partial plots.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=125)** Under Save we have numerous options, including ways of diagnosing outliers, like Cook's distance, which is perhaps the most famous check for outliers.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=137)** This, again, is gonna be addressed at a different time.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=139)** We will not request that now.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=143)** Finally, under Options, we have a number of options for stepping method, and so on.
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=149)** These are appropriate only when doing stepwise.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=153)** So we also don't have to worry about them.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=156)** So we're ready to go.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=157)** We're gonna click on OK.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-setting-up-the-analysis?u=76281980&t=158)** And in the next video, we're gonna be exploring the output in detail.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), continue (1), this, (1), finally, (1)
> **UI Navigation:** click on (3), go to (1)
> **Env Vars:** zresid (1), zpred (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### Simultaneous regression: Interpreting the output
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=0)** - [Instructor] Now let's take a look at our simultaneous regression output.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=5)** Okay, there's a lot of material here, let's start at the very top, and we see Descriptive Statistics.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=11)** Now of course, we should have thoroughly explored our data before we get this long, but it can be very helpful to have these basic descriptive statistics in the output with us.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=22)** Now remember that our dependent variable is measured in tons whereas all the other variables, the independent variables, are measured in acres.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=32)** And as we scroll down we can see our Pearson Correlations, remember that another word for this is zero-order correlation, later on in the output it's gonna be referred by that name, it's the same number.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=47)** We go further down again and we can see Variables Entered or Removed.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=53)** We can safely ignore this, it's printed out by SPSS by default, but this is referring to things that will only be of issue in hierarchical or stepwise, so since we're doing simultaneous we can safely ignore that.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=68)** We'll scroll down further and we get to the Model Summary.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=72)** So, couple of things.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=75)** The R here is not just a plain old correlation.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=80)** It is now a multiple R, because we have multiple independent variables.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=87)** But typically, when we're doing multiple regression, we're much more focused on the R Squared than we are about the R, and we can see the R Squared is actually very high, it's just a tad below 85% of variance explained, very high.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=99)** Now, to its right is the Adjusted R Squared, this is a new topic for us.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=104)** What's going on with the Adjusted R Squared is that statisticians want to try to caution folks against making their regression models too complicated, particularly when there's a risk of multicollinearity, so the Adjusted R Squared takes into account the number of variables in our model.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=122)** So as your model gets larger with more independent variables and more complex, you're gonna see a slightly bigger gap between the R Squared and the Adjusted R Squared.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=131)** We're gonna mostly focus on the R Squared.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=134)** Getting to the ANOVA table, basically what this is testing, and notice that it's significant, let me briefly put it in its own window.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=143)** The main thing that we wanna be checking for here is the significance of the overall model, notice that the significance is .000, well below our traditional cutoff of .05 for 95% confidence.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=158)** What this is telling us is our model as a whole, not any particular element of the model in the form of independent variable, but our model as a whole is significant.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=167)** What some folks are taught when they first learn regression is if the ANOVA is nonsignificant, to go ahead and stop going through the output, the model as a whole has failed, there's no point working through the details.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=180)** But clearly we get a clean bill of health here and we can continue.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=185)** Moving on, remember that we're doing this simultaneous.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=189)** None of these independent variables have special status over the others.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=193)** So there are three things in the coefficients output that really should be getting our attention.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=200)** The first is the standardized betas.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=204)** Two things we wanna know about the standardized betas.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=207)** Even if these independent variables were measuring different kinds of things, let's say some were meters, and some were acres, and some were dollars, and so on, even if we were not doing an apples to apples comparison we could compare the standardized betas.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=222)** And they are supposed to range between negative one and positive one.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=228)** But what do we see?
>
> **[3:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=229)** Something's not right, this one is outside the allowed range, folks that is indicative of severe multicollinearity.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=238)** That's a bad sign.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=240)** What else do we observe?
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=242)** Well, we see the zero-order correlations are of course what we would expect.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=246)** We've run correlation matrices, we've explored our data at this point, but isn't it odd that from the standpoint of the zero-order correlations, all of these are associated with waste going up.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=258)** Yet some of the standardized betas are negative, which indicates here that as industrial land usage goes up, waste actually goes down.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=270)** Little bit hard to imagine how that could be.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=272)** Or as retail goes up, waste goes down a nontrivial amount.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=278)** Something interesting is going on here.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=280)** This combined with the standardized beta outside the allowable range is further evidence that we have severe multicollinearity.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=289)** So there's issues with this model and eventually we would have to address that.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=294)** Finally, the partial correlation is gonna be the classic way of looking at the individual contribution of these variables, and from that standpoint, restaurant seems to be the winner and fabricated metals the weakest, in terms of their contribution to the model.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=314)** Again, when you're adopting the simultaneous style, the partial correlation, the standardized betas, and then also the significance of the independent variables, all help you determine which variables are contributing to the model.
>
> **[5:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=330)** Fabricated metals has a poor partial, it's quite close to zero, and its significance is above .05, therefore we might wanna consider running this model without fabricated metals.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=343)** Finally, we can look at a histogram of the residuals, a concept that we've seen in earlier videos.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=351)** And we can also look at the residuals plot for the overall model.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=357)** But take a look, if you zero in at zero, zero, we should have most of our data points there at that point, but we actually have them spread out thinly in one direction but not in the other.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=373)** We're seeing heteroscedasticity, in other words we're not seeing normality of errors, we're seeing that the errors are skewed.
>
> **[6:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=381)** One final bit of output.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=384)** We have a series of partial plots.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=386)** These are a visualization of the partial relationships between each variable and the dependent, starting with industrial land, and then as we scroll down and scroll down, we eventually get to our strongest variable, restaurants and hotels.
>
> **[6:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=403)** And we can see that for restaurants and hotels we have a fairly linear relationship, it looks fairly good down here in the bottom left, but we have one data point which is way, way out there, row ID 15.
>
> **[7:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=420)** So the partial relationship seems to be somewhat linear, not too bad, but with one crazy outlier.
>
> **[7:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=426)** Some of the other variables on the other hand, the partial plot, which should be showing a strong relationship, is all over the place.
>
> **[7:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=436)** In particular, fabricated metals, which probably should be dropped from the model, is all over the place in its partial plot, it really doesn't look like a linear relationship at all.
>
> **[7:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=449)** So to recap, what kinds of things do we focus on when we're looking at simultaneous regression?
>
> **[7:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=455)** We wanna look at the overall statistics, particularly the coefficients, to find out what the model is telling us about the data.
>
> **[7:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/simultaneous-regression-interpreting-the-output?u=76281980&t=462)** Obviously we're interested in R Squared, but we check our residuals plot to see if it looks like a random pattern, and we look at our partial plots to see if we detect a clear linear pattern.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), finally, (2), this, (1), default, (1), continue (1)
> **UI Navigation:** scroll down (4)
> **Env Vars:** anova (2), spss (1)
> **Definitions:** is a  (1), in other words (1)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Hierarchical regression: Setting up the analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=0)** - [Instructor] In this case study, we're going to be performing a hierarchical regression.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=6)** What makes it distinct is we need a theory that allows us to sequence the variables in a particular way.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=12)** We're going to be using the MWBank case study data, however, we're gonna use an example of the data file that has incorporated dummy codes and interaction terms that were created during a previous step.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=27)** The file is called MWBank with Dummy Codes and Interaction Terms.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=34)** Okay, here we are in the data file, and we have the original MWBank data, but in addition to that, we have a series of dummy coded variables clerical_yn, ot_yn, and so on.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=46)** And then on the right-hand side, we have educ_cen and ed_sex.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=51)** So let's go into the regression menu and start setting up our analysis.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=56)** We're gonna go to Analyze, Regression, Linear.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=59)** And in order to do this in a hierarchical style, we're gonna be using the blocks or steps, which means that we're gonna be using the Next button once we start to populate this.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=70)** So we're gonna predict with Beginning Salary.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=73)** Now to be clear about something, we don't want to bring in any variables that reflect events that occurred after they were hired, like Current Salary, because our dependent is Beginning Salary.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=87)** So we're gonna leave Current Salary out.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=90)** So what we have to do when we're thinking through our hierarchical, is either put the variables in some kind of meaningful chronological order, or order of importance.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=101)** So in this particular data set, the issue that we're trying to address is to answer the question of whether or not there's gender bias in pay.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=110)** So what we're gonna do is start with things that would be in place prior to hire to help make our case.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=118)** So we're gonna go ahead and take Education Level.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=123)** And Job Seniority is since hire, but Work Experience is prior to hire.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=128)** So we can put these in together, in what's gonna be called Block 1.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=133)** Now we're gonna click on Next.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=136)** And a very powerful trick, when you're doing hierarchical is you can take an entire set of dummy coded variables.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=144)** Here I'm taking OT, SO, CT, exempt, mba, and tech.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=150)** But remember, we gotta leave one out.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=153)** We get perfect multicollinearity if we accidentally put all seven of them in.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=157)** So we have six out of the seven.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=160)** I've chosen to make clerical my reference group.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=163)** Now the advantage of putting these together in a single block is the delta R squared for this block will give me a statistical significance figure for that block of variables.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=175)** It allows me to measure the impact of the group in a way that would be difficult otherwise.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=180)** Gonna click on Next.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=181)** And having established a bunch of effects that one might claim were fair variables, in other words, we might say it's fair that someone would get different pay for different work.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=195)** Or it might be fair to pay someone more if they had more education.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=198)** Now we're gonna try to deal with the potential sources of bias.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=203)** So we're gonna go ahead and put Sex in.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=207)** Now remember, this is allowed because Sex is coded 011.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=211)** And then remember that we also took into account our interaction terms, so we're going to have ed_sex.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=222)** I'm gonna go back because there's one step I want to correct.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=227)** Notice that we used the original Education Level variable.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=232)** And I'm reminded that I actually should have used the centered version of education.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=238)** Remember, centering is an additional step we take to avoid the severe multicollinearity that might occur by having education and education sex together in the model.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=249)** Now we're gonna go to Statistics and see what additional options we need.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=253)** Remember, we're doing hierarchical, so we're gonna request R squared change.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=259)** We're also gonna request Part and partial.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=263)** We won't worry about collinearity diagnostics now, although certainly we'll be looking for evidence that it might be present.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=270)** We'll click on Continue, we'll go to Plots.
>
> **[4:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=274)** You will generally always want to request a residual plot with partial plots.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=278)** So I'm gonna go ahead and do ZRESID by ZPRED.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=285)** Remember, we want the result to look random.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=287)** We're also gonna request a Histogram, and all partial plots.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=291)** Click on Continue.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=293)** And then other options would include things like checking for outliers and so on.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=299)** We'll do that at a different time.
>
> **[5:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-setting-up-the-analysis?u=76281980&t=300)** We'll go ahead and click on OK, and then we're gonna start to work through our output.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), go to (3)
> **Code Keywords:** continue (2), let (1), this. (1), case. (1)
> **Code Identifiers:** ed_sex (2), clerical_yn (1), ot_yn (1), educ_cen (1)
> **Definitions:** is called (1), means that (1), in other words (1), is an  (1)
> **CLI Commands:** make (2)
> **Env Vars:** zresid (1), zpred (1)
> **Speakers:** - [instructor] (1)

#### Hierarchical regression: Interpreting the output
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=0)** - [Instructor] Let's start working through the output.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=3)** Okay, the first thing that you'll notice is that we have the variables entered removed shows four models.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=12)** Because we're indeed building the model step by step.
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=15)** And then as we scroll down you'll see that the model summary has a lot more going on than historically we've had to worry about because we've got the four models.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=25)** And keep your eye on that R square change.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=27)** The little subtitles beneath the print out is gonna help you keep track.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=32)** So remember that we started with education and work experience, and that all by itself had an R squared of 45% of variance explained.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=42)** But then we made a big jump when we added in the second block.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=47)** That is the collection of our job category.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=51)** So all by itself job category in its dummy coded form increased R squared by more than 30%.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=60)** Then we discover that even though we've removed education, we've removed work experience, we've removed job category, the additional R squared attributable to sex of employee is still about 2%.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=77)** At first you might think that's a relatively modest number, but realize that we've removed a lot of variance already.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=84)** So not only is that 2% probably large enough to get our attention, not as an overall R squared but as an R squared change, it also has a significant f associated with it.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=96)** Let me zero in on that number.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=99)** We have a specific statistic just on whether or not that's a significant increase.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=104)** Now realize that if you put gender in first the R squared would be much larger than the 1.9% of variance explained.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=113)** What makes this interesting is even having removed all that other stuff, it's an additional 2%.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=118)** That again would be noteworthy.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=120)** So if I was an attorney that was representing the plaintiffs in a lawsuit I would certainly think that I could make a case that this was evidence in favor of the employees that were arguing that there was bias.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=135)** The other thing that we can take into account is although the increase in R squared attributable to the interaction is really quite modest, it is significant at 95% confidence.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=147)** And this is not an enormous data set folks.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=150)** So we can really think of the amount of variance attributable to gender to include the interaction terms.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=158)** So we're actually a little bit bigger, just a hair over 2% delta R squared, if we take into account both blocks three and four.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=169)** Moving further down we have the ANOVA table four times.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=172)** That's not interesting folks.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=174)** We're only interested in if it's significant overall.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=176)** We don't need to see that four times.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=178)** It's certainly below .05.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=180)** It's pretty clear that we have a good model so we can move on.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=183)** Now, the coefficients can get a little bit crazy, but remember it's because we're building this piece by piece.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=190)** So let me show you a trick.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=192)** We wanna right click, go into a separate window, and this next trick might be new to you, but it's really gonna help us out here.
>
> **[3:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=201)** I'm gonna call up the pivoting trays, and I'm gonna take the model symbol and drag it into layers.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=210)** And at first you might think gosh, what just happened?
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=214)** I'm only interested in the final model.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=216)** I'm not interested in the coefficients and the steps leading up to the final model, I'm only interested in the final model.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=222)** And now I can see it.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=224)** Now remember, when I'm doing hierarchical, one thing that I might be very curious about is what would be the partial squared if that particular variable went in last.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=238)** Remember, we've been talking about how gender came in towards the end and was just 2%, but if it came in at the beginning it would be rather different.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=245)** Well, square the zero order and you find out that the R squared if gender went in first would be about 20%, .45 squared.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=257)** And then this shows what would happen if it came in last.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=260)** We see that most of the independent variables are significant.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=265)** Two of the job cat variables are not.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=269)** Namely, these two.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=272)** However, a good rule of thumb is, if you have a set of related variables, like our job cat variables, they all go in or they all come out.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=283)** All this is telling us is is that the folks in the ot category and the so category are close enough to clearical that they are not significantly different from our reference group clearical, but nonetheless, they should stay into the model because they belong to a set of variables.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=304)** Moving on, how does our residuals plot look?
>
> **[5:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=308)** You know, the histogram doesn't look too bad.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=311)** Remember that we want normally distributed residuals.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=315)** It's a little bit taller to the left of zero.
>
> **[5:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=318)** But it really doesn't look too bad.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=320)** And then the question is, does our residuals plot look like it's random.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=327)** Well, we can add reference lines at zero, zero, and we have a lot of data at zero, zero, but we do have a clump of data points to the left of zero and then we seem to have them spread out on the right.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=340)** So there's some evidence of heteroscedasticity here.
>
> **[5:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=343)** Again, that means difference in spread, essentially, right?
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=346)** However, I don't see anything here that I'm prepared to take action on because the model as a whole seems to be pretty good.
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=354)** Looking at our histogram it actually looks pretty good.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=359)** We have slightly more cases a little bit to the left of zero than we do to the right, but overall doesn't look too bad.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=366)** Now remember, a lot of output is generated, including all of our partial plots.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=373)** But we're not gonna worry about the partial plots right now.
>
> **[6:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=375)** We're just gonna take a quick look at the residuals plot.
>
> **[6:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=379)** Remember, that you want the residuals plot to reflect randomness.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=384)** So you expect a lot of cases at zero, zero.
>
> **[6:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=390)** I'm adding a vertical and horizontal line, and indeed most of our errors are near zero, but we have somewhat more of them to the left and somewhat spread out to the right.
>
> **[6:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=401)** So some evidence of heteroscedasticity, which again simply means difference in spread, however, overall the model is really pretty strong and I think it does a good job accomplishing our primary goal, which was to establish that even if you remove the influence of prior work experience, education, and even the job role that they play, there is still a significant increase in R squared attributable to gender.
>
> **[7:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/hierarchical-regression-interpreting-the-output?u=76281980&t=437)** So we've really done what we set out to do.

> [!info]- Semantic Content
>
> **CLI Commands:** cat (2), make (1), find (1)
> **Code Keywords:** let (3)
> **Env Vars:** anova (1)
> **Versions:** 1.9 (1)
> **UI Navigation:** scroll down (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [instructor] (1)

#### Creating a train-test partition in SPSS
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=0)** - [Instructor] We're going to talk about an important concept that comes from the world of predictive analytics.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=6)** When you're using an exploratory technique, you really need some very strong, concrete evidence that the model that you've built is going to work on unseen data.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=17)** And the way that we do that, when we're using an exploratory technique, techniques that you might hear called data mining or, again, predictive analytics, we use a somewhat different approach than we do in regular statistics.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=30)** So if you've learned statistics in an academic setting, then this concept might be new to you.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=36)** But if you've done machine learning or neural networks or those kinds of things, you almost certainly have encountered this.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=42)** So, again, it's called train test partitioning or holdout partition.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=47)** So we're going to use the auto imports data set.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=54)** Okay, here we are in the data file.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=56)** More variables than we've had for some of the examples in the course.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=61)** This is a modified version of the auto imports database found on the UC Irvine Data Repository.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=70)** I've cleaned up the labeling.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=72)** I've deleted some cases that were missing the dependent.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=75)** Otherwise, it's largely that data set.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=77)** So, I'm going to scroll over to the right hand side and here is my dependent variable price.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=82)** So, I've got 23 potential independent variables.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=86)** So, what we're going to do is, create our own partition variable.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=93)** So, 80% of our data we have, let me see here, we're going to scroll down, we've got just over 200 cases, 201 cases.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=103)** 80% of our data is going to be the so called training data.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=107)** That's the data that we're going to use to build the model.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=109)** But, we're going to set aside 20% of our data in order to prove that our model works well on unseen data.
>
> **[1:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=118)** Because the 20% will not be used as part of the modeling process and that's why we can refer to it as the test data or sometimes, informally, as the unseen data.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=129)** So, easiest way to do this is going to be syntax.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=132)** There are some menus in SPSS that automate this for you, but there are other menus that don't.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=137)** So, knowing how to do this on your own is very helpful.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=141)** So, I'm going to go ahead and go to File, New, Syntax.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=148)** Then I'm going to go ahead and go to Transform.
>
> **[2:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=151)** This can be a little bit of a shortcut that's going to help us out here.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=154)** So here we are in Compute.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=156)** And the reason that I've taken you into this menu, is to help you find the necessary function.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=161)** So we're going to call the new variable Train_Test.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=164)** And we're going to scroll down to Random Numbers.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=169)** There are numerous choices here, but we're going to choose a random variable function that is going to generate a Bernoulli distribution.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=178)** This sounds complicated, it's really pretty straight forward.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=181)** What we're going to do is, we're going to populate this now with zero point eight.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=185)** And all that means is that 80% of our cases are going to be randomly assigned to train.
>
> **[3:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=192)** And the balance, 20%, is going to get randomly assigned to test.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=197)** It's really that simple.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=198)** So we're going to go ahead and click on Paste.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=203)** Put a period there that wasn't expected.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=205)** Go ahead and click on Paste and there it is.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=208)** So we can hold on to this so that we've documented how we generated this variable.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=213)** But, all we have to do is highlight this, run it.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=220)** And in our data window, we have our new variable on the far right hand side.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=227)** And we can do a very quick frequencies of this.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=231)** Analyze, Descriptive Statistics, Frequencies of our new variable and there you have it.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=239)** Now, it's not going to be exactly 80% because what's actually happening is each case has an 80% chance of getting a one and then the remaining cases have a 20% of getting a zero.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=253)** So it's actually generating this almost kind of slot machine handle pull with each and every case.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=259)** So it's going to be 80% give or take but here a little bit heavier in train, which is just fine, we're going to stick with this variable as is.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/creating-a-train-test-partition-in-spss?u=76281980&t=267)** We're going to use this variable in future steps.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (2), function (2), let (1), new, (1), this, (1)
> **UI Navigation:** scroll down (2), go to (2), click on (2)
> **CLI Commands:** find (1)
> **Env Vars:** spss (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Stepwise regression: Setting up the analysis
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=0)** - [Instructor] Okay, we're gonna go ahead and precede with our Step Wise regression.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=4)** I'm in the same file as the last video, my train test variable which I have retained, and I went ahead and saved this.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=11)** If it is not open, you can go ahead and retrieve it from exercises auto imports with train test.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=18)** Let's precede.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=20)** Let's go ahead and run the Step Wise.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=22)** I'm gonna go up to analyze, regression, linear.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=27)** It's important that you embrace the spirit of Step Wise.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=30)** If you're doing thesis work, like a master's thesis or a PhD thesis, this technique is not gonna make a bit of sense because you're not gonna be proving or disproving hypothesis.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=41)** It's inherently exploratory.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=43)** There's a great white paper and even a video on the web that you might want to seek out called To Explain Or To Predict.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=52)** The academic who has written this and she's done a wonderful job with it, is named Galit Shmueli.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=58)** I encourage you to seek that out.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=60)** What we're gonna do, in the spirit of an exploratory technique, is we're gonna use our trained test variable and declare it as a selection variable and then state that the rule is that that has to be equal to one.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=76)** That means that we're gonna build the model on just 80% of our data and check our work against the other 20%.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=82)** That's a terribly important step because we're essentially doing data mining or predictive analytics, whatever term is your favorite term for this activity, we are not really testing hypothesis right now.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=94)** We are exploring these patterns and trying to come up with a predictive model.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=98)** Now, I am not gonna take the time to do any dummy coding in this example, so I'm gonna bring in only scale variables.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=106)** If you want to utilize any of those categorical variables, you would have to dummy code them first.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=113)** Down in method we actually have four different ways of doing Step Wise like activity.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=119)** If we keep enter, then we're doing simultaneous, but if we choose any of the others, we're doing something that we would more broadly call Step Wise, but they come in different flavors.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=130)** Step Wise, which is the most common, goes in a forward direction.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=134)** Meaning that what's gonna happen is it's gonna identify the best predictor, bring it in, then bring in the next, then bring in the next, until it can no longer find statistically significant variables.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=148)** Conceptually, backward or remove, sounds kind of cool at first.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=154)** I've always thought conceptually they're kind of nice.
>
> **[2:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=157)** The idea is that you put all the variables in and then you discard the ones that are not helping you.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=163)** However, keep in mind that we don't have a huge data set right here, so if you put all the variables in and then ask the Step Wise methods to remove them, you probably are more likely to have multicliniarity with all the variables in and you're not gonna have a terribly good ratio between number of cases and number of variables.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=188)** With a smaller data set, I recommend doing either Step Wise or forward, not remove or backward.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=194)** We're gonna do the most common one.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=196)** We're gonna do Step Wise.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-setting-up-the-analysis?u=76281980&t=198)** I'm gonna go ahead and click on OK and in the next video we're gonna review the output.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1)
> **Cross-References:** in the next (3)
> **CLI Commands:** make (1), find (1)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Stepwise regression: Interpreting the output
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=0)** - [Instructor] Okay, we're going to start working through the step wise output.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=5)** Now, remember that step wise is inherently exploratory.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=9)** But, one of the things that you're uncovering is which variables were entered and which variables were left out.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=16)** So, we see that engine size was entered first, so according to the step wise, that's the most important or most significant variable.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=23)** Then we have weight, peak rpm, width, stroke, comp ratio.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=29)** Now, take a look at a variable like width.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=31)** Now, obviously, that may really be the width of the car, but it may really be size.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=36)** So, it could be that it happened to pick up width here, but, on a slightly different data set, it might've picked up length.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=43)** Why am I pausing to mention this?
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=46)** Well, when academics talk about how step wise has issues or limitations, they're usually referring to the fact that it can be shown that step wise is not as stable as we would like to consistently produce the same variable list.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=65)** So, if the primary reason that you're doing regression is that you really want to tell people that this set of variables is important but some other set of variables is not important, you're really not using the right technique.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=79)** You should be doing something that's more rigorous academically, like simultaneous or hierarchical.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=86)** But, if you're focused on accuracy of predictions and you're content with the fact that you might run a model with one set of data and get width but then when you run another set a data you get length, if you're willing to tolerate that kind of instability, step wise may help you separate the stronger variables from the weaker.
>
> **[1:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=106)** But, don't expect it to give you an absolutely iron clad accurate list of variables in order.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=112)** Nonetheless, it's one of the things that we look at when we look at step wise.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=116)** Let me put this is in it's own window, because we're about to talk about something terribly important.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=121)** We see that the final R squared that we're getting is point eight four, pretty good.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=128)** We started with seventy-eight percent of our variance explained with just engine size.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=133)** But, by the time we get to the sixth variable, that's climbed up to eighty-four percent of variance explained.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=138)** Take a look at the multiple R, though.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=141)** The multiple R on the train data is point nine one eight.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=144)** And the multiple R on the test data is point nine two eight.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=150)** What do we observe? The two values are close.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=154)** That's what we're looking for.
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=155)** It seems as thought the model that we built is also producing equally accurate predictions on the test data.
>
> **[2:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=165)** The ANOVA table looks large and complicated, but all we care about is that the model was significant, period.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=171)** So, the fact that the second model was also significant or the third model was also significant, once we identify that model one was significant, we know that all of them are going to be significant.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=181)** So, we can scroll past that, it's not terribly important.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=184)** The trick with reading the coefficients is that what we care about, is the final model.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=191)** So we really only care about model six when we're doing this step wise style.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=197)** So, we can go to Pivot, Pivoting Trays, and move model up to the layer and then choose to look at only model six.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=209)** And basically what's happened, is we've told SPSS, hey we're in exploratory mode.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=214)** We're comfortable with the notion of doing step wise.
>
> **[3:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=217)** We're not doing very rigorous academic work that would lead to something like an academic paper or a conference presentation.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=225)** You SPSS are in charge, go ahead and choose my variables for me and we come to model six.
>
> **[3:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=232)** So now we would analyze these coefficients or any other additional output that we requested in the same way that we would do anything else.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/stepwise-regression-interpreting-the-output?u=76281980&t=240)** What makes step wise special, is how we got here to this model six.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), for. (1), else. (1)
> **Env Vars:** spss (2), anova (1)
> **Tools:** notion (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Spotting Problems and Taking Corrective Action

#### Collinearity diagnostics
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=0)** - [Instructor] Okay, we've seen repeated evidence that there is multicollinearity in the waste data set.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=7)** It's time for us to formally request multicollinearity diagnostics and take a look, so I'm going to go to analyze, regression, linear, and I'm gonna declare waste tons as my dependent, and all of the variables as my independent.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=27)** Now, I'm going to go into the statistics sub-menu, and request collinearity diagnostics as well as part and partial correlations.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=38)** I don't need R squared change because I'm not doing hierarchical.
>
> **[0:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=42)** I don't need Durbin-Watson, but I do need confidence intervals.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=48)** I am not going to request any additional output like partial plots and residuals plots because I've already reviewed that in earlier steps.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=58)** I'm gonna go ahead and click on OK.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=61)** Now I'm gonna go to the, now I'm going to open the output window.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=65)** And what I'm gonna be focused on is this table right here.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=68)** So I'm gonna go ahead and put this in a separate window.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=73)** Now if you look up collinearity diagnostics either on the web or even in the SPSS help, if you're not careful, you're gonna find yourself swimming in definitions.
>
> **[1:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=84)** But the basic notion is really pretty straightforward.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=88)** Okay, so let me briefly describe what tolerance is, but we're gonna focus our attention primarily on VIF, which stands for variance inflation factor, okay?
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=99)** So first, what is tolerance?
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=101)** Well when tolerance is low that means that only a small fraction of that independent variable's variance is not explained by the other independent variables.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=113)** So it means that the unique contribution of that variable is not large enough and this can cause problems.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=121)** This causes suppression, meaning that more than one independent variable is fighting over the same variance in terms of the dependent.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=128)** Now clearly this is related to R squared and partial and part and many things that we've talked about before.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=135)** So again, that's why I want to focus on variance inflation factor.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=138)** It's probably the easiest one to grasp.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=141)** So let's do a little experiment.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=145)** Let's simply grab a calculator and subtract the upper bound of the confidence interval for restaurants from the lower bound.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=158)** So very simple math here, this is just 17992 minus 8718.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=167)** And it's got a width of 9300 tons.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=172)** Let's just reflect on that for a moment.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=174)** That means that within my 95% confidence interval the lower bound is saying for each acre of restaurants, that's about 9000 tons.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=187)** But the upper bound is saying for each acre of restaurants, it's 18,000 tons.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=194)** That's a wide confidence interval.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=196)** So again, I'm not doing anything complicated here.
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=198)** I'm just saying that this confidence interval is quite wide and specifically it's 9300 times wide.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=204)** There's a big difference between the lower bound and the upper bound.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=208)** So the variance inflation factor is trying to give us some indication of how much noise is being introduced into our model because of multicollinearity.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=223)** Now this is where it's gonna get a little complicated for a second.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=227)** Realize that when you talk about variance, you're talking about a squared concept like R squared.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=234)** And when you're talking about the width of a confidence interval, it's more like standard error or standard deviation isn't it?
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=240)** And remember that variance is the square of standard deviation.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=242)** So if you want to get a sense of how much wider that confidence interval is, it's nothing like eight times wider, but it's actually pretty darn close.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=252)** Now this isn't gonna be exact now.
>
> **[4:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=254)** If you want the exact formulas, I'm not gonna be covering them in this video.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=258)** But if you take the 7.7 and you do the square root, it gets you within the ballpark of how much wider that confidence interval is than it could be.
>
> **[4:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=271)** Let me demonstrate.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=273)** The way that you would deal with the potential multicollinearity between retail and restaurants, we know from earlier investigation that the correlation between them is more than 0.9.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=283)** That's extremely high.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=285)** What we can do is simply say that restaurants and retail constitute one pair of variables that's causing a problem.
>
> **[4:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=294)** Let's remove retail.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=295)** And trucking and fabricated metals also has a very high correlation between them.
>
> **[5:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=301)** Similar problems are being caused.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=303)** Let's get rid of the weaker of the two.
>
> **[5:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=306)** And now we go down to these three.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=309)** Go ahead and click on OK.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=313)** Now, if you read up on this what you're gonna find is people will talk about tolerance as being in the danger zone when it's below .1.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=323)** We didn't have any tolerances that low a moment ago.
>
> **[5:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=326)** You'll hear people say that VIF is in the danger zone if it's bigger than 10.
>
> **[5:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=331)** We didn't have any VIF values that were in that range.
>
> **[5:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=335)** But this is what I want to draw your attention to.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=336)** Look at how dramatically those VIF numbers have dropped.
>
> **[5:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=341)** And then, just as interestingly, let's bring our calculator back, and now we've got our calculator back and we're going to subtract 10,388 minus 6600.
>
> **[6:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=362)** I'm not doing anything fancy here.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=365)** I'm simply declaring the fact that the confidence interval is a lot smaller.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=370)** And that's very practical, folks.
>
> **[6:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=371)** This isn't about fancy definitions and fancy formulas.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=376)** My confidence interval was a lot wider a couple of minutes ago and now it's less wide.
>
> **[6:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/collinearity-diagnostics?u=76281980&t=382)** And that has direct practical implications for the accuracy of my predictions and how stable the model is.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **Env Vars:** vif (4), spss (1)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **Definitions:** means that (2), stands for (1), is a  (1)
> **CLI Commands:** find (2)
> **Versions:** 7.7 (1), 0.9 (1)
> **Tools:** notion (1)
> **Speakers:** - [instructor] (1)

#### Dealing with multicollinearity: Factor analysis/PCA
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=0)** - [Instructor] We know that the waste data set has multicollinearity present.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=4)** One way of combating that is factor analysis, principal components analysis.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=9)** It has both strengths and weaknesses.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=11)** Let's take a quick look.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=14)** So we'll go to Analyze, Dimension Reduction, Factor and just the fact that this in a folder called Dimension Reduction gives us a clue to what's going on.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=24)** What's going to happen is, we're going to give Factor Analysis our five independent variables.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=30)** And what we're trying to do is extract variables from these five.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=36)** It's going to be fewer than five.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=38)** That, together, represent as much variance of the original five as possible.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=44)** And we're going to be able to use these new factors as a substitute in our regression model.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=49)** Let's give it a try.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=52)** Now Factor Analysis is a big subject and I can't hope to cover Factor Analysis as a stand alone topic in this video.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=59)** Simply, how it can help us deal with our multicollinearity problem in regression.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=65)** So I'm going to go to extraction and you'll notice that there's a lot of different choices here, but I'm going to keep it on the default.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=73)** And, under rotation, I'm going to choose what's called Varimax rotation.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=83)** This is an important step because if we fail to do this, we won't be able to use the resulting factors in our regression analysis.
>
> **[1:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=92)** We have to click on Save as variables.
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=94)** We're going to choose Varimax.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=96)** The differences between these rotation methods are technical.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=100)** But, I do want to briefly comment on why we're choosing Varimax.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=104)** If you click on Help, within this menu you'll find out a little bit more about them.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=109)** But, the most important reason that we're going to go with Varimax, is it's going to give us an orthogonal rotation.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=116)** Now, what that means is, is that the resulting factors will have no correlation with each other.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=122)** Not all factor methods do this, but Varimax does.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=131)** Now we're going to go into Scores and this is a very important step.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=135)** Because, if we fail to do this, we won't get factors that we can use in regression.
>
> **[2:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=140)** So, we're going to click on Save as variables.
>
> **[2:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=142)** Click on Continue and click on OK.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=145)** Now, what we're going to find is that Factor Analysis, in its wisdom, because it's doing a lot of math behind the scenes, has determined that we can get away with just two factors.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=159)** So, it's come up with two new variables that collectively explain eighty-two percent of the variance that was in the original five variables.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=171)** So, we've gone from five variables to two.
>
> **[2:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=174)** And those two variables will not be correlated with each other, therefore no multicollinearity.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=179)** Let's run it.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=184)** Now take a look, I can reset this and bring in my factor scores.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=188)** Not my independent variables, but my new factor scores.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=193)** And I can make sure that I'm requesting collinearity diagnostics.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=200)** Run this now and take a look.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=203)** My VIF is one, that's a perfect score.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=206)** My tolerance is one, that's a perfect score.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=209)** But, this is as we should anticipate.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=212)** Because, we've requested orthogonal factors, the two independent variables are not correlated with each other, therefore they don't cause multicollinearity.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=222)** So, you might think, time to celebrate, this is really fantastic.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=226)** But, there is a complication that we have to kind of soberly think through when no longer using our original variables.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=233)** So, when we go to colleagues or if we go to management within a company, we have to explain what we've done and we no longer have restaurant acreage and retail acreage.
>
> **[4:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=245)** We now have these factor scores, which are not measured in acres.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-factor-analysis-pca?u=76281980&t=250)** So, it complicates our narrative and complicates our report, but clearly, we've taken care of the multicollinearity problem.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), try. (1), default. (1), continue (1)
> **UI Navigation:** click on (5), go to (4)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** vif (1)
> **Speakers:** - [instructor] (1)

#### Dealing with multicollinearity: Manually combine IVs
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=0)** - [Instructor] I'd like to show you one of my favorite approaches of combating multicollinearity.
>
> **[0:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=6)** It may come off as a bit informal.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=9)** I probably would be less likely to do it in a very academic environment.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=14)** But it's straightforward and it's practical.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=16)** And although, maybe you might think of it as a bit primitive, it does the job, so I want to walk you through this.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=22)** What we can do is we can identify two variables that we know that we have a problem with as a pair, like retail and restaurants, and just simply kind of reflect on what kind of variable they are.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=35)** So in this case, retail and restaurants are both measured in acres.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=41)** So, I'm just immediately thinking, why not add the two together and call it something like Commercial, Commercial acreage?
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=49)** Or, we could even call it just retail_restaurants.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=55)** What I like about this is, it will be clear to everybody what I've done.
>
> **[1:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=60)** It doesn't complicate the regression, but it certainly gets rid of the multicollinearity.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=64)** Now, you might argue, aren't we losing variance?
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=68)** Absolutely we are.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=69)** There's information in retail that's not in restaurants and there's information in restaurants that's not in retail.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=74)** But we know through other other analyses that we might do, part correlations, partial correlations and so on, that the overlap is so dramatic here that it's causing harm, but giving us very little help.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=86)** So if we simply do that, we end up with a new variable called Retail Restaurants.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=91)** And I can do Retail Restaurants in lieu of Retail and Restaurants separately.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=98)** It's easy to explain, it's easy to apply when I go to use this model to made predictions.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=103)** So let's take a look at how that would look.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=107)** I can go into Linear here, and I could take waste tons and predict it with Retail Restaurants.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=121)** And now let's take a look at the output.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=126)** Now, perhaps this is obvious.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=129)** With only one variable now, obviously my VIF is gonna be one, my tolerance is gonna be one.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=135)** But I could do the same for trucking and medals in this data set.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=139)** Now, the complication with that would be, is that maybe I would want to talk to a subject matter expert in this area like an urban planner and say, restaurants and retail may be naturally goes together, would it be strange in their opinion to combine trucking and metals?
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=155)** I would want to ask someone like that, alright?
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=158)** But when we go to apply this, it could not be more straightforward.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=160)** Because now rather than having two different variables for each additional acre of retail and restaurants, we add 1335 tons of waste.
>
> **[2:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=169)** One final thought, you may have anticipated this issue, you won't always have a circumstance where you can add variables.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=177)** For instance, let's you've had a Likert scale going from strongly disagree to strongly agree.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=183)** Adding variables like that wouldn't make any sense.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=185)** But I have successfully used the same technique by taking variables like that and rather than adding them, simply averaging them.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-multicollinearity-manually-combine-ivs?u=76281980&t=193)** So it actually works out quite well.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (1), case, (1), this, (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** retail_restaurants (1)
> **Env Vars:** vif (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Diagnosing outliers and influential points
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=0)** - [Instructor] In this video we're gonna talk about outliers, and the concept of influential points.
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=4)** In order to do so, we're gonna go in and launch the original MWBank dataset.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=14)** Okay, here we are in the dataset.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=17)** I'm gonna go to analyze, regression, linear.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=21)** To keep in simple, I'm gonna run this with just two independent variables.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=26)** My dependent is gonna be beginning salary, and my independent variables are gonna be education level and sex of employee.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=36)** The outlier influential points diagnostics are found in the save sub-menu.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=44)** Now this is an elaborate sub-menu, one of the most elaborate in all of SPSS perhaps.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=50)** There are dozens of choices.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=52)** In order to not be overwhelmed by this, I want you to think of these as falling into three categories, and not everything in this sub-menu is related to residuals and influential points.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=65)** The three areas that are are the ones labeled distances, residuals, and influence statistics.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=74)** Now, if you go into the help, you will find a sentence or two on all of these, but again, I want you to be focused on the three kinds of diagnostics, and let's talk about them one by one.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=91)** The first is the distances.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=93)** Now you've got three choices.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=95)** Mahalanobis distances, Cook's, and leverage values.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=99)** They're different attempts to get at the same thing.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=101)** We're gonna request Cook's.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=103)** Then the concept of influence is how much the presence of a particular case is moving or changing the values in all of our beta coefficients, or moving the regression line in general.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=116)** We're gonna request two of those, DF beta, and DF fit.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=122)** Now fit here is referring to the predicted value.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=126)** Then finally, the notion of these residuals statistics, is what would happen if we took a case out, or rather, this specific one that we're gonna look at, studentized deleted residuals.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=143)** It will be, what would happen if we treated that case as being special in some way.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=148)** This takes a little bit of explanation, so I'm gonna actually do a demonstration of exactly what I've just described in the next lesson.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=160)** Click on continue, and click on okay.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=163)** Now, you might at first look for what we've requested in the output, but the notion of this being the save sub-menu, is that we're actually generating new variables.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=176)** So our diagnostics appear in the data window, not in the output window.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=183)** Now we get a whole bunch, this is one of the reasons that I tried to keep the model simple.
>
> **[3:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=188)** Let's start with Cook's, because it's the easiest to interpret.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=191)** I'm gonna go up to this variable, COO_1, and the first three letters stands for Cook's.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=199)** This is the first regression I've run with that setting.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=203)** If I were to run multiple attempts now, and multiple iterations, I would keep on adding, and adding, and adding variables.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=210)** Be careful about that everybody, it can get a bit disorienting if you forget that you've left that setting on.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=215)** I'm gonna right-click and sort descending.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=218)** Folks, it's as simple as this.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=220)** Do we see any cases that have a much larger Cook's than the others?
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=226)** And we do, indeed.
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=227)** This first case has a larger Cook's, substantially larger.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=231)** It's at .28, and then beneath it, we drop all the way down to .06.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=237)** So that's gonna be worthy of a little bit of our attention.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=239)** Let's scroll over and take a closer look.
>
> **[4:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=243)** This first case, now remember, we used education level and sex, so it is a male with 19 years of school who's beginning salary was $31,992.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=257)** The next highest salary is nearly $10,000 less at 24,000.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=263)** So you can imagine why this case might have influence on the location of the regression line.
>
> **[4:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=270)** So that's a very simple one to do.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=272)** Simply request Cook's, and sort.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=273)** But let's dive in a little bit deeper.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=276)** We have all of these DFF variables.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=281)** And the sheer volume of them might be disorienting at first, but it's actually not too difficult.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=287)** Let's take a look at this one.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=288)** For this first case, which we know to be a potentially influential point, what this is saying is, the predicted value of this case moves by $213.
>
> **[5:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=304)** Might not seem like a huge amount, but it is bigger than the others in this same column.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=309)** It means that the predicted salary for this person moves by $213 depending on whether or not this male employee is in or out.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=319)** So if you compare the predicted value of what this person would earn, and you put them in, and then you build the regression and leave this person out, the prediction of their salary moves more than $200 by that one fact alone, that you've included them or dropped them.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=337)** I'm not as interested in this next one.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=339)** That's the change in the constant.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=342)** But that's how much the y-intercept has moved.
>
> **[5:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=345)** It's not uninteresting, but let's not focus on that.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=348)** Let's move on to these.
>
> **[5:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=349)** If we hover the mouse, we can actually see that this is the DF beta for beta one, Ed level.
>
> **[5:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=357)** Think about what that means, everybody.
>
> **[6:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=360)** I'm actually gonna launch the calculator to take a look.
>
> **[6:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=363)** And I'm gonna take 28.6 and multiply it times 12.
>
> **[6:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=370)** Everybody in the dataset with 12 years of school has their predicted salary move $350 merely by the presence of this one case.
>
> **[6:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=383)** One case out of the entire dataset is moving everybody's salary with 12 years of school $343.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=389)** It's surprising, isn't it, the impact that a single case can have.
>
> **[6:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=393)** Now the larger the dataset, that diminishes the impact to a degree, but it's extremely common in academic settings to have datasets of just a couple of hundred, or less than a hundred.
>
> **[6:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=404)** Finally, DF beta two is the gender variable.
>
> **[6:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=409)** So the presence of this case moves the gender gap just $24 in salary, so that's not a big move, but if you notice, there are other cases that might have had less overall effect, but have a larger effect on gender.
>
> **[7:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=427)** So in a complex model, this would take a while to digest this information, but it's really remarkable that SPSS gives us this much detail.
>
> **[7:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/diagnosing-outliers-and-influential-points?u=76281980&t=434)** For every single beta coefficient, we can see the impact of the inclusion or removal of a particular case.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (2), case, (2), case. (2), this, (1)
> **Env Vars:** spss (2), coo_1 (1), dff (1)
> **UI Navigation:** click on (2), go to (1), right-click (1)
> **Definitions:** is an  (1), stands for (1), is a  (1), means that (1)
> **Tools:** notion (2)
> **CLI Commands:** find (1)
> **Versions:** 28.6 (1)
> **Cross-References:** in the next (1)

#### Dealing with outliers: Studentized deleted residuals
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=0)** - [Narrator] Okay so, now we're gonna talk about the studentized deleted residual that we generated in the last video.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=9)** Let me briefly mention where the name comes from.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=12)** Studentized may seem like a bit of a strange name.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=16)** It's actually named after a gentleman whose pseudonym was student; his real name was Gosset.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=23)** It's easy to find information about him on the web, because he was one of the most famous 20th century statisticians.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=29)** Anyway, Gosset worked for Guinness the beer brewery.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=32)** And they didn't allow him to do any kind of outside work but he enjoyed writing academic papers and doing statistical work in his spare time.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=41)** So again, it's very well known that he wrote under the name student.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=46)** So, this was a contribution that we get from Gosset.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=48)** It's a powerful way to look at outliers.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=50)** Let me try to explain what's going on with this.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=53)** So, the whole idea of this studentized deleted residual, in the case of this first instance which is a male employee whose beginning salary is about $32,000 we get a studentized deleted residual of just over ten.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=70)** That's actually the same value that we would get if we ran a T-test that compared this 1 case to the rest of the cases.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=80)** Well gosh, why would we do such a thing?
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=83)** Let me demonstrate it and talk you through it.
>
> **[1:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=86)** I'm gonna go to transform, compute, and in order to perform this demonstration I'm actually gonna create a new variable.
>
> **[1:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=95)** So I could call this anything: X, test, demo, what have you.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=99)** I'll just go ahead and call it T since we're basically generating what is akin to a T-test.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=103)** And I'm gonna say that it's equal to 0 for everybody.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=107)** And I'm gonna click on okay.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=110)** I'm gonna go back to the data window and I have this new variable.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=114)** And for this 1 case and this 1 case only, I'm gonna make that value 1.
>
> **[2:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=120)** Here's the basic idea behind what we're trying to do.
>
> **[2:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=123)** Believe it or not, when I was taking a graduate class, in fact, it was the second of 2 graduate classes on regression so this was ten months of regression.
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=133)** The instructor reminded us of the song that they sing on the children's show Sesame Street, the 1 where they talk about 1 of these things doesn't belong with the others.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=144)** It might seem a little bit silly.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=146)** She actually sang the song, I will not.
>
> **[2:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=148)** But, what it reminded us of, even though here we are we're all serious stats students and we're all adults in the room, is that she was trying to communicate to us that what we want to know about outliers is how they might be qualitatively different from the other cases.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=163)** I think what must people learn is to focus just on if the values were a bit high.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=167)** So you might say, "Oh, if it's too high or too low just go ahead and chop it off and rerun it."
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=171)** And sometimes, I think folks are not as careful as they should be, the question is there some kind of qualitative difference between this 1 case and the others.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=181)** Let's run a regression to shed some light on this.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=184)** So, I'm gonna go in here and I'm gonna go ahead and run my regression and I'm going to add this new variable, in addition to the other 3.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=197)** Now, I'm gonna focus on the output, specifically the co-efficients.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=205)** And look at that!
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=206)** This number right here is the same number that was generated by the studentized deleted residual.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=213)** Now, if you've ever had to learn statistics in the kind of old-school way in which you look up the values in the special tables in the back of the book.
>
> **[3:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=225)** In other words, a physical book in your hands, and you're flipping through the pages and you have to look it up, if you've ever had that experience, you may have had to go into the t-tables and check to see if a value like this 10.148 is large enough to be statistically significant.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=240)** Thankfully, we don't have to worry about that because SPSS has done it for us.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=244)** We can see that this is significant.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=246)** What this is telling us is, if we treat this special case as different from the others, that new variable would be a significant addition to our model.
>
> **[4:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=256)** So, what conclusion do we draw?
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=258)** We should be on the lookout, we should talk to our colleagues, we should find people that understand this data, and try to figure out what is special about this 1 case; so, let's think about it.
>
> **[4:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=269)** Perhaps this 1 case, since they have a large beginning salary, maybe this 1 case received a signing bonus.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=280)** If we were predicting sal now, maybe some of the cases are getting end of year bonuses.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=287)** In fact, maybe it's not those.
>
> **[4:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=289)** Maybe it's this 1, this 1, I'm just choosing them kind of at random, but maybe they're not all in a row up there.
>
> **[4:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=297)** If that's the case, we should add a new variable something like got bonus and it should be 0 for everybody except for those individuals that got the bonus and they should get a 1.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=309)** Now our model is gonna better fit the data and it's gonna have better explanatory power.
>
> **[5:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=314)** So, try to avoid getting in the habit of deleting residuals just because they are large positive or large negative values.
>
> **[5:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=323)** You have to do some detective work and try to find out what's going on and if you can figure out what's going on often it's the addition of a variable that will solve the problem.
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=334)** As long as you can give that variable a name and explain what it represents.
>
> **[5:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-studentized-deleted-residuals?u=76281980&t=339)** So, the studentized deleted residual gives us an early indication, given it's magnitude of whether or not creating a variable like this is gonna be helpful to us.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2), case, (2), from. (1), class, (1)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** in the last (1), go back to (1)
> **UI Navigation:** go to (1), click on (1)
> **Definitions:** is a  (1), in other words (1)
> **Env Vars:** spss (1)
> **Versions:** 10.148 (1)
> **Speakers:** - [narrator] (1)

#### Dealing with outliers: Should cases be removed?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=0)** - [Instructor] Sometimes you just have to consider deleting cases that have undue influence on the regression line or that are outliers.
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=10)** But let's talk through the logic of that and use the waste dataset as a demonstration.
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=16)** So I'm gonna go into our resources and launch the waste dataset.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=22)** Okay, now the waste dataset has severe multicollinearity, so its behavior can be somewhat erratic as a result, but let's take a look.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=35)** Go ahead and do analyze, regression, linear.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=40)** I'm gonna purposefully load all five independent variables, even though we know from our familiarity with this dataset that that's probably gonna cause problems, and under save, I'm gonna request Cook's, studentized deleted residuals, DfBetas, and DfFit.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=63)** Let's go ahead and click on continue and okay.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=68)** Now, remember that when we request outlier diagnostics, they're gonna show up in the data window, not in the output window.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=76)** So let's right-click on Cook's, sort descending, and what we see is that there's two cases in particular that are way beyond the others, and then two more that are well behind, but then we drop down a little bit more down to Earth here as we go into these values.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=96)** But we can kinda see that there's another two before it really flattens out as well, but these are very high Cook's values.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=104)** So let's figure out what's going on with these.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=107)** Well, we can see that the first one has almost a million tons of waste per year.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=114)** Second one, a lot less.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=117)** Now this is on our dependent now, but still, a lot less, only a quarter million tons, which really doesn't seem unusual.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=124)** The next one, two million tons.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=127)** Next one, more than a million tons.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=129)** So what's going on with this second one that causes it to have such a high Cook's?
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=134)** Well, it's the extremely high value for industrial land, 9,000 acres of industrial land.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=144)** You actually start to imagine, perhaps a location that is primarily factories and maybe no one lives there.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=152)** Sometimes municipalities will be not suburban at all, but rather dominated by that.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=158)** So clearly something is going on there.
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=160)** By implication, if we look at the DfBetas for industrial for instance, look at this.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=167)** If we sort on DfBeta for industrial, and we sort descending on that, that one case, it is no surprise, all by itself, it moves the beta coefficient 157 tons per acre for all of the cases in the dataset, whether that case is present or not present.
>
> **[3:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=193)** Let's look at the previous regression results to see what the beta coefficient is for industrial.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=200)** And what we discover is that it's -52.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=205)** Think about the implications of this, folks.
>
> **[3:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=207)** This is really something.
>
> **[3:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=209)** We have a DfBeta that is bigger than the beta.
>
> **[3:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=214)** Right now it's -52, and we have a single case that is capable of moving it 150.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=221)** That's a remarkable fact.
>
> **[3:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=224)** So let's delete it and see what happens.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=230)** In a real situation, you don't just experiment like this, you think it through.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=236)** But I want you to see what happens.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=238)** If we now run the regression again with that one case missing, look at that.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=249)** Just like SPSS told us would happen, it's now at -209.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=255)** Think more about the implications of this.
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=258)** It could've gone in the opposite direction, and we could've gone from a negative relationship with industrial land to a positive relationship in industrial land.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=268)** And if you experiment with this dataset, you will be able to find that the single addition or subtraction of a data point can cause the beta coefficients not only to move, they always do that, but to literally change direction.
>
> **[4:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=281)** This is a really powerful thing.
>
> **[4:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=283)** So let me explain how you would think through this.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=286)** I was on a project once that was looking at banking data, and one member of the group and I were frustrating each other quite a bit, because we had different points of view.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=296)** What was happening is we were looking at the number of times that a case checked their back balance in a month.
>
> **[5:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=303)** And there were some values where there were more than 1,000 bank balance checks in a month.
>
> **[5:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=311)** So my colleague on the project, he actually was a member of the client team, said, "Keith, why are we still talking about this?
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=317)** "If it's bigger than 100 checks in a month, "just delete them all."
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=320)** And I said, "Something very strange is going on "if it's 1,000 in a month, that is not simply a human "that every 15 minutes they're checking their bank balance."
>
> **[5:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=329)** I said, "There's several hundred people "that are behaving this way.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=332)** "Something else is going on."
>
> **[5:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=334)** And the speculation was that maybe it was an automated check.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=340)** Like they had [creditkarma.com](https://creditkarma.com) or they had some kind of smartphone app that was automatically checking.
>
> **[5:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=346)** And he could not have been less interested in what was causing the outlier.
>
> **[5:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=350)** He said, "It's really simple.
>
> **[5:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=351)** "If it's a big value, just delete it."
>
> **[5:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=354)** But now we realize why that isn't the best way to think this through, because we can see that adding or removing an outlier can have unbelievably impactful results.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=365)** So if we delete it, we wanna know what's going on, and if it were true that an automated system was generating those bank balance checks, then all of the cases that had automatic check balance checks should go, whether they're large or small.
>
> **[6:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=384)** All of them should be left.
>
> **[6:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=386)** As one person first described it to me when I was learning this, he explained that an outlier really is something that's in your sample that doesn't belong to your population.
>
> **[6:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=397)** Before you delete a case, think that through.
>
> **[6:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=400)** Is it possible that this row of data actually doesn't belong to the population I'm studying?
>
> **[6:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/dealing-with-outliers-should-cases-be-removed?u=76281980&t=406)** Then it's appropriate to remove it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), delete (5), this. (3), this, (3), case, (2)
> **Analogies:** imagine (1), for instance (1), just like (1)
> **UI Navigation:** click on (1), right-click (1)
> **CLI Commands:** find (1)
> **URLs:** [creditkarma.com](https://creditkarma.com) (1)
> **Env Vars:** spss (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Detecting curvilinearity
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=0)** - [Instructor] When you're doing multiple linear regression obviously we're told that we have to have linear relationships, but we will often come across curvilinear relationships, and you have to know how to diagnose it and what you might be able to do as a corrective action when you do encounter it.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=20)** So let's take a look.
>
> **[0:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=22)** Let's go into Chart Builder.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=24)** And we're gonna do a scatter plot with a trend line.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=31)** And we're gonna go ahead and do beginning salary as our dependent variable.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=38)** Education will be declared as a scale variable, otherwise Chart Builder won't behave properly.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=46)** And I'm actually going to filter so that we're looking only at the males.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=54)** Go ahead and run this.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=58)** I've gotta put this in it's own window so we can easily see what we're up to.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=63)** And there we go.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=64)** So the question is, is this data possibly nonlinear?
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=69)** Well, we have some data points well above the regression line.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=75)** Let's identify which data points those are.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=78)** It's case ID 472, 473, number five, 359.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=88)** You can see that.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=89)** So the question is if that line curved a little bit would those points possibly fit better?
>
> **[1:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=94)** It's not always easy to do that in your mind's eye, but you can get SPS's help.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=102)** You can double click on the line and request a quadratic instead of a linear.
>
> **[1:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=110)** And actually the R squared has jumped up quite a bit.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=112)** Now, be careful what you wish for here, because the R squared will always go up.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=121)** The question is whether or not it goes up enough.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=126)** I'm gonna get rid of that formula because it's blocking our view.
>
> **[2:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=129)** Question is whether or not it goes up enough that we think that this actually fits better.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=135)** Notice for instance there are some negative implications of hauling out a quadratic relationship when perhaps you don't really need one.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=145)** For instance, we are gonna be forecasting a higher salary for adult employees at the bank with eighth grade educations as opposed to adult employees of the bank with ninth grade educations.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=159)** It actually dips up on the far left hand side.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=163)** So be very careful.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=164)** But here's the real test.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=166)** This is where people can get carried away.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=168)** You might say, "If a quadratic was better," "let's just go for the gold and do a cubic."
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=175)** Notice it barely moves.
>
> **[2:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=176)** So it's more complicated, but it's not helping very much.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=181)** Even in the instance of the quadratic I'm not entirely convinced that that's a good move.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=187)** But it did cause R squared to jump from low 30s to mid 50s.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=194)** So depending on the variable and depending on my subject matter expertise around these variables, I might consider it in a case like this.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=202)** It does seem to indicate that there's somewhat better fit.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=206)** Also notice that data points like these 125, 26 and one seem to fit that a bit better with a curved line than with a straight line.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=221)** These are all things that you might contemplate.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=223)** So what action are you going to take if you decide to go ahead and move on with the quadratic?
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=231)** Well, in addition to having a beta coefficient associated with education, you're also gonna fit a beta coefficient associated with education squared, and that's what's gonna make it a quadratic and that's what's going to address the non-linearity here, the curvilinearity.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=250)** So let's look at this through one additional lens.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=253)** I can go to Analyze, Regression, Curve Estimation.
>
> **[4:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=260)** I can declare my dependent as beginning salary.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=265)** I can make education level the independent.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=268)** In this menu I don't have to worry about the fact that education is ordinal.
>
> **[4:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=272)** And I can check off linear and quadratic.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=275)** Click on okay.
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=277)** Same information, but in a different form.
>
> **[4:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=280)** And I can see that my R squared is 40% of variance explained if I go with the linear.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=288)** This is both men and women now, and my R squared associated with the quadratic is 58.5% of variance explained.
>
> **[4:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=298)** And I actually see that the first model fits only one beta coefficient but the second model fits two.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=305)** Again, education as well as education squared.
>
> **[5:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=309)** That second variable, the education squared needs a beta coefficient of its own.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=313)** So there you have it.
>
> **[5:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/detecting-curvilinearity?u=76281980&t=315)** That's both how to diagnose it and also what the corrective action might be.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (2)
> **UI Navigation:** click on (2), go to (1)
> **CLI Commands:** make (2)
> **Analogies:** for instance (2)
> **Env Vars:** sps (1)
> **Versions:** 58.5 (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Other Approaches to Regression

#### Regression options
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=0)** - [Instructor] A software package like SPSS Statistics has so many options for doing so many things that it can be a bit intimidating.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=8)** In fact, even someone like myself, that's been using SPSS for 25 years, is always finding new menu choices and new menu options with each release.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=18)** So what I'm going to try to do is make the options related to our topic, regression, more manageable.
>
> **[0:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=25)** So let me walk you through some of the more important ones.
>
> **[0:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=29)** First, there's an option for doing automatic linear modeling.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=33)** Now, this kind of fancy name is simply ordinary least squares regression, but with a kind of expert system or wizard overlaid on top, which helps you automatically do some things behind the scenes.
>
> **[0:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=49)** I'll be demonstrating it in its own video.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=51)** Also, decision trees is perhaps the most important topic that falls under what we normally call predictive analytics these days.
>
> **[1:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=61)** Now, there's a technique called classification and regression trees.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=65)** And when your target variable, what we've been calling dependent variable, is a continuous variable, the CART algorithm, as it's called, does what's called a regression tree.
>
> **[1:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=77)** It's a powerful technique.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=79)** I'll be showing you a quick demonstration of that as well.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=82)** I want to mention that CART is a widely used algorithm and is not found only in SPSS Statistics.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=91)** CART has been around for a couple of decades now and is found in pretty much every statistical package that you could do, including things like R and SAS and so on.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=102)** Time series forecasting is something that occasionally gets mixed up with regression.
>
> **[1:49](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=109)** It's not that they're similar approaches, but we can sometimes apply either approach to the same data.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=117)** I'm not gonna go into tremendous depth, but I'm gonna go ahead and walk you through a time series example just to give you a little bit of an idea of how the time series approach is different from the regression approach and how to spot when the time series approach is best.
>
> **[2:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=132)** Categorical and ordinal regression is a really interesting concept.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=137)** What you're going to be able to do is, using something called optimal scaling, you're actually gonna be able to convert your categorical and ordinal variables into a form that's allowed in a regression.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=147)** I'll be showing this to you as well.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=150)** Neural networks are a really hot topic right now.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=153)** In particular, people are talking about deep learning.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=156)** All deep learning really is is a large complex neural network.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=162)** SPSS Statistics offers an ability to do this, and it's very interesting to look at neural networks and regression side by side because they can be used to solve similar problems in the same dataset.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=173)** Okay, so to recap, we're gonna get a chance to see all five of these.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=178)** But SPSS has capabilities beyond what we're gonna get a chance to see in this course.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=184)** One really big but important topic is binary logistic regression, and what makes it different is the nature of the dependent variable.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=194)** One uses binary logistic regression when the dependent variable is a zero, one variable, will get heart disease, won't get heart disease, and so on.
>
> **[3:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=205)** It's popular both in epidemiology and in marketing research.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=208)** We'll have a bit more to say about logistic regression in its own video.
>
> **[3:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=213)** Path analysis and structural equation modeling is a bit of an advanced technique, but it's really powerful.
>
> **[3:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=221)** In short, you use techniques like this if you want to do something like A predicts B, which also predicts C.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=230)** You may have heard phrases like moderation and mediation.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=234)** We're gonna further explore this a little bit, but just to taste, it's a big topic.
>
> **[3:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=238)** Then, there's a whole host of techniques that you can use within SPSS when the ordinary least squares assumptions are not met.
>
> **[4:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=246)** There's weighted least squares, there's two-stage least squares, there's probit, and so on.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=252)** Most of these are found within a special module, called the regression module.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=257)** Many of these techniques that we've been talking about are found in their own module.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=263)** But these four or five approaches all basically fall into this category.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=267)** You use them when the ordinary least squares assumptions have failed to be met.
>
> **[4:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=273)** Finally, when folks have curvilinearity in their data, a lot of times they think I must have to go to the nonlinear menus of SPSS.
>
> **[4:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=285)** It's generally not the case.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=286)** Generally, you're better off going to curve estimation, properly diagnosing that you have nonlinearity, and then handling it the way we did in multiple regression, namely create a quadratic.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=299)** That will generally be the best way for most folks to deal with nonlinearity.
>
> **[5:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-options?u=76281980&t=305)** So I hope I've given you a way of organizing your path a little bit so that you can come up with a learning path that makes the most sense for you and where you might want to go beyond ordinary least squares multiple regression.

> [!info]- Semantic Content
>
> **Env Vars:** spss (7), cart (3), sas (1)
> **Code Keywords:** module (3), let (1), this, (1), finally, (1), case. (1)
> **Definitions:** is a  (6)
> **CLI Commands:** make (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Automatic linear modeling
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=0)** - [Instructor] Within the last few years, SPSS has added a new kind of regression to the SPSS Statistics interface.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=7)** It's called automatic linear modeling.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=9)** Let's take a look.
>
> **[0:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=11)** We're gonna use the Auto Imports data set for this demo.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=17)** This is a large, complex data set.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=19)** There's a lot going on, including a lot of categorical variables, so remember if you're gonna use the traditional regression menu and you've got all these categorical variables, you're gonna have to dummy-code them.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=31)** One of the advantages of automatic linear modeling, there it is at the very top there, is that this is gonna dummy-code for you.
>
> **[0:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=41)** I'm gonna go ahead and scroll down, and I'm gonna remove price from the predictors, and make that a target.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=46)** Now, as a brief aside, in the variable view where you do the variable declarations, if you had declared price as having the target role, you actually could click on predefined roles up here and make that automatic.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=64)** So, SPSS is really trying to go out of their way to make this as easy for you as possible.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=70)** Now, along with this comes a caution: If you're in an academic setting, for instance, let's say you're working on a Master's thesis, or PHD thesis, or something like that, you really have no business being in this menu if that's the case.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=85)** The reason is that this is inherently an exploratory technique and it's gonna be performing some data preparations, and doing things like removing outliers in ways that you may not be able to document to the degree that you'd have to document them if you're doing something like thesis work.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=102)** However, if you're in a corporate setting, this may be something that gives you some clues as to what direction you might wanna go in with your regression.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=112)** Let's look at the output and discuss.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=114)** Before we do, if we go to Build Options, you're gonna see there's a lot of fancy options here.
>
> **[1:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=119)** You can even do things that are beyond the scope of my little demo here, but called boosting and bagging that gets you into territory that's not unlike random forests, or some other things that you might have heard about in the machine learning space.
>
> **[2:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=134)** In fact, if you're intrigued with what boosting and bagging is, I review it in considerable detail right here in the library on advanced decision trees.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=147)** And, finally, have an option to save predicted values out to the data set, but we're gonna run this on default settings.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=152)** We're just gonna acclimate to it.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=154)** we're gonna go ahead and click on run.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=156)** The first thing that you notice is that this has a completely different style of output as most results in SPSS.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=166)** You're gonna wanna double-click on that to take a look inside.
>
> **[2:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=171)** One of the first things that you're gonna notice is that it has done a lot during the so-called automatic data preparation step.
>
> **[3:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=180)** Now, you can turn this off if you like.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=183)** You can go into the help and find out more about what it's doing, but the one's, obviously, that we see frequent application of is imputing missing data, trimming outliers, and merging categories.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=197)** Again, you'd really have to document this carefully if you're gonna contemplate doing this in any kind of an academic setting.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=204)** This, again, probably isn't the menu for you if that's the case.
>
> **[3:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=208)** But, what I like to use something like this for is I'm first sitting down with the data, I haven't had a chance to dummy-code, I'm not quite sure what I'm gonna do with my outliers, and I'm simply curious what automatic linear modeling is gonna do to my data.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=226)** That often allows me to get my scratch pad out and jot down, oh, wow, it trimmed some outliers on city miles per gallon, maybe I should take a look at that variable.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=237)** Or, wow, here's a categorical variable that performed quite well in the model, maybe that will climb to the top of my list for variables that I'm gonna take the time to dummy-code.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=247)** So, you can certainly use it in that way.
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=250)** Going down to the list of variables, I have to admit that make being the first variable gives me pause.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=259)** You see, what you wanna be thinking about here is that there's only a couple of vehicles of each make.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=267)** So, this is really what train and test partitions are all about in the predictive analytics and machine learning space.
>
> **[4:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=276)** If we were to build a model with make on a particular data that we called our train data, and then applied it to another subset that we called our test data, we would have makes in the train data that never appeared in our test data, and vice versa.
>
> **[4:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=291)** A very granular variable like this could really get us into trouble.
>
> **[4:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=296)** Remember, this tool is there to help you, but the role of oversight is yours.
>
> **[5:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=302)** Make sure that you're cognizant of what it's doing, why it did it, and if you feel that you have to override it, it's your responsibility to do so.
>
> **[5:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=313)** Let's move further down, and we get a something similar not identical to a residuals plot.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=320)** We can see that the residuals are fairly normally distributed, but we have an outlier in the far right, which is causing a bit of a skew.
>
> **[5:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=332)** We can see a couple of cases that have been identified to have a little bit higher cook's distance.
>
> **[5:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=338)** The largest one doesn't seem to be terribly high compared to the others, but, nonetheless, I'd wanna go into the data and check out record 200.
>
> **[5:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=347)** Then, there are some diagrams that sometimes I kinda get nostalgic for the old-style output there, but is kinda trying to indicate to us visually the importance of those coefficients.
>
> **[5:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=359)** Candidly, I don't usually produce a model in this menu and then run with it.
>
> **[6:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=366)** Again, what I'm looking for is which categorical variables should I dummy-code first, which variables seem to have outliers in them, and so on.
>
> **[6:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=376)** But you can see, because this is operated using stepwise, you can see the order in which the variables entered the model, and that's gonna give us some indication of the importance of those variables.
>
> **[6:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/automatic-linear-modeling?u=76281980&t=389)** Again, it could be a useful menu for exploratory purposes, but it's your job, again, to provide necessary oversight.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case. (2), interface (1), finally, (1), this, (1)
> **CLI Commands:** make (7), find (1)
> **Env Vars:** spss (4), phd (1)
> **UI Navigation:** click on (2), scroll down (1), go to (1), double-click (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### Regression trees
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=0)** - [Instructor] Okay, I'm in the auto imports file.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=3)** Now I'm gonna run the regression tree algorithm.
>
> **[0:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=8)** Here's where it's found.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=9)** It's under Analyze, Classify, Tree.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=13)** Now for almost all of you, regression tree is gonna be a stronger algorithm than automatic linear modeling in terms of fitting your data, dealing with missing values, dealing with categorical values and so on.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=31)** The potential downside is that decision trees in SPSS are in a special module.
>
> **[0:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=37)** So, conceivably, you have access to automatic linear modeling but do not have access to regression trees.
>
> **[0:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=43)** But I consider it the stronger algorithm.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=45)** Let's take a look.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=47)** This is just warning us, as always, that our measurement level should be set properly.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=52)** Nominal, Ordinal, and Scale.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=53)** That really is important because the regression tree is going to automatically process our variables differently based upon what level of measurement they are.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=65)** So, price is gonna be our dependent.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=68)** And we're gonna put all the variables in.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=70)** We don't have to worry about dummy coding with the regression tree's algorithm.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=74)** And we can choose, and again, I'm recommending regression tree here over CHAID.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=80)** They both can do a good job.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=82)** But I'm gonna be demonstrating regression tree.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=85)** CRT stands for classification and regression tree.
>
> **[1:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=89)** If you wanna see some demonstrations of classification trees, so the same algorithm, but with a categorical dependent variable, I cover this in considerable depth in a course on decision trees here in the library.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=105)** Okay, so under Validation, the decision tree algorithm allows us to automatically generate a train test.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=115)** Since the dataset is not super, super large, I'm gonna change the setting to be 80% train and 20% test.
>
> **[2:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=124)** And it couldn't be simpler.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=125)** We simply have to ask regression tree to do that for us.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=130)** Click on continue, and I'm gonna click on okay, and we're gonna talk about it.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=136)** But sometimes, we'll have to adjust our sample size settings.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=143)** Here we are in the output.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=145)** And remember, we're using 80% of the data, so we scroll down.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=150)** And it actually looks like the tree has not grown.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=154)** Okay?
>
> **[2:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=155)** We've got 157 cases in the train data set, and we have 44 cases in the testing data set, and it hasn't grown at all.
>
> **[2:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=162)** I'm gonna return to the menus and show you why this has happened.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=166)** We're gonna make an adjustment and run it again.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=172)** So, the default settings tell us that a so-called parent node has to have 100 cases before it can split into the branches of our tree.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=182)** And we just don't have enough cases to support that.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=184)** It's easy to make the change.
>
> **[3:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=186)** We're just gonna go ahead and say 10 and five.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=190)** There are other criteria at play as well, but let's just analyze the tree.
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=197)** Okay, and now the tree has grown, and we're gonna look just at the train tree.
>
> **[3:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=202)** And what regression trees is doing here is trying to figure out what our most important variables are, and then also dividing our data into segments with expensive cars and inexpensive cars.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=215)** So let's think through what we might use this for.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=218)** Let's say we're a used car dealer.
>
> **[3:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=220)** What we might wanna do is have a model that allows us to estimate the value of a car so that we know whether or not we wanna make a bid on that car at an auction.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=230)** We have to know if there's enough wiggle room so that we can purchase the car, make little improvements, let's say and then sell it at a profit.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=237)** Same if we were flipping houses or something like that.
>
> **[3:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=239)** That's the kind of practical application of something like a regression tree.
>
> **[4:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=244)** We're really not writing an academic paper, probably, about our regression tree.
>
> **[4:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=248)** We're trying to solve some kind of practical prediction problem.
>
> **[4:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=252)** So we can see that the very large engine sizes are more expensive.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=257)** There's only 13 of those cases.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=259)** So engine size, according to this, is the most important variable.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=262)** Followed by highway miles per gallon.
>
> **[4:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=265)** So it looks like, of the vast majority of cars, that are of smaller engine size, there is a price difference between good gas mileage and poor gas mileage, with the good gas mileage being predicted value of $8600.00, $8638 specifically.
>
> **[4:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=284)** And the poorer gas mileage actually is the more expensive cars, probably because they could be larger.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=293)** Now remember, it split engine size into two, but we would still expect to have quite a bit of variance on a whole bunch of things within those 54 records that are node three and below.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=307)** Then further going down, we can see that it wants to split on make of the vehicle.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=312)** Now, I always get worried about a variable like make of the vehicle, because it can make our tree over fit.
>
> **[5:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=319)** We've only got a couple of examples of each make.
>
> **[5:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=322)** So we may wanna consider taking that variable out.
>
> **[5:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=325)** I almost certainly would.
>
> **[5:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=327)** As we keep on going, and keep on going, we get to the bottom of the tree, and these are the so-called leaf nodes, node 22, and node 21, and node 20.
>
> **[5:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=337)** It split as far as it's willing to go.
>
> **[5:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=340)** It split as far as it can go.
>
> **[5:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=342)** And it's identified what we call supervised segments of our data that are associated with small groups of vehicles that have different prices.
>
> **[5:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=352)** So it's really a powerful technique.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=355)** There's a lot more that I could say about it, but this really is a type of regression alternative that you might wanna consider if your problem is less academic and more applied, and you're more focused on predictions and less focused on confirming theory.
>
> **[6:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/regression-trees?u=76281980&t=373)** You're not gonna do a very good job confirming theory with this, but you might do a great job making accurate predictions.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8), node (5)
> **Code Keywords:** let (5), super (2), this, (2), module (1), continue (1)
> **Versions:** 8600.00 (1), node 22 (1), node 21 (1), node 20 (1)
> **Env Vars:** spss (1), chaid (1), crt (1)
> **UI Navigation:** click on (2), scroll down (1)
> **Definitions:** is a  (2), stands for (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Time series forecasting
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=1)** - [Instructor] I wanna take a couple of moments to talk about time series forecasting.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=5)** It's similar to regression in many ways.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=9)** I don't know how often folks confuse the two exactly, but despite its similarity with regression it's separate and distinct in some very important ways.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=19)** Let's take a look at an example of a time series forecasting data set.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=24)** You'll find this one in the additional data files folder of the resources folder.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=31)** It's Australia Retail Sample.
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=36)** Here we are, and it really couldn't be simpler to be able to identify the fact that this is time series data.
>
> **[0:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=46)** Every row is a date.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=50)** This particular date is written out as April first.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=54)** Obviously this is real data.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=56)** This is some years ago.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=57)** This is actual Australian retail sales data.
>
> **[1:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=63)** Although the date says April first, it really represents an aggregation, or a roll-up, as it were, of all those sales throughout the entire month.
>
> **[1:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=72)** These three variables, year, month, and date, you notice they have an underscore after them.
>
> **[1:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=78)** They're actually generated within SPSS by the time series module.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=83)** I'm not gonna walk you through those steps, but those have actually been generated, because those will be used in the time series analysis.
>
> **[1:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=91)** What I wanna really draw your attention to is that note that this column, Turnover, which is just sales.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=98)** Turnover Totals State Department Stores is a single column of data, and actually, in time series forecasting, you can build a model with just this one variable.
>
> **[1:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=112)** What happens actually is this one variable predicts itself at a time lag, very frequently using the previous month as an input, and the time series forecasting module will do this for you.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=127)** Very often, sometimes what will happen is you'll have the previous month predicting the current month, but also one year ago, because you might have seasonality in your data.
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=137)** Let's take a quick look.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=139)** What's important to note is I'm going to a special menu called Forecasting.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=144)** If you can't find this menu in your own personal copy of SPSS, it could be that you don't have the forecasting module, because it is separate and distinct.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=153)** Notice that even the graphics, like the sequence plot that I'm about to do, is found in the special menu.
>
> **[2:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=159)** I'm gonna go to Forecasting, Sequence Charts, and I'm gonna do simply a sequence chart of my variable turnover.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=172)** Here it is, and now we're seeing visually just how different time series data is.
>
> **[2:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=178)** We don't use a scatter plot, when we're looking at time series data.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=182)** We do this instead.
>
> **[3:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=183)** We do a sequence plot.
>
> **[3:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=185)** What you see, of course there's kind of this surface level resemblance to a cardiogram or something like that.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=191)** We have this dramatic up and down, and up and down.
>
> **[3:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=194)** That up and down represents seasonality, which is one of the really important aspects of this.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=199)** Again, it's very easy to diagnose that you have this situation.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=203)** You have this unique ability to predict a variable with itself, and I wanna make one final comment about time series forecasting.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=212)** You'll know that when you have data like this that you're gonna wanna go into the special forecasting menu.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=218)** Although you may be tempted at times to try something with regression, let's say for the sake of argument that in addition to Total Sales, I also had another column, Marketing Spent.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=231)** You might think, wow, now this really seems like regression.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=233)** I might be tempted to go back and use a regression approach.
>
> **[3:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=236)** I'm gonna use marketing spent to predict total sales.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=240)** You'd have to watch out, though.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=242)** This is exactly the kind of data that will cause you to fail the Durbin-Watson Test.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=249)** It's not that you couldn't do regression, but there's a certain set of considerations to be considered.
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/time-series-forecasting?u=76281980&t=255)** If you have this kind of data, where every row is a period, like a month, or a week, or a day, or perhaps even a year, you wanna use a whole new set of approaches called time series forecast.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (3), this. (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** spss (2)
> **Warnings:** note that (1), watch out (1)
> **UI Navigation:** go to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Categorical regression with optimal scaling
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=0)** - [Instructor] Okay, so we know that regression is all about predicting a scale variable with one or more scale variables.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=9)** Well, somewhat obviously, we don't always have scale variables, so then what do we do?
>
> **[0:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=15)** Well, we're going to go ahead and take a look at a technique called categorical regression, and to do so, we're going to use a data set that is found in the Additional Data Files folder called Satisfaction.
>
> **[0:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=31)** Okay, well, here's the Satisfaction data set, and we can see that our dependent variable Recommend is nominal in nature.
>
> **[0:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=40)** Some folks answered yes, some folks answered no, and some folks answered don't know.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=47)** We're going to actually include the don't know.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=50)** If we only had yes, no, we could consider something like binary logistic regression, but since we do want to include the don't know, we really have to treat our dependent as a nominal variable.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=62)** So let's take a look.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=64)** We're going to find the technique that we need in the Regression folder, and then down here, where it's called Optimal Scaling.
>
> **[1:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=76)** So the best way to refer to this is Categorical Regression with Optimal Scaling.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=82)** Now that's where it's found in the menus.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=85)** You may find that you have trouble finding it.
>
> **[1:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=88)** It could be an issue with a module, or it could be in a different place in your copy of SPSS, but it's called Categorical Regression with Optimal Scaling, or CATREG.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=100)** CATREG refers to the syntax command which does this.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=104)** So I'm going to go ahead and launch that menu.
>
> **[1:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=108)** Okay, now we're going to go ahead and do categorical regression, but this example and additional examples using things like ordinal regression are found in a chapter of a book that I was a part of.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=122)** It's a good way to get additional reinforcement on this if you think that this technique is going to be important to you.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=127)** The name of the book is "SPSS Statistics for Data Analysis and Visualization", and there's actually a whole chapter dedicated to regression with categorical outcome variables.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=139)** So again, we're going to choose Recommend as our dependent, and we're going to declare it as nominal by clicking on the Define Scale button.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=150)** Then we're going to take Valuable, Satisfied, When Purchased.
>
> **[2:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=154)** Obviously what they're saying is whether or not they're willing to recommend a particular product, so this is from marketing survey data.
>
> **[2:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=161)** And we're going to go down to Define Scale, and we're going to choose Ordinal.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=167)** But it's not the only choice we could make.
>
> **[2:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=170)** Let's say for the sake of argument, that you had an ordinal variable that was a little bit different than these.
>
> **[2:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=177)** Maybe you had an ordinal variable that was something like vote Republican all the time, vote Republican sometimes, independent, vote Democrat sometimes, vote Democrat all the times.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=190)** What if the independents had the highest or lowest value on the dependent?
>
> **[3:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=197)** It could happen, couldn't it?
>
> **[3:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=198)** You could find that moderates were different than both Democrats and Republicans, let's say.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=203)** When that's the case, if you have any suspicion that that might occur, go ahead and choose Nominal, because that's the only way that you're going to be able to get a V shape or an upside-down V shape where the middle has the highest value or the lowest value.
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=219)** In this case, given the nature of the variables, we're going to go ahead and try Ordinal.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=223)** We're going to click on Continue, but we also need one more thing.
>
> **[3:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=226)** We're going to go to Plots.
>
> **[3:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=228)** And we're going to choose, that's our dependent in the end of three so we want all four of those.
>
> **[3:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=234)** Click on Continue, and click on OK.
>
> **[3:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=237)** We're just going to take a quick look, but what I think you might be struck by is how similar the regression output itself looks, so I'm not going to walk you through that output.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=249)** The interpretation would be consistent with what you're familiar with.
>
> **[4:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=253)** I'm going to go down to these transformation plots, because it really communicates visually what's going on.
>
> **[4:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=259)** So you remember we had yes, no, and don't know.
>
> **[4:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=263)** So what we're actually discovering that the don't know is in between the yes and the no.
>
> **[4:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=268)** This is common behavior in marketing surveys where folks use a don't know as a polite no.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=275)** Would you recommend product X?
>
> **[4:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=277)** Oh, I don't know.
>
> **[4:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=278)** That's really not a strong endorsement, but it's not as strong as a no.
>
> **[4:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=282)** And what's happening is the data's communicating this to us in a powerful way, so then we can scroll down, and here is why you can't take a Likert scale variable like this, one of the strongly agree to strongly disagree variables and just throw it in as a scale variable.
>
> **[4:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=299)** Because look at this now, and what we discover is the ones and twos are equally likely to recommend.
>
> **[5:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=307)** But the twos and threes are really quite different in how likely they are to recommend.
>
> **[5:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=312)** And the threes and fours are as likely to each other to recommend.
>
> **[5:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=317)** But then we get a big jump again at five.
>
> **[5:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=320)** If we had declared this as scale, or simply went into the regular regression menu, we would have been forcing it to equally space one to two, two to three, three to four, four to five, and that is not what the data is telling us.
>
> **[5:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=336)** And sure enough, this one looks pretty linear between three, four and five, but it's also flat between one, two and three, or much flatter than it would be.
>
> **[5:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=348)** And then finally we see that When Purchased, although it only has two categories, it's also measured the distance there.
>
> **[5:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=355)** So once it's done this conversion, and a conversion that we can see in these plots, it then proceeds to do regression just like everyday regression.
>
> **[6:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/categorical-regression-with-optimal-scaling?u=76281980&t=365)** So this is a really powerful technique and a lot of folks don't know that it's there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (2), continue (2), module (1), this. (1)
> **UI Navigation:** click on (3), go to (1), scroll down (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** spss (2), catreg (2)
> **Definitions:** refers to (1), is a  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Comparing regression to Neural Nets
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=0)** - [Instructor] Okay let's talk about neural networks, as I'm sure you know neural networks is a really big topic and could certainly deserve an entire course of its own, but our goals right now are more modest, we really just wanna compare and contrast regression with neural networks specifically I wanna give you a glimpse into how regression handles complexity and how neural networks handle complexity.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=28)** So let's take a quick look using the MWBank with Dummy Code and Interaction Terms data set.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=35)** So first I'm gonna go into Regression, and I'm gonna go ahead and load this with Beginning Salary, and just three, we'll go with, Sex, Education Level and Work Experience, 'kay, and I'm gonna go ahead and click OK.
>
> **[0:58](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=58)** Here's my Output and I'm gonna scroll down and at the risk of being a bit obvious here, obviously we can count, we put three variables in, so we have three beta coefficients that have been fit, I suppose four, if you count beta zero, but we basically have a formula that would be beta zero, plus beta one x one, for Sex, plus beta two x two for Education Level, plus beta three x three for Work Experience, so we have three variables and three beta coefficients that pair up with them.
>
> **[1:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=87)** What if we thought or uncovered that Education Level was curvilinear, well we'd have to consider adding another variable, education squared, treat that as a quadratic and now we're fitting another beta coefficient.
>
> **[1:41](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=101)** What if we uncover in our data, that Sex and Education Level interact, we'd have to create a new variable, Sex times Education Level and again we would add another beta coefficient.
>
> **[1:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=113)** So the way that we deal with complexity, or nonlinearity and regression, is as the human analyst I have to identify this through exploring the data and create more variables and therefore fit more coefficients.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=127)** How would neural nets deal with the same complexity?
>
> **[2:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=133)** We're gonna go into Neural Networks, Analyze, Neural Networks, Multilayer Perceptron, it's possible that your copy of SPSS doesn't have the neural network module, so our dependent is gonna be Beginning Salary, then we're gonna use the same three variables, now in this particular menu, we wanna signal to it that Education Level and Work Experience are continuous but Sex of Employee is categorical, which in this menu system is just called a factor, and we're gonna go ahead and click on OK.
>
> **[2:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=166)** Let's scroll down and there's a lot going on in this diagram, so let's just go through a simple exercise, let's just simply count, the number of lines behind the rectangles on the left and the ovals in the middle, the ovals in the middle are what's called the hidden layer, again, neural networks are a big topic, but all I really wanna identify here is that we're fitting more coefficients, we don't really call them beta coefficients here, but we're fitting more coefficients than simply one per variable.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=199)** So we see four connecting work to the hidden layer, four connecting edlevel, so if we count those, we've got four, eight, 12, 16, not including the Bias, which is basically our beta zero or our Y-intercept.
>
> **[3:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=216)** So what's going on with those 16 variables?
>
> **[3:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/comparing-regression-to-neural-nets?u=76281980&t=219)** Well the hidden layer is a way that the neural network indirectly predicts salbeg here, and that hidden layer it's kind of a mixing bowl, it's kind of the equivalent of those interaction terms and those quadratics equations and so on, and it's by fitting those extra coefficients that it's dealing with complexity, there's a critical difference though, it's not explicitly creating these variables, there really is no edsex term, there really is no edsquared, so it's producing the equivalent behavior but not in the same way so we don't get a list of the variables, we don't get statistical significance listed next to each one, so this is what makes neural networks a so called black box technique but all of these lines is how the neural network is uncovering that complexity.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), module (1)
> **UI Navigation:** scroll down (2), click on (1)
> **Definitions:** is a  (2)
> **Env Vars:** spss (1)
> **Speakers:** - [instructor] (1)

#### Logistic regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=0)** - [Instructor] Logistic regression is a terribly important topic, and certainly has gotten book-length treatment on numerous occasions, and there are university courses, both at the undergraduate level and at the graduate level, which dedicate an entire university semester to the topic.
>
> **[0:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=17)** The reason it's important for us is to understand how logistic regression is different from ordinary least squares regression.
>
> **[0:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=27)** Okay, the first thing we wanna understand is that SPSS supports two different kinds of logistic.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=34)** Binary logistic, which is really the main one that I'm gonna be explaining here, and multinomial logistic, which is a somewhat younger technique, and is a way that you can tackle more than two categories.
>
> **[0:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=48)** But the one that you're gonna encounter is almost always the binary kind, where what you're trying to predict has only two possible values.
>
> **[0:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=57)** For instance, get heart disease, or not get heart disease.
>
> **[1:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=62)** Graduate on time, not graduate on time, and so on.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=67)** Now, remember that in plain old regression, Y is equal to B0 + B1X1, and then very possibly you have a B2X2 and so on, and so on.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=79)** What we're doing now is rather than having an equation that tells us the value of Y, we have an equation that tells us the log of the odds.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=90)** It has many of the same elements, but what we're basically doing is generating a probability.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=96)** So what's gonna kick out of logistic regression is gonna have a minimum of zero, and a maximum of one.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=104)** So if we're trying to predict heart disease, a one would be a very high risk of getting heart disease, and a zero would be a very low risk of getting heart disease.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=114)** Now, since we're doing the log of the odds, when it comes to do the predictions at the end, interpreting the beta coefficients, in other words, we have to reverse that process and do the antilog.
>
> **[2:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=128)** So that makes this formula look a little bit intense at first, but as you can see, inside the parentheses, you basically have the same old regression formula.
>
> **[2:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=138)** So the math looks a little bit more complicated, but most of the concepts are very similar.
>
> **[2:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=144)** There is one concept that is quite different in an important way.
>
> **[2:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=150)** We're not fitting a straight line.
>
> **[2:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=153)** We're fitting what's called an S-curve.
>
> **[2:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=156)** Now the reason this happens is that you hit an asymptote, which is a word that you probably haven't heard since middle school algebra.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=164)** But you have an asymptote at zero and an asymptote at one.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=168)** It can't possibly go below zero or above one.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=172)** This is important, because back in the '50s, before we had logistic regression, folks would attempt to use plain old regular regression.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=182)** But sometimes they would get probabilities that were bigger than one, or they could get negative probabilities, and of course that doesn't make sense.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=189)** So that's really the idea behind the technique.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=191)** Now, something that I wanna briefly mention, is folks see this S-curve, and they think, oh gosh, we're looking at curvilinear relationships.
>
> **[3:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=199)** No, we're taking the log of linear relationships, and that's different.
>
> **[3:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=204)** So we're still looking for linear relationships, but by calculating the log of the odds, we can plot it on this S-curve.
>
> **[3:31](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=211)** You're not really gonna see the S-curve in your output, and you don't have to, you just have to remember that you can't go lower than zero, and you can't get bigger than one, and why that is so.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=222)** Okay, what are the application areas of binary logistic regression?
>
> **[3:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=227)** Well, it's really well known in two big areas, but you encounter it all the time, even in the newspaper.
>
> **[3:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=233)** So the two big application areas are epidemiology, folks that study disease, and also marketing research.
>
> **[4:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=240)** And the reason it comes up in marketing research so often, is a lot of times you wanna know if someone's gonna buy or not buy.
>
> **[4:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=247)** So what might you have seen in the newspaper?
>
> **[4:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=250)** Ever come across one of those articles where they talk about how dark chocolate is good for you?
>
> **[4:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=255)** Or how red wine is bad for you?
>
> **[4:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=258)** Or every once in a while they'll actually say red wine is good for you.
>
> **[4:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=262)** Those kinds of studies are almost always binary logistic regression.
>
> **[4:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=267)** And when they tell you, in those articles, that your risk is cut in half, or your risk is increased by 30%, or your risk is doubled, that also is coming from logistic regression, because those are what are called odds ratios, and that's the form that the beta coefficients are reported in the output.
>
> **[4:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/logistic-regression?u=76281980&t=287)** So you've encountered logistic regression, and now you know how it's different from ordinary least squares regression.

> [!info]- Semantic Content
>
> **Definitions:** is a  (4), in other words (1)
> **Env Vars:** spss (1), b1x1 (1), b2x2 (1)
> **CLI Commands:** make (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### SEM
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=0)** - [Instructor] Okay, let's briefly talk about a whole family of techniques called path analysis and/or structural equation modeling.
>
> **[0:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=9)** The two phrases are actually different in subtle ways.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=12)** Now this is a big topic.
>
> **[0:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=13)** Entire books have been dedicated to it, but I want to give you a feel for how this addresses issues that although somewhat possible in regression, become extremely difficult.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=26)** One way to think of it is it somewhat combines regression and factor analysis at the same time.
>
> **[0:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=32)** Let's take a look at about the easiest example that we can to get a feel for this.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=38)** How would you try to prove that A predicts B, which in turn predicts C?
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=44)** Now, there's endless conversation that you can find in academic papers and books and on the web about mediation and moderation.
>
> **[0:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=53)** And if you're guessing that it's similar to this, it is related.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=56)** But let's just stick to how structured equation modeling would tackle this, starting with how you could try to get this with regression.
>
> **[1:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=65)** First, you'd have to establish that A predicts B, then naturally that B predicts C.
>
> **[1:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=71)** Then it gets a little bit more subtle and interesting.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=74)** You also would have to establish that A has some kind of a relationship with C.
>
> **[1:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=80)** But, if you partial out B, if you control for B, so this would draw upon your knowledge of partial correlations and so on, you should be able to establish that A fails to predict C, if you control for B.
>
> **[1:37](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=97)** Think that through for a moment.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=99)** That basically means that you would be running four different regression models and through some kind of written verbal narrative in a report, trying to walk your audience through how all four of those models informs this relationship.
>
> **[1:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=114)** So it can be a bit tricky.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=116)** What's really interesting about path analysis and structure equation modeling, is that you can try to tackle all of this, all at once.
>
> **[2:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=125)** So, in the SPSS family of products, the way that you would do this is not with SPSS itself, but what's called Amos.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=136)** It's actually a separate standalone product that does SEM that's part of the software family that has its own interface, everything about it looks different.
>
> **[2:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=146)** And what you learn is that path analysis, like the rectangles we were just talking about is when actual observed variables are interacting with each other.
>
> **[2:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=158)** What an oval means in this diagram is actually a factor.
>
> **[2:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=164)** So you have five variables, product one, two, three, four, and five that together through a factor analysis get at the concept product.
>
> **[2:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=175)** So you're not measuring product directly, you're measuring it through five variables that together are this factor product.
>
> **[3:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=184)** Then you have a value factor and a service factor.
>
> **[3:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=187)** Just like factor analysis.
>
> **[3:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=189)** But now these factors are interacting with each other, and in this case, product and service are predicting value.
>
> **[3:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=196)** So it's really multiple models all coming together at one time, it's really a really powerful technique.
>
> **[3:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=203)** So what I've tried to give you a little glimpse into is when you might bump into the limits of where regression can take you.
>
> **[3:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=212)** And if what your intending to do is more complex, you might have to somewhat bring out the big guns and consider something like SEM, and go beyond regular regression.
>
> **[3:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=223)** So if you think that SEM is a good fit, and you want to dig deeper, I want to recommend two resources.
>
> **[3:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=231)** One is a book, full-length book, Introduction to Structural Equation Modeling Using IBM SPSS Statistics and Amos by Niels Blunch.
>
> **[4:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/sem?u=76281980&t=242)** If you're not quite ready for a full-length treatment, and SPSS Statistics and Data Analysis and Visualization, which is a book I was involved with, the first chapter is dedicated to comparing Amos to other multi-variant techniques, and is therefore somewhat more gentle introduction.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (3), this. (1), interface (1), case, (1)
> **Env Vars:** spss (4), sem (3), ibm (1)
> **Definitions:** is a  (4), basically means (1)
> **CLI Commands:** find (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### 8. 7. Advanced Alternatives Using the Extension Hub

#### What is the extension hub?
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=0)** - [Instructor] Okay, I want to show you some exciting new options in SPSS.
>
> **[0:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=7)** So I am currently in SPSS 29 for this demonstration and for the three all alternatives to ordinary least squares regression that I'm going to be showing you.
>
> **[0:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=20)** Let me tell you where in the menus you'll find these.
>
> **[0:24](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=24)** You want to go up to analyze, down to regression, and over to linear OLS alternatives.
>
> **[0:34](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=34)** Now, what's new about this is that these three, ridge, lasso, and elastic net, are implemented through Python.
>
> **[0:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=45)** So what you're going to have to do is take advantage of what are called extensions.
>
> **[0:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=50)** Let me show you what I mean.
>
> **[0:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=52)** Let's go over to ridge, the first one in the list.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=55)** And it says that the linear ridge regression dialogue box is an extension procedure that requires the extension module.
>
> **[1:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=64)** No problem, so we're going to go to the Extension Hub and notice that up here in the upper left hand corner it has LRR for linear ridge regression and it's searching only for that.
>
> **[1:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=79)** So let me delete that and say more generally regression, we actually see there's a bunch, but we're only interested in the top three, the same three that we saw in those alternatives to OLS regression.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=98)** Going to check that off.
>
> **[1:39](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=99)** We're going to check this off.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=100)** We're going to check that off.
>
> **[1:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=102)** There's the third one.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=103)** Before we proceed, I want to draw your attention to the fact that all three of these involve Python 3.0, but if you were to scroll down you'd find some, possibly involve R, like the regression discontinuity analysis and so on, and you're certainly welcome to explore those.
>
> **[2:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=121)** But we're going to look at these top three, elastic net, lasso, and ridge regression.
>
> **[2:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=127)** So now we're going to click on OK.
>
> **[2:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=131)** It's got some terms and conditions, not surprisingly, we're going to click on accept.
>
> **[2:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=136)** Click on next.
>
> **[2:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=139)** Accept again.
>
> **[2:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=141)** Click on finish.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=143)** That will take a couple of moments.
>
> **[2:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-is-the-extension-hub?u=76281980&t=145)** And then in the next video we're going to start with ridge regression.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (1), delete (1)
> **UI Navigation:** click on (4), go to (1), scroll down (1)
> **Env Vars:** spss (2), ols (2), lrr (1)
> **CLI Commands:** find (2), python (2)
> **Versions:** python 3 (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Ridge regression
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=0)** - [Instructor] So let's see it in action.
>
> **[0:03](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=3)** We want to go back to our dataset and then notice, we still have this filter, okay?
>
> **[0:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=10)** So we can go into the menus and remove the filter or we can actually delete it here.
>
> **[0:18](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=18)** That also does the job.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=19)** So now we're back to using all of our data.
>
> **[0:21](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=21)** This is important because the selection was just for demonstration purposes.
>
> **[0:28](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=28)** Ridge regression is going to choose its own 70%, so we wouldn't want to accidentally leave that on.
>
> **[0:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=35)** Let's go up to the menus now.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=38)** Remember, they're right in the same regression menu under linear OLS alternatives and we're going to do the first one, Ridge.
>
> **[0:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=47)** Waste_tons is going to be our dependent.
>
> **[0:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=51)** Here's the five variables down to covariates.
>
> **[0:54](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=54)** And then notice here on the bottom right, it's referring to randomly assigning cases to partitions.
>
> **[0:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=59)** It's doing something like what I demonstrated with the regular OLS regression.
>
> **[1:07](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=67)** That will give you a little bit of flavor for the theory.
>
> **[1:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=70)** Let's go ahead and take a look at the output.
>
> **[1:13](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=73)** It's running.
>
> **[1:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=75)** And notice that the menus look just like SPSS even though we're running Python now basically.
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=82)** And the output looks just like regular SPSS.
>
> **[1:25](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=85)** And if we look, as predicted, the coefficients have come way down.
>
> **[1:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=90)** We don't have anything at 10,000 or above like we had before.
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=96)** The R squared has come down a little bit.
>
> **[1:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=98)** It was over 90 before, it's at 87.
>
> **[1:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=100)** But this isn't a great model.
>
> **[1:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=103)** The holdout R squared is awful, for instance and we just don't have enough information to know yet whether or not ridge regression has worked its magic and that we have a better model.
>
> **[1:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=115)** And there's a reason for that.
>
> **[1:57](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=117)** Notice that next to the R squared, it says alpha, and we haven't talked about what alpha is.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=122)** We have this sense that the coefficients are going to come down.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=126)** Specifically, there's a penalty that's being applied.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=130)** Note in one of the footnotes, it's referring to the fact that the intercept is not penalized.
>
> **[2:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=135)** So what's the notion of this penalty?
>
> **[2:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=137)** Well, the penalty, again is a penalty to the coefficients to bring the accuracy down, but to increase the stability.
>
> **[2:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=143)** But what number should alpha be?
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=147)** Why is it one here?
>
> **[2:29](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=149)** Let's return to the menus to discuss just that.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=152)** So we'll go up here over to our menu, back to Ridge
>
> **[2:40](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=160)** and we're going to go over to options for the first time.
>
> **[2:43](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=163)** And what we discover is that by default, it's one but we could increase that.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=168)** And the more we increase it, the more we increase the penalty.
>
> **[2:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=173)** And you can't simply apply logic to determine what alpha should be.
>
> **[2:59](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=179)** It's best done by experiment.
>
> **[3:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=182)** So what we can do is we can search for it, we can do a grid search, and that's what alpha selection versus cross-validation is referring to.
>
> **[3:11](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/ridge-regression?u=76281980&t=191)** And we're going to see that in the next example.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), delete (1), default, (1)
> **Env Vars:** ols (2), spss (2)
> **Analogies:** just like (2), for instance (1)
> **Cross-References:** go back to (1), in the next (1)
> **CLI Commands:** python (1)
> **Tools:** notion (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Lasso and elastic net
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=0)** - [Instructor] We're going to stay in the waste dataset, and now we're going to go up to analyze, regression, linear OLS alternatives, and our second choice, lasso.
>
> **[0:12](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=12)** So when you look at this, it looks so similar to ridge that you really can't tell the difference.
>
> **[0:19](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=19)** Let's populate the variables here.
>
> **[0:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=26)** Everything's identical so far.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=30)** And go to options, and this looks very, very similar as well.
>
> **[0:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=33)** So what's the difference between the two?
>
> **[0:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=36)** Well, there's 2 differences that are noteworthy.
>
> **[0:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=38)** It's a different kind of penalty that's being applied, and then the second difference that's worth mentioning is that while Ridge has the coefficients approach 0 when they're not a good predictor, they can actually achieve 0 in lasso.
>
> **[0:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=55)** So some folks favor it as a data reduction technique, but I'm actually going to click on cancel and not proceed, because we're about to practice the grid search.
>
> **[1:08](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=68)** And we're going to do the grid search in elastic net, and it will make sense in a moment why we want to jump to elastic net.
>
> **[1:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=83)** You may find, and here are the variables already populated, and here are the options already populated.
>
> **[1:33](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=93)** The reason that I've preloaded this is that we're going to do such a thorough search that it takes quite a few seconds, and on some machines, maybe longer than that, for this to run.
>
> **[1:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=104)** So I've preloaded it and it's already in the output.
>
> **[1:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=107)** Here's why we're jumping to elastic net.
>
> **[1:51](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=111)** You certainly could try all 3, ridge, lasso, and elastic net on your data.
>
> **[1:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=116)** But what makes elastic net unique is it's a combination of ridge and lasso.
>
> **[2:02](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=122)** As we've seen, ridge and lasso look very, very similar.
>
> **[2:06](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=126)** They just have a different type of penalty under the hood.
>
> **[2:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=130)** Well, what elastic net does is both penalties, and you can search all the possible values for the ridge regression penalty, then you can search the possible values for the lasso penalty and find the best combination of the two.
>
> **[2:27](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=147)** So that's why I've chosen elastic net to practice our grid search.
>
> **[2:32](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=152)** So what I've done is the L1 ratio is the one associated with lasso, and that has to go from 0.1 to 1, and I've chosen an increment of 1 to do it.
>
> **[2:47](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=167)** It can't be 0.
>
> **[2:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=168)** SPSS won't let you do that, and it has a maximum value of 1.
>
> **[2:52](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=172)** Now, if we go down here to the alpha, in elastic net, this is sometimes called the L2 penalty to contrast the two.
>
> **[3:01](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=181)** L1, which we've just talked about, is associated with lasso, and the alpha here is associated with ridge.
>
> **[3:10](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=190)** I'm starting it with a minimum of 1, which you might recall is the default.
>
> **[3:15](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=195)** Then I'm taking it all the way up to 100 in increments of 1.
>
> **[3:20](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=200)** I'm going to click on cancel, because I've already run this.
>
> **[3:26](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=206)** We're going to go over to the output, and here it is.
>
> **[3:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=210)** So you can see that we've got a set of coefficients.
>
> **[3:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=215)** We'd want to be looking at the unstandardized coefficients here.
>
> **[3:38](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=218)** These are the coefficients that have been calculated for us.
>
> **[3:42](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=222)** Over here on the left, we can see the L1 ratio and the alpha.
>
> **[3:50](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=230)** So that means that, as far as lasso is concerned, it's searched from 0.1 to 1 and chose 0.9, meaning it's the high end of that, it's applying a fairly large lasso-style penalty.
>
> **[4:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=249)** Perhaps because it went with a higher L1 ratio, the alpha didn't go up.
>
> **[4:17](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=257)** Now, when you try this, you're going to get different numbers, because remember, there's a holdout here, and sometimes it won't be very successful, because even ridge, lasso, and elastic net are going to have a hard time with a dataset that has this much multilinearity.
>
> **[4:35](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=275)** But on this particular run, you can see that the training R squared is 70% of variance explained, and the holdout is about 52.
>
> **[4:46](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=286)** That's actually not bad.
>
> **[4:48](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=288)** If you were to try this multiple times, you would find that that's actually a pretty good run.
>
> **[4:53](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=293)** So there you have it.
>
> **[4:55](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/lasso-and-elastic-net?u=76281980&t=295)** There's much, much more to say about this, but now you know that there's some really powerful additional algorithms available to you powered by Python, and they look just like SPSS in the menus, in the dialogs, and in the output.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (3), let (2), default. (1), this. (1)
> **CLI Commands:** find (3), make (1), python (1)
> **Env Vars:** spss (2), ols (1)
> **Versions:** 0.1 (2), 0.9 (1)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** similar to (1), just like (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### 9. Conclusion

#### What's next
> [LinkedIn Learning](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=0)** - [Instructor] So what's up next for you on your learning journey?
>
> **[0:04](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=4)** I want to make some suggestions.
>
> **[0:05](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=5)** To start, go grab a practice data set, preferably one that's new to you, and try out some of the skills you've just learned.
>
> **[0:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=14)** But what about another course to consider?
>
> **[0:16](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=16)** Well, there are several directions in which you could go, but I'm going to start you off by suggesting three.
>
> **[0:23](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=23)** First, since you have an interest in SPSS, there's an SPSS learning path.
>
> **[0:30](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=30)** Now, note, this learning path includes courses on both SPSS statistics as well as SPSS' predictive analytics and machine learning sibling, SPSS Modeler.
>
> **[0:44](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=44)** So if you want to stay focused on algorithms within that learning path, "[[Machine Learning and AI Foundations- Classification Modeling]]" might be perfect.
>
> **[0:56](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=56)** Now, if you want to stay more focused on theoretical foundations, I've done a pair of courses on causal inference, and the course you've just completed would be the perfect gateway to those two courses.
>
> **[1:09](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=69)** They are both in the machine learning and AI foundation series.
>
> **[1:14](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=74)** The first is "Prediction, Causation, and Statistical Inference," and the second is "Causal Inference and Modeling."
>
> **[1:22](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=82)** Finally, if you want to build upon your new regression skills by exploring new areas like machine learning and predictive analytics, I'd recommend "[[Predictive Analytics Essential Training- Data Mining]]."
>
> **[1:36](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=96)** Whichever you choose, I hope you'll stay in touch by following me on LinkedIn, and signing up to watch my monthly office hours.
>
> **[1:45](https://www.linkedin.com/learning/machine-learning-ai-foundations-linear-regression/what-s-next-22620172?u=76281980&t=105)** If you see me at a conference, I hope you'll say "Hi."

> [!info]- Semantic Content
>
> **Env Vars:** spss (5)
> **CLI Commands:** make (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith McCormick]]

## Resources

- Exercise files available

## Skills Covered

- Machine Learning
- Artificial Intelligence (AI)
- Linear Regression

## Path Context

### In [[Develop Your SPSS Skills]]
← [[Spss Wrangling Visualizing And Modeling Data]] | **2 of 6** | [[Machine Learning and AI Foundations- Classification Modeling]] →

## Appears In

- [[Develop Your SPSS Skills]]

## Related Courses

_Courses sharing skills:_

- [[Machine Learning and AI Foundations- Clustering and Association]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI- Advanced Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Decision Trees with SPSS]] — Artificial Intelligence (AI), Machine Learning
- [[Machine Learning and AI Foundations- Classification Modeling]] — Artificial Intelligence (AI), Machine Learning
- [[Advanced Python in Excel- Machine Learning]] — Artificial Intelligence (AI), Machine Learning

---

[↑ Back to top](#)