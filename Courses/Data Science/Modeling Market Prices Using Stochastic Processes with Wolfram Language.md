---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
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
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFTrSYvOvR1oQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704408406387?e=2147483647&amp;v=beta&amp;t=nqR14K2P2k35YMPJjzY2M6DR8P7iYTKLlsz9JS50pWE"
linkedin_topic: Data Science
learning_paths:
  - '[[Build Your Wolfram Language Skills]]'
prev_courses:
  - '[[Wavelet Analysis- Applications with Wolfram Language]]'
next_courses:
  - '[[Interacting with Blockchains in the Wolfram Language]]'
path_nav: '[{"path":"Build Your Wolfram Language Skills","position":5,"total":8,"prev":"Wavelet Analysis- Applications with Wolfram Language","next":"Interacting with Blockchains in the Wolfram Language"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - skill/wolfram-language
  - skill/financial-modeling
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Modeling%20Market%20Prices%20Using%20Stochastic%20Processes%20with%20Wolfram%20Language.md)

![Modeling Market Prices Using Stochastic Processes with Wolfram Language](https://media.licdn.com/dms/image/v2/D560DAQFTrSYvOvR1oQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1704408406387?e=2147483647&amp;v=beta&amp;t=nqR14K2P2k35YMPJjzY2M6DR8P7iYTKLlsz9JS50pWE)

# Modeling Market Prices Using Stochastic Processes with Wolfram Language

> The Wolfram Language contains a complete collection of stochastic processes and statistical distributions that can be fitted to a wide array of market phenomena. This course illustrates this by explaining the modeling of stock prices, portfolios, index returns, bonds, option prices, exchange rates, and conditional risk using stochastic processes such as the ARCH process, vector-valued time series,

> [LinkedIn Learning](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language) | 57m | Advanced | 1K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**1. Stochastic Processes**](#1-stochastic-processes) (1 videos)
  - [Stochastic processes](#stochastic-processes)
- [**2. Financial Data Function**](#2-financial-data-function) (1 videos)
  - [Financial data function](#financial-data-function)
- [**3. Time Series Model Fit**](#3-time-series-model-fit) (1 videos)
  - [Time series model fit](#time-series-model-fit)
- [**4. Differences**](#4-differences) (1 videos)
  - [Differences](#differences)
- [**5. MapThread**](#5-mapthread) (1 videos)
  - [MapThread](#mapthread)
- [**6. Hyperbolic Distribution**](#6-hyperbolic-distribution) (1 videos)
  - [Hyperbolic distribution](#hyperbolic-distribution)
- [**7. Ito Process**](#7-ito-process) (1 videos)
  - [Ito process](#ito-process)

### 1. Stochastic Processes

[↑ Back to Table of Contents](#table-of-contents)

#### [Stochastic processes](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=0)** Today, what I'm going to talk about is stochastic processes. And if you go into our data analysis here, you will see that we cover a lot of this. Okay. So we have all the usual type of statistical analyses. So you can do location [[Statistics]], dispersion statistics, you know, look for variance, shape, the overall structure of the distribution. We've also got spatial point statistics. This won't be relevant to us now, but it is important in some aspects of finance, particularly, for instance, if you were doing risk analysis and wanted to find out which sections of the country or a state or whatever were more inclined to be risk-sensitive. The hint, of course, is that it's going to be determined very much by the zone you live in and your zip code. But we have that. And in addition, what we're going to be looking at though is some data smoothing. We'll be going to be looking at things like moving average and applying that to our data in order to get rid of small statistical variations and try to build models. And then we'll be doing hypothesis tests on the data to check what type of distribution is appropriate for them. And then later on, we're going to be doing some data fitting as well.
>
> **[1:32](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=92)** But in addition to all of this, we also want to look at distributions. Okay. So if we've got here. Here we go. [[Probability]] and statistics. Okay. So we have, by far and away, the largest number of distributions of any program, even more about three to four times as many as in the program, and all of them have this form, they're like normal distribution, t-distribution, and so on. Now, one of the other things we're going to be looking at in this is random processes, that is, stochastic processes. And the reason for this is that you may want to look at a number of stocks together and compare their overall behavior. So you'll want to do model fitting for that. And that means that you're going to be looking at some type of process, since [[Financial Data]] is invariably time-stamped, we'll be looking at time series processes. As you can see from previously, there's a lot of stochastic processes here. We've got normal parametric ones that is to say, hey, there are well-defined mathematical formulas for them, ones that can be derived from them, various things like the white noise process, which is built into the error for many of the models, and other things such as Markov processes where you've got previous dependents.
>
> **[3:07](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/stochastic-processes?u=76281980&t=187)** The time series processes we'll be looking at will be primarily things like autoregressive integrated moving average and ARCH type, ARCH and GARCH-type processes because we're interested in variance. So I'll discuss each of these as we meet them. First of all, I think this is an example I've given beforehand, but just to sort of emphasize how, you know, what the things we're going to be doing and the sort of general structure. So first, we're going to call in the data. Then, we'll have to sort of smooth the data to some effect in order to apply models to it. So we're going to be looking at the FinancialData function.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Probability]] (1), [[Financial Data]] (1)
> **Env Vars:** arch (2), garch (1)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** find (1)


### 2. Financial Data Function

[↑ Back to Table of Contents](#table-of-contents)

#### [Financial data function](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=1)** And this allows us to access quite a wide range of [[Financial Data]]. Now, what I'm going to be using here is I just want to get the values themselves. So normally, now when you call upon the FinancialData function, what happens is that it will return often a time-series object. And what we want to do in this particular case, however, is just get the raw data. So I will be using a method here called legacy which just gives us the lists of values. So we're going to be looking at Starbucks, its closing values. We're going to be going from the beginning of 2013 up to the beginning of August. And they're going to be weekly values. I only want the values here. And when we evaluate this, we kind of get this set of values. Now I want to build a model to this. So basically, I have to induce regularity into my data. We want to make sure that we're only looking at business days starting at the beginning of 2013. And I'm going to be rounding them off to the next day. Then I take that data and I'm going to form a time series object from it. Starting at, well, this starting date that was given here and then going up to the end here, which is, so it's taking in this data, it automatically looks at the data, finds what the end date is,
>
> **[1:37](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/financial-data-function?u=76281980&t=97)** and then is looking at each next week value. So what we're going to get now is this time-series object. So this is really a form of [[Object-Oriented Programming (OOP)|object-oriented programming]]. It's a way of storing your time series data. And also, like most object-oriented [[Forms]] of programming, I can ask for properties about it. So I could take this thing here. Okay. Let's take it here, for instance, and say, you know, "Tell me about yourself. What type of properties do you have?" Okay. And it'll come back and say you can ask these types of queries. It'll accept these type of functions. So what does the result of all of this look like? Let's plot it up. And you can see everything that I'm doing here is essentially like half a line of code. Very simple, straightforward. You think of the function that's going to apply to the data or the previous output, and you just keep piling it on in a consecutive manner. So I've got my data. This is what it looks like and we want to now analyze it, try to find out what type of model would fit it. So once I've got a time series object, I can use the function TimeSeriesModelFit. Let's have a quick look at it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Financial Data]] (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1), [[Forms]] (1)
> **CLI Commands:** make (1), find (1)
> **Analogies:** for instance (1)


### 3. Time Series Model Fit

[↑ Back to Table of Contents](#table-of-contents)

#### [Time series model fit](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=0)** So TimeSeriesModelFit is more or less what it says it is. It says if you've got some type of data, I'm going to fit a time series model to it. Now you can specify the model in advance. There's a shorthand notation for this. For instance, this would be for an ARMA, Autoregressive Moving Average, or you can let it determine it itself. In this particular case, it comes back and it's an ARIMA, Autoregressive Integrated Moving Average. Okay. So there's only one order of difference that's taking place here. Now once I've got this estimated process, I can then use it to forecast and I'm going to forecast four weeks ahead. Remember, our data here is weekly data. So I can then do that and I get a forecast, which in itself is another TemporalData object. And then I can join the two together, the time series and the temporal data and see what type of estimation it's giving us. So here's the previous history and there's the future that it's predicting. So as you can see, this is a very simple, straightforward process. Going straight from the data, the actual values themselves, in a few lines, I was able to picture the data, work out what is the underlying process,
>
> **[1:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=96)** make a prediction and plot up the two results together. Now we're going to look at doing tests of data. So in this particular case, I've, you know, already downloaded the data here for you. And it's data for throughout 2015 for five companies: [[Google]], [[Microsoft]], [[Facebook]], Apple, and Intel. Okay. So what does that look like? Okay. So you can see that there's a bunching here except for the Google prices up there. And what I want to do now is look at a really popular theorem or result that if you read in your financial textbooks, it would say that if I looked at the returns or the log returns of a company, that they should be able to be fitted by geometric Brownian motion and should be normally distributed. So is that the case? Well, it turns out that it is indeed the case if their volatility isn't too great. What I've done here is choose, all of these stocks come from the technology industry and they suffer from quite high volatility. So first let's get our log returns. Again, you can see, very simple, I just get my prices, I ask for their values.
>
> **[3:09](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=189)** I take the log and the differences of the logs. So the differences of the logs of the prices is the log returns. Okay. The next thing I want to do, I've suppressed this output. We don't really want to see this. It'll just be too long. Basically, 252 values. What I want to do then is take that value and then estimate the distribution. Now remember, we've got five different stocks here. And we've got their values over a year. So basically, if you can see here, we've got, these are values that have, as I go at each point in time, I'm going to have an array of values, five different stock values. So what we want is a multivariate distribution. Now according to theory, it's probably going to be the multinormal distribution. Let me just, you know, let's have a look at what this thing is here. Well, first let's just, what is a multinormal distribution? So maybe it is what it sounds to be. It's the multidimensional expression of a normal distribution. And so you'll have a mean which is a vector, and you'll have the covariance matrix. So it'll be a mean of length five and a covariance 5 x 5 matrix. So that's what this means. And if we have a look at it here, we can take this out
>
> **[4:46](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=286)** here and just look at what this thing is itself. And we see that this is the mean and this is a 5 x 5 covariance matrix. Now you'll notice that all these values are unknown. What I'm going to do is try to estimate them. And so I put in the log returns, specify the type of multinormal distribution that I want and it will work out the parameters. And we get this result. Now the question is, is this a good fit or not? So what we can do is apply the Kolmogorov-Smirnov test. So this is one of the many statistical tests that you can apply. And let's see what it says. So I just want the short-test conclusion. Should we reject or accept the fact that this is a good fit? And it says that not a good fit. So what would be a good fit? Let's then look at the multivariate t-distribution. So this is really an extension. This is the student t-distribution that we're looking at, but the multivariate version, and it has an additional parameter, mu here which is the number of degrees of freedom. So I'm going to estimate this now instead. And so it'll give me the values not only for the mean and for its covariance matrix, but for the number of degrees of freedom. We can apply the same test.
>
> **[6:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=380)** And it comes back and says, do not reject. So the point of this exercise is to show that normally you just make the assumption, well, the multivariate normal distribution should work fine, and let's go for it. As it turns out, it doesn't. Especially when you're constructing portfolios. So if we took these values, which you can see that Google is really upsetting the whole group here. The combined effect is that it's no longer can be fitted by multinormal distribution. Is this important? Yes, it's very important. This was a common assumption all the way up to the, the Financial Crisis of 2008. And the reason was that everyone assumed normality, even out to quite long distances in time. And so this was an invalid assumption, as it turned out. So I got to look at the same five stocks again, and I'm going to go in and do some more analysis with further hypothesis tests and also filter the data. Try to get to the heart of what's going on here. We know that it is the variance that's causing the problem. Okay. So these are the symbols. This is the prices. Now what is the... So what I'm doing here is I'm saying this is a table. So it is a list of results. And I'm looking at each stock from each of the symbols here.
>
> **[7:55](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/time-series-model-fit?u=76281980&t=475)** So the first stock is going to be Google, then Microsoft, and so on. So we've got a list of five sub-lists, where each sub-list is giving us the prices throughout to 2015 for each of these stocks. What is the dimension of this thing? Okay. There are five stocks. Over a year, 252 business days. And the 2, what is this 2 referring to? Well, I'm getting both the dates and the prices. So if I take a particular one, this says here, let's look at the prices, let's look at the fifth one, which is for Intel, and let's look at the third date value. Here it is. So you can see, everything here is a pair, a date and a value. So when I now go into the prices here and I'm saying let's look at all the different stocks and let's look at all of the pairs, but I'm only going to take the second element in each pair. All right. The second element. So I'm just looking at the values here. And again I'm going to get the log returns in the same way. I'm going to be taking the differences of the logs. But the differences now have to be a little more subtle because we're not just looking at single values as we were beforehand, we're looking at a very large matrix of pairs. So I'm looking at a matrix and therefore the differences are going to be here. I'm looking at the differences in the columns.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Microsoft]] (2), [[Facebook]] (1)
> **Definitions:** is a  (9)
> **CLI Commands:** make (2)
> **Env Vars:** arma (1), arima (1)
> **Analogies:** for instance (1), picture (1)


### 4. Differences

[↑ Back to Table of Contents](#table-of-contents)

#### [Differences](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=0)** If we go and look at the differences function, it allows us to look at a sequence of differences as we go down further into the data. So if we've got two-dimensional data here, then looking at differences {0, 1} finds the differences between the columns, that is, the differences in the values. And we can now look at that log returns. We'll see we've got for five stocks. And because we've taken differences, it's 252-1. Now what I want to do at the next stage is just slightly complex. What I want to do basically here is a bit of smoothing. And the first notion should be what's the cause of the problem here? The cause of the problem is the high volatilities and the range in volatilities. Now there is a stochastic process that allows us to look at this. There's the ARCH and the GARCH processes. In particular, if we look at the ARCH process, this is the autoregressive conditionally heteroscedastic process. Okay, so a big mouthful. The main point here is it's conditional. It's a conditional expectation, given the previous values in the sequence of values of the series that we're looking at. So this is essentially the variance in which we've got a common factor
>
> **[1:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=98)** and then weights, so parameters associated with the previous values as we travel backwards in time. So I want to extract these values. Okay. So I'm saying, let's again set up a table. And what I'm going to do is look at the log returns for each of the five stocks. And for each of those now I'm going to find the process parameters, assuming that it's an ARCH process. So what's this find process parameters. It is what it sounds like. It says, assuming I've got this model, let's look at the data, and let's find the underlying process. Now when it does this, it returns a rule. It says, for that process parameter, lambda, it's going to be replaced by, if you replace it by 0.7, you will get the appropriate parameter value. So this is a rule here. And what I do next is I say, okay, what I'm going to do is wherever I see this rule, I'm going to substitute it in. Those values for kappa and alpha. Okay. And I'm going to assign them to k1 and α1. So for each log return for each of the stocks, I'm going to get a fit according to the ARCH process, or rather a fit for the variance.
>
> **[3:13](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=193)** Now this allows me to take the prices. So this is what's called a pure function or a lambda function. For those of you who have done Haskell or computer science, you would know all about this, of course. Okay, so this is essentially a pure function. And what the pure function is doing is saying let's look at the last values. Remember, everything was in pairs. So those are the prices. And then I'm going to standardize them. So what exactly am I doing here? I'm taking this kappa and alpha by the square of the values. Okay. So remember, this is, essentially it's saying this is the variance. And then I'm taking the square root of it, which is the standard deviation. So all I'm doing is standardizing everything here by dividing by the standard deviation. Then I smooth it by applying a moving map. The moving map here essentially says let's join the prices together. So if I've got a window of length 2, it really is three events. So I'm joining together everything in triples. So the combination of these two should remove any peculiarity as a result of the change in the variance, not only the size of the variance, but also as I move from one stock to another. And then
>
> **[4:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/differences?u=76281980&t=287)** because I'm doing this, what I want to do at the moment, remember, is I've got a 5 x 21 process here. I want to take the transpose of it. So I've got 251 points, with a five-dimensional value associated with each of them. Okay. Sorry. Now because I've got differences of order 2, it's 249 x 5. So I can now plot this stuff. Again, I'm going to transpose it back. So I'm now looking at each of the stocks as I, again, I'm going to be doing this function called MapThread.

> [!info]- Semantic Content
>
> **Env Vars:** arch (4), garch (1)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **Versions:** 0.7 (1)
> **Tools:** notion (1)
> **Prerequisites:** set up (1)


### 5. MapThread

[↑ Back to Table of Contents](#table-of-contents)

#### [MapThread](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=0)** So remember here, what we're doing is that we've got matrices and lists of things. When you want to apply a function individually over a lists of sub-lists, and you just want to say, so I've got a group of sub-lists. In the first sub-list, they're all a values, in the second sub-list, they're all b values. And what I would like to do is take the function and apply them to the corresponding elements in each sublist. So I'm going to have f of the first elements in each of them, a1 and b1, and then f of the second elements, and so on. So it's a way of applying a function down and then joining the elements together. So you're doing two operations; you're mapping and threading and hence the name. And that's what we're doing here. Because remember this is a list of sub-lists. And I'm doing it for each of the stocks. So what I want to do is look at the quantile plot for each of the stocks. Okay. And I'm going to label it with the names of each of the symbols. Now why do I want to do that? The quantile plot, remember, is really to look at data to make sure that it has the same distribution as a normal distribution. I could further specify this to change that. But really we're looking at to what extent is it the case that each of them separately satisfies a normal distribution? Well, you can see around the central values it does,
>
> **[1:38](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=98)** but in extreme values it doesn't. And again this goes back to the whole point about what happened during the financial crisis. We had options which assumed normality. So because that happened, they thought that the [[Probability]] of these events occurring was out at 5 sigma or something like that. And in fact, it was much more common. And so what was supposed to be one in the century event was going to happen every decade, and it'll happen again if we don't regulate these industries. So we can see here that Intel actually seems to fit a normal distribution, but the [[Representational State Transfer (REST)|rest]] don't. And then we can check this. Putting the data in and just check using the BaringhausMenzeTest, if I pronounce that correctly, and see what the value is, and it comes back with one of these object-oriented things, which I can then make queries to. And the first query is, let's look at the results of this test. And it has a p-value of zero. In other words, you can reject this. So for each of these, it's saying a normal, well, really, for most of them together, the exception of Intel, they don't satisfy that. And so let's now estimate for each of these stocks the distribution whether it's multinormal or multivariate t-distribution.
>
> **[3:20](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=200)** Okay. And now we can ask about, you know, the key information criteria for each of these two distributions. Okay. So here's the definition. We also have this built-in, by the way, for all types of statistical tests. But just again, you know, here is the distribution, here is the formula for it, depending upon the distribution you use and the data and the number of parameters, k. All right. So what I'm using here is I'm putting in the data and the distributions. And you might ask, why have I got 5 + 15 and 5 + 15 + 1. All right. If we go to the multinormal distribution, there's five values in its vector mean. And there's going to be 15 distinct values in its covariance matrix. Why 15? Well, it's a 5 x 5, shouldn't that be 25 values? No. Because it's a covariance matrix, it's symmetric. So that means that the values in the ij position will be the same as the values in the ji position. So consequently, I'm only adding the first five and then the second four, and then the last three and two and one. And if I add up the sum of the first five values, I get 15. So there's 20 values for the multinormal and an extra one for the degree of freedom.
>
> **[4:56](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/mapthread?u=76281980&t=296)** And we can now see what we get for these. And you can see that the AIC for the multivariate t-distribution is significantly smaller than the other one. And that's why we should go with that for the distribution. Now, another interesting thing is that you would think, well, at least for index returns, okay, they, almost by definition, because they're set up in such a way as to assure a high degree of regularity, they should satisfy their normal distribution, are there other distributions that they might satisfy?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (1), in other words (1), means that (1)
> **CLI Commands:** make (2)
> **Env Vars:** aic (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)


### 6. Hyperbolic Distribution

[↑ Back to Table of Contents](#table-of-contents)

#### [Hyperbolic distribution](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=0)** Well, we have a very general distribution called the hyperbolic distribution. Okay. And as you can see here, it has four parameters: A location parameter, a scale parameter, the shape, and the degree of skewness. Things like shape and skewness are fixed for a normal distribution, but if you allow them to vary, then you get a wider range of distributional aspects. Now we know a lot about this. We know a lot about all of these things because they are defined exactly inside Mathematica. This is quite different because we're both a symbolic as well as a numeric program. Then we can write in the actual mathematical formulas for this. This is quite distinct from numeric programs like R and MATLAB, and the [[Representational State Transfer (REST)|rest]]. What they use instead is some type of Maclaurin approximation to the, around the mean. And this is not very accurate. After you go out, you know, away from central values, the errors are going to get quite large. But we can calculate this precisely to any degree of accuracy. And in fact, we know everything about it. So for instance, I can find the formula for the moment generating function. You can see it. So it's an exponential formula taking into account all of the parameters.
>
> **[1:39](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=99)** Okay. So let's now look at the same approaches beforehand. I'm going to be getting the data for the index, the S&P 500, closing prices since 2005. And again, I'm going to take the differences of the log. So it's a log. First, I get this thing which is just a list of values, and then take the differences of log to get the log returns. And I can then say, well, let's fit this to the the normal inverse Gaussian function. The reason for us more or less taking the normal inverse Gaussian function, as opposed to just the Gaussian or normal distribution, is it allows a better fitting for different values of shape and skewness and the rest, but it also takes into account a wider domain of values. So, you know, basically you're not restricted to, you know, you can actually look at quite a range of real values as opposed to, say, fractional or rational values here. So I can do the fit here and find the estimated distribution here. So we can then find all of the parameters. And in fact, let's actually get... So as I said beforehand, I can get the moment
>
> **[3:14](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=194)** generating-function, I can also get the [[Probability]] density function for this distribution. And I can take the data and stick it into a histogram and plot the PDF of the distribution and compare the two. Put them in the same plot. And you see it's a very good fit for the data. So you can see that the NRG distribution is an even better fit than the normal distribution for index data. And a similar type of result now. So what I want to do if I do have, say, tech stocks like Apple, and another approach here is to look at, say, the variance-gamma distribution. So there were a number of papers, particularly in the beginning of the 21st century, that looked at this as a big and so I think it was his name, Dess. That's a very famous Indian financial mathematician, you know, showed quite strongly that how the variance-gamma distribution is a good fit. It's also a good reason to have something like this because we know so much about it. We've got a mathematical formula for it, and we know all of the characters, you know, all of the values for it and how to calculate it quite precisely. It also allows us to fit for, so it mentions Madon and others here.
>
> **[4:52](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=292)** So the variance-gamma distribution is basically what it's saying here. It takes into account second-order differences in a way that other distributions don't. You know, you can also apply a lot of other mathematical tricks to it, which is good if you then want to use it as a basis for option pricing. Okay. So same thing again. Let's get the data over a decade here. So we've got quite a lot of data, okay, 2,514 points. And I now want to fit that data to a variance-gamma distribution. You can specify when you're doing your estimated distributions, how you'd like the parameter fitting to be done here. Okay. So you've got a parameter estimator. It'll generally use the maximum likelihood function. But you can apply others such as the method of moments. Okay. In fact, there are five different ways you can go about doing this. Mathematically speaking, they're almost identical, but numerically speaking, of course, they're quite different. So, well, I can we look at this now and so I get an estimate of the values. And I can do the same trick as beforehand. Do the PDF of this estimated distribution with the PDF histogram. And what do we get? Okay.
>
> **[6:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=383)** So for this, as I said, the variance-gamma distribution is those that have extreme peaks around the median. We can find other aspects of it, though, that fit in precisely with the observed values in terms of the mean and the median. And finally, we can show, looking at this distribution, here is a list of 100 of the random values for the estimated
>
> **[6:59](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=419)** distribution. So here what I'm doing, however, is I'm generating first an ARMA[3,2] process. So this is autoregressive moving average. Let's again look at this just in case you've forgotten what one of these things look like, okay? So this is a very common type of process. Basically, it says that your current value is going to depend upon your previous values with coefficients, the a coefficients here, and is going to also depend upon the, the noise, okay? The noise itself will build up over time. Why is this the case? This is the case primarily, though, when these models, these are called the box [[Jenkins]] models were first derived and understood, it wasn't realized that they were reflecting an even deeper thing, which is chaos theory or a sort of you have got as a result of Ito processes, that the errors that are left over don't disappear, they come back into the stochastic process and more or less build up over time. So we have to take into account the errors in the previous time and their coefficients. And that's what an ARMA process does. So I'm going to generate some random data for that, okay? And again it'll be one of these TemporalData objects. Now I'm going to fit.
>
> **[8:35](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=515)** I won't even tell it that it's an ARMA process and let's see what it comes up with. And it says yes, it's an ARMA[3,2] process. And I can ask queries about this here. You know, what was the criterion for selection of this? It used the AIC criteria that I mentioned previously. Okay. Now, remember, once I've got my time series model, I can ask for it to do a forecast. In this case, let's go 100 days into the future. Okay. And again, it's going to come back as one of these TemporalData objects. Now, what I'd like to do is then visually look at how this prediction is working over time. To get an idea for that, I should look at, take the forecast and ask for its mean square errors. Okay. So this is essentially it's standard deviation, standard errors. Now, since they squared it's really the variance. And so basically, because this is a list of values, I want to map this function onto it so I now get the square root of the underlying process as we move forward in time, okay? So remember this is a TemporalData object. I can apply this map function onto each of the elements, so long as it's a time series map.
>
> **[10:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=608)** So it's preserving the structure of the forecast. So I'm going to get another TemporalData object. But these are the standard deviations or standard errors, to be precise. And what I'm going to do now is join them to the forecast. So there's two ways I can do this: I can take the values for the forecast and add the errors, this is really the dot product of each of them and adding them together or I can subtract them, dot product where the second element which corresponds to the standard errors is being subtracted. So these will give us two bands, okay? These bands are the error bands in our model. So now I can join together... I'm going to have a time series window in which I put the data, and the forecast, and their bands, and this is also, you know, just a bit of making it look pretty and the rest. This is the main part of it. Let's take the data. I'm going to choose a window over basically the same period of time as the forecast and the errors. Remember, the forecast is only over the last, you know, 100 or so. So if I take from the 800th to the 1000th, I'm going to be looking at 100 values before the forecast and the 100 values up unto it. And we can then...
>
> **[11:40](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=700)** So this is its behavior, this is its prediction, and these are the error bands. All right. The next thing I want to look at, we've got just a couple more is looking at the ARCH process. So this is going back again to something very similar we were talking about beforehand, the autoregressive conditional heteroscedastic process, because it's related to the variance and an estimation of the variance. So I'm going to be looking at the returns. And I've also just put the data here. There's a lot of data here. And this is what it looks like because we're looking at returns not actual prices. And what I want to do here is break it up into two parts, okay? I want to build a model from the first part and then use it to predict values for the second part, somewhat like what we do with machine learning. So I'm going to go from the starting point up to the end of 2011. And then from 2012 up to, you know, the beginning of 2014. So now what I do is I take the first one and let's just, both of these remember. So time series window is saying, well, let's take a subset of the data but return it
>
> **[13:15](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=795)** if it's a time-series object, return it as another time-series object. So it allows us, you know, to basically just choose subsections of the data. Now remember, once I've got it in this form, I can apply the time series model fit. Say let's fit an ARCH process. Okay. And here it is. It's going to be a second-order ARCH process. And in fact, what does it look like? Here's the best-fit model. It has a constant and two parameters. So it's a second-order process. And I want to separate out these parameters. So I assign them. Basically, I rip off this bit here says let's rip off the head of this thing and just return it as the constant and the two ARCH parameters. Now I want to find the conditional value at risk. Just for the second part of the time series with a significance level of 95 percent. So let's set α = 0.05. And what I'm going to be doing now is getting a quantile measure of 95 percent, 1-α, for the standard normal distribution. Remember that your VaR is actually a measure of the extent to which
>
> **[14:49](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=889)** you go, you know, exceed the quantile. So what I'm going to be doing is then taking a pure function that is the product of, because this is the conditional value at risk, then I'm going to be using the conditional standard deviation, okay, obtain from the ARCH process. So the ARCH process, remember, is given by these two constants. And what I'm doing here is multiplying by the square of the values in the last half of the data. But this would be the variance. And I want the standard deviation. So I take the square root of it multiplied by the quantile because it's a VaR that we're assessing here. So you can see that the conditional VaR is just the product of the two. And then I'm applying a moving map to the data here. So I'm also smoothing it out over every pair of values. Okay. And so we get again, remember this was a time series object and applying a moving map to it will return another time series object. And then, I can compare and see how well it works, okay? So basically, I'm going to be looking at the last bunch of returns and their corresponding conditional VaR.
>
> **[16:23](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=983)** And this gives us the result. So basically, this is just taking the last two values, putting them into a date-list plot and then doing, you know, basically, the same type of plot thing that I had beforehand to just make it look sort of pretty. But this is just a bit of visualization and, you know, that would be a separate issue unto itself if I were to cover it. Okay. So then we've got, again, I'm going to do a time series fit. And again it's going to be for pairs of values. So I've got two exchange rates here; the euro to the US D and the British pound to the USD. And here's the data. What does it look like? Now, because these are already time series, I can try to estimate the process using an ARMA[1,1]. Okay. So remember, this ARMA[1,1] is going to have, well, I guess, is going to have one autoregressive and one moving average parameter. So we're basically saying, you know, what I'm looking at here is I'm only going to go back. So the current value is only going to be dependent upon each previous value, so it's a strict Markov process but plus the error. So I can evaluate that.
>
> **[18:03](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1083)** Now you'll notice it looks a bit confusing at first. Let's separate it out. This is a vector ARMA model. In other words, because I'm looking at two values together, then it's trying to really talk about two processes simultaneously. So they will have two constants. Okay. You're going to have a constant in your process. And then I'm going to have a vector value. Rather, a matrix, a 2 x 2 matrix for the, corresponding to the autoregressive component. So here's the matrix for the autoregressive component, and here's the corresponding matrix coefficient for the error component. Now you might say, why a matrix? Because the dot product of a vector with a matrix gives us another vector. And this is the two-dimensional vector which represents both of these two exchange rates. And then the rest is, if you've got a process, it's going to have some variance. So I've got that. Then once I've got the estimated process, I can use it in conjunction with the dates to do a forecast. And I'm going to go 26. So, you know, basically a half a year into the future, which is really a bit excessive.
>
> **[19:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1176)** But at any rate, we've got this TemporalData object, so I've got my original rates. And what I'm doing is looking at its two-path components for each of the two processes. And putting the lot together gives us this. And at the end, you can see the predictions, which is sort of downwards slopes at that time. The next two are a bit technical.
>
> **[20:08](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/hyperbolic-distribution?u=76281980&t=1208)** If you're evaluating everything as this goes along, remove the alpha. Remember, we use the alpha repeatedly in various types of model process estimation. So and it occurs here. Yes, α0. So what I'm doing is getting a model for the evolution of interest rates, okay? So we've got an Ito process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (4), [[Probability]] (1), [[Jenkins]] (1)
> **Env Vars:** arma (7), arch (6), pdf (3), matlab (1), nrg (1)
> **Definitions:** is a  (6), is an  (1), in other words (1)
> **CLI Commands:** find (5), make (1)
> **Analogies:** for instance (1), such as (1)
> **Versions:** 0.05 (1)


### 7. Ito Process

[↑ Back to Table of Contents](#table-of-contents)

#### [Ito process](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=1)** Now these are stochastic processes. Stochastic processes or the stochastic [[Calculus]] is an extension of normal calculus. So for those of you who didn't do lots of maths, you most probably thought that was terrible enough. But now there's this, which is an extension. So this part you will recognize. Okay. It says this gives us how the process is changing with respect to time. But remember, it has noise or error and this noise or error doesn't disappear. This is one of the understandings of Chaos Theory. It is folded back into the process as it evolves. In a way, we already knew this when we studied partial differential equations. One of the methods for solving a partial differential equation, and in the same way a stochastic differential equation is to build a frame, to build a [[Mesh]], and the whole thing expands out like, you know, a crisscrossed triangle as you move through time. So you need a component which grows with the noise, okay? So this is the differential of the underlying Brownian process which is driving the whole thing. It's called the driving process. And this its coefficient is called it's diffusion. And it really, again, derives from the original solution to these problems which are like basically diffusion equations. Not all of them, but in many ways they have many
>
> **[1:36](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=96)** characteristics in common. Okay. So there are many ways of representing this. What we're going to use is this approach. I'm going to write the stochastic differential equations. The expression we want to solve for, what are the underlying variables, time, it's time-dependent, and what is the driving process. So let's go and have a look. So this is a multivariate process with lots of parameters. And then these things here are the initial values. So we've got the differential equation for the process itself. And you can see its mean reverting. You can see that the rate of change of the process, alpha, is also mean reverting with a mean. So these are the means theta, psi, and beta. Okay. So again, this is the process that we're trying to describe with this, the interest rate. And now this bit here really it corresponds to this, is saying what is the underlying process here. Well, there's three, there's the interest rate, there's the rate of change, alpha, and there's the volatility, sigma. And I give them initial values as well. Time. All of this is a function of time, as you can see here. And the driving process is the same throughout. This is the reason it can be solved. They're not separate. They are, you know, you can have extended versions of this as well. Okay. So let's take one of these,
>
> **[3:11](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=191)** you know, a special case of this model. Let's generate a random function for this. So it's going to simulate this. And it's going to do this as the time goes from 0 to 1 in increments of 100. So there are 101 values here, and we'll do it for six different processes. And the method that we're going to use here, there's a lot of different methods that you can use for the solution of the Ito processes, and we list them here, you know, so we've got stochastic Runge-Kutta. For those of you who've done PDEs, the Runge-Kutta method. So this is an extension of this. And a projection function. And this is, you know, you can play around with this. I better make sure I've cleared that. Let's evaluate this and let's do this. And you know, as I do it, I get different values each time. I could fix, putting here a seed so that I get the same values as I, you know, if I wanted to compare them. So a zero coupon bond. Now once you've got interest rates, remember that the formula for your interest rate was e^-rt. Okay. So the process here is, dxt is rtdt. So this is the value for your, this is the differential equation describing your bond. This is the actual value of the bond that we want to evaluate.
>
> **[4:47](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=287)** So it's a function of x which is a function of r, but it's a stochastic process. x is initially going to be zero, it's a function of time, and the r now is going to be driven by this, you know, Chen's model. And so you can actually, you know, it looks like this. I can now feed this in with the parameters going up in increments of 0.02, and I'm going to generate 250 examples here. And the reason I'm doing all of this, so there's a lot of work here, so I want to find out what would be the value of the process at time t. If I've got 250 of these things, imagine, you know, imagine I had, you know, oh God, imagine I had 20 of them? All right. Now, as I take a cut through this process here, at any one time, there's going to be, in this case 20, in this case 250 values. So I want the average value at this time. Now td is a random process. At a particular moment in time, it's a distribution. So that's why it makes sense to ask for the average of that value. And this is what it looks like. This is how it's behaving. But you can model option prices using jump diffusions.
>
> **[6:21](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=381)** So again, so here's the Merton model. I don't want to go into describing all of this, but it involves a jump process which is the compound Poisson process. I'm going to have an error process which is the Wiener process. I'm going to have the volatility here. And you'll notice that the compound process has an arrival rate, lambda, and the underlying distribution is a normal distribution with mean, mu, and variance, not variance, but standard deviation, delta. And the whole thing is going to be a function of time. So what it's saying is I've got this process here and I'm going to transform it. So this is an extremely powerful function that allows you to feed in stochastic processes and find the corresponding process that's transformed, okay, as a result of applying a particular thing here. So for instance, I could have b as a normal Wiener process, but tb(2t+1) is going to be some other type of process altogether. So in the same way, it doesn't make any sense to look at this because there's no name for these things. Okay. We've just invented it. But I can, once I've got this, I can substitute in, this is what, substitute in the values for the parameters and generate five of these.
>
> **[7:54](https://www.linkedin.com/learning/modeling-market-prices-using-stochastic-processes-with-wolfram-language/ito-process?u=76281980&t=474)** So this will be the data, and this is what it looks like. And then I can take slices which, remember, slices really give me, at a particular moment in time, this gives me a distribution. So I can ask for the mean and the variance of this. The idea, of course, is to sample this, say, at time t = 1. Let's look at the smooth distribution there. Again, let's look at this and map it up as it changes through time. All right. So I hope this, this is just merely an introduction. As you can see, there's a lot more. And I concentrated on a number of things, basically, how to get the data, how to smooth the data, how to actually put it, you know, either into a form where we have a time series object that I can then use to do predictions, forecasts with, I can do smoothing using a moving map, and then the introduction of, even the solution of stochastic differential equations that take into account how the noise folds back on itself as you move forward in time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Calculus]] (2), [[Mesh]] (1)
> **Definitions:** is a  (5), is an  (3), is called (1)
> **CLI Commands:** make (2), find (2)
> **Analogies:** imagine (3), for instance (1)
> **Versions:** 0.02 (1)


## Instructor

- [[Wolfram Research]]

## Resources

- Exercise files available

## Skills Covered

- Wolfram Language
- Financial Modeling

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

---

[↑ Back to top](#)