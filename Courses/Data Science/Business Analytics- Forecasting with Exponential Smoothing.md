---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: business-analytics-forecasting-with-exponential-smoothing
url: "https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing"
duration_minutes: 65
duration: 1h 5m
level: Advanced
updated: 2/12/2018
learners: 78523
skills:
  - Business Analytics
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQEGdgfUjZurzQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619542985489?e=2147483647&amp;v=beta&amp;t=J20O6QP05AVALZy1hIZ8MyUQ7Q09dlyBiSJutU3OqAo"
linkedin_topic: Data Science
learning_paths:
  - Get Ahead in Business Analytics and Analysis
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/business-analytics
status: not-started
created: 2026-04-19
---

![Business Analytics: Forecasting with Exponential Smoothing](https://media.licdn.com/dms/image/v2/C4E0DAQEGdgfUjZurzQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619542985489?e=2147483647&amp;v=beta&amp;t=J20O6QP05AVALZy1hIZ8MyUQ7Q09dlyBiSJutU3OqAo)

# Business Analytics: Forecasting with Exponential Smoothing

> Exponential smoothing is a term for a set of straightforward forecasting procedures that apply self-correction. Each forecast comprises two components. It's a weighted average of the prior forecast, plus an adjustment that would have made the prior forecast more accurate. Smoothing—like most credible approaches to forecasting—requires a baseline of observations, in sequence, to work properly. Week

> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing) | 1h 5m | Advanced | 79K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Conrad Carlberg]]

## Resources

- Exercise files available

## Skills Covered

- Business Analytics

## Table of Contents

### Introduction

#### Welcome
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=1)** - [Instructor] Suppose that you have a sequence of actual financial results, such as your company's annual revenues for several years, and you'd like to forecast how much you're likely to bring in next year.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=11)** I'll show you a technique that'll make that task very easy to achieve.
>
> **[0:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=16)** Hi, my name is Conrad Carlberg.
>
> **[0:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=18)** I've been using the forecasting techniques that I describe in this series of lessons for more years than I care to think about.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=25)** In this course, I'll show you the rationale for exponential smoothing, including its self-correcting nature.
>
> **[0:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=31)** You'll also see how to get a sequence of forecasts going, and perhaps most important, you'll see how to assess the accuracy of your forecasts and how to improve them.
>
> **[0:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=41)** As you go through the lessons in this course, you'll find it helpful to be familiar with basic Excel data entry techniques, as well as how to enter formulas in an Excel worksheet.
>
> **[0:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=51)** The reason is that Excel is an ideal platform for learning how exponential smoothing works.
>
> **[0:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=57)** There are plenty of other applications, such as SAS and R, that you can use to actually conduct your forecasting projects after you have the basics in your hip pocket.
>
> **[1:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/welcome?u=76281980&t=66)** So settle back, mute your cellphone and let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** self (1), let (1)
> **Analogies:** such as (2)
> **Env Vars:** sas (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)


### 1. The Idea Behind Exponential Smoothing

#### Self-correcting forecasts
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=1)** - [Narrator] Many approaches to quantitative forecasting begin with this sort of data.
>
> **[0:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=5)** Particularly the date, or time, in column A, and the quantity that you're forecasting in column B.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=11)** Together, those two columns make up what's called the baseline.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=15)** You apply the formulas to that baseline in order to generate your forecasts.
>
> **[0:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=21)** Formulas that you use in exponential smoothing take on one of two basic forms: error correction and smoothing.
>
> **[0:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=29)** Those two forms are mathematically equivalent, and return precisely the same results.
>
> **[0:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=34)** We'll look at both in this course.
>
> **[0:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=37)** Let's start here by looking at the error correction form.
>
> **[0:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=40)** That form uses four components.
>
> **[0:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=43)** The letter Y usually represents your actual observations.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=47)** The letter T usually represents the date or time on which the observation took place.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=53)** So for time one, which is shown in row two, the value of Y is 2,008.
>
> **[0:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=58)** You had $2,008 worth of sales at time one.
>
> **[1:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=63)** The letter Y with a caret over it is usually pronounced "Y hat."
>
> **[1:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=68)** Y hat has a subscript, and on this screen, the subscript is either T+1 or just T.
>
> **[1:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=75)** If you have an observation for each day, then each value of T represents a different day.
>
> **[1:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=80)** So if the value of T is three, Y hat T might represent your forecast for Wednesday, and Y hat T+1 would represent your forecast for Thursday.
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=92)** There's also the smoothing constant, often symbolized as the Greek letter Alpha.
>
> **[1:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=97)** The smoothing constant is under your control.
>
> **[1:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=100)** You can set its value to whatever you want, but it is usually the same value throughout the entire forecast.
>
> **[1:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=106)** I'll show you how to optimize the smoothing constant in later videos.
>
> **[1:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=111)** Finally, we have the forecast error, represented by the Greek symbol Epsilon.
>
> **[1:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=117)** It is simply the difference between the observation at time T, and the forecast for time T.
>
> **[2:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=123)** So for example at time two on the screen, we observed 1,857 sales dollars, but we had forecast 1,954 sales dollars.
>
> **[2:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=133)** So we have an error of minus 97 dollars, the result of subtracting the forecast 1954 from the actual 1857.
>
> **[2:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=143)** We symbolize the next forecast value as Y hat sub T+1.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=148)** To calculate the next forecast, we start with Y hat sub T, which is the forecast for time T.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=156)** Then we take the smoothing constant, or Alpha, and multiply it by the forecast error at time T.
>
> **[2:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=163)** We add the forecast value, Y hat sub T, to the product of Alpha times the error at time T.
>
> **[2:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=169)** The result of the addition is the forecast for time T+1.
>
> **[2:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=174)** In the context of the worksheet shown at the bottom of the screen, our forecast for time two appears in cell C3, a forecast of 1954.
>
> **[3:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=184)** That's the result of adding the value in C2, the forecast for time T, to the product of the smoothing constant in cell G1 times the error at time one.
>
> **[3:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=195)** The forecast formula is shown as the formula for time two in cell E3.
>
> **[3:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=201)** You can verify that the formula in cell E3 adds the prior forecast of 1941 to the product of the smoothing constant in cell G1 times the $67 error in the prior forecast.
>
> **[3:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=216)** The error correction form of the smoothing equation emphasizes the fact that each forecast is self-correcting.
>
> **[3:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=223)** That is, if the prior forecast was too low, the next forecast is adjusted up a bit, and vice versa.
>
> **[3:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=230)** Here's how that works in the example shown in the worksheet.
>
> **[3:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=234)** At time one in row two, our actual observation was 2,008.
>
> **[3:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=239)** But we forecast 1941.
>
> **[4:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=242)** Our forecast was too low by $67, as shown in cell D2.
>
> **[4:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=249)** For the forecast at time two, in row three, we add the prior forecast of 1941 to the smoothing constant of 0.2 times the prior error of 67.
>
> **[4:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=262)** That results in 1941 plus 13, or 1954, as shown in cell C3.
>
> **[4:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=269)** So we've adjusted our forecast for time two by an amount that depends in part on the amount of forecast error at time one.
>
> **[4:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=277)** And in a direction that would have improved that time one forecast.
>
> **[4:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=282)** Similarly, our forecast of 1954 for time two turns out to be an overestimate.
>
> **[4:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=288)** It is $97 too high.
>
> **[4:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=290)** So for time three, our forecast will be the prior forecast of 1954, plus the smoothing constant, 0.2, times the prior error, which is -97.
>
> **[5:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=303)** That is, for time three, we had 1954 plus -20, which is approximately .2 times -97.
>
> **[5:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=313)** Again, our forecast for time two was too high, so we wind up subtracting a portion of the forecast error in creating our next forecast for time three.
>
> **[5:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/self-correcting-forecasts?u=76281980&t=323)** Now that you know how self-corrections work, let's take a look at the equation in its smoothing form.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), self (2), finally, (1)
> **Versions:** 0.2 (2)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### From error correction to smoothing
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=0)** - [Instructor] Let's take a look at the relationship between the error correction form of the smoothing equation and it's smoothing form.
>
> **[0:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=7)** I'll start with the error correction form.
>
> **[0:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=10)** That's shown in the first line of the screen.
>
> **[0:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=12)** Y hat sub t plus one is the forecast for the next period, identified as period t plus one.
>
> **[0:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=19)** To make that forecast, we add the forecast for time t, that is y hat sub t to the product of alpha, the smoothing constant, and the error in the prior forecast symbolized by the Greek letter epsilon sub t.
>
> **[0:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=34)** The next step is to expand the reference to the error in the forecast for time t.
>
> **[0:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=40)** We do that by replacing epsilon sub t in the first line, with y sub t minus y hat sub t in the parenthesis in the second line.
>
> **[0:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=51)** Y sub t is just the actual observation made at time time t and y hat sub t is the forecast made for time t.
>
> **[0:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=59)** The difference between the two is the forecast error, or epsilon sub t.
>
> **[1:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=64)** Next we distribute the alpha across the actual observation and the forecast for time t.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=71)** That's easily done by simply multiplying out the expression alpha time parenthesis y sub t minus y hat sub t closed parenthesis.
>
> **[1:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=82)** Almost there.
>
> **[1:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=84)** The next to last step is simply to swap positions of the first and second terms, that is y hat sub t and alpha y sub t trade places.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=94)** Finally, divide the last two terms in the equation y hat sub t minus alpha times y hat sub t by y hat sub t.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=104)** The final equation shows the result.
>
> **[1:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=107)** Parenthesis one minus alpha closed parenthesis times y hat sub t.
>
> **[1:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=113)** The final equation on your screen shows the smoothing form of the smoothing equation.
>
> **[1:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=119)** It's worth noting that the expression, the forecast for time t plus one works out to a weighted sum of the actual observation at time t and the forecast for time t.
>
> **[2:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=131)** The weights are of course alpha and one minus alpha.
>
> **[2:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=135)** Because alpha is always a fraction between zero and one, alpha and one minus alpha always sum to 1.0.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=145)** The derivation just shown demonstrates that the two forms of the equation are mathematically equivalent.
>
> **[2:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=151)** Assuming no error in arithmetic, the two forms always return the same result.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=156)** The sole difference is that one form emphasizes the role played by forecasting error in calculating the next forecast while the smoothing form stresses the degree of weight given the prior observation versus the prior forecast.
>
> **[2:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=171)** If you read about exponential smoothing, you'll find that literature discusses both forms and it's useful to be familiar with both.
>
> **[3:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/from-error-correction-to-smoothing?u=76281980&t=180)** Of course it's up to you which one to use in your own forecasting.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), find (1)
> **Code Keywords:** let (1), finally, (1)
> **Versions:** 1.0 (1)
> **Speakers:** - [instructor] (1)

#### Exponentially declining influence of observations
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=1)** - [Instructor] We can get some insight into the reasons that this technique is called exponential smoothing by doing some more manipulating with the basic smoothing formula.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=11)** We start with the formula for the forecast for time four y hat sub four that's shown using the smoothing form which returns the weighted sum of the prior observation and the prior forecast.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=25)** Next, have a look at the forecast equation for time three or y hat sub three.
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=32)** It uses the same form as the first equation, but it moves the observation and the forecasts one time period back.
>
> **[0:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=40)** At this point, we can remove y hat sub three from the first equation and replace it with the expression to the right of the equal sign in the second equation.
>
> **[0:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=50)** The result is the third equation on the screen.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=53)** It is identical to the first equation except that y hat sub three has been replaced with a calculation of y hat sub three from the second equation.
>
> **[1:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=63)** So, where did this first forecast baseline come from?
>
> **[1:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=67)** Well, exponential smoothing bases its calculation of a forecast on the forecast from the prior time period.
>
> **[1:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=74)** Therefore, there can be no forecast for the first period because the baseline does not extend back in time before the first actual observation.
>
> **[1:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=83)** Using the simplest techniques, there is no forecast of period one, so period one with simplest formulations has no forecast associated with it.
>
> **[1:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=94)** Since it has no forecast, it's not possible to supply a forecast for a period to via a smoothing formula.
>
> **[1:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=102)** Conventionally, this simple approach uses the first observation, that is the observation made during period one as the forecast for period two.
>
> **[1:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=113)** And because that period now has both an actual observation and a forecast, it's possible to continue through the rest of the baseline forecasting on the basis of the prior observation and the prior forecast.
>
> **[2:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=126)** All of that is summarized by the fourth equation on the screen y hat sub two equals y sub one.
>
> **[2:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=134)** In words, the forecast for period two is equal to the actual observation for period one so we can replace y hat sub two with y sub one, the first actual observation in the equation.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=148)** I'm now in the second worksheet.
>
> **[2:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=150)** The current version of the formula now appears in cell B1.
>
> **[2:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=154)** Notice that we can multiply the quantity one minus alpha in parenthesis through the remaining portion of the formula.
>
> **[2:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=161)** That occurs in cell B3 where one minus alpha first multiplies the quantity alpha y sub two and then multiplies the quantity one minus alpha times y sub one.
>
> **[2:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=174)** Cell B3 now has the product of one minus alpha and one minus alpha so we simply show that product as the square of one minus alpha in cell B4.
>
> **[3:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=187)** By definition, any number raised to the power of zero is equal to one as shown in cell B6.
>
> **[3:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=194)** So in cell B8, we can multiply the quantity alpha y sub three by the number one, but show that number one as the quantity one minus alpha raised to the power of zero.
>
> **[3:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=208)** And cell B10 shows that any number raised to the power of one equals the number itself so one minus alpha raised to the first power equals one minus alpha.
>
> **[3:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=219)** We can make use of that in cell B12 by multiplying the quantity alpha y sub two by the quantity one minus alpha raised to the first power.
>
> **[3:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=230)** The final step shown in cell B14 is to rearrange the terms to the right of the equal sign in descending chronological order so the term containing y sub one comes first, followed by that term containing y sub two, and ending with the term containing y sub three.
>
> **[4:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=248)** Notice that as the subscripts for y increase in value, the superscripts for the quantity one minus alpha decrease in value.
>
> **[4:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=258)** I'm now in the third worksheet.
>
> **[4:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=261)** Notice that cell B1 contains the derived version of the formula for, in this case, forecast for time period number four.
>
> **[4:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=270)** Let's replace the smoothing constants with actual numbers in cell B3.
>
> **[4:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=275)** We're using for this example the value 0.1 for alpha so one minus alpha is 0.9 and 0.9 squared is 0.81.
>
> **[4:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=285)** Similarly, one minus alpha or 0.9 to the first power is 0.9 and one minus alpha to the power of zero is one.
>
> **[4:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=295)** So in cell B3, you can see that the weight applied to each consecutive observation increases as time passes.
>
> **[5:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=304)** The oldest observation y sub one gets a weight of 0.81 while the newest observation y sub three gets a weight of 1.0.
>
> **[5:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=314)** And that's why it's called exponential smoothing by raising the quantity one minus the smoothing constant which is a fraction to successively lower powers.
>
> **[5:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=325)** We reduce the influence of older observations on the next forecast and increase the influence of more recent observations on that forecast.
>
> **[5:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponentially-declining-influence-of-observations?u=76281980&t=335)** Let's move on to a tool that will help you determine the sorted baseline that you're working with.

> [!info]- Semantic Content
>
> **Versions:** 0.9 (4), 0.81 (2), 0.1 (1), 1.0 (1)
> **Code Keywords:** let (2), continue (1), for, (1), case, (1)
> **Env Vars:** b10 (1), b12 (1), b14 (1)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Identify the appropriate baseline
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=1)** - [Instructor] When you're preparing to forecast from a baseline, it's important to understand how earlier observations in the baseline are related to later observations in the same baseline.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=11)** One widely accepted way to evaluate a baseline is by a way of what are called correlograms.
>
> **[0:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=17)** The correlogram is a column chart that shows the strength of the correlation between two sets of values in a baseline.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=25)** Here's an example.
>
> **[0:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=26)** The values in columns A through E form the basis for a lag one correlogram.
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=32)** The values in column E labeled lag one and highlighted in yellow, are the same values as you see in column B, also highlighted in yellow.
>
> **[0:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=43)** But in column E, those values have been shifted up by one row.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=47)** So for example, the 82 in cell E4 is the same as the 82 in cell B5.
>
> **[0:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=55)** The 165 in cell E5 is the same as the 165 in cell B6.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=62)** The values in the columns B and E, that are surrounded by a heavy black border, are the sets of values that the tool will correlate.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=71)** In this case, with the values in columns B and E, the correlation is termed a lag one autocorrelation.
>
> **[1:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=78)** The tool will correlate the first nine values in the baseline with the second nine values in the baseline.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=85)** That is the nine values that lag one period behind the first nine values is termed an autocorrelation rather than a simple correlation because we're calculating the correlation between values that belong to the same variable.
>
> **[1:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=101)** Using the term autocorrelation means that we can reserve the simpler term correlation for the relationship between two different variables.
>
> **[1:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=111)** Such as height and weight.
>
> **[1:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=113)** The columns G through K show the basis for a lag two autocorrelation.
>
> **[1:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=119)** The observations on day three through day 10 in column H are highlighted in yellow, and when they are copied to column K, they are shifted up, but not just one time slot, but two time slots.
>
> **[2:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=132)** The tool will calculate the autocorrelation between the values in the two boxed ranges in columns H and K.
>
> **[2:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=140)** The pattern is similar in columns M through P, which are used to calculate the lag three autocorrelation.
>
> **[2:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=147)** We can carry out this autocorrelation analysis for as many lags as there are data points in the baseline minus one.
>
> **[2:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=154)** The idea behind the autocorrelation analysis is to determine the strength of the relationship between some value in a baseline and another value found one, two, three or more lags following the earlier observation.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=167)** Let's see what this looks like in an actual correlogram.
>
> **[2:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=171)** This baseline would normally be termed a horizontal or stationary baseline.
>
> **[2:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=177)** It does not display the pronounced trend either up or down, and doesn't show any particular seasonality, such as you normally see in retail sales in the fourth quarter of calendar years.
>
> **[3:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=189)** We can examine the autocorrelations in this baseline on this chart.
>
> **[3:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=194)** This is a correlogram.
>
> **[3:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=196)** The horizontal axis displays lags one through seven.
>
> **[3:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=200)** The columns display the size of the autocorrelation at each lag.
>
> **[3:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=203)** So for example, the lag one autocorrelation at the left side of the chart is approximately 0.13, and the lag two autocorrelation, just to the right of the lag one, is approximately 0.05.
>
> **[3:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=217)** Notice the dashes near the top and the bottom of the chart.
>
> **[3:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=221)** They indicate where a statistically significant autocorrelation would reach.
>
> **[3:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=226)** For example, to be statistically significant at the .05 level, and thus reliable, the lag one autocorrelation would have to exceed 0.45, whereas the actual calculated lag one autocorrelation is only about 0.13.
>
> **[4:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=244)** The dashes represent values of plus and minus 1.96 in the t-distribution.
>
> **[4:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=250)** All of the autocorrelations show on the chart are very weak, and that is typical of a horizontal, stationary baseline.
>
> **[4:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=258)** The exponential smoothing techniques in this course are appropriate for the horizontal baseline.
>
> **[4:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=264)** A trended baseline looks very different from a horizontal baseline, both in a chart at the raw values and in it's correlograms.
>
> **[4:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=273)** Here is a baseline with a strong upward trend.
>
> **[4:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=276)** It will not respond well to the exponential smoothing techniques discussed in this course.
>
> **[4:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=281)** The baseline must be detrended first, or an additional smoothing constant that accounts for the trend must be included in the analysis.
>
> **[4:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=289)** Although a simple visual inspection makes it clear that the series is trended, it's correlogram gives you a more objective view of it.
>
> **[4:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=297)** This correlogram of the trended baseline is very different from the correlogram of the horizontal baseline.
>
> **[5:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=303)** The autocorrelation start out very strong at lag one, they decline gradually through lag seven.
>
> **[5:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=310)** Notice that the first three autocorrelations each exceed the dash that indicates statistical significance in the baseline such as this one, that displays a strong upward trend.
>
> **[5:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=321)** Consecutive observations are each a little bit higher than the observation that preceded it, therefor the autocorrelations will tend to be positive and large.
>
> **[5:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=330)** The same is true of the series that is trending down.
>
> **[5:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=333)** Earlier observations are followed by observations that are still lower.
>
> **[5:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=337)** Again, the autocorrelation will be positive, and will tend to be larger at smaller lags.
>
> **[5:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=343)** This sort of baseline is not appropriate for the exponential smoothing techniques that this course discuses.
>
> **[5:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=350)** Here is a baseline that displays strong seasonality.
>
> **[5:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=354)** It represents a number of houses that are sold by a real estate agency during each quarter, over a five year span.
>
> **[6:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=361)** It's clear that the sales are higher during the second quarter of each year.
>
> **[6:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=366)** Here's what the baselines correlogram looks like.
>
> **[6:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=370)** The autocorrelations for the first three lags all miss statistical significance.
>
> **[6:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=375)** The autocorrelation for the first lag is significant at the 0.05 level.
>
> **[6:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=380)** The autocorrelation itself is approximately 0.6, because each time period represents a calender quarter, it's clear that the significant lag four correlation represents the year-to-year seasonality in the baseline.
>
> **[6:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=395)** Again, because of the seasonality of the baseline, simple exponential smoothing of the sort discussed in this course is inappropriate.
>
> **[6:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=402)** I've mentioned in this lesson that either trend or seasonality in the baseline is more than simple exponential smoothing can handle accurately.
>
> **[6:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=411)** That doesn't mean that the material in this course is not useful with a more complicated baseline.
>
> **[6:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=416)** It is useful, and the extra components that you add in order to manage trended or seasonal baselines, use the material discussed in this course as building blocks.
>
> **[7:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=427)** Furthermore, the level component, the component that this material forecasts, is an important part of forecasting, both trended and seasonal baselines.
>
> **[7:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=438)** One of the exercise files that accompany this course creates the correlograms on your behalf.
>
> **[7:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=444)** This is how to use it.
>
> **[7:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=445)** Open the workbook named 0104ACF.xls.
>
> **[7:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=453)** Then, open an Excel workbook that contains your baseline.
>
> **[7:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=457)** It's important to open the workbooks in that particular order.
>
> **[7:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=460)** First, 0104ACF.xls, then the workbook that contains your baseline.
>
> **[7:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=468)** Notice the add-in group on the ribbon.
>
> **[7:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=470)** Click it and then click ACF in the Menu Commands group.
>
> **[7:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=475)** This dialog box appears.
>
> **[7:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=476)** Click in the input range edit box and then drag through the range that contains your baseline.
>
> **[8:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=483)** Time series is just another term for baseline.
>
> **[8:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=487)** Leave the first differencing checkbox unchecked, and enter a number such as seven as the number of lags for the correlograms.
>
> **[8:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=497)** Click Okay.
>
> **[8:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=500)** After a few seconds, you'll see the correlograms for the autocorrelation functions in a new Excel workbook.
>
> **[8:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/identify-the-appropriate-baseline?u=76281980&t=507)** Let's move on for a closer look at the forecast equations.

> [!info]- Semantic Content
>
> **Versions:** 0.13 (2), 0.05 (2), 0.45 (1), 1.96 (1), 0.6 (1)
> **Analogies:** such as (4), for example (3)
> **Definitions:** is a  (4), is an  (1)
> **UI Navigation:** open the (2), in the menu (1), checkbox (1)
> **Code Keywords:** let (2), case, (1)
> **Env Vars:** acf (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)


### 2. The Forecasting Equation

#### Dissect the error correction form
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=1)** - [Instructor] Let's use the exponential smoothing formula in real situation.
>
> **[0:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=5)** The worksheet shows the date of each observation in column A and the observations themselves in column B.
>
> **[0:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=13)** Here we're recording and forecasting sales dollars.
>
> **[0:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=16)** The forecasts appear in column C.
>
> **[0:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=19)** You maybe wondering what are all those other forecasts in cell C3 through C20 doing here.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=25)** We already know what the actual observations for those dates are, so what is there to be gained by forecasting them?
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=32)** The reason is that we want to assess the accuracy of the forecasts.
>
> **[0:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=36)** I'll show you how that's done a little later on in this course.
>
> **[0:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=40)** Notice the two highlighted cells C3 and C21.
>
> **[0:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=45)** Cell C3 demonstrates that the first forecast is often taken to be the value of the first actual observation.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=53)** There are other ways to set the first forecast, but the one shown here is certainly the simplest.
>
> **[0:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=59)** The forecast of 941 in cell C3 is equal to the first observation, that of 941 in cell B2.
>
> **[1:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=68)** Cell C21 shows that you can use simple exponential smoothing to obtain what's called a one step ahead forecast.
>
> **[1:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=77)** The formula in cell C21 makes use of the prior forecast, the error in the prior forecast, and the smoothing constant.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=85)** When it comes time on June 19, to make a forecast for June 20, each of the quantities in hand and you can make a forecast for the next day.
>
> **[1:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=95)** Now notice the first actual forecast in cell C4.
>
> **[1:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=99)** It picks up the prior forecast value in cell C3 and adds to that the product of the smoothing constant in cell H1 and the prior forecast error in cell D3.
>
> **[1:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=112)** That's precisely what the error correction version of the smoothing formula is intended to do.
>
> **[1:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=118)** Also notice that the formula employs dollar signs along with the cell address H1.
>
> **[2:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=125)** The dollar signs anchor the reference to that cell.
>
> **[2:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=128)** With the reference anchored, we can copy and paste the formula in cell C4 down through cell C21.
>
> **[2:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=136)** Each of the pasted formulas will make reference to cell H1, but they will also make reference to the previous forecast and the previous forecast error.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=145)** So for example the final forecast in cell C21 makes reference to the smoothing constant in cell H1, but also makes reference to the forecast in C20 and the forecast error in D20.
>
> **[2:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=159)** This is a convenient place to have a look at what happens when alpha, the smoothing constant, takes on one of two extreme values.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=167)** Suppose first that we set it to zero.
>
> **[2:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=171)** When I do so, watch what happens to the forecasts in the chart.
>
> **[2:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=176)** The series of forecasts becomes a constant straight line.
>
> **[3:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=180)** The reason has everything to do with the formula.
>
> **[3:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=183)** The formula adds the prior forecast to the product of the smoothing constant and the prior error.
>
> **[3:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=189)** When the smoothing constant is zero the prior error has no effect on the next forecast and each forecast therefore is set equal to the one that proceeded it.
>
> **[3:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=198)** The result is a straight line forecast, one that equals the first forecast and the baseline.
>
> **[3:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=204)** Now set alpha to the other extreme value, 1.0, and again watch what happens to the forecasts in the chart.
>
> **[3:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=215)** Each forecast is now equal to the prior actual observation.
>
> **[3:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=219)** The error correction formula explains the reason.
>
> **[3:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=222)** With the smoothing constant set to one, the formula works out to the sum of the prior forecast plus the prior error.
>
> **[3:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=230)** But the prior error is calculated by subtracting the prior forecast from the prior actual.
>
> **[3:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=236)** The effect of the error correction formula then is simply to add the error back into the forecast and the result is the prior actual observation.
>
> **[4:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=245)** The point of exponential smoothing is to find the smoothing constant that minimizes the errors in the forecasts.
>
> **[4:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=252)** Used on the proper kind of baseline for this sort of simple smoothing, the horizontal baseline, the optimum value for the smoothing constant is generally somewhere between zero and one.
>
> **[4:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=263)** You'll see how to find the optimum value in chapter four of this course.
>
> **[4:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-error-correction-form?u=76281980&t=267)** In the mean time, let's take a look at the smoothing form of the equation.

> [!info]- Semantic Content
>
> **Env Vars:** c21 (5), c20 (2), d20 (1)
> **CLI Commands:** make (4), find (2)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Versions:** 1.0 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Dissect the smoothing form
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=1)** - [Narrator] This worksheet shows the results of using the smoothing form of the exponential smoothing equation, rather than the error correction form of the equation, which was discussed in the prior lesson.
>
> **[0:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=12)** Recall that the two forms of the equation return precisely the same results, which means that the two sets of forecasts are identical.
>
> **[0:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=20)** So, the choice of which form to use is strictly a matter of personal preference.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=25)** Although, the two forms emphasize different aspects of exponential smoothing and its useful to understand those aspects.
>
> **[0:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=32)** The only structural difference between this worksheet and the one that demonstrated the error correction form, is that this worksheet shows the damping factor specifically.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=42)** In this case, the damping factor is found in cell K1.
>
> **[0:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=46)** The damping factor is simply the result of subtracting the smoothing constant from 1.0.
>
> **[0:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=52)** One reason that it's useful to call out the damping factor specifically, as is done here in cell K1, is that the smoothing form of the equation uses both constants.
>
> **[1:03](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=63)** Notice that cell F4, which shows the formula that is entered in cell C4, contains two terms.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=71)** Cell I1 times cell B3 is the product of the smoothing constant and the prior actual observation.
>
> **[1:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=79)** Cell K1 times cell C3 is the product of the damping factor and the prior forecast.
>
> **[1:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=87)** The smoothing form of the equation emphasizes that each forecast is a weighted sum of the prior actual observation and the prior forecast.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=96)** The two weights are the smoothing constant and the damping factor, which together add up to 1.0 or 100%.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=104)** If you read other sources of information on exponential smoothing, you'll find that some authors use the quantity one minus alpha explicitly in each forecast formula.
>
> **[1:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=115)** Just as a manner of efficiency and clarity in the worksheet, I find it useful to calculate the damping factor once explicitly as is done here in cell K1.
>
> **[2:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=125)** I then make a reference to that cell in the exponential smoothing formulas themselves.
>
> **[2:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=131)** Let's see what happens in this instance when we set the smoothing constant to the extreme values of zero and one.
>
> **[2:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=137)** First, I'll change it to zero.
>
> **[2:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=142)** Notice first, that as soon as I change the smoothing constant, the value of the damping factor updates.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=148)** Remember that your constants always sum to 1.0.
>
> **[2:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=151)** Also, changing the smoothing constant to zero results in a straight line that forecasts, each of which is equal to the very first forecast.
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=160)** This is exactly what happened in the prior lesson on the equation's error correction form.
>
> **[2:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=165)** Because of the structural differences in the exponential smoothing formula, however, the reason for the constant forecasts is slightly different.
>
> **[2:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=174)** In this case, changing the smoothing constant to zero completely removes the effect of new observations and the entire weighted sum of each forecast is equal to the prior forecast.
>
> **[3:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=186)** Now notice what happens when the smoothing constant is changed from zero to one.
>
> **[3:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=194)** Again, the damping factor updates and now equals zero.
>
> **[3:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=198)** Also, again, the effect of setting the smoothing constant to one, is to set each forecast precisely equal to the prior observation.
>
> **[3:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=207)** The reason is obvious from the formula.
>
> **[3:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=209)** The formula multiples 1.0 times the prior actual observation and multiplies the prior forecast by zero.
>
> **[3:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=216)** The result is that each forecast precisely equals each prior observation.
>
> **[3:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=221)** There are times when that sort of forecasting turns out to be very useful.
>
> **[3:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=224)** And in fact, there's a term for it: naive forecasting.
>
> **[3:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=228)** Excel has an exponential smoothing tool.
>
> **[3:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/dissect-the-smoothing-form?u=76281980&t=231)** We'll look at that next.

> [!info]- Semantic Content
>
> **Versions:** 1.0 (4)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** case, (2), let (1)
> **Definitions:** means that (1), is a  (1)
> **Speakers:** - [narrator] (1)

#### Exponential smoothing tool
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=1)** - [Instructor] Microsoft Excel comes with two add-ins that you should know about if you want to do exponential smoothing.
>
> **[0:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=7)** Here's how to load the add-ins if you haven't done so already.
>
> **[0:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=10)** Begin by going to the File tab, and clicking it.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=15)** And in the nav bar, choose Options at its very bottom.
>
> **[0:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=20)** And on the Excel Options dialog box, come down near the bottom of this nav bar and click Add Ins.
>
> **[0:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=28)** And then at the bottom of that window, make sure that the drop down says Excel Add-ins.
>
> **[0:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=33)** And then click Go.
>
> **[0:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=37)** Fill the checkbox for the Analysis ToolPak.
>
> **[0:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=40)** That, by the way, is just a legacy term for what's now called the data analysis add-in.
>
> **[0:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=46)** Also, fill the checkbox for the Solver Add-in.
>
> **[0:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=49)** We'll be using Solver a good bit later on in this course, so we may as well go ahead and get it loaded now.
>
> **[0:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=55)** Then click the OK button.
>
> **[0:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=58)** And on the Data tab, you'll notice that there's a new Analysis group, at the right hand of the ribbon.
>
> **[1:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=65)** With both Data Analysis and Solver in it.
>
> **[1:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=69)** Microsoft Excel's data analysis add-in includes an exponential smoothing tool.
>
> **[1:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=74)** That tool returns forecast formulas that apply the smoothing approach.
>
> **[1:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=79)** I don't recommend that you use the tool routinely, but you should be aware of it, and what its drawbacks include.
>
> **[1:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=86)** Let's take a quick look at the exponential smoothing tool now.
>
> **[1:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=89)** With the worksheet open that contains a baseline, click Data Analysis on the ribbons Data tab, and scroll down in the dialog box until you reach Exponential Smoothing.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=104)** Click it, and then click OK to bring up the exponential smoothing dialog box.
>
> **[1:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=109)** Click in the Input Range edit box, and then drag through your baseline of observations, including a column header, if you're using one.
>
> **[2:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=122)** Click in the Damping factor edit box, and enter 0.8.
>
> **[2:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=132)** If you included a column header in the input range, fill the Labels checkbox.
>
> **[2:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=139)** Click in the Output Range edit box, and then click in the worksheet cell that has blank cells to its right and below it.
>
> **[2:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=148)** I'm going to choose cell C2.
>
> **[2:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=152)** Fill the Chart Output checkbox, and click the OK button.
>
> **[2:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=159)** You'll get results that'll look very much like those shown on this worksheet.
>
> **[2:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=164)** The tool calculates the forecasts for you, and it charts them, along with the actual observations in the embedded line chart.
>
> **[2:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=172)** There are several things to notice about both the dialog box and the analysis results.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=178)** The first forecast in cell C3 uses the approach that these lessons have used so far.
>
> **[3:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=185)** That is, taking the first actual observation as the first forecast.
>
> **[3:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=190)** Notice that the one-step ahead forecast is not provided.
>
> **[3:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=193)** If you want it, and presumably you do, you can get it easily enough by choosing the final forecast, which here is in cell C20, and drag it down into cell C21.
>
> **[3:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=209)** That final one-step ahead forecast is also missing from the chart.
>
> **[3:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=213)** So you'll need to select the forecast series in the chart, and adjust its range so that it captures the one-step ahead forecast in cell C21.
>
> **[3:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=228)** Notice the formula for the forecasts as it's shown in cell C4.
>
> **[3:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=235)** It conforms to the basic structure of the smoothing form of the equation.
>
> **[3:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=239)** That is, it multiples the smoothing constant, 0.2 times the prior actual and adds to that the damping factor of 0.8 times the prior forecast.
>
> **[4:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=250)** However, it uses the actual static values for those two constants.
>
> **[4:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=255)** That means that if you want to experiment with another different smoothing constant and damping factor, you have to replace the values that are embedded in the equations with other values.
>
> **[4:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=266)** Or run the exponential smoothing tool again from scratch, supplying a different value for the damping factor.
>
> **[4:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=274)** That's inconvenient.
>
> **[4:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=275)** And a much more sensible approach is to store the smoothing constant and damping factor in their own worksheet cells.
>
> **[4:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=282)** Point the smoothing equations at those cells to pick up the constant values.
>
> **[4:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=286)** That way if you want to change the value of the constants, it's easy to do so in just one place.
>
> **[4:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=291)** For use by formulas that automatically update, in response to a change in smoothing constant.
>
> **[5:04](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=304)** Notice that the dialog box asks you to supply the damping factor.
>
> **[5:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=309)** There's nothing especially wrong with that.
>
> **[5:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=311)** But the term smoothing constant appears in the literature approximately 10 times as often as the term damping factor.
>
> **[5:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=320)** The dialog box requests that you supply the constant that is less frequently mentioned.
>
> **[5:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=325)** It would have been considerate to request the smoothing constant rather than the damping factor.
>
> **[5:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=330)** Lastly, don't bother to request the standard errors.
>
> **[5:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=333)** The way that they're calculated is idiosyncratic, confusing, and not at all standard.
>
> **[5:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=339)** To sum up, I suggest that you become at least passingly familiar with Excel's Exponential Smoothing tool.
>
> **[5:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=345)** You should know that it's available, and you might find it a handy way to learn as you're studying more about the techniques of exponential smoothing.
>
> **[5:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=354)** I suspect, however, that before long, you'll want to roll your own, and simply dispense with the exponential smoothing tool entirely.
>
> **[6:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/exponential-smoothing-tool?u=76281980&t=362)** Let's move on to the question of how to initialize your forecasts.

> [!info]- Semantic Content
>
> **UI Navigation:** checkbox (4), scroll down (1), select the (1)
> **Code Keywords:** let (2), include. (1), static (1)
> **Env Vars:** c21 (2), c20 (1)
> **Versions:** 0.8 (2), 0.2 (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** means that (1)
> **Warnings:** be aware (1)
> **Prerequisites:** you'll need (1)

#### Initialize the forecasts
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=1)** - [Instructor] This worksheet initializes the forecasts in cell C3 using the technique that we have used in chapters one and two of this course to set the first forecast equal to the first actual observation.
>
> **[0:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=13)** There's nothing wrong with that technique although other, and sometimes better ways, are available.
>
> **[0:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=18)** The basic problem is that each forecast depends on a prior actual observation and a prior forecast.
>
> **[0:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=26)** So, the forecast for the first period presents a special problem because there was no prior action observation and there was no prior forecast.
>
> **[0:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=34)** The second period presents a related problem.
>
> **[0:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=37)** The prior period, period one, has an actual observation but, it does not have an associated forecast.
>
> **[0:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=43)** In this case, the forecast for the first period is not available.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=47)** One way to bootstrap it is to simply set the forecast for the second period equal to the actual observation in the first period.
>
> **[0:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=55)** That's an approach that you will frequently see in the literature on exponential smoothing.
>
> **[1:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=60)** However, if the first actual observation is an outlier then setting the second period's forecast equal to the first actual observation can get things off to a bad start.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=71)** In the example that we're looking at, the first actual observation of 941 is well below all but two of the remaining observations.
>
> **[1:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=80)** Compare the actual observations for June two through June sixth with the associated forecasts for those same dates and you'll note that it takes a while for the forecast to catch up with the actuals.
>
> **[1:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=93)** One solution is to take the average of the first few actual observations and make that the initial forecast.
>
> **[1:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=100)** Here, the forecast for June the fifth.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=104)** The average of the first actual observation is 2,430 shown highlighted in cell C6.
>
> **[1:52](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=112)** We can take that as the initial forecast for June five.
>
> **[1:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=115)** Now, with a forecast and an actual observation for June five, we can create a forecast for June six, June seven, and so on to the end of the baseline.
>
> **[2:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=126)** Recall that the further you get into a baseline, the less influence the earliest observations and forecasts have on the next forecasts.
>
> **[2:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=134)** In column C, we have the forecasts based on an initial forecast which is an average of the first five actual observations.
>
> **[2:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=144)** In column E, we have the forecasts that are based on an initial forecast taken from the first actual observation of 941.
>
> **[2:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=153)** And, in column G, we have the difference between the two forecasts.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=156)** For example, in cell C6, we have 285, which is the difference between the 2,430 in cell C6 and 2,145 in cell E6.
>
> **[2:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=170)** Notice as you scroll down the sheet through row ten and on into row 20, the differences between the two forecasts get smaller and smaller.
>
> **[2:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=179)** This is evidence that as we move away from the initial forecasts, the great discrepancy between how the initial forecasts are calculated has a smaller and small effect on each subsequent forecast.
>
> **[3:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=191)** Another widely accepted approach to initializing the forecasts is by way of backcasting.
>
> **[3:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=198)** Let's take a look at that next.
>
> **[3:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=199)** With backcasting, you turn the baseline around and us it to forecast into time period zero.
>
> **[3:26](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=206)** This probably seems, at first, like a tricky way to obtain the first forecast but, in fact, it's the method recommended by Box and Jenkins in their seminal 1976 work on time series analysis.
>
> **[3:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=217)** One the worksheet in columns A through C, notice that the data run for the most recent date of June tenth down to the earliest date of June first.
>
> **[3:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=228)** We can now substitute the actual observation made on June ten, 7,489 for the forecast made for June nine.
>
> **[3:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=237)** With an actual observation and an associated forecast for June nine, it's possible to forecast back to June one and to one day earlier, May 31.
>
> **[4:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=245)** That gives us a backcast of 3,384 for May 31st and we can sue that as the forecast for June one.
>
> **[4:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=254)** Notice, that's what's been done in cell G2.
>
> **[4:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=258)** Starting with cell G3, we can use either form of the exponential smoothing equation to populate forecasts for June two through the one step ahead forecast on June 20.
>
> **[4:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=269)** Again, it's instructive to compare the forecasts made using these two approaches, forecasts based on backcasting in column G and forecasts based on the first actual observation in column I.
>
> **[4:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=281)** The differences between the two sets of forecasts appear in column K.
>
> **[4:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=286)** Although the differences drop fairly rapidly from almost 2,000 down to 35, the differences are never the less greater than between the method that uses the first actual observation and the method that uses the average of the first few.
>
> **[5:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=300)** This is because the back casting method, in this case, resulted in an initial forecast that is almost $1,000 greater than the average of the first five actual observations.
>
> **[5:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=312)** Now that we've looked at different ways to construct your forecasts as well as different ways to initialize the forecast, it's time to take a look at how to measure the accuracy of those forecasts.
>
> **[5:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/initialize-the-forecasts?u=76281980&t=322)** We'll take that up beginning in the next chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), let (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)


### 3. Measuring Forecast Accuracy

#### The absolute deviation approach
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=1)** - [Instructor] When you look for ways to express the degree of accuracy in a forecast, you're looking for a single number that will show how closely all of your forecasts estimate all of your actuals.
>
> **[0:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=11)** As a practical matter, a good forecast results in small deviations from the actual observations.
>
> **[0:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=18)** So the first solution that might occur to you is to subtract each forecast from its associated actual observation, which results in a deviation.
>
> **[0:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=27)** If you do the same with all your forecasts and observations, you wind up with a set of deviations as shown in this worksheet in column E.
>
> **[0:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=36)** You could total or average those deviations to come up with the single number that expresses the degree of accuracy in forecasts as show in cell F2.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=47)** At first blush, the smaller the total or average deviation the more accurate the forecasts.
>
> **[0:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=53)** Unfortunately, there's a strong tendency for some of your deviations to be positive numbers and some of your deviations to be negative numbers.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=62)** It's conceivable that you might have some large positive deviations and some large negative deviations, which would mean that your forecasts were relatively inaccurate.
>
> **[1:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=72)** But the positive deviations would tend to cancel out the negative deviations and you could wind up with a small total deviation, even though your forecasts were returning large errors.
>
> **[1:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=83)** One solution to this problem is to take the absolute value of each deviation, as shown in this worksheet column F.
>
> **[1:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=91)** This worksheet has the same data as the first one you saw in columns A through E.
>
> **[1:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=97)** Column F uses Excel's ABS function to convert each deviation to a positive number.
>
> **[1:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=104)** ABS or A-B-S is Excel's abbreviation for absolute value.
>
> **[1:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=109)** Now you can take the average of the absolute deviations and wind up with a figure that really does express the average size of the deviations.
>
> **[1:57](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=117)** The average is termed the mean absolute deviation, or M-A-D, or MAD, and you see it used with some frequency in forecasting work.
>
> **[2:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=126)** It's a much better expression of the degree of inaccuracy in a forecast than is the total or average raw deviation.
>
> **[2:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=135)** However, another sort of error measurement called the root mean square error, or R-M-S-E, is usually preferred to the MAD.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-absolute-deviation-approach?u=76281980&t=145)** Let's take a look at it next.

> [!info]- Semantic Content
>
> **Env Vars:** abs (2), mad (2)
> **Code Keywords:** function (1), let (1)
> **Speakers:** - [instructor] (1)

#### The least squares approach
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=1)** - [Instructor] The mean absolute deviation is one way to avoid positive and negative forecasts canceling one another out.
>
> **[0:08](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=8)** Recall that it converts each forecast error to its absolute value.
>
> **[0:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=13)** A different approach is to simply square each forecast error.
>
> **[0:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=17)** The square of any number is positive, therefore, if you squared the errors, you'll wind up with a sequence of positive numbers that will not cancel one another out, and that's what you see on this worksheet.
>
> **[0:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=28)** One difference is simple terminology.
>
> **[0:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=30)** It's traditional to term the difference between a forecast and its associated observation as a deviation in the context of mean absolute deviations.
>
> **[0:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=39)** It's also traditional to refer to that difference as error; in the context that we're working with here, the root mean squared error.
>
> **[0:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=47)** Columns A through E are again identical to columns A through E in the prior lesson.
>
> **[0:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=51)** In column F, however, instead of taking the absolute value of a deviation or error, we square it.
>
> **[0:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=58)** Cell G3 is the average of those squared errors.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=62)** It is referred to as the mean squared error, abbreviated M-S-E, and you'll sometimes see it used as a measure of a forecast's accuracy or inaccuracy.
>
> **[1:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=72)** However, it is more typical to take the square root of the mean squared error, which you see in cell H3.
>
> **[1:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=79)** Taking the square root of the mean squared error returns the metric to its original scale.
>
> **[1:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=84)** Having squared the errors to make them all positive numbers, and having taken the average of those squares, taking the square root of the result returns a metric, in this case, to dollars rather than squared dollars.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=96)** The root mean squared error that you see in cell H3 is more frequently referred to as R-M-S-E.
>
> **[1:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=103)** I've set up the worksheet so that each step is called out exclusively, calculating the forecast error in column E, squaring the errors in column F, getting the mean squared error in cell G3, and getting the root mean squared error in cell H3.
>
> **[1:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=116)** If you prefer, you can use the formula shown in cell H6 which uses a couple of Excel worksheet functions to calculate the forecast errors, square them, and sum the squared errors.
>
> **[2:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=127)** You would still need to divide by the number of forecasts to get the mean squared error and then take the square root to return the root mean squared error.
>
> **[2:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=135)** Now, should you us R-M-S-E, root mean squared error, or should you use M-A-D, mean absolute deviation?
>
> **[2:23](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=143)** Most forecasters who use exponential smoothing prefer to use R-M-S-E as a measure of the inaccuracy in a forecast.
>
> **[2:30](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=150)** Full disclosure, I'm among them.
>
> **[2:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=153)** R-M-S-E is more sensitive to large forecast errors than is M-A-D simply because you square the errors before you calculate their average.
>
> **[2:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=161)** This can be important when you're deciding between two models, perhaps one that assumes a horizontal baseline and one that assumes a trending baseline.
>
> **[2:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=170)** A business can get along quite nicely with a long string of small errors, but a single large error during the fiscal year can destroy its profit margin for that year.
>
> **[3:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=180)** I also prefer R-M-S-E to M-A-D because it is closely related to a statistic called the standard error of estimate in regression analysis.
>
> **[3:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=189)** Regression analysis has been around for over a century and the properties of its underlying statistics have been thoroughly studied.
>
> **[3:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/the-least-squares-approach?u=76281980&t=196)** When I get an R-M-S-E that I don't expect, I usually know just where to look to understand it better.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** case, (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 4. Optimizing Forecasts

#### Solver
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=1)** - [Instructor] Usually when you're using a financial, or otherwise numeric analysis package, such as Excel, you want to know the result of a series of inputs.
>
> **[0:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=10)** For example, your company might have four operating divisions, each of which returns a profit.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=15)** To get the gross profit of all four divisions you can set up something very simple, such as the values in column C here.
>
> **[0:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=22)** You supply the numbers and arrange C2 to C5 and the formula in C7 gives you their total.
>
> **[0:28](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=28)** You supply the inputs and Excel supplies the result.
>
> **[0:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=31)** It frequently happens though that you know the result that your after, and you want to know what inputs are needed to bring about that result.
>
> **[0:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=38)** A very simple example of this situation appears in column H.
>
> **[0:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=42)** At present three operating divisions are returning a total of nine shown in cell H7.
>
> **[0:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=49)** Click the ribbons data tab, and then click what if analysis in the forecast group.
>
> **[0:56](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=56)** Choose goal seek from the menu.
>
> **[1:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=60)** Because you started by selecting cell H7, that's taken to be the set cell in the dialogue box.
>
> **[1:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=67)** Enter the number ten in the to value edit box.
>
> **[1:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=77)** And then enter the address H5 in the by changing cell edit box.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=85)** When you click okay, Excel responds by putting the number one in cell H5.
>
> **[1:32](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=92)** Excel supplies the input that solves the problem you set up.
>
> **[1:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=96)** The goal seek tool is a very simple one, but Excel has a much more sophisticated tool in solver.
>
> **[1:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=103)** Here's a brief demonstration of how solver works.
>
> **[1:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=106)** Like the data analysis add in, you need to make sure the solver is installed on your computer and made available to Excel.
>
> **[1:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=115)** If you see solver as an item in the analysis group on the ribbons data tab, you're all set.
>
> **[2:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=121)** In this example I begin by selecting cell M7, and then clicking solver in the analyze group.
>
> **[2:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=132)** The solver dialogue box appears, and the set cell at the top of the box is automatically set to the active cell address.
>
> **[2:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=140)** I make sure that the, value of, option button is chosen, and I enter the number ten, if need be, in it's edit box.
>
> **[2:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=149)** I click in the by changing variable cells edit box, and then click in the cell M5 to establish it as the variable cell.
>
> **[2:40](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=160)** I set the solving method to simplex LP, and click solve.
>
> **[2:47](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=167)** After a few seconds solver announces that it has found a solution.
>
> **[2:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=171)** In this case the solution is identical to the one returned by gold seek.
>
> **[2:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=175)** The number one is cell M5.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=178)** Using solver on this problem is total overkill.
>
> **[3:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=181)** But, it gives you a sense of how solver works, and how much more sophisticated it is than gold seek.
>
> **[3:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=187)** For example you're not limited to solving for a particular value.
>
> **[3:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=191)** You can instead specify either a maximum value, or a minimum value.
>
> **[3:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=196)** That's pertinent here because we'll be using solver to minimize the root mean square error or RMSE, that was discussed in the prior lesson.
>
> **[3:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solver?u=76281980&t=205)** Furthermore we can set constraints on the variable cells, as you'll see, we set up the smoothing constant as a variable cell, and to make sure that it stays within the range of zero to one, we'll set constraints on it so that solver automatically keeps the smoothing constant between a minimum value of zero and a maximum value of one.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (2)
> **CLI Commands:** make (3)
> **Prerequisites:** set up (3)
> **Env Vars:** rmse (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Set up the smoothing formula for Solver
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=1)** - [Instructor] Here is a worksheet with the baseline all setup to optimize the smoothing constant and thereby minimize the total root mean square error.
>
> **[0:09](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=9)** Recall from previous lessons that the smaller the root mean square the more accurate the forecasts for the actual observations in the baseline.
>
> **[0:18](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=18)** The forecasts in column C are made using the smoothing form of the exponential smoothing formula.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=25)** For simplicity, I've set the first forecast for June 2 in cell C4 equal to the first actual observation in cell B3.
>
> **[0:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=34)** I have also set the starting value for the smoothing constant or alpha in cell K2 to 0.1.
>
> **[0:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=41)** Notice that the damping factor or one minus alpha in cell K3 is therefore 0.9.
>
> **[0:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=48)** With these settings and of course with the actual baseline values shown in column B, we get a root mean square error in cell H4 of 3,112.
>
> **[0:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=59)** We also get a one step ahead forecast in cell C22 of 4,037 because the current smoothing constant of 0.1 was chosen virtually at random.
>
> **[1:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=70)** We can almost certainly improve the accuracy of the forecasts by optimizing its value so that the root mean square error is minimized.
>
> **[1:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=79)** To do so, we call on solver.
>
> **[1:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=82)** Begin by selecting cell H4.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=85)** This is the cell whose value we want to minimize in order to optimize the accuracy of the forecasts.
>
> **[1:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=91)** Then click the data tab and click solver in the analysis group.
>
> **[1:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=99)** The solver dialogue box appears.
>
> **[1:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=101)** Notice that the set objective cell is H4 because that is the cell that was selected when we called solver.
>
> **[1:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=108)** If for some reason the address of some other cell appears in the set objective edit box, make sure that the address of the RMSE cell appears there.
>
> **[1:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=118)** Next, choose the min option button.
>
> **[2:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=122)** The objective is to minimize the value in cell H4, the root mean square error.
>
> **[2:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=127)** Now identify the variable cell.
>
> **[2:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=130)** In this case, we have only one variable cell K2, the smoothing constant.
>
> **[2:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=135)** Situations in which there are more than one variable cell are quite common particularly in the more advanced types of exponential smoothing, but here we need one only.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=145)** Click in the by changing variable cells edit box and then click cell K2 in the worksheet.
>
> **[2:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=153)** We want to set a couple of constraints.
>
> **[2:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=156)** We want to ensure that the value of this smoothing constant stays between zero and 1.0.
>
> **[2:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=162)** Start by clicking the add button which is immediately to the right of the subject to the constraints list box.
>
> **[2:50](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=170)** A new dialogue box appears.
>
> **[2:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=171)** Click in the cell reference edit box and then click in cell K2.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=178)** This specifies that you want to constrain K2's value except the less than or equal to operator in the middle box and type 1.0 in the constraint edit box.
>
> **[3:13](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=193)** Then click the add button.
>
> **[3:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=195)** In the cell reference box, again enter cell K2.
>
> **[3:21](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=201)** Click the down arrow in the center box and select greater than or equal to as the operator.
>
> **[3:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=209)** In the constraint box, enter the number zero and click the OK button.
>
> **[3:36](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=216)** In the select a solving method dropdown box, choose GRG nonlinear.
>
> **[3:44](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=224)** Click the options button next to the solving method dropdown box.
>
> **[3:49](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=229)** The options dialogue box appears.
>
> **[3:51](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=231)** Click the GRG nonlinear tab at the top of the dialogue box.
>
> **[3:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=239)** Fill the use multistart checkbox.
>
> **[4:05](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=245)** If necessary, clear the require bounds on variables checkbox and click OK to return to the main solver dialogue box.
>
> **[4:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=254)** Click the solve button at the bottom of the solver dialogue box.
>
> **[4:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=259)** After a few seconds, solver displays a solve results dialogue box.
>
> **[4:24](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=264)** If you've specified the problem correctly and if the problem can be solved, then solver will display the message solver converged in probability to a global solution.
>
> **[4:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=275)** Choose to keep the solver solution option button if necessary and click OK.
>
> **[4:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=281)** The results indicate that with this baseline, the optimum value of alpha is 0.328.
>
> **[4:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=288)** When that is set as the value of the smoothing constant, the root mean square error drops to 2,838 from an initial value of 3,112 when the smoothing constant was set to 0.1.
>
> **[5:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=300)** That represents an approximately 10% improvement in the accuracy of the forecasts.
>
> **[5:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=306)** Also, notice that the one step ahead forecast has changed from 4,037 to 4,405, also an approximate 10% change.
>
> **[5:16](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=316)** Obviously, it's up to you whether that forecast makes sense in terms of your business model.
>
> **[5:22](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/set-up-the-smoothing-formula-for-solver?u=76281980&t=322)** Let's compare the solution returned by Excel to the one returned by the freeware statistical application R.

> [!info]- Semantic Content
>
> **Versions:** 0.1 (3), 1.0 (2), 0.9 (1), 0.328 (1)
> **Env Vars:** grg (2), c22 (1), rmse (1)
> **UI Navigation:** dropdown (2), checkbox (2)
> **Code Keywords:** case, (1), require (1), let (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Solution in R
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=1)** - [Instructor] If you know what's going on it's pretty simple to get the bottom (mumbling) of a forecast with exponential smoothing by using the freeware application R I've demonstrated in this lesson.
>
> **[0:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=12)** Of course, you'll need to have R installed on your computer.
>
> **[0:15](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=15)** I use Excel for a lot of preliminary analysis and it's convenient for me to import data directly into R from an open Excel workbook.
>
> **[0:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=25)** On the screen you see a worked out example of smoothing using Solver.
>
> **[0:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=29)** We'll start by selecting the data I want to analyze.
>
> **[0:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=37)** Now I'll read the selected data into R.
>
> **[0:41](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=41)** To do that I use an R package named DescTools.
>
> **[0:45](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=45)** The first step is to load DescTools into R.
>
> **[0:54](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=54)** DescTools is not one of the packages that is automatically installed when you install R on your computer.
>
> **[1:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=62)** If you're going to use DescTools then you'll need to call R's install packages command to download and install DescTools on your computer.
>
> **[1:11](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=71)** Depending on which version of R you are using you may need to also install a packaged named RDCOMClient.
>
> **[1:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=80)** R will warn you if you need to install it separately from DescTools.
>
> **[1:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=85)** After DescTools has been loaded by the library command you can use its XLGetRange function to pull data directly from an open Excel workbook into R's workspace.
>
> **[1:37](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=97)** Before you do that you should open the Excel workbook that contains your baseline data, activate the worksheet that contains the data, and select the baseline, just as I did earlier in this lesson.
>
> **[1:48](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=108)** Normally your data will occupy a single column of data and normally the data will consist of your observations.
>
> **[1:55](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=115)** You can include the column header in the selection if you want.
>
> **[1:59](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=119)** Once the worksheet with the data is activated and the data itself selected you can switch back to R and enter this command.
>
> **[2:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=134)** If you left the header off the selection in Excel or if the baseline had no header you can set the header keyword to uppercase F for false instead of the uppercase T for true.
>
> **[2:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=145)** The function will place the data that it finds in Excel into an object whose name you specified.
>
> **[2:31](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=151)** In this example that's uppercase TS for time series.
>
> **[2:35](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=155)** You now have an R object named TS.
>
> **[2:38](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=158)** You can hand the object off to a function named HoltWinters.
>
> **[2:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=162)** That function is one of those that are installed by default when you installed the R application itself, therefore you need not install it by way of R's install packages command, and you need not load it explicitly by means of the library command.
>
> **[2:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=178)** By the way, it's good to remember that names in R are case sensitive.
>
> **[3:02](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=182)** If you're following along with this example be sure to capitalize DescTools, XLGetRange, and HoltWinters as I've capitalized them here.
>
> **[3:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=192)** To run the analysis itself enter the following command.
>
> **[3:20](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=200)** The first argument this examples applies to the HoltWinters function is TS, that's the object that you created with the XLGetRange function.
>
> **[3:29](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=209)** The second and third arguments set both beta and gamma to false.
>
> **[3:34](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=214)** Just like alpha is the generally accepted term for the smoothing constant for the level in exponential smoothing, beta is a generally accepted term for the smoothing constant for trend in the baseline, and gamma is generally accepted term for the smoothing constant for seasonality in the baseline.
>
> **[3:53](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=233)** Because we're handing off a stationary or horizontal baseline named TS to the HoltWinters function we believe that there is neither trend nor seasonality in the baseline, and so we set their constants to false.
>
> **[4:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=247)** And finally, we specify l.start to equal 472.
>
> **[4:12](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=252)** Note that's a lowercase L, not the numeral one before the period.
>
> **[4:17](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=257)** That is the initial forecast for the baseline.
>
> **[4:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=259)** In earlier lessons in this course you've seen a couple of alternatives to setting that initial forecast to a specific value.
>
> **[4:27](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=267)** Those alternatives include averaging the first few observations and backcasting to period zero.
>
> **[4:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=273)** Here I've chosen to set it equal to the first actual observation, so that we can compare the results to those that are calculated by Excel in the prior lesson.
>
> **[4:42](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=282)** Here are the results of the HoltWinters command in R.
>
> **[4:46](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=286)** Notice that alpha is 0.2718683 and notice that R reports alpha as equal to the one calculated in Excel to the fourth decimal place.
>
> **[4:58](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=298)** Because we used the function arguments to set beta and gamma to false the function reports no numeric value for each of those two smoothing constants.
>
> **[5:07](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=307)** Winters also reports what it calls a coefficient of 690.095.
>
> **[5:14](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=314)** That's what Excel reports as the one step ahead forecast at the end of the baseline.
>
> **[5:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=319)** Excel calculates the one step ahead forecast as 690.095.
>
> **[5:25](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=325)** If you look at R's documentation for the HoltWinters function you'll find that there are additional arguments that you can supply in order to get further information.
>
> **[5:33](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=333)** For example, you can request a 95% confidence interval around the forecast.
>
> **[5:39](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=339)** This concludes the present course on exponential smoothing.
>
> **[5:43](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/solution-in-r?u=76281980&t=343)** I'll be back in the next video to wrap things up.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), switch (1), finally, (1)
> **Prerequisites:** install (7), you'll need (2)
> **Versions:** 690.095 (2), 0.2718683 (1)
> **Cross-References:** earlier in (1), in the next (1)
> **UI Navigation:** open the (1), select the (1)
> **Analogies:** just like (1), for example (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/next-steps?u=76281980&t=0)** - [Conrad] In this course you've seen how to create forecasts from a horizontal, stationary baseline.
>
> **[0:06](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/next-steps?u=76281980&t=6)** But the techniques are just as important when your baseline is not stationary.
>
> **[0:10](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/next-steps?u=76281980&t=10)** Forecasting the next level, which you learned about in this course, is a critical part of forecasting a trended, a seasonal, or a trended and seasonal baseline.
>
> **[0:19](https://www.linkedin.com/learning/business-analytics-forecasting-with-exponential-smoothing/next-steps?u=76281980&t=19)** As a next step, I'd recommend that you seek out material on Holt's method, and on Holt-Winters forecasts, and more recent work on damped trends that's taking the field in new directions.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [conrad] (1)


## Path Context

### In [[Get Ahead in Business Analytics and Analysis]]
← [[Predictive Analytics Essential Training- Estimating and Ensuring ROI]] | **14 of 19** | [[Business Analytics- Forecasting with Seasonal Baseline Smoothing]] →

## Appears In

- [[Get Ahead in Business Analytics and Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Financial Forecasting with Analytics Essential Training]] — Business Analytics
- [[Business Analytics- Sales Data (2022)]] — Business Analytics
- [[Business Analytics Foundations- Predictive, Prescriptive, and Experimental Analytics]] — Business Analytics
- [[Introduction To Business Analytics]] — Business Analytics
- [[Data Analytics for Business Professionals]] — Business Analytics

---

[↑ Back to top](#)