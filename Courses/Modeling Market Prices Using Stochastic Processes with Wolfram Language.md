---
type: course
slug: modeling-market-prices-using-stochastic-processes-with-wolfram-language
url: "https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language"
duration_minutes: 57
duration: 57m
level: Advanced
updated: 1/8/2024
learners: 1475
skills:
  - Wolfram Language
  - Financial Modeling
exercise_files: true
tags:
  - course
  - topic/data-science
  - skill/wolfram-language
  - skill/financial-modeling
status: not-started
created: 2026-04-17
---

# Modeling Market Prices Using Stochastic Processes with Wolfram Language

> The Wolfram Language contains a complete collection of stochastic processes and statistical distributions that can be fitted to a wide array of market phenomena.
This course illustrates this by explaining the modeling of stock prices, portfolios, index returns, bonds, option prices, exchange rates, and conditional risk using stochastic processes such as the ARCH process, vector-valued time series,

> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language) | 57m | Advanced | 1K learners

## Instructor

- [[Wolfram Research]]

## Resources

- Exercise files available

## Skills Covered

- Wolfram Language
- Financial Modeling

## Table of Contents

### 1. Stochastic Processes

#### Stochastic processes
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=0)** Today, what I'm going to talk about is stochastic processes.
>
> **[0:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=4)** And if you go into our data analysis here, you will see that we cover a lot of this.
>
> **[0:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=11)** Okay.
>
> **[0:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=13)** So we have all the usual type of statistical analyses.
>
> **[0:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=19)** So you can do location statistics, dispersion statistics, you know, look for variance, shape, the overall structure of the distribution.
>
> **[0:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=29)** We've also got spatial point statistics.
>
> **[0:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=32)** This won't be relevant to us now, but it is important in some aspects of finance, particularly, for instance, if you were doing risk analysis and wanted to find out which sections of the country or a state or whatever were more inclined to be risk-sensitive.
>
> **[0:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=50)** The hint, of course, is that it's going to be determined very much by the zone you live in and your zip code.
>
> **[0:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=57)** But we have that.
>
> **[0:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=59)** And in addition, what we're going to be looking at though is some data smoothing.
>
> **[1:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=64)** We'll be going to be looking at things like moving average and applying that to our data in order to get rid of small statistical variations and try to build models.
>
> **[1:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=75)** And then we'll be doing hypothesis tests on the data to check what type of distribution is appropriate for them.
>
> **[1:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=85)** And then later on, we're going to be doing some data fitting as well.
>
> **[1:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=92)** But in addition to all of this, we also want to look at distributions.
>
> **[1:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=99)** Okay.
>
> **[1:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=100)** So if we've got here.
>
> **[1:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=104)** Here we go.
>
> **[1:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=106)** Probability and statistics.
>
> **[1:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=109)** Okay.
>
> **[1:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=110)** So we have, by far and away, the largest number of distributions of any program, even more about three to four times as many as in the program, and all of them have this form, they're like normal distribution, t-distribution, and so on.
>
> **[2:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=129)** Now, one of the other things we're going to be looking at in this is random processes, that is, stochastic processes.
>
> **[2:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=137)** And the reason for this is that you may want to look at a number of stocks together and compare their overall behavior.
>
> **[2:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=148)** So you'll want to do model fitting for that.
>
> **[2:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=151)** And that means that you're going to be looking at some type of process, since financial data is invariably time-stamped, we'll be looking at time series processes.
>
> **[2:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=161)** As you can see from previously, there's a lot of stochastic processes here.
>
> **[2:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=166)** We've got normal parametric ones that is to say, hey, there are well-defined mathematical formulas for them, ones that can be derived from them, various things like the white noise process, which is built into the error for many of the models, and other things such as Markov processes where you've got previous dependents.
>
> **[3:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=187)** The time series processes we'll be looking at will be primarily things like autoregressive integrated moving average and ARCH type, ARCH and GARCH-type processes because we're interested in variance.
>
> **[3:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=201)** So I'll discuss each of these as we meet them.
>
> **[3:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=204)** First of all, I think this is an example I've given beforehand, but just to sort of emphasize how, you know, what the things we're going to be doing and the sort of general structure.
>
> **[3:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=216)** So first, we're going to call in the data.
>
> **[3:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=218)** Then, we'll have to sort of smooth the data to some effect in order to apply models to it.
>
> **[3:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=224)** So we're going to be looking at the FinancialData function.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), this, (1), type, (1), function (1)
> **Env Vars:** arch (2), garch (1)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** find (1)


### 2. Financial Data Function

#### Financial data function
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=1)** And this allows us to access quite a wide range of financial data.
>
> **[0:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=7)** Now, what I'm going to be using here is I just want to get the values themselves.
>
> **[0:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=13)** So normally, now when you call upon the FinancialData function, what happens is that it will return often a time-series object.
>
> **[0:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=25)** And what we want to do in this particular case, however, is just get the raw data.
>
> **[0:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=31)** So I will be using a method here called legacy which just gives us the lists of values.
>
> **[0:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=38)** So we're going to be looking at Starbucks, its closing values.
>
> **[0:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=42)** We're going to be going from the beginning of 2013 up to the beginning of August.
>
> **[0:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=47)** And they're going to be weekly values.
>
> **[0:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=50)** I only want the values here.
>
> **[0:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=52)** And when we evaluate this, we kind of get this set of values.
>
> **[0:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=57)** Now I want to build a model to this.
>
> **[1:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=60)** So basically, I have to induce regularity into my data.
>
> **[1:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=65)** We want to make sure that we're only looking at business days starting at the beginning of 2013.
>
> **[1:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=72)** And I'm going to be rounding them off to the next day.
>
> **[1:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=76)** Then I take that data and I'm going to form a time series object from it.
>
> **[1:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=81)** Starting at, well, this starting date that was given here and then going up to the end here, which is, so it's taking in this data, it automatically looks at the data, finds what the end date is, and then is looking at each next week value.
>
> **[1:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=102)** So what we're going to get now is this time-series object.
>
> **[1:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=106)** So this is really a form of object-oriented programming.
>
> **[1:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=110)** It's a way of storing your time series data.
>
> **[1:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=114)** And also, like most object-oriented forms of programming, I can ask for properties about it.
>
> **[2:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=122)** So I could take this thing here.
>
> **[2:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=125)** Okay. Let's take it here, for instance, and say, you know, "Tell me about yourself.
>
> **[2:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=131)** What type of properties do you have?"
>
> **[2:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=134)** Okay.
>
> **[2:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=134)** And it'll come back and say you can ask these types of queries.
>
> **[2:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=138)** It'll accept these type of functions.
>
> **[2:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=142)** So what does the result of all of this look like?
>
> **[2:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=146)** Let's plot it up.
>
> **[2:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=147)** And you can see everything that I'm doing here is essentially like half a line of code.
>
> **[2:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=152)** Very simple, straightforward.
>
> **[2:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=155)** You think of the function that's going to apply to the data or the previous output, and you just keep piling it on in a consecutive manner.
>
> **[2:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=166)** So I've got my data.
>
> **[2:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=167)** This is what it looks like and we want to now analyze it, try to find out what type of model would fit it.
>
> **[2:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=174)** So once I've got a time series object, I can use the function TimeSeriesModelFit.
>
> **[3:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=181)** Let's have a quick look at it.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), let (3), case, (1), this, (1), this. (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)


### 3. Time Series Model Fit

#### Time series model fit
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=0)** So TimeSeriesModelFit is more or less what it says it is.
>
> **[0:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=4)** It says if you've got some type of data, I'm going to fit a time series model to it.
>
> **[0:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=11)** Now you can specify the model in advance.
>
> **[0:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=14)** There's a shorthand notation for this.
>
> **[0:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=17)** For instance, this would be for an ARMA, Autoregressive Moving Average, or you can let it determine it itself.
>
> **[0:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=26)** In this particular case, it comes back and it's an ARIMA, Autoregressive Integrated Moving Average.
>
> **[0:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=32)** Okay.
>
> **[0:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=33)** So there's only one order of difference that's taking place here.
>
> **[0:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=37)** Now once I've got this estimated process, I can then use it to forecast and I'm going to forecast four weeks ahead.
>
> **[0:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=47)** Remember, our data here is weekly data.
>
> **[0:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=54)** So I can then do that and I get a forecast, which in itself is another TemporalData object.
>
> **[1:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=66)** And then I can join the two together, the time series and the temporal data and see what type of estimation it's giving us.
>
> **[1:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=75)** So here's the previous history and there's the future that it's predicting.
>
> **[1:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=81)** So as you can see, this is a very simple, straightforward process.
>
> **[1:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=85)** Going straight from the data, the actual values themselves, in a few lines, I was able to picture the data, work out what is the underlying process, make a prediction and plot up the two results together.
>
> **[1:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=102)** Now we're going to look at doing tests of data.
>
> **[1:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=106)** So in this particular case, I've, you know, already downloaded the data here for you.
>
> **[1:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=112)** And it's data for throughout 2015 for five companies: Google, Microsoft, Facebook, Apple, and Intel.
>
> **[2:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=123)** Okay. So what does that look like?
>
> **[2:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=127)** Okay.
>
> **[2:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=128)** So you can see that there's a bunching here except for the Google prices up there.
>
> **[2:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=135)** And what I want to do now is look at a really popular theorem or result that if you read in your financial textbooks, it would say that if I looked at the returns or the log returns of a company, that they should be able to be fitted by geometric Brownian motion and should be normally distributed.
>
> **[2:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=161)** So is that the case?
>
> **[2:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=163)** Well, it turns out that it is indeed the case if their volatility isn't too great.
>
> **[2:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=169)** What I've done here is choose, all of these stocks come from the technology industry and they suffer from quite high volatility.
>
> **[2:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=179)** So first let's get our log returns.
>
> **[3:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=181)** Again, you can see, very simple, I just get my prices, I ask for their values.
>
> **[3:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=189)** I take the log and the differences of the logs.
>
> **[3:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=193)** So the differences of the logs of the prices is the log returns.
>
> **[3:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=199)** Okay.
>
> **[3:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=200)** The next thing I want to do, I've suppressed this output.
>
> **[3:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=203)** We don't really want to see this.
>
> **[3:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=205)** It'll just be too long.
>
> **[3:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=207)** Basically, 252 values.
>
> **[3:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=210)** What I want to do then is take that value and then estimate the distribution.
>
> **[3:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=216)** Now remember, we've got five different stocks here.
>
> **[3:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=222)** And we've got their values over a year.
>
> **[3:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=226)** So basically, if you can see here, we've got, these are values that have, as I go at each point in time, I'm going to have an array of values, five different stock values.
>
> **[3:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=239)** So what we want is a multivariate distribution.
>
> **[4:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=243)** Now according to theory, it's probably going to be the multinormal distribution.
>
> **[4:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=248)** Let me just, you know, let's have a look at what this thing is here.
>
> **[4:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=253)** Well, first let's just, what is a multinormal distribution?
>
> **[4:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=259)** So maybe it is what it sounds to be.
>
> **[4:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=260)** It's the multidimensional expression of a normal distribution.
>
> **[4:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=266)** And so you'll have a mean which is a vector, and you'll have the covariance matrix.
>
> **[4:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=272)** So it'll be a mean of length five and a covariance 5 x 5 matrix.
>
> **[4:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=279)** So that's what this means.
>
> **[4:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=281)** And if we have a look at it here, we can take this out here and just look at what this thing is itself.
>
> **[4:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=292)** And we see that this is the mean and this is a 5 x 5 covariance matrix.
>
> **[4:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=299)** Now you'll notice that all these values are unknown.
>
> **[5:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=302)** What I'm going to do is try to estimate them.
>
> **[5:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=306)** And so I put in the log returns, specify the type of multinormal distribution that I want and it will work out the parameters.
>
> **[5:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=315)** And we get this result.
>
> **[5:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=318)** Now the question is, is this a good fit or not?
>
> **[5:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=323)** So what we can do is apply the Kolmogorov-Smirnov test.
>
> **[5:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=327)** So this is one of the many statistical tests that you can apply.
>
> **[5:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=331)** And let's see what it says.
>
> **[5:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=333)** So I just want the short-test conclusion.
>
> **[5:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=335)** Should we reject or accept the fact that this is a good fit?
>
> **[5:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=340)** And it says that not a good fit.
>
> **[5:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=342)** So what would be a good fit?
>
> **[5:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=344)** Let's then look at the multivariate t-distribution.
>
> **[5:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=349)** So this is really an extension.
>
> **[5:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=354)** This is the student t-distribution that we're looking at, but the multivariate version, and it has an additional parameter, mu here which is the number of degrees of freedom.
>
> **[6:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=366)** So I'm going to estimate this now instead.
>
> **[6:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=369)** And so it'll give me the values not only for the mean and for its covariance matrix, but for the number of degrees of freedom.
>
> **[6:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=378)** We can apply the same test.
>
> **[6:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=380)** And it comes back and says, do not reject.
>
> **[6:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=384)** So the point of this exercise is to show that normally you just make the assumption, well, the multivariate normal distribution should work fine, and let's go for it.
>
> **[6:34](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=394)** As it turns out, it doesn't.
>
> **[6:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=396)** Especially when you're constructing portfolios.
>
> **[6:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=400)** So if we took these values, which you can see that Google is really upsetting the whole group here.
>
> **[6:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=405)** The combined effect is that it's no longer can be fitted by multinormal distribution.
>
> **[6:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=412)** Is this important?
>
> **[6:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=413)** Yes, it's very important.
>
> **[6:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=416)** This was a common assumption all the way up to the, the Financial Crisis of 2008.
>
> **[7:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=426)** And the reason was that everyone assumed normality, even out to quite long distances in time.
>
> **[7:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=433)** And so this was an invalid assumption, as it turned out.
>
> **[7:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=436)** So I got to look at the same five stocks again, and I'm going to go in and do some more analysis with further hypothesis tests and also filter the data.
>
> **[7:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=450)** Try to get to the heart of what's going on here.
>
> **[7:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=452)** We know that it is the variance that's causing the problem.
>
> **[7:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=457)** Okay.
>
> **[7:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=457)** So these are the symbols.
>
> **[7:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=459)** This is the prices.
>
> **[7:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=461)** Now what is the... So what I'm doing here is I'm saying this is a table.
>
> **[7:48](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=468)** So it is a list of results.
>
> **[7:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=471)** And I'm looking at each stock from each of the symbols here.
>
> **[7:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=475)** So the first stock is going to be Google, then Microsoft, and so on.
>
> **[7:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=479)** So we've got a list of five sub-lists, where each sub-list is giving us the prices throughout to 2015 for each of these stocks.
>
> **[8:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=493)** What is the dimension of this thing?
>
> **[8:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=496)** Okay.
>
> **[8:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=496)** There are five stocks.
>
> **[8:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=499)** Over a year, 252 business days.
>
> **[8:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=502)** And the 2, what is this 2 referring to?
>
> **[8:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=505)** Well, I'm getting both the dates and the prices.
>
> **[8:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=509)** So if I take a particular one, this says here, let's look at the prices, let's look at the fifth one, which is for Intel, and let's look at the third date value.
>
> **[8:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=520)** Here it is.
>
> **[8:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=521)** So you can see, everything here is a pair, a date and a value.
>
> **[8:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=526)** So when I now go into the prices here and I'm saying let's look at all the different stocks and let's look at all of the pairs, but I'm only going to take the second element in each pair.
>
> **[8:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=538)** All right.
>
> **[8:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=539)** The second element.
>
> **[9:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=540)** So I'm just looking at the values here.
>
> **[9:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=542)** And again I'm going to get the log returns in the same way.
>
> **[9:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=545)** I'm going to be taking the differences of the logs.
>
> **[9:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=548)** But the differences now have to be a little more subtle because we're not just looking at single values as we were beforehand, we're looking at a very large matrix of pairs.
>
> **[9:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=560)** So I'm looking at a matrix and therefore the differences are going to be here.
>
> **[9:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=566)** I'm looking at the differences in the columns.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), this. (2), case, (2)
> **Definitions:** is a  (9)
> **CLI Commands:** make (2)
> **Env Vars:** arma (1), arima (1)
> **Analogies:** for instance (1), picture (1)


### 4. Differences

#### Differences
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=0)** If we go and look at the differences function, it allows us to look at a sequence of differences as we go down further into the data.
>
> **[0:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=12)** So if we've got two-dimensional data here, then looking at differences {0, 1} finds the differences between the columns, that is, the differences in the values.
>
> **[0:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=26)** And we can now look at that log returns.
>
> **[0:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=29)** We'll see we've got for five stocks.
>
> **[0:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=31)** And because we've taken differences, it's 252-1.
>
> **[0:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=35)** Now what I want to do at the next stage is just slightly complex.
>
> **[0:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=41)** What I want to do basically here is a bit of smoothing.
>
> **[0:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=47)** And the first notion should be what's the cause of the problem here?
>
> **[0:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=51)** The cause of the problem is the high volatilities and the range in volatilities.
>
> **[0:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=59)** Now there is a stochastic process that allows us to look at this.
>
> **[1:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=62)** There's the ARCH and the GARCH processes.
>
> **[1:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=65)** In particular, if we look at the ARCH process, this is the autoregressive conditionally heteroscedastic process.
>
> **[1:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=76)** Okay, so a big mouthful.
>
> **[1:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=78)** The main point here is it's conditional.
>
> **[1:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=81)** It's a conditional expectation, given the previous values in the sequence of values of the series that we're looking at.
>
> **[1:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=90)** So this is essentially the variance in which we've got a common factor and then weights, so parameters associated with the previous values as we travel backwards in time.
>
> **[1:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=105)** So I want to extract these values.
>
> **[1:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=109)** Okay.
>
> **[1:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=110)** So I'm saying, let's again set up a table.
>
> **[1:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=114)** And what I'm going to do is look at the log returns for each of the five stocks.
>
> **[2:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=121)** And for each of those now I'm going to find the process parameters, assuming that it's an ARCH process.
>
> **[2:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=130)** So what's this find process parameters.
>
> **[2:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=133)** It is what it sounds like.
>
> **[2:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=134)** It says, assuming I've got this model, let's look at the data, and let's find the underlying process.
>
> **[2:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=143)** Now when it does this, it returns a rule.
>
> **[2:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=146)** It says, for that process parameter, lambda, it's going to be replaced by, if you replace it by 0.7, you will get the appropriate parameter value.
>
> **[2:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=158)** So this is a rule here.
>
> **[2:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=160)** And what I do next is I say, okay, what I'm going to do is wherever I see this rule, I'm going to substitute it in.
>
> **[2:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=170)** Those values for kappa and alpha.
>
> **[2:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=175)** Okay.
>
> **[2:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=176)** And I'm going to assign them to k1 and α1.
>
> **[3:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=182)** So for each log return for each of the stocks, I'm going to get a fit according to the ARCH process, or rather a fit for the variance.
>
> **[3:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=193)** Now this allows me to take the prices.
>
> **[3:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=196)** So this is what's called a pure function or a lambda function.
>
> **[3:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=200)** For those of you who have done Haskell or computer science, you would know all about this, of course.
>
> **[3:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=207)** Okay, so this is essentially a pure function.
>
> **[3:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=212)** And what the pure function is doing is saying let's look at the last values.
>
> **[3:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=216)** Remember, everything was in pairs.
>
> **[3:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=218)** So those are the prices.
>
> **[3:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=219)** And then I'm going to standardize them.
>
> **[3:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=222)** So what exactly am I doing here?
>
> **[3:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=224)** I'm taking this kappa and alpha by the square of the values.
>
> **[3:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=230)** Okay.
>
> **[3:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=232)** So remember, this is, essentially it's saying this is the variance.
>
> **[3:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=239)** And then I'm taking the square root of it, which is the standard deviation.
>
> **[4:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=243)** So all I'm doing is standardizing everything here by dividing by the standard deviation.
>
> **[4:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=250)** Then I smooth it by applying a moving map.
>
> **[4:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=254)** The moving map here essentially says let's join the prices together.
>
> **[4:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=263)** So if I've got a window of length 2, it really is three events.
>
> **[4:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=268)** So I'm joining together everything in triples.
>
> **[4:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=271)** So the combination of these two should remove any peculiarity as a result of the change in the variance, not only the size of the variance, but also as I move from one stock to another.
>
> **[4:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=286)** And then because I'm doing this, what I want to do at the moment, remember, is I've got a 5 x 21 process here.
>
> **[4:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=297)** I want to take the transpose of it.
>
> **[5:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=300)** So I've got 251 points, with a five-dimensional value associated with each of them.
>
> **[5:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=313)** Okay.
>
> **[5:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=313)** Sorry.
>
> **[5:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=314)** Now because I've got differences of order 2, it's 249 x 5.
>
> **[5:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=319)** So I can now plot this stuff.
>
> **[5:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=322)** Again, I'm going to transpose it back.
>
> **[5:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=324)** So I'm now looking at each of the stocks as I, again, I'm going to be doing this function called MapThread.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (5), this, (3), lambda (2), this. (1)
> **Env Vars:** arch (4), garch (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Versions:** 0.7 (1)
> **Tools:** notion (1)
> **Prerequisites:** set up (1)


### 5. MapThread

#### MapThread
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=0)** So remember here, what we're doing is that we've got matrices and lists of things.
>
> **[0:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=7)** When you want to apply a function individually over a lists of sub-lists, and you just want to say, so I've got a group of sub-lists.
>
> **[0:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=20)** In the first sub-list, they're all a values, in the second sub-list, they're all b values.
>
> **[0:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=25)** And what I would like to do is take the function and apply them to the corresponding elements in each sublist.
>
> **[0:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=31)** So I'm going to have f of the first elements in each of them, a1 and b1, and then f of the second elements, and so on.
>
> **[0:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=39)** So it's a way of applying a function down and then joining the elements together.
>
> **[0:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=45)** So you're doing two operations; you're mapping and threading and hence the name.
>
> **[0:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=50)** And that's what we're doing here.
>
> **[0:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=52)** Because remember this is a list of sub-lists.
>
> **[0:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=54)** And I'm doing it for each of the stocks.
>
> **[0:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=57)** So what I want to do is look at the quantile plot for each of the stocks.
>
> **[1:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=64)** Okay.
>
> **[1:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=65)** And I'm going to label it with the names of each of the symbols.
>
> **[1:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=70)** Now why do I want to do that?
>
> **[1:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=72)** The quantile plot, remember, is really to look at data to make sure that it has the same distribution as a normal distribution.
>
> **[1:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=81)** I could further specify this to change that.
>
> **[1:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=84)** But really we're looking at to what extent is it the case that each of them separately satisfies a normal distribution?
>
> **[1:34](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=94)** Well, you can see around the central values it does, but in extreme values it doesn't.
>
> **[1:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=101)** And again this goes back to the whole point about what happened during the financial crisis.
>
> **[1:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=107)** We had options which assumed normality.
>
> **[1:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=112)** So because that happened, they thought that the probability of these events occurring was out at 5 sigma or something like that.
>
> **[1:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=119)** And in fact, it was much more common.
>
> **[2:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=123)** And so what was supposed to be one in the century event was going to happen every decade, and it'll happen again if we don't regulate these industries.
>
> **[2:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=137)** So we can see here that Intel actually seems to fit a normal distribution, but the rest don't.
>
> **[2:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=144)** And then we can check this. Putting the data in and just check using the BaringhausMenzeTest, if I pronounce that correctly, and see what the value is, and it comes back with one of these object-oriented things, which I can then make queries to.
>
> **[2:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=166)** And the first query is, let's look at the results of this test.
>
> **[2:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=170)** And it has a p-value of zero.
>
> **[2:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=173)** In other words, you can reject this.
>
> **[2:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=176)** So for each of these, it's saying a normal, well, really, for most of them together, the exception of Intel, they don't satisfy that.
>
> **[3:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=186)** And so let's now estimate for each of these stocks the distribution whether it's multinormal or multivariate t-distribution.
>
> **[3:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=200)** Okay.
>
> **[3:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=201)** And now we can ask about, you know, the key information criteria for each of these two distributions.
>
> **[3:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=212)** Okay.
>
> **[3:34](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=214)** So here's the definition.
>
> **[3:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=216)** We also have this built-in, by the way, for all types of statistical tests.
>
> **[3:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=223)** But just again, you know, here is the distribution, here is the formula for it, depending upon the distribution you use and the data and the number of parameters, k.
>
> **[3:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=232)** All right.
>
> **[3:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=234)** So what I'm using here is I'm putting in the data and the distributions.
>
> **[3:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=238)** And you might ask, why have I got 5 + 15 and 5 + 15 + 1.
>
> **[4:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=244)** All right.
>
> **[4:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=245)** If we go to the multinormal distribution, there's five values in its vector mean.
>
> **[4:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=252)** And there's going to be 15 distinct values in its covariance matrix.
>
> **[4:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=258)** Why 15?
>
> **[4:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=259)** Well, it's a 5 x 5, shouldn't that be 25 values?
>
> **[4:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=263)** No. Because it's a covariance matrix, it's symmetric.
>
> **[4:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=267)** So that means that the values in the ij position will be the same as the values in the ji position.
>
> **[4:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=275)** So consequently, I'm only adding the first five and then the second four, and then the last three and two and one.
>
> **[4:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=283)** And if I add up the sum of the first five values, I get 15.
>
> **[4:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=289)** So there's 20 values for the multinormal and an extra one for the degree of freedom.
>
> **[4:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=296)** And we can now see what we get for these.
>
> **[5:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=300)** And you can see that the AIC for the multivariate t-distribution is significantly smaller than the other one.
>
> **[5:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=311)** And that's why we should go with that for the distribution.
>
> **[5:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=315)** Now, another interesting thing is that you would think, well, at least for index returns, okay, they, almost by definition, because they're set up in such a way as to assure a high degree of regularity, they should satisfy their normal distribution, are there other distributions that they might satisfy?

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), this. (2), let (2)
> **Definitions:** is a  (1), in other words (1), means that (1)
> **CLI Commands:** make (2)
> **Env Vars:** aic (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)


### 6. Hyperbolic Distribution

#### Hyperbolic distribution
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=0)** Well, we have a very general distribution called the hyperbolic distribution.
>
> **[0:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=7)** Okay.
>
> **[0:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=8)** And as you can see here, it has four parameters: A location parameter, a scale parameter, the shape, and the degree of skewness.
>
> **[0:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=20)** Things like shape and skewness are fixed for a normal distribution, but if you allow them to vary, then you get a wider range of distributional aspects.
>
> **[0:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=35)** Now we know a lot about this.
>
> **[0:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=37)** We know a lot about all of these things because they are defined exactly inside Mathematica.
>
> **[0:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=42)** This is quite different because we're both a symbolic as well as a numeric program.
>
> **[0:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=47)** Then we can write in the actual mathematical formulas for this.
>
> **[0:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=51)** This is quite distinct from numeric programs like R and MATLAB, and the rest.
>
> **[0:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=56)** What they use instead is some type of Maclaurin approximation to the, around the mean.
>
> **[1:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=65)** And this is not very accurate.
>
> **[1:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=68)** After you go out, you know, away from central values, the errors are going to get quite large.
>
> **[1:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=75)** But we can calculate this precisely to any degree of accuracy.
>
> **[1:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=81)** And in fact, we know everything about it.
>
> **[1:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=83)** So for instance, I can find the formula for the moment generating function.
>
> **[1:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=88)** You can see it. So it's an exponential formula taking into account all of the parameters.
>
> **[1:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=99)** Okay.
>
> **[1:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=100)** So let's now look at the same approaches beforehand.
>
> **[1:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=105)** I'm going to be getting the data for the index, the S&P 500, closing prices since 2005.
>
> **[1:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=114)** And again, I'm going to take the differences of the log.
>
> **[1:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=118)** So it's a log.
>
> **[2:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=120)** First, I get this thing which is just a list of values, and then take the differences of log to get the log returns.
>
> **[2:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=127)** And I can then say, well, let's fit this to the the normal inverse Gaussian function.
>
> **[2:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=136)** The reason for us more or less taking the normal inverse Gaussian function, as opposed to just the Gaussian or normal distribution, is it allows a better fitting for different values of shape and skewness and the rest, but it also takes into account a wider domain of values.
>
> **[2:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=164)** So, you know, basically you're not restricted to, you know, you can actually look at quite a range of real values as opposed to, say, fractional or rational values here.
>
> **[2:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=177)** So I can do the fit here and find the estimated distribution here.
>
> **[3:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=184)** So we can then find all of the parameters.
>
> **[3:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=188)** And in fact, let's actually get... So as I said beforehand, I can get the moment generating-function, I can also get the probability density function for this distribution.
>
> **[3:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=201)** And I can take the data and stick it into a histogram and plot the PDF of the distribution and compare the two.
>
> **[3:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=210)** Put them in the same plot.
>
> **[3:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=213)** And you see it's a very good fit for the data.
>
> **[3:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=217)** So you can see that the NRG distribution is an even better fit than the normal distribution for index data.
>
> **[3:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=227)** And a similar type of result now.
>
> **[3:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=232)** So what I want to do if I do have, say, tech stocks like Apple, and another approach here is to look at, say, the variance-gamma distribution.
>
> **[4:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=245)** So there were a number of papers, particularly in the beginning of the 21st century, that looked at this as a big and so I think it was his name, Dess.
>
> **[4:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=256)** That's a very famous Indian financial mathematician, you know, showed quite strongly that how the variance-gamma distribution is a good fit.
>
> **[4:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=267)** It's also a good reason to have something like this because we know so much about it.
>
> **[4:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=273)** We've got a mathematical formula for it, and we know all of the characters, you know, all of the values for it and how to calculate it quite precisely.
>
> **[4:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=284)** It also allows us to fit for, so it mentions Madon and others here.
>
> **[4:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=292)** So the variance-gamma distribution is basically what it's saying here.
>
> **[4:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=298)** It takes into account second-order differences in a way that other distributions don't.
>
> **[5:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=304)** You know, you can also apply a lot of other mathematical tricks to it, which is good if you then want to use it as a basis for option pricing.
>
> **[5:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=315)** Okay.
>
> **[5:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=316)** So same thing again.
>
> **[5:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=317)** Let's get the data over a decade here.
>
> **[5:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=323)** So we've got quite a lot of data, okay, 2,514 points.
>
> **[5:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=329)** And I now want to fit that data to a variance-gamma distribution.
>
> **[5:34](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=334)** You can specify when you're doing your estimated distributions, how you'd like the parameter fitting to be done here.
>
> **[5:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=342)** Okay.
>
> **[5:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=343)** So you've got a parameter estimator.
>
> **[5:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=346)** It'll generally use the maximum likelihood function.
>
> **[5:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=349)** But you can apply others such as the method of moments.
>
> **[5:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=353)** Okay.
>
> **[5:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=354)** In fact, there are five different ways you can go about doing this.
>
> **[5:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=357)** Mathematically speaking, they're almost identical, but numerically speaking, of course, they're quite different.
>
> **[6:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=367)** So, well, I can we look at this now and so I get an estimate of the values.
>
> **[6:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=374)** And I can do the same trick as beforehand.
>
> **[6:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=377)** Do the PDF of this estimated distribution with the PDF histogram.
>
> **[6:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=382)** And what do we get?
>
> **[6:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=383)** Okay.
>
> **[6:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=383)** So for this, as I said, the variance-gamma distribution is those that have extreme peaks around the median.
>
> **[6:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=393)** We can find other aspects of it, though, that fit in precisely with the observed values in terms of the mean and the median.
>
> **[6:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=404)** And finally, we can show, looking at this distribution, here is a list of 100 of the random values for the estimated
>
> **[6:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=419)** distribution.
>
> **[7:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=420)** So here what I'm doing, however, is I'm generating first an ARMA[3,2] process.
>
> **[7:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=427)** So this is autoregressive moving average.
>
> **[7:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=430)** Let's again look at this just in case you've forgotten what one of these things look like, okay?
>
> **[7:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=437)** So this is a very common type of process.
>
> **[7:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=441)** Basically, it says that your current value is going to depend upon your previous values with coefficients, the a coefficients here, and is going to also depend upon the, the noise, okay?
>
> **[7:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=460)** The noise itself will build up over time.
>
> **[7:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=463)** Why is this the case?
>
> **[7:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=465)** This is the case primarily, though, when these models, these are called the box Jenkins models were first derived and understood, it wasn't realized that they were reflecting an even deeper thing, which is chaos theory or a sort of you have got as a result of Ito processes, that the errors that are left over don't disappear, they come back into the stochastic process and more or less build up over time.
>
> **[8:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=495)** So we have to take into account the errors in the previous time and their coefficients.
>
> **[8:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=501)** And that's what an ARMA process does.
>
> **[8:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=504)** So I'm going to generate some random data for that, okay?
>
> **[8:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=508)** And again it'll be one of these TemporalData objects.
>
> **[8:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=513)** Now I'm going to fit.
>
> **[8:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=515)** I won't even tell it that it's an ARMA process and let's see what it comes up with.
>
> **[8:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=520)** And it says yes, it's an ARMA[3,2] process. And I can ask queries about this here.
>
> **[8:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=527)** You know, what was the criterion for selection of this?
>
> **[8:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=530)** It used the AIC criteria that I mentioned previously.
>
> **[8:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=536)** Okay.
>
> **[8:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=536)** Now, remember, once I've got my time series model, I can ask for it to do a forecast.
>
> **[9:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=543)** In this case, let's go 100 days into the future.
>
> **[9:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=548)** Okay.
>
> **[9:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=549)** And again, it's going to come back as one of these TemporalData objects.
>
> **[9:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=555)** Now, what I'd like to do is then visually look at how this prediction is working over time.
>
> **[9:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=563)** To get an idea for that, I should look at, take the forecast and ask for its mean square errors.
>
> **[9:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=571)** Okay.
>
> **[9:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=572)** So this is essentially it's standard deviation, standard errors.
>
> **[9:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=577)** Now, since they squared it's really the variance.
>
> **[9:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=582)** And so basically, because this is a list of values, I want to map this function onto it so I now get the square root of the underlying process as we move forward in time, okay?
>
> **[9:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=598)** So remember this is a TemporalData object.
>
> **[10:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=601)** I can apply this map function onto each of the elements, so long as it's a time series map.
>
> **[10:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=608)** So it's preserving the structure of the forecast.
>
> **[10:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=612)** So I'm going to get another TemporalData object.
>
> **[10:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=617)** But these are the standard deviations or standard errors, to be precise.
>
> **[10:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=623)** And what I'm going to do now is join them to the forecast.
>
> **[10:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=630)** So there's two ways I can do this: I can take the values for the forecast and add the errors, this is really the dot product of each of them and adding them together or I can subtract them, dot product where the second element which corresponds to the standard errors is being subtracted.
>
> **[10:48](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=648)** So these will give us two bands, okay?
>
> **[10:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=652)** These bands are the error bands in our model.
>
> **[10:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=656)** So now I can join together... I'm going to have a time series window in which I put the data, and the forecast, and their bands, and this is also, you know, just a bit of making it look pretty and the rest. This is the main part of it.
>
> **[11:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=674)** Let's take the data.
>
> **[11:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=676)** I'm going to choose a window over basically the same period of time as the forecast and the errors.
>
> **[11:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=682)** Remember, the forecast is only over the last, you know, 100 or so.
>
> **[11:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=689)** So if I take from the 800th to the 1000th, I'm going to be looking at 100 values before the forecast and the 100 values up unto it.
>
> **[11:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=698)** And we can then... So this is its behavior, this is its prediction, and these are the error bands.
>
> **[11:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=707)** All right.
>
> **[11:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=711)** The next thing I want to look at, we've got just a couple more is looking at the ARCH process.
>
> **[12:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=720)** So this is going back again to something very similar we were talking about beforehand, the autoregressive conditional heteroscedastic process, because it's related to the variance and an estimation of the variance.
>
> **[12:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=733)** So I'm going to be looking at the returns.
>
> **[12:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=736)** And I've also just put the data here.
>
> **[12:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=739)** There's a lot of data here.
>
> **[12:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=740)** And this is what it looks like because we're looking at returns not actual prices.
>
> **[12:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=748)** And what I want to do here is break it up into two parts, okay?
>
> **[12:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=753)** I want to build a model from the first part and then use it to predict values for the second part, somewhat like what we do with machine learning.
>
> **[12:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=763)** So I'm going to go from the starting point up to the end of 2011.
>
> **[12:48](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=768)** And then from 2012 up to, you know, the beginning of 2014.
>
> **[12:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=779)** So now what I do is I take the first one and let's just, both of these remember.
>
> **[13:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=786)** So time series window is saying, well, let's take a subset of the data but return it if it's a time-series object, return it as another time-series object.
>
> **[13:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=802)** So it allows us, you know, to basically just choose subsections of the data.
>
> **[13:27](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=807)** Now remember, once I've got it in this form, I can apply the time series model fit.
>
> **[13:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=813)** Say let's fit an ARCH process.
>
> **[13:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=817)** Okay.
>
> **[13:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=818)** And here it is.
>
> **[13:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=819)** It's going to be a second-order ARCH process.
>
> **[13:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=822)** And in fact, what does it look like?
>
> **[13:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=824)** Here's the best-fit model.
>
> **[13:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=826)** It has a constant and two parameters.
>
> **[13:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=832)** So it's a second-order process.
>
> **[13:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=834)** And I want to separate out these parameters.
>
> **[13:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=838)** So I assign them. Basically, I rip off this bit here says let's rip off the head of this thing and just return it as the constant and the two ARCH parameters.
>
> **[14:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=854)** Now I want to find the conditional value at risk.
>
> **[14:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=858)** Just for the second part of the time series with a significance level of 95 percent.
>
> **[14:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=864)** So let's set α = 0.05.
>
> **[14:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=868)** And what I'm going to be doing now is getting a quantile measure of 95 percent, 1-α, for the standard normal distribution.
>
> **[14:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=881)** Remember that your VaR is actually a measure of the extent to which
>
> **[14:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=889)** you go, you know, exceed the quantile.
>
> **[14:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=893)** So what I'm going to be doing is then taking a pure function that is the product of, because this is the conditional value at risk, then I'm going to be using the conditional standard deviation, okay, obtain from the ARCH process.
>
> **[15:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=913)** So the ARCH process, remember, is given by these two constants.
>
> **[15:17](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=917)** And what I'm doing here is multiplying by the square of the values in the last half of the data.
>
> **[15:31](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=931)** But this would be the variance.
>
> **[15:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=935)** And I want the standard deviation.
>
> **[15:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=936)** So I take the square root of it multiplied by the quantile because it's a VaR that we're assessing here.
>
> **[15:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=944)** So you can see that the conditional VaR is just the product of the two.
>
> **[15:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=949)** And then I'm applying a moving map to the data here.
>
> **[15:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=953)** So I'm also smoothing it out over every pair of values.
>
> **[15:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=959)** Okay.
>
> **[16:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=960)** And so we get again, remember this was a time series object and applying a moving map to it will return another time series object.
>
> **[16:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=970)** And then, I can compare and see how well it works, okay?
>
> **[16:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=975)** So basically, I'm going to be looking at the last bunch of returns and their corresponding conditional VaR.
>
> **[16:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=983)** And this gives us the result.
>
> **[16:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=986)** So basically, this is just taking the last two values, putting them into a date-list plot and then doing, you know, basically, the same type of plot thing that I had beforehand to just make it look sort of pretty.
>
> **[16:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1001)** But this is just a bit of visualization and, you know, that would be a separate issue unto itself if I were to cover it.
>
> **[16:50](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1010)** Okay.
>
> **[16:53](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1013)** So then we've got, again, I'm going to do a time series fit.
>
> **[16:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1019)** And again it's going to be for pairs of values.
>
> **[17:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1023)** So I've got two exchange rates here; the euro to the US D and the British pound to the USD.
>
> **[17:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1029)** And here's the data.
>
> **[17:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1030)** What does it look like?
>
> **[17:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1034)** Now, because these are already time series, I can try to estimate the process using an ARMA[1,1].
>
> **[17:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1045)** Okay.
>
> **[17:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1045)** So remember, this ARMA[1,1] is going to have, well, I guess, is going to have one autoregressive and one moving average parameter.
>
> **[17:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1061)** So we're basically saying, you know, what I'm looking at here is I'm only going to go back.
>
> **[17:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1067)** So the current value is only going to be dependent upon each previous value, so it's a strict Markov process but plus the error.
>
> **[17:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1078)** So I can evaluate that.
>
> **[18:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1083)** Now you'll notice it looks a bit confusing at first.
>
> **[18:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1086)** Let's separate it out.
>
> **[18:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1088)** This is a vector ARMA model.
>
> **[18:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1092)** In other words, because I'm looking at two values together, then it's trying to really talk about two processes simultaneously.
>
> **[18:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1102)** So they will have two constants.
>
> **[18:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1105)** Okay.
>
> **[18:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1106)** You're going to have a constant in your process.
>
> **[18:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1108)** And then I'm going to have a vector value.
>
> **[18:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1113)** Rather, a matrix, a 2 x 2 matrix for the, corresponding to the autoregressive component.
>
> **[18:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1125)** So here's the matrix for the autoregressive component, and here's the corresponding matrix coefficient for the error component.
>
> **[18:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1136)** Now you might say, why a matrix?
>
> **[19:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1140)** Because the dot product of a vector with a matrix gives us another vector.
>
> **[19:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1144)** And this is the two-dimensional vector which represents both of these two exchange rates. And then the rest is, if you've got a process, it's going to have some variance.
>
> **[19:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1160)** So I've got that.
>
> **[19:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1162)** Then once I've got the estimated process, I can use it in conjunction with the dates to do a forecast.
>
> **[19:28](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1168)** And I'm going to go 26.
>
> **[19:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1170)** So, you know, basically a half a year into the future, which is really a bit excessive.
>
> **[19:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1176)** But at any rate, we've got this TemporalData object, so I've got my original rates.
>
> **[19:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1185)** And what I'm doing is looking at its two-path components for each of the two processes.
>
> **[19:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1191)** And putting the lot together gives us this.
>
> **[19:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1194)** And at the end, you can see the predictions, which is sort of downwards slopes at that time.
>
> **[20:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1200)** The next two are a bit technical.
>
> **[20:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1208)** If you're evaluating everything as this goes along, remove the alpha.
>
> **[20:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1213)** Remember, we use the alpha repeatedly in various types of model process estimation.
>
> **[20:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1224)** So and it occurs here.
>
> **[20:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1226)** Yes, α0.
>
> **[20:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1229)** So what I'm doing is getting a model for the evolution of interest rates, okay?
>
> **[20:34](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1234)** So we've got an Ito process.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), function (9), this. (4), var (4), for, (1)
> **Env Vars:** arma (7), arch (6), pdf (3), matlab (1), nrg (1)
> **Definitions:** is a  (6), is an  (1), in other words (1)
> **CLI Commands:** find (5), make (1)
> **Analogies:** for instance (1), such as (1)
> **Versions:** 0.05 (1)


### 7. Ito Process

#### Ito process
> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=1)** Now these are stochastic processes.
>
> **[0:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=5)** Stochastic processes or the stochastic calculus is an extension of normal calculus.
>
> **[0:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=11)** So for those of you who didn't do lots of maths, you most probably thought that was terrible enough.
>
> **[0:16](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=16)** But now there's this, which is an extension.
>
> **[0:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=19)** So this part you will recognize.
>
> **[0:22](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=22)** Okay.
>
> **[0:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=23)** It says this gives us how the process is changing with respect to time.
>
> **[0:29](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=29)** But remember, it has noise or error and this noise or error doesn't disappear.
>
> **[0:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=35)** This is one of the understandings of Chaos Theory.
>
> **[0:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=38)** It is folded back into the process as it evolves.
>
> **[0:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=43)** In a way, we already knew this when we studied partial differential equations.
>
> **[0:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=47)** One of the methods for solving a partial differential equation, and in the same way a stochastic differential equation is to build a frame, to build a mesh, and the whole thing expands out like, you know, a crisscrossed triangle as you move through time.
>
> **[1:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=67)** So you need a component which grows with the noise, okay?
>
> **[1:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=72)** So this is the differential of the underlying Brownian process which is driving the whole thing.
>
> **[1:18](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=78)** It's called the driving process.
>
> **[1:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=80)** And this its coefficient is called it's diffusion.
>
> **[1:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=83)** And it really, again, derives from the original solution to these problems which are like basically diffusion equations.
>
> **[1:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=93)** Not all of them, but in many ways they have many characteristics in common.
>
> **[1:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=98)** Okay. So there are many ways of representing this.
>
> **[1:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=102)** What we're going to use is this approach.
>
> **[1:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=104)** I'm going to write the stochastic differential equations.
>
> **[1:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=107)** The expression we want to solve for, what are the underlying variables, time, it's time-dependent, and what is the driving process.
>
> **[1:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=117)** So let's go and have a look.
>
> **[2:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=120)** So this is a multivariate process with lots of parameters.
>
> **[2:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=124)** And then these things here are the initial values.
>
> **[2:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=128)** So we've got the differential equation for the process itself.
>
> **[2:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=131)** And you can see its mean reverting.
>
> **[2:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=134)** You can see that the rate of change of the process, alpha, is also mean reverting with a mean.
>
> **[2:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=140)** So these are the means theta, psi, and beta.
>
> **[2:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=144)** Okay.
>
> **[2:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=145)** So again, this is the process that we're trying to describe with this, the interest rate.
>
> **[2:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=150)** And now this bit here really it corresponds to this, is saying what is the underlying process here.
>
> **[2:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=156)** Well, there's three, there's the interest rate, there's the rate of change, alpha, and there's the volatility, sigma.
>
> **[2:45](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=165)** And I give them initial values as well.
>
> **[2:48](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=168)** Time.
>
> **[2:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=169)** All of this is a function of time, as you can see here.
>
> **[2:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=175)** And the driving process is the same throughout.
>
> **[2:58](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=178)** This is the reason it can be solved.
>
> **[3:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=180)** They're not separate.
>
> **[3:02](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=182)** They are, you know, you can have extended versions of this as well.
>
> **[3:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=187)** Okay. So let's take one of these, you know, a special case of this model.
>
> **[3:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=192)** Let's generate a random function for this.
>
> **[3:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=195)** So it's going to simulate this.
>
> **[3:19](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=199)** And it's going to do this as the time goes from 0 to 1 in increments of 100.
>
> **[3:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=206)** So there are 101 values here, and we'll do it for six different processes.
>
> **[3:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=213)** And the method that we're going to use here, there's a lot of different methods that you can use for the solution of the Ito processes, and we list them here, you know, so we've got stochastic Runge-Kutta. For those of you who've done PDEs, the Runge-Kutta method.
>
> **[3:48](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=228)** So this is an extension of this.
>
> **[3:51](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=231)** And a projection function.
>
> **[3:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=234)** And this is, you know, you can play around with this.
>
> **[4:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=240)** I better make sure I've cleared that.
>
> **[4:04](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=244)** Let's evaluate this and let's do this.
>
> **[4:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=249)** And you know, as I do it, I get different values each time.
>
> **[4:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=254)** I could fix, putting here a seed so that I get the same values as I, you know, if I wanted to compare them.
>
> **[4:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=264)** So a zero coupon bond.
>
> **[4:26](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=266)** Now once you've got interest rates, remember that the formula for your interest rate was e^-rt.
>
> **[4:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=272)** Okay.
>
> **[4:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=272)** So the process here is, dxt is rtdt.
>
> **[4:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=278)** So this is the value for your, this is the differential equation describing your bond.
>
> **[4:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=283)** This is the actual value of the bond that we want to evaluate.
>
> **[4:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=287)** So it's a function of x which is a function of r, but it's a stochastic process.
>
> **[4:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=295)** x is initially going to be zero, it's a function of time, and the r now is going to be driven by this, you know, Chen's model.
>
> **[5:05](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=305)** And so you can actually, you know, it looks like this.
>
> **[5:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=311)** I can now feed this in with the parameters going up in increments of 0.02, and I'm going to generate 250 examples here.
>
> **[5:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=323)** And the reason I'm doing all of this, so there's a lot of work here, so I want to find out what would be the value of the process at time t. If I've got 250 of these things, imagine, you know, imagine I had, you know, oh God, imagine I had 20 of them?
>
> **[5:43](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=343)** All right.
>
> **[5:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=344)** Now, as I take a cut through this process here, at any one time, there's going to be, in this case 20, in this case 250 values.
>
> **[5:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=355)** So I want the average value at this time.
>
> **[5:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=359)** Now td is a random process. At a particular moment in time, it's a distribution.
>
> **[6:06](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=366)** So that's why it makes sense to ask for the average of that value.
>
> **[6:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=370)** And this is what it looks like.
>
> **[6:12](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=372)** This is how it's behaving.
>
> **[6:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=375)** But you can model option prices using jump diffusions.
>
> **[6:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=381)** So again, so here's the Merton model.
>
> **[6:24](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=384)** I don't want to go into describing all of this, but it involves a jump process which is the compound Poisson process.
>
> **[6:33](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=393)** I'm going to have an error process which is the Wiener process.
>
> **[6:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=397)** I'm going to have the volatility here.
>
> **[6:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=400)** And you'll notice that the compound process has an arrival rate, lambda, and the underlying distribution is a normal distribution with mean, mu, and variance, not variance, but standard deviation, delta.
>
> **[6:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=417)** And the whole thing is going to be a function of time.
>
> **[7:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=421)** So what it's saying is I've got this process here and I'm going to transform it.
>
> **[7:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=427)** So this is an extremely powerful function that allows you to feed in stochastic processes and find the corresponding process that's transformed, okay, as a result of applying a particular thing here.
>
> **[7:25](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=445)** So for instance, I could have b as a normal Wiener process, but tb(2t+1) is going to be some other type of process altogether.
>
> **[7:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=456)** So in the same way, it doesn't make any sense to look at this because there's no name for these things.
>
> **[7:41](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=461)** Okay.
>
> **[7:42](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=462)** We've just invented it.
>
> **[7:44](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=464)** But I can, once I've got this, I can substitute in, this is what, substitute in the values for the parameters and generate five of these.
>
> **[7:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=474)** So this will be the data, and this is what it looks like.
>
> **[7:57](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=477)** And then I can take slices which, remember, slices really give me, at a particular moment in time, this gives me a distribution.
>
> **[8:10](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=490)** So I can ask for the mean and the variance of this.
>
> **[8:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=494)** The idea, of course, is to sample this, say, at time t = 1.
>
> **[8:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=500)** Let's look at the smooth distribution there.
>
> **[8:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=503)** Again, let's look at this and map it up as it changes through time.
>
> **[8:30](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=510)** All right.
>
> **[8:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=512)** So I hope this, this is just merely an introduction.
>
> **[8:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=517)** As you can see, there's a lot more.
>
> **[8:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=519)** And I concentrated on a number of things, basically, how to get the data, how to smooth the data, how to actually put it, you know, either into a form where we have a time series object that I can then use to do predictions, forecasts with, I can do smoothing using a moving map, and then the introduction of, even the solution of stochastic differential equations that take into account how the noise folds back on itself as you move forward in time.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (9), this. (8), function (8), let (7), for, (1)
> **Definitions:** is a  (5), is an  (3), is called (1)
> **CLI Commands:** make (2), find (2)
> **Analogies:** imagine (3), for instance (1)
> **Versions:** 0.02 (1)


## Path Context

### In [[Build Your Wolfram Language Skills]]
← [[Wavelet Analysis- Applications with Wolfram Language]] | **5 of 8** | [[Interacting with Blockchains in the Wolfram Language]] →

## Appears In

- [[Build Your Wolfram Language Skills]]

## Related Courses

_Courses sharing skills:_

- [[Financial Modeling Foundations (2018)]] — Financial Modeling
- [[Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training]] — Financial Modeling
- [[Advanced Python in Excel for Finance- A Hands-On Approach]] — Financial Modeling
- [[Financial Modeling and Forecasting Financial Statements (2019)]] — Financial Modeling
- [[Building Blocks for Deep Learning in the Wolfram Language]] — Wolfram Language
