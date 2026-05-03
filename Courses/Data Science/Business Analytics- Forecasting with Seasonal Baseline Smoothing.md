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
created: 2026-05-03
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
  - [Why seasonal baseline smoothing will help your regression](#why-seasonal-baseline-smoothing-will-help-your-regression)
  - [Software setup](#software-setup)
- [**1. Approaches to Seasonal Smoothing**](#1-approaches-to-seasonal-smoothing) (5 videos)
  - [Seasonality in a baseline](#seasonality-in-a-baseline)
  - [Defined names and relative references](#defined-names-and-relative-references)
  - [Diagnosing seasonality](#diagnosing-seasonality)
  - [Simple seasonal indexes](#simple-seasonal-indexes)
  - [Seasonal smoothing and horizontal baselines](#seasonal-smoothing-and-horizontal-baselines)
- [**2. Optimizing Seasonal Forecasts**](#2-optimizing-seasonal-forecasts) (3 videos)
  - [Minimizing RMSE](#minimizing-rmse)
  - [The Excel Forecast Sheet](#the-excel-forecast-sheet)
  - [Prepare to make a seasonal forecast in R](#prepare-to-make-a-seasonal-forecast-in-r)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Why seasonal baseline smoothing will help your regression](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/why-seasonal-baseline-smoothing-will-help-your-regression?u=76281980&t=0)** - [Conrad] You frequently have access to a baseline of data that varies by season. Your company might sell parkas and sales rise in the fall and decline in the spring. Or, suppose you track and forecast the incidence of traffic accidents, which might increase on weekend nights compared to other dates and times. In these and similar cases, you have your hands on a seasonal baseline. There's information in those seasonal variations that can enrich your forecast considerably and help them grow more accurate. Hi, my name is Conrad Carlberg. This course is designed to help you identify seasonality in your datasets and use it to enhance your forecasts. I'll be using two applications to do so, [[Microsoft Excel]], which is a great platform for seeing what's going on in an analysis, and R, which enables you to structure a complex analysis with just a few commands. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [conrad] (1)

#### [Software setup](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=1)** - [Instructor] One of the applications used in this course is R, so I want to show you how to download and install it. I'm going to download the version 3.4.0 for [[Windows]], in part because I'm using a Windows machine, and if you're using a Mac, you'll probably wanna look through R's FAQs for the Macintosh. We are using version 3.4.0 rather than the most recent version of R because there is some issues involved with one of the packages that we want to use. Once I've downloaded R-3.4.0 for Windows, I'll click on the downloaded file to initiate the installation. I'm gonna follow through the wizard and make sure it all installs properly. Going to install just the 64-bit files. And I'll accept the default selections. And clicking finish. At this point, we have R actually installed and running on the machine and we need to download and install a couple of additional packages. I can do that by using the packages menu and then choosing set CRAN mirror. We're going to use a mirror that's located in California, and we click OK. Now with that chosen, we can actually choose the packages to download. We'll click the packages menu and choose install packages.
>
> **[1:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=98)** This is a very long list, so it can take a while to scroll through. We're looking for DescTools, D-E-S-C T-O-O-L-S, and we click OK. Now you're going to get this if your security provisions on your machine prevent you from writing to the library that R prefers to use. In that case, you can choose yes in answer to this question and R will set up a personal library where you are not restricted from installing a new package. You can at this point click yes and yes.
>
> **[2:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=144)** At this point, you have installed the DescTools package. We also need the forecast package. So we install packages, and we scroll down to forecast
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/software-setup?u=76281980&t=160)** and there it is, click on it, and click OK. As soon as R finishes unpacking these components, everything is installed and you're ready to get started with the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3)
> **Prerequisites:** install (5), set up (1)
> **Versions:** version 3 (2), 4.0 (2), 3.4.0 (1)
> **UI Navigation:** click on (2), scroll down (1)
> **CLI Commands:** make (1)
> **Env Vars:** cran (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)


### 1. Approaches to Seasonal Smoothing

[↑ Back to Table of Contents](#table-of-contents)

#### [Seasonality in a baseline](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=1)** - [Instructor] Many baselines display what's usually termed "seasonality". That's a characteristic that causes the baseline to rise and fall at regular intervals. For example, increases in housing prices tend to be sharpest from the first to the second quarters, and to flatten during the other quarters of the year. Notice here that price increases every quarter but the increases are particularly sharp from the first to the second quarter of each year. Many cities and towns tend to collect property taxes twice a year. For example, during November and during May. Their tax receipts tend to spike during those two months, and to resume a fairly flat pattern the remainder of the year. The chart reflects that pattern with the spikes at the fifth month, May, and the 11th month, November. Take a look at this data on DWI Arrests over a one month period. Notice the two day spike in admissions each weekend during the charted period, with a return to a more horizontal pattern during the remainder of the week. These examples each display seasonality. The seasons are not necessarily just the standard calendar seasons of spring, summer, fall, and winter, but any regularly recurring pattern. Housing shows an annual spike, property taxes show a bi-annual spike, and DWI arrests show a weekly spike. The regular recurrence of the seasons in question is an important part of the baselines in seasonality.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=94)** For example, some baselines drift upward for some period of time, and then back down for another different period of time. Between 1970 and 2009 the United States economy experienced seven different recessions. These recessions ranged in length from six to 18 months. We would not regard these recessions and recoveries as seasonal, but rather a cyclic. They did not occur regularly, nor did they last for a period of time that you could specify beforehand. When a baseline has a seasonal pattern we can take advantage of it in our forecasts. For example, if we see an annual spike in home sales during the spring months in each of the past 10 years, we wouldn't want to ignore that pattern in [[Forecasting]] home sales during the next year's spring quarter. There are various ways available to account for the seasonality. Using [[Linear Regression]] is typical to create dummy variables that uniquely identify particular seasons. Another approach involves calculating the deviation of each season from the baseline's longterm average, and using those deviations to forecast each season. This course focuses on the use something called a "seasonal smoothing constant". If you have viewed the course on simple expediential smoothing, or the second course in this series on smoothing trended baselines, you've seen that it can be useful to name the cells in the [[Microsoft Excel|Excel]] worksheet that contain the smoothing constants. I'm going to extend the concept in this course
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonality-in-a-baseline?u=76281980&t=188)** so that includes not only the smoothing constants but also identifies seasons by means of relative cell references. The reason for the relative cell references is that you use the seasonal smoothing constant in conjunction with their baseline measure taken when that season last occurred. This differs from level and trend smoothing which normally look back exactly one period for their inputs. One season can be separated from the next instance of that season by 12 months, by six two months periods, by a week, even by just a day. So it's useful to be able to point back from the current observation by one full turn of the seasons, which might be a full year in 12 rows with monthly seasons, a full year in six rows with bi-monthly seasons, seven days in one row with daily seasons, or 24 hours in one day with hourly seasons. We'll see how that's done in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Linear Regression]] (1), [[Microsoft Excel|Excel]] (1)
> **Analogies:** for example (4)
> **Env Vars:** dwi (2)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Defined names and relative references](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_02_Begin in the using beta as a cell name worksheet. [[Microsoft Excel|Excel]] has a feature that makes your work go a lot quicker, helps to avoid careless errors, and makes the documentation of a worksheet much easier. That feature is defined names. Here, you can put the level smoothing constant in a cell and then give that cell the name alpha. You can do the same thing with the trend smoothing constant. Put it in a cell and name the cell beta. Suppose that you define the name beta for cell J2. If so, your formula for the next forecast of the trend value could be more self documenting. In this case, the name beta stands for cell J2, but it has meaning beyond the simple address that results from the intersection of a column and a row. And, as you'll see shortly, the name can redefine itself depending on what cell you use it in. All by itself, it's a small thing and if that were all there was to it, I'd define to name might not be much of a tool. But defined names have a couple of characteristics that make them really useful. For example, when you define a name, by default, that name refers to an absolute reference. I'm gonna switch worksheets here. Suppose you want to use the name FirstCell to refer to cell A1. If you don't do anything special, then the name FirstCell refers to the reference $A$1.
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=95)** Here's how you define that name. Select the cell that you want to name, here that's A1. Click the ribbon's formulas tab. Find the defined names group and click define name. Enter FirstCell as one [[Microsoft Word|word]] in the name box. In the scope dropdown, choose absolute references as the name of the worksheet that you want to limit the scope to. The reference puts a dollar sign before the A and a dollar sign before the one. That makes it an absolute reference. No matter which cell in the worksheet is active when you use the name FirstCell, the name will refer to A1. The dollar signs in the reference anchor the defined name to column A and row one. Notice that when I enter the formula =FirstCell in any other cell, it returns the value in cell A1. Now I'll switch to the worksheet named relative references and define FirstCell as a relative reference. Suppose that you do something special when you define the name so that both of the dollar signs are missing. Start by selecting C3. Then name cell A1 as FirstCell with relative referencing. Enter the name FirstCell, change the scope from workbook to relative references, and remove the dollar signs so that it refers to cell A1
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=188)** without any dollar signs in the reference, then click OK. Leaving off the dollar signs makes the reference a relative reference. If the active cell is, say, C3 when you define the name FirstCell as a relative reference to cell A1, then FirstCell will refer to whatever cell is two columns to the left and two rows above the cell where you used the defined name FirstCell. Now let's try the same thing in cell C4 and our =FirstCell, and hit return, and we get a zero. The reason is that if FirstCell is pointing to the left by two columns and up by two rows from cell C4, there's nothing in cell A2 and in consequence, FirstCell returns to zero to cell C4. Excel also has mixed referencing which uses a dollar sign before either the row number or the column letter, but not both. We'll use mixed referencing with an absolute column and a relative row when we define exactly when it was that a season last occurred. Why is this useful for seasonal smoothing? Because when we're using the seasonal smoothing constant, we want to multiply that times the prior instance of the same season and the prior instance of the same seasonal forecast. That's a little trickier than using the prior level or the prior trend. For example, if we're working with months
>
> **[4:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/defined-names-and-relative-references?u=76281980&t=281)** and therefore have 12 seasons, we could define a name as a relative reference that points up 12 rows from wherever it is that we use it. I've switched to the worksheet named a year ago. Suppose we defined the name one year back with the relative reference to the cell 13 rows up. Also suppose that each row represents a month. Then cell B2 could represent January and when we use the name one year back in cell E14, it would refer to the value in cell B2. Of course, you could dispense with the use of names entirely and instead just link a cell to its precedent. In the current example, you could enter the formula =B2 in cell E14. I've always found, though, that the naming of the cells in this way makes it a lot easier for me to maintain a worksheet and to figure out six months from now, what it was I had in mind.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (2), [[Microsoft Word|Word]] (1)
> **Definitions:** refers to (3), stands for (1)
> **UI Navigation:** select the (1), dropdown (1), switch to (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** e14 (2)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** exercise file (1)

#### [Diagnosing seasonality](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=1)** - [Instructor] Go ahead and open up 01_03_ARIMA from the exercise files before starting this video. Next, open up exercise file 01_03. I'm in the worksheet called Baseline. In the course of working on a [[Forecasting]] project, you're often confronted with a decision regarding a baseline. When you chart it, the baseline might display seasonal components, but then again, it might be just an optical illusion. I think it's generally a good idea to have a look at the charted baseline, but it's also a good idea to back up your visual judgment with a quantitative test. Here's one such test in exercise file 01_03. This baseline consists of 20 quarterly observations, and it's pretty clear that it's seasonal. The baseline spikes during the first quarter of each year when t equals one, five, nine, 13, and 70. Many of the seasonal baselines that you run into will not be anywhere near as evident as this one. Here's one way that you can get a better idea than just by eyeballing a chart at the baseline. Click the Add Ins tab on the ribbon. You will see a group titled Many Commands. You should find an item titled Arima, A-R-I-M-A, in that group. Click on that item to bring up this dialogue box. With the flashing I bar in the input range edit box, drag through the range that contains your baseline.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=94)** The baseline should consist of no more than one column and as many rows as you have baseline observations. So in this case, that would be D2 to D21. If you think that the baseline might be trended as well as seasonal, fill the first differencing checkbox. This will analyze the first differences of the baseline. Most baselines that are trended at all can be made stationary with first differencing. I'm going to leave it unchecked. Enter the number of lags for the correlograms in the appropriate edit box. With good quarterly data, you would want to enter at least four, and a larger number is often better if you have a good, long baseline. I'll enter 12 here. Click the okay button. [[Microsoft Excel|Excel]] takes over and will create two correlograms for you. One shows the autocorrelation function at different lags, abbreviated ACFs, and the other shows partial autocorrelation functions at different lags, labeled PACFs. For present purposes, the ACF or autocorrelation function is enough to help you decide on whether a baseline displays true seasonality. Here is what the ACF looks like. It's provided in the exercise file 01_03 in a tab of its own. This correlogram, with the spike at lag four, indicates a fairly strong relationship between observations made four quarters apart per month. Certainly the spikes in the first quarter of each year
>
> **[3:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=191)** contribute heavily to the size of the autocorrelation function at that lag, but the baseline has three other quarters each year that are also related to one another, if not quite as strongly. The evidence, both visual and quantitative, indicates a seasonal baseline. For contrast, here's a stationary baseline. Here is the correlogram for the autocorrelation function based on the stationary, nonseasonal baseline. In this correlogram, none of the ACFs even approach the upper line of dashes or the lower line of dashes, which indicate the location of two standard errors above and below the zero point. Visually and quantitatively, this is a stationary baseline with no evidence of seasonality at all. There are different ways of determining whether a baseline is seasonal. Some, including the Croskill Wallace test, are nonparametric and do not make assumptions regarding the shape of underlying distributions. Some are parametric, such as [[Linear Regression]] tests, of the size of the seasonal indexes. Nonparametric [[Statistics]] avoid making assumptions that can turn out wrong, but they are relatively low on statistical power. Parametric statistics, such as the t-tests employed in regression analysis, have more statistical power, but much of that strength comes from the use of assumptions which might be off base. The method I suggest here, the use of correlograms and autocorrelation functions,
>
> **[4:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/diagnosing-seasonality?u=76281980&t=284)** strikes a nice balance between the low statistical power of nonparametric statistics and the possibly unwarranted assumptions of regression analysis. It's true that comparing an ACF to its standard error comes close to making an assumption about the shape of an underlying distribution, but that's what it does. It comes close, but it doesn't rely on such an assumption. Now let's move on to seasonal smoothing of baselines that are not trending.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Forecasting]] (1), [[Microsoft Excel|Excel]] (1), [[Linear Regression]] (1)
> **Env Vars:** acf (3), d21 (1)
> **Exercise Files:** exercise file (3), exercise files (1)
> **CLI Commands:** find (1), make (1)
> **UI Navigation:** click on (1), checkbox (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Simple seasonal indexes](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_04 on the worksheet named Seasonal Effect Example. To build a forecast that responds to seasonality in the baseline we need to start by defining seasonal effects. A seasonal effect measures the amount of the effect that being in a given season exerts on values in the baseline. In this case, simply being in the season named December might increase the December sales by $10,000 over the average monthly sales for the year. Similarly, taking place in the month of July might decrease July sales by $3,000 below the average monthly sales for the year. Then the seasonal effect for December would be plus 10,000, and the seasonal effect for July would be minus 3,000. Let's see how that works out in practice. On the worksheet that you see, I have calculated the mean sales for the first year in cell M4. I gave the cell the name Year_1_Mean, as shown in cell L4. So the seasonal effect for the first period, in cell J2, subtracts the year one mean from the actual observation for period one in cell D2. Subtracting 8170.8 from 7950 gives a seasonal effect of minus 220.8 in cell J2. The name Year_1_Mean is an absolute reference. It's reference is actually $M$4,
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=95)** so we can copy a formula that incorporates that name anywhere on a worksheet that we want to, and the address of the reference will remain unchanged. That's just what I've done in cells J3 through J7. Merely copying and pasting the formula in J2 down an additional five cells results in an effect for each of the six seasons of the first year. Notice, by the way, that because of the way that the seasonal effects are defined, they sum to zero for any given year. Each season usually has a different effect on whatever you're [[Forecasting]]. Sales dollars, daily high temperatures, or number of traffic accidents. The total effect of the seasons is zero because each season's effect is the difference between that season's observation and the annual average. All we've just done by populating cells J2 to J7 is to initialize the seasonal effects at the start of the baseline. The concept and the purpose of initializing the effects is the same as it is for initializing the level in simple exponential smoothing or the trend in Holt's method. From the first period of the second year forward, we'll forecast the seasonal effects differently, using a smoothing formula and a smoothing constant for seasonal effects. Following most authors who write about exponential smoothing, I will refer to the seasonal smoothing constant as delta. You're likely to see other authors refer
>
> **[3:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/simple-seasonal-indexes?u=76281980&t=187)** to it as gamma, but the research I've done indicates that they're in the minority. Now I'm on the worksheet titled Initialize the level. One more task before we can start smoothing through the seasonal effects, we need to initialize the level of the baseline. And one straightforward way of doing so is to simply initialize it to the average of the baseline for the first year. You can do so by setting cell H7 to the value of year one mean. Here's the formula. With the level and the seasonal effects initialized, we can move ahead with the smoothing formulas for the actual forecasts. I'll demonstrate that process next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1)
> **Versions:** 8170.8 (1), 220.8 (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Seasonal smoothing and horizontal baselines](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=1)** - [Instructor] I'm in exercise file 01_05_Begin on the worksheet named Initialize the Level. Now that we have the baseline's level initialized along with its seasonal effects, we can start the process of [[Forecasting]], the first step in that process is to define a range name that uses a mixed reference. That is in this case, an absolute reference to a column and a relative reference to a row. The purpose of the name is to pick up the value of the seasonal effect on the previous time the season took place. I'm going to switch worksheets here to Get Seasonal Effects. Start by selecting cell H8, click the Formulas tab on the ribbon, and locate the defined names group. Click the Define Name button. In the Name headed box, type the name OneYearBack. In the Scope dropdown, select the name of the active worksheet here that is Get Seasonal Effects. Enter a comment if you'd like, something such as last year's seasonal effect. Drag through whatever you see in the Refers to edit box and click in cell J2, move the dialog box around the screen as needed, right now the defined name is still an absolute reference. There are dollar signs before both the column, and the row. Click between the dollar sign and the number two, and then press the Backspace key once. This converts the absolute reference $J$2
>
> **[1:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=98)** to the mixed reference $J2. Wherever you use the name OneYearBack it will refer to the cell in column J that is six rows above the active cell, which in this case is cell H8. Click OK to finish defining the name, now we can start our smoothing forecasts. You should still be in cell H8 but select it if you're not. Then enter this formula, equals Alpha times, open paren, D8 minus OneYearBack close paren, plus open paren, one minus Alpha close paren times H7, and press Return.
>
> **[2:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=146)** That is the smoothing formula for the baseline's level, recall that in the smoothing form of the formula we multiply the smoothing constant Alpha times the prior level of the baseline. But because we're working with a seasonal baseline we need to subtract the effect of the current season from the actual observation in order to estimate the current level. The effect of the current season is the seasonal effect from one year ago and is returned by the defined name OneYearBack, so the difference between the current observation and the most recent estimate, of the seasonal effect is returned by the difference between cell D8 and the effect for OneYearBack. We multiply that difference by Alpha, then we complete the smoothing formula for the baseline's level just as we have in the past by multiplying one minus Alpha by the prior period's level which is in cell H7. Adding together the two [[Microsoft Products|products]], one involving Alpha and the other involving one minus Alpha results in the current estimate of the baseline level. What about the current estimate of the seasonal effect? That's in cell J8 and here's the formula that goes in there, equals Delta times open paren, D8 minus H8, close paren, plus open paren one minus Delta, close paren times OneYearBack. We use the same pattern established by the smoothing form
>
> **[4:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=241)** of the level equation but we use the smoothing constant Delta instead of Alpha. The formula starts by multiplying Delta by the current estimate of the seasonal effect. We get that estimate by taking the current observation in cell D8 and subtracting from that the estimate of the baseline level that we just found in cell H8. The difference between the two, between the observation and the level estimate is the current observed seasonal effect that gets multiplied by Delta the seasonal smoothing constant. To complete the formula for the current seasonal estimate multiply one minus Delta by the prior estimate of the seasonal effect, that value is OneYearBack, the estimated effect of the season the last time it occurred, one year ago. Again, add the two products together to get the forecast value for the current season. Now we can copy the smoothing formulas for the baseline level and for the seasonal effect down through the row occupied by the final observation. Select cell H8 click the fill handle in its lower-right corner and drag gown through cell H16. Do the same with column J, drag cell J8 down through cell J16. With those forecasts in place we can calculate the forecasts for the seasonal baseline. I'll do that in column K.
>
> **[5:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/seasonal-smoothing-and-horizontal-baselines?u=76281980&t=337)** And the formula is equals sigh, H7 plus J2. This formula adds the current estimate of the baseline's level to the current estimate of the seasonal effect, it is the forecast for the next time period. But that estimate comes in part from cell J2, the last time that the effect for the next season was forecast. So to get the current forecast we add the level estimate in cell H7 to the seasonal effect in cell J2. The result is the forecast for period seven. If you now drag cell K7 down through cell K16 you'll get the one step ahead forecast for the seasonal baseline, the forecast for period 16. Now we need to add some finishing touches including the calculation of the root mean square error in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (2), [[Forecasting]] (1)
> **Env Vars:** h16 (1), j16 (1), k16 (1)
> **UI Navigation:** dropdown (1), select the (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Optimizing Seasonal Forecasts

[↑ Back to Table of Contents](#table-of-contents)

#### [Minimizing RMSE](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=1)** - [Instructor] I'm starting in the exercise file 02 01 Begin in the Add Forecast Error worksheet. Often I find it useful to keep two copies of the forecasts on the worksheet where I do the analysis. We've already put forecasts for the seasonal smoothing baseline in column K. Those forecasts start in cell K7. The forecast 7950 is actually the forecast for the next period, just as it says in cell K1. Most of the data in row seven pertains to time period six. And in the normal course of events you would wait for all the data for time period six before you made your forecast for time period seven. But you would normally want to know your forecast for time period seven before the actual data for that period became available. Often you're just at the tail end of period six when you make your forecast for period seven. So to help keep myself straight I do my calculations for the forecast of period seven in row seven. Then I link a cell in row eight back to the forecast made in row seven. That's important, because several of the calculations that take place in row eight require the forecast of period seven. And that's why the forecasts that you see in column K on the worksheet named Add Forecast Error are repeated in column E, shifted down by one row. In turn that makes it easy to calculate the error involved in each forecast.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=93)** I've put that calculation in column F. Here's the formula for cell F8. It really makes no difference whether you subtract the observation from the forecast or vice versa. Before we made use of the errors we're going to square them and so they will end up as positive values. I'll go ahead now and drag the formulas for the forecasts into cell E17 and for the forecast error down through cell F16. There's no point in going any further, because row 16 is the site of the final observation in cell D16 and no more forecasts can be calculated until more data become available. With the forecast errors calculated in column F the value of the root mean square error, or RMSE, becomes available in cell M5. There's a trade-off here. I want to keep the calculated forecast errors in column F in the original scale of measurement, that makes it easier for me to compare visually the actuals with the forecasts. But the root mean square error needs to have those errors squared and then averaged. That makes the formula for the RMSE a little more complicated. The trade-off is between the convenience of showing the errors in their original metric and the convenience of a less complicated formula for RMSE. The more complicated formula is shown in cell M5. Notice that it squares the values in the range F8 to F16, then it takes the average of those squares,
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=188)** and finally, the square root of the average. The exponentiation operator, the caret, normally takes only one number as its argument. Here though I wanted to square each of the error values before averaging those squares and taking the square root of the result. In [[Microsoft Excel|Excel]] the way to do that is to use what's called an array formula. After you've typed the formula instead of just pressing Enter you'll hold down the Control and Shift keys simultaneously and press Enter. This signals Excel that you want it to treat the formula as an array formula. Excel indicates that it will do so by surrounding the formula shown in the formula bar with curly brackets. With the RMSE calculated we can use Solver to minimize it and thus to minimize the cumulative forecast errors. I'm in the worksheet named Optimize RMSE. Before we can use Solver to optimize the values for the smoothing constants we need to install it. Do so by going to the File tab and coming down in the nav bar and clicking Options. In the Options dialog box on the left side nav bar click Add-ins. And at the bottom of the window make sure that the Manage drop-down is set to Excel Add-ins, and click the Go button. You'll find the Add-ins dialog box. Fill the Solver Add-in checkbox and click OK. And the add-in is now installed and if you click the Data tab
>
> **[4:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=282)** on the Data tab find the Analysis group and the Solver button in that group. Go ahead and click the button to bring up the Solver Parameters dialog box. We are looking to minimize the value of the root mean square error in cell M5. So for the Set Objective edit box click in cell M5. We want to minimize its value, so select that radio button. And in By Changing Variable Cells drag through both M1 and M2 to choose both the Alpha and the Delta smoothing constants. We need to add constraints, so click Add. And for the Cell Reference click in cell M1, hold onto the less than or equal to operator and for the Constraint enter 1, and click Add. Again, in the Cell Reference click M1. This time choose greater than or equal to and set the Constraint to 0 and click Add. For the Cell Reference click cell M2. Reset the operator to greater than or equal to and enter 0 as the Constraint, click Add. And again, click in cell M2 for the Cell Reference, choose less than or equal to, and enter 1, and click OK. In this case it makes no difference whether the unconstrained variables are non-negative, so you can either clear
>
> **[6:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=375)** or allow that checkbox to remain filled. You want to check the GRG Nonlinear as the Solving Method and click the Options button. Choose GRG Nonlinear at the top of the dialog box and make sure that the Use Multistart checkbox is filled and click OK and click Solve. Click OK and you have now optimized the values for Alpha and Delta in cells M1 and M2 and that minimizes the size of the root mean square error for the analysis. With the constants optimized we're in a position to forecast beyond the one step they had forecast that's typically of simple exponential smoothing. Let's switch over to the Extend the Forecasts worksheet. If you're willing to assume that the level of the series does not change from time period to time period you can freeze the estimate of the level at the point where it was most recently calculated on the basis of an actual observation. In this case that would be in time period 15 in cell H16 on the worksheet. Simply copy the value of 8170.8 through say cell H21. Then copy the formula for the forecast of the next period from cell K16 through K21. This will give you an extra year of forecasts. Bear in mind that the added forecasts are based on two critical assumptions. One, that the level does not change
>
> **[7:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/minimizing-rmse?u=76281980&t=469)** subsequent to the final actual observation and two, that the seasonality effects remain as they are during the last six periods at the end of the original baseline. Because you are assuming a seasonal horizontal baseline to begin with the first assumption is not too troubling. And because you're using seasonal the effect estimates from a year previous from the forecast you will have had time to evaluate them before you reach the end of the baseline. Next, we'll have a look at Excel 2016's new forecast sheet feature and how to do all of this work much more quickly using R.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (5)
> **Env Vars:** rmse (5), f16 (2), grg (2), e17 (1), d16 (1)
> **CLI Commands:** find (3), make (3)
> **UI Navigation:** checkbox (3)
> **Versions:** 8170.8 (1)
> **Exercise Files:** exercise file (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [The Excel Forecast Sheet](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=0)** - [Instructor] I'm in exercise file 02_02_Begin in the sheet named Data Forecast Sheet. If you have used [[Microsoft Excel]] 2016, you might have noticed a new feature on the ribbon's Data tab called Forecast Sheet. The available documentation for the forecast sheet does not specify how the forecasts are created, but the names of the functions and some of the vocabulary used in the documentation indicates that the intent is to duplicate the approaches that are usually termed simple exponential smoothing, Holt's method for [[Forecasting]] trended baselines, and and Holt winters or seasonal smoothing, as discussed in the present course. Here's a brief look at how to use the forecast sheet. I'll use this data which comes from a generally accessible website so that you can duplicate the analysis if you wish to do so using [[Microsoft Excel|Excel]] formulas or the Excel forecast sheet or R. To use the forecast sheet, put time period identifiers in one column, such as column A here. In a column adjacent and to the right of the time period identifiers, place your baseline observations. Select either the full data set, including both columns, or select just one cell in the data set. Click the ribbon's Data tab and then click the Forecast Sheet in the Forecast group. You'll get this dialog box. If you have set things up correctly, you'll wanna accept almost all the default settings. I do recommend that you click the Options button
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=93)** to get the following settings. You can adjust the point at which the forecasts end as well as the point at which they start. Particularly if there is a trend in your baseline, adjusting the starting point can make a substantial difference to the forecast values. I also recommend that you fill the Include forecast [[Statistics]] check box. Doing so will provide you with additional information about the forecast. Click Create. Notice that the results include the values for the level, the trend, and seasonality smoothing constants used in the forecast. There are also four measures of forecast accuracy, including RMSE or root mean square error, the measure that's used almost exclusively in this series of courses. The remaining three measures include MASE, or mean absolute scaled error, SMAPE, symmetric mean absolute percentage error, and MAE, mean absolute error. Let's take a look at the worksheet titled Analysis via Excel. Here for the comparison are the analyses of the same data set using Excel worksheet formulas, as we've done in prior videos in this course, and also forecasts generated in R. The forecasts from those two sources are shown highlighted in yellow, and if you compare the values in column G with the values in column I, you see that they are all either identical or extremely close to one another.
>
> **[3:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/the-excel-forecast-sheet?u=76281980&t=186)** In other words, the Excel worksheet is in agreement with R. Now let's go to Charted Data R, XL Formulas. Finally, and again for comparative purposes, here is a chart of the actual baseline observations and the forecasts from Excel and from R. You can see how close they are to one another. Let's move on to the use of R to analyze seasonal baselines.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (6), [[Microsoft Excel]] (1), [[Forecasting]] (1), [[Statistics]] (1)
> **Env Vars:** rmse (1), mase (1), smape (1), mae (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Analogies:** such as (1)

#### [Prepare to make a seasonal forecast in R](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=1)** - [Instructor] I'm in exercise file 0203. What you see on your screen right now is a forecast made on a different baseline using techniques that we have already explored in this course so far. I'd like to direct your attention in particular to the alpha and the delta smoothing constants. You might want to make a note of those because we're about to run the same analysis on the same data set using R. So we'll be in a position to compare the results that [[Microsoft Excel|Excel]] returns with the results that are returned by R. We're gonna start out by highlighting or selecting the baseline data because we'll be pulling that data into R using the desk tools that function in R but with that highlighted, now we can start R and we'll need to pull in a couple of packages in order to complete the analysis. The first one is going to be desk tools which you'll pull in using the library command. And we'll also pull in the forecast function package rather, using again the library command. With those in hand, we can start to perform the analysis. We need to pull the data in and we're gonna do that by specifying that we want the results of pulling the data from Excel stored temporarily in an object called Seasons. We'll use the Excel get range function and we'll set the header to false
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=93)** because we did not include in the range of data a header row and now we just hit return. When you execute the Excel get range function it's possible, especially if this is the first time that you have run it, that R will complain that it cannot find an rdcom client component of the Excel get range function. If that occurs, you will also get, as part of the error message, a function to run that will pull the rdcom client down from a different server and store it in your workspace in R. If you follow those directions, the problem that caused the difficulty and the error message that you see will have been solved. With that being done, let's move forward with the analysis itself and we do have the data from Excel stored in the Seasons object. We want to convert that to a timed series. And the reason is that in this case we have six seasons per turn of the seasons. In other words we have six seasons consisting of two months each. If we convert these Season's data to a time series object in R, then the time series object will incorporate that information and will pass it on to the exponential smoothing code. We do that by using the ts, stands for time series, function. We will store the time series object in the object called ts Seasons. We'll use the ts function to do that with two arguments.
>
> **[3:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=188)** The first argument is the name of the data set, here Seasons, and we also wanna specify the frequency. Here our frequency will equal six because we have six seasons per year. And return, and that is the contents of the ts Seasons object. Now we're in a position to execute the hw, which stands for Holt-Winters function that will actually do the seasonal exponential smoothing analysis for us. And we'll store the results in an object called hw Seasons, which stands for Holt-Winters Seasons. And we'll call the hw function, which is part by the way of the forecast package, the first argument is ts Seasons, that is where the hw function will get its data. The second argument is h=3, which is simply informing R to forecast forward by three seasons. The next argument is beta=f, and all that is saying is R is not to compute a beta or a trend smoothing constant. Setting data equals false, calls R to ignore any trend component that it might think that it finds. The next argument is initial=simple and that simply states that we want R to use the simplest method to initialize the level and the seasons that it can. We went through that process in Excel in an earlier video. The final argument is additive.only=t
>
> **[4:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=289)** and end paren. And that is saying that if R encounters any calculations that rely on a multiplicative as opposed to an additive algorithm that it should ignore the multiplicative and use the additive where it can. And I'm gonna simply hit return. And the information that is created by that hw function is stored in hw Seasons. We take a look at the contents by using the summary function. And the smoothing parameters .0087 toward the top of the window are virtually identical to the smoothing parameters that you found using Excel, .0086 and .4616. The root mean square error is another story. It is, according to R, 11.4559. That is, by the way, the same as the sigma measure that is recorded just prior to error measures. But it is somewhat smaller. We know exactly in the case of the Excel analysis how the root mean square error was calculated. Calculated simply by subtracting the forecast from the associated actual, and squaring the difference, taking the average of the square differences and then taking the square root of that average. The result is 14.7, somewhat larger than the 11.45 then reported by R. This is, frankly, a point in favor of doing these analyses in Excel because you can tell exactly
>
> **[6:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/prepare-to-make-a-seasonal-forecast-in-r?u=76281980&t=383)** how this statistic was calculated. On the other hand if you're using R, it's more or less a black box. You don't know how the root mean square error was calculated. Is there a problem in the code? I don't know, probably not. There may well be an alternative method of calculating rmse that is favored by the person who created the code. But point is that you can take your pick between the two applications and be happy with either one of them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Excel|Excel]] (10)
> **Definitions:** stands for (3), is a  (1), in other words (1)
> **Versions:** 11.4559 (1), 14.7 (1), 11.45 (1)
> **CLI Commands:** make (1), find (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-seasonal-baseline-smoothing/next-steps?u=76281980&t=1)** - [Conrad] There are plenty of features used by different smoothing models that this course hasn't had enough time to explore even briefly, let alone in depth. If you intend to look further into smoothing as an approach to [[Forecasting]], I urge you to examine a model not only from the point of view of the summary [[Statistics]] provided by functions in R, but also the period to period details that show most clearly in an [[Microsoft Excel|Excel]] worksheet. There are so many choices involved in specifying a smoothing model that it can be very difficult to distinguish a change in the nature of the baseline from an apparently minor change in the way a model is specified. Those choices can involve differences between trended and seasonal models, add a difference in small duplicative models, whether a damping parameter has been added to the equation and which error measure has been chosen to evaluate the smoothing constants. With that in mind, I encourage you to explore some of my other courses in this library.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forecasting]] (1), [[Statistics]] (1), [[Microsoft Excel|Excel]] (1)
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