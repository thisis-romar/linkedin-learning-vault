---
type: course
cssclasses:
  - lle-course
slug: excel-statistics-essential-training-2-22879835
url: "https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835"
duration_minutes: 204
duration: 3h 24m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEuHafUW6Iylg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696279038859?e=2147483647&amp;v=beta&amp;t=UpPvGVrMkRh8YiRsBUa8j_fDum9EsWXw86AH14Hf7Dc"
linkedin_topic: Data Science
learning_paths:
  - '[[Statistics Foundations Professional Certificate by Wolfram Research]]'
prev_courses:
  - '[[Excel Statistics Essential Training- 1]]'
next_courses:
  - '[[Statistical Analysis with Wolfram Language]]'
path_nav: '[{"path":"Statistics Foundations Professional Certificate by Wolfram Research","position":6,"total":7,"prev":"Excel Statistics Essential Training- 1","next":"Statistical Analysis with Wolfram Language"}]'
path_count: 1
tags:
  - course
  - topic/data-science
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Excel%20Statistics%20Essential%20Training-%202.md)

![Excel Statistics Essential Training: 2](https://media.licdn.com/dms/image/v2/D560DAQEuHafUW6Iylg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696279038859?e=2147483647&amp;v=beta&amp;t=UpPvGVrMkRh8YiRsBUa8j_fDum9EsWXw86AH14Hf7Dc)

# Excel Statistics Essential Training: 2

> Data isn’t valuable until you figure out what the data actually mean. Statistics transforms data into meaningful information, enabling organizations to make more informed decisions. That’s why statistics—collecting, analyzing, and presenting data—is a valuable skill for anyone in business or academia. In this course, LinkedIn Learning statistics and business analysis instructor Eddie Davila takes 

> [LinkedIn Learning](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835) | 3h 24m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Using Excel for statistics](#using-excel-for-statistics)
  - [What you need to know](#what-you-need-to-know)
  - [Exercise files](#exercise-files)
  - [Tool pack](#tool-pack)
- [**1. Sampling**](#1-sampling) (3 videos)
  - [Sample considerations](#sample-considerations)
  - [The central limit theorem](#the-central-limit-theorem)
  - [T-statistic vs. z-statistic](#t-statistic-vs-z-statistic)
- [**2. Confidence Intervals**](#2-confidence-intervals) (3 videos)
  - [Introduction to confidence intervals](#introduction-to-confidence-intervals)
  - [Creating confidence intervals in Excel (proportions)](#creating-confidence-intervals-in-excel-proportions)
  - [Creating confidence intervals in Excel (means)](#creating-confidence-intervals-in-excel-means)
- [**3. Hypothesis Tests**](#3-hypothesis-tests) (5 videos)
  - [How to test a hypothesis](#how-to-test-a-hypothesis)
  - [Five steps of hypothesis testing](#five-steps-of-hypothesis-testing)
  - [One-tailed vs. two-tailed tests](#one-tailed-vs-two-tailed-tests)
  - [Hypothesis test exercise (means)](#hypothesis-test-exercise-means)
  - [Hypothesis test exercise (proportions)](#hypothesis-test-exercise-proportions)
- [**4. Comparing Two Populations**](#4-comparing-two-populations) (3 videos)
  - [Explanation of two population comparisons](#explanation-of-two-population-comparisons)
  - [Comparing two populations (proportions)](#comparing-two-populations-proportions)
  - [Comparing two populations (means)](#comparing-two-populations-means)
- [**5. ANOVA: Analysis of Variance**](#5-anova-analysis-of-variance) (2 videos)
  - [ANOVA: What is analysis of variance?](#anova-what-is-analysis-of-variance)
  - [Hypothesis test and the F-statistic](#hypothesis-test-and-the-f-statistic)
- [**6. Regression**](#6-regression) (3 videos)
  - [What is regression?](#what-is-regression)
  - [Regression terminology](#regression-terminology)
  - [Linear regressions](#linear-regressions)
- [**7. Simulation**](#7-simulation) (3 videos)
  - [What are simulations?](#what-are-simulations)
  - [Monte Carlo simulation example](#monte-carlo-simulation-example)
  - [Business simulation example](#business-simulation-example)
- [**Conclusion**](#conclusion) (1 videos)
  - [Continue learning Excel statistics](#continue-learning-excel-statistics)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Excel for statistics](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=0)** - Data is just data until you figure out what the data means.
>
> **[0:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=4)** Being able to perform [[Statistical Analysis]] in [[Microsoft Excel|Excel]] is something companies and research organizations need every day.
>
> **[0:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=12)** Perhaps now more than ever.
>
> **[0:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=14)** If you're looking to crack topics like regression, hypothesis tests, ANOVA and Monte Carlo simulations, and Excel is your tool of choice, you've come to the right place.
>
> **[0:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=26)** Hi, I'm Eddie Davila, and I love working in [[Statistics]] and Excel.
>
> **[0:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=31)** In this course, you'll discover how Excel can help you tackle and then interpret advanced statistical analysis.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/using-excel-for-statistics?u=76281980&t=38)** Join me and start figuring out what data means today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Statistical Analysis]] (2), [[Statistics]] (1)
> **Env Vars:** anova (1)
> **Speakers:** - data (1)

#### [What you need to know](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=0)** - [Narrator] Welcome to [[Microsoft Excel|Excel]] [[Statistics]] Essential Training two.
>
> **[0:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=4)** In this class, we'll tackle both intermediate, as well as a few advanced statistics topics.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=10)** We'll be building upon topics that were discussed in Excel Statistics Essential Training number one.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=17)** While it'd be great for you to understand everything in that course if you forgot some of those topics, not to worry, I'll provide some refreshers when needed.
>
> **[0:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=26)** And for brand new topics I'll be sure to provide a user-friendly explanation.
>
> **[0:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=31)** Yes, having some basic Excel literacy is helpful, knowing how to enter formulas, being a bit familiar with the menus.
>
> **[0:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=39)** So if you have any experience with Excel and you follow along with my screen directions, you should be fine.
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=47)** Nonetheless, if you want a bit more comfort, consider watching parts of the Excel Essentials Training course.
>
> **[0:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-you-need-to-know?u=76281980&t=53)** But if you just want to get started, let's just do it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Statistics]] (3)
> **Speakers:** - [narrator] (1)

#### [Exercise files](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=0)** - [Instructor] Hi there, I just wanted to remind you that the exercise files that come with this course, they're meant for you to follow along with my work and the videos, and they're there so you can practice working with [[Statistics]] in [[Microsoft Excel|Excel]].
>
> **[0:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=12)** Each one is named with the chapter number followed by the video number.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=17)** For example, this particular file is named 01_01_Sample, and it'll be used in chapter one, video number one.
>
> **[0:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=26)** By the way, I'll be working in Excel on a Mac.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=29)** Your version of Excel may be a bit newer or older, or perhaps you're working on a PC.
>
> **[0:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=35)** Nonetheless, most of what I'll be doing on Excel will be the same, or at least very similar to what you'll see in your version of Excel.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=44)** In some cases, the menu items might be in slightly different spots, but if you pause and search, you should be able to find what you need.
>
> **[0:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=53)** Also, remember, in the world of statistics and also in the world of Excel, there are usually multiple ways to arrive at the same solution.
>
> **[1:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=61)** All that being said, please be sure to download those exercise files.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=65)** Excel and statistics, they require practice.
>
> **[1:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=68)** They require you to do the work on your own.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/exercise-files?u=76281980&t=71)** Those files will really help you as you go through this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (7), [[Statistics]] (3)
> **Exercise Files:** exercise files (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Tool pack](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=0)** - [Lecturer] All right, since we'll be performing some intermediate and advanced statistical functions in [[Microsoft Excel|Excel]], you're going to need one of the Excel analysis tools.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=8)** It's called the Analysis ToolPak.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=10)** It doesn't come installed in all versions of Excel, but activating the ToolPak is very easy.
>
> **[0:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=16)** Depending on your version, there's probably more than one way to install the Analysis ToolPak.
>
> **[0:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=21)** In this version of Excel, go to the top of the screen.
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=25)** Click on tools, scroll down, find Excel add-ins, check the box that says Analysis ToolPak, and click okay.
>
> **[0:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=37)** And that's it.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=38)** And then, you'll be able to find it here under data.
>
> **[0:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=43)** There's data analysis.
>
> **[0:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=46)** And that's another way to do it.
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=47)** You can click on analysis tools here.
>
> **[0:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=50)** So again, if you have not installed it, you can click on data.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=54)** You can go to analysis tools, and I'm going to uninstall it.
>
> **[1:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=60)** Now, it's gone.
>
> **[1:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=63)** And now, it's back.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=65)** By the way, when it's time to use the Analysis ToolPak here in the data, that's where you're going to find it.
>
> **[1:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=72)** To use the ToolPak, click on data analysis.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=76)** And then, you'll see a menu come up with a number of different tools.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=81)** We'll be learning how to use a number of those tools in this course.
>
> **[1:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=85)** That's it.
>
> **[1:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=86)** If you have the Analysis ToolPak activated, you are all ready to go.
>
> **[1:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/tool-pack?u=76281980&t=90)** So let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5)
> **UI Navigation:** click on (4), go to (2), scroll down (1)
> **CLI Commands:** find (3)
> **Prerequisites:** install (1)
> **Speakers:** - [lecturer] (1)


### 1. Sampling

[↑ Back to Table of Contents](#table-of-contents)

#### [Sample considerations](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=0)** - [Instructor] Inference, what does that mean?
>
> **[0:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=2)** Well, it means that we reach a conclusion, a conclusion based on evidence.
>
> **[0:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=9)** This course is largely about statistical inference, which means that in this [[Statistics]] course, we'll make some evidence based conclusions.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=17)** So what will we use as evidence?
>
> **[0:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=20)** Samples.
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=22)** Let me explain.
>
> **[0:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=23)** Suppose we want to know the average height of females in a certain city.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=27)** Well, that poses some problems.
>
> **[0:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=30)** Which problems, well, we don't have the time nor the money to measure everyone's height, and most people probably aren't willing to let us measure their height.
>
> **[0:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=39)** And this is where samples come in.
>
> **[0:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=42)** By taking a small group, a sample of women and getting their heights, we can use this as evidence to draw some conclusions about the average height of women in the city.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=54)** That said, there's some things to consider.
>
> **[0:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=58)** First, what's the sample size?
>
> **[1:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=61)** In a city of about 25,000 women, how many women's heights would you need?
>
> **[1:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=66)** 100 women, 1,000, 10,000?
>
> **[1:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=70)** Needing only 100 women's heights would be great.
>
> **[1:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=74)** A small sample size is cheaper and faster to collect, but small sample sizes often have large margins of error.
>
> **[1:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=83)** Remember, we want solid evidence to draw our conclusions.
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=88)** Second, what's your selection process?
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=92)** Suppose you said 250 women's heights would be a good sample size.
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=97)** Well, how will you choose the 250 women?
>
> **[1:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=100)** Will you choose women that go to the doctor's [[Microsoft Office|office]]?
>
> **[1:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=102)** Women leaving the grocery store?
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=105)** Maybe you can try phone surveys or perhaps use a paid survey.
>
> **[1:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=109)** We pay women to get their heights measured.
>
> **[1:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=113)** I'm not sure any of those is a viable idea.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=115)** And even if they were, each of those selection options is flawed.
>
> **[2:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=121)** Which brings us to our third issue, bias.
>
> **[2:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=125)** There are many ways samples can be biased.
>
> **[2:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=128)** There's selection bias.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=129)** If we select women at the doctor's office, we may be measuring women that are healthier or sicker or perhaps more wealthy than most other people.
>
> **[2:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=138)** Phone surveys are biased toward people that answer their phones.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=142)** Paid surveys bring in people that want money.
>
> **[2:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=146)** And then there's polling bias.
>
> **[2:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=150)** If we survey people outside the grocery store, perhaps our pollster is more likely to ask kinder looking women, more attractive women, or women that are similar to our pollster.
>
> **[2:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=164)** A fourth issue to consider, methodology.
>
> **[2:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=167)** How are we measuring?
>
> **[2:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=169)** Are we using a ruler, a tape measure, a stadiometer?
>
> **[2:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=172)** Are we letting people keep their shoes on?
>
> **[2:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=175)** Is our pollster reminding people to stand up straight?
>
> **[2:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=178)** In other words, are we being very careful or are we a bit sloppy?
>
> **[3:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=183)** In essence, our goal is to collect the best sample possible because we want solid evidence so we can make an informed conclusion.
>
> **[3:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=192)** The best possible sample is what statisticians call the simple random sample.
>
> **[3:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=198)** But gathering a simple random sample is not that simple.
>
> **[3:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=202)** Actually, it's quite difficult.
>
> **[3:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=204)** Why?
>
> **[3:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=205)** Well, a simple random sample must exhibit two key characteristics.
>
> **[3:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=209)** The sample must be unbiased, and the data points must be independent.
>
> **[3:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=215)** We already discussed bias, making sure every person selected is actually randomly selected.
>
> **[3:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=221)** That is very difficult.
>
> **[3:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=224)** Where we collect data, when and how we collect data, who's collecting the data, there are so many ways bias can creep into our sample.
>
> **[3:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=233)** And then there's independence, the data in the sample must exhibit independence.
>
> **[3:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=239)** What does this mean?
>
> **[4:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=240)** It means that the selection of one participant must not influence the selection of other participants.
>
> **[4:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=248)** Suppose we pay women to participate in our study.
>
> **[4:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=251)** Is it possible a person that volunteers tells their friends about this paid opportunity?
>
> **[4:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=257)** If so, now we have numerous people from the same friend group.
>
> **[4:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=262)** One participant just influenced the selection of other participants.
>
> **[4:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=268)** In this course, you won't need to gather data, you'll be given data sets, but often to see our statistics concepts in action, you'll be asked to gather sample data, simple random samples, of course, from the population of data we provide.
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=284)** Luckily we have [[Microsoft Excel|Excel]] and gathering a simple random sample from a population in Excel is actually quite simple.
>
> **[4:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=292)** Let's head on over to Excel to choose some random samples.
>
> **[4:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=297)** So as you can see in our exercise file, we have given you a lot of different exam scores here, 228, it seems to be exact.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=306)** Now what we want to do here is we want to grab a sample of 10 scores, and there's one really easy way to do this.
>
> **[5:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=313)** You can go into Data, click on Data Analysis, and of course we're going to choose Sampling.
>
> **[5:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=324)** We click OK.
>
> **[5:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=325)** And now it's saying, well, what do you want to grab?
>
> **[5:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=327)** Well, we want to grab from our input range D, and we are using labels, so I have that clicked.
>
> **[5:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=338)** We don't want periodic samples, we want the best possible samples, we want a random sample and we want a sample of 10 numbers from this column.
>
> **[5:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=347)** And we're going to put the numbers, let's see, where do we want to put those?
>
> **[5:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=352)** We'll put 'em right here in F8.
>
> **[5:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=355)** And let's go ahead and click OK.
>
> **[5:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=358)** And just like that, I have a sample with 10 scores in it.
>
> **[6:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=362)** If I want to do this again, I can do it again very quickly here, Sampling, OK.
>
> **[6:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=368)** Let's only grab five this time.
>
> **[6:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=371)** I'll put range, I'm going to put them in a different spot.
>
> **[6:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=373)** I'm going to put them right here and we click OK.
>
> **[6:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=378)** And there you go, so that's one way to do it.
>
> **[6:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=381)** Another way to do it is we can use a random number.
>
> **[6:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=387)** So I'm going to type in rand, open parentheses, close parentheses, and this is going to generate a random decimal.
>
> **[6:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=396)** Now what I can do is then copy this down, click on this box twice, and now it's given a random number to every single one of the students and the test scores.
>
> **[6:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=409)** What I'm going to do is I'm going to copy, and I'm going to do a Paste Special, Values.
>
> **[6:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=415)** And I've now locked in those random numbers.
>
> **[6:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=418)** And what I'm going to do is going to say, you know what, the 10 scores I'm going to take are the people that randomly just got the lowest numbers.
>
> **[7:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=428)** And there we go.
>
> **[7:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=430)** This is my sample of 10.
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=437)** Maybe you want to do it the other way.
>
> **[7:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=438)** I'm going to take the biggest numbers.
>
> **[7:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=441)** So now here is a second sample of 10 with the biggest numbers, and here are my scores, here are my scores.
>
> **[7:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=450)** The nice thing is I actually know who contributed these scores as well.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=455)** Yet another way to do this is by using an index function.
>
> **[7:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=459)** So as you can see right here, we are going to use this formula right here, index, and the array, which I'm going to grab data from is right here.
>
> **[7:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=472)** We know that there are, well actually, let's double check.
>
> **[7:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=475)** Before we do that, how many scores do we have?
>
> **[7:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=478)** Let's count 'em up, 228, all right, so this is going to go from D2 down to D229 because we have a label here.
>
> **[8:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=491)** So we now know that this is going to be index.
>
> **[8:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=493)** We want to go and grab a number that's in this range from D2 to D229.
>
> **[8:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=501)** And the next thing is, well, we want it to be at random, any one of those, so I'm going to do a rand between of one of the scores between the first one and the 228th one in the group, close up my parentheses.
>
> **[8:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=519)** Now I'm going to be using this formula to gather a number of samples.
>
> **[8:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=523)** So what I'm going to do is I'm going to lock these in 'cause I'm always going to be grabbing from the same array, and I'm going to apply my dollar signs here.
>
> **[8:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=533)** And so that's going to lock that in.
>
> **[8:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=536)** I click this and there we go.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=538)** I just grabbed a sample of five by copying across.
>
> **[9:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=545)** And if I copy this down, I've now grabbed a sample, five samples, and each with five.
>
> **[9:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=551)** You know, the thing is that, as you know, when you use any random number here, every single time I change the page at all, it grabs different random numbers.
>
> **[9:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=559)** So what I can do is if I like the samples I have right here, I just copy and I do a Paste Special, and those values have now been locked in.
>
> **[9:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=569)** Now, the thing that concerns people about this right here is they say, wait a second, I don't know where these scores came from, I don't know which student contributed that score, I don't know if there's duplicates in here.
>
> **[9:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=579)** So there's another way to do this.
>
> **[9:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=582)** Let's first find out where we're going to grab the data from.
>
> **[9:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=585)** So what I've done is I've created this column over here for you that's called index, and the number just goes in order from 1 to 228.
>
> **[9:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=597)** So the first thing I'm going to do is I'm going to say, well, I'm going to pick a row at random, it could be any one of those, 1 and 128.
>
> **[10:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=603)** So what we're going to do is we're going to type in this formula here, and we're going to grab a number from this particular column over here.
>
> **[10:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=613)** So our array is going to go from the first number in that index column down to the last number.
>
> **[10:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=621)** And we know there's 228 scores, so it's going to take us down to A229.
>
> **[10:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=627)** And next thing we want to do is we want to grab any one of those numbers at random, any number between 1 and 228.
>
> **[10:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=638)** And we close this up and it's now at random just choosing a number that's in this particular column.
>
> **[10:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=646)** And what we're going to do, we want to grab the associated exam score.
>
> **[10:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=653)** And so what we'll do is we'll create a formula over here, and it's going to say, all right, I'm going to grab a number.
>
> **[11:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=660)** I want to index a number from this column right here and it's going to go down to D229, and which number do I want?
>
> **[11:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=671)** I want the one that I just pulled up here at random and I hit Return.
>
> **[11:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=676)** And one thing I want to do before I move on is because I'm always going to be grabbing numbers from this area, I want to add my dollar signs.
>
> **[11:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=686)** And I am going to do the same thing over here.
>
> **[11:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=688)** I'm always going to be grabbing numbers from the exam score column in this area, so I'm going to add my dollar signs there as well.
>
> **[11:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=697)** And so what this allows me to do is I can now just copy this, right, copy this down.
>
> **[11:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=708)** You can also do it by clicking the little box here.
>
> **[11:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=715)** And what I now know is that every single time, again, every time I change this, the numbers change, and you might say to yourself, how do I know that the numbers are actually working out?
>
> **[12:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=726)** So I'm looking at the 32nd score.
>
> **[12:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=731)** The 32nd score in the group is this one right here, A93.
>
> **[12:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=735)** And that does match up.
>
> **[12:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=739)** And again, if you're worried about things changing, you can always Copy, Paste Special Values and now you've locked those in.
>
> **[12:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/sample-considerations?u=76281980&t=750)** All right, so we found a number of different ways to find simple random samples from the data populations that were given in Excel, and we'll be using some of these throughout the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Statistics]] (2), [[Microsoft Office|Office]] (2)
> **Definitions:** means that (3), is a  (2), in other words (1)
> **Env Vars:** d229 (3), a229 (1), a93 (1)
> **CLI Commands:** make (2), find (2)
> **UI Navigation:** click on (2), go to (1)
> **Analogies:** similar to (1), just like (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [The central limit theorem](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=0)** - [Instructor] The central limit theorem, it's a rather simple concept that is sort of intuitive, but with some interesting and helpful twists.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=10)** We've already started to discover that when we take a sample, the larger our sample size, the more confident we are in our sample.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=17)** Confident about what?
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=19)** Confident that this one sample reflects the entire population.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=24)** But the central limit theorem takes this a bit further.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=29)** The central limit theorem goes on to tell us that the more samples we take, the closer the average of our sample means will get to the actual population mean.
>
> **[0:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=40)** So, if we take one sample with a reasonable sample size, we have some evidence.
>
> **[0:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=46)** If we take lots of samples, the evidence starts to point us closer and closer to the truth.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=54)** But the central limit theorem actually tells us a bit more.
>
> **[0:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=57)** It says that as we start to take many more samples, dozens of samples, hundreds of samples, even thousands of samples, the sample means if we plotted them as a histogram, they would begin to look more and more like a normal distribution.
>
> **[1:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=74)** But it goes one step further.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=76)** If we take hundreds of random samples with a small sample size of four, the distribution might look like this.
>
> **[1:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=85)** And that's if we use a sample size of only four data points.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=91)** But look what happens when we take hundreds of random samples with a sample size of 50.
>
> **[1:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=99)** The distribution starts to look like this.
>
> **[1:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=102)** The curve is getting taller and more narrow, which means a larger sample size gives us a smaller standard deviation.
>
> **[1:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=112)** Let's actually see this inaction by using [[Microsoft Excel|Excel]].
>
> **[1:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=116)** Okay, so what are we looking here?
>
> **[1:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=118)** What you have been given is a population of data, 950 students, and you have a course grade for 950 students.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=129)** We also know that the max course grade among these 950 students is 999 points and the lowest course grade among these 950 students is 347.
>
> **[2:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=144)** Let's go ahead and figure out what the population mean is of these scores.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=148)** So, we're going to do an average of everything in column D, so we can see that the average course grade is 706.2.
>
> **[2:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=161)** Next thing what we want to do is we want to see what types of course grades we have in this particular class.
>
> **[2:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=166)** So, we're going to build a frequency table, and so we're going to use our frequency function, and then we have to tell it that we want to gather data from this particular column.
>
> **[2:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=179)** And we're going to use the bins that we have here from F6 down to right there, about F20.
>
> **[3:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=189)** Close that up, and it has now told us how many scores we have in each particular bin.
>
> **[3:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=196)** And if you don't remember, this is telling us right here that between 301 and 350 we have one score.
>
> **[3:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=205)** Between 351 and 400, we have three scores, and so on.
>
> **[3:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=211)** All right, next thing we want to do is we want to build a histogram out of this particular data.
>
> **[3:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=217)** So, what we're going to do is we're going to go over to, well, first thing we'll do is we'll grab this data right here.
>
> **[3:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=224)** Next thing I'm going to do is going to go to Insert and we're going to let it recommend some charts for us and we'll use this one right here.
>
> **[3:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=235)** So, what this has done is it told us what the distribution of our course grades looks like.
>
> **[4:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=244)** All right, so let's move on to the next thing.
>
> **[4:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=245)** Now what we're going to do is we're going to gather a random sample, and what we're going to do is we're going to use the index function, which we have seen before.
>
> **[4:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=254)** We're going to grab our data from our exam scores, so it's which they start here at D2 and it goes all the way down to, we know there's 950 exam scores and we have a label up there, so it's going to go down to D951.
>
> **[4:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=269)** And because we're going to be using this over and over again, I'm going to lock these cells in.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=278)** Next thing we need to do is gather one of those numbers at random.
>
> **[4:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=282)** So, we're going to use the randbetween and we want to gather an exam score between the first exam score and the 950th exam score.
>
> **[4:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=295)** And there we go, we have one of our exam scores.
>
> **[4:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=297)** Now we want to do this, we want to gather some big samples today.
>
> **[5:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=302)** So, let's go ahead and we're going to copy this all the way over to the right.
>
> **[5:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=311)** So, we'll have a sample of 36 different readings, we can also copy this down, and look what we just did.
>
> **[5:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=320)** We now have 10 samples and each sample has up to 36 course grades in them.
>
> **[5:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=329)** Now the next thing I want to do is say, "Well, not all my samples are big.
>
> **[5:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=333)** Sometimes we have small samples, sometimes they have medium size, sometimes they're a little bit bigger."
>
> **[5:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=337)** So, I'm going to say, "Well, what would happen if we said our sample was only a sample size of four?
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=344)** So, n is equal to four, what would be the mean?"
>
> **[5:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=348)** So, we're going to use our average, but I only want the average of the first four.
>
> **[5:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=353)** Or how about if I want the average of the first 16 scores?
>
> **[6:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=363)** Or how about if I want the average of all 36 scores?
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=374)** And what we would expect is that the larger the sample size, the closer we're getting to our population mean.
>
> **[6:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=380)** And it doesn't always happen, but it should happen most of the time.
>
> **[6:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=384)** What I'm going to do is I'm going to do this for all of our samples, so I'm going to copy this down.
>
> **[6:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=390)** And the next thing that we want to do is we want to take the average of our averages, the mean of our means, so we'll do that right here.
>
> **[6:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=402)** Say, "All right, the average of all 10 of my n equals four means is this.
>
> **[6:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=414)** And the average of my n equals 16 means is the average of all of these."
>
> **[7:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=423)** And I can copy across again.
>
> **[7:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=426)** And the average of all of my n equals 36 samples is this right here.
>
> **[7:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=434)** And again, we have this rand function that's living inside of all these cells, so every single time we change something, the numbers change.
>
> **[7:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=443)** But you can sort of see already how as things are changing, this n equals 36 tends to be the one that's pretty close to our population mean.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=455)** But let's go ahead and do one thing, let's take this a step further, let's create frequency tables for our means.
>
> **[7:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=464)** So, for n equals four, I'm going to type in, I'm going to do a frequency table again, and my data array is going to be those here in L.
>
> **[7:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=475)** And then what I'm going to use as my bins are these over here.
>
> **[8:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=485)** Close that up.
>
> **[8:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=486)** Now, I'm going to be doing this for all three of my sample sizes, n equals four, n equals 16, and n equals 36, and I want my bins to stay the same so I'm going to lock those in.
>
> **[8:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=498)** And there you go, you can sort of see right now how many are falling in the bins.
>
> **[8:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=504)** And if I want, I can copy this to the right and we can see a little bit of what we're talking about, that the larger the sample size, the more and more that our distribution is getting more narrow and taller.
>
> **[8:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=522)** I'm going to show you this in one other way.
>
> **[8:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=525)** So, what we're going to do now is I'm going to grab all of these right here and then I'm going to go over to the Insert and Recommended Charts, and I'm going to use this one right here.
>
> **[9:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=546)** And notice what's happening.
>
> **[9:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=552)** The blue bars represent n equals four, the orange represents n equals 16, and the gray, that represents n equals 36.
>
> **[9:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=565)** And as I said, as we change things, what do we notice?
>
> **[9:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=570)** The blues, which are n equals four, that distribution is always rather low and rather wide.
>
> **[9:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=580)** But as we start to get the larger sample size, the orange, n equals 16, that gets a little bit more narrow and a little bit taller.
>
> **[9:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=589)** And by the time we get to n equals 36, we have a very narrow curve with a very tall center.
>
> **[9:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=598)** And again, we can sort of see this over and over again.
>
> **[10:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=609)** And there you go, the central limit in action.
>
> **[10:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/the-central-limit-theorem?u=76281980&t=613)** The larger our sample size gets, the smaller our standard deviation and the taller our curve becomes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Env Vars:** f20 (1), d951 (1)
> **Versions:** 706.2 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [T-statistic vs. z-statistic](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=0)** - [Instructor] By now, we're pretty well acquainted with the normal distribution.
>
> **[0:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=3)** We know that many populations are normally distributed.
>
> **[0:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=6)** So if we have a sample with a large sample size, and if we know the population standard deviation, we can feel comfortable using the normal distribution and finding z scores.
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=19)** But most of the time, we don't have the resources to gather a sufficiently large sample.
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=25)** And rarely do we know the population standard deviation.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=29)** Small sample sizes and no access to the population standard deviation, those are two [[Forms]] of uncertainty.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=38)** So if we gather 100 samples, and each sample has a sample size of only five data points, we start to run into a problem.
>
> **[0:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=48)** The distribution of the sample means won't exactly look like the normal distribution.
>
> **[0:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=55)** The distribution curve would be a bit more flat, and the tails would be a bit more fat.
>
> **[1:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=62)** This is not the normal distribution.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=65)** In other words, the z distribution won't work, which is why we need something called the t distribution.
>
> **[1:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=73)** The z distribution and the t distribution, how are they similar? Both are bell-shaped distributions.
>
> **[1:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=80)** Both are symmetrical around the mean.
>
> **[1:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=84)** And in both cases, the area under the curve is equal to one.
>
> **[1:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=90)** So how are they different?
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=92)** Well, the t distribution isn't one curve, but rather a series of curves.
>
> **[1:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=98)** Each curve is representative of the distribution for different sample sizes.
>
> **[1:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=103)** The smaller the sample size, the flatter the curve.
>
> **[1:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=107)** But as the sample size increases, our t distribution curves begin to look more and more like our traditional bell-shaped normal distribution curve.
>
> **[1:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=118)** So while a z distribution has only one curve, and thus only one table for z scores, since we have multiple d distribution curves, each curve must have its own table for t scores.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=132)** Here's an example of one of those tables.
>
> **[2:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=135)** It looks similar to the z table, but you'll notice something along the left side, a column labeled as DF.
>
> **[2:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=145)** This stands for degrees of freedom.
>
> **[2:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=149)** What are degrees of freedom?
>
> **[2:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=150)** The easy answer is that degrees of freedom is just our sample size minus one, also referred to as n minus one.
>
> **[2:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=158)** N is the amount of data points in our sample.
>
> **[2:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=160)** So for a sample size of five, we have four degrees of freedom.
>
> **[2:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=165)** For a sample size of ten, we have nine degrees of freedom.
>
> **[2:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=169)** Yes, there's a more complex explanation for degrees of freedom, but let's leave that for another day.
>
> **[2:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=175)** Nonetheless, even once we figure out that degrees of freedom is just n minus one, this chart still doesn't look like a whole lot of fun.
>
> **[3:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=184)** But thankfully, we have [[Microsoft Excel|Excel]].
>
> **[3:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=187)** Let's head over to Excel to see the t statistic in action.
>
> **[3:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=192)** All right, I know you're probably excited about the t score, but let's first recap and refresh ourself on the z score, because we'll be using that in this course quite a bit as well.
>
> **[3:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=201)** So what I've given you here are some course grades.
>
> **[3:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=205)** And I've already figured out for you the population mean for these course grades.
>
> **[3:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=211)** And I've given you the standard deviation for this entire population as well.
>
> **[3:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=216)** So what we're going to do, we have the population mean, we have the population standard deviation.
>
> **[3:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=222)** So that means that using a z score here is perfectly acceptable.
>
> **[3:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=227)** First thing we want to do is how do you figure out what the z score is for each particular grade?
>
> **[3:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=232)** So we can see the formula right over here, z is equal to the data point, 92, minus our population mean, which is 70.8.
>
> **[4:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=242)** And that is divided by our population standard deviation.
>
> **[4:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=245)** So let's go ahead and plug that in over here.
>
> **[4:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=250)** All right, so we now know that the z score for a course grade of 92, with a population mean of 70.8 and a standard deviation of 16.4, the z score is 1.2939.
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=261)** Now where does that sit on the distribution curve?
>
> **[4:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=264)** Well for this, we can use a formula, norm.s.dist.
>
> **[4:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=271)** And it just says, tell me what the z score is.
>
> **[4:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=275)** And we want to type in true here. Tell me what the z score is.
>
> **[4:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=280)** And I will tell you what the [[Probability]] of that score is.
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=284)** So you can see right here, this score is 90.22 percent higher than all the other scores in the distribution.
>
> **[4:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=293)** And if we want, because we can, well, first thing that we want to do is we want to make sure that if we're going to copy this down, that we lock in our population mean, which we'll be using over and over again.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=306)** And the same thing with our population standard deviation.
>
> **[5:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=311)** So now that those are locked in, this will continue to change as the z score changes, we can now copy this down.
>
> **[5:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=318)** We now have z scores for every grade in the course.
>
> **[5:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=322)** Now the next thing we want to do is I want to refresh you on how do you find z scores and how do you go from percentage to a z score and back and forth.
>
> **[5:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=330)** And what you'll notice here is I just copied this particular z score and we're going to use this over and over again since we know the probability of that z score is 0.9022.
>
> **[5:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=340)** So one thing that we can do is once somebody gives us a z score, we can do a norm.s dist and we provide the z score and we just saw this a moment ago.
>
> **[5:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=355)** And that gave us the percentage, but you can go the other way as well.
>
> **[5:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=359)** What you can do is you can use the norm.s.inv, I N V,
>
> **[6:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=367)** and provide it a probability.
>
> **[6:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=371)** And this will give you the associated z score.
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=374)** The other thing I want to show you is this norm.dist function all by itself.
>
> **[6:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=379)** And what this does is it finds the probability of a certain score.
>
> **[6:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=383)** So let's go ahead and type that in norm.dist.
>
> **[6:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=387)** And you'll notice here what this is asking us for is which data point do you want to find your z score for.
>
> **[6:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=397)** So the first thing that we're going to do is we're going to go ahead and say, well, for a score of 92 in a population that has a mean of 70.8 and a standard deviation of 16.4 on a cumulative distribution, that score right there would be in the 90.22 probability.
>
> **[7:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=423)** Again, if we want to do it the other way, let's go ahead and do norm.inv.
>
> **[7:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=432)** In this case, someone says, well, give us the probability, tell us what the standard population mean is for this particular population.
>
> **[7:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=444)** Give us the standard deviation for the population.
>
> **[7:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=449)** And we can tell you what the exam score is going to be.
>
> **[7:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=453)** The other thing that you can do that's kind of interesting with these z scores is you can use this norm.inv function.
>
> **[7:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=463)** And if somebody said to you, if I wanted to be in the 90th percentile of the class, if I wanted to be higher than 90 percent of the scores in the class, and the class average was 70.8 and the standard deviation was 16.4, a student that has a 91.8 percent on the exam is in the 90th percentile.
>
> **[8:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=488)** And that makes sense because this student right here with the 92 percent is a little bit above that.
>
> **[8:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=493)** All right, so we've now refreshed ourselves on the z score going from z scores to percentage and from percentage to z scores and finding these magic numbers that put us at different places on the distribution.
>
> **[8:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=507)** Let's go ahead and see what we can do with the t statistic.
>
> **[8:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=512)** So what you'll notice here is I've given you one single random sample.
>
> **[8:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=515)** So this is what happens with the t statistic.
>
> **[8:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=518)** You're given one sample.
>
> **[8:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=521)** It's usually a small sample and we don't have access to the population standard deviation.
>
> **[8:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=527)** So the first thing I need to do is, well, what's my sample size?
>
> **[8:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=530)** So I'm just going to count up how many values I have here.
>
> **[8:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=536)** And our sample size is 20.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=538)** We also now know that our degrees of freedom, remember our degrees of freedom is our sample size minus one.
>
> **[9:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=545)** So let's go ahead and take care of that right now.
>
> **[9:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=547)** It's our sample size minus one.
>
> **[9:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=549)** So we have 19 degrees of freedom.
>
> **[9:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=553)** The sample of my mean is just the average of the 20 data points that we have here.
>
> **[9:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=563)** And we also want to know the standard deviation for our sample.
>
> **[9:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=569)** So we click in standard deviation.
>
> **[9:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=573)** So stdev.s because this is just for a sample, not for a population.
>
> **[9:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=579)** And we're going to take everything here.
>
> **[9:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=583)** So now we know that the sample for our standard deviation is 17.36.
>
> **[9:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=589)** At this point, we are now ready to start utilizing our t distribution.
>
> **[9:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=595)** And you'll notice here to the right, I've given you a picture of what the t distributions might look like.
>
> **[10:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=601)** So first thing that we want to do, we'll use this formula t.inv.
>
> **[10:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=607)** And what this is going to do is it's going to allow us to figure out where on our distribution a certain percentage is going to be.
>
> **[10:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=617)** So in this case, I chose a percentage of 0.975.
>
> **[10:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=623)** And the next thing we need to do is provide it the degrees of freedom, because remember, the larger the sample size, the larger our degrees of freedom.
>
> **[10:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=631)** The larger our degrees of freedom, the taller our curve that we're associated with is.
>
> **[10:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=637)** So we have 19 degrees of freedom.
>
> **[10:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=641)** And what does this mean?
>
> **[10:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=643)** What it's telling us is that, I'm going to use this orange bar right here.
>
> **[10:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=650)** It just gave us a t score of 2.093.
>
> **[10:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=654)** So it's right about here.
>
> **[10:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=656)** And what this is telling us is that this is where 97.5 percent of our distribution is to the left of the orange bar.
>
> **[11:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=668)** And 2.5 percent of our distribution is to the right of the orange bar.
>
> **[11:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=672)** And very quickly, I just want to show you what happens here as we change the degrees of freedom.
>
> **[11:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=677)** So let's say that the degrees of freedom was actually, you had a very small sample size and let's say it was just four.
>
> **[11:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=683)** You can see now it's saying, well, that would be all the way down here.
>
> **[11:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=688)** So now that has changed this, but again, we're using 19 degrees of freedom.
>
> **[11:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=693)** So let's go ahead and put that back.
>
> **[11:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=696)** All right, so let's use a number of different functions to find our way around on this t distribution.
>
> **[11:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=703)** First one we're going to do is the t.dist function.
>
> **[11:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=709)** And what this is asking us for is, well, what's the t score that you're looking at here?
>
> **[11:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=712)** Well, we're looking at 2.093.
>
> **[11:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=717)** How many degrees of freedom do you have?
>
> **[12:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=720)** We have 19 degrees of freedom.
>
> **[12:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=724)** And we want a cumulative distribution.
>
> **[12:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=728)** And so when you calculate using this formula right here, it's a one tail test and it's the amount to the left of the t score.
>
> **[12:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=738)** So this is telling us when we've created this 2.09 t score, 97.5 percent of the distribution is to the left.
>
> **[12:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=750)** If we wanted to do it the other way round, well, there's a function for that as well.
>
> **[12:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=757)** It's t.dist, but now we're looking for the right side of the curve.
>
> **[12:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=763)** And so once again, I use the same things here.
>
> **[12:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=767)** My t score of 2.093, my degrees of freedom are 19.
>
> **[12:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=774)** And this makes sense, right?
>
> **[12:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=775)** 97.5 percent of my distribution is to the left of the orange bar and 2.5 percent is to the right of the orange bar.
>
> **[13:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=787)** Now let's go down and do one other.
>
> **[13:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=790)** So this case is saying, well, how about if I have two tails?
>
> **[13:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=794)** So I'm going to have a tail.
>
> **[13:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=798)** We're now looking at something that looks like this.
>
> **[13:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=803)** So you'll notice I put an orange bar at about 2.1 and at about negative 2.1.
>
> **[13:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=812)** And when you use this particular function, t.dist.2t, this is saying, well, if I have two tails,
>
> **[13:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=826)** and again, my t score is 2.093, my degrees of freedom are 19, this is saying that the area outside of our bars totals 5 percent.
>
> **[14:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=844)** And again, that makes sense because when you're looking at it only on the one side, it was 2.5 percent.
>
> **[14:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=850)** If we're assuming that the t distribution is symmetrical, we would expect 2.5 percent here, 2.5 percent there.
>
> **[14:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=858)** All right, so we've looked at z scores, how to calculate them, how to look at percentages, and we've done the same thing with our t distribution as well.
>
> **[14:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/t-statistic-vs-z-statistic?u=76281980&t=867)** So you should be ready to use these as we move forward in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (6), [[Microsoft Excel|Excel]] (2), [[Forms]] (1)
> **Versions:** 2.5 (5), 70.8 (4), 2.093 (4), 16.4 (3), 97.5 (3)
> **CLI Commands:** find (3), make (1)
> **Definitions:** in other words (1), stands for (1), means that (1), is a  (1)
> **Analogies:** similar to (1), picture (1)
> **Speakers:** - [instructor] (1)


### 2. Confidence Intervals

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to confidence intervals](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=0)** - [Instructor] Confidence intervals are statistical tools.
>
> **[0:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=3)** They are both very helpful and very efficient.
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=7)** Depending on the situation, confidence intervals allow us to guess at either the true average or the true proportion for an entire population.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=17)** And here's the incredible thing.
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=19)** They can do it with the use of only one single sample.
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=25)** So how is this done?
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=27)** Well, a confidence interval might provide us with a result that looks like this.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=32)** We are 95% confident that the average adult in the United States sleeps between five and seven hours per night.
>
> **[0:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=42)** When you read that, I want you to remember, with one simple random sample, this statistician created an interval, an interval that stretches from a lower limit to an upper limit.
>
> **[0:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=55)** In this case, it's stretched from five to seven hours.
>
> **[1:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=60)** Perhaps even more interesting, though, the statistician assigned a level of confidence to that interval.
>
> **[1:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=67)** In this example, the statistician that created the interval is 95% certain that for US adults, the actual sleep average for the entire US population is between five and seven hours of sleep.
>
> **[1:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=83)** Think about how incredibly powerful this is.
>
> **[1:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=86)** One single random sample that allows us to be 95% confident that our interval contains the real population mean.
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=95)** That's an incredibly efficient use of resources.
>
> **[1:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=99)** Let's take a moment to discuss 95% confidence level.
>
> **[1:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=104)** What does that mean?
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=105)** Well, suppose the actual average sleep for the US population is 6.25 hours.
>
> **[1:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=112)** And then suppose we took 20 individual random samples.
>
> **[1:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=119)** And for each of those 20 samples, we created a 95% confidence interval.
>
> **[2:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=126)** We would now have 20 different 95% confidence intervals.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=132)** Well, we would expect 95% or 19 of those confidence intervals to contain the real population mean of 6.25 hours.
>
> **[2:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=141)** And we'd expect 5% or one confidence interval to not contain the real population mean.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=148)** As you can see, sample number six does not contain the real population mean of 6.25 hours.
>
> **[2:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=156)** As for the basic formulas for confidence intervals, they usually look like this.
>
> **[2:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=161)** First, we use the average provided by our sample.
>
> **[2:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=165)** We then need a critical value for the confidence level we're looking for.
>
> **[2:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=169)** Often, this will be a z-score.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=171)** But in some cases, it could be a t-score.
>
> **[2:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=174)** Finally, on the right of our formula, we also see a need for a sampling error, a sampling error that is directly related to our sample size.
>
> **[3:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=185)** And remember, we need two values.
>
> **[3:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=188)** The upper limit of our confidence interval; the sample average plus the z-value times the sampling error.
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=195)** And the lower limit of our confidence interval; sample average minus the z-value times the sampling error.
>
> **[3:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=202)** In these formulas, I assumed we'd need a z-score.
>
> **[3:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=205)** Then again, we'll be using [[Microsoft Excel|Excel]].
>
> **[3:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=208)** So Excel will likely be doing most of the calculations for us.
>
> **[3:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=212)** Now we know what confidence intervals are.
>
> **[3:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/introduction-to-confidence-intervals?u=76281980&t=215)** In our next videos, we'll create some confidence intervals for both proportions and means using Excel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Versions:** 6.25 (3)
> **Speakers:** - [instructor] (1)

#### [Creating confidence intervals in Excel (proportions)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=0)** - [Instructor] Before we jump to [[Microsoft Excel|Excel]] to create confidence intervals for proportions, let's take a look at the formula and the elements of the formula that we'll use to create the upper limit and the lower limit of our confidence intervals.
>
> **[0:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=13)** The formula for the upper limit is p-hat plus a Z value times the expression under the square root symbol, which is actually our sampling error.
>
> **[0:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=23)** What do the letters mean in the formula?
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=25)** p-hat is the proportion of our random sample, n is the size of our random sample, and Z will be the Z-score associated to our desired level of confidence.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=38)** The formula for the lower limit is p-hat minus a Z value times the standard deviation, or standard error in this case.
>
> **[0:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=46)** Let's do a quick example.
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=47)** Suppose for a certain city, we want to know the proportion of homes that had dogs.
>
> **[0:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=53)** First, let's look at p-hat.
>
> **[0:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=55)** Remember, we're taking one simple random sample to create our confidence interval.
>
> **[1:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=60)** p-hat will be the proportion of homes with at least one dog in our single random sample.
>
> **[1:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=68)** 40 out of 100 homes have dogs.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=71)** We would say our p-hat for this sample is 0.40.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=76)** Now we need the standard deviation, but since we don't know the standard deviation for our entire population, we can use this formula, the formula for standard error, which is also called our sampling error.
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=88)** The standard error is a good approximation of the population's standard deviation.
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=95)** Here is the calculation for the standard error.
>
> **[1:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=98)** We know p-hat is 0.40 and we know our sample contained 100 homes, so n is equal to 100.
>
> **[1:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=106)** This gives us a standard error of about 0.049.
>
> **[1:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=111)** Let's round that to 0.05.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=115)** Finally, we need our Z-score.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=117)** To find this, we'll first want to remember the empirical rule.
>
> **[2:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=120)** The empirical rule states that for a normal distribution, we would expect about 68% of our samples to fall within one standard deviation of the true population proportion.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=132)** We would expect about 95% of our samples to fall within two standard deviations of our population proportion.
>
> **[2:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=139)** And we'd expect about 99.7% of our samples to fall within three standard deviations of our population proportion.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=148)** Remember, Z-score is a measure of the number of standard deviations.
>
> **[2:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=152)** This is why for a 95% confidence interval, we should expect our Z-score to be very close to 2.0.
>
> **[2:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=161)** To be more exact, it's closer to 1.96, but we'll discuss that when we jump to Excel.
>
> **[2:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=166)** For now, let's just use 2.0.
>
> **[2:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=170)** So let's calculate our upper and lower limits.
>
> **[2:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=173)** In this example, p-hat is 0.40, our Z-score is 2.0, and our standard error is 0.05.
>
> **[3:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=183)** So our upper limit is 0.50 and our lower limit is 0.30.
>
> **[3:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=190)** For this simple example, we can say that we are 95% certain that the proportion of homes with one or more dogs is between 0.30 and 0.50.
>
> **[3:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=204)** Okay, now we've seen the formula in action, now let's move on over to Excel.
>
> **[3:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=211)** All right, so let's take a look at the scenario that we're given here.
>
> **[3:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=214)** We have 500 people who are going to vote in an election, and we have also whether or not they're going to vote yes or no in that election.
>
> **[3:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=224)** Now, the person who's doing this study, they don't have access to all of this.
>
> **[3:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=229)** That's why they're going to be taking samples.
>
> **[3:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=232)** But let's take a look at the entire population here.
>
> **[3:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=235)** We know that the total number of votes is 500.
>
> **[3:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=239)** We want to count up the number of yes votes.
>
> **[4:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=240)** Now I made yes 1 and I made no a 0.
>
> **[4:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=244)** So if we just take a sum of this entire column, we'll know how many yes votes we have.
>
> **[4:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=251)** And the number of no votes is just going to be the difference.
>
> **[4:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=255)** So we have 500 votes minus the number of yes votes, that's going to lead me with the number of no votes.
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=261)** So we want to know the population proportion of yes votes.
>
> **[4:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=264)** So that's going to be 270 divided by 500, and it looks like the population proportion of yes is going to be 54%.
>
> **[4:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=275)** Now, again, we don't know this.
>
> **[4:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=276)** We're counting on our confidence intervals to point us in that direction.
>
> **[4:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=282)** So what we're going to do is we're going to take some random samples.
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=284)** And what I'm going to do first is I'm going to label, 'cause when we take these samples, we want to know who contributed, which participant contributed, and we want to know what their vote was in this particular case.
>
> **[4:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=296)** So I'm going to index this entire area over here.
>
> **[5:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=300)** So I'm going to just double click on that and that has now numbered everything from 1 down to 500.
>
> **[5:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=310)** Also, you'll notice that I've gone ahead and I've put this formula into this particular cell right here.
>
> **[5:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=317)** We are indexing column A from A2 down to A501, and I've locked that in, so that's always going to be the area that we index.
>
> **[5:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=329)** And we're going to choose a number between 1 and 500.
>
> **[5:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=333)** 'Cause one of those 500 numbers in column A, I'm just going to pick that at random and I'm going to do that for my entire sample.
>
> **[5:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=343)** Go back here.
>
> **[5:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=345)** We're going to copy to the right.
>
> **[5:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=347)** So these are the 10 people I'm going to choose at random.
>
> **[5:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=351)** Up here, I will now go to voter number 92, voter number 137, voter number 457, and I'm going to figure out what their vote is.
>
> **[6:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=364)** And that's what this is doing.
>
> **[6:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=366)** This is taking an index of column C and it's finding voter number 92.
>
> **[6:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=375)** And I'm going to copy this to the right.
>
> **[6:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=378)** Now, we're still in random mode here, so every single time I change something, it's changing the voters that we're indexing, and then of course the vote for that particular voter.
>
> **[6:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=389)** Now I want to copy this down here.
>
> **[6:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=394)** So now I have 20 samples of 10 voters each and I want to grab their particular votes.
>
> **[6:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=404)** So I'm going to copy this down as well.
>
> **[6:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=407)** Now you'll notice for sample number one, I have these 10 votes.
>
> **[6:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=413)** Three of them are yes, and seven of them are going to be no.
>
> **[6:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=418)** And I've figured out the p-hat.
>
> **[6:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=419)** It's just going to be the total number, the sum.
>
> **[7:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=424)** So three divided by our sample size, which is 10, and I can now copy this down, and I now have my p-hats for all 20 of my samples.
>
> **[7:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=436)** How about the Z value?
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=437)** Remember, we want a 95% confidence interval.
>
> **[7:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=440)** So when I go over here to our Z table, most times people want to go and grab the closest number to 95%.
>
> **[7:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=447)** But remember, this is a confidence interval, and the number that we have out p-hat, that is the center of our confidence interval.
>
> **[7:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=454)** So we want everything within 95%, but we want to go equally in both directions.
>
> **[7:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=459)** So that means we're going to cut off the tails, 2.5% on this side, 2.5% on this side.
>
> **[7:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=466)** So we're actually looking for this number right here, 0.9750.
>
> **[7:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=472)** Because that would mean that we have now found this red line over here 'cause it's excluding the 2.5% on this end.
>
> **[8:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=480)** And then we'll know that that's also going to be the same on the other end over here.
>
> **[8:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=484)** So the number that we're actually looking for for our Z-score is 1.96, which is what we have over here.
>
> **[8:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=493)** And I'm going to copy that down.
>
> **[8:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=495)** The next thing we're looking for is our standard error.
>
> **[8:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=498)** And if you remember, the formula for our standard error is going to be the square root of p-hat times one minus p-hat all over our n.
>
> **[8:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=509)** And this is the formula I've put in here.
>
> **[8:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=511)** The square root of our p-hat, p8, times one minus p8, and all over our sample size, which is n.
>
> **[8:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=520)** And what I've done here is I've locked that in 'cause we're always going to be using the same sample size.
>
> **[8:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=525)** So I can copy this down as well.
>
> **[8:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=527)** So at this point, we have our p-hat, which is what we need for our upper limit, we have our Z, and we have our standard error.
>
> **[8:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=534)** And that's going to allow us to calculate our upper and lower limit.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=538)** So let's go ahead and do that.
>
> **[8:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=539)** Our lower limit is going to be equal to our p-hat, no, wrong one, our upper limit, our lower limit, rather, is going to be equal to our p-hat minus our Z-score times our standard error.
>
> **[9:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=558)** That's our lower limit.
>
> **[9:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=560)** And our upper limit is going to be p-hat plus our Z-score times our standard error.
>
> **[9:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=571)** And there we go.
>
> **[9:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=572)** Now what I've also done is I've put in a test in here to see whether or not this actually contains our population proportion.
>
> **[9:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=580)** So remember, our population proportion is 54%.
>
> **[9:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=584)** We would expect the lower limit number to be smaller than 54% and we'd expect our upper limit number to be bigger than 54%.
>
> **[9:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=594)** And so we now have a test and it looks like this one works.
>
> **[9:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=597)** I'm going to copy these down, and then I'm going to copy down the tests as well.
>
> **[10:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=608)** And what we would expect is that 95%, or 19 out of 20, would actually contain our population proportion, but it doesn't seem to be working out very well right here.
>
> **[10:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=620)** We'll take a number of other samples every time I change this.
>
> **[10:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=623)** This one, 95%.
>
> **[10:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=626)** This one, oh, we had two, so it's about 90%.
>
> **[10:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=630)** This one, oh, we had quite a few.
>
> **[10:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=633)** And you might be saying, well, what's going on here?
>
> **[10:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=635)** Well, what the problem could be is that our distribution is not normally distributed as we would expect because one thing is our sample size is very small.
>
> **[10:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=647)** And so as a result, that could be problematic, which of course is something that we want to think about.
>
> **[10:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=652)** Larger sample size are more helpful.
>
> **[10:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=656)** So let's go ahead and do this with a sample size of 50.
>
> **[11:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=660)** So I've already put the formulas in here.
>
> **[11:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=661)** I've indexed column A, I've indexed down here.
>
> **[11:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=667)** And what I'm going to do is I'm actually going to grab a sample of 50 different votes all in one single sample.
>
> **[11:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=678)** So copy right, copy down, these 50 votes are all part of a single sample.
>
> **[11:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=687)** So our sample size is 50.
>
> **[11:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=690)** Here's our p-hat, it's the sum of all of these divided by our sample size of 50.
>
> **[11:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=696)** Our Z value is the same 'cause we still want a 95% confidence interval.
>
> **[11:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=701)** And our standard error, well, in this case, it's pretty much the same.
>
> **[11:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=705)** It's the square root of p-hat times one minus this p-hat and all over our sample size of 50.
>
> **[11:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=715)** And so our standard error is this.
>
> **[11:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=718)** It's a smaller standard error.
>
> **[11:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=719)** So that means our lower and upper control limits are going to be a little bit tighter.
>
> **[12:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=724)** But in this case here, because our sample size is bigger, we're feeling a little bit more confident about our confidence interval overall.
>
> **[12:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=733)** And you'll notice that pretty much no matter what I do, in most cases, it's actually collecting a confidence interval that does contain my actual population proportion.
>
> **[12:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=747)** So we've seen a number of different things here.
>
> **[12:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=748)** We've seen how to create confidence intervals for proportions, and we've also seen the impact of utilizing a larger sample size.
>
> **[12:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=757)** Smaller sample sizes may sometimes not adhere to the normal distribution.
>
> **[12:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-proportions?u=76281980&t=762)** So having that larger sample size can be very helpful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Versions:** 0.40 (3), 2.0 (3), 2.5 (3), 0.05 (2), 1.96 (2)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (1), go to (1)
> **CLI Commands:** find (1)
> **Env Vars:** a501 (1)
> **Speakers:** - [instructor] (1)

#### [Creating confidence intervals in Excel (means)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=0)** - [Instructor] Let's now create confidence intervals for means.
>
> **[0:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=3)** So instead of looking for the proportion of homes that have dogs, here we're interested in the average weight of dogs in the city.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=10)** Suppose we gather a random sample of 25 dogs from the city.
>
> **[0:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=15)** The average weight of dogs in this sample is about 35 pounds.
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=19)** And suppose you're given one other important piece of information, you're told the standard deviation of the weight of dogs in the city is 15.
>
> **[0:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=28)** Please note that is the population standard deviation.
>
> **[0:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=33)** Here are the formulas for the upper and lower limits.
>
> **[0:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=36)** In the formulas, x-bar is the mean of our sample, 36 pounds.
>
> **[0:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=41)** And let's say we're going to create a 95% confidence interval.
>
> **[0:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=45)** We've used that in a previous video.
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=47)** So we know that the critical value, the Z-score, is 1.96.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=52)** So now we need to find the standard error.
>
> **[0:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=56)** The formula for the standard error is sigma, our population standard deviation, 15, divided by the square root of n, the sample size, 25.
>
> **[1:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=66)** The square root of 25 is 5.
>
> **[1:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=69)** So our standard error is three.
>
> **[1:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=73)** This means the upper and lower control limits for our 95% confidence interval would be 36, our mean, plus and minus 1.96, the Z-score, times 3, the standard error.
>
> **[1:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=87)** So our lower limit is 30.12, and the upper limit is 41.88.
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=95)** Here's the problem though, when doing a study like this you rarely have the standard deviation of the population.
>
> **[1:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=102)** When you don't use the population standard deviation and when you have a small sample size, especially one below 30, you need to use the t statistic instead of the Z statistic.
>
> **[1:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=114)** Here are the formulas for the upper and lower limits.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=117)** Pretty much the same except we use the t statistic.
>
> **[2:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=121)** Also, we use the estimated standard error of the means since we don't have access to the population standard deviation.
>
> **[2:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=130)** The formula for the estimated standard error is s, our sample standard deviation, 22, divided by the square root of n, the sample size, 25.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=142)** The square root of 25 is 5, so our estimated standard error is 4.4.
>
> **[2:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=149)** So now to find our t-score.
>
> **[2:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=151)** Without [[Microsoft Excel|Excel]] we need to use a t table.
>
> **[2:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=154)** Our sample size, n, is 25, so our degrees of freedom is n-1, 24.
>
> **[2:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=163)** So if we want a 95% confidence interval, 2.5% on each side of the distribution, we need to find t for 0.975.
>
> **[2:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=174)** You can see here our t score is 2.064.
>
> **[2:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=179)** So this means that the upper and lower control limits for our 95% confidence interval would be 26.92 and 45.08.
>
> **[3:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=190)** Wow, that was a lot of work.
>
> **[3:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=191)** Let's head over to Excel and do it the easier way.
>
> **[3:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=196)** All right, so before we begin I want you to look at what you have been given so far.
>
> **[3:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=201)** You have been given access to 228 exam scores.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=207)** The average, the population mean, for everybody that took this exam was 76.3.
>
> **[3:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=214)** The population standard deviation, which is very important, we now know the standard deviation for the entire population is 13.4.
>
> **[3:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=222)** So in this case, because we have the population standard deviation and because we're going to choose a sample size that's rather large, 40, we can go ahead and use a Z-score.
>
> **[3:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=234)** All right, so our upper limit and our lower limit formulas are right there for you to see.
>
> **[3:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=239)** Our standard error formula is also over here.
>
> **[4:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=241)** So let's get working on this.
>
> **[4:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=243)** First thing we want to do is we want to take a random sample.
>
> **[4:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=246)** So I'm going to use our rand, open and close, this is going to give us a decimal.
>
> **[4:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=255)** I'm going to go ahead and copy this down all the way.
>
> **[4:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=258)** I then want to lock in my random numbers here, so I'm going to copy and do a Paste Special for values.
>
> **[4:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=266)** So those numbers have been locked in.
>
> **[4:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=268)** I'm going to put them in ascending order.
>
> **[4:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=271)** And now I have, I'm going to take the first 40 scores and that is going to be my sample.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=278)** So my sample mean for the first 40 scores in this particular group is the average of D2 down to D41.
>
> **[4:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=297)** Right, so the sample mean for our 40 scores that we got is 74.8.
>
> **[5:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=304)** Right, so the next thing we need to do is calculate our Z-score.
>
> **[5:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=308)** And what we want here is a 98% confidence interval.
>
> **[5:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=312)** We're going to change it up a little bit.
>
> **[5:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=313)** Instead of doing our 95% confidence interval, we're going to do a 98% confidence interval.
>
> **[5:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=318)** So that means we want 98% away from our mean in both directions equally.
>
> **[5:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=325)** And that means that we're going to exclude 1% on the high end and 1% on the low end.
>
> **[5:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=330)** So what we're looking for here in terms of our Z-score, we're going to go ahead and type in the NORM.S.INV and our [[Probability]] that we want is 0.99.
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=344)** Again, we're doing that because it's a 98% confidence interval.
>
> **[5:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=348)** We want to see how far we are over to the right to exclude 1%.
>
> **[5:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=355)** And so our Z-score here is going to be 2.326.
>
> **[6:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=360)** Our standard error is our population standard deviation, which we have, divided by the square root of our sample size, which is 40.
>
> **[6:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=378)** We will correct that.
>
> **[6:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=379)** And there we go, our standard error is 2.116.
>
> **[6:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=384)** So now it's easy, let's go ahead and figure out our upper and lower limits.
>
> **[6:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=390)** My upper limit is going to be my sample mean plus my Z-score times our standard error.
>
> **[6:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=402)** My lower limit, of course, is going to be my sample mean
>
> **[6:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=411)** minus my Z-score times my standard error.
>
> **[6:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=419)** And there you go, your upper limit and your lower limit.
>
> **[7:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=422)** And the reason we could do it this simply is because we had access to the entire population and therefore we had our population standard deviation.
>
> **[7:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=432)** But again, this is not the way things normally work.
>
> **[7:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=435)** So let's do this with an unknown standard deviation.
>
> **[7:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=440)** Suppose that you didn't know anything, all you knew is that you were going to go out, you were going to grab a sample of 15 scores.
>
> **[7:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=448)** So a relatively small sample size and no access to your population standard deviation.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=455)** So in this case here we have a relatively small sample size, no access to your population standard deviation.
>
> **[7:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=462)** Let's go ahead and grab a brand new sample of 15.
>
> **[7:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=466)** So once again, I'm going to type in my rand function here.
>
> **[7:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=470)** It's going to give me a random number.
>
> **[7:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=473)** I'm going to copy that down, and I'm going to lock those in, once again, by doing a Copy, Paste Special, Values.
>
> **[8:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=482)** And now my numbers are locked in.
>
> **[8:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=484)** I will go over here to data.
>
> **[8:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=486)** So I can filter this and I'm going to go Ascending.
>
> **[8:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=491)** And I'm going to say my first 15 scores, that is my sample.
>
> **[8:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=498)** And if we want to we can even make those stand out a little bit.
>
> **[8:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=502)** All right, so our sample mean.
>
> **[8:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=504)** So we want the average of our 15 scores.
>
> **[8:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=512)** We then need a standard deviation for our sample.
>
> **[8:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=515)** So a standard deviation, so STDEV.S for our sample,
>
> **[8:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=524)** for these 15 scores.
>
> **[8:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=526)** And now we have, I'm sorry, not a population standard deviation, but rather a sample standard deviation.
>
> **[8:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=532)** Now we need a t-score.
>
> **[8:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=533)** Now remember, our Z-score for 98% was 2.326.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=538)** So it'll be interesting to see what our t-score is for that particular threshold.
>
> **[9:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=543)** So what we do here is we type in T.INV and it's asking us what is our probability?
>
> **[9:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=552)** Well, our probability that we're looking for, once again, it's very similar to what we did before, is that 0.99.
>
> **[9:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=558)** So we have 1% left to the right of our distribution that's going to be equal on both sides.
>
> **[9:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=565)** And then our degrees of freedom.
>
> **[9:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=567)** Well, if you remember, our degrees of freedom is n-1, our sample size is 15.
>
> **[9:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=574)** We'll subtract one from that.
>
> **[9:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=576)** And you can see our t-score here is a little bit different.
>
> **[9:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=579)** Our Z-score was 2.326. Our Z-score is 2.624.
>
> **[9:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=584)** Remember, we have those fatter tails on our curve.
>
> **[9:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=589)** Now we need our estimated standard error.
>
> **[9:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=591)** Our estimated standard error is our sample standard deviation.
>
> **[9:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=596)** So that's going to be this right here, divided by the square root of our sample size, which is 15.
>
> **[10:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=608)** And there we go, now our upper limit is going to be our sample mean plus our t-score times our standard error.
>
> **[10:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=622)** And then for my lower limit, it's going to be my sample mean minus my t-score times my standard error.
>
> **[10:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=635)** And there you go.
>
> **[10:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=636)** But wait, there's a little bit more here.
>
> **[10:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=638)** What I want to show you is that when you're doing something like this, taking a sample and you want to create an upper and lower limit, it does not work when you have the entire population, but when you have a sample, in this case, Excel can help you a little bit.
>
> **[10:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=659)** So what you can do is you can go up to our Data menu, click on Data Analysis, you find Descriptive [[Statistics]] in here, click OK.
>
> **[11:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=671)** And what we're going to do is we're going to grab our sample data.
>
> **[11:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=673)** So just our 15 data points, we have them, don't worry about grouping by columns or rows, it's just all one column right here.
>
> **[11:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=684)** What we want to do is we want to click on Summary statistics and Confidence Level for Mean.
>
> **[11:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=691)** Now we want a 98% confidence interval.
>
> **[11:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=695)** And so we just tell Excel 98% and it'll figure out the [[Representational State Transfer (REST)|rest]] for you.
>
> **[11:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=699)** Our output range, I'm going to put that right here and this will give us our summary statistics.
>
> **[11:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=709)** But here's the really cool thing.
>
> **[11:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=711)** Notice down here at the bottom it added something for us.
>
> **[11:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=714)** A confidence level, you might go, "What is that?
>
> **[11:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=716)** "That does not look like what we have over here."
>
> **[11:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=719)** What it is is the second part of our formula.
>
> **[12:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=724)** So what you can do is you can say, "All right, "for my particular sample, my upper limit would be the mean "plus the confidence level number "that it gave me down here.
>
> **[12:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=739)** "And for my lower limit, it's going to be my mean "minus my confidence level number that it gave me down here."
>
> **[12:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=748)** And I want you to compare, look at that.
>
> **[12:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=752)** When you have this small sample, when you need to use the t-score, in these particular cases actually Excel can do a lot of the work for you.
>
> **[12:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/creating-confidence-intervals-in-excel-means?u=76281980&t=763)** All right, so whether you have a known standard deviation for the population or an unknown standard deviation for the population, you're ready to go with confidence intervals for the mean.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5), [[Probability]] (3), [[Statistics]] (3), [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** 2.326 (3), 1.96 (2), 0.99 (2), 30.12 (1), 41.88 (1)
> **CLI Commands:** find (4), make (1)
> **Env Vars:** inv (2), d41 (1), norm (1), stdev (1)
> **Definitions:** means that (2), is a  (2)
> **UI Navigation:** click on (2)
> **Cross-References:** previous video (1)
> **Analogies:** similar to (1)


### 3. Hypothesis Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [How to test a hypothesis](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=0)** - [Instructor] In a trial, lawyers use evidence in an attempt to prove a person is either guilty or not guilty.
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=7)** So far in [[Statistics]], we've seen evidence.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=10)** Samples are our evidence.
>
> **[0:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=12)** But when we have a belief, how do we put that belief on trial?
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=19)** How do we use our evidence to reach a sound conclusion?
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=22)** We use hypothesis tests.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=24)** Hypothesis tests is like a trial.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=27)** It is a formal process for testing whether we have sufficient evidence to draw a conclusion.
>
> **[0:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=33)** For example, let's say the National Dog Association says that the average US dog weighs 40 pounds.
>
> **[0:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=40)** You take a sample of 25 dogs in your town, and find that the average weight of those dogs is only 35 pounds.
>
> **[0:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=49)** Perhaps you begin to doubt the National Dog Association's published average.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=54)** The question is, do you have enough evidence to say that the average US dog probably weighs less than 40 pounds?
>
> **[1:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=63)** Suppose you're the statistics lawyer.
>
> **[1:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=66)** You've been given this one sample as your evidence.
>
> **[1:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=69)** What concerns you about the sample provided?
>
> **[1:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=74)** First, the stated average was 40 pounds.
>
> **[1:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=77)** The sample mean was 35 pounds.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=81)** Is this significant enough to make me doubt the stated average?
>
> **[1:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=85)** Next, the sample only had a sample size of 25.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=91)** That's a small sample size to represent the whole country.
>
> **[1:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=94)** Can I trust this sample?
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=97)** Also, what's the standard deviation of the sample?
>
> **[1:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=100)** Maybe a couple of tiny dogs in the sample had a big impact on this particular sample.
>
> **[1:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=106)** Well, hypothesis testing takes all of these issues into account.
>
> **[1:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=110)** The calculations utilize sample averages, sample size, standard deviation, and the normal distribution.
>
> **[1:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=118)** Just like a trial, there is a process that must be followed, though.
>
> **[2:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/how-to-test-a-hypothesis?u=76281980&t=123)** In the next video, we will look at the five-step process that must be followed to properly perform a hypothesis test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1), just like (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Five steps of hypothesis testing](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=0)** - [Instructor] [[Statistics]] help us draw sound conclusions, conclusions that are based on evidence.
>
> **[0:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=6)** To do this properly though, we need to have a fair trial.
>
> **[0:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=9)** In statistics, this trial is called a hypothesis test.
>
> **[0:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=13)** And to properly perform a hypothesis test, we need to follow five steps.
>
> **[0:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=19)** Let's discover the five steps by performing a simple hypothesis test.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=24)** Suppose the college basketball association states that the average height of a male college basketball player is 195 centimeters.
>
> **[0:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=35)** A random sample is taken with a sample size of 25.
>
> **[0:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=39)** The sample mean for the sample is 201 centimeters.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=44)** We begin to doubt the college basketball association stated average.
>
> **[0:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=49)** This looks like a good opportunity for a hypothesis test.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=54)** Hypothesis testing is a five-step process.
>
> **[0:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=56)** In an effort to keep you focused on each step, we're going to keep the math very simple.
>
> **[1:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=61)** So let's get started.
>
> **[1:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=64)** In our first step, we need to set up our hypothesis.
>
> **[1:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=67)** There will typically be two hypotheses.
>
> **[1:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=70)** H-naught are null hypothesis.
>
> **[1:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=73)** The null hypothesis is what is presently accepted as fact.
>
> **[1:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=77)** Our other hypothesis is H sub a.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=81)** This is our alternative hypothesis, which states something contradictory to our null hypothesis.
>
> **[1:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=89)** So our H-naught says that mu is equal to 195 centimeters.
>
> **[1:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=94)** Why?
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=95)** Because presently, it's believed the average player is 195 centimeters tall.
>
> **[1:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=101)** But we believe it might be wrong.
>
> **[1:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=104)** We think the average player might be taller than 195 centimeters.
>
> **[1:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=109)** So our alternative hypothesis, H sub a, says mu is greater than 195.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=117)** Our next step is to state a significance level, which we will call alpha.
>
> **[2:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=122)** This is how we'll judge our trial.
>
> **[2:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=124)** Essentially, this sets a threshold for our test.
>
> **[2:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=128)** How far from the expected average does our sample average need to be for us to reject the null hypothesis?
>
> **[2:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=136)** In many cases, statisticians like to utilize a significance level of 5%.
>
> **[2:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=143)** If there is less than a 5% chance, a random sample of 25 players could have an average of 201 centimeters less than a 1 in 20 chance, then we will reject the null hypothesis.
>
> **[2:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=160)** By the way, sometimes people want to use a smaller alpha, perhaps 1%, but we'll use 5% for this example.
>
> **[2:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=168)** Next, we need to identify the test statistic.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=171)** What will we use to measure our sample to the expected outcome?
>
> **[2:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=177)** We'll assume the player heights are normally distributed.
>
> **[3:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=180)** So how likely is it that we get a random sample of 25 that has an X-bar of 201 centimeters?
>
> **[3:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=189)** We also have the expected population mean and standard deviation.
>
> **[3:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=194)** For this, we can use a Z-score.
>
> **[3:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=197)** This will be our test statistic.
>
> **[3:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=200)** So now we can calculate our Z-score.
>
> **[3:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=203)** Remember, X-bar is 201.
>
> **[3:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=206)** The population mean is 195.
>
> **[3:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=209)** The standard deviation for the population is 12.
>
> **[3:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=212)** And our sample size is 25.
>
> **[3:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=214)** Therefore, our Z-score is 2.50.
>
> **[3:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=219)** Step four, our p-value.
>
> **[3:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=222)** We have our null hypothesis, our significance level, and our test statistic.
>
> **[3:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=226)** Next, we need to find the p-value for that test statistic.
>
> **[3:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=231)** The p-value is the [[Probability]] that this outcome could occur by chance.
>
> **[3:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=238)** So we go to our Z-score table.
>
> **[4:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=240)** We know our Z-score is 2.50, which gives us a value of 0.9938.
>
> **[4:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=248)** Our X-bar is greater than 99.38% of expected values, which means our p-value is 0.0062.
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=261)** Wow, that outcome is not very likely at all.
>
> **[4:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=267)** Step five, it's time to compare our p-value to the fixed significance level that we established.
>
> **[4:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=275)** We set our alpha as 0.05, or 5%.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=278)** This is what it looks like on our normal distribution.
>
> **[4:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=281)** Anything to the right of that line means we reject our null hypothesis.
>
> **[4:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=286)** Anything to the left of that line means we do not reject our null hypothesis.
>
> **[4:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=291)** Our p-value is 0.0062.
>
> **[4:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=295)** There is only a 0.62% chance, this sample occurred by chance, which means it is to the right of our threshold.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=306)** Therefore, we must reject our null hypothesis.
>
> **[5:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=311)** So what does that mean?
>
> **[5:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=313)** There are only two possible outcomes in a hypothesis test.
>
> **[5:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=316)** Reject the null hypothesis or do not reject the null hypothesis.
>
> **[5:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=321)** Notice, do not reject the null hypothesis doesn't mean that we accept the alternative hypothesis.
>
> **[5:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=329)** Reject simply means we contradicted the null hypothesis.
>
> **[5:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=333)** Do not reject means that we could not contradict the null hypothesis.
>
> **[5:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=338)** It's sort of like saying a person on trial is either guilty or not guilty.
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=344)** Guilty means the evidence is there to convict.
>
> **[5:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=347)** Not guilty means that there was a lack of evidence.
>
> **[5:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=351)** Not guilty does not necessarily mean the jury believed the person was innocent.
>
> **[5:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=356)** They just lacked the evidence to prove guilt.
>
> **[5:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/five-steps-of-hypothesis-testing?u=76281980&t=359)** Hypothesis testing is an extremely important part of the world of statistics and every other field that leans on statistics for assistance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Probability]] (1)
> **Versions:** 2.50 (2), 0.0062 (2), 0.9938 (1), 99.38 (1), 0.05 (1)
> **Definitions:** means that (2), is called (1), is a  (1), is an  (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [One-tailed vs. two-tailed tests](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=0)** - [Instructor] When we perform hypothesis tests, we're looking for outcomes that are out of the ordinary.
>
> **[0:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=5)** Statistically, what does that mean?
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=7)** Well, if we look at our normal distribution curve, it means that we're looking for outcomes that are on the fringes, outcomes that are in the tail sections of our distribution.
>
> **[0:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=18)** We have two tails, one on the right and one on the left.
>
> **[0:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=21)** Sometimes we're testing for outcomes that are far too low.
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=25)** They are on the left side.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=27)** Sometimes we're testing for outcomes that are far too high.
>
> **[0:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=30)** Those are on the right side, and sometimes we're looking for outcomes that are generally far away from the mean.
>
> **[0:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=36)** So we're looking for outcomes either very far to the right or very far to the left.
>
> **[0:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=42)** This is why we have three types of tests.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=44)** One-tail test to the left, one-tail test to the right and the two-tail test.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=52)** Here's a simple example.
>
> **[0:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=53)** Let's suppose a research company develops new medicines to help people with the common cold.
>
> **[0:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=59)** This is very much a trial and error process.
>
> **[1:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=62)** Some medicines are successful.
>
> **[1:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=63)** They help people get better faster than normal, but then there are some experimental pills that seem to actually prolong the illness, and some of the experimental pills don't seem to have much of an impact at all.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=76)** These three scenarios each require a different type of hypothesis test.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=81)** Here's the normal curve.
>
> **[1:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=83)** Let's say the average adult has the common cold for eight days.
>
> **[1:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=87)** That will be the center of our curve, the mean duration of the cold.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=91)** The normal curve is a distribution illustrating all the possible common cold durations.
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=97)** While most samples of patients will have a sample mean that is within the expected outcomes, some samples may be sick much longer than expected, and some samples may be sick much shorter than expected.
>
> **[1:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=111)** That said, if we're testing a medicine that is believed to actually help people recover more quickly than normal, we'll develop a test group, our sample.
>
> **[2:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=120)** And we'll track the average time it took this group to recover.
>
> **[2:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=125)** For this sample, we're hoping to get an outcome on the far left side of the curve.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=129)** That would tell us that this outcome is statistically unlikely.
>
> **[2:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=133)** This would give us evidence that the medicine helped people recover more quickly.
>
> **[2:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=138)** This is a one-tail test, a left-tail test.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=142)** How about if someone thinks our medicine is actually not helpful?
>
> **[2:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=145)** They think it weakens people.
>
> **[2:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=147)** It makes them sicker for a longer period of time.
>
> **[2:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=151)** Again, we need a one-tail test, but here we need a right-tail test.
>
> **[2:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=156)** We'll sample a group of people, measure the mean recovery time for the group.
>
> **[2:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=160)** If we find this group has a statistically unlikely recovery time, one that is very long, very far to the right, then we will have evidence the medicine is increasing the expected recovery time.
>
> **[2:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=174)** Finally, if we're testing a medicine but don't really know if it's having any impact, we may want to perform a two-tail test.
>
> **[3:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=183)** We'll take a sample of patients, measure the mean recovery time, and we'll see if we get a statistically unlikely outcome in either direction.
>
> **[3:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=192)** Maybe it's on the far right. Maybe it's on the far left.
>
> **[3:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=194)** In either case, we'll want to investigate further.
>
> **[3:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/one-tailed-vs-two-tailed-tests?u=76281980&t=198)** As you begin to perform hypothesis tests, think about what you're looking for: Unlikely scenarios on the left, the right, or perhaps both.

> [!info]- Semantic Content
>
> **Definitions:** is a  (2), means that (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Hypothesis test exercise (means)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=0)** - [Instructor] In this video, we'll be looking at two different scenarios.
>
> **[0:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=2)** Each scenario will require a hypothesis test on sample means versus an expected outcome.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=10)** In one we'll investigate whether a certain herbal supplement is actually reducing the recovery time for people that have the common cold.
>
> **[0:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=18)** In another scenario we'll investigate whether a company is putting enough dog food in the bags they're selling to their customers.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=24)** In both cases, we'll be given sample data, and also, in both cases you'll be provided an expected outcome.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=32)** For the supplement, an expected recovery time for patients, for the dog food, an expected amount of dog food in each bag.
>
> **[0:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=41)** We will of course use [[Microsoft Excel|Excel]] to perform these hypothesis tests.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=44)** But before we head over to Excel, let me provide you some helpful formulas.
>
> **[0:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=49)** Here's the formula for our Z-statistic.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=52)** X-bar is our sample mean, mu is the population mean, sigma is the population standard deviation, and N is our sample size.
>
> **[1:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=63)** Also, I'd like to show you the formula for the T-statistic.
>
> **[1:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=66)** This is for cases with small sample sizes.
>
> **[1:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=69)** X-bar is our sample mean, mu is the population mean, S is the standard deviation of our sample, and N is our sample size.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=81)** No need to memorize these though.
>
> **[1:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=83)** I'll show you these formulas as we need them again when we're in Excel.
>
> **[1:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=87)** Okay, let's head over to Excel.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=91)** Okay, so first let's go through the scenario here.
>
> **[1:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=94)** A dog food company wants to be sure that their customers are getting the right amount of food in these bags that are labeled as 40 pounds.
>
> **[1:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=101)** Now if the customer gets too little food, of course they're going to be angry.
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=105)** They want the right amount of food in the bag.
>
> **[1:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=108)** On the other hand, if the customer gets too much food, the customer's not going to complain but now the customer's expectations might change and now they're going to be expecting over 40 pounds every single time.
>
> **[2:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=120)** Now a random sample was taken of 50 bags.
>
> **[2:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=125)** And when you look at this over on the right side of the screen, you'll notice that those are the 50 bags that were in our sample.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=132)** The sample mean is 39.59.
>
> **[2:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=134)** So already I begin to say to myself, well, maybe this process is out of control.
>
> **[2:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=139)** Maybe the customers aren't getting enough dog food.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=142)** And you can actually, when you look at this, you'll notice that quite a few of the bags have less than 40 pounds.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=148)** So let's go ahead and run a hypothesis test and then we'll discuss this a little bit when we're done with our hypothesis test.
>
> **[2:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=155)** Alright, so first thing is, what is it that we are expecting?
>
> **[2:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=159)** We are expecting for bags to have 40 pounds of dog food in them.
>
> **[2:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=164)** So our null hypothesis, what we expect, what we believe to be true is that mu is equal to 40.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=171)** Our alternative hypothesis in looking at our sample mean, looking at the individual bags in our sample, we think, wait a second, that doesn't seem right.
>
> **[3:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=183)** We're saying, well mu, we think that it's not equal to 40 as our alternative hypothesis.
>
> **[3:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=190)** So we go to step two.
>
> **[3:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=191)** Step two says, what's your level of significance?
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=195)** And we're going to say that if the outcome of this particular sample is less than 5% likely with this normal distribution, then we're going to reject that null hypothesis 'cause we think that you know what, that doesn't seem right to us.
>
> **[3:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=210)** So let's go to step three.
>
> **[3:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=212)** What will we use to test our hypothesis?
>
> **[3:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=215)** Our test statistic is going to be Z, and Z tells us how many standard deviations we are from our expected outcome of 40 pounds.
>
> **[3:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=227)** In this case, we have quite a bit of this information already.
>
> **[3:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=230)** You know Z is going to be equal to X-bar minus mu over our standard deviation divided by the square root of N.
>
> **[3:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=239)** So let's take a look and find all four of those things.
>
> **[4:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=242)** First of all, our expected mu, our expected population mean is 40 pounds.
>
> **[4:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=249)** Our population standard deviation, that's actually been given to us as well as 1.5.
>
> **[4:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=258)** Our sample mean is this right here, 39.59.
>
> **[4:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=265)** And our sample size, let's go ahead and count those up to be sure that we have it right.
>
> **[4:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=271)** Is all of these over here.
>
> **[4:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=274)** So our sample size is 50.
>
> **[4:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=276)** So let's go ahead and figure out first to make this a little easier on ourselves, let's figure out the standard error of the mean.
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=284)** That is the bottom portion of this formula here.
>
> **[4:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=287)** It's the sigma divided by the square root of N.
>
> **[4:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=291)** So sigma, which is our 1.5 divided by the square root of N.
>
> **[5:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=304)** And there we have our standard error of the mean.
>
> **[5:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=305)** So that's sort of acting as our standard deviations.
>
> **[5:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=308)** Now how many standard deviations are we from our expected mean?
>
> **[5:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=313)** So our Z-score is going to be our X-bar, 39.59 minus R mu, which is 40.
>
> **[5:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=323)** And so that's going to give us a difference right there of 0.41.
>
> **[5:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=327)** And we want to know how many standard deviations is that from the mean?
>
> **[5:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=331)** So we divide by our standard error and what do we get?
>
> **[5:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=336)** Negative 1.91.
>
> **[5:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=339)** So what does that mean?
>
> **[5:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=340)** Well, remember, if we're looking at this on a normal curve, 40 pounds is what we expect.
>
> **[5:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=348)** We are negative 1.91 standard deviations from the mean.
>
> **[5:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=353)** So we're in this direction over here, we're somewhere over here.
>
> **[5:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=356)** Now the question is, are we on the right side of this red line right here?
>
> **[6:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=362)** In which case we're within expectations, or are we on the left side of that red line, in which case there's not enough dog food, it's outside of expectations and this isn't very good.
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=374)** So we go to step four and we say, well now that we know our Z-score is negative 1.91, let's go ahead and figure out where we are.
>
> **[6:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=382)** And this is a two-tailed test.
>
> **[6:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=383)** Remember, we're not going to be happy if we gave the customer too little food.
>
> **[6:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=388)** We're not going to be happy if we gave the customer too much food.
>
> **[6:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=391)** So in order to do this, let me show you how to do a left-tailed, right-tailed, and then we'll do the two-tailed as well.
>
> **[6:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=397)** So you can see right there I gave you the formula that that you want to use for a left-tailed test.
>
> **[6:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=401)** So it's NORM.S.DIST, and all you do is provide the Z-score that you're using and then you type in True if we want cumulative.
>
> **[6:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=413)** Now we're not looking for a left-tailed test.
>
> **[6:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=415)** If you were looking for a right-tailed test, it would just be one minus this number right here.
>
> **[7:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=424)** But we're looking for a two-tailed test.
>
> **[7:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=426)** We're saying, well, we're not going to be happy if it's here or here.
>
> **[7:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=431)** And we know that the left-tailed test is 0.280 and that would mean that this side is going to be equal.
>
> **[7:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=438)** So what we're going to do is we're going to say it's two times the minimum number of these two.
>
> **[7:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=445)** So I'm going to type it in this way right here.
>
> **[7:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=449)** And there we go.
>
> **[7:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=450)** Our two-tailed test P-value is 0.0560 and that is going to be the P-value that we use right here.
>
> **[7:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=458)** Now remember, we're looking for something that is less than 0.05.
>
> **[7:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=465)** If it's smaller than that, that means this is kind of an outrageous outcome, very, very unlikely in which case we will reject our null hypothesis.
>
> **[7:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=474)** But you can tell already, because I put this formula in here that we say no, we cannot reject the null hypothesis.
>
> **[8:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=481)** Why?
>
> **[8:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=482)** Because this is within our expected values.
>
> **[8:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=484)** If we said 5% is our threshold, this is actually within 5.6%, this is actually within expectations, barely, but it is within expectations.
>
> **[8:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=494)** Now, let's go to real life here, all right?
>
> **[8:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=497)** In real life, this wouldn't be acceptable.
>
> **[8:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=500)** Number one, you can't advertise to customers that you're going to give them 40 pounds in a bag and they not get 40 pounds in the bag.
>
> **[8:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=507)** So maybe even though they say that they're going to give you 40 pounds, there's going to be more than 40 pounds.
>
> **[8:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=513)** Trust me that when you're buying something and it says 40 pounds, they have to have 40 pounds or more in the bag.
>
> **[8:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=519)** So they probably should set their null hypothesis to be higher than that.
>
> **[8:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=524)** The other thing that concerns me about this and you might say again, this doesn't look reasonable here, nobody would get that little dog food in their dog food bag, is the population standard deviation.
>
> **[8:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=534)** This curve is rather wide.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=538)** And what companies are going to do is they're going to try and make that more narrow so most customers are getting the same amount of dog food.
>
> **[9:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=544)** So they should be having, first of all, they should have a higher standard mean that they're looking for.
>
> **[9:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=550)** And the other thing is they should probably tighten this up a little bit and have a smaller standard deviation.
>
> **[9:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=555)** All right, so let's move on to our next example.
>
> **[9:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=559)** In that case, we knew what the population standard deviation was but in this case it's a little bit different.
>
> **[9:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=567)** So in this scenario, we have a natural medicine organization that believes that they know of a herbal supplement that reduces the recovery time for the common cold.
>
> **[9:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=577)** And they look to this trusted medical organization that states that the average recovery time for victims of the common cold, it's about 8.5 days.
>
> **[9:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=586)** Now, no population standard deviation was provided by this trusted medical organization, but we do know that the average recovery time has been stated as 8.5 days.
>
> **[9:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=599)** Now, a random sample of 20 patients with the common cold were given this herbal supplement.
>
> **[10:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=605)** And we want to know whether or not this herbal supplement is reducing recovery times.
>
> **[10:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=611)** And you can already see the sample that we have over here.
>
> **[10:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=613)** It's a small sample, but the recovery time, the mean recovery time for that small sample was 7.8 days which is much lower than the 8.5 days that's expected.
>
> **[10:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=626)** So let's perform a hypothesis test here.
>
> **[10:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=629)** Remember step one is what have we accepted?
>
> **[10:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=632)** We have accepted that the mean recovery time is 8.5 days.
>
> **[10:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=637)** But when we're looking at this, we're saying, well, this group seems to be behaving a little bit differently.
>
> **[10:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=642)** We think that the supplement might decrease the recovery time.
>
> **[10:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=646)** So we're going to say that we believe that the alternative hypothesis that mu is less than 8.5, right?
>
> **[10:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=653)** So step one is done.
>
> **[10:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=654)** We have our null hypothesis, we have our alternative hypothesis.
>
> **[10:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=658)** Step two, we establish a level of significance and we're going to go with the typical 5% significance level.
>
> **[11:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=665)** If this outcome that we have with our small little sample over here is less than 5% likely in a normal distribution, well then we might start to consider that maybe this herbal supplement is helping.
>
> **[11:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=679)** All right, so let's go to step three, working with our test statistic.
>
> **[11:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=682)** Now remember, couple things.
>
> **[11:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=684)** First, this is a very small random sample.
>
> **[11:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=688)** And the other thing is that we are not given the population standard deviation.
>
> **[11:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=693)** We're going to be using the sample standard deviation, and as a result, we can't use the Z-score, we're going to be using the T-statistic here.
>
> **[11:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=700)** So let's go ahead and we actually have the formula here for our T-statistic.
>
> **[11:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=705)** It's X-bar, which we know, minus R expected mu, which we know, our S, which is right here, and our N, which we're going to find quickly here.
>
> **[11:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=716)** So let's go ahead and our sample standard deviation, we know it to be as 1.775.
>
> **[12:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=723)** Our sample mean is that 7.81.
>
> **[12:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=729)** My sample size, how many readings do we have here?
>
> **[12:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=735)** Oh, our sample size is only 16, up here it's stated as 20, but actually it's 16.
>
> **[12:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=740)** So let's go ahead and go with the 16 that is what we are given.
>
> **[12:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=744)** And I want you to remember, for our T-statistic, eventually we're going to need what's called the degrees of freedom.
>
> **[12:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=751)** And the degrees of freedom is just our sample size minus one.
>
> **[12:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=755)** So let's go ahead and calculate that.
>
> **[12:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=758)** Our degrees of freedom is 16 minus one, and now we have that.
>
> **[12:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=763)** So now we're ready for our estimated standard error and we will get back to our degrees of freedom in just a little bit.
>
> **[12:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=768)** Right now we don't need it quite yet.
>
> **[12:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=770)** Our estimated standard error, if you're wondering, well what is that?
>
> **[12:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=774)** That is the bottom portion of our formula here.
>
> **[12:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=776)** It's that S divided by the square root of N.
>
> **[13:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=780)** So let's go ahead and figure that out.
>
> **[13:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=782)** Our S is our sample standard deviation of 1.775 divided by the square root of our sample size, not the degrees of freedom, the sample size.
>
> **[13:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=796)** And there you go.
>
> **[13:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=796)** That's our estimated standard error.
>
> **[13:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=797)** So the question is, how many standard deviations is our sample mean from our expected population mean?
>
> **[13:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=806)** So here we go.
>
> **[13:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=807)** Our T-score is going to be X-bar minus our mu divided by our standard error and we get a T-score of negative 1.55.
>
> **[13:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=825)** All right.
>
> **[13:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=826)** So let's go and review a little bit of what we know about the T-statistic.
>
> **[13:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=831)** Remember our T-statistic is we don't have one distribution here.
>
> **[13:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=837)** We have one distribution curve for each and every degree of freedom.
>
> **[14:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=843)** For each sample size, there's a different curve.
>
> **[14:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=846)** As the sample size gets bigger, and let's assume that the black curve here is our normal distribution, the smaller our sample size, the less and less it looks like our normal distribution, so we get a flatter curve and the flatter curve also has bigger, fatter tails over here as well.
>
> **[14:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=868)** So let's go ahead and figure out our T-statistic and our formula for our T-statistic is what you see right here, that T.DIST.
>
> **[14:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=876)** So T.DIST.
>
> **[14:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=881)** And it's asking us, first of all, what is your T-score?
>
> **[14:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=885)** And we know it to be negative 1.55.
>
> **[14:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=889)** My degrees of freedom, well, we just figured that out a little while ago, our degrees of freedom are 15 and then we just type in true 'cause we want it to be cumulative.
>
> **[15:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=901)** And you'll notice here that this has given us a [[Probability]] of 0.0711.
>
> **[15:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=912)** That's our left-tailed test.
>
> **[15:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=913)** And as I said before, if this is our left-tailed test, one minus this number, that is our right-tailed test.
>
> **[15:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=920)** And if we were doing a two-tailed test, then we would just double the smaller of these two numbers.
>
> **[15:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=926)** But in this case, we want a left-tailed test.
>
> **[15:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=929)** We want to know whether or not we are in this zone over here.
>
> **[15:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=934)** If you're in this zone, that means that we can reject the null hypothesis.
>
> **[15:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=938)** This would mean that, wait a second, I think that this is actually making an impact.
>
> **[15:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=943)** Well, let's go ahead and test this here.
>
> **[15:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=946)** Since it's a left-tailed test, we grab this number and it says that we cannot reject our null hypothesis.
>
> **[15:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=953)** By the way, I want to look at one other thing here, what would be the T-score that is required for me to reach that level of significance?
>
> **[16:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=962)** And you can see I gave you a formula right here, T.INV.
>
> **[16:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=969)** And if I was looking for a 5% level of significance with 15 degrees of freedom, all right, what did we just do?
>
> **[16:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=983)** Well, I just figured out that this T-score, this threshold T-score, bring this back up here.
>
> **[16:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=992)** I just figured out that this red line is negative 1.753.
>
> **[16:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1002)** And so if my T-score is smaller so it fits to the right, to the left rather of this negative 1.753, then we would reject.
>
> **[16:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1015)** But the T-score that we had is negative 1.55.
>
> **[16:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1019)** So that means that we're in this zone over here and that means that we cannot reject the null hypothesis.
>
> **[17:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1024)** This is not enough evidence for us to believe that this herbal supplement is making an impact.
>
> **[17:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1032)** All right, we're done.
>
> **[17:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1033)** We did it with a Z-score and T-score.
>
> **[17:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-means?u=76281980&t=1036)** You're all set to do hypothesis tests with means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Probability]] (1)
> **Versions:** 8.5 (5), 39.59 (3), 1.91 (3), 1.55 (3), 1.5 (2)
> **Env Vars:** dist (3), norm (1), inv (1)
> **UI Navigation:** go to (5)
> **Definitions:** means that (3), is a  (2)
> **CLI Commands:** find (2), make (2)
> **Speakers:** - [instructor] (1)

#### [Hypothesis test exercise (proportions)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=0)** - [Instructor] In this video, we'll be looking at hypothesis test for proportions.
>
> **[0:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=4)** We'll compare a sample proportion to an expected outcome.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=8)** In this scenario, we'll investigate whether an upcoming election is still undecided based on a recent poll of likely voters.
>
> **[0:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=16)** We will, of course, use [[Microsoft Excel|Excel]] to perform our hypothesis test.
>
> **[0:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=20)** But before we head over to Excel, let me show you a formula we'll utilize for this hypothesis test.
>
> **[0:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=26)** Here's the formula for our z-score, which will be our test statistic.
>
> **[0:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=30)** p hat is the sample proportion, p naught is the expected population proportion, and n is our sample size.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=38)** As usual, don't worry, I'll show you this formula again in Excel when we need it.
>
> **[0:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=43)** Okay, let's head over to Excel and conduct a hypothesis test.
>
> **[0:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=48)** All right, so first let's go through our scenario.
>
> **[0:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=50)** We have a Candidate X.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=52)** Candidate X is in an election here, and Candidate X's team just got access to data from a recent voter's poll.
>
> **[1:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=60)** And what they found is that in this voter's poll, 500 people were polled.
>
> **[1:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=64)** And of the 500 people, 271 of those people said that they were going to vote for Candidate X.
>
> **[1:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=70)** And of course, Candidate X is feeling pretty good about this.
>
> **[1:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=73)** Now, the question, of course, is: Should Candidate X feel confident that they will win the election based on this particular poll?
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=81)** And so this is a great opportunity to perform a hypothesis test.
>
> **[1:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=85)** And we're going to go through all of our steps here, steps one through five.
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=88)** So let's begin with step one, which is we're going to develop our two hypotheses.
>
> **[1:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=93)** And our first hypothesis, H naught, says, "Look, the election hasn't taken place.
>
> **[1:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=99)** Nobody's won, everybody's equal up until this point.
>
> **[1:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=103)** We believe that the population of people voting is still equal."
>
> **[1:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=107)** So p naught is equal to 0.50.
>
> **[1:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=113)** Everything is equal.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=115)** And we're saying, "No, no, look.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=117)** They just took this poll and the poll's looking very much in our favor based on what we're seeing.
>
> **[2:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=123)** We think we're going to win."
>
> **[2:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=125)** So we think the alternative hypothesis is that p naught, which is the proportion of people that are going to vote for Candidate X, is actually greater than 0.50.
>
> **[2:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=136)** So that's our alternative hypothesis.
>
> **[2:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=138)** And step number two, we're going to establish our significance level.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=142)** So let's go with what we typically take, that 5% significance level.
>
> **[2:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=146)** It's possible that the candidate may say, "Look, I really want to make sure that we're going to win this.
>
> **[2:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=151)** Let's make it a 2% or 3% significance level."
>
> **[2:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=154)** We'll just keep it simple.
>
> **[2:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=156)** We'll keep it at a 5% significance level.
>
> **[2:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=159)** So now, it's time for our test statistic.
>
> **[2:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=161)** And our test statistic is going to be our z.
>
> **[2:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=164)** We want to know how many standard deviations from the mean, which remember, is 0.50, how many standard deviations is our result above that?
>
> **[2:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=175)** And is it within the accepted and expected outcomes or is it far, far to the right?
>
> **[3:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=181)** In which case, it is something that is very outlandish in terms of if we think stings are still equal.
>
> **[3:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=188)** So let's go ahead and begin.
>
> **[3:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=189)** Our expected population proportion, well, null hypothesis says that everything is equal.
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=195)** So we're going to use that as our p naught.
>
> **[3:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=199)** We have 271 yes votes in our sample.
>
> **[3:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=203)** Our sample size was 500 and our sample proportion is just going to be the 271 divided by our 500.
>
> **[3:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=215)** So we can see that 0.542, that's our proportion, that's our p hat.
>
> **[3:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=222)** Next, we need our standard deviation of our sampling distribution.
>
> **[3:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=226)** So we're going to take this right here, our square root of p, times one minus p all over n.
>
> **[3:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=237)** And so for this, what we're going to do is... And you might say, "Well, which particular p are we using?"
>
> **[4:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=244)** We're going to be using our p naught, so SQRT, our square root of, and we're going to have p naught times one minus our p naught divided by n.
>
> **[4:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=269)** Oh, I typed in n and we need to give it what n is right there.
>
> **[4:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=275)** And so there we go.
>
> **[4:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=276)** That is our standard deviation of our sampling distribution is 0.0224.
>
> **[4:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=281)** And the way you want to think about that is that is one standard deviation in terms of what we're looking for.
>
> **[4:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=287)** Now of course, we're looking at: How many standard deviations is our outcome to the right of the 0.50?
>
> **[4:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=295)** So for that, we'll figure out our z-score.
>
> **[4:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=299)** And our z-score is going to be our p hat minus our p sub zero divided by the standard deviation of the sampling distribution, this number right here.
>
> **[5:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=314)** And we come out with a score of 1.88.
>
> **[5:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=316)** So we are 1.88 standard deviations to the right of 0.50.
>
> **[5:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=323)** Now the question is: Is that interesting?
>
> **[5:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=326)** Is that significant?
>
> **[5:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=327)** Is that enough for us to reject the null hypothesis?
>
> **[5:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=331)** So let's go to step number four and find 1.88.
>
> **[5:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=336)** What is the p-value that we are looking at here?
>
> **[5:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=339)** So let's begin with left, we always want to begin with the left one because we have the formula for that.
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=344)** The formula for our left tail test is NORM.S.DIST.
>
> **[5:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=351)** And if we were had a positive score of 1.88 for our z-score, and we type in true for cumulative, and I have something wrong here.
>
> **[6:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=362)** Oh, I see what I have.
>
> **[6:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=363)** I have an extra parentheses in there, I'll take that out.
>
> **[6:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=367)** There we go.
>
> **[6:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=368)** And our right tail test is one minus the left tail test.
>
> **[6:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=372)** And our two tail test is two times the smaller of these two numbers.
>
> **[6:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=376)** And in this case right here, we're obviously looking for a right tail test because we would love to be on the right side of this particular z right here.
>
> **[6:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=387)** So that's going to be our p-value.
>
> **[6:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=391)** And in this case, because our p-value is smaller than our alpha, we can reject the null hypothesis, so we can reject that there's no winner.
>
> **[6:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=403)** Now, does this mean we're going to win?
>
> **[6:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=404)** No, it doesn't necessarily mean we're going to win, but it does mean that there's evidence that we could win this election.
>
> **[6:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=412)** We could be feeling pretty good about this.
>
> **[6:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=414)** By the way, if you were wondering, "What's the threshold here of what we're looking for?"
>
> **[6:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=418)** You can also do it this way.
>
> **[6:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=419)** You can say NORM.S.INV, and we were looking for a 5% significance level, which is in B35 I believe I forgot the true.
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=437)** It's actually C35.
>
> **[7:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=441)** And there we go.
>
> **[7:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=442)** You might say, "Well, what is that number?"
>
> **[7:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=444)** That is this right here.
>
> **[7:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=447)** 1.644.
>
> **[7:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=451)** That represents the red line.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=455)** If the number is smaller than 1.64, that means that we cannot reject the null hypothesis.
>
> **[7:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=462)** But in this case, we got a z-score of 1.88.
>
> **[7:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=465)** That's to the right.
>
> **[7:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=466)** That means that we're in the rejection zone, that we are really doubting whether this null hypothesis is actually true.
>
> **[7:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=474)** All right, so now you know how to do hypothesis tests for proportions.
>
> **[7:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-exercise-proportions?u=76281980&t=479)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4)
> **Versions:** 0.50 (5), 1.88 (5), 0.542 (1), 0.0224 (1), 1.644 (1)
> **Env Vars:** norm (2), sqrt (1), dist (1), inv (1), b35 (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** means that (2), is a  (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)


### 4. Comparing Two Populations

[↑ Back to Table of Contents](#table-of-contents)

#### [Explanation of two population comparisons](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=0)** - [Instructor] Up until now, we've tested one population by using one sample.
>
> **[0:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=4)** And then testing that one sample versus a statement or belief.
>
> **[0:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=10)** But what if we have two groups.
>
> **[0:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=12)** For example, think about asking and answering practical questions like this: Which is more likely to reduce the chance of a heart attack?
>
> **[0:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=21)** Aspirin or a placebo?
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=24)** Which group is more likely to own their own company?
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=27)** Women in their twenties or men in their twenties?
>
> **[0:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=31)** Notice we keep using the words "more likely" in each scenario.
>
> **[0:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=36)** What makes all these questions similar is that each situation can be analyzed by comparing two independent random samples, one from each population.
>
> **[0:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=48)** For example, we can compare the proportion of aspirin takers that experienced a heart attack versus the proportion of people that took a placebo and experienced a heart attack.
>
> **[0:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=59)** We can do this by using hypothesis testing to compare the difference between the proportions for each of our independent samples.
>
> **[1:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=67)** But, this doesn't just work for proportions.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=71)** We can also analyze two groups that have different means.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=76)** Consider this situation.
>
> **[1:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=78)** 200 males in their thirties are randomly assigned to two groups for a period of three months.
>
> **[1:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=85)** One group of males is required to exercise two hours per day, but they're allowed to eat whatever they want.
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=92)** The other group of males are not required to exercise but they must adhere to a very strict diet.
>
> **[1:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=100)** The males on the strict diet, they lose an average of four pounds more during the three month period versus the individuals that are required to exercise daily.
>
> **[1:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=111)** Is diet a more effective weight loss technique versus daily exercise for males in their thirties or was this the result of chance?
>
> **[2:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=124)** Sure, the data sounds convincing, but perhaps the weight loss program was not the differentiator.
>
> **[2:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=130)** Maybe it was genetics.
>
> **[2:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=131)** Perhaps one of the groups had more men genetically inclined to lose more weight.
>
> **[2:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=137)** For these men it didn't matter which group they were in.
>
> **[2:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/explanation-of-two-population-comparisons?u=76281980&t=141)** In this chapter, we'll use [[Microsoft Excel|Excel]] to help us compare two populations by performing hypothesis tests on two independent samples, and we'll do it for both proportions and means.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (1)
> **Prerequisites:** required to (3)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Comparing two populations (proportions)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=0)** - [Instructor] All right, so in this video, what I'm going to do is I'm going to do a hypothesis test when we have two populations, two independent populations, and in this case our populations are characterized by two proportions.
>
> **[0:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=15)** All right, so let's begin with the scenario.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=17)** A new drug is being tested to see if it can reduce the chance of heart attacks.
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=22)** So what they do is they create two groups.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=24)** In one group, they put people and they give them the new drug.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=29)** In the other group, they give them a placebo.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=32)** Now the first group, the new group, the new drug group, rather, they have 2,219 participants and of those 2,219 participants, 26 of them, when tracked over time, 26 of them had a heart attack.
>
> **[0:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=48)** The placebo group, they had 2,035 participants.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=52)** You might say, "Well, why are the sample sizes different?"
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=54)** Well, because in these long studies, sometimes people drop out of the studies, people don't report.
>
> **[0:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=59)** But let's say in this particular case they had 2,035 participants and 46 of them had a heart attack.
>
> **[1:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=68)** Now that looks like a significantly larger group.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=71)** Maybe this new drug is having an impact.
>
> **[1:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=75)** How can we tell?
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=76)** Well, of course, what are we going to do?
>
> **[1:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=78)** We're going to do a hypothesis test and in this case, again, we have two groups.
>
> **[1:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=83)** So what we're going to see is whether or not these two groups are equal or are they different?
>
> **[1:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=89)** Now you might say, "It looks like they're different right now."
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=92)** But we want to know.
>
> **[1:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=93)** Remember this is a sample.
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=95)** Is it possible that these two groups are equal and it just happened that these random samples fall within our expected limits.
>
> **[1:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=102)** So let's begin, step number one.
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=105)** Step number one, we believe that everything is equal.
>
> **[1:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=109)** The new drug, the placebo, they're all the same.
>
> **[1:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=112)** That would mean that the [[Probability]] or the proportion of people with heart attacks in Group 1 and the proportion of people with heart attacks in Group 2, that would ultimately be the same.
>
> **[2:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=124)** So we think that P1 minus P2 is actually zero.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=129)** And then when we look at this, we say, "Well look, the new drug group, they seem to have heart attacks at a much smaller rate than the placebo group."
>
> **[2:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=139)** And we're starting to think that maybe there's an alternative hypothesis, that the two groups aren't equal, the new drug is actually better.
>
> **[2:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=146)** So we're going to say that P1 minus P2 is not zero.
>
> **[2:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=152)** Our level of significance here is going to be 5%, our usual.
>
> **[2:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=157)** Again, if you wanted to go with a 1%, 2%, 10%, that's up to you.
>
> **[2:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=162)** We're going to stick with the 5% here.
>
> **[2:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=164)** And what we're going to be doing is we're going to have to form our test statistic and we're going to be using a z-test statistic.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=171)** We have big groups, we have big sample sizes, we have some helpful information.
>
> **[2:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=176)** Now the formulas here do get a little bit uglier and so I'm going to walk you through and we're going to take this piece by piece.
>
> **[3:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=182)** Ultimately we're trying to fill in this Z statistic right here.
>
> **[3:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=186)** And you'll notice that for the Z statistic, we have P1 which is going to be the probability of people in the new group getting a heart attack.
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=195)** P2 is going to be the probability of people in the placebo group having a heart attack.
>
> **[3:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=200)** And you might see N1 and N2, that's our sample size for Group 1 and our sample size for Group 2.
>
> **[3:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=206)** But then you see this p-hat here and you're probably saying to yourself, "Wait a second, is that p-hat for Group 1 or Group 2?"
>
> **[3:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=213)** This is actually the p-hat for the entire population, so for everybody, whether they were in the new drug group or the placebo group.
>
> **[3:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=223)** So let's go ahead and find these individual numbers right here that we're going to need to plug in our formula, and then we'll talk about this standard of error in just a moment.
>
> **[3:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=232)** So we know 26 out of 2,219 people had a heart attack and that's our new group.
>
> **[3:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=237)** So the proportion of group number one, the new drug group is just 26 divided by our sample size for the new drug, so that is 0.0117.
>
> **[4:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=251)** And the P2, the proportion of people in the placebo group is 46 divided by 2,035.
>
> **[4:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=260)** And so we can see that it's pretty much double the rate that get a heart attack with the placebo.
>
> **[4:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=265)** Now again, this could have happened by chance.
>
> **[4:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=267)** We could have just had healthier people in the new drug group, but we don't know that.
>
> **[4:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=272)** And what we want to do now is we also want to find that p-hat for the entire group.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=278)** So for this we're going to say, "Well, what's the total number of people that got a heart attack?"
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=284)** It was the 26 plus the 46, and the total number of people that were in our study was 2,219 plus our 2,035.
>
> **[4:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=298)** And there we go, we have our p-hat for the entire population is 0.01693.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=306)** So about 1.7% of people had heart attacks but the new drug group, only 1.1% or 1.2% of people had a heart attack, and in our placebo group it was over 2%.
>
> **[5:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=319)** It was 2.26% that had a heart attack.
>
> **[5:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=322)** Now we're going to come back and we're going to use some of those numbers, but the first thing that we want to find here, or find at least in pieces is our standard error.
>
> **[5:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=330)** So our standard error is that bottom part of this Z formula.
>
> **[5:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=335)** And I've taken it, and I've put it over here 'cause we want to take this piece by piece 'cause this is going to be rather big to put into [[Microsoft Excel|Excel]].
>
> **[5:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=342)** So what I'm going to do is I'm going to break this up into two parts.
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=344)** So let's first figure out what p-hat times one minus p-hat is.
>
> **[5:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=349)** And p-hat, remember, is just this number here, the total population, so it's going to be equals p-hat times one minus p-hat.
>
> **[6:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=361)** So we now have that first part of our calculation.
>
> **[6:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=366)** The second part of the calculation is one over n minus one plus one over n minus two.
>
> **[6:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=373)** So one divided by n minus one plus one divided by n minus two.
>
> **[6:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=384)** And so now what we have here is we have the first part of the formula, we have the second part of the formula.
>
> **[6:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=391)** And what I did here was, I've already taken care of this for you, the square root of this times this and it gives us a standard error of 0.0040.
>
> **[6:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=405)** This tells us that's one standard deviation on our distribution chart.
>
> **[6:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=409)** What we want to figure out is, And so when we go to our z-score, That is the number of standard deviation.
>
> **[7:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=424)** Now, when you look at the top, you might say, "What am I looking at here?"
>
> **[7:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=428)** Well, the first part is a little easy to figure out.
>
> **[7:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=433)** group number one and group number two.
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=437)** "But why are we subtracting it from zero?"
>
> **[7:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=439)** Because what we're doing is we're comparing it to what our expectation would be.
>
> **[7:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=444)** Our expectation is that there's no difference between these groups.
>
> **[7:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=448)** So that's really like saying P1 minus P2 is equal to zero.
>
> **[7:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=452)** So that is why we're subtracting from zero right here.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=455)** We're expecting them to be identical but we know that right now these two groups are not.
>
> **[7:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-proportions?u=76281980&t=460)** So let's go ahead and type this in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (3), [[Microsoft Excel|Excel]] (1)
> **Versions:** 0.0117 (1), 0.01693 (1), 1.7 (1), 1.1 (1), 1.2 (1)
> **CLI Commands:** find (4)
> **Definitions:** is a  (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Comparing two populations (means)](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=0)** - [Instructor] In this video, we're going to perform hypothesis tests on two means, when we have two different means.
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=7)** And let's look a look at this particular scenario so we'd understand what we're looking at here.
>
> **[0:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=11)** So in this particular scenario, we have a company that has developed a [[Simulation]] app, and this app is supposed to help people understand math concepts.
>
> **[0:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=20)** And the company tested the simulation by working with two different math classes.
>
> **[0:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=25)** One class had access to the math simulation the other class did not.
>
> **[0:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=30)** They just used traditional study techniques to get ready for their exam.
>
> **[0:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=35)** Now, the class that utilized the simulation, they performed much better, or it seems like they performed better on the standardized math exam.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=44)** Now the question here is, did the simulation actually make an impact or did this happen by chance?
>
> **[0:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=50)** Is it possible that the people that had access to the simulation, they would've just scored better on the exam no matter what?
>
> **[0:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=58)** All right, so this is obviously a really good opportunity to perform a hypothesis test.
>
> **[1:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=64)** So what we're going to be looking at here is we're comparing two different populations and each population has a different mean.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=71)** Now, the null hypothesis, so step number one, our null hypothesis, we would say, "You know what?
>
> **[1:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=78)** We think that these two groups, they're just the same.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=81)** I understand that one group had a better result than the other, but we believe that everything is just the same."
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=88)** Now, the other one says, "Well, look, the simulation seems to have actually helped one of the groups."
>
> **[1:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=94)** Let's actually check on that.
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=95)** All right, so what are the differences?
>
> **[1:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=98)** So the average score for our simulation group is 151.9.
>
> **[1:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=109)** The number of students in that particular group is 57.
>
> **[1:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=118)** So we have our sample size for the simulation group, 57 and we have our X bar of 151.9.
>
> **[2:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=126)** How about the students that didn't have access to the simulation?
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=129)** The group that just utilized traditional study methods?
>
> **[2:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=133)** So their average was 140.7, so looks significantly lower.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=142)** How many students were in this particular group?
>
> **[2:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=150)** And they had 52.
>
> **[2:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=151)** Now in this particular case, because this is a standardized exam we have the population standard deviation.
>
> **[2:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=159)** The population standard deviation is 35.5 for both groups.
>
> **[2:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=165)** And I've also provided you with the variance.
>
> **[2:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=167)** And the variance, in case you're wondering, is just our 35.5 squares.
>
> **[2:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=172)** So the variance is also going to be the same for both of our groups.
>
> **[2:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=176)** But let's get back.
>
> **[2:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=177)** Now that we understand that the simulation group had a higher average than our traditional group, let's go back to our hypothesis test where step one, developing our hypothesis, we're saying, "No, you know what?
>
> **[3:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=189)** I know what the test scores are saying but we believe that these groups are the same."
>
> **[3:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=194)** And of course, the company that developed a simulation, they're saying, "You know what?
>
> **[3:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=199)** I think that our simulation actually helps.
>
> **[3:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=202)** So we believe that mu minus mu two, mu one minus mu two should actually be greater than zero."
>
> **[3:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=210)** So this is going to be a one-tailed test and we'll get down there in just a moment.
>
> **[3:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=214)** Our level of significance is going to be our traditional 5%.
>
> **[3:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=218)** So alpha is going to be 0.05.
>
> **[3:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=220)** So if this particular group with this particular difference in averages is less than 5% likely in our distribution, then we would reject the null hypothesis.
>
> **[3:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=234)** So we'll get there eventually.
>
> **[3:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=236)** Step three, we're going to look at our test statistic and we're going to use a test statistic of Z.
>
> **[4:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=242)** Now look at that formula for Z.
>
> **[4:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=244)** That's kind of ugly there, isn't it?
>
> **[4:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=246)** X-bar one minus X-bar two minus the quantity of mu one minus mu two.
>
> **[4:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=253)** Now, first thing that we want to realize here, let's get the easy part, mu one minus mu two, we're expecting that difference to be zero.
>
> **[4:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=263)** X1 and X2, we have those already.
>
> **[4:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=266)** That is our 151.9 and our 140.7.
>
> **[4:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=270)** Now the bottom of this formula is our standard error.
>
> **[4:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=274)** And so this is going to take a little bit of effort.
>
> **[4:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=277)** I've done a little bit of the work for you here.
>
> **[4:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=280)** We're going to calculate this by having our square root of all of this but let's figure this out sort of piece by piece.
>
> **[4:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=288)** So my sigma one squared divided by n1 squared, this is going to be my sigma one squared divided by n1.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=306)** And then here I'm going to have sigma two squared and we're going to divide that by n2.
>
> **[5:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=316)** And so we add this, we add this, we take the square root, and that's going to give us our standard error.
>
> **[5:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=323)** So that's going to be the bottom of the formula.
>
> **[5:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=324)** So when we start doing Z, we say, well Z is going to be X1 minus X2, and we're going to divide all of that by our standard error.
>
> **[5:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=338)** Remember, M1 minus M2 was zero so that just kind of canceled itself out.
>
> **[5:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=343)** Our Z-score is 1.65.
>
> **[5:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=346)** So now we go to our fourth step, our P-value and this is a right-tailed test.
>
> **[5:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=354)** We want to see whether or not our utilizing the simulation has pushed us all the way to the right in a very unfamiliar territory where these students are doing significantly better.
>
> **[6:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=366)** So let's go ahead and type in our norm.s.dist for a Z-score of 1.65.
>
> **[6:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=376)** And we want this to be cumulative, we type in true.
>
> **[6:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=380)** And so we have our left-tailed test.
>
> **[6:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=383)** Our right-tailed test is one minus this number and our two-tailed test would be this.
>
> **[6:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=387)** But this is a right-tailed test.
>
> **[6:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=389)** So this is the P-value that we're interested in.
>
> **[6:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=394)** Oh, that's pretty close.
>
> **[6:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=395)** Look at that.
>
> **[6:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=396)** Our P-value is 0.0491.
>
> **[6:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=402)** Our level of significance was 0.05, really close but this is just small enough that it is in our rejection zone.
>
> **[6:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=412)** We are far to the right.
>
> **[6:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=414)** And so yes, we should reject the null hypothesis.
>
> **[6:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=418)** Now, some people would feel a little uncomfortable, it's so close, and they'd say, "Well, maybe we should do this again."
>
> **[7:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=422)** And that's possible but this is definitely pointing in the direction that the simulation may have helped.
>
> **[7:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=429)** That was a lot of work.
>
> **[7:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=430)** Luckily though, we have [[Microsoft Excel|Excel]].
>
> **[7:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=432)** And Excel can do a lot of this work for us much more quickly.
>
> **[7:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=436)** So let's go over to the data tab and we're going to go onto data analysis and we're going to find our Z-test for two sample for means, which is what we just did.
>
> **[7:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=450)** Our variable range one is going to be for the simulation group.
>
> **[7:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=460)** Our variable range two is for our traditional group.
>
> **[7:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=470)** I did include the labels.
>
> **[7:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=471)** That makes things a little bit easier usually.
>
> **[7:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=473)** So I'm going to click on this and then we have our hypothesized mean difference.
>
> **[7:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=478)** We're saying that they're the same.
>
> **[8:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=480)** So this should be zero.
>
> **[8:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=482)** My variance that was given to us is 1260.25.
>
> **[8:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=487)** And that's going to be for both scenarios.
>
> **[8:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=493)** And we're going to put our output right here on this page.
>
> **[8:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=497)** We'll do it right there.
>
> **[8:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=501)** Okay, let's click OK.
>
> **[8:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=506)** Just like that, it's done.
>
> **[8:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=508)** And let's see what it gives us.
>
> **[8:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=514)** Shows us our means and our observations, which match up with what we have here.
>
> **[8:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=520)** 151.9, 57, 140.7 and 52.
>
> **[8:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=526)** We have our Z-score of 1.65 which is exactly what we had right there.
>
> **[8:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=535)** And this is a one-tailed test with our Z-score of 0.049.
>
> **[9:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=546)** And pretty much everything matches up.
>
> **[9:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=549)** So you can do it the long way, which is the way I did it originally or you could do it the much faster way and trust that it works.
>
> **[9:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=557)** In this case here, we were given a fairly large sample size but more importantly, we were given the population standard deviation.
>
> **[9:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=566)** In some cases, you don't have access to the population standard deviation.
>
> **[9:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=570)** So let's do another problem and let's see if we can do it a little bit quickly here.
>
> **[9:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=574)** What happens in this particular case?
>
> **[9:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=575)** Well, when we don't have access to the population standard deviation, we know we can't use the Z-score we need to use our T-score.
>
> **[9:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=582)** So we're going to get to that in just a moment.
>
> **[9:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=583)** But let's look at this particular scenario.
>
> **[9:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=586)** We have two fitness counselors and each of them believes they developed a method for people to lose weight.
>
> **[9:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=592)** One of the fitness counselors has developed a program with a very strict diet, but that diet does not require these people to exercise.
>
> **[10:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=601)** The other person, they developed an exercise routine.
>
> **[10:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=604)** So they said, "Look we're going to have you do this daily exercise but you can eat whatever you'd like."
>
> **[10:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=609)** So they create two groups, two small groups and after six months, they measure the results.
>
> **[10:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=616)** And the counselor that developed the diet method, they believe that their method is a little bit better.
>
> **[10:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=622)** And you'll notice right here, the diet average was 8.8 with a small sample size of 16 people that participated for the six months.
>
> **[10:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=631)** And the exercise group averaged 6.2 pounds lost.
>
> **[10:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=636)** Their group was a little bit smaller, about 14 for the six months.
>
> **[10:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=640)** So the question is does this support the counselor believing that their diet method is better?
>
> **[10:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=648)** So let's begin.
>
> **[10:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=651)** Step number one are null hypothesis.
>
> **[10:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=653)** We're saying these two groups are the same.
>
> **[10:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=655)** mu one minus me two is zero.
>
> **[10:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=658)** And of course, the counselor that developed a diet, they say, "No, I believe the diet is more effective.
>
> **[11:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=664)** So I believe that mu one, the diet group, minus mu two should actually be greater than zero."
>
> **[11:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=671)** So it looks like a right-tailed test, again, to me, our level of significance is going to be 5%.
>
> **[11:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=677)** We already have our X-bar one, and our sample size for group number one.
>
> **[11:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=683)** The standard deviation of our sample for our diet group is 5.43.
>
> **[11:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=693)** And the variance is just that number squared.
>
> **[11:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=696)** And then we can do the standard deviation of our sample for our exercise group, and it comes out to be 4.54.
>
> **[11:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=706)** Now, if you thought we had some ugly formulas before, well, it's just going to get a little bit uglier right here.
>
> **[11:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=713)** So our standard error is our S1 squared the over N1 plus our S2 squared over N2 and we take the square root of that.
>
> **[12:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=723)** And happily, I've already input those formulas for you.
>
> **[12:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=727)** I found the standard error, which is going to be the bottom, the denominator of our formula.
>
> **[12:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=732)** We already have X1 and X2.
>
> **[12:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=735)** So when we are calculating our t-statistic, our t-statistic is going to be X-bar one minus X-bar two.
>
> **[12:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=745)** The difference between the two groups divided by our standard error.
>
> **[12:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=750)** Remember, mu one minus mu two should be zero because that's our null hypothesis.
>
> **[12:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=755)** So our t-statistic is 1.43, but we're not done.
>
> **[12:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=759)** Remember, when we're using the t-statistic we often need to know our degrees of freedom.
>
> **[12:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=767)** Here is how you calculate your degrees of freedom.
>
> **[12:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=770)** Yes, that really horrible ugly formula right there.
>
> **[12:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=775)** I have already done the calculation here for the numerator.
>
> **[12:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=779)** I've done a calculation for the denominator.
>
> **[13:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=783)** And so all we need to do to find our degrees of freedom is divide the 11.01 by our 0.39.
>
> **[13:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=793)** And look at that, 27.96 degrees of freedom.
>
> **[13:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=799)** And usually, they tell you that you're supposed to round down.
>
> **[13:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=801)** In this particular case, I'm going to round up and I'll tell you why in just a little bit here in just a moment.
>
> **[13:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=808)** So now it is time for our step four, which is the P-value.
>
> **[13:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=814)** Our P-value to find this.
>
> **[13:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=818)** Use our T.DIST with our t-score of 1.43.
>
> **[13:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=826)** Our degrees of freedom, I'm going to use 28.
>
> **[13:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=829)** So let's put a whole number in there.
>
> **[13:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=831)** You don't want to put a decimal and this is going to be true.
>
> **[13:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=837)** And oh, I put an extra parentheses in there.
>
> **[14:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=840)** Let's take that out.
>
> **[14:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=841)** There we go.
>
> **[14:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=843)** There's a right-tailed test.
>
> **[14:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=844)** So this right here is our P-value and it looks like this says do not reject.
>
> **[14:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=853)** This is 8% likely, and we're looking for something that is less than 5% likely.
>
> **[14:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=859)** Wow, that was a lot of work, right?
>
> **[14:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=861)** But thankfully, we have Excel and Excel is going to do a lot of this work for us.
>
> **[14:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=867)** You click up on data, you go over data ,analysis you go to a t-test.
>
> **[14:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=874)** So we're going to do this for two sampling with unequal variances because we have unequal variances in this case, we click OK.
>
> **[14:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=883)** And variable range number one is going to be our diet group.
>
> **[14:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=890)** Variable range number two is our exercise group.
>
> **[14:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=894)** I did use labels.
>
> **[14:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=896)** Our hypothesis mean difference is zero.
>
> **[14:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=899)** We think that the groups are the same.
>
> **[15:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=901)** We're going to use an alpha of 0.05 and let's put our results right here on this page.
>
> **[15:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=909)** We'll put them right there.
>
> **[15:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=913)** All right, let's click OK and see what happens.
>
> **[15:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=920)** So what can we see here?
>
> **[15:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=926)** Looks like a lot of numbers that we've already seen before.
>
> **[15:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=929)** Here are means, here's our variance.
>
> **[15:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=933)** Those all seem to match up well with what we have over here, 29.5, 20.64, our observations, our sample size.
>
> **[15:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=941)** And then we have the very important t-statistic which is the number we calculated right here, 1.43, 1.426.
>
> **[15:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=952)** And this is a one-tailed test.
>
> **[15:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=954)** And a one-tailed test would give us a critical P-value of 0.08.
>
> **[16:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=960)** Everything worked out.
>
> **[16:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/comparing-two-populations-means?u=76281980&t=961)** So whether you want to do this the long way, the fast way, we know that we can trust this particular process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (16), [[Microsoft Excel|Excel]] (4)
> **Versions:** 151.9 (4), 140.7 (3), 0.05 (3), 1.65 (3), 1.43 (3)
> **Definitions:** is a  (6)
> **CLI Commands:** find (3), make (1)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** dist (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)


### 5. ANOVA: Analysis of Variance

[↑ Back to Table of Contents](#table-of-contents)

#### [ANOVA: What is analysis of variance?](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=0)** - [Instructor] All right, in this chapter, we're going to cover something called ANOVA.
>
> **[0:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=5)** ANOVA stands for the Analysis of Variance.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=8)** And before we get there, let's figure out where we just came from.
>
> **[0:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=11)** We've been comparing populations.
>
> **[0:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=14)** Up until now, we've been comparing two populations.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=17)** How are they similar?
>
> **[0:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=18)** How are they different?
>
> **[0:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=20)** But ANOVA allows us to compare not two groups or not two populations but rather, three or more populations.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=29)** And we're able to see whether or not they're the same or they're different.
>
> **[0:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=34)** And if there is variance, is there variance between the groups or within the groups?
>
> **[0:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=41)** So let's begin our journey in ANOVA here.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=44)** And let's say that we have these three groups that are given to us.
>
> **[0:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=48)** Maybe it's exam scores, maybe these are customer satisfaction scores for three different companies but these are three different groups.
>
> **[0:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=57)** And each, we've grabbed a sample of three scores.
>
> **[1:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=62)** So we have a sample size of three for each one.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=65)** We've then taken the group averages and the group averages are the same.
>
> **[1:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=70)** Now the question is are these groups the same or are they different?
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=76)** And so let's begin taking this apart.
>
> **[1:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=79)** And so all I've done, going from our first sheet to the second one, is I've broken them up a little bit because we're going to calculate something called the differences square.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=91)** And what we're going to do for this case is, and you can see right here, I have taken my average of the group, this right here, and I've subtracted it from our individual data point.
>
> **[1:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=107)** And then I square this number.
>
> **[1:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=108)** So it doesn't matter if I have B10 minus B7 or B7 minus B10, it doesn't matter 'cause we're going to square it.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=117)** So it's always going to be a positive number.
>
> **[1:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=119)** Now the important thing is we want to lock in that B10 because for all of these, we're going to use the same formula.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=129)** So now we have this for everything in the group.
>
> **[2:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=134)** And so the difference squared for this data point is one, for this data point, it's the same as our group average.
>
> **[2:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=141)** So it's going to be zero and five minus four is one.
>
> **[2:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=144)** And we square that.
>
> **[2:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=146)** So we know how this works now.
>
> **[2:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=147)** So we're going to use the same formula here for this group but of course, we're not looking at column B anymore.
>
> **[2:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=156)** We are now looking at the numbers in column D.
>
> **[2:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=162)** And so my average here is four, four minus one is three and three squared is going to be nine.
>
> **[2:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=170)** So now I know I can copy this down as well.
>
> **[2:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=174)** And we're going to go over here, we're going to copy the same formula but again, we're not looking at column B anymore.
>
> **[3:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=180)** We're looking at column F.
>
> **[3:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=184)** Let's double check to make sure it's working out.
>
> **[3:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=186)** Four minus three is one and we square that number and it's one.
>
> **[3:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=193)** So I'm now going to copy this down.
>
> **[3:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=196)** And what we have is now, access to the sum of squares within.
>
> **[3:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=202)** By adding up these three numbers here, plus these three numbers here and these three numbers here, we now know the sum of squares within the groups.
>
> **[3:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=216)** Let's now move, and we call this SSW.
>
> **[3:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=219)** Let's move on to SSB.
>
> **[3:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=221)** This is the sum of squares within the groups.
>
> **[3:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=224)** We want to know are the groups different between each other?
>
> **[3:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=228)** So up until now, we've been looking at this number and comparing it to this number, these numbers, comparing it to this number.
>
> **[3:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=236)** But now what we want to do is we want to compare the group average to the population of all of the numbers, all nine numbers that were gathered between the three groups.
>
> **[4:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=249)** So the formula here is our population mean minus our group average.
>
> **[4:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=257)** And then we're going to end up squaring that and we're going to multiply it by our sample size.
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=261)** So let's go ahead and start this.
>
> **[4:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=263)** We know that our group average is four.
>
> **[4:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=265)** We know that the population mean is four so this number is zero.
>
> **[4:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=269)** Now, whatever that number is, we're going to square it.
>
> **[4:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=274)** In this case, it's just zero again.
>
> **[4:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=276)** The next thing we need to do is because we have three data points in this group, we can go ahead and count that up, because our sample size is N, we want to represent this number, the square difference.
>
> **[4:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=294)** We want to represent it three times.
>
> **[4:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=296)** So it's going to be three times our square difference, and that's just going to be zero.
>
> **[5:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=306)** Now, we can do this for pretty much all of these.
>
> **[5:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=312)** And the only formula that's going to be different is this one here because we're now comparing this to our population mean.
>
> **[5:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=321)** We're comparing this to our population mean.
>
> **[5:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=327)** Well, what have we learned so far?
>
> **[5:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=328)** We learned that the sum of squares between the groups is zero, the groups are the same.
>
> **[5:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=335)** We can tell that because the group averages are the same as the population mean.
>
> **[5:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=340)** But there is some differences.
>
> **[5:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=344)** There is variance within the groups.
>
> **[5:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=347)** By the way, when you have the sum of squares within and the sum of squares between, and you add those up, you now get what's called SST, the sum squares total, or as a lot of people prefer to say, the total sum of squares.
>
> **[6:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=364)** Now of course, we've done this the long way to begin with but [[Microsoft Excel|Excel]] allows us to do it a little bit more quickly.
>
> **[6:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=371)** Now, we want to take out all the spaces here.
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=374)** These are our original three groups.
>
> **[6:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=376)** These are the three data points for each group.
>
> **[6:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=380)** And of course, we're going to go to our Data tab.
>
> **[6:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=382)** We're going to go to Data Analysis.
>
> **[6:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=386)** We scroll to the top.
>
> **[6:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=387)** This is single factor ANOVA, what we're doing in this course, and we're going to click Okay.
>
> **[6:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=395)** And our input range, well, that's just going to be this right here.
>
> **[6:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=401)** And we'll use labels, always helpful in looking at our data afterwards.
>
> **[6:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=407)** Our alpha, and we'll get to this eventually in our next video, so don't worry about that now.
>
> **[6:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=412)** But we do want to keep our alpha at 0.05.
>
> **[6:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=416)** And let's put our results right here on this page.
>
> **[7:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=423)** We click Okay.
>
> **[7:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=425)** And as we would expect, a lot of numbers that we've already seen, the sum of squares between the groups is zero.
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=437)** The sum of squares within the groups is 26.
>
> **[7:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=441)** Our total sum of squares is 26.
>
> **[7:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=445)** And then you may start to look at some of the other numbers.
>
> **[7:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=448)** We have our three data points, the sum of each group, the average of each group, and the variance of each group.
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=455)** But you may be looking at some of these over here and saying, well, what's that?
>
> **[7:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=458)** We're going to take a look at that in the next video.
>
> **[7:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=460)** But let's do one more.
>
> **[7:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=462)** Okay, so in our second example, we have a different set of data.
>
> **[7:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=471)** And the first thing I want to do is I want to take the average of each of my groups.
>
> **[7:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=477)** So that's the average of group one.
>
> **[8:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=480)** That's the average of group two and the average of group three.
>
> **[8:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=483)** So in this case, our three groups are actually a little bit different in group averages.
>
> **[8:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=489)** Our population mean is five.
>
> **[8:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=492)** So this happens to be the same as group three but it's a little different than group one and group two.
>
> **[8:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=499)** I have a problem with this formula here.
>
> **[8:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=501)** I see what's wrong.
>
> **[8:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=502)** It's this minus this.
>
> **[8:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=508)** And so now, we have the sum of squares within, this plus this, plus this, sum of squares within, sum of squares between, which is this plus this plus this.
>
> **[8:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=521)** And our SST, our total sum of squares, which is our sum of squares within plus our sum of squares between, sum of squares total is 42.
>
> **[8:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=531)** Again, that's the long way.
>
> **[8:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=533)** Let's use Excel.
>
> **[8:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=536)** Go up to Data, Data Analysis, ANOVA Single Factor.
>
> **[9:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=542)** We want to utilize these as our input range.
>
> **[9:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=551)** We have labels in the first row.
>
> **[9:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=553)** Our alpha is 0.05.
>
> **[9:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=555)** I'm going to put my results.
>
> **[9:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=559)** Let's put 'em right here.
>
> **[9:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=560)** Click Okay.
>
> **[9:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=562)** And once again, what do we see?
>
> **[9:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=565)** Excel has done a great job in giving us our sum of squares within, our sum of squares between, our total sum of squares.
>
> **[9:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=575)** And it's provided us some really helpful data in addition to that.
>
> **[9:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/anova-what-is-analysis-of-variance?u=76281980&t=580)** All right, so in the next video, we're going to start looking at our P values and our F's.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Env Vars:** anova (6), b10 (3), sst (2), ssw (1), ssb (1)
> **Cross-References:** in the next (2), next video (1)
> **Versions:** 0.05 (2)
> **UI Navigation:** go to (2)
> **Definitions:** stands for (1), we call this (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Hypothesis test and the F-statistic](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=0)** - [Instructor] So in the previous chapter we were looking at hypothesis tests for two means and for two proportions.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=8)** And in the previous video, in this particular chapter, I told you that ANOVA allows us to compare three or more groups.
>
> **[0:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=18)** The thing I didn't tell you is that ANOVA is actually a hypothesis test for three or more groups.
>
> **[0:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=26)** And so what we can see right here is that ANOVA is a hypothesis test for three or more groups, and the null hypothesis is always the same.
>
> **[0:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=37)** So if you have three groups, the null hypothesis is saying that all of the groups are equal.
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=44)** So the average of group one, mu1, is equal to mu2 is equal to mu3.
>
> **[0:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=51)** The groups are actually equal.
>
> **[0:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=54)** The alternative hypothesis, of course, is saying, "Oh, no, they're not equal, but it doesn't mean that they're all different either."
>
> **[1:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=60)** The alternative hypothesis is actually saying that at least one of the groups is not equal.
>
> **[1:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=67)** Now, when we perform a hypothesis test, eventually we've got to make a comparison of our p-values.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=76)** And how do we do that?
>
> **[1:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=77)** Usually we use a z-statistic or a t-statistic, and then that brings us to the appropriate p-value.
>
> **[1:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=86)** Well, congratulations, we've now moved on to an F-statistic.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=91)** The F-statistic is what you use in ANOVA.
>
> **[1:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=94)** And just like with the t- and the z-statistic, there are going to be critical values and there are good f's and bad F-[[Statistics]].
>
> **[1:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=104)** In this case right here, you can see a high F-statistic usually means a low p-value, which usually means we reject the null hypothesis.
>
> **[1:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=112)** We'll get there. We'll get there.
>
> **[1:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=114)** For now, let's begin.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=115)** Let's say that we are going to compare these three groups.
>
> **[1:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=119)** The population mean is five, and the groups' averages are different.
>
> **[2:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=126)** But again, these are three different groups, and each group only has a sample size of three.
>
> **[2:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=133)** So these are really small samples.
>
> **[2:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=136)** So we're going to ask, are these three groups actually the same or different?
>
> **[2:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=141)** So our null hypothesis is that group one, the average of group one, the average of group two, and the average group three are actually the same.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=148)** These are just small samples.
>
> **[2:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=150)** So let's begin our calculations.
>
> **[2:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=153)** And I've done a lot of the work for you already.
>
> **[2:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=155)** Some of this stuff we saw in the previous video, where we were figuring out our sum of squares within and our sum of squares between, and then we have our total sum of squares.
>
> **[2:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=167)** And if you don't remember how to do that, you can go ahead and watch the previous video.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=171)** But I've done a lot of this for you.
>
> **[2:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=172)** And of course, [[Microsoft Excel|Excel]] does all this work for you, if you'd like.
>
> **[2:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=176)** But as we begin to say to ourselves, "Well, are these groups the same or different?"
>
> **[3:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=181)** how do we access that F-statistic?
>
> **[3:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=185)** And the F-statistic you'll see right here is equal to SSB, our sum of squares, between divided by k minus 1 divided by, so this divided by SSW, our sum of squares within, divided by n sub t minus k.
>
> **[3:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=206)** Now, you might go, "Well, wait.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=207)** Where is this k and n sub t?
>
> **[3:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=210)** Where are they coming from?"
>
> **[3:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=212)** k is the number of group, which is also sometimes called the number of levels.
>
> **[3:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=217)** So in this case we have three different groups.
>
> **[3:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=221)** So our k is three.
>
> **[3:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=224)** n sub t, that stands for the total number of observations.
>
> **[3:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=230)** So in total, how many data points did we have between the three groups?
>
> **[3:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=234)** We had three data points for group one, three data points for group two, and three data points for group three, so our total observations is nine.
>
> **[4:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=244)** And so now we need k minus 1.
>
> **[4:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=246)** And you might wonder, well, what is this k minus 1?
>
> **[4:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=249)** K minus 1, that is the degrees of freedom between the groups.
>
> **[4:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=255)** So this is going to be, obviously, is going to be two.
>
> **[4:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=259)** k is 3 minus 1.
>
> **[4:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=263)** And n sub t minus k, that's the degrees of freedom within.
>
> **[4:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=268)** So we have nine total data points, but three groups.
>
> **[4:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=272)** So we take away one level of freedom with each one, and that's going to give us six.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=278)** So this right here is going to be equal to, I'll take our numerator first.
>
> **[4:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=284)** Our numerator is going to be equal to our sum of squares between, which is 24 divided by k, which is 3 minus 1.
>
> **[4:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=296)** And so that is our numerator.
>
> **[5:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=300)** Our denominator is going to be equal to our sum of squares within divided by our total data points, which is nine, minus the number of groups that we have, which is three.
>
> **[5:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=317)** So we have 12 divided by 3.
>
> **[5:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=319)** My F-statistic is four.
>
> **[5:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=322)** But what does that mean?
>
> **[5:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=323)** Is that good, or is that bad?
>
> **[5:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=325)** So we have to go to an F-table.
>
> **[5:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=329)** And when you start to see degrees of freedom, you're probably saying to yourself, "Oh, this probably means that there are different F-statistic tables for each degree of freedom."
>
> **[5:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=339)** And you're right. This actually gets pretty complicated.
>
> **[5:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=342)** So what you'll notice, this is an F-table with critical values for an alpha of 0.05 for 5%.
>
> **[5:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=353)** So that means there's actually an F-table of critical values for every single alpha.
>
> **[5:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=359)** And that's why we're going to choose an alpha of 0.05, 'cause it's just easier.
>
> **[6:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=364)** And then how do you find your F critical value here?
>
> **[6:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=368)** Well, remember our degrees of freedom?
>
> **[6:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=369)** These become important.
>
> **[6:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=371)** Because degree of freedom number one is that k minus 1.
>
> **[6:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=376)** So you go over here on your table, along the top, and you'll find DF1 is two.
>
> **[6:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=382)** And then your degree of freedom number two, that's what's going to be along the left side.
>
> **[6:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=386)** So degree of freedom one, two.
>
> **[6:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=389)** Degree of freedom two is six.
>
> **[6:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=391)** And that intersection point right there, that is our critical F-value: 5.14.
>
> **[6:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=401)** And so what does this tell us?
>
> **[6:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=402)** Well, this now becomes very much like a normal hypothesis test.
>
> **[6:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=407)** If our F-statistic is larger than the critical value, we reject the null hypothesis.
>
> **[6:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=416)** But if our F-statistic is smaller than the critical value, we do not reject our null hypothesis.
>
> **[7:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=422)** So in this case we are not going to reject our null hypothesis.
>
> **[7:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=428)** Now, of course, we can have Excel do a lot of this work for us.
>
> **[7:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=432)** So we're going to go over to Data, Data Analysis.
>
> **[7:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=438)** We're going to perform our ANOVA Single Factor.
>
> **[7:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=443)** And in this case here, we're going to take our input range, and we're going to choose that right there.
>
> **[7:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=450)** We are using labels in the first row.
>
> **[7:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=453)** I just showed you why we want to use an alpha of 0.05 for this particular case.
>
> **[7:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=458)** And I'm going to put my results right here so we can see them.
>
> **[7:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=465)** And as we've seen before, things look very similar.
>
> **[7:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=470)** Sum of squares between, sum of squares within, total, all things we've seen before.
>
> **[7:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=476)** But hopefully you also say, "Oh, look at that right there.
>
> **[8:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=481)** That is the F-value that we calculated.
>
> **[8:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=485)** There is the critical F-value that we found in our table: 4 and 5.14."
>
> **[8:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=493)** The other thing that's helpful here is they've given us a p-value, and that p-value is about 7.8%.
>
> **[8:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=504)** Remember, we have a 5% alpha.
>
> **[8:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=508)** And so this is larger than that, so we do not reject our null hypothesis.
>
> **[8:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=515)** So this is another way you can test this.
>
> **[8:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=517)** All right, so we've done this for our small little group right here.
>
> **[8:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=521)** Let's perform a couple more of these.
>
> **[8:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=523)** We'll do this one for a group of, in this case we're going to take four different companies.
>
> **[8:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=529)** Four different groups, four different levels.
>
> **[8:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=532)** And we're going to have customer satisfaction scores for these four different restaurants.
>
> **[8:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=539)** And we're going to perform a hypothesis test.
>
> **[9:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=543)** In this case, our null hypothesis should include a fourth company.
>
> **[9:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=550)** Are these four groups equal?
>
> **[9:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=553)** Mu1 is equal to mu2 is equal to mu3 is equal to mu4.
>
> **[9:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=556)** That is my null hypothesis.
>
> **[9:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=558)** So let's go ahead and perform single factor ANOVA.
>
> **[9:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=566)** Our group here, we'll include those.
>
> **[9:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=572)** Labels are in the first rows. Our alpha is here.
>
> **[9:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=575)** And I'm going to put my results, I'll just put them, yeah, let's put them right here.
>
> **[9:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=581)** We click OK.
>
> **[9:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=583)** And what do we have?
>
> **[9:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=585)** We now have our data points, our n, our sum, our averages.
>
> **[9:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=593)** The averages are a little bit different.
>
> **[9:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=596)** And we also have the variance for each group.
>
> **[9:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=598)** The sum of squares between groups is 11.84.
>
> **[10:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=603)** The sum of squares within the groups is 100.
>
> **[10:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=606)** So this is our total sum of squares.
>
> **[10:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=610)** But again, what we're really doing is performing a hypothesis test.
>
> **[10:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=613)** And the hypothesis test is telling us that our F, our calculated F, is 0.828.
>
> **[10:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=626)** Our critical value is 3.07.
>
> **[10:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=631)** So as we've learned, if our calculated F-value is smaller than our critical value, we do not reject the null hypothesis.
>
> **[10:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=644)** So this is telling us that these four groups here, at least one of them is not equal.
>
> **[10:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=651)** So we do not reject the null hypothesis.
>
> **[10:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=653)** As a result, we have to say that these groups, there is not enough evidence to say that they are different.
>
> **[11:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=660)** Okay, let's move on to mobile service.
>
> **[11:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=663)** And one other thing I wanted to point out here: our p-value.
>
> **[11:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=667)** Remember, our p-value is being compared to 0.05.
>
> **[11:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=674)** And what you'll notice is that my p-value is much, much higher than my critical value of 0.05.
>
> **[11:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=682)** So we can definitely not reject the null hypothesis.
>
> **[11:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=686)** Let's do one more here.
>
> **[11:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=688)** We're going to do this with three companies with mobile service, and they have their customer satisfaction scores.
>
> **[11:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=695)** So once again, go to Data, Data Analysis, ANOVA Single Factor.
>
> **[11:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=702)** I'm going to choose this as my input range.
>
> **[11:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=707)** We have labels again. Alpha of 0.05.
>
> **[11:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=710)** And my output range, I will put my answers or my table right here.
>
> **[11:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=717)** And we click OK.
>
> **[12:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=720)** And here we go.
>
> **[12:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=721)** We have our sum of squares between, sum of squares within, our total sum of squares.
>
> **[12:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=727)** And these numbers are bigger, so that's why these numbers here have gotten a little bit bigger.
>
> **[12:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=731)** But again, the really important thing, if we are performing a hypothesis test, our F.
>
> **[12:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=740)** And that is going to be my calculated F.
>
> **[12:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=744)** This is my critical F.
>
> **[12:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=746)** In this case here, my F is larger than the critical value, so as a result, we can reject the null hypothesis.
>
> **[12:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=759)** Once again, if you're not comfortable using the critical values, remember we are going to be looking at our p-value versus an alpha of 0.05.
>
> **[12:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=774)** So if our outcome is less than 5% likely, in this case it's less than 1/2 of a percent likely, in this case we definitely want to reject the null hypothesis.
>
> **[13:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=786)** All right, so you've done it.
>
> **[13:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=788)** You've gotten through ANOVA.
>
> **[13:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=789)** You know how to calculate your sum of squares within, between, in total.
>
> **[13:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=794)** You know how to find your F-statistic, and you also know how to identify your p-value.
>
> **[13:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/hypothesis-test-and-the-f-statistic?u=76281980&t=799)** And at this point, you now know whether or not you can reject or not reject your null hypothesis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Statistics]] (1)
> **Versions:** 0.05 (7), 5.14 (2), 7.8 (1), 11.84 (1), 0.828 (1)
> **Env Vars:** anova (8), ssb (1), ssw (1), df1 (1)
> **CLI Commands:** find (3), make (1)
> **Cross-References:** previous video (3), previous chapter (1)
> **Definitions:** is a  (1), stands for (1), is an  (1)
> **UI Navigation:** go to (2)
> **Analogies:** just like (1)


### 6. Regression

[↑ Back to Table of Contents](#table-of-contents)

#### [What is regression?](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=0)** - [Instructor] [[Linear Regression]] analysis is a statistical attempt to understand the relationship between two variables.
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=7)** For example, what's the relationship between the miles on a certain type of car and the value of that car.
>
> **[0:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=13)** In other words, how much value does the car lose every time I drive 500 miles?
>
> **[0:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=21)** Linear regression would attempt to try and estimate the car's value knowing only the mileage on the car.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=27)** We would call mileage the predictor and put it on the X axis.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=32)** We would call value the outcome and put that on the Y axis.
>
> **[0:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=37)** The variable on the x axis is also considered the independent variable, while the variable on the Y axis is the dependent variable.
>
> **[0:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=46)** Why?
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=47)** Because the value of the car is dependent on the mileage of that car.
>
> **[0:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=53)** So now we'd collect some data for these types of cars.
>
> **[0:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=58)** Cars with different mileage and thus different values.
>
> **[1:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=61)** The data would then be plotted on a scatter chart.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=65)** This is where [[Microsoft Excel|Excel]] comes into play.
>
> **[1:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=68)** We'll be using Excel to help us create a line that best fits our data points.
>
> **[1:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=72)** Now, don't set your expectations too high, sometimes the line and the data match up well, in other cases, the fit isn't very good.
>
> **[1:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=81)** The regression line created is helpful in understanding the relationship between these two variables.
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=88)** Just like in algebra, your line will have a formula.
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=92)** It's usually in the form of Y equals mx plus B.
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=97)** So as we change X on the right side of the formula, Y, our dependent variable, will also change.
>
> **[1:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=106)** In this formula, the letter M is the slope of our regression line.
>
> **[1:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=110)** The slope of the line would indicate how a change in X would impact Y.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=115)** So if the slope of the line was negative 0.10, it would mean that for every 10,000 miles driven, the car loses $1,000 in value.
>
> **[2:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=127)** Our line is tilting downwards as we move from left to right.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=132)** In upcoming videos when we jump into Excel, we'll be performing some simple regressions.
>
> **[2:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=137)** When you look at the line, what are some basic things to consider?
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=142)** First, look at the scatterplot.
>
> **[2:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=144)** Compare the regression line to the dots.
>
> **[2:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=147)** Is the line a good fit?
>
> **[2:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=149)** Or do the dots barely resemble the regression line?
>
> **[2:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=155)** Also, what's the slope of the line?
>
> **[2:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=157)** Is the line tilting upwards to the right?
>
> **[2:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=160)** Is the line trending down from left to right?
>
> **[2:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=163)** Or is the line sort of flat?
>
> **[2:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-is-regression?u=76281980&t=166)** In the next video, we'll look at some of the different measures we'll want to consider as we judge our regression line, and more importantly, the relationship between our variables.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3), [[Linear Regression]] (2)
> **Definitions:** is a  (1), in other words (1)
> **Analogies:** for example (1), just like (1)
> **Versions:** 0.10 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Regression terminology](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=0)** - [Narrator] Before we perform a regression in [[Microsoft Excel|Excel]], let's get acquainted with some terms you'll be seeing in the regression results Excel will provide you.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=8)** The first thing we want to understand is the formula of our regression line, y equals mx plus b.
>
> **[0:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=14)** Here's the formula for the regression line, y equals mx plus b, where b is called the intercept.
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=22)** If x was zero miles, y would be 21,600.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=27)** That's where the line intercepts or crosses the y-axis.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=32)** As for the slope, it tells us how much the value of the car changes.
>
> **[0:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=37)** with every mile.
>
> **[0:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=38)** We lose 10 cents for every mile the car drives, or the car loses $1,000 in value when the mileage goes up by 10,000 miles.
>
> **[0:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=50)** Our next term is R-square, sometimes also called our coefficient of determination.
>
> **[0:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=57)** R-square is the measure of how well the line fits the data points.
>
> **[1:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=61)** R-square is a number between zero and 1.
>
> **[1:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=66)** An R-square of 1 means that our regression line is a perfect fit.
>
> **[1:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=72)** An R-square of zero means the line is an extremely poor fit for our data points.
>
> **[1:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=79)** So the better the fit, the closer the R-square is to 1.0.
>
> **[1:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=86)** Another thing to consider, suppose we have an R-square of 0.75.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=91)** This means that 75% of the variance in y is explained by x.
>
> **[1:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=98)** Y is mostly changing because of x.
>
> **[1:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=103)** How about the other 25% of the variance in y?
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=105)** Well, it's caused by other factors, factors that are not x.
>
> **[1:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=111)** Another term you'll be seeing in the regression results in Excel is significance F.
>
> **[1:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=118)** Significance F is just the P-value for the regression model.
>
> **[2:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=123)** Effectively, every regression exercise is a hypothesis test, a hypothesis test where the null hypothesis states that there is not a linear relationship between the data.
>
> **[2:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=136)** So a low significance F is good.
>
> **[2:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=139)** It means we can reject our null hypothesis.
>
> **[2:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=143)** It means we have evidence that there is a linear relationship between x and y.
>
> **[2:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=150)** Next, let's look at standard error.
>
> **[2:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=154)** Standard error is the average distance from the line to the dot.
>
> **[2:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=159)** It's measured up and down, so it'll have the same units as the y-variable.
>
> **[2:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=165)** In this case, it would be in dollars since our car value is listed in dollars.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=171)** One last term to look for in our regression results is residuals.
>
> **[2:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=177)** On this graph you'll see two dots.
>
> **[2:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=179)** The blue dot is the actual data point, a real data point.
>
> **[3:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=184)** A car with 50,000 miles sold for $20,000.
>
> **[3:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=190)** But the green dot is what the regression is predicting for that value of x.
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=195)** The regression model predicted a car with 50,000 miles would sell for $21,000.
>
> **[3:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=202)** The difference between these two values is $1,000.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=207)** The difference is called the residual.
>
> **[3:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/regression-terminology?u=76281980&t=211)** All right, in the next video, we'll perform some regression analysis and will use these terms to examine our results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (3)
> **Definitions:** is a  (4), is called (2), means that (2), is an  (1)
> **Versions:** 1.0 (1), 0.75 (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [narrator] (1)

#### [Linear regressions](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=0)** - [Instructor] All right, so let's run some basic linear regressions using [[Microsoft Excel|Excel]].
>
> **[0:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=5)** And you can see, I've set up a number of worksheets here.
>
> **[0:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=9)** We're going to test a few different situations, so you can see how regression works and some of the things that we might be able to learn, and there's some parts of this that you might go, "Oh, there's some unknowns associated with it as well."
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=22)** So in this particular case, we're going to be looking at how the number of miles on a particular vehicle impacts the price.
>
> **[0:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=29)** So what I did was I went online.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=32)** And for one type of car, I believe it was a Toyota 4Runner, fairly popular vehicle, at least in the United States.
>
> **[0:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=40)** So the Toyota 4Runner.
>
> **[0:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=42)** And I went online and I found a number that were used and for sale, and I found the miles listed and the price associated with each one.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=52)** And so we want to run a regression here to see whether or not the miles, how that impacts our price, and whether or not that's telling us a little bit about this.
>
> **[1:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=63)** And so let's go ahead and get this run.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=65)** So what we're going to do here is we're going to highlight the data and I'm going to include my headings.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=71)** And you can notice that I've already marked for you: What is going to go on the X-axis?
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=76)** What is the independent variable, sometimes called the predictor?
>
> **[1:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=80)** And what is on the Y-axis, which again is also called the dependent variable, and sometimes also called the response variable?
>
> **[1:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=88)** In any case, we're going to say that's on our X-axis and our Y-axis.
>
> **[1:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=92)** And that's going to be important because Excel is going to want to know those things as you're doing this.
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=97)** So I've highlighted my data.
>
> **[1:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=98)** I've included my labels 'cause that's going to make things a lot easier as we go through this, and I'm going to go up here to Insert, and you can see something here that has dots 'cause we're going to create a scatter plot.
>
> **[1:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=112)** And so this looks good to me right there.
>
> **[1:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=115)** Let's go ahead and click that.
>
> **[1:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=117)** And so now, we can see all of our data points represented on here.
>
> **[2:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=123)** Now, the thing with regression is we like to see that nice regression line.
>
> **[2:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=128)** So what I'm going to do is I'm going to click on my scatter plot, as you can see, so I just clicked here on my scatter plot, and I'm going to go to the Chart Design menu, as you can see that I'm already there.
>
> **[2:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=143)** I'm going to go to Add Elements and you'll see Trendline.
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=148)** That's what we want.
>
> **[2:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=149)** And while you can go ahead and click on Linear, I'm going to go for some more options right here.
>
> **[2:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=155)** So I'm going to go to the More Trendlines Options.
>
> **[2:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=158)** I'm going to keep it clicked on Linear, but I also would love to see the equation for this formula, as well as the R-squared 'cause that's going to be something that's helpful to us.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=171)** I go ahead and you know what else I'm going to do?
>
> **[2:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=173)** I'm going to make this line, I'm going to make everything a little bit prettier to look at, so I'm going to click on this icon here.
>
> **[3:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=180)** I'm going to change the color of that line to something different than my scatter plot dots to red.
>
> **[3:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=187)** I'm going to make the line a little bit thicker and I'm going to also change it from a dotted line to a solid line.
>
> **[3:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=197)** There we go.
>
> **[3:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=199)** That's our regression line.
>
> **[3:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=201)** And we now have our formula.
>
> **[3:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=204)** And I can go over here to Home.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=207)** I can change this to red.
>
> **[3:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=210)** I'm going to make it a lot bigger too.
>
> **[3:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=212)** I'm going to go ahead and change it to 24.
>
> **[3:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=215)** Oh, maybe that's a little too big.
>
> **[3:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=219)** But what can you see?
>
> **[3:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=221)** We now have the formula for our regression line and we can see the slope of negative 0.1963.
>
> **[3:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=231)** We can see our intercept.
>
> **[3:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=233)** It will intercept zero here at about 48,449 as the price, this is the value of the vehicle.
>
> **[4:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=242)** So if it has zero miles, it would be at $48,449.
>
> **[4:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=247)** And we have our R-squared.
>
> **[4:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=249)** It's telling us that this line, 62% of the value of the car is explained by the miles.
>
> **[4:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=260)** And that kind of makes sense, right?
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=261)** I mean, if you think about it, you say to yourself, "Well, Eddie, these cars right here, yes, they're all Toyota 4Runners, but they may be in different condition."
>
> **[4:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=274)** It's not just about miles, it's about the condition of the vehicle.
>
> **[4:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=277)** There may be different features for this vehicle.
>
> **[4:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=279)** There's a lot of different things that can be going on with that car.
>
> **[4:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=283)** The color also, the year that it was made, and we don't even have that listed.
>
> **[4:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=288)** So those are some of the unknowns.
>
> **[4:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=290)** Now, this is one way we can do this.
>
> **[4:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=292)** We can do this visually.
>
> **[4:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=293)** We have our line, and our equation, and so on.
>
> **[4:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=298)** But of course, this is Excel, and there's other ways to do this.
>
> **[5:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=302)** I'm going to move this over here for the moment and I'm going to now use our Data Analysis tool.
>
> **[5:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=308)** So once again, I'm going to go to Data, Data Analysis, and we're going to run the regression, click OK.
>
> **[5:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=317)** Our Y range is this right here, and I'm going to include the label.
>
> **[5:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=325)** My X range is this with the label included.
>
> **[5:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=330)** I'm going to click on I want residuals, I want my line fit plots.
>
> **[5:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=341)** My output range, I'm going to put it right here on this particular page.
>
> **[5:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=348)** And let's go for it.
>
> **[5:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=351)** So what did we get here?
>
> **[5:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=353)** Well, this is the one I just made a little while ago.
>
> **[5:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=356)** And you'll notice we have something similar.
>
> **[5:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=359)** Instead of doing a line, though, it said for each and every data point, it has now provided us the predicted price, as well as the real price on this.
>
> **[6:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=370)** When we go over here, what are things that we want to focus on?
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=374)** So I'm going to focus on my R-squared, which matches what we have over here of 0.6212.
>
> **[6:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=382)** And again, 62% of our dependent variable, the price, is explained by miles.
>
> **[6:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=392)** What's the other 38%, roughly?
>
> **[6:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=395)** That's explained perhaps by the year, by the condition, by the features, by the location where the car is being sold.
>
> **[6:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=401)** There's so many other things that could be going on, but again, everything seems to be working out nicely.
>
> **[6:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=407)** The other thing is I want to show you here our intercepts.
>
> **[6:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=412)** When you go down here, you'll notice that this 48,448, that's where we're getting it from here.
>
> **[6:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=418)** Our slope, that is right there.
>
> **[7:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=421)** Significance F.
>
> **[7:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=423)** So the way you want to think about this is this is a hypothesis test, and the hypothesis test is asking: Is there a chance that the miles and the price are related?
>
> **[7:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=435)** And if it's below or a significance level of five, well, then things are looking pretty good and it says, "Look, these two things are related."
>
> **[7:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=446)** Now, it doesn't necessarily mean that they're are 100% related and it's all about miles.
>
> **[7:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=452)** It gives us the price, but it's saying, "Yeah, these two are definitely related."
>
> **[7:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=455)** It may not account for everything, but it's doing a pretty good job.
>
> **[7:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=459)** The other thing I want to show you down here is our residuals.
>
> **[7:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=464)** And for this, I'm going to copy this and I'm going to put the values right here.
>
> **[7:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=472)** Paste Special, Values.
>
> **[7:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=475)** And what the residuals are is the difference.
>
> **[7:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=479)** So at 37,200 miles, the vehicle was posted at $41,300.
>
> **[8:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=487)** That predicted price is given here.
>
> **[8:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=489)** And the residual is the difference of the real price being offered and the predicted price that Excel calculated for you.
>
> **[8:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=497)** So again, lots of information out here.
>
> **[8:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=500)** Let's go ahead and do this for a different scenario.
>
> **[8:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=503)** Let's see the relationship between height and weight for NBA basketball players.
>
> **[8:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=511)** So I took one team of NBA basketball players, perhaps not a simple random sample, but we took one team out of many, and this team had 18 players that were listed.
>
> **[8:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=524)** And what I want to do is I want to run a regression on height and weight.
>
> **[8:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=528)** So again, what we can do here is we can highlight our data, go to Insert, Scatter, and then I can click on my item, go to Add Elements, Trendline, More Trendline Options, Linear.
>
> **[9:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=550)** And I really liked having that equation and I really liked having that R-squared.
>
> **[9:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=556)** I'm going to change the line to whatever color I feel would work.
>
> **[9:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=562)** I can change it to a solid line, and maybe I like the red a little bit better, and I click OK.
>
> **[9:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=571)** And my formula and everything is really small, so I'm going to go here and I'm going to change that to something a little bigger and bold.
>
> **[9:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=583)** And these are things that we would expect to see when we run our regression using the Data Analysis tool.
>
> **[9:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=590)** So I'm going to go to Data Analysis, run our regression, and where am I going to get my data for here?
>
> **[9:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=598)** My Y range is weight, my X range is height in centimeters.
>
> **[10:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=609)** Still have the residuals and the line fit plots clicked here, and I'm going to put my results, let's say, right here.
>
> **[10:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=619)** And I click OK.
>
> **[10:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=624)** Oh, I have a mess right here, so let's go ahead and fix that up, and I'm going to put my results here.
>
> **[10:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=636)** And there we go.
>
> **[10:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=638)** And once again, very quickly, we were able to find that the world of basketball, NBA basketball, according to our regression, about 62% of a players' weight is explained by the players' height.
>
> **[10:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=656)** And we have our intercepts here, which should match up with our intercepts over here, and they do.
>
> **[11:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=667)** We can bring this down, so we can see that a little easier.
>
> **[11:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=670)** And compare.
>
> **[11:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=672)** And it does look like there is a relationship.
>
> **[11:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=674)** Remember as long as this number is below 0.05, everything is good.
>
> **[11:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=681)** Everything is looking good there.
>
> **[11:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=683)** And then our residuals, if I wanted to compare, I can copy and then paste them over here.
>
> **[11:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=693)** Paste Special, Values, and there we go.
>
> **[11:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=697)** We're able to see that for 203 centimeters, we were expecting 235 pounds.
>
> **[11:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=702)** Actually, we were expecting 226.7 pounds and we ended up with 235.
>
> **[11:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=708)** Now, 62% of the players' weight was explained by height, and in basketball, while there are players that are different heights and slightly different builds, it's very different from professional American football.
>
> **[12:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=725)** So let's go to the NFL.
>
> **[12:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=728)** And I have one team of players here.
>
> **[12:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=730)** Teams are a little bit bigger, so our sample of players is a little bigger.
>
> **[12:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=734)** But let's go ahead and run a regression here to see whether or not the heights and weights are as correlated as they seem to be in the NBA.
>
> **[12:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=743)** So again, very quickly, I do my scatter plot 'cause I do like having that scatter plot that I make.
>
> **[12:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=750)** Insert.
>
> **[12:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=754)** Move that up here for a moment.
>
> **[12:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=757)** Add Elements, Trendline, More Trendline Options.
>
> **[12:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=763)** Equation, R-squared, change the line.
>
> **[12:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=768)** Red, thicker, solid.
>
> **[12:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=773)** And there we go, on my formula front and center, able to see that.
>
> **[13:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=783)** And you'll notice here that our R-squared is lower.
>
> **[13:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=787)** And if you know anything about American football and the NFL, there are some players that are fast and some players that are big and strong, and there's players that play different positions and they need very different things.
>
> **[13:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=802)** So it's expected, at least it was to me, that the R-squared of height and weight would be slightly different because different muscle mass, different sizes, different things that these players need to do.
>
> **[13:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=814)** Again, I can run a more rigorous test.
>
> **[13:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=818)** And Data Analysis, Regression, OK, and what are my X and Y ranges here?
>
> **[13:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=826)** My Y range is going to be the weights and my X range is going to be the heights.
>
> **[13:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=838)** And I'm going to put my results here and I click OK.
>
> **[14:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=846)** And once again, what I'm looking for my R-squared, and there's so much other information on there that we just didn't go into, but those are things probably for a more advanced course that covers so many more of these topics.
>
> **[14:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=861)** But some of these things you may remember from your ANOVA, you might recognize them from your hypothesis tests and other things.
>
> **[14:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=870)** So this is another thing that might be interesting to you.
>
> **[14:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=873)** The R-squared is lower.
>
> **[14:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=874)** Only 51% of a players' weight is described via the players' height.
>
> **[14:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=883)** And so you might say, "Well, that seems to be lower."
>
> **[14:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=886)** Yeah, because again, muscle mass, the age of the player, the position of the player, lots of different things that weren't accounted for in this particular study.
>
> **[14:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=899)** And you might say, "Well, but this significance is really, really low."
>
> **[15:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=904)** It's saying that there is a relationship.
>
> **[15:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=906)** Now, it doesn't necessarily mean that that relationship is explaining everything, but there definitely is a relationship between height and weight.
>
> **[15:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=916)** Once again, you can go look at your residuals, you can copy those down here if you wish.
>
> **[15:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/linear-regressions?u=76281980&t=922)** But otherwise, hopefully now, you have a really nice view of what Excel can do for you as it tries to do some really helpful basic linear regressions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5)
> **UI Navigation:** go to (8), click on (5)
> **CLI Commands:** make (6), find (1)
> **Env Vars:** nba (4), nfl (2), anova (1)
> **Definitions:** is a  (5)
> **Versions:** 0.1963 (1), 0.6212 (1), 0.05 (1), 226.7 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 7. Simulation

[↑ Back to Table of Contents](#table-of-contents)

#### [What are simulations?](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=0)** - [Lecturer] In this chapter, we're going to discover the power of Monte Carlo simulations.
>
> **[0:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=5)** Before we do that, let's discuss that name.
>
> **[0:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=9)** Monte Carlo refers to the high stakes casinos in Monaco.
>
> **[0:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=13)** Why?
>
> **[0:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=14)** Because like gambling, Monte Carlo simulations are all about playing the odds.
>
> **[0:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=21)** You see, Monte Carlo simulations allow you to run an experiment or a model hundreds, or even thousands of times.
>
> **[0:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=30)** So, it's an incredible opportunity to collect massive random samples based on [[Statistics]] and to do it for events that haven't happened yet.
>
> **[0:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=41)** So, it allows us to test the statistics we've learned in this course and preceding courses on real life systems, processes, or designs.
>
> **[0:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=51)** A really important part of Monte Carlo is being able to design the models we want to test.
>
> **[0:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=56)** We can test processes we're familiar with to help explain to ourselves and others the outcomes we see every day.
>
> **[1:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=64)** Or we can test processes and designs in the design phase.
>
> **[1:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=70)** We can test a stock market.
>
> **[1:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=71)** We can test things that haven't even happened yet to better understand the possible outcomes.
>
> **[1:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=78)** But remember, the outcomes you get are only as good as the model you create, and the statistics utilized in the model.
>
> **[1:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=86)** Not all models need to be complex, but the model has to fit the situation and it has to statistically explain the situation.
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/what-are-simulations?u=76281980&t=97)** In the upcoming videos, we'll be exploring the basics of Monte Carlo simulations, and the hope is that it'll motivate you to develop interesting, and helpful statistical models that you'll be able to study by using Monte Carlo simulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3)
> **Definitions:** refers to (1)
> **Speakers:** - [lecturer] (1)

#### [Monte Carlo simulation example](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=0)** - [Instructor] Okay, so let's learn how to do a Monte Carlo [[Simulation]] in [[Microsoft Excel|Excel]] using a very, very simple example.
>
> **[0:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=8)** We're going to be rolling dice here and we're going to take the sum of the dice, and we want to see how many times we end up with some critical value, whether it's equal to that critical value, above the critical value, or below the critical value.
>
> **[0:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=22)** Now, the nice thing here is we know exactly what the odds are of rolling dice.
>
> **[0:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=28)** Even if we're rolling four of them, we know how to calculate the odds of this.
>
> **[0:32](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=32)** And you wouldn't necessarily need a Monte Carlo simulation for this, unless you want to demonstrate to somebody something like the central limit theorem or something else basic about [[Statistics]].
>
> **[0:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=44)** But we're going to do this because I want to show you that Monte Carlo simulation works.
>
> **[0:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=49)** It's helpful, it lets it see what the odds are in very complex situations.
>
> **[0:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=55)** If it works here, it's going to work there.
>
> **[0:57](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=57)** All right, so how does this work?
>
> **[0:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=58)** First thing is we want to set up our experiment.
>
> **[1:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=62)** So what we're going to say is, "Well, we're going to roll dice."
>
> **[1:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=68)** And so the outcome is going to be something between one or six.
>
> **[1:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=74)** And we're going to have four dice.
>
> **[1:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=76)** And then what we're going to do is we're going to add up our total here.
>
> **[1:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=82)** Now, I just did that once.
>
> **[1:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=84)** And again, anytime I change something on this screen, it's going to recalculate.
>
> **[1:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=89)** But what if I wanted to do this a lot of times, 100 times, 500 times, or I'm going to do it 1,000 times?
>
> **[1:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=97)** How would you do that and how would you collect all of those results?
>
> **[1:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=101)** So this first thing that you want to do is we want to set up the number of attempts that we want to have here so we can list them all out.
>
> **[1:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=108)** So what I'm going to do is I'm going to capture this one over here.
>
> **[1:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=113)** I'm going to go to Fill, Series, and we're going to begin at 1.
>
> **[2:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=120)** There's going to be a column of numbers, and the column of numbers is going to go from 1 to 1,000.
>
> **[2:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=126)** We click OK.
>
> **[2:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=127)** And just like that, we have the numbers listed all the way from 1 to 1,000.
>
> **[2:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=134)** The next thing we want to do is we want to capture this sum for attempt number one, number two, number three.
>
> **[2:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=142)** Well, let's just do it for number one first.
>
> **[2:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=144)** So if we wanted to capture that sum, we're obviously going to do this, but doing this one at a time is going to take forever.
>
> **[2:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=151)** So what I'm going to do first is I'm going to lock in this value.
>
> **[2:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=156)** So I'm going to put in my dollar signs here, do this with your F4 function, but I just did it manually there.
>
> **[2:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=165)** And then what I want to do is I'm going to say, "Well, how about if I want to do this for everything?"
>
> **[2:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=169)** So I'm going to use the Command + Shift + Down Arrow.
>
> **[2:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=173)** So you see, I've highlighted those Command + Shift, and the Down Arrow, and that now has highlighted everything in this series.
>
> **[3:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=184)** The next thing I'm going to do is I'm going to go to Data and I'm going to go to the What If Analysis.
>
> **[3:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=193)** Go to Data Table and you're going to leave... The Row Input Cell, you're going to leave that empty.
>
> **[3:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=198)** Then, in the Column Input Cell, this is as long as you pick a cell that is not going to be used at all.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=207)** So we're not going to use H9.
>
> **[3:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=209)** I'm going to plug that in.
>
> **[3:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=211)** That's where it's going to do the calculations, collect that number, and then ultimately put it in the cell that you want.
>
> **[3:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=218)** So I'm going to click OK, and just like that, it did the calculation 1,000 times.
>
> **[3:46](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=226)** And you can see the results for all 1,000 attempts.
>
> **[3:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=233)** Sometimes, Excel's still filling them in as we're looking at them.
>
> **[3:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=236)** The next thing we want to do is we want to see, "Well, what are the odds that we hit a 15, or above 15, or below 15?"
>
> **[4:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=245)** So we're going to set up a formula for this.
>
> **[4:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=247)** We're going to use the COUNTIF function, so equals COUNTIF, and then we're going to want to grab everything from here.
>
> **[4:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=257)** So I can click on that first item.
>
> **[4:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=261)** Command + Shift with the Down Arrow now allows me to have everything I need in my formula or in my function, and I'm going to be using this over and over again.
>
> **[4:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=271)** So I'm going to hit F and F4 on my Mac, and that's going to put my dollar signs on there.
>
> **[4:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=278)** Now, this is where you need to be very careful to put in the right formula.
>
> **[4:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=281)** So what is the criteria?
>
> **[4:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=283)** What we're looking for here is something that is greater than 15.
>
> **[4:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=287)** We want to be above 15.
>
> **[4:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=289)** So you have to put the greater than symbol in quotation marks.
>
> **[4:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=294)** Now, we want to say that it's greater than 15, but you can't just put 15 or you can't just put the 10 on here.
>
> **[5:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=303)** You actually have to put the and symbol as well, the ampersand.
>
> **[5:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=308)** So you click on this and now we say, "Well, I want it to be larger than B15."
>
> **[5:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=314)** Now, we're going to be using this over and over again.
>
> **[5:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=316)** So I'm going to lock that in as well with my dollar signs.
>
> **[5:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=320)** I close this up.
>
> **[5:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=324)** And... I changed my font color there.
>
> **[5:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=329)** Now, what you'll notice is that in this particular case, it has given me 308 that are above 15, and I can change this number now to whatever number I'd like.
>
> **[5:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=345)** And you would guess, as the number gets bigger, there are going to be fewer and fewer numbers.
>
> **[5:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=351)** But we also want to do this for equals and below.
>
> **[5:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=355)** So I'm just going to copy this formula 'cause it is a little cumbersome, and I'm going to copy the formula here.
>
> **[6:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=363)** But now, I don't want it to be above, I want it to be equal.
>
> **[6:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=370)** And here, I don't want it to be above, I want it to be less than.
>
> **[6:19](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=379)** And let's change the number to something a little more reasonable, like 14.
>
> **[6:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=384)** I'm going to sum these up, should be 1,000.
>
> **[6:29](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=389)** And if I want to put percentages on these, I can say equals this divided by this.
>
> **[6:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=396)** And we're going to copy that formula down in just a moment.
>
> **[6:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=400)** So I've put my dollar signs on that, and now I can see how many fall within each range.
>
> **[6:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=410)** And again, it's sort of nice to play around with this.
>
> **[6:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=412)** That is what is so nice about this Monte Carlo simulation.
>
> **[6:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=419)** How many times will we get 24?
>
> **[7:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=421)** That would be all sixes.
>
> **[7:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=423)** That time, we got zero.
>
> **[7:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=425)** Look at this.
>
> **[7:06](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=426)** In this case, we got 24 one time, about 23.
>
> **[7:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=432)** But again, once you've created this, you can play around with it all sorts of ways.
>
> **[7:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=437)** Okay, so let's do this with coins very quickly, and you can sort of see I've set up the test here.
>
> **[7:22](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=442)** We're going to do heads and tails.
>
> **[7:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=444)** So I ran between zero and one, and I said that one is heads, zero is tails, and it's adding up the total number of heads here for each flip.
>
> **[7:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=456)** I've also set up some COUNTIFs over here.
>
> **[7:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=458)** So if this ends up being zero, or one, or whatever, it's going to take that.
>
> **[7:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=465)** Now, let's do this one.
>
> **[7:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=467)** Let's do it 500 times.
>
> **[7:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=469)** So I'm going to fill this in.
>
> **[7:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=475)** Series.
>
> **[7:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=476)** 1 to 500.
>
> **[7:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=478)** Make sure that you have it for columns, we want the numbers to go down.
>
> **[8:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=483)** And there we go, we have our 500 attempts.
>
> **[8:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=485)** Now, what we want to be tracking is the total number of heads that come up.
>
> **[8:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=492)** And then we want to do this for everything.
>
> **[8:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=494)** So the Command + Shift + Down Arrow now allows me to collect all 500 in my series.
>
> **[8:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=503)** Then, I'm going to go over to Data, the What If Analysis, the Data Table.
>
> **[8:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=511)** Remember Row Input Cell stays blank.
>
> **[8:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=514)** The Column Input Cell is any unused cell.
>
> **[8:40](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=520)** You click OK.
>
> **[8:42](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=522)** And there we go.
>
> **[8:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=524)** And now, we can see the number of times we had all tails, 32 out of 500.
>
> **[8:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=531)** The number of times that we had all heads, 29 out of 500.
>
> **[8:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=535)** And again, we can sort of do this over and over again.
>
> **[9:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=540)** And it looks like I have this number.
>
> **[9:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=543)** I must have some... Oh, I have this divided by 1,000 and there are only 500 attempts.
>
> **[9:16](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=556)** And there we go.
>
> **[9:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=558)** Now, everything looks good.
>
> **[9:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=560)** So you got to see how to utilize basic Monte Carlo.
>
> **[9:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/monte-carlo-simulation-example?u=76281980&t=564)** And then in our next video, we'll do something maybe that's slightly more business-oriented.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (4), [[Microsoft Excel|Excel]] (2), [[Statistics]] (1)
> **UI Navigation:** go to (4), click on (2)
> **Prerequisites:** set up (5)
> **Env Vars:** countif (2), b15 (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Definitions:** is a  (1)

#### [Business simulation example](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=0)** - [Instructor] All right, in the previous video, we learned a really basic use for Monte Carlo [[Simulation]].
>
> **[0:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=7)** In this case, we're going to do something that's slightly more difficult, probably a little bit more business-oriented, and hopefully, a little more interesting to you.
>
> **[0:17](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=17)** Now, the thing that you want to remember about Monte Carlo simulation is it really is all about the model that you're testing.
>
> **[0:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=24)** And the more interesting the model, the more interesting the scenario, the more interesting the outcomes are going to look to you.
>
> **[0:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=31)** But in this case, we're going to do something that's rather simple, but still, hopefully, something that interests you a little bit, especially when you start to see the results.
>
> **[0:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=39)** So what I've done in this situation, I said, what happens if we're going to do this Monte Carlo simulation for a certain business process?
>
> **[0:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=45)** So the process is we're going to fulfill an online order.
>
> **[0:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=49)** And the online order is for three items.
>
> **[0:52](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=52)** So somebody places an order for three different items.
>
> **[0:55](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=55)** And so we've have to pick the correct three items off the shelf from the warehouse.
>
> **[1:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=62)** We then have to deliver them to that person's home.
>
> **[1:05](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=65)** If there's an error in any one of those operations, well, obviously there's going to be a problem with that specific order 'cause either we delivered it to the wrong place or they got the wrong item number one or the wrong item number two or maybe there were two errors in that particular situation.
>
> **[1:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=84)** Nonetheless, let's go ahead and look at this.
>
> **[1:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=87)** And what I've done is I'm going to establish a reliability rate.
>
> **[1:31](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=91)** So out of 100, how many times will they get this right?
>
> **[1:35](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=95)** And I said, let's say that they're going to get it right 99 out of 100 times.
>
> **[1:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=99)** Nothing is 100% reliable, but let's go with 99.
>
> **[1:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=103)** So it's pretty high.
>
> **[1:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=105)** Our error rate is just going to be one minus the reliability rate.
>
> **[1:49](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=109)** And what we're going to do is we're going to make this a random model.
>
> **[1:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=114)** So we're going to choose a number between 1 and 100.
>
> **[1:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=119)** And as long as this number isn't equal to or smaller than our error rate, then we should be fine.
>
> **[2:07](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=127)** So in this case here, we're fine.
>
> **[2:09](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=129)** The random number is three, we're good.
>
> **[2:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=132)** Let's roll it again, now it's nine. That's still good.
>
> **[2:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=135)** And do it again and again.
>
> **[2:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=138)** And you can see that it's looking pretty good for us.
>
> **[2:21](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=141)** Now what I did was I set up a test over here and you can see my formula.
>
> **[2:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=146)** You might say, well, what is that formula doing?
>
> **[2:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=148)** It's saying that if the random number is less than our error rate plus one, so our error rate is 1%, plus one, so two, as long as this number here isn't smaller than two, we're going to be okay.
>
> **[2:44](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=164)** And so if this comes up as zero, we're okay.
>
> **[2:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=168)** If it comes up as one, well, now it's a defect.
>
> **[2:51](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=171)** And I'm going to do this for all four of my items, for all four of my operations.
>
> **[2:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=176)** So I'm going to copy down.
>
> **[2:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=178)** In this case, the order was fine.
>
> **[3:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=180)** And again, I can change my reliability rate for anything I'd like, and it's looking pretty good.
>
> **[3:08](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=188)** Wow, we have got a really nice process here.
>
> **[3:12](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=192)** But what happens if we run this 1,000 times?
>
> **[3:15](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=195)** So let's go ahead and do our Monte Carlo simulation and I'm going to do this with a very bright view of things, 99 out of 100 on all of these.
>
> **[3:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=205)** So what I'm going to do is I'm going to go over here.
>
> **[3:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=207)** I'm going to fill in my series.
>
> **[3:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=210)** I want to go from 1 to 1,000, and I click.
>
> **[3:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=216)** Oh, I have to make sure it's column, and I click OK.
>
> **[3:39](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=219)** Then I'm going to highlight this and I'm going to do a Command + Shift + Down so it's going to collect everything in my series.
>
> **[3:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=230)** I'm going to go to Data, What-if Analysis.
>
> **[3:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=236)** Data Table, I leave the row input cell blank.
>
> **[4:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=240)** I click Column Input Cell and I can click anything I'd like over here, I click OK and it just ran it 1,000 times.
>
> **[4:10](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=250)** Now we've got to see, well, how many bad orders are in there?
>
> **[4:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=254)** So I'm going to do my countif equals, countif, and I'm going to be looking at everything in this range right here.
>
> **[4:24](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=264)** So I'm going to go from here, Command + Shift + Down.
>
> **[4:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=267)** I now have my formula over here.
>
> **[4:30](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=270)** I'm going to lock those numbers in, and then comma.
>
> **[4:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=276)** And I want it to be... If it's zero, it's fine, because that means that our overall process came out perfect.
>
> **[4:43](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=283)** But if it's larger than zero, so in our quotation marks, if it's greater than, I hit my amp or ampersand and the number that I want, which is zero.
>
> **[4:54](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=294)** If it's greater than zero, well, then that's going to be a bad order.
>
> **[4:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=299)** And I hit return and I changed my font and it looks like there's going to be, actually, 43 bad orders out of 1,000.
>
> **[5:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=311)** And what I can do here is I can just say this is equal to 1,000.
>
> **[5:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=318)** And if you want to double check to make sure that everything's okay, here's another safe way to do this.
>
> **[5:25](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=325)** Count everything in this column minus our bad orders.
>
> **[5:33](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=333)** And if we want to do a percentage, it's just going to be this divided by, and again, so I can change this up later, I'm going to count everything here.
>
> **[5:48](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=348)** And what happens when you start to change things?
>
> **[5:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=350)** Well, what would happen if one of my departments said, I think we're actually picking things at a 95% level.
>
> **[5:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=359)** Well, now we have a big problem.
>
> **[6:01](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=361)** And you can see what your expectations are.
>
> **[6:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=364)** What happens if somebody has a really... We're training a new person, they're making a lot of mistakes.
>
> **[6:11](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=371)** Look at what happens to the number of bad orders and good orders.
>
> **[6:14](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=374)** And this is only four operations in my process.
>
> **[6:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=378)** Let's go to something like a rocket and let's say a rocket that has 30 launch critical parts.
>
> **[6:26](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=386)** If any one of these parts fails, we either have to abandon the mission or something may have gone wrong during the launch.
>
> **[6:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=394)** And again, I'm going to set a 99% reliability rate.
>
> **[6:38](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=398)** Everything else is the same, my RANDBETWEEN, my error rate, and my check to see whether or not everything is okay or if I have a defect.
>
> **[6:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=407)** So I'm going to copy this down for all 30 of my iterations.
>
> **[6:56](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=416)** And that time, look. Everything came out good that time.
>
> **[6:59](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=419)** But let's go ahead and see what happens if we launch 1,000 times.
>
> **[7:04](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=424)** So once again, I'm going to click on one, fill this down, Series, Column, 1,000.
>
> **[7:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=438)** I now want to take the sum, which is this over here, and we're going to be doing that over and over again.
>
> **[7:28](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=448)** So my FN F4 or F4, if you're on a PC, I click OK.
>
> **[7:34](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=454)** I want to do this for everything.
>
> **[7:36](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=456)** So I copy both of those, Command + Shift + Down, and that covers everything in my series.
>
> **[7:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=465)** I go over to Data, the What-if analysis.
>
> **[7:50](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=470)** Data table, leave row input cell blank.
>
> **[7:53](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=473)** Put this in any unused cell, click OK.
>
> **[7:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=478)** And there we go. Well, look at this.
>
> **[8:02](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=482)** With 30 mission-critical parts, there are 256 attempts where there was at least one thing wrong, and that's with a 99% reliability level for all 30 of my parts.
>
> **[8:18](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=498)** So we either have to bring up the reliability for all of these parts.
>
> **[8:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=503)** Another thing that we learn is what would happen if we were able to reduce the number of parts in my rocket from the mission-critical parts or the the critical parts from 30 down to 20.
>
> **[8:41](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=521)** So I'm going to delete these and look at what just happened.
>
> **[8:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=527)** If we simplify the design of our rockets so it has 20 mission-critical parts versus 30, that also is going to help our reliability.
>
> **[8:58](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/business-simulation-example?u=76281980&t=538)** All right, so hopefully you can now see both how reliability works and how Monte Carlo simulation helped us better understand that.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Simulation]] (5)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** randbetween (1)
> **Cross-References:** previous video (1)
> **Definitions:** means that (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Continue learning Excel statistics](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=0)** - Congrats, stats, [[Microsoft Excel|Excel]], you did it.
>
> **[0:03](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=3)** You cracked the surface of intimidating topics like hypothesis tests, ANOVA, Regression, Monte Carlo simulations, and you've done it in Excel.
>
> **[0:13](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=13)** These are valuable tools for organizations that value data and are curious about what the data indicates.
>
> **[0:20](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=20)** That said, we just cracked the surface.
>
> **[0:23](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=23)** There are plenty more [[Statistics]] courses in the [[LinkedIn]] Learning Library.
>
> **[0:27](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=27)** You could dig in deeper in Excel, or you can explore tools like SPSS, and if you really want to impress the boss, dive into the courses on analytics.
>
> **[0:37](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=37)** And if stats and Excel are your new obsessions, maybe it's time for you to consider a career in [[Data Science]].
>
> **[0:45](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=45)** The world could use your help.
>
> **[0:47](https://www.linkedin.com/learning/excel-statistics-essential-training-2-22879835/continue-learning-excel-statistics?u=76281980&t=47)** Thank you so much for completing this course and congratulations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (4), [[Statistics]] (1), [[LinkedIn]] (1), [[Data Science]] (1)
> **Env Vars:** anova (1), spss (1)
> **Speakers:** - congrats (1)


## Instructor

- [[Eddie Davila]]

## Path Context

### In [[Statistics Foundations Professional Certificate by Wolfram Research]]
← [[Excel Statistics Essential Training- 1]] | **6 of 7** | [[Statistical Analysis with Wolfram Language]] →

## Part of

- [[Statistics Foundations Professional Certificate by Wolfram Research]]

## Appears In

- [[Statistics Foundations Professional Certificate by Wolfram Research]]

---

[↑ Back to top](#)