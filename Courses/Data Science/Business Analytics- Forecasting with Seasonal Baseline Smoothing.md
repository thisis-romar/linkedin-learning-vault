---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: business-analytics-forecasting-with-seasonal-baseline-smoothing
url: "https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing"
duration_minutes: 49
duration: 49m
level: Advanced
updated: 10/8/2018
learners: 78523
skills:
  - Business Intelligence (BI)
  - Forecasting
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHt1kNRSCL-NQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619543038116?e=2147483647&amp;v=beta&amp;t=4LgTsjE5GcXq1UtAlCY-KeaDDZ3p5GBpArWzbO_EMS8"
linkedin_topic: Data Science
learning_paths:
  - '[[Get Ahead in Business Analytics and Analysis]]'
prev_courses:
  - '[[Business Analytics- Forecasting with Exponential Smoothing]]'
next_courses:
  - '[[Requirements Elicitation and Analysis]]'
path_nav: '[{"path":"Get Ahead in Business Analytics and Analysis","position":15,"total":19,"prev":"Business Analytics- Forecasting with Exponential Smoothing","next":"Requirements Elicitation and Analysis"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/business-intelligence-bi
  - skill/forecasting
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Business%20Analytics-%20Forecasting%20with%20Seasonal%20Baseline%20Smoothing.md)

![Business Analytics: Forecasting with Seasonal Baseline Smoothing](https://media.licdn.com/dms/image/v2/C4E0DAQHt1kNRSCL-NQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619543038116?e=2147483647&amp;v=beta&amp;t=4LgTsjE5GcXq1UtAlCY-KeaDDZ3p5GBpArWzbO_EMS8)

# Business Analytics: Forecasting with Seasonal Baseline Smoothing

> Seasonal exponential smoothing is an extension of simple exponential smoothing (SES). Seasonal smoothing is often used when a baseline shows regular seasonal peaks and valleys. Residential water usage is a familiar example: consumption rises during the summer and fall and drops during winter and spring—but the overall annual consumption tends to remain stationary over several years. In this course

> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing) | 49m | Advanced | 79K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - Why seasonal baseline smoothing will help your regression
  - Software setup
- [**1. Approaches to Seasonal Smoothing**](#1-approaches-to-seasonal-smoothing) (5 videos)
  - Seasonality in a baseline
  - Defined names and relative references
  - Diagnosing seasonality
  - Simple seasonal indexes
  - Seasonal smoothing and horizontal baselines
- [**2. Optimizing Seasonal Forecasts**](#2-optimizing-seasonal-forecasts) (3 videos)
  - Minimizing RMSE
  - The Excel Forecast Sheet
  - Prepare to make a seasonal forecast in R
- [**Conclusion**](#conclusion) (1 videos)
  - Next steps

### Introduction

> [↑ Back to Table of Contents](#table-of-contents)

#### Why seasonal baseline smoothing will help your regression
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=0)** - [Conrad] You frequently have access to a baseline of data that varies by season.
>
> **[0:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=6)** Your company might sell parkas and sales rise in the fall and decline in the spring.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=11)** Or, suppose you track and forecast the incidence of traffic accidents, which might increase on weekend nights compared to other dates and times.
>
> **[0:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=20)** In these and similar cases, you have your hands on a seasonal baseline.
>
> **[0:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=24)** There's information in those seasonal variations that can enrich your forecast considerably and help them grow more accurate.
>
> **[0:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=31)** Hi, my name is Conrad Carlberg.
>
> **[0:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=34)** This course is designed to help you identify seasonality in your datasets and use it to enhance your forecasts.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=42)** I'll be using two applications to do so, Microsoft Excel, which is a great platform for seeing what's going on in an analysis, and R, which enables you to structure a complex analysis with just a few commands.
>
> **[0:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=56)** Let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [conrad] (1)

#### Software setup
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=1)** - [Instructor] One of the applications used in this course is R, so I want to show you how to download and install it.
>
> **[0:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=7)** I'm going to download the version 3.4.0 for Windows, in part because I'm using a Windows machine, and if you're using a Mac, you'll probably wanna look through R's FAQs for the Macintosh.
>
> **[0:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=21)** We are using version 3.4.0 rather than the most recent version of R because there is some issues involved with one of the packages that we want to use.
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=32)** Once I've downloaded R-3.4.0 for Windows, I'll click on the downloaded file to initiate the installation.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=42)** I'm gonna follow through the wizard and make sure it all installs properly.
>
> **[0:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=50)** Going to install just the 64-bit files.
>
> **[0:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=54)** And I'll accept the default selections.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=62)** And clicking finish.
>
> **[1:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=63)** At this point, we have R actually installed and running on the machine and we need to download and install a couple of additional packages.
>
> **[1:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=73)** I can do that by using the packages menu and then choosing set CRAN mirror.
>
> **[1:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=80)** We're going to use a mirror that's located in California, and we click OK.
>
> **[1:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=87)** Now with that chosen, we can actually choose the packages to download.
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=92)** We'll click the packages menu and choose install packages.
>
> **[1:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=98)** This is a very long list, so it can take a while to scroll through.
>
> **[1:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=101)** We're looking for DescTools, D-E-S-C T-O-O-L-S, and we click OK.
>
> **[1:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=111)** Now you're going to get this if your security provisions on your machine prevent you from writing to the library that R prefers to use.
>
> **[2:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=124)** In that case, you can choose yes in answer to this question and R will set up a personal library where you are not restricted from installing a new package.
>
> **[2:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=135)** You can at this point click yes and yes.
>
> **[2:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=144)** At this point, you have installed the DescTools package.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=148)** We also need the forecast package.
>
> **[2:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=151)** So we install packages, and we scroll down to forecast
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=160)** and there it is, click on it, and click OK.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=167)** As soon as R finishes unpacking these components, everything is installed and you're ready to get started with the course.

> [!info]- Semantic Content
>
> **Prerequisites:** install (5), set up (1)
> **Versions:** version 3 (2), 4.0 (2), 3.4.0 (1)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Env Vars:** cran (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)


### 1. Approaches to Seasonal Smoothing

> [↑ Back to Table of Contents](#table-of-contents)

#### Seasonality in a baseline
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=1)** - [Instructor] Many baselines display what's usually termed "seasonality".
>
> **[0:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=5)** That's a characteristic that causes the baseline to rise and fall at regular intervals.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=11)** For example, increases in housing prices tend to be sharpest from the first to the second quarters, and to flatten during the other quarters of the year.
>
> **[0:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=20)** Notice here that price increases every quarter but the increases are particularly sharp from the first to the second quarter of each year.
>
> **[0:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=29)** Many cities and towns tend to collect property taxes twice a year.
>
> **[0:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=33)** For example, during November and during May.
>
> **[0:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=36)** Their tax receipts tend to spike during those two months, and to resume a fairly flat pattern the remainder of the year.
>
> **[0:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=44)** The chart reflects that pattern with the spikes at the fifth month, May, and the 11th month, November.
>
> **[0:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=51)** Take a look at this data on DWI Arrests over a one month period.
>
> **[0:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=56)** Notice the two day spike in admissions each weekend during the charted period, with a return to a more horizontal pattern during the remainder of the week.
>
> **[1:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=66)** These examples each display seasonality.
>
> **[1:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=69)** The seasons are not necessarily just the standard calendar seasons of spring, summer, fall, and winter, but any regularly recurring pattern.
>
> **[1:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=78)** Housing shows an annual spike, property taxes show a bi-annual spike, and DWI arrests show a weekly spike.
>
> **[1:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=88)** The regular recurrence of the seasons in question is an important part of the baselines in seasonality.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=94)** For example, some baselines drift upward for some period of time, and then back down for another different period of time.
>
> **[1:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=101)** Between 1970 and 2009 the United States economy experienced seven different recessions.
>
> **[1:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=108)** These recessions ranged in length from six to 18 months.
>
> **[1:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=112)** We would not regard these recessions and recoveries as seasonal, but rather a cyclic.
>
> **[1:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=118)** They did not occur regularly, nor did they last for a period of time that you could specify beforehand.
>
> **[2:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=125)** When a baseline has a seasonal pattern we can take advantage of it in our forecasts.
>
> **[2:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=130)** For example, if we see an annual spike in home sales during the spring months in each of the past 10 years, we wouldn't want to ignore that pattern in forecasting home sales during the next year's spring quarter.
>
> **[2:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=143)** There are various ways available to account for the seasonality.
>
> **[2:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=147)** Using linear regression is typical to create dummy variables that uniquely identify particular seasons.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=156)** Another approach involves calculating the deviation of each season from the baseline's longterm average, and using those deviations to forecast each season.
>
> **[2:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=166)** This course focuses on the use something called a "seasonal smoothing constant".
>
> **[2:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=172)** If you have viewed the course on simple expediential smoothing, or the second course in this series on smoothing trended baselines, you've seen that it can be useful to name the cells in the Excel worksheet that contain the smoothing constants.
>
> **[3:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=185)** I'm going to extend the concept in this course so that includes not only the smoothing constants but also identifies seasons by means of relative cell references.
>
> **[3:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=196)** The reason for the relative cell references is that you use the seasonal smoothing constant in conjunction with their baseline measure taken when that season last occurred.
>
> **[3:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=206)** This differs from level and trend smoothing which normally look back exactly one period for their inputs.
>
> **[3:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=214)** One season can be separated from the next instance of that season by 12 months, by six two months periods, by a week, even by just a day.
>
> **[3:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=223)** So it's useful to be able to point back from the current observation by one full turn of the seasons, which might be a full year in 12 rows with monthly seasons, a full year in six rows with bi-monthly seasons, seven days in one row with daily seasons, or 24 hours in one day with hourly seasons.
>
> **[4:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=244)** We'll see how that's done in the next video.

> [!info]- Semantic Content
>
> **Analogies:** for example (4)
> **Env Vars:** dwi (2)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Defined names and relative references
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_02_Begin in the using beta as a cell name worksheet.
>
> **[0:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=9)** Excel has a feature that makes your work go a lot quicker, helps to avoid careless errors, and makes the documentation of a worksheet much easier.
>
> **[0:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=18)** That feature is defined names.
>
> **[0:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=21)** Here, you can put the level smoothing constant in a cell and then give that cell the name alpha.
>
> **[0:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=29)** You can do the same thing with the trend smoothing constant.
>
> **[0:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=33)** Put it in a cell and name the cell beta.
>
> **[0:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=35)** Suppose that you define the name beta for cell J2.
>
> **[0:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=39)** If so, your formula for the next forecast of the trend value could be more self documenting.
>
> **[0:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=46)** In this case, the name beta stands for cell J2, but it has meaning beyond the simple address that results from the intersection of a column and a row.
>
> **[0:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=56)** And, as you'll see shortly, the name can redefine itself depending on what cell you use it in.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=62)** All by itself, it's a small thing and if that were all there was to it, I'd define to name might not be much of a tool.
>
> **[1:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=70)** But defined names have a couple of characteristics that make them really useful.
>
> **[1:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=74)** For example, when you define a name, by default, that name refers to an absolute reference.
>
> **[1:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=81)** I'm gonna switch worksheets here.
>
> **[1:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=83)** Suppose you want to use the name FirstCell to refer to cell A1.
>
> **[1:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=88)** If you don't do anything special, then the name FirstCell refers to the reference $A$1.
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=95)** Here's how you define that name.
>
> **[1:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=97)** Select the cell that you want to name, here that's A1.
>
> **[1:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=100)** Click the ribbon's formulas tab.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=104)** Find the defined names group and click define name.
>
> **[1:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=109)** Enter FirstCell as one word in the name box.
>
> **[1:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=113)** In the scope dropdown, choose absolute references as the name of the worksheet that you want to limit the scope to.
>
> **[2:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=120)** The reference puts a dollar sign before the A and a dollar sign before the one.
>
> **[2:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=125)** That makes it an absolute reference.
>
> **[2:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=127)** No matter which cell in the worksheet is active when you use the name FirstCell, the name will refer to A1.
>
> **[2:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=134)** The dollar signs in the reference anchor the defined name to column A and row one.
>
> **[2:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=143)** Notice that when I enter the formula =FirstCell in any other cell, it returns the value in cell A1.
>
> **[2:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=152)** Now I'll switch to the worksheet named relative references and define FirstCell as a relative reference.
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=160)** Suppose that you do something special when you define the name so that both of the dollar signs are missing.
>
> **[2:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=166)** Start by selecting C3.
>
> **[2:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=170)** Then name cell A1 as FirstCell with relative referencing.
>
> **[2:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=176)** Enter the name FirstCell, change the scope from workbook to relative references, and remove the dollar signs so that it refers to cell A1 without any dollar signs in the reference, then click OK.
>
> **[3:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=193)** Leaving off the dollar signs makes the reference a relative reference.
>
> **[3:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=197)** If the active cell is, say, C3 when you define the name FirstCell as a relative reference to cell A1, then FirstCell will refer to whatever cell is two columns to the left and two rows above the cell where you used the defined name FirstCell.
>
> **[3:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=215)** Now let's try the same thing in cell C4 and our =FirstCell, and hit return, and we get a zero.
>
> **[3:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=224)** The reason is that if FirstCell is pointing to the left by two columns and up by two rows from cell C4, there's nothing in cell A2 and in consequence, FirstCell returns to zero to cell C4.
>
> **[4:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=243)** Excel also has mixed referencing which uses a dollar sign before either the row number or the column letter, but not both.
>
> **[4:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=251)** We'll use mixed referencing with an absolute column and a relative row when we define exactly when it was that a season last occurred.
>
> **[4:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=260)** Why is this useful for seasonal smoothing?
>
> **[4:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=262)** Because when we're using the seasonal smoothing constant, we want to multiply that times the prior instance of the same season and the prior instance of the same seasonal forecast.
>
> **[4:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=274)** That's a little trickier than using the prior level or the prior trend.
>
> **[4:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=278)** For example, if we're working with months and therefore have 12 seasons, we could define a name as a relative reference that points up 12 rows from wherever it is that we use it.
>
> **[4:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=292)** I've switched to the worksheet named a year ago.
>
> **[4:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=295)** Suppose we defined the name one year back with the relative reference to the cell 13 rows up.
>
> **[5:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=303)** Also suppose that each row represents a month.
>
> **[5:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=307)** Then cell B2 could represent January and when we use the name one year back in cell E14, it would refer to the value in cell B2.
>
> **[5:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=318)** Of course, you could dispense with the use of names entirely and instead just link a cell to its precedent.
>
> **[5:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=325)** In the current example, you could enter the formula =B2 in cell E14.
>
> **[5:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=331)** I've always found, though, that the naming of the cells in this way makes it a lot easier for me to maintain a worksheet and to figure out six months from now, what it was I had in mind.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (2), self (1), case, (1), default, (1), let (1)
> **Definitions:** refers to (3), stands for (1)
> **UI Navigation:** select the (1), dropdown (1), switch to (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** e14 (2)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise file (1)

#### Diagnosing seasonality
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=1)** - [Instructor] Go ahead and open up 01_03_ARIMA from the exercise files before starting this video.
>
> **[0:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=7)** Next, open up exercise file 01_03.
>
> **[0:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=12)** I'm in the worksheet called Baseline.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=15)** In the course of working on a forecasting project, you're often confronted with a decision regarding a baseline.
>
> **[0:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=22)** When you chart it, the baseline might display seasonal components, but then again, it might be just an optical illusion.
>
> **[0:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=29)** I think it's generally a good idea to have a look at the charted baseline, but it's also a good idea to back up your visual judgment with a quantitative test.
>
> **[0:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=38)** Here's one such test in exercise file 01_03.
>
> **[0:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=43)** This baseline consists of 20 quarterly observations, and it's pretty clear that it's seasonal.
>
> **[0:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=49)** The baseline spikes during the first quarter of each year when t equals one, five, nine, 13, and 70.
>
> **[0:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=59)** Many of the seasonal baselines that you run into will not be anywhere near as evident as this one.
>
> **[1:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=65)** Here's one way that you can get a better idea than just by eyeballing a chart at the baseline.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=71)** Click the Add Ins tab on the ribbon.
>
> **[1:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=73)** You will see a group titled Many Commands.
>
> **[1:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=76)** You should find an item titled Arima, A-R-I-M-A, in that group.
>
> **[1:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=83)** Click on that item to bring up this dialogue box.
>
> **[1:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=87)** With the flashing I bar in the input range edit box, drag through the range that contains your baseline.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=94)** The baseline should consist of no more than one column and as many rows as you have baseline observations.
>
> **[1:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=102)** So in this case, that would be D2 to D21.
>
> **[1:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=108)** If you think that the baseline might be trended as well as seasonal, fill the first differencing checkbox.
>
> **[1:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=114)** This will analyze the first differences of the baseline.
>
> **[1:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=118)** Most baselines that are trended at all can be made stationary with first differencing.
>
> **[2:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=123)** I'm going to leave it unchecked.
>
> **[2:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=126)** Enter the number of lags for the correlograms in the appropriate edit box.
>
> **[2:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=130)** With good quarterly data, you would want to enter at least four, and a larger number is often better if you have a good, long baseline.
>
> **[2:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=138)** I'll enter 12 here.
>
> **[2:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=141)** Click the okay button.
>
> **[2:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=144)** Excel takes over and will create two correlograms for you.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=148)** One shows the autocorrelation function at different lags, abbreviated ACFs, and the other shows partial autocorrelation functions at different lags, labeled PACFs.
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=160)** For present purposes, the ACF or autocorrelation function is enough to help you decide on whether a baseline displays true seasonality.
>
> **[2:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=170)** Here is what the ACF looks like.
>
> **[2:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=172)** It's provided in the exercise file 01_03 in a tab of its own.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=178)** This correlogram, with the spike at lag four, indicates a fairly strong relationship between observations made four quarters apart per month.
>
> **[3:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=187)** Certainly the spikes in the first quarter of each year contribute heavily to the size of the autocorrelation function at that lag, but the baseline has three other quarters each year that are also related to one another, if not quite as strongly.
>
> **[3:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=202)** The evidence, both visual and quantitative, indicates a seasonal baseline.
>
> **[3:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=208)** For contrast, here's a stationary baseline.
>
> **[3:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=212)** Here is the correlogram for the autocorrelation function based on the stationary, nonseasonal baseline.
>
> **[3:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=219)** In this correlogram, none of the ACFs even approach the upper line of dashes or the lower line of dashes, which indicate the location of two standard errors above and below the zero point.
>
> **[3:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=232)** Visually and quantitatively, this is a stationary baseline with no evidence of seasonality at all.
>
> **[4:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=240)** There are different ways of determining whether a baseline is seasonal.
>
> **[4:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=243)** Some, including the Croskill Wallace test, are nonparametric and do not make assumptions regarding the shape of underlying distributions.
>
> **[4:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=251)** Some are parametric, such as linear regression tests, of the size of the seasonal indexes.
>
> **[4:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=258)** Nonparametric statistics avoid making assumptions that can turn out wrong, but they are relatively low on statistical power.
>
> **[4:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=266)** Parametric statistics, such as the t-tests employed in regression analysis, have more statistical power, but much of that strength comes from the use of assumptions which might be off base.
>
> **[4:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=279)** The method I suggest here, the use of correlograms and autocorrelation functions, strikes a nice balance between the low statistical power of nonparametric statistics and the possibly unwarranted assumptions of regression analysis.
>
> **[4:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=295)** It's true that comparing an ACF to its standard error comes close to making an assumption about the shape of an underlying distribution, but that's what it does.
>
> **[5:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=304)** It comes close, but it doesn't rely on such an assumption.
>
> **[5:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=308)** Now let's move on to seasonal smoothing of baselines that are not trending.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), case, (1), let (1)
> **Env Vars:** acf (3), d21 (1)
> **Exercise Files:** exercise file (3), exercise files (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1), checkbox (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Simple seasonal indexes
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_04 on the worksheet named Seasonal Effect Example.
>
> **[0:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=8)** To build a forecast that responds to seasonality in the baseline we need to start by defining seasonal effects.
>
> **[0:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=14)** A seasonal effect measures the amount of the effect that being in a given season exerts on values in the baseline.
>
> **[0:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=22)** In this case, simply being in the season named December might increase the December sales by $10,000 over the average monthly sales for the year.
>
> **[0:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=33)** Similarly, taking place in the month of July might decrease July sales by $3,000 below the average monthly sales for the year.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=42)** Then the seasonal effect for December would be plus 10,000, and the seasonal effect for July would be minus 3,000.
>
> **[0:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=51)** Let's see how that works out in practice.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=53)** On the worksheet that you see, I have calculated the mean sales for the first year in cell M4.
>
> **[1:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=60)** I gave the cell the name Year_1_Mean, as shown in cell L4.
>
> **[1:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=67)** So the seasonal effect for the first period, in cell J2, subtracts the year one mean from the actual observation for period one in cell D2.
>
> **[1:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=78)** Subtracting 8170.8 from 7950 gives a seasonal effect of minus 220.8 in cell J2.
>
> **[1:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=88)** The name Year_1_Mean is an absolute reference.
>
> **[1:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=91)** It's reference is actually $M$4, so we can copy a formula that incorporates that name anywhere on a worksheet that we want to, and the address of the reference will remain unchanged.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=104)** That's just what I've done in cells J3 through J7.
>
> **[1:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=108)** Merely copying and pasting the formula in J2 down an additional five cells results in an effect for each of the six seasons of the first year.
>
> **[1:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=119)** Notice, by the way, that because of the way that the seasonal effects are defined, they sum to zero for any given year.
>
> **[2:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=127)** Each season usually has a different effect on whatever you're forecasting.
>
> **[2:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=131)** Sales dollars, daily high temperatures, or number of traffic accidents.
>
> **[2:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=136)** The total effect of the seasons is zero because each season's effect is the difference between that season's observation and the annual average.
>
> **[2:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=146)** All we've just done by populating cells J2 to J7 is to initialize the seasonal effects at the start of the baseline.
>
> **[2:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=155)** The concept and the purpose of initializing the effects is the same as it is for initializing the level in simple exponential smoothing or the trend in Holt's method.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=167)** From the first period of the second year forward, we'll forecast the seasonal effects differently, using a smoothing formula and a smoothing constant for seasonal effects.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=178)** Following most authors who write about exponential smoothing, I will refer to the seasonal smoothing constant as delta.
>
> **[3:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=185)** You're likely to see other authors refer to it as gamma, but the research I've done indicates that they're in the minority.
>
> **[3:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=194)** Now I'm on the worksheet titled Initialize the level.
>
> **[3:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=198)** One more task before we can start smoothing through the seasonal effects, we need to initialize the level of the baseline.
>
> **[3:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=205)** And one straightforward way of doing so is to simply initialize it to the average of the baseline for the first year.
>
> **[3:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=212)** You can do so by setting cell H7 to the value of year one mean.
>
> **[3:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=218)** Here's the formula.
>
> **[3:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=220)** With the level and the seasonal effects initialized, we can move ahead with the smoothing formulas for the actual forecasts.
>
> **[3:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=227)** I'll demonstrate that process next.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), let (1)
> **Versions:** 8170.8 (1), 220.8 (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Seasonal smoothing and horizontal baselines
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_05_Begin on the worksheet named Initialize the Level.
>
> **[0:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=8)** Now that we have the baseline's level initialized along with its seasonal effects, we can start the process of forecasting, the first step in that process is to define a range name that uses a mixed reference.
>
> **[0:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=21)** That is in this case, an absolute reference to a column and a relative reference to a row.
>
> **[0:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=27)** The purpose of the name is to pick up the value of the seasonal effect on the previous time the season took place.
>
> **[0:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=35)** I'm going to switch worksheets here to Get Seasonal Effects.
>
> **[0:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=39)** Start by selecting cell H8, click the Formulas tab on the ribbon, and locate the defined names group.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=47)** Click the Define Name button.
>
> **[0:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=50)** In the Name headed box, type the name OneYearBack.
>
> **[0:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=55)** In the Scope dropdown, select the name of the active worksheet here that is Get Seasonal Effects.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=62)** Enter a comment if you'd like, something such as last year's seasonal effect.
>
> **[1:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=68)** Drag through whatever you see in the Refers to edit box and click in cell J2, move the dialog box around the screen as needed, right now the defined name is still an absolute reference.
>
> **[1:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=81)** There are dollar signs before both the column, and the row.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=85)** Click between the dollar sign and the number two, and then press the Backspace key once.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=93)** This converts the absolute reference $J$2 to the mixed reference $J2.
>
> **[1:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=102)** Wherever you use the name OneYearBack it will refer to the cell in column J that is six rows above the active cell, which in this case is cell H8.
>
> **[1:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=114)** Click OK to finish defining the name, now we can start our smoothing forecasts.
>
> **[1:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=119)** You should still be in cell H8 but select it if you're not.
>
> **[2:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=122)** Then enter this formula, equals Alpha times, open paren, D8 minus OneYearBack close paren, plus open paren, one minus Alpha close paren times H7, and press Return.
>
> **[2:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=146)** That is the smoothing formula for the baseline's level, recall that in the smoothing form of the formula we multiply the smoothing constant Alpha times the prior level of the baseline.
>
> **[2:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=158)** But because we're working with a seasonal baseline we need to subtract the effect of the current season from the actual observation in order to estimate the current level.
>
> **[2:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=169)** The effect of the current season is the seasonal effect from one year ago and is returned by the defined name OneYearBack, so the difference between the current observation and the most recent estimate, of the seasonal effect is returned by the difference between cell D8 and the effect for OneYearBack.
>
> **[3:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=189)** We multiply that difference by Alpha, then we complete the smoothing formula for the baseline's level just as we have in the past by multiplying one minus Alpha by the prior period's level which is in cell H7.
>
> **[3:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=203)** Adding together the two products, one involving Alpha and the other involving one minus Alpha results in the current estimate of the baseline level.
>
> **[3:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=212)** What about the current estimate of the seasonal effect?
>
> **[3:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=214)** That's in cell J8 and here's the formula that goes in there, equals Delta times open paren, D8 minus H8, close paren, plus open paren one minus Delta, close paren times OneYearBack.
>
> **[3:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=237)** We use the same pattern established by the smoothing form of the level equation but we use the smoothing constant Delta instead of Alpha.
>
> **[4:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=246)** The formula starts by multiplying Delta by the current estimate of the seasonal effect.
>
> **[4:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=252)** We get that estimate by taking the current observation in cell D8 and subtracting from that the estimate of the baseline level that we just found in cell H8.
>
> **[4:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=264)** The difference between the two, between the observation and the level estimate is the current observed seasonal effect that gets multiplied by Delta the seasonal smoothing constant.
>
> **[4:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=275)** To complete the formula for the current seasonal estimate multiply one minus Delta by the prior estimate of the seasonal effect, that value is OneYearBack, the estimated effect of the season the last time it occurred, one year ago.
>
> **[4:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=292)** Again, add the two products together to get the forecast value for the current season.
>
> **[4:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=299)** Now we can copy the smoothing formulas for the baseline level and for the seasonal effect down through the row occupied by the final observation.
>
> **[5:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=308)** Select cell H8 click the fill handle in its lower-right corner and drag gown through cell H16.
>
> **[5:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=317)** Do the same with column J, drag cell J8 down through cell J16.
>
> **[5:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=326)** With those forecasts in place we can calculate the forecasts for the seasonal baseline.
>
> **[5:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=332)** I'll do that in column K.
>
> **[5:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=337)** And the formula is equals sigh, H7 plus J2.
>
> **[5:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=343)** This formula adds the current estimate of the baseline's level to the current estimate of the seasonal effect, it is the forecast for the next time period.
>
> **[5:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=354)** But that estimate comes in part from cell J2, the last time that the effect for the next season was forecast.
>
> **[6:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=361)** So to get the current forecast we add the level estimate in cell H7 to the seasonal effect in cell J2.
>
> **[6:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=368)** The result is the forecast for period seven.
>
> **[6:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=371)** If you now drag cell K7 down through cell K16 you'll get the one step ahead forecast for the seasonal baseline, the forecast for period 16.
>
> **[6:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=383)** Now we need to add some finishing touches including the calculation of the root mean square error in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), switch (1), return. (1)
> **Env Vars:** h16 (1), j16 (1), k16 (1)
> **UI Navigation:** dropdown (1), select the (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Optimizing Seasonal Forecasts

> [↑ Back to Table of Contents](#table-of-contents)

#### Minimizing RMSE
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=1)** - [Instructor] I'm starting in the exercise file 02 01 Begin in the Add Forecast Error worksheet.
>
> **[0:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=8)** Often I find it useful to keep two copies of the forecasts on the worksheet where I do the analysis.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=15)** We've already put forecasts for the seasonal smoothing baseline in column K.
>
> **[0:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=20)** Those forecasts start in cell K7.
>
> **[0:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=24)** The forecast 7950 is actually the forecast for the next period, just as it says in cell K1.
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=32)** Most of the data in row seven pertains to time period six.
>
> **[0:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=36)** And in the normal course of events you would wait for all the data for time period six before you made your forecast for time period seven.
>
> **[0:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=45)** But you would normally want to know your forecast for time period seven before the actual data for that period became available.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=53)** Often you're just at the tail end of period six when you make your forecast for period seven.
>
> **[0:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=58)** So to help keep myself straight I do my calculations for the forecast of period seven in row seven.
>
> **[1:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=65)** Then I link a cell in row eight back to the forecast made in row seven.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=71)** That's important, because several of the calculations that take place in row eight require the forecast of period seven.
>
> **[1:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=78)** And that's why the forecasts that you see in column K on the worksheet named Add Forecast Error are repeated in column E, shifted down by one row.
>
> **[1:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=88)** In turn that makes it easy to calculate the error involved in each forecast.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=93)** I've put that calculation in column F.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=96)** Here's the formula for cell F8.
>
> **[1:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=99)** It really makes no difference whether you subtract the observation from the forecast or vice versa.
>
> **[1:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=105)** Before we made use of the errors we're going to square them and so they will end up as positive values.
>
> **[1:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=110)** I'll go ahead now and drag the formulas for the forecasts into cell E17 and for the forecast error down through cell F16.
>
> **[2:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=121)** There's no point in going any further, because row 16 is the site of the final observation in cell D16 and no more forecasts can be calculated until more data become available.
>
> **[2:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=134)** With the forecast errors calculated in column F the value of the root mean square error, or RMSE, becomes available in cell M5.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=145)** There's a trade-off here.
>
> **[2:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=147)** I want to keep the calculated forecast errors in column F in the original scale of measurement, that makes it easier for me to compare visually the actuals with the forecasts.
>
> **[2:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=158)** But the root mean square error needs to have those errors squared and then averaged.
>
> **[2:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=163)** That makes the formula for the RMSE a little more complicated.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=167)** The trade-off is between the convenience of showing the errors in their original metric and the convenience of a less complicated formula for RMSE.
>
> **[2:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=176)** The more complicated formula is shown in cell M5.
>
> **[3:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=180)** Notice that it squares the values in the range F8 to F16, then it takes the average of those squares, and finally, the square root of the average.
>
> **[3:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=191)** The exponentiation operator, the caret, normally takes only one number as its argument.
>
> **[3:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=197)** Here though I wanted to square each of the error values before averaging those squares and taking the square root of the result.
>
> **[3:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=205)** In Excel the way to do that is to use what's called an array formula.
>
> **[3:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=210)** After you've typed the formula instead of just pressing Enter you'll hold down the Control and Shift keys simultaneously and press Enter.
>
> **[3:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=219)** This signals Excel that you want it to treat the formula as an array formula.
>
> **[3:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=224)** Excel indicates that it will do so by surrounding the formula shown in the formula bar with curly brackets.
>
> **[3:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=232)** With the RMSE calculated we can use Solver to minimize it and thus to minimize the cumulative forecast errors.
>
> **[3:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=239)** I'm in the worksheet named Optimize RMSE.
>
> **[4:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=243)** Before we can use Solver to optimize the values for the smoothing constants we need to install it.
>
> **[4:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=249)** Do so by going to the File tab and coming down in the nav bar and clicking Options.
>
> **[4:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=256)** In the Options dialog box on the left side nav bar click Add-ins.
>
> **[4:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=262)** And at the bottom of the window make sure that the Manage drop-down is set to Excel Add-ins, and click the Go button.
>
> **[4:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=270)** You'll find the Add-ins dialog box.
>
> **[4:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=273)** Fill the Solver Add-in checkbox and click OK.
>
> **[4:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=278)** And the add-in is now installed and if you click the Data tab on the Data tab find the Analysis group and the Solver button in that group.
>
> **[4:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=287)** Go ahead and click the button to bring up the Solver Parameters dialog box.
>
> **[4:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=292)** We are looking to minimize the value of the root mean square error in cell M5.
>
> **[4:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=299)** So for the Set Objective edit box click in cell M5.
>
> **[5:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=306)** We want to minimize its value, so select that radio button.
>
> **[5:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=310)** And in By Changing Variable Cells drag through both M1 and M2 to choose both the Alpha and the Delta smoothing constants.
>
> **[5:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=320)** We need to add constraints, so click Add.
>
> **[5:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=323)** And for the Cell Reference click in cell M1, hold onto the less than or equal to operator and for the Constraint enter 1, and click Add.
>
> **[5:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=335)** Again, in the Cell Reference click M1.
>
> **[5:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=338)** This time choose greater than or equal to and set the Constraint to 0 and click Add.
>
> **[5:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=345)** For the Cell Reference click cell M2.
>
> **[5:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=349)** Reset the operator to greater than or equal to and enter 0 as the Constraint, click Add.
>
> **[5:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=358)** And again, click in cell M2 for the Cell Reference, choose less than or equal to, and enter 1, and click OK.
>
> **[6:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=369)** In this case it makes no difference whether the unconstrained variables are non-negative, so you can either clear or allow that checkbox to remain filled.
>
> **[6:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=379)** You want to check the GRG Nonlinear as the Solving Method and click the Options button.
>
> **[6:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=385)** Choose GRG Nonlinear at the top of the dialog box and make sure that the Use Multistart checkbox is filled and click OK and click Solve.
>
> **[6:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=396)** Click OK and you have now optimized the values for Alpha and Delta in cells M1 and M2 and that minimizes the size of the root mean square error for the analysis.
>
> **[6:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=411)** With the constants optimized we're in a position to forecast beyond the one step they had forecast that's typically of simple exponential smoothing.
>
> **[7:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=420)** Let's switch over to the Extend the Forecasts worksheet.
>
> **[7:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=425)** If you're willing to assume that the level of the series does not change from time period to time period you can freeze the estimate of the level at the point where it was most recently calculated on the basis of an actual observation.
>
> **[7:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=439)** In this case that would be in time period 15 in cell H16 on the worksheet.
>
> **[7:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=445)** Simply copy the value of 8170.8 through say cell H21.
>
> **[7:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=452)** Then copy the formula for the forecast of the next period from cell K16 through K21.
>
> **[7:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=459)** This will give you an extra year of forecasts.
>
> **[7:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=462)** Bear in mind that the added forecasts are based on two critical assumptions.
>
> **[7:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=467)** One, that the level does not change subsequent to the final actual observation and two, that the seasonality effects remain as they are during the last six periods at the end of the original baseline.
>
> **[8:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=482)** Because you are assuming a seasonal horizontal baseline to begin with the first assumption is not too troubling.
>
> **[8:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=488)** And because you're using seasonal the effect estimates from a year previous from the forecast you will have had time to evaluate them before you reach the end of the baseline.
>
> **[8:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=498)** Next, we'll have a look at Excel 2016's new forecast sheet feature and how to do all of this work much more quickly using R.

> [!info]- Semantic Content
>
> **Env Vars:** rmse (5), f16 (2), grg (2), e17 (1), d16 (1)
> **CLI Commands:** find (3), make (3)
> **Code Keywords:** require (1), finally, (1), let (1), switch (1)
> **UI Navigation:** checkbox (3)
> **Versions:** 8170.8 (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### The Excel Forecast Sheet
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=0)** - [Instructor] I'm in exercise file 02_02_Begin in the sheet named Data Forecast Sheet.
>
> **[0:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=8)** If you have used Microsoft Excel 2016, you might have noticed a new feature on the ribbon's Data tab called Forecast Sheet.
>
> **[0:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=16)** The available documentation for the forecast sheet does not specify how the forecasts are created, but the names of the functions and some of the vocabulary used in the documentation indicates that the intent is to duplicate the approaches that are usually termed simple exponential smoothing, Holt's method for forecasting trended baselines, and and Holt winters or seasonal smoothing, as discussed in the present course.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=42)** Here's a brief look at how to use the forecast sheet.
>
> **[0:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=45)** I'll use this data which comes from a generally accessible website so that you can duplicate the analysis if you wish to do so using Excel formulas or the Excel forecast sheet or R.
>
> **[0:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=57)** To use the forecast sheet, put time period identifiers in one column, such as column A here.
>
> **[1:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=64)** In a column adjacent and to the right of the time period identifiers, place your baseline observations.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=71)** Select either the full data set, including both columns, or select just one cell in the data set.
>
> **[1:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=78)** Click the ribbon's Data tab and then click the Forecast Sheet in the Forecast group.
>
> **[1:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=83)** You'll get this dialog box.
>
> **[1:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=86)** If you have set things up correctly, you'll wanna accept almost all the default settings.
>
> **[1:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=91)** I do recommend that you click the Options button to get the following settings.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=96)** You can adjust the point at which the forecasts end as well as the point at which they start.
>
> **[1:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=102)** Particularly if there is a trend in your baseline, adjusting the starting point can make a substantial difference to the forecast values.
>
> **[1:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=111)** I also recommend that you fill the Include forecast statistics check box.
>
> **[1:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=116)** Doing so will provide you with additional information about the forecast.
>
> **[2:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=121)** Click Create.
>
> **[2:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=123)** Notice that the results include the values for the level, the trend, and seasonality smoothing constants used in the forecast.
>
> **[2:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=131)** There are also four measures of forecast accuracy, including RMSE or root mean square error, the measure that's used almost exclusively in this series of courses.
>
> **[2:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=141)** The remaining three measures include MASE, or mean absolute scaled error, SMAPE, symmetric mean absolute percentage error, and MAE, mean absolute error.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=156)** Let's take a look at the worksheet titled Analysis via Excel.
>
> **[2:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=161)** Here for the comparison are the analyses of the same data set using Excel worksheet formulas, as we've done in prior videos in this course, and also forecasts generated in R.
>
> **[2:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=173)** The forecasts from those two sources are shown highlighted in yellow, and if you compare the values in column G with the values in column I, you see that they are all either identical or extremely close to one another.
>
> **[3:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=186)** In other words, the Excel worksheet is in agreement with R.
>
> **[3:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=190)** Now let's go to Charted Data R, XL Formulas.
>
> **[3:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=196)** Finally, and again for comparative purposes, here is a chart of the actual baseline observations and the forecasts from Excel and from R.
>
> **[3:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=205)** You can see how close they are to one another.
>
> **[3:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=207)** Let's move on to the use of R to analyze seasonal baselines.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), finally, (1)
> **Env Vars:** rmse (1), mase (1), smape (1), mae (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)

#### Prepare to make a seasonal forecast in R
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=1)** - [Instructor] I'm in exercise file 0203.
>
> **[0:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=4)** What you see on your screen right now is a forecast made on a different baseline using techniques that we have already explored in this course so far.
>
> **[0:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=14)** I'd like to direct your attention in particular to the alpha and the delta smoothing constants.
>
> **[0:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=22)** You might want to make a note of those because we're about to run the same analysis on the same data set using R.
>
> **[0:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=30)** So we'll be in a position to compare the results that Excel returns with the results that are returned by R.
>
> **[0:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=38)** We're gonna start out by highlighting or selecting the baseline data because we'll be pulling that data into R using the desk tools that function in R but with that highlighted, now we can start R and we'll need to pull in a couple of packages in order to complete the analysis.
>
> **[0:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=57)** The first one is going to be desk tools which you'll pull in using the library command.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=62)** And we'll also pull in the forecast function package rather, using again the library command.
>
> **[1:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=70)** With those in hand, we can start to perform the analysis.
>
> **[1:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=74)** We need to pull the data in and we're gonna do that by specifying that we want the results of pulling the data from Excel stored temporarily in an object called Seasons.
>
> **[1:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=86)** We'll use the Excel get range function and we'll set the header to false because we did not include in the range of data a header row and now we just hit return.
>
> **[1:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=101)** When you execute the Excel get range function it's possible, especially if this is the first time that you have run it, that R will complain that it cannot find an rdcom client component of the Excel get range function.
>
> **[1:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=116)** If that occurs, you will also get, as part of the error message, a function to run that will pull the rdcom client down from a different server and store it in your workspace in R.
>
> **[2:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=132)** If you follow those directions, the problem that caused the difficulty and the error message that you see will have been solved.
>
> **[2:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=140)** With that being done, let's move forward with the analysis itself and we do have the data from Excel stored in the Seasons object.
>
> **[2:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=149)** We want to convert that to a timed series.
>
> **[2:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=152)** And the reason is that in this case we have six seasons per turn of the seasons.
>
> **[2:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=158)** In other words we have six seasons consisting of two months each.
>
> **[2:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=162)** If we convert these Season's data to a time series object in R, then the time series object will incorporate that information and will pass it on to the exponential smoothing code.
>
> **[2:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=175)** We do that by using the ts, stands for time series, function.
>
> **[2:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=179)** We will store the time series object in the object called ts Seasons.
>
> **[3:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=185)** We'll use the ts function to do that with two arguments.
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=188)** The first argument is the name of the data set, here Seasons, and we also wanna specify the frequency.
>
> **[3:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=195)** Here our frequency will equal six because we have six seasons per year.
>
> **[3:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=201)** And return, and that is the contents of the ts Seasons object.
>
> **[3:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=206)** Now we're in a position to execute the hw, which stands for Holt-Winters function that will actually do the seasonal exponential smoothing analysis for us.
>
> **[3:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=219)** And we'll store the results in an object called hw Seasons, which stands for Holt-Winters Seasons.
>
> **[3:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=225)** And we'll call the hw function, which is part by the way of the forecast package, the first argument is ts Seasons, that is where the hw function will get its data.
>
> **[3:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=237)** The second argument is h=3, which is simply informing R to forecast forward by three seasons.
>
> **[4:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=246)** The next argument is beta=f, and all that is saying is R is not to compute a beta or a trend smoothing constant.
>
> **[4:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=257)** Setting data equals false, calls R to ignore any trend component that it might think that it finds.
>
> **[4:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=264)** The next argument is initial=simple and that simply states that we want R to use the simplest method to initialize the level and the seasons that it can.
>
> **[4:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=277)** We went through that process in Excel in an earlier video.
>
> **[4:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=281)** The final argument is additive.only=t and end paren.
>
> **[4:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=290)** And that is saying that if R encounters any calculations that rely on a multiplicative as opposed to an additive algorithm that it should ignore the multiplicative and use the additive where it can.
>
> **[5:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=305)** And I'm gonna simply hit return.
>
> **[5:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=307)** And the information that is created by that hw function is stored in hw Seasons.
>
> **[5:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=314)** We take a look at the contents by using the summary function.
>
> **[5:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=317)** And the smoothing parameters .0087 toward the top of the window are virtually identical to the smoothing parameters that you found using Excel, .0086 and .4616.
>
> **[5:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=333)** The root mean square error is another story.
>
> **[5:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=336)** It is, according to R, 11.4559.
>
> **[5:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=341)** That is, by the way, the same as the sigma measure that is recorded just prior to error measures.
>
> **[5:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=349)** But it is somewhat smaller.
>
> **[5:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=351)** We know exactly in the case of the Excel analysis how the root mean square error was calculated.
>
> **[5:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=358)** Calculated simply by subtracting the forecast from the associated actual, and squaring the difference, taking the average of the square differences and then taking the square root of that average.
>
> **[6:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=371)** The result is 14.7, somewhat larger than the 11.45 then reported by R.
>
> **[6:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=377)** This is, frankly, a point in favor of doing these analyses in Excel because you can tell exactly how this statistic was calculated.
>
> **[6:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=386)** On the other hand if you're using R, it's more or less a black box.
>
> **[6:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=390)** You don't know how the root mean square error was calculated.
>
> **[6:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=393)** Is there a problem in the code?
>
> **[6:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=395)** I don't know, probably not.
>
> **[6:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=397)** There may well be an alternative method of calculating rmse that is favored by the person who created the code.
>
> **[6:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=404)** But point is that you can take your pick between the two applications and be happy with either one of them.

> [!info]- Semantic Content
>
> **Code Keywords:** function (13), return. (2), let (1), pass (1), return, (1)
> **Definitions:** stands for (3), is a  (1), in other words (1)
> **Versions:** 11.4559 (1), 14.7 (1), 11.45 (1)
> **CLI Commands:** make (1), find (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=1)** - [Conrad] There are plenty of features used by different smoothing models that this course hasn't had enough time to explore even briefly, let alone in depth.
>
> **[0:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=9)** If you intend to look further into smoothing as an approach to forecasting, I urge you to examine a model not only from the point of view of the summary statistics provided by functions in R, but also the period to period details that show most clearly in an Excel worksheet.
>
> **[0:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=26)** There are so many choices involved in specifying a smoothing model that it can be very difficult to distinguish a change in the nature of the baseline from an apparently minor change in the way a model is specified.
>
> **[0:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=39)** Those choices can involve differences between trended and seasonal models, add a difference in small duplicative models, whether a damping parameter has been added to the equation and which error measure has been chosen to evaluate the smoothing constants.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=53)** With that in mind, I encourage you to explore some of my other courses in this library.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Speakers:** - [conrad] (1)


## Instructor

- [[Conrad Carlberg]]

## Resources

- Exercise files available

## Skills Covered

- Business Intelligence (BI)
- Forecasting

## Path Context

### In [[Get Ahead in Business Analytics and Analysis]]
← [[Business Analytics- Forecasting with Exponential Smoothing]] | **15 of 19** | [[Requirements Elicitation and Analysis]] →

## Appears In

- [[Get Ahead in Business Analytics and Analysis]]

---

[↑ Back to top](#)